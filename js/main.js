// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Scroll animations
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.animate');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        if (elementTop < window.innerHeight && elementBottom > 0) {
            element.classList.add('active');
        }
    });
};

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Form handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const formObject = {};
        formData.forEach((value, key) => {
            formObject[key] = value;
        });
        
        // Here you would typically send the form data to a server
        console.log('Form submitted:', formObject);
        
        // Show success message
        alert('Mesajınız başarıyla gönderildi!');
        this.reset();
    });
}

// Scroll to top button
const scrollToTopBtn = document.querySelector('.scroll-to-top');
if (scrollToTopBtn) {
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.classList.add('show');
        } else {
            scrollToTopBtn.classList.remove('show');
        }
    });

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Initialize tooltips
const tooltips = document.querySelectorAll('[data-tooltip]');
tooltips.forEach(tooltip => {
    tooltip.addEventListener('mouseenter', function() {
        const tooltipText = this.getAttribute('data-tooltip');
        const tooltipEl = document.createElement('div');
        tooltipEl.className = 'tooltip';
        tooltipEl.textContent = tooltipText;
        document.body.appendChild(tooltipEl);
        
        const rect = this.getBoundingClientRect();
        tooltipEl.style.top = rect.bottom + 5 + 'px';
        tooltipEl.style.left = rect.left + (rect.width / 2) - (tooltipEl.offsetWidth / 2) + 'px';
    });
    
    tooltip.addEventListener('mouseleave', function() {
        const tooltipEl = document.querySelector('.tooltip');
        if (tooltipEl) {
            tooltipEl.remove();
        }
    });
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(26, 26, 26, 0.95)';
        navbar.style.boxShadow = '0 2px 15px rgba(0,0,0,0.3)';
    } else {
        navbar.style.backgroundColor = 'rgba(26, 26, 26, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Project cards hover effect with parallax
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        
        this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
});

// Add typing effect to hero section
const typeWriter = (element, text, speed = 100) => {
    let i = 0;
    element.innerHTML = '';
    
    const type = () => {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    };
    
    type();
};

// Initialize typing effect
document.addEventListener('DOMContentLoaded', () => {
    const heroText = document.querySelector('.hero-content p');
    if (heroText) {
        typeWriter(heroText, 'Ben bir Web Geliştiricisiyim', 150);
    }
});

// Slider functionality
const sliderItems = document.querySelectorAll('.slider-item');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let currentSlide = 0;

function showSlide(index) {
    sliderItems.forEach(item => item.classList.remove('active'));
    sliderItems[index].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % sliderItems.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + sliderItems.length) % sliderItems.length;
    showSlide(currentSlide);
}

// Auto slide every 5 seconds
setInterval(nextSlide, 5000);

// Event listeners for slider controls
prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

// Product actions
const productCards = document.querySelectorAll('.product-card');

productCards.forEach(card => {
    const favoriteBtn = card.querySelector('.favorite-btn');
    const compareBtn = card.querySelector('.compare-btn');
    const addToCartBtn = card.querySelector('.add-to-cart-btn');

    if (favoriteBtn) {
        favoriteBtn.addEventListener('click', (e) => {
            e.preventDefault();
            favoriteBtn.classList.toggle('active');
            // Add to favorites functionality
        });
    }

    if (compareBtn) {
        compareBtn.addEventListener('click', (e) => {
            e.preventDefault();
            compareBtn.classList.toggle('active');
            // Add to compare functionality
        });
    }

    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', (e) => {
            e.preventDefault();
            // Add to cart functionality
            alert('Ürün sepete eklendi!');
        });
    }
});

// Search functionality
const searchForm = document.querySelector('.search-bar form');
const searchInput = document.querySelector('.search-bar input');

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const searchTerm = searchInput.value.trim();
    if (searchTerm) {
        // Implement search functionality
        console.log('Searching for:', searchTerm);
    }
});

// Mobile menu toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
} 