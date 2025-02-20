// Language toggle function
const languageStrings = {
    en: {
        welcomeMessage: "Welcome to your Future Growth with Remote Assistance",
    },
    es: {
        welcomeMessage: "Bienvenido a tu Crecimiento Futuro con Asistencia Remota",
    }
};

function toggleLanguage(language) {
    const welcomeMessage = document.getElementById("welcomeMessage");
    // Clear the existing message and restart typewriter effect
    welcomeMessage.textContent = '';
    typeWriter(language); // Call typewriter effect with selected language
}

// Typewriter Effect
function typeWriter(language = 'en') {
    const message = languageStrings[language].welcomeMessage;
    let i = 0;
    const speed = 100; // Speed of typing effect
    const welcomeMessage = document.getElementById("welcomeMessage");

    function type() {
        if (i < message.length) {
            welcomeMessage.textContent += message.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type(); // Start typing effect
}

// Particles.js Initialization with configuration
function initializeParticles() {
    particlesJS("particles-js", {
        particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: "#ffffff" },
            shape: {
                type: "circle",
                stroke: { width: 0, color: "#000000" },
                polygon: { nb_sides: 5 }
            },
            opacity: {
                value: 0.5,
                random: false,
                anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false }
            },
            size: {
                value: 3,
                random: true,
                anim: { enable: true, speed: 40, size_min: 0.1, sync: false }
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: "#ffffff",
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 6,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false
            }
        },
        interactivity: {
            detect_on: "window",
            events: {
                onclick: { enable: true, mode: "push" },
                onresize: { enable: true, density_auto: true, density_area: 800 }
            },
            modes: { push: { particles_nb: 4 } }
        },
        retina_detect: true
    });
}

// Start page load sequence
window.onload = function () {
    initializeParticles(); // Initialize particles.js
    typeWriter('en'); // Start with English text
};
