// // document.addEventListener("DOMContentLoaded", () => { new Splide("#header-slider", { type: "fade", rewind: !0, speed: 1800, easing: "ease", autoplay: !0, interval: 5e3, pauseOnHover: !0, arrows: !0, pagination: !1, height: "100%", width: "100%" }).mount(), new Splide("#partner-slider", { type: "loop", perPage: 4, autoplay: !0, interval: 4e3, pauseOnHover: !0, arrows: !0, breakpoints: { 640: { perPage: 3 }, 480: { perPage: 2 } } }).mount(), new Splide("#image-slider", { type: "loop", perPage: 3, perMove: 1, pagination: !1, easing: "ease", transition: "fade", height: "100%", autoplay: !0, interval: 3e3, pauseOnHover: !0, arrows: !0, breakpoints: { 640: { perPage: 2 }, 480: { perPage: 1 } } }).mount(); const e = document.querySelector(".mobile-menu"), a = document.querySelector(".mobile-navbar"), o = document.querySelector(".mobile-navbar-overlay"); e.addEventListener("click", function () { o.classList.add("body-overlay"), a.classList.add("open") }), o.addEventListener("click", function () { o.classList.remove("body-overlay"), a.classList.remove("open") }), sal({ threshold: .45 }) });

// document.addEventListener("DOMContentLoaded", () => {
//     // Initialize Splide sliders
//     new Splide("#header-slider", {
//         type: "fade",
//         rewind: true,
//         speed: 1800,
//         easing: "ease",
//         autoplay: true,
//         interval: 5000,
//         pauseOnHover: true,
//         arrows: true,
//         pagination: false,
//         height: "100%",
//         width: "100%"
//     }).mount();

//     new Splide("#partner-slider", {
//         type: "loop",
//         perPage: 4,
//         autoplay: true,
//         interval: 4000,
//         pauseOnHover: true,
//         arrows: true,
//         breakpoints: {
//             640: { perPage: 3 },
//             480: { perPage: 2 }
//         }
//     }).mount();

//     new Splide("#image-slider", {
//         type: "loop",
//         perPage: 3,
//         perMove: 1,
//         pagination: false,
//         easing: "ease",
//         transition: "fade",
//         height: "100%",
//         autoplay: true,
//         interval: 3000,
//         pauseOnHover: true,
//         arrows: true,
//         breakpoints: {
//             640: { perPage: 2 },
//             480: { perPage: 1 }
//         }
//     }).mount();

//     // Mobile menu toggle
//     const menuButton = document.querySelector(".mobile-menu");
//     const mobileNavbar = document.querySelector(".mobile-navbar");
//     const overlay = document.querySelector(".mobile-navbar-overlay");

//     menuButton.addEventListener("click", () => {
//         overlay.classList.add("body-overlay");
//         mobileNavbar.classList.add("open");
//     });

//     overlay.addEventListener("click", () => {
//         overlay.classList.remove("body-overlay");
//         mobileNavbar.classList.remove("open");
//     });

//     // Initialize SAL.js
//     sal({ threshold: 0.45 });
// });

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
    interval: 5000,
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
      640: { perPage: 2,},
      480: { perPage: 1,}
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
      480: { perPage: 2,}
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

sal({
  threshold: 0.45,
});