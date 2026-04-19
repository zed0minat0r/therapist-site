/* Amy Fantalis & Associates — main.js */
(function () {
  'use strict';

  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---- Nav scroll ---- */
  function initNav() {
    var nav = document.getElementById('nav');
    if (!nav) return;
    var scrolled = false;
    window.addEventListener('scroll', function () {
      var now = window.scrollY > 50;
      if (now !== scrolled) {
        scrolled = now;
        nav.classList.toggle('is-scrolled', scrolled);
      }
    }, { passive: true });
  }

  /* ---- Mobile menu ---- */
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

    if (reducedMotion) {
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
    }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });

    els.forEach(function (el) { observer.observe(el); });
  }

  /* ---- Parallax on hero botanical ---- */
  function initParallax() {
    if (reducedMotion) return;
    var botanical = document.querySelector('.hero__botanical');
    if (!botanical) return;

    var ticking = false;
    window.addEventListener('scroll', function () {
      if (!ticking) {
        window.requestAnimationFrame(function () {
          var y = window.scrollY;
          botanical.style.top = 'calc(50% + ' + (y * 0.2) + 'px)';
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  /* ---- Specialty field stagger — editorial row animation ---- */
  function initSpecStagger() {
    var field = document.querySelector('.specialties__field');
    if (!field) return;

    var allItems = Array.from(field.querySelectorAll('.spec, .spec-sep'));
    if (!allItems.length) return;

    if (reducedMotion) {
      allItems.forEach(function (el) { el.classList.add('is-visible'); });
      return;
    }

    var triggered = false;
    var observer = new IntersectionObserver(function (entries) {
      if (!triggered && entries.some(function (e) { return e.isIntersecting; })) {
        triggered = true;
        allItems.forEach(function (el, idx) {
          setTimeout(function () {
            el.classList.add('is-visible');
          }, idx * 40);
        });
        observer.disconnect();
      }
    }, { threshold: 0.05 });

    observer.observe(field);
  }

  /* ---- Form success ---- */
  function initFormSuccess() {
    if (window.location.search.indexOf('submitted=1') === -1) return;
    var form = document.querySelector('.contact__form');
    var success = document.getElementById('formSuccess');
    if (form && success) {
      form.style.display = 'none';
      success.style.display = 'block';
    }
    if (window.history.replaceState) {
      window.history.replaceState(null, '', window.location.pathname);
    }
  }

  /* ---- Service row hover ---- */
  function initSvcHover() {
    if (reducedMotion) return;
    document.querySelectorAll('.svc').forEach(function (svc) {
      svc.addEventListener('mouseenter', function () {
        svc.querySelector('.svc__num').style.transform = 'translateX(6px)';
      });
      svc.addEventListener('mouseleave', function () {
        svc.querySelector('.svc__num').style.transform = '';
      });
    });
    var style = document.createElement('style');
    style.textContent = '.svc__num { transition: transform 0.35s cubic-bezier(0.22,1,0.36,1), color 0.3s; }';
    document.head.appendChild(style);
  }

  /* ---- Init ---- */
  function init() {
    initNav();
    initMobileMenu();
    initReveals();
    initParallax();
    initSpecStagger();
    initFormSuccess();
    initSvcHover();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
