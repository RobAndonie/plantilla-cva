document.addEventListener("DOMContentLoaded", () => {
  // Botones de la sección de detalles
  const buttons = document.querySelectorAll(".overview-details-btns button");
  const contentArea = document.querySelector(".overview-details-content");

  // Contenido dinámico asociado a cada botón
  const content = {
    description: `
        <h3>¡Bienvenido al curso!</h3>
        <p>
          Aprende los fundamentos de la programación y la lógica de la programación
          con este curso. Aprenderás a programar en Python y JavaScript, dos de
          los lenguajes de programación más populares y versátiles.
        </p>
        <h4>Lo que aprenderás</h4>
        <ul>
          <li>Programación en Python y JavaScript</li>
          <li>Fundamentos de la programación</li>
          <li>Desarrollo de habilidades de resolución de problemas</li>
        </ul>
      `,
    objectives: `
        <h3>Objetivos del curso</h3>
        <p>
          Este curso tiene como objetivo desarrollar tus habilidades en programación,
          preparándote para resolver problemas computacionales.
        </p>
        <ul>
          <li>Comprender la lógica de programación</li>
          <li>Escribir código limpio y eficiente</li>
          <li>Resolver problemas prácticos con programación</li>
        </ul>
      `,
    "concept-map": `
        <h3>Mapa conceptual</h3>
        <p>
          Aquí se mostrará un esquema gráfico que describe las relaciones entre
          los conceptos clave del curso.
        </p>
      `,
    "learning-outcomes": `
        <h3>Resultados de aprendizaje</h3>
        <p>
          Al finalizar este curso, serás capaz de:
        </p>
        <ul>
          <li>Escribir programas básicos en Python y JavaScript</li>
          <li>Identificar y aplicar conceptos fundamentales de programación</li>
          <li>Resolver problemas computacionales usando algoritmos</li>
        </ul>
      `,
    policies: `
        <h3>Políticas del curso</h3>
        <p>
          Reglas y normativas para la participación en el curso:
        </p>
        <ul>
          <li>Asistencia requerida a sesiones en vivo</li>
          <li>Entrega puntual de tareas</li>
          <li>Respeto hacia los compañeros y los instructores</li>
        </ul>
      `,
  };

  // Mostrar el contenido inicial (Descripción)
  const defaultKey = "description"; // Clave por defecto
  const defaultButton = document.querySelector(
    `[data-content="${defaultKey}"]`
  );

  if (defaultButton) {
    defaultButton.classList.add("active");
    contentArea.innerHTML = content[defaultKey];
  }

  // Agregar evento a cada botón
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remover la clase activa de otros botones
      buttons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      // Cambiar el contenido del área principal
      const key = button.getAttribute("data-content");
      if (content[key]) contentArea.innerHTML = content[key];
    });
  });

  // Accordion de módulos
  const accordionHeaders = document.querySelectorAll(
    ".overview-modules-accordion-header"
  );

  accordionHeaders.forEach((header) => {
    const name = header.getAttribute("data-content");

    header.innerHTML = `<span class="material-symbols-outlined">
                        keyboard_arrow_down
                        </span>
                        <h3>${name}</h3>`;

    header.addEventListener("click", () => {
      const content = header.nextElementSibling;
      const isActive = header.classList.contains("active");

      if (isActive) {
        header.classList.remove("active");
        content.style.display = "none";
        header.innerHTML = `<span class="material-symbols-outlined">
                keyboard_arrow_down
              </span> <h3>${name}</h3>`;
      } else {
        header.classList.add("active");
        content.style.display = "block";

        header.innerHTML = `<span class="material-symbols-outlined">
                keyboard_arrow_up
              </span> <h3>${name}</h3>`;
      }
    });
  });
});
