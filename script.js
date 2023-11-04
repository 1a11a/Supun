const nav = document.querySelector('.nav');

window.addEventListener('scroll', () => {
    if (window.scrollY > nav.offsetHeight) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // You'll need to use a server-side service to actually send the email
    // This is just a placeholder function call
    sendEmail(name, email, message);
  });

  function sendEmail(name, email, message) {
    // You would typically make an AJAX call to your server here
    // For demonstration purposes, we'll just log to the console
    console.log('Send email with the following:');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
  }