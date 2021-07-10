import 'regenerator-runtime';
import '../styles/main.css';
import '../styles/responsive.css';
import '../components/detail-item';
import '../components/hero-item';
import '../components/header-item';
import '../components/menu-item';
import '../components/footer-item';
import env from './env';
import './reg-pwa';

const getResto = async () => {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get('id');
  const data = await fetch(`${env.API_ADDRESS}/detail/${id}`);
  const resto = await data.json();
  document.querySelector('.posts').innerHTML = '';
  const datas = JSON.stringify(resto.restaurant);

  document.querySelector('.latest').innerHTML = `
    <detail-item class='post-detail'
      datas='${datas}'
    ></detail-item>`;
};

document.addEventListener('DOMContentLoaded', async () => {
  await getResto();
});
