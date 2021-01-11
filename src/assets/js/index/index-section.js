import { getElementRatio } from "../utils/get-element-ratio";

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
            // setting a fade color prevents obnoxious flashing
            // old site used all visuals as fixed position but will not work in conjunction with animating on scroll intersection pbservers
            let color = getComputedStyle(toStick).getPropertyValue(
              "--fade-color"
            );
            // we're scrolling up
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
            if (toStick) {
              toStick.classList.add("index-section__visuals--stuck");
              document.documentElement.style.setProperty("--fade-color", color);
            }
          }
        });
      };

      const observer = new IntersectionObserver(callback, {
        // don't make this .5 or you may hit weird edge case where it causes seizure inducing flash
        threshold: [0.501],
      });

      [].forEach.call(elements, (element) => {
        observer.observe(element);
      });

      // footer is in view, break the animations :O
      const footer = document.getElementById("footer");
      const footerCallback = (entries, observer) => {
        entries.forEach((entry) => {
          // force onto next paint after the other observer to fix bug where footer overlaps last section
          setTimeout(function () {
            const lastSection = document.querySelector(
              ".index-section:last-child .index-section__visuals"
            );
            if (entry.isIntersecting) {
              const sections = document.querySelectorAll(
                ".index-section__visuals"
              );
              [].forEach.call(sections, (section) => {
                section.classList.remove("index-section__visuals--stuck");
              });
              lastSection.style.opacity = 1;
              lastSection.style.zIndex = 3;
            } else {
              // we should be on the last section if we can see more than half of it
              if (getElementRatio(lastSection.parentNode) > 0.5)
                lastSection.classList.add("index-section__visuals--stuck");

              lastSection.style.removeProperty("opacity");
              lastSection.style.removeProperty("z-index");
            }
          });
        });
      };

      const footerObserver = new IntersectionObserver(footerCallback);
      footerObserver.observe(footer);
    }
  }

  init();
}
