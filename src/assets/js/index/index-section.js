export function indexSection() {
  const elements = document.querySelectorAll(".index-section");

  function init() {
    let previousY = 0;

    if (
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches &&
      "IntersectionObserver" in window &&
      window.requestAnimationFrame
    ) {
      const callback = (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log(entry);
            const currentY = entry.boundingClientRect.y;
            const target = entry.target;
            let toStick = target.querySelector(".index-section__visuals");
            let toUnstick = target.previousElementSibling;
            if (currentY < previousY) {
              if (target.nextElementSibling) {
                toUnstick = target.nextElementSibling;
              }
            }
            if (toUnstick) {
              toUnstick
                .querySelector(".index-section__visuals")
                .classList.remove("index-section__visuals--stuck");
            }
            toStick.classList.add("index-section__visuals--stuck");
          }
        });
      };

      const observer = new IntersectionObserver(callback, {
        threshold: [0.75],
      });

      [].forEach.call(elements, (element) => {
        observer.observe(element);
      });
    }
  }

  init();
}
