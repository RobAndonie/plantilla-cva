class Footer extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
            <footer class="footer">
                <nav class="footer-nav">
                    <a href="#">Políticas de Privacidad</a>
                    <a href="#">Aviso de Privacidad</a>
                    <a href="#">Contáctanos</a>
                    <a href="#">Créditos</a>
                </nav>
            </footer>
        `;
  }
}
customElements.define("footer-comp", Footer);
