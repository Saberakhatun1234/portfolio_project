// Fade-in animation for all elements with the class "fade-in"
document.addEventListener("DOMContentLoaded", function() {
    const fadeInElements = document.querySelectorAll('.fade-in');
    fadeInElements.forEach((el, index) => {
        el.style.animationDelay = `${index * 0.2}s`; // Stagger the fade-in
        el.classList.add('fade-in');
    });
});

// Toggle Dark/Light Mode
const themeToggleButton = document.getElementById('theme-toggle');
themeToggleButton.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});