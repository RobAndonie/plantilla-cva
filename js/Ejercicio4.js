document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".memory-card");
    const popupOverlay = document.getElementById("popupOverlay");
    const closePopupBtn = document.getElementById("closePopup");
    let firstCard, secondCard;
    let lockBoard = false;

    // Mostrar el popup al iniciar la página
    popupOverlay.style.display = "flex";

    // Cerrar el popup al hacer clic en el botón
    closePopupBtn.addEventListener("click", () => {
        popupOverlay.style.display = "none";
    });

    function flipCard() {
        if (lockBoard || this === firstCard) return;

        this.classList.add("flip");

        if (!firstCard) {
            firstCard = this;
            return;
        }

        secondCard = this;
        lockBoard = true;

        checkForMatch();
    }

    function checkForMatch() {
        let isMatch = firstCard.dataset.card === secondCard.dataset.card;

        isMatch ? disableCards() : unflipCards();
    }

    function disableCards() {
        firstCard.classList.add("matched");
        secondCard.classList.add("matched");
        firstCard.removeEventListener("click", flipCard);
        secondCard.removeEventListener("click", flipCard);
        resetBoard();
    }

    function unflipCards() {
        setTimeout(() => {
            firstCard.classList.remove("flip");
            secondCard.classList.remove("flip");
            resetBoard();
        }, 1000);
    }

    function resetBoard() {
        [firstCard, secondCard, lockBoard] = [null, null, false];
    }

    // Aleatorizar posiciones de las cartas
    (function shuffle() {
        cards.forEach(card => {
            let randomPos = Math.floor(Math.random() * cards.length);
            card.style.order = randomPos;
        });
    })();

    cards.forEach(card => card.addEventListener("click", flipCard));
});
