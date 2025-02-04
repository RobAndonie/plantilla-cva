// Constantes para las respuestas correctas
const CORRECT_ANSWERS = {
  q1: 'b',
  q2: 'b',
  q3: 'a'
};

// Variables globales
let currentQuestion = 'intro';
let score = 0;

// Función para ir a la siguiente pregunta
function nextQuestion() {
  const questions = ['intro', 'q1', 'q2', 'q3', 'results'];
  const currentIndex = questions.indexOf(currentQuestion);
  
  if (currentIndex < questions.length - 1) {
      document.getElementById(currentQuestion).classList.remove('active');
      currentQuestion = questions[currentIndex + 1];
      document.getElementById(currentQuestion).classList.add('active');
      updateProgressBar(currentIndex + 1);
  }
}

// Función para ir a la pregunta anterior
function prevQuestion() {
  const questions = ['intro', 'q1', 'q2', 'q3', 'results'];
  const currentIndex = questions.indexOf(currentQuestion);
  
  if (currentIndex > 0) {
      document.getElementById(currentQuestion).classList.remove('active');
      currentQuestion = questions[currentIndex - 1];
      document.getElementById(currentQuestion).classList.add('active');
      updateProgressBar(currentIndex - 1);
  }
}

// Función para actualizar la barra de progreso
function updateProgressBar(step) {
  const progressSteps = document.querySelectorAll('.progress-step');
  progressSteps.forEach((stepEl, index) => {
      if (index <= step) {
          stepEl.classList.add('active');
      } else {
          stepEl.classList.remove('active');
      }
  });
}

// Función para enviar el quiz
function submitQuiz() {
  score = 0;
  
  // Verificar cada pregunta
  for (let i = 1; i <= 3; i++) {
      const selectedAnswer = document.querySelector(`input[name="q${i}"]:checked`);
      if (selectedAnswer && selectedAnswer.value === CORRECT_ANSWERS[`q${i}`]) {
          score++;
      }
  }
  
  // Mostrar resultados
  document.getElementById('score').textContent = score;
  
  // Mensaje personalizado según la puntuación
  const scoreMessage = document.getElementById('scoreMessage');
  if (score === 3) {
      scoreMessage.innerHTML = `
          <img src="../../images/happy.png" alt="iconhappy" class="imgemoji" height="200px" />
          <p>¡Excelente! Tienes un buen conocimiento sobre el cambio climático.</p>
          <div class="surprise">
              <button class="confettibu">Celebra</button>
          </div>
      `;
      // Agregar evento para el confetti
      document.getElementsByClassName('confettibu')[0].addEventListener('click', () => {
          const duration = 15 * 1000,
          animationEnd = Date.now() + duration,
          defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

          function randomInRange(min, max) {
              return Math.random() * (max - min) + min;
          }

          const interval = setInterval(function() {
              const timeLeft = animationEnd - Date.now();

              if (timeLeft <= 0) {
                  return clearInterval(interval);
              }

              const particleCount = 50 * (timeLeft / duration);
              confetti(Object.assign({}, defaults, {
                  particleCount,
                  origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
              }));

              confetti(Object.assign({}, defaults, {
                  particleCount,
                  origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
              }));
          }, 250);
      });
  } else if (score === 2) {
      scoreMessage.innerHTML = `
          <img src="../../images/think.png" alt="iconthink" class="imgemoji" height="200px" />
          <p>¡Buen trabajo! Hay algunas áreas que podemos reforzar.</p>
      `;
  } else {
      scoreMessage.innerHTML = `
          <img src="../../images/sad.png" alt="iconsad" class="imgemoji" height="200px" />
          <p>Este curso te ayudará a comprender mejor el cambio climático. ¡Revisa las respuestas correctas y vuelve a intentarlo!</p>
      `;
  
  // Mostrar pantalla de resultados
  document.getElementById(currentQuestion).classList.remove('active');
  document.getElementById('results').classList.add('active');
  currentQuestion = 'results';
  
  // Agregar botón de siguiente ejercicio
  const navigationDiv = document.querySelector('#results .navigation');
  navigationDiv.style.display = 'flex';
  navigationDiv.style.justifyContent = 'space-between';
  if (!document.getElementById('next-lesson')) {
      const nextLessonButton = document.createElement('button');
      nextLessonButton.id = 'next-lesson';
      nextLessonButton.className = 'btn-next';
      nextLessonButton.textContent = 'Siguiente ejercicio';
      nextLessonButton.onclick = () => {
          window.location.href = '/modulos/modulo_1/leccion1_7.html';
      };
      navigationDiv.appendChild(nextLessonButton);
  }
}

// Función para revisar las respuestas
function reviewQuiz() {
  document.getElementById('results').classList.remove('active');
  document.getElementById('q1').classList.add('active');
  currentQuestion = 'q1';
  updateProgressBar(1);
}

// Event listeners para las respuestas
document.querySelectorAll('input[type="radio"]').forEach(radio => {
  radio.addEventListener('change', () => {
      const questionDiv = radio.closest('.question');
      const feedback = questionDiv.querySelector('.feedback');
      feedback.textContent = ''; // Limpiar feedback anterior
  });
});}