// Reveal cards gently as they enter the viewport.
const cards = document.querySelectorAll('.card');

if ('IntersectionObserver' in window && cards.length) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  cards.forEach((card) => observer.observe(card));
} else {
  // Fallback: just show everything if IntersectionObserver isn't supported.
  cards.forEach((card) => card.classList.add('in-view'));
}
