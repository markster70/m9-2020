// NOTE - vars need to be required for each module
const { m9Vars } = require('../appVars');

function setupCarousel () {

        // function to initiate flickity carousel
        // carousel is used for work portfolio at small screen only
        // on resize the screen size is re-asesseed
        // and carousel instantiated, or destroyed

        function initCarousel () {

            if(m9Vars.isSmallScreen) {

                //console.log('setup carousel');

                m9Vars.flkty = new Flickity('.carousel', m9Vars.flickityOpts);

            } else {

                if(m9Vars.flkty) {
                    m9Vars.flkty.destroy();
                }
            }
        }

        initCarousel();

        const resetCarousel = debounce( () => {
            initCarousel();

        }, 500);


        window.addEventListener('resize', resetCarousel );
}

module.exports = setupCarousel;