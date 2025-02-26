'use strict';

// Preloader
document.addEventListener('DOMContentLoaded', function () {
  new Splide('#header-slider', {
    type: 'fade',
    rewind: true,
    perPage: 1,
    perMove: 1,
    arrows: true,
    pagination:false,
    easing: 'ease-in-out',
    transition: 'fade',
    autoplay: true,
    speed:900,
    interval: 3000,
    pauseOnHover: true,

  }).mount();
  new Splide('#image-slider', {
    type: 'loop',
    perPage: 3,
    perMove: 1,
    pagination: false,
    easing: 'ease',
    transition: 'fade',
    easingFunc: 'ease',
    height: '100%',
    autoplay: true,
    interval: 3000,
    pauseOnHover: true,
    arrows: true,
    breakpoints: {
      640: {
        perPage: 2,
      },
      480: {
        perPage: 1,
      },
    },
    paginationDirection: 'ltr',
    paginationPosition: 'bottom',
  }).mount();
  new Splide('#partner-slider', {
    type: 'loop',
    perPage: 3,
    perMove: 1,
    arrows: false,
    direction: 'rtl',
    pagination: false,
    pauseOnHover: true,
    easing: 'ease',
    transition: 'fade',
    easingFunc: 'ease',
    autoplay: true,
    interval: 3000,
    breakpoints: {
      480: {
        perPage: 2,
      }
    },
  }).mount();
});



let closeBtn = document.querySelector('.menu-close');
let openBtn = document.querySelector('.mobile-menu');

openBtn.addEventListener('click', () => {
  openMobileNav();
});
// closeBtn.addEventListener('click', closeMobileNav);
document.querySelector('.mobile-navbar-overlay').addEventListener('click', closeMobileNav);

function openMobileNav() {
  document.querySelector('.mobile-navbar').style.width = '47.5%';
  document.querySelector('.mobile-navbar-overlay').classList.add('body-overlay');
}

function closeMobileNav() {
  document.querySelector('.mobile-navbar').style.width = '0%';
  document.querySelector('.mobile-navbar-overlay').classList.remove('body-overlay');
}

