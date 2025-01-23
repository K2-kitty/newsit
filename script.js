
  
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}
document.addEventListener('DOMContentLoaded', () => {
    function scrollToSection(id) {
        document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    }
    window.scrollToSection = scrollToSection;
});
// Toggle Navbar on Mobile
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Select all carousel images and set an initial index
let currentIndex = 0;
const images = document.querySelectorAll('.carousel-image');

// Function to show the next image in the carousel
function showNextImage() {
    // Remove the 'active' class from the current image
    images[currentIndex].classList.remove('active');
    
    // Update the index to the next image, looping back to the first image if needed
    currentIndex = (currentIndex + 1) % images.length;
    
    // Add the 'active' class to the new image
    images[currentIndex].classList.add('active');
}

// Automatically cycle through images every 3 seconds
setInterval(showNextImage, 1000);
// Toggle Contact Details
const toggleContactButton = document.getElementById('toggle-contact');
const contactDetails = document.getElementById('contact-details');

toggleContactButton.addEventListener('click', () => {
    contactDetails.style.display = 
        contactDetails.style.display === 'none' || contactDetails.style.display === ''
        ? 'flex' 
        : 'none';
});

// Toggle Menu Bar
const menuBtn = document.querySelector('.menu-btn');
const navList = document.querySelector('.nav-list');

menuBtn.addEventListener('click', () => {
    navList.classList.toggle('active');
});

const scrollTopButton = document.getElementById('scroll-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollTopButton.style.display = 'block';
    } else {
        scrollTopButton.style.display = 'none';
    }
});

scrollTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
