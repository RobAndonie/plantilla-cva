class SideBar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
          <div class="sidebar-container">
              <button class="sidebar-toggle">
                <span class="material-symbols-outlined">menu</span>
              </button>
              
              <div class="sidebar">
                  <h2>Módulos</h2>
                  <ul class="sidebar-list">
                      <li class="sidebar-module">
                          <div class="sidebar-module-header">
                              <span class="sidebar-module-num">Módulo 1</span>
                              <div class="sidebar-module-name">
                                  <h4>Introducción al cambio climatico</h4>
                                  <span class="material-symbols-outlined">keyboard_arrow_down</span>
                              </div>
                          </div>
                          <ul class="sidebar-module-lessons">
                            <li><a href="../modulo_1/leccion1_1.html">Lección 1: Introducción al Curso</a></li>
                            <li><a href="../modulo_1/leccion1_2.html">Colaboradores</a></li>
                            <li><a href="../modulo_1/leccion1_3.html">Conoce al equipo</a></li>
                            <li><a href="../modulo_1/leccion1_4.html">Presentaciones </a></li>
                            <li><a href="../modulo_1/leccion1_5.html">Lección 5: Bienvenidos a la semana 1</a></li>
                            <li><a href="../modulo_1/leccion1_6.html">Lección 6: Quiz: Cuestionario de inicio</a></li>
                            <li><a href="../modulo_1/leccion1_7.html">Lección 7: ¿Qué es el cambio climático?</a></li>
                            <li><a href="../modulo_1/leccion1_8.html">Lección 8: ¿Qué dicen los científicos?</a></li>
                            <li><a href="../modulo_1/leccion1_9.html">Lección 9: ¿Por qué debe importarnos?</a></li>
                            <li><a href="../modulo_1/leccion1_10.html">Lección 10: Cambio climático global pero distribuido de manera desigual</a></li>
                            <li><a href="../modulo_1/leccion1_10video.html">Video lección 10: Cambio climático global pero distribuido de manera desigual</a></li>
                            <li><a href="../modulo_1/leccion1_11.html">Lección 11: Impulsores, cambios e impactos</a></li>
                            <li><a href="../modulo_1/leccion1_12.html">Lección 12: Impactos climáticos en los sistemas naturales</a></li>
                            <li><a href="../modulo_1/leccion1_13.html">Lección 13: Impactos climáticos en sistemas humanos</a></li>
                            <li><a href="../modulo_1/leccion1_14.html">Lección 14: ¿A quién afecta el cambio climático?</a></li>
                            <li><a href="../modulo_1/leccion1_15.html">Lección 15: ¿Quién es responsable del cambio climático?</a></li>
                            <li><a href="../modulo_1/leccion1_16.html">Lección 16: Explicación de la justicia climática</a></li>
                            <li><a href="../modulo_1/leccion1_17.html">Lección 17: Cuatro imperativos para la acción</a></li>
                            <li><a href="../modulo_1/quiz.html">Quiz: ¿Qué has aprendido? </a></li>
                          </ul>
                      </li>
    
                      <li class="sidebar-module">
                          <div class="sidebar-module-header">
                              <span class="sidebar-module-num">Módulo 2</span>
                              <div class="sidebar-module-name">
                                  <h4>Conceptos Básicos</h4>
                                  <span class="material-symbols-outlined">keyboard_arrow_down</span>
                              </div>
                          </div>
                          <ul class="sidebar-module-lessons">
                              <li><a href="../modulo_2/conceptos.html">Lección 1: Fundamentos</a></li>
                              <li><a href="../modulo_2/sintaxis.html">Lección 2: Sintaxis</a></li>
                              <li><a href="../modulo_2/ejemplos.html">Lección 3: Ejemplos Prácticos</a></li>
                          </ul>
                      </li>
    
                      <li class="sidebar-module">
                          <div class="sidebar-module-header">
                          <span class="sidebar-module-num">Módulo 3</span>
                              <div class="sidebar-module-name">
                                  <h4>Ejercicios Prácticos</h4>
                                  <span class="material-symbols-outlined">keyboard_arrow_down</span>
                                  </div>
                          </div>
                          <ul class="sidebar-module-lessons">
                              <li><a href="../modulo_3/ejercicio1.html">Lección 1: Resolviendo Problemas</a></li>
                              <li><a href="../modulo_3/ejercicio2.html">Lección 2: Aplicaciones</a></li>
                              <li><a href="../modulo_3/ej3.html">Ejercicio 3: Relaciona imagen con concepto</a></li>
                              <li><a href="../modulo_3/Ejercicio4.html">Ejercicio 3: Juego de Memoria: Encuentra los pares</a></li>

                          </ul>
                      </li>
                  </ul>
              </div>

            </div>
            `;

    // JavaScript for accordion behavior
    const headers = this.querySelectorAll(".sidebar-module-header");
    headers.forEach((header) => {
      header.addEventListener("click", () => {
        const lessons = header.nextElementSibling;
        const isActive = header.classList.contains("active");
        const icon = header.querySelector(".material-symbols-outlined");

        // Toggle active class and arrow direction
        if (isActive) {
          header.classList.remove("active");
          icon.textContent = "keyboard_arrow_down";
          lessons.style.maxHeight = null;
        } else {
          header.classList.add("active");
          icon.textContent = "keyboard_arrow_up";
          lessons.style.maxHeight = lessons.scrollHeight + "px";
        }
      });
    });

    const sidebar = this.querySelector(".sidebar");
    const toggleButton = this.querySelector(".sidebar-toggle");

    toggleButton.addEventListener("click", () => {
      sidebar.classList.toggle("active");
    });
  }
}

customElements.define("side-bar", SideBar);
