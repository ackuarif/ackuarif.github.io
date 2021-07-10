import './fav-button';

class DetailItem extends HTMLElement {
  constructor() {
    super();
    this.datas = JSON.parse(this.getAttribute('datas')) || null;
  }

  connectedCallback() {
    this.render();

    let i = 1;
    this.datas.categories.forEach((element) => {
      this.querySelector('#categories_menu').innerHTML += `${i}. ${element.name}<br>`;
      i += 1;
    });

    i = 1;
    this.datas.menus.foods.forEach((element) => {
      this.querySelector('#foods_menu').innerHTML += `${i}. ${element.name}<br>`;
      i += 1;
    });

    i = 1;
    this.datas.menus.drinks.forEach((element) => {
      this.querySelector('#drinks_menu').innerHTML += `${i}. ${element.name}<br>`;
      i += 1;
    });

    this.datas.customerReviews.forEach((element) => {
      this.querySelector('#review_customer').innerHTML += `
        <hr>
        <b>${element.name}</b><br>
        ${element.review}<br>
        <sup>${element.date}</sup>
      `;
    });
  }

  async render() {
    this.innerHTML = `
      <div class="card">
        <img class="post-item__thumbnail"
        src="https://restaurant-api.dicoding.dev/images/medium/${this.datas.pictureId}"
        alt="${this.datas.name}">
        <div class="container">
          <fav-button restoId='${JSON.stringify({ id: this.datas.id })}'></fav-button>
          <p class="post-detail__description">Restoran</p>
          <h1 class="post-detail__title">${this.datas.name}</h1>
          <p class="post-detail__description">Alamat Lengkap</p>
          <h1 class="post-detail__title">${this.datas.address} ${this.datas.city}</h1>
          <p class="post-detail__description">Kategori Menu</p>
          <h1 class="post-detail__title" id="categories_menu"></h1>
          <p class="post-detail__description">Menu Makanan</p>
          <h1 class="post-detail__title" id="foods_menu"></h1>
          <p class="post-detail__description">Menu Minuman</p>
          <h1 class="post-detail__title" id="drinks_menu"></h1>
          <p class="post-detail__description">Rating</p>
          <h1 class="post-detail__title">${this.datas.rating}</h1>
          <p class="post-detail__description">Review Customer</p><br>
          <p id="review_customer"></p>
        </div>
      </div> 
    `;
  }
}

customElements.define('detail-item', DetailItem);
