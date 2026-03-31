(function() {
  var el = document.getElementById('site-nav');
  if (!el) return;

  // Inject nav-mega styles if not already present
  if (!document.querySelector('style[data-nav-mega]')) {
    var style = document.createElement('style');
    style.setAttribute('data-nav-mega', '');
    style.textContent = '\
    .nav-mega{position:fixed;top:72px;left:0;right:0;bottom:0;background:rgba(74,90,104,0.92);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);z-index:99;opacity:0;pointer-events:none;transition:opacity 0.45s cubic-bezier(0.22,1,0.36,1);overflow-y:auto}\
    .nav-mega.active{opacity:1;pointer-events:auto}\
    .nav-mega-content{display:grid;grid-template-columns:1fr 2fr;gap:60px;padding-top:80px;align-items:start}\
    .nav-mega-title{font-size:6rem;font-weight:300;color:#fff;line-height:1.05;letter-spacing:-0.02em;opacity:0;transform:translateY(12px);transition:opacity 0.5s cubic-bezier(0.22,1,0.36,1) 0.08s,transform 0.5s cubic-bezier(0.22,1,0.36,1) 0.08s}\
    .nav-mega.active .nav-mega-title{opacity:1;transform:translateY(0)}\
    .nav-mega-links{padding-top:10px}\
    .nav-mega-links a{position:relative;display:flex;align-items:center;justify-content:space-between;padding:18px 0;border-bottom:1px solid rgba(255,255,255,0.2);color:rgba(255,255,255,0.7);font-family:"PP Neue Montreal",system-ui,sans-serif;font-size:0.9rem;font-weight:500;text-transform:uppercase;letter-spacing:0.05em;transition:opacity 0.2s,color 0.3s,transform 0.4s cubic-bezier(0.22,1,0.36,1);opacity:0;transform:translateY(10px)}\
    .nav-mega.active .nav-mega-links a{opacity:1;transform:translateY(0)}\
    .nav-mega.active .nav-mega-links a:nth-child(1){transition-delay:0.1s}\
    .nav-mega.active .nav-mega-links a:nth-child(2){transition-delay:0.15s}\
    .nav-mega.active .nav-mega-links a:nth-child(3){transition-delay:0.2s}\
    .nav-mega.active .nav-mega-links a:nth-child(4){transition-delay:0.25s}\
    .nav-mega.active .nav-mega-links a:nth-child(5){transition-delay:0.3s}\
    .nav-mega.active .nav-mega-links a:nth-child(6){transition-delay:0.35s}\
    .nav-mega-links a:first-child{border-top:1px solid rgba(255,255,255,0.2)}\
    .nav-mega-links a::after{content:"";position:absolute;bottom:0;left:0;width:0;height:1px;background:rgba(255,255,255,0.8);transition:width 0.4s cubic-bezier(0.22,1,0.36,1)}\
    .nav-mega.active .nav-mega-links a:hover{opacity:1;color:#fff}\
    .nav-mega.active .nav-mega-links a:hover::after{width:100%}\
    .nav-active{font-weight:600!important;color:#647483!important;text-decoration:underline;text-underline-offset:6px}\
    ';
    document.head.appendChild(style);
  }

  el.outerHTML = '\
  <header class="header">\
    <div class="container">\
      <a href="index.html" class="logo">\
        <img src="logo-imascono.svg" alt="Imascono" style="height:52px;width:auto;">\
      </a>\
      <nav class="nav-links">\
        <a href="index.html">HOME</a>\
        <a href="#">PRODUCTOS</a>\
        <a href="#">SECTORES</a>\
        <a href="casos-de-exito.html">CASOS DE ÉXITO</a>\
        <a href="#">BLOG</a>\
        <a href="#">RESEARCH</a>\
      </nav>\
      <div class="header-actions">\
        <span style="font-size:0.85rem;color:#8a9baa;cursor:pointer;">EN</span>\
        <span style="font-size:0.85rem;font-weight:600;color:#647483;cursor:pointer;">ES</span>\
        <button class="btn-primary" style="background:linear-gradient(135deg,#546878 0%,#546878 50%,#748a97 50%,#546878 100%);background-size:250% 250%;background-position:0 0;transition:all 0.6s ease,background-position 0.6s ease;" onmouseover="this.style.backgroundPosition=\'100% 100%\'" onmouseout="this.style.backgroundPosition=\'0 0\'">Hablemos <span class="arrow">→</span></button>\
      </div>\
    </div>\
  </header>\
  \
  <div class="nav-mega" id="nav-mega-productos">\
    <div class="container nav-mega-content">\
      <h2 class="nav-mega-title">PRODUCTOS</h2>\
      <div class="nav-mega-links">\
        <a href="#">AVATAR IA <span>→</span></a>\
        <a href="#">PHOTOCALL AUMENTADO <span>→</span></a>\
        <a href="#">INFOGRAFÍA INTERACTIVA <span>→</span></a>\
        <a href="#">ENTRENAMIENTO VR <span>→</span></a>\
        <a href="#">ENTORNOS GAMIFICADOS <span>→</span></a>\
        <a href="#">PROYECTOS A MEDIDA <span>→</span></a>\
      </div>\
    </div>\
  </div>\
  \
  <div class="nav-mega" id="nav-mega-sectores">\
    <div class="container nav-mega-content">\
      <h2 class="nav-mega-title">SECTORES</h2>\
      <div class="nav-mega-links">\
        <a href="sector-turismo.html">TURISMO <span>→</span></a>\
        <a href="sector-retail-ocio.html">RETAIL &amp; OCIO <span>→</span></a>\
        <a href="sector-banca-seguros.html">BANCA &amp; SEGUROS <span>→</span></a>\
        <a href="sector-salud.html">SALUD <span>→</span></a>\
        <a href="sector-industria.html">INDUSTRIA <span>→</span></a>\
        <a href="sector-formacion.html">FORMACIÓN <span>→</span></a>\
      </div>\
    </div>\
  </div>';

  // Mega dropdown behavior
  var megas = [
    { label: 'PRODUCTOS', id: 'nav-mega-productos' },
    { label: 'SECTORES', id: 'nav-mega-sectores' }
  ];
  var links = document.querySelectorAll('.nav-links a');

  megas.forEach(function(cfg) {
    var navLink = null;
    links.forEach(function(a) { if (a.textContent.trim() === cfg.label) navLink = a; });
    if (!navLink) return;
    var mega = document.getElementById(cfg.id);
    if (!mega) return;
    var megaContent = mega.querySelector('.nav-mega-content');
    var timeout;

    function closeAll() {
      megas.forEach(function(other) {
        var m = document.getElementById(other.id);
        if (m) m.classList.remove('active');
      });
      links.forEach(function(a) { a.classList.remove('nav-active'); });
    }

    function show() { clearTimeout(timeout); closeAll(); mega.classList.add('active'); navLink.classList.add('nav-active'); }
    function hide() { timeout = setTimeout(function() { mega.classList.remove('active'); navLink.classList.remove('nav-active'); }, 150); }

    navLink.addEventListener('mouseenter', show);
    navLink.addEventListener('mouseleave', hide);
    megaContent.addEventListener('mouseenter', function() { clearTimeout(timeout); });
    megaContent.addEventListener('mouseleave', hide);

    mega.addEventListener('click', function(e) {
      if (e.target === mega || !e.target.closest('.nav-mega-links')) {
        mega.classList.remove('active');
        navLink.classList.remove('nav-active');
      }
    });
  });

  document.addEventListener('click', function(e) {
    if (!e.target.closest('.nav-mega') && !e.target.closest('.nav-links')) {
      megas.forEach(function(cfg) {
        var m = document.getElementById(cfg.id);
        if (m) m.classList.remove('active');
      });
      links.forEach(function(a) { a.classList.remove('nav-active'); });
    }
  });
})();
