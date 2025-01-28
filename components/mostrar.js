function mostrarTexto() {
    var texto = document.getElementById("texto");
    if (texto.style.display === "none") {
        texto.style.display = "block"; // Muestra el texto si está oculto
    } else {
        texto.style.display = "none"; // Oculta el texto si ya está visible
    }
}
