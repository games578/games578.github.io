// ── Party & Friends System ── //
// Firebase Realtime Database backend
// Removes: dark/light toggle, old friends panel from navbar
// Adds: unified 🎉 button → Lobby | Friends | Profile tabs
// Friends are REAL — based on created profiles, send/accept/deny requests

(function () {

  const FIREBASE_CONFIG = {
    databaseURL: "https://unblocked-games-chat-default-rtdb.firebaseio.com"
  };

  const MY_ID_KEY    = 'mg67_uid';
  const MY_NAME_KEY  = 'mg67_partyName';
  const MY_EMOJI_KEY = 'mg67_partyEmoji';
  const EMOJIS = ['🦊','🐉','🤖','🐺','🦁','🐯','🐸','🦋','🐬','🦄','🐻','🐙','🦅','🐼','🦉'];

  let db = null;
  let currentPartyId = null;
  let _unsubscribers = [];

  // ── Local helpers ──
  function myId()    { let id = localStorage.getItem(MY_ID_KEY); if (!id) { id = genId(); localStorage.setItem(MY_ID_KEY, id); } return id; }
  function myName()  { return localStorage.getItem(MY_NAME_KEY) || ''; }
  function myEmoji() { return localStorage.getItem(MY_EMOJI_KEY) || EMOJIS[0]; }
  function saveProfile(n, e) { localStorage.setItem(MY_NAME_KEY, n); localStorage.setItem(MY_EMOJI_KEY, e); }
  function escHtml(s) { return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }
  function timeAgo(ts) {
    const s = Math.floor((Date.now() - ts) / 1000);
    if (s < 60) return 'just now';
    if (s < 3600) return Math.floor(s/60) + 'm ago';
    return Math.floor(s/3600) + 'h ago';
  }
  function genId() { return Date.now().toString(36) + Math.random().toString(36).slice(2,7); }
  function getCurrentGame() {
    if (typeof games === 'undefined') return null;
    const id = window.location.search.substring(1).trim().toLowerCase();
    return games.find(g => g.id === id) || null;
  }

  // ── Firebase loader ──
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
        } catch(e) { bodyErr('Firebase failed: ' + e.message); }
      };
      document.head.appendChild(s2);
    };
    document.head.appendChild(s1);
  }

  function bodyErr(msg) {
    const b = document.getElementById('partyBody');
    if (b) b.innerHTML = `<div style="text-align:center;padding:32px 16px;color:#ff7c94;font-size:13px;line-height:1.6;">${escHtml(msg)}</div>`;
  }

  function unsub() { _unsubscribers.forEach(fn => fn()); _unsubscribers = []; }
  function addUnsub(fn) { _unsubscribers.push(fn); }

  // ══════════════════════════════════════════════
  // REMOVE old navbar buttons (friends/theme from index.html)
  // ══════════════════════════════════════════════
  function removeOldButtons() {
    // Remove friends button if it exists
    const fb = document.getElementById('friendsBtn');
    if (fb) fb.remove();
    const fp = document.getElementById('friendsPanel');
    if (fp) fp.remove();
    // Remove theme button
    const tb = document.getElementById('themeBtn');
    if (tb) tb.remove();
    // Remove notif button
    const nb = document.getElementById('notifBtn');
    if (nb) nb.remove();
    const np = document.getElementById('notifPanel');
    if (np) np.remove();
  }

  // ══════════════════════════════════════════════
  // INJECT party button
  // ══════════════════════════════════════════════
  function injectBtn() {
    if (document.getElementById('partyBtn')) return;
    const isPlay = !!document.getElementById('gameFrame');
    const btn = document.createElement('button');
    btn.id = 'partyBtn';
    btn.addEventListener('click', openPanel);

    if (isPlay) {
      btn.className = 'btn';
      btn.innerHTML = '🎉 <span>Party</span>';
      btn.style.cssText = 'background:rgba(0,229,160,0.1);border:1px solid rgba(0,229,160,0.28);color:#00e5a0;';
      const controls = document.querySelector('.controls');
      if (controls) controls.insertBefore(btn, controls.children[0]);
    } else {
      btn.className = 'nav-icon-btn';
      btn.textContent = '🎉';
      btn.title = 'Party & Friends';
      btn.style.cssText = 'background:rgba(0,229,160,0.1);border:1px solid rgba(0,229,160,0.28);color:#00e5a0;margin-left:6px;';
      // Insert before panic button
      const panic = document.getElementById('panicBtn') || document.querySelector('.panic-btn');
      const navbar = document.querySelector('.navbar');
      if (navbar && panic) navbar.insertBefore(btn, panic);
      else if (navbar) navbar.appendChild(btn);
    }

    // Friend request badge
    const badge = document.createElement('span');
    badge.id = 'partyBadge';
    badge.style.cssText = 'position:absolute;top:-5px;right:-5px;background:#ff5c7a;color:white;font-size:9px;font-weight:800;min-width:16px;height:16px;border-radius:8px;display:none;align-items:center;justify-content:center;padding:0 3px;border:2px solid var(--bg,#080b12);font-family:inherit;';
    btn.style.position = 'relative';
    btn.appendChild(badge);
  }

  function updateBadge(count) {
    const b = document.getElementById('partyBadge');
    if (!b) return;
    b.textContent = count;
    b.style.display = count > 0 ? 'flex' : 'none';
  }

  // ══════════════════════════════════════════════
  // PANEL
  // ══════════════════════════════════════════════
  const TABS = [
    { id: 'lobby',   label: '🎮 Lobby' },
    { id: 'friends', label: '👥 Friends' },
    { id: 'profile', label: '👤 Me' },
  ];

  function createPanel() {
    if (document.getElementById('partyPanel')) return;
    const panel = document.createElement('div');
    panel.id = 'partyPanel';
    panel.style.cssText = [
      'position:fixed;top:78px;right:16px;width:370px;max-height:600px;',
      'background:var(--bg3,#111827);border:1px solid var(--border2,rgba(255,255,255,0.11));',
      'border-radius:16px;box-shadow:0 20px 60px rgba(0,0,0,0.7);z-index:1100;',
      'display:flex;flex-direction:column;overflow:hidden;',
      'transform:translateY(-10px) scale(0.97);opacity:0;pointer-events:none;',
      'transition:transform 0.25s cubic-bezier(0.34,1.2,0.64,1),opacity 0.2s;',
      'font-family:"DM Sans",system-ui,sans-serif;',
    ].join('');

    const tabHtml = TABS.map((t,i) =>
      `<button class="ptab" data-tab="${t.id}" style="flex:1;padding:6px 4px;border-radius:8px;border:1px solid ${i===0?'rgba(108,143,255,0.35)':'var(--border2,rgba(255,255,255,0.11))'};background:${i===0?'rgba(108,143,255,0.15)':'none'};color:${i===0?'var(--accent3,#a5bcff)':'var(--text2,rgba(200,210,255,0.55))'};font-size:11px;font-weight:700;cursor:pointer;font-family:inherit;transition:all 0.15s;white-space:nowrap;">${t.label}</button>`
    ).join('');

    panel.innerHTML = `
      <div style="padding:14px 14px 10px;border-bottom:1px solid var(--border,rgba(255,255,255,0.06));flex-shrink:0;">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;">
          <span style="font-size:15px;font-weight:800;font-family:'Syne',sans-serif;color:var(--text,#f0f4ff);">🎉 Party & Friends</span>
          <button id="partyCloseBtn" style="background:none;border:none;color:var(--text2);cursor:pointer;font-size:18px;line-height:1;padding:0 4px;">✕</button>
        </div>
        <div style="display:flex;gap:5px;">${tabHtml}</div>
      </div>
      <div id="partyBody" style="overflow-y:auto;flex:1;display:flex;flex-direction:column;"></div>
    `;
    document.body.appendChild(panel);

    document.getElementById('partyCloseBtn').addEventListener('click', closePanel);
    panel.querySelectorAll('.ptab').forEach(t => t.addEventListener('click', () => switchTab(t.dataset.tab)));
    document.addEventListener('click', outsideClose);
  }

  function switchTab(name, skipUnsub) {
    if (!skipUnsub) { unsub(); currentPartyId = null; }
    const panel = document.getElementById('partyPanel');
    if (!panel) return;
    panel.querySelectorAll('.ptab').forEach(t => {
      const on = t.dataset.tab === name;
      t.style.background = on ? 'rgba(108,143,255,0.15)' : 'none';
      t.style.color = on ? 'var(--accent3,#a5bcff)' : 'var(--text2)';
      t.style.borderColor = on ? 'rgba(108,143,255,0.35)' : 'var(--border2,rgba(255,255,255,0.11))';
    });
    loadFirebase(db => renderTab(name, db));
  }

  function outsideClose(e) {
    const panel = document.getElementById('partyPanel');
    const btn = document.getElementById('partyBtn');
    if (panel && !panel.contains(e.target) && btn && !btn.contains(e.target)) closePanel();
  }

  function openPanel() {
    createPanel();
    const panel = document.getElementById('partyPanel');
    panel.style.opacity = '1'; panel.style.pointerEvents = 'all'; panel.style.transform = 'translateY(0) scale(1)';
    loadFirebase(db => {
      renderTab('lobby', db);
      watchFriendRequests(db);
    });
  }

  function closePanel() {
    unsub(); currentPartyId = null;
    const panel = document.getElementById('partyPanel');
    if (!panel) return;
    panel.style.opacity = '0'; panel.style.pointerEvents = 'none'; panel.style.transform = 'translateY(-10px) scale(0.97)';
  }

  function renderTab(tab, db) {
    const body = document.getElementById('partyBody');
    if (!body) return;
    if (tab === 'lobby')   renderLobby(body, db);
    else if (tab === 'friends') renderFriends(body, db);
    else renderProfile(body, db);
  }

  // ══════════════════════════════════════════════
  // LOBBY TAB
  // ══════════════════════════════════════════════
  function renderLobby(body, db) {
    body.innerHTML = `
      <div style="padding:10px 14px;border-bottom:1px solid var(--border,rgba(255,255,255,0.06));flex-shrink:0;">
        <button id="createPartyBtn" style="width:100%;background:linear-gradient(135deg,var(--accent,#6c8fff),#4a6ee8);border:none;color:white;padding:9px;border-radius:9px;cursor:pointer;font-size:13px;font-weight:700;font-family:inherit;box-shadow:0 4px 14px rgba(108,143,255,0.3);">+ Create a Party</button>
      </div>
      <div id="lobbyList" style="flex:1;overflow-y:auto;"></div>
    `;
    document.getElementById('createPartyBtn')?.addEventListener('click', () => showCreateForm(body, db));

    const ref = db.ref('parties').orderByChild('createdAt').limitToLast(30);
    const h = ref.on('value', snap => {
      const list = document.getElementById('lobbyList');
      if (!list) return;
      const raw = snap.val() || {};
      const parties = Object.values(raw).filter(p => p && p.active !== false).reverse();
      if (!parties.length) {
        list.innerHTML = `<div style="text-align:center;padding:36px 20px;color:var(--text3);font-size:13px;"><span style="font-size:32px;display:block;margin-bottom:8px;">🎮</span>No open parties.<br>Create one above!</div>`;
        return;
      }
      const me = myName();
      list.innerHTML = '';
      parties.forEach(party => {
        const members = party.members ? Object.values(party.members) : [];
        const isMember = members.some(m => m.name === me);
        const row = document.createElement('div');
        row.style.cssText = 'display:flex;align-items:center;gap:10px;padding:10px 14px;border-bottom:1px solid var(--border,rgba(255,255,255,0.06));transition:background 0.12s;';
        row.onmouseenter = () => row.style.background = 'rgba(108,143,255,0.06)';
        row.onmouseleave = () => row.style.background = '';
        const img = party.gameImg
          ? `<img src="${escHtml(party.gameImg)}" style="width:36px;height:36px;border-radius:8px;object-fit:cover;flex-shrink:0;">`
          : `<div style="width:36px;height:36px;border-radius:8px;background:rgba(108,143,255,0.12);display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0;">🎮</div>`;
        row.innerHTML = `${img}
          <div style="flex:1;min-width:0;">
            <div style="font-size:13px;font-weight:700;color:var(--text,#f0f4ff);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${escHtml(party.name)}</div>
            <div style="font-size:11px;color:var(--text2);margin-top:1px;">by ${escHtml(party.host)} · ${members.length} member${members.length!==1?'s':''}</div>
          </div>
          ${isMember
            ? `<button data-id="${party.id}" class="pOpen" style="font-size:11px;font-weight:700;padding:5px 11px;border-radius:7px;background:rgba(0,229,160,0.12);border:1px solid rgba(0,229,160,0.28);color:#00e5a0;cursor:pointer;font-family:inherit;">Open</button>`
            : `<button data-id="${party.id}" class="pJoin" style="font-size:11px;font-weight:700;padding:5px 11px;border-radius:7px;background:linear-gradient(135deg,var(--accent,#6c8fff),#4a6ee8);border:none;color:white;cursor:pointer;font-family:inherit;">Join</button>`}`;
        list.appendChild(row);
      });
      list.querySelectorAll('.pJoin').forEach(b => b.addEventListener('click', e => { e.stopPropagation(); joinParty(b.dataset.id, db); }));
      list.querySelectorAll('.pOpen').forEach(b => b.addEventListener('click', e => { e.stopPropagation(); openChat(b.dataset.id, db); }));
    });
    addUnsub(() => ref.off('value', h));
  }

  function showCreateForm(body, db) {
    if (!myName()) { switchTab('profile'); return; }
    const game = getCurrentGame();
    const topBar = body.querySelector('div:first-child');
    if (!topBar) return;
    topBar.innerHTML = `
      <div style="font-size:13px;font-weight:700;color:var(--text,#f0f4ff);margin-bottom:10px;">🎉 Create a Party</div>
      <input id="cfName" type="text" maxlength="40" placeholder="Party name..." value="${game ? escHtml(game.title + ' party') : ''}" style="width:100%;background:rgba(108,143,255,0.06);border:1px solid var(--border2);border-radius:9px;padding:9px 12px;color:var(--text,#f0f4ff);font-size:13px;outline:none;font-family:inherit;box-sizing:border-box;margin-bottom:10px;" />
      <div style="display:flex;gap:8px;">
        <button id="cfCancel" style="flex:1;background:rgba(255,255,255,0.06);border:1px solid var(--border2);color:var(--text2);padding:9px;border-radius:9px;cursor:pointer;font-size:13px;font-family:inherit;">Cancel</button>
        <button id="cfCreate" style="flex:2;background:linear-gradient(135deg,var(--accent,#6c8fff),#4a6ee8);border:none;color:white;padding:9px;border-radius:9px;cursor:pointer;font-size:13px;font-weight:700;font-family:inherit;">🎉 Create</button>
      </div>
      <div id="cfErr" style="font-size:12px;color:#ff7c94;margin-top:6px;min-height:14px;"></div>
    `;
    setTimeout(() => document.getElementById('cfName')?.focus(), 50);
    document.getElementById('cfCancel')?.addEventListener('click', () => renderLobby(body, db));
    document.getElementById('cfCreate')?.addEventListener('click', () => {
      const n = document.getElementById('cfName')?.value.trim();
      if (!n) { document.getElementById('cfErr').textContent = 'Enter a party name.'; return; }
      document.getElementById('cfCreate').textContent = 'Creating...';
      createParty(n, db);
    });
    document.getElementById('cfName')?.addEventListener('keydown', e => {
      if (e.key === 'Enter') document.getElementById('cfCreate')?.click();
    });
  }

  // ══════════════════════════════════════════════
  // FRIENDS TAB
  // ══════════════════════════════════════════════
  function renderFriends(body, db) {
    if (!myName()) {
      body.innerHTML = `<div style="text-align:center;padding:40px 20px;color:var(--text3);font-size:13px;"><span style="font-size:32px;display:block;margin-bottom:8px;">👤</span>Set your name in 👤 Me first!</div>`;
      return;
    }

    body.innerHTML = `
      <div style="padding:10px 14px;border-bottom:1px solid var(--border,rgba(255,255,255,0.06));flex-shrink:0;">
        <div style="font-size:12px;color:var(--text2);margin-bottom:6px;font-weight:700;">Add a friend by username</div>
        <div style="display:flex;gap:8px;">
          <input id="addFriendInput" type="text" maxlength="20" placeholder="Their exact username..." style="flex:1;background:rgba(108,143,255,0.06);border:1px solid var(--border2);border-radius:9px;padding:8px 12px;color:var(--text,#f0f4ff);font-size:13px;outline:none;font-family:inherit;" />
          <button id="addFriendBtn" style="background:linear-gradient(135deg,var(--accent,#6c8fff),#4a6ee8);border:none;color:white;padding:8px 14px;border-radius:9px;cursor:pointer;font-size:13px;font-weight:700;font-family:inherit;flex-shrink:0;">Add</button>
        </div>
        <div id="addFriendMsg" style="font-size:12px;margin-top:6px;min-height:14px;"></div>
      </div>
      <div id="friendsList" style="flex:1;overflow-y:auto;"></div>
    `;

    document.getElementById('addFriendBtn')?.addEventListener('click', () => sendFriendRequest(db));
    document.getElementById('addFriendInput')?.addEventListener('keydown', e => { if (e.key === 'Enter') sendFriendRequest(db); });

    renderFriendsList(db);
  }

  function renderFriendsList(db) {
    const container = document.getElementById('friendsList');
    if (!container) return;
    const uid = myId();

    // Watch incoming requests + friends
    const reqRef = db.ref('friendRequests').orderByChild('toId').equalTo(uid);
    const reqH = reqRef.on('value', snap => {
      const friendsRef = db.ref('users/' + uid + '/friends');
      friendsRef.once('value').then(fSnap => {
        buildFriendsList(container, snap, fSnap, db);
      });
    });
    addUnsub(() => reqRef.off('value', reqH));

    const friendsRef2 = db.ref('users/' + uid + '/friends');
    const fH = friendsRef2.on('value', snap => {
      const reqRef2 = db.ref('friendRequests').orderByChild('toId').equalTo(uid);
      reqRef2.once('value').then(rSnap => {
        buildFriendsList(container, rSnap, snap, db);
      });
    });
    addUnsub(() => friendsRef2.off('value', fH));
  }

  function buildFriendsList(container, reqSnap, friendsSnap, db) {
    const uid = myId();
    const requests = reqSnap.val() ? Object.entries(reqSnap.val()).filter(([,r]) => r.status === 'pending') : [];
    const friendIds = friendsSnap.val() ? Object.keys(friendsSnap.val()) : [];

    container.innerHTML = '';

    // Incoming requests section
    if (requests.length) {
      const header = document.createElement('div');
      header.style.cssText = 'font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--text3);padding:10px 14px 4px;';
      header.textContent = '📨 Friend Requests';
      container.appendChild(header);

      requests.forEach(([reqId, req]) => {
        const row = document.createElement('div');
        row.style.cssText = 'display:flex;align-items:center;gap:10px;padding:10px 14px;border-bottom:1px solid var(--border,rgba(255,255,255,0.06));background:rgba(108,143,255,0.04);';
        row.innerHTML = `
          <span style="font-size:22px;flex-shrink:0;">${escHtml(req.fromEmoji||'👤')}</span>
          <div style="flex:1;min-width:0;">
            <div style="font-size:13px;font-weight:700;color:var(--text,#f0f4ff);">${escHtml(req.fromName)}</div>
            <div style="font-size:11px;color:var(--text2);">wants to be friends</div>
          </div>
          <button data-req="${reqId}" data-fid="${req.fromId}" data-fname="${escHtml(req.fromName)}" data-femoji="${escHtml(req.fromEmoji||'👤')}" class="acceptBtn" style="font-size:11px;font-weight:700;padding:4px 10px;border-radius:7px;background:rgba(0,229,160,0.12);border:1px solid rgba(0,229,160,0.28);color:#00e5a0;cursor:pointer;font-family:inherit;margin-right:4px;">✓</button>
          <button data-req="${reqId}" class="denyBtn" style="font-size:11px;font-weight:700;padding:4px 10px;border-radius:7px;background:rgba(255,92,122,0.1);border:1px solid rgba(255,92,122,0.25);color:#ff7c94;cursor:pointer;font-family:inherit;">✕</button>`;
        container.appendChild(row);
      });

      container.querySelectorAll('.acceptBtn').forEach(b => b.addEventListener('click', () => acceptFriendRequest(b.dataset.req, b.dataset.fid, b.dataset.fname, b.dataset.femoji, db)));
      container.querySelectorAll('.denyBtn').forEach(b => b.addEventListener('click', () => denyFriendRequest(b.dataset.req, db)));
    }

    // Friends list
    if (!friendIds.length && !requests.length) {
      const empty = document.createElement('div');
      empty.style.cssText = 'text-align:center;padding:36px 20px;color:var(--text3);font-size:13px;';
      empty.innerHTML = `<span style="font-size:32px;display:block;margin-bottom:8px;">👥</span>No friends yet.<br>Add someone by their username!`;
      container.appendChild(empty);
      return;
    }

    if (friendIds.length) {
      const header2 = document.createElement('div');
      header2.style.cssText = 'font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--text3);padding:10px 14px 4px;';
      header2.textContent = '👥 Friends';
      container.appendChild(header2);

      friendIds.forEach(fid => {
        db.ref('users/' + fid).once('value').then(snap => {
          const user = snap.val();
          if (!user) return;
          const row = document.createElement('div');
          row.style.cssText = 'display:flex;align-items:center;gap:10px;padding:10px 14px;border-bottom:1px solid var(--border,rgba(255,255,255,0.06));transition:background 0.12s;';
          row.onmouseenter = () => row.style.background = 'rgba(108,143,255,0.06)';
          row.onmouseleave = () => row.style.background = '';
          row.innerHTML = `
            <span style="font-size:24px;flex-shrink:0;">${escHtml(user.emoji||'👤')}</span>
            <div style="flex:1;min-width:0;">
              <div style="font-size:13px;font-weight:700;color:var(--text,#f0f4ff);">${escHtml(user.name)}</div>
              <div style="font-size:11px;color:var(--text2);">@${escHtml(user.name)}</div>
            </div>
            <button data-fid="${fid}" class="removeFriendBtn" style="font-size:11px;padding:4px 10px;border-radius:7px;background:rgba(255,255,255,0.05);border:1px solid var(--border2);color:var(--text3);cursor:pointer;font-family:inherit;">Remove</button>`;
          container.appendChild(row);
        });
      });

      setTimeout(() => {
        container.querySelectorAll('.removeFriendBtn').forEach(b => b.addEventListener('click', () => removeFriend(b.dataset.fid, db)));
      }, 300);
    }
  }

  function sendFriendRequest(db) {
    const input = document.getElementById('addFriendInput');
    const msg = document.getElementById('addFriendMsg');
    const targetName = input?.value.trim();
    if (!targetName) return;
    if (targetName === myName()) { setMsg(msg, 'You can\'t add yourself!', '#ff7c94'); return; }

    setMsg(msg, 'Searching...', 'var(--text2)');

    // Find user by name
    db.ref('users').orderByChild('name').equalTo(targetName).once('value').then(snap => {
      const users = snap.val();
      if (!users) { setMsg(msg, 'No user found with that username.', '#ff7c94'); return; }
      const [targetId, targetUser] = Object.entries(users)[0];
      const uid = myId();
      if (targetId === uid) { setMsg(msg, 'You can\'t add yourself!', '#ff7c94'); return; }

      // Check if already friends
      db.ref('users/' + uid + '/friends/' + targetId).once('value').then(fSnap => {
        if (fSnap.exists()) { setMsg(msg, 'You\'re already friends!', '#ff7c94'); return; }

        // Check if request already sent
        db.ref('friendRequests').orderByChild('fromId').equalTo(uid).once('value').then(rSnap => {
          const existing = rSnap.val() ? Object.values(rSnap.val()).find(r => r.toId === targetId && r.status === 'pending') : null;
          if (existing) { setMsg(msg, 'Request already sent!', '#ff7c94'); return; }

          // Send request
          db.ref('friendRequests').push({
            fromId: uid, fromName: myName(), fromEmoji: myEmoji(),
            toId: targetId, toName: targetUser.name,
            status: 'pending', ts: Date.now(),
          }).then(() => {
            setMsg(msg, '✓ Friend request sent to ' + targetName + '!', '#00e5a0');
            if (input) input.value = '';
          });
        });
      });
    });
  }

  function acceptFriendRequest(reqId, fromId, fromName, fromEmoji, db) {
    const uid = myId();
    const batch = [
      db.ref('users/' + uid + '/friends/' + fromId).set({ name: fromName, emoji: fromEmoji, since: Date.now() }),
      db.ref('users/' + fromId + '/friends/' + uid).set({ name: myName(), emoji: myEmoji(), since: Date.now() }),
      db.ref('friendRequests/' + reqId).update({ status: 'accepted' }),
    ];
    Promise.all(batch).catch(e => console.error('Accept error', e));
  }

  function denyFriendRequest(reqId, db) {
    db.ref('friendRequests/' + reqId).update({ status: 'denied' });
  }

  function removeFriend(friendId, db) {
    if (!confirm('Remove this friend?')) return;
    const uid = myId();
    Promise.all([
      db.ref('users/' + uid + '/friends/' + friendId).remove(),
      db.ref('users/' + friendId + '/friends/' + uid).remove(),
    ]);
  }

  function setMsg(el, text, color) {
    if (!el) return;
    el.textContent = text; el.style.color = color;
  }

  // Watch incoming friend requests for badge
  function watchFriendRequests(db) {
    const uid = myId();
    const ref = db.ref('friendRequests').orderByChild('toId').equalTo(uid);
    const h = ref.on('value', snap => {
      const data = snap.val() || {};
      const pending = Object.values(data).filter(r => r.status === 'pending').length;
      updateBadge(pending);
    });
    addUnsub(() => ref.off('value', h));
  }

  // ══════════════════════════════════════════════
  // PROFILE TAB
  // ══════════════════════════════════════════════
  function renderProfile(body, db) {
    const name = myName(), emoji = myEmoji();
    let sel = emoji;
    body.innerHTML = `
      <div style="padding:16px;">
        <div style="text-align:center;padding:16px;background:rgba(108,143,255,0.05);border-radius:12px;margin-bottom:16px;">
          <div style="font-size:52px;margin-bottom:6px;line-height:1;">${emoji}</div>
          <div style="font-size:15px;font-weight:700;color:var(--text,#f0f4ff);">${name || 'No name set'}</div>
          ${name ? `<div style="font-size:11px;color:var(--text2);margin-top:3px;background:rgba(108,143,255,0.1);display:inline-block;padding:2px 10px;border-radius:20px;">@${escHtml(name)}</div>` : '<div style="font-size:12px;color:#ff7c94;margin-top:4px;">Set your name so friends can find you!</div>'}
        </div>
        <label style="font-size:12px;color:var(--text2);display:block;margin-bottom:6px;font-weight:700;">Username (friends use this to add you)</label>
        <input id="ppName" type="text" maxlength="20" value="${escHtml(name)}" placeholder="Choose a username..." style="width:100%;background:rgba(108,143,255,0.06);border:1px solid var(--border2);border-radius:9px;padding:10px 14px;color:var(--text,#f0f4ff);font-size:13px;outline:none;font-family:inherit;box-sizing:border-box;margin-bottom:14px;" />
        <label style="font-size:12px;color:var(--text2);display:block;margin-bottom:8px;font-weight:700;">Your emoji</label>
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
      const msgEl = document.getElementById('ppMsg');
      if (!n) { msgEl.style.color='#ff7c94'; msgEl.textContent='Enter a username.'; return; }

      // Check name uniqueness (only if changed)
      if (n === myName()) {
        saveProfile(n, sel);
        db.ref('users/' + myId()).update({ name: n, emoji: sel, updatedAt: Date.now() });
        msgEl.style.color='#00e5a0'; msgEl.textContent='✓ Saved!';
        setTimeout(() => renderProfile(body, db), 800);
        return;
      }

      db.ref('users').orderByChild('name').equalTo(n).once('value').then(snap => {
        const existing = snap.val();
        if (existing && !Object.keys(existing).includes(myId())) {
          msgEl.style.color='#ff7c94'; msgEl.textContent='That username is taken. Try another.'; return;
        }
        saveProfile(n, sel);
        db.ref('users/' + myId()).set({ name: n, emoji: sel, uid: myId(), updatedAt: Date.now() });
        msgEl.style.color='#00e5a0'; msgEl.textContent='✓ Profile saved!';
        setTimeout(() => renderProfile(body, db), 800);
      });
    });
  }

  // ══════════════════════════════════════════════
  // PARTY ACTIONS
  // ══════════════════════════════════════════════
  function createParty(partyName, db) {
    const me = myName();
    if (!me) { switchTab('profile'); return; }
    const game = getCurrentGame();
    const partyId = genId();
    db.ref('parties/' + partyId).set({
      id: partyId, name: partyName, host: me,
      gameId: game?.id||null, gameImg: game?.img||null, gameName: game?.title||null,
      createdAt: firebase.database.ServerValue.TIMESTAMP, active: true,
    })
    .then(() => db.ref('parties/' + partyId + '/members/' + genId()).set({ name: me, emoji: myEmoji(), joinedAt: Date.now() }))
    .then(() => db.ref('parties/' + partyId + '/messages').push({ author:'System', emoji:'🎉', text: me+' created the party!', ts: Date.now(), system: true }))
    .then(() => openChat(partyId, db))
    .catch(e => bodyErr('Could not create party: ' + e.message));
  }

  function joinParty(partyId, db) {
    const me = myName();
    if (!me) { switchTab('profile'); return; }
    db.ref('parties/' + partyId + '/members').once('value').then(snap => {
      const members = snap.val() || {};
      if (Object.values(members).some(m => m.name === me)) { openChat(partyId, db); return; }
      db.ref('parties/' + partyId + '/members/' + genId()).set({ name: me, emoji: myEmoji(), joinedAt: Date.now() })
        .then(() => db.ref('parties/' + partyId + '/messages').push({ author:'System', emoji:'👋', text: me+' joined!', ts: Date.now(), system: true }))
        .then(() => openChat(partyId, db));
    });
  }

  // ══════════════════════════════════════════════
  // CHAT VIEW
  // ══════════════════════════════════════════════
  function openChat(partyId, db) {
    currentPartyId = partyId;
    const body = document.getElementById('partyBody');
    if (!body) return;
    document.querySelectorAll('.ptab').forEach(t => { t.style.background='none'; t.style.color='var(--text2)'; t.style.borderColor='var(--border2,rgba(255,255,255,0.11))'; });
    const me = myName();

    body.innerHTML = `
      <div style="flex-shrink:0;border-bottom:1px solid var(--border,rgba(255,255,255,0.06));background:rgba(108,143,255,0.04);">
        <div style="display:flex;align-items:center;gap:8px;padding:10px 14px;">
          <button id="chatBack" style="background:none;border:none;color:var(--text2);cursor:pointer;font-size:13px;padding:0;font-family:inherit;flex-shrink:0;">← Back</button>
          <div style="flex:1;min-width:0;">
            <div id="chatTitle" style="font-size:13px;font-weight:700;color:var(--text,#f0f4ff);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">Loading...</div>
            <div id="chatMembers" style="font-size:11px;color:var(--text2);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;margin-top:1px;"></div>
          </div>
          <div id="chatAction"></div>
        </div>
      </div>
      <div id="chatMsgs" style="flex:1;overflow-y:auto;padding:10px 14px;min-height:220px;display:flex;flex-direction:column;gap:1px;"></div>
      <div style="display:flex;gap:8px;padding:10px 14px;border-top:1px solid var(--border,rgba(255,255,255,0.06));flex-shrink:0;">
        <input id="chatInput" type="text" maxlength="200" placeholder="Say something..." style="flex:1;background:rgba(108,143,255,0.06);border:1px solid var(--border2);border-radius:9px;padding:8px 12px;color:var(--text,#f0f4ff);font-size:13px;outline:none;font-family:inherit;" />
        <button id="chatSend" style="background:linear-gradient(135deg,var(--accent,#6c8fff),#4a6ee8);border:none;color:white;padding:8px 16px;border-radius:9px;cursor:pointer;font-size:13px;font-weight:700;font-family:inherit;flex-shrink:0;">Send</button>
      </div>`;

    document.getElementById('chatBack')?.addEventListener('click', () => { unsub(); currentPartyId=null; switchTab('lobby', true); });

    function sendMsg() {
      const inp = document.getElementById('chatInput');
      if (!inp || !inp.value.trim()) return;
      const text = inp.value.trim(); inp.value='';
      db.ref('parties/' + partyId + '/messages').push({ author: me, emoji: myEmoji(), text, ts: Date.now() });
    }
    document.getElementById('chatSend')?.addEventListener('click', sendMsg);
    document.getElementById('chatInput')?.addEventListener('keydown', e => { if (e.key==='Enter') sendMsg(); });

    // Party metadata listener
    const pRef = db.ref('parties/' + partyId);
    const pH = pRef.on('value', snap => {
      const p = snap.val(); if (!p) return;
      const members = p.members ? Object.values(p.members) : [];
      const t = document.getElementById('chatTitle'); if (t) t.textContent = p.name;
      const m = document.getElementById('chatMembers'); if (m) m.textContent = members.map(x=>x.emoji+' '+x.name).join(' · ');
      const a = document.getElementById('chatAction');
      if (!a) return;
      if (p.host === me) {
        a.innerHTML = `<button id="disbandBtn" style="font-size:10px;padding:3px 10px;border-radius:6px;background:rgba(255,92,122,0.1);border:1px solid rgba(255,92,122,0.25);color:#ff7c94;cursor:pointer;font-family:inherit;">Disband</button>`;
        document.getElementById('disbandBtn')?.addEventListener('click', () => {
          if (!confirm('Disband this party?')) return;
          db.ref('parties/'+partyId+'/active').set(false).then(() => { unsub(); currentPartyId=null; switchTab('lobby',true); });
        });
      } else {
        a.innerHTML = `<button id="leaveBtn" style="font-size:10px;padding:3px 10px;border-radius:6px;background:rgba(255,255,255,0.06);border:1px solid var(--border2);color:var(--text2);cursor:pointer;font-family:inherit;">Leave</button>`;
        document.getElementById('leaveBtn')?.addEventListener('click', () => {
          db.ref('parties/'+partyId+'/members').once('value').then(s => {
            const obj=s.val()||{};
            const myKey=Object.entries(obj).find(([,v])=>v.name===me)?.[0];
            const tasks=[];
            if (myKey) tasks.push(db.ref('parties/'+partyId+'/members/'+myKey).remove());
            tasks.push(db.ref('parties/'+partyId+'/messages').push({author:'System',emoji:'👋',text:me+' left.',ts:Date.now(),system:true}));
            Promise.all(tasks).then(()=>{ unsub(); currentPartyId=null; switchTab('lobby',true); });
          });
        });
      }
    });
    addUnsub(() => pRef.off('value', pH));

    // Messages listener — real-time from Firebase
    const mRef = db.ref('parties/'+partyId+'/messages').limitToLast(100);
    const mH = mRef.on('value', snap => {
      const el = document.getElementById('chatMsgs'); if (!el) return;
      const data = snap.val()||{};
      const msgs = Object.values(data).sort((a,b)=>a.ts-b.ts);
      const atBottom = el.scrollHeight - el.scrollTop <= el.clientHeight + 60;
      el.innerHTML = msgs.length===0
        ? `<div style="text-align:center;color:var(--text3);font-size:13px;padding:28px 0;margin:auto;">No messages yet — say hi! 👋</div>`
        : msgs.map(m => m.system
          ? `<div style="text-align:center;font-size:11px;color:var(--text3);padding:3px 0;">${escHtml(m.text)}</div>`
          : `<div style="margin-bottom:8px;">
              <div style="display:flex;align-items:baseline;gap:5px;margin-bottom:2px;">
                <span style="font-size:15px;line-height:1;">${escHtml(m.emoji||'👤')}</span>
                <span style="font-size:12px;font-weight:700;color:${m.author===me?'var(--accent3,#a5bcff)':'var(--text,#f0f4ff)'};">${escHtml(m.author)}</span>
                <span style="font-size:10px;color:var(--text3);">${timeAgo(m.ts)}</span>
              </div>
              <div style="font-size:13px;color:var(--text,#f0f4ff);line-height:1.5;padding-left:22px;word-break:break-word;">${escHtml(m.text)}</div>
            </div>`
        ).join('');
      if (atBottom) el.scrollTop = el.scrollHeight;
    });
    addUnsub(() => mRef.off('value', mH));
  }

  // ── Init ──
  function init() {
    removeOldButtons();
    injectBtn();
    // Register user profile in Firebase when page loads (if they have a name)
    if (myName()) {
      loadFirebase(db => {
        db.ref('users/' + myId()).once('value').then(snap => {
          if (!snap.exists()) {
            db.ref('users/' + myId()).set({ name: myName(), emoji: myEmoji(), uid: myId(), updatedAt: Date.now() });
          }
        });
        watchFriendRequests(db);
      });
    }
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();

})();
