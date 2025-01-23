// Seleccionar los elementos principales del carrusel
const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const dotsNav = document.querySelector('.carousel-nav');
const dots = Array.from(dotsNav.children);

// Calcular el ancho de una diapositiva individual para el posicionamiento
const slideWidth = slides[0].getBoundingClientRect().width;

// Posicionar las diapositivas horizontalmente una al lado de la otra
slides.forEach((slide, index) => {
    slide.style.left = `${slideWidth * index}px`;
});

// Función para mover el carrusel a una diapositiva específica
const moveToSlide = (track, currentSlide, targetSlide) => {
    // Mover la pista según la posición de la diapositiva objetivo
    track.style.transform = `translateX(-${targetSlide.style.left})`;
    currentSlide.classList.remove('active-slide');
    targetSlide.classList.add('active-slide');
};

// Función para actualizar el estado de los puntos de navegación
const updateDots = (currentDot, targetDot) => {
    // Primero, manejar el estado activo
    currentDot.classList.remove('active');
    targetDot.classList.add('active');
    
    // Limpiar la clase 'visited' de todos los puntos
    dots.forEach(dot => {
        if (!dot.classList.contains('active')) {
            dot.classList.remove('visited');
        }
    });
    
    // Marcar como visitados los puntos hasta el actual, inclusive
    const targetIndex = dots.indexOf(targetDot);
    dots.forEach((dot, index) => {
        if (index <= targetIndex) {
            dot.classList.add('visited');
        }
    });
};

// Agregar el evento click a la navegación por puntos
dotsNav.addEventListener('click', (e) => {
    const targetDot = e.target.closest('span');
    if (!targetDot) return; // Salir si el clic no fue en un punto

    const currentSlide = track.querySelector('.active-slide');
    const currentDot = dotsNav.querySelector('.active');
    const targetIndex = dots.findIndex(dot => dot === targetDot);
    const targetSlide = slides[targetIndex];

    // Mover a la diapositiva seleccionada y actualizar la navegación
    moveToSlide(track, currentSlide, targetSlide);
    updateDots(currentDot, targetDot);
});

// Inicializar la primera diapositiva y punto como activos
slides[0].classList.add('active-slide');
dots[0].classList.add('active', 'visited');