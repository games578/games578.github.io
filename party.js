// ── Party Chat System (Cross-Device via Firebase) ── //
// Uses Firebase Realtime Database — free tier is more than enough
//
// SETUP (one-time, ~3 minutes):
// 1. Go to https://console.firebase.google.com
// 2. Click "Add project" → name it anything → continue
// 3. Left sidebar → "Realtime Database" → "Create database"
// 4. Choose your region → "Start in test mode" → Enable
// 5. Click the gear icon → "Project settings" → scroll to "Your apps"
// 6. Click "</>" (web) → register app → copy the firebaseConfig object
// 7. Paste it below replacing the placeholder values

(function () {

  const FIREBASE_CONFIG = {
    databaseURL: "https://unblocked-games-chat-default-rtdb.firebaseio.com"
  };

  const MY_NAME_KEY = 'mg67_partyName';
  const MY_EMOJI_KEY = 'mg67_partyEmoji';
  const EMOJIS = ['🦊','🐉','🤖','🐺','🦁','🐯','🐸','🦋','🐬','🦄','🐻','🐙','🦅','🐼','🦉'];

  let db = null;
  let currentPartyId = null;
  let messagesListener = null;
  let membersListener = null;
  let partiesListener = null;

  function getMyName() { return localStorage.getItem(MY_NAME_KEY) || ''; }
  function getMyEmoji() { return localStorage.getItem(MY_EMOJI_KEY) || EMOJIS[0]; }
  function saveMyName(n, e) { localStorage.setItem(MY_NAME_KEY, n); localStorage.setItem(MY_EMOJI_KEY, e); }
  function escHtml(s) { return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }
  function timeAgo(ts) {
    const s = Math.floor((Date.now() - ts) / 1000);
    if (s < 60) return 'just now';
    if (s < 3600) return Math.floor(s / 60) + 'm ago';
    return Math.floor(s / 3600) + 'h ago';
  }
  function genId() { return Date.now().toString(36) + Math.random().toString(36).slice(2, 7); }

  function getCurrentGame() {
    if (typeof games === 'undefined') return null;
    const id = window.location.search.substring(1).trim().toLowerCase();
    return games.find(g => g.id === id) || null;
  }

  // ── Load Firebase from CDN ──
  function loadFirebase(cb) {
    if (db) { cb(db); return; }
    const s1 = document.createElement('script');
    s1.src = 'https://cdnjs.cloudflare.com/ajax/libs/firebase/9.22.2/firebase-app-compat.min.js';
    s1.onload = () => {
      const s2 = document.createElement('script');
      s2.src = 'https://cdnjs.cloudflare.com/ajax/libs/firebase/9.22.2/firebase-database-compat.min.js';
      s2.onload = () => {
        try {
          if (!firebase.apps.length) firebase.initializeApp(FIREBASE_CONFIG);
          db = firebase.database();
          cb(db);
        } catch (e) {
          showBodyError('Firebase setup failed. Did you add your config? See party.js comments.');
        }
      };
      s2.onerror = () => showBodyError('Could not load Firebase database SDK.');
      document.head.appendChild(s2);
    };
    s1.onerror = () => showBodyError('Could not load Firebase. Check your internet connection.');
    document.head.appendChild(s1);
  }

  function showBodyError(msg) {
    const body = document.getElementById('partyBody');
    if (body) body.innerHTML = `<div style="text-align:center;padding:32px 16px;color:#ff7c94;font-size:13px;line-height:1.6;">${escHtml(msg)}</div>`;
  }

  // ── Inject party button ──
  function injectBtn() {
    if (document.getElementById('partyBtn')) return;
    const isPlay = !!document.getElementById('gameFrame');
    const btn = document.createElement('button');
    btn.id = 'partyBtn';
    btn.style.cssText = 'background:rgba(0,229,160,0.1);border:1px solid rgba(0,229,160,0.28);color:#00e5a0;cursor:pointer;font-family:inherit;transition:background 0.2s,transform 0.15s;flex-shrink:0;';
    btn.addEventListener('click', openPartyPanel);

    if (isPlay) {
      btn.className = 'btn';
      btn.innerHTML = '🎉 <span>Party</span>';
      const controls = document.querySelector('.controls');
      if (controls) controls.insertBefore(btn, controls.children[0]);
    } else {
      btn.className = 'nav-icon-btn';
      btn.textContent = '🎉';
      btn.title = 'Party Chat';
      const navbar = document.querySelector('.navbar');
      if (navbar) {
        const themeBtn = document.getElementById('themeBtn') || navbar.lastElementChild;
        navbar.insertBefore(btn, themeBtn);
      }
    }
  }

  // ── Panel ──
  function createPanel() {
    if (document.getElementById('partyPanel')) return;
    const panel = document.createElement('div');
    panel.id = 'partyPanel';
    panel.style.cssText = [
      'position:fixed;top:78px;right:16px;width:360px;max-height:580px;',
      'background:var(--bg3,#111827);border:1px solid var(--border2,rgba(255,255,255,0.11));',
      'border-radius:16px;box-shadow:0 20px 60px rgba(0,0,0,0.7);z-index:1100;',
      'display:flex;flex-direction:column;overflow:hidden;',
      'transform:translateY(-10px) scale(0.97);opacity:0;pointer-events:none;',
      'transition:transform 0.25s cubic-bezier(0.34,1.2,0.64,1),opacity 0.2s;',
      'font-family:"DM Sans",system-ui,sans-serif;',
    ].join('');

    panel.innerHTML = `
      <div style="padding:14px 16px 10px;border-bottom:1px solid var(--border,rgba(255,255,255,0.06));flex-shrink:0;">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;">
          <span style="font-size:15px;font-weight:800;font-family:'Syne',sans-serif;color:var(--text,#f0f4ff);">🎉 Party Chat</span>
          <button id="partyCloseBtn" style="background:none;border:none;color:var(--text2);cursor:pointer;font-size:18px;line-height:1;padding:0 4px;">✕</button>
        </div>
        <div style="display:flex;gap:5px;">
          <button class="ptab" data-tab="lobby" style="flex:1;padding:6px 8px;border-radius:8px;border:1px solid rgba(108,143,255,0.35);background:rgba(108,143,255,0.15);color:var(--accent3,#a5bcff);font-size:12px;font-weight:700;cursor:pointer;font-family:inherit;">Lobby</button>
          <button class="ptab" data-tab="create" style="flex:1;padding:6px 8px;border-radius:8px;border:1px solid var(--border2);background:none;color:var(--text2);font-size:12px;font-weight:700;cursor:pointer;font-family:inherit;">+ Create</button>
          <button class="ptab" data-tab="profile" style="flex:1;padding:6px 8px;border-radius:8px;border:1px solid var(--border2);background:none;color:var(--text2);font-size:12px;font-weight:700;cursor:pointer;font-family:inherit;">👤 Me</button>
        </div>
      </div>
      <div id="partyBody" style="overflow-y:auto;flex:1;display:flex;flex-direction:column;"></div>
    `;
    document.body.appendChild(panel);

    document.getElementById('partyCloseBtn').addEventListener('click', closePartyPanel);
    panel.querySelectorAll('.ptab').forEach(tab => tab.addEventListener('click', () => switchTab(tab.dataset.tab)));
    document.addEventListener('click', outsideClose);
  }

  function switchTab(name) {
    const panel = document.getElementById('partyPanel');
    if (!panel) return;
    detachListeners();
    currentPartyId = null;
    panel.querySelectorAll('.ptab').forEach(t => {
      const on = t.dataset.tab === name;
      t.style.background = on ? 'rgba(108,143,255,0.15)' : 'none';
      t.style.color = on ? 'var(--accent3,#a5bcff)' : 'var(--text2)';
      t.style.borderColor = on ? 'rgba(108,143,255,0.35)' : 'var(--border2)';
    });
    loadFirebase(db => renderTab(name, db));
  }

  function outsideClose(e) {
    const panel = document.getElementById('partyPanel');
    const btn = document.getElementById('partyBtn');
    if (panel && !panel.contains(e.target) && btn && !btn.contains(e.target)) closePartyPanel();
  }

  function openPartyPanel() {
    createPanel();
    const panel = document.getElementById('partyPanel');
    panel.style.opacity = '1'; panel.style.pointerEvents = 'all'; panel.style.transform = 'translateY(0) scale(1)';
    loadFirebase(db => renderTab('lobby', db));
  }

  function closePartyPanel() {
    detachListeners();
    const panel = document.getElementById('partyPanel');
    if (!panel) return;
    panel.style.opacity = '0'; panel.style.pointerEvents = 'none'; panel.style.transform = 'translateY(-10px) scale(0.97)';
  }

  function detachListeners() {
    if (messagesListener) { messagesListener(); messagesListener = null; }
    if (membersListener) { membersListener(); membersListener = null; }
    if (partiesListener) { partiesListener(); partiesListener = null; }
  }

  // ── Tab rendering ──
  function renderTab(tab, db) {
    const body = document.getElementById('partyBody');
    if (!body) return;
    if (tab === 'lobby') renderLobby(body, db);
    else if (tab === 'create') renderCreate(body, db);
    else renderProfile(body);
  }

  function renderLobby(body, db) {
    body.innerHTML = `<div style="text-align:center;padding:32px 0;color:var(--text3);font-size:13px;">Loading parties...</div>`;
    detachListeners();
    const ref = db.ref('parties').orderByChild('createdAt').limitToLast(30);
    const handler = ref.on('value', snap => {
      const raw = snap.val() || {};
      const parties = Object.values(raw).filter(p => p && p.active !== false).reverse();
      body.innerHTML = '';
      if (!parties.length) {
        body.innerHTML = `<div style="text-align:center;padding:40px 20px;color:var(--text3);font-size:13px;"><span style="font-size:36px;display:block;margin-bottom:10px;">🎉</span>No open parties yet.<br>Create one and invite friends!</div>`;
        return;
      }
      const myName = getMyName();
      parties.forEach(party => {
        const members = party.members ? Object.values(party.members) : [];
        const isMember = members.some(m => m.name === myName);
        const row = document.createElement('div');
        row.style.cssText = 'display:flex;align-items:center;gap:10px;padding:11px 16px;border-bottom:1px solid var(--border,rgba(255,255,255,0.06));transition:background 0.12s;cursor:default;';
        row.onmouseenter = () => row.style.background = 'rgba(108,143,255,0.06)';
        row.onmouseleave = () => row.style.background = '';
        const img = party.gameImg
          ? `<img src="${escHtml(party.gameImg)}" style="width:38px;height:38px;border-radius:8px;object-fit:cover;flex-shrink:0;" />`
          : `<div style="width:38px;height:38px;border-radius:8px;background:rgba(108,143,255,0.12);display:flex;align-items:center;justify-content:center;font-size:20px;flex-shrink:0;">🎮</div>`;
        row.innerHTML = `${img}
          <div style="flex:1;min-width:0;">
            <div style="font-size:13px;font-weight:700;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:var(--text,#f0f4ff);">${escHtml(party.name)}</div>
            <div style="font-size:11px;color:var(--text2);margin-top:2px;">by ${escHtml(party.host)} · ${members.length} member${members.length !== 1 ? 's' : ''}</div>
          </div>
          ${isMember
            ? `<button data-id="${party.id}" class="pOpenBtn" style="font-size:11px;font-weight:700;padding:5px 12px;border-radius:7px;background:rgba(0,229,160,0.12);border:1px solid rgba(0,229,160,0.28);color:#00e5a0;cursor:pointer;white-space:nowrap;font-family:inherit;">Open</button>`
            : `<button data-id="${party.id}" class="pJoinBtn" style="font-size:11px;font-weight:700;padding:5px 12px;border-radius:7px;background:linear-gradient(135deg,var(--accent,#6c8fff),#4a6ee8);border:none;color:white;cursor:pointer;white-space:nowrap;font-family:inherit;">Join</button>`}`;
        body.appendChild(row);
      });
      body.querySelectorAll('.pJoinBtn').forEach(b => b.addEventListener('click', e => { e.stopPropagation(); joinParty(b.dataset.id, db); }));
      body.querySelectorAll('.pOpenBtn').forEach(b => b.addEventListener('click', e => { e.stopPropagation(); openChat(b.dataset.id, db); }));
    });
    partiesListener = () => ref.off('value', handler);
  }

  function renderCreate(body, db) {
    const game = getCurrentGame();
    const noName = !getMyName();
    body.innerHTML = `
      <div style="padding:16px;">
        ${noName ? `<div style="background:rgba(255,92,122,0.08);border:1px solid rgba(255,92,122,0.2);border-radius:10px;padding:10px 14px;margin-bottom:14px;font-size:12px;color:#ff7c94;">Set your name in the 👤 Me tab first!</div>` : ''}
        <label style="font-size:12px;color:var(--text2);display:block;margin-bottom:6px;font-weight:700;">Party name</label>
        <input id="pcName" type="text" maxlength="40" placeholder="e.g. Friday squad..." value="${game ? escHtml(game.title + ' party') : ''}" style="width:100%;background:rgba(108,143,255,0.06);border:1px solid var(--border2);border-radius:9px;padding:10px 14px;color:var(--text,#f0f4ff);font-size:13px;outline:none;font-family:inherit;box-sizing:border-box;margin-bottom:14px;" />
        <button id="pcBtn" style="width:100%;background:linear-gradient(135deg,var(--accent,#6c8fff),#4a6ee8);border:none;color:white;padding:11px;border-radius:9px;cursor:pointer;font-size:13px;font-weight:700;font-family:inherit;box-shadow:0 4px 14px rgba(108,143,255,0.3);">🎉 Create Party</button>
        <div id="pcErr" style="font-size:12px;color:#ff7c94;margin-top:8px;text-align:center;min-height:16px;"></div>
      </div>`;
    document.getElementById('pcBtn')?.addEventListener('click', () => {
      if (!getMyName()) { document.getElementById('pcErr').textContent = 'Set your name in 👤 Me first.'; return; }
      const n = document.getElementById('pcName')?.value.trim();
      if (!n) { document.getElementById('pcErr').textContent = 'Enter a party name.'; return; }
      document.getElementById('pcBtn').textContent = 'Creating...';
      createParty(n, db);
    });
  }

  function renderProfile(body) {
    const name = getMyName(), emoji = getMyEmoji();
    let sel = emoji;
    body.innerHTML = `
      <div style="padding:16px;">
        <div style="text-align:center;padding:16px;background:rgba(108,143,255,0.05);border-radius:12px;margin-bottom:16px;">
          <div style="font-size:52px;margin-bottom:6px;line-height:1;">${emoji}</div>
          <div style="font-size:15px;font-weight:700;color:var(--text,#f0f4ff);">${name || 'No name yet'}</div>
        </div>
        <label style="font-size:12px;color:var(--text2);display:block;margin-bottom:6px;font-weight:700;">Your name</label>
        <input id="ppName" type="text" maxlength="20" value="${escHtml(name)}" placeholder="Enter your name..." style="width:100%;background:rgba(108,143,255,0.06);border:1px solid var(--border2);border-radius:9px;padding:10px 14px;color:var(--text,#f0f4ff);font-size:13px;outline:none;font-family:inherit;box-sizing:border-box;margin-bottom:14px;" />
        <label style="font-size:12px;color:var(--text2);display:block;margin-bottom:8px;font-weight:700;">Choose emoji</label>
        <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:16px;">
          ${EMOJIS.map(e => `<button class="ppEmoji" data-e="${e}" style="font-size:20px;padding:5px;background:${e===emoji?'rgba(108,143,255,0.2)':'rgba(255,255,255,0.04)'};border:1px solid ${e===emoji?'rgba(108,143,255,0.4)':'rgba(255,255,255,0.08)'};border-radius:8px;cursor:pointer;line-height:1;">${e}</button>`).join('')}
        </div>
        <button id="ppSave" style="width:100%;background:linear-gradient(135deg,var(--accent,#6c8fff),#4a6ee8);border:none;color:white;padding:11px;border-radius:9px;cursor:pointer;font-size:13px;font-weight:700;font-family:inherit;box-shadow:0 4px 14px rgba(108,143,255,0.3);margin-bottom:8px;">Save Profile</button>
        <div id="ppMsg" style="font-size:12px;text-align:center;min-height:16px;"></div>
      </div>`;
    body.querySelectorAll('.ppEmoji').forEach(b => b.addEventListener('click', () => {
      body.querySelectorAll('.ppEmoji').forEach(x => { x.style.background='rgba(255,255,255,0.04)'; x.style.borderColor='rgba(255,255,255,0.08)'; });
      b.style.background='rgba(108,143,255,0.2)'; b.style.borderColor='rgba(108,143,255,0.4)'; sel=b.dataset.e;
    }));
    document.getElementById('ppSave')?.addEventListener('click', () => {
      const n = document.getElementById('ppName')?.value.trim();
      const msg = document.getElementById('ppMsg');
      if (!n) { msg.style.color='#ff7c94'; msg.textContent='Enter a name.'; return; }
      saveMyName(n, sel);
      msg.style.color='#00e5a0'; msg.textContent='✓ Saved!';
      setTimeout(() => renderProfile(body), 800);
    });
  }

  // ── Firebase writes ──
  function createParty(partyName, db) {
    const myName = getMyName();
    const game = getCurrentGame();
    const partyId = genId();
    const party = {
      id: partyId, name: partyName, host: myName,
      gameId: game?.id || null, gameImg: game?.img || null, gameName: game?.title || null,
      createdAt: firebase.database.ServerValue.TIMESTAMP, active: true,
    };
    db.ref('parties/' + partyId).set(party)
      .then(() => db.ref('parties/' + partyId + '/members/' + genId()).set({ name: myName, emoji: getMyEmoji(), joinedAt: Date.now() }))
      .then(() => db.ref('parties/' + partyId + '/messages').push({ author: 'System', emoji: '🎉', text: myName + ' created the party!', ts: Date.now(), system: true }))
      .then(() => openChat(partyId, db))
      .catch(e => showBodyError('Could not create party: ' + e.message));
  }

  function joinParty(partyId, db) {
    const myName = getMyName();
    if (!myName) { switchTab('profile'); return; }
    db.ref('parties/' + partyId + '/members').once('value').then(snap => {
      const members = snap.val() || {};
      if (Object.values(members).some(m => m.name === myName)) { openChat(partyId, db); return; }
      db.ref('parties/' + partyId + '/members/' + genId()).set({ name: myName, emoji: getMyEmoji(), joinedAt: Date.now() })
        .then(() => db.ref('parties/' + partyId + '/messages').push({ author: 'System', emoji: '👋', text: myName + ' joined the party!', ts: Date.now(), system: true }))
        .then(() => openChat(partyId, db));
    });
  }

  // ── Chat view ──
  function openChat(partyId, db) {
    currentPartyId = partyId;
    const body = document.getElementById('partyBody');
    if (!body) return;
    // Deactivate tab highlights
    document.querySelectorAll('.ptab').forEach(t => { t.style.background='none'; t.style.color='var(--text2)'; t.style.borderColor='var(--border2)'; });
    const myName = getMyName();

    body.innerHTML = `
      <div style="flex-shrink:0;border-bottom:1px solid var(--border,rgba(255,255,255,0.06));background:rgba(108,143,255,0.04);">
        <div style="display:flex;align-items:center;gap:8px;padding:10px 14px;">
          <button id="chatBack" style="background:none;border:none;color:var(--text2);cursor:pointer;font-size:13px;padding:0;font-family:inherit;white-space:nowrap;flex-shrink:0;">← Back</button>
          <div style="flex:1;min-width:0;">
            <div id="chatTitle" style="font-size:13px;font-weight:700;color:var(--text,#f0f4ff);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">Loading...</div>
            <div id="chatMembersBar" style="font-size:11px;color:var(--text2);margin-top:1px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;"></div>
          </div>
          <div id="chatActionBtn"></div>
        </div>
      </div>
      <div id="chatMsgs" style="flex:1;overflow-y:auto;padding:10px 14px;min-height:220px;display:flex;flex-direction:column;gap:1px;"></div>
      <div style="display:flex;gap:8px;padding:10px 14px;border-top:1px solid var(--border,rgba(255,255,255,0.06));flex-shrink:0;">
        <input id="chatInput" type="text" maxlength="200" placeholder="Say something..." style="flex:1;background:rgba(108,143,255,0.06);border:1px solid var(--border2);border-radius:9px;padding:8px 12px;color:var(--text,#f0f4ff);font-size:13px;outline:none;font-family:inherit;" />
        <button id="chatSend" style="background:linear-gradient(135deg,var(--accent,#6c8fff),#4a6ee8);border:none;color:white;padding:8px 16px;border-radius:9px;cursor:pointer;font-size:13px;font-weight:700;font-family:inherit;flex-shrink:0;">Send</button>
      </div>`;

    document.getElementById('chatBack')?.addEventListener('click', () => { detachListeners(); currentPartyId = null; switchTab('lobby'); });

    function sendMsg() {
      const inp = document.getElementById('chatInput');
      if (!inp || !inp.value.trim()) return;
      const text = inp.value.trim(); inp.value = '';
      db.ref('parties/' + partyId + '/messages').push({ author: myName, emoji: getMyEmoji(), text, ts: Date.now() });
    }
    document.getElementById('chatSend')?.addEventListener('click', sendMsg);
    document.getElementById('chatInput')?.addEventListener('keydown', e => { if (e.key === 'Enter') sendMsg(); });

    // Listen to party metadata
    const partyRef = db.ref('parties/' + partyId);
    const ph = partyRef.on('value', snap => {
      const p = snap.val(); if (!p) return;
      const members = p.members ? Object.values(p.members) : [];
      const titleEl = document.getElementById('chatTitle');
      const membersEl = document.getElementById('chatMembersBar');
      const actionEl = document.getElementById('chatActionBtn');
      if (titleEl) titleEl.textContent = p.name;
      if (membersEl) membersEl.textContent = members.map(m => m.emoji + ' ' + m.name).join(' · ');
      if (actionEl) {
        if (p.host === myName) {
          actionEl.innerHTML = `<button id="disbandBtn" style="font-size:10px;padding:3px 10px;border-radius:6px;background:rgba(255,92,122,0.1);border:1px solid rgba(255,92,122,0.25);color:#ff7c94;cursor:pointer;font-family:inherit;">Disband</button>`;
          document.getElementById('disbandBtn')?.addEventListener('click', () => {
            if (!confirm('Disband this party?')) return;
            db.ref('parties/' + partyId + '/active').set(false).then(() => { detachListeners(); currentPartyId = null; switchTab('lobby'); });
          });
        } else {
          actionEl.innerHTML = `<button id="leaveBtn" style="font-size:10px;padding:3px 10px;border-radius:6px;background:rgba(255,255,255,0.06);border:1px solid var(--border2);color:var(--text2);cursor:pointer;font-family:inherit;">Leave</button>`;
          document.getElementById('leaveBtn')?.addEventListener('click', () => {
            db.ref('parties/' + partyId + '/members').once('value').then(s => {
              const obj = s.val() || {};
              const myKey = Object.entries(obj).find(([,v]) => v.name === myName)?.[0];
              const tasks = [];
              if (myKey) tasks.push(db.ref('parties/' + partyId + '/members/' + myKey).remove());
              tasks.push(db.ref('parties/' + partyId + '/messages').push({ author:'System',emoji:'👋',text:myName+' left.',ts:Date.now(),system:true }));
              Promise.all(tasks).then(() => { detachListeners(); currentPartyId = null; switchTab('lobby'); });
            });
          });
        }
      }
    });
    membersListener = () => partyRef.off('value', ph);

    // Listen to messages — real-time updates from Firebase
    const msgsRef = db.ref('parties/' + partyId + '/messages').limitToLast(100);
    const mh = msgsRef.on('value', snap => {
      const el = document.getElementById('chatMsgs'); if (!el) return;
      const data = snap.val() || {};
      const msgs = Object.values(data).sort((a, b) => a.ts - b.ts);
      const atBottom = el.scrollHeight - el.scrollTop <= el.clientHeight + 60;
      el.innerHTML = msgs.length === 0
        ? `<div style="text-align:center;color:var(--text3);font-size:13px;padding:28px 0;margin:auto;">No messages yet — say hi! 👋</div>`
        : msgs.map(m => m.system
          ? `<div style="text-align:center;font-size:11px;color:var(--text3);padding:4px 0;">${escHtml(m.text)}</div>`
          : `<div style="margin-bottom:8px;">
              <div style="display:flex;align-items:baseline;gap:5px;margin-bottom:2px;">
                <span style="font-size:15px;line-height:1;">${escHtml(m.emoji||'👤')}</span>
                <span style="font-size:12px;font-weight:700;color:${m.author===myName?'var(--accent3,#a5bcff)':'var(--text,#f0f4ff)'};">${escHtml(m.author)}</span>
                <span style="font-size:10px;color:var(--text3);">${timeAgo(m.ts)}</span>
              </div>
              <div style="font-size:13px;color:var(--text,#f0f4ff);line-height:1.5;padding-left:22px;word-break:break-word;">${escHtml(m.text)}</div>
            </div>`
        ).join('');
      if (atBottom) el.scrollTop = el.scrollHeight;
    });
    messagesListener = () => msgsRef.off('value', mh);
  }

  // ── Init ──
  function init() { injectBtn(); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();

})();