function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (e) {
  var t = {};

  function n(i) {
    if (t[i]) return t[i].exports;
    var o = t[i] = {
      i: i,
      l: !1,
      exports: {}
    };
    return e[i].call(o.exports, o, o.exports, n), o.l = !0, o.exports;
  }

  n.m = e, n.c = t, n.d = function (e, t, i) {
    n.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: i
    });
  }, n.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, n.t = function (e, t) {
    if (1 & t && (e = n(e)), 8 & t) return e;
    if (4 & t && "object" == _typeof(e) && e && e.__esModule) return e;
    var i = Object.create(null);
    if (n.r(i), Object.defineProperty(i, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var o in e) {
      n.d(i, o, function (t) {
        return e[t];
      }.bind(null, o));
    }
    return i;
  }, n.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return n.d(t, "a", t), t;
  }, n.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, n.p = "", n(n.s = 21);
}([function (e, t) {
  e.exports = {
    m9Vars: {
      smallScreenCategories: ["ss", "ms"],
      largeScreenCategories: ["ls", "xl", "xxl", "massive"],
      isSmallScreen: !1,
      flickityOpts: {
        wrapAround: !0
      }
    }
  };
}, function (e, t) {
  e.exports = function () {
    ({
      delay: 8,
      _x: 0,
      _y: 0,
      endX: window.innerWidth / 2,
      endY: window.innerHeight / 2,
      cursorVisible: !0,
      cursorEnlarged: !1,
      $dot: $1(".cursor-dot"),
      $outline: $1(".cursor-dot-outline"),
      init: function init() {
        this.dotSize = this.$dot.offsetWidth, this.outlineSize = this.$outline.offsetWidth, this.setupEventListeners(), this.animateDotOutline();
      },
      setupEventListeners: function setupEventListeners() {
        var e = this;
        $("a, button").forEach(function (t) {
          t.addEventListener("mouseover", function () {
            e.cursorEnlarged = !0, e.toggleCursorSize(), addClass(e.$outline, "elementHover");
          }), t.addEventListener("mouseout", function () {
            e.cursorEnlarged = !1, e.toggleCursorSize(), removeClass(e.$outline, "elementHover");
          });
        }), $(".hover-cursor-effect").forEach(function (t) {
          t.addEventListener("mouseover", function () {
            addClass(e.$outline, "imgHover");
          }), t.addEventListener("mouseout", function () {
            removeClass(e.$outline, "imgHover");
          });
        }), document.addEventListener("mousedown", function () {
          e.cursorEnlarged = !0, e.toggleCursorSize();
        }), document.addEventListener("mouseup", function () {
          e.cursorEnlarged = !1, e.toggleCursorSize();
        }), document.addEventListener("mousemove", function (t) {
          e.cursorVisible = !0, e.toggleCursorVisibility(), e.endX = t.pageX, e.endY = t.pageY, e.$dot.style.top = e.endY + "px", e.$dot.style.left = e.endX + "px";
        }), document.addEventListener("mouseenter", function (t) {
          e.cursorVisible = !0, e.toggleCursorVisibility(), e.$dot.style.opacity = 1, e.$outline.style.opacity = 1;
        }), document.addEventListener("mouseleave", function (t) {
          e.cursorVisible = !0, e.toggleCursorVisibility(), e.$dot.style.opacity = 0, e.$outline.style.opacity = 0;
        });
      },
      animateDotOutline: function animateDotOutline() {
        this._x += (this.endX - this._x) / this.delay, this._y += (this.endY - this._y) / this.delay, this.$outline.style.top = this._y + "px", this.$outline.style.left = this._x + "px", requestAnimationFrame(this.animateDotOutline.bind(this));
      },
      toggleCursorSize: function toggleCursorSize() {
        var e = this;
        e.cursorEnlarged ? (e.$dot.style.transform = "translate(-50%, -50%) scale(0.5)", e.$outline.style.transform = "translate(-50%, -50%) scale(1.8)") : (e.$dot.style.transform = "translate(-50%, -50%) scale(1)", e.$outline.style.transform = "translate(-50%, -50%) scale(1)");
      },
      toggleCursorVisibility: function toggleCursorVisibility() {
        var e = this;
        e.cursorVisible && !hasClass(e.$outline, "elementHover") ? (e.$dot.style.opacity = 1, e.$outline.style.opacity = 1) : e.cursorVisible && hasClass(e.$outline, "elementHover") ? e.$outline.style.opacity = .5 : (e.$dot.style.opacity = 0, e.$outline.style.opacity = 0);
      }
    }).init();
  };
}, function (e, t) {
  e.exports = function () {
    var e = document.documentElement;
    window.matchMedia("(hover: hover)").matches && addClass(e, "is-hover-device");
  };
}, function (e, t) {
  e.exports = function () {
    var _this = this;

    var e = $1(".hamburger"),
        t = $1(".mn-site-nav"),
        n = $(".mn-site-nav-link-item"),
        i = $1("body"),
        o = $1(".mn-site-nav-video-bg"),
        s = $1(".mn-section-nav-strapline"),
        r = $(".mn-site-nav-contact-link"),
        a = $1("#mn-site-nav-vid"),
        c = $1(".is-nav-last"),
        l = gsap.timeline();

    function u() {
      toggleClass(e, "is-active"), toggleClass(i, "is-nav-active");
    }

    function d() {
      addClass(t, "is-active"), t.setAttribute("aria-expanded", "true");
    }

    function m() {
      hasClass(a, "has-video") && hasClass(a, "video-ready") && a.play();
    }

    function f() {
      var e = 0;

      var _loop = function _loop(_t) {
        var i = n[_t];
        e += 250, setTimeout(function () {
          addClass(i, "is-visible");
        }, 100 + e);
      };

      for (var _t = 0; _t < n.length; _t++) {
        _loop(_t);
      }
    }

    function p() {
      n.forEach(function (e) {
        removeClass(e, "is-visible");
      });
    }

    function g() {
      hasClass(t, "is-active") ? l.isActive() || (l.call(u), l.to(s, {
        opacity: 0,
        duration: .7,
        ease: "circ.out"
      }), hasClass(a, "has-video") && l.to(o, {
        opacity: 0,
        duration: .5,
        ease: "circ.inOut"
      }), l.to(r, {
        opacity: 0,
        duration: .3
      }), l.to(n, {
        left: 200,
        opacity: 0,
        duration: .15,
        stagger: .15,
        ease: "circ.Out",
        onComplete: p
      }, ">-0.4"), l.to(t, {
        x: "100%",
        duration: 1,
        ease: "circ.inOut",
        onComplete: function onComplete() {
          removeClass(t, "is-active"), t.setAttribute("aria-expanded", "false"), hasClass(a, "has-video") && a.pause();
        }
      })) : l.isActive() || (l.call(u), l.to(t, {
        x: 0,
        duration: 1,
        ease: "circ.inOut",
        onComplete: d
      }), l.to(n, {
        left: 0,
        opacity: 1,
        duration: .35,
        stagger: .35,
        ease: "circ.Out",
        onStart: f
      }, ">-0.4"), l.to(r, {
        opacity: 1,
        duration: .5
      }), hasClass(a, "has-video") && l.to(o, {
        opacity: 1,
        duration: 2,
        ease: "circ.inOut",
        onComplete: m
      }), l.to(s, {
        opacity: 1,
        duration: .5,
        ease: "circ.out"
      }, "<-1.0"));
    }

    e.addEventListener("click", function () {
      g();
    }), n.forEach(function (e) {
      e.addEventListener("click", function (t) {
        if (t.preventDefault(), !l.isActive()) {
          var _t2 = e.getAttribute("href");

          g(), setTimeout(function () {
            _this.doPageScroll(_t2);
          }, 3e3);
        }
      });
    }), c.addEventListener("blur", function (n) {
      hasClass(t, "is-active") && e.focus();
    });
  };
}, function (e, t) {
  e.exports = function () {
    var e = $1(".mn-section-about-hd-lg"),
        t = $(".mn-section-about-hd-anim"),
        n = new ScrollMagic.Controller();
    var i = gsap.timeline({
      paused: !0
    });
    i.to(e, {
      duration: .7,
      opacity: 1,
      left: 0,
      "-webkit-filter": " blur(0px)",
      ease: "circ.inOut(0.5)"
    }, .5), i.to(t, {
      duration: .8,
      stagger: .25,
      opacity: 1,
      top: 0,
      "-webkit-filter": " blur(0px)",
      ease: "circ.inOut(0.5)"
    }, ">-0.3"), new ScrollMagic.Scene({
      triggerElement: "#js-about-top",
      offset: -100
    }).on("enter", function () {
      i.play();
    }).on("leave", function () {
      i.reverse();
    }).addTo(n);
    var o = gsap.timeline({
      paused: !0
    }),
        s = $(".mn-section-services-item-hd"),
        r = $(".mn-section-services-item-list");
    o.to(s, {
      duration: .2,
      opacity: 1,
      stagger: .2,
      scaleX: 1,
      scaleY: 1,
      "-webkit-filter": " blur(0px)",
      ease: "circ.inOut(0.3)"
    }, ">-1.8"), o.to(r, {
      duration: .4,
      stagger: .17,
      opacity: 1,
      top: 0,
      ease: "circ.out(0.4)"
    }, ">0.2"), new ScrollMagic.Scene({
      triggerElement: "#js-services-top"
    }).on("enter", function () {
      o.play();
    }).on("leave", function () {
      o.reverse();
    }).addTo(n);
  };
}, function (e, t) {
  e.exports = function () {
    var e = this,
        t = $(".mn-scroll-trig");

    for (var n = 0; n < t.length; n++) {
      t[n].addEventListener("click", function (t) {
        t.preventDefault();
        var n = this.getAttribute("href");
        e.doPageScroll(n);
      });
    }
  };
}, function (e, t) {
  e.exports = function (e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1.3;
    gsap.to(window, {
      duration: t,
      scrollTo: {
        y: e,
        autoKill: !1
      },
      ease: "circ.inOut"
    });
  };
}, function (e, t) {
  e.exports = function () {
    var e = $(".mn-section-main"),
        t = $1("body"),
        n = this;

    var _loop2 = function _loop2(i) {
      var o = e[i],
          s = i,
          r = o.id,
          a = r + "-is-active",
          c = document.getElementById(r);
      new Waypoint({
        element: c,
        handler: function handler(e) {
          t.className = "", addClass(t, a), n.manageSliderClasses(s);
        },
        offset: "15%"
      }), new Waypoint({
        element: c,
        handler: function handler(e) {
          t.className = "", addClass(t, a), n.manageSliderClasses(s);
        },
        offset: "-15%"
      });
    };

    for (var i = 0; i < e.length; i++) {
      _loop2(i);
    }

    n.manageSliderClasses(0), window.onscroll = function () {
      0 === window.pageYOffset && (t.className = "", addClass(t, "js-section-home-is-active"), n.manageSliderClasses());
    };
  };
}, function (e, t) {
  e.exports = function () {
    $1(".mn-site-footer-btt").addEventListener("click", function () {
      gsap.to(document.documentElement, {
        duration: 1.2,
        scrollTo: {
          y: 0,
          autoKill: !1
        },
        ease: "circ.inOut"
      });
    });
  };
}, function (e, t) {
  e.exports = function () {
    var e = $1(".mn-contact-feedback");
    $1(".mn-contact-frm"), new JustValidate(".mn-contact-frm", {
      rules: {
        cmrName: {
          required: !0
        },
        cmrEmail: {
          required: !0,
          email: !0
        },
        cmrNumber: {
          required: !0
        },
        cmrMessage: {
          required: !0
        }
      },
      messages: {
        cmrName: "Please Enter Your Name",
        cmrEmail: "An Email Address Is Required",
        cmrNumber: "Please Add Your Phone Number ",
        cmrMessage: "A Message Is Required"
      },
      submitHandler: function submitHandler(t, n, i) {
        i({
          url: "/site-partials/form-handler.php",
          method: "POST",
          data: n,
          async: !0,
          callback: function callback(n) {
            e.innerHTML = n, t.reset();
          },
          error: function error() {
            e.innerHTML = " There was a problem with your submission, please try again";
          }
        });
      }
    });
  };
}, function (e, t) {
  e.exports = function () {
    var e = currScreenSize();
    if ("ss" === e || "ms" === e || "ls" === e || "xls" === e || !navigator.onLine) return;
    var t = $(".mn-site-nav-video-bg"),
        n = [{
      type: "mp4"
    }, {
      type: "webm"
    }];

    var _loop3 = function _loop3(_e) {
      var i = t[_e],
          o = i.querySelector("video"),
          s = i.dataset.videoId;

      for (var _e2 = 0; _e2 < n.length; _e2++) {
        var _t3 = '<source src="' + (s + "." + n[_e2].type) + '" type="video/' + n[_e2].type + '">';

        o.innerHTML += _t3, addClass(o, "has-video");
      }

      o.addEventListener("loadeddata", function () {
        o.readyState >= 3 && addClass(o, "video-ready");
      });
    };

    for (var _e = 0; _e < t.length; _e++) {
      _loop3(_e);
    }
  };
}, function (e, t) {
  e.exports = function (e) {
    var t = $(".mpp-slide-list li");
    if (t.forEach(function (e) {
      removeClass(e, "is-current");
    }), e) for (var n = 0; n < t.length; n++) {
      var i = t[n];
      n === e && addClass(i, "is-current");
    } else addClass(t[0], "is-current");
  };
}, function (e, t) {
  e.exports = function () {
    var e = currScreenSize();
    if ("ss" === e || "ms" === e) return;
    var t = $1(".mn-home-grad-bg.is-bg-b"),
        n = $1(".mn-home-grad-bg.is-bg-c"),
        i = $1(".mn-home-grad-bg.is-bg-d"),
        o = $1(".mn-home-grad-grid-bg"),
        s = ($1(".body"), $1(".mn-site-nav"));
    var r = gsap.timeline({
      repeat: -1
    });
    var a = gsap.utils.random(1, 6),
        c = gsap.utils.random(-2, 1.5);

    function l() {
      r.pause();
    }

    function u() {
      r.play();
    }

    r.to(t, {
      duration: a,
      opacity: 1
    }, c), r.to(t, {
      duration: 1.2,
      opacity: 0
    }), r.to(n, {
      duration: 1,
      opacity: .5
    }), r.to(o, {
      duration: 4,
      opacity: 0
    }), r.to(n, {
      duration: .65,
      opacity: 0
    }), r.to(i, {
      duration: a,
      opacity: .5
    }, c), r.to(o, {
      duration: 3,
      opacity: 1
    }), r.to(i, {
      duration: 1.2,
      opacity: 0
    }), window.onscroll = function () {
      d();
    };
    var d = debounce(function () {
      window.pageYOffset < 200 ? u() : l();
    }, 300);

    if ("MutationObserver" in window) {
      new MutationObserver(function (e) {
        e.forEach(function (e) {
          "class" === e.attributeName && (hasClass(s, "is-active") ? l() : u());
        });
      }).observe(s, {
        attributes: !0
      });
    }
  };
}, function (e, t) {
  e.exports = function () {
    var e = $(".mn-project-grid-item-content");

    for (var _t4 = 0; _t4 < e.length; _t4++) {
      var n = e[_t4];
      n.addEventListener("mouseenter", function (t) {
        for (var _n = 0; _n < e.length; _n++) {
          var i = e[_n],
              o = i.parentNode;
          i !== t.currentTarget ? addClass(o, "items-active") : addClass(o, "is-current-grid-item");
        }
      }), n.addEventListener("mouseleave", function () {
        for (var _t5 = 0; _t5 < e.length; _t5++) {
          var _n2 = e[_t5].parentNode;
          removeClass(_n2, "items-active"), removeClass(_n2, "is-current-grid-item");
        }
      });
    }
  };
}, function (e, t) {
  e.exports = function () {
    var _this2 = this;

    var e = $(".mn-project-grid-item-trigger"),
        t = $1(".mn-project-grid-item-cs-wrap");

    var _loop4 = function _loop4(n) {
      var i = e[n];
      i.addEventListener("click", function (e) {
        e.preventDefault(), addClass(t, "is-active"), addClass(i, "is-active"), addClass(i.parentNode, "is-active"), _this2.loadProjectPartial(i);
      });
    };

    for (var n = 0; n < e.length; n++) {
      _loop4(n);
    }
  };
}, function (e, t, n) {
  var _n3 = n(0),
      i = _n3.m9Vars;

  e.exports = function (e) {
    var t = $1(".mn-project-grid-item-cs-wrap");
    var n = gsap.timeline(),
        o = $1(".mn-project-grid-item-cs-wrap-inner"),
        s = document.documentElement,
        r = $1(".mn-projects-summary-detail-close"),
        a = $(".mn-project-grid-item"),
        c = $(".mn-project-grid-item-trigger"),
        l = this;
    "go" === e ? (n.to(t, {
      duration: .3,
      height: "100vh",
      ease: "circ.inOut"
    }), i.isSmallScreen || n.to(a, {
      duration: .1,
      stagger: {
        each: .1,
        from: "center"
      },
      opacity: 0,
      top: "250px",
      ease: "circ.inOut"
    }), n.to(t, {
      duration: .2,
      opacity: 1,
      ease: "circ.inOut"
    }, "<1"), n.to(o, {
      duration: .6,
      top: 0,
      opacity: 1,
      ease: "circ.inOut(0.5)",
      onComplete: function onComplete() {
        addClass(s, "is-projects-active"), l.projectDetailControl(), t.setAttribute("aria-expanded", "true");
      }
    }, "<"), n.to(r, {
      duration: .6,
      opacity: .8,
      ease: "circ.inOut(0.5)"
    })) : (n.to(r, {
      duration: .6,
      opacity: 0,
      ease: "circ.inOut(0.5)"
    }), n.to(o, {
      duration: .7,
      top: "20rem",
      opacity: 0,
      ease: "circ.inOut(0.5)"
    }), n.to(t, {
      duration: .5,
      opacity: 0,
      ease: "circ.in",
      onComplete: function onComplete() {
        for (var _e3 = 0; _e3 < c.length; _e3++) {
          var _t6 = c[_e3];
          removeClass(_t6, "is-active"), removeClass(_t6.parentNode, "is-active");
        }

        removeClass(t, "is-active"), removeClass(s, "is-projects-active"), t.setAttribute("aria-expanded", "false");
      }
    }), i.isSmallScreen || n.to(a, {
      duration: .3,
      stagger: {
        each: .15,
        from: "end"
      },
      opacity: 1,
      top: 0,
      ease: "expo.out"
    }), n.to(t, {
      duration: .1,
      height: 0,
      ease: "circ.in",
      onComplete: function onComplete() {
        o.innerHTML = "";
      }
    }));
  };
}, function (e, t) {
  e.exports = function (e) {
    var t = e.dataset.content,
        n = $1(".mn-project-grid-item-cs-wrap-inner");
    var i = this;
    partialLoader(n, t).then(function () {
      i.csWrapperAnimation("go"), i.setOfflineElements();
    })["catch"](function () {});
  };
}, function (e, t) {
  e.exports = function () {
    var _this3 = this;

    var e = $(".mn-project-summary-btt"),
        t = $1(".mn-project-grid-item-cs-wrap"),
        n = $1(".mn-projects-summary-detail-close"),
        i = document.documentElement;
    e.forEach(function (e) {
      e.addEventListener("click", function () {
        gsap.to(t, {
          duration: 1.3,
          scrollTo: {
            y: 0,
            autoKill: !1
          },
          ease: "circ.inOut"
        });
      });
    }), n.addEventListener("click", function () {
      _this3.csWrapperAnimation();
    }), window.addEventListener("keyup", function (e) {
      hasClass(i, "is-projects-active") && ("Escape" !== e.key && 27 !== e.which || _this3.csWrapperAnimation());
    });
  };
}, function (e, t, n) {
  var _n4 = n(0),
      i = _n4.m9Vars;

  e.exports = function () {
    var e = document.documentElement;

    function t() {
      var t = currScreenSize();
      i.isSmallScreen = i.smallScreenCategories.includes(t), i.isSmallScreen ? addClass(e, "is-small-screen") : removeClass(e, "is-small-screen");
    }

    t();
    var n = debounce(function () {
      t();
    }, 500);
    window.addEventListener("resize", n);
  };
}, function (e, t, n) {
  var _n5 = n(0),
      i = _n5.m9Vars;

  e.exports = function () {
    function e() {
      i.isSmallScreen ? i.flkty = new Flickity(".carousel", i.flickityOpts) : i.flkty && i.flkty.destroy();
    }

    e();
    var t = debounce(function () {
      e();
    }, 500);
    window.addEventListener("resize", t);
  };
}, function (e, t) {
  e.exports = function () {
    var e = function e() {
      navigator.onLine ? (addClass(document.documentElement, "is-online"), removeClass(document.documentElement, "is-offline")) : (addClass(document.documentElement, "is-offline"), removeClass(document.documentElement, "is-online"));
    };

    e(), window.addEventListener("online", e), window.addEventListener("offline", e);
  };
}, function (e, t, n) {
  "use strict";

  n.r(t);

  var i = n(1),
      o = n.n(i),
      s = n(2),
      r = n.n(s),
      a = n(3),
      c = n.n(a),
      l = n(4),
      u = n.n(l),
      d = n(5),
      m = n.n(d),
      f = n(6),
      p = n.n(f),
      g = n(7),
      v = n.n(g),
      h = n(8),
      y = n.n(h),
      C = n(9),
      b = n.n(C),
      $ = n(10),
      S = n.n($),
      E = n(11),
      w = n.n(E),
      x = n(12),
      O = n.n(x),
      L = n(13),
      j = n.n(L),
      A = n(14),
      k = n.n(A),
      P = n(15),
      V = n.n(P),
      T = n(16),
      M = n.n(T),
      N = n(17),
      z = n.n(N),
      H = n(18),
      _ = n.n(H),
      q = n(19),
      Y = n.n(q),
      D = n(20),
      W = n.n(D);

  var _n6 = n(0),
      X = _n6.m9Vars,
      I = {};

  I.start = {
    config: {},
    cursorSetup: o(),
    canHover: r(),
    runNav: c(),
    runScrollAnimations: u(),
    scrollToSection: m(),
    doPageScroll: p(),
    activeSectionClasses: v(),
    siteBtt: y(),
    formValidation: b(),
    triggerVideos: S(),
    manageSliderClasses: w(),
    homeSquaresAnimation: O(),
    projectGridActions: j(),
    projectCaseStudyControl: k(),
    csWrapperAnimation: V(),
    loadProjectPartial: M(),
    projectDetailControl: z(),
    resizeActions: _(),
    setUpCarousel: Y(),
    setOfflineElements: W(),
    init: function init(e) {
      if (e && "object" == _typeof(e)) for (var _t7 in e) {
        e.hasOwnProperty(_t7) && (this.config[_t7] = e[_t7]);
      }
      this.canHover();
      var t = currScreenSize();
      X.largeScreenCategories.includes(t) && this.cursorSetup(), this.resizeActions(), this.runNav(), this.runScrollAnimations(), this.scrollToSection(), this.activeSectionClasses(), this.siteBtt(), this.formValidation(), this.projectGridActions(), this.projectCaseStudyControl(), this.setOfflineElements();
    }
  }, window.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollToPlugin), gsap.registerPlugin(CSSRulePlugin), I.start.init();
  }), window.addEventListener("load", function () {
    I.start.triggerVideos(), I.start.homeSquaresAnimation(), I.start.setUpCarousel();
  });
}]);