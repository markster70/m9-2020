function runNav () {
    const navTrigger = $1('.hamburger');
    const navWrapper = $1('.mn-site-nav');
    const navItems = $('.mn-site-nav-link-item');
    const bodyEl = $1('body');
    const navVideoWrap = $1('.mn-site-nav-video-bg');
    const navStrapLine = $1('.mn-section-nav-strapline');
    const navLinks = $('.mn-site-nav-contact-link');
    const video = $1('#mn-site-nav-vid');
    const navLast = $1('.is-nav-last');

    const tl = gsap.timeline();

    function toggleNavTriggerClass() {
        toggleClass(navTrigger, 'is-active');
        toggleClass(bodyEl, 'is-nav-active');
    }

    function addNavClass() {

        addClass(navWrapper, 'is-active');
        navWrapper.setAttribute('aria-expanded', 'true');
    }

    function startVideo() {

        if(hasClass(video, 'has-video') && hasClass(video, 'video-ready' )) {

            video.play();
        }
    }

    function stopVideo() {

        if(hasClass(video, 'has-video')) {

            video.pause();
        }
    }

    function addVisibleNavItemClass() {

        let delay = 0;

        for (let i = 0; i < navItems.length; i++) {
            let el = navItems[i];
            delay += 250;

            setTimeout(() => {
                addClass(el, 'is-visible');
            }, 100 + delay);

        }
    }

    function removeVisibleNavItemClass() {
        navItems.forEach((el) => {
            removeClass(el, 'is-visible');
        });
    }

    function removeNavClass() {
        removeClass(navWrapper, 'is-active');
        navWrapper.setAttribute('aria-expanded', 'false')
    }

    navTrigger.addEventListener('click', () => {
        animationNavigation();

    });

    function animationNavigation() {
        if (hasClass(navWrapper, 'is-active')) {

            if (!tl.isActive()) {

                tl.call(toggleNavTriggerClass);
                tl.to(navStrapLine, {opacity: 0, duration: 0.7, ease: "circ.out"});
                if(hasClass(video, 'has-video')) {
                    tl.to(navVideoWrap, {opacity: 0, duration: 0.5, ease: "circ.inOut"});
                }
                tl.to(navLinks, {opacity: 0, duration: 0.3});
                tl.to(navItems, {left: 200, opacity: 0, duration: 0.15, stagger: 0.15, ease: "circ.Out", onComplete: removeVisibleNavItemClass}, ">-0.4");
                tl.to(navWrapper, {
                    x: '100%', duration: 1, ease: "circ.inOut", onComplete: function () {
                        removeNavClass();
                        stopVideo();
                    }
                });

            }

        } else {

            if (!tl.isActive()) {

                tl.call(toggleNavTriggerClass);
                tl.to(navWrapper, {x: 0, duration: 1, ease: "circ.inOut", onComplete: addNavClass});
                tl.to(navItems, {left: 0, opacity: 1, duration: 0.35, stagger: 0.35, ease: "circ.Out", onStart: addVisibleNavItemClass}, ">-0.4");
                tl.to(navLinks, {opacity: 1, duration: 0.5});
                if(hasClass(video, 'has-video')) {
                    tl.to(navVideoWrap, {opacity: 1, duration: 2, ease: "circ.inOut", onComplete: startVideo});
                }
                tl.to(navStrapLine, {opacity: 1, duration: 0.5, ease: "circ.out"}, "<-1.0");

            }
        }
    }


    navItems.forEach((el) => {
        el.addEventListener('click', (e) => {
            e.preventDefault();

            // detection for screen size here to determine what the position of the strapline should be

            if (!tl.isActive()) {

                let sectionTarget = el.getAttribute('href');
                animationNavigation();

                setTimeout(() => {
                    this.doPageScroll(sectionTarget);
                }, 3000);
            }
        });

    });


    // accessibility trap to provide circular tabbing for menu via keyboard when open
    function accessTrap () {

        navLast.addEventListener('blur', function(e) {
            if(hasClass(navWrapper, 'is-active')){
                navTrigger.focus();
            }
        });
    }

    accessTrap();
}
module.exports = runNav;