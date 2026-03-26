/* ============================================================
   PSICÓLOGO MIKAEL CAETANO - Main JavaScript
   Minimal, performant interactions
   ============================================================ */

(function () {
  'use strict';

  // --- Mobile Navigation ---
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = navMenu.querySelectorAll('.nav__link');

  function toggleMenu() {
    const isOpen = navMenu.classList.toggle('nav__menu--open');
    navToggle.classList.toggle('nav__toggle--active');
    navToggle.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }

  navToggle.addEventListener('click', toggleMenu);

  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      if (navMenu.classList.contains('nav__menu--open')) {
        toggleMenu();
      }
    });
  });

  // --- Navbar scroll effect ---
  var nav = document.getElementById('nav');
  var lastScroll = 0;

  function handleScroll() {
    var currentScroll = window.scrollY;
    if (currentScroll > 50) {
      nav.classList.add('nav--scrolled');
    } else {
      nav.classList.remove('nav--scrolled');
    }
    lastScroll = currentScroll;
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // --- Scroll animations (IntersectionObserver) ---
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    var animateElements = document.querySelectorAll(
      '.approach-card, .testimonial-card, .process__step, .process__modality, .about__highlight, .faq__item'
    );

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry, index) {
          if (entry.isIntersecting) {
            // Stagger animation based on element position in its parent
            var siblings = entry.target.parentElement.children;
            var siblingIndex = Array.prototype.indexOf.call(siblings, entry.target);
            entry.target.style.transitionDelay = (siblingIndex * 100) + 'ms';
            entry.target.classList.add('animate-in');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    animateElements.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    // If no IntersectionObserver or reduced motion, show all elements
    document.querySelectorAll(
      '.approach-card, .testimonial-card, .process__step, .process__modality, .about__highlight, .faq__item'
    ).forEach(function (el) {
      el.style.opacity = '1';
      el.style.transform = 'none';
    });
  }

  // --- Smooth scroll for anchor links ---
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href');
      if (targetId === '#') return;
      var target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // --- Active nav link highlight ---
  var sections = document.querySelectorAll('section[id]');
  var navLinksAll = document.querySelectorAll('.nav__link[href^="#"]');

  function highlightNav() {
    var scrollPos = window.scrollY + 100;
    sections.forEach(function (section) {
      var top = section.offsetTop;
      var height = section.offsetHeight;
      var id = section.getAttribute('id');
      if (scrollPos >= top && scrollPos < top + height) {
        navLinksAll.forEach(function (link) {
          link.classList.remove('nav__link--active');
          if (link.getAttribute('href') === '#' + id) {
            link.classList.add('nav__link--active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', highlightNav, { passive: true });
})();
