export function accordions() {
  function init() {
    document.addEventListener("click", (event) => {
      const toggle = event.target;
      if (
        toggle.hasAttribute("aria-expanded") &&
        toggle.getAttribute("aria-expanded") === "false"
      ) {
        toggle.setAttribute("aria-expanded", "true");
      } else if (toggle.hasAttribute("aria-expanded")) {
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  init();
}
