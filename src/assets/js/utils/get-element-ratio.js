export function getElementRatio(element) {
  // Get the relevant measurements and positions
  const viewportHeight = window.innerHeight;
  const scrollTop = window.scrollY;
  const elementOffsetTop = element.offsetTop;
  const elementHeight = element.offsetHeight;

  const distance = scrollTop + viewportHeight - elementOffsetTop;
  return distance / (viewportHeight + elementHeight / 100);
}
