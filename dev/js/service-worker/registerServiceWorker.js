// grab workbox-window from repo
import {Workbox} from '/dist/js/workbox-window.js';

// this file takes care of the service worker installation
// using google's workbox tools

// static assets are cached in a precachge by workbox itself
// but here we have a list of the views for the application
// and when ready, those are stored in local cache as well

// a simple message is displayed to user to say app is available offline, or if registration fails,
// a message advisng that is shown - the messages are in the html for index.php

// if you add new views to the application, add them to the viewRoutes array below

// old caches are also removed, based on the cache name values that are imported from siteCacheValues.js

window.addEventListener('load', () => {


    if ('serviceWorker' in navigator) {
        // set ref to the Workbox class
        // api ref is here
        // https://developers.google.com/web/tools/workbox/reference-docs/latest/module-workbox-window.Workbox
        const wb = new Workbox('service-worker.js');

        const viewRoutes = [
            '/',
        ];

        // note BERINERT_SITE_CACHE_OBJECT is derived from siteCacheValues.js

        const staticCacheName = M9_SITE_CACHE_OBJECT.viewsCacheName;


        // this adds the urls to the caches when caches are available
        async function addToCache(urls) {
            const myCache = await window.caches.open(staticCacheName);
            await myCache.addAll(urls);
        }


        addToCache(viewRoutes);


        // this event will fire when the service worker is initially installed, and if there is a new service worker will advise the user
        // with a prompt
        wb.addEventListener('installed', (event) => {

            if (event.isUpdate) {
                console.info('service worker is updating');
                if (confirm('New content is available!. Click OK to refresh')) {
                    window.location.reload();
                }
            }

        });


        wb.addEventListener('activated', event => {
            console.info('Service worker Activated The application is available offline. :)');


        });


        wb.addEventListener('controlling', () => {
            console.info('page under sw control');
        });

        // service worker registration happens here
        wb.register();

        // wb.active returns a promise -

        const wbIsActive = wb.active;

        // if promise resolved - service worker is up and running and active
        wbIsActive.then(() => {

            console.info('Workbox active - The application is available offline. :)');

        // if fails for some reason
        // we can show the network only message
        }).catch(() => {

            swFailed();

        }).finally( () => {

            // constructing the precache name here, based on the version in siteCacheValues

            let mnPreCacheName =  `${M9_SITE_CACHE_OBJECT.precachePrefix}-precache-${M9_SITE_CACHE_OBJECT.precacheSuffix}`;

            // array holding both current cache names - derived from object is siteCacheValues, and passed around application
            // to service worker and cache API scripts

            var cachesToKeep = [M9_SITE_CACHE_OBJECT.viewsCacheName,mnPreCacheName];

            // this should loop through the caches and bin off any old ones

                window.caches.keys().then(function(keyList) {
                    return Promise.all(keyList.map(function(key) {
                        if (cachesToKeep.indexOf(key) === -1) {
                            return window.caches.delete(key);
                        }
                    }));
                });

        });


        wb.addEventListener('fetch', (event) => {
            event.respondWith(
                caches.match(event.request)
                    .then(function(response) {
                        // Cache hit - return response
                        if (response) {
                            return response;
                        }

                        return fetch(event.request).then(
                            function(response) {
                                // Check if we received a valid response
                                if(!response || response.status !== 200 || response.type !== 'basic') {
                                    return response;
                                }

                                // IMPORTANT: Clone the response. A response is a stream
                                // and because we want the browser to consume the response
                                // as well as the cache consuming the response, we need
                                // to clone it so we have two streams.
                                var responseToCache = response.clone();

                                caches.open(M9_SITE_CACHE_OBJECT.viewsCacheName)
                                    .then(function(cache) {
                                        cache.put(event.request, responseToCache);
                                    });

                                return response;
                            }
                        );
                    })
            );
        });


        if(wbIsActive === undefined) {

            swFailed();
        }

    }


    // this is a fallback function - will allow user to login, but will display a message advising them
    // that the app is only available online, and they should reload
    function swFailed () {


    }


});