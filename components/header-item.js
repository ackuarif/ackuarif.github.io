class HeaderItem extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <a href="#maincontent" class="skip-link">Menuju ke konten</a>
        <header class="header">
            <div class="header__inner">
                <h1 class="header__title">
                    <button id="menu" class="header__menu">&#8801;</button>
                    AKA Resto
                </h1>
            </div>
        </header>
    `;

    this.querySelector('#menu').addEventListener('click', (event) => {
      document.querySelector('#drawer').classList.toggle('open');
      event.stopPropagation();
    });

    document.querySelector('main').addEventListener('click', () => {
      document.querySelector('#drawer').classList.remove('open');
    });
  }
}
customElements.define('header-item', HeaderItem);
