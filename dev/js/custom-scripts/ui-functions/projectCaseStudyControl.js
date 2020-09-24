function projectCaseStudyControl() {
    const csTriggers = $('.mn-project-grid-item-trigger');
    const csWrapper = $1('.mn-project-grid-item-cs-wrap');
    for(let i = 0; i< csTriggers.length; i ++) {

        let el = csTriggers[i];

        el.addEventListener('click', (e) => {

            e.preventDefault();
            addClass(csWrapper, 'is-active');
            addClass(el, 'is-active');
            addClass(el.parentNode, 'is-active');
            this.loadProjectPartial(el);
        });

    }

}

module.exports = projectCaseStudyControl;