class MenuItem extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <nav id="drawer" class="nav">
            <ul class="nav__list">
                <li class="nav__item"><a href="/">Home</a></li>
                <li class="nav__item"><a href="favorite.html">Favorite</a></li>
                <li class="nav__item"><a href="https://id.linkedin.com/achmad-kumail-arif">About Us</a></li>
            </ul>
        </nav>
    `;
  }
}
customElements.define('menu-item', MenuItem);
