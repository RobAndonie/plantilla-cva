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
                    <form>
                        <div class="nav-input-container">
                        <img src="../../images/lupa.png" class="nav-icon" alt="Lupa">
                        <input type="text" placeholder="Busca un curso">
                        <button type="submit">Enviar</button>

                        </div>
                    </form>
                    </div>
            </header>
        `;
  }
}
customElements.define("nav-bar", NavBar);
