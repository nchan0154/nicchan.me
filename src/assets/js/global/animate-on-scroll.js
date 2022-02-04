export function animateOnScroll(container) {
  const parent = container || document;
  const elements = parent.querySelectorAll("[data-aos]");

  function init() {
    observeMutations();

    if (
      document.documentElement.getAttribute("data-user-motion") !== "reduce" &&
      "IntersectionObserver" in window &&
      window.requestAnimationFrame
    ) {
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

  function observeMutations() {
    const observer = new MutationObserver(function (mutations) {
      mutations.forEach(function (mutation) {
        if (mutation.attributeName === "data-user-motion") {
          if (
            document.documentElement.getAttribute("data-user-motion") !==
            "reduce"
          ) {
            init();
          }
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true, //configure it to listen to attribute changes
    });
  }

  function playAnimation(target) {
    target.setAttribute("data-aos", "playing");
  }

  init();
}
