function  projectDetailControl() {

    const bttButtons = $('.mn-project-summary-btt');
    const detailWrapper = $1('.mn-project-grid-item-cs-wrap');
    const projectCloseBtn = $1('.mn-projects-summary-detail-close');
    const docEl = document.documentElement;

    // back to top button for each wrapper

    bttButtons.forEach((el) => {

        el.addEventListener('click', () => {

            gsap.to(detailWrapper, {duration: 1.3, scrollTo: {y: 0, autoKill: false}, ease: "circ.inOut",});

        });
    });

    projectCloseBtn.addEventListener('click', () => {

        this.csWrapperAnimation();

    });


    window.addEventListener('keyup', (e) =>{

        if(hasClass(docEl, 'is-projects-active')) {

            if (e.key === 'Escape' || e.which === 27) {
                this.csWrapperAnimation();
            }
        }
    });


}

module.exports = projectDetailControl;