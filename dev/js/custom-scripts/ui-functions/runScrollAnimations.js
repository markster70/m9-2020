function runScrollAnimations () {
    const aboutTitleHd = $1('.mn-section-about-hd-lg');
    const aboutTitleEls = $('.mn-section-about-hd-anim');

    const scrollController = new ScrollMagic.Controller();

    // about section animation logic

    let aboutTl = gsap.timeline({paused: true});

    let aboutTitleTween = aboutTl.to(aboutTitleHd, {duration: 0.7, opacity: 1, left: 0, '-webkit-filter': " blur(0px)", ease: "circ.inOut(0.5)"}, 0.5);
    let aboutElsTween = aboutTl.to(aboutTitleEls, {duration: 0.8, stagger: 0.25, opacity: 1, top: 0, '-webkit-filter': " blur(0px)", ease: "circ.inOut(0.5)"}, ">-0.3");


    let aboutScene = new ScrollMagic.Scene({
        triggerElement: '#js-about-top',
        offset: -100

    })
        .on("enter", function () {
            aboutTl.play();
        })
        .on("leave", function () {
            aboutTl.reverse();
        })
        .addTo(scrollController);

    // services section animation logic

    const servicesTl = gsap.timeline({paused: true});

    const serviceHeadings = $('.mn-section-services-item-hd');
    const serviceItems = $('.mn-section-services-item-list');

    servicesTl.to(serviceHeadings, {duration: 0.2, opacity: 1, stagger: 0.2, scaleX: 1, scaleY: 1, '-webkit-filter': " blur(0px)", ease: "circ.inOut(0.3)"}, ">-1.8");
    servicesTl.to(serviceItems, {duration: 0.4, stagger: 0.17, opacity: 1, top: 0, ease: "circ.out(0.4)"}, ">0.2");


    let servicesScene = new ScrollMagic.Scene({
        triggerElement: '#js-services-top',

    })
        .on("enter", function () {
            servicesTl.play();
        })
        .on("leave", function () {
            servicesTl.reverse();
        })
        .addTo(scrollController);
}

module.exports = runScrollAnimations;