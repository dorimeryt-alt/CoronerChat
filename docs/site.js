(() => {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce) return;
  const horizon = document.querySelector(".horizon");
  if (!horizon) return;
  let ticking = false;
  window.addEventListener("scroll", () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const y = Math.min(window.scrollY, 600);
      horizon.style.transform = `perspective(400px) rotateX(58deg) translateY(${y * 0.08}px)`;
      ticking = false;
    });
  }, { passive: true });
})();
