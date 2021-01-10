import { accordions } from "./global/accordions";
import { animateOnScroll } from "./global/animate-on-scroll";
import { portrait } from "./index/portrait";

document.addEventListener(
  "DOMContentLoaded",
  function () {
    portrait();
    animateOnScroll();
    accordions();
  },
  false
);
