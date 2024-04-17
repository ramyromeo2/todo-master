 // Get the modal
 var modal = document.getElementById("loginModal");

 // Get the button that opens the modal
 var btn = document.getElementById("loginBtn");

 // Get the <span> element that closes the modal
 var span = document.getElementsByClassName("close")[0];

 // When the user clicks the button, open the modal
 btn.onclick = function() {
   modal.style.display = "block";
 }
l
 span.onclick = function() {
   modal.style.display = "none";
 }


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

 // Handle the input event for numbers only and limit the length
 editablePart.addEventListener('input', function(e) {
   // Extract digits only from the current content
   var digitOnlyContent = this.innerText.replace(/\D/g, '');
   // Cut down to 10 if it's too long
   digitOnlyContent = digitOnlyContent.substring(0, 10);
   // Update the content if it's changed
   if (this.innerText !== digitOnlyContent) {
     this.innerText = digitOnlyContent;
     // Move the caret to the end
     window.getSelection().selectAllChildren(this);
     window.getSelection().collapseToEnd();
   }
 });

 // Prevent non-digit input, allow navigation and deletion
 editablePart.addEventListener('keydown', function(e) {
   if (!e.key.match(/[0-9]/) && e.key !== 'Backspace' && e.key !== 'ArrowLeft' && e.key !== 'ArrowRight' && e.key !== 'Delete' && e.key !== 'Tab') {
     e.preventDefault();
   }
 });
