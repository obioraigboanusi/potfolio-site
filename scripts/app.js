"use strict";
const navToggle = document.getElementById("burger");
const navLinks = document.getElementById("nav-links");
const nav = document.getElementById("nav");


navToggle.addEventListener('click', toggleNav)


// document.addEventListener("click", (e) => {
//   let expanded = navToggle.getAttribute("aria-expanded") === 'true' || false;
//   if (expanded) {
//     if (e.target !== navLinks) {
//       navLinks.classList.remove("nav-active");
//       navToggle.classList.remove("toggle");
//       navToggle.setAttribute("aria-expanded", !expanded);
//     } 
//   }
// })


function toggleNav() {
  let expanded = navToggle.getAttribute("aria-expanded") === 'true' || false;
  navLinks.classList.toggle("nav-active");
  navToggle.classList.toggle("toggle");
  navToggle.setAttribute("aria-expanded", !expanded);
}
