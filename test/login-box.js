
  document.addEventListener('DOMContentLoaded', (event) => {
    
  
  
    var modal = document.getElementById("loginModal");

    var btn = document.getElementById("loginBtn");
  
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
  
    // When the user clicks the button, open the modal
    btn.onclick = function() {
      modal.style.display = "block";
    }
  
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
      modal.style.display = "none";
    }
  
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  
    function updateCountryCode() {
      var countryCode = document.getElementById('country-flag-dropdown').value;
      document.getElementById('dial-code').textContent = countryCode;
    }
  
    document.addEventListener('DOMContentLoaded', updateCountryCode);
  
    document.getElementById('country-flag-dropdown').addEventListener('change', updateCountryCode);
  
    var editablePart = document.getElementById('editable-part');
  
    editablePart.addEventListener('focus', function() {
      window.getSelection().selectAllChildren(this);
      window.getSelection().collapseToEnd();
    });

    editablePart.addEventListener('input', function(e) {

      var digitOnlyContent = this.innerText.replace(/\D/g, '');


      if (this.innerText !== digitOnlyContent) {
        this.innerText = digitOnlyContent;
     
        window.getSelection().selectAllChildren(this);
        window.getSelection().collapseToEnd();
      }
    });

    editablePart.addEventListener('keydown', function(e) {
      if (!e.key.match(/[0-9]/) && e.key !== 'Backspace' && e.key !== 'ArrowLeft' && e.key !== 'ArrowRight' && e.key !== 'Delete' && e.key !== 'Tab') {
        e.preventDefault();
      }
    });
  });