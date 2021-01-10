import { accordions } from "./global/accordions";
import { animateOnScroll } from "./global/animate-on-scroll";
import { portrait } from "./index/portrait";
import { indexSection } from "./index/index-section";

document.addEventListener(
  "DOMContentLoaded",
  function () {
    indexSection();
    portrait();
    animateOnScroll();
    accordions();
  },
  false
);
