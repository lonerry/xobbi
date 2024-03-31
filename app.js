const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function goToSlide(index) {
    if (index < 0 || index >= slides.length) return;

    slides[currentSlide].classList.remove('active');
    currentSlide = index;
    
    slider.style.transition = 'transform 0.5s ease';
    slider.style.transform = 'translateY(-${currentSlide * slider.clientHeight}px)';
    
    slides[currentSlide].classList.add('active');
}

function nextSlide() {
    if (currentSlide === slides.length - 1) {
        goToSlide(0);
    } else {
        goToSlide(currentSlide + 1);
    }
}

setInterval(nextSlide, 2000);
