document.addEventListener('DOMContentLoaded', function() {
    // Elementos principales del carrusel
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(document.querySelectorAll('.carousel-slide'));
    const dots = Array.from(document.querySelectorAll('.carousel-dot'));

    // Función para cambiar de slide
    function updateCarousel(targetIndex) {
        // Mover el track
        track.style.transform = `translateX(-${targetIndex * 100}%)`;
        
        // Actualizar estado activo de los slides
        slides.forEach((slide, index) => {
            if (index === targetIndex) {
                slide.classList.add('active-slide');
            } else {
                slide.classList.remove('active-slide');
            }
        });

        // Actualizar estado activo de los dots
        dots.forEach((dot, index) => {
            if (index === targetIndex) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });

        console.log('Cambiado a slide:', targetIndex);
    }

    // Agregar event listeners a los dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            console.log('Dot clickeado:', index);
            updateCarousel(index);
        });
    });

    // Inicializar el primer slide
    updateCarousel(0);
});