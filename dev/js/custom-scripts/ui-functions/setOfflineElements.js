function setOfflineElements () {
    // function to set a class on the doc el if the network is available, or not
    // within the ajax parts of the site, images are not shown when site is off-grid to keep the cache size reasonable
    // for a user
    const toggleNavigatorDisplay = () => {
        if(navigator.onLine) {
            addClass(document.documentElement, 'is-online');
            removeClass(document.documentElement, 'is-offline');
        } else {
            addClass(document.documentElement, 'is-offline');
            removeClass(document.documentElement, 'is-online');
        }
    };

    toggleNavigatorDisplay();

    window.addEventListener('online', toggleNavigatorDisplay);
    window.addEventListener('offline', toggleNavigatorDisplay);
}

module.exports = setOfflineElements;