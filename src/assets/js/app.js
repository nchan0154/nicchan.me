import { accordions } from "./global/accordions";
import { animateOnScroll } from "./global/animate-on-scroll";
import { preference } from "./global/preference";
import { nav } from "./global/nav";
import { indexSection } from "./index/index-section";

document.addEventListener(
  "DOMContentLoaded",
  function () {
    if (window.scrollY > 0) {
      document.querySelector("body").setAttribute("data-scrolled", "true");
    }
    preference();
    indexSection();
    animateOnScroll();
    accordions();
    nav();
  },
  false
);
