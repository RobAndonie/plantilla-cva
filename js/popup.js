document.addEventListener("DOMContentLoaded", function() {
    const popupOverlay = document.getElementById("popupOverlay");
    const closePopup = document.getElementById("closePopup");

    // Cierra el popup al hacer clic en el botón
    closePopup.addEventListener("click", function() {
        popupOverlay.classList.add("hidden");
    });
});
