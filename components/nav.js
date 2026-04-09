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
    .nav-mega-links a>span:last-child{transition:transform 0.3s cubic-bezier(0.22,1,0.36,1)}\
    .nav-mega.active .nav-mega-links a:hover>span:last-child{transform:translateX(6px)}\
    .nav-mega.active .nav-mega-links a:hover{opacity:1;color:#fff}\
    .nav-mega.active .nav-mega-links a:hover::after{width:100%}\
    .nav-active{font-weight:600!important;color:#647483!important;text-decoration:underline;text-underline-offset:6px}\
    .nav-mega-name{display:flex;align-items:baseline;gap:8px;flex:1}\
    .nav-mega-desc{font-weight:300;font-size:0.75rem;text-transform:uppercase;letter-spacing:0.05em;color:rgba(255,255,255,0.4)}\
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
        <a href="#">SERVICIOS</a>\
        <a href="#">SECTORES</a>\
        <a href="#">CASOS DE ÉXITO</a>\
        <a href="#">PRODUCTOS</a>\
        <a href="#">COMPAÑÍA</a>\
        <a href="#">INSPIRA</a>\
      </nav>\
      <div class="header-actions">\
        <span style="font-size:0.85rem;color:#8a9baa;cursor:pointer;">EN</span>\
        <span style="font-size:0.85rem;font-weight:600;color:#647483;cursor:pointer;">ES</span>\
        <a href="#contact-form" class="btn-primary" style="text-decoration:none;background:linear-gradient(135deg,#546878 0%,#546878 50%,#748a97 50%,#546878 100%);background-size:250% 250%;background-position:0 0;transition:all 0.6s ease,background-position 0.6s ease;" onmouseover="this.style.backgroundPosition=\'100% 100%\'" onmouseout="this.style.backgroundPosition=\'0 0\'">Hablemos <span class="arrow">→</span></a>\
      </div>\
    </div>\
  </header>\
  \
  <div class="nav-mega" id="nav-mega-servicios">\
    <div class="container nav-mega-content">\
      <span class="nav-mega-title">SERVICIOS</span>\
      <div class="nav-mega-links">\
        <a href="servicio-inteligencia-artificial.html">INTELIGENCIA ARTIFICIAL <span>→</span></a>\
        <a href="servicio-realidad-extendida.html">REALIDAD EXTENDIDA <span>→</span></a>\
        <a href="servicio-consultoria-producto-digital.html">CONSULTORÍA PRODUCTO DIGITAL <span>→</span></a>\
        <a href="servicio-data-business-intelligence.html">DATA &amp; BUSINESS INTELLIGENCE <span>→</span></a>\
      </div>\
    </div>\
  </div>\
  \
  <div class="nav-mega" id="nav-mega-casos">\
    <div class="container nav-mega-content">\
      <span class="nav-mega-title">CASOS DE<br>ÉXITO</span>\
      <div class="nav-mega-links">\
        <a href="#">ALHAMBRA <span>→</span></a>\
        <a href="#">TATOMA <span>→</span></a>\
        <a href="#">GRUPO JORGE <span>→</span></a>\
        <a href="#">RAFA NADAL <span>→</span></a>\
      </div>\
    </div>\
  </div>\
  \
  <div class="nav-mega" id="nav-mega-productos">\
    <div class="container nav-mega-content">\
      <span class="nav-mega-title">PRODUCTOS</span>\
      <div class="nav-mega-links">\
        <a href="#"><span class="nav-mega-name">V·E·G·A <span class="nav-mega-desc">Avatar IA</span></span> <span>→</span></a>\
        <a href="#"><span class="nav-mega-name">VIRTUAL TWIN <span class="nav-mega-desc">Infografía Interactiva</span></span> <span>→</span></a>\
        <a href="#"><span class="nav-mega-name">VIRTUAL TRAINING <span class="nav-mega-desc">Simulación VR</span></span> <span>→</span></a>\
        <a href="#"><span class="nav-mega-name">KIMCHI! <span class="nav-mega-desc">Photocall Aumentado</span></span> <span>→</span></a>\
        <a href="#"><span class="nav-mega-name">VIRTUAL SPACE <span class="nav-mega-desc">Entorno Virtual</span></span> <span>→</span></a>\
        <a href="#"><span class="nav-mega-name">SPACESHIP PROJECT <span class="nav-mega-desc">Proyecto a Medida</span></span> <span>→</span></a>\
      </div>\
    </div>\
  </div>\
  \
  <div class="nav-mega" id="nav-mega-sectores">\
    <div class="container nav-mega-content">\
      <span class="nav-mega-title">SECTORES</span>\
      <div class="nav-mega-links">\
        <a href="sector-turismo.html">TURISMO <span>→</span></a>\
        <a href="sector-salud.html">SALUD <span>→</span></a>\
        <a href="sector-industria.html">INDUSTRIA <span>→</span></a>\
        <a href="sector-banca-seguros.html">BANCA &amp; SEGUROS <span>→</span></a>\
        <a href="sector-retail-ocio.html">RETAIL &amp; OCIO <span>→</span></a>\
        <a href="sector-formacion.html">FORMACIÓN <span>→</span></a>\
      </div>\
    </div>\
  </div>\
  \
  <div class="nav-mega" id="nav-mega-compania">\
    <div class="container nav-mega-content">\
      <span class="nav-mega-title">COMPAÑÍA</span>\
      <div class="nav-mega-links">\
        <a href="#">SOBRE NOSOTROS <span>→</span></a>\
        <a href="#">METODOLOGÍA <span>→</span></a>\
        <a href="#">CAREERS <span>→</span></a>\
      </div>\
    </div>\
  </div>\
  \
  <div class="nav-mega" id="nav-mega-inspira">\
    <div class="container nav-mega-content">\
      <span class="nav-mega-title">INSPIRA</span>\
      <div class="nav-mega-links">\
        <a href="blog.html">BLOG BITÁCORA <span>→</span></a>\
        <a href="#">DISCOVERY RESEARCH <span>→</span></a>\
        <a href="#">SALA PLAYING <span>→</span></a>\
        <a href="#">NEWS <span>→</span></a>\
      </div>\
    </div>\
  </div>';

  // Mega dropdown behavior
  var megas = [
    { label: 'SERVICIOS', id: 'nav-mega-servicios' },
    { label: 'SECTORES', id: 'nav-mega-sectores' },
    { label: 'CASOS DE ÉXITO', id: 'nav-mega-casos' },
    { label: 'PRODUCTOS', id: 'nav-mega-productos' },
    { label: 'COMPAÑÍA', id: 'nav-mega-compania' },
    { label: 'INSPIRA', id: 'nav-mega-inspira' }
  ];
  var links = document.querySelectorAll('.nav-links a');
  var navBar = document.querySelector('.nav-links');
  var hideTimeout;
  var inNavBar = false;
  var inMegaContent = false;

  function closeAll() {
    megas.forEach(function(cfg) {
      var m = document.getElementById(cfg.id);
      if (m) m.classList.remove('active');
    });
    links.forEach(function(a) { a.classList.remove('nav-active'); });
  }

  function scheduleHide() {
    clearTimeout(hideTimeout);
    hideTimeout = setTimeout(function() {
      if (!inNavBar && !inMegaContent) closeAll();
    }, 200);
  }

  // Keep mega open while cursor is within nav-links bar
  navBar.addEventListener('mouseenter', function() {
    inNavBar = true;
    clearTimeout(hideTimeout);
  });
  navBar.addEventListener('mouseleave', function() {
    inNavBar = false;
    scheduleHide();
  });

  megas.forEach(function(cfg) {
    var navLink = null;
    links.forEach(function(a) { if (a.textContent.trim() === cfg.label) navLink = a; });
    if (!navLink) return;
    var mega = document.getElementById(cfg.id);
    if (!mega) return;
    var megaContent = mega.querySelector('.nav-mega-content');

    function show() {
      clearTimeout(hideTimeout);
      closeAll();
      mega.classList.add('active');
      navLink.classList.add('nav-active');
    }

    navLink.addEventListener('mouseenter', show);

    megaContent.addEventListener('mouseenter', function() {
      inMegaContent = true;
      clearTimeout(hideTimeout);
    });
    megaContent.addEventListener('mouseleave', function() {
      inMegaContent = false;
      scheduleHide();
    });

    mega.addEventListener('click', function(e) {
      if (e.target === mega || !e.target.closest('.nav-mega-links')) {
        mega.classList.remove('active');
        navLink.classList.remove('nav-active');
      }
    });
  });

  document.addEventListener('click', function(e) {
    if (!e.target.closest('.nav-mega') && !e.target.closest('.nav-links')) {
      closeAll();
    }
  });
})();
