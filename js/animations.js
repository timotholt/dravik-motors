// Animation utilities
const animations = {
    fadeIn: (element, delay = 0) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, delay);
    },

    slideIn: (element, direction = 'left', delay = 0) => {
        const distance = direction === 'left' ? '-100px' : '100px';
        element.style.opacity = '0';
        element.style.transform = `translateX(${distance})`;
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateX(0)';
        }, delay);
    },

    rotateIn: (element, delay = 0) => {
        element.style.opacity = '0';
        element.style.transform = 'rotate(-10deg) scale(0.9)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'rotate(0) scale(1)';
        }, delay);
    },

    // Smooth scroll to element
    scrollTo: (element) => {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    },

    // Parallax effect for hero section
    initParallax: () => {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const heroImage = document.querySelector('.hero-image');
            if (heroImage) {
                heroImage.style.transform = `translateY(${scrolled * 0.4}px)`;
            }
        });
    },

    // Intersection Observer for revealing elements on scroll
    initScrollReveal: () => {
        const options = {
            threshold: 0.2,
            rootMargin: '0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    observer.unobserve(entry.target);
                }
            });
        }, options);

        document.querySelectorAll('.reveal-on-scroll').forEach(element => {
            observer.observe(element);
        });
    }
};

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    animations.initParallax();
    animations.initScrollReveal();
});
