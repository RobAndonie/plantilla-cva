class SideBar extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `
            <h2>Módulos</h2>
            <ul>
            <li><a href="../modulo_1/introduccion.html">Módulo 1: Introducción</a></li>
            <li><a href="#modulo2">Módulo 2: Conceptos Básicos</a></li>
            <li><a href="#modulo3">Módulo 3: Ejercicios Prácticos</a></li>
            <li><a href="#modulo4">Módulo 4: Evaluación</a></li>
            </ul>
        `;
    }
}
customElements.define('side-bar', SideBar);