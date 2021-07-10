var serviceWorkerOption = {
  "assets": [
    "/defaultVendors~favorite~index~restaurant~d939e436.js",
    "/default~favorite~index~restaurant~7ac5d858.js",
    "/defaultVendors~favorite~index~80d50bd5.js",
    "/default~favorite~restaurant~31ecd969.js",
    "/favorite~7ac5d858.js",
    "/index~7ac5d858.js",
    "/restaurant~7ac5d858.js",
    "/components/card-item.js",
    "/components/detail-item.js",
    "/components/fav-button.js",
    "/components/footer-item.js",
    "/components/header-item.js",
    "/components/hero-item.js",
    "/components/menu-item.js",
    "/images/favicon.ico",
    "/images/icons.json",
    "/scripts/env.js",
    "/scripts/favorite.js",
    "/scripts/index.js",
    "/scripts/myIdb.js",
    "/scripts/reg-pwa.js",
    "/scripts/restaurant.js",
    "/styles/main.css",
    "/styles/responsive.css",
    "/templates/favorite.html",
    "/templates/index.html",
    "/templates/restaurant.html",
    "/images/icons/android-launchericon-144-144.png",
    "/images/icons/android-launchericon-192-192.png",
    "/images/icons/android-launchericon-48-48.png",
    "/images/icons/android-launchericon-512-512.png",
    "/images/icons/android-launchericon-72-72.png",
    "/images/icons/android-launchericon-96-96.png",
    "/favicon.ico",
    "/index.html",
    "/restaurant.html",
    "/favorite.html"
  ]
};
        
        !function(e){var n={};function r(o){if(n[o])return n[o].exports;var t=n[o]={i:o,l:!1,exports:{}};return e[o].call(t.exports,t,t.exports,r),t.l=!0,t.exports}r.m=e,r.c=n,r.d=function(e,n,o){r.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,n){if(1&n&&(e=r(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var t in e)r.d(o,t,function(n){return e[n]}.bind(null,t));return o},r.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(n,"a",n),n},r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},r.p="/",r(r.s=0)}([function(e,n){importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js"),workbox.precaching.precacheAndRoute(["/","/index.html","/index.js","/restaurant.html","/restaurant.js","/favorite.html","/favorite.js","/images/icons/android-launchericon-512-512.png","/images/icons/android-launchericon-192-192.png","/images/icons/android-launchericon-144-144.png","/images/icons/android-launchericon-96-96.png","/images/icons/android-launchericon-72-72.png","/images/icons/android-launchericon-48-48.png","/images/favicon.ico","/images/heros/hero-image_2.jpg","/manifest.json"],{ignoreUrlParametersMatching:[/.*/]}),workbox.routing.registerRoute(new RegExp("https://restaurant-api.dicoding.dev/"),workbox.strategies.staleWhileRevalidate({cacheName:"cache-api"})),workbox.routing.registerRoute(/.*(?:png|gif|jpg|jpeg|svg)$/,workbox.strategies.cacheFirst({cacheName:"cache-images",plugins:[new workbox.cacheableResponse.Plugin({statuses:[0,200]}),new workbox.expiration.Plugin({maxEntries:30,maxAgeSeconds:2592e3})]}))}]);