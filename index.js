document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('formStatus').textContent = "Thank you for contacting us! We'll get back to you soon.";
    this.reset();
});