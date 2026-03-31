(function() {
  var el = document.getElementById('contact-form');
  if (!el) return;
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
