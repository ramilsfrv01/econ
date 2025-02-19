'use strict';
const slides = document.querySelectorAll('.slide');
const titles = document.querySelectorAll('.top-title');
let currentIndex = 0;
let totalSlides = slides.length;

// Initially set the first slide to active
slides[currentIndex].classList.add('active');
titles[currentIndex].classList.add('active');
// Buttons for navigation
document.querySelector('.prev').addEventListener('click', () => changeSlide(-1));
document.querySelector('.next').addEventListener('click', () => changeSlide(1));

// Function to change the slide
function changeSlide(direction) {
  // Hide the current slide and title
  slides[currentIndex].classList.remove('active');
  titles[currentIndex].classList.remove('active');
  // Calculate the next slide index with infinite scrolling
  currentIndex = (currentIndex + direction + totalSlides) % totalSlides;

  // Show the new slide and title
  setTimeout(() => {
    titles[currentIndex].classList.add('active');
    slides[currentIndex].classList.add('active');  }, 300); // Delay to match the CSS transition duration
}

let autoplay = setInterval(() => changeSlide(1), 5000); // Auto-slide every 5 seconds

// Stop autoplay when mouse is hovering over the slides
document.querySelector('.slides').addEventListener('mouseover', () => clearInterval(autoplay));
document.querySelector('.slides').addEventListener('mouseout', () => {
    autoplay = setInterval(() => changeSlide(1), 5000);
  });











document.addEventListener('DOMContentLoaded', function () {
  new Splide('#image-slider', {
    type: 'loop',
    pagination: true,
    perPage: 3,
    height: '100%',
    arrows: true,
    keyboard: 'global',
    breakpoints: {
      640: {
        perPage: 2,
      }
    },
    paginationDirection: 'ltr',
    paginationPosition: 'bottom',
  }).mount();
});


window.addEventListener('scroll', () => {
  console.log(window.scrollY);
});


let closeBtn = document.querySelector('.menu-close');
let openBtn = document.querySelector('.mobile-menu');

openBtn.addEventListener('click', () => {
  openMobileNav();
});
closeBtn.addEventListener('click', closeMobileNav);

function openMobileNav() {
  document.querySelector('.mobile-navbar').style.width = '50%';
  document.querySelector('.mobile-navbar-overlay').classList.add('body-overlay');
}

function closeMobileNav() {
  document.querySelector('.mobile-navbar').style.width = '0%';
  document.querySelector('.mobile-navbar-overlay').classList.remove('body-overlay');

}
