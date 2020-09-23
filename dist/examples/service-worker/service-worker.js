// load workbox
importScripts('/dist/js/workbox-sw.js');
importScripts('/dist/js/siteCacheValues.js');


// // output successful message
if (workbox) {
    console.info('Yay! Workbox is loaded 🎉');
} else {
    console.info('Boo! Workbox didn\'t load 😬');

}

let prefix = EXAMPlE_SITE_CACHE_OBJECT.precachePrefix;
let suffix = EXAMPlE_SITE_CACHE_OBJECT.precacheSuffix;


// if you want to see workbox in action through the console, uncomment this line - as you navigate around the app
// you will see the library serving the assets

//workbox.setConfig({ debug: true })

workbox.core.setCacheNameDetails({
    prefix: prefix,
    /// this suffix should be changed to force a service worker update
    // or when the sw is generated, if the file manifest has changed, that should also do
    suffix: suffix,
    precache: 'precache',
    runtime: 'runtime',
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.cleanupOutdatedCaches();

workbox.precaching.precacheAndRoute([{"revision":"6d2764c078ab4b5ba951e9f39115cabe","url":"dist//css/service-worker-example.css"},{"revision":"59347058298992064ea91f767418e2dd","url":"dist//css/service-worker-example.min.css"},{"revision":"189bd9b4ad0418b652a76d7fd1116400","url":"dist/img/air-of-autumn-web.jpg"},{"revision":"d45b6a526be54ae86443167ea39a0a95","url":"dist/img/bridge-plain-web.jpg"},{"revision":"2e45793dcc6763e97c628fdae75cc72c","url":"dist/img/descending-web.jpg"},{"revision":"b98c3828d724a9d0b40d4fdc408e3573","url":"dist/img/tall-rider-web.jpg"},{"revision":"63b253bd0877141116ac44542fbfaaef","url":"dist/img/witnesses-web.jpg"},{"revision":"005bcef454f4bfec7bba3792753262e7","url":"dist//js/registerServiceWorker.js"},{"revision":"d857d7d4bac1deb3e1d4982216f84e32","url":"dist//js/service-worker-example.js"},{"revision":"08451c001be35dd0dc8c11cd297d1177","url":"dist//js/service-worker-example.min.js"},{"revision":"340c89fffe99c2a6ef1546aa970ae9b2","url":"dist//js/siteCacheValues.js"},{"revision":"c5388c2b66846bf79087323c895f1018","url":"dist//js/workbox-sw.js"},{"revision":"30371b1a03a43d3a4b0700723794f2c0","url":"dist//js/workbox-window.js"}]);


// Serve all html files with StaleWhileRevalidate strategy
workbox.routing.registerRoute(
    /\.html$/,
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: 'sw-example-html-cache',
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 30,
                maxAgeSeconds: 60 * 60,
            }),
            new workbox.broadcastUpdate.BroadcastUpdatePlugin({
                channelName: 'html-updates',
            }),
        ],
    }),
);


// Serve all js files with StaleWhileRevalidate strategy
workbox.routing.registerRoute(
    /\.js$/,
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: 'sw-example-js-cache',
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 10,
                maxAgeSeconds: 24 * 60 * 60,
            }),
            new workbox.broadcastUpdate.BroadcastUpdatePlugin({
                channelName: 'sw-example-js-updates',
            }),
        ],
    }),
);

// Serve all css files with StaleWhileRevalidate strategy
workbox.routing.registerRoute(
    /\.css$/,
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: 'sw-example-css-cache',
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 10,
                maxAgeSeconds: 24 * 60 * 60,
            }),
            new workbox.broadcastUpdate.BroadcastUpdatePlugin({
                channelName: 'sw-example-css-updates',
            }),
        ],
    }),
);

// Serve all other assets with CacheFirst strategy
workbox.routing.registerRoute(
    /\.(?:png|jpg|jpeg|svg|gif|webp|ico|webmanifest|eot,ttf,woff,woff2)$/,
    new workbox.strategies.CacheFirst({
        cacheName: 'sw-example-asset-cache',
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 250,
                maxAgeSeconds: 30 * 24 * 60 * 60,
            }),
            new workbox.broadcastUpdate.BroadcastUpdatePlugin({
                channelName: 'sw-example-asset-updates',
            }),
        ],
    }),
);

// Cache the Google Fonts stylesheets with a stale-while-revalidate strategy.

workbox.routing.registerRoute(
    ({url}) => url.origin === 'https://fonts.googleapis.com',
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: 'google-fonts-stylesheets',
    })
);

// Cache the underlying font files with a cache-first strategy for 1 year.
workbox.routing.registerRoute(
    ({url}) => url.origin === 'https://fonts.gstatic.com',
    new workbox.strategies.CacheFirst({
        cacheName: 'google-fonts-webfonts',
        plugins: [
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200],
            }),
            new workbox.expiration.ExpirationPlugin({
                maxAgeSeconds: 60 * 60 * 24 * 365,
                maxEntries: 30,
            }),
        ],
    })
);

