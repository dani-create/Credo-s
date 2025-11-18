// navigation.js - Navigation animations et sticky header
(function () {
  'use strict';

  // Robust selection: try querySelector, fallback to document-level delegation
  let menuToggle = document.querySelector('.menu-toggle.menu-toggle-right');
  const mainNav = document.querySelector('.main-nav');
  const navLinks = document.querySelectorAll('.main-nav a');
  const siteHeader = document.querySelector('.site-header');

  // Menu mobile toggle - PERMET le scroll mais ajoute la classe
  function toggleMenu() {
    if (!mainNav) return;
    mainNav.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', String(mainNav.classList.contains('is-open')));
    // Ajoute classe nav-open pour styling CSS - le scroll est géré par CSS media query
    if (document.body) {
      document.body.classList.toggle('nav-open', mainNav.classList.contains('is-open'));
    }
  }

  // Ferme le menu et restaure le scroll COMPLÈTEMENT
  function closeMenu() {
    if (!mainNav) return;
    mainNav.classList.remove('is-open');
    if (menuToggle) {
      menuToggle.setAttribute('aria-expanded', 'false');
    }
    // Retire la classe nav-open pour restaurer le scroll normal
    if (document.body) {
      document.body.classList.remove('nav-open');
      // IMPORTANT: Force la restauration du scroll en libérant complètement le body
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }
  }

  // Attach click on the toggle if present
  if (menuToggle) {
    menuToggle.addEventListener('click', function (e) {
      // Prevent any default navigation AND stop propagation to prevent event bubbling
      // This ensures clicking the burger menu ONLY toggles the menu, nothing else
      e.preventDefault();
      e.stopPropagation();
      toggleMenu();
    });
  }

  // Fallback: delegation - handle clicks on any current or future toggle elements
  document.addEventListener('click', (e) => {
    const target = e.target;
    const clickedToggle = target.closest && target.closest('.menu-toggle');
    if (clickedToggle) {
      // Prevent default navigation if the toggle is inside or overlaps an anchor
      e.preventDefault();
      e.stopPropagation();
      // ensure menuToggle reference points to the clicked element
      menuToggle = clickedToggle;
      toggleMenu();
    }
  });

  // Ferme le menu si on clique en dehors
  document.addEventListener('click', (e) => {
    if (!mainNav || !menuToggle) return;
    if (!mainNav.classList.contains('is-open')) return;
    const target = e.target;
    if (!mainNav.contains(target) && !menuToggle.contains(target)) {
      closeMenu();
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

      // Click handler pour smooth scroll - FERME le menu COMPLÈTEMENT avant scroll
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href && href.startsWith('#')) {
          e.preventDefault();
          const targetId = href.substring(1);
          const targetSection = document.getElementById(targetId);
          
          if (targetSection) {
            // Fermer le menu COMPLÈTEMENT
            closeMenu();
            
            // Attendre un peu pour que le menu se ferme complètement, puis scroller
            // et s'assurer que le scroll est libre
            setTimeout(() => {
              // Forcer la libération du scroll avant smooth scroll
              if (document.body.classList.contains('nav-open')) {
                document.body.classList.remove('nav-open');
              }
              document.body.style.overflow = '';
              document.documentElement.style.overflow = '';
              
              // Smooth scroll vers la section
              targetSection.scrollIntoView({ behavior: 'smooth' });
            }, 150);
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
