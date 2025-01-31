let currentQuestion = 0;
const questions = document.querySelectorAll('.question');
const progressSteps = document.querySelectorAll('.progress-step');
const progressLines = document.querySelectorAll('.progress-line');

const correctAnswers = {
    'q1': 'b',
    'q2': 'c',
    'q3': 'a',
    'q4': 'b',
    'q5': 'a',
    'q6': 'b',
    'q7': 'c'
};

const feedback = {
    'q1': {
        'correct': 'Correcto! El calentamiento es desigual debido a varios factores geográficos y atmosféricos.',
        'incorrect': 'Incorrecto. Aunque los gases se distribuyen uniformemente, el calentamiento no es uniforme debido a factores como patrones de viento y geografía.'
    },
    'q2': {
        'correct': 'Correcto! Las comunidades marginadas son las más vulnerables a los impactos del cambio climático.',
        'incorrect': 'Incorrecto. Las mujeres, minorías étnicas y comunidades indígenas son los grupos más vulnerables a los impactos.'
    },
    'q3': {
        'correct': 'Correcto! El estrés por calor es un impacto directo que causó 166,000 muertes entre 1998 y 2017.',
        'incorrect': 'Incorrecto. El estrés por calor durante las olas de calor es un impacto directo documentado en el material.'
    },
    'q4': {
        'correct': 'Correcto! Los incendios forestales en Australia de 2019 causaron daños por 1.3 mil millones de dólares.',
        'incorrect': 'Incorrecto. Los incendios forestales en Australia de 2019 fueron los que causaron daños por 1.3 mil millones de dólares.'
    },
    'q5': {
        'correct': 'Correcto! El imperativo tecnológico no es uno de los cuatro imperativos mencionados.',
        'incorrect': 'Incorrecto. Los cuatro imperativos son: personal, moral, legal y económico.'
    },
    'q6': {
        'correct': 'Correcto! Las emisiones comenzaron en el Reino Unido durante la Revolución Industrial.',
        'incorrect': 'Incorrecto. Las emisiones significativas comenzaron en el Reino Unido durante la Revolución Industrial.'
    },
    'q7': {
        'correct': 'Correcto! Existe una gran desigualdad entre quienes causan el cambio climático y quienes sufren sus impactos.',
        'incorrect': 'Incorrecto. Las personas que menos contribuyen al cambio climático suelen ser las más afectadas.'
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
    checkAnswer('q7');
    
    const score = calculateScore();
    document.getElementById('score').textContent = score;
    
    const scoreMessage = document.getElementById('scoreMessage');
    
    if (score === 7) {
        scoreMessage.innerHTML = `
        <img src="../../images/happy.png" alt="iconhappy" class="center-image" 
        height="150px" />
        <p>¡Excelente! Tienes un entendimiento completo del tema.</p>
        <div class="surprise">
        <button class="confettibu">Celebra</button>
        </div>
        `;
        document.getElementsByClassName("confettibu")[0].addEventListener("click", () => {
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
                confetti(
                    Object.assign({}, defaults, {
                        particleCount,
                        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
                    })
                );

                confetti(
                    Object.assign({}, defaults, {
                        particleCount,
                        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
                    })
                );
            }, 250);
           });

    } else if (score >= 5) {
        scoreMessage.innerHTML = `
        <img src="../../images/happy.png" alt="iconhappy" class="center-image"
        height="150px" />
            <p>¡Muy buen trabajo! Has demostrado un buen conocimiento del tema.</p>
         <div class="surprise">
            <button class="confettibu">Celebra</button>
        </div>
        `;
        document.getElementsByClassName("confettibu")[0].addEventListener("click", () => {
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
                confetti(
                    Object.assign({}, defaults, {
                        particleCount,
                        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
                    })
                );

                confetti(
                    Object.assign({}, defaults, {
                        particleCount,
                        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
                    })
                );
            }, 250);
           });
        
    } else if (score >= 3) {
        scoreMessage.innerHTML = `
        <img src="../../images/think.png" alt="iconthink" class="center-image"
        height="150px" />
            <p>Buen intento. Hay algunas áreas que podrías revisar para entender mejor el tema así que vuelve a intentarlo.</p>
        `;
    } else {
        scoreMessage.innerHTML = `
        <img src="../../images/sad.png" alt="iconsad" class="center-image" 
        height="150px" />
        <p>Este quiz te ayudará a aprender más sobre el cambio climático. ¡Revisa las respuestas correctas y vuelve a intentarlo!</p>
        ` ;
    }
    showQuestion(questions.length - 1);
     } 

function reviewQuiz() {
    showQuestion(1);
}

showQuestion(0);