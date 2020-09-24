function scrollToSection () {

    let self = this;

    let scrollTriggers = $('.mn-scroll-trig');

    for (let i = 0; i < scrollTriggers.length; i++) {
        scrollTriggers[i].addEventListener('click', function (e) {

            e.preventDefault();

            let target = this.getAttribute("href");

            self.doPageScroll(target);

        });
    }
}

module.exports = scrollToSection;