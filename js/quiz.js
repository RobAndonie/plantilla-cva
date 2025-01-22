let currentQuestion = 0;
const questions = document.querySelectorAll('.question');
const progressSteps = document.querySelectorAll('.progress-step');
const progressLines = document.querySelectorAll('.progress-line');

// Definir las respuestas correctas
const correctAnswers = {
    'q1': 'b',
    'q2': 'b',
    'q3': 'a'
};

// Definir retroalimentación para cada pregunta
const feedback = {
    'q1': {
        'correct': 'Correcto! Los gases de efecto invernadero atrapan el calor en la atmósfera.',
        'incorrect': 'Incorrecto. Los gases de efecto invernadero atrapan el calor en la atmósfera, no son cálidos por sí mismos.'
    },
    'q2': {
        'correct': 'Correcto! Los polos se están calentando más rápidamente.',
        'incorrect': 'Incorrecto. El cambio climático afecta diferentes regiones de manera distinta, con un calentamiento más rápido en los polos.'
    },
    'q3': {
        'correct': 'Correcto! El cambio climático causa tanto el aumento del nivel del mar como la acidificación.',
        'incorrect': 'Incorrecto. Los océanos se ven afectados tanto por el aumento del nivel del mar como por la acidificación.'
    }
};

function updateProgress() {
    progressSteps.forEach((step, index) => {
        if (index <= currentQuestion) {
            step.classList.add('active');
        } else {
            step.classList.remove('active');
        }
    });

    progressLines.forEach((line, index) => {
        if (index < currentQuestion) {
            line.classList.add('active');
        } else {
            line.classList.remove('active');
        }
    });
}

function showQuestion(n) {
    questions.forEach(q => q.classList.remove('active'));
    questions[n].classList.add('active');
    currentQuestion = n;
    updateProgress();
}

function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
        const currentQuestionId = questions[currentQuestion].id;
        if (currentQuestionId !== 'intro' && currentQuestionId !== 'results') {
            checkAnswer(currentQuestionId);
        }
        showQuestion(currentQuestion + 1);
    }
}

function prevQuestion() {
    if (currentQuestion > 0) {
        showQuestion(currentQuestion - 1);
    }
}

function checkAnswer(questionId) {
    const selectedAnswer = document.querySelector(`input[name="${questionId}"]:checked`);
    const questionContainer = document.getElementById(questionId);
    const feedbackElement = questionContainer.querySelector('.feedback');
    const options = questionContainer.querySelectorAll('.option');
    
    if (selectedAnswer) {
        const isCorrect = selectedAnswer.value === correctAnswers[questionId];
        
        options.forEach(option => {
            option.classList.remove('correct', 'incorrect');
            if (option.querySelector(`#${questionId}${correctAnswers[questionId]}`)) {
                option.classList.add('correct');
            } else if (option.querySelector(`#${questionId}${selectedAnswer.value}`)) {
                if (!isCorrect) {
                    option.classList.add('incorrect');
                }
            }
        });

        feedbackElement.textContent = isCorrect ? 
            feedback[questionId].correct : 
            feedback[questionId].incorrect;
        feedbackElement.className = `feedback ${isCorrect ? 'correct' : 'incorrect'}`;
        feedbackElement.style.display = 'block';
    }
}

function calculateScore() {
    let score = 0;
    Object.keys(correctAnswers).forEach(questionId => {
        const selectedAnswer = document.querySelector(`input[name="${questionId}"]:checked`);
        if (selectedAnswer && selectedAnswer.value === correctAnswers[questionId]) {
            score++;
        }
    });
    return score;
}

function submitQuiz() {
    // Verificar la última pregunta antes de mostrar resultados
    checkAnswer('q3');
    
    // Calcular puntuación
    const score = calculateScore();
    
    // Actualizar el marcador
    document.getElementById('score').textContent = score;
    
    // Mostrar mensaje según la puntuación
    const scoreMessage = document.getElementById('scoreMessage');
    if (score === 3) {
        scoreMessage.textContent = '¡Excelente! Tienes un buen entendimiento del cambio climático.';
    } else if (score === 2) {
        scoreMessage.textContent = '¡Buen trabajo! Has demostrado conocimiento sobre el cambio climático.';
    } else if (score === 1) {
        scoreMessage.textContent = 'Gracias por participar. Hay algunas áreas que podrías revisar para entender mejor el cambio climático.';
    } else {
        scoreMessage.textContent = 'Este quiz te ayudará a aprender más sobre el cambio climático. ¡Revisa las respuestas correctas!';
    }
    
    // Mostrar la página de resultados
    showQuestion(questions.length - 1);
}

function reviewQuiz() {
    // Volver a la primera pregunta para revisar
    showQuestion(1);
}

// Inicializar el quiz
showQuestion(0);