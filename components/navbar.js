class NavBar extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <header class="nav-header">
                <div class="nav-logo-container">
                    <img class="nav-logo" src="../../images/tec_blanco.png"
                    width="150px" >
                    <img class="nav-logo" src="../../images/CVA LOGOTIPO.png"
                    width="200px" >
                </div>

                <nav class="nav-navbar">
                    <a href="#">Menu</a>
                    <a href="#">Objetivos</a>
                    <a href="#">Metodología</a>
                    <a href="#">Políticas de Evaluación</a>
                </nav>
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
            </header>
        `;

        this.initAutocomplete();
    }

    initAutocomplete() {
        const availableKeyWords = [
            { keyword: '¿Qué es el cambio climático?', link: '../../modulos/modulo_1/introduccion.html' },
            { keyword: 'Los impactos globales del cambio climático', link: '../../modulos/modulo_1/impactglobal1-10.html' },
            { keyword: 'Justicia climática', link: '../../modulos/modulo_1/introduccion.html' },
            { keyword: 'Es algo natural...¿No es así?', link: '../../modulos/modulo_1/introduccion.html' },
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


