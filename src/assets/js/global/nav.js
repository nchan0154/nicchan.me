export function nav() {
  const nav = document.getElementById("nav");
  const dropdownToggles = nav.querySelectorAll("[data-dropdown-toggle]");
  const dropdowns = nav.querySelectorAll("[data-dropdown]");

  function init() {
    bindEvents();
  }

  function bindEvents() {
    dropdownToggles.forEach((dropdownToggle) => {
      dropdownToggle.addEventListener("click", () => {
        if (dropdownToggle.getAttribute("aria-expanded") === "true") {
          dropdownToggle.setAttribute("aria-expanded", "false");
        } else {
          dropdownToggle.setAttribute("aria-expanded", "true");
        }
      });
    });

    dropdowns.forEach((dropdown) => {
      dropdown.addEventListener("focusout", (event) => {
        if (!event.relatedTarget.closest("[data-dropdown]")) {
          const toggleName = dropdown.getAttribute("id");
          const toggle = document.querySelector(
            `[data-dropdown-toggle="${toggleName}"]`
          );

          toggle.setAttribute("aria-expanded", "false");
        }
      });
    });

    document.addEventListener("click", (event) => {
      if (!event.target.closest("[data-dropdown-wrapper]")) {
        dropdownToggles.forEach((dropdownToggle) => {
          closeDropdown(dropdownToggle);
        });
      }
    });
  }

  // Escape key handler
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      dropdownToggles.forEach((dropdownToggle) => {
        closeDropdown(dropdownToggle);
      });
    }
  });

  function closeDropdown(toggle) {
    if (toggle.getAttribute("aria-expanded") === "true") {
      toggle.setAttribute("aria-expanded", "false");
      toggle.focus();
    }
  }

  init();
}
