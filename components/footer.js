class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const basePath = window.location.pathname.includes('modulos') ? '../../' : './';

    this.innerHTML = `
      <footer class="footer">
          <div class="footer-container">
              <nav class="footer-nav">
                  <a href="https://tec.mx/es/politicas-de-privacidad-del-tecnologico-de-monterrey" target="_blank" rel="noopener noreferrer">Políticas de Privacidad</a>
                  <a href="https://tec.mx/es/aviso-privacidad-centro-virtual-aprendizaje" target="_blank" rel="noopener noreferrer">Aviso de Privacidad</a>
                  <a href="${basePath}modulos/modulo_0/contacto.html">Contáctanos</a>
                  <a href="${basePath}modulos/modulo_0/creditos.html">Créditos</a>
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