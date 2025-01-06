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

// Form validation and submission
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const name = this.name.value;
  const email = this.email.value;
  const message = this.message.value;

  if (name && email && message) {
    alert('Message sent successfully!');
    // You can handle form submission here (e.g., send data to a server)
    this.reset(); // Reset the form fields
  } else {
    alert('Please fill out all fields.');
  }
});
