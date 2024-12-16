
// const slides = document.querySelector('.slides');
// const slideCount = document.querySelectorAll('.slide').length;
// const visibleSlides = slideCount - 2; // Exclude duplicated slides
// let currentIndex = 1; // Start at the actual first slide
// let isAnimating = false;

// // Buttons
// document.querySelector('.prev').addEventListener('click', () => moveSlide(-1));
// document.querySelector('.next').addEventListener('click', () => moveSlide(1));

// function moveSlide(direction) {
//   if (isAnimating) return; // Prevent spamming during animation
//   isAnimating = true;

//   currentIndex += direction;
//   slides.style.transition = 'transform 0.5s ease-in-out';
//   slides.style.transform = `translateX(-${currentIndex * 100}%)`;

//   // Reset position after animation if at the cloned slides
//   setTimeout(() => {
//     if (currentIndex === 0) {
//       slides.style.transition = 'none'; // Disable animation
//       currentIndex = visibleSlides; // Jump to the last real slide
//       slides.style.transform = `translateX(-${currentIndex * 100}%)`;
//     } else if (currentIndex === slideCount - 1) {
//       slides.style.transition = 'none'; // Disable animation
//       currentIndex = 1; // Jump to the first real slide
//       slides.style.transform = `translateX(-${currentIndex * 100}%)`;
//     }
//     isAnimating = false;
//   }, 500); // Match the transition duration
// }


// const slides = document.querySelectorAll('.slide');
// const slidesContainer = document.querySelector('.slides');
// let currentIndex = 0;

// // Initialize: Show the first slide
// slides[currentIndex].classList.add('active');

// // Buttons
// document.querySelector('.prev').addEventListener('click', () => changeSlide(-1));
// document.querySelector('.next').addEventListener('click', () => changeSlide(1));

// function changeSlide(direction) {
//   // Remove active class from current slide
//   slides[currentIndex].classList.remove('active');

//   // Calculate next slide index
//   currentIndex = (currentIndex + direction + slides.length) % slides.length;

//   // Set the transform for sliding
//   slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;

//   // Add active class to the new slide
//   slides[currentIndex].classList.add('active');
// }



const slides = document.querySelectorAll('.slide');
let currentIndex = 0;
let totalSlides = slides.length;

// Initially set the first slide to active
slides[currentIndex].classList.add('active');

// Buttons for navigation
document.querySelector('.prev').addEventListener('click', () => changeSlide(-1));
document.querySelector('.next').addEventListener('click', () => changeSlide(1));

// Function to change the slide
function changeSlide(direction) {
  // Hide the current slide
  slides[currentIndex].classList.remove('active');

  // Calculate the next slide index with infinite scrolling
  currentIndex = (currentIndex + direction + totalSlides) % totalSlides;

  // Show the new slide
  slides[currentIndex].classList.add('active');
}


// let autoplay = setInterval(() => changeSlide(1), 5000); // Auto-slide every 5 seconds

// document.querySelector('.slider').addEventListener('mouseover', () => clearInterval(autoplay));
// document.querySelector('.slider').addEventListener('mouseout', () => {
// autoplay = setInterval(() => changeSlide(1), 5000);
//});