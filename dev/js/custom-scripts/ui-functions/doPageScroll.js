function  doPageScroll(scrollTarget, scrollDuration = 1.3) {

    gsap.to(window, {duration: scrollDuration, scrollTo: {y: scrollTarget, autoKill: false}, ease: "circ.inOut"});
}

module.exports = doPageScroll;