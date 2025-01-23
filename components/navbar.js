class NavBar extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `
            <header class="header">
                <div class="logo-container">
                    <img class="logo" src="../../images/CVA LOGOTIPO.png"
                    width="200px" height="40">
                    <img class="logo" src="../../images/logo_largo.png"
                    width="150px" height="40">
                </div>
                <nav class="navbar">
                    <a href="#">Menu</a>
                    <a href="#">Objetivos</a>
                    <a href="#">Metodología</a>
                    <a href="#">Políticas de Evaluación</a>
                </nav>
                    <div class="search">
                    <form>
                        <div class="input-container">
                        <img src="../../images/lupa.png" class="icon" alt="Lupa">
                        <input type="text" placeholder="Busca un curso">
                        <button type="submit">Enviar</button>

                        </div>
                    </form>
                    </div>
            </header>
        `;
    }
}
customElements.define('nav-bar', NavBar);