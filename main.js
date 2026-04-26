/* Laura Spaulding Psychotherapy — main.js */
(function () {
  'use strict';

  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---- Nav scroll + active-section indicator ---- */
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

    /* Active section indicator: as the user scrolls, highlight the nav link
       whose target section is currently in view. Uses IntersectionObserver
       so we don't recalc on every scroll tick. */
    var navLinks = nav.querySelectorAll('.nav__links a[href^="#"]');
    if (!navLinks.length || !('IntersectionObserver' in window)) return;

    var linkBySection = {};
    var sections = [];
    navLinks.forEach(function (a) {
      var id = a.getAttribute('href').slice(1);
      var section = id ? document.getElementById(id) : null;
      if (section) {
        linkBySection[id] = a;
        sections.push(section);
      }
    });
    if (!sections.length) return;

    function setActive(id) {
      navLinks.forEach(function (a) { a.classList.remove('is-active'); });
      var match = linkBySection[id];
      if (match) match.classList.add('is-active');
    }

    var observer = new IntersectionObserver(function (entries) {
      /* Pick the most-visible intersecting section */
      var best = null;
      entries.forEach(function (e) {
        if (e.isIntersecting && (!best || e.intersectionRatio > best.intersectionRatio)) {
          best = e;
        }
      });
      if (best && best.target.id) setActive(best.target.id);
    }, {
      rootMargin: '-30% 0px -55% 0px',
      threshold: [0, 0.2, 0.4, 0.6, 0.8, 1]
    });

    sections.forEach(function (s) { observer.observe(s); });
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

  /* ---- Scroll reveals — handles reveal, reveal-left, reveal-right ---- */
  function initReveals() {
    var els = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
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
    }, { threshold: 0.08, rootMargin: '0px 0px -24px 0px' });

    els.forEach(function (el) { observer.observe(el); });
  }

  /* ---- Hero image parallax ---- */
  function initParallax() {
    if (reducedMotion) return;
    var img = document.getElementById('heroBgImg');
    var botanical = document.querySelector('.hero__botanical');
    if (!img) return;

    var heroH = window.innerHeight;
    var ticking = false;

    window.addEventListener('scroll', function () {
      if (!ticking) {
        window.requestAnimationFrame(function () {
          var y = window.scrollY;
          if (y < heroH * 1.2) {
            /* Photo moves at slower rate than scroll = parallax */
            img.style.transform = 'translateY(' + (y * 0.35) + 'px)';
            if (botanical) {
              botanical.style.transform = 'translateY(calc(-48% + ' + (y * 0.08) + 'px))';
              botanical.style.opacity = String(1 - (y / heroH) * 0.7);
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  /* ---- Specialty field stagger ---- */
  function initSpecStagger() {
    var field = document.querySelector('.specialties__field');
    if (!field) return;

    var allItems = Array.from(field.querySelectorAll('.spec, .spec-sep'));
    if (!allItems.length) return;

    if (reducedMotion) {
      allItems.forEach(function (el) { el.classList.add('is-visible'); });
      return;
    }

    // Assign pseudo-random breathing durations and delays
    var specs = Array.from(field.querySelectorAll('.spec'));
    // Use a seeded pseudo-random to feel organic but be deterministic
    var seed = 7;
    function rand() { seed = (seed * 16807 + 11) % 2147483647; return (seed % 1000) / 1000; }
    specs.forEach(function (el) {
      // Large words: 4-7s, Medium: 3.5-5.5s, Small: 2.5-4.5s
      var isLg = el.classList.contains('spec--lg');
      var isMd = el.classList.contains('spec--md');
      var base = isLg ? 4 : (isMd ? 3.5 : 2.5);
      var range = isLg ? 3 : 2;
      var duration = base + rand() * range;
      var delay = rand() * 4; // 0-4s random delay
      el.style.setProperty('--bd', duration.toFixed(2) + 's');
      el.style.setProperty('--bdelay', delay.toFixed(2) + 's');
    });

    var triggered = false;
    var observer = new IntersectionObserver(function (entries) {
      if (!triggered && entries.some(function (e) { return e.isIntersecting; })) {
        triggered = true;
        allItems.forEach(function (el, idx) {
          setTimeout(function () {
            el.classList.add('is-visible');
            // Start breathing after reveal completes
            if (el.classList.contains('spec')) {
              setTimeout(function () { el.classList.add('is-breathing'); }, 600);
            }
          }, idx * 38);
        });
        observer.disconnect();
      }
    }, { threshold: 0.05 });

    observer.observe(field);
  }

  /* ---- FAQ accordion ---- */
  function initFaq() {
    var items = document.querySelectorAll('[data-faq]');
    if (!items.length) return;

    items.forEach(function (item) {
      var dt = item.querySelector('.about__faq-q');
      var dd = item.querySelector('.about__faq-a');
      if (!dt || !dd) return;

      function toggle() {
        var open = dt.getAttribute('aria-expanded') === 'true';
        /* Close all */
        items.forEach(function (other) {
          var otherDt = other.querySelector('.about__faq-q');
          var otherDd = other.querySelector('.about__faq-a');
          if (otherDt) otherDt.setAttribute('aria-expanded', 'false');
          if (otherDd) otherDd.classList.remove('is-open');
        });
        /* Open this if was closed */
        if (!open) {
          dt.setAttribute('aria-expanded', 'true');
          dd.classList.add('is-open');
        }
      }

      dt.addEventListener('click', toggle);
      // Native <button> handles Enter/Space natively — no keydown handler needed.
    });
  }

  /* ---- Service selection cards ---- */
  function initServiceCards() {
    var cards = document.querySelectorAll('.service-card');
    var hidden = document.getElementById('service');
    if (!cards.length || !hidden) return;
    cards.forEach(function (card) {
      card.addEventListener('click', function () {
        cards.forEach(function (c) { c.classList.remove('is-selected'); });
        card.classList.add('is-selected');
        hidden.value = card.getAttribute('data-value');
      });
    });
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

    function showError(field, msg) {
      field.classList.add('is-invalid');
      var err = field.parentNode.querySelector('.form-error');
      if (!err) {
        err = document.createElement('span');
        err.className = 'form-error';
        err.setAttribute('role', 'alert');
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
        if (!nameField.value.trim()) showError(nameField, 'Please enter your name.');
        else clearError(nameField);
      });
      nameField.addEventListener('input', function () { if (nameField.value.trim()) clearError(nameField); });
    }

    if (emailField) {
      emailField.addEventListener('blur', function () {
        var val = emailField.value.trim();
        if (!val) showError(emailField, 'Please enter your email address.');
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) showError(emailField, 'Please enter a valid email address.');
        else clearError(emailField);
      });
      emailField.addEventListener('input', function () {
        var val = emailField.value.trim();
        if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) clearError(emailField);
      });
    }
  }

  /* ---- Reading progress bar ---- */
  function initReadingProgress() {
    var bar = document.getElementById('readingBar');
    if (!bar) return;
    var ticking = false;
    window.addEventListener('scroll', function () {
      if (!ticking) {
        window.requestAnimationFrame(function () {
          var scrollTop = window.scrollY || document.documentElement.scrollTop;
          var docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
          var pct = docHeight > 0 ? Math.min(100, (scrollTop / docHeight) * 100) : 0;
          bar.style.width = pct + '%';
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  /* ---- Service row hover: image scale is handled by CSS — no JS needed ---- */

  /* ---- Init ---- */
  function init() {
    initNav();
    initMobileMenu();
    initReveals();
    initParallax();
    initSpecStagger();
    initFaq();
    initServiceCards();
    initFormSuccess();
    initFormValidation();
    initReadingProgress();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
