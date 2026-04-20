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
          botanical.style.transform = 'translateY(calc(-48% + ' + (y * 0.2) + 'px))';
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

  /* ---- Inline form validation ---- */
  function initFormValidation() {
    var form = document.querySelector('.contact__form');
    if (!form) return;

    var style = document.createElement('style');
    style.textContent = [
      '.form-group input.is-invalid, .form-group select.is-invalid, .form-group textarea.is-invalid {',
      '  border-color: #b84a3a;',
      '  box-shadow: 0 0 0 3px rgba(184,74,58,0.1);',
      '}',
      '.form-error {',
      '  font-size: 12px;',
      '  color: #b84a3a;',
      '  font-weight: 400;',
      '  margin-top: 4px;',
      '  display: none;',
      '}',
      '.form-error.is-visible { display: block; }'
    ].join('\n');
    document.head.appendChild(style);

    function showError(field, msg) {
      field.classList.add('is-invalid');
      var err = field.parentNode.querySelector('.form-error');
      if (!err) {
        err = document.createElement('span');
        err.className = 'form-error';
        field.parentNode.appendChild(err);
      }
      err.textContent = msg;
      err.classList.add('is-visible');
    }

    function clearError(field) {
      field.classList.remove('is-invalid');
      var err = field.parentNode.querySelector('.form-error');
      if (err) err.classList.remove('is-visible');
    }

    var nameField = form.querySelector('#name');
    var emailField = form.querySelector('#email');

    if (nameField) {
      nameField.addEventListener('blur', function () {
        if (!nameField.value.trim()) {
          showError(nameField, 'Please enter your name.');
        } else {
          clearError(nameField);
        }
      });
      nameField.addEventListener('input', function () { if (nameField.value.trim()) clearError(nameField); });
    }

    if (emailField) {
      emailField.addEventListener('blur', function () {
        var val = emailField.value.trim();
        if (!val) {
          showError(emailField, 'Please enter your email address.');
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) {
          showError(emailField, 'Please enter a valid email address.');
        } else {
          clearError(emailField);
        }
      });
      emailField.addEventListener('input', function () {
        var val = emailField.value.trim();
        if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) clearError(emailField);
      });
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
    initFormValidation();
    initSvcHover();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
