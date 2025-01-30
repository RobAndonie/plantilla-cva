class Footer extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    const basePath = window.location.pathname.includes('modulos') ? '../../' : './';

    this.innerHTML = `
            <footer class="footer">
                <nav class="footer-nav">
                    <a href="https://tec.mx/es/politicas-de-privacidad-del-tecnologico-de-monterrey">Políticas de Privacidad</a>
                    <a href="https://tec.mx/es/aviso-privacidad-centro-virtual-aprendizaje">Aviso de Privacidad</a>
                    <a href="#">Contáctanos</a>
                    <a href="${basePath}modulos/modulo_0/creditos.html">Créditos</a>
                </nav>
            </footer>
        `;
  }
}
customElements.define("footer-comp", Footer);
