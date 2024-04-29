document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.contact-form').addEventListener('submit', function(event) {
        event.preventDefault();

        // Display thank you message
        var thankYouMessage = document.createElement('div');
        thankYouMessage.innerHTML = '<p>Thank you for your message! We\'ll get back to you soon.</p>';
        thankYouMessage.classList.add('thank-you-message');
        this.parentNode.appendChild(thankYouMessage);

        // Reset form fields
        this.reset();
    });
});
