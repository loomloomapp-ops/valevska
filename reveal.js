/* Scroll-reveal animations for the YULIIA&MAX landing.
   Marks selected elements with [data-reveal] and toggles .is-revealed
   when they enter the viewport. Honors prefers-reduced-motion. */
(function () {
  var reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced) return;

  if (!('IntersectionObserver' in window)) return;

  // Selectors covering both mobile (.foo) and desktop (.foo-d) layouts.
  // IMPORTANT: never include elements that are absolutely positioned or that
  // carry their own transform in CSS (translateX(-50%), rotate, etc.), because
  // [data-reveal] overrides `transform` and would visually break them.
  var GENERIC = [
    // Hero text-side content only (NOT the photo layer)
    '.hero .pill',
    '.hero .l1-row', '.hero .l1', '.hero .l2', '.hero .l3',
    '.hero .nameplate', '.hero .desc-card',
    // Hero — desktop (text side only)
    '.hero .hero-title-d', '.hero .hero-l1-d', '.hero .hero-l2-d', '.hero .hero-l3-d',
    '.hero .nameplate-d', '.hero .desc-card-d',
    // Section heads
    '.section-eyebrow', '.section-title', '.section-lead',
    '.eyebrow-d', '.section-title-d', '.section-lead-d',
    // About (text side only — photo layer is absolutely positioned)
    '.about-top', '.about-name', '.about-body',
    '.about-text-d > *',
    // Results
    '.stat-card', '.stat-grid > *',
    '.checklist > li',
    '.callout',
    // Кого ми шукаємо / Audiences / Formats
    '.team-col', '.fmt-card',
    // Brand
    '.brand-head', '.brand-head > *', '.brand-head-d > *',
    '.brand-body > *', '.brand-body-d > *',
    '.brand-countries > li', '.brand-countries-d > li',
    '.cert-grid > *', '.cert-grid-d > *',
    '.brand-callout', '.brand-callout-d',
    '.brand-cert-text', '.brand-cert-text-d',
    // Catalog
    '.product-lead', '.cat-eyebrow', '.cat-eyebrow-d',
    '.cat-list > li', '.cat-list-d > li',
    '.product-banner-slide', '.product-banner-slide-d',
    // Income
    '.income-head > *', '.income-head-d > *',
    '.income-head-left > *', '.income-head-left-d > *',
    '.income-lead',
    '.coin',
    // Testimonials / final
    '.testi-slide', '.testi-slide-d',
    '.final', '.final > *'
  ];

  // PHOTO kind only for non-absolute, non-pre-transformed elements.
  var PHOTO = [
    '.brand-logo', '.brand-logo-d'
  ];

  var CTA = [
    '.cta'
  ];

  // Polaroids have their own rotate/translate transforms (.r-1..r-4).
  // We tag only the wrapping pair so the cards keep their CSS-owned rotation.
  var POLAROID = [
    '.polaroid-pair', '.polaroid-pair-d'
  ];

  function tag(selectors, kind) {
    var sel = selectors.join(',');
    var nodes;
    try { nodes = document.querySelectorAll(sel); }
    catch (e) { return; }
    for (var i = 0; i < nodes.length; i++) {
      var el = nodes[i];
      if (el.hasAttribute('data-reveal')) continue;
      el.setAttribute('data-reveal', '');
      if (kind) el.setAttribute('data-reveal-kind', kind);
    }
  }

  function init() {
    tag(PHOTO, 'photo');
    tag(POLAROID, 'polaroid');
    tag(CTA, 'cta');
    tag(GENERIC, null);

    var targets = document.querySelectorAll('[data-reveal]');
    if (!targets.length) return;

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;

        // Stagger by sibling index within parent (cap at ~8 to avoid long waits)
        var idx = 0;
        var parent = el.parentElement;
        if (parent) {
          var sibs = parent.querySelectorAll(':scope > [data-reveal]');
          for (var i = 0; i < sibs.length; i++) {
            if (sibs[i] === el) { idx = i; break; }
          }
        }
        if (idx > 8) idx = 8;
        el.style.setProperty('--reveal-delay', (idx * 70) + 'ms');
        el.classList.add('is-revealed');
        io.unobserve(el);
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -6% 0px'
    });

    targets.forEach(function (el) { io.observe(el); });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
