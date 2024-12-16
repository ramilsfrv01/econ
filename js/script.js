// script.js
const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slide').length;

let currentIndex = 0;

document.querySelector('.prev').addEventListener('click', () => {
  currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalSlides - 1;
  updateSlidePosition();
});

document.querySelector('.next').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateSlidePosition();
});

function updateSlidePosition() {
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}
