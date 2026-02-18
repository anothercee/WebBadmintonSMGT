/* NAVBAR SCROLL */
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (navbar) {
    navbar.classList.toggle("navbar-scrolled", window.scrollY > 50);
  }
});


/* HAMBURGER */
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

if (hamburger && navLinks) {
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("nav-active");
  });
}


/* SMOOTH SCROLL */
document.querySelectorAll("a[href^='#']").forEach(anchor => {

  anchor.addEventListener("click", function(e) {

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      e.preventDefault();

      target.scrollIntoView({ behavior: "smooth" });

      if (navLinks) navLinks.classList.remove("nav-active");
    }

  });

});


/* REVEAL */
const reveals = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(entries => {

  entries.forEach(entry => {
    entry.target.classList.toggle("active", entry.isIntersecting);
  });

}, { threshold: 0.2 });

reveals.forEach(el => revealObserver.observe(el));


/* ACTIVE NAV */
const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach(section => {

    const sectionTop = section.offsetTop - 120;
    const sectionHeight = section.clientHeight;

    if (window.scrollY >= sectionTop &&
        window.scrollY < sectionTop + sectionHeight) {
      current = section.id;
    }

  });

  navItems.forEach(link => {
    link.classList.toggle(
      "active",
      link.getAttribute("href") === "#" + current
    );
  });

});


/* GALERI SLIDER */
const galeriTrack = document.querySelector(".galeri-track");

if (galeriTrack) {

  galeriTrack.innerHTML += galeriTrack.innerHTML;

  let scrollAmount = 0;

  function autoScrollGaleri() {

    scrollAmount++;

    if (scrollAmount >= galeriTrack.scrollWidth / 2) {
      scrollAmount = 0;
    }

    galeriTrack.scrollLeft = scrollAmount;

    requestAnimationFrame(autoScrollGaleri);
  }

  autoScrollGaleri();
}


/* PRESTASI SLIDER */
const prestasiTrack = document.querySelector(".prestasi-track");

if (prestasiTrack) {

  prestasiTrack.innerHTML += prestasiTrack.innerHTML;

  let scrollAmount = 0;

  function autoScrollPrestasi() {

    scrollAmount++;

    if (scrollAmount >= prestasiTrack.scrollWidth / 2) {
      scrollAmount = 0;
    }

    prestasiTrack.scrollLeft = scrollAmount;

    requestAnimationFrame(autoScrollPrestasi);
  }

  autoScrollPrestasi();
}


/* BACK TO TOP */
const backTop = document.querySelector(".back-to-top");

if (backTop) {

  window.addEventListener("scroll", () => {
    backTop.classList.toggle("show", window.scrollY > 400);
  });

  backTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

}


/* HERO TEXT */
window.addEventListener("load", () => {

  const heroText = document.querySelectorAll(
    ".hero-content h1, .hero-content p, .hero-buttons"
  );

  heroText.forEach((el, index) => {
    el.style.animationDelay = `${index * 0.3}s`;
  });

});
