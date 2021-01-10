export function portrait() {
  const section = document.querySelector(".index-section--first");
  const speed = 0.01;
  let position = document.body.scrollTop || document.documentElement.scrollTop;

  function setScrollParallax() {
    if (
      position !=
      (document.body.scrollTop || document.documentElement.scrollTop)
    ) {
      position = document.body.scrollTop || document.documentElement.scrollTop;
      section.style.setProperty(
        "--portrait-offset",
        (document.body.scrollTop || document.documentElement.scrollTop) *
          speed +
          5
      );
    }
    window.requestAnimationFrame(setScrollParallax);
  }

  if (section) {
    window.requestAnimationFrame(setScrollParallax);
  }
}
