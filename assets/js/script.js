// Products Data
const products = [
    { id: 1, name: "Vestido Elegante", price: 89.99, icon: "dress", badge: "NUEVO" },
    { id: 2, name: "Blusa Casual", price: 45.99, icon: "t-shirt", badge: null },
    { id: 3, name: "Pantalón Premium", price: 69.99, icon: "pants", badge: "SALE" },
    { id: 4, name: "Chaqueta Cuero", price: 159.99, icon: "coat-hanger", badge: "NUEVO" },
    { id: 5, name: "Bolso Designer", price: 119.99, icon: "handbag", badge: null },
    { id: 6, name: "Zapatos Elegantes", price: 79.99, icon: "sneaker", badge: "SALE" },
    { id: 7, name: "Conjunto Deportivo", price: 65.99, icon: "sneaker-move", badge: null },
    { id: 8, name: "Accesorios Premium", price: 39.99, icon: "watch", badge: "NUEVO" },
];

// Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const menuClose = document.getElementById('menuClose');
const fullscreenMenu = document.getElementById('fullscreenMenu');

menuToggle?.addEventListener('click', () => {
    fullscreenMenu.classList.add('active');
    document.body.style.overflow = 'hidden';
});

menuClose?.addEventListener('click', () => {
    fullscreenMenu.classList.remove('active');
    document.body.style.overflow = '';
});

// Close menu on link click
document.querySelectorAll('.menu-link').forEach(link => {
    link.addEventListener('click', () => {
        fullscreenMenu.classList.remove('active');
        document.body.style.overflow = '';
    });
});

// Search Toggle
const searchToggle = document.getElementById('searchToggle');
const searchClose = document.getElementById('searchClose');
const searchOverlay = document.getElementById('searchOverlay');

searchToggle?.addEventListener('click', () => {
    searchOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
});

searchClose?.addEventListener('click', () => {
    searchOverlay.classList.remove('active');
    document.body.style.overflow = '';
});

// Close search on overlay click
searchOverlay?.addEventListener('click', (e) => {
    if (e.target === searchOverlay) {
        searchOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// Render Products Horizontal
function renderProducts() {
    const container = document.getElementById('productsHorizontal');
    if (!container) return;

    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card-horizontal';
        
        const badgeHTML = product.badge 
            ? `<span class="product-badge-horizontal">${product.badge}</span>` 
            : '';
        
        card.innerHTML = `
            <div class="product-img-horizontal">
                <i class="ph-fill ph-${product.icon}"></i>
                ${badgeHTML}
            </div>
            <div class="product-info-horizontal">
                <h3 class="product-name-horizontal">${product.name}</h3>
                <div class="product-price-horizontal">$${product.price}</div>
                <button class="btn-add-horizontal" onclick="addToCart(${product.id})">
                    Agregar al Carrito
                </button>
            </div>
        `;
        
        container.appendChild(card);
    });
}

// Add to Cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const btn = event.target;
    
    // Feedback visual
    const originalText = btn.textContent;
    btn.textContent = '¡Agregado! ✓';
    btn.style.background = '#10b981';
    
    setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = '';
    }, 1500);
    
    // Update badge
    updateCartCount();
    
    // Vibration feedback (if supported)
    if ('vibrate' in navigator) {
        navigator.vibrate(50);
    }
    
    console.log(`Producto agregado: ${product.name}`);
}

// Update Cart Count
function updateCartCount() {
    const badges = document.querySelectorAll('.badge, .floating-badge');
    badges.forEach(badge => {
        const currentCount = parseInt(badge.textContent);
        badge.textContent = currentCount + 1;
        
        // Animation
        badge.style.transform = 'scale(1.5)';
        setTimeout(() => {
            badge.style.transform = 'scale(1)';
        }, 200);
    });
}

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Header Scroll Effect
let lastScroll = 0;
const header = document.querySelector('.floating-header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header?.classList.add('scrolled');
    } else {
        header?.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Intersection Observer for Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.category-card-modern, .feature-circle');
    elements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Floating Cart Button
const floatingCart = document.querySelector('.floating-cart-btn');
floatingCart?.addEventListener('click', () => {
    alert('Carrito de compras\n\nEsta es una función de demostración.\nEn la versión final, se mostraría el carrito completo.');
});

// Newsletter Form
const newsletterForm = document.querySelector('.newsletter-form-modern');
newsletterForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = e.target.querySelector('input[type="email"]');
    const email = input.value;
    
    if (email) {
        const btn = e.target.querySelector('button');
        const originalHTML = btn.innerHTML;
        
        btn.innerHTML = '<i class="ph-fill ph-check"></i>';
        btn.style.background = '#10b981';
        
        setTimeout(() => {
            btn.innerHTML = originalHTML;
            btn.style.background = '';
            input.value = '';
        }, 2000);
        
        if ('vibrate' in navigator) {
            navigator.vibrate(50);
        }
    }
});

// Touch Interactions Enhancement
document.addEventListener('DOMContentLoaded', () => {
    // Add touch feedback to all interactive elements
    const interactiveElements = document.querySelectorAll('button, a, .category-card-modern, .product-card-horizontal');
    
    interactiveElements.forEach(element => {
        element.addEventListener('touchstart', function() {
            this.style.transform = 'scale(0.98)';
        });
        
        element.addEventListener('touchend', function() {
            this.style.transform = '';
        });
    });
});

// Horizontal Scroll Snap Enhancement
const productsScroll = document.querySelector('.products-horizontal');
if (productsScroll) {
    let isScrolling = false;
    let startX;
    let scrollLeft;
    
    productsScroll.addEventListener('touchstart', (e) => {
        isScrolling = true;
        startX = e.touches[0].pageX - productsScroll.offsetLeft;
        scrollLeft = productsScroll.scrollLeft;
    });
    
    productsScroll.addEventListener('touchmove', (e) => {
        if (!isScrolling) return;
        e.preventDefault();
        const x = e.touches[0].pageX - productsScroll.offsetLeft;
        const walk = (x - startX) * 2;
        productsScroll.scrollLeft = scrollLeft - walk;
    });
    
    productsScroll.addEventListener('touchend', () => {
        isScrolling = false;
    });
}

// Dynamic Color Theme from Categories
document.querySelectorAll('.category-card-modern').forEach(card => {
    const color = card.getAttribute('data-color');
    if (color) {
        card.addEventListener('mouseenter', function() {
            this.style.setProperty('--hover-color', color);
        });
    }
});

// Promo Bar Animation Control
const promoSlider = document.querySelector('.promo-slider');
if (promoSlider) {
    // Clone items for infinite scroll effect
    const promoContent = promoSlider.innerHTML;
    promoSlider.innerHTML += promoContent;
}

// Initialize
renderProducts();

// Console Message
console.log('%c🎨 MedusaaOnly - Prototipo Ultra Moderno', 'color: #6B2D8F; font-size: 24px; font-weight: bold;');
console.log('%c✨ Diseño completamente diferente y optimizado para móvil', 'color: #FF6B9D; font-size: 14px;');
console.log('%c📱 Experiencia táctil mejorada con vibraciones y animaciones', 'color: #666; font-size: 12px;');