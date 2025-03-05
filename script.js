/*=============== SHOW MENU ===============*/

const navMenu = document.querySelector(".nav-menu");
navToggle = document.querySelector(".nav-toggle");
navClose = document.querySelector(".nav-close");

// Menu Show
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

// Menu hidden
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== SHOW SCROLL UP ===============*/

const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);

/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({
  origin: "top",
  distance: "50px",
  duration: 2000,
  delay: 100,
  reset: true, // Animation Repeat
});
sr.reveal("#header");

sr.reveal(".experience", { origin: "left" });
