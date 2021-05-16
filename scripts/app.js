'use strict'
const navToggle = document.getElementById('burger');
const navLinks = document.getElementById('nav-links');
let expanded = navToggle.getAttribute('aria-expanded') === 'true' || false
navToggle.addEventListener('click', () => {
  
  navLinks.classList.toggle('nav-active');
  navToggle.classList.toggle('toggle');
  navToggle.setAttribute('aria-expanded', !expanded);
  console.log(expanded)
})
