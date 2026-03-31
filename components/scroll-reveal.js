(function() {
  // Inject reveal CSS if not already present
  if (!document.querySelector('style[data-scroll-reveal]')) {
    var style = document.createElement('style');
    style.setAttribute('data-scroll-reveal', '');
    style.textContent = '\
    .reveal{opacity:0;transform:translateY(40px);transition:opacity 0.9s cubic-bezier(0.22,1,0.36,1),transform 0.9s cubic-bezier(0.22,1,0.36,1)}\
    .reveal.from-left{transform:translateX(-40px)}\
    .reveal.from-right{transform:translateX(40px)}\
    .reveal.scale-in{transform:scale(0.95)}\
    .reveal.visible{opacity:1;transform:translateY(0) translateX(0) scale(1)}\
    .project-hero,.sector-hero{clip-path:inset(0 0 100% 0);transition:clip-path 1.2s cubic-bezier(0.22,1,0.36,1);overflow:hidden}\
    .project-hero img,.project-hero video{transform:scale(1.25);transition:transform 2.5s cubic-bezier(0.25,0.1,0.1,1) 0.1s}\
    .project-hero.hero-revealed,.sector-hero.hero-revealed{clip-path:inset(0 0 0 0)}\
    .project-hero.hero-revealed img,.project-hero.hero-revealed video{transform:scale(1)}\
    .stagger>.reveal:nth-child(1){transition-delay:0s}\
    .stagger>.reveal:nth-child(2){transition-delay:0.12s}\
    .stagger>.reveal:nth-child(3){transition-delay:0.24s}\
    .stagger>.reveal:nth-child(4){transition-delay:0.36s}\
    .stagger>.reveal:nth-child(5){transition-delay:0.48s}\
    .stagger>.reveal:nth-child(6){transition-delay:0.6s}\
    ';
    document.head.appendChild(style);
  }

  // Auto-apply reveal classes to elements
  var selectors = [
    // Project page elements
    { sel: '.project-hero-overlay h1', cls: 'reveal' },
    { sel: '.project-meta', cls: 'reveal' },
    { sel: '.project-description h2', cls: 'reveal from-left' },
    { sel: '.project-description > div', cls: 'reveal from-right' },
    { sel: '.project-stats > div', cls: 'reveal' },
    { sel: '.next-project', cls: 'reveal' },
    // Sector page elements
    { sel: '.sector-hero h1', cls: 'reveal' },
    { sel: '.sector-hero-desc', cls: 'reveal from-right' },
    { sel: '.sector-stats > div', cls: 'reveal' },
    { sel: '.sector-feature img', cls: 'reveal from-left' },
    { sel: '.sector-feature > div', cls: 'reveal from-right' },
    { sel: '.sector-trends-header', cls: 'reveal' },
    { sel: '.trend-item', cls: 'reveal' },
    { sel: '.sector-cases-header', cls: 'reveal' },
    { sel: '.case-card', cls: 'reveal' },
    { sel: '.cta-need h2', cls: 'reveal' },
    { sel: '.cta-need p', cls: 'reveal' },
    { sel: '.imascono-tech-grid > h2', cls: 'reveal from-left' },
    { sel: '.imascono-tech-grid > p', cls: 'reveal from-right' },
    // Portfolio page elements
    { sel: '.portfolio-hero h1', cls: 'reveal' },
    { sel: '.portfolio-hero-desc', cls: 'reveal from-right' },
    { sel: '.portfolio-card', cls: 'reveal' },
    // Shared elements
    { sel: '.cta-title', cls: 'reveal from-left' },
    { sel: '.cta-form', cls: 'reveal from-right' },
    { sel: '.footer-top', cls: 'reveal' },
    { sel: '.footer-bottom', cls: 'reveal' }
  ];

  selectors.forEach(function(item) {
    document.querySelectorAll(item.sel).forEach(function(el) {
      if (!el.classList.contains('reveal')) {
        item.cls.split(' ').forEach(function(c) { el.classList.add(c); });
      }
    });
  });

  // Add stagger to grids
  document.querySelectorAll('.project-stats, .sector-stats, .trends-grid, .cases-grid, .portfolio-grid').forEach(function(g) {
    g.classList.add('stagger');
  });

  // Observe all reveal elements
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach(function(el) {
    observer.observe(el);
  });

  // Hero mask reveal (top to bottom) - only on project/sector pages, NOT home
  if (!document.querySelector('.hero')) {
    document.querySelectorAll('.project-hero, .sector-hero').forEach(function(hero) {
      setTimeout(function() {
        hero.classList.add('hero-revealed');
      }, 200);
    });
  }

  // Hero blur on scroll - starts when 40% hidden
  (function() {
    var heroes = document.querySelectorAll('.project-hero, .sector-hero');
    if (!heroes.length) return;

    function onScroll() {
      heroes.forEach(function(hero) {
        var rect = hero.getBoundingClientRect();
        var height = hero.offsetHeight;
        var threshold = height * 0.7; // 30% hidden = 70% visible
        var scrolled = -rect.top;
        var img = hero.querySelector('img, video');

        if (scrolled > threshold && img) {
          var progress = Math.min((scrolled - threshold) / (height - threshold), 1);
          var blur = progress * 24;
          img.style.filter = 'blur(' + blur + 'px)';
        } else if (img) {
          img.style.filter = '';
        }
      });
    }

    window.addEventListener('scroll', onScroll, { passive: true });
  })();

  // Digital scramble effect for stat numbers
  (function() {
    var chars = '0123456789+ABCDEFGHIJKLMNOPQRSTUVWXYZ%#&';
    // Auto-add data-scramble to project/sector stat numbers
    document.querySelectorAll('.project-stat-number, .stat-number').forEach(function(el) {
      if (!el.getAttribute('data-scramble')) {
        el.setAttribute('data-scramble', el.textContent.trim());
      }
    });

    var scrambleEls = document.querySelectorAll('[data-scramble]');
    var animated = new Set();

    function scramble(el) {
      var target = el.getAttribute('data-scramble');
      var length = target.length;
      var iterations = 0;
      var revealed = 0;
      var totalSteps = length * 3 + 1;

      el.style.opacity = '0.2';
      el.style.transition = 'none';

      var interval = setInterval(function() {
        var display = '';
        for (var i = 0; i < length; i++) {
          if (i < revealed) {
            display += target[i];
          } else {
            display += chars[Math.floor(Math.random() * chars.length)];
          }
        }
        el.textContent = display;
        iterations++;

        var progress = Math.min(iterations / totalSteps, 1);
        el.style.opacity = 0.2 + (0.8 * progress);

        if (iterations % 3 === 0 && revealed < length) {
          revealed++;
        }

        if (revealed >= length) {
          el.textContent = target;
          el.style.opacity = '1';
          clearInterval(interval);
        }
      }, 50);
    }

    var scrambleObserver = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting && !animated.has(entry.target)) {
          animated.add(entry.target);
          scramble(entry.target);
        }
      });
    }, { threshold: 0.5 });

    scrambleEls.forEach(function(el) {
      scrambleObserver.observe(el);
    });
  })();
})();
