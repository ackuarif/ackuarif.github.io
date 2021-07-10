import 'regenerator-runtime';
import '../styles/main.css';
import '../styles/responsive.css';
import '../components/card-item';
import '../components/header-item';
import '../components/menu-item';
import '../components/hero-item';
import '../components/footer-item';
import env from './env';
import MyIdb from './myIdb';
import './reg-pwa';

const getResto = async () => {
  const MyIdbs = new MyIdb();
  const resto = await MyIdbs.getAll('favorite_resto');
  document.querySelector('.posts').innerHTML = '';
  if (resto.length > 0) {
    resto.forEach(async (arr) => {
      const reqData = await fetch(`${env.API_ADDRESS}/detail/${arr.id}`);
      const datas = await reqData.json();
      document.querySelector('.posts').innerHTML += `
        <card-item class='post-item'
            datas='${JSON.stringify(datas.restaurant)}'
        ></card-item>`;
    });
  } else {
    document.querySelector('.posts').innerHTML += 'Tidak ada favorit.';
  }
};

document.addEventListener('DOMContentLoaded', async () => {
  await getResto();
});
