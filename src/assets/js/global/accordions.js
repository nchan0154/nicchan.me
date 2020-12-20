export function accordions() {
  function init() {
    document.addEventListener("click", (event) => {
      const toggle = event.target;
      const targetId = toggle.getAttribute("aria-controls");
      if (
        toggle.hasAttribute("aria-expanded") &&
        toggle.getAttribute("aria-expanded") === "false"
      ) {
        toggle.setAttribute("aria-expanded", "true");
      } else {
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  init();
}
