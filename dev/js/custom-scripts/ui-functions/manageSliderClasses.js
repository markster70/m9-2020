function manageSliderClasses (elIndex) {


    let slideListElements = $('.mpp-slide-list li');

    slideListElements.forEach(function (el) {
        removeClass(el, 'is-current');
    });

    if(elIndex) {


        for( let i = 0; i < slideListElements.length; i ++) {

            let currentEl = slideListElements[i];
            if (i === elIndex) {
                addClass(currentEl, 'is-current');
            }
        }
    } else {
        addClass(slideListElements[0], 'is-current');
    }

}

module.exports = manageSliderClasses;