// Language Toggle Function
function toggleLanguage(language) {
    const welcomeMessage = document.getElementById("welcomeMessage");

    if (language === 'es') {
        welcomeMessage.textContent = "Bienvenido a tu Crecimiento Futuro con Asistencia Remota";
    } else {
        welcomeMessage.textContent = "Welcome to your Future Growth with Remote Assistance";
    }
}

// Typewriter Effect Function
function typeWriter() {
    const message = "Welcome to your Future Growth with Remote Assistance";
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
    type(); // Start typing
}

// Initialize particles.js
particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 80,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#ffffff"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            }
        },
        "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
                "enable": true,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "window",
        "events": {
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "onresize": {
                "enable": true,
                "density_auto": true,
                "density_area": 800
            }
        },
        "modes": {
            "push": {
                "particles_nb": 4
            }
        }
    },
    "retina_detect": true
});

// Start the typewriter effect
window.onload = typeWriter;
