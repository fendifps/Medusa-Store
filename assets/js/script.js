// Productos de demostración
const products = [
    {
        id: 1,
        name: "Vestido Elegante",
        category: "Vestidos",
        price: 89.99,
        oldPrice: 129.99,
        rating: 4.5,
        badge: "NUEVO",
        icon: "dress"
    },
    {
        id: 2,
        name: "Blusa Casual",
        category: "Tops",
        price: 45.99,
        oldPrice: null,
        rating: 4.8,
        badge: null,
        icon: "t-shirt"
    },
    {
        id: 3,
        name: "Pantalón Premium",
        category: "Pantalones",
        price: 69.99,
        oldPrice: 99.99,
        rating: 4.3,
        badge: "SALE",
        icon: "pants"
    },
    {
        id: 4,
        name: "Chaqueta de Cuero",
        category: "Chaquetas",
        price: 159.99,
        oldPrice: 199.99,
        rating: 4.9,
        badge: "NUEVO",
        icon: "coat-hanger"
    },
    {
        id: 5,
        name: "Bolso Designer",
        category: "Accesorios",
        price: 119.99,
        oldPrice: null,
        rating: 4.7,
        badge: null,
        icon: "handbag"
    },
    {
        id: 6,
        name: "Zapatos Elegantes",
        category: "Calzado",
        price: 79.99,
        oldPrice: 110.99,
        rating: 4.6,
        badge: "SALE",
        icon: "sneaker"
    },
    {
        id: 7,
        name: "Conjunto Deportivo",
        category: "Deportiva",
        price: 65.99,
        oldPrice: null,
        rating: 4.4,
        badge: "NUEVO",
        icon: "sneaker-move"
    },
    {
        id: 8,
        name: "Accesorios Premium",
        category: "Accesorios",
        price: 39.99,
        oldPrice: 59.99,
        rating: 4.5,
        badge: null,
        icon: "watch"
    }
];

// Función para renderizar productos
function renderProducts() {
    const grid = document.getElementById('productsGrid');
    
    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        
        const badgeHTML = product.badge ? `<span class="product-badge">${product.badge}</span>` : '';
        const oldPriceHTML = product.oldPrice ? `<span class="price-old">$${product.oldPrice}</span>` : '';
        
        card.innerHTML = `
            <div class="product-image">
                <i class="ph-fill ph-${product.icon}"></i>
                ${badgeHTML}
                <div class="product-actions">
                    <button class="action-btn" onclick="addToWishlist(${product.id})" aria-label="Agregar a favoritos">
                        <i class="ph ph-heart"></i>
                    </button>
                    <button class="action-btn" onclick="quickView(${product.id})" aria-label="Vista rápida">
                        <i class="ph ph-eye"></i>
                    </button>
                </div>
            </div>
            <div class="product-info">
                <div class="product-category">${product.category}</div>
                <h3 class="product-name">${product.name}</h3>
                <div class="product-price">
                    <span class="price-current">$${product.price}</span>
                    ${oldPriceHTML}
                </div>
                <div class="product-rating">
                    <i class="ph-fill ph-star"></i>
                    <span>${product.rating}</span>
                    <span>(${Math.floor(Math.random() * 100) + 20} reseñas)</span>
                </div>
                <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
                    <i class="ph ph-shopping-cart"></i>
                    Agregar al Carrito
                </button>
            </div>
        `;
        
        grid.appendChild(card);
    });
}

// Función para agregar al carrito (simulación)
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    
    // Animación de feedback
    const btn = event.target.closest('.add-to-cart-btn');
    const originalText = btn.innerHTML;
    
    btn.innerHTML = '<i class="ph-fill ph-check-circle"></i> ¡Agregado!';
    btn.style.background = '#28a745';
    
    setTimeout(() => {
        btn.innerHTML = originalText;
        btn.style.background = '';
    }, 2000);
    
    // Actualizar badge del carrito
    updateCartBadge();
    
    console.log(`Producto agregado: ${product.name}`);
}

