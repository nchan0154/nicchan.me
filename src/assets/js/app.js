import { accordions } from "./global/accordions";
import { animateOnScroll } from "./global/animate-on-scroll";
import { colorScheme } from "./global/color-scheme-toggle";
import { indexSection } from "./index/index-section";

document.addEventListener(
  "DOMContentLoaded",
  function () {
    if (window.scrollY > 0) {
      document.querySelector("body").setAttribute("data-scrolled", "true");
    }
    colorScheme();
    indexSection();
    animateOnScroll();
    accordions();
  },
  false
);
