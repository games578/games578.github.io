// party.js — Party & Friends for games578.github.io
// Firebase: https://unblocked-games-chat-default-rtdb.firebaseio.com

(function () {
  'use strict';

  var DB_URL = 'https://unblocked-games-chat-default-rtdb.firebaseio.com';
  var MY_ID_KEY    = 'mg67_uid';
  var MY_NAME_KEY  = 'mg67_name';
  var MY_EMOJI_KEY = 'mg67_emoji';
  var EMOJIS = ['🦊','🐉','🤖','🐺','🦁','🐯','🐸','🦋','🐬','🦄','🐻','🐙','🦅','🐼','🦉'];

  var db = null;
  var activeListeners = []; // {ref, event, handler}
  var currentView = null;   // 'lobby' | 'friends' | 'profile' | 'chat'
  var currentPartyId = null;

  // ── helpers ──────────────────────────────────
  function uid() {
    var id = localStorage.getItem(MY_ID_KEY);
    if (!id) { id = Date.now().toString(36) + Math.random().toString(36).slice(2); localStorage.setItem(MY_ID_KEY, id); }
    return id;
  }
  function uname() { return localStorage.getItem(MY_NAME_KEY) || ''; }
  function uemoji() { return localStorage.getItem(MY_EMOJI_KEY) || '🦊'; }
  function saveMe(n, e) { localStorage.setItem(MY_NAME_KEY, n); localStorage.setItem(MY_EMOJI_KEY, e); }
  function esc(s) { return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }
  function gid() { return Date.now().toString(36) + Math.random().toString(36).slice(2,6); }
  function ago(ts) {
    var s = Math.floor((Date.now()-ts)/1000);
    if (s < 60) return 'just now';
    if (s < 3600) return Math.floor(s/60)+'m ago';
    return Math.floor(s/3600)+'h ago';
  }
  function btn(label, style, id) {
    var extra = id ? ' id="'+id+'"' : '';
    return '<button'+extra+' style="'+style+';cursor:pointer;font-family:inherit;border-radius:9px;font-size:13px;">'+label+'</button>';
  }
  function currentGame() {
    if (typeof games === 'undefined') return null;
    var id = window.location.search.slice(1).trim().toLowerCase();
    return games.find(function(g){ return g.id === id; }) || null;
  }

  // ── Firebase REST helpers (no SDK needed) ─────
  function fbUrl(path) { return DB_URL + path + '.json'; }

  function fbGet(path, cb) {
    fetch(fbUrl(path)).then(function(r){ return r.json(); }).then(cb).catch(function(){ cb(null); });
  }

  function fbSet(path, data, cb) {
    fetch(fbUrl(path), { method:'PUT', body:JSON.stringify(data) })
      .then(function(r){ return r.json(); }).then(function(){ if(cb) cb(); }).catch(function(){ if(cb) cb(); });
  }

  function fbPush(path, data, cb) {
    fetch(fbUrl(path), { method:'POST', body:JSON.stringify(data) })
      .then(function(r){ return r.json(); }).then(function(res){ if(cb) cb(res && res.name); }).catch(function(){ if(cb) cb(null); });
  }

  function fbUpdate(path, data, cb) {
    fetch(fbUrl(path), { method:'PATCH', body:JSON.stringify(data) })
      .then(function(){ if(cb) cb(); }).catch(function(){ if(cb) cb(); });
  }

  function fbDelete(path, cb) {
    fetch(fbUrl(path), { method:'DELETE' }).then(function(){ if(cb) cb(); }).catch(function(){ if(cb) cb(); });
  }

  // ── Polling (replaces SDK real-time) ──────────
  var pollTimer = null;
  function startPoll(fn, interval) {
    stopPoll();
    fn();
    pollTimer = setInterval(fn, interval || 3000);
  }
  function stopPoll() {
    if (pollTimer) { clearInterval(pollTimer); pollTimer = null; }
  }

  // ── Remove old navbar buttons ─────────────────
  function cleanNavbar() {
    ['friendsBtn','friendsPanel','themeBtn','notifBtn','notifPanel'].forEach(function(id){
      var el = document.getElementById(id);
      if (el) el.remove();
    });
  }

  // ── Inject 🎉 button ──────────────────────────
  function injectButton() {
    if (document.getElementById('partyBtn')) return;
    var isPlay = !!document.getElementById('gameFrame');
    var b = document.createElement('button');
    b.id = 'partyBtn';
    b.style.cssText = 'position:relative;cursor:pointer;font-family:inherit;background:rgba(0,229,160,0.1);border:1px solid rgba(0,229,160,0.28);color:#00e5a0;border-radius:9px;';
    b.onclick = togglePanel;

    // badge for friend requests
    var badge = document.createElement('span');
    badge.id = 'partyBadge';
    badge.style.cssText = 'display:none;position:absolute;top:-5px;right:-5px;background:#ff5c7a;color:#fff;font-size:9px;font-weight:800;min-width:16px;height:16px;border-radius:8px;align-items:center;justify-content:center;padding:0 3px;border:2px solid var(--bg,#080b12);';
    b.appendChild(badge);

    if (isPlay) {
      b.className = 'btn';
      b.innerHTML = '🎉 <span>Party</span>' + b.innerHTML;
      var controls = document.querySelector('.controls');
      if (controls) controls.insertBefore(b, controls.firstChild);
    } else {
      b.className = 'nav-icon-btn';
      b.innerHTML = '🎉' + b.innerHTML;
      b.title = 'Party & Friends';
      b.style.marginLeft = '6px';
      var panic = document.querySelector('.panic-btn') || document.getElementById('panicBtn');
      var navbar = document.querySelector('.navbar');
      if (navbar && panic) navbar.insertBefore(b, panic);
      else if (navbar) navbar.appendChild(b);
    }

    // watch badge
    watchBadge();
  }

  function watchBadge() {
    setInterval(function(){
      fbGet('/friendRequests', function(data){
        if (!data) return;
        var count = 0;
        Object.values(data).forEach(function(r){ if (r.toId === uid() && r.status === 'pending') count++; });
        var badge = document.getElementById('partyBadge');
        if (!badge) return;
        badge.textContent = count;
        badge.style.display = count > 0 ? 'flex' : 'none';
      });
    }, 8000);
  }

  // ── Panel ─────────────────────────────────────
  function togglePanel(e) {
    if (e) e.stopPropagation();
    var panel = document.getElementById('partyPanel');
    if (!panel) { buildPanel(); showView('lobby'); return; }
    if (panel.style.opacity === '0' || panel.style.opacity === '') {
      panel.style.opacity = '1'; panel.style.pointerEvents = 'all'; panel.style.transform = 'translateY(0) scale(1)';
      showView(currentView || 'lobby');
    } else {
      hidePanel();
    }
  }

  function hidePanel() {
    stopPoll();
    var panel = document.getElementById('partyPanel');
    if (!panel) return;
    panel.style.opacity = '0'; panel.style.pointerEvents = 'none'; panel.style.transform = 'translateY(-10px) scale(0.97)';
  }

  function buildPanel() {
    if (document.getElementById('partyPanel')) return;
    var panel = document.createElement('div');
    panel.id = 'partyPanel';
    panel.style.cssText = [
      'position:fixed;top:78px;right:16px;width:370px;max-height:590px;',
      'background:var(--bg3,#111827);border:1px solid var(--border2,rgba(255,255,255,0.11));',
      'border-radius:16px;box-shadow:0 20px 60px rgba(0,0,0,0.8);z-index:2000;',
      'display:flex;flex-direction:column;overflow:hidden;',
      'opacity:0;pointer-events:none;',
      'transform:translateY(-10px) scale(0.97);',
      'transition:transform 0.22s cubic-bezier(0.34,1.2,0.64,1),opacity 0.18s;',
      'font-family:"DM Sans",system-ui,sans-serif;',
    ].join('');

    panel.innerHTML =
      '<div id="partyHeader" style="padding:12px 14px 10px;border-bottom:1px solid var(--border,rgba(255,255,255,0.06));flex-shrink:0;">' +
        '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;">' +
          '<span style="font-size:15px;font-weight:800;font-family:Syne,sans-serif;color:var(--text,#f0f4ff);">🎉 Party &amp; Friends</span>' +
          '<button id="partyClose" style="background:none;border:none;color:var(--text2);cursor:pointer;font-size:20px;line-height:1;padding:0 4px;">✕</button>' +
        '</div>' +
        '<div style="display:flex;gap:5px;" id="partyTabs">' +
          '<button class="ptab" data-view="lobby"  style="flex:1;padding:6px 4px;border-radius:8px;border:1px solid rgba(108,143,255,0.35);background:rgba(108,143,255,0.15);color:var(--accent3,#a5bcff);font-size:11px;font-weight:700;cursor:pointer;font-family:inherit;">🎮 Lobby</button>' +
          '<button class="ptab" data-view="friends" style="flex:1;padding:6px 4px;border-radius:8px;border:1px solid var(--border2,rgba(255,255,255,0.11));background:none;color:var(--text2);font-size:11px;font-weight:700;cursor:pointer;font-family:inherit;">👥 Friends</button>' +
          '<button class="ptab" data-view="profile" style="flex:1;padding:6px 4px;border-radius:8px;border:1px solid var(--border2,rgba(255,255,255,0.11));background:none;color:var(--text2);font-size:11px;font-weight:700;cursor:pointer;font-family:inherit;">👤 Me</button>' +
        '</div>' +
      '</div>' +
      '<div id="partyBody" style="flex:1;overflow-y:auto;display:flex;flex-direction:column;"></div>';

    document.body.appendChild(panel);

    document.getElementById('partyClose').onclick = hidePanel;
    panel.querySelectorAll('.ptab').forEach(function(t){
      t.onclick = function(){ showView(t.dataset.view); };
    });

    document.addEventListener('mousedown', function outsideClick(e){
      var panel = document.getElementById('partyPanel');
      var btn = document.getElementById('partyBtn');
      if (!panel || panel.style.opacity === '0') return;
      if (!panel.contains(e.target) && btn && !btn.contains(e.target)) hidePanel();
    });
  }

  function setTab(view) {
    document.querySelectorAll('.ptab').forEach(function(t){
      var on = t.dataset.view === view;
      t.style.background = on ? 'rgba(108,143,255,0.15)' : 'none';
      t.style.color = on ? 'var(--accent3,#a5bcff)' : 'var(--text2)';
      t.style.borderColor = on ? 'rgba(108,143,255,0.35)' : 'var(--border2,rgba(255,255,255,0.11))';
    });
  }

  function showView(view) {
    stopPoll();
    currentView = view;
    setTab(view);
    // Show header tabs (hide them in chat)
    var header = document.getElementById('partyHeader');
    if (header) {
      var tabs = document.getElementById('partyTabs');
      if (tabs) tabs.style.display = view === 'chat' ? 'none' : 'flex';
    }
    var body = document.getElementById('partyBody');
    if (!body) return;
    body.innerHTML = '<div style="text-align:center;padding:32px;color:var(--text3,rgba(200,210,255,0.3));font-size:13px;">Loading...</div>';

    if (view === 'lobby')   renderLobby(body);
    else if (view === 'friends') renderFriends(body);
    else if (view === 'profile') renderProfile(body);
    else if (view === 'chat' && currentPartyId) renderChat(body, currentPartyId);
  }

  // ── LOBBY ─────────────────────────────────────
  function renderLobby(body) {
    body.innerHTML =
      '<div style="padding:10px 14px;border-bottom:1px solid var(--border,rgba(255,255,255,0.06));flex-shrink:0;">' +
        '<button id="showCreateBtn" style="width:100%;background:linear-gradient(135deg,var(--accent,#6c8fff),#4a6ee8);border:none;color:#fff;padding:9px;border-radius:9px;cursor:pointer;font-size:13px;font-weight:700;font-family:inherit;box-shadow:0 4px 14px rgba(108,143,255,0.3);">+ Create a Party</button>' +
      '</div>' +
      '<div id="lobbyList" style="flex:1;overflow-y:auto;"></div>';

    document.getElementById('showCreateBtn').onclick = function(e){ e.stopPropagation(); showCreateForm(body); };

    function loadList() {
      fbGet('/parties', function(data) {
        var list = document.getElementById('lobbyList');
        if (!list) return;
        if (!data) { list.innerHTML = emptyMsg('🎮','No open parties yet. Create one!'); return; }
        var parties = Object.values(data).filter(function(p){ return p && p.active; }).reverse();
        if (!parties.length) { list.innerHTML = emptyMsg('🎮','No open parties yet. Create one!'); return; }
        var me = uname();
        var html = '';
        parties.forEach(function(p){
          var members = p.members ? Object.values(p.members) : [];
          var isMember = members.some(function(m){ return m.name === me; });
          var img = p.gameImg
            ? '<img src="'+esc(p.gameImg)+'" style="width:36px;height:36px;border-radius:8px;object-fit:cover;flex-shrink:0;">'
            : '<div style="width:36px;height:36px;border-radius:8px;background:rgba(108,143,255,0.12);display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0;">🎮</div>';
          var actionBtn = isMember
            ? '<button data-pid="'+p.id+'" class="lobbyOpenBtn" style="font-size:11px;font-weight:700;padding:5px 11px;border-radius:7px;background:rgba(0,229,160,0.12);border:1px solid rgba(0,229,160,0.28);color:#00e5a0;cursor:pointer;font-family:inherit;white-space:nowrap;">Open</button>'
            : '<button data-pid="'+p.id+'" class="lobbyJoinBtn" style="font-size:11px;font-weight:700;padding:5px 11px;border-radius:7px;background:linear-gradient(135deg,var(--accent,#6c8fff),#4a6ee8);border:none;color:#fff;cursor:pointer;font-family:inherit;white-space:nowrap;">Join</button>';
          html +=
            '<div style="display:flex;align-items:center;gap:10px;padding:10px 14px;border-bottom:1px solid var(--border,rgba(255,255,255,0.06));">' +
              img +
              '<div style="flex:1;min-width:0;">' +
                '<div style="font-size:13px;font-weight:700;color:var(--text,#f0f4ff);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">'+esc(p.name)+'</div>' +
                '<div style="font-size:11px;color:var(--text2);margin-top:1px;">by '+esc(p.host)+' · '+members.length+' member'+(members.length!==1?'s':'')+'</div>' +
              '</div>' +
              actionBtn +
            '</div>';
        });
        list.innerHTML = html;
        list.querySelectorAll('.lobbyJoinBtn').forEach(function(b){
          b.onclick = function(e){ e.stopPropagation(); doJoin(b.dataset.pid); };
        });
        list.querySelectorAll('.lobbyOpenBtn').forEach(function(b){
          b.onclick = function(e){ e.stopPropagation(); openChat(b.dataset.pid); };
        });
      });
    }

    startPoll(loadList, 4000);
  }

  function showCreateForm(body) {
    if (!uname()) { showView('profile'); return; }
    var game = currentGame();
    stopPoll();
    body.innerHTML =
      '<div style="padding:16px;">' +
        '<div style="font-size:14px;font-weight:700;color:var(--text,#f0f4ff);margin-bottom:12px;">🎉 Create a Party</div>' +
        '<label style="font-size:12px;color:var(--text2);display:block;margin-bottom:5px;font-weight:600;">Party name</label>' +
        '<input id="cfInput" type="text" maxlength="40" placeholder="e.g. Friday squad..." value="'+(game ? esc(game.title+' party') : '')+'" style="width:100%;background:rgba(108,143,255,0.06);border:1px solid var(--border2,rgba(255,255,255,0.11));border-radius:9px;padding:10px 12px;color:var(--text,#f0f4ff);font-size:13px;outline:none;font-family:inherit;box-sizing:border-box;margin-bottom:12px;" />' +
        '<div style="display:flex;gap:8px;margin-bottom:8px;">' +
          '<button id="cfCancel" style="flex:1;background:rgba(255,255,255,0.06);border:1px solid var(--border2,rgba(255,255,255,0.11));color:var(--text2);padding:9px;border-radius:9px;cursor:pointer;font-size:13px;font-family:inherit;">Cancel</button>' +
          '<button id="cfSubmit" style="flex:2;background:linear-gradient(135deg,var(--accent,#6c8fff),#4a6ee8);border:none;color:#fff;padding:9px;border-radius:9px;cursor:pointer;font-size:13px;font-weight:700;font-family:inherit;">🎉 Create</button>' +
        '</div>' +
        '<div id="cfErr" style="font-size:12px;color:#ff7c94;min-height:14px;"></div>' +
      '</div>';

    setTimeout(function(){ var inp = document.getElementById('cfInput'); if(inp) inp.focus(); }, 50);

    document.getElementById('cfCancel').onclick = function(e){ e.stopPropagation(); showView('lobby'); };
    document.getElementById('cfSubmit').onclick = function(e){ e.stopPropagation(); doCreate(); };
    document.getElementById('cfInput').onkeydown = function(e){ if(e.key==='Enter'){ e.stopPropagation(); doCreate(); } };

    function doCreate() {
      var name = (document.getElementById('cfInput').value || '').trim();
      var err = document.getElementById('cfErr');
      if (!name) { err.textContent = 'Enter a party name.'; return; }
      var submitBtn = document.getElementById('cfSubmit');
      if (submitBtn) { submitBtn.textContent = 'Creating...'; submitBtn.disabled = true; }

      var me = uname(), myEmoji = uemoji(), game = currentGame();
      var partyId = gid();
      var party = {
        id: partyId, name: name, host: me, active: true,
        gameId: game ? game.id : null,
        gameImg: game ? game.img : null,
        gameName: game ? game.title : null,
        createdAt: Date.now(),
        members: {},
        messages: {}
      };
      party.members[gid()] = { name: me, emoji: myEmoji, joinedAt: Date.now() };

      fbSet('/parties/'+partyId, party, function(){
        fbPush('/parties/'+partyId+'/messages', {
          author:'System', emoji:'🎉', text: me+' created the party!', ts: Date.now(), system: true
        }, function(){
          openChat(partyId);
        });
      });
    }
  }

  function doJoin(partyId) {
    if (!uname()) { showView('profile'); return; }
    var me = uname(), myEmoji = uemoji();
    fbGet('/parties/'+partyId+'/members', function(members){
      var already = members && Object.values(members).some(function(m){ return m.name === me; });
      if (already) { openChat(partyId); return; }
      fbSet('/parties/'+partyId+'/members/'+gid(), { name: me, emoji: myEmoji, joinedAt: Date.now() }, function(){
        fbPush('/parties/'+partyId+'/messages', {
          author:'System', emoji:'👋', text: me+' joined the party!', ts: Date.now(), system: true
        }, function(){ openChat(partyId); });
      });
    });
  }

  function openChat(partyId) {
    stopPoll();
    currentPartyId = partyId;
    currentView = 'chat';
    var tabs = document.getElementById('partyTabs');
    if (tabs) tabs.style.display = 'none';
    var body = document.getElementById('partyBody');
    if (body) renderChat(body, partyId);
  }

  // ── CHAT ──────────────────────────────────────
  function renderChat(body, partyId) {
    var me = uname();
    body.innerHTML =
      '<div style="flex-shrink:0;background:rgba(108,143,255,0.04);border-bottom:1px solid var(--border,rgba(255,255,255,0.06));">' +
        '<div style="display:flex;align-items:center;gap:8px;padding:10px 14px;">' +
          '<button id="chatBack" style="background:none;border:none;color:var(--text2);cursor:pointer;font-size:13px;padding:0;font-family:inherit;flex-shrink:0;">← Back</button>' +
          '<div style="flex:1;min-width:0;">' +
            '<div id="chatTitle" style="font-size:13px;font-weight:700;color:var(--text,#f0f4ff);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">Loading...</div>' +
            '<div id="chatSubs" style="font-size:11px;color:var(--text2);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;margin-top:1px;"></div>' +
          '</div>' +
          '<div id="chatAct"></div>' +
        '</div>' +
      '</div>' +
      '<div id="chatMsgs" style="flex:1;overflow-y:auto;padding:10px 14px;display:flex;flex-direction:column;min-height:220px;"></div>' +
      '<div style="display:flex;gap:8px;padding:10px 14px;border-top:1px solid var(--border,rgba(255,255,255,0.06));flex-shrink:0;">' +
        '<input id="chatInput" type="text" maxlength="200" placeholder="Say something..." style="flex:1;background:rgba(108,143,255,0.06);border:1px solid var(--border2,rgba(255,255,255,0.11));border-radius:9px;padding:8px 12px;color:var(--text,#f0f4ff);font-size:13px;outline:none;font-family:inherit;" />' +
        '<button id="chatSend" style="background:linear-gradient(135deg,var(--accent,#6c8fff),#4a6ee8);border:none;color:#fff;padding:8px 16px;border-radius:9px;cursor:pointer;font-size:13px;font-weight:700;font-family:inherit;flex-shrink:0;">Send</button>' +
      '</div>';

    document.getElementById('chatBack').onclick = function(){
      stopPoll(); currentPartyId = null;
      var tabs = document.getElementById('partyTabs');
      if (tabs) tabs.style.display = 'flex';
      showView('lobby');
    };

    function sendMsg() {
      var inp = document.getElementById('chatInput');
      if (!inp || !inp.value.trim()) return;
      var text = inp.value.trim(); inp.value = '';
      fbPush('/parties/'+partyId+'/messages', { author: me, emoji: uemoji(), text: text, ts: Date.now() });
    }
    document.getElementById('chatSend').onclick = sendMsg;
    document.getElementById('chatInput').onkeydown = function(e){ if(e.key==='Enter') sendMsg(); };

    var lastMsgCount = 0;

    function pollChat() {
      fbGet('/parties/'+partyId, function(p){
        if (!p) return;

        // Update title & members
        var titleEl = document.getElementById('chatTitle');
        var subsEl  = document.getElementById('chatSubs');
        var actEl   = document.getElementById('chatAct');
        if (titleEl) titleEl.textContent = p.name;
        var members = p.members ? Object.values(p.members) : [];
        if (subsEl) subsEl.textContent = members.map(function(m){ return m.emoji+' '+m.name; }).join(' · ');

        // Action button
        if (actEl && !actEl.dataset.built) {
          actEl.dataset.built = '1';
          if (p.host === me) {
            actEl.innerHTML = '<button id="disbandBtn" style="font-size:10px;padding:3px 10px;border-radius:6px;background:rgba(255,92,122,0.1);border:1px solid rgba(255,92,122,0.25);color:#ff7c94;cursor:pointer;font-family:inherit;">Disband</button>';
            document.getElementById('disbandBtn').onclick = function(){
              if (!confirm('Disband this party?')) return;
              fbUpdate('/parties/'+partyId, { active: false }, function(){
                stopPoll(); currentPartyId = null;
                var tabs = document.getElementById('partyTabs');
                if (tabs) tabs.style.display = 'flex';
                showView('lobby');
              });
            };
          } else {
            actEl.innerHTML = '<button id="leaveBtn" style="font-size:10px;padding:3px 10px;border-radius:6px;background:rgba(255,255,255,0.06);border:1px solid var(--border2);color:var(--text2);cursor:pointer;font-family:inherit;">Leave</button>';
            document.getElementById('leaveBtn').onclick = function(){
              fbGet('/parties/'+partyId+'/members', function(mems){
                var key = mems && Object.entries(mems).find(function(e){ return e[1].name === me; });
                var tasks = [];
                if (key) tasks.push(new Promise(function(res){ fbDelete('/parties/'+partyId+'/members/'+key[0], res); }));
                tasks.push(new Promise(function(res){ fbPush('/parties/'+partyId+'/messages', {author:'System',emoji:'👋',text:me+' left.',ts:Date.now(),system:true}, res); }));
                Promise.all(tasks).then(function(){
                  stopPoll(); currentPartyId = null;
                  var tabs = document.getElementById('partyTabs');
                  if (tabs) tabs.style.display = 'flex';
                  showView('lobby');
                });
              });
            };
          }
        }

        // Messages
        var msgs = p.messages ? Object.values(p.messages).sort(function(a,b){ return a.ts-b.ts; }) : [];
        if (msgs.length === lastMsgCount) return;
        lastMsgCount = msgs.length;

        var el = document.getElementById('chatMsgs');
        if (!el) return;
        var atBottom = el.scrollHeight - el.scrollTop <= el.clientHeight + 60;
        el.innerHTML = msgs.length === 0
          ? '<div style="text-align:center;color:var(--text3);font-size:13px;padding:28px 0;margin:auto;">No messages yet — say hi! 👋</div>'
          : msgs.map(function(m){
              if (m.system) return '<div style="text-align:center;font-size:11px;color:var(--text3);padding:3px 0;">'+esc(m.text)+'</div>';
              return '<div style="margin-bottom:8px;">'+
                '<div style="display:flex;align-items:baseline;gap:5px;margin-bottom:2px;">'+
                  '<span style="font-size:15px;line-height:1;">'+esc(m.emoji||'👤')+'</span>'+
                  '<span style="font-size:12px;font-weight:700;color:'+(m.author===me?'var(--accent3,#a5bcff)':'var(--text,#f0f4ff)')+';">'+esc(m.author)+'</span>'+
                  '<span style="font-size:10px;color:var(--text3);">'+ago(m.ts)+'</span>'+
                '</div>'+
                '<div style="font-size:13px;color:var(--text,#f0f4ff);line-height:1.5;padding-left:22px;word-break:break-word;">'+esc(m.text)+'</div>'+
              '</div>';
            }).join('');
        if (atBottom) el.scrollTop = el.scrollHeight;
      });
    }

    startPoll(pollChat, 2000);
  }

  // ── FRIENDS ───────────────────────────────────
  function renderFriends(body) {
    if (!uname()) { body.innerHTML = emptyMsg('👤','Set your name in 👤 Me first!'); return; }
    body.innerHTML =
      '<div style="padding:10px 14px;border-bottom:1px solid var(--border,rgba(255,255,255,0.06));flex-shrink:0;">' +
        '<div style="font-size:12px;color:var(--text2);margin-bottom:6px;font-weight:700;">Add friend by username</div>' +
        '<div style="display:flex;gap:8px;">' +
          '<input id="addFInput" type="text" maxlength="20" placeholder="Their exact username..." style="flex:1;background:rgba(108,143,255,0.06);border:1px solid var(--border2,rgba(255,255,255,0.11));border-radius:9px;padding:8px 12px;color:var(--text,#f0f4ff);font-size:13px;outline:none;font-family:inherit;" />' +
          '<button id="addFBtn" style="background:linear-gradient(135deg,var(--accent,#6c8fff),#4a6ee8);border:none;color:#fff;padding:8px 14px;border-radius:9px;cursor:pointer;font-size:13px;font-weight:700;font-family:inherit;flex-shrink:0;">Add</button>' +
        '</div>' +
        '<div id="addFMsg" style="font-size:12px;margin-top:6px;min-height:14px;"></div>' +
      '</div>' +
      '<div id="friendsContent" style="flex:1;overflow-y:auto;"></div>';

    document.getElementById('addFBtn').onclick = doAddFriend;
    document.getElementById('addFInput').onkeydown = function(e){ if(e.key==='Enter') doAddFriend(); };

    function loadFriends() {
      var content = document.getElementById('friendsContent');
      if (!content) return;

      fbGet('/friendRequests', function(reqData){
        fbGet('/users/'+uid()+'/friends', function(friendData){
          var html = '';

          // Incoming pending requests
          var pending = [];
          if (reqData) {
            Object.entries(reqData).forEach(function(entry){
              var rid = entry[0], r = entry[1];
              if (r.toId === uid() && r.status === 'pending') pending.push([rid, r]);
            });
          }

          if (pending.length) {
            html += '<div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--text3);padding:10px 14px 4px;">📨 Friend Requests</div>';
            pending.forEach(function(entry){
              var rid = entry[0], r = entry[1];
              html +=
                '<div style="display:flex;align-items:center;gap:10px;padding:10px 14px;border-bottom:1px solid var(--border,rgba(255,255,255,0.06));background:rgba(108,143,255,0.04);">' +
                  '<span style="font-size:24px;flex-shrink:0;">'+esc(r.fromEmoji||'👤')+'</span>' +
                  '<div style="flex:1;min-width:0;">' +
                    '<div style="font-size:13px;font-weight:700;color:var(--text,#f0f4ff);">'+esc(r.fromName)+'</div>' +
                    '<div style="font-size:11px;color:var(--text2);">wants to be friends</div>' +
                  '</div>' +
                  '<button data-rid="'+rid+'" data-fid="'+r.fromId+'" data-fn="'+esc(r.fromName)+'" data-fe="'+esc(r.fromEmoji||'👤')+'" class="acceptBtn" style="font-size:12px;font-weight:700;padding:4px 10px;border-radius:7px;background:rgba(0,229,160,0.12);border:1px solid rgba(0,229,160,0.28);color:#00e5a0;cursor:pointer;font-family:inherit;margin-right:4px;">✓</button>' +
                  '<button data-rid="'+rid+'" class="denyBtn" style="font-size:12px;font-weight:700;padding:4px 10px;border-radius:7px;background:rgba(255,92,122,0.1);border:1px solid rgba(255,92,122,0.25);color:#ff7c94;cursor:pointer;font-family:inherit;">✕</button>' +
                '</div>';
            });
          }

          // Friends list
          var friendIds = friendData ? Object.keys(friendData) : [];
          if (friendIds.length) {
            html += '<div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--text3);padding:10px 14px 4px;">👥 Friends</div>';
            friendIds.forEach(function(fid){
              var f = friendData[fid];
              html +=
                '<div style="display:flex;align-items:center;gap:10px;padding:10px 14px;border-bottom:1px solid var(--border,rgba(255,255,255,0.06));">' +
                  '<span style="font-size:26px;flex-shrink:0;">'+esc(f.emoji||'👤')+'</span>' +
                  '<div style="flex:1;min-width:0;">' +
                    '<div style="font-size:13px;font-weight:700;color:var(--text,#f0f4ff);">'+esc(f.name)+'</div>' +
                    '<div style="font-size:11px;color:var(--text2);">@'+esc(f.name)+'</div>' +
                  '</div>' +
                  '<button data-fid="'+fid+'" class="removeBtn" style="font-size:11px;padding:4px 10px;border-radius:7px;background:rgba(255,255,255,0.05);border:1px solid var(--border2,rgba(255,255,255,0.11));color:var(--text3);cursor:pointer;font-family:inherit;">Remove</button>' +
                '</div>';
            });
          }

          if (!pending.length && !friendIds.length) {
            html = emptyMsg('👥','No friends yet.<br>Add someone by their username!');
          }

          content.innerHTML = html;

          content.querySelectorAll('.acceptBtn').forEach(function(b){
            b.onclick = function(){ doAccept(b.dataset.rid, b.dataset.fid, b.dataset.fn, b.dataset.fe); };
          });
          content.querySelectorAll('.denyBtn').forEach(function(b){
            b.onclick = function(){ doDeny(b.dataset.rid); };
          });
          content.querySelectorAll('.removeBtn').forEach(function(b){
            b.onclick = function(){ doRemove(b.dataset.fid); };
          });
        });
      });
    }

    startPoll(loadFriends, 5000);
  }

  function doAddFriend() {
    var input = document.getElementById('addFInput');
    var msgEl = document.getElementById('addFMsg');
    var targetName = (input ? input.value : '').trim();
    if (!targetName) return;
    if (targetName === uname()) { setMsg(msgEl, "You can't add yourself!", '#ff7c94'); return; }
    setMsg(msgEl, 'Searching...', 'var(--text2)');

    fbGet('/users', function(users){
      if (!users) { setMsg(msgEl, 'No user found with that username.', '#ff7c94'); return; }
      var found = Object.entries(users).find(function(e){ return e[1].name === targetName; });
      if (!found) { setMsg(msgEl, 'No user found with that username.', '#ff7c94'); return; }
      var targetId = found[0], targetUser = found[1];
      if (targetId === uid()) { setMsg(msgEl, "You can't add yourself!", '#ff7c94'); return; }

      // Check already friends
      fbGet('/users/'+uid()+'/friends/'+targetId, function(existing){
        if (existing) { setMsg(msgEl, "You're already friends!", '#ff7c94'); return; }

        // Check request already sent
        fbGet('/friendRequests', function(reqs){
          var alreadySent = reqs && Object.values(reqs).some(function(r){
            return r.fromId === uid() && r.toId === targetId && r.status === 'pending';
          });
          if (alreadySent) { setMsg(msgEl, 'Request already sent!', '#ff7c94'); return; }

          fbPush('/friendRequests', {
            fromId: uid(), fromName: uname(), fromEmoji: uemoji(),
            toId: targetId, toName: targetUser.name,
            status: 'pending', ts: Date.now()
          }, function(){
            setMsg(msgEl, '✓ Friend request sent to '+targetName+'!', '#00e5a0');
            if (input) input.value = '';
          });
        });
      });
    });
  }

  function doAccept(rid, fromId, fromName, fromEmoji) {
    var me = uid(), myN = uname(), myE = uemoji();
    fbSet('/users/'+me+'/friends/'+fromId, { name: fromName, emoji: fromEmoji, since: Date.now() });
    fbSet('/users/'+fromId+'/friends/'+me, { name: myN, emoji: myE, since: Date.now() });
    fbUpdate('/friendRequests/'+rid, { status: 'accepted' });
  }

  function doDeny(rid) {
    fbUpdate('/friendRequests/'+rid, { status: 'denied' });
  }

  function doRemove(friendId) {
    if (!confirm('Remove this friend?')) return;
    fbDelete('/users/'+uid()+'/friends/'+friendId);
    fbDelete('/users/'+friendId+'/friends/'+uid());
  }

  function setMsg(el, text, color) {
    if (!el) return; el.textContent = text; el.style.color = color;
  }

  // ── PROFILE ───────────────────────────────────
  function renderProfile(body) {
    var name = uname(), emoji = uemoji(), selEmoji = emoji;
    body.innerHTML =
      '<div style="padding:16px;">' +
        '<div style="text-align:center;padding:16px;background:rgba(108,143,255,0.05);border-radius:12px;margin-bottom:16px;">' +
          '<div style="font-size:52px;margin-bottom:6px;line-height:1;">'+emoji+'</div>' +
          '<div style="font-size:15px;font-weight:700;color:var(--text,#f0f4ff);">'+(name||'No name set')+'</div>' +
          (name
            ? '<div style="font-size:11px;color:var(--text2);margin-top:3px;background:rgba(108,143,255,0.1);display:inline-block;padding:2px 10px;border-radius:20px;">@'+esc(name)+'</div>'
            : '<div style="font-size:12px;color:#ff7c94;margin-top:4px;">Set your name so friends can find you!</div>') +
        '</div>' +
        '<label style="font-size:12px;color:var(--text2);display:block;margin-bottom:6px;font-weight:700;">Username (friends search this to add you)</label>' +
        '<input id="ppName" type="text" maxlength="20" value="'+esc(name)+'" placeholder="Choose a username..." style="width:100%;background:rgba(108,143,255,0.06);border:1px solid var(--border2,rgba(255,255,255,0.11));border-radius:9px;padding:10px 14px;color:var(--text,#f0f4ff);font-size:13px;outline:none;font-family:inherit;box-sizing:border-box;margin-bottom:14px;" />' +
        '<label style="font-size:12px;color:var(--text2);display:block;margin-bottom:8px;font-weight:700;">Your emoji</label>' +
        '<div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:16px;">'+
          EMOJIS.map(function(e){
            return '<button class="ppEmoji" data-e="'+e+'" style="font-size:20px;padding:5px;background:'+(e===emoji?'rgba(108,143,255,0.2)':'rgba(255,255,255,0.04)')+';border:1px solid '+(e===emoji?'rgba(108,143,255,0.4)':'rgba(255,255,255,0.08)')+';border-radius:8px;cursor:pointer;line-height:1;">'+e+'</button>';
          }).join('') +
        '</div>' +
        '<button id="ppSave" style="width:100%;background:linear-gradient(135deg,var(--accent,#6c8fff),#4a6ee8);border:none;color:#fff;padding:11px;border-radius:9px;cursor:pointer;font-size:13px;font-weight:700;font-family:inherit;box-shadow:0 4px 14px rgba(108,143,255,0.3);margin-bottom:8px;">Save Profile</button>' +
        '<div id="ppMsg" style="font-size:12px;text-align:center;min-height:16px;"></div>' +
      '</div>';

    body.querySelectorAll('.ppEmoji').forEach(function(b){
      b.onclick = function(){
        body.querySelectorAll('.ppEmoji').forEach(function(x){ x.style.background='rgba(255,255,255,0.04)'; x.style.borderColor='rgba(255,255,255,0.08)'; });
        b.style.background='rgba(108,143,255,0.2)'; b.style.borderColor='rgba(108,143,255,0.4)';
        selEmoji = b.dataset.e;
      };
    });

    document.getElementById('ppSave').onclick = function(){
      var n = (document.getElementById('ppName').value||'').trim();
      var msgEl = document.getElementById('ppMsg');
      if (!n) { msgEl.style.color='#ff7c94'; msgEl.textContent='Enter a username.'; return; }

      // Check uniqueness
      fbGet('/users', function(users){
        var taken = users && Object.entries(users).some(function(e){ return e[1].name === n && e[0] !== uid(); });
        if (taken) { msgEl.style.color='#ff7c94'; msgEl.textContent='That username is taken. Try another.'; return; }
        saveMe(n, selEmoji);
        fbSet('/users/'+uid(), { name: n, emoji: selEmoji, uid: uid(), updatedAt: Date.now() }, function(){
          msgEl.style.color='#00e5a0'; msgEl.textContent='✓ Profile saved!';
          setTimeout(function(){ showView('profile'); }, 800);
        });
      });
    };
  }

  // ── utils ─────────────────────────────────────
  function emptyMsg(icon, text) {
    return '<div style="text-align:center;padding:40px 20px;color:var(--text3);font-size:13px;"><span style="font-size:32px;display:block;margin-bottom:8px;">'+icon+'</span>'+text+'</div>';
  }

  // ── INIT ──────────────────────────────────────
  function init() {
    cleanNavbar();
    injectButton();
    // Register user on load if they already have a name
    if (uname()) {
      fbGet('/users/'+uid(), function(existing){
        if (!existing) {
          fbSet('/users/'+uid(), { name: uname(), emoji: uemoji(), uid: uid(), updatedAt: Date.now() });
        }
      });
    }
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();

})();
