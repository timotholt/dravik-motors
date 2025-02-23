// Main application logic
class LuxuryCarApp {
    constructor() {
        this.currentModel = CONFIG.models[0];
        this.currentColor = this.currentModel.colors[0];
        this.currentAngle = CONFIG.angles[0];
        this.init();
    }

    init() {
        this.initializeTheme();
        this.initializeBranding();
        this.initializeModelSelector();
        this.initializeCustomizer();
        this.initializeFeatures();
        this.initializeContactForm();
        this.initializeEventListeners();
        this.updateCarDisplay();
    }

    initializeTheme() {
        // Create CSS variables from theme colors
        const root = document.documentElement;
        Object.entries(CONFIG.theme.colors).forEach(([name, value]) => {
            root.style.setProperty(`--${name}-color`, value);
        });
    }

    initializeBranding() {
        // Update page title
        document.getElementById('page-title').textContent = `${CONFIG.brand.name} - ${CONFIG.brand.tagline}`;
        
        // Update navigation
        document.getElementById('brand-logo').textContent = CONFIG.brand.name;
        
        // Update hero section
        document.getElementById('hero-title').textContent = CONFIG.brand.name;
        document.getElementById('hero-tagline').textContent = CONFIG.brand.tagline;
        
        // Update footer
        document.getElementById('footer-brand').textContent = CONFIG.brand.name;
        document.getElementById('footer-tagline').textContent = CONFIG.brand.tagline;
        document.getElementById('copyright').textContent = 
            ` ${CONFIG.brand.year} ${CONFIG.brand.name}. All rights reserved.`;
        
        // Update social links
        const socialLinks = document.getElementById('social-links');
        socialLinks.innerHTML = Object.entries(CONFIG.brand.social)
            .map(([platform, url]) => `
                <a href="${url}"><i class="fab fa-${platform}"></i></a>
            `).join('');
    }

    initializeModelSelector() {
        const modelSelector = document.querySelector('.model-selector');
        if (!modelSelector) return;

        CONFIG.models.forEach(model => {
            const modelCard = document.createElement('div');
            modelCard.className = 'model-card reveal-on-scroll';
            modelCard.innerHTML = `
                <div class="model-image" data-model="${model.id}">
                    <!-- Image will be loaded dynamically -->
                </div>
                <h3>${model.name}</h3>
                <p>${model.tagline}</p>
                <p class="price">Starting at $${model.basePrice.toLocaleString()}</p>
                <button class="cta-button" data-model="${model.id}">Configure</button>
            `;
            modelSelector.appendChild(modelCard);
        });
    }

    initializeCustomizer() {
        const colorPicker = document.querySelector('.color-picker');
        const anglePicker = document.querySelector('.angle-picker');
        if (!colorPicker || !anglePicker) return;

        // Initialize color picker
        colorPicker.innerHTML = `
            <h3>Select Color</h3>
            <div class="color-options">
                ${this.currentModel.colors.map(color => `
                    <div class="color-option ${this.currentColor.name === color.name ? 'active' : ''}"
                         style="background-color: ${color.hex}"
                         data-color="${color.name}"
                         title="${color.name}">
                    </div>
                `).join('')}
            </div>
        `;

        // Initialize angle picker
        anglePicker.innerHTML = `
            <h3>View Angle</h3>
            <div class="angle-options">
                ${CONFIG.angles.map(angle => `
                    <button class="angle-button ${this.currentAngle.id === angle.id ? 'active' : ''}"
                            data-angle="${angle.id}">
                        ${angle.name}
                    </button>
                `).join('')}
            </div>
        `;
    }

    initializeFeatures() {
        const featureGrid = document.querySelector('.feature-grid');
        if (!featureGrid) return;

        this.currentModel.features.forEach(feature => {
            const featureCard = document.createElement('div');
            featureCard.className = 'feature-card reveal-on-scroll';
            featureCard.innerHTML = `
                <i class="fas ${feature.icon}"></i>
                <h3>${feature.name}</h3>
                <p>${feature.description}</p>
            `;
            featureGrid.appendChild(featureCard);
        });
    }

