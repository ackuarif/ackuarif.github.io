class HeroItem extends HTMLElement {
  constructor() {
    super();
    this.s_size = 600;
  }

  connectedCallback() {
    this.innerHTML = `
      <div class="hero">
          <div class="hero__inner">
              <h1 class="hero__title">Cari resto dengan cepat dan mudah</h1>
              <p class="hero__tagline">Pilih resto yang anda sukai dan anda akan menemukan resto terbaik anda.</p>
          </div>
      </div>
    `;

    this.querySelector('.hero').addEventListener('click', () => {
      document.querySelector('#drawer').classList.remove('open');
    });
  }
}
customElements.define('hero-item', HeroItem);
