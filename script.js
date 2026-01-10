// Add a subtle glitch effect when the mouse moves fast
let lastMouseX = 0;
const glitchOverlay = document.querySelector('.glitch-overlay');

document.addEventListener('mousemove', (e) => {
    const speed = Math.abs(e.pageX - lastMouseX);
    lastMouseX = e.pageX;

    if (speed > 50) {
        document.body.style.filter = `hue-rotate(${speed * 0.1}deg)`;
    } else {
        document.body.style.filter = `none`;
    }
});

// Simple Scroll Animation Reveal
const sections = document.querySelectorAll('.section');
const observerOptions = { threshold: 0.2 };

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, observerOptions);

sections.forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(50px)";
    section.style.transition = "all 0.8s ease-out";
    observer.observe(section);
});
