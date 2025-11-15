// navigation.js - Navigation animations et sticky header
(function () {
  'use strict';

  const menuToggle = document.querySelector('.menu-toggle');
  const mainNav = document.querySelector('.main-nav');
  const navLinks = document.querySelectorAll('.main-nav a');
  const siteHeader = document.querySelector('.site-header');

  // Menu mobile toggle
  function toggleMenu() {
    if (!mainNav) return;
    mainNav.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', String(mainNav.classList.contains('is-open')));
  }

  if (menuToggle) {
    menuToggle.addEventListener('click', toggleMenu);
  }

  // Ferme le menu si on clique en dehors
  document.addEventListener('click', (e) => {
    if (!mainNav || !menuToggle) return;
    if (!mainNav.classList.contains('is-open')) return;
    const target = e.target;
    if (!mainNav.contains(target) && !menuToggle.contains(target)) {
      mainNav.classList.remove('is-open');
      menuToggle.setAttribute('aria-expanded', 'false');
    }
  });

  // Sticky navbar
  function makeStickyNavbar() {
    if (!siteHeader) return;
    window.addEventListener('scroll', () => {
      if (window.scrollY > 0) {
        siteHeader.classList.add('sticky');
        siteHeader.classList.remove('in-hero');
      } else {
        siteHeader.classList.remove('sticky');
        siteHeader.classList.add('in-hero');
      }
    });
    
    // Initialiser avec la classe in-hero au chargement
    siteHeader.classList.add('in-hero');
  }

  // Active link detection on scroll
  function updateActiveLink() {
    const sections = document.querySelectorAll('section[id]');
    
    window.addEventListener('scroll', () => {
      let currentSection = '';

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop - 150) {
          currentSection = section.getAttribute('id');
        }
      });

      // Mettre à jour les liens actifs
      navLinks.forEach((link) => {
        link.classList.remove('nav-active');
        const href = link.getAttribute('href');
        
        if (href === `#${currentSection}`) {
          link.classList.add('nav-active');
        }
      });
    });
  }

  // Hover animations on nav links
  function setupNavLinkAnimations() {
    navLinks.forEach((link) => {
      link.addEventListener('mouseenter', () => {
        if (!link.classList.contains('nav-active')) {
          link.classList.add('nav-hover');
        }
      });

      link.addEventListener('mouseleave', () => {
        link.classList.remove('nav-hover');
      });

      // Click handler pour smooth scroll
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href && href.startsWith('#')) {
          e.preventDefault();
          const targetId = href.substring(1);
          const targetSection = document.getElementById(targetId);
          
          if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
            // Fermer le menu mobile si ouvert
            if (mainNav && mainNav.classList.contains('is-open')) {
              mainNav.classList.remove('is-open');
              menuToggle.setAttribute('aria-expanded', 'false');
            }
          }
        }
      });
    });
  }

  // Initialize navigation
  if (navLinks.length > 0) {
    setupNavLinkAnimations();
    updateActiveLink();
    makeStickyNavbar();
  }

})();
