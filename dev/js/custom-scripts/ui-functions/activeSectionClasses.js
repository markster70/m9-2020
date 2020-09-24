function activeSectionClasses () {
    // for each section, we need a class added to body for the menu variations etc
    // this is done via waypoints js

    // also in this function, when we hit the top of the page, we want to clear the variation classes

    let sections = $('.mn-section-main');
    let bodyWrap = $1('body');
    let _self = this;

    for (let i = 0; i < sections.length; i++) {
        let el = sections[i];
        let elIndex = i;
        let elId = el.id;
        let classToAdd = elId + '-is-active';
        let element = document.getElementById(elId);

        let waypointDown = new Waypoint({
            element: element,
            handler: function (direction) {
                bodyWrap.className = '';
                addClass(bodyWrap, classToAdd);
                _self.manageSliderClasses(elIndex);
            },
            offset: '15%'
        });

        let waypointUp = new Waypoint({
            element: element,
            handler: function (direction) {
                bodyWrap.className = '';
                addClass(bodyWrap, classToAdd);
                _self.manageSliderClasses(elIndex);
            },
            offset: '-15%'
        });

    }

    _self.manageSliderClasses(0);

    window.onscroll = function () {
        if (window.pageYOffset === 0) {
            bodyWrap.className = '';
            addClass(bodyWrap, 'js-section-home-is-active');
            _self.manageSliderClasses();
        }
    };
}

module.exports = activeSectionClasses;