// Smooth scroll for navbar links
const navbarLinks = document.querySelectorAll('.navbar a');

navbarLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    
    window.scrollTo({
      top: targetElement.offsetTop - 80, // Offset to account for navbar height
      behavior: 'smooth'
    });
  });
});

// Success message after form submission
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();

  // Show success message
  const formStatus = document.getElementById('form-status');
  formStatus.textContent = 'Your message has been sent successfully! Thank you for reaching out.';

  // Clear the form fields
  this.reset();
});
