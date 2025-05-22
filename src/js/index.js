// Main JavaScript File 
// Mobile menu toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});


// Form Submit and Validation Error
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Name validation
    if (name === '') {
        showError('nameError', 'Name field is required');
    } 
  
    // Email validation
    if (email === '') {
        showError('emailError', 'Email field is required');
    }
    
    // Message validation
    if (message === '') {
        showError('messageError', 'Message field is required');
    } else if (message.length < 10) {
        showError('messageError', 'Message must be at least 10 characters');
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        showError("Please enter a valid email address.");
    }

    function showError(id, message) {
        const errorElement = document.getElementById(id);
        errorElement.textContent = message;
        errorElement.classList.remove('hidden');
        document.getElementById(id.replace('Error', '')).classList.add('border-red-500');
    }

    const formData = { name, email, message };
    localStorage.setItem("contactFormData", JSON.stringify(formData));

    document.getElementById("formMsg").classList.remove("hidden");
    resetErrors()
    // Optional: Reset form
    this.reset();
});

