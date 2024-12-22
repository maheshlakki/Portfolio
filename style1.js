// Contact Form Submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from reloading the page

    // Collect form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Basic validation
    if (name && email && message) {
        alert(`Thank you, ${name}! Your message has been received.`);
        // Clear the form
        document.getElementById('contact-form').reset();
    } else {
        alert('Please fill out all fields before submitting.');
    }
});
