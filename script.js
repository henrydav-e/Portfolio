document.getElementById('contact-form').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent the default form submission
  
  const form = event.target;
  const statusDiv = document.getElementById('form-status');

  fetch(form.action, {
      method: form.method,
      body: new FormData(form),
      headers: {
          'Accept': 'application/json'
      }
  })
  .then(response => {
      if (response.ok) {
          statusDiv.innerHTML = '<p>Thank you! Your message has been sent successfully.</p>';
          form.reset(); // Reset the form
      } else {
          statusDiv.innerHTML = '<p>Oops! Something went wrong, please try again.</p>';
      }
  })
  .catch(error => {
      statusDiv.innerHTML = '<p>Oops! Something went wrong, please try again.</p>';
  });
});
