function projectGridActions () {
    const pGridItems = $('.mn-project-grid-item-content');

    for(let i =0; i < pGridItems.length; i ++) {
        let el = pGridItems[i];

        el.addEventListener('mouseenter', (e) =>{

            for(let j = 0; j < pGridItems.length; j ++) {

                let el = pGridItems[j];
                let elParent = el.parentNode;

                if(el !== e.currentTarget) {
                    addClass(elParent, 'items-active')
                } else {

                    addClass(elParent, 'is-current-grid-item');
                }
            }
        });

        el.addEventListener('mouseleave', () =>{

            for(let j = 0; j < pGridItems.length; j ++) {

                let el = pGridItems[j];
                let elParent = el.parentNode;

                removeClass(elParent, 'items-active');
                removeClass(elParent, 'is-current-grid-item');
            }
        })

    }

}

module.exports = projectGridActions;