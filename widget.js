(function () {
  var C = window.VW_CONFIG || {
    videoUrl:     'https://xrehepllramactmsrzqa.supabase.co/storage/v1/object/public/Marketing/Website%20Video.mp4',
    greeting:     'Welcome!',
    ctaColor:     '#1281d8',
    ctaTextColor: '#ffffff',
    buttons: [
      { label: 'Book Your Demo', url: 'https://weareintouch.app/#demo' },
      { label: 'Product Tour',   url: 'https://weareintouch.app/#features' }
    ]
  };

  // ── Inject CSS ──
  var style = document.createElement('style');
  style.textContent = [
    '#vw-root *,#vw-root *::before,#vw-root *::after{box-sizing:border-box;margin:0;padding:0;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,sans-serif}',
    '#vw-bubble{position:fixed;bottom:24px;right:24px;cursor:pointer;z-index:2147483646;animation:vw-rise .45s cubic-bezier(.34,1.56,.64,1) both}',
    '@keyframes vw-rise{from{opacity:0;transform:translateY(28px) scale(.85)}to{opacity:1;transform:translateY(0) scale(1)}}',
    '#vw-bubble-ring{width:170px;height:200px;border-radius:18px;overflow:hidden;box-shadow:0 8px 30px rgba(0,0,0,.28);position:relative;background:#000}',
    '#vw-bubble-video{width:100%;height:100%;object-fit:cover;display:block}',
    '#vw-bubble-x{position:absolute;top:8px;right:8px;width:24px;height:24px;border-radius:50%;background:rgba(0,0,0,.55);color:#fff;border:none;font-size:12px;cursor:pointer;display:flex;align-items:center;justify-content:center;z-index:2;backdrop-filter:blur(4px)}',
    '#vw-modal{position:fixed;bottom:24px;right:24px;width:320px;border-radius:18px;overflow:hidden;box-shadow:0 12px 48px rgba(0,0,0,.28);z-index:2147483647;display:none;animation:vw-pop .3s cubic-bezier(.34,1.56,.64,1) both;background:#000}',
    '@keyframes vw-pop{from{opacity:0;transform:scale(.88) translateY(16px)}to{opacity:1;transform:scale(1) translateY(0)}}',
    '#vw-modal.vw-open{display:block}',
    '#vw-player{width:100%;aspect-ratio:9/14;object-fit:cover;display:block;background:#000}',
    '#vw-top-overlay{position:absolute;top:0;left:0;right:0;background:linear-gradient(to bottom,rgba(0,0,0,.65) 0%,transparent 100%);z-index:2}',
    '#vw-prog-wrap{height:3px;background:rgba(255,255,255,.25);margin:10px 14px 0;border-radius:2px}',
    '#vw-prog-fill{height:100%;width:0%;background:#fff;border-radius:2px;transition:width .25s linear}',
    '#vw-header{display:flex;align-items:center;gap:10px;padding:10px 12px 14px}',
    '#vw-avatar{width:34px;height:34px;border-radius:50%;font-size:12px;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0;position:relative}',
    '#vw-badge{position:absolute;bottom:-3px;right:-3px;width:16px;height:16px;display:block;filter:drop-shadow(0 0 1px #fff)}',
    '#vw-title{flex:1;font-size:14px;font-weight:700;color:#fff}',
    '.vw-ctrl{background:none;border:none;cursor:pointer;color:rgba(255,255,255,.8);width:28px;height:28px;border-radius:6px;display:flex;align-items:center;justify-content:center;transition:color .15s;flex-shrink:0}',
    '.vw-ctrl:hover{color:#fff}',
    '#vw-replay{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:64px;height:64px;border-radius:50%;background:rgba(0,0,0,.55);backdrop-filter:blur(4px);display:none;align-items:center;justify-content:center;cursor:pointer;z-index:3;transition:background .15s}',
    '#vw-replay:hover{background:rgba(0,0,0,.75)}',
    '#vw-replay.vw-visible{display:flex}',
    '#vw-cta-wrap{position:absolute;bottom:0;left:0;right:0;display:flex;flex-direction:column;gap:8px;padding:40px 12px 16px;background:linear-gradient(to top,rgba(0,0,0,.75) 0%,transparent 100%);z-index:2}',
    '.vw-btn{display:block!important;width:100%!important;padding:10px 16px!important;border-radius:12px!important;font-size:15px!important;font-weight:700!important;text-align:center!important;text-decoration:none!important;cursor:pointer!important;border:none!important;transition:opacity .15s,transform .1s;line-height:1!important}',
    '.vw-btn:hover{opacity:.88;transform:translateY(-1px)}',
    '.vw-btn:active{transform:translateY(0)}',
    '@media(max-width:520px){#vw-bubble{bottom:16px;right:16px}#vw-bubble-ring{width:140px;height:165px}#vw-modal{bottom:0;right:0;left:0;width:100%;border-radius:20px 20px 0 0}#vw-player{aspect-ratio:9/16;width:100%}}'
  ].join('');
  document.head.appendChild(style);

  // ── Inject HTML ──
  var root = document.createElement('div');
  root.id = 'vw-root';
  root.innerHTML = '<div id="vw-bubble"><div id="vw-bubble-ring"><video id="vw-bubble-video" autoplay muted loop playsinline></video><button id="vw-bubble-x" title="Dismiss">&#x2715;</button></div></div><div id="vw-modal"><video id="vw-player" autoplay playsinline muted></video><div id="vw-top-overlay"><div id="vw-prog-wrap"><div id="vw-prog-fill"></div></div><div id="vw-header"><div id="vw-avatar"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4"/><path d="M14 13.12c0 2.38 0 6.38-1 8.88"/><path d="M17.29 21.02c.12-.6.43-2.3.5-3.02"/><path d="M2 12a10 10 0 0 1 18-6"/><path d="M2 16h.01"/><path d="M21.8 16c.2-2 .131-5.354 0-6"/><path d="M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2"/><path d="M8.65 22c.21-.66.45-1.32.57-2"/><path d="M9 6.8a6 6 0 0 1 9 5.2v2"/></svg><svg id="vw-badge" viewBox="0 0 24 24" fill="none"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" fill="#22c55e"/><path d="m9 12 2 2 4-4" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div><span id="vw-title"></span><button class="vw-ctrl" id="vw-mute" title="Toggle sound"><svg id="vw-icon-mute" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:block"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg><svg id="vw-icon-sound" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:none"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg></button><button class="vw-ctrl" id="vw-close" title="Close"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></button></div></div><div id="vw-replay"><svg width="22" height="22" viewBox="0 0 24 24" fill="#fff"><polygon points="5 3 19 12 5 21 5 3"/></svg></div><div id="vw-cta-wrap"></div></div>';
  document.body.appendChild(root);

  // ── Element refs ──
  var bubble    = document.getElementById('vw-bubble');
  var bubbleVid = document.getElementById('vw-bubble-video');
  var bubbleX   = document.getElementById('vw-bubble-x');
  var modal     = document.getElementById('vw-modal');
  var player    = document.getElementById('vw-player');
  var progFill  = document.getElementById('vw-prog-fill');
  var replayBtn = document.getElementById('vw-replay');
  var muteBtn   = document.getElementById('vw-mute');
  var closeBtn  = document.getElementById('vw-close');
  var iconMute  = document.getElementById('vw-icon-mute');
  var iconSound = document.getElementById('vw-icon-sound');
  var title     = document.getElementById('vw-title');
  var avatar    = document.getElementById('vw-avatar');
  var ctaWrap   = document.getElementById('vw-cta-wrap');
  var muted = true;

  // ── Apply config ──
  bubbleVid.src = C.videoUrl;
  player.src    = C.videoUrl;
  title.textContent = C.greeting || '';
  avatar.style.background = '#ffffff';

  (C.buttons || []).forEach(function (b) {
    var a = document.createElement('a');
    a.href = b.url; a.className = 'vw-btn'; a.textContent = b.label;
    a.style.background = C.ctaColor; a.style.color = C.ctaTextColor;
    ctaWrap.appendChild(a);
  });

  // ── Interactions ──
  bubble.addEventListener('click', function (e) {
    if (e.target === bubbleX || bubbleX.contains(e.target)) return;
    bubble.style.display = 'none';
    modal.classList.add('vw-open');
    player.currentTime = 0; player.muted = false; muted = false; setMuteIcon(false);
    player.play().catch(function () { player.muted = true; muted = true; setMuteIcon(true); player.play().catch(function(){}); });
  });

  bubbleX.addEventListener('click', function (e) {
    e.stopPropagation(); bubble.style.display = 'none';
    try { sessionStorage.setItem('vw-dismissed', '1'); } catch(e) {}
  });

  closeBtn.addEventListener('click', function () {
    modal.classList.remove('vw-open'); player.pause();
    replayBtn.classList.remove('vw-visible'); bubble.style.display = 'flex';
  });

  muteBtn.addEventListener('click', function () { muted = !muted; player.muted = muted; setMuteIcon(muted); });

  function setMuteIcon(m) { iconMute.style.display = m ? 'block' : 'none'; iconSound.style.display = m ? 'none' : 'block'; }

  player.addEventListener('timeupdate', function () {
    if (player.duration) progFill.style.width = (player.currentTime / player.duration * 100) + '%';
  });

  player.addEventListener('ended', function () { replayBtn.classList.add('vw-visible'); });

  replayBtn.addEventListener('click', function () {
    replayBtn.classList.remove('vw-visible'); player.currentTime = 0; player.play().catch(function(){});
  });

  try { if (sessionStorage.getItem('vw-dismissed')) bubble.style.display = 'none'; } catch(e) {}
  bubbleVid.play().catch(function(){});
})();
