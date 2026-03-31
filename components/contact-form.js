(function() {
  var el = document.getElementById('contact-form');
  if (!el) return;

  // Inject CTA form styles if not already present
  if (!document.querySelector('style[data-cta-form]')) {
    var style = document.createElement('style');
    style.setAttribute('data-cta-form', '');
    style.textContent = '\
    .cta-section{padding:80px 0;background:linear-gradient(to bottom,#f2f5f8 0%,#ffffff 50%)}\
    .cta-grid{display:grid;grid-template-columns:1fr 1.5fr;gap:80px;align-items:start}\
    .cta-title{font-family:"Visuelt Pro",system-ui,sans-serif;font-weight:300;font-size:clamp(2.5rem,4vw,4rem);color:#647483;line-height:1.1}\
    .cta-form{display:flex;flex-direction:column;gap:16px}\
    .cta-form .form-group{display:flex;flex-direction:column}\
    .cta-form .form-group label{display:none}\
    .cta-form .form-group input,.cta-form .form-group select,.cta-form .form-group textarea{font-family:"PP Neue Montreal",system-ui,sans-serif;font-size:0.9rem;padding:14px 16px;border:1px solid rgba(100,116,131,0.25);background:#fff;color:#647483;outline:none;transition:border-color 0.3s;width:100%}\
    .cta-form .form-group input:focus,.cta-form .form-group select:focus,.cta-form .form-group textarea:focus{border-color:#647483}\
    .cta-form .form-group textarea{resize:vertical;min-height:120px}\
    .cta-form .form-check{display:flex;align-items:flex-start;gap:10px;font-size:0.8rem;color:#8a9baa}\
    .cta-form .form-check input[type="checkbox"]{margin-top:3px}\
    @media(max-width:768px){.cta-grid{grid-template-columns:1fr;gap:40px}}\
    ';
    document.head.appendChild(style);
  }

  el.outerHTML = '\
  <section class="cta-section">\
    <div class="container">\
      <div class="cta-grid">\
        <h2 class="cta-title">Cuéntanos<br>y sigue<br>avanzando.</h2>\
        <form class="cta-form" onsubmit="return false;">\
          <div class="form-group"><input type="text" placeholder="Nombre y Apellidos*"></div>\
          <div class="form-group"><input type="text" placeholder="Empresa*"></div>\
          <div class="form-group">\
            <select>\
              <option value="">Elige tu sector*</option>\
              <option>Salud</option>\
              <option>Turismo</option>\
              <option>Industria</option>\
              <option>Banca y Seguros</option>\
              <option>Retail y Ocio</option>\
              <option>Formación</option>\
            </select>\
          </div>\
          <div class="form-group"><input type="email" placeholder="Email*"></div>\
          <div class="form-group"><input type="tel" placeholder="Teléfono*"></div>\
          <div class="form-group"><textarea placeholder="Mensaje*"></textarea></div>\
          <div class="form-check">\
            <input type="checkbox" id="consent"><label for="consent">Sí, doy mi consentimiento para recibir comunicaciones informativas.</label>\
          </div>\
          <div class="form-check">\
            <input type="checkbox" id="privacy"><label for="privacy">Sí, estoy de acuerdo y acepto la política de privacidad.</label>\
          </div>\
          <button class="btn-primary" type="submit" style="align-self:flex-start;">Enviar <span class="arrow">→</span></button>\
        </form>\
      </div>\
    </div>\
  </section>';
})();
