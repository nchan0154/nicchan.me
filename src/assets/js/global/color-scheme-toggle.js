export function colorScheme() {
  function init() {
    bindEvents();

    getColorScheme();
  }

  function bindEvents() {
    const toggles = document.querySelectorAll("[data-color-scheme]");

    [].forEach.call(toggles, (toggle) => {
      toggle.addEventListener("click", (event) => {
        const scheme = toggle.getAttribute("data-color-scheme");
        localStorage.setItem("nc-color-scheme", scheme);
        setSchemeAttribute(scheme);
      });
    });
  }

  function getColorScheme() {
    const scheme = localStorage.getItem("nc-color-scheme");

    setSchemeAttribute(scheme);
  }

  function setSchemeAttribute(scheme) {
    if (scheme) {
      document.documentElement.setAttribute("data-user-color-scheme", scheme);
    }
  }
  init();
}
