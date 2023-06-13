/* burgermenu */
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

/* scrollable */
document.addEventListener("DOMContentLoaded", function () {
  let sections = document.querySelectorAll("section");
  let navlinks = document.querySelectorAll("header nav a");

  window.onscroll = () => {
    sections.forEach((sec) => {
      let top = window.scrollY;
      let offset = sec.offsetTop - 150;
      let height = sec.offsetHeight;
      let id = sec.getAttribute("id");

      if (top >= offset && top < offset + height) {
        navlinks.forEach((link) => {
          link.classList.remove("active");
        });
        document.querySelector("header nav a[href*=" + id + "]").classList.add("active");
      }
    });

    /* navbar */
    let header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 100);

    /* fjern burgermenu */
    menuIcon.classList.remove("bx-x");
    navbar.classList.remove("active");
  };
});

/* scrollreveal */

ScrollReveal({
  ///reset: true,
  distance: "80px",
  durationn: 2000,
  delay: 150,
});

ScrollReveal().reveal(".home-content, .home-content1, .heading", { origin: "top" });
ScrollReveal().reveal(".home-img,.home-img1, .skills, .caption, .portfoliebox", { origin: "bottom" });
ScrollReveal().reveal(".home-content h1, .home-content1 h1, .about-img, .about-img1", { origin: "left" });
ScrollReveal().reveal(".home-content p, .home-conten1 p, .about-content", { origin: "right" });

/* skiftende tekst */
const typed = new Typed(".skift-tekst", {
  strings: ["Studerende", "MultiMedieDesigner"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});
