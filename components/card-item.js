import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

class CardItem extends HTMLElement {
  constructor() {
    super();
    this.datas = JSON.parse(this.getAttribute('datas')) || null;
  }

  connectedCallback() {
    this.innerHTML = `
        <img class="post-item__thumbnail lazyload"
            data-src="https://restaurant-api.dicoding.dev/images/medium/${this.datas.pictureId}"
            alt="${this.datas.name}">
        <div class="post-item__content">
            <p class="post-item__date">LOKASI : <span class="post-item__date__author">${this.datas.city}</span> | Rating : ${this.datas.rating}
            </p>
            <h1 class="post-item__title"><a href="restaurant.html?id=${this.datas.id}">${this.datas.name}</a></h1>
            <p class="post-item__description">${this.datas.description.substring(0, 100)} ...</p>
        </div>
    `;
  }
}
customElements.define('card-item', CardItem);
