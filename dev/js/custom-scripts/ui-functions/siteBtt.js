function  siteBtt() {

    const siteBtt = $1('.mn-site-footer-btt');

    // back to top button for each wrapper
    siteBtt.addEventListener('click', () => {

        gsap.to(document.documentElement, {duration: 1.2, scrollTo: {y: 0, autoKill: false}, ease: "circ.inOut",});

    });
}

module.exports = siteBtt;