    initializeContactForm() {
        const form = document.getElementById('inquiry-form');
        if (!form) return;

        const modelSelect = form.querySelector('select');
        CONFIG.models.forEach(model => {
            const option = document.createElement('option');
            option.value = model.id;
            option.textContent = model.name;
            modelSelect.appendChild(option);
        });

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            // Here you would typically handle the form submission
            alert('Thank you for your inquiry. We will contact you shortly.');
            form.reset();
        });
    }

    initializeEventListeners() {
        // Model selection
        document.querySelectorAll('[data-model]').forEach(element => {
            element.addEventListener('click', (e) => {
                const modelId = e.target.dataset.model;
                this.setModel(modelId);
                if (e.target.tagName === 'BUTTON') {
                    animations.scrollTo(document.querySelector('#customize'));
                }
            });
        });

        // Color selection
        document.querySelector('.color-picker')?.addEventListener('click', (e) => {
            const colorOption = e.target.closest('.color-option');
            if (colorOption) {
                const colorName = colorOption.dataset.color;
                this.setColor(colorName);
            }
        });

        // Angle selection
        document.querySelector('.angle-picker')?.addEventListener('click', (e) => {
            const angleButton = e.target.closest('.angle-button');
            if (angleButton) {
                const angleId = angleButton.dataset.angle;
                this.setAngle(angleId);
            }
        });

        // Smooth scroll for navigation
        document.querySelectorAll('nav a').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    animations.scrollTo(targetElement);
                }
            });
        });
    }

    setModel(modelId) {
        const model = CONFIG.models.find(m => m.id === modelId);
        if (model) {
            this.currentModel = model;
            this.currentColor = model.colors[0];
            this.initializeCustomizer();
            this.updateCarDisplay();
        }
    }

    setColor(colorName) {
        const color = this.currentModel.colors.find(c => c.name === colorName);
        if (color) {
            this.currentColor = color;
            this.updateCarDisplay();
            this.updateColorSelection();
        }
    }

    setAngle(angleId) {
        const angle = CONFIG.angles.find(a => a.id === angleId);
        if (angle) {
            this.currentAngle = angle;
            this.updateCarDisplay();
            this.updateAngleSelection();
        }
    }

    updateCarDisplay() {
        const carDisplay = document.querySelector('.car-display');
        if (!carDisplay) return;

        // Here you would typically update the car image based on the current model, color, and angle
        // For now, we'll just show a placeholder message
        carDisplay.innerHTML = `
            <div class="placeholder-message">
                <h3>${this.currentModel.name} - ${this.currentColor.name}</h3>
                <p>View: ${this.currentAngle.name}</p>
            </div>
        `;
    }

    updateColorSelection() {
        document.querySelectorAll('.color-option').forEach(option => {
            option.classList.toggle('active', option.dataset.color === this.currentColor.name);
        });
    }

    updateAngleSelection() {
        document.querySelectorAll('.angle-button').forEach(button => {
            button.classList.toggle('active', button.dataset.angle === this.currentAngle.id);
        });
    }
}

// Mobile Menu Functionality
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navMenu = document.querySelector('.main-nav ul');
let isMenuOpen = false;

function toggleMenu() {
    isMenuOpen = !isMenuOpen;
    navMenu.classList.toggle('active');
    
    // Animate hamburger to X
    const spans = mobileMenuBtn.querySelectorAll('span');
    spans[0].style.transform = isMenuOpen ? 'rotate(45deg) translate(6px, 6px)' : 'none';
    spans[1].style.opacity = isMenuOpen ? '0' : '1';
    spans[2].style.transform = isMenuOpen ? 'rotate(-45deg) translate(6px, -6px)' : 'none';
    
    // Prevent body scroll when menu is open
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
}

mobileMenuBtn.addEventListener('click', toggleMenu);

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (isMenuOpen && !e.target.closest('.mobile-menu-btn') && !e.target.closest('.main-nav ul')) {
        toggleMenu();
    }
});

// Close menu when clicking a link
document.querySelectorAll('.main-nav a').forEach(link => {
    link.addEventListener('click', () => {
        if (isMenuOpen) toggleMenu();
    });
});

// Initialize the application when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new LuxuryCarApp();
});
