function isInViewport(element) {
  const rect = element.getBoundingClientRect();

  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function handleScroll() {
  const section3 = document.getElementById("section3");

  if (isInViewport(section3)) {
    section3.classList.add("show");
  }
}

window.addEventListener("scroll", handleScroll);

handleScroll();
