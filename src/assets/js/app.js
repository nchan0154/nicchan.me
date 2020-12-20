import { accordions } from "./global/accordions";
import { animateOnScroll } from "./global/animate-on-scroll";

document.addEventListener(
  "DOMContentLoaded",
  function () {
    animateOnScroll();
    accordions();
  },
  false
);
