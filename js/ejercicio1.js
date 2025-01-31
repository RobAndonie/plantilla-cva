document.addEventListener('DOMContentLoaded', function() {
    const ejercicio = document.querySelector('.exercise-content');
    if (!ejercicio) return;

    const btnRevisar = ejercicio.querySelector('.btn-revisar');
    const btnReiniciar = ejercicio.querySelector('.btn-reiniciar');
    const selects = ejercicio.querySelectorAll('.article-select');

    function revisarRespuestas() {
        let correctas = 0;
        let total = selects.length;

        selects.forEach(select => {
            const respuestaCorrecta = select.getAttribute('data-correct');
            const respuestaUsuario = select.value;

            // Remover clases previas
            select.classList.remove('correct', 'incorrect');

            if (respuestaUsuario === respuestaCorrecta) {
                select.classList.add('correct');
                correctas++;
            } else {
                select.classList.add('incorrect');
            }
        });

        // Mostrar resultado
        alert(`Has acertado ${correctas} de ${total} respuestas.`);
    }

    function reiniciarEjercicio() {
        selects.forEach(select => {
            select.selectedIndex = 0;
            select.classList.remove('correct', 'incorrect');
        });
    }

    // Event listeners
    btnRevisar.addEventListener('click', revisarRespuestas);
    btnReiniciar.addEventListener('click', reiniciarEjercicio);
});