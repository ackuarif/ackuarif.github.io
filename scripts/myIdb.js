import { openDB } from 'idb/with-async-ittr';

export default class MyIdb {
  constructor() {
    this.main();
  }

  async main() {
    await this.setArgs();
  }

  async setArgs() {
    this.db = 'my-resto';
    this.openDB = openDB(this.db, 1, {
      upgrade(db) {
        db.createObjectStore('favorite_resto', {
          keyPath: 'id',
        });
      },
    });
  }

  async insert(args) {
    const {
      objStore,
      data,
    } = args;
    return (await this.openDB).put(objStore, data);
  }

  async getById(args) {
    const {
      objStore,
      id,
    } = args;
    return (await this.openDB).get(objStore, id);
  }

  async delById(args) {
    const {
      objStore,
      id,
    } = args;
    return (await this.openDB).delete(objStore, id);
  }

  async getAll(objStore) {
    return (await this.openDB).getAll(objStore);
  }
}
