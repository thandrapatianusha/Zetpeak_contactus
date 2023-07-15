/* Section Name: Contact Us
   Developer:Thandrapati Anusha*/
document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('.contactForm');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission
  
      // Get form values
      var firstName = document.getElementById('inputName').value;
      var lastName = document.getElementById('inputlname').value;
      var email = document.getElementById('inputEmail4').value;
      var phone = document.getElementById('inputNumber').value;
      var subject = document.querySelector('input[name="subject"]:checked');
      var message = document.getElementById('inputmessage').value;
  
      // Check if all fields are filled
      if (firstName !== '' && lastName !== '' && email !== '' && phone !== '' && subject !== null && message !== '') {
        // Display success message
        alert('Form successfully filled!');
        form.reset();
      } else {
        alert('Please fill in all fields.');
      }
    });
  });
  