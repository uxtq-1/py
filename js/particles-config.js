// ================================================
// particles.js configuration for canvas animation
// ================================================
particlesJS('particles-js', {  // Action: Initialize particlesJS on the element with id "particles-js"
  
  // --------------------------------------------
  // 1) Particle Properties
  // --------------------------------------------
  particles: {
    // --- Particle Quantity & Density ---
    number: { 
      value: 80,  // Action: Set the number of particles
      density: { 
        enable: true,         // Action: Enable particle density control
        value_area: 800       // Action: Define the area for particle distribution
      }
    },
    // --- Particle Color ---
    color: { 
      value: '#00ffff'        // Action: Set particle color (cyan)
    },
    // --- Particle Shape ---
    shape: { 
      type: 'circle'          // Action: Define the shape of particles as circles
    },
    // --- Particle Opacity ---
    opacity: { 
      value: 0.5,             // Action: Set the base opacity of particles
      random: false,          // Action: Disable random opacity variations
      anim: { 
        enable: false         // Action: Disable opacity animation
      }
    },
    // --- Particle Size ---
    size: { 
      value: 3,               // Action: Set the base size of particles
      random: true,           // Action: Enable random variation in particle size
      anim: { 
        enable: false         // Action: Disable size animation
      }
    },
    // --- Particle Line Linking ---
    line_linked: {
      enable: true,           // Action: Enable connecting lines between particles
      distance: 150,          // Action: Set maximum distance to link particles
      color: '#00ffff',       // Action: Set the linking line color (cyan)
      opacity: 0.4,           // Action: Set the opacity of the linking lines
      width: 1                // Action: Set the width of the linking lines
    },
    // --- Particle Movement ---
    move: {
      enable: true,           // Action: Enable particle movement
      speed: 3,               // Action: Set the speed of particle movement
      direction: 'none',      // Action: No fixed direction; movement is random
      random: false,          // Action: Disable random movement (beyond inherent randomness)
      straight: false,        // Action: Allow non-linear movement paths
      out_mode: 'out'         // Action: Specify particles leaving the canvas continue to reappear on the opposite side
    }
  },

  // --------------------------------------------
  // 2) Interactivity Settings
  // --------------------------------------------
  interactivity: {
    detect_on: 'canvas',      // Action: Enable interaction detection on the canvas element
    events: {
      // --- Hover Interactivity ---
      onhover: { 
        enable: true,         // Action: Enable hover interaction
        mode: 'repulse'       // Action: Apply repulse effect when hovering over particles
      },
      // --- Click Interactivity ---
      onclick: { 
        enable: true,         // Action: Enable click interaction
        mode: 'push'          // Action: Add new particles on click (push effect)
      },
      // --- Resize Event ---
      resize: true           // Action: Adjust canvas size on window resize
    },
    // --- Interaction Modes ---
    modes: {
      repulse: { 
        distance: 100,        // Action: Set repulse effect distance
        duration: 0.4         // Action: Set repulse effect duration
      }
      // Additional modes (like 'push') use default settings
    }
  }
});
