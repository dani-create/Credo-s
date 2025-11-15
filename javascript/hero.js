// hero.js - Animations pour la section Hero
(function () {
  'use strict';

  const heroSection = document.getElementById('hero');
  if (!heroSection) return;

  // Fade-in animation au chargement
  function initHeroAnimation() {
    heroSection.classList.add('hero-loaded');
  }

  // Observer pour animation au scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('hero-visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  observer.observe(heroSection);

  // Parallax effect sur le background (optionnel)
  window.addEventListener('scroll', () => {
    if (window.scrollY < window.innerHeight) {
      const scrollY = window.scrollY;
      const heroBg = heroSection.querySelector('.hero-bg-right');
      if (heroBg) {
        heroBg.style.transform = `translateY(${scrollY * 0.5}px)`;
      }
    }
  });

})();
