// NOTE - vars need to be required for each module
const { m9Vars } = require('../appVars');

function csWrapperAnimation (direction) {

    let csWrapper = $1('.mn-project-grid-item-cs-wrap');
    const wrapperTl = gsap.timeline();

    const projectContainer = $1('.mn-project-grid-item-cs-wrap-inner');
    const docEl = document.documentElement;
    const projectCloseBtn = $1('.mn-projects-summary-detail-close');
    const projectItems = $('.mn-project-grid-item');

    const csTriggers = $('.mn-project-grid-item-trigger');

    const _self = this;


    if(direction === 'go') {

        wrapperTl.to(csWrapper, {duration: 0.3, height: '100vh', ease: 'circ.inOut'});

        if (!m9Vars.isSmallScreen) {

            wrapperTl.to(projectItems, {
                duration: 0.1, stagger: { // wrap advanced options in an object
                    each: 0.1,
                    from: "center",
                }, opacity: 0, top: '250px', ease: 'circ.inOut'
            });
        }
        wrapperTl.to(csWrapper, {duration: 0.2, opacity: 1.0, ease: 'circ.inOut'},'<1');
        wrapperTl.to(projectContainer, {duration: 0.6, top: 0, opacity: 1, ease: "circ.inOut(0.5)", onComplete: function () {
                addClass(docEl, 'is-projects-active');
                _self.projectDetailControl();

                csWrapper.setAttribute('aria-expanded', 'true');

            }},'<');
        wrapperTl.to(projectCloseBtn, {duration: 0.6, opacity: 0.8, ease: "circ.inOut(0.5)"});

    } else {

        wrapperTl.to(projectCloseBtn, {duration: 0.6, opacity: 0, ease: "circ.inOut(0.5)"});
        wrapperTl.to(projectContainer, {duration: 0.7, top: '20rem', opacity: 0, ease: "circ.inOut(0.5)"});
        wrapperTl.to(csWrapper, {duration: 0.5, opacity: 0, ease: 'circ.in', onComplete: function () {

                for(let i = 0; i< csTriggers.length; i ++) {

                    let el = csTriggers[i];

                    removeClass(el, 'is-active');
                    removeClass(el.parentNode, 'is-active');
                }
                removeClass(csWrapper, 'is-active');
                removeClass(docEl, 'is-projects-active');

                csWrapper.setAttribute('aria-expanded', 'false');

            }});

        if (!m9Vars.isSmallScreen) {

            wrapperTl.to(projectItems, {
                duration: 0.3, stagger: { // wrap advanced options in an object
                    each: 0.15,
                    from: "end",
                }, opacity: 1, top: 0, ease: 'expo.out'
            });
        }
        wrapperTl.to(csWrapper, {duration: 0.1, height: 0, ease: 'circ.in', onComplete : function () {
                projectContainer.innerHTML = '';
            }});

    }

}

module.exports = csWrapperAnimation;