class FooterItem extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <footer>
            <ul>
                <li><span>Copyright &copy; 2021 - AKA Resto</span></li>
            </ul>
        </footer>
    `;
  }
}
customElements.define('footer-item', FooterItem);
