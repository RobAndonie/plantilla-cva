// js/main.js
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".sidebar ul li a");

  // Agregar un evento de clic a cada enlace
  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      // Resaltar la sección activa
      links.forEach((l) => l.classList.remove("active"));
      link.classList.add("active");

      // Desplazar al contenido correspondiente
      const target = document.querySelector(link.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});
