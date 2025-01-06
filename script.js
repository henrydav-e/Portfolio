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

// Success message after form submission (Formspree shows a default success message)
document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault(); // Prevents form from default behavior if you want to handle it
  document.getElementById('form-status').textContent = 'Your message has been sent successfully! Thank you for reaching out.';
  setTimeout(() => {
    document.getElementById('form-status').textContent = ''; // Clear message after 5 seconds
  }, 5000); // Message will disappear after 5 seconds
});
