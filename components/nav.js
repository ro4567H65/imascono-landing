(function() {
  var el = document.getElementById('site-nav');
  if (!el) return;
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
        <a href="index.html#proyectos">PROYECTOS</a>\
        <a href="#">BLOG</a>\
        <a href="#">RESEARCH</a>\
      </nav>\
      <div class="header-actions">\
        <span style="font-size:0.85rem;color:#8a9baa;cursor:pointer;">EN</span>\
        <span style="font-size:0.85rem;font-weight:600;color:#647483;cursor:pointer;">ES</span>\
        <button class="btn-primary">Hablemos <span class="arrow">→</span></button>\
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
