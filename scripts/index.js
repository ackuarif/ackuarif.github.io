import 'regenerator-runtime';
import '../styles/main.css';
import '../styles/responsive.css';
import '../components/card-item';
import '../components/header-item';
import '../components/menu-item';
import '../components/hero-item';
import '../components/footer-item';
import env from './env';
import './reg-pwa';

const getResto = async () => {
  const data = await fetch(`${env.API_ADDRESS}/list`);
  const resto = await data.json();
  document.querySelector('.posts').innerHTML = '';
  resto.restaurants.forEach(async (arr) => {
    const datas = JSON.stringify(arr);
    document.querySelector('.posts').innerHTML += `
      <card-item class='post-item'
        datas='${datas}' 
      ></card-item>`;
  });
};

document.addEventListener('DOMContentLoaded', async () => {
  await getResto();
});
