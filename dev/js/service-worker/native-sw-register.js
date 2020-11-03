let newWorker;
// function to display service worker update notification
function displayUpdateNotifiction () {
    const swNotify = document.querySelector('.mn-sw-notify');

    swNotify.classList.add('is-active');

}
// hide the sw notfication after a user has updated
function hideUpdateNotifiction () {
    const swNotify = document.querySelector('.mn-sw-notify');

    swNotify.classList.remove('is-active');

}

// event listener for update notification button
// when this is fired, post a message to the service worker to confirm that skipWaiting is permitted, thus allowing new sw to have control

document.querySelector('.mn-sw-reload').addEventListener('click', () => {
    newWorker.postMessage({action: 'skipWaiting'});

    hideUpdateNotifiction();
});

if ('serviceWorker' in navigator) {
        window.addEventListener('load', function() {
            navigator.serviceWorker.register('/service-worker.js').then(registration => {

                // listen for updates to servive worker
                registration.addEventListener('updatefound', () => {

                    newWorker = registration.installing;
                    // if we see a state change in the newWorker
                    // we want to trigger the notification to a user in the browser
                    //
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

                // Registration was successful

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
