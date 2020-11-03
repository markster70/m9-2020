var CACHE_NAME = 'm9d-site-cache-v1.58';
var urlsToCache = [
    '/',
    '/dist/css/m9-2020-styles.min.css',
    '/dist/js/m9-2020-vendor-script.min.js',
    '/dist/js/m9-2020-concat-script.min.js',
    '/dist/js/siteCacheValues.js',
    'projects/includes/barclays-content.html',
    'projects/includes/berinert-content.html',
    'projects/includes/body-face-content.html',
    'projects/includes/collective-content.html',
    'projects/includes/frotcom-content.html',
    'projects/includes/investec-content.html',
    'projects/includes/jisc-content.html',
    'projects/includes/mpp-content.html',
    'projects/includes/objecttech-content.html',
    'projects/includes/pegasus-content.html',
    'projects/includes/think-rise-content.html',
    'projects/includes/ttc-content.html',
    'projects/includes/zishi-content.html',
];

self.addEventListener('install', function(event) {
    // Perform install steps
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function(cache) {
                //console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    );
});


self.addEventListener('fetch', function(event) {
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

                        caches.open(CACHE_NAME)
                            .then(function(cache) {
                                cache.put(event.request, responseToCache);
                            });

                        return response;
                    }
                );
            })
    );
});


self.addEventListener('activate', function(event) {

    let cacheAllowlist = [CACHE_NAME];

    event.waitUntil(
        caches.keys().then(function(cacheNames) {
            return Promise.all(
                cacheNames.map(function(cacheName) {
                    if (cacheAllowlist.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

// listener for skip waiting message that is posted as user accepts update to service worker
self.addEventListener('message', event => {
    if (event.data.action === 'skipWaiting') {
        self.skipWaiting();
    }
});