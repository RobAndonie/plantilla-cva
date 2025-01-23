// Funcionalidad para el carrusel


const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const dotsNav = document.querySelector('.carousel-nav');
const dots = Array.from(dotsNav.children);


const slideWidth = slides[0].getBoundingClientRect().width;


slides.forEach((slide, index) => {
    slide.style.left = `${slideWidth * index}px`;
});


const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = `translateX(-${targetSlide.style.left})`;
    currentSlide.classList.remove('active-slide');
    targetSlide.classList.add('active-slide');
};


const updateDots = (currentDot, targetDot) => {
    currentDot.classList.remove('active');
    targetDot.classList.add('active');
    targetDot.classList.add('visited'); 
};


dotsNav.addEventListener('click', (e) => {
    const targetDot = e.target.closest('span'); 

    if (!targetDot) return; 

    const currentSlide = track.querySelector('.active-slide');
    const currentDot = dotsNav.querySelector('.active');
    const targetIndex = dots.findIndex(dot => dot === targetDot);
    const targetSlide = slides[targetIndex];

    
    moveToSlide(track, currentSlide, targetSlide);

    
    updateDots(currentDot, targetDot);
});


slides[0].classList.add('active-slide');
dots[0].classList.add('active', 'visited');