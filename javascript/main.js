// Thème dark/light : gestion du switcher
(function () {
  const themeBtn = document.getElementById('theme-btn');
  let currentTheme = localStorage.getItem('credo_theme') || 'dark';
  function setTheme(theme) {
    if (theme === 'light') {
      document.body.classList.add('theme-light');
      document.body.classList.remove('theme-dark');
      themeBtn.querySelector('img').src = 'images/icon-sun.svg';
      themeBtn.querySelector('img').alt = 'Thème clair';
      // Mode clair : fond transparent
      themeBtn.style.background = 'transparent';
    } else {
      document.body.classList.add('theme-dark');
      document.body.classList.remove('theme-light');
      themeBtn.querySelector('img').src = 'images/icon-moon.svg';
      themeBtn.querySelector('img').alt = 'Thème sombre';
      // Mode sombre : fond jaune vif pour visibilité
      themeBtn.style.background = '#FFD700';
    }
    localStorage.setItem('credo_theme', theme);
  }
  if (themeBtn) {
    themeBtn.addEventListener('click', function () {
      currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
      setTheme(currentTheme);
    });
    setTheme(currentTheme);
  }
})();
// main.js - Animations et comportements interactifs
// - bascule du menu mobile
// - animations navigation (hover, active)
// - sticky navbar
// - détection de section au scroll

(function () {
  'use strict';

  // ========================================
  // Menu mobile : toggle de la navigation
  // ========================================
  const menuToggle = document.querySelector('.menu-toggle.menu-toggle-right');
  const mainNav = document.querySelector('.main-nav');

  function toggleMenu() {
    if (!mainNav) return;
    mainNav.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', String(mainNav.classList.contains('is-open')));
    // prevent background scroll when nav is open on mobile
    if (document.body) {
      document.body.classList.toggle('nav-open', mainNav.classList.contains('is-open'));
    }
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

  // ========================================
  // Navigation animations & sticky navbar
  // ========================================
  const navLinks = document.querySelectorAll('.main-nav a');
  const siteHeader = document.querySelector('.site-header');

  // Sticky navbar
  function makeStickyNavbar() {
    if (!siteHeader) return;
    window.addEventListener('scroll', () => {
      if (window.scrollY > 0) {
        siteHeader.classList.add('sticky');
      } else {
        siteHeader.classList.remove('sticky');
      }
    });
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

      // Click handler para evitar comportamiento por defecto
      link.addEventListener('click', (e) => {
        // Permettre la navigation normale
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

  // Initialiser les animations
  if (navLinks.length > 0) {
    setupNavLinkAnimations();
    updateActiveLink();
    makeStickyNavbar();
  }

  // Exposer un hook minimal pour init futurs composants
  window.Credo = window.Credo || {};
  window.Credo.init = function () {
    // initialisations éventuelles
  };

})();
