// This objecr is purely for the purpose of naming service worker caches
// and retrieving them when the app is offline

// if you change the content in the views, or and of the css
// i'd recommend changing viewsCacheName, and precacheSuffix

// used by :

// registerServiceWorker.js
// serviceWorker.js
// main.js

const M9_SITE_CACHE_OBJECT = {
    viewsCacheName : "mn-pages-cache-v1.01",
    precachePrefix: "mN",
    precacheSuffix: "1.01"
};
