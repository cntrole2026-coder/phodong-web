document.addEventListener("DOMContentLoaded", () => {
    // Header Scroll Effect
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Intersection Observer for Smooth Fade-Up Animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: Stop observing once visible if you only want it to animate once
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Select all elements with fade-up class
    const fadeElements = document.querySelectorAll('.fade-up');
    fadeElements.forEach(el => {
        observer.observe(el);
    });

    // Smooth Scroll for Anchors
    document.querySelectorAll('.nav a, .btn').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetEl = document.getElementById(targetId);
                
                if (targetEl) {
                    window.scrollTo({
                        top: targetEl.offsetTop - 80, // adjust for header height
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});