// Función para agregar a favoritos (simulación)
function addToWishlist(productId) {
    const product = products.find(p => p.id === productId);
    
    // Animación de corazón
    const heartBtn = event.target.closest('.action-btn');
    const heartIcon = heartBtn.querySelector('i');
    
    if (heartIcon.classList.contains('ph-fill')) {
        heartIcon.classList.remove('ph-fill');
        heartIcon.style.color = '';
    } else {
        heartIcon.classList.add('ph-fill');
        heartIcon.style.color = '#ff4757';
    }
    
    console.log(`Favorito: ${product.name}`);
}

// Función de vista rápida (simulación)
function quickView(productId) {
    const product = products.find(p => p.id === productId);
    alert(`Vista rápida de: ${product.name}\n\nEsta es una función de demostración. En la versión final, se mostraría un modal con detalles del producto.`);
}

// Actualizar badge del carrito
function updateCartBadge() {
    const badges = document.querySelectorAll('.cart-badge');
    badges.forEach(badge => {
        const currentCount = parseInt(badge.textContent);
        badge.textContent = currentCount + 1;
        
        // Animación
        badge.style.transform = 'scale(1.3)';
        setTimeout(() => {
            badge.style.transform = 'scale(1)';
        }, 300);
    });
}

// Manejo del formulario de newsletter
function handleNewsletterSubmit(e) {
    e.preventDefault();
    const input = e.target.querySelector('input[type="email"]');
    const email = input.value;
    
    if (email) {
        alert(`¡Gracias por suscribirte con ${email}!\n\nEsta es una demostración. En la versión final, el correo se enviaría al sistema de email marketing.`);
        input.value = '';
    }
}

// Smooth scroll para navegación
function initSmoothScroll() {
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
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
}

// Animación de scroll reveal
function initScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });

    // Observar tarjetas de productos
    document.querySelectorAll('.product-card, .category-card, .feature-item').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}

// Menú móvil
function initMobileMenu() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('nav');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
            nav.style.position = 'absolute';
            nav.style.top = '100%';
            nav.style.left = '0';
            nav.style.right = '0';
            nav.style.background = 'white';
            nav.style.padding = '20px';
            nav.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
        });
    }
}

// Búsqueda (simulación)
function initSearch() {
    const searchBtn = document.querySelector('.icon-btn[aria-label="Buscar"]');
    
    if (searchBtn) {
        searchBtn.addEventListener('click', () => {
            const searchTerm = prompt('¿Qué estás buscando?');
            if (searchTerm) {
                alert(`Buscando: "${searchTerm}"\n\nEsta es una demostración. En la versión final, se mostraría una página de resultados.`);
            }
        });
    }
}

// Inicialización cuando carga el DOM
document.addEventListener('DOMContentLoaded', () => {
    // Renderizar productos
    renderProducts();
    
    // Inicializar funcionalidades
    initSmoothScroll();
    initMobileMenu();
    initSearch();
    
    // Configurar formulario de newsletter
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', handleNewsletterSubmit);
    }
    
    // Agregar animaciones de scroll después de un pequeño delay
    setTimeout(() => {
        initScrollReveal();
    }, 500);
    
    // Mensaje de demo en consola
    console.log('%c🎨 MedusaaOnly - Prototipo de Demostración', 'color: #6B2D8F; font-size: 20px; font-weight: bold;');
    console.log('%cEste es un prototipo frontend. No está conectado a Shopify.', 'color: #666; font-size: 14px;');
    console.log('%cTodas las funcionalidades son simuladas con JavaScript.', 'color: #666; font-size: 14px;');
});

// Efectos de hover adicionales
document.addEventListener('DOMContentLoaded', () => {
    // Efecto parallax en hero (opcional)
    window.addEventListener('scroll', () => {
        const hero = document.querySelector('.hero');
        if (hero) {
            const scrolled = window.pageYOffset;
            hero.style.backgroundPositionY = scrolled * 0.5 + 'px';
        }
    });
});