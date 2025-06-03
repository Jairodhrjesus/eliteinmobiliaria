// Carrusel Hero Custom (HTML+CSS+JS)

document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.getElementById('customHeroCarousel');
    const slides = carousel.querySelectorAll('.carousel-slide');
    const prevBtn = carousel.querySelector('.carousel-btn.prev');
    const nextBtn = carousel.querySelector('.carousel-btn.next');
    let current = 0;
    let interval = null;

    function showSlide(idx) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === idx);
        });
        current = idx;
    }

    function nextSlide() {
        showSlide((current + 1) % slides.length);
    }

    function prevSlide() {
        showSlide((current - 1 + slides.length) % slides.length);
    }

    nextBtn.addEventListener('click', () => {
        nextSlide();
        restartInterval();
    });
    prevBtn.addEventListener('click', () => {
        prevSlide();
        restartInterval();
    });

    function startInterval() {
        interval = setInterval(nextSlide, 4000);
    }
    function restartInterval() {
        clearInterval(interval);
        startInterval();
    }

    startInterval();
});
