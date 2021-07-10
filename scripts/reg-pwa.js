/* eslint-disable no-mixed-operators */
/* eslint-disable no-plusplus */
/* eslint-disable no-use-before-define */
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('../sw.js')
      .then((reg) => {
        if (reg.installing) {
          const sw = reg.installing || reg.waiting;
          sw.onstatechange = function () {
            if (sw.state === 'installed') {
              window.location.reload();
            }
          };
        }
        console.log('Pendaftaran ServiceWorker berhasil');
      })
      .catch(() => {
        console.log('Pendaftaran ServiceWorker gagal');
      });
  });
}
