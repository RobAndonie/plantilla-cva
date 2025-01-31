class MobileNav extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
            <header class="mobile-nav-header">
                <div class="mobile-nav-logo-container">
                    <img class="mobile-nav-logo" src="../../images/tec_blanco.png" width="120px">
                    <img class="mobile-nav-logo" src="../../images/LOGOTIPO CVA BLANCO.png" width="150px">
                </div>
                <button class="mobile-menu-toggle" aria-label="Toggle navigation">
                    ☰
                </button>
                <nav class="mobile-nav-menu">
                  <a href="${basePath}index.html">Menú</a>
                    <a href="${basePath}modulos/modulo_0/aprendizaje.html">Objetivos</a>
                    <a href="${basePath}modulos/modulo_0/metodologia.html">Metodología</a>
                    <a href="${basePath}modulos/modulo_0/evaluacion.html">Políticas de Evaluación</a>
                    <div class="nav-search">
                    <form id="search-form">
                        <div class="nav-input-container">
                            <img src="../../images/lupa.png" class="nav-icon" alt="Lupa">
                            <input type="text" placeholder="Buscar..." id="input-box" autocomplete="off">
                            <a id="dynamic-link" href="#" class="button">Enviar</a>
                        </div>
                        <div class="result-box"></div>
                    </form>
                </div>
                </nav>
            </header>
        `;

    this.initMenuToggle();
    this.initAutocomplete();
  }

  initMenuToggle() {
    const menuToggle = this.querySelector(".mobile-menu-toggle");
    const menu = this.querySelector(".mobile-nav-menu");

    menuToggle.addEventListener("click", () => {
      menu.classList.toggle("active");
    });

    // Close menu when clicking outside
    document.addEventListener("click", (event) => {
      if (!this.contains(event.target) && menu.classList.contains("active")) {
        menu.classList.remove("active");
      }
    });
  }

  initAutocomplete() {
    const availableKeyWords = [
      {
        keyword: "¿Qué es el cambio climático?",
        link: "../../modulos/modulo_1/introduccion.html",
      },
      {
        keyword: "Los impactos globales del cambio climático",
        link: "../../modulos/modulo_1/impactglobal1-10.html",
      },
      {
        keyword: "Justicia climática",
        link: "../../modulos/modulo_1/introduccion.html",
      },
      {
        keyword: "Es algo natural...¿No es así?",
        link: "../../modulos/modulo_1/introduccion.html",
      },
    ];

    const resultsBox = this.querySelector(".result-box");
    const inputBox = this.querySelector("#input-box");
    const dynamicLink = this.querySelector("#dynamic-link");

    inputBox.onkeyup = () => {
      let result = [];
      const input = inputBox.value;

      if (input.length) {
        result = availableKeyWords.filter((item) => {
          return item.keyword.toLowerCase().includes(input.toLowerCase());
        });
      }

      display(result);

      if (result.length === 1) {
        dynamicLink.href = result[0].link;
        dynamicLink.style.pointerEvents = "auto";
      } else {
        dynamicLink.href = "#";
        dynamicLink.style.pointerEvents = "none";
      }
    };

    const display = (result) => {
      const content = result.map((item) => `<li>${item.keyword}</li>`);
      resultsBox.innerHTML = "<ul>" + content.join("") + "</ul>";

      const allItems = resultsBox.querySelectorAll("li");
      allItems.forEach((item) => {
        item.addEventListener("click", () => selectInput(item));
      });
    };

    const selectInput = (list) => {
      inputBox.value = list.innerHTML;
      resultsBox.innerHTML = "";

      const selected = availableKeyWords.find(
        (item) => item.keyword === list.innerHTML
      );
      if (selected) {
        dynamicLink.href = selected.link;
        dynamicLink.style.pointerEvents = "auto";
      }
    };

    dynamicLink.addEventListener("click", (event) => {
      event.preventDefault();
      const inputValue = inputBox.value;

      const selected = availableKeyWords.find(
        (item) => item.keyword === inputValue
      );
      if (selected) {
        window.location.href = selected.link;
      } else {
        alert("No se encontró el curso ingresado.");
      }
    });
  }
}

customElements.define("mobile-nav", MobileNav);
