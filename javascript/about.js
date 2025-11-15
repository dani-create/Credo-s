// about.js - Animations pour la section À Propos
(function () {
  'use strict';

  const aboutSection = document.getElementById('about');
  if (!aboutSection) return;

  const aboutContent = aboutSection.querySelector('.about-content-wrapper');
  const aboutParagraphs = aboutSection.querySelectorAll('.about-paragraph');

  // Fade-in animation du contenu au scroll
  function animateAboutContent() {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('about-content-visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    if (aboutContent) {
      observer.observe(aboutContent);
    }
  }

  // Stagger animation des paragraphes
  function animateAboutParagraphs() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -30px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('about-paragraph-visible');
          }, index * 80);
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    aboutParagraphs.forEach((para) => {
      observer.observe(para);
    });
  }

  // Initialize
  animateAboutContent();
  animateAboutParagraphs();

})();
