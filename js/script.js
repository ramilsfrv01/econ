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

// let autoplay = setInterval(() => changeSlide(1), 5000); // Auto-slide every 5 seconds

// // Stop autoplay when mouse is hovering over the slides
// document.querySelector('.slides').addEventListener('mouseover', () => clearInterval(autoplay));
// document.querySelector('.slides').addEventListener('mouseout', () => {
  //   autoplay = setInterval(() => changeSlide(1), 5000);
  // });


let projectSlidesWrapper = document.querySelector('.project-wrap');
let projectSlideBox = document.getElementsByClassName('.project-box')



function projectSlider(direction) {
  projectSlidesWrapper.style.transform = `translateX(${direction * 25}%)`;
  currentIndex = (currentIndex + direction + totalSlides) % totalSlides;
  
  
  
}

document.querySelector('.project-prev').addEventListener('click', () => projectSlider(-1));
document.querySelector('.project-next').addEventListener('click', () => projectSlider(1));
console.log(projectSlideBox.offsetWidth);