let newWorker;

function displayUpdateNotifiction () {
    const swNotify = document.querySelector('.mn-sw-notify');

    swNotify.classList.add('is-active');

}

function hideUpdateNotifiction () {
    const swNotify = document.querySelector('.mn-sw-notify');

    swNotify.classList.remove('is-active');

}

document.querySelector('.mn-sw-reload').addEventListener('click', () => {
    newWorker.postMessage({action: 'skipWaiting'});

    hideUpdateNotifiction();
});

if ('serviceWorker' in navigator) {
        window.addEventListener('load', function() {
            navigator.serviceWorker.register('/service-worker.js').then(registration => {
                // Registration was successful

                registration.addEventListener('updatefound', () => {

                    newWorker = registration.installing;

                    newWorker.addEventListener('statechange', () => {

                        switch (newWorker.state) {
                            case 'installed':
                                if(navigator.serviceWorker.controller) {
                                    displayUpdateNotifiction()
                                }
                                // no update ready
                                break;

                        }
                    });

                });

                console.info('ServiceWorker registration successful with scope: ', registration.scope);


            }, function(err) {
                // registration failed :(
                console.info('ServiceWorker registration failed: ', err);
            });
        });

    let refreshing;

    navigator.serviceWorker.addEventListener('controllerchange', function () {
        if (refreshing) {
            return;
        }

        window.location.reload();
        refreshing = true;
    });
}
