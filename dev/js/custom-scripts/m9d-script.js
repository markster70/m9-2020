const mNineDScript = {};


mNineDScript.start = {

    'config': {
    },
    init(settings) {
        // loop through any settings passed in, and overwrite the default config with those settings
        if (settings && typeof(settings) === 'object') {
            for (let prop in settings) {
                if (settings.hasOwnProperty(prop)) {
                    this.config[prop] = settings[prop];
                }
            }
        }

        let currSS = currScreenSize();

        if(currSS === 'ls' | currSS === 'xls') {
            this.cursorSetup();
        }

        this.runNav();
        this.runScrollAnimations();
        this.scrollToSection();
        this.projectsSummaryControl();
        this.activeSectionClasses();

    },
    cursorSetup () {
        let cursor = {
            delay: 8,
            _x: 0,
            _y: 0,
            endX: (window.innerWidth / 2),
            endY: (window.innerHeight / 2),
            cursorVisible: true,
            cursorEnlarged: false,
            $dot: $1('.cursor-dot'),
            $outline:$1('.cursor-dot-outline'),

            init: function() {
                // Set up element sizes
                this.dotSize = this.$dot.offsetWidth;
                this.outlineSize = this.$outline.offsetWidth;

                this.setupEventListeners();
                this.animateDotOutline();
            },


            setupEventListeners: function() {
                const self = this;

                // Anchor hovering
                $('a, button').forEach(function(el) {
                    el.addEventListener('mouseover', function() {
                        self.cursorEnlarged = true;
                        self.toggleCursorSize();
                        addClass(self.$outline, 'elementHover');
                    });
                    el.addEventListener('mouseout', function() {
                        self.cursorEnlarged = false;
                        self.toggleCursorSize();
                        removeClass(self.$outline, 'elementHover');
                    });
                });

                // Anchor hovering
                $('.hover-cursor-effect').forEach(function(el) {
                    el.addEventListener('mouseover', function() {

                        addClass(self.$outline, 'imgHover');
                    });
                    el.addEventListener('mouseout', function() {

                        removeClass(self.$outline, 'imgHover');
                    });
                });

                // Click events
                document.addEventListener('mousedown', function() {
                    self.cursorEnlarged = true;
                    self.toggleCursorSize();
                });
                document.addEventListener('mouseup', function() {
                    self.cursorEnlarged = false;
                    self.toggleCursorSize();
                });


                document.addEventListener('mousemove', function(e) {
                    // Show the cursor
                    self.cursorVisible = true;
                    self.toggleCursorVisibility();

                    // Position the dot
                    self.endX = e.pageX;
                    self.endY = e.pageY;
                    self.$dot.style.top = self.endY + 'px';
                    self.$dot.style.left = self.endX + 'px';
                });

                // Hide/show cursor
                document.addEventListener('mouseenter', function(e) {
                    self.cursorVisible = true;
                    self.toggleCursorVisibility();
                    self.$dot.style.opacity = 1;
                    self.$outline.style.opacity = 1;
                });

                document.addEventListener('mouseleave', function(e) {
                    self.cursorVisible = true;
                    self.toggleCursorVisibility();
                    self.$dot.style.opacity = 0;
                    self.$outline.style.opacity = 0;
                });
            },

            animateDotOutline: function() {
                const self = this;

                self._x += (self.endX - self._x) / self.delay;
                self._y += (self.endY - self._y) / self.delay;
                self.$outline.style.top = self._y + 'px';
                self.$outline.style.left = self._x + 'px';

                requestAnimationFrame(this.animateDotOutline.bind(self));
            },

            toggleCursorSize: function() {
                const self = this;

                if (self.cursorEnlarged) {
                    self.$dot.style.transform = 'translate(-50%, -50%) scale(0.5)';
                    self.$outline.style.transform = 'translate(-50%, -50%) scale(1.8)';
                } else {
                    self.$dot.style.transform = 'translate(-50%, -50%) scale(1)';
                    self.$outline.style.transform = 'translate(-50%, -50%) scale(1)';
                }
            },

            toggleCursorVisibility: function() {
                const self = this;

                if (self.cursorVisible && !hasClass(self.$outline,'elementHover')) {
                    self.$dot.style.opacity = 1;
                    self.$outline.style.opacity = 1;

                } else if(self.cursorVisible && hasClass(self.$outline,'elementHover')) {
                    self.$outline.style.opacity = 0.5;
                } else {
                    self.$dot.style.opacity = 0;
                    self.$outline.style.opacity = 0;
                }
            }
        };

        cursor.init();
    },
    runNav () {
        const navTrigger = $1('.hamburger');
        const navWrapper = $1('.mn-site-nav');
        const navItems = $('.mn-site-nav-link-item');
        const bodyEl = $1('body');
        const navVideoWrap = $1('.mn-site-nav-video-bg');
        const navTitle = $('.mn-site-nav-contact-title');
        const navCopy = $1('.mn-site-nav-contact-txt');
        const navLinks = $('.mn-site-nav-contact-link');

        const tl = gsap.timeline();

        function toggleNavTriggerClass () {
            toggleClass(navTrigger, 'is-active');
            toggleClass(bodyEl, 'is-nav-active');
        }

        function addNavClass () {

            addClass(navWrapper, 'is-active');
        }

        function addVisibleNavItemClass() {

            let delay = 0;

            for(let i =0; i < navItems.length; i ++) {
                let el = navItems[i];
                delay += 250;

                setTimeout(() => {
                    addClass(el, 'is-visible');
                }, 100 + delay);

            }
        }

        function removeVisibleNavItemClass() {
            navItems.forEach( (el) => {
                removeClass(el, 'is-visible');
            });
        }

        function removeNavClass() {
            removeClass(navWrapper, 'is-active');
        }

        navTrigger.addEventListener('click', ()  => {
            animationNavigation();

        });

        function animationNavigation () {
            if(hasClass(navWrapper, 'is-active')) {

                if(!tl.isActive()) {

                    tl.call(toggleNavTriggerClass);
                    tl.to(navVideoWrap, {opacity: 0, duration: 0.5, ease: "circ.inOut"});
                    tl.to(navLinks, {opacity: 0, duration: 0.3});
                    tl.to(navTitle, {opacity: 0, stagger: 0.2, top: -200, left: 200, duration: 0.5, ease: "expo.out"});
                    tl.to(navCopy, {opacity: 0, left: -50, duration : 0.4,  ease: "circ.out"}, ">-0.3");
                    tl.to(navItems, {left: 200, opacity : 0, duration: 0.15, stagger: 0.15, ease: "circ.Out", onComplete : removeVisibleNavItemClass}, ">-0.4" );
                    tl.to(navWrapper, {x: '100%', duration: 1, ease: "circ.inOut", onComplete: removeNavClass});

                }

            }  else {

                if(!tl.isActive()) {

                    tl.call(toggleNavTriggerClass);
                    tl.to(navWrapper, {x: 0, duration: 1, ease: "circ.inOut", onComplete: addNavClass});
                    tl.to(navTitle, {opacity: 0.7, top: 0, left: 0, stagger: 0.2, duration: 0.8, ease: "expo.out"});
                    tl.to(navCopy, {opacity: 1, left: 0, duration : 0.5,  ease: "circ.out"}, ">-0.4");
                    tl.to(navItems, {left: 0, opacity : 1, duration: 0.35, stagger: 0.35, ease: "circ.Out", onStart : addVisibleNavItemClass}, ">-0.4");
                    tl.to(navLinks, {opacity: 1, duration: 0.5});
                    tl.to(navVideoWrap, {opacity: 1, duration: 2, ease: "circ.inOut"});

                }
            }
        }

        navItems.forEach( (el) => {
            el.addEventListener('click', (e) => {
                e.preventDefault();

                if(!tl.isActive()) {

                    let sectionTarget = el.getAttribute('href');
                    animationNavigation();

                    setTimeout(() => {
                        this.doPageScroll(sectionTarget);
                    }, 3000);
                }
            });

        });

    },
    runScrollAnimations () {

        let aboutGridContent = $('.mn-section-about-grid-item-inner');
        //

        const scrollController = new ScrollMagic.Controller();
        let aboutTl = gsap.timeline({paused: true});
        //let imageTween = aboutTl.to(aboutGridImages, {duration : 1.0, stagger: 0.4, scaleX: 1, scaleY: 1, opacity: 1, '-webkit-filter': " blur(0px)", ease: "circ.inOut(0.5)"},">-0.3");
        //let contentTween = aboutTl.to(aboutGridContent, {duration : 0.7, stagger: 0.45, opacity: 1, top: 0, ease: "circ.inOut(0.5)"});


        let aboutScene = new ScrollMagic.Scene({
                triggerElement : '#js-about-top',
                offset: 100

            })
            .on("enter", function (e) {
                aboutTl.play();

            })
            .on("leave", function (e) {
                aboutTl.reverse();
            })
            .addTo(scrollController);


        const servicesTl = gsap.timeline({paused: true});

        const servTitleHd = $1('.mn-section-services-hd-lg');
        const servTitleEls = $('.mn-section-services-hd-anim');
        const servicePanels = $('.mn-section-services-item');
        const serviceHeadings = $('.mn-section-services-item-hd');
        const serviceItems = $('.mn-section-services-item-list');


        let serveTitleTween = servicesTl.to( servTitleHd, {duration : 0.7, opacity: 1, left: 0, '-webkit-filter': " blur(0px)", ease: "circ.inOut(0.5)"}, 0.5);
        let serveElsTween = servicesTl.to( servTitleEls, {duration : 0.8,  stagger: 0.25, opacity: 1, top: 0, '-webkit-filter': " blur(0px)", ease: "circ.inOut(0.5)"},">-0.3");
        let servePanelTween = servicesTl.to( servicePanels, {duration : 2, stagger: 0.3, opacity: 1, scaleX: 1, scaleY:1, ease: "elastic.out(0.8)"});
        let serveHeadingsTween = servicesTl.to( serviceHeadings, {duration : 0.2, opacity: 1, stagger: 0.2, scaleX: 1, scaleY:1, '-webkit-filter': " blur(0px)", ease: "circ.inOut(0.3)"},">-1.8");
        let serveItemsTween = servicesTl.to( serviceItems, {duration : 0.4,  stagger: 0.17, opacity: 1, top: 0, ease: "circ.out(0.4)"},">0.2");


        let servicesScene = new ScrollMagic.Scene({
            triggerElement : '#js-services-top',
            offset: -300

        })
            .on("enter", function (e) {
                servicesTl.play();

            })
            .on("leave", function (e) {
                servicesTl.reverse();
            })
            .addTo(scrollController);


    },
    scrollToSection () {

        let self = this;

        let scrollTriggers = $('.mn-scroll-trig');

        for (let i = 0; i < scrollTriggers.length; i++) {
            scrollTriggers[i].addEventListener('click', function (e) {

                e.preventDefault();

                let target = this.getAttribute("href");

                self.doPageScroll(target);

            });
        }
    },
    doPageScroll (scrollTarget, scrollDuration = 1.3) {

        gsap.to(window, {duration: scrollDuration, scrollTo: {y: scrollTarget, autoKill: false}, ease: "circ.inOut"});
    },
    projectsSummaryControl () {

        // this needs re-factor to make more manageable

        const projectSummaryTriggers = $('.mn-section-project-summary-trigger');
        const projectsTl = gsap.timeline();
        const projectWrappers = $('.mn-section-project-summary-item');
        const itemHeight = 65;
        const projectsSummaryContainer = $1('#js-projects-summary-container');
        const bodyEl = $1('body');
        const projectSummaryClose = $1('.mn-projects-summary-detail-close');
        const projectsSection = $1('#js-projects-top');
        const fadeSections = $('.mn-section-fade');
        const projectContainerClass = '.mn-projects-summary-detail-wrapper';

        const _self = this;


        for(let i =0; i < projectWrappers.length; i ++) {
            let el = projectWrappers[i];

            addClass(el, 'is-inactive');
            el.dataset.originalPosition = el.style.top = (i * itemHeight);
            el.dataset.originalIndex = i;

            if(i > 0) {
                el.style.top = (i * itemHeight) + 'px';
                el.style.zIndex = i;
            }
        }



        projectSummaryTriggers.forEach( (el) => {

                el.addEventListener('click', (e) => {

                    e.preventDefault();

                    let contentToLoad = el.dataset.content;
                    let elParent = el.parentNode.parentNode;
                    let projectContainer = $1(projectContainerClass, elParent);


                        partialLoader(projectContainer,contentToLoad)
                            .then(function(){
                                setTimeout(function(){

                                    // need to look at pre-loader here

                                    removeClass(elParent, 'is-inactive');
                                    addClass(elParent, 'is-active-wrapper');
                                    openProject(el);

                                }, 500);

                            })
                            .catch(function() {
                                // need to do something here with the error handler
                            });



                });
        });


        function openProject (element) {

            let parentEl = element.parentNode.parentNode;
            let inactiveSiblings = $('li.is-inactive');

            projectsTl.to(element, {duration: 0.9, backgroundColor: '#000000'});
            projectsTl.to(inactiveSiblings, { duration: 0.3, opacity: 0.5 });
            projectsTl.to(fadeSections, { duration: 0.5, opacity:0 , onComplete: function () {
                    gsap.to(window, {duration: 1.1, scrollTo: {y: projectsSummaryContainer, autoKill: false}, ease: "circ.inOut", onComplete : function() {
                            projectOpenActions();
                        }});
            }});



            function projectOpenActions () {

                projectsTl.to(element, {duration: 0.6, className: "+=is-active", ease: "circ.inOut(0.5)"});
                projectsTl.to(parentEl, {duration: 0.7, top: 0, opacity: 1, ease: "expo.inOut(0.5)"});
                projectsTl.to(parentEl, {duration: 0.7, height: '100vh', ease: "expo.inOut(0.5)"});
                projectsTl.to(inactiveSiblings, {duration: 0.3, opacity: 0});
                projectsTl.to(parentEl, {duration: 0.7, zIndex: '1000', backgroundColor: 'rgba(32,32,32,1.0)', opacity: 1, ease: "circ.inOut(0.3)", onComplete: function () {

                    openDetail(parentEl);

                    }
                });

                // these will run as the timeline is running
                addClass(projectsSummaryContainer, 'is-active');
                addClass(bodyEl, 'is-projects-active');
            }

        }


        function openDetail (element) {

            let detailEl = $1('.mn-projects-summary-detail-wrapper', element);


            gsap.to(detailEl, {duration : 0.1, display: 'block'});
            gsap.to(detailEl, {duration : 0.7, top: 0, opacity: 1, height: '100%', ease: "circ.inOut(0.5)", onComplete: function() {

                _self.projectDetailControl();

            }});
        }

        function resetProjectsWindow () {

            gsap.to(window, {duration: 0.9, scrollTo: {y:projectsSection, autoKill: false}, ease: "expo.inOut(0.6)"});
            projectsTl.to(fadeSections, { duration: 0.5, opacity:1 });

            // remove container class, and body class to remove fixed positioning etc
            removeClass(projectsSummaryContainer, 'is-active');

        }


        function resetProjects () {

            let activeWrapper = $1('.is-active-wrapper');
            let activeDetail = $1('.mn-projects-summary-detail-wrapper', activeWrapper);
            let activeAnchor = $1('.is-active', activeWrapper);
            let activeWrapperOriginalPos = activeWrapper.dataset.originalPosition;
            let activeWrapperOriginalIndex = activeWrapper.dataset.originalIndex;
            let inactiveSiblings = $('li.is-inactive');
            const projectCloseBtn = $1('.mn-projects-summary-detail-close');
            const resetTl = gsap.timeline();


            // need to hide content first here

            // hiding content here
            resetTl.to(projectCloseBtn, {duration: 0.5, opacity: 0, ease: "circ.inOut(0.5)"});

            resetTl.to(activeDetail, {duration : 0.7, opacity: 0, ease: "circ.inOut(0.5)", onComplete: function () {

                activeDetail.style = '';

            }});

            // set the summary item back to 65 px height
            resetTl.to(activeWrapper, {duration : 0.9, height: itemHeight + 'px', ease: "circ.inOut(0.5)" });
            // make the siblings visible again
            resetTl.to(inactiveSiblings, {duration: 0.7, opacity: 1});
            // move the summary item back to it's original position
            resetTl.to(activeWrapper, {duration : 0.65, top: activeWrapperOriginalPos + 'px', ease: "expo.inOut(0.4)" });
            // move the anchor back to the left of the list
            resetTl.to(activeAnchor, {duration : 0.7, translateX: '80px' , className:"-=is-active", ease: "circ.inOut(0.4)", onComplete : function () {

                    // take the inline style for bg color off
                    activeWrapper.style.removeProperty('background-color');
                    // reset the z index for the element
                    activeWrapper.style.zIndex = activeWrapperOriginalIndex;
                    // take the background color off the anchor as well
                    activeAnchor.style.removeProperty('background-color');
                    // remove the class from the active wrapper
                    removeClass(activeWrapper, 'is-active-wrapper');

                    removeClass(bodyEl,'is-projects-active');
                    // add the default class back to previously added element
                    addClass(activeWrapper, 'is-inactive');


                    // move the window back to top of projects
                    resetProjectsWindow();


                }});





        }

        projectSummaryClose.addEventListener('click', () => {

            resetProjects();

        });


    },
    projectDetailControl () {

        let projectDetailTl = gsap.timeline();
        const bttButton = $1('.mn-project-summary-btt');
        const detailWrapper = $1('.mn-section-project-summary-item.is-active-wrapper');
        const projectCloseBtn = $1('.mn-projects-summary-detail-close');

        // back to top button for each wrapper
        bttButton.addEventListener('click', () => {

            gsap.to(detailWrapper, {duration: 0.8, scrollTo: {y: 0, autoKill: false}, ease: "circ.inOut",});

        });

        projectDetailTl .to(projectCloseBtn, {duration : 0.6, opacity: 0.6, ease: "circ.inOut(0.5)" });


    },
    activeSectionClasses () {

        // for each section, we need a class added to body for the menu variations etc
        // this is done via waypoints js

        // also in this function, when we hit the top of the page, we want to clear the variation classes

        let sections = $('.mn-section');
        let bodyWrap = $1('body');

        for (let i = 0; i < sections.length; i++) {
            let el = sections[i];
            let elId = el.id;
            let classToAdd = elId + '-is-active';
            let element = document.getElementById(elId);

            let waypointDown = new Waypoint({
                element: element,
                handler: function(direction) {
                    bodyWrap.className ='';
                    addClass(bodyWrap, classToAdd);
                },
                offset: '10%'
            });

            let waypointUp = new Waypoint({
                element: element,
                handler: function(direction) {
                    bodyWrap.className ='';
                    addClass(bodyWrap, classToAdd);
                },
                offset: '-10%'
            });

        }

        window.onscroll = function() {
            if(window.pageYOffset === 0) {
                bodyWrap.className ='';
                addClass(bodyWrap, 'js-section-home-is-active');
            } else if (window.pageYOffset > 100) {
                //addClass(bodyWrap, 'body-scrolling-is-active');

            }
        };
    },

};


window.addEventListener('DOMContentLoaded', () => {

    gsap.registerPlugin(ScrollToPlugin);
    gsap.registerPlugin(CSSRulePlugin);

    // dom is loaded!
    mNineDScript.start.init();



});
