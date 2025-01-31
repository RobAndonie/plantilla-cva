class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <footer class="footer">
          <div class="footer-container">
              <nav class="footer-nav">
                  <a href="#">Políticas de Privacidad</a>
                  <a href="#">Aviso de Privacidad</a>
                  <a href="#">Contáctanos</a>
                  <a href="#">Créditos</a>
              </nav>
              <div class="footer-info">
                  <p>&copy; ${new Date().getFullYear()} Todos los derechos reservados</p>
              </div>
          </div>
      </footer>
    `;
  }
}

customElements.define("footer-comp", Footer);
