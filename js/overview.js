document.addEventListener("DOMContentLoaded", () => {
  // Botones de la sección de detalles
  const buttons = document.querySelectorAll(".overview-details-btns button");
  const contentArea = document.querySelector(".overview-details-content");

  // Contenido dinámico asociado a cada botón
  const content = {
    description: `
        <h3>¡Bienvenido al curso!</h3>
        <p>
        Explora los impactos del cambio climático con un enfoque específico en los riesgos y desafíos que enfrenta México. Este curso de cinco semanas te permitirá comprender la ciencia climática, investigar los contextos científicos, políticos y comerciales del cambio climático, y descubrir cómo las personas pueden tomar medidas para abordar la crisis climática. Analizarás cómo el cambio climático afecta a todo el planeta pero sus impactos varían significativamente de un país a otro, con especial atención en el contexto mexicano.
        </p>
      `,
    "learning-outcomes": `
        <h3>Resultados de aprendizaje</h3>
        <p>
          Al finalizar este curso, serás capaz de:
        </p>
        <ul>
          <li>Explicar lo que es el cambio climático global y cómo abordarlo, desarrollando una comprensión profunda de la ciencia climática y sus implicaciones.</li>
          <li>Resumir el contexto político y empresarial del cambio climático global, entendiendo las estrategias de gestión de riesgos de México.</li>
          <li>Describir el clima actual de México y analizar cómo el cambio climático ya ha impactado y seguirá impactando al país.</li>
          <li>Identificar cómo todos, incluidos los jóvenes, pueden impulsar acciones y tomar medidas por sí mismos para abordar la crisis climática</li>
          <li>Evaluar los impactos del cambio climático utilizando modelos climáticos y comprender las estrategias de mitigación y adaptación</li>
        </ul>
      `,
      additionalresources: `
      <h3>Recursos sobre Soluciones al Cambio Climático en México</h3>
      <h4>Libros y Publicaciones</h4>
      <ul>
        <li>
          <strong>"México y el cambio climático global"</strong><br>
          Este libro de divulgación científica, escrito por la Dra. Cecilia Conde, ofrece una comprensión detallada del cambio climático, sus causas, características y posibles efectos, así como las acciones que se están planteando para enfrentarlo en México.<br>
          <a href="https://biblioteca.semarnat.gob.mx/janium/Documentos/Cecadesu/Libros/Mexico%20y%20el%20cambio%20climatico.pdf" target="_blank" class="resource-link">
            <span class="material-symbols-outlined">menu_book</span>
            Ver libro
          </a>
        </li>
        <li>
          <strong>"Cambio Climático: una visión desde México"</strong><br>
          Coordinado por el Instituto Nacional de Ecología, este libro aborda desde la teoría del cambio climático hasta estudios específicos realizados en México, analizando la vulnerabilidad de diferentes sectores y evaluando opciones de mitigación y adaptación.<br>
          <a href="https://www.ccmss.org.mx/wp-content/uploads/2014/10/Cambio_Climatico_una_vision_desde_Mexico.pdf" target="_blank" class="resource-link">
            <span class="material-symbols-outlined">menu_book</span>
            Ver libro
          </a>
        </li>
        <li>
          <strong>"México frente al cambio climático: retos y oportunidades"</strong><br>
          Esta obra, coordinada por Gian Carlo Delgado y otros expertos, analiza los desafíos y oportunidades que enfrenta México ante el cambio climático, incluyendo estrategias de mitigación y adaptación en diversos sectores.<br>
          <a href="https://biblioteca.clacso.edu.ar/Mexico/ceiich-unam/20170502052756/pdf_1468.pdf" target="_blank" class="resource-link">
            <span class="material-symbols-outlined">menu_book</span>
            Ver libro
          </a>
        </li>
      </ul>
      <h4>Informes y Estrategias Nacionales</h4>
      <ul>
        <li>
          <strong>Estrategia Nacional de Cambio Climático. Visión 10-20-40</strong><br>
          Este documento del Gobierno de México establece las acciones y metas a corto, mediano y largo plazo para enfrentar el cambio climático, incluyendo medidas de mitigación y adaptación en distintos sectores.<br>
          <a href="https://www.gob.mx/cms/uploads/attachment/file/41978/Estrategia-Nacional-Cambio-Climatico-2013.pdf" target="_blank" class="resource-link">
            <span class="material-symbols-outlined">description</span>
            Ver documento
          </a>
        </li>
        <li>
          <strong>"Medidas de adaptación y mitigación frente al cambio climático en México"</strong><br>
          Este informe de la CEPAL analiza las políticas y acciones implementadas en México para hacer frente al cambio climático, ofreciendo recomendaciones para fortalecer las estrategias actuales.<br>
          <a href="https://repositorio.cepal.org/server/api/core/bitstreams/889969d0-e5a0-48cf-a01d-54432324a595/content" target="_blank" class="resource-link">
            <span class="material-symbols-outlined">description</span>
            Ver documento
          </a>
        </li>
      </ul>
      <h4>Artículos y Noticias Relevantes</h4>
      <ul>
        <li>
          <strong>"La regeneración natural de bosques, una oportunidad de mitigación climática para México"</strong><br>
          Un estudio reciente destaca la eficacia de la regeneración natural de bosques como una solución rentable y efectiva para mitigar el cambio climático en México.<br>
          <a href="https://elpais.com/mexico/2024-11-21/la-regeneracion-natural-de-bosques-una-oportunidad-de-mitigacion-climatica-para-mexico.html" target="_blank" class="resource-link">
            <span class="material-symbols-outlined">article</span>
            Ver artículo
          </a>
        </li>
        <li>
          <strong>"México podría estar en la cúspide de una de sus mayores transformaciones en décadas"</strong><br>
          Este artículo analiza las políticas y estrategias que México está implementando para avanzar en la mitigación del cambio climático y la transición hacia energías renovables.<br>
          <a href="https://www.vox.com/climate/380408/mexico-podria-estar-en-la-cuspide-de-una-de-sus-mayores-transformaciones-en-decadas" target="_blank" class="resource-link">
            <span class="material-symbols-outlined">article</span>
            Ver artículo
          </a>
        </li>
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
    const h3 = header.querySelector('h3'); // Obtener el h3 existente
    const title = h3.textContent; // Guardar el texto del título

    header.innerHTML = `<span class="material-symbols-outlined">
                        keyboard_arrow_down
                      </span>
                      <h3>${title}</h3>`;

    header.addEventListener("click", () => {
      const content = header.nextElementSibling;
      const isActive = header.classList.contains("active");

      if (isActive) {
        header.classList.remove("active");
        content.style.display = "none";
        header.innerHTML = `<span class="material-symbols-outlined">
                keyboard_arrow_down
              </span> <h3>${title}</h3>`; // Usar la variable title
      } else {
        header.classList.add("active");
        content.style.display = "block";
        header.innerHTML = `<span class="material-symbols-outlined">
                keyboard_arrow_up
              </span> <h3>${title}</h3>`; // Usar la variable title
      }
    });
});
});

function compartirCurso() {
  // Obtener la URL actual
  const url = window.location.href;
  
  // Copiar al portapapeles
  navigator.clipboard.writeText(url).then(() => {
      // Crear y mostrar el toast de confirmación
      const toast = document.createElement('div');
      toast.className = 'toast';
      toast.textContent = '¡Enlace copiado al portapapeles!';
      document.body.appendChild(toast);
      
      // Mostrar el toast
      setTimeout(() => toast.classList.add('show'), 100);
      
      // Eliminar el toast después de 3 segundos
      setTimeout(() => {
          toast.classList.remove('show');
          setTimeout(() => document.body.removeChild(toast), 300);
      }, 3000);
  }).catch(err => {
      console.error('Error al copiar:', err);
  });
}
