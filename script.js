const header = document.querySelector("header");
const contentSection = document.querySelector("#content");

window.addEventListener("scroll", () => {
  // Get the height of the header
  const headerHeight = header.getBoundingClientRect().height;

  // Get the scroll position
  const scrollPosition = window.scrollY;

  // Toggle the 'scrolled' class based on the scroll position
  if (scrollPosition >= headerHeight) {
    header.classList.add("scrolled");
    contentSection.style.paddingTop = `${headerHeight}px`;
  } else {
    header.classList.remove("scrolled");
    contentSection.style.paddingTop = 0;
  }
});

/* ... Other styles ... */

