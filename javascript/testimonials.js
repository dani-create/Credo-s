// testimonials.js - Animations pour la section Témoignages
(function () {
  'use strict';

  const testimonialsSection = document.getElementById('testimonials');
  if (!testimonialsSection) return;

  const testimonialCards = testimonialsSection.querySelectorAll('.testimonial-card');

  // Stagger animation des cartes de témoignages
  function animateTestimonialCards() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('testimonial-card-visible');
          }, index * 150);
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    testimonialCards.forEach((card) => {
      observer.observe(card);
    });
  }

  // Hover effect sur les cartes
  function setupTestimonialHover() {
    testimonialCards.forEach((card) => {
      card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-8px)';
        card.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.3)';
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
        card.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
      });
    });
  }

  // Initialize
  animateTestimonialCards();
  setupTestimonialHover();

})();
