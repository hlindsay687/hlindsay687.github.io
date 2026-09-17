/**
 * Benjamin A. Rubin, MD — Neurosurgery
 * Progressive enhancement only: the page is fully readable without this file.
 */

(function () {
  'use strict';

  var header = document.getElementById('header');
  var menuToggle = document.getElementById('menuToggle');
  var drawer = document.getElementById('drawer');
  var faqList = document.getElementById('faqList');
  var form = document.getElementById('inquiryForm');
  var formStatus = document.getElementById('formStatus');
  var yearEl = document.getElementById('year');

  /* ---------------------------------------------------------------- Header */

  function syncHeaderState() {
    header.classList.toggle('is-stuck', window.scrollY > 4);
  }

  /* ---------------------------------------------------------------- Drawer */

  function openDrawer() {
    drawer.hidden = false;
    // Allow the element to paint before transitioning opacity.
    requestAnimationFrame(function () {
      drawer.classList.add('is-open');
    });
    menuToggle.setAttribute('aria-expanded', 'true');
    menuToggle.setAttribute('aria-label', 'Close menu');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    drawer.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open menu');
    document.body.style.overflow = '';

    window.setTimeout(function () {
      if (!drawer.classList.contains('is-open')) {
        drawer.hidden = true;
      }
    }, 200);
  }

  function isDrawerOpen() {
    return menuToggle.getAttribute('aria-expanded') === 'true';
  }

  /* ------------------------------------------------------------------- FAQ */

  function closePanel(trigger) {
    trigger.setAttribute('aria-expanded', 'false');
    document.getElementById(trigger.getAttribute('aria-controls')).classList.remove('is-open');
  }

  function handleFaqClick(event) {
    var trigger = event.target.closest('.faq__trigger');
    if (!trigger) return;

    var isOpen = trigger.getAttribute('aria-expanded') === 'true';

    faqList.querySelectorAll('.faq__trigger').forEach(function (other) {
      if (other !== trigger) closePanel(other);
    });

    if (isOpen) {
      closePanel(trigger);
    } else {
      trigger.setAttribute('aria-expanded', 'true');
      document.getElementById(trigger.getAttribute('aria-controls')).classList.add('is-open');
    }
  }

  /* ------------------------------------------------------------- Scrollspy */

  function initScrollSpy() {
    var links = Array.prototype.slice.call(document.querySelectorAll('.nav__link'));
    var sections = links
      .map(function (link) {
        return document.querySelector(link.getAttribute('href'));
      })
      .filter(Boolean);

    if (!sections.length || !('IntersectionObserver' in window)) return;

    var visible = new Set();

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            visible.add(entry.target.id);
          } else {
            visible.delete(entry.target.id);
          }
        });

        // Highlight the topmost section currently in view.
        var current = sections.filter(function (section) {
          return visible.has(section.id);
        })[0];

        links.forEach(function (link) {
          link.classList.toggle(
            'is-active',
            Boolean(current) && link.getAttribute('href') === '#' + current.id
          );
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );

    sections.forEach(function (section) {
      observer.observe(section);
    });
  }

  /* ------------------------------------------------------------------ Form */

  function showStatus(message, state) {
    formStatus.textContent = message;
    formStatus.dataset.state = state;
    formStatus.classList.add('is-visible');
  }

  function handleSubmit(event) {
    event.preventDefault();

    var required = ['firstName', 'lastName', 'phone', 'email'];
    var firstInvalid = null;

    required.forEach(function (name) {
      var field = form.elements[name];
      if (!field.value.trim() && !firstInvalid) firstInvalid = field;
    });

    if (firstInvalid) {
      showStatus('Please complete the required fields so we can reach you.', 'error');
      firstInvalid.focus();
      return;
    }

    var email = form.elements.email;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
      showStatus('Please enter a valid email address.', 'error');
      email.focus();
      return;
    }

    // No backend is connected yet. Wire this submit handler to an approved,
    // HIPAA-appropriate form service before accepting real patient inquiries.
    showStatus(
      'Thank you. Your inquiry has been recorded. For anything time-sensitive, please call (303) 938-5700.',
      'success'
    );
    form.reset();
  }

  /* ------------------------------------------------------------------ Init */

  window.addEventListener('scroll', syncHeaderState, { passive: true });
  syncHeaderState();

  menuToggle.addEventListener('click', function () {
    if (isDrawerOpen()) {
      closeDrawer();
    } else {
      openDrawer();
    }
  });

  drawer.addEventListener('click', function (event) {
    if (event.target.closest('a')) closeDrawer();
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && isDrawerOpen()) {
      closeDrawer();
      menuToggle.focus();
    }
  });

  // Must match the width at which styles.css swaps the drawer for the full nav,
  // or the drawer can be left open and locking body scroll on desktop.
  var navBreakpoint = window.matchMedia('(min-width: 1100px)');

  function handleNavBreakpoint(event) {
    if (event.matches && isDrawerOpen()) closeDrawer();
  }

  if (navBreakpoint.addEventListener) {
    navBreakpoint.addEventListener('change', handleNavBreakpoint);
  } else {
    navBreakpoint.addListener(handleNavBreakpoint);
  }

  faqList.addEventListener('click', handleFaqClick);
  form.addEventListener('submit', handleSubmit);
  initScrollSpy();

  yearEl.textContent = new Date().getFullYear();
})();
