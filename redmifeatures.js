// redmispecs.js

// Wait for DOM to load completely
document.addEventListener('DOMContentLoaded', function() {
    
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navClose = document.querySelector('.nav-close');
    const backToTopBtn = document.querySelector('.back-to-top');

    // Check if elements exist before adding listeners
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Menu toggle clicked'); // Debug line
            navLinks.classList.toggle('active');
        });
    }

    if (navClose && navLinks) {
        navClose.addEventListener('click', function(e) {
            e.preventDefault();
            navLinks.classList.remove('active');
        });
    }

    // Close menu when clicking on nav links
    if (navLinks) {
        const navItems = navLinks.querySelectorAll('li a');
        navItems.forEach(function(link) {
            link.addEventListener('click', function() {
                navLinks.classList.remove('active');
            });
        });
    }

    // Back to top button functionality
    if (backToTopBtn) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) {
                backToTopBtn.style.display = 'flex';
            } else {
                backToTopBtn.style.display = 'none';
            }
        });

        backToTopBtn.addEventListener('click', function() {
            window.scrollTo({ 
                top: 0, 
                behavior: 'smooth' 
            });
        });
    }

    // Smooth scroll for internal links
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    internalLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            const href = link.getAttribute('href');
            if (href !== '#' && href.length > 1) {
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // Add animation to spec table rows on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe spec table rows for animation
    const specRows = document.querySelectorAll('.specs-table tr');
    specRows.forEach(function(row, index) {
        row.style.opacity = '0';
        row.style.transform = 'translateY(20px)';
        row.style.transition = `all 0.6s ease ${index * 0.1}s`;
        observer.observe(row);
    });

    // Observe highlight cards for animation
    const highlightCards = document.querySelectorAll('.highlight-card');
    highlightCards.forEach(function(card, index) {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `all 0.8s ease ${index * 0.2}s`;
        observer.observe(card);
    });

    // Add hover sound effect (optional - you can remove if not needed)
    const hoverElements = document.querySelectorAll('.highlight-card, .specs-table tr:not(.spec-category)');
    hoverElements.forEach(function(element) {
        element.addEventListener('mouseenter', function() {
            // You can add sound effect here if needed
            this.style.transition = 'all 0.3s ease';
        });
    });

    // Table row click to highlight
    const tableRows = document.querySelectorAll('.specs-table tr:not(.spec-category)');
    tableRows.forEach(function(row) {
        row.addEventListener('click', function() {
            // Remove previous highlights
            tableRows.forEach(function(r) {
                r.classList.remove('highlighted');
            });
            
            // Add highlight to clicked row
            this.classList.add('highlighted');
            
            // Remove highlight after 2 seconds
            setTimeout(() => {
                this.classList.remove('highlighted');
            }, 2000);
        });
    });
});

// Page loader functionality
window.addEventListener('load', function() {
    const loader = document.getElementById('page-loader');
    if (loader) {
        setTimeout(function() {
            loader.style.display = 'none';
        }, 1000);
    }
});

// Show loader on page navigation
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href]');
    const loader = document.getElementById('page-loader');
    
    links.forEach(function(link) {
        link.addEventListener('click', function(e) {
            const url = link.getAttribute('href');
            if (url && !url.startsWith('#') && loader) {
                loader.style.display = 'flex';
            }
        });
    });

    // Add scroll progress indicator
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(45deg, #ff416c, #ff4b2b);
        z-index: 10000;
        transition: width 0.3s ease;
    `;
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        progressBar.style.width = scrollPercent + '%';
    });
});

// Add CSS for highlighted row
const style = document.createElement('style');
style.textContent = `
    .specs-table tr.highlighted {
        background: rgba(255, 65, 108, 0.2) !important;
        transform: scale(1.02);
        box-shadow: 0 0 20px rgba(255, 65, 108, 0.3);
    }
`;
document.head.appendChild(style);