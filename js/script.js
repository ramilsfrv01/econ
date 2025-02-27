'use strict';








document.addEventListener('DOMContentLoaded', function () {
  new Splide('#header-slider' , {
    type: 'fade',
    rewind:  true,
    speed: 1800,
    perPage: 1,
    perMove: 1,
    pagination: false,
    easing: 'ease',
    transition: 'fade',
    height: '100%',
    width: '100%',
    autoplay: true,
    interval: 4500,
    pauseOnHover: true,
    arrows: true,

  }).mount();
  new Splide('#image-slider', {
    type: 'loop',
    perPage: 3,
    perMove: 1,
    pagination: false,
    easing: 'ease',
    transition: 'fade',
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
    autoplay: true,
    interval: 3000,
    breakpoints: {
      480: {
        perPage: 2,
      }
    },
  }).mount();
});



let openBtn = document.querySelector('.mobile-menu');

openBtn.addEventListener('click', () => {
  openMobileNav();
});
document.querySelector('.mobile-navbar-overlay').addEventListener('click', closeMobileNav);

function openMobileNav() {
  document.querySelector('.mobile-navbar').style.width = '47.5%';
  document.querySelector('.mobile-navbar-overlay').classList.add('body-overlay');
}

function closeMobileNav() {
  document.querySelector('.mobile-navbar').style.width = '0%';
  document.querySelector('.mobile-navbar-overlay').classList.remove('body-overlay');
}
