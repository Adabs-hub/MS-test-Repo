// Back to Top functionality
document.addEventListener('DOMContentLoaded', function() {
    const backToTopButton = document.getElementById('back-to-top');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

// Form validation
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const message = document.getElementById('message');
        let isValid = true;

        // Name validation
        if (!name.value.trim()) {
            showError(name, 'Name is required');
            isValid = false;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.value.trim() || !emailRegex.test(email.value)) {
            showError(email, 'Please enter a valid email');
            isValid = false;
        }

        // Message validation
        if (!message.value.trim()) {
            showError(message, 'Message is required');
            isValid = false;
        }

        if (isValid) {
            // Here you would typically send the form data to a server
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        }
    });
}

function showError(input, message) {
    const formGroup = input.parentElement;
    const error = formGroup.querySelector('.error-message') || document.createElement('div');
    error.className = 'error-message';
    error.textContent = message;
    if (!formGroup.querySelector('.error-message')) {
        formGroup.appendChild(error);
    }
}

// Category filter implementation
const categorySelect = document.getElementById('category') || document.getElementById('genre');
if (categorySelect) {
    categorySelect.addEventListener('change', function() {
        const selected = this.value;
        const books = document.querySelectorAll('.book-card');
        
        books.forEach(book => {
            if (selected === 'all') {
                book.style.display = 'block';
            } else {
                const category = book.dataset.category || book.dataset.genre;
                book.style.display = category === selected ? 'block' : 'none';
            }
        });
    });
}