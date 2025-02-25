let currentIndex = 0;
const slides = document.querySelectorAll('.carousel-inner img');
const totalSlides = slides.length;

function showSlide(index) {
    const offset = -index * 100;
    document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
}

setInterval(nextSlide, 3000);
