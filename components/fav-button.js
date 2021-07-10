import MyIdb from '../scripts/myIdb';

class FavButton extends HTMLElement {
  connectedCallback() {
    this.myIdb = new MyIdb();
    this.restoId = JSON.parse(this.getAttribute('restoId')) || null;
    this.render();
  }

  async insertFavorite() {
    await this.myIdb.insert({
      objStore: 'favorite_resto',
      data: {
        id: this.restoId.id,
      },
    });
    await this.render();
  }

  async delFavorite() {
    await this.myIdb.delById({
      objStore: 'favorite_resto',
      id: this.restoId.id,
    });
    await this.render();
  }

  async isFavoriteById() {
    const restaurant = await this.myIdb.getById({
      objStore: 'favorite_resto',
      id: this.restoId.id,
    });
    return !!restaurant;
  }

  async render() {
    if (await this.isFavoriteById()) {
      this.renderFavorited();
    } else {
      this.renderFavorite();
    }
  }

  renderFavorited() {
    this.innerHTML = `
      <button
        id="delete-button"
        class="headline__button"
        aria-label="hapus favorite">Hapus Favorite</button>
    `;

    const deleteButton = this.querySelector('#delete-button');
    deleteButton.addEventListener('click', async () => {
      await this.delFavorite();
    });
  }

  renderFavorite() {
    this.innerHTML = `
      <button
        id="add-button"
        class="headline__button"
        aria-label="tambah favorite">Tambah Favorite</button>
    `;

    const addButton = this.querySelector('#add-button');
    addButton.addEventListener('click', async () => {
      await this.insertFavorite();
    });
  }
}

customElements.define('fav-button', FavButton);
