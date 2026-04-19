/* Amy Fantalis & Associates — main.js */
(function () {
  'use strict';

  /* ---- Nav scroll styling ---- */
  function initNav() {
    var nav = document.getElementById('nav');
    if (!nav) return;
    var scrolled = false;
    window.addEventListener('scroll', function () {
      var now = window.scrollY > 40;
      if (now !== scrolled) {
        scrolled = now;
        nav.classList.toggle('is-scrolled', scrolled);
      }
    }, { passive: true });
  }

  /* ---- Mobile menu toggle ---- */
  function initMobileMenu() {
    var toggle = document.querySelector('.nav__toggle');
    var links = document.querySelector('.nav__links');
    if (!toggle || !links) return;
    toggle.addEventListener('click', function () {
      var open = links.classList.toggle('is-open');
      toggle.classList.toggle('is-open', open);
      toggle.setAttribute('aria-expanded', open);
      document.body.style.overflow = open ? 'hidden' : '';
    });
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        links.classList.remove('is-open');
        toggle.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }

  /* ---- Scroll reveals ---- */
  function initReveals() {
    var els = document.querySelectorAll('.reveal');
    if (!els.length) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      els.forEach(function (el) { el.classList.add('is-visible'); });
      return;
    }
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
    els.forEach(function (el) { observer.observe(el); });
  }

  /* ---- Form success banner ---- */
  function initFormSuccess() {
    if (window.location.search.indexOf('submitted=1') === -1) return;
    var form = document.querySelector('.contact__form');
    var success = document.getElementById('formSuccess');
    if (form && success) {
      form.style.display = 'none';
      success.style.display = 'block';
    }
    // Clean URL
    if (window.history.replaceState) {
      window.history.replaceState(null, '', window.location.pathname);
    }
  }

  /* ---- Specialty pill stagger ---- */
  function initPillStagger() {
    var pills = document.querySelectorAll('.specialty-pill');
    if (!pills.length) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var el = entry.target;
          var index = Array.from(pills).indexOf(el);
          el.style.transitionDelay = (index * 0.05) + 's';
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.1 });
    pills.forEach(function (pill) {
      pill.style.opacity = '0';
      pill.style.transform = 'translateY(16px)';
      pill.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      observer.observe(pill);
    });
  }

  /* ---- Init ---- */
  function init() {
    initNav();
    initMobileMenu();
    initReveals();
    initFormSuccess();
    initPillStagger();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
