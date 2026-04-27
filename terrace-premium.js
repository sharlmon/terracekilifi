document.addEventListener('DOMContentLoaded', () => {
  // Reveal on scroll animations
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Select all sections and main blocks for animation
  const elementsToReveal = document.querySelectorAll('.sqs-block-image, .sqs-block-html h1, .sqs-block-html h2, .sqs-block-html p, .sqs-block-quote, .page-section');
  
  elementsToReveal.forEach(el => {
    el.classList.add('reveal-on-scroll');
    observer.observe(el);
  });
});
