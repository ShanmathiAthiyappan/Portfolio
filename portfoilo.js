window.onload = function () {
    const background = document.querySelector('.background');

    // Create a new style element for dynamic animations
    const styleElement = document.createElement("style");
    document.head.appendChild(styleElement);

    for (let i = 0; i < 20; i++) {
        const dot = document.createElement('div');
        dot.className = 'dot';

        // Random starting position
        dot.style.top = `${Math.random() * 100}vh`;
        dot.style.left = `${Math.random() * 100}vw`;

        // Set random size for each dot
        const size = Math.random() * 8 + 2; // Size between 5px and 25px
        dot.style.width = `${size}px`;
        dot.style.height = `${size}px`;

        // Create unique keyframes for each dot
        const animationName = `moveDot-${i}`;
        const keyframes = `
            @keyframes ${animationName} {
                0% { transform: translate(0, 0); }
                25% { transform: translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px); }
                50% { transform: translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px); }
                75% { transform: translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px); }
                100% { transform: translate(0, 0); }
            }
        `;

        // Add keyframes to the new style element
        styleElement.sheet.insertRule(keyframes, styleElement.sheet.cssRules.length);

        // Apply animation to the dot with a slower speed
        dot.style.animation = `${animationName} ${10 + Math.random() * 20}s infinite ease-in-out`;

        // Append dot to the background
        background.appendChild(dot);
    }
};

/*-----------------------------------------------------  CURSOR ANIMATION  ---------------------------------------------------*/
    
const cursorEffect = document.getElementById('cursorEffect');
document.addEventListener('mousemove', (e) => {
  cursorEffect.style.left = e.clientX + 'px';
  cursorEffect.style.top  = e.clientY + 'px';
  cursorEffect.classList.remove('animate');
  setTimeout(() => {
    cursorEffect.classList.add('animate');
  }, 10);
});

/*------------------------------------------------------  NAVIGATION BAR  ----------------------------------------------------*/

// Toggle the navigation menu visibility
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    // Hide the menu toggle icon
    menuToggle.classList.add('hide');

    // Show the navbar links
    navLinks.classList.add('show');
});

// Hide the navbar when moving away from it
document.addEventListener('click', (event) => {
    const isClickInsideNavbar = navLinks.contains(event.target) || menuToggle.contains(event.target);

    if (!isClickInsideNavbar && navLinks.classList.contains('show')) {
        // Hide the navbar links
        navLinks.classList.remove('show');

        // Show the menu toggle icon
        menuToggle.classList.remove('hide');
    }
});

/*------------------------------------------------------ PROJECT CARD ----------------------------------------------------*/

document.addEventListener("DOMContentLoaded", function () {
    const projects = document.querySelectorAll(".project");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add("show");
                }, index * 500); // Delay each item by 500ms
            } else {
                // Remove the class when out of view so animation restarts
                entry.target.classList.remove("show");
            }
        });
    }, { threshold: 0.3 });

    projects.forEach(project => observer.observe(project));
});

/*------------------------------------------------------ PROJECT CARD ----------------------------------------------------*/
