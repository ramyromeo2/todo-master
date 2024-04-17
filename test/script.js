window.addEventListener('scroll', function() {
  const navbar = document.querySelector('header.main-head'); // Adjusted to target 'header.main-head' directly
  if (window.scrollY > 50) { // Trigger the 'scrolled' class after 50px of scrolling
      navbar.classList.add('scrolled');
  } else {
      navbar.classList.remove('scrolled');
  }
});






const newInputs = document.querySelectorAll('.new-verification-box');
newInputs.forEach((newInput, index) => {
  newInput.addEventListener('keyup', (e) => {
    if (e.key >= 0 && e.key <= 9) {
      if (index !== newInputs.length - 1) {
        // Move to next input
        newInputs[index + 1].focus();
      }
    } else if (e.key === 'Backspace') {
      if (index !== 0) {
        // Move to previous input
        newInputs[index - 1].focus();
      }
    }
  });
});

var modal = null;

function closeModal(modalId) {
  modal = document.getElementById(modalId);
  modal.style.display = "none";
}

function showSmsVerification() {
  closeModal('loginModal');
  modal = document.getElementById('smsVerificationModal');
  modal.style.display = "block";
}

function updateCountryCode() {
  var countryCode = document.getElementById('country-flag-dropdown').value;
  document.getElementById('dial-code').textContent = countryCode;
}

document.addEventListener('DOMContentLoaded', updateCountryCode);

document.getElementById('country-flag-dropdown').addEventListener('change', updateCountryCode);

var editablePart = document.getElementById('editable-part');

editablePart.addEventListener('focus', function () {
  window.getSelection().selectAllChildren(this);
  window.getSelection().collapseToEnd();
});

editablePart.addEventListener('input', function (e) {
  var digitOnlyContent = this.innerText.replace(/\D/g, '');
  digitOnlyContent = digitOnlyContent.substring(0, 10);
  if (this.innerText !== digitOnlyContent) {
    this.innerText = digitOnlyContent;
    window.getSelection().selectAllChildren(this);
    window.getSelection().collapseToEnd();
  }
});

editablePart.addEventListener('keydown', function (e) {
  if (!e.key.match(/[0-9]/) && e.key !== 'Backspace' && e.key !== 'ArrowLeft' && e.key !== 'ArrowRight' && e.key !== 'Delete' && e.key !== 'Tab') {
    e.preventDefault();
  }
});

