window.addEventListener('scroll', function() {
  const navbar = document.querySelector('header.main-head'); // Adjusted to target 'header.main-head' directly
  if (window.scrollY > 50) { // Trigger the 'scrolled' class after 50px of scrolling
      navbar.classList.add('scrolled');
  } else {
      navbar.classList.remove('scrolled');
  }
});