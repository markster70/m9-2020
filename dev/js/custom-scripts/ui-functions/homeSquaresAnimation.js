function homeSquaresAnimation () {

    // function runs a subtle shift through the visiblity
    // of a set of images on the home page to offer
    // very discreet movement
    // is operated with gsap 3 timeline

    // when nav is open, timeline is paused via mutation observer


    // probably only want to run this for larger screens
    let currSS = currScreenSize();

    if(currSS === 'ss' || currSS === 'ms') {
        return;
    }

    let bgB = $1('.mn-home-grad-bg.is-bg-b');
    let bgC = $1('.mn-home-grad-bg.is-bg-c');
    let bgD = $1('.mn-home-grad-bg.is-bg-d');
    let gradGridBg = $1('.mn-home-grad-grid-bg');
    let bodyEl = $1('.body');
    let siteNav = $1('.mn-site-nav');

    // tween is repeated infinitely here
    const homeSqTl = gsap.timeline({repeat: -1});


    let opacityDuration = gsap.utils.random(1.0, 6.0);
    let staggerStart =   gsap.utils.random(-2, 1.5);


    // gsap timeline to cycle through the background on a random basis
    // start of each tween is also randomised in places to give the overall animation an organic feel


    homeSqTl.to(bgB, {duration: opacityDuration, opacity: 1}, staggerStart);
    homeSqTl.to(bgB, {duration: 1.2, opacity: 0});
    homeSqTl.to(bgC, {duration: 1.0, opacity: 0.5});
    homeSqTl.to(gradGridBg, {duration: 4.0, opacity: 0});
    homeSqTl.to(bgC, {duration: 0.65, opacity: 0});
    homeSqTl.to(bgD, {duration: opacityDuration, opacity: 0.5},staggerStart);
    homeSqTl.to(gradGridBg, {duration: 3.0, opacity: 1});
    homeSqTl.to(bgD, {duration: 1.2, opacity: 0});


    // only really want this animation underway when a visitor is at the top of the page
    // so some functionality to control the play pause, based on the offset of the window, and debounced for performance
    function pauseTl () {
        homeSqTl.pause();
    }

    function resumeTl () {
        homeSqTl.play();
    }


    window.onscroll = function () {
        toggleAnimation();
    };


    // resetting the position here for the triggers in case they shift across screen sizes
    let toggleAnimation = debounce(function() {

        if (window.pageYOffset < 200) {
            resumeTl();
        } else {
            pauseTl();

        }

    }, 300);

    // adding a mutationObserver here for the navigation and the video to take the
    //strain off the gpu / cpu

    if ("MutationObserver" in window) {

        const navMutationObserver = new MutationObserver(animStateToggle);

        navMutationObserver.observe(
            siteNav,
            {attributes: true}
        );

        function animStateToggle(mutationsList) {
            mutationsList.forEach(mutation => {
                if (mutation.attributeName === 'class') {
                    if (hasClass(siteNav, 'is-active')) {
                        pauseTl();
                    } else {
                        resumeTl();
                    }
                }
            })
        }
    }

}

module.exports = homeSquaresAnimation;