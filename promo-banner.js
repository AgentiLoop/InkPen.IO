// AgentiLoop promo banner — shared across all AgentiLoop websites.
// Source of truth: Agent.xcf.ai (index.html #promo, styles.css "Promo banner", script.js).
// Include once per page: <script src="promo-banner.js" defer></script>
// The banner goes directly below the site's top menu (a <header>/<nav> that is the first element in <body>),
// or at the very top when the page has no top menu.
// Add data-fixed to the script tag on sites with a fixed nav: the banner is then fixed just below the nav
// and the page offsets its content with var(--promo-h).
(function () {
    if (document.getElementById('promo')) return;
    var me = document.currentScript;
    var style = document.createElement('style');
    style.id = 'promo-style';
    style.textContent = "#promo, #promo * { box-sizing: border-box; }\n#promo * { font-family: inherit; }\n#promo { display: block; width: 100%; margin: 0; font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Helvetica Neue', sans-serif; font-weight: 400; letter-spacing: normal; text-transform: none; text-align: left; -webkit-font-smoothing: antialiased; }\n#promo p, #promo strong, #promo b, #promo span, #promo code { margin: 0; font-style: normal; text-transform: none; letter-spacing: normal; }\n#promo strong, #promo b { font-weight: 700; }\n#promo a { text-decoration: none; border: 0; }\n#promo a:hover, #promo a:focus { text-decoration: none; }\n#promo button { margin: 0; font: inherit; line-height: normal; min-width: 0; min-height: 0; box-shadow: none; }\n#promo svg { display: inline-block; vertical-align: middle; }\n#promo.promo-fixed { position: fixed; top: 0; left: 0; right: 0; z-index: 999; }\n#promo {\n    --promo-ms: 7000ms;\n    position: relative;\n    overflow: hidden;\n    isolation: isolate;\n    background: #060913;\n    border-bottom: 1px solid rgba(255, 255, 255, 0.08);\n}\n#promo::after { \n    content: \"\";\n    position: absolute;\n    inset: 0;\n    z-index: 1;\n    pointer-events: none;\n    background: linear-gradient(105deg, transparent 35%, rgba(255, 255, 255, 0.10) 50%, transparent 65%);\n    transform: translateX(-100%);\n    animation: promo-shine 3.5s ease-in-out infinite;\n}\n@keyframes promo-shine { 0%, 30% { transform: translateX(-100%); } 70%, 100% { transform: translateX(100%); } }\n#promo .promo-stage { display: grid; position: relative; z-index: 2; }\n#promo .promo-slide {\n    grid-area: 1 / 1;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-wrap: wrap;\n    gap: 10px 16px;\n    padding: 12px 56px 12px 24px;\n    text-align: center;\n    font-size: 0.98rem;\n    line-height: 1.45;\n    color: #eef2fb;\n    opacity: 0;\n    visibility: hidden;\n    transform: translateY(14px) scale(0.98);\n    filter: blur(6px);\n    transition: opacity .6s ease, transform .6s cubic-bezier(.2, .8, .2, 1), filter .6s ease, visibility 0s linear .6s;\n}\n#promo .promo-slide.is-active {\n    opacity: 1;\n    visibility: visible;\n    transform: none;\n    filter: none;\n    transition: opacity .6s ease, transform .6s cubic-bezier(.2, .8, .2, 1), filter .6s ease, visibility 0s;\n}\n#promo .promo-slide::before { \n    content: \"\";\n    position: absolute;\n    inset: 0;\n    z-index: -1;\n    background-size: 300% 300%;\n    animation: promo-flow 10s ease infinite;\n}\n@keyframes promo-flow { 0%, 100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }\n#promo .promo-text { margin: 0; }\n#promo .promo-text code {\n    font-family: ui-monospace, SFMono-Regular, Menlo, monospace;\n    font-size: 0.9em;\n    padding: 2px 8px;\n    border-radius: 6px;\n    border: 1px dashed currentColor;\n    background: rgba(0, 0, 0, 0.35);\n}\n#promo .promo-grad { background-clip: text; -webkit-background-clip: text; color: transparent; background-size: 200% auto; animation: promo-text-flow 4s linear infinite; }\n@keyframes promo-text-flow { to { background-position: 200% center; } }\n#promo .promo-icon { display: inline-grid; place-items: center; width: 34px; height: 34px; border-radius: 10px; flex-shrink: 0; }\n#promo .promo-cta {\n    position: relative;\n    display: inline-flex;\n    align-items: center;\n    gap: 6px;\n    padding: 7px 16px;\n    border-radius: 999px;\n    font-weight: 700;\n    font-size: 0.9rem;\n    color: #fff;\n    text-decoration: none;\n    white-space: nowrap;\n    transition: transform .2s ease, box-shadow .2s ease;\n    animation: promo-pulse 2.4s ease-in-out infinite;\n}\n#promo .promo-cta:hover { transform: translateY(-2px) scale(1.04); }\n#promo .promo-cta span { transition: transform .2s ease; }\n#promo .promo-cta:hover span { transform: translateX(4px); }\n@keyframes promo-pulse { 0%, 100% { box-shadow: 0 0 0 0 var(--promo-glow, rgba(59, 130, 246, .55)); } 50% { box-shadow: 0 0 0 8px transparent; } }\n\n#promo .promo-mac::before { background-image: linear-gradient(120deg, #0b1a3a, #1e1b4b, #0c2a3a, #1e1b4b, #0b1a3a); }\n#promo .promo-mac { --promo-glow: rgba(34, 211, 238, .55); }\n#promo .promo-mac .promo-grad { background-image: linear-gradient(90deg, #60a5fa, #22d3ee, #a78bfa, #60a5fa); }\n#promo .promo-mac .promo-icon { color: #fff; background: linear-gradient(135deg, #3b82f6, #22d3ee); box-shadow: 0 0 18px rgba(34, 211, 238, .5); }\n#promo .promo-chip { display: inline-block; padding: 1px 9px; border-radius: 999px; font-weight: 700; font-size: 0.85em; }\n#promo .chip-as { color: #e9d5ff; background: rgba(167, 139, 250, .18); border: 1px solid rgba(167, 139, 250, .5); }\n#promo .chip-intel { color: #bae6fd; background: rgba(56, 189, 248, .15); border: 1px solid rgba(56, 189, 248, .5); }\n#promo .promo-mac .promo-cta { background: linear-gradient(135deg, #3b82f6, #22d3ee); }\n\n#promo .promo-cli::before { background-image: linear-gradient(120deg, #1a0f08, #0a1f24, #24110a, #06222a, #1a0f08); }\n#promo .promo-cli { --promo-glow: rgba(249, 115, 22, .55); font-family: ui-monospace, SFMono-Regular, Menlo, monospace; font-size: 0.92rem; }\n#promo .promo-cli .promo-grad { background-image: linear-gradient(90deg, #fb923c, #f97316, #22d3ee, #00add8, #fb923c); }\n#promo .promo-prompt { font-weight: 800; color: #4ade80; background: #0b0f0c; border: 1px solid rgba(74, 222, 128, .45); box-shadow: 0 0 14px rgba(74, 222, 128, .35); font-size: 0.85rem; }\n#promo .promo-new {\n    display: inline-block;\n    margin-right: 4px;\n    padding: 1px 8px;\n    border-radius: 6px;\n    font-weight: 800;\n    font-size: 0.78em;\n    letter-spacing: .08em;\n    text-transform: uppercase;\n    color: #0b0f0c;\n    background: #4ade80;\n    animation: promo-blink-bg 1.6s ease-in-out infinite;\n}\n@keyframes promo-blink-bg { 50% { background: #bbf7d0; } }\n#promo .promo-lang { font-weight: 800; text-decoration: none; padding: 1px 8px; border-radius: 6px; transition: background .2s ease, transform .2s ease; display: inline-block; }\n#promo .promo-lang:hover { transform: translateY(-1px); }\n#promo .lang-rust { color: #fdba74; background: rgba(249, 115, 22, .16); border: 1px solid rgba(249, 115, 22, .5); }\n#promo .lang-rust:hover { background: rgba(249, 115, 22, .32); }\n#promo .lang-go { color: #67e8f9; background: rgba(0, 173, 216, .16); border: 1px solid rgba(0, 173, 216, .5); }\n#promo .lang-go:hover { background: rgba(0, 173, 216, .32); }\n#promo .promo-caret { display: inline-block; width: 9px; height: 1.05em; margin-left: 4px; vertical-align: -2px; background: #4ade80; animation: promo-caret 1s steps(1) infinite; }\n@keyframes promo-caret { 50% { opacity: 0; } }\n#promo .promo-cli .promo-cta { background: linear-gradient(135deg, #f97316, #00add8); }\n\n#promo .promo-fx::before { background-image: linear-gradient(120deg, #1c1407, #2a1d05, #151a26, #2a1d05, #1c1407); }\n#promo .promo-fx { --promo-glow: rgba(250, 204, 21, .55); }\n#promo .promo-fx .promo-grad { background-image: linear-gradient(90deg, #fde68a, #f59e0b, #e5e7eb, #fde68a); }\n#promo .promo-sponsored {\n    padding: 3px 10px;\n    border-radius: 999px;\n    font-size: 0.7rem;\n    font-weight: 800;\n    letter-spacing: .14em;\n    text-transform: uppercase;\n    color: #fde68a;\n    border: 1px solid rgba(250, 204, 21, .55);\n    background: rgba(250, 204, 21, .1);\n}\n#promo .promo-save { display: inline-block; font-weight: 700; color: #fef3c7; }\n#promo .promo-save b { font-size: 1.25em; color: #facc15; text-shadow: 0 0 12px rgba(250, 204, 21, .7); }\n#promo .promo-fx code { color: #fde68a; }\n#promo .promo-fx .promo-cta { color: #1c1407; background: linear-gradient(135deg, #fde68a, #f59e0b); }\n\n#promo .promo-dots { position: absolute; z-index: 3; right: 14px; top: 50%; transform: translateY(-50%); display: flex; flex-direction: column; gap: 6px; }\n#promo .promo-dot { position: relative; width: 6px; height: 18px; padding: 0; border: 0; border-radius: 3px; background: rgba(255, 255, 255, .2); cursor: pointer; overflow: hidden; }\n#promo .promo-dot span { position: absolute; left: 0; right: 0; top: 0; height: 0; background: #fff; border-radius: 3px; }\n#promo .promo-dot.is-active span { animation: promo-progress var(--promo-ms) linear forwards; }\n#promo.is-paused .promo-dot.is-active span { animation-play-state: paused; }\n@keyframes promo-progress { to { height: 100%; } }\n\n@media (max-width: 640px) {\n    #promo .promo-slide { padding: 12px 36px 12px 16px; font-size: 0.9rem; gap: 8px 10px; }\n    #promo .promo-icon, #promo .promo-sponsored { display: none; }\n    #promo .promo-dots { right: 10px; }\n}\n@media (prefers-reduced-motion: reduce) {\n    #promo::after, #promo .promo-slide::before, #promo .promo-grad, #promo .promo-cta, #promo .promo-new, #promo .promo-caret { animation: none; }\n    #promo .promo-slide { transition: opacity .3s ease, visibility 0s linear .3s; transform: none; filter: none; }\n}\n";
    document.head.appendChild(style);
    // Top menu = first real element in <body> when it is a <header> or <nav>.
    var nav = document.body.firstElementChild;
    while (nav && (/^(SCRIPT|NOSCRIPT|STYLE|TEMPLATE|LINK)$/.test(nav.tagName) || nav.classList.contains('skip-link'))) nav = nav.nextElementSibling;
    if (nav && !/^(HEADER|NAV)$/.test(nav.tagName)) nav = null;
    var promoHTML = "<aside class=\"promo\" id=\"promo\" aria-label=\"Announcements\"><div class=\"promo-stage\"><div class=\"promo-slide promo-mac is-active\" data-slide=\"0\"><span class=\"promo-icon\" aria-hidden=\"true\"><svg viewBox=\"0 0 24 24\" width=\"22\" height=\"22\"><path fill=\"currentColor\" d=\"M16.4 12.6c0-2.4 2-3.6 2.1-3.6-1.1-1.7-2.9-1.9-3.5-1.9-1.5-.2-2.9.9-3.7.9-.8 0-1.9-.9-3.2-.8-1.6 0-3.1 1-4 2.4-1.7 3-.4 7.4 1.2 9.8.8 1.2 1.8 2.5 3 2.4 1.2 0 1.7-.8 3.1-.8 1.5 0 1.9.8 3.2.8 1.3 0 2.1-1.2 2.9-2.4.9-1.4 1.3-2.7 1.3-2.8 0 0-2.4-1-2.4-4zM14 5.4c.7-.8 1.1-1.9 1-3-1 0-2.1.7-2.8 1.5-.6.7-1.2 1.8-1 2.9 1 .1 2.1-.6 2.8-1.4z\"/></svg></span><p class=\"promo-text\"><strong class=\"promo-grad\">Agent! for Mac</strong> now supports <strong>macOS 14.6</strong> or later on <span class=\"promo-chip chip-as\">Apple Silicon</span> and <span class=\"promo-chip chip-intel\">Intel</span></p><a class=\"promo-cta\" id=\"promo-mac-dl\" href=\"https://github.com/AgentiLoop/Agent/releases\" target=\"_blank\" rel=\"noopener\">Download here <span aria-hidden=\"true\">&rarr;</span></a></div><div class=\"promo-slide promo-cli\" data-slide=\"1\" aria-hidden=\"true\"><span class=\"promo-icon promo-prompt\" aria-hidden=\"true\">&gt;_</span><p class=\"promo-text\"><span class=\"promo-new\">New</span> from AgentiLoop: <strong class=\"promo-grad\">AgentiLoopCLI</strong> written in <a class=\"promo-lang lang-rust\" href=\"https://github.com/AgentiLoop/AgentiLoopCLI\" target=\"_blank\" rel=\"noopener\" tabindex=\"-1\">Rust</a> and <a class=\"promo-lang lang-go\" href=\"https://github.com/AgentiLoop/AgentiLoopGo\" target=\"_blank\" rel=\"noopener\" tabindex=\"-1\">Go</a><span class=\"promo-caret\" aria-hidden=\"true\"></span></p><a class=\"promo-cta\" href=\"https://github.com/AgentiLoop/AgentiLoopCLI\" target=\"_blank\" rel=\"noopener\" tabindex=\"-1\">Check it out here <span aria-hidden=\"true\">&rarr;</span></a></div><div class=\"promo-slide promo-fx\" data-slide=\"2\" aria-hidden=\"true\"><span class=\"promo-sponsored\">Sponsor</span><p class=\"promo-text\"><strong class=\"promo-grad\">Fluxion AI</strong>: one API for GPT, Claude &amp; every leading model. <span class=\"promo-save\">Save up to <b>70%</b></span> + <strong>$3 free credits</strong> with code <code>AIAGENT</code></p><a class=\"promo-cta\" href=\"https://fluxionai.world/register?source=github&amp;campaign=aiagent&amp;promo=AIAGENT\" target=\"_blank\" rel=\"sponsored noopener\" tabindex=\"-1\">Claim $3 credits <span aria-hidden=\"true\">&rarr;</span></a></div></div><div class=\"promo-dots\" role=\"tablist\" aria-label=\"Choose announcement\"><button type=\"button\" class=\"promo-dot is-active\" data-go=\"0\" aria-label=\"Agent! for Mac\"><span></span></button><button type=\"button\" class=\"promo-dot\" data-go=\"1\" aria-label=\"AgentiLoopCLI\"><span></span></button><button type=\"button\" class=\"promo-dot\" data-go=\"2\" aria-label=\"Sponsor: Fluxion AI\"><span></span></button></div></aside>";
    if (nav) nav.insertAdjacentHTML('afterend', promoHTML); else document.body.insertAdjacentHTML('afterbegin', promoHTML);
    var promo = document.getElementById('promo');
    var fixed = me && me.hasAttribute('data-fixed');
    if (fixed) promo.classList.add('promo-fixed');

    // Mac CTA: newest release overall (pre-release included) with a DMG
    fetch('https://api.github.com/repos/AgentiLoop/Agent/releases').then(function (r) { return r.ok ? r.json() : []; }).then(function (all) {
        var a = document.getElementById('promo-mac-dl');
        for (var i = 0; a && i < all.length; i++) {
            if (all[i].draft) continue;
            var dmg = (all[i].assets || []).filter(function (x) { return /\.dmg$/.test(x.name); })[0];
            if (dmg) { a.href = dmg.browser_download_url; a.removeAttribute('target'); break; }
        }
    }).catch(function () {});

    // Rotate the 3 slides, pause on hover/focus, dots jump to a slide.
    var slides = promo.querySelectorAll('.promo-slide');
    var dots = promo.querySelectorAll('.promo-dot');
    var ms = 7000, cur = 0, timer = null, left = ms, started = 0;
    function syncHeight() {
        document.documentElement.style.setProperty('--promo-h', promo.offsetHeight + 'px');
        if (fixed && nav) { nav.style.top = '0px'; promo.style.top = nav.offsetHeight + 'px'; } // banner sits under the fixed nav
    }
    syncHeight();
    if (window.ResizeObserver) { var ro = new ResizeObserver(syncHeight); ro.observe(promo); if (nav) ro.observe(nav); } else window.addEventListener('resize', syncHeight);
    function show(i) {
        cur = (i + slides.length) % slides.length;
        slides.forEach(function (s, n) {
            var on = n === cur;
            s.classList.toggle('is-active', on);
            s.setAttribute('aria-hidden', on ? 'false' : 'true');
            s.querySelectorAll('a').forEach(function (a) { a.tabIndex = on ? 0 : -1; });
        });
        dots.forEach(function (d, n) {
            d.classList.remove('is-active');
            void d.offsetWidth; // restart the progress animation
            d.classList.toggle('is-active', n === cur);
            d.setAttribute('aria-selected', n === cur ? 'true' : 'false');
        });
        left = ms;
        schedule();
    }
    function schedule() {
        clearTimeout(timer);
        if (promo.classList.contains('is-paused')) return;
        started = Date.now();
        timer = setTimeout(function () { show(cur + 1); }, left);
    }
    function pause() {
        if (promo.classList.contains('is-paused')) return;
        promo.classList.add('is-paused');
        clearTimeout(timer);
        left = Math.max(0, left - (Date.now() - started));
    }
    function resume() {
        if (promo.contains(document.activeElement) && promo.matches(':focus-within')) return;
        promo.classList.remove('is-paused');
        schedule();
    }
    dots.forEach(function (d) {
        d.addEventListener('click', function () { show(+d.dataset.go); });
    });
    promo.addEventListener('mouseenter', pause);
    promo.addEventListener('mouseleave', resume);
    promo.addEventListener('focusin', pause);
    promo.addEventListener('focusout', function () { setTimeout(resume, 0); });
    show(0);
})();
