export function preference() {
  function init() {
    const motion = localStorage.getItem("motion");
    if (motion) {
      document.documentElement.setAttribute("data-user-motion", motion);
    } else if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      localStorage.setItem("motion", "reduce");
      document.documentElement.setAttribute("data-user-motion", "reduce");
    } else {
      localStorage.setItem("motion", "enabled");
      document.documentElement.setAttribute("data-user-motion", "enabled");
    }
    bindEvents();

    setPressed("color-scheme");
    setPressed("motion");
  }

  function bindEvents() {
    const toggles = document.querySelectorAll("[data-preference]");

    [].forEach.call(toggles, (toggle) => {
      toggle.addEventListener("click", (event) => {
        const value = toggle.getAttribute("data-preference");
        const namespace = toggle.getAttribute("data-preference-namespace");
        if (value === "unset") {
          localStorage.removeItem(namespace);
          document.documentElement.removeAttribute(`data-user-${namespace}`);
        } else {
          localStorage.setItem(namespace, value);
          document.documentElement.setAttribute(
            `data-user-${namespace}`,
            value
          );
        }
        setPressed(namespace);
      });
    });
  }

  function setPressed(namespace) {
    const value = localStorage.getItem(namespace) || "unset";

    const inactiveToggles = document.querySelectorAll(
      `[data-preference-namespace=${namespace}][aria-pressed]`
    );

    [].forEach.call(inactiveToggles, (inactive) => {
      inactive.setAttribute("aria-pressed", "false");
    });

    const toggles = document.querySelectorAll(
      `[data-preference-namespace=${namespace}][data-preference="${value}"]`
    );

    [].forEach.call(toggles, (toggle) => {
      toggle.setAttribute("aria-pressed", true);
    });
  }

  init();
}
