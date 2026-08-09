window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Initialize AOS (Animate on Scroll)
AOS.init({
    duration: 400,
    offset: 30,
    once: true,
    mirror: false
});

// --- MOBILE MENU TOGGLE ---
const menuToggle = document.getElementById('menuToggle');
const navbar = document.querySelector('.navbar');
const navLinksList = document.querySelectorAll('.nav-links a');

menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('nav-open');
    document.body.classList.toggle('no-scroll');
});

navLinksList.forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('nav-open');
        document.body.classList.remove('no-scroll');
    });
});

// --- BACK TO TOP BUTTON ---
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// --- SCROLLSPY (NAVBAR ACTIVE LINK HIGHLIGHT) ---
const sections = document.querySelectorAll('section, header');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= (sectionTop - 150)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// --- MENU TABS FILTERING ---
const tabButtons = document.querySelectorAll('.tab-btn');
const categorySections = document.querySelectorAll('.menu-category-section');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        tabButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');

        const category = button.getAttribute('data-category');

        categorySections.forEach(section => {
            const sectionCategory = section.getAttribute('data-menu-category');
            if (category === 'all' || category === sectionCategory) {
                section.classList.remove('hidden');
            } else {
                section.classList.add('hidden');
            }
        });

        // Re-initialize AOS to recalculate offsets after layout changes
        AOS.refresh();
    });
});
