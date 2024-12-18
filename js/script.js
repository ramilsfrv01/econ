
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


let autoplay = setInterval(() => changeSlide(1), 5000); // Auto-slide every 5 seconds

document.querySelector('.slider').addEventListener('mouseover', () => clearInterval(autoplay));
document.querySelector('.slider').addEventListener('mouseout', () => {
autoplay = setInterval(() => changeSlide(1), 5000);
});



// let topicNum = 0;
// const topicSlides = document.querySelectorAll('.slide-content');
// const totalTopicSlides = slides.length;
// const prevButton = document.querySelector('.prev');
// const nextButton = document.querySelector('.next');
// let autoPlayInterval;

// // Show the slide based on the index
// function showSlide(index) {
//     topicSlides.forEach((slide, i) => {
//         slide.classList.remove('active');
//         if (i === index) {
//             slide.classList.add('active');
//         }
//     });
// }

// // Show the next slide
// function nextSlide() {
//     topicNum = (topicNum + 1) % totalTopicSlides;
//     showSlide(topicNum);
// }

// // Show the previous slide
// function prevSlide() {
//     topicNum = (topicNum - 1 + totalTopicSlides) % totalTopicSlides;
//     showSlide(topicNum);
// }

// // Autoplay functionality
// function startAutoplay() {
//     autoPlayInterval = setInterval(nextSlide, 5000);
// }

// // Stop autoplay (optional, if needed)
// // function stopAutoplay() {
// //     clearInterval(autoPlayInterval);
// // }

// // Event listeners for navigation buttons
// nextButton.addEventListener('click', () => {
//     nextSlide();
//     stopAutoplay(); // Reset autoplay timer
//     startAutoplay();
// });

// prevButton.addEventListener('click', () => {
//     prevSlide();
//     stopAutoplay(); // Reset autoplay timer
//     startAutoplay();
// });

// // Initialize the carousel
// showSlide(topicNum);
// startAutoplay();

