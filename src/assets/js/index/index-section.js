export function indexSection() {
  // binding this to the text as this is fixed as opposed to the parent or image container, bc it can cause weird jank
  const elements = document.querySelectorAll(".index-section__text-wrapper");

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
            const currentY = entry.boundingClientRect.y;
            const target = entry.target;
            const parent = entry.target.parentNode;
            let toStick = target.nextElementSibling;
            let toUnstick = parent.previousElementSibling;
            if (currentY < previousY) {
              if (target.nextElementSibling) {
                toUnstick = parent.nextElementSibling;
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
        threshold: [0.55],
      });

      [].forEach.call(elements, (element) => {
        observer.observe(element);
      });
    }
  }

  init();
}
