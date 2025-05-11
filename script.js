// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Parallax effect for background
const parallaxBg = document.querySelector('.parallax-bg');
const parallaxEffect = () => {
    if (!parallaxBg) return;
    
    // Calculate how far down the page the user has scrolled
    const scrollPosition = window.pageYOffset;
    
    // Get page height and window height
    const pageHeight = document.body.scrollHeight;
    const windowHeight = window.innerHeight;
    
    // Calculate the maximum scroll position
    const maxScroll = pageHeight - windowHeight;
    
    // Calculate the percentage of the page that has been scrolled
    const scrollPercentage = scrollPosition / maxScroll;
    
    // Calculate the maximum amount the background should move
    // This ensures the background always covers the visible area
    const maxParallaxOffset = parallaxBg.offsetHeight - windowHeight;
    
    // Move the background at a slower rate than the scroll speed
    // Limit the movement to ensure the background always covers the page
    const translateY = Math.min(scrollPercentage * maxParallaxOffset, maxParallaxOffset);
    
    // Apply transform to create parallax effect
    parallaxBg.style.transform = `translate3d(0, -${translateY}px, 0)`;
};

// Mobile menu toggle
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

if (menuBtn) {
    menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuBtn.innerHTML = navLinks.classList.contains('active') 
            ? '<i class="fas fa-times"></i>' 
            : '<i class="fas fa-bars"></i>';
    });
}

// Close mobile menu when clicking on a nav link
const mobileNavLinks = document.querySelectorAll('.nav-links a');
mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        }
    });
});

// Experience tabs
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const tabId = btn.getAttribute('data-tab');
        
        // Remove active class from all buttons and contents
        tabBtns.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));
        
        // Add active class to current button and content
        btn.classList.add('active');
        document.getElementById(`${tabId}-tab`).classList.add('active');
    });
});

// Animate skill bars on scroll
const skillBars = document.querySelectorAll('.skill-progress');
const animateSkills = () => {
    skillBars.forEach(bar => {
        const rect = bar.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
        
        if (isVisible) {
            // Get the original width from the inline style
            const originalWidth = bar.getAttribute('data-width') || bar.style.width;
            
            // Store the original width if not already stored
            if (!bar.getAttribute('data-width')) {
                bar.setAttribute('data-width', originalWidth);
            }
            
            // Set initial width to 0 if not already animated
            if (bar.dataset.animated !== 'true') {
                bar.style.width = '0%';
                
                // Use setTimeout to trigger animation
                setTimeout(() => {
                    bar.style.width = originalWidth;
                    bar.dataset.animated = 'true';
                }, 100);
            } else {
                // Ensure the width is maintained
                bar.style.width = originalWidth;
            }
        }
    });
};

// Contact form handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        // Here you would typically send the data to a server
        console.log('Form submitted:', data);
        
        // Show success message (in a real app, this would happen after successful submission)
        const successMessage = document.createElement('div');
        successMessage.className = 'success-message';
        successMessage.textContent = 'Your message has been sent successfully!';
        successMessage.style.color = '#10b981';
        successMessage.style.marginTop = '1rem';
        
        // Remove any existing message
        const existingMessage = contactForm.querySelector('.success-message, .error-message');
        if (existingMessage) {
            existingMessage.remove();
        }
        
        contactForm.appendChild(successMessage);
        contactForm.reset();
        
        // Remove message after 5 seconds
        setTimeout(() => {
            successMessage.remove();
        }, 5000);
    });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80, // Adjust for header height
                behavior: 'smooth'
            });
        }
    });
});

// Call animateSkills on page load to initialize animations
document.addEventListener('DOMContentLoaded', () => {
    animateSkills();
    // Initialize parallax on page load
    parallaxEffect();
});

// Add scroll event listeners
window.addEventListener('scroll', () => {
    animateSkills();
    parallaxEffect();
});

// Handle resize events for parallax
window.addEventListener('resize', () => {
    parallaxEffect();
}); 