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
                    self.$dot.style.transform = 'translate(-50%, -50%) scale(0.00)';
                    self.$outline.style.transform = 'translate(-50%, -50%) scale(1.5)';
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
                    self.$outline.style.opacity = 0.3;
                } else {
                    self.$dot.style.opacity = 0;
                    self.$outline.style.opacity = 0;
                }
            }
        }

        cursor.init();
    },
    runNav () {
        const navTrigger = $1('.hamburger');
        const navWrapper = $1('.mn-site-nav');
        const navItems = $('.mn-site-nav-link-item');
        const bodyEl = $1('body');
        //const navVideoWrap = $1('.mn-site-nav-video-bg');
        const navTitle = $1('.mn-site-nav-contact-title');
        const navCopy = $1('.mn-site-nav-contact-txt');
        const navLinks = $('.mn-site-nav-contact-link');

        const tl = gsap.timeline();

        function toggleNavTriggerClass () {
            toggleClass(navTrigger, 'is-active');
            toggleClass(bodyEl, 'is-nav-active');
        }

        function addNavClass () {

            addClass(navWrapper, 'is-active');
        };

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

            if(hasClass(navWrapper, 'is-active')) {

                if(!tl.isActive()) {

                    tl.call(toggleNavTriggerClass);
                    //tl.to(navVideoWrap, {opacity: 0, duration: 0.5, ease: "circ.inOut"});
                    tl.to(navLinks, {opacity: 0, duration: 0.3});
                    tl.to(navTitle, {opacity: 0, top: -200, duration: 0.5, ease: "expo.out"});
                    tl.to(navCopy, {opacity: 0, left: -50, duration : 0.4,  ease: "circ.out"}, ">-0.3");
                    tl.to(navItems, {left: 200, opacity : 0, duration: 0.15, stagger: 0.15, ease: "circ.Out", onComplete : removeVisibleNavItemClass}, ">-0.4" );
                    tl.to(navWrapper, {x: '100%', duration: 1, ease: "circ.inOut", onComplete: removeNavClass})

                }

            }  else {

                if(!tl.isActive()) {

                    tl.call(toggleNavTriggerClass);
                    tl.to(navWrapper, {x: 0, duration: 1, ease: "circ.inOut", onComplete: addNavClass});
                    tl.to(navTitle, {opacity: 1, top: 0, duration: 0.8, ease: "expo.out"});
                    tl.to(navCopy, {opacity: 1, left: 0, duration : 0.5,  ease: "circ.out"}, ">-0.4");
                    tl.to(navItems, {left: 0, opacity : 1, duration: 0.35, stagger: 0.35, ease: "circ.Out", onStart : addVisibleNavItemClass}, ">-0.4");
                    tl.to(navLinks, {opacity: 1, duration: 0.5});
                    //tl.to(navVideoWrap, {opacity: 0.5, duration: 0.7, ease: "circ.inOut"});

                }
            }

        });




    }

};


window.addEventListener('DOMContentLoaded', () => {

    // dom is loaded!
    mNineDScript.start.init();

});
