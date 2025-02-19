/* ============================================================
   Initialize Particles.js
   ============================================================ */
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
      "type": "circle"
    },
    "opacity": {
      "value": 0.5,
      "random": false
    },
    "size": {
      "value": 3,
      "random": true
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
      "random": true,
      "straight": false,
      "out_mode": "out"
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 140,
        "line_linked": {
          "opacity": 1
        }
      },
      "push": {
        "particles_nb": 4
      }
    }
  },
  "retina_detect": true
});

/* ============================================================
   Global Language Toggle Functionality
   ============================================================ */
// Desktop Language Toggle
const langToggle = document.getElementById('langToggle');
// Mobile Language Toggle (if available)
const mobileLangToggle = document.getElementById('mobile-lang-toggle');
const welcomeText = document.getElementById('welcomeText');

// Check for saved language; default to English
let currentLang = localStorage.getItem('lang') || 'en';
updateLanguage(currentLang);

/* ============================================================
   Event Listener: Desktop Language Toggle Click
   ============================================================ */
if (langToggle) {
  langToggle.addEventListener('click', () => {
    currentLang = (currentLang === 'en') ? 'es' : 'en';
    updateLanguage(currentLang);
    localStorage.setItem('lang', currentLang);
  });
}

/* ============================================================
   Event Listener: Mobile Language Toggle Click
   ============================================================ */
if (mobileLangToggle) {
  mobileLangToggle.addEventListener('click', () => {
    currentLang = (currentLang === 'en') ? 'es' : 'en';
    updateLanguage(currentLang);
    localStorage.setItem('lang', currentLang);
  });
}

/* ============================================================
   Function: Update Language on the Interface
   ============================================================ */
function updateLanguage(lang) {
  if (lang === 'en') {
    if (langToggle) langToggle.textContent = 'ES';
    if (mobileLangToggle) mobileLangToggle.textContent = 'ES';
    welcomeText.textContent = 'Welcome to Our Site!';
    document.documentElement.lang = 'en';
  } else {
    if (langToggle) langToggle.textContent = 'EN';
    if (mobileLangToggle) mobileLangToggle.textContent = 'EN';
    welcomeText.textContent = '¡Bienvenido a Nuestro Sitio!';
    document.documentElement.lang = 'es';
  }
}

/* ============================================================
   Event Listener: Mobile Hamburger Menu Toggle
   ============================================================ */
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const mobileNavPanel = document.getElementById('mobile-nav-panel');
if (mobileMenuToggle) {
  mobileMenuToggle.addEventListener('click', () => {
    mobileNavPanel.classList.toggle('open');
  });
}

/* ============================================================
   Event Listener: Dark / Lite Toggle
   ============================================================ */
const darkLightToggle = document.getElementById('dark-light-toggle');
if (darkLightToggle) {
  darkLightToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    // Update button text based on current mode
    if (document.body.classList.contains('light-mode')) {
      darkLightToggle.textContent = 'Dark';
    } else {
      darkLightToggle.textContent = 'Lite';
    }
  });
}

/* ============================================================
   Event Listener: Chat Button
   ============================================================ */
const chatBtn = document.getElementById('chat-btn');
if (chatBtn) {
  chatBtn.addEventListener('click', () => {
    alert('Chat functionality coming soon!');
  });
}
