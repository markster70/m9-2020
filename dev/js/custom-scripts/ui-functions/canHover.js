function canHover () {
    // if we have proper hover

    const docEl = document.documentElement;

    if(window.matchMedia('(hover: hover)').matches) {
        addClass(docEl, 'is-hover-device');
    }
}

module.exports = canHover;