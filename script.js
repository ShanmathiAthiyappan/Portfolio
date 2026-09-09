window.onload = function () {
    const background = document.querySelector('.background');

    // Create a new style element for dynamic animations
    const styleElement = document.createElement("style");
    document.head.appendChild(styleElement);

    // Render faster, glowing background particles
    for (let i = 0; i < 28; i++) {
        const dot = document.createElement('div');
        dot.className = 'dot';

        // Random starting position
        dot.style.top = `${Math.random() * 100}vh`;
        dot.style.left = `${Math.random() * 100}vw`;

        // Size between 2px and 6px
        const size = Math.random() * 4 + 2;
        dot.style.width = `${size}px`;
        dot.style.height = `${size}px`;

        // Create unique keyframes for each dot
        const animationName = `moveDot-${i}`;
        const keyframes = `
            @keyframes ${animationName} {
                0% { transform: translate(0, 0); opacity: 0.3; }
                25% { transform: translate(${Math.random() * 260 - 130}px, ${Math.random() * 260 - 130}px); opacity: 0.8; }
                50% { transform: translate(${Math.random() * 260 - 130}px, ${Math.random() * 260 - 130}px); opacity: 0.4; }
                75% { transform: translate(${Math.random() * 260 - 130}px, ${Math.random() * 260 - 130}px); opacity: 0.9; }
                100% { transform: translate(0, 0); opacity: 0.3; }
            }
        `;

        // Add keyframes to the new style element
        styleElement.sheet.insertRule(keyframes, styleElement.sheet.cssRules.length);

        // Faster animation duration: 4s to 9s (previously 10s - 30s)
        const duration = 4 + Math.random() * 5;
        dot.style.animation = `${animationName} ${duration}s infinite ease-in-out`;

        // Append dot to the background
        background.appendChild(dot);
    }
};

/*-----------------------------------------------------  CURSOR ANIMATION  ---------------------------------------------------*/

const cursorEffect = document.getElementById('cursorEffect');
const cursorDot = document.getElementById('cursorDot');

let mouseX = 0, mouseY = 0;
let ringX = 0, ringY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    if (cursorDot) {
        cursorDot.style.left = mouseX + 'px';
        cursorDot.style.top = mouseY + 'px';
    }
});

// Smooth trailing interpolation for the cursor ring
function renderCursor() {
    ringX += (mouseX - ringX) * 0.18;
    ringY += (mouseY - ringY) * 0.18;

    if (cursorEffect) {
        cursorEffect.style.left = ringX + 'px';
        cursorEffect.style.top = ringY + 'px';
    }
    requestAnimationFrame(renderCursor);
}
requestAnimationFrame(renderCursor);

// Add hover expansion on interactive elements
const interactables = document.querySelectorAll('a, button, .skill, .tool, .project, .menu-toggle');
interactables.forEach((el) => {
    el.addEventListener('mouseenter', () => cursorEffect && cursorEffect.classList.add('cursor-hover'));
    el.addEventListener('mouseleave', () => cursorEffect && cursorEffect.classList.remove('cursor-hover'));
});

/*------------------------------------------------------  NAVIGATION BAR  ----------------------------------------------------*/

// Toggle the navigation menu visibility
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });

    // Hide the navbar when clicking outside
    document.addEventListener('click', (event) => {
        const isClickInsideNavbar = navLinks.contains(event.target) || menuToggle.contains(event.target);

        if (!isClickInsideNavbar && navLinks.classList.contains('show')) {
            navLinks.classList.remove('show');
        }
    });

    // Close menu when clicking on any link
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('show');
        });
    });
}

/*------------------------------------------------------ PROJECT CARD ----------------------------------------------------*/

document.addEventListener("DOMContentLoaded", function () {
    const projects = document.querySelectorAll(".project");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, { threshold: 0.15 });

    projects.forEach(project => observer.observe(project));
});

/* git add .
git commit -m "Javascript File updated"
git push */