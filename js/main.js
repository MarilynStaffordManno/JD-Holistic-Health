/* ==========================================================================
   JDS Holistic Health
   main.js
   ========================================================================== */

(function () {
  'use strict';

  // ============ SCROLL REVEAL ============
  // Adds an 'in' class to sections as they enter the viewport.
  const sections = document.querySelectorAll('section');
  if ('IntersectionObserver' in window && sections.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    sections.forEach((section) => {
      section.classList.add('reveal');
      observer.observe(section);
    });
  } else {
    // Fallback: reveal everything immediately.
    sections.forEach((section) => section.classList.add('reveal', 'in'));
  }

  // ============ DYNAMIC COPYRIGHT YEAR ============
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // ============ NEWSLETTER FORM ============
  // Replace this stub with your actual newsletter provider integration
  // (Mailchimp, ConvertKit, Flodesk, etc.).
  const newsletterForm = document.getElementById('newsletter');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = newsletterForm.querySelector('input');
      const button = newsletterForm.querySelector('button');
      if (input.value) {
        button.textContent = '✓ thank you';
        input.value = '';
        input.disabled = true;
        setTimeout(() => {
          button.textContent = 'subscribe';
          input.disabled = false;
        }, 4000);
      }
    });
  }

  // ============ SMOOTH SCROLL POLYFILL ============
  // Fallback for browsers that don't support CSS scroll-behavior: smooth.
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
})();
