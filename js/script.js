
document.addEventListener('DOMContentLoaded', function() {

    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }

    // form submission
    const reviewForm = document.getElementById('reviewForm');
    
    if (reviewForm) {
        reviewForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const food = document.getElementById('food').value;
            const review = document.getElementById('review').value;

            if (!name || !email || !food || !review) {
                alert('Please fill in all fields');
                return;
            }

            alert('Thank you for your review, ' + name + '! We appreciate your feedback.');

            reviewForm.reset();
        });
    }

    // smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            if (this.getAttribute('href') !== '#') {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    const headerHeight = document.querySelector('header').offsetHeight;
                    
                    window.scrollTo({
                        top: targetElement.offsetTop - headerHeight,
                        behavior: 'smooth'
                    });
                    
                    // mobile functionality
                    if (navLinks.classList.contains('active')) {
                        navLinks.classList.remove('active');
                    }
                }
            }
        });
    });

    // reservations
    const reservationButtons = document.querySelectorAll('.reservation-btn');
    
    reservationButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            const name = prompt('Please enter your name:');
            if (name) {
                const date = prompt('Please enter the date (MM/DD/YYYY):');
                if (date) {
                    const time = prompt('Please enter the time:');
                    if (time) {
                        const guests = prompt('Number of guests:');
                        if (guests) {
                            alert(`Thank you, ${name}! Your reservation for ${guests} guests on ${date} at ${time} has been received. We'll contact you to confirm.`);
                        }
                    }
                }
            }
        });
    });
}); 