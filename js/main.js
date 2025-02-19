document.addEventListener('DOMContentLoaded', function() {
  // --------------------------------------------------
  // 1) Theme Toggle (Desktop & Mobile)
  // --------------------------------------------------
  const bodyElement = document.body;
  const savedTheme = localStorage.getItem('theme') || 'light';
  bodyElement.setAttribute('data-theme', savedTheme);
  // Query both by class and ID for theme toggle elements
  const themeToggleElements = document.querySelectorAll('.theme-toggle, #theme-toggle');
  themeToggleElements.forEach(button => {
    // Set initial button text based on saved theme
    button.textContent = savedTheme === 'light' ? 'Dark' : 'Light';
    button.addEventListener('click', function() {
      // Toggle theme
      const currentTheme = bodyElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      bodyElement.setAttribute('data-theme', newTheme);
      // Update all theme toggle buttons with new label
      themeToggleElements.forEach(btn => {
        btn.textContent = newTheme === 'light' ? 'Dark' : 'Light';
      });
      localStorage.setItem('theme', newTheme);
    });
  });

  // --------------------------------------------------
  // 2) Language Toggle (Desktop & Mobile)
  // --------------------------------------------------
  let currentLanguage = localStorage.getItem('language') || 'en';
  document.body.setAttribute('lang', currentLanguage);
  // Query both by class and ID for language toggle elements
  const languageToggleElements = document.querySelectorAll('.lang-toggle, #language-toggle');
  // Helper function to update all translatable elements
  function updateLanguage() {
    const translationElements = document.querySelectorAll('[data-en]');
    translationElements.forEach(element => {
      element.textContent = currentLanguage === 'en'
        ? element.getAttribute('data-en')
        : element.getAttribute('data-es');
    });
  }
  // Set initial button label and bind click events
  languageToggleElements.forEach(button => {
    button.textContent = currentLanguage === 'en' ? 'ES' : 'EN';
    button.addEventListener('click', function() {
      currentLanguage = currentLanguage === 'en' ? 'es' : 'en';
      // Update label on all language toggle buttons
      languageToggleElements.forEach(btn => {
        btn.textContent = currentLanguage === 'en' ? 'ES' : 'EN';
      });
      document.body.setAttribute('lang', currentLanguage);
      updateLanguage();
      localStorage.setItem('language', currentLanguage);
    });
  });
  // Initial language update
  updateLanguage();

   // --------------------------------------------------
  // 4) Mobile Services Toggle
  // --------------------------------------------------
  const servicesToggle = document.getElementById('services-toggle');
  const mobileServicesMenu = document.getElementById('mobile-services-menu');
  if (servicesToggle && mobileServicesMenu) {
    servicesToggle.addEventListener('click', function() {
      mobileServicesMenu.classList.toggle('active');
    });
  }

  // --------------------------------------------------
  // 5) Mobile Navigation (Hamburger Menu)
  // --------------------------------------------------
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const mobileNavPanel = document.getElementById('mobile-nav-panel');
  const mobileNavClose = document.getElementById('mobile-nav-close');
  if (hamburgerBtn && mobileNavPanel && mobileNavClose) {
    hamburgerBtn.addEventListener('click', function() {
      mobileNavPanel.classList.add('active');
    });
    mobileNavClose.addEventListener('click', function() {
      mobileNavPanel.classList.remove('active');
    });
  }

  // --------------------------------------------------
  // 6) Register Service Worker (Optional)
  // --------------------------------------------------
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
      navigator.serviceWorker.register('/service-worker.js')
        .then(function(registration) {
          console.log('Service Worker registered:', registration.scope);
        })
        .catch(function(err) {
          console.error('Service Worker registration failed:', err);
        });
    });
  }
});
