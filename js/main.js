document.addEventListener('DOMContentLoaded', function(){

  // ============================
  // 1) Theme Toggle
  // ============================
  const themeToggleButton = document.getElementById('theme-toggle');
  const bodyElement = document.body;
  const savedTheme = localStorage.getItem('theme') || 'light';

  // Initialize theme
  bodyElement.setAttribute('data-theme', savedTheme);
  if(themeToggleButton) {
    // Display initial button text (optional)
    themeToggleButton.textContent = savedTheme === 'light' ? 'Dark' : 'Light';

    themeToggleButton.addEventListener('click', function(){
      const currentTheme = bodyElement.getAttribute('data-theme');
      if(currentTheme === 'light'){
        bodyElement.setAttribute('data-theme', 'dark');
        themeToggleButton.textContent = 'Light';
        localStorage.setItem('theme', 'dark');
      } else {
        bodyElement.setAttribute('data-theme', 'light');
        themeToggleButton.textContent = 'Dark';
        localStorage.setItem('theme', 'light');
      }
    });
  }

  // ============================
  // 2) Language Toggle
  // ============================
  const languageToggleButton = document.getElementById('language-toggle');
  let currentLanguage = localStorage.getItem('language') || 'en';

  // Set initial language
  document.body.setAttribute('lang', currentLanguage);
  if(languageToggleButton) {
    // Button label
    languageToggleButton.textContent = (currentLanguage === 'en') ? 'ES' : 'EN';

    // Helper function to translate
    function updateLanguage(){
      const translationElements = document.querySelectorAll('[data-en]');
      translationElements.forEach((element) => {
        element.textContent = (currentLanguage === 'en')
          ? element.getAttribute('data-en')
          : element.getAttribute('data-es');
      });
    }

    updateLanguage();

    languageToggleButton.addEventListener('click', function(){
      currentLanguage = (currentLanguage === 'en') ? 'es' : 'en';
      languageToggleButton.textContent = (currentLanguage === 'en') ? 'ES' : 'EN';
      document.body.setAttribute('lang', currentLanguage);
      updateLanguage();
      localStorage.setItem('language', currentLanguage);
    });
  }

  // ============================
  // 3) Modal Functionality
  // ============================
  const modalOverlays = document.querySelectorAll('.modal-overlay');
  const closeModalButtons = document.querySelectorAll('[data-close]');
  const floatingIcons = document.querySelectorAll('.floating-icon');

  // Open modals
  floatingIcons.forEach((icon) => {
    icon.addEventListener('click', function(){
      const modalId = icon.getAttribute('data-modal');
      const modalElement = document.getElementById(modalId);
      if(modalElement){
        modalElement.classList.add('active');
        modalElement.focus();
      }
    });
  });

  // Close modals
  closeModalButtons.forEach((btn) => {
    btn.addEventListener('click', function(){
      const parentOverlay = btn.closest('.modal-overlay');
      if(parentOverlay){
        parentOverlay.classList.remove('active');
      }
    });
  });

  // Close modal by clicking outside or pressing ESC
  modalOverlays.forEach((overlay) => {
    overlay.addEventListener('click', function(e){
      if(e.target === overlay){
        overlay.classList.remove('active');
      }
    });
    overlay.addEventListener('keydown', function(e){
      if(e.key === 'Escape'){
        overlay.classList.remove('active');
      }
    });
  });

  // ============================
  // 4) Mobile Services Toggle
  // ============================
  const servicesToggle = document.getElementById('services-toggle');
  const mobileServicesMenu = document.getElementById('mobile-services-menu');

  if(servicesToggle && mobileServicesMenu) {
    servicesToggle.addEventListener('click', function(){
      mobileServicesMenu.classList.toggle('active');
    });
  }

  // ============================
  // 5) Register Service Worker (Optional)
  // ============================
  if('serviceWorker' in navigator){
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/service-worker.js')
      .then((registration) => {
        console.log('Service Worker registered:', registration.scope);
      })
      .catch((err) => {
        console.error('SW registration failed:', err);
      });
    });
  }
});
document.addEventListener('DOMContentLoaded', function(){

  // ============================
  // 1) Theme Toggle (Desktop and Mobile)
  // ============================
  const bodyElement = document.body;
  const savedTheme = localStorage.getItem('theme') || 'light';
  bodyElement.setAttribute('data-theme', savedTheme);
  
  const themeToggleButtons = document.querySelectorAll('.theme-toggle');
  themeToggleButtons.forEach(button => {
    button.textContent = savedTheme === 'light' ? 'Dark' : 'Light';
    button.addEventListener('click', function(){
      const currentTheme = bodyElement.getAttribute('data-theme');
      if(currentTheme === 'light'){
        bodyElement.setAttribute('data-theme', 'dark');
        themeToggleButtons.forEach(btn => btn.textContent = 'Light');
        localStorage.setItem('theme', 'dark');
      } else {
        bodyElement.setAttribute('data-theme', 'light');
        themeToggleButtons.forEach(btn => btn.textContent = 'Dark');
        localStorage.setItem('theme', 'light');
      }
    });
  });

  // ============================
  // 2) Language Toggle (Desktop and Mobile)
  // ============================
  let currentLanguage = localStorage.getItem('language') || 'en';
  document.body.setAttribute('lang', currentLanguage);
  
  const languageToggleButtons = document.querySelectorAll('.lang-toggle');
  function updateLanguage(){
    const translationElements = document.querySelectorAll('[data-en]');
    translationElements.forEach((element) => {
      element.textContent = (currentLanguage === 'en')
        ? element.getAttribute('data-en')
        : element.getAttribute('data-es');
    });
  }
  
  languageToggleButtons.forEach(button => {
    button.textContent = currentLanguage === 'en' ? 'ES' : 'EN';
    button.addEventListener('click', function(){
      currentLanguage = currentLanguage === 'en' ? 'es' : 'en';
      languageToggleButtons.forEach(btn => {
        btn.textContent = currentLanguage === 'en' ? 'ES' : 'EN';
      });
      document.body.setAttribute('lang', currentLanguage);
      updateLanguage();
      localStorage.setItem('language', currentLanguage);
    });
  });

  // ============================
  // 3) Modal Functionality
  // ============================
  const modalOverlays = document.querySelectorAll('.modal-overlay');
  const closeModalButtons = document.querySelectorAll('[data-close]');
  const floatingIcons = document.querySelectorAll('.floating-icon');

  floatingIcons.forEach((icon) => {
    icon.addEventListener('click', function(){
      const modalId = icon.getAttribute('data-modal');
      const modalElement = document.getElementById(modalId);
      if(modalElement){
        modalElement.classList.add('active');
        modalElement.focus();
      }
    });
  });

  closeModalButtons.forEach((btn) => {
    btn.addEventListener('click', function(){
      const parentOverlay = btn.closest('.modal-overlay');
      if(parentOverlay){
        parentOverlay.classList.remove('active');
      }
    });
  });

  modalOverlays.forEach((overlay) => {
    overlay.addEventListener('click', function(e){
      if(e.target === overlay){
        overlay.classList.remove('active');
      }
    });
    overlay.addEventListener('keydown', function(e){
      if(e.key === 'Escape'){
        overlay.classList.remove('active');
      }
    });
  });

  // ============================
  // 4) Mobile Navigation (Hamburger Menu)
  // ============================
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const mobileNavPanel = document.getElementById('mobile-nav-panel');
  const mobileNavClose = document.getElementById('mobile-nav-close');

  if(hamburgerBtn && mobileNavPanel && mobileNavClose){
    hamburgerBtn.addEventListener('click', function(){
      mobileNavPanel.classList.add('active');
    });
    mobileNavClose.addEventListener('click', function(){
      mobileNavPanel.classList.remove('active');
    });
  }

  // ============================
  // 5) Register Service Worker (Optional)
  // ============================
  if('serviceWorker' in navigator){
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/service-worker.js')
      .then((registration) => {
        console.log('Service Worker registered:', registration.scope);
      })
      .catch((err) => {
        console.error('SW registration failed:', err);
      });
    });
  }
});

