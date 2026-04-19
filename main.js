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
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

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
          botanical.style.transform = 'translateY(calc(-48% + ' + (y * 0.25) + 'px))';
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  /* ---- Specialty word stagger ---- */
  function initSpecStagger() {
    var specs = document.querySelectorAll('.spec');
    if (!specs.length) return;
    if (reducedMotion) return;

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var el = entry.target;
          var idx = Array.from(specs).indexOf(el);
          setTimeout(function () {
            el.classList.add('is-visible');
          }, idx * 45);
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.1 });

    specs.forEach(function (el) { observer.observe(el); });
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

  /* ---- Subtle hover parallax on service rows ---- */
  function initSvcHover() {
    if (reducedMotion) return;
    document.querySelectorAll('.svc').forEach(function (svc) {
      svc.addEventListener('mouseenter', function () {
        svc.querySelector('.svc__num').style.transform = 'translateX(4px)';
      });
      svc.addEventListener('mouseleave', function () {
        svc.querySelector('.svc__num').style.transform = '';
      });
    });
    // Also add transition style for the num
    var style = document.createElement('style');
    style.textContent = '.svc__num { transition: transform 0.3s ease; }';
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
