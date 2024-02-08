"use strict";

const nav = document.querySelector(".nav");
const navItems = document.querySelector(".nav__items");
const logo = document.querySelector(".logo");
const section1 = document.querySelector("#section--1");
const firstBlock = document.querySelector(".first");

navItems.addEventListener("click", (e) => {
  e.preventDefault();

  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

const handleHover = function (e) {
  if (e.target.classList.contains("nav__link")) {
    const link = e.target;
    const sibblings = link.closest(".nav").querySelectorAll(".nav__link");

    sibblings.forEach((el) => {
      if (el !== link) {
        el.style.opacity = this;
      }
    });
    logo.style.opacity = this;
  }
};

nav.addEventListener("mouseover", handleHover.bind(0.5));

nav.addEventListener("mouseout", handleHover.bind(1));

const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    nav.classList.add("sticky-nav");
  } else {
    nav.classList.remove("sticky-nav");
  }
};

const firstBlockObs = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
});

firstBlockObs.observe(firstBlock);
