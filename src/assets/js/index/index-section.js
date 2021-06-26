import { getElementRatio } from "../utils/get-element-ratio";

export function indexSection() {
  // binding this to the text as this is fixed as opposed to the parent or image container, bc it can cause weird jank
  const elements = document.querySelectorAll(".index-section__text-wrapper");
  const footer = document.getElementById("footer");
  let observer, footerObserver;
  let throttled,
    isObserving = false;

  function getSiblings(elem) {
    return Array.prototype.filter.call(elem.parentNode.children, function (
      sibling
    ) {
      return sibling !== elem;
    });
  }

  function scrollCallback(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const target = entry.target;
        let toStick = target.nextElementSibling;
        let toUnstick = getSiblings(toStick.parentNode);
        // setting a fade color prevents obnoxious flashing
        // old site used all visuals as fixed position but will not work in conjunction with animating on scroll intersection pbservers
        let color = getComputedStyle(toStick).getPropertyValue("--fade-color");
        if (getElementRatio(footer) > 0) {
          return;
        }
        if (toStick) {
          toStick.classList.add("index-section__visuals--stuck");
          [].forEach.call(toUnstick, (sibling) => {
            sibling
              .querySelector(".index-section__visuals")
              .classList.remove("index-section__visuals--stuck");
          });
          document.documentElement.style.setProperty("--fade-color", color);
        }
      }
    });
  }

  const footerCallback = (entries, observer) => {
    entries.forEach((entry) => {
      const lastSection = document.querySelector(
        ".index-section:last-child .index-section__visuals"
      );
      if (entry.isIntersecting && lastSection) {
        const sections = document.querySelectorAll(".index-section__visuals");
        [].forEach.call(sections, (section) => {
          section.classList.remove("index-section__visuals--stuck");
        });
        lastSection.style.opacity = 1;
        lastSection.style.zIndex = 3;
      } else if (lastSection) {
        // we should be on the last section if we can see more than half of it
        if (getElementRatio(lastSection.parentNode) > 0.3)
          lastSection.classList.add("index-section__visuals--stuck");

        lastSection.style.removeProperty("opacity");
        lastSection.style.removeProperty("z-index");
      }
    });
  };

  function init() {
    if (
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches &&
      "IntersectionObserver" in window &&
      window.requestAnimationFrame
    ) {
      if (
        isObserving === false &&
        window.matchMedia("(min-width: 62em) and (min-height: 42em)").matches
      ) {
        isObserving = true;
        observer = new IntersectionObserver(scrollCallback, {
          // don't make this .5 or you may hit weird edge case where it causes seizure inducing flash
          threshold: [0.51],
        });

        [].forEach.call(elements, (element) => {
          observer.observe(element);
        });

        footerObserver = new IntersectionObserver(footerCallback);
        footerObserver.observe(footer);
      } else if (
        isObserving &&
        !window.matchMedia("(min-width: 62em) and (min-height: 42em)").matches
      ) {
        isObserving = false;
        [].forEach.call(elements, (element) => {
          observer.unobserve(element);
        });
        footerObserver.unobserve(footer);
        const stuck = document.querySelector(".index-section__visuals--stuck");
        if (stuck) stuck.classList.remove("index-section__visuals--stuck");
      }
    }
  }

  window.addEventListener("resize", function () {
    if (!throttled) {
      init();
      throttled = true;
      setTimeout(function () {
        throttled = false;
      }, 100);
    }
  });

  init();
}
