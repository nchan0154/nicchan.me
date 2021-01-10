export function animateOnScroll(container) {
  const parent = container || document;
  const elements = parent.querySelectorAll("[data-aos]");

  function init() {
    if (
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches &&
      "IntersectionObserver" in window &&
      window.requestAnimationFrame
    ) {
      elements;
      const callback = (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target;
            const ratio =
              parseFloat(target.getAttribute("data-aos-threshold")) || 1;
            if (
              entry.intersectionRatio >= ratio &&
              target.getAttribute("data-aos") == "initialized"
            ) {
              window.requestAnimationFrame(() => playAnimation(target));
            }
          }
        });
      };

      const observer = new IntersectionObserver(callback, {
        threshold: [0.25, 0.5, 0.75, 1],
      });
      [].forEach.call(elements, (element) => {
        element.setAttribute("data-aos", "initialized");
        observer.observe(element);
        element.addEventListener("animationend", () => {
          element.setAttribute("data-aos", "ended");
        });
      });
    }
  }

  function playAnimation(target) {
    target.setAttribute("data-aos", "playing");
  }

  init();
}
