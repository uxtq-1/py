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

// Initialize Particles.js with new configuration
function initializeParticles() {
    particlesJS("particles-js", {
        particles: {
            number: {
                value: 100, // Increased for more particles
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: "#ffffff" // White particles for visibility
            },
            shape: {
                type: "circle", // Particles will be circles (dots)
                stroke: {
                    width: 0,
                    color: "#ffffff"
                },
                polygon: {
                    nb_sides: 5
                }
            },
            opacity: {
                value: 0.7,
                random: true,
                anim: {
                    enable: true,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                }
            },
            size: {
                value: 5, // Size of the dots
                random: true,
                anim: {
                    enable: true,
                    speed: 4,
                    size_min: 0.1,
                    sync: false
                }
            },
            line_linked: {
                enable: true,
                distance: 150, // The distance at which lines are drawn
                color: "#ffffff", // Line color
                opacity: 0.5, // Line opacity
                width: 1
            },
            move: {
                enable: true,
                speed: 2,
                direction: "none", // Particles should move in random directions
                random: true,
                straight: false,
                out_mode: "out",
                bounce: false
            }
        },
        interactivity: {
            detect_on: "window",
            events: {
                onclick: {
                    enable: true,
                    mode: "push" // Add more particles on click
                },
                onhover: {
                    enable: true,
                    mode: "repulse" // Particles will move away from mouse
                },
                onresize: {
                    enable: true,
                    density_auto: true,
                    density_area: 800
                }
            },
            modes: {
                push: {
                    particles_nb: 4 // Number of particles to add when clicked
                },
                repulse: {
                    distance: 100, // How far particles move away from mouse
                    duration: 0.4
                }
            }
        },
        retina_detect: true
    });
}

// Start page load sequence
window.onload = function () {
    initializeParticles(); // Initialize particles.js
    typeWriter('en'); // Start with English text
};
