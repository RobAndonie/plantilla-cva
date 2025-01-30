class NavBar extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const basePath = window.location.pathname.includes('/modulo_') ? '../../' : './';

        this.innerHTML = `
            <header class="nav-header">
                <div class="nav-logo-container">
                    <img class="nav-logo" src="${basePath}images/tec_blanco.png" width="150px">
                    <img class="nav-logo" src="${basePath}images/LOGOTIPO CVA BLANCO.png" width="200px">
                </div>

                <nav class="nav-navbar">
                    <a href="${basePath}index.html">Menú</a>
                    <a href="#">Objetivos</a>
                    <a href="#">Metodología</a>
                    <a href="#">Políticas de Evaluación</a>
                </nav>
                <div class="nav-search">
                    <form id="search-form">
                        <div class="nav-input-container">
                            <img src="${basePath}images/lupa.png" class="nav-icon" alt="Lupa">
                            <input type="text" placeholder="Buscar..." id="input-box" autocomplete="off">
                            <a id="dynamic-link" href="#" class="button">Enviar</a>
                        </div>
                        <div class="result-box"></div>
                    </form>
                </div>
            </header>
        `;

        this.initAutocomplete(basePath);
    }

    initAutocomplete(basePath) {
        const availableKeyWords = [
            { keyword: 'Lección 1: Introducción al Curso', link: `${basePath}modulos/modulo_1/leccion1_1.html` },
            { keyword: 'Colaboradores', link: `${basePath}modulos/modulo_1/leccion1_2.html` },
            { keyword: 'Conoce al equipo', link: `${basePath}modulos/modulo_1/leccion1_3.html` },
            { keyword: 'Lección 4: Presentaciones', link: `${basePath}modulos/modulo_1/leccion1_4.html` },
            { keyword: 'Lección 5: Bienvenidos a la semana 1', link: `${basePath}modulos/modulo_1/leccion1_5.html` },
            { keyword: 'Quiz: Cuestionario de inicio', link: `${basePath}modulos/modulo_1/leccion1_6.html` },
            { keyword: 'Lección 7: ¿Qué es el cambio climático?', link: `${basePath}modulos/modulo_1/leccion1_7.html` },
            { keyword: 'Lección 8: ¿Qué dicen los científicos?', link: `${basePath}modulos/modulo_1/leccion1_8.html` },
            { keyword: 'Lección 9: ¿Por qué debe importarnos?', link: `${basePath}modulos/modulo_1/leccion1_9.html` },
            { keyword: 'Lección 10: Cambio climático global pero distribuido de manera desigual', link: `${basePath}modulos/modulo_1/leccion1_10.html` },
            { keyword: 'Lección 11: Impulsores, cambios e impactos', link: `${basePath}modulos/modulo_1/leccion1_11.html` },
            { keyword: 'Lección 12: Impactos climáticos en los sistemas naturales', link: `${basePath}modulos/modulo_1/leccion1_12.html` },
            { keyword: 'Lección 13: Impactos climáticos en sistemas humanos', link: `${basePath}modulos/modulo_1/leccion1_13.html` },
            { keyword: 'Lección 14: ¿A quién afecta el cambio climático?', link: `${basePath}modulos/modulo_1/leccion1_14.html` },
            { keyword: 'Lección 15: ¿Quién es responsable del cambio climático?', link: `${basePath}modulos/modulo_1/leccion1_15.html` },
            { keyword: 'Lección 16: Explicación de la justicia climática', link: `${basePath}modulos/modulo_1/leccion1_16.html` },
            { keyword: 'Lección 17: Cuatro imperativos para la acción', link: `${basePath}modulos/modulo_1/leccion1_17.html` },
            { keyword: 'Quiz: ¿Qué has aprendido?', link: `${basePath}modulos/modulo_1/quiz.html` }
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
            resultsBox.innerHTML = "<ul>" + content.join('') + "</ul>";

            const allItems = resultsBox.querySelectorAll("li");
            allItems.forEach((item) => {
                item.addEventListener("click", () => selectInput(item));
            });
        };

        const selectInput = (list) => {
            inputBox.value = list.innerHTML;
            resultsBox.innerHTML = '';

            const selected = availableKeyWords.find(item => item.keyword === list.innerHTML);
            if (selected) {
                dynamicLink.href = selected.link;
                dynamicLink.style.pointerEvents = "auto";
            }
        };

        dynamicLink.addEventListener("click", (event) => {
            event.preventDefault();
            const inputValue = inputBox.value;

            const selected = availableKeyWords.find(item => item.keyword === inputValue);
            if (selected) {
                window.location.href = selected.link;
            } else {
                alert("No se encontró el curso ingresado.");
            }
        });
    }
}

customElements.define('nav-bar', NavBar);
