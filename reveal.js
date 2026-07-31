// fade-up on scroll — the only scroll motion on the site (spec §6).
window.MUNReveal = function () {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const els = Array.from(document.querySelectorAll('[data-reveal]'));
  els.forEach(el => {
    if (el.dataset.revealed) return;
    el.style.opacity = '0';
    el.style.transform = 'translateY(16px)';
    el.style.transition = 'opacity 500ms cubic-bezier(.16,1,.3,1), transform 500ms cubic-bezier(.16,1,.3,1)';
  });
  const io = new IntersectionObserver(entries => {
    entries.forEach((e, i) => {
      if (!e.isIntersecting) return;
      const el = e.target;
      el.dataset.revealed = '1';
      setTimeout(() => { el.style.opacity = '1'; el.style.transform = 'none'; }, i * 60);
      io.unobserve(el);
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -6% 0px' });
  els.forEach(el => io.observe(el));
};
