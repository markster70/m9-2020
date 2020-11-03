// NOTE - vars need to be required for each module
const { m9Vars } = require('../appVars');

function  resizeActions () {

    const docEl = document.documentElement;

    function determineScreenSize () {
        let screenSizeTest = currScreenSize();


        m9Vars.isSmallScreen = m9Vars.smallScreenCategories.includes(screenSizeTest);

        if (m9Vars.isSmallScreen) {
            addClass(docEl, 'is-small-screen');

        } else {
            removeClass(docEl, 'is-small-screen');

        }
    }

    determineScreenSize();

    const assessScreenSize = debounce( () => {
        determineScreenSize();

    }, 500);

    // check for large screen & reload if needed
    window.addEventListener('resize', assessScreenSize );

}

module.exports = resizeActions;