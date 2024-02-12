"use strict";

const nav = document.querySelector(".nav");
const navItems = document.querySelector(".nav__items");
const logo = document.querySelector(".logo");
const section1 = document.querySelector("#section--1");
const firstBlock = document.querySelector(".first");

navItems.addEventListener("click", (e) => {
  e.preventDefault();

  if (
    e.target.classList.contains("nav__link") ||
    e.target.classList.contains("a__svg")
  ) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

const handleHover = function (e) {
  if (
    e.target.classList.contains("nav__link") ||
    e.target.classList.contains("a__svg")
  ) {
    const link = e.target.closest(".nav__item");
    const sibblingsItems = link.closest(".nav").querySelectorAll(".nav__item");

    sibblingsItems.forEach((el) => {
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

const allSections = document.querySelectorAll(".section");

const revealSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    return;
  }
  entry.target.classList.remove("section--hidden");

  observer.unobserve(entry.target);
};

const sectionObs = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.1,
});

allSections.forEach((section) => {
  sectionObs.observe(section);
  section.classList.add("section--hidden");
});

const cvBtn = document.querySelector("#a__btn");

const cvBtnHover = function (e) {
  e.target.querySelector("object").style.opacity = this;
};

cvBtn.addEventListener("mouseover", cvBtnHover.bind(0.5));
cvBtn.addEventListener("mouseout", cvBtnHover.bind(1));
