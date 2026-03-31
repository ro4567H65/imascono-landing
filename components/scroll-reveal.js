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
    body.has-transparent-nav .project-hero{margin-top:0!important}\
    .header.header-transparent{background:linear-gradient(to bottom,rgba(0,0,0,0.35),transparent)!important;backdrop-filter:none!important;-webkit-backdrop-filter:none!important;border-bottom:none!important;transition:background 0.4s ease,border-bottom-color 0.4s ease}\
    .header.header-transparent::after{content:"";position:absolute;bottom:0;left:0;right:0;height:1px;background:rgba(255,255,255,0.3);z-index:1}\
    .header.header-transparent:hover::after,.header.header-scrolled::after{display:none}\
    .header.header-transparent .btn-primary{background:#fff!important;color:#647483!important;border-color:#fff!important}\
    .header.header-transparent .btn-primary .arrow{color:#647483!important}\
    .header.header-transparent .btn-primary:hover{background:#f0f2f4!important}\
    .header.header-transparent .nav-links a{color:rgba(255,255,255,0.75)!important}\
    .header.header-transparent .nav-links a:hover{color:#fff!important}\
    .header.header-transparent .header-actions span{color:rgba(255,255,255,0.6)!important}\
    .header.header-transparent .header-actions span[style*="font-weight:600"]{color:#fff!important}\
    .header.header-transparent .logo img{filter:brightness(10)}\
    .header.header-transparent:hover{background:rgba(255,255,255,0.95)!important;backdrop-filter:blur(10px)!important;-webkit-backdrop-filter:blur(10px)!important;border-bottom:1px solid rgba(0,0,0,0.06)!important}\
    .header.header-transparent:hover .btn-primary{background:linear-gradient(135deg,#546878 0%,#546878 50%,#748a97 50%,#546878 100%)!important;color:#fff!important;border-color:#546878!important}\
    .header.header-transparent:hover .nav-links a{color:#8a9baa!important}\
    .header.header-transparent:hover .nav-links a:hover{color:#647483!important}\
    .header.header-transparent:hover .header-actions span{color:#8a9baa!important}\
    .header.header-transparent:hover .header-actions span[style*="font-weight:600"]{color:#647483!important}\
    .header.header-transparent:hover .logo img{filter:none}\
    .header.header-scrolled{background:rgba(255,255,255,0.95)!important;backdrop-filter:blur(10px)!important;-webkit-backdrop-filter:blur(10px)!important;border-bottom-color:rgba(0,0,0,0.06)!important}\
    .header.header-scrolled .nav-links a{color:#8a9baa!important}\
    .header.header-scrolled .header-actions span{color:#8a9baa!important}\
    .header.header-scrolled .header-actions span[style*="font-weight:600"]{color:#647483!important}\
    .header.header-scrolled .logo img{filter:none}\
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
    // Blog page elements
    { sel: '.blog-hero h1', cls: 'reveal' },
    { sel: '.blog-hero-intro', cls: 'reveal' },
    { sel: '.blog-meta', cls: 'reveal' },
    { sel: '.blog-content h2', cls: 'reveal' },
    { sel: '.blog-content > p', cls: 'reveal' },
    { sel: '.blog-content > ul', cls: 'reveal' },
    { sel: '.blog-content .blog-image', cls: 'reveal scale-in' },
    { sel: '.blog-cta-inline', cls: 'reveal' },
    { sel: '.blog-tags', cls: 'reveal' },
    // Blog list page elements
    { sel: '.blog-list-hero h1', cls: 'reveal' },
    { sel: '.blog-list-hero-desc', cls: 'reveal from-right' },
    { sel: '.blog-card', cls: 'reveal' },
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
  document.querySelectorAll('.project-stats, .sector-stats, .trends-grid, .cases-grid, .portfolio-grid, .blog-grid').forEach(function(g) {
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

  // Transparent nav on project pages only
  (function() {
    var projectHero = document.querySelector('.project-hero');
    if (!projectHero) return;
    var header = document.querySelector('.header');
    if (!header) return;

    header.classList.add('header-transparent');
    document.body.classList.add('has-transparent-nav');

    function checkScroll() {
      if (window.scrollY >= 25) {
        header.classList.add('header-scrolled');
        header.classList.remove('header-transparent');
      } else {
        header.classList.remove('header-scrolled');
        header.classList.add('header-transparent');
      }
    }

    window.addEventListener('scroll', checkScroll, { passive: true });
    checkScroll();
  })();

  // Hero blur on scroll - starts when 40% hidden
  (function() {
    var heroes = document.querySelectorAll('.project-hero, .sector-hero');
    if (!heroes.length) return;

    function onScroll() {
      heroes.forEach(function(hero) {
        var rect = hero.getBoundingClientRect();
        var height = hero.offsetHeight;
        var threshold = height * 0.1; // 90% hidden = 10% visible
        var scrolled = -rect.top;
        var img = hero.querySelector('img, video');

        if (scrolled > threshold && img) {
          var progress = Math.min((scrolled - threshold) / (height - threshold), 1);
          var blur = progress * 36;
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
