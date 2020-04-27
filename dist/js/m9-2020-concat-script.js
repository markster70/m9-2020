function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * CSSRulePlugin 3.2.6
 * https://greensock.com
 * 
 * @license Copyright 2020, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
!function (e, t) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t((e = e || self).window = e.window || {});
}(this, function (e) {
  "use strict";

  function h() {
    return "undefined" != typeof window;
  }

  function i() {
    return t || h() && (t = window.gsap) && t.registerPlugin && t;
  }

  function j() {
    return n || (s(), o || console.warn("Please gsap.registerPlugin(CSSPlugin, CSSRulePlugin)")), n;
  }

  var t,
      n,
      c,
      o,
      s = function _initCore(e) {
    t = e || i(), h() && (c = document), t && (o = t.plugins.css) && (n = 1);
  },
      r = {
    version: "3.2.6",
    name: "cssRule",
    init: function init(e, t, n, i, s) {
      if (!j() || void 0 === e.cssText) return !1;
      var r = e._gsProxy = e._gsProxy || c.createElement("div");
      this.ss = e, this.style = r.style, r.style.cssText = e.cssText, o.prototype.init.call(this, r, t, n, i, s);
    },
    render: function render(e, t) {
      for (var n, i = t._pt, s = t.style, r = t.ss; i;) {
        i.r(e, i.d), i = i._next;
      }

      for (n = s.length; -1 < --n;) {
        r[s[n]] = s[s[n]];
      }
    },
    getRule: function getRule(e) {
      j();
      var t,
          n,
          i,
          s,
          r = c.all ? "rules" : "cssRules",
          o = c.styleSheets,
          l = o.length,
          u = ":" === e.charAt(0);

      for (e = (u ? "" : ",") + e.split("::").join(":").toLowerCase() + ",", u && (s = []); l--;) {
        try {
          if (!(n = o[l][r])) continue;
          t = n.length;
        } catch (e) {
          console.warn(e);
          continue;
        }

        for (; -1 < --t;) {
          if ((i = n[t]).selectorText && -1 !== ("," + i.selectorText.split("::").join(":").toLowerCase() + ",").indexOf(e)) {
            if (!u) return i.style;
            s.push(i.style);
          }
        }
      }

      return s;
    },
    register: s
  };

  i() && t.registerPlugin(r), e.CSSRulePlugin = r, e["default"] = r;

  if (typeof window === "undefined" || window !== e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
  } else {
    delete e["default"];
  }
});
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * Draggable 3.2.6
 * https://greensock.com
 * 
 * @license Copyright 2020, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
!function (t, e) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = t || self).window = t.window || {});
}(this, function (t) {
  "use strict";

  function u(t, e) {
    if (t.parentNode && (d || b(t))) {
      var n = L(t),
          o = n ? n.getAttribute("xmlns") || "http://www.w3.org/2000/svg" : "http://www.w3.org/1999/xhtml",
          r = n ? e ? "rect" : "g" : "div",
          i = 2 !== e ? 0 : 100,
          a = 3 === e ? 100 : 0,
          l = "position:absolute;display:block;pointer-events:none;",
          s = d.createElementNS ? d.createElementNS(o.replace(/^https/, "http"), r) : d.createElement(r);
      return e && (n ? (f = f || u(t), s.setAttribute("width", .01), s.setAttribute("height", .01), s.setAttribute("transform", "translate(" + i + "," + a + ")"), f.appendChild(s)) : (h || ((h = u(t)).style.cssText = l), s.style.cssText = l + "width:0.1px;height:0.1px;top:" + a + "px;left:" + i + "px", h.appendChild(s))), s;
    }

    throw "Need document and parent.";
  }

  function x(t, e, n, o, r, i, a) {
    return t.a = e, t.b = n, t.c = o, t.d = r, t.e = i, t.f = a, t;
  }

  var d,
      p,
      r,
      i,
      h,
      f,
      g,
      m,
      e,
      v = "transform",
      y = v + "Origin",
      b = function _setDoc(t) {
    var e = t.ownerDocument || t;
    !(v in t.style) && "msTransform" in t.style && (y = (v = "msTransform") + "Origin");

    for (; e.parentNode && (e = e.parentNode);) {
      ;
    }

    if (p = window, g = new ht(), e) {
      r = (d = e).documentElement, i = e.body;
      var n = e.createElement("div"),
          o = e.createElement("div");
      i.appendChild(n), n.appendChild(o), n.style.position = "static", n.style[v] = "translate3d(0,0,1px)", m = o.offsetParent !== n, i.removeChild(n);
    }

    return e;
  },
      w = [],
      D = [],
      E = function _getDocScrollTop() {
    return p.pageYOffset || d.scrollTop || r.scrollTop || i.scrollTop || 0;
  },
      M = function _getDocScrollLeft() {
    return p.pageXOffset || d.scrollLeft || r.scrollLeft || i.scrollLeft || 0;
  },
      L = function _svgOwner(t) {
    return t.ownerSVGElement || ("svg" === (t.tagName + "").toLowerCase() ? t : null);
  },
      k = function _isFixed(t) {
    return "fixed" === p.getComputedStyle(t).position || ((t = t.parentNode) && 1 === t.nodeType ? _isFixed(t) : void 0);
  },
      Y = function _placeSiblings(t, e) {
    var n,
        o,
        r,
        i,
        a,
        l = L(t),
        s = t === l,
        c = l ? w : D;
    if (t === p) return t;
    if (c.length || c.push(u(t, 1), u(t, 2), u(t, 3)), n = l ? f : h, l) r = s ? {
      x: 0,
      y: 0
    } : t.getBBox(), a = (o = t.transform ? t.transform.baseVal : {}).numberOfItems ? (i = (o = 1 < o.numberOfItems ? function _consolidate(t) {
      for (var e = new ht(), n = 0; n < t.numberOfItems; n++) {
        e.multiply(t.getItem(n).matrix);
      }

      return e;
    }(o) : o.getItem(0).matrix).a * r.x + o.c * r.y, o.b * r.x + o.d * r.y) : (o = g, i = r.x, r.y), e && "g" === t.tagName.toLowerCase() && (i = a = 0), n.setAttribute("transform", "matrix(" + o.a + "," + o.b + "," + o.c + "," + o.d + "," + (o.e + i) + "," + (o.f + a) + ")"), (s ? l : t.parentNode).appendChild(n);else {
      if (i = a = 0, m) for (o = t.offsetParent, r = t; (r = r && r.parentNode) && r !== o && r.parentNode;) {
        4 < (p.getComputedStyle(r)[v] + "").length && (i = r.offsetLeft, a = r.offsetTop, r = 0);
      }
      (r = n.style).top = t.offsetTop - a + "px", r.left = t.offsetLeft - i + "px", o = p.getComputedStyle(t), r[v] = o[v], r[y] = o[y], r.border = o.border, r.borderLeftStyle = o.borderLeftStyle, r.borderTopStyle = o.borderTopStyle, r.borderLeftWidth = o.borderLeftWidth, r.borderTopWidth = o.borderTopWidth, r.position = "fixed" === o.position ? "fixed" : "absolute", t.parentNode.appendChild(n);
    }
    return n;
  },
      ht = ((e = Matrix2D.prototype).inverse = function inverse() {
    var t = this.a,
        e = this.b,
        n = this.c,
        o = this.d,
        r = this.e,
        i = this.f,
        a = t * o - e * n;
    return x(this, o / a, -e / a, -n / a, t / a, (n * i - o * r) / a, -(t * i - e * r) / a);
  }, e.multiply = function multiply(t) {
    var e = this.a,
        n = this.b,
        o = this.c,
        r = this.d,
        i = this.e,
        a = this.f,
        l = t.a,
        s = t.c,
        c = t.b,
        u = t.d,
        d = t.e,
        p = t.f;
    return x(this, l * e + c * o, l * n + c * r, s * e + u * o, s * n + u * r, i + d * e + p * o, a + d * n + p * r);
  }, e.clone = function clone() {
    return new Matrix2D(this.a, this.b, this.c, this.d, this.e, this.f);
  }, e.equals = function equals(t) {
    var e = this.a,
        n = this.b,
        o = this.c,
        r = this.d,
        i = this.e,
        a = this.f;
    return e === t.a && n === t.b && o === t.c && r === t.d && i === t.e && a === t.f;
  }, e.apply = function apply(t, e) {
    void 0 === e && (e = {});
    var n = t.x,
        o = t.y,
        r = this.a,
        i = this.b,
        a = this.c,
        l = this.d,
        s = this.e,
        c = this.f;
    return e.x = n * r + o * a + s || 0, e.y = n * i + o * l + c || 0, e;
  }, Matrix2D);

  function Matrix2D(t, e, n, o, r, i) {
    void 0 === t && (t = 1), void 0 === e && (e = 0), void 0 === n && (n = 0), void 0 === o && (o = 1), void 0 === r && (r = 0), void 0 === i && (i = 0), x(this, t, e, n, o, r, i);
  }

  function getGlobalMatrix(t, e, n) {
    if (!t || !t.parentNode || (d || b(t)).documentElement === t) return new ht();
    var o = L(t) ? w : D,
        r = Y(t, n),
        i = o[0].getBoundingClientRect(),
        a = o[1].getBoundingClientRect(),
        l = o[2].getBoundingClientRect(),
        s = r.parentNode,
        c = k(t),
        u = new ht((a.left - i.left) / 100, (a.top - i.top) / 100, (l.left - i.left) / 100, (l.top - i.top) / 100, i.left + (c ? 0 : M()), i.top + (c ? 0 : E()));
    return s.removeChild(r), e ? u.inverse() : u;
  }

  function S() {
    return "undefined" != typeof window;
  }

  function T() {
    return ft || S() && (ft = window.gsap) && ft.registerPlugin && ft;
  }

  function U(t) {
    return "function" == typeof t;
  }

  function V(t) {
    return "object" == _typeof(t);
  }

  function W(t) {
    return void 0 === t;
  }

  function X() {
    return !1;
  }

  function $(t) {
    return Math.round(1e4 * t) / 1e4;
  }

  function aa(t, e) {
    var n = xt.createElementNS ? xt.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : xt.createElement(t);
    return n.style ? n : xt.createElement(t);
  }

  function ma(t, e) {
    var n,
        o = {};

    for (n in t) {
      o[n] = e ? t[n] * e : t[n];
    }

    return o;
  }

  function oa() {
    return _t.forEach(function (t) {
      return t();
    });
  }

  function qa() {
    return !_t.length && ft.ticker.remove(oa);
  }

  function ra(t) {
    for (var e = _t.length; e--;) {
      _t[e] === t && _t.splice(e, 1);
    }

    ft.to(qa, {
      overwrite: !0,
      delay: 15,
      duration: 0,
      onComplete: qa,
      data: "_draggable"
    });
  }

  function ta(t, e, n, o) {
    if (t.addEventListener) {
      var r = wt[e];
      o = o || (P ? {
        passive: !1
      } : null), t.addEventListener(r || e, n, o), r && e !== r && "pointer" !== r.substr(0, 7) && t.addEventListener(e, n, o);
    }
  }

  function ua(t, e, n) {
    if (t.removeEventListener) {
      var o = wt[e];
      t.removeEventListener(o || e, n), o && e !== o && "pointer" !== o.substr(0, 7) && t.removeEventListener(e, n);
    }
  }

  function va(t) {
    t.preventDefault && (t.preventDefault(), t.preventManipulation && t.preventManipulation());
  }

  function xa(t) {
    Dt = t.touches && Tt < t.touches.length, ua(t.target, "touchend", xa);
  }

  function ya(t) {
    Dt = t.touches && Tt < t.touches.length, ta(t.target, "touchend", xa);
  }

  function za(t) {
    return gt.pageYOffset || t.scrollTop || t.documentElement.scrollTop || t.body.scrollTop || 0;
  }

  function Aa(t) {
    return gt.pageXOffset || t.scrollLeft || t.documentElement.scrollLeft || t.body.scrollLeft || 0;
  }

  function Ba(t, e) {
    ta(t, "scroll", e), Bt(t.parentNode) || Ba(t.parentNode, e);
  }

  function Ca(t, e) {
    ua(t, "scroll", e), Bt(t.parentNode) || Ca(t.parentNode, e);
  }

  function Ea(t, e) {
    var n = "x" === e ? "Width" : "Height",
        o = "scroll" + n,
        r = "client" + n;
    return Math.max(0, Bt(t) ? Math.max(mt[o], l[o]) - (gt["inner" + n] || mt[r] || l[r]) : t[o] - t[r]);
  }

  function Fa(t, e) {
    var n = Ea(t, "x"),
        o = Ea(t, "y");
    Bt(t) ? t = Wt : Fa(t.parentNode, e), t._gsMaxScrollX = n, t._gsMaxScrollY = o, e || (t._gsScrollX = t.scrollLeft || 0, t._gsScrollY = t.scrollTop || 0);
  }

  function Ga(t, e, n) {
    var o = t.style;
    o && (W(o[e]) && (e = C(e, t) || e), null == n ? o.removeProperty && o.removeProperty(e.replace(/([A-Z])/g, "-$1").toLowerCase()) : o[e] = n);
  }

  function Ha(t) {
    return gt.getComputedStyle(t instanceof Element ? t : t.host || (t.parentNode || {}).host || t);
  }

  function Ja(t) {
    if (t === gt) return R.left = R.top = 0, R.width = R.right = mt.clientWidth || t.innerWidth || l.clientWidth || 0, R.height = R.bottom = (t.innerHeight || 0) - 20 < mt.clientHeight ? mt.clientHeight : t.innerHeight || l.clientHeight || 0, R;
    var e = t.ownerDocument || xt,
        n = W(t.pageX) ? t.nodeType || W(t.left) || W(t.top) ? yt(t)[0].getBoundingClientRect() : t : {
      left: t.pageX - Aa(e),
      top: t.pageY - za(e),
      right: t.pageX - Aa(e) + 1,
      bottom: t.pageY - za(e) + 1
    };
    return W(n.right) && !W(n.width) ? (n.right = n.left + n.width, n.bottom = n.top + n.height) : W(n.width) && (n = {
      width: n.right - n.left,
      height: n.bottom - n.top,
      right: n.right,
      left: n.left,
      bottom: n.bottom,
      top: n.top
    }), n;
  }

  function Ka(t, e, n) {
    var o,
        r = t.vars,
        i = r[n],
        a = t._listeners[e];
    return U(i) && (o = i.apply(r.callbackScope || t, r[n + "Params"] || [t.pointerEvent])), a && !1 === t.dispatchEvent(e) && (o = !1), o;
  }

  function La(t, e) {
    var n,
        o,
        r,
        i = yt(t)[0];
    return i.nodeType || i === gt ? A(i, e) : W(t.left) ? {
      left: o = t.min || t.minX || t.minRotation || 0,
      top: n = t.min || t.minY || 0,
      width: (t.max || t.maxX || t.maxRotation || 0) - o,
      height: (t.max || t.maxY || 0) - n
    } : (r = {
      x: 0,
      y: 0
    }, {
      left: t.left - r.x,
      top: t.top - r.y,
      width: t.width,
      height: t.height
    });
  }

  function Oa(r, i, t, e, a, n) {
    var o,
        l,
        s,
        c = {};
    if (i) if (1 !== a && i instanceof Array) {
      if (c.end = o = [], s = i.length, V(i[0])) for (l = 0; l < s; l++) {
        o[l] = ma(i[l], a);
      } else for (l = 0; l < s; l++) {
        o[l] = i[l] * a;
      }
      t += 1.1, e -= 1.1;
    } else U(i) ? c.end = function (t) {
      var e,
          n,
          o = i.call(r, t);
      if (1 !== a) if (V(o)) {
        for (n in e = {}, o) {
          e[n] = o[n] * a;
        }

        o = e;
      } else o *= a;
      return o;
    } : c.end = i;
    return !t && 0 !== t || (c.max = t), !e && 0 !== e || (c.min = e), n && (c.velocity = 0), c;
  }

  function Pa(t) {
    var e;
    return !(!t || !t.getAttribute || t === l) && (!("true" !== (e = t.getAttribute("data-clickable")) && ("false" === e || !t.onclick && !o.test(t.nodeName + "") && "true" !== t.getAttribute("contentEditable"))) || Pa(t.parentNode));
  }

  function Qa(t, e) {
    for (var n, o = t.length; o--;) {
      (n = t[o]).ondragstart = n.onselectstart = e ? null : X, ft.set(n, {
        lazy: !0,
        userSelect: e ? "text" : "none"
      });
    }
  }

  function Ua(i, r) {
    i = ft.utils.toArray(i)[0], r = r || {};
    var a,
        l,
        s,
        t,
        c,
        u,
        d = document.createElement("div"),
        p = d.style,
        e = i.firstChild,
        h = 0,
        f = 0,
        g = i.scrollTop,
        x = i.scrollLeft,
        m = i.scrollWidth,
        v = i.scrollHeight,
        y = 0,
        b = 0,
        w = 0;
    _ && !1 !== r.force3D ? (c = "translate3d(", u = "px,0px)") : O && (c = "translate(", u = "px)"), this.scrollTop = function (t, e) {
      if (!arguments.length) return -this.top();
      this.top(-t, e);
    }, this.scrollLeft = function (t, e) {
      if (!arguments.length) return -this.left();
      this.left(-t, e);
    }, this.left = function (t, e) {
      if (!arguments.length) return -(i.scrollLeft + f);
      var n = i.scrollLeft - x,
          o = f;
      if ((2 < n || n < -2) && !e) return x = i.scrollLeft, ft.killTweensOf(this, {
        left: 1,
        scrollLeft: 1
      }), this.left(-x), void (r.onKill && r.onKill());
      (t = -t) < 0 ? (f = t - .5 | 0, t = 0) : b < t ? (f = t - b | 0, t = b) : f = 0, (f || o) && (this._skip || (p[O] = c + -f + "px," + -h + u), 0 <= f + y && (p.paddingRight = f + y + "px")), i.scrollLeft = 0 | t, x = i.scrollLeft;
    }, this.top = function (t, e) {
      if (!arguments.length) return -(i.scrollTop + h);
      var n = i.scrollTop - g,
          o = h;
      if ((2 < n || n < -2) && !e) return g = i.scrollTop, ft.killTweensOf(this, {
        top: 1,
        scrollTop: 1
      }), this.top(-g), void (r.onKill && r.onKill());
      (t = -t) < 0 ? (h = t - .5 | 0, t = 0) : w < t ? (h = t - w | 0, t = w) : h = 0, (h || o) && (this._skip || (p[O] = c + -f + "px," + -h + u)), i.scrollTop = 0 | t, g = i.scrollTop;
    }, this.maxScrollTop = function () {
      return w;
    }, this.maxScrollLeft = function () {
      return b;
    }, this.disable = function () {
      for (e = d.firstChild; e;) {
        t = e.nextSibling, i.appendChild(e), e = t;
      }

      i === d.parentNode && i.removeChild(d);
    }, this.enable = function () {
      if ((e = i.firstChild) !== d) {
        for (; e;) {
          t = e.nextSibling, d.appendChild(e), e = t;
        }

        i.appendChild(d), this.calibrate();
      }
    }, this.calibrate = function (t) {
      var e,
          n,
          o,
          r = i.clientWidth === a;
      g = i.scrollTop, x = i.scrollLeft, r && i.clientHeight === l && d.offsetHeight === s && m === i.scrollWidth && v === i.scrollHeight && !t || ((h || f) && (n = this.left(), o = this.top(), this.left(-i.scrollLeft), this.top(-i.scrollTop)), e = Ha(i), r && !t || (p.display = "block", p.width = "auto", p.paddingRight = "0px", (y = Math.max(0, i.scrollWidth - i.clientWidth)) && (y += parseFloat(e.paddingLeft) + (N ? parseFloat(e.paddingRight) : 0))), p.display = "inline-block", p.position = "relative", p.overflow = "visible", p.verticalAlign = "top", p.boxSizing = "content-box", p.width = "100%", p.paddingRight = y + "px", N && (p.paddingBottom = e.paddingBottom), a = i.clientWidth, l = i.clientHeight, m = i.scrollWidth, v = i.scrollHeight, b = i.scrollWidth - a, w = i.scrollHeight - l, s = d.offsetHeight, p.display = "block", (n || o) && (this.left(n), this.top(o)));
    }, this.content = d, this.element = i, this._skip = !1, this.enable();
  }

  function Va(t) {
    if (S() && document.body) {
      var e = window && window.navigator;
      gt = window, xt = document, mt = xt.documentElement, l = xt.body, s = aa("div"), Lt = !!window.PointerEvent, (vt = aa("div")).style.cssText = "visibility:hidden;height:1px;top:-1px;pointer-events:none;position:relative;clear:both;cursor:grab", St = "grab" === vt.style.cursor ? "grab" : "move", Et = e && -1 !== e.userAgent.toLowerCase().indexOf("android"), bt = "ontouchstart" in mt && "orientation" in gt || e && (0 < e.MaxTouchPoints || 0 < e.msMaxTouchPoints), o = aa("div"), r = aa("div"), i = r.style, a = l, i.display = "inline-block", i.position = "relative", o.style.cssText = r.innerHTML = "width:90px;height:40px;padding:10px;overflow:auto;visibility:hidden", o.appendChild(r), a.appendChild(o), n = r.offsetHeight + 18 > o.scrollHeight, a.removeChild(o), N = n, wt = function (t) {
        for (var e = t.split(","), n = (W(s.onpointerdown) ? W(s.onmspointerdown) ? t : "MSPointerDown,MSPointerMove,MSPointerUp,MSPointerCancel" : "pointerdown,pointermove,pointerup,pointercancel").split(","), o = {}, r = 4; -1 < --r;) {
          o[e[r]] = n[r], o[n[r]] = e[r];
        }

        try {
          mt.addEventListener("test", null, Object.defineProperty({}, "passive", {
            get: function get() {
              P = 1;
            }
          }));
        } catch (t) {}

        return o;
      }("touchstart,touchmove,touchend,touchcancel"), ta(xt, "touchcancel", X), ta(gt, "touchmove", X), l && l.addEventListener("touchstart", X), ta(xt, "contextmenu", function () {
        for (var t in Nt) {
          Nt[t].isPressed && Nt[t].endDrag();
        }
      }), ft = c = T();
    }

    var n, o, r, i, a;
    ft ? (Mt = ft.plugins.inertia, C = ft.utils.checkPrefix, O = C(O), Xt = C(Xt), yt = ft.utils.toArray, _ = !!C("perspective")) : t && console.warn("Please gsap.registerPlugin(Draggable)");
  }

  var ft,
      gt,
      xt,
      mt,
      l,
      s,
      vt,
      c,
      C,
      yt,
      P,
      bt,
      wt,
      Tt,
      Dt,
      Et,
      Mt,
      St,
      Lt,
      _,
      N,
      n,
      O = "transform",
      Xt = "transformOrigin",
      kt = Array.isArray,
      Yt = 180 / Math.PI,
      Ct = 1e20,
      a = new ht(),
      Pt = Date.now || function () {
    return new Date().getTime();
  },
      _t = [],
      Nt = {},
      Ot = 0,
      o = /^(?:a|input|textarea|button|select)$/i,
      Rt = 0,
      At = {},
      Wt = {},
      Bt = function _isRoot(t) {
    return !(t && t !== mt && 9 !== t.nodeType && t !== xt.body && t !== gt && t.nodeType && t.parentNode);
  },
      R = {},
      Ft = {},
      A = function _getElementBounds(t, e) {
    e = yt(e)[0];
    var n,
        o,
        r,
        i,
        a,
        l,
        s,
        c,
        u,
        d,
        p,
        h,
        f,
        g,
        x = t.getBBox && t.ownerSVGElement,
        m = t.ownerDocument || xt;
    if (t === gt) r = za(m), o = (n = Aa(m)) + (m.documentElement.clientWidth || t.innerWidth || m.body.clientWidth || 0), i = r + ((t.innerHeight || 0) - 20 < m.documentElement.clientHeight ? m.documentElement.clientHeight : t.innerHeight || m.body.clientHeight || 0);else {
      if (e === gt || W(e)) return t.getBoundingClientRect();
      n = r = 0, x ? (p = (d = t.getBBox()).width, h = d.height) : (t.viewBox && (d = t.viewBox.baseVal) && (n = d.x || 0, r = d.y || 0, p = d.width, h = d.height), p || (f = Ha(t), p = (parseFloat(f.width) || t.clientWidth || 0) + parseFloat(f.borderLeftWidth) + parseFloat(f.borderRightWidth), h = (parseFloat(f.height) || t.clientHeight || 0) + parseFloat(f.borderTopWidth) + parseFloat(f.borderBottomWidth))), o = p, i = h;
    }
    return t === e ? {
      left: n,
      top: r,
      width: o - n,
      height: i - r
    } : (l = (a = getGlobalMatrix(e, !0).multiply(getGlobalMatrix(t))).apply({
      x: n,
      y: r
    }), s = a.apply({
      x: o,
      y: r
    }), c = a.apply({
      x: o,
      y: i
    }), u = a.apply({
      x: n,
      y: i
    }), n = Math.min(l.x, s.x, c.x, u.x), r = Math.min(l.y, s.y, c.y, u.y), {
      left: n + ((g = e.parentNode || {}).scrollLeft || 0),
      top: r + (g.scrollTop || 0),
      width: Math.max(l.x, s.x, c.x, u.x) - n,
      height: Math.max(l.y, s.y, c.y, u.y) - r
    });
  },
      B = ((n = EventDispatcher.prototype).addEventListener = function addEventListener(t, e) {
    var n = this._listeners[t] || (this._listeners[t] = []);
    ~n.indexOf(e) || n.push(e);
  }, n.removeEventListener = function removeEventListener(t, e) {
    var n = this._listeners[t],
        o = n && n.indexOf(e) || -1;
    -1 < o && n.splice(o, 1);
  }, n.dispatchEvent = function dispatchEvent(e) {
    var n,
        o = this;
    return (this._listeners[e] || []).forEach(function (t) {
      return !1 === t.call(o, {
        type: e,
        target: o.target
      }) && (n = !1);
    }), n;
  }, EventDispatcher);

  function EventDispatcher(t) {
    this._listeners = {}, this.target = t || this;
  }

  var It,
      F = (function _inheritsLoose(t, e) {
    t.prototype = Object.create(e.prototype), (t.prototype.constructor = t).__proto__ = e;
  }(Draggable, It = B), Draggable.register = function register(t) {
    ft = t, Va();
  }, Draggable.create = function create(t, e) {
    return c || Va(!0), yt(t).map(function (t) {
      return new Draggable(t, e);
    });
  }, Draggable.get = function get(t) {
    return Nt[(yt(t)[0] || {})._gsDragID];
  }, Draggable.timeSinceDrag = function timeSinceDrag() {
    return (Pt() - Rt) / 1e3;
  }, Draggable.hitTest = function hitTest(t, e, n) {
    if (t === e) return !1;
    var o,
        r,
        i,
        a = Ja(t),
        l = Ja(e),
        s = a.top,
        c = a.left,
        u = a.right,
        d = a.bottom,
        p = a.width,
        h = a.height,
        f = l.left > u || l.right < c || l.top > d || l.bottom < s;
    return f || !n ? !f : (i = -1 !== (n + "").indexOf("%"), n = parseFloat(n) || 0, (o = {
      left: Math.max(c, l.left),
      top: Math.max(s, l.top)
    }).width = Math.min(u, l.right) - o.left, o.height = Math.min(d, l.bottom) - o.top, !(o.width < 0 || o.height < 0) && (i ? p * h * (n *= .01) <= (r = o.width * o.height) || r >= l.width * l.height * n : o.width > n && o.height > n));
  }, Draggable);

  function Draggable(h, d) {
    var t;
    t = It.call(this) || this, ft || Va(1), h = yt(h)[0], Mt = Mt || ft.plugins.inertia, t.vars = d = ma(d || {}), t.target = h, t.x = t.y = t.rotation = 0, t.dragResistance = parseFloat(d.dragResistance) || 0, t.edgeResistance = isNaN(d.edgeResistance) ? 1 : parseFloat(d.edgeResistance) || 0, t.lockAxis = d.lockAxis, t.autoScroll = d.autoScroll || 0, t.lockedAxis = null, t.allowEventDefault = !!d.allowEventDefault, ft.getProperty(h, "x");

    function wg(t, e) {
      return parseFloat(at.get(h, t, e));
    }

    function ah(t) {
      if (!(q.isPressed && t.which < 2)) return va(t), t.stopPropagation(), !1;
      q.endDrag();
    }

    function bh(t) {
      if (q.autoScroll && q.isDragging && (Z || Y)) {
        var e,
            n,
            o,
            r,
            i,
            a,
            l,
            s,
            c = h,
            u = 15 * q.autoScroll;

        for (Z = !1, Wt.scrollTop = null != gt.pageYOffset ? gt.pageYOffset : null != st.documentElement.scrollTop ? st.documentElement.scrollTop : st.body.scrollTop, Wt.scrollLeft = null != gt.pageXOffset ? gt.pageXOffset : null != st.documentElement.scrollLeft ? st.documentElement.scrollLeft : st.body.scrollLeft, r = q.pointerX - Wt.scrollLeft, i = q.pointerY - Wt.scrollTop; c && !n;) {
          e = (n = Bt(c.parentNode)) ? Wt : c.parentNode, o = n ? {
            bottom: Math.max(mt.clientHeight, gt.innerHeight || 0),
            right: Math.max(mt.clientWidth, gt.innerWidth || 0),
            left: 0,
            top: 0
          } : e.getBoundingClientRect(), a = l = 0, G && ((s = e._gsMaxScrollY - e.scrollTop) < 0 ? l = s : i > o.bottom - nt && s ? (Z = !0, l = Math.min(s, u * (1 - Math.max(0, o.bottom - i) / nt) | 0)) : i < o.top + tt && e.scrollTop && (Z = !0, l = -Math.min(e.scrollTop, u * (1 - Math.max(0, i - o.top) / tt) | 0)), l && (e.scrollTop += l)), z && ((s = e._gsMaxScrollX - e.scrollLeft) < 0 ? a = s : r > o.right - et && s ? (Z = !0, a = Math.min(s, u * (1 - Math.max(0, o.right - r) / et) | 0)) : r < o.left + ot && e.scrollLeft && (Z = !0, a = -Math.min(e.scrollLeft, u * (1 - Math.max(0, r - o.left) / ot) | 0)), a && (e.scrollLeft += a)), n && (a || l) && (gt.scrollTo(e.scrollLeft, e.scrollTop), dt(q.pointerX + a, q.pointerY + l)), c = e;
        }
      }

      if (Y) {
        var d = q.x,
            p = q.y;
        H ? (q.deltaX = d - parseFloat(at.rotation), q.rotation = d, at.rotation = d + "deg", at.renderTransform(1, at)) : f ? (G && (q.deltaY = p - f.top(), f.top(p)), z && (q.deltaX = d - f.left(), f.left(d))) : I ? (G && (q.deltaY = p - parseFloat(at.y), at.y = p + "px"), z && (q.deltaX = d - parseFloat(at.x), at.x = d + "px"), at.renderTransform(1, at)) : (G && (q.deltaY = p - parseFloat(h.style.top || 0), h.style.top = p + "px"), z && (q.deltaY = d - parseFloat(h.style.left || 0), h.style.left = d + "px")), !g || t || B || (!(B = !0) === Ka(q, "drag", "onDrag") && (z && (q.x -= q.deltaX), G && (q.y -= q.deltaY), bh(!0)), B = !1);
      }

      Y = !1;
    }

    function ch(t, e) {
      var n,
          o,
          r = q.x,
          i = q.y;
      h._gsap || (at = ft.core.getCache(h)), I ? (q.x = parseFloat(at.x), q.y = parseFloat(at.y)) : H ? q.x = q.rotation = parseFloat(at.rotation) : f ? (q.y = f.top(), q.x = f.left()) : (q.y = parseInt(h.style.top || (o = Ha(h)) && o.top, 10) || 0, q.x = parseInt(h.style.left || (o || {}).left, 10) || 0), (C || P || _) && !e && (q.isDragging || q.isThrowing) && (_ && (At.x = q.x, At.y = q.y, (n = _(At)).x !== q.x && (q.x = n.x, Y = !0), n.y !== q.y && (q.y = n.y, Y = !0)), C && (n = C(q.x)) !== q.x && (q.x = n, H && (q.rotation = n), Y = !0), P && ((n = P(q.y)) !== q.y && (q.y = n), Y = !0)), Y && bh(!0), t || (q.deltaX = q.x - r, q.deltaY = q.y - i, Ka(q, "throwupdate", "onThrowUpdate"));
    }

    function dh(a, l, s, n) {
      return null == l && (l = -Ct), null == s && (s = Ct), U(a) ? function (t) {
        var e = q.isPressed ? 1 - q.edgeResistance : 1;
        return a.call(q, s < t ? s + (t - s) * e : t < l ? l + (t - l) * e : t) * n;
      } : kt(a) ? function (t) {
        for (var e, n, o = a.length, r = 0, i = Ct; -1 < --o;) {
          (n = (e = a[o]) - t) < 0 && (n = -n), n < i && l <= e && e <= s && (r = o, i = n);
        }

        return a[r];
      } : isNaN(a) ? function (t) {
        return t;
      } : function () {
        return a * n;
      };
    }

    function fh() {
      var t, e, n, o;
      E = !1, f ? (f.calibrate(), q.minX = S = -f.maxScrollLeft(), q.minY = X = -f.maxScrollTop(), q.maxX = M = q.maxY = L = 0, E = !0) : d.bounds && (t = La(d.bounds, h.parentNode), H ? (q.minX = S = t.left, q.maxX = M = t.left + t.width, q.minY = X = q.maxY = L = 0) : W(d.bounds.maxX) && W(d.bounds.maxY) ? (e = La(h, h.parentNode), q.minX = S = Math.round(wg(u, "px") + t.left - e.left - .5), q.minY = X = Math.round(wg(K, "px") + t.top - e.top - .5), q.maxX = M = Math.round(S + (t.width - e.width)), q.maxY = L = Math.round(X + (t.height - e.height))) : (t = d.bounds, q.minX = S = t.minX, q.minY = X = t.minY, q.maxX = M = t.maxX, q.maxY = L = t.maxY), M < S && (q.minX = M, q.maxX = M = S, S = q.minX), L < X && (q.minY = L, q.maxY = L = X, X = q.minY), H && (q.minRotation = S, q.maxRotation = M), E = !0), d.liveSnap && (n = !0 === d.liveSnap ? d.snap || {} : d.liveSnap, o = kt(n) || U(n), H ? (C = dh(o ? n : n.rotation, S, M, 1), P = null) : n.points ? _ = function buildPointSnapFunc(s, l, c, u, d, p, h) {
        return p = p && p < Ct ? p * p : Ct, U(s) ? function (t) {
          var e,
              n,
              o,
              r = q.isPressed ? 1 - q.edgeResistance : 1,
              i = t.x,
              a = t.y;
          return t.x = i = c < i ? c + (i - c) * r : i < l ? l + (i - l) * r : i, t.y = a = d < a ? d + (a - d) * r : a < u ? u + (a - u) * r : a, (e = s.call(q, t)) !== t && (t.x = e.x, t.y = e.y), 1 !== h && (t.x *= h, t.y *= h), p < Ct && (n = t.x - i, o = t.y - a, p < n * n + o * o && (t.x = i, t.y = a)), t;
        } : kt(s) ? function (t) {
          for (var e, n, o, r, i = s.length, a = 0, l = Ct; -1 < --i;) {
            (r = (e = (o = s[i]).x - t.x) * e + (n = o.y - t.y) * n) < l && (a = i, l = r);
          }

          return l <= p ? s[a] : t;
        } : function (t) {
          return t;
        };
      }(o ? n : n.points, S, M, X, L, n.radius, f ? -1 : 1) : (z && (C = dh(o ? n : n.x || n.left || n.scrollLeft, S, M, f ? -1 : 1)), G && (P = dh(o ? n : n.y || n.top || n.scrollTop, X, L, f ? -1 : 1))));
    }

    function gh() {
      q.isThrowing = !1, Ka(q, "throwcomplete", "onThrowComplete");
    }

    function hh() {
      q.isThrowing = !1;
    }

    function ih(t, e) {
      var n, o, r, i;
      t && Mt ? (!0 === t && (n = d.snap || d.liveSnap || {}, o = kt(n) || U(n), t = {
        resistance: (d.throwResistance || d.resistance || 1e3) / (H ? 10 : 1)
      }, H ? t.rotation = Oa(q, o ? n : n.rotation, M, S, 1, e) : (z && (t[u] = Oa(q, o ? n : n.points || n.x || n.left, M, S, f ? -1 : 1, e || "x" === q.lockedAxis)), G && (t[K] = Oa(q, o ? n : n.points || n.y || n.top, L, X, f ? -1 : 1, e || "y" === q.lockedAxis)), (n.points || kt(n) && V(n[0])) && (t.linkedProps = u + "," + K, t.radius = n.radius))), q.isThrowing = !0, i = isNaN(d.overshootTolerance) ? 1 === d.edgeResistance ? 0 : 1 - q.edgeResistance + .2 : d.overshootTolerance, t.duration || (t.duration = {
        max: Math.max(d.minDuration || 0, "maxDuration" in d ? d.maxDuration : 2),
        min: isNaN(d.minDuration) ? 0 === i || V(t) && 1e3 < t.resistance ? 0 : .5 : d.minDuration,
        overshoot: i
      }), q.tween = r = ft.to(f || h, {
        inertia: t,
        data: "_draggable",
        onComplete: gh,
        onInterrupt: hh,
        onUpdate: d.fastMode ? Ka : ch,
        onUpdateParams: d.fastMode ? [q, "onthrowupdate", "onThrowUpdate"] : n && n.radius ? [!1, !0] : []
      }), d.fastMode || (f && (f._skip = !0), r.render(1e9, !0, !0), ch(!0, !0), q.endX = q.x, q.endY = q.y, H && (q.endRotation = q.x), r.play(0), ch(!0, !0), f && (f._skip = !1))) : E && q.applyBounds();
    }

    function jh(t) {
      var e,
          n = N;
      N = getGlobalMatrix(h.parentNode, !0), t && q.isPressed && !N.equals(n || new ht()) && (e = n.inverse().apply({
        x: b,
        y: w
      }), N.apply(e, e), b = e.x, w = e.y), N.equals(a) && (N = null);
    }

    function kh() {
      var t,
          e,
          n,
          o = 1 - q.edgeResistance;
      jh(!1), N && (Ft.x = q.pointerX, Ft.y = q.pointerY, N.apply(Ft, Ft), b = Ft.x, w = Ft.y), Y && (dt(q.pointerX, q.pointerY), bh(!0)), f ? (fh(), D = f.top(), T = f.left()) : (ct() ? (ch(!0, !0), fh()) : q.applyBounds(), H ? (t = h.ownerSVGElement ? [at.xOrigin - h.getBBox().x, at.yOrigin - h.getBBox().y] : (Ha(h)[Xt] || "0 0").split(" "), k = q.rotationOrigin = getGlobalMatrix(h).apply({
        x: parseFloat(t[0]) || 0,
        y: parseFloat(t[1]) || 0
      }), ch(!0, !0), e = q.pointerX - k.x, n = k.y - q.pointerY, lt && (e -= Aa(st), n += za(st)), T = q.x, D = q.y = Math.atan2(n, e) * Yt) : (D = wg(K, "px"), T = wg(u, "px"))), E && o && (M < T ? T = M + (T - M) / o : T < S && (T = S - (S - T) / o), H || (L < D ? D = L + (D - L) / o : D < X && (D = X - (X - D) / o))), q.startX = T, q.startY = D;
    }

    function mh() {
      !vt.parentNode || ct() || q.isDragging || vt.parentNode.removeChild(vt);
    }

    function nh(t, e) {
      var n;

      if (p && !q.isPressed && t && ("mousedown" !== t.type && "pointerdown" !== t.type || e || !(Pt() - it < 30) || !wt[q.pointerEvent.type])) {
        if (O = ct(), q.pointerEvent = t, wt[t.type] ? (y = ~t.type.indexOf("touch") ? t.currentTarget || t.target : st, ta(y, "touchend", pt), ta(y, "touchmove", ut), ta(y, "touchcancel", pt), ta(st, "touchstart", ya)) : (y = null, ta(st, "mousemove", ut)), A = null, Lt && y || (ta(st, "mouseup", pt), t && t.target && ta(t.target, "mouseup", pt)), v = rt.call(q, t.target) && !1 === d.dragClickables && !e) return ta(t.target, "change", pt), Ka(q, "pressInit", "onPressInit"), Ka(q, "press", "onPress"), void Qa(J, !0);
        if ((R = !(!y || z == G || !1 === q.vars.allowNativeTouchScrolling || q.vars.allowContextMenu && t && (t.ctrlKey || 2 < t.which)) && (z ? "y" : "x")) || q.allowEventDefault || (va(t), ta(gt, "touchforcechange", va)), t.changedTouches ? (t = x = t.changedTouches[0], m = t.identifier) : t.pointerId ? m = t.pointerId : x = m = null, Tt++, function _addToRenderQueue(t) {
          _t.push(t), 1 === _t.length && ft.ticker.add(oa);
        }(bh), w = q.pointerY = t.pageY, b = q.pointerX = t.pageX, Ka(q, "pressInit", "onPressInit"), (R || q.autoScroll) && Fa(h.parentNode), !h.parentNode || !q.autoScroll || f || H || !h.parentNode._gsMaxScrollX || vt.parentNode || h.getBBox || (vt.style.width = h.parentNode.scrollWidth + "px", h.parentNode.appendChild(vt)), kh(), q.tween && q.tween.kill(), q.isThrowing = !1, ft.killTweensOf(f || h, o, !0), f && ft.killTweensOf(h, {
          scrollTo: 1
        }, !0), q.tween = q.lockedAxis = null, !d.zIndexBoost && (H || f || !1 === d.zIndexBoost) || (h.style.zIndex = Draggable.zIndex++), q.isPressed = !0, g = !(!d.onDrag && !q._listeners.drag), s = !(!d.onMove && !q._listeners.move), !H && (!1 !== d.cursor || d.activeCursor)) for (n = J.length; -1 < --n;) {
          ft.set(J[n], {
            cursor: d.activeCursor || d.cursor || ("grab" === St ? "grabbing" : St)
          });
        }
        Ka(q, "press", "onPress");
      }
    }

    function rh(t) {
      if (t && q.isDragging && !f) {
        var e = t.target || h.parentNode,
            n = e.scrollLeft - e._gsScrollX,
            o = e.scrollTop - e._gsScrollY;
        (n || o) && (N ? (b -= n * N.a + o * N.c, w -= o * N.d + n * N.b) : (b -= n, w -= o), e._gsScrollX += n, e._gsScrollY += o, dt(q.pointerX, q.pointerY));
      }
    }

    function sh(t) {
      var e = Pt(),
          n = e - it < 40,
          o = e - Q < 40,
          r = n && F === it,
          i = q.pointerEvent && q.pointerEvent.defaultPrevented,
          a = n && c === it,
          l = t.isTrusted || null == t.isTrusted && n && r;
      if ((r || o && !1 !== q.vars.suppressClickOnDrag) && t.stopImmediatePropagation && t.stopImmediatePropagation(), n && (!q.pointerEvent || !q.pointerEvent.defaultPrevented) && (!r || l && !a)) return l && r && (c = it), void (F = it);
      (q.isPressed || o || n) && (l && t.detail && n && !i || va(t));
    }

    function th(t) {
      return N ? {
        x: t.x * N.a + t.y * N.c + N.e,
        y: t.x * N.b + t.y * N.d + N.f
      } : {
        x: t.x,
        y: t.y
      };
    }

    var p,
        f,
        b,
        w,
        T,
        D,
        E,
        g,
        s,
        M,
        S,
        L,
        X,
        x,
        m,
        k,
        Y,
        e,
        C,
        P,
        _,
        v,
        y,
        N,
        O,
        R,
        A,
        B,
        F,
        c,
        n = (d.type || "x,y").toLowerCase(),
        I = ~n.indexOf("x") || ~n.indexOf("y"),
        H = -1 !== n.indexOf("rotation"),
        u = H ? "rotation" : I ? "x" : "left",
        K = I ? "y" : "top",
        z = !(!~n.indexOf("x") && !~n.indexOf("left") && "scroll" !== n),
        G = !(!~n.indexOf("y") && !~n.indexOf("top") && "scroll" !== n),
        j = d.minimumMovement || 2,
        q = function _assertThisInitialized(t) {
      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return t;
    }(t),
        J = yt(d.trigger || d.handle || h),
        o = {},
        Q = 0,
        Z = !1,
        tt = d.autoScrollMarginTop || 40,
        et = d.autoScrollMarginRight || 40,
        nt = d.autoScrollMarginBottom || 40,
        ot = d.autoScrollMarginLeft || 40,
        rt = d.clickableTest || Pa,
        it = 0,
        at = h._gsap || ft.core.getCache(h),
        lt = function _isFixed(t) {
      return "fixed" === Ha(t).position || ((t = t.parentNode) && 1 === t.nodeType ? _isFixed(t) : void 0);
    }(h),
        st = h.ownerDocument || xt,
        ct = function isTweening() {
      return q.tween && q.tween.isActive();
    },
        ut = function onMove(t) {
      var e,
          n,
          o,
          r,
          i,
          a,
          l = t;

      if (p && !Dt && q.isPressed && t) {
        if (e = (q.pointerEvent = t).changedTouches) {
          if ((t = e[0]) !== x && t.identifier !== m) {
            for (r = e.length; -1 < --r && (t = e[r]).identifier !== m;) {
              ;
            }

            if (r < 0) return;
          }
        } else if (t.pointerId && m && t.pointerId !== m) return;

        y && R && !A && (Ft.x = t.pageX, Ft.y = t.pageY, N && N.apply(Ft, Ft), n = Ft.x, o = Ft.y, ((i = Math.abs(n - b)) !== (a = Math.abs(o - w)) && (j < i || j < a) || Et && R === A) && (A = a < i && z ? "x" : "y", R && A !== R && ta(gt, "touchforcechange", va), !1 !== q.vars.lockAxisOnTouchScroll && (q.lockedAxis = "x" === A ? "y" : "x", U(q.vars.onLockAxis) && q.vars.onLockAxis.call(q, l)), Et && R === A)) ? pt(l) : (q.allowEventDefault || R && (!A || R === A) || !1 === l.cancelable || va(l), q.autoScroll && (Z = !0), dt(t.pageX - (lt && H ? Aa(st) : 0), t.pageY - (lt && H ? za(st) : 0), s));
      }
    },
        dt = function setPointerPosition(t, e, n) {
      var o,
          r,
          i,
          a,
          l,
          s,
          c = 1 - q.dragResistance,
          u = 1 - q.edgeResistance,
          d = q.pointerX,
          p = q.pointerY,
          h = D,
          f = q.x,
          g = q.y,
          x = q.endX,
          m = q.endY,
          v = q.endRotation,
          y = Y;
      q.pointerX = t, q.pointerY = e, H ? (a = Math.atan2(k.y - e, t - k.x) * Yt, 180 < (l = q.y - a) ? (D -= 360, q.y = a) : l < -180 && (D += 360, q.y = a), i = q.x !== T || Math.abs(D - a) > j ? (q.y = a, T + (D - a) * c) : T) : (N && (s = t * N.a + e * N.c + N.e, e = t * N.b + e * N.d + N.f, t = s), (r = e - w) < j && -j < r && (r = 0), (o = t - b) < j && -j < o && (o = 0), (q.lockAxis || q.lockedAxis) && (o || r) && ((s = q.lockedAxis) || (q.lockedAxis = s = z && Math.abs(o) > Math.abs(r) ? "y" : G ? "x" : null, s && U(q.vars.onLockAxis) && q.vars.onLockAxis.call(q, q.pointerEvent)), "y" === s ? r = 0 : "x" === s && (o = 0)), i = $(T + o * c), a = $(D + r * c)), (C || P || _) && (q.x !== i || q.y !== a && !H) ? (_ && (At.x = i, At.y = a, s = _(At), i = $(s.x), a = $(s.y)), C && (i = $(C(i))), P && (a = $(P(a)))) : E && (M < i ? i = M + Math.round((i - M) * u) : i < S && (i = S + Math.round((i - S) * u)), H || (L < a ? a = Math.round(L + (a - L) * u) : a < X && (a = Math.round(X + (a - X) * u)))), q.x === i && (q.y === a || H) || (H ? (q.endRotation = q.x = q.endX = i, Y = !0) : (G && (q.y = q.endY = a, Y = !0), z && (q.x = q.endX = i, Y = !0)), n && !1 === Ka(q, "move", "onMove") ? (q.pointerX = d, q.pointerY = p, D = h, q.x = f, q.y = g, q.endX = x, q.endY = m, q.endRotation = v, Y = y) : !q.isDragging && q.isPressed && (q.isDragging = !0, Ka(q, "dragstart", "onDragStart")));
    },
        pt = function onRelease(t, e) {
      if (p && q.isPressed && (!t || null == m || e || !(t.pointerId && t.pointerId !== m || t.changedTouches && !function _hasTouchID(t, e) {
        for (var n = t.length; n--;) {
          if (t[n].identifier === e) return !0;
        }
      }(t.changedTouches, m)))) {
        q.isPressed = !1;
        var n,
            o,
            r,
            i,
            a,
            l = t,
            s = q.isDragging,
            c = q.vars.allowContextMenu && t && (t.ctrlKey || 2 < t.which),
            u = ft.delayedCall(.001, mh);
        if (y ? (ua(y, "touchend", onRelease), ua(y, "touchmove", ut), ua(y, "touchcancel", onRelease), ua(st, "touchstart", ya)) : ua(st, "mousemove", ut), ua(gt, "touchforcechange", va), Lt && y || (ua(st, "mouseup", onRelease), t && t.target && ua(t.target, "mouseup", onRelease)), Y = !1, v && !c) return t && (ua(t.target, "change", onRelease), q.pointerEvent = l), Qa(J, !1), Ka(q, "release", "onRelease"), Ka(q, "click", "onClick"), void (v = !1);
        if (ra(bh), !H) for (o = J.length; -1 < --o;) {
          Ga(J[o], "cursor", d.cursor || (!1 !== d.cursor ? St : null));
        }

        if (s && (Q = Rt = Pt(), q.isDragging = !1), Tt--, t) {
          if ((n = t.changedTouches) && (t = n[0]) !== x && t.identifier !== m) {
            for (o = n.length; -1 < --o && (t = n[o]).identifier !== m;) {
              ;
            }

            if (o < 0) return;
          }

          q.pointerEvent = l, q.pointerX = t.pageX, q.pointerY = t.pageY;
        }

        return c && l ? (va(l), Ka(q, "release", "onRelease")) : l && !s ? (O && (d.snap || d.bounds) && ih(d.inertia || d.throwProps), Ka(q, "release", "onRelease"), Et && "touchmove" === l.type || -1 !== l.type.indexOf("cancel") || (Ka(q, "click", "onClick"), Pt() - it < 300 && Ka(q, "doubleclick", "onDoubleClick"), i = l.target || h, it = Pt(), a = function syntheticClick() {
          it === F || !q.enabled() || q.isPressed || l.defaultPrevented || (i.click ? i.click() : st.createEvent && ((r = st.createEvent("MouseEvents")).initMouseEvent("click", !0, !0, gt, 1, q.pointerEvent.screenX, q.pointerEvent.screenY, q.pointerX, q.pointerY, !1, !1, !1, !1, 0, null), i.dispatchEvent(r)));
        }, Et || l.defaultPrevented || ft.delayedCall(.05, a))) : (ih(d.inertia || d.throwProps), q.allowEventDefault || !l || !1 === d.dragClickables && rt.call(q, l.target) || !s || R && (!A || R !== A) || !1 === l.cancelable || va(l), Ka(q, "release", "onRelease")), ct() && u.duration(q.tween.duration()), s && Ka(q, "dragend", "onDragEnd"), !0;
      }
    };

    return (e = Draggable.get(h)) && e.kill(), t.startDrag = function (t, e) {
      var n, o, r, i;
      nh(t || q.pointerEvent, !0), e && !q.hitTest(t || q.pointerEvent) && (n = Ja(t || q.pointerEvent), o = Ja(h), r = th({
        x: n.left + n.width / 2,
        y: n.top + n.height / 2
      }), i = th({
        x: o.left + o.width / 2,
        y: o.top + o.height / 2
      }), b -= r.x - i.x, w -= r.y - i.y), q.isDragging || (q.isDragging = !0, Ka(q, "dragstart", "onDragStart"));
    }, t.drag = ut, t.endDrag = function (t) {
      return pt(t || q.pointerEvent, !0);
    }, t.timeSinceDrag = function () {
      return q.isDragging ? 0 : (Pt() - Q) / 1e3;
    }, t.timeSinceClick = function () {
      return (Pt() - it) / 1e3;
    }, t.hitTest = function (t, e) {
      return Draggable.hitTest(q.target, t, e);
    }, t.getDirection = function (t, e) {
      var n,
          o,
          r,
          i,
          a,
          l,
          s = "velocity" === t && Mt ? t : V(t) && !H ? "element" : "start";
      return "element" === s && (a = Ja(q.target), l = Ja(t)), n = "start" === s ? q.x - T : "velocity" === s ? Mt.getVelocity(h, u) : a.left + a.width / 2 - (l.left + l.width / 2), H ? n < 0 ? "counter-clockwise" : "clockwise" : (e = e || 2, o = "start" === s ? q.y - D : "velocity" === s ? Mt.getVelocity(h, K) : a.top + a.height / 2 - (l.top + l.height / 2), i = (r = Math.abs(n / o)) < 1 / e ? "" : n < 0 ? "left" : "right", r < e && ("" !== i && (i += "-"), i += o < 0 ? "up" : "down"), i);
    }, t.applyBounds = function (t, e) {
      var n, o, r, i, a, l;
      if (t && d.bounds !== t) return d.bounds = t, q.update(!0, e);

      if (ch(!0), fh(), E && !ct()) {
        if (n = q.x, o = q.y, M < n ? n = M : n < S && (n = S), L < o ? o = L : o < X && (o = X), (q.x !== n || q.y !== o) && (r = !0, q.x = q.endX = n, H ? q.endRotation = n : q.y = q.endY = o, bh(Y = !0), q.autoScroll && !q.isDragging)) for (Fa(h.parentNode), i = h, Wt.scrollTop = null != gt.pageYOffset ? gt.pageYOffset : null != st.documentElement.scrollTop ? st.documentElement.scrollTop : st.body.scrollTop, Wt.scrollLeft = null != gt.pageXOffset ? gt.pageXOffset : null != st.documentElement.scrollLeft ? st.documentElement.scrollLeft : st.body.scrollLeft; i && !l;) {
          a = (l = Bt(i.parentNode)) ? Wt : i.parentNode, G && a.scrollTop > a._gsMaxScrollY && (a.scrollTop = a._gsMaxScrollY), z && a.scrollLeft > a._gsMaxScrollX && (a.scrollLeft = a._gsMaxScrollX), i = a;
        }
        q.isThrowing && (r || q.endX > M || q.endX < S || q.endY > L || q.endY < X) && ih(d.inertia || d.throwProps, r);
      }

      return q;
    }, t.update = function (t, e, n) {
      var o = q.x,
          r = q.y;
      return jh(!e), t ? q.applyBounds() : (Y && n && bh(!0), ch(!0)), e && (dt(q.pointerX, q.pointerY), Y && bh(!0)), q.isPressed && !e && (z && .01 < Math.abs(o - q.x) || G && .01 < Math.abs(r - q.y) && !H) && kh(), q.autoScroll && (Fa(h.parentNode, q.isDragging), Z = q.isDragging, bh(!0), Ca(h, rh), Ba(h, rh)), q;
    }, t.enable = function (t) {
      var e,
          n,
          o,
          r = {
        lazy: !0
      };

      if (H || !1 === d.cursor || (r.cursor = d.cursor || St), ft.utils.checkPrefix("touchCallout") && (r.touchCallout = "none"), r.touchAction = z == G ? "none" : d.allowNativeTouchScrolling || d.allowEventDefault ? "manipulation" : z ? "pan-y" : "pan-x", "soft" !== t) {
        for (n = J.length; -1 < --n;) {
          o = J[n], Lt || ta(o, "mousedown", nh), ta(o, "touchstart", nh), ta(o, "click", sh, !0), ft.set(o, r), o.getBBox && o.ownerSVGElement && ft.set(o.ownerSVGElement, {
            touchAction: z == G ? "none" : d.allowNativeTouchScrolling || d.allowEventDefault ? "manipulation" : z ? "pan-y" : "pan-x"
          }), d.allowContextMenu || ta(o, "contextmenu", ah);
        }

        Qa(J, !1);
      }

      return Ba(h, rh), p = !0, Mt && "soft" !== t && Mt.track(f || h, I ? "x,y" : H ? "rotation" : "top,left"), h._gsDragID = e = "d" + Ot++, Nt[e] = q, f && (f.enable(), f.element._gsDragID = e), (d.bounds || H) && kh(), d.bounds && q.applyBounds(), q;
    }, t.disable = function (t) {
      var e,
          n,
          o = q.isDragging;
      if (!H) for (e = J.length; -1 < --e;) {
        Ga(J[e], "cursor", null);
      }

      if ("soft" !== t) {
        for (e = J.length; -1 < --e;) {
          n = J[e], Ga(n, "touchCallout", null), Ga(n, "touchAction", null), ua(n, "mousedown", nh), ua(n, "touchstart", nh), ua(n, "click", sh), ua(n, "contextmenu", ah);
        }

        Qa(J, !0), y && (ua(y, "touchcancel", pt), ua(y, "touchend", pt), ua(y, "touchmove", ut)), ua(st, "mouseup", pt), ua(st, "mousemove", ut);
      }

      return Ca(h, rh), p = !1, Mt && "soft" !== t && Mt.untrack(f || h, I ? "x,y" : H ? "rotation" : "top,left"), f && f.disable(), ra(bh), q.isDragging = q.isPressed = v = !1, o && Ka(q, "dragend", "onDragEnd"), q;
    }, t.enabled = function (t, e) {
      return arguments.length ? t ? q.enable(e) : q.disable(e) : p;
    }, t.kill = function () {
      return q.isThrowing = !1, q.tween && q.tween.kill(), q.disable(), ft.set(J, {
        clearProps: "userSelect"
      }), delete Nt[h._gsDragID], q;
    }, ~n.indexOf("scroll") && (f = t.scrollProxy = new Ua(h, function _extend(t, e) {
      for (var n in e) {
        n in t || (t[n] = e[n]);
      }

      return t;
    }({
      onKill: function onKill() {
        q.isPressed && pt(null);
      }
    }, d)), h.style.overflowY = G && !bt ? "auto" : "hidden", h.style.overflowX = z && !bt ? "auto" : "hidden", h = f.content), H ? o.rotation = 1 : (z && (o[u] = 1), G && (o[K] = 1)), at.force3D = !("force3D" in d) || d.force3D, t.enable(), t;
  }

  !function _setDefaults(t, e) {
    for (var n in e) {
      n in t || (t[n] = e[n]);
    }
  }(F.prototype, {
    pointerX: 0,
    pointerY: 0,
    startX: 0,
    startY: 0,
    deltaX: 0,
    deltaY: 0,
    isDragging: !1,
    isPressed: !1
  }), F.zIndex = 1e3, F.version = "3.2.6", T() && ft.registerPlugin(F), t.Draggable = F, t["default"] = F;

  if (typeof window === "undefined" || window !== t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
  } else {
    delete t["default"];
  }
});
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * EasePack 3.2.6
 * https://greensock.com
 * 
 * @license Copyright 2020, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
!function (e, n) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? n(exports) : "function" == typeof define && define.amd ? define(["exports"], n) : n((e = e || self).window = e.window || {});
}(this, function (e) {
  "use strict";

  function f() {
    return w || "undefined" != typeof window && (w = window.gsap) && w.registerPlugin && w;
  }

  function g(e, n) {
    return !!(void 0 === e ? n : e && !~(e + "").indexOf("false"));
  }

  function h(e) {
    if (w = e || f()) {
      r = w.registerEase;

      var n,
          t = w.parseEase(),
          o = function createConfig(t) {
        return function (e) {
          var n = .5 + e / 2;

          t.config = function (e) {
            return t(2 * (1 - e) * e * n + e * e);
          };
        };
      };

      for (n in t) {
        t[n].config || o(t[n]);
      }

      for (n in r("slow", a), r("expoScale", s), r("rough", u), c) {
        "version" !== n && w.core.globals(n, c[n]);
      }
    }
  }

  function i(e, n, t) {
    var o = (e = Math.min(1, e || .7)) < 1 ? n || 0 === n ? n : .7 : 0,
        r = (1 - e) / 2,
        i = r + e,
        a = g(t);
    return function (e) {
      var n = e + (.5 - e) * o;
      return e < r ? a ? 1 - (e = 1 - e / r) * e : n - (e = 1 - e / r) * e * e * e * n : i < e ? a ? 1 === e ? 0 : 1 - (e = (e - i) / r) * e : n + (e - n) * (e = (e - i) / r) * e * e * e : a ? 1 : n;
    };
  }

  function j(n, e, t) {
    var o = Math.log(e / n),
        r = e - n;
    return t = t && w.parseEase(t), function (e) {
      return (n * Math.exp(o * (t ? t(e) : e)) - n) / r;
    };
  }

  function k(e, n, t) {
    this.t = e, this.v = n, t && (((this.next = t).prev = this).c = t.v - n, this.gap = t.t - e);
  }

  function l(e) {
    "object" != _typeof(e) && (e = {
      points: +e || 20
    });

    for (var n, t, o, r, i, a, f, s = e.taper || "none", u = [], c = 0, p = 0 | (+e.points || 20), l = p, v = g(e.randomize, !0), d = g(e.clamp), h = w ? w.parseEase(e.template) : 0, x = .4 * (+e.strength || 1); -1 < --l;) {
      n = v ? Math.random() : 1 / p * l, t = h ? h(n) : n, o = "none" === s ? x : "out" === s ? (r = 1 - n) * r * x : "in" === s ? n * n * x : n < .5 ? (r = 2 * n) * r * .5 * x : (r = 2 * (1 - n)) * r * .5 * x, v ? t += Math.random() * o - .5 * o : l % 2 ? t += .5 * o : t -= .5 * o, d && (1 < t ? t = 1 : t < 0 && (t = 0)), u[c++] = {
        x: n,
        y: t
      };
    }

    for (u.sort(function (e, n) {
      return e.x - n.x;
    }), a = new k(1, 1, null), l = p; l--;) {
      i = u[l], a = new k(i.x, i.y, a);
    }

    return f = new k(0, 0, a.t ? a : a.next), function (e) {
      var n = f;

      if (e > n.t) {
        for (; n.next && e >= n.t;) {
          n = n.next;
        }

        n = n.prev;
      } else for (; n.prev && e <= n.t;) {
        n = n.prev;
      }

      return (f = n).v + (e - n.t) / n.gap * n.c;
    };
  }

  var w,
      r,
      a = i(.7);
  (a.ease = a).config = i;
  var s = j(1, 2);
  s.config = j;
  var u = l();
  (u.ease = u).config = l;
  var c = {
    SlowMo: a,
    RoughEase: u,
    ExpoScaleEase: s
  };

  for (var n in c) {
    c[n].register = h, c[n].version = "3.2.6";
  }

  f() && w.registerPlugin(a), e.EasePack = c, e.ExpoScaleEase = s, e.RoughEase = u, e.SlowMo = a, e["default"] = c;

  if (typeof window === "undefined" || window !== e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
  } else {
    delete e["default"];
  }
});
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * EaselPlugin 3.2.6
 * https://greensock.com
 * 
 * @license Copyright 2020, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
!function (e, t) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t((e = e || self).window = e.window || {});
}(this, function (e) {
  "use strict";

  function k() {
    return "undefined" != typeof window;
  }

  function l() {
    return h || k() && (h = window.gsap) && h.registerPlugin && h;
  }

  function m() {
    return r || t && t.createjs || t || {};
  }

  function n(e) {
    return console.warn(e);
  }

  function o(e) {
    var t = e.getBounds && e.getBounds();
    t || (t = e.nominalBounds || {
      x: 0,
      y: 0,
      width: 100,
      height: 100
    }, e.setBounds && e.setBounds(t.x, t.y, t.width, t.height)), e.cache && e.cache(t.x, t.y, t.width, t.height), n("EaselPlugin: for filters to display in EaselJS, you must call the object's cache() method first. GSAP attempted to use the target's getBounds() for the cache but that may not be completely accurate. " + e);
  }

  function p(e, t, r) {
    (b = b || m().ColorFilter) || n("EaselPlugin error: The EaselJS ColorFilter JavaScript file wasn't loaded.");

    for (var i, l, s, u, a, f, c = e.filters || [], d = c.length; d--;) {
      if (c[d] instanceof b) {
        l = c[d];
        break;
      }
    }

    if (l || (l = new b(), c.push(l), e.filters = c), s = l.clone(), null != t.tint) i = h.utils.splitColor(t.tint), u = null != t.tintAmount ? +t.tintAmount : 1, s.redOffset = i[0] * u, s.greenOffset = i[1] * u, s.blueOffset = i[2] * u, s.redMultiplier = s.greenMultiplier = s.blueMultiplier = 1 - u;else for (a in t) {
      "exposure" !== a && "brightness" !== a && (s[a] = +t[a]);
    }

    for (null != t.exposure ? (s.redOffset = s.greenOffset = s.blueOffset = 255 * (t.exposure - 1), s.redMultiplier = s.greenMultiplier = s.blueMultiplier = 1) : null != t.brightness && (u = t.brightness - 1, s.redOffset = s.greenOffset = s.blueOffset = 0 < u ? 255 * u : 0, s.redMultiplier = s.greenMultiplier = s.blueMultiplier = 1 - Math.abs(u)), d = 8; d--;) {
      l[a = M[d]] !== s[a] && (f = r.add(l, a, l[a], s[a])) && (f.op = "easel_colorFilter");
    }

    r._props.push("easel_colorFilter"), e.cacheID || o(e);
  }

  function u(e, t) {
    if (!(e instanceof Array && t instanceof Array)) return t;
    var r,
        i,
        n = [],
        l = 0,
        o = 0;

    for (r = 0; r < 4; r++) {
      for (i = 0; i < 5; i++) {
        o = 4 === i ? e[l + 4] : 0, n[l + i] = e[l] * t[i] + e[l + 1] * t[i + 5] + e[l + 2] * t[i + 10] + e[l + 3] * t[i + 15] + o;
      }

      l += 5;
    }

    return n;
  }

  function z(e, t, r) {
    (d = d || m().ColorMatrixFilter) || n("EaselPlugin: The EaselJS ColorMatrixFilter JavaScript file wasn't loaded.");

    for (var i, l, s, a, f = e.filters || [], c = f.length; -1 < --c;) {
      if (f[c] instanceof d) {
        s = f[c];
        break;
      }
    }

    for (s || (s = new d(w.slice()), f.push(s), e.filters = f), l = s.matrix, i = w.slice(), null != t.colorize && (i = function _colorize(e, t, r) {
      isNaN(r) && (r = 1);
      var i = h.utils.splitColor(t),
          n = i[0] / 255,
          l = i[1] / 255,
          o = i[2] / 255,
          s = 1 - r;
      return u([s + r * n * x, r * n * y, r * n * _, 0, 0, r * l * x, s + r * l * y, r * l * _, 0, 0, r * o * x, r * o * y, s + r * o * _, 0, 0, 0, 0, 0, 1, 0], e);
    }(i, t.colorize, Number(t.colorizeAmount))), null != t.contrast && (i = function _setContrast(e, t) {
      return isNaN(t) ? e : u([t += .01, 0, 0, 0, 128 * (1 - t), 0, t, 0, 0, 128 * (1 - t), 0, 0, t, 0, 128 * (1 - t), 0, 0, 0, 1, 0], e);
    }(i, Number(t.contrast))), null != t.hue && (i = function _setHue(e, t) {
      if (isNaN(t)) return e;
      t *= Math.PI / 180;
      var r = Math.cos(t),
          i = Math.sin(t);
      return u([x + r * (1 - x) + i * -x, y + r * -y + i * -y, _ + r * -_ + i * (1 - _), 0, 0, x + r * -x + .143 * i, y + r * (1 - y) + .14 * i, _ + r * -_ + -.283 * i, 0, 0, x + r * -x + i * -(1 - x), y + r * -y + i * y, _ + r * (1 - _) + i * _, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1], e);
    }(i, Number(t.hue))), null != t.saturation && (i = function _setSaturation(e, t) {
      if (isNaN(t)) return e;
      var r = 1 - t,
          i = r * x,
          n = r * y,
          l = r * _;
      return u([i + t, n, l, 0, 0, i, n + t, l, 0, 0, i, n, l + t, 0, 0, 0, 0, 0, 1, 0], e);
    }(i, Number(t.saturation))), c = i.length; -1 < --c;) {
      i[c] !== l[c] && (a = r.add(l, c, l[c], i[c])) && (a.op = "easel_colorMatrixFilter");
    }

    r._props.push("easel_colorMatrixFilter"), e.cacheID || o(), r._matrix = l;
  }

  function A(e) {
    h = e || l(), k() && (t = window), h && (g = 1);
  }

  var h,
      g,
      t,
      r,
      b,
      d,
      M = "redMultiplier,greenMultiplier,blueMultiplier,alphaMultiplier,redOffset,greenOffset,blueOffset,alphaOffset".split(","),
      w = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
      x = .212671,
      y = .71516,
      _ = .072169,
      i = {
    version: "3.2.6",
    name: "easel",
    init: function init(e, t, r, i, l) {
      var o, s, u, a, f, c, d;

      for (o in g || (A(), h || n("Please gsap.registerPlugin(EaselPlugin)")), this.target = e, t) {
        if (f = t[o], "colorFilter" === o || "tint" === o || "tintAmount" === o || "exposure" === o || "brightness" === o) u || (p(e, t.colorFilter || t, this), u = !0);else if ("saturation" === o || "contrast" === o || "hue" === o || "colorize" === o || "colorizeAmount" === o) a || (z(e, t.colorMatrixFilter || t, this), a = !0);else if ("frame" === o) {
          if ("string" == typeof f && "=" !== f.charAt(1) && (c = e.labels)) for (d = 0; d < c.length; d++) {
            c[d].label === f && (f = c[d].position);
          }
          (s = this.add(e, "gotoAndStop", e.currentFrame, f, i, l, Math.round)) && (s.op = o);
        } else null != e[o] && this.add(e, o, "get", f);
      }
    },
    render: function render(e, t) {
      for (var r = t._pt; r;) {
        r.r(e, r.d), r = r._next;
      }

      t.target.cacheID && t.target.updateCache();
    },
    register: A,
    registerCreateJS: function registerCreateJS(e) {
      r = e;
    }
  };
  l() && h.registerPlugin(i), e.EaselPlugin = i, e["default"] = i;

  if (typeof window === "undefined" || window !== e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
  } else {
    delete e["default"];
  }
});
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * MotionPathPlugin 3.2.6
 * https://greensock.com
 * 
 * @license Copyright 2020, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
!function (t, e) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = t || self).window = t.window || {});
}(this, function (t) {
  "use strict";

  function p(t) {
    return "string" == typeof t;
  }

  function x(t, e, n, r) {
    var a = t[e],
        o = 1 === r ? 6 : subdivideSegment(a, n, r);
    if (o && o + n + 2 < a.length) return t.splice(e, 0, a.slice(0, n + o + 2)), a.splice(0, n + o), 1;
  }

  function A(t, e) {
    var n = t.length,
        r = t[n - 1] || [],
        a = r.length;
    e[0] === r[a - 2] && e[1] === r[a - 1] && (e = r.concat(e.slice(2)), n--), t[n] = e;
  }

  var M = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
      R = /(?:(-)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
      L = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi,
      r = /(^[#\.][a-z]|[a-y][a-z])/i,
      F = Math.PI / 180,
      s = 180 / Math.PI,
      W = Math.sin,
      U = Math.cos,
      H = Math.abs,
      Z = Math.sqrt,
      S = Math.atan2,
      B = 1e8,
      l = function _isNumber(t) {
    return "number" == typeof t;
  },
      N = {},
      _ = {},
      e = 1e5,
      d = function _wrapProgress(t) {
    return Math.round((t + B) % 1 * e) / e || (t < 0 ? 0 : 1);
  },
      C = function _round(t) {
    return Math.round(t * e) / e || 0;
  },
      I = function _copyMetaData(t, e) {
    return e.totalLength = t.totalLength, t.samples ? (e.samples = t.samples.slice(0), e.lookup = t.lookup.slice(0), e.minLength = t.minLength, e.resolution = t.resolution) : e.totalPoints = t.totalPoints, e;
  };

  function getRawPath(t) {
    var e,
        n = (t = p(t) && r.test(t) && document.querySelector(t) || t).getAttribute ? t : 0;
    return n && (t = t.getAttribute("d")) ? (n._gsPath || (n._gsPath = {}), (e = n._gsPath[t]) && !e._dirty ? e : n._gsPath[t] = stringToRawPath(t)) : t ? p(t) ? stringToRawPath(t) : l(t[0]) ? [t] : t : console.warn("Expecting a <path> element or an SVG path data string");
  }

  function reverseSegment(t) {
    var e,
        n = 0;

    for (t.reverse(); n < t.length; n += 2) {
      e = t[n], t[n] = t[n + 1], t[n + 1] = e;
    }

    t.reversed = !t.reversed;
  }

  var D = {
    rect: "rx,ry,x,y,width,height",
    circle: "r,cx,cy",
    ellipse: "rx,ry,cx,cy",
    line: "x1,x2,y1,y2"
  };

  function convertToPath(t, e) {
    var n,
        r,
        a,
        o,
        i,
        s,
        l,
        h,
        u,
        g,
        f,
        p,
        c,
        d,
        m,
        v,
        x,
        y,
        P,
        w,
        b,
        M,
        L = t.tagName.toLowerCase(),
        T = .552284749831;
    return "path" !== L && t.getBBox ? (s = function _createPath(t, e) {
      var n,
          r = document.createElementNS("http://www.w3.org/2000/svg", "path"),
          a = [].slice.call(t.attributes),
          o = a.length;

      for (e = "," + e + ","; -1 < --o;) {
        n = a[o].nodeName.toLowerCase(), e.indexOf("," + n + ",") < 0 && r.setAttributeNS(null, n, a[o].nodeValue);
      }

      return r;
    }(t, "x,y,width,height,cx,cy,rx,ry,r,x1,x2,y1,y2,points"), M = function _attrToObj(t, e) {
      for (var n = e ? e.split(",") : [], r = {}, a = n.length; -1 < --a;) {
        r[n[a]] = +t.getAttribute(n[a]) || 0;
      }

      return r;
    }(t, D[L]), "rect" === L ? (o = M.rx, i = M.ry, r = M.x, a = M.y, g = M.width - 2 * o, f = M.height - 2 * i, n = o || i ? "M" + (v = (d = (c = r + o) + g) + o) + "," + (y = a + i) + " V" + (P = y + f) + " C" + [v, w = P + i * T, m = d + o * T, b = P + i, d, b, d - (d - c) / 3, b, c + (d - c) / 3, b, c, b, p = r + o * (1 - T), b, r, w, r, P, r, P - (P - y) / 3, r, y + (P - y) / 3, r, y, r, x = a + i * (1 - T), p, a, c, a, c + (d - c) / 3, a, d - (d - c) / 3, a, d, a, m, a, v, x, v, y].join(",") + "z" : "M" + (r + g) + "," + a + " v" + f + " h" + -g + " v" + -f + " h" + g + "z") : "circle" === L || "ellipse" === L ? (h = "circle" === L ? (o = i = M.r) * T : (o = M.rx, (i = M.ry) * T), n = "M" + ((r = M.cx) + o) + "," + (a = M.cy) + " C" + [r + o, a + h, r + (l = o * T), a + i, r, a + i, r - l, a + i, r - o, a + h, r - o, a, r - o, a - h, r - l, a - i, r, a - i, r + l, a - i, r + o, a - h, r + o, a].join(",") + "z") : "line" === L ? n = "M" + M.x1 + "," + M.y1 + " L" + M.x2 + "," + M.y2 : "polyline" !== L && "polygon" !== L || (n = "M" + (r = (u = (t.getAttribute("points") + "").match(R) || []).shift()) + "," + (a = u.shift()) + " L" + u.join(","), "polygon" === L && (n += "," + r + "," + a + "z")), s.setAttribute("d", rawPathToString(s._gsRawPath = stringToRawPath(n))), e && t.parentNode && (t.parentNode.insertBefore(s, t), t.parentNode.removeChild(t)), s) : t;
  }

  function getRotationAtBezierT(t, e, n) {
    var r,
        a = t[e],
        o = t[e + 2],
        i = t[e + 4];
    return a += (o - a) * n, a += ((o += (i - o) * n) - a) * n, r = o + (i + (t[e + 6] - i) * n - o) * n - a, a = t[e + 1], a += ((o = t[e + 3]) - a) * n, a += ((o += ((i = t[e + 5]) - o) * n) - a) * n, C(S(o + (i + (t[e + 7] - i) * n - o) * n - a, r) * s);
  }

  function sliceRawPath(t, e, n) {
    !function _isUndefined(t) {
      return void 0 === t;
    }(n) || (n = 1);
    var r = n < (e = e || 0),
        a = Math.max(0, ~~(H(n - e) - 1e-8));

    if (r && (r = n, n = e, e = r, r = 1, a -= a ? 1 : 0), e < 0 || n < 0) {
      var o = 1 + ~~Math.min(e, n);
      e += o, n += o;
    }

    var i,
        s,
        l,
        h,
        u,
        g,
        f,
        p = function copyRawPath(t) {
      for (var e = [], n = 0; n < t.length; n++) {
        e[n] = I(t[n], t[n].slice(0));
      }

      return I(t, e);
    }(t.totalLength ? t : cacheRawPathMeasurements(t)),
        c = 1 < n,
        d = getProgressData(p, e, N, !0),
        m = getProgressData(p, n, _),
        v = m.segment,
        y = d.segment,
        P = m.segIndex,
        w = d.segIndex,
        b = m.i,
        M = d.i,
        L = w === P,
        T = b === M && L,
        R = L && b < M || T && d.t > m.t;

    if (c || a) {
      if (x(p, w, M, d.t) && (i = 1, w++, T ? R ? m.t /= d.t : (m.t = (m.t - d.t) / (1 - d.t), P++, b = 0) : w <= P + 1 && !R && (P++, L && (b -= M))), m.t ? x(p, P, b, m.t) && (R && i && w++, r && P++) : (P--, r && w--), h = [], g = 1 + (u = p.length) * a, f = w, r) for (g += (u - (P = (P || u) - 1) + w) % u, l = 0; l < g; l++) {
        A(h, p[f]), f = (f || u) - 1;
      } else for (g += (u - w + P) % u, l = 0; l < g; l++) {
        A(h, p[f++ % u]);
      }
      p = h;
    } else if (s = 1 === m.t ? 6 : subdivideSegment(v, b, m.t), e !== n) for (i = subdivideSegment(y, M, T ? d.t / m.t : d.t), L && (s += i), v.splice(b + s + 2), (i || M) && y.splice(0, M + i), l = p.length; l--;) {
      (l < w || P < l) && p.splice(l, 1);
    } else v.angle = getRotationAtBezierT(v, b + s, 0), d = v[b += s], m = v[b + 1], v.length = v.totalLength = 0, v.totalPoints = p.totalPoints = 8, v.push(d, m, d, m, d, m, d, m);

    return r && function _reverseRawPath(t, e) {
      var n = t.length;

      for (e || t.reverse(); n--;) {
        t[n].reversed || reverseSegment(t[n]);
      }
    }(p, c || a), p.totalLength = 0, p;
  }

  function measureSegment(t, e, n) {
    e = e || 0, t.samples || (t.samples = [], t.lookup = []);
    var r,
        a,
        o,
        i,
        s,
        l,
        h,
        u,
        g,
        f,
        p,
        c,
        d,
        m,
        v,
        x,
        y,
        P = ~~t.resolution || 12,
        w = 1 / P,
        b = n ? e + 6 * n + 1 : t.length,
        M = t[e],
        L = t[e + 1],
        T = e ? e / 6 * P : 0,
        R = t.samples,
        S = t.lookup,
        N = (e ? t.minLength : B) || B,
        _ = R[T + n * P - 1],
        C = e ? R[T - 1] : 0;

    for (R.length = S.length = 0, a = e + 2; a < b; a += 6) {
      if (o = t[a + 4] - M, i = t[a + 2] - M, s = t[a] - M, u = t[a + 5] - L, g = t[a + 3] - L, f = t[a + 1] - L, l = h = p = c = 0, H(o) < 1e-5 && H(u) < 1e-5 && H(s) + H(f) < 1e-5) 8 < t.length && (t.splice(a, 6), a -= 6, b -= 6);else for (r = 1; r <= P; r++) {
        l = h - (h = ((m = w * r) * m * o + 3 * (d = 1 - m) * (m * i + d * s)) * m), p = c - (c = (m * m * u + 3 * d * (m * g + d * f)) * m), (x = Z(p * p + l * l)) < N && (N = x), C += x, R[T++] = C;
      }
      M += o, L += u;
    }

    if (_) for (_ -= C; T < R.length; T++) {
      R[T] += _;
    }
    if (R.length && N) for (t.totalLength = y = R[R.length - 1] || 0, t.minLength = N, x = v = 0, r = 0; r < y; r += N) {
      S[x++] = R[v] < r ? ++v : v;
    } else t.totalLength = R[0] = 0;
    return e ? C - R[e / 2 - 1] : C;
  }

  function cacheRawPathMeasurements(t, e) {
    var n, r, a;

    for (a = n = r = 0; a < t.length; a++) {
      t[a].resolution = ~~e || 12, r += t[a].length, n += measureSegment(t[a]);
    }

    return t.totalPoints = r, t.totalLength = n, t;
  }

  function subdivideSegment(t, e, n) {
    if (n <= 0 || 1 <= n) return 0;
    var r = t[e],
        a = t[e + 1],
        o = t[e + 2],
        i = t[e + 3],
        s = t[e + 4],
        l = t[e + 5],
        h = r + (o - r) * n,
        u = o + (s - o) * n,
        g = a + (i - a) * n,
        f = i + (l - i) * n,
        p = h + (u - h) * n,
        c = g + (f - g) * n,
        d = s + (t[e + 6] - s) * n,
        m = l + (t[e + 7] - l) * n;
    return u += (d - u) * n, f += (m - f) * n, t.splice(e + 2, 4, C(h), C(g), C(p), C(c), C(p + (u - p) * n), C(c + (f - c) * n), C(u), C(f), C(d), C(m)), t.samples && t.samples.splice(e / 6 * t.resolution | 0, 0, 0, 0, 0, 0, 0, 0), 6;
  }

  function getProgressData(t, e, n, r) {
    n = n || {}, t.totalLength || cacheRawPathMeasurements(t), (e < 0 || 1 < e) && (e = d(e));
    var a,
        o,
        i,
        s,
        l,
        h,
        u,
        g = 0,
        f = t[0];

    if (1 < t.length) {
      for (i = t.totalLength * e, l = h = 0; (l += t[h++].totalLength) < i;) {
        g = h;
      }

      e = (i - (s = l - (f = t[g]).totalLength)) / (l - s) || 0;
    }

    return a = f.samples, o = f.resolution, i = f.totalLength * e, s = (h = f.lookup[~~(i / f.minLength)] || 0) ? a[h - 1] : 0, (l = a[h]) < i && (s = l, l = a[++h]), u = 1 / o * ((i - s) / (l - s) + h % o), h = 6 * ~~(h / o), r && 1 === u && (h + 6 < f.length ? (h += 6, u = 0) : g + 1 < t.length && (h = u = 0, f = t[++g])), n.t = u, n.i = h, n.path = t, n.segment = f, n.segIndex = g, n;
  }

  function getPositionOnPath(t, e, n, r) {
    var a,
        o,
        i,
        s,
        l,
        h,
        u,
        g,
        f,
        p = t[0],
        c = r || {};

    if ((e < 0 || 1 < e) && (e = d(e)), 1 < t.length) {
      for (i = t.totalLength * e, l = h = 0; (l += t[h++].totalLength) < i;) {
        p = t[h];
      }

      e = (i - (s = l - p.totalLength)) / (l - s) || 0;
    }

    return a = p.samples, o = p.resolution, i = p.totalLength * e, s = (h = p.lookup[~~(i / p.minLength)] || 0) ? a[h - 1] : 0, (l = a[h]) < i && (s = l, l = a[++h]), f = 1 - (u = 1 / o * ((i - s) / (l - s) + h % o) || 0), g = p[h = 6 * ~~(h / o)], c.x = C((u * u * (p[h + 6] - g) + 3 * f * (u * (p[h + 4] - g) + f * (p[h + 2] - g))) * u + g), c.y = C((u * u * (p[h + 7] - (g = p[h + 1])) + 3 * f * (u * (p[h + 5] - g) + f * (p[h + 3] - g))) * u + g), n && (c.angle = p.totalLength ? getRotationAtBezierT(p, h, 1 <= u ? 1 - 1e-9 : u || 1e-9) : p.angle || 0), c;
  }

  function transformRawPath(t, e, n, r, a, o, i) {
    for (var s, l, h, u, g, f = t.length; -1 < --f;) {
      for (l = (s = t[f]).length, h = 0; h < l; h += 2) {
        u = s[h], g = s[h + 1], s[h] = u * e + g * r + o, s[h + 1] = u * n + g * a + i;
      }
    }

    return t._dirty = 1, t;
  }

  function arcToSegment(t, e, n, r, a, o, i, s, l) {
    if (t !== s || e !== l) {
      n = H(n), r = H(r);
      var h = a % 360 * F,
          u = U(h),
          g = W(h),
          f = Math.PI,
          p = 2 * f,
          c = (t - s) / 2,
          d = (e - l) / 2,
          m = u * c + g * d,
          v = -g * c + u * d,
          x = m * m,
          y = v * v,
          P = x / (n * n) + y / (r * r);
      1 < P && (n = Z(P) * n, r = Z(P) * r);
      var w = n * n,
          b = r * r,
          M = (w * b - w * y - b * x) / (w * y + b * x);
      M < 0 && (M = 0);

      var L = (o === i ? -1 : 1) * Z(M),
          T = n * v / r * L,
          R = -r * m / n * L,
          S = u * T - g * R + (t + s) / 2,
          N = g * T + u * R + (e + l) / 2,
          _ = (m - T) / n,
          C = (v - R) / r,
          A = (-m - T) / n,
          O = (-v - R) / r,
          B = _ * _ + C * C,
          I = (C < 0 ? -1 : 1) * Math.acos(_ / Z(B)),
          V = (_ * O - C * A < 0 ? -1 : 1) * Math.acos((_ * A + C * O) / Z(B * (A * A + O * O)));

      isNaN(V) && (V = f), !i && 0 < V ? V -= p : i && V < 0 && (V += p), I %= p, V %= p;
      var D,
          z = Math.ceil(H(V) / (p / 4)),
          E = [],
          G = V / z,
          j = 4 / 3 * W(G / 2) / (1 + U(G / 2)),
          Y = u * n,
          k = g * n,
          q = g * -r,
          X = u * r;

      for (D = 0; D < z; D++) {
        m = U(a = I + D * G), v = W(a), _ = U(a += G), C = W(a), E.push(m - j * v, v + j * m, _ + j * C, C - j * _, _, C);
      }

      for (D = 0; D < E.length; D += 2) {
        m = E[D], v = E[D + 1], E[D] = m * Y + v * q + S, E[D + 1] = m * k + v * X + N;
      }

      return E[D - 2] = s, E[D - 1] = l, E;
    }
  }

  function stringToRawPath(t) {
    function qf(t, e, n, r) {
      u = (n - t) / 3, g = (r - e) / 3, s.push(t + u, e + g, n - u, r - g, n, r);
    }

    var e,
        n,
        r,
        a,
        o,
        i,
        s,
        l,
        h,
        u,
        g,
        f,
        p,
        c,
        d,
        m = (t + "").replace(L, function (t) {
      var e = +t;
      return e < 1e-4 && -1e-4 < e ? 0 : e;
    }).match(M) || [],
        v = [],
        x = 0,
        y = 0,
        P = m.length,
        w = 0,
        b = "ERROR: malformed path: " + t;
    if (!t || !isNaN(m[0]) || isNaN(m[1])) return console.log(b), v;

    for (e = 0; e < P; e++) {
      if (p = o, isNaN(m[e]) ? i = (o = m[e].toUpperCase()) !== m[e] : e--, r = +m[e + 1], a = +m[e + 2], i && (r += x, a += y), e || (l = r, h = a), "M" === o) s && (s.length < 8 ? --v.length : w += s.length), x = l = r, y = h = a, s = [r, a], v.push(s), e += 2, o = "L";else if ("C" === o) i || (x = y = 0), (s = s || [0, 0]).push(r, a, x + 1 * m[e + 3], y + 1 * m[e + 4], x += 1 * m[e + 5], y += 1 * m[e + 6]), e += 6;else if ("S" === o) u = x, g = y, "C" !== p && "S" !== p || (u += x - s[s.length - 4], g += y - s[s.length - 3]), i || (x = y = 0), s.push(u, g, r, a, x += 1 * m[e + 3], y += 1 * m[e + 4]), e += 4;else if ("Q" === o) u = x + 2 / 3 * (r - x), g = y + 2 / 3 * (a - y), i || (x = y = 0), x += 1 * m[e + 3], y += 1 * m[e + 4], s.push(u, g, x + 2 / 3 * (r - x), y + 2 / 3 * (a - y), x, y), e += 4;else if ("T" === o) u = x - s[s.length - 4], g = y - s[s.length - 3], s.push(x + u, y + g, r + 2 / 3 * (x + 1.5 * u - r), a + 2 / 3 * (y + 1.5 * g - a), x = r, y = a), e += 2;else if ("H" === o) qf(x, y, x = r, y), e += 1;else if ("V" === o) qf(x, y, x, y = r + (i ? y - x : 0)), e += 1;else if ("L" === o || "Z" === o) "Z" === o && (r = l, a = h, s.closed = !0), ("L" === o || .5 < H(x - r) || .5 < H(y - a)) && (qf(x, y, r, a), "L" === o && (e += 2)), x = r, y = a;else if ("A" === o) {
        if (c = m[e + 4], d = m[e + 5], u = m[e + 6], g = m[e + 7], n = 7, 1 < c.length && (c.length < 3 ? (g = u, u = d, n--) : (g = d, u = c.substr(2), n -= 2), d = c.charAt(1), c = c.charAt(0)), f = arcToSegment(x, y, +m[e + 1], +m[e + 2], +m[e + 3], +c, +d, (i ? x : 0) + 1 * u, (i ? y : 0) + 1 * g), e += n, f) for (n = 0; n < f.length; n++) {
          s.push(f[n]);
        }
        x = s[s.length - 2], y = s[s.length - 1];
      } else console.log(b);
    }

    return (e = s.length) < 6 ? (v.pop(), e = 0) : s[0] === s[e - 2] && s[1] === s[e - 1] && (s.closed = !0), v.totalPoints = w + e, v;
  }

  function flatPointsToSegment(t, e) {
    void 0 === e && (e = 1);

    for (var n = t[0], r = 0, a = [n, r], o = 2; o < t.length; o += 2) {
      a.push(n, r, t[o], r = (t[o] - n) * e / 2, n = t[o], -r);
    }

    return a;
  }

  function pointsToSegment(t, e, n) {
    var r,
        a,
        o,
        i,
        s,
        l,
        h,
        u,
        g,
        f,
        p,
        c,
        d,
        m,
        v = t.length - 2,
        x = +t[0],
        y = +t[1],
        P = +t[2],
        w = +t[3],
        b = [x, y, x, y],
        M = P - x,
        L = w - y;

    for (isNaN(n) && (n = Math.PI / 10), e = e || 0 === e ? +e : 1, s = 2; s < v; s += 2) {
      r = x, a = y, x = P, y = w, c = (l = M) * l + (u = L) * u, d = (M = (P = +t[s + 2]) - x) * M + (L = (w = +t[s + 3]) - y) * L, m = (h = P - r) * h + (g = w - a) * g, p = (o = Math.acos((c + d - m) / Z(4 * c * d))) / Math.PI * e, f = Z(c) * p, p *= Z(d), x === r && y === a || (n < o ? (i = S(g, h), b.push(C(x - U(i) * f), C(y - W(i) * f), C(x), C(y), C(x + U(i) * p), C(y + W(i) * p))) : (i = S(u, l), b.push(C(x - U(i) * f), C(y - W(i) * f)), i = S(L, M), b.push(C(x), C(y), C(x + U(i) * p), C(y + W(i) * p))));
    }

    return b.push(C(P), C(w), C(P), C(w)), b;
  }

  function rawPathToString(t) {
    l(t[0]) && (t = [t]);
    var e,
        n,
        r,
        a,
        o = "",
        i = t.length;

    for (n = 0; n < i; n++) {
      for (a = t[n], o += "M" + C(a[0]) + "," + C(a[1]) + " C", e = a.length, r = 2; r < e; r++) {
        o += C(a[r++]) + "," + C(a[r++]) + " " + C(a[r++]) + "," + C(a[r++]) + " " + C(a[r++]) + "," + C(a[r]) + " ";
      }

      a.closed && (o += "z");
    }

    return o;
  }

  function O(t) {
    var e = t.ownerDocument || t;
    !(w in t.style) && "msTransform" in t.style && (b = (w = "msTransform") + "Origin");

    for (; e.parentNode && (e = e.parentNode);) {
      ;
    }

    if (f = window, y = new G(), e) {
      c = (g = e).documentElement, m = e.body;
      var n = e.createElement("div"),
          r = e.createElement("div");
      m.appendChild(n), n.appendChild(r), n.style.position = "static", n.style[w] = "translate3d(0,0,1px)", P = r.offsetParent !== n, m.removeChild(n);
    }

    return e;
  }

  function T(t) {
    return t.ownerSVGElement || ("svg" === (t.tagName + "").toLowerCase() ? t : null);
  }

  function V(t, e) {
    if (t.parentNode && (g || O(t))) {
      var n = T(t),
          r = n ? n.getAttribute("xmlns") || "http://www.w3.org/2000/svg" : "http://www.w3.org/1999/xhtml",
          a = n ? e ? "rect" : "g" : "div",
          o = 2 !== e ? 0 : 100,
          i = 3 === e ? 100 : 0,
          s = "position:absolute;display:block;pointer-events:none;",
          l = g.createElementNS ? g.createElementNS(r.replace(/^https/, "http"), a) : g.createElement(a);
      return e && (n ? (v = v || V(t), l.setAttribute("width", .01), l.setAttribute("height", .01), l.setAttribute("transform", "translate(" + o + "," + i + ")"), v.appendChild(l)) : (u || ((u = V(t)).style.cssText = s), l.style.cssText = s + "width:0.1px;height:0.1px;top:" + i + "px;left:" + o + "px", u.appendChild(l))), l;
    }

    throw "Need document and parent.";
  }

  function X(t, e) {
    var n,
        r,
        a,
        o,
        i,
        s = T(t),
        l = t === s,
        h = s ? z : E;
    if (t === f) return t;
    if (h.length || h.push(V(t, 1), V(t, 2), V(t, 3)), n = s ? v : u, s) a = l ? {
      x: 0,
      y: 0
    } : t.getBBox(), i = (r = t.transform ? t.transform.baseVal : {}).numberOfItems ? (o = (r = 1 < r.numberOfItems ? function _consolidate(t) {
      for (var e = new G(), n = 0; n < t.numberOfItems; n++) {
        e.multiply(t.getItem(n).matrix);
      }

      return e;
    }(r) : r.getItem(0).matrix).a * a.x + r.c * a.y, r.b * a.x + r.d * a.y) : (r = y, o = a.x, a.y), e && "g" === t.tagName.toLowerCase() && (o = i = 0), n.setAttribute("transform", "matrix(" + r.a + "," + r.b + "," + r.c + "," + r.d + "," + (r.e + o) + "," + (r.f + i) + ")"), (l ? s : t.parentNode).appendChild(n);else {
      if (o = i = 0, P) for (r = t.offsetParent, a = t; (a = a && a.parentNode) && a !== r && a.parentNode;) {
        4 < (f.getComputedStyle(a)[w] + "").length && (o = a.offsetLeft, i = a.offsetTop, a = 0);
      }
      (a = n.style).top = t.offsetTop - i + "px", a.left = t.offsetLeft - o + "px", r = f.getComputedStyle(t), a[w] = r[w], a[b] = r[b], a.border = r.border, a.borderLeftStyle = r.borderLeftStyle, a.borderTopStyle = r.borderTopStyle, a.borderLeftWidth = r.borderLeftWidth, a.borderTopWidth = r.borderTopWidth, a.position = "fixed" === r.position ? "fixed" : "absolute", t.parentNode.appendChild(n);
    }
    return n;
  }

  function Y(t, e, n, r, a, o, i) {
    return t.a = e, t.b = n, t.c = r, t.d = a, t.e = o, t.f = i, t;
  }

  var g,
      f,
      c,
      m,
      u,
      v,
      y,
      P,
      n,
      w = "transform",
      b = w + "Origin",
      z = [],
      E = [],
      G = ((n = Matrix2D.prototype).inverse = function inverse() {
    var t = this.a,
        e = this.b,
        n = this.c,
        r = this.d,
        a = this.e,
        o = this.f,
        i = t * r - e * n;
    return Y(this, r / i, -e / i, -n / i, t / i, (n * o - r * a) / i, -(t * o - e * a) / i);
  }, n.multiply = function multiply(t) {
    var e = this.a,
        n = this.b,
        r = this.c,
        a = this.d,
        o = this.e,
        i = this.f,
        s = t.a,
        l = t.c,
        h = t.b,
        u = t.d,
        g = t.e,
        f = t.f;
    return Y(this, s * e + h * r, s * n + h * a, l * e + u * r, l * n + u * a, o + g * e + f * r, i + g * n + f * a);
  }, n.clone = function clone() {
    return new Matrix2D(this.a, this.b, this.c, this.d, this.e, this.f);
  }, n.equals = function equals(t) {
    var e = this.a,
        n = this.b,
        r = this.c,
        a = this.d,
        o = this.e,
        i = this.f;
    return e === t.a && n === t.b && r === t.c && a === t.d && o === t.e && i === t.f;
  }, n.apply = function apply(t, e) {
    void 0 === e && (e = {});
    var n = t.x,
        r = t.y,
        a = this.a,
        o = this.b,
        i = this.c,
        s = this.d,
        l = this.e,
        h = this.f;
    return e.x = n * a + r * i + l || 0, e.y = n * o + r * s + h || 0, e;
  }, Matrix2D);

  function Matrix2D(t, e, n, r, a, o) {
    void 0 === t && (t = 1), void 0 === e && (e = 0), void 0 === n && (n = 0), void 0 === r && (r = 1), void 0 === a && (a = 0), void 0 === o && (o = 0), Y(this, t, e, n, r, a, o);
  }

  function getGlobalMatrix(t, e, n) {
    if (!t || !t.parentNode || (g || O(t)).documentElement === t) return new G();

    var r = T(t) ? z : E,
        a = X(t, n),
        o = r[0].getBoundingClientRect(),
        i = r[1].getBoundingClientRect(),
        s = r[2].getBoundingClientRect(),
        l = a.parentNode,
        h = function _isFixed(t) {
      return "fixed" === f.getComputedStyle(t).position || ((t = t.parentNode) && 1 === t.nodeType ? _isFixed(t) : void 0);
    }(t),
        u = new G((i.left - o.left) / 100, (i.top - o.top) / 100, (s.left - o.left) / 100, (s.top - o.top) / 100, o.left + (h ? 0 : function _getDocScrollLeft() {
      return f.pageXOffset || g.scrollLeft || c.scrollLeft || m.scrollLeft || 0;
    }()), o.top + (h ? 0 : function _getDocScrollTop() {
      return f.pageYOffset || g.scrollTop || c.scrollTop || m.scrollTop || 0;
    }()));

    return l.removeChild(a), e ? u.inverse() : u;
  }

  function ga(t, e, n, r) {
    for (var a = e.length, o = r, i = 0; i < a; i++) {
      t[o] = parseFloat(e[i][n]), o += 2;
    }

    return t;
  }

  function ha(t, e, n) {
    return parseFloat(t._gsap.get(t, e, n || "px")) || 0;
  }

  function ia(t) {
    var e,
        n = t[0],
        r = t[1];

    for (e = 2; e < t.length; e += 2) {
      n = t[e] += n, r = t[e + 1] += r;
    }
  }

  function ja(t, e, n, r, a, o, i) {
    return e = "cubic" === i.type ? [e] : (e.unshift(ha(n, r, i.unitX), a ? ha(n, a, i.unitY) : 0), i.relative && ia(e), [(a ? pointsToSegment : flatPointsToSegment)(e, i.curviness)]), e = o(tt(e, n, i)), et(t, n, r, e, "x", i.unitX), a && et(t, n, a, e, "y", i.unitY), cacheRawPathMeasurements(e, i.resolution || (0 === i.curviness ? 20 : 12));
  }

  function ka(t) {
    return t;
  }

  function ma(t, e, n) {
    var r,
        a,
        o,
        i = getGlobalMatrix(t);
    return "svg" === (t.tagName + "").toLowerCase() ? (a = (r = t.viewBox.baseVal).x, o = r.y, r.width || (r = {
      width: +t.getAttribute("width"),
      height: +t.getAttribute("height")
    })) : (r = e && t.getBBox && t.getBBox(), a = o = 0), e && "auto" !== e && (a += e.push ? e[0] * (r ? r.width : t.offsetWidth || 0) : e.x, o += e.push ? e[1] * (r ? r.height : t.offsetHeight || 0) : e.y), n.apply(a || o ? i.apply({
      x: a,
      y: o
    }) : {
      x: i.e,
      y: i.f
    });
  }

  function na(t, e, n, r) {
    var a,
        o = getGlobalMatrix(t.parentNode, !0, !0),
        i = o.clone().multiply(getGlobalMatrix(e)),
        s = ma(t, n, o),
        l = ma(e, r, o),
        h = l.x,
        u = l.y;
    return i.e = i.f = 0, "auto" === r && e.getTotalLength && "path" === e.tagName.toLowerCase() && (a = e.getAttribute("d").match(K) || [], h += (a = i.apply({
      x: +a[0],
      y: +a[1]
    })).x, u += a.y), (a || e.getBBox && t.getBBox) && (h -= (a = i.apply(e.getBBox())).x, u -= a.y), i.e = h - s.x, i.f = u - s.y, i;
  }

  var j,
      k,
      q,
      Q,
      $ = ["x", "translateX", "left", "marginLeft"],
      J = ["y", "translateY", "top", "marginTop"],
      o = Math.PI / 180,
      K = /[-+\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/g,
      tt = function _align(t, e, n) {
    var r,
        a,
        o,
        i = n.align,
        s = n.matrix,
        l = n.offsetX,
        h = n.offsetY,
        u = n.alignOrigin,
        g = t[0][0],
        f = t[0][1],
        p = ha(e, "x"),
        c = ha(e, "y");
    return t && t.length ? (i && ("self" === i || (r = Q(i)[0] || e) === e ? transformRawPath(t, 1, 0, 0, 1, p - g, c - f) : (u && !1 !== u[2] ? j.set(e, {
      transformOrigin: 100 * u[0] + "% " + 100 * u[1] + "%"
    }) : u = [ha(e, "xPercent") / -100, ha(e, "yPercent") / -100], o = (a = na(e, r, u, "auto")).apply({
      x: g,
      y: f
    }), transformRawPath(t, a.a, a.b, a.c, a.d, p + a.e - (o.x - a.e), c + a.f - (o.y - a.f)))), s ? transformRawPath(t, s.a, s.b, s.c, s.d, s.e, s.f) : (l || h) && transformRawPath(t, 1, 0, 0, 1, l || 0, h || 0), t) : getRawPath("M0,0L0,0");
  },
      et = function _addDimensionalPropTween(t, e, n, r, a, o) {
    var i = e._gsap,
        s = i.harness,
        l = s && s.aliases && s.aliases[n],
        h = l && l.indexOf(",") < 0 ? l : n,
        u = t._pt = new k(t._pt, e, h, 0, 0, ka, 0, i.set(e, h, t));
    u.u = q(i.get(e, h, o)) || 0, u.path = r, u.pp = a, t._props.push(h);
  },
      a = {
    version: "3.2.6",
    name: "motionPath",
    register: function register(t, e, n) {
      q = (j = t).utils.getUnit, Q = j.utils.toArray, k = n;
    },
    init: function init(t, e) {
      if (!j) return console.warn("Please gsap.registerPlugin(MotionPathPlugin)"), !1;
      "object" == _typeof(e) && !e.style && e.path || (e = {
        path: e
      });

      var n,
          r,
          a,
          o,
          i = [],
          s = e.path,
          l = s[0],
          h = e.autoRotate,
          u = function _sliceModifier(e, n) {
        return function (t) {
          return e || 1 !== n ? sliceRawPath(t, e, n) : t;
        };
      }(e.start, "end" in e ? e.end : 1);

      if (this.rawPaths = i, this.target = t, (this.rotate = h || 0 === h) && (this.rOffset = parseFloat(h) || 0, this.radians = !!e.useRadians, this.rProp = e.rotation || "rotation", this.rSet = t._gsap.set(t, this.rProp, this), this.ru = q(t._gsap.get(t, this.rProp)) || 0), !Array.isArray(s) || "closed" in s || "number" == typeof l) cacheRawPathMeasurements(n = u(tt(getRawPath(e.path), t, e)), e.resolution), i.push(n), et(this, t, e.x || "x", n, "x", e.unitX || "px"), et(this, t, e.y || "y", n, "y", e.unitY || "px");else {
        for (r in l) {
          ~$.indexOf(r) ? a = r : ~J.indexOf(r) && (o = r);
        }

        for (r in a && o ? i.push(ja(this, ga(ga([], s, a, 0), s, o, 1), t, e.x || a, e.y || o, u, e)) : a = o = 0, l) {
          r !== a && r !== o && i.push(ja(this, ga([], s, r, 0), t, r, 0, u, e));
        }
      }
    },
    render: function render(t, e) {
      var n = e.rawPaths,
          r = n.length,
          a = e._pt;

      for (1 < t ? t = 1 : t < 0 && (t = 0); r--;) {
        getPositionOnPath(n[r], t, !r && e.rotate, n[r]);
      }

      for (; a;) {
        a.set(a.t, a.p, a.path[a.pp] + a.u, a.d, t), a = a._next;
      }

      e.rotate && e.rSet(e.target, e.rProp, n[0].angle * (e.radians ? o : 1) + e.rOffset + e.ru, e, t);
    },
    getLength: function getLength(t) {
      return cacheRawPathMeasurements(getRawPath(t)).totalLength;
    },
    sliceRawPath: sliceRawPath,
    getRawPath: getRawPath,
    pointsToSegment: pointsToSegment,
    stringToRawPath: stringToRawPath,
    rawPathToString: rawPathToString,
    transformRawPath: transformRawPath,
    getGlobalMatrix: getGlobalMatrix,
    getPositionOnPath: getPositionOnPath,
    cacheRawPathMeasurements: cacheRawPathMeasurements,
    convertToPath: function convertToPath$1(t, e) {
      return Q(t).map(function (t) {
        return convertToPath(t, !1 !== e);
      });
    },
    convertCoordinates: function convertCoordinates(t, e, n) {
      var r = getGlobalMatrix(e, !0, !0).multiply(getGlobalMatrix(t));
      return n ? r.apply(n) : r;
    },
    getAlignMatrix: na,
    getRelativePosition: function getRelativePosition(t, e, n, r) {
      var a = na(t, e, n, r);
      return {
        x: a.e,
        y: a.f
      };
    },
    arrayToRawPath: function arrayToRawPath(t, e) {
      var n = ga(ga([], t, (e = e || {}).x || "x", 0), t, e.y || "y", 1);
      return e.relative && ia(n), ["cubic" === e.type ? n : pointsToSegment(n, e.curviness)];
    }
  };

  !function _getGSAP() {
    return j || "undefined" != typeof window && (j = window.gsap) && j.registerPlugin && j;
  }() || j.registerPlugin(a), t.MotionPathPlugin = a, t["default"] = a;

  if (typeof window === "undefined" || window !== t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
  } else {
    delete t["default"];
  }
});
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * PixiPlugin 3.2.6
 * https://greensock.com
 * 
 * @license Copyright 2020, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
!function (t, i) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? i(exports) : "function" == typeof define && define.amd ? define(["exports"], i) : i((t = t || self).window = t.window || {});
}(this, function (i) {
  "use strict";

  function k() {
    return "undefined" != typeof window;
  }

  function l() {
    return o || k() && (o = window.gsap) && o.registerPlugin && o;
  }

  function m(t) {
    return "function" == typeof t;
  }

  function s(t, i) {
    var r,
        o,
        e = [],
        n = 0,
        s = 0;

    for (r = 0; r < 4; r++) {
      for (o = 0; o < 5; o++) {
        s = 4 === o ? t[n + 4] : 0, e[n + o] = t[n] * i[o] + t[n + 1] * i[o + 5] + t[n + 2] * i[o + 10] + t[n + 3] * i[o + 15] + s;
      }

      n += 5;
    }

    return e;
  }

  function t(t, i) {
    var r = 1 - i,
        o = r * p,
        e = r * g,
        n = r * b;
    return s([o + i, e, n, 0, 0, o, e + i, n, 0, 0, o, e, n + i, 0, 0, 0, 0, 0, 1, 0], t);
  }

  function u(t, i, r) {
    var o = c(i),
        e = o[0] / 255,
        n = o[1] / 255,
        l = o[2] / 255,
        a = 1 - r;
    return s([a + r * e * p, r * e * g, r * e * b, 0, 0, r * n * p, a + r * n * g, r * n * b, 0, 0, r * l * p, r * l * g, a + r * l * b, 0, 0, 0, 0, 0, 1, 0], t);
  }

  function v(t, i) {
    i *= Math.PI / 180;
    var r = Math.cos(i),
        o = Math.sin(i);
    return s([p + r * (1 - p) + o * -p, g + r * -g + o * -g, b + r * -b + o * (1 - b), 0, 0, p + r * -p + .143 * o, g + r * (1 - g) + .14 * o, b + r * -b + -.283 * o, 0, 0, p + r * -p + o * -(1 - p), g + r * -g + o * g, b + r * (1 - b) + o * b, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1], t);
  }

  function w(t, i) {
    return s([i, 0, 0, 0, .5 * (1 - i), 0, i, 0, 0, .5 * (1 - i), 0, 0, i, 0, .5 * (1 - i), 0, 0, 0, 1, 0], t);
  }

  function x(t, i) {
    var r,
        o = h.filters[i],
        e = t.filters || [],
        n = e.length;

    for (o || function _warn(t) {
      console.warn(t);
    }(i + " not found. PixiPlugin.registerPIXI(PIXI)"); -1 < --n;) {
      if (e[n] instanceof o) return e[n];
    }

    return r = new o(), "BlurFilter" === i && (r.blur = 0), e.push(r), t.filters = e, r;
  }

  function y(t, i, r, o) {
    i.add(r, t, r[t], o[t]), i._props.push(t);
  }

  function z(t, i) {
    var r = new h.filters.ColorMatrixFilter();
    return r.matrix = i, r.brightness(t, !0), r.matrix;
  }

  function C(i, r, o) {
    var e,
        n,
        s,
        l = x(i, "ColorMatrixFilter"),
        a = i._gsColorMatrixFilter = i._gsColorMatrixFilter || function _copy(t) {
      var i,
          r = {};

      for (i in t) {
        r[i] = t[i];
      }

      return r;
    }(_),
        c = r.combineCMF && !("colorMatrixFilter" in r && !r.colorMatrixFilter);

    s = l.matrix, r.resolution && (l.resolution = r.resolution), r.matrix && r.matrix.length === s.length ? (n = r.matrix, 1 !== a.contrast && y("contrast", o, a, _), a.hue && y("hue", o, a, _), 1 !== a.brightness && y("brightness", o, a, _), a.colorizeAmount && (y("colorize", o, a, _), y("colorizeAmount", o, a, _)), 1 !== a.saturation && y("saturation", o, a, _)) : (n = f.slice(), null != r.contrast ? (n = w(n, +r.contrast), y("contrast", o, a, r)) : 1 !== a.contrast && (c ? n = w(n, a.contrast) : y("contrast", o, a, _)), null != r.hue ? (n = v(n, +r.hue), y("hue", o, a, r)) : a.hue && (c ? n = v(n, a.hue) : y("hue", o, a, _)), null != r.brightness ? (n = z(+r.brightness, n), y("brightness", o, a, r)) : 1 !== a.brightness && (c ? n = z(a.brightness, n) : y("brightness", o, a, _)), null != r.colorize ? (r.colorizeAmount = "colorizeAmount" in r ? +r.colorizeAmount : 1, n = u(n, r.colorize, r.colorizeAmount), y("colorize", o, a, r), y("colorizeAmount", o, a, r)) : a.colorizeAmount && (c ? n = u(n, a.colorize, a.colorizeAmount) : (y("colorize", o, a, _), y("colorizeAmount", o, a, _))), null != r.saturation ? (n = t(n, +r.saturation), y("saturation", o, a, r)) : 1 !== a.saturation && (c ? n = t(n, a.saturation) : y("saturation", o, a, _))), e = n.length;

    for (; -1 < --e;) {
      n[e] !== s[e] && o.add(s, e, s[e], n[e], "colorMatrixFilter");
    }

    o._props.push("colorMatrixFilter");
  }

  function D(t, i) {
    var r = i.t,
        o = i.p,
        e = i.color;
    (0, i.set)(r, o, e[0] << 16 | e[1] << 8 | e[2]);
  }

  function E(t, i) {
    var r = i.g;
    r && (r.dirty++, r.clearDirty++);
  }

  function F(t, i) {
    i.t.visible = !!i.t.alpha;
  }

  function G(t, i, r, o) {
    var e = t[i],
        n = c(m(e) ? t[i.indexOf("set") || !m(t["get" + i.substr(3)]) ? i : "get" + i.substr(3)]() : e),
        s = c(r);
    o._pt = new d(o._pt, t, i, 0, 0, D, {
      t: t,
      p: i,
      color: n,
      set: a(t, i)
    }), o.add(n, 0, n[0], s[0]), o.add(n, 1, n[1], s[1]), o.add(n, 2, n[2], s[2]);
  }

  function M(t) {
    return "string" == typeof t;
  }

  function N(t) {
    return M(t) && "=" === t.charAt(1) ? t.substr(0, 2) + parseFloat(t.substr(2)) * j : t * j;
  }

  function O(t, i) {
    return i.set(i.t, i.p, 1 === t ? i.e : Math.round(1e5 * (i.s + i.c * t)) / 1e5, i);
  }

  function P(t, i, r, o, e, n) {
    var s,
        l,
        a = 360 * (n ? j : 1),
        u = M(e),
        c = u && "=" === e.charAt(1) ? +(e.charAt(0) + "1") : 0,
        f = parseFloat(c ? e.substr(2) : e) * (n ? j : 1),
        h = c ? f * c : f - o,
        p = o + h;
    return u && ("short" === (s = e.split("_")[1]) && (h %= a) !== h % (a / 2) && (h += h < 0 ? a : -a), "cw" === s && h < 0 ? h = (h + 1e10 * a) % a - ~~(h / a) * a : "ccw" === s && 0 < h && (h = (h - 1e10 * a) % a - ~~(h / a) * a)), t._pt = l = new d(t._pt, i, r, o, h, O), l.e = p, l;
  }

  function Q() {
    k() && (r = window, o = l(), h = h || r.PIXI, c = o.utils.splitColor);
  }

  var o,
      r,
      c,
      h,
      d,
      a,
      e,
      n,
      f = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
      p = .212671,
      g = .71516,
      b = .072169,
      _ = {
    contrast: 1,
    saturation: 1,
    colorizeAmount: 0,
    colorize: "rgb(255,255,255)",
    hue: 0,
    brightness: 1
  },
      A = {
    tint: 1,
    lineColor: 1,
    fillColor: 1
  },
      I = "position,scale,skew,pivot,anchor,tilePosition,tileScale".split(","),
      X = {
    x: "position",
    y: "position",
    tileX: "tilePosition",
    tileY: "tilePosition"
  },
      S = {
    colorMatrixFilter: 1,
    saturation: 1,
    contrast: 1,
    hue: 1,
    colorize: 1,
    colorizeAmount: 1,
    brightness: 1,
    combineCMF: 1
  },
      j = Math.PI / 180;

  for (e = 0; e < I.length; e++) {
    n = I[e], X[n + "X"] = n, X[n + "Y"] = n;
  }

  var Y = {
    version: "3.2.6",
    name: "pixi",
    register: function register(t, i, r) {
      o = t, d = r, a = i.getSetter, Q();
    },
    registerPIXI: function registerPIXI(t) {
      h = t;
    },
    init: function init(t, i) {
      if (h || Q(), !t instanceof h.DisplayObject) return !1;
      var r,
          o,
          e,
          n,
          s,
          l,
          a,
          u,
          c,
          f = "4" === h.VERSION.charAt(0);

      for (l in i) {
        if (r = X[l], e = i[l], r) o = ~l.charAt(l.length - 1).toLowerCase().indexOf("x") ? "x" : "y", this.add(t[r], o, t[r][o], "skew" === r ? N(e) : e);else if ("scale" === l || "anchor" === l || "pivot" === l || "tileScale" === l) this.add(t[l], "x", t[l].x, e), this.add(t[l], "y", t[l].y, e);else if ("rotation" === l || "angle" === l) P(this, t, l, t[l], e, "rotation" === l);else if (S[l]) n || (C(t, i.colorMatrixFilter || i, this), n = !0);else if ("blur" === l || "blurX" === l || "blurY" === l || "blurPadding" === l) {
          if (s = x(t, "BlurFilter"), this.add(s, l, s[l], e), 0 !== i.blurPadding) for (a = i.blurPadding || 2 * Math.max(s[l], e), u = t.filters.length; -1 < --u;) {
            t.filters[u].padding = Math.max(t.filters[u].padding, a);
          }
        } else if (A[l]) {
          if (("lineColor" === l || "fillColor" === l) && t instanceof h.Graphics) for (c = (t.geometry || t).graphicsData, this._pt = new d(this._pt, t, l, 0, 0, E, {
            g: t.geometry || t
          }), u = c.length; -1 < --u;) {
            G(f ? c[u] : c[u][l.substr(0, 4) + "Style"], f ? l : "color", e, this);
          } else G(t, l, e, this);
        } else "autoAlpha" === l ? (this._pt = new d(this._pt, t, "visible", 0, 0, F), this.add(t, "alpha", t.alpha, e), this._props.push("alpha", "visible")) : this.add(t, l, "get", e);

        this._props.push(l);
      }
    }
  };
  l() && o.registerPlugin(Y), i.PixiPlugin = Y, i["default"] = Y;

  if (typeof window === "undefined" || window !== i) {
    Object.defineProperty(i, "__esModule", {
      value: !0
    });
  } else {
    delete i["default"];
  }
});
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * ScrollToPlugin 3.2.6
 * https://greensock.com
 * 
 * @license Copyright 2020, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
!function (t, e) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = t || self).window = t.window || {});
}(this, function (t) {
  "use strict";

  function k() {
    return "undefined" != typeof window;
  }

  function l() {
    return e || k() && (e = window.gsap) && e.registerPlugin && e;
  }

  function m(t) {
    return "string" == typeof t;
  }

  function n(t, e) {
    var o = "x" === e ? "Width" : "Height",
        n = "scroll" + o,
        r = "client" + o;
    return t === x || t === s || t === f ? Math.max(s[n], f[n]) - (x["inner" + o] || s[r] || f[r]) : t[n] - t["offset" + o];
  }

  function o(t, e) {
    var o = "scroll" + ("x" === e ? "Left" : "Top");
    return t === x && (null != t.pageXOffset ? o = "page" + e.toUpperCase() + "Offset" : t = null != s[o] ? s : f), function () {
      return t[o];
    };
  }

  function p(t, e) {
    var n = a(t)[0].getBoundingClientRect(),
        r = !e || e === x || e === f,
        i = r ? {
      top: s.clientTop - (x.pageYOffset || s.scrollTop || f.scrollTop || 0),
      left: s.clientLeft - (x.pageXOffset || s.scrollLeft || f.scrollLeft || 0)
    } : e.getBoundingClientRect(),
        l = {
      x: n.left - i.left,
      y: n.top - i.top
    };
    return !r && e && (l.x += o(e, "x")(), l.y += o(e, "y")()), l;
  }

  function q(t, e, o, r) {
    return isNaN(t) || "object" == _typeof(t) ? m(t) && "=" === t.charAt(1) ? parseFloat(t.substr(2)) * ("-" === t.charAt(0) ? -1 : 1) + r : "max" === t ? n(e, o) : Math.min(n(e, o), p(t, e)[o]) : parseFloat(t);
  }

  function r() {
    e = l(), k() && e && document.body && (x = window, f = document.body, s = document.documentElement, a = e.utils.toArray, e.config({
      autoKillThreshold: 7
    }), g = e.config(), u = 1);
  }

  var e,
      u,
      x,
      s,
      f,
      a,
      g,
      i = {
    version: "3.2.6",
    name: "scrollTo",
    rawVars: 1,
    register: function register(t) {
      e = t, r();
    },
    init: function init(t, e, n, i, l) {
      u || r();
      var s = this;
      s.isWin = t === x, s.target = t, s.tween = n, "object" != _typeof(e) ? m((e = {
        y: e
      }).y) && "max" !== e.y && "=" !== e.y.charAt(1) && (e.x = e.y) : e.nodeType && (e = {
        y: e,
        x: e
      }), s.vars = e, s.autoKill = !!e.autoKill, s.getX = o(t, "x"), s.getY = o(t, "y"), s.x = s.xPrev = s.getX(), s.y = s.yPrev = s.getY(), null != e.x ? (s.add(s, "x", s.x, q(e.x, t, "x", s.x) - (e.offsetX || 0), i, l, Math.round), s._props.push("scrollTo_x")) : s.skipX = 1, null != e.y ? (s.add(s, "y", s.y, q(e.y, t, "y", s.y) - (e.offsetY || 0), i, l, Math.round), s._props.push("scrollTo_y")) : s.skipY = 1;
    },
    render: function render(t, e) {
      for (var o, r, i, l, s, u = e._pt, f = e.target, p = e.tween, a = e.autoKill, c = e.xPrev, y = e.yPrev, d = e.isWin; u;) {
        u.r(t, u.d), u = u._next;
      }

      o = d || !e.skipX ? e.getX() : c, i = (r = d || !e.skipY ? e.getY() : y) - y, l = o - c, s = g.autoKillThreshold, e.x < 0 && (e.x = 0), e.y < 0 && (e.y = 0), a && (!e.skipX && (s < l || l < -s) && o < n(f, "x") && (e.skipX = 1), !e.skipY && (s < i || i < -s) && r < n(f, "y") && (e.skipY = 1), e.skipX && e.skipY && (p.kill(), e.vars.onAutoKill && e.vars.onAutoKill.apply(p, e.vars.onAutoKillParams || []))), d ? x.scrollTo(e.skipX ? o : e.x, e.skipY ? r : e.y) : (e.skipY || (f.scrollTop = e.y), e.skipX || (f.scrollLeft = e.x)), e.xPrev = e.x, e.yPrev = e.y;
    },
    kill: function kill(t) {
      var e = "scrollTo" === t;
      !e && "scrollTo_x" !== t || (this.skipX = 1), !e && "scrollTo_y" !== t || (this.skipY = 1);
    }
  };
  i.max = n, i.getOffset = p, i.buildGetter = o, l() && e.registerPlugin(i), t.ScrollToPlugin = i, t["default"] = i;

  if (typeof window === "undefined" || window !== t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
  } else {
    delete t["default"];
  }
});
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * TextPlugin 3.2.6
 * https://greensock.com
 * 
 * @license Copyright 2020, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
!function (D, u) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? u(exports) : "function" == typeof define && define.amd ? define(["exports"], u) : u((D = D || self).window = D.window || {});
}(this, function (D) {
  "use strict";

  var B = /(^\s+|\s+$)/g,
      i = /([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;

  function splitInnerHTML(D, u, F) {
    for (var C = D.firstChild, E = []; C;) {
      3 === C.nodeType ? E.push.apply(E, emojiSafeSplit((C.nodeValue + "").replace(/^\n+/g, "").replace(/\s+/g, " "), u, F)) : "br" === (C.nodeName + "").toLowerCase() ? E[E.length - 1] += "<br>" : E.push(C.outerHTML), C = C.nextSibling;
    }

    return E;
  }

  function emojiSafeSplit(D, u, F) {
    if (D += "", F && (D = D.replace(B, "")), u && "" !== u) return D.replace(/>/g, "&gt;").replace(/</g, "&lt;").split(u);

    for (var C, E, e = [], t = D.length, n = 0; n < t; n++) {
      (55296 <= (E = D.charAt(n)).charCodeAt(0) && E.charCodeAt(0) <= 56319 || 65024 <= D.charCodeAt(n + 1) && D.charCodeAt(n + 1) <= 65039) && (C = ((D.substr(n, 12).split(i) || [])[1] || "").length || 2, E = D.substr(n, C), n += C - (e.emoji = 1)), e.push(">" === E ? "&gt;" : "<" === E ? "&lt;" : E);
    }

    return e;
  }

  var u,
      l,
      F = {
    version: "3.2.6",
    name: "text",
    init: function init(D, u, F) {
      var C,
          E,
          e,
          t,
          n,
          B,
          i,
          A,
          r = D.nodeName.toUpperCase(),
          s = this;
      if (s.svg = D.getBBox && ("TEXT" === r || "TSPAN" === r), !("innerHTML" in D || s.svg)) return !1;

      if (s.target = D, "object" != _typeof(u) && (u = {
        value: u
      }), "value" in u) {
        for (s.delimiter = u.delimiter || "", e = splitInnerHTML(D, s.delimiter), (l = l || document.createElement("div")).innerHTML = u.value, E = splitInnerHTML(l, s.delimiter), s.from = F._from, s.from && (r = e, e = E, E = r), s.hasClass = !(!u.newClass && !u.oldClass), s.newClass = u.newClass, s.oldClass = u.oldClass, C = (r = e.length - E.length) < 0 ? e : E, s.fillChar = u.fillChar || (u.padSpace ? "&nbsp;" : ""), r < 0 && (r = -r); -1 < --r;) {
          C.push(s.fillChar);
        }

        if ("diff" === u.type) {
          for (n = [], B = [], i = "", r = t = 0; r < E.length; r++) {
            (A = E[r]) === e[r] ? i += A : (n[t] = i + A, B[t++] = i + e[r], i = "");
          }

          E = n, e = B, i && (E.push(i), e.push(i));
        }

        u.speed && F.duration(Math.min(.05 / u.speed * C.length, u.maxDuration || 9999)), this.original = e, this.text = E, this._props.push("text");
      } else s.text = s.original = [""];
    },
    render: function render(D, u) {
      1 < D ? D = 1 : D < 0 && (D = 0), u.from && (D = 1 - D);
      var F,
          C,
          E,
          e = u.text,
          t = u.hasClass,
          n = u.newClass,
          B = u.oldClass,
          i = u.delimiter,
          A = u.target,
          r = u.fillChar,
          s = u.original,
          l = e.length,
          o = D * l + .5 | 0;
      E = t ? (C = B && o !== l, ((F = n && o) ? "<span class='" + n + "'>" : "") + e.slice(0, o).join(i) + (F ? "</span>" : "") + (C ? "<span class='" + B + "'>" : "") + i + s.slice(o).join(i) + (C ? "</span>" : "")) : e.slice(0, o).join(i) + i + s.slice(o).join(i), u.svg ? A.textContent = E : A.innerHTML = "&nbsp;" === r && ~E.indexOf("  ") ? E.split("  ").join("&nbsp;&nbsp;") : E;
    }
  };
  F.splitInnerHTML = splitInnerHTML, F.emojiSafeSplit = emojiSafeSplit, F.getText = function getText(D) {
    var u = D.nodeType,
        F = "";

    if (1 === u || 9 === u || 11 === u) {
      if ("string" == typeof D.textContent) return D.textContent;

      for (D = D.firstChild; D; D = D.nextSibling) {
        F += getText(D);
      }
    } else if (3 === u || 4 === u) return D.nodeValue;

    return F;
  }, function _getGSAP() {
    return u || "undefined" != typeof window && (u = window.gsap) && u.registerPlugin && u;
  }() && u.registerPlugin(F), D.TextPlugin = F, D["default"] = F;

  if (typeof window === "undefined" || window !== D) {
    Object.defineProperty(D, "__esModule", {
      value: !0
    });
  } else {
    delete D["default"];
  }
});
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * GSAP 3.2.6
 * https://greensock.com
 * 
 * @license Copyright 2020, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
!function (t, e) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = t || self).window = t.window || {});
}(this, function (e) {
  "use strict";

  function _inheritsLoose(t, e) {
    t.prototype = Object.create(e.prototype), (t.prototype.constructor = t).__proto__ = e;
  }

  function _assertThisInitialized(t) {
    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t;
  }

  function n(t) {
    return "string" == typeof t;
  }

  function o(t) {
    return "function" == typeof t;
  }

  function p(t) {
    return "number" == typeof t;
  }

  function q(t) {
    return void 0 === t;
  }

  function r(t) {
    return "object" == _typeof(t);
  }

  function s(t) {
    return !1 !== t;
  }

  function t() {
    return "undefined" != typeof window;
  }

  function u(t) {
    return o(t) || n(t);
  }

  function K(t) {
    return (l = pt(t, at)) && ie;
  }

  function L(t, e) {
    return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()");
  }

  function M(t, e) {
    return !e && console.warn(t);
  }

  function N(t, e) {
    return t && (at[t] = e) && l && (l[t] = e) || at;
  }

  function O() {
    return 0;
  }

  function Y(t) {
    var e,
        i,
        n = t[0];

    if (r(n) || o(n) || (t = [t]), !(e = (n._gsap || {}).harness)) {
      for (i = dt.length; i-- && !dt[i].targetTest(n);) {
        ;
      }

      e = dt[i];
    }

    for (i = t.length; i--;) {
      t[i] && (t[i]._gsap || (t[i]._gsap = new Ft(t[i], e))) || t.splice(i, 1);
    }

    return t;
  }

  function Z(t) {
    return t._gsap || Y(yt(t))[0]._gsap;
  }

  function $(t, e) {
    var r = t[e];
    return o(r) ? t[e]() : q(r) && t.getAttribute(e) || r;
  }

  function _(t, e) {
    return (t = t.split(",")).forEach(e) || t;
  }

  function aa(t) {
    return Math.round(1e5 * t) / 1e5 || 0;
  }

  function ba(t, e) {
    for (var r = e.length, i = 0; t.indexOf(e[i]) < 0 && ++i < r;) {
      ;
    }

    return i < r;
  }

  function ca(t, e, r) {
    var i,
        n = p(t[1]),
        a = (n ? 2 : 1) + (e < 2 ? 0 : 1),
        o = t[a];

    if (n && (o.duration = t[1]), o.parent = r, e) {
      for (i = o; r && !("immediateRender" in i);) {
        i = r.vars.defaults || {}, r = s(r.vars.inherit) && r.parent;
      }

      o.immediateRender = s(i.immediateRender), e < 2 ? o.runBackwards = 1 : o.startAt = t[a - 1];
    }

    return o;
  }

  function da() {
    var t,
        e,
        r = ot.length,
        i = ot.slice(0);

    for (ut = {}, t = ot.length = 0; t < r; t++) {
      (e = i[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0);
    }
  }

  function ea(t, e, r, i) {
    ot.length && da(), t.render(e, r, i), ot.length && da();
  }

  function fa(t) {
    var e = parseFloat(t);
    return (e || 0 === e) && (t + "").match(nt).length < 2 ? e : t;
  }

  function ga(t) {
    return t;
  }

  function ha(t, e) {
    for (var r in e) {
      r in t || (t[r] = e[r]);
    }

    return t;
  }

  function ia(t, e) {
    for (var r in e) {
      r in t || "duration" === r || "ease" === r || (t[r] = e[r]);
    }
  }

  function ka(t, e) {
    for (var i in e) {
      t[i] = r(e[i]) ? ka(t[i] || (t[i] = {}), e[i]) : e[i];
    }

    return t;
  }

  function la(t, e) {
    var r,
        i = {};

    for (r in t) {
      r in e || (i[r] = t[r]);
    }

    return i;
  }

  function ma(t) {
    var e = t.parent || F,
        r = t.keyframes ? ia : ha;
    if (s(t.inherit)) for (; e;) {
      r(t, e.vars.defaults), e = e.parent;
    }
    return t;
  }

  function pa(t, e, r, i) {
    void 0 === r && (r = "_first"), void 0 === i && (i = "_last");
    var n = e._prev,
        a = e._next;
    n ? n._next = a : t[r] === e && (t[r] = a), a ? a._prev = n : t[i] === e && (t[i] = n), e._next = e._prev = e.parent = null;
  }

  function qa(t, e) {
    !t.parent || e && !t.parent.autoRemoveChildren || t.parent.remove(t), t._act = 0;
  }

  function ra(t) {
    for (var e = t; e;) {
      e._dirty = 1, e = e.parent;
    }

    return t;
  }

  function ua(t) {
    return t._repeat ? _t(t._tTime, t = t.duration() + t._rDelay) * t : 0;
  }

  function wa(t, e) {
    return (t - e._start) * e._ts + (0 <= e._ts ? 0 : e._dirty ? e.totalDuration() : e._tDur);
  }

  function xa(t) {
    return t._end = aa(t._start + (t._tDur / Math.abs(t._ts || t._rts || B) || 0));
  }

  function ya(t, e) {
    var r;

    if ((e._time || e._initted && !e._dur) && (r = wa(t.rawTime(), e), (!e._dur || gt(0, e.totalDuration(), r) - e._tTime > B) && e.render(r, !0)), ra(t)._dp && t._initted && t._time >= t._dur && t._ts) {
      if (t._dur < t.duration()) for (r = t; r._dp;) {
        0 <= r.rawTime() && r.totalTime(r._tTime), r = r._dp;
      }
      t._zTime = -B;
    }
  }

  function za(t, e, r, i) {
    return e.parent && qa(e), e._start = aa(r + e._delay), e._end = aa(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)), function _addLinkedListItem(t, e, r, i, n) {
      void 0 === r && (r = "_first"), void 0 === i && (i = "_last");
      var a,
          s = t[i];
      if (n) for (a = e[n]; s && s[n] > a;) {
        s = s._prev;
      }
      s ? (e._next = s._next, s._next = e) : (e._next = t[r], t[r] = e), e._next ? e._next._prev = e : t[i] = e, e._prev = s, e.parent = e._dp = t;
    }(t, e, "_first", "_last", t._sort ? "_start" : 0), t._recent = e, i || ya(t, e), t;
  }

  function Aa(t, e, r, i) {
    return qt(t, e), t._initted ? !r && t._pt && (t._dur && !1 !== t.vars.lazy || !t._dur && t.vars.lazy) && d !== Ot.frame ? (ot.push(t), t._lazy = [e, i], 1) : void 0 : 1;
  }

  function Da(t, e, r) {
    var i = t._repeat,
        n = aa(e) || 0;
    return t._dur = n, t._tDur = i ? i < 0 ? 1e12 : aa(n * (i + 1) + t._rDelay * i) : n, t._time > n && (t._time = n, t._tTime = Math.min(t._tTime, t._tDur)), r || ra(t.parent), t.parent && xa(t), t;
  }

  function Ea(t) {
    return t instanceof Bt ? ra(t) : Da(t, t._dur);
  }

  function Ga(t, e) {
    var r,
        i,
        a = t.labels,
        s = t._recent || mt,
        o = t.duration() >= R ? s.endTime(!1) : t._dur;
    return n(e) && (isNaN(e) || e in a) ? "<" === (r = e.charAt(0)) || ">" === r ? ("<" === r ? s._start : s.endTime(0 <= s._repeat)) + (parseFloat(e.substr(1)) || 0) : (r = e.indexOf("=")) < 0 ? (e in a || (a[e] = o), a[e]) : (i = +(e.charAt(r - 1) + e.substr(r + 1)), 1 < r ? Ga(t, e.substr(0, r - 1)) + i : o + i) : null == e ? o : +e;
  }

  function Ha(t, e) {
    return t || 0 === t ? e(t) : e;
  }

  function Ja(t) {
    return (t + "").substr((parseFloat(t) + "").length);
  }

  function Ma(t, e) {
    return t && r(t) && "length" in t && (!e && !t.length || t.length - 1 in t && r(t[0])) && !t.nodeType && t !== i;
  }

  function Pa(t) {
    return t.sort(function () {
      return .5 - Math.random();
    });
  }

  function Qa(t) {
    if (o(t)) return t;

    var p = r(t) ? t : {
      each: t
    },
        _ = Dt(p.ease),
        m = p.from || 0,
        g = parseFloat(p.base) || 0,
        v = {},
        e = 0 < m && m < 1,
        y = isNaN(m) || e,
        T = p.axis,
        b = m,
        w = m;

    return n(m) ? b = w = {
      center: .5,
      edges: .5,
      end: 1
    }[m] || 0 : !e && y && (b = m[0], w = m[1]), function (t, e, r) {
      var i,
          n,
          a,
          s,
          o,
          u,
          h,
          l,
          f,
          d = (r || p).length,
          c = v[d];

      if (!c) {
        if (!(f = "auto" === p.grid ? 0 : (p.grid || [1, R])[1])) {
          for (h = -R; h < (h = r[f++].getBoundingClientRect().left) && f < d;) {
            ;
          }

          f--;
        }

        for (c = v[d] = [], i = y ? Math.min(f, d) * b - .5 : m % f, n = y ? d * w / f - .5 : m / f | 0, l = R, u = h = 0; u < d; u++) {
          a = u % f - i, s = n - (u / f | 0), c[u] = o = T ? Math.abs("y" === T ? s : a) : j(a * a + s * s), h < o && (h = o), o < l && (l = o);
        }

        "random" === m && Pa(c), c.max = h - l, c.min = l, c.v = d = (parseFloat(p.amount) || parseFloat(p.each) * (d < f ? d - 1 : T ? "y" === T ? d / f : f : Math.max(f, d / f)) || 0) * ("edges" === m ? -1 : 1), c.b = d < 0 ? g - d : g, c.u = Ja(p.amount || p.each) || 0, _ = _ && d < 0 ? zt(_) : _;
      }

      return d = (c[t] - c.min) / c.max || 0, aa(c.b + (_ ? _(d) : d) * c.v) + c.u;
    };
  }

  function Ra(e) {
    var r = e < 1 ? Math.pow(10, (e + "").length - 2) : 1;
    return function (t) {
      return ~~(Math.round(parseFloat(t) / e) * e * r) / r + (p(t) ? 0 : Ja(t));
    };
  }

  function Sa(u, t) {
    var h,
        l,
        e = H(u);
    return !e && r(u) && (h = e = u.radius || R, u.values ? (u = yt(u.values), (l = !p(u[0])) && (h *= h)) : u = Ra(u.increment)), Ha(t, e ? o(u) ? function (t) {
      return l = u(t), Math.abs(l - t) <= h ? l : t;
    } : function (t) {
      for (var e, r, i = parseFloat(l ? t.x : t), n = parseFloat(l ? t.y : 0), a = R, s = 0, o = u.length; o--;) {
        (e = l ? (e = u[o].x - i) * e + (r = u[o].y - n) * r : Math.abs(u[o] - i)) < a && (a = e, s = o);
      }

      return s = !h || a <= h ? u[s] : t, l || s === t || p(t) ? s : s + Ja(t);
    } : Ra(u));
  }

  function Ta(t, e, r, i) {
    return Ha(H(t) ? !e : !0 === r ? !!(r = 0) : !i, function () {
      return H(t) ? t[~~(Math.random() * t.length)] : (r = r || 1e-5) && (i = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) && ~~(Math.round((t + Math.random() * (e - t)) / r) * r * i) / i;
    });
  }

  function Xa(e, r, t) {
    return Ha(t, function (t) {
      return e[~~r(t)];
    });
  }

  function $a(t) {
    for (var e, r, i, n, a = 0, s = ""; ~(e = t.indexOf("random(", a));) {
      i = t.indexOf(")", e), n = "[" === t.charAt(e + 7), r = t.substr(e + 7, i - e - 7).match(n ? nt : Q), s += t.substr(a, e - a) + Ta(n ? r : +r[0], +r[1], +r[2] || 1e-5), a = i + 1;
    }

    return s + t.substr(a, t.length - a);
  }

  function bb(t, e, r) {
    var i,
        n,
        a,
        s = t.labels,
        o = R;

    for (i in s) {
      (n = s[i] - e) < 0 == !!r && n && o > (n = Math.abs(n)) && (a = i, o = n);
    }

    return a;
  }

  function db(t) {
    return qa(t), t.progress() < 1 && bt(t, "onInterrupt"), t;
  }

  function ib(t, e, r) {
    return (6 * (t = t < 0 ? t + 1 : 1 < t ? t - 1 : t) < 1 ? e + (r - e) * t * 6 : t < .5 ? r : 3 * t < 2 ? e + (r - e) * (2 / 3 - t) * 6 : e) * wt + .5 | 0;
  }

  function jb(t, e, r) {
    var i,
        n,
        a,
        s,
        o,
        u,
        h,
        l,
        f,
        d,
        c = t ? p(t) ? [t >> 16, t >> 8 & wt, t & wt] : 0 : xt.black;

    if (!c) {
      if ("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), xt[t]) c = xt[t];else if ("#" === t.charAt(0)) 4 === t.length && (t = "#" + (i = t.charAt(1)) + i + (n = t.charAt(2)) + n + (a = t.charAt(3)) + a), c = [(t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & wt, t & wt];else if ("hsl" === t.substr(0, 3)) {
        if (c = d = t.match(Q), e) {
          if (~t.indexOf("=")) return c = t.match(W), r && c.length < 4 && (c[3] = 1), c;
        } else s = +c[0] % 360 / 360, o = c[1] / 100, i = 2 * (u = c[2] / 100) - (n = u <= .5 ? u * (o + 1) : u + o - u * o), 3 < c.length && (c[3] *= 1), c[0] = ib(s + 1 / 3, i, n), c[1] = ib(s, i, n), c[2] = ib(s - 1 / 3, i, n);
      } else c = t.match(Q) || xt.transparent;
      c = c.map(Number);
    }

    return e && !d && (i = c[0] / wt, n = c[1] / wt, a = c[2] / wt, u = ((h = Math.max(i, n, a)) + (l = Math.min(i, n, a))) / 2, h === l ? s = o = 0 : (f = h - l, o = .5 < u ? f / (2 - h - l) : f / (h + l), s = h === i ? (n - a) / f + (n < a ? 6 : 0) : h === n ? (a - i) / f + 2 : (i - n) / f + 4, s *= 60), c[0] = ~~(s + .5), c[1] = ~~(100 * o + .5), c[2] = ~~(100 * u + .5)), r && c.length < 4 && (c[3] = 1), c;
  }

  function kb(t) {
    var r = [],
        i = [],
        n = -1;
    return t.split(kt).forEach(function (t) {
      var e = t.match(tt) || [];
      r.push.apply(r, e), i.push(n += e.length + 1);
    }), r.c = i, r;
  }

  function lb(t, e, r) {
    var i,
        n,
        a,
        s,
        o = "",
        u = (t + o).match(kt),
        h = e ? "hsla(" : "rgba(",
        l = 0;
    if (!u) return t;
    if (u = u.map(function (t) {
      return (t = jb(t, e, 1)) && h + (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) + ")";
    }), r && (a = kb(t), (i = r.c).join(o) !== a.c.join(o))) for (s = (n = t.replace(kt, "1").split(tt)).length - 1; l < s; l++) {
      o += n[l] + (~i.indexOf(l) ? u.shift() || h + "0,0,0,0)" : (a.length ? a : u.length ? u : r).shift());
    }
    if (!n) for (s = (n = t.split(kt)).length - 1; l < s; l++) {
      o += n[l] + u[l];
    }
    return o + n[s];
  }

  function ob(t) {
    var e,
        r = t.join(" ");
    if (kt.lastIndex = 0, kt.test(r)) return e = Mt.test(r), t[1] = lb(t[1], e), t[0] = lb(t[0], e, kb(t[1])), !0;
  }

  function wb(t) {
    var e = (t + "").split("("),
        r = Pt[e[0]];
    return r && 1 < e.length && r.config ? r.config.apply(null, ~t.indexOf("{") ? [function _parseObjectInString(t) {
      for (var e, r, i, n = {}, a = t.substr(1, t.length - 3).split(":"), s = a[0], o = 1, u = a.length; o < u; o++) {
        r = a[o], e = o !== u - 1 ? r.lastIndexOf(",") : r.length, i = r.substr(0, e), n[s] = isNaN(i) ? i.replace(St, "").trim() : +i, s = r.substr(e + 1).trim();
      }

      return n;
    }(e[1])] : rt.exec(t)[1].split(",").map(fa)) : Pt._CE && At.test(t) ? Pt._CE("", t) : r;
  }

  function zb(t, e, r, i) {
    void 0 === r && (r = function easeOut(t) {
      return 1 - e(1 - t);
    }), void 0 === i && (i = function easeInOut(t) {
      return t < .5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2;
    });
    var n,
        a = {
      easeIn: e,
      easeOut: r,
      easeInOut: i
    };
    return _(t, function (t) {
      for (var e in Pt[t] = at[t] = a, Pt[n = t.toLowerCase()] = r, a) {
        Pt[n + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")] = Pt[t + "." + e] = a[e];
      }
    }), a;
  }

  function Ab(e) {
    return function (t) {
      return t < .5 ? (1 - e(1 - 2 * t)) / 2 : .5 + e(2 * (t - .5)) / 2;
    };
  }

  function Bb(r, t, e) {
    function Yk(t) {
      return 1 === t ? 1 : i * Math.pow(2, -10 * t) * J((t - a) * n) + 1;
    }

    var i = 1 <= t ? t : 1,
        n = (e || (r ? .3 : .45)) / (t < 1 ? t : 1),
        a = n / I * (Math.asin(1 / i) || 0),
        s = "out" === r ? Yk : "in" === r ? function (t) {
      return 1 - Yk(1 - t);
    } : Ab(Yk);
    return n = I / n, s.config = function (t, e) {
      return Bb(r, t, e);
    }, s;
  }

  function Cb(e, r) {
    function el(t) {
      return t ? --t * t * ((r + 1) * t + r) + 1 : 0;
    }

    void 0 === r && (r = 1.70158);
    var t = "out" === e ? el : "in" === e ? function (t) {
      return 1 - el(1 - t);
    } : Ab(el);
    return t.config = function (t) {
      return Cb(e, t);
    }, t;
  }

  var F,
      i,
      a,
      h,
      l,
      f,
      d,
      c,
      m,
      g,
      v,
      y,
      T,
      b,
      w,
      x,
      k,
      C,
      P,
      A,
      S,
      z,
      D,
      G = {
    autoSleep: 120,
    force3D: "auto",
    nullTargetWarn: 1,
    units: {
      lineHeight: ""
    }
  },
      E = {
    duration: .5,
    overwrite: !1,
    delay: 0
  },
      R = 1e8,
      B = 1 / R,
      I = 2 * Math.PI,
      U = I / 4,
      X = 0,
      j = Math.sqrt,
      V = Math.cos,
      J = Math.sin,
      H = Array.isArray,
      Q = /(?:-?\.?\d|\.)+/gi,
      W = /[-+=.]*\d+[.e\-+]*\d*[e\-\+]*\d*/g,
      tt = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
      et = /[-+=.]*\d+(?:\.|e-|e)*\d*/gi,
      rt = /\(([^()]+)\)/i,
      it = /[+-]=-?[\.\d]+/,
      nt = /[#\-+.]*\b[a-z\d-=+%.]+/gi,
      at = {},
      st = {},
      ot = [],
      ut = {},
      ht = {},
      lt = {},
      ft = 30,
      dt = [],
      ct = "",
      pt = function _merge(t, e) {
    for (var r in e) {
      t[r] = e[r];
    }

    return t;
  },
      _t = function _animationCycle(t, e) {
    return (t /= e) && ~~t === t ? ~~t - 1 : ~~t;
  },
      mt = {
    _start: 0,
    endTime: O
  },
      gt = function _clamp(t, e, r) {
    return r < t ? t : e < r ? e : r;
  },
      vt = [].slice,
      yt = function toArray(t, e) {
    return !n(t) || e || !a && Ct() ? H(t) ? function _flatten(t, e, r) {
      return void 0 === r && (r = []), t.forEach(function (t) {
        return n(t) && !e || Ma(t, 1) ? r.push.apply(r, yt(t)) : r.push(t);
      }) || r;
    }(t, e) : Ma(t) ? vt.call(t, 0) : t ? [t] : [] : vt.call(h.querySelectorAll(t), 0);
  },
      Tt = function mapRange(e, t, r, i, n) {
    var a = t - e,
        s = i - r;
    return Ha(n, function (t) {
      return r + (t - e) / a * s;
    });
  },
      bt = function _callback(t, e, r) {
    var i,
        n,
        a = t.vars,
        s = a[e];
    if (s) return i = a[e + "Params"], n = a.callbackScope || t, r && ot.length && da(), i ? s.apply(n, i) : s.call(n);
  },
      wt = 255,
      xt = {
    aqua: [0, wt, wt],
    lime: [0, wt, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, wt],
    navy: [0, 0, 128],
    white: [wt, wt, wt],
    olive: [128, 128, 0],
    yellow: [wt, wt, 0],
    orange: [wt, 165, 0],
    gray: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [wt, 0, 0],
    pink: [wt, 192, 203],
    cyan: [0, wt, wt],
    transparent: [wt, wt, wt, 0]
  },
      kt = function () {
    var t,
        e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";

    for (t in xt) {
      e += "|" + t + "\\b";
    }

    return new RegExp(e + ")", "gi");
  }(),
      Mt = /hsl[a]?\(/,
      Ot = (b = Date.now, w = 500, x = 33, k = b(), C = k, A = P = 1 / 240, T = {
    time: 0,
    frame: 0,
    tick: function tick() {
      ck(!0);
    },
    wake: function wake() {
      f && (!a && t() && (i = a = window, h = i.document || {}, at.gsap = ie, (i.gsapVersions || (i.gsapVersions = [])).push(ie.version), K(l || i.GreenSockGlobals || !i.gsap && i || {}), y = i.requestAnimationFrame), g && T.sleep(), v = y || function (t) {
        return setTimeout(t, 1e3 * (A - T.time) + 1 | 0);
      }, m = 1, ck(2));
    },
    sleep: function sleep() {
      (y ? i.cancelAnimationFrame : clearTimeout)(g), m = 0, v = O;
    },
    lagSmoothing: function lagSmoothing(t, e) {
      w = t || 1e8, x = Math.min(e, w, 0);
    },
    fps: function fps(t) {
      P = 1 / (t || 240), A = T.time + P;
    },
    add: function add(t) {
      S.indexOf(t) < 0 && S.push(t), Ct();
    },
    remove: function remove(t) {
      var e;
      ~(e = S.indexOf(t)) && S.splice(e, 1);
    },
    _listeners: S = []
  }),
      Ct = function _wake() {
    return !m && Ot.wake();
  },
      Pt = {},
      At = /^[\d.\-M][\d.\-,\s]/,
      St = /["']/g,
      zt = function _invertEase(e) {
    return function (t) {
      return 1 - e(1 - t);
    };
  },
      Dt = function _parseEase(t, e) {
    return t && (o(t) ? t : Pt[t] || wb(t)) || e;
  };

  function ck(e) {
    var t,
        r,
        i = b() - C,
        n = !0 === e;
    w < i && (k += i - x), C += i, T.time = (C - k) / 1e3, (0 < (t = T.time - A) || n) && (T.frame++, A += t + (P <= t ? .004 : P - t), r = 1), n || (g = v(ck)), r && S.forEach(function (t) {
      return t(T.time, i, T.frame, e);
    });
  }

  function vl(t) {
    return t < D ? z * t * t : t < .7272727272727273 ? z * Math.pow(t - 1.5 / 2.75, 2) + .75 : t < .9090909090909092 ? z * (t -= 2.25 / 2.75) * t + .9375 : z * Math.pow(t - 2.625 / 2.75, 2) + .984375;
  }

  _("Linear,Quad,Cubic,Quart,Quint,Strong", function (t, e) {
    var r = e < 5 ? e + 1 : e;
    zb(t + ",Power" + (r - 1), e ? function (t) {
      return Math.pow(t, r);
    } : function (t) {
      return t;
    }, function (t) {
      return 1 - Math.pow(1 - t, r);
    }, function (t) {
      return t < .5 ? Math.pow(2 * t, r) / 2 : 1 - Math.pow(2 * (1 - t), r) / 2;
    });
  }), Pt.Linear.easeNone = Pt.none = Pt.Linear.easeIn, zb("Elastic", Bb("in"), Bb("out"), Bb()), z = 7.5625, D = 1 / 2.75, zb("Bounce", function (t) {
    return 1 - vl(1 - t);
  }, vl), zb("Expo", function (t) {
    return t ? Math.pow(2, 10 * (t - 1)) : 0;
  }), zb("Circ", function (t) {
    return -(j(1 - t * t) - 1);
  }), zb("Sine", function (t) {
    return 1 - V(t * U);
  }), zb("Back", Cb("in"), Cb("out"), Cb()), Pt.SteppedEase = Pt.steps = at.SteppedEase = {
    config: function config(t, e) {
      void 0 === t && (t = 1);
      var r = 1 / t,
          i = t + (e ? 0 : 1),
          n = e ? 1 : 0;
      return function (t) {
        return ((i * gt(0, .99999999, t) | 0) + n) * r;
      };
    }
  }, E.ease = Pt["quad.out"], _("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function (t) {
    return ct += t + "," + t + "Params,";
  });

  var Rt,
      Ft = function GSCache(t, e) {
    this.id = X++, (t._gsap = this).target = t, this.harness = e, this.get = e ? e.get : $, this.set = e ? e.getSetter : Zt;
  },
      Et = ((Rt = Animation.prototype).delay = function delay(t) {
    return t || 0 === t ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay), this._delay = t, this) : this._delay;
  }, Rt.duration = function duration(t) {
    return arguments.length ? this.totalDuration(0 < this._repeat ? t + (t + this._rDelay) * this._repeat : t) : this.totalDuration() && this._dur;
  }, Rt.totalDuration = function totalDuration(t) {
    return arguments.length ? (this._dirty = 0, Da(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur;
  }, Rt.totalTime = function totalTime(t, e) {
    if (Ct(), !arguments.length) return this._tTime;
    var r = this.parent || this._dp;

    if (r && r.smoothChildTiming && this._ts) {
      for (this._start = aa(r._time - (0 < this._ts ? t / this._ts : ((this._dirty ? this.totalDuration() : this._tDur) - t) / -this._ts)), xa(this), r._dirty || ra(r); r.parent;) {
        r.parent._time !== r._start + (0 <= r._ts ? r._tTime / r._ts : (r.totalDuration() - r._tTime) / -r._ts) && r.totalTime(r._tTime, !0), r = r.parent;
      }

      !this.parent && this._dp.autoRemoveChildren && za(this._dp, this, this._start - this._delay);
    }

    return (this._tTime !== t || !this._dur && !e || this._initted && Math.abs(this._zTime) === B) && (this._ts || (this._pTime = t), ea(this, t, e)), this;
  }, Rt.time = function time(t, e) {
    return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + ua(this)) % this._dur || (t ? this._dur : 0), e) : this._time;
  }, Rt.totalProgress = function totalProgress(t, e) {
    return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio;
  }, Rt.progress = function progress(t, e) {
    return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? t : 1 - t) + ua(this), e) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio;
  }, Rt.iteration = function iteration(t, e) {
    var r = this.duration() + this._rDelay;

    return arguments.length ? this.totalTime(this._time + (t - 1) * r, e) : this._repeat ? _t(this._tTime, r) + 1 : 1;
  }, Rt.timeScale = function timeScale(t) {
    if (!arguments.length) return this._rts === -B ? 0 : this._rts;
    if (this._rts === t) return this;
    var e = this.parent && this._ts ? wa(this.parent._time, this) : this._tTime;
    return this._rts = +t || 0, this._ts = this._ps || t === -B ? 0 : this._rts, function _recacheAncestors(t) {
      for (var e = t.parent; e && e.parent;) {
        e._dirty = 1, e.totalDuration(), e = e.parent;
      }

      return t;
    }(this.totalTime(gt(0, this._tDur, e), !0));
  }, Rt.paused = function paused(t) {
    return arguments.length ? (this._ps !== t && ((this._ps = t) ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (Ct(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && (this._tTime -= B) && Math.abs(this._zTime) !== B))), this) : this._ps;
  }, Rt.startTime = function startTime(t) {
    if (arguments.length) {
      this._start = t;
      var e = this.parent || this._dp;
      return !e || !e._sort && this.parent || za(e, this, t - this._delay), this;
    }

    return this._start;
  }, Rt.endTime = function endTime(t) {
    return this._start + (s(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts);
  }, Rt.rawTime = function rawTime(t) {
    var e = this.parent || this._dp;
    return e ? t && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? wa(e.rawTime(t), this) : this._tTime : this._tTime;
  }, Rt.repeat = function repeat(t) {
    return arguments.length ? (this._repeat = t, Ea(this)) : this._repeat;
  }, Rt.repeatDelay = function repeatDelay(t) {
    return arguments.length ? (this._rDelay = t, Ea(this)) : this._rDelay;
  }, Rt.yoyo = function yoyo(t) {
    return arguments.length ? (this._yoyo = t, this) : this._yoyo;
  }, Rt.seek = function seek(t, e) {
    return this.totalTime(Ga(this, t), s(e));
  }, Rt.restart = function restart(t, e) {
    return this.play().totalTime(t ? -this._delay : 0, s(e));
  }, Rt.play = function play(t, e) {
    return null != t && this.seek(t, e), this.reversed(!1).paused(!1);
  }, Rt.reverse = function reverse(t, e) {
    return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1);
  }, Rt.pause = function pause(t, e) {
    return null != t && this.seek(t, e), this.paused(!0);
  }, Rt.resume = function resume() {
    return this.paused(!1);
  }, Rt.reversed = function reversed(t) {
    return arguments.length ? (!!t !== this.reversed() && this.timeScale(-this._rts || (t ? -B : 0)), this) : this._rts < 0;
  }, Rt.invalidate = function invalidate() {
    return this._initted = 0, this._zTime = -B, this;
  }, Rt.isActive = function isActive(t) {
    var e,
        r = this.parent || this._dp,
        i = this._start;
    return !(r && !(this._ts && (this._initted || !t) && r.isActive(t) && (e = r.rawTime(!0)) >= i && e < this.endTime(!0) - B));
  }, Rt.eventCallback = function eventCallback(t, e, r) {
    var i = this.vars;
    return 1 < arguments.length ? (e ? (i[t] = e, r && (i[t + "Params"] = r), "onUpdate" === t && (this._onUpdate = e)) : delete i[t], this) : i[t];
  }, Rt.then = function then(t) {
    var i = this;
    return new Promise(function (e) {
      function Km() {
        var t = i.then;
        i.then = null, o(r) && (r = r(i)) && (r.then || r === i) && (i.then = t), e(r), i.then = t;
      }

      var r = o(t) ? t : ga;
      i._initted && 1 === i.totalProgress() && 0 <= i._ts || !i._tTime && i._ts < 0 ? Km() : i._prom = Km;
    });
  }, Rt.kill = function kill() {
    db(this);
  }, Animation);

  function Animation(t, e) {
    var r = t.parent || F;
    this.vars = t, this._delay = +t.delay || 0, (this._repeat = t.repeat || 0) && (this._rDelay = t.repeatDelay || 0, this._yoyo = !!t.yoyo || !!t.yoyoEase), this._ts = 1, Da(this, +t.duration, 1), this.data = t.data, m || Ot.wake(), r && za(r, this, e || 0 === e ? e : r._time, 1), t.reversed && this.reverse(), t.paused && this.paused(!0);
  }

  ha(Et.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: !1,
    parent: null,
    _initted: !1,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -B,
    _prom: 0,
    _ps: !1,
    _rts: 1
  });

  var Bt = function (i) {
    function Timeline(t, e) {
      var r;
      return void 0 === t && (t = {}), (r = i.call(this, t, e) || this).labels = {}, r.smoothChildTiming = !!t.smoothChildTiming, r.autoRemoveChildren = !!t.autoRemoveChildren, r._sort = s(t.sortChildren), r.parent && ya(r.parent, _assertThisInitialized(r)), r;
    }

    _inheritsLoose(Timeline, i);

    var t = Timeline.prototype;
    return t.to = function to(t, e, r, i) {
      return new Ut(t, ca(arguments, 0, this), Ga(this, p(e) ? i : r)), this;
    }, t.from = function from(t, e, r, i) {
      return new Ut(t, ca(arguments, 1, this), Ga(this, p(e) ? i : r)), this;
    }, t.fromTo = function fromTo(t, e, r, i, n) {
      return new Ut(t, ca(arguments, 2, this), Ga(this, p(e) ? n : i)), this;
    }, t.set = function set(t, e, r) {
      return e.duration = 0, e.parent = this, ma(e).repeatDelay || (e.repeat = 0), e.immediateRender = !!e.immediateRender, new Ut(t, e, Ga(this, r), 1), this;
    }, t.call = function call(t, e, r) {
      return za(this, Ut.delayedCall(0, t, e), Ga(this, r));
    }, t.staggerTo = function staggerTo(t, e, r, i, n, a, s) {
      return r.duration = e, r.stagger = r.stagger || i, r.onComplete = a, r.onCompleteParams = s, r.parent = this, new Ut(t, r, Ga(this, n)), this;
    }, t.staggerFrom = function staggerFrom(t, e, r, i, n, a, o) {
      return r.runBackwards = 1, ma(r).immediateRender = s(r.immediateRender), this.staggerTo(t, e, r, i, n, a, o);
    }, t.staggerFromTo = function staggerFromTo(t, e, r, i, n, a, o, u) {
      return i.startAt = r, ma(i).immediateRender = s(i.immediateRender), this.staggerTo(t, e, i, n, a, o, u);
    }, t.render = function render(t, e, r) {
      var i,
          n,
          a,
          s,
          o,
          u,
          h,
          l,
          f,
          d,
          c,
          p,
          _ = this._time,
          m = this._dirty ? this.totalDuration() : this._tDur,
          g = this._dur,
          v = this !== F && m - B < t && 0 <= t ? m : t < B ? 0 : t,
          y = this._zTime < 0 != t < 0 && (this._initted || !g);

      if (v !== this._tTime || r || y) {
        if (_ !== this._time && g && (v += this._time - _, t += this._time - _), i = v, f = this._start, u = !(l = this._ts), y && (g || (_ = this._zTime), !t && e || (this._zTime = t)), this._repeat && (c = this._yoyo, o = g + this._rDelay, (g < (i = aa(v % o)) || m === v) && (i = g), (s = ~~(v / o)) && s === v / o && (i = g, s--), c && 1 & s && (i = g - i, p = 1), s !== (d = _t(this._tTime, o)) && !this._lock)) {
          var T = c && 1 & d,
              b = T === (c && 1 & s);
          if (s < d && (T = !T), _ = T ? 0 : g, this._lock = 1, this.render(_, e, !g)._lock = 0, !e && this.parent && bt(this, "onRepeat"), this.vars.repeatRefresh && !p && (this.invalidate()._lock = 1), _ !== this._time || u != !this._ts) return this;
          if (b && (this._lock = 2, _ = T ? g + 1e-4 : -1e-4, this.render(_, !0), this.vars.repeatRefresh && !p && this.invalidate()), this._lock = 0, !this._ts && !u) return this;
        }

        if (this._hasPause && !this._forcing && this._lock < 2 && (h = function _findNextPauseTween(t, e, r) {
          var i;
          if (e < r) for (i = t._first; i && i._start <= r;) {
            if (!i._dur && "isPause" === i.data && i._start > e) return i;
            i = i._next;
          } else for (i = t._last; i && i._start >= r;) {
            if (!i._dur && "isPause" === i.data && i._start < e) return i;
            i = i._prev;
          }
        }(this, aa(_), aa(i))) && (v -= i - (i = h._start)), this._tTime = v, this._time = i, this._act = !l, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = t), _ || !i || e || bt(this, "onStart"), _ <= i && 0 <= t) for (n = this._first; n;) {
          if (a = n._next, (n._act || i >= n._start) && n._ts && h !== n) {
            if (n.parent !== this) return this.render(t, e, r);

            if (n.render(0 < n._ts ? (i - n._start) * n._ts : (n._dirty ? n.totalDuration() : n._tDur) + (i - n._start) * n._ts, e, r), i !== this._time || !this._ts && !u) {
              h = 0, a && (v += this._zTime = -B);
              break;
            }
          }

          n = a;
        } else {
          n = this._last;

          for (var w = t < 0 ? t : i; n;) {
            if (a = n._prev, (n._act || w <= n._end) && n._ts && h !== n) {
              if (n.parent !== this) return this.render(t, e, r);

              if (n.render(0 < n._ts ? (w - n._start) * n._ts : (n._dirty ? n.totalDuration() : n._tDur) + (w - n._start) * n._ts, e, r), i !== this._time || !this._ts && !u) {
                h = 0, a && (v += this._zTime = w ? -B : B);
                break;
              }
            }

            n = a;
          }
        }
        if (h && !e && (this.pause(), h.render(_ <= i ? 0 : -B)._zTime = _ <= i ? 1 : -1, this._ts)) return this._start = f, xa(this), this.render(t, e, r);
        this._onUpdate && !e && bt(this, "onUpdate", !0), (v === m && m >= this.totalDuration() || !v && this._ts < 0) && (f !== this._start && Math.abs(l) === Math.abs(this._ts) || this._lock || (!t && g || !(t && 0 < this._ts || !v && this._ts < 0) || qa(this, 1), e || t < 0 && !_ || (bt(this, v === m ? "onComplete" : "onReverseComplete", !0), this._prom && this._prom())));
      }

      return this;
    }, t.add = function add(t, e) {
      var r = this;

      if (p(e) || (e = Ga(this, e)), !(t instanceof Et)) {
        if (H(t)) return t.forEach(function (t) {
          return r.add(t, e);
        }), ra(this);
        if (n(t)) return this.addLabel(t, e);
        if (!o(t)) return this;
        t = Ut.delayedCall(0, t);
      }

      return this !== t ? za(this, t, e) : this;
    }, t.getChildren = function getChildren(t, e, r, i) {
      void 0 === t && (t = !0), void 0 === e && (e = !0), void 0 === r && (r = !0), void 0 === i && (i = -R);

      for (var n = [], a = this._first; a;) {
        a._start >= i && (a instanceof Ut ? e && n.push(a) : (r && n.push(a), t && n.push.apply(n, a.getChildren(!0, e, r)))), a = a._next;
      }

      return n;
    }, t.getById = function getById(t) {
      for (var e = this.getChildren(1, 1, 1), r = e.length; r--;) {
        if (e[r].vars.id === t) return e[r];
      }
    }, t.remove = function remove(t) {
      return n(t) ? this.removeLabel(t) : o(t) ? this.killTweensOf(t) : (pa(this, t), t === this._recent && (this._recent = this._last), ra(this));
    }, t.totalTime = function totalTime(t, e) {
      return arguments.length ? (this._forcing = 1, this.parent || this._dp || !this._ts || (this._start = aa(Ot.time - (0 < this._ts ? t / this._ts : (this.totalDuration() - t) / -this._ts))), i.prototype.totalTime.call(this, t, e), this._forcing = 0, this) : this._tTime;
    }, t.addLabel = function addLabel(t, e) {
      return this.labels[t] = Ga(this, e), this;
    }, t.removeLabel = function removeLabel(t) {
      return delete this.labels[t], this;
    }, t.addPause = function addPause(t, e, r) {
      var i = Ut.delayedCall(0, e || O, r);
      return i.data = "isPause", this._hasPause = 1, za(this, i, Ga(this, t));
    }, t.removePause = function removePause(t) {
      var e = this._first;

      for (t = Ga(this, t); e;) {
        e._start === t && "isPause" === e.data && qa(e), e = e._next;
      }
    }, t.killTweensOf = function killTweensOf(t, e, r) {
      for (var i = this.getTweensOf(t, r), n = i.length; n--;) {
        Lt !== i[n] && i[n].kill(t, e);
      }

      return this;
    }, t.getTweensOf = function getTweensOf(t, e) {
      for (var r, i = [], n = yt(t), a = this._first; a;) {
        a instanceof Ut ? !ba(a._targets, n) || e && !a.isActive("started" === e) || i.push(a) : (r = a.getTweensOf(n, e)).length && i.push.apply(i, r), a = a._next;
      }

      return i;
    }, t.tweenTo = function tweenTo(t, e) {
      e = e || {};
      var r = this,
          i = Ga(r, t),
          n = e.startAt,
          a = e.onStart,
          s = e.onStartParams,
          o = Ut.to(r, ha(e, {
        ease: "none",
        lazy: !1,
        time: i,
        duration: e.duration || Math.abs((i - (n && "time" in n ? n.time : r._time)) / r.timeScale()) || B,
        onStart: function onStart() {
          r.pause();
          var t = e.duration || Math.abs((i - r._time) / r.timeScale());
          o._dur !== t && Da(o, t).render(o._time, !0, !0), a && a.apply(o, s || []);
        }
      }));
      return o;
    }, t.tweenFromTo = function tweenFromTo(t, e, r) {
      return this.tweenTo(e, ha({
        startAt: {
          time: Ga(this, t)
        }
      }, r));
    }, t.recent = function recent() {
      return this._recent;
    }, t.nextLabel = function nextLabel(t) {
      return void 0 === t && (t = this._time), bb(this, Ga(this, t));
    }, t.previousLabel = function previousLabel(t) {
      return void 0 === t && (t = this._time), bb(this, Ga(this, t), 1);
    }, t.currentLabel = function currentLabel(t) {
      return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + B);
    }, t.shiftChildren = function shiftChildren(t, e, r) {
      void 0 === r && (r = 0);

      for (var i, n = this._first, a = this.labels; n;) {
        n._start >= r && (n._start += t), n = n._next;
      }

      if (e) for (i in a) {
        a[i] >= r && (a[i] += t);
      }
      return ra(this);
    }, t.invalidate = function invalidate() {
      var t = this._first;

      for (this._lock = 0; t;) {
        t.invalidate(), t = t._next;
      }

      return i.prototype.invalidate.call(this);
    }, t.clear = function clear(t) {
      void 0 === t && (t = !0);

      for (var e, r = this._first; r;) {
        e = r._next, this.remove(r), r = e;
      }

      return this._time = this._tTime = 0, t && (this.labels = {}), ra(this);
    }, t.totalDuration = function totalDuration(t) {
      var e,
          r,
          i,
          n,
          a = 0,
          s = this,
          o = s._last,
          u = R;
      if (arguments.length) return s.timeScale((s._repeat < 0 ? s.duration() : s.totalDuration()) / (s.reversed() ? -t : t));

      if (s._dirty) {
        for (n = s.parent; o;) {
          e = o._prev, o._dirty && o.totalDuration(), u < (i = o._start) && s._sort && o._ts && !s._lock ? (s._lock = 1, za(s, o, i - o._delay, 1)._lock = 0) : u = i, i < 0 && o._ts && (a -= i, (!n && !s._dp || n && n.smoothChildTiming) && (s._start += i / s._ts, s._time -= i, s._tTime -= i), s.shiftChildren(-i, !1, -1e20), u = 0), a < (r = xa(o)) && o._ts && (a = r), o = e;
        }

        Da(s, s === F && s._time > a ? s._time : Math.min(R, a), 1), s._dirty = 0;
      }

      return s._tDur;
    }, Timeline.updateRoot = function updateRoot(t) {
      if (F._ts && (ea(F, wa(t, F)), d = Ot.frame), Ot.frame >= ft) {
        ft += G.autoSleep || 120;
        var e = F._first;

        if ((!e || !e._ts) && G.autoSleep && Ot._listeners.length < 2) {
          for (; e && !e._ts;) {
            e = e._next;
          }

          e || Ot.sleep();
        }
      }
    }, Timeline;
  }(Et);

  ha(Bt.prototype, {
    _lock: 0,
    _hasPause: 0,
    _forcing: 0
  });

  function Jb(t, e, i, a, s, u) {
    var h, l, f, d;
    if (ht[t] && !1 !== (h = new ht[t]()).init(s, h.rawVars ? e[t] : function _processVars(t, e, i, a, s) {
      if (o(t) && (t = Yt(t, s, e, i, a)), !r(t) || t.style && t.nodeType || H(t)) return n(t) ? Yt(t, s, e, i, a) : t;
      var u,
          h = {};

      for (u in t) {
        h[u] = Yt(t[u], s, e, i, a);
      }

      return h;
    }(e[t], a, s, u, i), i, a, u) && (i._pt = l = new ee(i._pt, s, t, 0, 1, h.render, h, 0, h.priority), i !== c)) for (f = i._ptLookup[i._targets.indexOf(s)], d = h._props.length; d--;) {
      f[h._props[d]] = l;
    }
    return h;
  }

  var Lt,
      It = function _addPropTween(t, e, r, i, a, s, u, h, l) {
    o(i) && (i = i(a || 0, t, s));
    var f,
        d = t[e],
        c = "get" !== r ? r : o(d) ? l ? t[e.indexOf("set") || !o(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](l) : t[e]() : d,
        p = o(d) ? l ? Vt : jt : Xt;
    if (n(i) && (~i.indexOf("random(") && (i = $a(i)), "=" === i.charAt(1) && (i = parseFloat(c) + parseFloat(i.substr(2)) * ("-" === i.charAt(0) ? -1 : 1) + (Ja(c) || 0))), c !== i) return isNaN(c + i) ? (d || e in t || L(e, i), function _addComplexStringPropTween(t, e, r, i, n, a, s) {
      var o,
          u,
          h,
          l,
          f,
          d,
          c,
          p,
          _ = new ee(this._pt, t, e, 0, 1, Qt, null, n),
          m = 0,
          g = 0;

      for (_.b = r, _.e = i, r += "", (c = ~(i += "").indexOf("random(")) && (i = $a(i)), a && (a(p = [r, i], t, e), r = p[0], i = p[1]), u = r.match(et) || []; o = et.exec(i);) {
        l = o[0], f = i.substring(m, o.index), h ? h = (h + 1) % 5 : "rgba(" === f.substr(-5) && (h = 1), l !== u[g++] && (d = parseFloat(u[g - 1]) || 0, _._pt = {
          _next: _._pt,
          p: f || 1 === g ? f : ",",
          s: d,
          c: "=" === l.charAt(1) ? parseFloat(l.substr(2)) * ("-" === l.charAt(0) ? -1 : 1) : parseFloat(l) - d,
          m: h && h < 4 ? Math.round : 0
        }, m = et.lastIndex);
      }

      return _.c = m < i.length ? i.substring(m, i.length) : "", _.fp = s, (it.test(i) || c) && (_.e = 0), this._pt = _;
    }.call(this, t, e, c, i, p, h || G.stringFilter, l)) : (f = new ee(this._pt, t, e, +c || 0, i - (c || 0), "boolean" == typeof d ? Ht : Jt, 0, p), l && (f.fp = l), u && f.modifier(u, this, t), this._pt = f);
  },
      qt = function _initTween(t, e) {
    var r,
        i,
        n,
        a,
        o,
        u,
        h,
        l,
        f,
        d,
        c,
        p,
        _ = t.vars,
        m = _.ease,
        g = _.startAt,
        v = _.immediateRender,
        y = _.lazy,
        T = _.onUpdate,
        b = _.onUpdateParams,
        w = _.callbackScope,
        x = _.runBackwards,
        k = _.yoyoEase,
        M = _.keyframes,
        O = _.autoRevert,
        C = t._dur,
        P = t._startAt,
        A = t._targets,
        S = t.parent,
        z = S && "nested" === S.data ? S.parent._targets : A,
        D = "auto" === t._overwrite,
        R = t.timeline;

    if (!R || M && m || (m = "none"), t._ease = Dt(m, E.ease), t._yEase = k ? zt(Dt(!0 === k ? m : k, E.ease)) : 0, k && t._yoyo && !t._repeat && (k = t._yEase, t._yEase = t._ease, t._ease = k), !R) {
      if (P && P.render(-1, !0).kill(), g) {
        if (qa(t._startAt = Ut.set(A, ha({
          data: "isStart",
          overwrite: !1,
          parent: S,
          immediateRender: !0,
          lazy: s(y),
          startAt: null,
          delay: 0,
          onUpdate: T,
          onUpdateParams: b,
          callbackScope: w,
          stagger: 0
        }, g))), v) if (0 < e) O || (t._startAt = 0);else if (C) return;
      } else if (x && C) if (P) O || (t._startAt = 0);else if (e && (v = !1), qa(t._startAt = Ut.set(A, pt(la(_, st), {
        overwrite: !1,
        data: "isFromStart",
        lazy: v && s(y),
        immediateRender: v,
        stagger: 0,
        parent: S
      }))), v) {
        if (!e) return;
      } else _initTween(t._startAt, B);

      for (r = la(_, st), p = (l = A[t._pt = 0] ? Z(A[0]).harness : 0) && _[l.prop], y = C && s(y) || y && !C, i = 0; i < A.length; i++) {
        if (h = (o = A[i])._gsap || Y(A)[i]._gsap, t._ptLookup[i] = d = {}, ut[h.id] && da(), c = z === A ? i : z.indexOf(o), l && !1 !== (f = new l()).init(o, p || r, t, c, z) && (t._pt = a = new ee(t._pt, o, f.name, 0, 1, f.render, f, 0, f.priority), f._props.forEach(function (t) {
          d[t] = a;
        }), f.priority && (u = 1)), !l || p) for (n in r) {
          ht[n] && (f = Jb(n, r, t, c, o, z)) ? f.priority && (u = 1) : d[n] = a = It.call(t, o, n, "get", r[n], c, z, 0, _.stringFilter);
        }
        t._op && t._op[i] && t.kill(o, t._op[i]), D && t._pt && (Lt = t, F.killTweensOf(o, d, "started"), Lt = 0), t._pt && y && (ut[h.id] = 1);
      }

      u && te(t), t._onInit && t._onInit(t);
    }

    t._from = !R && !!_.runBackwards, t._onUpdate = T, t._initted = 1;
  },
      Yt = function _parseFuncOrString(t, e, r, i, a) {
    return o(t) ? t.call(e, r, i, a) : n(t) && ~t.indexOf("random(") ? $a(t) : t;
  },
      Nt = ct + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase",
      Gt = (Nt + ",id,stagger,delay,duration,paused").split(","),
      Ut = function (A) {
    function Tween(t, e, i, n) {
      var a;
      "number" == typeof e && (i.duration = e, e = i, i = null);

      var o,
          h,
          l,
          f,
          d,
          c,
          _,
          m,
          g = (a = A.call(this, n ? e : ma(e), i) || this).vars,
          v = g.duration,
          y = g.delay,
          T = g.immediateRender,
          b = g.stagger,
          w = g.overwrite,
          x = g.keyframes,
          k = g.defaults,
          C = a.parent,
          P = (H(t) ? p(t[0]) : "length" in e) ? [t] : yt(t);

      if (a._targets = P.length ? Y(P) : M("GSAP target " + t + " not found. https://greensock.com", !G.nullTargetWarn) || [], a._ptLookup = [], a._overwrite = w, x || b || u(v) || u(y)) {
        if (e = a.vars, (o = a.timeline = new Bt({
          data: "nested",
          defaults: k || {}
        })).kill(), o.parent = _assertThisInitialized(a), x) ha(o.vars.defaults, {
          ease: "none"
        }), x.forEach(function (t) {
          return o.to(P, t, ">");
        });else {
          if (f = P.length, _ = b ? Qa(b) : O, r(b)) for (d in b) {
            ~Nt.indexOf(d) && ((m = m || {})[d] = b[d]);
          }

          for (h = 0; h < f; h++) {
            for (d in l = {}, e) {
              Gt.indexOf(d) < 0 && (l[d] = e[d]);
            }

            l.stagger = 0, m && pt(l, m), e.yoyoEase && !e.repeat && (l.yoyoEase = e.yoyoEase), c = P[h], l.duration = +Yt(v, _assertThisInitialized(a), h, c, P), l.delay = (+Yt(y, _assertThisInitialized(a), h, c, P) || 0) - a._delay, !b && 1 === f && l.delay && (a._delay = y = l.delay, a._start += y, l.delay = 0), o.to(c, l, _(h, c, P));
          }

          v = y = 0;
        }
        v || a.duration(v = o.duration());
      } else a.timeline = 0;

      return !0 === w && (Lt = _assertThisInitialized(a), F.killTweensOf(P), Lt = 0), C && ya(C, _assertThisInitialized(a)), (T || !v && !x && a._start === C._time && s(T) && function _hasNoPausedAncestors(t) {
        return !t || t._ts && _hasNoPausedAncestors(t.parent);
      }(_assertThisInitialized(a)) && "nested" !== C.data) && (a._tTime = -B, a.render(Math.max(0, -y))), a;
    }

    _inheritsLoose(Tween, A);

    var t = Tween.prototype;
    return t.render = function render(t, e, r) {
      var i,
          n,
          a,
          s,
          o,
          u,
          h,
          l,
          f,
          d = this._time,
          c = this._tDur,
          p = this._dur,
          _ = c - B < t && 0 <= t ? c : t < B ? 0 : t;

      if (p) {
        if (_ !== this._tTime || !t || r || this._startAt && this._zTime < 0 != t < 0) {
          if (i = _, l = this.timeline, this._repeat) {
            if (s = p + this._rDelay, (p < (i = aa(_ % s)) || c === _) && (i = p), (a = ~~(_ / s)) && a === _ / s && (i = p, a--), (u = this._yoyo && 1 & a) && (f = this._yEase, i = p - i), o = _t(this._tTime, s), i === d && !r && this._initted) return this;
            a !== o && (!this.vars.repeatRefresh || u || this._lock || (this._lock = r = 1, this.render(s * a, !0).invalidate()._lock = 0));
          }

          if (!this._initted) {
            if (Aa(this, i, r, e)) return this._tTime = 0, this;
            if (p !== this._dur) return this.render(t, e, r);
          }

          for (this._tTime = _, this._time = i, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = h = (f || this._ease)(i / p), this._from && (this.ratio = h = 1 - h), d || !i || e || bt(this, "onStart"), n = this._pt; n;) {
            n.r(h, n.d), n = n._next;
          }

          l && l.render(t < 0 ? t : !i && u ? -B : l._dur * h, e, r) || this._startAt && (this._zTime = t), this._onUpdate && !e && (t < 0 && this._startAt && this._startAt.render(t, !0, r), bt(this, "onUpdate")), this._repeat && a !== o && this.vars.onRepeat && !e && this.parent && bt(this, "onRepeat"), _ !== this._tDur && _ || this._tTime !== _ || (t < 0 && this._startAt && !this._onUpdate && this._startAt.render(t, !0, r), !t && p || !(t && 0 < this._ts || !_ && this._ts < 0) || qa(this, 1), e || t < 0 && !d || _ < c && 0 < this.timeScale() || (bt(this, _ === c ? "onComplete" : "onReverseComplete", !0), this._prom && this._prom()));
        }
      } else !function _renderZeroDurationTween(t, e, r, i) {
        var n,
            a = t._zTime < 0 ? 0 : 1,
            s = e < 0 ? 0 : 1,
            o = t._rDelay,
            u = 0;

        if (o && t._repeat && (u = gt(0, t._tDur, e), _t(u, o) !== _t(t._tTime, o) && (a = 1 - s, t.vars.repeatRefresh && t._initted && t.invalidate())), (t._initted || !Aa(t, e, i, r)) && (s !== a || i || t._zTime === B || !e && t._zTime)) {
          for (t._zTime = e || (r ? B : 0), t.ratio = s, t._from && (s = 1 - s), t._time = 0, t._tTime = u, r || bt(t, "onStart"), n = t._pt; n;) {
            n.r(s, n.d), n = n._next;
          }

          !s && t._startAt && !t._onUpdate && t._start && t._startAt.render(e, !0, i), t._onUpdate && (r || bt(t, "onUpdate")), u && t._repeat && !r && t.parent && bt(t, "onRepeat"), (e >= t._tDur || e < 0) && t.ratio === s && (t.ratio && qa(t, 1), r || (bt(t, t.ratio ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()));
        }
      }(this, t, e, r);

      return this;
    }, t.targets = function targets() {
      return this._targets;
    }, t.invalidate = function invalidate() {
      return this._pt = this._op = this._startAt = this._onUpdate = this._act = this._lazy = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(), A.prototype.invalidate.call(this);
    }, t.kill = function kill(t, e) {
      if (void 0 === e && (e = "all"), !(t || e && "all" !== e) && (this._lazy = 0, this.parent)) return db(this);
      if (this.timeline) return this.timeline.killTweensOf(t, e, Lt && !0 !== Lt.vars.overwrite), this;
      var r,
          i,
          a,
          s,
          o,
          u,
          h,
          l = this._targets,
          f = t ? yt(t) : l,
          d = this._ptLookup,
          c = this._pt;
      if ((!e || "all" === e) && function _arraysMatch(t, e) {
        for (var r = t.length, i = r === e.length; i && r-- && t[r] === e[r];) {
          ;
        }

        return r < 0;
      }(l, f)) return db(this);

      for (r = this._op = this._op || [], "all" !== e && (n(e) && (o = {}, _(e, function (t) {
        return o[t] = 1;
      }), e = o), e = function _addAliasesToVars(t, e) {
        var r,
            i,
            n,
            a,
            s = t[0] ? Z(t[0]).harness : 0,
            o = s && s.aliases;
        if (!o) return e;

        for (i in r = pt({}, e), o) {
          if ((i in r)) for (n = (a = o[i].split(",")).length; n--;) {
            r[a[n]] = r[i];
          }
        }

        return r;
      }(l, e)), h = l.length; h--;) {
        if (~f.indexOf(l[h])) for (o in i = d[h], "all" === e ? (r[h] = e, s = i, a = {}) : (a = r[h] = r[h] || {}, s = e), s) {
          (u = i && i[o]) && ("kill" in u.d && !0 !== u.d.kill(o) || pa(this, u, "_pt"), delete i[o]), "all" !== a && (a[o] = 1);
        }
      }

      return this._initted && !this._pt && c && db(this), this;
    }, Tween.to = function to(t, e, r) {
      return new Tween(t, e, r);
    }, Tween.from = function from(t, e) {
      return new Tween(t, ca(arguments, 1));
    }, Tween.delayedCall = function delayedCall(t, e, r, i) {
      return new Tween(e, 0, {
        immediateRender: !1,
        lazy: !1,
        overwrite: !1,
        delay: t,
        onComplete: e,
        onReverseComplete: e,
        onCompleteParams: r,
        onReverseCompleteParams: r,
        callbackScope: i
      });
    }, Tween.fromTo = function fromTo(t, e, r) {
      return new Tween(t, ca(arguments, 2));
    }, Tween.set = function set(t, e) {
      return e.duration = 0, e.repeatDelay || (e.repeat = 0), new Tween(t, e);
    }, Tween.killTweensOf = function killTweensOf(t, e, r) {
      return F.killTweensOf(t, e, r);
    }, Tween;
  }(Et);

  ha(Ut.prototype, {
    _targets: [],
    _lazy: 0,
    _startAt: 0,
    _op: 0,
    _onInit: 0
  }), _("staggerTo,staggerFrom,staggerFromTo", function (r) {
    Ut[r] = function () {
      var t = new Bt(),
          e = vt.call(arguments, 0);
      return e.splice("staggerFromTo" === r ? 5 : 4, 0, 0), t[r].apply(t, e);
    };
  });

  function Ub(t, e, r) {
    return t.setAttribute(e, r);
  }

  function ac(t, e, r, i) {
    i.mSet(t, e, i.m.call(i.tween, r, i.mt), i);
  }

  var Xt = function _setterPlain(t, e, r) {
    return t[e] = r;
  },
      jt = function _setterFunc(t, e, r) {
    return t[e](r);
  },
      Vt = function _setterFuncWithParam(t, e, r, i) {
    return t[e](i.fp, r);
  },
      Zt = function _getSetter(t, e) {
    return o(t[e]) ? jt : q(t[e]) && t.setAttribute ? Ub : Xt;
  },
      Jt = function _renderPlain(t, e) {
    return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4, e);
  },
      Ht = function _renderBoolean(t, e) {
    return e.set(e.t, e.p, !!(e.s + e.c * t), e);
  },
      Qt = function _renderComplexString(t, e) {
    var r = e._pt,
        i = "";
    if (!t && e.b) i = e.b;else if (1 === t && e.e) i = e.e;else {
      for (; r;) {
        i = r.p + (r.m ? r.m(r.s + r.c * t) : Math.round(1e4 * (r.s + r.c * t)) / 1e4) + i, r = r._next;
      }

      i += e.c;
    }
    e.set(e.t, e.p, i, e);
  },
      $t = function _renderPropTweens(t, e) {
    for (var r = e._pt; r;) {
      r.r(t, r.d), r = r._next;
    }
  },
      Wt = function _addPluginModifier(t, e, r, i) {
    for (var n, a = this._pt; a;) {
      n = a._next, a.p === i && a.modifier(t, e, r), a = n;
    }
  },
      Kt = function _killPropTweensOf(t) {
    for (var e, r, i = this._pt; i;) {
      r = i._next, i.p === t && !i.op || i.op === t ? pa(this, i, "_pt") : i.dep || (e = 1), i = r;
    }

    return !e;
  },
      te = function _sortPropTweensByPriority(t) {
    for (var e, r, i, n, a = t._pt; a;) {
      for (e = a._next, r = i; r && r.pr > a.pr;) {
        r = r._next;
      }

      (a._prev = r ? r._prev : n) ? a._prev._next = a : i = a, (a._next = r) ? r._prev = a : n = a, a = e;
    }

    t._pt = i;
  },
      ee = (PropTween.prototype.modifier = function modifier(t, e, r) {
    this.mSet = this.mSet || this.set, this.set = ac, this.m = t, this.mt = r, this.tween = e;
  }, PropTween);

  function PropTween(t, e, r, i, n, a, s, o, u) {
    this.t = e, this.s = i, this.c = n, this.p = r, this.r = a || Jt, this.d = s || this, this.set = o || Xt, this.pr = u || 0, (this._next = t) && (t._prev = this);
  }

  _(ct + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert", function (t) {
    return st[t] = 1;
  }), at.TweenMax = at.TweenLite = Ut, at.TimelineLite = at.TimelineMax = Bt, F = new Bt({
    sortChildren: !1,
    defaults: E,
    autoRemoveChildren: !0,
    id: "root",
    smoothChildTiming: !0
  }), G.stringFilter = ob;
  var re = {
    registerPlugin: function registerPlugin() {
      for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) {
        e[r] = arguments[r];
      }

      e.forEach(function (t) {
        return function _createPlugin(t) {
          var e = (t = !t.name && t["default"] || t).name,
              r = o(t),
              i = e && !r && t.init ? function () {
            this._props = [];
          } : t,
              n = {
            init: O,
            render: $t,
            add: It,
            kill: Kt,
            modifier: Wt,
            rawVars: 0
          },
              a = {
            targetTest: 0,
            get: 0,
            getSetter: Zt,
            aliases: {},
            register: 0
          };

          if (Ct(), t !== i) {
            if (ht[e]) return;
            ha(i, ha(la(t, n), a)), pt(i.prototype, pt(n, la(t, a))), ht[i.prop = e] = i, t.targetTest && (dt.push(i), st[e] = 1), e = ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin";
          }

          N(e, i), t.register && t.register(ie, i, ee);
        }(t);
      });
    },
    timeline: function timeline(t) {
      return new Bt(t);
    },
    getTweensOf: function getTweensOf(t, e) {
      return F.getTweensOf(t, e);
    },
    getProperty: function getProperty(i, t, e, r) {
      n(i) && (i = yt(i)[0]);
      var a = Z(i || {}).get,
          s = e ? ga : fa;
      return "native" === e && (e = ""), i ? t ? s((ht[t] && ht[t].get || a)(i, t, e, r)) : function (t, e, r) {
        return s((ht[t] && ht[t].get || a)(i, t, e, r));
      } : i;
    },
    quickSetter: function quickSetter(r, e, i) {
      if (1 < (r = yt(r)).length) {
        var n = r.map(function (t) {
          return ie.quickSetter(t, e, i);
        }),
            a = n.length;
        return function (t) {
          for (var e = a; e--;) {
            n[e](t);
          }
        };
      }

      r = r[0] || {};
      var s = ht[e],
          o = Z(r),
          u = s ? function (t) {
        var e = new s();
        c._pt = 0, e.init(r, i ? t + i : t, c, 0, [r]), e.render(1, e), c._pt && $t(1, c);
      } : o.set(r, e);
      return s ? u : function (t) {
        return u(r, e, i ? t + i : t, o, 1);
      };
    },
    isTweening: function isTweening(t) {
      return 0 < F.getTweensOf(t, !0).length;
    },
    defaults: function defaults(t) {
      return t && t.ease && (t.ease = Dt(t.ease, E.ease)), ka(E, t || {});
    },
    config: function config(t) {
      return ka(G, t || {});
    },
    registerEffect: function registerEffect(t) {
      var n = t.name,
          i = t.effect,
          e = t.plugins,
          a = t.defaults,
          s = t.extendTimeline;
      (e || "").split(",").forEach(function (t) {
        return t && !ht[t] && !at[t] && M(n + " effect requires " + t + " plugin.");
      }), lt[n] = function (t, e, r) {
        return i(yt(t), ha(e || {}, a), r);
      }, s && (Bt.prototype[n] = function (t, e, i) {
        return this.add(lt[n](t, r(e) ? e : (i = e) && {}, this), i);
      });
    },
    registerEase: function registerEase(t, e) {
      Pt[t] = Dt(e);
    },
    parseEase: function parseEase(t, e) {
      return arguments.length ? Dt(t, e) : Pt;
    },
    getById: function getById(t) {
      return F.getById(t);
    },
    exportRoot: function exportRoot(t, e) {
      void 0 === t && (t = {});
      var r,
          i,
          n = new Bt(t);

      for (n.smoothChildTiming = s(t.smoothChildTiming), F.remove(n), n._dp = 0, n._time = n._tTime = F._time, r = F._first; r;) {
        i = r._next, !e && !r._dur && r instanceof Ut && r.vars.onComplete === r._targets[0] || za(n, r, r._start - r._delay), r = i;
      }

      return za(F, n, 0), n;
    },
    utils: {
      wrap: function wrap(e, t, r) {
        var i = t - e;
        return H(e) ? Xa(e, wrap(0, e.length), t) : Ha(r, function (t) {
          return (i + (t - e) % i) % i + e;
        });
      },
      wrapYoyo: function wrapYoyo(e, t, r) {
        var i = t - e,
            n = 2 * i;
        return H(e) ? Xa(e, wrapYoyo(0, e.length - 1), t) : Ha(r, function (t) {
          return e + (i < (t = (n + (t - e) % n) % n) ? n - t : t);
        });
      },
      distribute: Qa,
      random: Ta,
      snap: Sa,
      normalize: function normalize(t, e, r) {
        return Tt(t, e, 0, 1, r);
      },
      getUnit: Ja,
      clamp: function clamp(e, r, t) {
        return Ha(t, function (t) {
          return gt(e, r, t);
        });
      },
      splitColor: jb,
      toArray: yt,
      mapRange: Tt,
      pipe: function pipe() {
        for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) {
          e[r] = arguments[r];
        }

        return function (t) {
          return e.reduce(function (t, e) {
            return e(t);
          }, t);
        };
      },
      unitize: function unitize(e, r) {
        return function (t) {
          return e(parseFloat(t)) + (r || Ja(t));
        };
      },
      interpolate: function interpolate(e, r, t, i) {
        var a = isNaN(e + r) ? 0 : function (t) {
          return (1 - t) * e + t * r;
        };

        if (!a) {
          var s,
              o,
              u,
              h,
              l,
              f = n(e),
              d = {};
          if (!0 === t && (i = 1) && (t = null), f) e = {
            p: e
          }, r = {
            p: r
          };else if (H(e) && !H(r)) {
            for (u = [], h = e.length, l = h - 2, o = 1; o < h; o++) {
              u.push(interpolate(e[o - 1], e[o]));
            }

            h--, a = function func(t) {
              t *= h;
              var e = Math.min(l, ~~t);
              return u[e](t - e);
            }, t = r;
          } else i || (e = pt(H(e) ? [] : {}, e));

          if (!u) {
            for (s in r) {
              It.call(d, e, s, "get", r[s]);
            }

            a = function func(t) {
              return $t(t, d) || (f ? e.p : e);
            };
          }
        }

        return Ha(t, a);
      },
      shuffle: Pa
    },
    install: K,
    effects: lt,
    ticker: Ot,
    updateRoot: Bt.updateRoot,
    plugins: ht,
    globalTimeline: F,
    core: {
      PropTween: ee,
      globals: N,
      Tween: Ut,
      Timeline: Bt,
      Animation: Et,
      getCache: Z,
      _removeLinkedListItem: pa
    }
  };
  _("to,from,fromTo,delayedCall,set,killTweensOf", function (t) {
    return re[t] = Ut[t];
  }), Ot.add(Bt.updateRoot), c = re.to({}, {
    duration: 0
  });

  function ec(t, e) {
    for (var r = t._pt; r && r.p !== e && r.op !== e && r.fp !== e;) {
      r = r._next;
    }

    return r;
  }

  function gc(t, a) {
    return {
      name: t,
      rawVars: 1,
      init: function init(t, i, e) {
        e._onInit = function (t) {
          var e, r;

          if (n(i) && (e = {}, _(i, function (t) {
            return e[t] = 1;
          }), i = e), a) {
            for (r in e = {}, i) {
              e[r] = a(i[r]);
            }

            i = e;
          }

          !function _addModifiers(t, e) {
            var r,
                i,
                n,
                a = t._targets;

            for (r in e) {
              for (i = a.length; i--;) {
                (n = (n = t._ptLookup[i][r]) && n.d) && (n._pt && (n = ec(n, r)), n && n.modifier && n.modifier(e[r], t, a[i], r));
              }
            }
          }(t, i);
        };
      }
    };
  }

  var ie = re.registerPlugin({
    name: "attr",
    init: function init(t, e, r, i, n) {
      for (var a in e) {
        this.add(t, "setAttribute", (t.getAttribute(a) || 0) + "", e[a], i, n, 0, 0, a), this._props.push(a);
      }
    }
  }, {
    name: "endArray",
    init: function init(t, e) {
      for (var r = e.length; r--;) {
        this.add(t, r, t[r] || 0, e[r]);
      }
    }
  }, gc("roundProps", Ra), gc("modifiers"), gc("snap", Sa)) || re;
  Ut.version = Bt.version = ie.version = "3.2.6", f = 1, t() && Ct();

  function Rc(t, e) {
    return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e);
  }

  function Sc(t, e) {
    return e.set(e.t, e.p, 1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e);
  }

  function Tc(t, e) {
    return e.set(e.t, e.p, t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b, e);
  }

  function Uc(t, e) {
    var r = e.s + e.c * t;
    e.set(e.t, e.p, ~~(r + (r < 0 ? -.5 : .5)) + e.u, e);
  }

  function Vc(t, e) {
    return e.set(e.t, e.p, t ? e.e : e.b, e);
  }

  function Wc(t, e) {
    return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e);
  }

  function Xc(t, e, r) {
    return t.style[e] = r;
  }

  function Yc(t, e, r) {
    return t.style.setProperty(e, r);
  }

  function Zc(t, e, r) {
    return t._gsap[e] = r;
  }

  function $c(t, e, r) {
    return t._gsap.scaleX = t._gsap.scaleY = r;
  }

  function _c(t, e, r, i, n) {
    var a = t._gsap;
    a.scaleX = a.scaleY = r, a.renderTransform(n, a);
  }

  function ad(t, e, r, i, n) {
    var a = t._gsap;
    a[e] = r, a.renderTransform(n, a);
  }

  function ed(t, e) {
    var r = ae.createElementNS ? ae.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : ae.createElement(t);
    return r.style ? r : ae.createElement(t);
  }

  function fd(t, e, r) {
    var i = getComputedStyle(t);
    return i[e] || i.getPropertyValue(e.replace(Fe, "-$1").toLowerCase()) || i.getPropertyValue(e) || !r && fd(t, Ne(e) || e, 1) || "";
  }

  function id() {
    !function _windowExists() {
      return "undefined" != typeof window;
    }() || (ne = window, ae = ne.document, se = ae.documentElement, ue = ed("div") || {
      style: {}
    }, he = ed("div"), Ie = Ne(Ie), qe = Ne(qe), ue.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", fe = !!Ne("perspective"), oe = 1);
  }

  function jd(t) {
    var e,
        r = ed("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
        i = this.parentNode,
        n = this.nextSibling,
        a = this.style.cssText;
    if (se.appendChild(r), r.appendChild(this), this.style.display = "block", t) try {
      e = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = jd;
    } catch (t) {} else this._gsapBBox && (e = this._gsapBBox());
    return i && (n ? i.insertBefore(this, n) : i.appendChild(this)), se.removeChild(r), this.style.cssText = a, e;
  }

  function kd(t, e) {
    for (var r = e.length; r--;) {
      if (t.hasAttribute(e[r])) return t.getAttribute(e[r]);
    }
  }

  function ld(e) {
    var r;

    try {
      r = e.getBBox();
    } catch (t) {
      r = jd.call(e, !0);
    }

    return r && (r.width || r.height) || e.getBBox === jd || (r = jd.call(e, !0)), !r || r.width || r.x || r.y ? r : {
      x: +kd(e, ["x", "cx", "x1"]) || 0,
      y: +kd(e, ["y", "cy", "y1"]) || 0,
      width: 0,
      height: 0
    };
  }

  function md(t) {
    return !(!t.getCTM || t.parentNode && !t.ownerSVGElement || !ld(t));
  }

  function nd(t, e) {
    if (e) {
      var r = t.style;
      e in Se && (e = Ie), r.removeProperty ? ("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6) || (e = "-" + e), r.removeProperty(e.replace(Fe, "-$1").toLowerCase())) : r.removeAttribute(e);
    }
  }

  function od(t, e, r, i, n, a) {
    var s = new ee(t._pt, e, r, 0, 1, a ? Wc : Vc);
    return (t._pt = s).b = i, s.e = n, t._props.push(r), s;
  }

  function qd(t, e, r, i) {
    var n,
        a,
        s,
        o,
        u = parseFloat(r) || 0,
        h = (r + "").trim().substr((u + "").length) || "px",
        l = ue.style,
        f = Ee.test(e),
        d = "svg" === t.tagName.toLowerCase(),
        c = (d ? "client" : "offset") + (f ? "Width" : "Height"),
        p = "px" === i,
        _ = "%" === i;

    return i === h || !u || Ge[i] || Ge[h] ? u : ("px" === h || p || (u = qd(t, e, r, "px")), o = t.getCTM && md(t), _ && (Se[e] || ~e.indexOf("adius")) ? aa(u / (o ? t.getBBox()[f ? "width" : "height"] : t[c]) * 100) : (l[f ? "width" : "height"] = 100 + (p ? h : i), a = ~e.indexOf("adius") || "em" === i && t.appendChild && !d ? t : t.parentNode, o && (a = (t.ownerSVGElement || {}).parentNode), a && a !== ae && a.appendChild || (a = ae.body), (s = a._gsap) && _ && s.width && f && s.time === Ot.time ? aa(u / s.width * 100) : (!_ && "%" !== h || (l.position = fd(t, "position")), a === t && (l.position = "static"), a.appendChild(ue), n = ue[c], a.removeChild(ue), l.position = "absolute", f && _ && ((s = Z(a)).time = Ot.time, s.width = a[c]), aa(p ? n * u / 100 : n && u ? 100 / n * u : 0))));
  }

  function rd(t, e, r, i) {
    var n;
    return oe || id(), e in Le && "transform" !== e && ~(e = Le[e]).indexOf(",") && (e = e.split(",")[0]), Se[e] && "transform" !== e ? (n = Ze(t, i), n = "transformOrigin" !== e ? n[e] : Je(fd(t, qe)) + " " + n.zOrigin + "px") : (n = t.style[e]) && "auto" !== n && !i && !~(n + "").indexOf("calc(") || (n = Xe[e] && Xe[e](t, e, r) || fd(t, e) || $(t, e) || ("opacity" === e ? 1 : 0)), r && !~(n + "").indexOf(" ") ? qd(t, e, n, r) + r : n;
  }

  function sd(t, e, r, i) {
    if (!r || "none" === r) {
      var n = Ne(e, t, 1),
          a = n && fd(t, n, 1);
      a && a !== r && (e = n, r = a);
    }

    var s,
        o,
        u,
        h,
        l,
        f,
        d,
        c,
        p,
        _,
        m,
        g,
        v = new ee(this._pt, t.style, e, 0, 1, Qt),
        y = 0,
        T = 0;

    if (v.b = r, v.e = i, r += "", "auto" === (i += "") && (t.style[e] = i, i = fd(t, e) || i, t.style[e] = r), ob(s = [r, i]), i = s[1], u = (r = s[0]).match(tt) || [], (i.match(tt) || []).length) {
      for (; o = tt.exec(i);) {
        d = o[0], p = i.substring(y, o.index), l ? l = (l + 1) % 5 : "rgba(" !== p.substr(-5) && "hsla(" !== p.substr(-5) || (l = 1), d !== (f = u[T++] || "") && (h = parseFloat(f) || 0, m = f.substr((h + "").length), (g = "=" === d.charAt(1) ? +(d.charAt(0) + "1") : 0) && (d = d.substr(2)), c = parseFloat(d), _ = d.substr((c + "").length), y = tt.lastIndex - _.length, _ || (_ = _ || G.units[e] || m, y === i.length && (i += _, v.e += _)), m !== _ && (h = qd(t, e, f, _) || 0), v._pt = {
          _next: v._pt,
          p: p || 1 === T ? p : ",",
          s: h,
          c: g ? g * c : c - h,
          m: l && l < 4 ? Math.round : 0
        });
      }

      v.c = y < i.length ? i.substring(y, i.length) : "";
    } else v.r = "display" === e && "none" === i ? Wc : Vc;

    return it.test(i) && (v.e = 0), this._pt = v;
  }

  function ud(t) {
    var e = t.split(" "),
        r = e[0],
        i = e[1] || "50%";
    return "top" !== r && "bottom" !== r && "left" !== i && "right" !== i || (t = r, r = i, i = t), e[0] = Ue[r] || r, e[1] = Ue[i] || i, e.join(" ");
  }

  function vd(t, e) {
    if (e.tween && e.tween._time === e.tween._dur) {
      var r,
          i,
          n,
          a = e.t,
          s = a.style,
          o = e.u,
          u = a._gsap;
      if ("all" === o || !0 === o) s.cssText = "", i = 1;else for (n = (o = o.split(",")).length; -1 < --n;) {
        r = o[n], Se[r] && (i = 1, r = "transformOrigin" === r ? qe : Ie), nd(a, r);
      }
      i && (nd(a, Ie), u && (u.svg && a.removeAttribute("transform"), Ze(a, 1), u.uncache = 1));
    }
  }

  function zd(t) {
    return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t;
  }

  function Ad(t) {
    var e = fd(t, Ie);
    return zd(e) ? je : e.substr(7).match(W).map(aa);
  }

  function Bd(t, e) {
    var r,
        i,
        n,
        a,
        s = t._gsap || Z(t),
        o = t.style,
        u = Ad(t);
    return s.svg && t.getAttribute("transform") ? "1,0,0,1,0,0" === (u = [(n = t.transform.baseVal.consolidate().matrix).a, n.b, n.c, n.d, n.e, n.f]).join(",") ? je : u : (u !== je || t.offsetParent || t === se || s.svg || (n = o.display, o.display = "block", (r = t.parentNode) && t.offsetParent || (a = 1, i = t.nextSibling, se.appendChild(t)), u = Ad(t), n ? o.display = n : nd(t, "display"), a && (i ? r.insertBefore(t, i) : r ? r.appendChild(t) : se.removeChild(t))), e && 6 < u.length ? [u[0], u[1], u[4], u[5], u[12], u[13]] : u);
  }

  function Cd(t, e, r, i, n, a) {
    var s,
        o,
        u,
        h = t._gsap,
        l = n || Bd(t, !0),
        f = h.xOrigin || 0,
        d = h.yOrigin || 0,
        c = h.xOffset || 0,
        p = h.yOffset || 0,
        _ = l[0],
        m = l[1],
        g = l[2],
        v = l[3],
        y = l[4],
        T = l[5],
        b = e.split(" "),
        w = parseFloat(b[0]) || 0,
        x = parseFloat(b[1]) || 0;
    r ? l !== je && (o = _ * v - m * g) && (u = w * (-m / o) + x * (_ / o) - (_ * T - m * y) / o, w = w * (v / o) + x * (-g / o) + (g * T - v * y) / o, x = u) : (w = (s = ld(t)).x + (~b[0].indexOf("%") ? w / 100 * s.width : w), x = s.y + (~(b[1] || b[0]).indexOf("%") ? x / 100 * s.height : x)), i || !1 !== i && h.smooth ? (y = w - f, T = x - d, h.xOffset = c + (y * _ + T * g) - y, h.yOffset = p + (y * m + T * v) - T) : h.xOffset = h.yOffset = 0, h.xOrigin = w, h.yOrigin = x, h.smooth = !!i, h.origin = e, h.originIsAbsolute = !!r, t.style[qe] = "0px 0px", a && (od(a, h, "xOrigin", f, w), od(a, h, "yOrigin", d, x), od(a, h, "xOffset", c, h.xOffset), od(a, h, "yOffset", p, h.yOffset)), t.setAttribute("data-svg-origin", w + " " + x);
  }

  function Fd(t, e, r) {
    var i = Ja(e);
    return aa(parseFloat(e) + parseFloat(qd(t, "x", r + "px", i))) + i;
  }

  function Md(t, e, r, i, a, s) {
    var o,
        u,
        h = 360,
        l = n(a),
        f = parseFloat(a) * (l && ~a.indexOf("rad") ? ze : 1),
        d = s ? f * s : f - i,
        c = i + d + "deg";
    return l && ("short" === (o = a.split("_")[1]) && (d %= h) !== d % 180 && (d += d < 0 ? h : -h), "cw" === o && d < 0 ? d = (d + 36e9) % h - ~~(d / h) * h : "ccw" === o && 0 < d && (d = (d - 36e9) % h - ~~(d / h) * h)), t._pt = u = new ee(t._pt, e, r, i, d, Sc), u.e = c, u.u = "deg", t._props.push(r), u;
  }

  function Nd(t, e, r) {
    var i,
        n,
        a,
        s,
        o,
        u,
        h,
        l = he.style,
        f = r._gsap;

    for (n in l.cssText = getComputedStyle(r).cssText + ";position:absolute;display:block;", l[Ie] = e, ae.body.appendChild(he), i = Ze(he, 1), Se) {
      (a = f[n]) !== (s = i[n]) && "perspective,force3D,transformOrigin,svgOrigin".indexOf(n) < 0 && (o = Ja(a) !== (h = Ja(s)) ? qd(r, n, a, h) : parseFloat(a), u = parseFloat(s), t._pt = new ee(t._pt, f, n, o, u - o, Rc), t._pt.u = h || 0, t._props.push(n));
    }

    ae.body.removeChild(he);
  }

  var ne,
      ae,
      se,
      oe,
      ue,
      he,
      le,
      fe,
      de = Pt.Power0,
      ce = Pt.Power1,
      pe = Pt.Power2,
      _e = Pt.Power3,
      me = Pt.Power4,
      ge = Pt.Linear,
      ve = Pt.Quad,
      ye = Pt.Cubic,
      Te = Pt.Quart,
      be = Pt.Quint,
      we = Pt.Strong,
      xe = Pt.Elastic,
      ke = Pt.Back,
      Me = Pt.SteppedEase,
      Oe = Pt.Bounce,
      Ce = Pt.Sine,
      Pe = Pt.Expo,
      Ae = Pt.Circ,
      Se = {},
      ze = 180 / Math.PI,
      De = Math.PI / 180,
      Re = Math.atan2,
      Fe = /([A-Z])/g,
      Ee = /(?:left|right|width|margin|padding|x)/i,
      Be = /[\s,\(]\S/,
      Le = {
    autoAlpha: "opacity,visibility",
    scale: "scaleX,scaleY",
    alpha: "opacity"
  },
      Ie = "transform",
      qe = Ie + "Origin",
      Ye = "O,Moz,ms,Ms,Webkit".split(","),
      Ne = function _checkPropPrefix(t, e, r) {
    var i = (e || ue).style,
        n = 5;
    if (t in i && !r) return t;

    for (t = t.charAt(0).toUpperCase() + t.substr(1); n-- && !(Ye[n] + t in i);) {
      ;
    }

    return n < 0 ? null : (3 === n ? "ms" : 0 <= n ? Ye[n] : "") + t;
  },
      Ge = {
    deg: 1,
    rad: 1,
    turn: 1
  },
      Ue = {
    top: "0%",
    bottom: "100%",
    left: "0%",
    right: "100%",
    center: "50%"
  },
      Xe = {
    clearProps: function clearProps(t, e, r, i, n) {
      if ("isFromStart" !== n.data) {
        var a = t._pt = new ee(t._pt, e, r, 0, 0, vd);
        return a.u = i, a.pr = -10, a.tween = n, t._props.push(r), 1;
      }
    }
  },
      je = [1, 0, 0, 1, 0, 0],
      Ve = {},
      Ze = function _parseTransform(t, e) {
    var r = t._gsap || new Ft(t);
    if ("x" in r && !e && !r.uncache) return r;

    var i,
        n,
        a,
        s,
        o,
        u,
        h,
        l,
        f,
        d,
        c,
        p,
        _,
        m,
        g,
        v,
        y,
        T,
        b,
        w,
        x,
        k,
        M,
        O,
        C,
        P,
        A,
        S,
        z,
        D,
        R,
        F,
        E = t.style,
        B = r.scaleX < 0,
        L = "deg",
        I = fd(t, qe) || "0";

    return i = n = a = u = h = l = f = d = c = 0, s = o = 1, r.svg = !(!t.getCTM || !md(t)), m = Bd(t, r.svg), r.svg && (O = !r.uncache && t.getAttribute("data-svg-origin"), Cd(t, O || I, !!O || r.originIsAbsolute, !1 !== r.smooth, m)), p = r.xOrigin || 0, _ = r.yOrigin || 0, m !== je && (T = m[0], b = m[1], w = m[2], x = m[3], i = k = m[4], n = M = m[5], 6 === m.length ? (s = Math.sqrt(T * T + b * b), o = Math.sqrt(x * x + w * w), u = T || b ? Re(b, T) * ze : 0, (f = w || x ? Re(w, x) * ze + u : 0) && (o *= Math.cos(f * De)), r.svg && (i -= p - (p * T + _ * w), n -= _ - (p * b + _ * x))) : (F = m[6], D = m[7], A = m[8], S = m[9], z = m[10], R = m[11], i = m[12], n = m[13], a = m[14], h = (g = Re(F, z)) * ze, g && (O = k * (v = Math.cos(-g)) + A * (y = Math.sin(-g)), C = M * v + S * y, P = F * v + z * y, A = k * -y + A * v, S = M * -y + S * v, z = F * -y + z * v, R = D * -y + R * v, k = O, M = C, F = P), l = (g = Re(-w, z)) * ze, g && (v = Math.cos(-g), R = x * (y = Math.sin(-g)) + R * v, T = O = T * v - A * y, b = C = b * v - S * y, w = P = w * v - z * y), u = (g = Re(b, T)) * ze, g && (O = T * (v = Math.cos(g)) + b * (y = Math.sin(g)), C = k * v + M * y, b = b * v - T * y, M = M * v - k * y, T = O, k = C), h && 359.9 < Math.abs(h) + Math.abs(u) && (h = u = 0, l = 180 - l), s = aa(Math.sqrt(T * T + b * b + w * w)), o = aa(Math.sqrt(M * M + F * F)), g = Re(k, M), f = 2e-4 < Math.abs(g) ? g * ze : 0, c = R ? 1 / (R < 0 ? -R : R) : 0), r.svg && (m = t.getAttribute("transform"), r.forceCSS = t.setAttribute("transform", "") || !zd(fd(t, Ie)), m && t.setAttribute("transform", m))), 90 < Math.abs(f) && Math.abs(f) < 270 && (B ? (s *= -1, f += u <= 0 ? 180 : -180, u += u <= 0 ? 180 : -180) : (o *= -1, f += f <= 0 ? 180 : -180)), r.x = ((r.xPercent = i && Math.round(t.offsetWidth / 2) === Math.round(-i) ? -50 : 0) ? 0 : i) + "px", r.y = ((r.yPercent = n && Math.round(t.offsetHeight / 2) === Math.round(-n) ? -50 : 0) ? 0 : n) + "px", r.z = a + "px", r.scaleX = aa(s), r.scaleY = aa(o), r.rotation = aa(u) + L, r.rotationX = aa(h) + L, r.rotationY = aa(l) + L, r.skewX = f + L, r.skewY = d + L, r.transformPerspective = c + "px", (r.zOrigin = parseFloat(I.split(" ")[2]) || 0) && (E[qe] = Je(I)), r.xOffset = r.yOffset = 0, r.force3D = G.force3D, r.renderTransform = r.svg ? tr : fe ? Ke : He, r.uncache = 0, r;
  },
      Je = function _firstTwoOnly(t) {
    return (t = t.split(" "))[0] + " " + t[1];
  },
      He = function _renderNon3DTransforms(t, e) {
    e.z = "0px", e.rotationY = e.rotationX = "0deg", e.force3D = 0, Ke(t, e);
  },
      Qe = "0deg",
      $e = "0px",
      We = ") ",
      Ke = function _renderCSSTransforms(t, e) {
    var r = e || this,
        i = r.xPercent,
        n = r.yPercent,
        a = r.x,
        s = r.y,
        o = r.z,
        u = r.rotation,
        h = r.rotationY,
        l = r.rotationX,
        f = r.skewX,
        d = r.skewY,
        c = r.scaleX,
        p = r.scaleY,
        _ = r.transformPerspective,
        m = r.force3D,
        g = r.target,
        v = r.zOrigin,
        y = "",
        T = "auto" === m && t && 1 !== t || !0 === m;

    if (v && (l !== Qe || h !== Qe)) {
      var b,
          w = parseFloat(h) * De,
          x = Math.sin(w),
          k = Math.cos(w);
      w = parseFloat(l) * De, b = Math.cos(w), a = Fd(g, a, x * b * -v), s = Fd(g, s, -Math.sin(w) * -v), o = Fd(g, o, k * b * -v + v);
    }

    _ !== $e && (y += "perspective(" + _ + We), (i || n) && (y += "translate(" + i + "%, " + n + "%) "), !T && a === $e && s === $e && o === $e || (y += o !== $e || T ? "translate3d(" + a + ", " + s + ", " + o + ") " : "translate(" + a + ", " + s + We), u !== Qe && (y += "rotate(" + u + We), h !== Qe && (y += "rotateY(" + h + We), l !== Qe && (y += "rotateX(" + l + We), f === Qe && d === Qe || (y += "skew(" + f + ", " + d + We), 1 === c && 1 === p || (y += "scale(" + c + ", " + p + We), g.style[Ie] = y || "translate(0, 0)";
  },
      tr = function _renderSVGTransforms(t, e) {
    var r,
        i,
        n,
        a,
        s,
        o = e || this,
        u = o.xPercent,
        h = o.yPercent,
        l = o.x,
        f = o.y,
        d = o.rotation,
        c = o.skewX,
        p = o.skewY,
        _ = o.scaleX,
        m = o.scaleY,
        g = o.target,
        v = o.xOrigin,
        y = o.yOrigin,
        T = o.xOffset,
        b = o.yOffset,
        w = o.forceCSS,
        x = parseFloat(l),
        k = parseFloat(f);
    d = parseFloat(d), c = parseFloat(c), (p = parseFloat(p)) && (c += p = parseFloat(p), d += p), d || c ? (d *= De, c *= De, r = Math.cos(d) * _, i = Math.sin(d) * _, n = Math.sin(d - c) * -m, a = Math.cos(d - c) * m, c && (p *= De, s = Math.tan(c - p), n *= s = Math.sqrt(1 + s * s), a *= s, p && (s = Math.tan(p), r *= s = Math.sqrt(1 + s * s), i *= s)), r = aa(r), i = aa(i), n = aa(n), a = aa(a)) : (r = _, a = m, i = n = 0), (x && !~(l + "").indexOf("px") || k && !~(f + "").indexOf("px")) && (x = qd(g, "x", l, "px"), k = qd(g, "y", f, "px")), (v || y || T || b) && (x = aa(x + v - (v * r + y * n) + T), k = aa(k + y - (v * i + y * a) + b)), (u || h) && (s = g.getBBox(), x = aa(x + u / 100 * s.width), k = aa(k + h / 100 * s.height)), s = "matrix(" + r + "," + i + "," + n + "," + a + "," + x + "," + k + ")", g.setAttribute("transform", s), w && (g.style[Ie] = s);
  };

  _("padding,margin,Width,Radius", function (e, r) {
    var t = "Right",
        i = "Bottom",
        n = "Left",
        o = (r < 3 ? ["Top", t, i, n] : ["Top" + n, "Top" + t, i + t, i + n]).map(function (t) {
      return r < 2 ? e + t : "border" + t + e;
    });

    Xe[1 < r ? "border" + e : e] = function (e, t, r, i, n) {
      var a, s;
      if (arguments.length < 4) return a = o.map(function (t) {
        return rd(e, t, r);
      }), 5 === (s = a.join(" ")).split(a[0]).length ? a[0] : s;
      a = (i + "").split(" "), s = {}, o.forEach(function (t, e) {
        return s[t] = a[e] = a[e] || a[(e - 1) / 2 | 0];
      }), e.init(t, s, n);
    };
  });

  var er,
      rr,
      ir,
      nr = {
    name: "css",
    register: id,
    targetTest: function targetTest(t) {
      return t.style && t.nodeType;
    },
    init: function init(t, e, r, i, n) {
      var a,
          s,
          o,
          u,
          h,
          l,
          f,
          d,
          c,
          p,
          _,
          m,
          g,
          v,
          y,
          T = this._props,
          b = t.style;

      for (f in oe || id(), e) {
        if ("autoRound" !== f && (s = e[f], !ht[f] || !Jb(f, e, r, i, t, n))) if (h = _typeof(s), l = Xe[f], "function" === h && (h = _typeof(s = s.call(r, i, t, n))), "string" === h && ~s.indexOf("random(") && (s = $a(s)), l) l(this, t, f, s, r) && (y = 1);else if ("--" === f.substr(0, 2)) this.add(b, "setProperty", getComputedStyle(t).getPropertyValue(f) + "", s + "", i, n, 0, 0, f);else {
          if (a = rd(t, f), u = parseFloat(a), (p = "string" === h && "=" === s.charAt(1) ? +(s.charAt(0) + "1") : 0) && (s = s.substr(2)), o = parseFloat(s), f in Le && ("autoAlpha" === f && (1 === u && "hidden" === rd(t, "visibility") && o && (u = 0), od(this, b, "visibility", u ? "inherit" : "hidden", o ? "inherit" : "hidden", !o)), "scale" !== f && "transform" !== f && ~(f = Le[f]).indexOf(",") && (f = f.split(",")[0])), _ = f in Se) {
            if (m || ((g = t._gsap).renderTransform || Ze(t), v = !1 !== e.smoothOrigin && g.smooth, (m = this._pt = new ee(this._pt, b, Ie, 0, 1, g.renderTransform, g, 0, -1)).dep = 1), "scale" === f) this._pt = new ee(this._pt, g, "scaleY", g.scaleY, p ? p * o : o - g.scaleY), T.push("scaleY", f), f += "X";else {
              if ("transformOrigin" === f) {
                s = ud(s), g.svg ? Cd(t, s, 0, v, 0, this) : ((c = parseFloat(s.split(" ")[2]) || 0) !== g.zOrigin && od(this, g, "zOrigin", g.zOrigin, c), od(this, b, f, Je(a), Je(s)));
                continue;
              }

              if ("svgOrigin" === f) {
                Cd(t, s, 1, v, 0, this);
                continue;
              }

              if (f in Ve) {
                Md(this, g, f, u, s, p);
                continue;
              }

              if ("smoothOrigin" === f) {
                od(this, g, "smooth", g.smooth, s);
                continue;
              }

              if ("force3D" === f) {
                g[f] = s;
                continue;
              }

              if ("transform" === f) {
                Nd(this, s, t);
                continue;
              }
            }
          } else f in b || (f = Ne(f) || f);
          if (_ || (o || 0 === o) && (u || 0 === u) && !Be.test(s) && f in b) (d = (a + "").substr((u + "").length)) !== (c = (s + "").substr(((o = o || 0) + "").length) || (f in G.units ? G.units[f] : d)) && (u = qd(t, f, a, c)), this._pt = new ee(this._pt, _ ? g : b, f, u, p ? p * o : o - u, "px" !== c || !1 === e.autoRound || _ ? Rc : Uc), this._pt.u = c || 0, d !== c && (this._pt.b = a, this._pt.r = Tc);else if (f in b) sd.call(this, t, f, a, s);else {
            if (!(f in t)) {
              L(f, s);
              continue;
            }

            this.add(t, f, t[f], s, i, n);
          }
          T.push(f);
        }
      }

      y && te(this);
    },
    get: rd,
    aliases: Le,
    getSetter: function getSetter(t, e, r) {
      var i = Le[e];
      return i && i.indexOf(",") < 0 && (e = i), e in Se && e !== qe && (t._gsap.x || rd(t, "x")) ? r && le === r ? "scale" === e ? $c : Zc : (le = r || {}) && ("scale" === e ? _c : ad) : t.style && !q(t.style[e]) ? Xc : ~e.indexOf("-") ? Yc : Zt(t, e);
    },
    core: {
      _removeProperty: nd,
      _getMatrix: Bd
    }
  };
  ie.utils.checkPrefix = Ne, ir = _((er = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent") + "," + (rr = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", function (t) {
    Se[t] = 1;
  }), _(rr, function (t) {
    G.units[t] = "deg", Ve[t] = 1;
  }), Le[ir[13]] = er + "," + rr, _("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", function (t) {
    var e = t.split(":");
    Le[e[1]] = ir[e[0]];
  }), _("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function (t) {
    G.units[t] = "px";
  }), ie.registerPlugin(nr);
  var ar = ie.registerPlugin(nr) || ie,
      sr = ar.core.Tween;
  e.Back = ke, e.Bounce = Oe, e.CSSPlugin = nr, e.Circ = Ae, e.Cubic = ye, e.Elastic = xe, e.Expo = Pe, e.Linear = ge, e.Power0 = de, e.Power1 = ce, e.Power2 = pe, e.Power3 = _e, e.Power4 = me, e.Quad = ve, e.Quart = Te, e.Quint = be, e.Sine = Ce, e.SteppedEase = Me, e.Strong = we, e.TimelineLite = Bt, e.TimelineMax = Bt, e.TweenLite = Ut, e.TweenMax = sr, e["default"] = ar, e.gsap = ar;

  if (typeof window === "undefined" || window !== e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
  } else {
    delete e["default"];
  }
});
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*! ScrollMagic v2.0.7 | (c) 2019 Jan Paepke (@janpaepke) | license & info: http://scrollmagic.io */
!function (e, t) {
  "function" == typeof define && define.amd ? define(t) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? module.exports = t() : e.ScrollMagic = t();
}(this, function () {
  "use strict";

  var _ = function _() {};

  _.version = "2.0.7", window.addEventListener("mousewheel", function () {});
  var P = "data-scrollmagic-pin-spacer";

  _.Controller = function (e) {
    var n,
        r,
        i = "REVERSE",
        t = "PAUSED",
        o = z.defaults,
        s = this,
        a = R.extend({}, o, e),
        l = [],
        c = !1,
        f = 0,
        u = t,
        d = !0,
        h = 0,
        p = !0,
        g = function g() {
      0 < a.refreshInterval && (r = window.setTimeout(E, a.refreshInterval));
    },
        v = function v() {
      return a.vertical ? R.get.scrollTop(a.container) : R.get.scrollLeft(a.container);
    },
        m = function m() {
      return a.vertical ? R.get.height(a.container) : R.get.width(a.container);
    },
        w = this._setScrollPos = function (e) {
      a.vertical ? d ? window.scrollTo(R.get.scrollLeft(), e) : a.container.scrollTop = e : d ? window.scrollTo(e, R.get.scrollTop()) : a.container.scrollLeft = e;
    },
        y = function y() {
      if (p && c) {
        var e = R.type.Array(c) ? c : l.slice(0);
        c = !1;
        var t = f,
            n = (f = s.scrollPos()) - t;
        0 !== n && (u = 0 < n ? "FORWARD" : i), u === i && e.reverse(), e.forEach(function (e, t) {
          e.update(!0);
        });
      }
    },
        S = function S() {
      n = R.rAF(y);
    },
        b = function b(e) {
      "resize" == e.type && (h = m(), u = t), !0 !== c && (c = !0, S());
    },
        E = function E() {
      if (!d && h != m()) {
        var t;

        try {
          t = new Event("resize", {
            bubbles: !1,
            cancelable: !1
          });
        } catch (e) {
          (t = document.createEvent("Event")).initEvent("resize", !1, !1);
        }

        a.container.dispatchEvent(t);
      }

      l.forEach(function (e, t) {
        e.refresh();
      }), g();
    };

    this._options = a;

    var x = function x(e) {
      if (e.length <= 1) return e;
      var t = e.slice(0);
      return t.sort(function (e, t) {
        return e.scrollOffset() > t.scrollOffset() ? 1 : -1;
      }), t;
    };

    return this.addScene = function (e) {
      if (R.type.Array(e)) e.forEach(function (e, t) {
        s.addScene(e);
      });else if (e instanceof _.Scene) if (e.controller() !== s) e.addTo(s);else if (l.indexOf(e) < 0) for (var t in l.push(e), l = x(l), e.on("shift.controller_sort", function () {
        l = x(l);
      }), a.globalSceneOptions) {
        e[t] && e[t].call(e, a.globalSceneOptions[t]);
      }
      return s;
    }, this.removeScene = function (e) {
      if (R.type.Array(e)) e.forEach(function (e, t) {
        s.removeScene(e);
      });else {
        var t = l.indexOf(e);
        -1 < t && (e.off("shift.controller_sort"), l.splice(t, 1), e.remove());
      }
      return s;
    }, this.updateScene = function (e, n) {
      return R.type.Array(e) ? e.forEach(function (e, t) {
        s.updateScene(e, n);
      }) : n ? e.update(!0) : !0 !== c && e instanceof _.Scene && (-1 == (c = c || []).indexOf(e) && c.push(e), c = x(c), S()), s;
    }, this.update = function (e) {
      return b({
        type: "resize"
      }), e && y(), s;
    }, this.scrollTo = function (e, t) {
      if (R.type.Number(e)) w.call(a.container, e, t);else if (e instanceof _.Scene) e.controller() === s && s.scrollTo(e.scrollOffset(), t);else if (R.type.Function(e)) w = e;else {
        var n = R.get.elements(e)[0];

        if (n) {
          for (; n.parentNode.hasAttribute(P);) {
            n = n.parentNode;
          }

          var r = a.vertical ? "top" : "left",
              i = R.get.offset(a.container),
              o = R.get.offset(n);
          d || (i[r] -= s.scrollPos()), s.scrollTo(o[r] - i[r], t);
        }
      }
      return s;
    }, this.scrollPos = function (e) {
      return arguments.length ? (R.type.Function(e) && (v = e), s) : v.call(s);
    }, this.info = function (e) {
      var t = {
        size: h,
        vertical: a.vertical,
        scrollPos: f,
        scrollDirection: u,
        container: a.container,
        isDocument: d
      };
      return arguments.length ? void 0 !== t[e] ? t[e] : void 0 : t;
    }, this.loglevel = function (e) {
      return s;
    }, this.enabled = function (e) {
      return arguments.length ? (p != e && (p = !!e, s.updateScene(l, !0)), s) : p;
    }, this.destroy = function (e) {
      window.clearTimeout(r);

      for (var t = l.length; t--;) {
        l[t].destroy(e);
      }

      return a.container.removeEventListener("resize", b), a.container.removeEventListener("scroll", b), R.cAF(n), null;
    }, function () {
      for (var e in a) {
        o.hasOwnProperty(e) || delete a[e];
      }

      if (a.container = R.get.elements(a.container)[0], !a.container) throw "ScrollMagic.Controller init failed.";
      (d = a.container === window || a.container === document.body || !document.body.contains(a.container)) && (a.container = window), h = m(), a.container.addEventListener("resize", b), a.container.addEventListener("scroll", b);
      var t = parseInt(a.refreshInterval, 10);
      a.refreshInterval = R.type.Number(t) ? t : o.refreshInterval, g();
    }(), s;
  };

  var z = {
    defaults: {
      container: window,
      vertical: !0,
      globalSceneOptions: {},
      loglevel: 2,
      refreshInterval: 100
    }
  };
  _.Controller.addOption = function (e, t) {
    z.defaults[e] = t;
  }, _.Controller.extend = function (e) {
    var t = this;
    _.Controller = function () {
      return t.apply(this, arguments), this.$super = R.extend({}, this), e.apply(this, arguments) || this;
    }, R.extend(_.Controller, t), _.Controller.prototype = t.prototype, _.Controller.prototype.constructor = _.Controller;
  }, _.Scene = function (e) {
    var n,
        l,
        c = "BEFORE",
        f = "DURING",
        u = "AFTER",
        r = D.defaults,
        d = this,
        h = R.extend({}, r, e),
        p = c,
        g = 0,
        a = {
      start: 0,
      end: 0
    },
        v = 0,
        i = !0,
        s = {};
    this.on = function (e, i) {
      return R.type.Function(i) && (e = e.trim().split(" ")).forEach(function (e) {
        var t = e.split("."),
            n = t[0],
            r = t[1];
        "*" != n && (s[n] || (s[n] = []), s[n].push({
          namespace: r || "",
          callback: i
        }));
      }), d;
    }, this.off = function (e, o) {
      return e && (e = e.trim().split(" ")).forEach(function (e, t) {
        var n = e.split("."),
            r = n[0],
            i = n[1] || "";
        ("*" === r ? Object.keys(s) : [r]).forEach(function (e) {
          for (var t = s[e] || [], n = t.length; n--;) {
            var r = t[n];
            !r || i !== r.namespace && "*" !== i || o && o != r.callback || t.splice(n, 1);
          }

          t.length || delete s[e];
        });
      }), d;
    }, this.trigger = function (e, n) {
      if (e) {
        var t = e.trim().split("."),
            r = t[0],
            i = t[1],
            o = s[r];
        o && o.forEach(function (e, t) {
          i && i !== e.namespace || e.callback.call(d, new _.Event(r, e.namespace, d, n));
        });
      }

      return d;
    }, d.on("change.internal", function (e) {
      "loglevel" !== e.what && "tweenChanges" !== e.what && ("triggerElement" === e.what ? y() : "reverse" === e.what && d.update());
    }).on("shift.internal", function (e) {
      t(), d.update();
    }), this.addTo = function (e) {
      return e instanceof _.Controller && l != e && (l && l.removeScene(d), l = e, E(), o(!0), y(!0), t(), l.info("container").addEventListener("resize", S), e.addScene(d), d.trigger("add", {
        controller: l
      }), d.update()), d;
    }, this.enabled = function (e) {
      return arguments.length ? (i != e && (i = !!e, d.update(!0)), d) : i;
    }, this.remove = function () {
      if (l) {
        l.info("container").removeEventListener("resize", S);
        var e = l;
        l = void 0, e.removeScene(d), d.trigger("remove");
      }

      return d;
    }, this.destroy = function (e) {
      return d.trigger("destroy", {
        reset: e
      }), d.remove(), d.off("*.*"), null;
    }, this.update = function (e) {
      if (l) if (e) {
        if (l.enabled() && i) {
          var t,
              n = l.info("scrollPos");
          t = 0 < h.duration ? (n - a.start) / (a.end - a.start) : n >= a.start ? 1 : 0, d.trigger("update", {
            startPos: a.start,
            endPos: a.end,
            scrollPos: n
          }), d.progress(t);
        } else m && p === f && C(!0);
      } else l.updateScene(d, !1);
      return d;
    }, this.refresh = function () {
      return o(), y(), d;
    }, this.progress = function (e) {
      if (arguments.length) {
        var t = !1,
            n = p,
            r = l ? l.info("scrollDirection") : "PAUSED",
            i = h.reverse || g <= e;

        if (0 === h.duration ? (t = g != e, p = 0 === (g = e < 1 && i ? 0 : 1) ? c : f) : e < 0 && p !== c && i ? (p = c, t = !(g = 0)) : 0 <= e && e < 1 && i ? (g = e, p = f, t = !0) : 1 <= e && p !== u ? (g = 1, p = u, t = !0) : p !== f || i || C(), t) {
          var o = {
            progress: g,
            state: p,
            scrollDirection: r
          },
              s = p != n,
              a = function a(e) {
            d.trigger(e, o);
          };

          s && n !== f && (a("enter"), a(n === c ? "start" : "end")), a("progress"), s && p !== f && (a(p === c ? "start" : "end"), a("leave"));
        }

        return d;
      }

      return g;
    };

    var m,
        w,
        t = function t() {
      a = {
        start: v + h.offset
      }, l && h.triggerElement && (a.start -= l.info("size") * h.triggerHook), a.end = a.start + h.duration;
    },
        o = function o(e) {
      if (n) {
        var t = "duration";
        x(t, n.call(d)) && !e && (d.trigger("change", {
          what: t,
          newval: h[t]
        }), d.trigger("shift", {
          reason: t
        }));
      }
    },
        y = function y(e) {
      var t = 0,
          n = h.triggerElement;

      if (l && (n || 0 < v)) {
        if (n) if (n.parentNode) {
          for (var r = l.info(), i = R.get.offset(r.container), o = r.vertical ? "top" : "left"; n.parentNode.hasAttribute(P);) {
            n = n.parentNode;
          }

          var s = R.get.offset(n);
          r.isDocument || (i[o] -= l.scrollPos()), t = s[o] - i[o];
        } else d.triggerElement(void 0);
        var a = t != v;
        v = t, a && !e && d.trigger("shift", {
          reason: "triggerElementPosition"
        });
      }
    },
        S = function S(e) {
      0 < h.triggerHook && d.trigger("shift", {
        reason: "containerResize"
      });
    },
        b = R.extend(D.validate, {
      duration: function duration(t) {
        if (R.type.String(t) && t.match(/^(\.|\d)*\d+%$/)) {
          var e = parseFloat(t) / 100;

          t = function t() {
            return l ? l.info("size") * e : 0;
          };
        }

        if (R.type.Function(t)) {
          n = t;

          try {
            t = parseFloat(n.call(d));
          } catch (e) {
            t = -1;
          }
        }

        if (t = parseFloat(t), !R.type.Number(t) || t < 0) throw n && (n = void 0), 0;
        return t;
      }
    }),
        E = function E(e) {
      (e = arguments.length ? [e] : Object.keys(b)).forEach(function (t, e) {
        var n;
        if (b[t]) try {
          n = b[t](h[t]);
        } catch (e) {
          n = r[t];
        } finally {
          h[t] = n;
        }
      });
    },
        x = function x(e, t) {
      var n = !1,
          r = h[e];
      return h[e] != t && (h[e] = t, E(e), n = r != h[e]), n;
    },
        z = function z(t) {
      d[t] || (d[t] = function (e) {
        return arguments.length ? ("duration" === t && (n = void 0), x(t, e) && (d.trigger("change", {
          what: t,
          newval: h[t]
        }), -1 < D.shifts.indexOf(t) && d.trigger("shift", {
          reason: t
        })), d) : h[t];
      });
    };

    this.controller = function () {
      return l;
    }, this.state = function () {
      return p;
    }, this.scrollOffset = function () {
      return a.start;
    }, this.triggerPosition = function () {
      var e = h.offset;
      return l && (h.triggerElement ? e += v : e += l.info("size") * d.triggerHook()), e;
    }, d.on("shift.internal", function (e) {
      var t = "duration" === e.reason;
      (p === u && t || p === f && 0 === h.duration) && C(), t && F();
    }).on("progress.internal", function (e) {
      C();
    }).on("add.internal", function (e) {
      F();
    }).on("destroy.internal", function (e) {
      d.removePin(e.reset);
    });

    var C = function C(e) {
      if (m && l) {
        var t = l.info(),
            n = w.spacer.firstChild;

        if (e || p !== f) {
          var r = {
            position: w.inFlow ? "relative" : "absolute",
            top: 0,
            left: 0
          },
              i = R.css(n, "position") != r.position;
          w.pushFollowers ? 0 < h.duration && (p === u && 0 === parseFloat(R.css(w.spacer, "padding-top")) ? i = !0 : p === c && 0 === parseFloat(R.css(w.spacer, "padding-bottom")) && (i = !0)) : r[t.vertical ? "top" : "left"] = h.duration * g, R.css(n, r), i && F();
        } else {
          "fixed" != R.css(n, "position") && (R.css(n, {
            position: "fixed"
          }), F());
          var o = R.get.offset(w.spacer, !0),
              s = h.reverse || 0 === h.duration ? t.scrollPos - a.start : Math.round(g * h.duration * 10) / 10;
          o[t.vertical ? "top" : "left"] += s, R.css(w.spacer.firstChild, {
            top: o.top,
            left: o.left
          });
        }
      }
    },
        F = function F() {
      if (m && l && w.inFlow) {
        var e = p === f,
            t = l.info("vertical"),
            n = w.spacer.firstChild,
            r = R.isMarginCollapseType(R.css(w.spacer, "display")),
            i = {};
        w.relSize.width || w.relSize.autoFullWidth ? e ? R.css(m, {
          width: R.get.width(w.spacer)
        }) : R.css(m, {
          width: "100%"
        }) : (i["min-width"] = R.get.width(t ? m : n, !0, !0), i.width = e ? i["min-width"] : "auto"), w.relSize.height ? e ? R.css(m, {
          height: R.get.height(w.spacer) - (w.pushFollowers ? h.duration : 0)
        }) : R.css(m, {
          height: "100%"
        }) : (i["min-height"] = R.get.height(t ? n : m, !0, !r), i.height = e ? i["min-height"] : "auto"), w.pushFollowers && (i["padding" + (t ? "Top" : "Left")] = h.duration * g, i["padding" + (t ? "Bottom" : "Right")] = h.duration * (1 - g)), R.css(w.spacer, i);
      }
    },
        L = function L() {
      l && m && p === f && !l.info("isDocument") && C();
    },
        T = function T() {
      l && m && p === f && ((w.relSize.width || w.relSize.autoFullWidth) && R.get.width(window) != R.get.width(w.spacer.parentNode) || w.relSize.height && R.get.height(window) != R.get.height(w.spacer.parentNode)) && F();
    },
        A = function A(e) {
      l && m && p === f && !l.info("isDocument") && (e.preventDefault(), l._setScrollPos(l.info("scrollPos") - ((e.wheelDelta || e[l.info("vertical") ? "wheelDeltaY" : "wheelDeltaX"]) / 3 || 30 * -e.detail)));
    };

    this.setPin = function (e, t) {
      if (t = R.extend({}, {
        pushFollowers: !0,
        spacerClass: "scrollmagic-pin-spacer"
      }, t), !(e = R.get.elements(e)[0])) return d;
      if ("fixed" === R.css(e, "position")) return d;

      if (m) {
        if (m === e) return d;
        d.removePin();
      }

      var n = (m = e).parentNode.style.display,
          r = ["top", "left", "bottom", "right", "margin", "marginLeft", "marginRight", "marginTop", "marginBottom"];
      m.parentNode.style.display = "none";
      var i = "absolute" != R.css(m, "position"),
          o = R.css(m, r.concat(["display"])),
          s = R.css(m, ["width", "height"]);
      m.parentNode.style.display = n, !i && t.pushFollowers && (t.pushFollowers = !1);
      var a = m.parentNode.insertBefore(document.createElement("div"), m),
          l = R.extend(o, {
        position: i ? "relative" : "absolute",
        boxSizing: "content-box",
        mozBoxSizing: "content-box",
        webkitBoxSizing: "content-box"
      });

      if (i || R.extend(l, R.css(m, ["width", "height"])), R.css(a, l), a.setAttribute(P, ""), R.addClass(a, t.spacerClass), w = {
        spacer: a,
        relSize: {
          width: "%" === s.width.slice(-1),
          height: "%" === s.height.slice(-1),
          autoFullWidth: "auto" === s.width && i && R.isMarginCollapseType(o.display)
        },
        pushFollowers: t.pushFollowers,
        inFlow: i
      }, !m.___origStyle) {
        m.___origStyle = {};
        var c = m.style;
        r.concat(["width", "height", "position", "boxSizing", "mozBoxSizing", "webkitBoxSizing"]).forEach(function (e) {
          m.___origStyle[e] = c[e] || "";
        });
      }

      return w.relSize.width && R.css(a, {
        width: s.width
      }), w.relSize.height && R.css(a, {
        height: s.height
      }), a.appendChild(m), R.css(m, {
        position: i ? "relative" : "absolute",
        margin: "auto",
        top: "auto",
        left: "auto",
        bottom: "auto",
        right: "auto"
      }), (w.relSize.width || w.relSize.autoFullWidth) && R.css(m, {
        boxSizing: "border-box",
        mozBoxSizing: "border-box",
        webkitBoxSizing: "border-box"
      }), window.addEventListener("scroll", L), window.addEventListener("resize", L), window.addEventListener("resize", T), m.addEventListener("mousewheel", A), m.addEventListener("DOMMouseScroll", A), C(), d;
    }, this.removePin = function (e) {
      if (m) {
        if (p === f && C(!0), e || !l) {
          var t = w.spacer.firstChild;

          if (t.hasAttribute(P)) {
            var n = w.spacer.style,
                r = {};
            ["margin", "marginLeft", "marginRight", "marginTop", "marginBottom"].forEach(function (e) {
              r[e] = n[e] || "";
            }), R.css(t, r);
          }

          w.spacer.parentNode.insertBefore(t, w.spacer), w.spacer.parentNode.removeChild(w.spacer), m.parentNode.hasAttribute(P) || (R.css(m, m.___origStyle), delete m.___origStyle);
        }

        window.removeEventListener("scroll", L), window.removeEventListener("resize", L), window.removeEventListener("resize", T), m.removeEventListener("mousewheel", A), m.removeEventListener("DOMMouseScroll", A), m = void 0;
      }

      return d;
    };
    var N,
        O = [];
    return d.on("destroy.internal", function (e) {
      d.removeClassToggle(e.reset);
    }), this.setClassToggle = function (e, t) {
      var n = R.get.elements(e);
      return 0 !== n.length && R.type.String(t) && (0 < O.length && d.removeClassToggle(), N = t, O = n, d.on("enter.internal_class leave.internal_class", function (e) {
        var n = "enter" === e.type ? R.addClass : R.removeClass;
        O.forEach(function (e, t) {
          n(e, N);
        });
      })), d;
    }, this.removeClassToggle = function (e) {
      return e && O.forEach(function (e, t) {
        R.removeClass(e, N);
      }), d.off("start.internal_class end.internal_class"), N = void 0, O = [], d;
    }, function () {
      for (var e in h) {
        r.hasOwnProperty(e) || delete h[e];
      }

      for (var t in r) {
        z(t);
      }

      E();
    }(), d;
  };
  var D = {
    defaults: {
      duration: 0,
      offset: 0,
      triggerElement: void 0,
      triggerHook: .5,
      reverse: !0,
      loglevel: 2
    },
    validate: {
      offset: function offset(e) {
        if (e = parseFloat(e), !R.type.Number(e)) throw 0;
        return e;
      },
      triggerElement: function triggerElement(e) {
        if (e = e || void 0) {
          var t = R.get.elements(e)[0];
          if (!t || !t.parentNode) throw 0;
          e = t;
        }

        return e;
      },
      triggerHook: function triggerHook(e) {
        var t = {
          onCenter: .5,
          onEnter: 1,
          onLeave: 0
        };
        if (R.type.Number(e)) e = Math.max(0, Math.min(parseFloat(e), 1));else {
          if (!(e in t)) throw 0;
          e = t[e];
        }
        return e;
      },
      reverse: function reverse(e) {
        return !!e;
      }
    },
    shifts: ["duration", "offset", "triggerHook"]
  };
  _.Scene.addOption = function (e, t, n, r) {
    e in D.defaults || (D.defaults[e] = t, D.validate[e] = n, r && D.shifts.push(e));
  }, _.Scene.extend = function (e) {
    var t = this;
    _.Scene = function () {
      return t.apply(this, arguments), this.$super = R.extend({}, this), e.apply(this, arguments) || this;
    }, R.extend(_.Scene, t), _.Scene.prototype = t.prototype, _.Scene.prototype.constructor = _.Scene;
  }, _.Event = function (e, t, n, r) {
    for (var i in r = r || {}) {
      this[i] = r[i];
    }

    return this.type = e, this.target = this.currentTarget = n, this.namespace = t || "", this.timeStamp = this.timestamp = Date.now(), this;
  };

  var R = _._util = function (s) {
    var n,
        e = {},
        a = function a(e) {
      return parseFloat(e) || 0;
    },
        l = function l(e) {
      return e.currentStyle ? e.currentStyle : s.getComputedStyle(e);
    },
        r = function r(e, t, n, _r) {
      if ((t = t === document ? s : t) === s) _r = !1;else if (!u.DomElement(t)) return 0;
      e = e.charAt(0).toUpperCase() + e.substr(1).toLowerCase();
      var i = (n ? t["offset" + e] || t["outer" + e] : t["client" + e] || t["inner" + e]) || 0;

      if (n && _r) {
        var o = l(t);
        i += "Height" === e ? a(o.marginTop) + a(o.marginBottom) : a(o.marginLeft) + a(o.marginRight);
      }

      return i;
    },
        c = function c(e) {
      return e.replace(/^[^a-z]+([a-z])/g, "$1").replace(/-([a-z])/g, function (e) {
        return e[1].toUpperCase();
      });
    };

    e.extend = function (e) {
      for (e = e || {}, n = 1; n < arguments.length; n++) {
        if (arguments[n]) for (var t in arguments[n]) {
          arguments[n].hasOwnProperty(t) && (e[t] = arguments[n][t]);
        }
      }

      return e;
    }, e.isMarginCollapseType = function (e) {
      return -1 < ["block", "flex", "list-item", "table", "-webkit-box"].indexOf(e);
    };
    var i = 0,
        t = ["ms", "moz", "webkit", "o"],
        o = s.requestAnimationFrame,
        f = s.cancelAnimationFrame;

    for (n = 0; !o && n < 4; ++n) {
      o = s[t[n] + "RequestAnimationFrame"], f = s[t[n] + "CancelAnimationFrame"] || s[t[n] + "CancelRequestAnimationFrame"];
    }

    o || (o = function o(e) {
      var t = new Date().getTime(),
          n = Math.max(0, 16 - (t - i)),
          r = s.setTimeout(function () {
        e(t + n);
      }, n);
      return i = t + n, r;
    }), f || (f = function f(e) {
      s.clearTimeout(e);
    }), e.rAF = o.bind(s), e.cAF = f.bind(s);

    var u = e.type = function (e) {
      return Object.prototype.toString.call(e).replace(/^\[object (.+)\]$/, "$1").toLowerCase();
    };

    u.String = function (e) {
      return "string" === u(e);
    }, u.Function = function (e) {
      return "function" === u(e);
    }, u.Array = function (e) {
      return Array.isArray(e);
    }, u.Number = function (e) {
      return !u.Array(e) && 0 <= e - parseFloat(e) + 1;
    }, u.DomElement = function (e) {
      return "object" == (typeof HTMLElement === "undefined" ? "undefined" : _typeof(HTMLElement)) || "function" == typeof HTMLElement ? e instanceof HTMLElement || e instanceof SVGElement : e && "object" == _typeof(e) && null !== e && 1 === e.nodeType && "string" == typeof e.nodeName;
    };
    var d = e.get = {};
    return d.elements = function (e) {
      var t = [];
      if (u.String(e)) try {
        e = document.querySelectorAll(e);
      } catch (e) {
        return t;
      }
      if ("nodelist" === u(e) || u.Array(e) || e instanceof NodeList) for (var n = 0, r = t.length = e.length; n < r; n++) {
        var i = e[n];
        t[n] = u.DomElement(i) ? i : d.elements(i);
      } else (u.DomElement(e) || e === document || e === s) && (t = [e]);
      return t;
    }, d.scrollTop = function (e) {
      return e && "number" == typeof e.scrollTop ? e.scrollTop : s.pageYOffset || 0;
    }, d.scrollLeft = function (e) {
      return e && "number" == typeof e.scrollLeft ? e.scrollLeft : s.pageXOffset || 0;
    }, d.width = function (e, t, n) {
      return r("width", e, t, n);
    }, d.height = function (e, t, n) {
      return r("height", e, t, n);
    }, d.offset = function (e, t) {
      var n = {
        top: 0,
        left: 0
      };

      if (e && e.getBoundingClientRect) {
        var r = e.getBoundingClientRect();
        n.top = r.top, n.left = r.left, t || (n.top += d.scrollTop(), n.left += d.scrollLeft());
      }

      return n;
    }, e.addClass = function (e, t) {
      t && (e.classList ? e.classList.add(t) : e.className += " " + t);
    }, e.removeClass = function (e, t) {
      t && (e.classList ? e.classList.remove(t) : e.className = e.className.replace(RegExp("(^|\\b)" + t.split(" ").join("|") + "(\\b|$)", "gi"), " "));
    }, e.css = function (e, t) {
      if (u.String(t)) return l(e)[c(t)];

      if (u.Array(t)) {
        var n = {},
            r = l(e);
        return t.forEach(function (e, t) {
          n[e] = r[c(e)];
        }), n;
      }

      for (var i in t) {
        var o = t[i];
        o == parseFloat(o) && (o += "px"), e.style[c(i)] = o;
      }
    }, e;
  }(window || {});

  return _;
});
// threejs.org/license
'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var THREE = {
  REVISION: "71"
};
"object" === (typeof module === "undefined" ? "undefined" : _typeof(module)) && (module.exports = THREE);
void 0 === Math.sign && (Math.sign = function (a) {
  return 0 > a ? -1 : 0 < a ? 1 : +a;
});

THREE.log = function () {
  console.log.apply(console, arguments);
};

THREE.warn = function () {
  console.warn.apply(console, arguments);
};

THREE.error = function () {
  console.error.apply(console, arguments);
};

THREE.MOUSE = {
  LEFT: 0,
  MIDDLE: 1,
  RIGHT: 2
};
THREE.CullFaceNone = 0;
THREE.CullFaceBack = 1;
THREE.CullFaceFront = 2;
THREE.CullFaceFrontBack = 3;
THREE.FrontFaceDirectionCW = 0;
THREE.FrontFaceDirectionCCW = 1;
THREE.BasicShadowMap = 0;
THREE.PCFShadowMap = 1;
THREE.PCFSoftShadowMap = 2;
THREE.FrontSide = 0;
THREE.BackSide = 1;
THREE.DoubleSide = 2;
THREE.NoShading = 0;
THREE.FlatShading = 1;
THREE.SmoothShading = 2;
THREE.NoColors = 0;
THREE.FaceColors = 1;
THREE.VertexColors = 2;
THREE.NoBlending = 0;
THREE.NormalBlending = 1;
THREE.AdditiveBlending = 2;
THREE.SubtractiveBlending = 3;
THREE.MultiplyBlending = 4;
THREE.CustomBlending = 5;
THREE.AddEquation = 100;
THREE.SubtractEquation = 101;
THREE.ReverseSubtractEquation = 102;
THREE.MinEquation = 103;
THREE.MaxEquation = 104;
THREE.ZeroFactor = 200;
THREE.OneFactor = 201;
THREE.SrcColorFactor = 202;
THREE.OneMinusSrcColorFactor = 203;
THREE.SrcAlphaFactor = 204;
THREE.OneMinusSrcAlphaFactor = 205;
THREE.DstAlphaFactor = 206;
THREE.OneMinusDstAlphaFactor = 207;
THREE.DstColorFactor = 208;
THREE.OneMinusDstColorFactor = 209;
THREE.SrcAlphaSaturateFactor = 210;
THREE.MultiplyOperation = 0;
THREE.MixOperation = 1;
THREE.AddOperation = 2;
THREE.UVMapping = 300;
THREE.CubeReflectionMapping = 301;
THREE.CubeRefractionMapping = 302;
THREE.EquirectangularReflectionMapping = 303;
THREE.EquirectangularRefractionMapping = 304;
THREE.SphericalReflectionMapping = 305;
THREE.RepeatWrapping = 1E3;
THREE.ClampToEdgeWrapping = 1001;
THREE.MirroredRepeatWrapping = 1002;
THREE.NearestFilter = 1003;
THREE.NearestMipMapNearestFilter = 1004;
THREE.NearestMipMapLinearFilter = 1005;
THREE.LinearFilter = 1006;
THREE.LinearMipMapNearestFilter = 1007;
THREE.LinearMipMapLinearFilter = 1008;
THREE.UnsignedByteType = 1009;
THREE.ByteType = 1010;
THREE.ShortType = 1011;
THREE.UnsignedShortType = 1012;
THREE.IntType = 1013;
THREE.UnsignedIntType = 1014;
THREE.FloatType = 1015;
THREE.HalfFloatType = 1025;
THREE.UnsignedShort4444Type = 1016;
THREE.UnsignedShort5551Type = 1017;
THREE.UnsignedShort565Type = 1018;
THREE.AlphaFormat = 1019;
THREE.RGBFormat = 1020;
THREE.RGBAFormat = 1021;
THREE.LuminanceFormat = 1022;
THREE.LuminanceAlphaFormat = 1023;
THREE.RGBEFormat = THREE.RGBAFormat;
THREE.RGB_S3TC_DXT1_Format = 2001;
THREE.RGBA_S3TC_DXT1_Format = 2002;
THREE.RGBA_S3TC_DXT3_Format = 2003;
THREE.RGBA_S3TC_DXT5_Format = 2004;
THREE.RGB_PVRTC_4BPPV1_Format = 2100;
THREE.RGB_PVRTC_2BPPV1_Format = 2101;
THREE.RGBA_PVRTC_4BPPV1_Format = 2102;
THREE.RGBA_PVRTC_2BPPV1_Format = 2103;

THREE.Projector = function () {
  THREE.error("THREE.Projector has been moved to /examples/js/renderers/Projector.js.");

  this.projectVector = function (a, b) {
    THREE.warn("THREE.Projector: .projectVector() is now vector.project().");
    a.project(b);
  };

  this.unprojectVector = function (a, b) {
    THREE.warn("THREE.Projector: .unprojectVector() is now vector.unproject().");
    a.unproject(b);
  };

  this.pickingRay = function (a, b) {
    THREE.error("THREE.Projector: .pickingRay() is now raycaster.setFromCamera().");
  };
};

THREE.CanvasRenderer = function () {
  THREE.error("THREE.CanvasRenderer has been moved to /examples/js/renderers/CanvasRenderer.js");
  this.domElement = document.createElement("canvas");

  this.clear = function () {};

  this.render = function () {};

  this.setClearColor = function () {};

  this.setSize = function () {};
};

THREE.Color = function (a) {
  return 3 === arguments.length ? this.setRGB(arguments[0], arguments[1], arguments[2]) : this.set(a);
};

THREE.Color.prototype = {
  constructor: THREE.Color,
  r: 1,
  g: 1,
  b: 1,
  set: function set(a) {
    a instanceof THREE.Color ? this.copy(a) : "number" === typeof a ? this.setHex(a) : "string" === typeof a && this.setStyle(a);
    return this;
  },
  setHex: function setHex(a) {
    a = Math.floor(a);
    this.r = (a >> 16 & 255) / 255;
    this.g = (a >> 8 & 255) / 255;
    this.b = (a & 255) / 255;
    return this;
  },
  setRGB: function setRGB(a, b, c) {
    this.r = a;
    this.g = b;
    this.b = c;
    return this;
  },
  setHSL: function setHSL(a, b, c) {
    if (0 === b) this.r = this.g = this.b = c;else {
      var d = function d(a, b, c) {
        0 > c && (c += 1);
        1 < c && (c -= 1);
        return c < 1 / 6 ? a + 6 * (b - a) * c : .5 > c ? b : c < 2 / 3 ? a + 6 * (b - a) * (2 / 3 - c) : a;
      };

      b = .5 >= c ? c * (1 + b) : c + b - c * b;
      c = 2 * c - b;
      this.r = d(c, b, a + 1 / 3);
      this.g = d(c, b, a);
      this.b = d(c, b, a - 1 / 3);
    }
    return this;
  },
  setStyle: function setStyle(a) {
    if (/^rgb\((\d+), ?(\d+), ?(\d+)\)$/i.test(a)) return a = /^rgb\((\d+), ?(\d+), ?(\d+)\)$/i.exec(a), this.r = Math.min(255, parseInt(a[1], 10)) / 255, this.g = Math.min(255, parseInt(a[2], 10)) / 255, this.b = Math.min(255, parseInt(a[3], 10)) / 255, this;
    if (/^rgb\((\d+)\%, ?(\d+)\%, ?(\d+)\%\)$/i.test(a)) return a = /^rgb\((\d+)\%, ?(\d+)\%, ?(\d+)\%\)$/i.exec(a), this.r = Math.min(100, parseInt(a[1], 10)) / 100, this.g = Math.min(100, parseInt(a[2], 10)) / 100, this.b = Math.min(100, parseInt(a[3], 10)) / 100, this;
    if (/^\#([0-9a-f]{6})$/i.test(a)) return a = /^\#([0-9a-f]{6})$/i.exec(a), this.setHex(parseInt(a[1], 16)), this;
    if (/^\#([0-9a-f])([0-9a-f])([0-9a-f])$/i.test(a)) return a = /^\#([0-9a-f])([0-9a-f])([0-9a-f])$/i.exec(a), this.setHex(parseInt(a[1] + a[1] + a[2] + a[2] + a[3] + a[3], 16)), this;
    if (/^(\w+)$/i.test(a)) return this.setHex(THREE.ColorKeywords[a]), this;
  },
  copy: function copy(a) {
    this.r = a.r;
    this.g = a.g;
    this.b = a.b;
    return this;
  },
  copyGammaToLinear: function copyGammaToLinear(a, b) {
    void 0 === b && (b = 2);
    this.r = Math.pow(a.r, b);
    this.g = Math.pow(a.g, b);
    this.b = Math.pow(a.b, b);
    return this;
  },
  copyLinearToGamma: function copyLinearToGamma(a, b) {
    void 0 === b && (b = 2);
    var c = 0 < b ? 1 / b : 1;
    this.r = Math.pow(a.r, c);
    this.g = Math.pow(a.g, c);
    this.b = Math.pow(a.b, c);
    return this;
  },
  convertGammaToLinear: function convertGammaToLinear() {
    var a = this.r,
        b = this.g,
        c = this.b;
    this.r = a * a;
    this.g = b * b;
    this.b = c * c;
    return this;
  },
  convertLinearToGamma: function convertLinearToGamma() {
    this.r = Math.sqrt(this.r);
    this.g = Math.sqrt(this.g);
    this.b = Math.sqrt(this.b);
    return this;
  },
  getHex: function getHex() {
    return 255 * this.r << 16 ^ 255 * this.g << 8 ^ 255 * this.b << 0;
  },
  getHexString: function getHexString() {
    return ("000000" + this.getHex().toString(16)).slice(-6);
  },
  getHSL: function getHSL(a) {
    a = a || {
      h: 0,
      s: 0,
      l: 0
    };
    var b = this.r,
        c = this.g,
        d = this.b,
        e = Math.max(b, c, d),
        f = Math.min(b, c, d),
        g,
        h = (f + e) / 2;
    if (f === e) f = g = 0;else {
      var k = e - f,
          f = .5 >= h ? k / (e + f) : k / (2 - e - f);

      switch (e) {
        case b:
          g = (c - d) / k + (c < d ? 6 : 0);
          break;

        case c:
          g = (d - b) / k + 2;
          break;

        case d:
          g = (b - c) / k + 4;
      }

      g /= 6;
    }
    a.h = g;
    a.s = f;
    a.l = h;
    return a;
  },
  getStyle: function getStyle() {
    return "rgb(" + (255 * this.r | 0) + "," + (255 * this.g | 0) + "," + (255 * this.b | 0) + ")";
  },
  offsetHSL: function offsetHSL(a, b, c) {
    var d = this.getHSL();
    d.h += a;
    d.s += b;
    d.l += c;
    this.setHSL(d.h, d.s, d.l);
    return this;
  },
  add: function add(a) {
    this.r += a.r;
    this.g += a.g;
    this.b += a.b;
    return this;
  },
  addColors: function addColors(a, b) {
    this.r = a.r + b.r;
    this.g = a.g + b.g;
    this.b = a.b + b.b;
    return this;
  },
  addScalar: function addScalar(a) {
    this.r += a;
    this.g += a;
    this.b += a;
    return this;
  },
  multiply: function multiply(a) {
    this.r *= a.r;
    this.g *= a.g;
    this.b *= a.b;
    return this;
  },
  multiplyScalar: function multiplyScalar(a) {
    this.r *= a;
    this.g *= a;
    this.b *= a;
    return this;
  },
  lerp: function lerp(a, b) {
    this.r += (a.r - this.r) * b;
    this.g += (a.g - this.g) * b;
    this.b += (a.b - this.b) * b;
    return this;
  },
  equals: function equals(a) {
    return a.r === this.r && a.g === this.g && a.b === this.b;
  },
  fromArray: function fromArray(a) {
    this.r = a[0];
    this.g = a[1];
    this.b = a[2];
    return this;
  },
  toArray: function toArray(a, b) {
    void 0 === a && (a = []);
    void 0 === b && (b = 0);
    a[b] = this.r;
    a[b + 1] = this.g;
    a[b + 2] = this.b;
    return a;
  },
  clone: function clone() {
    return new THREE.Color().setRGB(this.r, this.g, this.b);
  }
};
THREE.ColorKeywords = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};

THREE.Quaternion = function (a, b, c, d) {
  this._x = a || 0;
  this._y = b || 0;
  this._z = c || 0;
  this._w = void 0 !== d ? d : 1;
};

THREE.Quaternion.prototype = {
  constructor: THREE.Quaternion,
  _x: 0,
  _y: 0,
  _z: 0,
  _w: 0,

  get x() {
    return this._x;
  },

  set x(a) {
    this._x = a;
    this.onChangeCallback();
  },

  get y() {
    return this._y;
  },

  set y(a) {
    this._y = a;
    this.onChangeCallback();
  },

  get z() {
    return this._z;
  },

  set z(a) {
    this._z = a;
    this.onChangeCallback();
  },

  get w() {
    return this._w;
  },

  set w(a) {
    this._w = a;
    this.onChangeCallback();
  },

  set: function set(a, b, c, d) {
    this._x = a;
    this._y = b;
    this._z = c;
    this._w = d;
    this.onChangeCallback();
    return this;
  },
  copy: function copy(a) {
    this._x = a.x;
    this._y = a.y;
    this._z = a.z;
    this._w = a.w;
    this.onChangeCallback();
    return this;
  },
  setFromEuler: function setFromEuler(a, b) {
    if (!1 === a instanceof THREE.Euler) throw Error("THREE.Quaternion: .setFromEuler() now expects a Euler rotation rather than a Vector3 and order.");
    var c = Math.cos(a._x / 2),
        d = Math.cos(a._y / 2),
        e = Math.cos(a._z / 2),
        f = Math.sin(a._x / 2),
        g = Math.sin(a._y / 2),
        h = Math.sin(a._z / 2);
    "XYZ" === a.order ? (this._x = f * d * e + c * g * h, this._y = c * g * e - f * d * h, this._z = c * d * h + f * g * e, this._w = c * d * e - f * g * h) : "YXZ" === a.order ? (this._x = f * d * e + c * g * h, this._y = c * g * e - f * d * h, this._z = c * d * h - f * g * e, this._w = c * d * e + f * g * h) : "ZXY" === a.order ? (this._x = f * d * e - c * g * h, this._y = c * g * e + f * d * h, this._z = c * d * h + f * g * e, this._w = c * d * e - f * g * h) : "ZYX" === a.order ? (this._x = f * d * e - c * g * h, this._y = c * g * e + f * d * h, this._z = c * d * h - f * g * e, this._w = c * d * e + f * g * h) : "YZX" === a.order ? (this._x = f * d * e + c * g * h, this._y = c * g * e + f * d * h, this._z = c * d * h - f * g * e, this._w = c * d * e - f * g * h) : "XZY" === a.order && (this._x = f * d * e - c * g * h, this._y = c * g * e - f * d * h, this._z = c * d * h + f * g * e, this._w = c * d * e + f * g * h);
    if (!1 !== b) this.onChangeCallback();
    return this;
  },
  setFromAxisAngle: function setFromAxisAngle(a, b) {
    var c = b / 2,
        d = Math.sin(c);
    this._x = a.x * d;
    this._y = a.y * d;
    this._z = a.z * d;
    this._w = Math.cos(c);
    this.onChangeCallback();
    return this;
  },
  setFromRotationMatrix: function setFromRotationMatrix(a) {
    var b = a.elements,
        c = b[0];
    a = b[4];
    var d = b[8],
        e = b[1],
        f = b[5],
        g = b[9],
        h = b[2],
        k = b[6],
        b = b[10],
        l = c + f + b;
    0 < l ? (c = .5 / Math.sqrt(l + 1), this._w = .25 / c, this._x = (k - g) * c, this._y = (d - h) * c, this._z = (e - a) * c) : c > f && c > b ? (c = 2 * Math.sqrt(1 + c - f - b), this._w = (k - g) / c, this._x = .25 * c, this._y = (a + e) / c, this._z = (d + h) / c) : f > b ? (c = 2 * Math.sqrt(1 + f - c - b), this._w = (d - h) / c, this._x = (a + e) / c, this._y = .25 * c, this._z = (g + k) / c) : (c = 2 * Math.sqrt(1 + b - c - f), this._w = (e - a) / c, this._x = (d + h) / c, this._y = (g + k) / c, this._z = .25 * c);
    this.onChangeCallback();
    return this;
  },
  setFromUnitVectors: function () {
    var a, b;
    return function (c, d) {
      void 0 === a && (a = new THREE.Vector3());
      b = c.dot(d) + 1;
      1E-6 > b ? (b = 0, Math.abs(c.x) > Math.abs(c.z) ? a.set(-c.y, c.x, 0) : a.set(0, -c.z, c.y)) : a.crossVectors(c, d);
      this._x = a.x;
      this._y = a.y;
      this._z = a.z;
      this._w = b;
      this.normalize();
      return this;
    };
  }(),
  inverse: function inverse() {
    this.conjugate().normalize();
    return this;
  },
  conjugate: function conjugate() {
    this._x *= -1;
    this._y *= -1;
    this._z *= -1;
    this.onChangeCallback();
    return this;
  },
  dot: function dot(a) {
    return this._x * a._x + this._y * a._y + this._z * a._z + this._w * a._w;
  },
  lengthSq: function lengthSq() {
    return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
  },
  length: function length() {
    return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
  },
  normalize: function normalize() {
    var a = this.length();
    0 === a ? (this._z = this._y = this._x = 0, this._w = 1) : (a = 1 / a, this._x *= a, this._y *= a, this._z *= a, this._w *= a);
    this.onChangeCallback();
    return this;
  },
  multiply: function multiply(a, b) {
    return void 0 !== b ? (THREE.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."), this.multiplyQuaternions(a, b)) : this.multiplyQuaternions(this, a);
  },
  multiplyQuaternions: function multiplyQuaternions(a, b) {
    var c = a._x,
        d = a._y,
        e = a._z,
        f = a._w,
        g = b._x,
        h = b._y,
        k = b._z,
        l = b._w;
    this._x = c * l + f * g + d * k - e * h;
    this._y = d * l + f * h + e * g - c * k;
    this._z = e * l + f * k + c * h - d * g;
    this._w = f * l - c * g - d * h - e * k;
    this.onChangeCallback();
    return this;
  },
  multiplyVector3: function multiplyVector3(a) {
    THREE.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead.");
    return a.applyQuaternion(this);
  },
  slerp: function slerp(a, b) {
    if (0 === b) return this;
    if (1 === b) return this.copy(a);
    var c = this._x,
        d = this._y,
        e = this._z,
        f = this._w,
        g = f * a._w + c * a._x + d * a._y + e * a._z;
    0 > g ? (this._w = -a._w, this._x = -a._x, this._y = -a._y, this._z = -a._z, g = -g) : this.copy(a);
    if (1 <= g) return this._w = f, this._x = c, this._y = d, this._z = e, this;
    var h = Math.acos(g),
        k = Math.sqrt(1 - g * g);
    if (.001 > Math.abs(k)) return this._w = .5 * (f + this._w), this._x = .5 * (c + this._x), this._y = .5 * (d + this._y), this._z = .5 * (e + this._z), this;
    g = Math.sin((1 - b) * h) / k;
    h = Math.sin(b * h) / k;
    this._w = f * g + this._w * h;
    this._x = c * g + this._x * h;
    this._y = d * g + this._y * h;
    this._z = e * g + this._z * h;
    this.onChangeCallback();
    return this;
  },
  equals: function equals(a) {
    return a._x === this._x && a._y === this._y && a._z === this._z && a._w === this._w;
  },
  fromArray: function fromArray(a, b) {
    void 0 === b && (b = 0);
    this._x = a[b];
    this._y = a[b + 1];
    this._z = a[b + 2];
    this._w = a[b + 3];
    this.onChangeCallback();
    return this;
  },
  toArray: function toArray(a, b) {
    void 0 === a && (a = []);
    void 0 === b && (b = 0);
    a[b] = this._x;
    a[b + 1] = this._y;
    a[b + 2] = this._z;
    a[b + 3] = this._w;
    return a;
  },
  onChange: function onChange(a) {
    this.onChangeCallback = a;
    return this;
  },
  onChangeCallback: function onChangeCallback() {},
  clone: function clone() {
    return new THREE.Quaternion(this._x, this._y, this._z, this._w);
  }
};

THREE.Quaternion.slerp = function (a, b, c, d) {
  return c.copy(a).slerp(b, d);
};

THREE.Vector2 = function (a, b) {
  this.x = a || 0;
  this.y = b || 0;
};

THREE.Vector2.prototype = {
  constructor: THREE.Vector2,
  set: function set(a, b) {
    this.x = a;
    this.y = b;
    return this;
  },
  setX: function setX(a) {
    this.x = a;
    return this;
  },
  setY: function setY(a) {
    this.y = a;
    return this;
  },
  setComponent: function setComponent(a, b) {
    switch (a) {
      case 0:
        this.x = b;
        break;

      case 1:
        this.y = b;
        break;

      default:
        throw Error("index is out of range: " + a);
    }
  },
  getComponent: function getComponent(a) {
    switch (a) {
      case 0:
        return this.x;

      case 1:
        return this.y;

      default:
        throw Error("index is out of range: " + a);
    }
  },
  copy: function copy(a) {
    this.x = a.x;
    this.y = a.y;
    return this;
  },
  add: function add(a, b) {
    if (void 0 !== b) return THREE.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(a, b);
    this.x += a.x;
    this.y += a.y;
    return this;
  },
  addScalar: function addScalar(a) {
    this.x += a;
    this.y += a;
    return this;
  },
  addVectors: function addVectors(a, b) {
    this.x = a.x + b.x;
    this.y = a.y + b.y;
    return this;
  },
  sub: function sub(a, b) {
    if (void 0 !== b) return THREE.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(a, b);
    this.x -= a.x;
    this.y -= a.y;
    return this;
  },
  subScalar: function subScalar(a) {
    this.x -= a;
    this.y -= a;
    return this;
  },
  subVectors: function subVectors(a, b) {
    this.x = a.x - b.x;
    this.y = a.y - b.y;
    return this;
  },
  multiply: function multiply(a) {
    this.x *= a.x;
    this.y *= a.y;
    return this;
  },
  multiplyScalar: function multiplyScalar(a) {
    this.x *= a;
    this.y *= a;
    return this;
  },
  divide: function divide(a) {
    this.x /= a.x;
    this.y /= a.y;
    return this;
  },
  divideScalar: function divideScalar(a) {
    0 !== a ? (a = 1 / a, this.x *= a, this.y *= a) : this.y = this.x = 0;
    return this;
  },
  min: function min(a) {
    this.x > a.x && (this.x = a.x);
    this.y > a.y && (this.y = a.y);
    return this;
  },
  max: function max(a) {
    this.x < a.x && (this.x = a.x);
    this.y < a.y && (this.y = a.y);
    return this;
  },
  clamp: function clamp(a, b) {
    this.x < a.x ? this.x = a.x : this.x > b.x && (this.x = b.x);
    this.y < a.y ? this.y = a.y : this.y > b.y && (this.y = b.y);
    return this;
  },
  clampScalar: function () {
    var a, b;
    return function (c, d) {
      void 0 === a && (a = new THREE.Vector2(), b = new THREE.Vector2());
      a.set(c, c);
      b.set(d, d);
      return this.clamp(a, b);
    };
  }(),
  floor: function floor() {
    this.x = Math.floor(this.x);
    this.y = Math.floor(this.y);
    return this;
  },
  ceil: function ceil() {
    this.x = Math.ceil(this.x);
    this.y = Math.ceil(this.y);
    return this;
  },
  round: function round() {
    this.x = Math.round(this.x);
    this.y = Math.round(this.y);
    return this;
  },
  roundToZero: function roundToZero() {
    this.x = 0 > this.x ? Math.ceil(this.x) : Math.floor(this.x);
    this.y = 0 > this.y ? Math.ceil(this.y) : Math.floor(this.y);
    return this;
  },
  negate: function negate() {
    this.x = -this.x;
    this.y = -this.y;
    return this;
  },
  dot: function dot(a) {
    return this.x * a.x + this.y * a.y;
  },
  lengthSq: function lengthSq() {
    return this.x * this.x + this.y * this.y;
  },
  length: function length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  },
  normalize: function normalize() {
    return this.divideScalar(this.length());
  },
  distanceTo: function distanceTo(a) {
    return Math.sqrt(this.distanceToSquared(a));
  },
  distanceToSquared: function distanceToSquared(a) {
    var b = this.x - a.x;
    a = this.y - a.y;
    return b * b + a * a;
  },
  setLength: function setLength(a) {
    var b = this.length();
    0 !== b && a !== b && this.multiplyScalar(a / b);
    return this;
  },
  lerp: function lerp(a, b) {
    this.x += (a.x - this.x) * b;
    this.y += (a.y - this.y) * b;
    return this;
  },
  lerpVectors: function lerpVectors(a, b, c) {
    this.subVectors(b, a).multiplyScalar(c).add(a);
    return this;
  },
  equals: function equals(a) {
    return a.x === this.x && a.y === this.y;
  },
  fromArray: function fromArray(a, b) {
    void 0 === b && (b = 0);
    this.x = a[b];
    this.y = a[b + 1];
    return this;
  },
  toArray: function toArray(a, b) {
    void 0 === a && (a = []);
    void 0 === b && (b = 0);
    a[b] = this.x;
    a[b + 1] = this.y;
    return a;
  },
  fromAttribute: function fromAttribute(a, b, c) {
    void 0 === c && (c = 0);
    b = b * a.itemSize + c;
    this.x = a.array[b];
    this.y = a.array[b + 1];
    return this;
  },
  clone: function clone() {
    return new THREE.Vector2(this.x, this.y);
  }
};

THREE.Vector3 = function (a, b, c) {
  this.x = a || 0;
  this.y = b || 0;
  this.z = c || 0;
};

THREE.Vector3.prototype = {
  constructor: THREE.Vector3,
  set: function set(a, b, c) {
    this.x = a;
    this.y = b;
    this.z = c;
    return this;
  },
  setX: function setX(a) {
    this.x = a;
    return this;
  },
  setY: function setY(a) {
    this.y = a;
    return this;
  },
  setZ: function setZ(a) {
    this.z = a;
    return this;
  },
  setComponent: function setComponent(a, b) {
    switch (a) {
      case 0:
        this.x = b;
        break;

      case 1:
        this.y = b;
        break;

      case 2:
        this.z = b;
        break;

      default:
        throw Error("index is out of range: " + a);
    }
  },
  getComponent: function getComponent(a) {
    switch (a) {
      case 0:
        return this.x;

      case 1:
        return this.y;

      case 2:
        return this.z;

      default:
        throw Error("index is out of range: " + a);
    }
  },
  copy: function copy(a) {
    this.x = a.x;
    this.y = a.y;
    this.z = a.z;
    return this;
  },
  add: function add(a, b) {
    if (void 0 !== b) return THREE.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(a, b);
    this.x += a.x;
    this.y += a.y;
    this.z += a.z;
    return this;
  },
  addScalar: function addScalar(a) {
    this.x += a;
    this.y += a;
    this.z += a;
    return this;
  },
  addVectors: function addVectors(a, b) {
    this.x = a.x + b.x;
    this.y = a.y + b.y;
    this.z = a.z + b.z;
    return this;
  },
  sub: function sub(a, b) {
    if (void 0 !== b) return THREE.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(a, b);
    this.x -= a.x;
    this.y -= a.y;
    this.z -= a.z;
    return this;
  },
  subScalar: function subScalar(a) {
    this.x -= a;
    this.y -= a;
    this.z -= a;
    return this;
  },
  subVectors: function subVectors(a, b) {
    this.x = a.x - b.x;
    this.y = a.y - b.y;
    this.z = a.z - b.z;
    return this;
  },
  multiply: function multiply(a, b) {
    if (void 0 !== b) return THREE.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."), this.multiplyVectors(a, b);
    this.x *= a.x;
    this.y *= a.y;
    this.z *= a.z;
    return this;
  },
  multiplyScalar: function multiplyScalar(a) {
    this.x *= a;
    this.y *= a;
    this.z *= a;
    return this;
  },
  multiplyVectors: function multiplyVectors(a, b) {
    this.x = a.x * b.x;
    this.y = a.y * b.y;
    this.z = a.z * b.z;
    return this;
  },
  applyEuler: function () {
    var a;
    return function (b) {
      !1 === b instanceof THREE.Euler && THREE.error("THREE.Vector3: .applyEuler() now expects a Euler rotation rather than a Vector3 and order.");
      void 0 === a && (a = new THREE.Quaternion());
      this.applyQuaternion(a.setFromEuler(b));
      return this;
    };
  }(),
  applyAxisAngle: function () {
    var a;
    return function (b, c) {
      void 0 === a && (a = new THREE.Quaternion());
      this.applyQuaternion(a.setFromAxisAngle(b, c));
      return this;
    };
  }(),
  applyMatrix3: function applyMatrix3(a) {
    var b = this.x,
        c = this.y,
        d = this.z;
    a = a.elements;
    this.x = a[0] * b + a[3] * c + a[6] * d;
    this.y = a[1] * b + a[4] * c + a[7] * d;
    this.z = a[2] * b + a[5] * c + a[8] * d;
    return this;
  },
  applyMatrix4: function applyMatrix4(a) {
    var b = this.x,
        c = this.y,
        d = this.z;
    a = a.elements;
    this.x = a[0] * b + a[4] * c + a[8] * d + a[12];
    this.y = a[1] * b + a[5] * c + a[9] * d + a[13];
    this.z = a[2] * b + a[6] * c + a[10] * d + a[14];
    return this;
  },
  applyProjection: function applyProjection(a) {
    var b = this.x,
        c = this.y,
        d = this.z;
    a = a.elements;
    var e = 1 / (a[3] * b + a[7] * c + a[11] * d + a[15]);
    this.x = (a[0] * b + a[4] * c + a[8] * d + a[12]) * e;
    this.y = (a[1] * b + a[5] * c + a[9] * d + a[13]) * e;
    this.z = (a[2] * b + a[6] * c + a[10] * d + a[14]) * e;
    return this;
  },
  applyQuaternion: function applyQuaternion(a) {
    var b = this.x,
        c = this.y,
        d = this.z,
        e = a.x,
        f = a.y,
        g = a.z;
    a = a.w;
    var h = a * b + f * d - g * c,
        k = a * c + g * b - e * d,
        l = a * d + e * c - f * b,
        b = -e * b - f * c - g * d;
    this.x = h * a + b * -e + k * -g - l * -f;
    this.y = k * a + b * -f + l * -e - h * -g;
    this.z = l * a + b * -g + h * -f - k * -e;
    return this;
  },
  project: function () {
    var a;
    return function (b) {
      void 0 === a && (a = new THREE.Matrix4());
      a.multiplyMatrices(b.projectionMatrix, a.getInverse(b.matrixWorld));
      return this.applyProjection(a);
    };
  }(),
  unproject: function () {
    var a;
    return function (b) {
      void 0 === a && (a = new THREE.Matrix4());
      a.multiplyMatrices(b.matrixWorld, a.getInverse(b.projectionMatrix));
      return this.applyProjection(a);
    };
  }(),
  transformDirection: function transformDirection(a) {
    var b = this.x,
        c = this.y,
        d = this.z;
    a = a.elements;
    this.x = a[0] * b + a[4] * c + a[8] * d;
    this.y = a[1] * b + a[5] * c + a[9] * d;
    this.z = a[2] * b + a[6] * c + a[10] * d;
    this.normalize();
    return this;
  },
  divide: function divide(a) {
    this.x /= a.x;
    this.y /= a.y;
    this.z /= a.z;
    return this;
  },
  divideScalar: function divideScalar(a) {
    0 !== a ? (a = 1 / a, this.x *= a, this.y *= a, this.z *= a) : this.z = this.y = this.x = 0;
    return this;
  },
  min: function min(a) {
    this.x > a.x && (this.x = a.x);
    this.y > a.y && (this.y = a.y);
    this.z > a.z && (this.z = a.z);
    return this;
  },
  max: function max(a) {
    this.x < a.x && (this.x = a.x);
    this.y < a.y && (this.y = a.y);
    this.z < a.z && (this.z = a.z);
    return this;
  },
  clamp: function clamp(a, b) {
    this.x < a.x ? this.x = a.x : this.x > b.x && (this.x = b.x);
    this.y < a.y ? this.y = a.y : this.y > b.y && (this.y = b.y);
    this.z < a.z ? this.z = a.z : this.z > b.z && (this.z = b.z);
    return this;
  },
  clampScalar: function () {
    var a, b;
    return function (c, d) {
      void 0 === a && (a = new THREE.Vector3(), b = new THREE.Vector3());
      a.set(c, c, c);
      b.set(d, d, d);
      return this.clamp(a, b);
    };
  }(),
  floor: function floor() {
    this.x = Math.floor(this.x);
    this.y = Math.floor(this.y);
    this.z = Math.floor(this.z);
    return this;
  },
  ceil: function ceil() {
    this.x = Math.ceil(this.x);
    this.y = Math.ceil(this.y);
    this.z = Math.ceil(this.z);
    return this;
  },
  round: function round() {
    this.x = Math.round(this.x);
    this.y = Math.round(this.y);
    this.z = Math.round(this.z);
    return this;
  },
  roundToZero: function roundToZero() {
    this.x = 0 > this.x ? Math.ceil(this.x) : Math.floor(this.x);
    this.y = 0 > this.y ? Math.ceil(this.y) : Math.floor(this.y);
    this.z = 0 > this.z ? Math.ceil(this.z) : Math.floor(this.z);
    return this;
  },
  negate: function negate() {
    this.x = -this.x;
    this.y = -this.y;
    this.z = -this.z;
    return this;
  },
  dot: function dot(a) {
    return this.x * a.x + this.y * a.y + this.z * a.z;
  },
  lengthSq: function lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  },
  length: function length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  },
  lengthManhattan: function lengthManhattan() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  },
  normalize: function normalize() {
    return this.divideScalar(this.length());
  },
  setLength: function setLength(a) {
    var b = this.length();
    0 !== b && a !== b && this.multiplyScalar(a / b);
    return this;
  },
  lerp: function lerp(a, b) {
    this.x += (a.x - this.x) * b;
    this.y += (a.y - this.y) * b;
    this.z += (a.z - this.z) * b;
    return this;
  },
  lerpVectors: function lerpVectors(a, b, c) {
    this.subVectors(b, a).multiplyScalar(c).add(a);
    return this;
  },
  cross: function cross(a, b) {
    if (void 0 !== b) return THREE.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."), this.crossVectors(a, b);
    var c = this.x,
        d = this.y,
        e = this.z;
    this.x = d * a.z - e * a.y;
    this.y = e * a.x - c * a.z;
    this.z = c * a.y - d * a.x;
    return this;
  },
  crossVectors: function crossVectors(a, b) {
    var c = a.x,
        d = a.y,
        e = a.z,
        f = b.x,
        g = b.y,
        h = b.z;
    this.x = d * h - e * g;
    this.y = e * f - c * h;
    this.z = c * g - d * f;
    return this;
  },
  projectOnVector: function () {
    var a, b;
    return function (c) {
      void 0 === a && (a = new THREE.Vector3());
      a.copy(c).normalize();
      b = this.dot(a);
      return this.copy(a).multiplyScalar(b);
    };
  }(),
  projectOnPlane: function () {
    var a;
    return function (b) {
      void 0 === a && (a = new THREE.Vector3());
      a.copy(this).projectOnVector(b);
      return this.sub(a);
    };
  }(),
  reflect: function () {
    var a;
    return function (b) {
      void 0 === a && (a = new THREE.Vector3());
      return this.sub(a.copy(b).multiplyScalar(2 * this.dot(b)));
    };
  }(),
  angleTo: function angleTo(a) {
    a = this.dot(a) / (this.length() * a.length());
    return Math.acos(THREE.Math.clamp(a, -1, 1));
  },
  distanceTo: function distanceTo(a) {
    return Math.sqrt(this.distanceToSquared(a));
  },
  distanceToSquared: function distanceToSquared(a) {
    var b = this.x - a.x,
        c = this.y - a.y;
    a = this.z - a.z;
    return b * b + c * c + a * a;
  },
  setEulerFromRotationMatrix: function setEulerFromRotationMatrix(a, b) {
    THREE.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.");
  },
  setEulerFromQuaternion: function setEulerFromQuaternion(a, b) {
    THREE.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.");
  },
  getPositionFromMatrix: function getPositionFromMatrix(a) {
    THREE.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition().");
    return this.setFromMatrixPosition(a);
  },
  getScaleFromMatrix: function getScaleFromMatrix(a) {
    THREE.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale().");
    return this.setFromMatrixScale(a);
  },
  getColumnFromMatrix: function getColumnFromMatrix(a, b) {
    THREE.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn().");
    return this.setFromMatrixColumn(a, b);
  },
  setFromMatrixPosition: function setFromMatrixPosition(a) {
    this.x = a.elements[12];
    this.y = a.elements[13];
    this.z = a.elements[14];
    return this;
  },
  setFromMatrixScale: function setFromMatrixScale(a) {
    var b = this.set(a.elements[0], a.elements[1], a.elements[2]).length(),
        c = this.set(a.elements[4], a.elements[5], a.elements[6]).length();
    a = this.set(a.elements[8], a.elements[9], a.elements[10]).length();
    this.x = b;
    this.y = c;
    this.z = a;
    return this;
  },
  setFromMatrixColumn: function setFromMatrixColumn(a, b) {
    var c = 4 * a,
        d = b.elements;
    this.x = d[c];
    this.y = d[c + 1];
    this.z = d[c + 2];
    return this;
  },
  equals: function equals(a) {
    return a.x === this.x && a.y === this.y && a.z === this.z;
  },
  fromArray: function fromArray(a, b) {
    void 0 === b && (b = 0);
    this.x = a[b];
    this.y = a[b + 1];
    this.z = a[b + 2];
    return this;
  },
  toArray: function toArray(a, b) {
    void 0 === a && (a = []);
    void 0 === b && (b = 0);
    a[b] = this.x;
    a[b + 1] = this.y;
    a[b + 2] = this.z;
    return a;
  },
  fromAttribute: function fromAttribute(a, b, c) {
    void 0 === c && (c = 0);
    b = b * a.itemSize + c;
    this.x = a.array[b];
    this.y = a.array[b + 1];
    this.z = a.array[b + 2];
    return this;
  },
  clone: function clone() {
    return new THREE.Vector3(this.x, this.y, this.z);
  }
};

THREE.Vector4 = function (a, b, c, d) {
  this.x = a || 0;
  this.y = b || 0;
  this.z = c || 0;
  this.w = void 0 !== d ? d : 1;
};

THREE.Vector4.prototype = {
  constructor: THREE.Vector4,
  set: function set(a, b, c, d) {
    this.x = a;
    this.y = b;
    this.z = c;
    this.w = d;
    return this;
  },
  setX: function setX(a) {
    this.x = a;
    return this;
  },
  setY: function setY(a) {
    this.y = a;
    return this;
  },
  setZ: function setZ(a) {
    this.z = a;
    return this;
  },
  setW: function setW(a) {
    this.w = a;
    return this;
  },
  setComponent: function setComponent(a, b) {
    switch (a) {
      case 0:
        this.x = b;
        break;

      case 1:
        this.y = b;
        break;

      case 2:
        this.z = b;
        break;

      case 3:
        this.w = b;
        break;

      default:
        throw Error("index is out of range: " + a);
    }
  },
  getComponent: function getComponent(a) {
    switch (a) {
      case 0:
        return this.x;

      case 1:
        return this.y;

      case 2:
        return this.z;

      case 3:
        return this.w;

      default:
        throw Error("index is out of range: " + a);
    }
  },
  copy: function copy(a) {
    this.x = a.x;
    this.y = a.y;
    this.z = a.z;
    this.w = void 0 !== a.w ? a.w : 1;
    return this;
  },
  add: function add(a, b) {
    if (void 0 !== b) return THREE.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(a, b);
    this.x += a.x;
    this.y += a.y;
    this.z += a.z;
    this.w += a.w;
    return this;
  },
  addScalar: function addScalar(a) {
    this.x += a;
    this.y += a;
    this.z += a;
    this.w += a;
    return this;
  },
  addVectors: function addVectors(a, b) {
    this.x = a.x + b.x;
    this.y = a.y + b.y;
    this.z = a.z + b.z;
    this.w = a.w + b.w;
    return this;
  },
  sub: function sub(a, b) {
    if (void 0 !== b) return THREE.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(a, b);
    this.x -= a.x;
    this.y -= a.y;
    this.z -= a.z;
    this.w -= a.w;
    return this;
  },
  subScalar: function subScalar(a) {
    this.x -= a;
    this.y -= a;
    this.z -= a;
    this.w -= a;
    return this;
  },
  subVectors: function subVectors(a, b) {
    this.x = a.x - b.x;
    this.y = a.y - b.y;
    this.z = a.z - b.z;
    this.w = a.w - b.w;
    return this;
  },
  multiplyScalar: function multiplyScalar(a) {
    this.x *= a;
    this.y *= a;
    this.z *= a;
    this.w *= a;
    return this;
  },
  applyMatrix4: function applyMatrix4(a) {
    var b = this.x,
        c = this.y,
        d = this.z,
        e = this.w;
    a = a.elements;
    this.x = a[0] * b + a[4] * c + a[8] * d + a[12] * e;
    this.y = a[1] * b + a[5] * c + a[9] * d + a[13] * e;
    this.z = a[2] * b + a[6] * c + a[10] * d + a[14] * e;
    this.w = a[3] * b + a[7] * c + a[11] * d + a[15] * e;
    return this;
  },
  divideScalar: function divideScalar(a) {
    0 !== a ? (a = 1 / a, this.x *= a, this.y *= a, this.z *= a, this.w *= a) : (this.z = this.y = this.x = 0, this.w = 1);
    return this;
  },
  setAxisAngleFromQuaternion: function setAxisAngleFromQuaternion(a) {
    this.w = 2 * Math.acos(a.w);
    var b = Math.sqrt(1 - a.w * a.w);
    1E-4 > b ? (this.x = 1, this.z = this.y = 0) : (this.x = a.x / b, this.y = a.y / b, this.z = a.z / b);
    return this;
  },
  setAxisAngleFromRotationMatrix: function setAxisAngleFromRotationMatrix(a) {
    var b, c, d;
    a = a.elements;
    var e = a[0];
    d = a[4];
    var f = a[8],
        g = a[1],
        h = a[5],
        k = a[9];
    c = a[2];
    b = a[6];
    var l = a[10];

    if (.01 > Math.abs(d - g) && .01 > Math.abs(f - c) && .01 > Math.abs(k - b)) {
      if (.1 > Math.abs(d + g) && .1 > Math.abs(f + c) && .1 > Math.abs(k + b) && .1 > Math.abs(e + h + l - 3)) return this.set(1, 0, 0, 0), this;
      a = Math.PI;
      e = (e + 1) / 2;
      h = (h + 1) / 2;
      l = (l + 1) / 2;
      d = (d + g) / 4;
      f = (f + c) / 4;
      k = (k + b) / 4;
      e > h && e > l ? .01 > e ? (b = 0, d = c = .707106781) : (b = Math.sqrt(e), c = d / b, d = f / b) : h > l ? .01 > h ? (b = .707106781, c = 0, d = .707106781) : (c = Math.sqrt(h), b = d / c, d = k / c) : .01 > l ? (c = b = .707106781, d = 0) : (d = Math.sqrt(l), b = f / d, c = k / d);
      this.set(b, c, d, a);
      return this;
    }

    a = Math.sqrt((b - k) * (b - k) + (f - c) * (f - c) + (g - d) * (g - d));
    .001 > Math.abs(a) && (a = 1);
    this.x = (b - k) / a;
    this.y = (f - c) / a;
    this.z = (g - d) / a;
    this.w = Math.acos((e + h + l - 1) / 2);
    return this;
  },
  min: function min(a) {
    this.x > a.x && (this.x = a.x);
    this.y > a.y && (this.y = a.y);
    this.z > a.z && (this.z = a.z);
    this.w > a.w && (this.w = a.w);
    return this;
  },
  max: function max(a) {
    this.x < a.x && (this.x = a.x);
    this.y < a.y && (this.y = a.y);
    this.z < a.z && (this.z = a.z);
    this.w < a.w && (this.w = a.w);
    return this;
  },
  clamp: function clamp(a, b) {
    this.x < a.x ? this.x = a.x : this.x > b.x && (this.x = b.x);
    this.y < a.y ? this.y = a.y : this.y > b.y && (this.y = b.y);
    this.z < a.z ? this.z = a.z : this.z > b.z && (this.z = b.z);
    this.w < a.w ? this.w = a.w : this.w > b.w && (this.w = b.w);
    return this;
  },
  clampScalar: function () {
    var a, b;
    return function (c, d) {
      void 0 === a && (a = new THREE.Vector4(), b = new THREE.Vector4());
      a.set(c, c, c, c);
      b.set(d, d, d, d);
      return this.clamp(a, b);
    };
  }(),
  floor: function floor() {
    this.x = Math.floor(this.x);
    this.y = Math.floor(this.y);
    this.z = Math.floor(this.z);
    this.w = Math.floor(this.w);
    return this;
  },
  ceil: function ceil() {
    this.x = Math.ceil(this.x);
    this.y = Math.ceil(this.y);
    this.z = Math.ceil(this.z);
    this.w = Math.ceil(this.w);
    return this;
  },
  round: function round() {
    this.x = Math.round(this.x);
    this.y = Math.round(this.y);
    this.z = Math.round(this.z);
    this.w = Math.round(this.w);
    return this;
  },
  roundToZero: function roundToZero() {
    this.x = 0 > this.x ? Math.ceil(this.x) : Math.floor(this.x);
    this.y = 0 > this.y ? Math.ceil(this.y) : Math.floor(this.y);
    this.z = 0 > this.z ? Math.ceil(this.z) : Math.floor(this.z);
    this.w = 0 > this.w ? Math.ceil(this.w) : Math.floor(this.w);
    return this;
  },
  negate: function negate() {
    this.x = -this.x;
    this.y = -this.y;
    this.z = -this.z;
    this.w = -this.w;
    return this;
  },
  dot: function dot(a) {
    return this.x * a.x + this.y * a.y + this.z * a.z + this.w * a.w;
  },
  lengthSq: function lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
  },
  length: function length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
  },
  lengthManhattan: function lengthManhattan() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
  },
  normalize: function normalize() {
    return this.divideScalar(this.length());
  },
  setLength: function setLength(a) {
    var b = this.length();
    0 !== b && a !== b && this.multiplyScalar(a / b);
    return this;
  },
  lerp: function lerp(a, b) {
    this.x += (a.x - this.x) * b;
    this.y += (a.y - this.y) * b;
    this.z += (a.z - this.z) * b;
    this.w += (a.w - this.w) * b;
    return this;
  },
  lerpVectors: function lerpVectors(a, b, c) {
    this.subVectors(b, a).multiplyScalar(c).add(a);
    return this;
  },
  equals: function equals(a) {
    return a.x === this.x && a.y === this.y && a.z === this.z && a.w === this.w;
  },
  fromArray: function fromArray(a, b) {
    void 0 === b && (b = 0);
    this.x = a[b];
    this.y = a[b + 1];
    this.z = a[b + 2];
    this.w = a[b + 3];
    return this;
  },
  toArray: function toArray(a, b) {
    void 0 === a && (a = []);
    void 0 === b && (b = 0);
    a[b] = this.x;
    a[b + 1] = this.y;
    a[b + 2] = this.z;
    a[b + 3] = this.w;
    return a;
  },
  fromAttribute: function fromAttribute(a, b, c) {
    void 0 === c && (c = 0);
    b = b * a.itemSize + c;
    this.x = a.array[b];
    this.y = a.array[b + 1];
    this.z = a.array[b + 2];
    this.w = a.array[b + 3];
    return this;
  },
  clone: function clone() {
    return new THREE.Vector4(this.x, this.y, this.z, this.w);
  }
};

THREE.Euler = function (a, b, c, d) {
  this._x = a || 0;
  this._y = b || 0;
  this._z = c || 0;
  this._order = d || THREE.Euler.DefaultOrder;
};

THREE.Euler.RotationOrders = "XYZ YZX ZXY XZY YXZ ZYX".split(" ");
THREE.Euler.DefaultOrder = "XYZ";
THREE.Euler.prototype = {
  constructor: THREE.Euler,
  _x: 0,
  _y: 0,
  _z: 0,
  _order: THREE.Euler.DefaultOrder,

  get x() {
    return this._x;
  },

  set x(a) {
    this._x = a;
    this.onChangeCallback();
  },

  get y() {
    return this._y;
  },

  set y(a) {
    this._y = a;
    this.onChangeCallback();
  },

  get z() {
    return this._z;
  },

  set z(a) {
    this._z = a;
    this.onChangeCallback();
  },

  get order() {
    return this._order;
  },

  set order(a) {
    this._order = a;
    this.onChangeCallback();
  },

  set: function set(a, b, c, d) {
    this._x = a;
    this._y = b;
    this._z = c;
    this._order = d || this._order;
    this.onChangeCallback();
    return this;
  },
  copy: function copy(a) {
    this._x = a._x;
    this._y = a._y;
    this._z = a._z;
    this._order = a._order;
    this.onChangeCallback();
    return this;
  },
  setFromRotationMatrix: function setFromRotationMatrix(a, b, c) {
    var d = THREE.Math.clamp,
        e = a.elements;
    a = e[0];
    var f = e[4],
        g = e[8],
        h = e[1],
        k = e[5],
        l = e[9],
        p = e[2],
        q = e[6],
        e = e[10];
    b = b || this._order;
    "XYZ" === b ? (this._y = Math.asin(d(g, -1, 1)), .99999 > Math.abs(g) ? (this._x = Math.atan2(-l, e), this._z = Math.atan2(-f, a)) : (this._x = Math.atan2(q, k), this._z = 0)) : "YXZ" === b ? (this._x = Math.asin(-d(l, -1, 1)), .99999 > Math.abs(l) ? (this._y = Math.atan2(g, e), this._z = Math.atan2(h, k)) : (this._y = Math.atan2(-p, a), this._z = 0)) : "ZXY" === b ? (this._x = Math.asin(d(q, -1, 1)), .99999 > Math.abs(q) ? (this._y = Math.atan2(-p, e), this._z = Math.atan2(-f, k)) : (this._y = 0, this._z = Math.atan2(h, a))) : "ZYX" === b ? (this._y = Math.asin(-d(p, -1, 1)), .99999 > Math.abs(p) ? (this._x = Math.atan2(q, e), this._z = Math.atan2(h, a)) : (this._x = 0, this._z = Math.atan2(-f, k))) : "YZX" === b ? (this._z = Math.asin(d(h, -1, 1)), .99999 > Math.abs(h) ? (this._x = Math.atan2(-l, k), this._y = Math.atan2(-p, a)) : (this._x = 0, this._y = Math.atan2(g, e))) : "XZY" === b ? (this._z = Math.asin(-d(f, -1, 1)), .99999 > Math.abs(f) ? (this._x = Math.atan2(q, k), this._y = Math.atan2(g, a)) : (this._x = Math.atan2(-l, e), this._y = 0)) : THREE.warn("THREE.Euler: .setFromRotationMatrix() given unsupported order: " + b);
    this._order = b;
    if (!1 !== c) this.onChangeCallback();
    return this;
  },
  setFromQuaternion: function () {
    var a;
    return function (b, c, d) {
      void 0 === a && (a = new THREE.Matrix4());
      a.makeRotationFromQuaternion(b);
      this.setFromRotationMatrix(a, c, d);
      return this;
    };
  }(),
  setFromVector3: function setFromVector3(a, b) {
    return this.set(a.x, a.y, a.z, b || this._order);
  },
  reorder: function () {
    var a = new THREE.Quaternion();
    return function (b) {
      a.setFromEuler(this);
      this.setFromQuaternion(a, b);
    };
  }(),
  equals: function equals(a) {
    return a._x === this._x && a._y === this._y && a._z === this._z && a._order === this._order;
  },
  fromArray: function fromArray(a) {
    this._x = a[0];
    this._y = a[1];
    this._z = a[2];
    void 0 !== a[3] && (this._order = a[3]);
    this.onChangeCallback();
    return this;
  },
  toArray: function toArray(a, b) {
    void 0 === a && (a = []);
    void 0 === b && (b = 0);
    a[b] = this._x;
    a[b + 1] = this._y;
    a[b + 2] = this._z;
    a[b + 3] = this._order;
    return a;
  },
  toVector3: function toVector3(a) {
    return a ? a.set(this._x, this._y, this._z) : new THREE.Vector3(this._x, this._y, this._z);
  },
  onChange: function onChange(a) {
    this.onChangeCallback = a;
    return this;
  },
  onChangeCallback: function onChangeCallback() {},
  clone: function clone() {
    return new THREE.Euler(this._x, this._y, this._z, this._order);
  }
};

THREE.Line3 = function (a, b) {
  this.start = void 0 !== a ? a : new THREE.Vector3();
  this.end = void 0 !== b ? b : new THREE.Vector3();
};

THREE.Line3.prototype = {
  constructor: THREE.Line3,
  set: function set(a, b) {
    this.start.copy(a);
    this.end.copy(b);
    return this;
  },
  copy: function copy(a) {
    this.start.copy(a.start);
    this.end.copy(a.end);
    return this;
  },
  center: function center(a) {
    return (a || new THREE.Vector3()).addVectors(this.start, this.end).multiplyScalar(.5);
  },
  delta: function delta(a) {
    return (a || new THREE.Vector3()).subVectors(this.end, this.start);
  },
  distanceSq: function distanceSq() {
    return this.start.distanceToSquared(this.end);
  },
  distance: function distance() {
    return this.start.distanceTo(this.end);
  },
  at: function at(a, b) {
    var c = b || new THREE.Vector3();
    return this.delta(c).multiplyScalar(a).add(this.start);
  },
  closestPointToPointParameter: function () {
    var a = new THREE.Vector3(),
        b = new THREE.Vector3();
    return function (c, d) {
      a.subVectors(c, this.start);
      b.subVectors(this.end, this.start);
      var e = b.dot(b),
          e = b.dot(a) / e;
      d && (e = THREE.Math.clamp(e, 0, 1));
      return e;
    };
  }(),
  closestPointToPoint: function closestPointToPoint(a, b, c) {
    a = this.closestPointToPointParameter(a, b);
    c = c || new THREE.Vector3();
    return this.delta(c).multiplyScalar(a).add(this.start);
  },
  applyMatrix4: function applyMatrix4(a) {
    this.start.applyMatrix4(a);
    this.end.applyMatrix4(a);
    return this;
  },
  equals: function equals(a) {
    return a.start.equals(this.start) && a.end.equals(this.end);
  },
  clone: function clone() {
    return new THREE.Line3().copy(this);
  }
};

THREE.Box2 = function (a, b) {
  this.min = void 0 !== a ? a : new THREE.Vector2(Infinity, Infinity);
  this.max = void 0 !== b ? b : new THREE.Vector2(-Infinity, -Infinity);
};

THREE.Box2.prototype = {
  constructor: THREE.Box2,
  set: function set(a, b) {
    this.min.copy(a);
    this.max.copy(b);
    return this;
  },
  setFromPoints: function setFromPoints(a) {
    this.makeEmpty();

    for (var b = 0, c = a.length; b < c; b++) {
      this.expandByPoint(a[b]);
    }

    return this;
  },
  setFromCenterAndSize: function () {
    var a = new THREE.Vector2();
    return function (b, c) {
      var d = a.copy(c).multiplyScalar(.5);
      this.min.copy(b).sub(d);
      this.max.copy(b).add(d);
      return this;
    };
  }(),
  copy: function copy(a) {
    this.min.copy(a.min);
    this.max.copy(a.max);
    return this;
  },
  makeEmpty: function makeEmpty() {
    this.min.x = this.min.y = Infinity;
    this.max.x = this.max.y = -Infinity;
    return this;
  },
  empty: function empty() {
    return this.max.x < this.min.x || this.max.y < this.min.y;
  },
  center: function center(a) {
    return (a || new THREE.Vector2()).addVectors(this.min, this.max).multiplyScalar(.5);
  },
  size: function size(a) {
    return (a || new THREE.Vector2()).subVectors(this.max, this.min);
  },
  expandByPoint: function expandByPoint(a) {
    this.min.min(a);
    this.max.max(a);
    return this;
  },
  expandByVector: function expandByVector(a) {
    this.min.sub(a);
    this.max.add(a);
    return this;
  },
  expandByScalar: function expandByScalar(a) {
    this.min.addScalar(-a);
    this.max.addScalar(a);
    return this;
  },
  containsPoint: function containsPoint(a) {
    return a.x < this.min.x || a.x > this.max.x || a.y < this.min.y || a.y > this.max.y ? !1 : !0;
  },
  containsBox: function containsBox(a) {
    return this.min.x <= a.min.x && a.max.x <= this.max.x && this.min.y <= a.min.y && a.max.y <= this.max.y ? !0 : !1;
  },
  getParameter: function getParameter(a, b) {
    return (b || new THREE.Vector2()).set((a.x - this.min.x) / (this.max.x - this.min.x), (a.y - this.min.y) / (this.max.y - this.min.y));
  },
  isIntersectionBox: function isIntersectionBox(a) {
    return a.max.x < this.min.x || a.min.x > this.max.x || a.max.y < this.min.y || a.min.y > this.max.y ? !1 : !0;
  },
  clampPoint: function clampPoint(a, b) {
    return (b || new THREE.Vector2()).copy(a).clamp(this.min, this.max);
  },
  distanceToPoint: function () {
    var a = new THREE.Vector2();
    return function (b) {
      return a.copy(b).clamp(this.min, this.max).sub(b).length();
    };
  }(),
  intersect: function intersect(a) {
    this.min.max(a.min);
    this.max.min(a.max);
    return this;
  },
  union: function union(a) {
    this.min.min(a.min);
    this.max.max(a.max);
    return this;
  },
  translate: function translate(a) {
    this.min.add(a);
    this.max.add(a);
    return this;
  },
  equals: function equals(a) {
    return a.min.equals(this.min) && a.max.equals(this.max);
  },
  clone: function clone() {
    return new THREE.Box2().copy(this);
  }
};

THREE.Box3 = function (a, b) {
  this.min = void 0 !== a ? a : new THREE.Vector3(Infinity, Infinity, Infinity);
  this.max = void 0 !== b ? b : new THREE.Vector3(-Infinity, -Infinity, -Infinity);
};

THREE.Box3.prototype = {
  constructor: THREE.Box3,
  set: function set(a, b) {
    this.min.copy(a);
    this.max.copy(b);
    return this;
  },
  setFromPoints: function setFromPoints(a) {
    this.makeEmpty();

    for (var b = 0, c = a.length; b < c; b++) {
      this.expandByPoint(a[b]);
    }

    return this;
  },
  setFromCenterAndSize: function () {
    var a = new THREE.Vector3();
    return function (b, c) {
      var d = a.copy(c).multiplyScalar(.5);
      this.min.copy(b).sub(d);
      this.max.copy(b).add(d);
      return this;
    };
  }(),
  setFromObject: function () {
    var a = new THREE.Vector3();
    return function (b) {
      var c = this;
      b.updateMatrixWorld(!0);
      this.makeEmpty();
      b.traverse(function (b) {
        var e = b.geometry;
        if (void 0 !== e) if (e instanceof THREE.Geometry) for (var f = e.vertices, e = 0, g = f.length; e < g; e++) {
          a.copy(f[e]), a.applyMatrix4(b.matrixWorld), c.expandByPoint(a);
        } else if (e instanceof THREE.BufferGeometry && void 0 !== e.attributes.position) for (f = e.attributes.position.array, e = 0, g = f.length; e < g; e += 3) {
          a.set(f[e], f[e + 1], f[e + 2]), a.applyMatrix4(b.matrixWorld), c.expandByPoint(a);
        }
      });
      return this;
    };
  }(),
  copy: function copy(a) {
    this.min.copy(a.min);
    this.max.copy(a.max);
    return this;
  },
  makeEmpty: function makeEmpty() {
    this.min.x = this.min.y = this.min.z = Infinity;
    this.max.x = this.max.y = this.max.z = -Infinity;
    return this;
  },
  empty: function empty() {
    return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
  },
  center: function center(a) {
    return (a || new THREE.Vector3()).addVectors(this.min, this.max).multiplyScalar(.5);
  },
  size: function size(a) {
    return (a || new THREE.Vector3()).subVectors(this.max, this.min);
  },
  expandByPoint: function expandByPoint(a) {
    this.min.min(a);
    this.max.max(a);
    return this;
  },
  expandByVector: function expandByVector(a) {
    this.min.sub(a);
    this.max.add(a);
    return this;
  },
  expandByScalar: function expandByScalar(a) {
    this.min.addScalar(-a);
    this.max.addScalar(a);
    return this;
  },
  containsPoint: function containsPoint(a) {
    return a.x < this.min.x || a.x > this.max.x || a.y < this.min.y || a.y > this.max.y || a.z < this.min.z || a.z > this.max.z ? !1 : !0;
  },
  containsBox: function containsBox(a) {
    return this.min.x <= a.min.x && a.max.x <= this.max.x && this.min.y <= a.min.y && a.max.y <= this.max.y && this.min.z <= a.min.z && a.max.z <= this.max.z ? !0 : !1;
  },
  getParameter: function getParameter(a, b) {
    return (b || new THREE.Vector3()).set((a.x - this.min.x) / (this.max.x - this.min.x), (a.y - this.min.y) / (this.max.y - this.min.y), (a.z - this.min.z) / (this.max.z - this.min.z));
  },
  isIntersectionBox: function isIntersectionBox(a) {
    return a.max.x < this.min.x || a.min.x > this.max.x || a.max.y < this.min.y || a.min.y > this.max.y || a.max.z < this.min.z || a.min.z > this.max.z ? !1 : !0;
  },
  clampPoint: function clampPoint(a, b) {
    return (b || new THREE.Vector3()).copy(a).clamp(this.min, this.max);
  },
  distanceToPoint: function () {
    var a = new THREE.Vector3();
    return function (b) {
      return a.copy(b).clamp(this.min, this.max).sub(b).length();
    };
  }(),
  getBoundingSphere: function () {
    var a = new THREE.Vector3();
    return function (b) {
      b = b || new THREE.Sphere();
      b.center = this.center();
      b.radius = .5 * this.size(a).length();
      return b;
    };
  }(),
  intersect: function intersect(a) {
    this.min.max(a.min);
    this.max.min(a.max);
    return this;
  },
  union: function union(a) {
    this.min.min(a.min);
    this.max.max(a.max);
    return this;
  },
  applyMatrix4: function () {
    var a = [new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3()];
    return function (b) {
      a[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(b);
      a[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(b);
      a[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(b);
      a[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(b);
      a[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(b);
      a[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(b);
      a[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(b);
      a[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(b);
      this.makeEmpty();
      this.setFromPoints(a);
      return this;
    };
  }(),
  translate: function translate(a) {
    this.min.add(a);
    this.max.add(a);
    return this;
  },
  equals: function equals(a) {
    return a.min.equals(this.min) && a.max.equals(this.max);
  },
  clone: function clone() {
    return new THREE.Box3().copy(this);
  }
};

THREE.Matrix3 = function () {
  this.elements = new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1]);
  0 < arguments.length && THREE.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.");
};

THREE.Matrix3.prototype = {
  constructor: THREE.Matrix3,
  set: function set(a, b, c, d, e, f, g, h, k) {
    var l = this.elements;
    l[0] = a;
    l[3] = b;
    l[6] = c;
    l[1] = d;
    l[4] = e;
    l[7] = f;
    l[2] = g;
    l[5] = h;
    l[8] = k;
    return this;
  },
  identity: function identity() {
    this.set(1, 0, 0, 0, 1, 0, 0, 0, 1);
    return this;
  },
  copy: function copy(a) {
    a = a.elements;
    this.set(a[0], a[3], a[6], a[1], a[4], a[7], a[2], a[5], a[8]);
    return this;
  },
  multiplyVector3: function multiplyVector3(a) {
    THREE.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead.");
    return a.applyMatrix3(this);
  },
  multiplyVector3Array: function multiplyVector3Array(a) {
    THREE.warn("THREE.Matrix3: .multiplyVector3Array() has been renamed. Use matrix.applyToVector3Array( array ) instead.");
    return this.applyToVector3Array(a);
  },
  applyToVector3Array: function () {
    var a = new THREE.Vector3();
    return function (b, c, d) {
      void 0 === c && (c = 0);
      void 0 === d && (d = b.length);

      for (var e = 0; e < d; e += 3, c += 3) {
        a.x = b[c], a.y = b[c + 1], a.z = b[c + 2], a.applyMatrix3(this), b[c] = a.x, b[c + 1] = a.y, b[c + 2] = a.z;
      }

      return b;
    };
  }(),
  multiplyScalar: function multiplyScalar(a) {
    var b = this.elements;
    b[0] *= a;
    b[3] *= a;
    b[6] *= a;
    b[1] *= a;
    b[4] *= a;
    b[7] *= a;
    b[2] *= a;
    b[5] *= a;
    b[8] *= a;
    return this;
  },
  determinant: function determinant() {
    var a = this.elements,
        b = a[0],
        c = a[1],
        d = a[2],
        e = a[3],
        f = a[4],
        g = a[5],
        h = a[6],
        k = a[7],
        a = a[8];
    return b * f * a - b * g * k - c * e * a + c * g * h + d * e * k - d * f * h;
  },
  getInverse: function getInverse(a, b) {
    var c = a.elements,
        d = this.elements;
    d[0] = c[10] * c[5] - c[6] * c[9];
    d[1] = -c[10] * c[1] + c[2] * c[9];
    d[2] = c[6] * c[1] - c[2] * c[5];
    d[3] = -c[10] * c[4] + c[6] * c[8];
    d[4] = c[10] * c[0] - c[2] * c[8];
    d[5] = -c[6] * c[0] + c[2] * c[4];
    d[6] = c[9] * c[4] - c[5] * c[8];
    d[7] = -c[9] * c[0] + c[1] * c[8];
    d[8] = c[5] * c[0] - c[1] * c[4];
    c = c[0] * d[0] + c[1] * d[3] + c[2] * d[6];

    if (0 === c) {
      if (b) throw Error("Matrix3.getInverse(): can't invert matrix, determinant is 0");
      THREE.warn("Matrix3.getInverse(): can't invert matrix, determinant is 0");
      this.identity();
      return this;
    }

    this.multiplyScalar(1 / c);
    return this;
  },
  transpose: function transpose() {
    var a,
        b = this.elements;
    a = b[1];
    b[1] = b[3];
    b[3] = a;
    a = b[2];
    b[2] = b[6];
    b[6] = a;
    a = b[5];
    b[5] = b[7];
    b[7] = a;
    return this;
  },
  flattenToArrayOffset: function flattenToArrayOffset(a, b) {
    var c = this.elements;
    a[b] = c[0];
    a[b + 1] = c[1];
    a[b + 2] = c[2];
    a[b + 3] = c[3];
    a[b + 4] = c[4];
    a[b + 5] = c[5];
    a[b + 6] = c[6];
    a[b + 7] = c[7];
    a[b + 8] = c[8];
    return a;
  },
  getNormalMatrix: function getNormalMatrix(a) {
    this.getInverse(a).transpose();
    return this;
  },
  transposeIntoArray: function transposeIntoArray(a) {
    var b = this.elements;
    a[0] = b[0];
    a[1] = b[3];
    a[2] = b[6];
    a[3] = b[1];
    a[4] = b[4];
    a[5] = b[7];
    a[6] = b[2];
    a[7] = b[5];
    a[8] = b[8];
    return this;
  },
  fromArray: function fromArray(a) {
    this.elements.set(a);
    return this;
  },
  toArray: function toArray() {
    var a = this.elements;
    return [a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7], a[8]];
  },
  clone: function clone() {
    return new THREE.Matrix3().fromArray(this.elements);
  }
};

THREE.Matrix4 = function () {
  this.elements = new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
  0 < arguments.length && THREE.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.");
};

THREE.Matrix4.prototype = {
  constructor: THREE.Matrix4,
  set: function set(a, b, c, d, e, f, g, h, k, l, p, q, n, t, r, s) {
    var u = this.elements;
    u[0] = a;
    u[4] = b;
    u[8] = c;
    u[12] = d;
    u[1] = e;
    u[5] = f;
    u[9] = g;
    u[13] = h;
    u[2] = k;
    u[6] = l;
    u[10] = p;
    u[14] = q;
    u[3] = n;
    u[7] = t;
    u[11] = r;
    u[15] = s;
    return this;
  },
  identity: function identity() {
    this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    return this;
  },
  copy: function copy(a) {
    this.elements.set(a.elements);
    return this;
  },
  extractPosition: function extractPosition(a) {
    THREE.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition().");
    return this.copyPosition(a);
  },
  copyPosition: function copyPosition(a) {
    var b = this.elements;
    a = a.elements;
    b[12] = a[12];
    b[13] = a[13];
    b[14] = a[14];
    return this;
  },
  extractBasis: function extractBasis(a, b, c) {
    var d = this.elements;
    a.set(d[0], d[1], d[2]);
    b.set(d[4], d[5], d[6]);
    c.set(d[8], d[9], d[10]);
    return this;
  },
  makeBasis: function makeBasis(a, b, c) {
    this.set(a.x, b.x, c.x, 0, a.y, b.y, c.y, 0, a.z, b.z, c.z, 0, 0, 0, 0, 1);
    return this;
  },
  extractRotation: function () {
    var a = new THREE.Vector3();
    return function (b) {
      var c = this.elements;
      b = b.elements;
      var d = 1 / a.set(b[0], b[1], b[2]).length(),
          e = 1 / a.set(b[4], b[5], b[6]).length(),
          f = 1 / a.set(b[8], b[9], b[10]).length();
      c[0] = b[0] * d;
      c[1] = b[1] * d;
      c[2] = b[2] * d;
      c[4] = b[4] * e;
      c[5] = b[5] * e;
      c[6] = b[6] * e;
      c[8] = b[8] * f;
      c[9] = b[9] * f;
      c[10] = b[10] * f;
      return this;
    };
  }(),
  makeRotationFromEuler: function makeRotationFromEuler(a) {
    !1 === a instanceof THREE.Euler && THREE.error("THREE.Matrix: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");
    var b = this.elements,
        c = a.x,
        d = a.y,
        e = a.z,
        f = Math.cos(c),
        c = Math.sin(c),
        g = Math.cos(d),
        d = Math.sin(d),
        h = Math.cos(e),
        e = Math.sin(e);

    if ("XYZ" === a.order) {
      a = f * h;
      var k = f * e,
          l = c * h,
          p = c * e;
      b[0] = g * h;
      b[4] = -g * e;
      b[8] = d;
      b[1] = k + l * d;
      b[5] = a - p * d;
      b[9] = -c * g;
      b[2] = p - a * d;
      b[6] = l + k * d;
      b[10] = f * g;
    } else "YXZ" === a.order ? (a = g * h, k = g * e, l = d * h, p = d * e, b[0] = a + p * c, b[4] = l * c - k, b[8] = f * d, b[1] = f * e, b[5] = f * h, b[9] = -c, b[2] = k * c - l, b[6] = p + a * c, b[10] = f * g) : "ZXY" === a.order ? (a = g * h, k = g * e, l = d * h, p = d * e, b[0] = a - p * c, b[4] = -f * e, b[8] = l + k * c, b[1] = k + l * c, b[5] = f * h, b[9] = p - a * c, b[2] = -f * d, b[6] = c, b[10] = f * g) : "ZYX" === a.order ? (a = f * h, k = f * e, l = c * h, p = c * e, b[0] = g * h, b[4] = l * d - k, b[8] = a * d + p, b[1] = g * e, b[5] = p * d + a, b[9] = k * d - l, b[2] = -d, b[6] = c * g, b[10] = f * g) : "YZX" === a.order ? (a = f * g, k = f * d, l = c * g, p = c * d, b[0] = g * h, b[4] = p - a * e, b[8] = l * e + k, b[1] = e, b[5] = f * h, b[9] = -c * h, b[2] = -d * h, b[6] = k * e + l, b[10] = a - p * e) : "XZY" === a.order && (a = f * g, k = f * d, l = c * g, p = c * d, b[0] = g * h, b[4] = -e, b[8] = d * h, b[1] = a * e + p, b[5] = f * h, b[9] = k * e - l, b[2] = l * e - k, b[6] = c * h, b[10] = p * e + a);

    b[3] = 0;
    b[7] = 0;
    b[11] = 0;
    b[12] = 0;
    b[13] = 0;
    b[14] = 0;
    b[15] = 1;
    return this;
  },
  setRotationFromQuaternion: function setRotationFromQuaternion(a) {
    THREE.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion().");
    return this.makeRotationFromQuaternion(a);
  },
  makeRotationFromQuaternion: function makeRotationFromQuaternion(a) {
    var b = this.elements,
        c = a.x,
        d = a.y,
        e = a.z,
        f = a.w,
        g = c + c,
        h = d + d,
        k = e + e;
    a = c * g;
    var l = c * h,
        c = c * k,
        p = d * h,
        d = d * k,
        e = e * k,
        g = f * g,
        h = f * h,
        f = f * k;
    b[0] = 1 - (p + e);
    b[4] = l - f;
    b[8] = c + h;
    b[1] = l + f;
    b[5] = 1 - (a + e);
    b[9] = d - g;
    b[2] = c - h;
    b[6] = d + g;
    b[10] = 1 - (a + p);
    b[3] = 0;
    b[7] = 0;
    b[11] = 0;
    b[12] = 0;
    b[13] = 0;
    b[14] = 0;
    b[15] = 1;
    return this;
  },
  lookAt: function () {
    var a = new THREE.Vector3(),
        b = new THREE.Vector3(),
        c = new THREE.Vector3();
    return function (d, e, f) {
      var g = this.elements;
      c.subVectors(d, e).normalize();
      0 === c.length() && (c.z = 1);
      a.crossVectors(f, c).normalize();
      0 === a.length() && (c.x += 1E-4, a.crossVectors(f, c).normalize());
      b.crossVectors(c, a);
      g[0] = a.x;
      g[4] = b.x;
      g[8] = c.x;
      g[1] = a.y;
      g[5] = b.y;
      g[9] = c.y;
      g[2] = a.z;
      g[6] = b.z;
      g[10] = c.z;
      return this;
    };
  }(),
  multiply: function multiply(a, b) {
    return void 0 !== b ? (THREE.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."), this.multiplyMatrices(a, b)) : this.multiplyMatrices(this, a);
  },
  multiplyMatrices: function multiplyMatrices(a, b) {
    var c = a.elements,
        d = b.elements,
        e = this.elements,
        f = c[0],
        g = c[4],
        h = c[8],
        k = c[12],
        l = c[1],
        p = c[5],
        q = c[9],
        n = c[13],
        t = c[2],
        r = c[6],
        s = c[10],
        u = c[14],
        v = c[3],
        x = c[7],
        D = c[11],
        c = c[15],
        w = d[0],
        y = d[4],
        A = d[8],
        E = d[12],
        G = d[1],
        F = d[5],
        z = d[9],
        I = d[13],
        U = d[2],
        M = d[6],
        H = d[10],
        L = d[14],
        P = d[3],
        N = d[7],
        R = d[11],
        d = d[15];
    e[0] = f * w + g * G + h * U + k * P;
    e[4] = f * y + g * F + h * M + k * N;
    e[8] = f * A + g * z + h * H + k * R;
    e[12] = f * E + g * I + h * L + k * d;
    e[1] = l * w + p * G + q * U + n * P;
    e[5] = l * y + p * F + q * M + n * N;
    e[9] = l * A + p * z + q * H + n * R;
    e[13] = l * E + p * I + q * L + n * d;
    e[2] = t * w + r * G + s * U + u * P;
    e[6] = t * y + r * F + s * M + u * N;
    e[10] = t * A + r * z + s * H + u * R;
    e[14] = t * E + r * I + s * L + u * d;
    e[3] = v * w + x * G + D * U + c * P;
    e[7] = v * y + x * F + D * M + c * N;
    e[11] = v * A + x * z + D * H + c * R;
    e[15] = v * E + x * I + D * L + c * d;
    return this;
  },
  multiplyToArray: function multiplyToArray(a, b, c) {
    var d = this.elements;
    this.multiplyMatrices(a, b);
    c[0] = d[0];
    c[1] = d[1];
    c[2] = d[2];
    c[3] = d[3];
    c[4] = d[4];
    c[5] = d[5];
    c[6] = d[6];
    c[7] = d[7];
    c[8] = d[8];
    c[9] = d[9];
    c[10] = d[10];
    c[11] = d[11];
    c[12] = d[12];
    c[13] = d[13];
    c[14] = d[14];
    c[15] = d[15];
    return this;
  },
  multiplyScalar: function multiplyScalar(a) {
    var b = this.elements;
    b[0] *= a;
    b[4] *= a;
    b[8] *= a;
    b[12] *= a;
    b[1] *= a;
    b[5] *= a;
    b[9] *= a;
    b[13] *= a;
    b[2] *= a;
    b[6] *= a;
    b[10] *= a;
    b[14] *= a;
    b[3] *= a;
    b[7] *= a;
    b[11] *= a;
    b[15] *= a;
    return this;
  },
  multiplyVector3: function multiplyVector3(a) {
    THREE.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) or vector.applyProjection( matrix ) instead.");
    return a.applyProjection(this);
  },
  multiplyVector4: function multiplyVector4(a) {
    THREE.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead.");
    return a.applyMatrix4(this);
  },
  multiplyVector3Array: function multiplyVector3Array(a) {
    THREE.warn("THREE.Matrix4: .multiplyVector3Array() has been renamed. Use matrix.applyToVector3Array( array ) instead.");
    return this.applyToVector3Array(a);
  },
  applyToVector3Array: function () {
    var a = new THREE.Vector3();
    return function (b, c, d) {
      void 0 === c && (c = 0);
      void 0 === d && (d = b.length);

      for (var e = 0; e < d; e += 3, c += 3) {
        a.x = b[c], a.y = b[c + 1], a.z = b[c + 2], a.applyMatrix4(this), b[c] = a.x, b[c + 1] = a.y, b[c + 2] = a.z;
      }

      return b;
    };
  }(),
  rotateAxis: function rotateAxis(a) {
    THREE.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead.");
    a.transformDirection(this);
  },
  crossVector: function crossVector(a) {
    THREE.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead.");
    return a.applyMatrix4(this);
  },
  determinant: function determinant() {
    var a = this.elements,
        b = a[0],
        c = a[4],
        d = a[8],
        e = a[12],
        f = a[1],
        g = a[5],
        h = a[9],
        k = a[13],
        l = a[2],
        p = a[6],
        q = a[10],
        n = a[14];
    return a[3] * (+e * h * p - d * k * p - e * g * q + c * k * q + d * g * n - c * h * n) + a[7] * (+b * h * n - b * k * q + e * f * q - d * f * n + d * k * l - e * h * l) + a[11] * (+b * k * p - b * g * n - e * f * p + c * f * n + e * g * l - c * k * l) + a[15] * (-d * g * l - b * h * p + b * g * q + d * f * p - c * f * q + c * h * l);
  },
  transpose: function transpose() {
    var a = this.elements,
        b;
    b = a[1];
    a[1] = a[4];
    a[4] = b;
    b = a[2];
    a[2] = a[8];
    a[8] = b;
    b = a[6];
    a[6] = a[9];
    a[9] = b;
    b = a[3];
    a[3] = a[12];
    a[12] = b;
    b = a[7];
    a[7] = a[13];
    a[13] = b;
    b = a[11];
    a[11] = a[14];
    a[14] = b;
    return this;
  },
  flattenToArrayOffset: function flattenToArrayOffset(a, b) {
    var c = this.elements;
    a[b] = c[0];
    a[b + 1] = c[1];
    a[b + 2] = c[2];
    a[b + 3] = c[3];
    a[b + 4] = c[4];
    a[b + 5] = c[5];
    a[b + 6] = c[6];
    a[b + 7] = c[7];
    a[b + 8] = c[8];
    a[b + 9] = c[9];
    a[b + 10] = c[10];
    a[b + 11] = c[11];
    a[b + 12] = c[12];
    a[b + 13] = c[13];
    a[b + 14] = c[14];
    a[b + 15] = c[15];
    return a;
  },
  getPosition: function () {
    var a = new THREE.Vector3();
    return function () {
      THREE.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead.");
      var b = this.elements;
      return a.set(b[12], b[13], b[14]);
    };
  }(),
  setPosition: function setPosition(a) {
    var b = this.elements;
    b[12] = a.x;
    b[13] = a.y;
    b[14] = a.z;
    return this;
  },
  getInverse: function getInverse(a, b) {
    var c = this.elements,
        d = a.elements,
        e = d[0],
        f = d[4],
        g = d[8],
        h = d[12],
        k = d[1],
        l = d[5],
        p = d[9],
        q = d[13],
        n = d[2],
        t = d[6],
        r = d[10],
        s = d[14],
        u = d[3],
        v = d[7],
        x = d[11],
        d = d[15];
    c[0] = p * s * v - q * r * v + q * t * x - l * s * x - p * t * d + l * r * d;
    c[4] = h * r * v - g * s * v - h * t * x + f * s * x + g * t * d - f * r * d;
    c[8] = g * q * v - h * p * v + h * l * x - f * q * x - g * l * d + f * p * d;
    c[12] = h * p * t - g * q * t - h * l * r + f * q * r + g * l * s - f * p * s;
    c[1] = q * r * u - p * s * u - q * n * x + k * s * x + p * n * d - k * r * d;
    c[5] = g * s * u - h * r * u + h * n * x - e * s * x - g * n * d + e * r * d;
    c[9] = h * p * u - g * q * u - h * k * x + e * q * x + g * k * d - e * p * d;
    c[13] = g * q * n - h * p * n + h * k * r - e * q * r - g * k * s + e * p * s;
    c[2] = l * s * u - q * t * u + q * n * v - k * s * v - l * n * d + k * t * d;
    c[6] = h * t * u - f * s * u - h * n * v + e * s * v + f * n * d - e * t * d;
    c[10] = f * q * u - h * l * u + h * k * v - e * q * v - f * k * d + e * l * d;
    c[14] = h * l * n - f * q * n - h * k * t + e * q * t + f * k * s - e * l * s;
    c[3] = p * t * u - l * r * u - p * n * v + k * r * v + l * n * x - k * t * x;
    c[7] = f * r * u - g * t * u + g * n * v - e * r * v - f * n * x + e * t * x;
    c[11] = g * l * u - f * p * u - g * k * v + e * p * v + f * k * x - e * l * x;
    c[15] = f * p * n - g * l * n + g * k * t - e * p * t - f * k * r + e * l * r;
    c = e * c[0] + k * c[4] + n * c[8] + u * c[12];

    if (0 == c) {
      if (b) throw Error("THREE.Matrix4.getInverse(): can't invert matrix, determinant is 0");
      THREE.warn("THREE.Matrix4.getInverse(): can't invert matrix, determinant is 0");
      this.identity();
      return this;
    }

    this.multiplyScalar(1 / c);
    return this;
  },
  translate: function translate(a) {
    THREE.error("THREE.Matrix4: .translate() has been removed.");
  },
  rotateX: function rotateX(a) {
    THREE.error("THREE.Matrix4: .rotateX() has been removed.");
  },
  rotateY: function rotateY(a) {
    THREE.error("THREE.Matrix4: .rotateY() has been removed.");
  },
  rotateZ: function rotateZ(a) {
    THREE.error("THREE.Matrix4: .rotateZ() has been removed.");
  },
  rotateByAxis: function rotateByAxis(a, b) {
    THREE.error("THREE.Matrix4: .rotateByAxis() has been removed.");
  },
  scale: function scale(a) {
    var b = this.elements,
        c = a.x,
        d = a.y;
    a = a.z;
    b[0] *= c;
    b[4] *= d;
    b[8] *= a;
    b[1] *= c;
    b[5] *= d;
    b[9] *= a;
    b[2] *= c;
    b[6] *= d;
    b[10] *= a;
    b[3] *= c;
    b[7] *= d;
    b[11] *= a;
    return this;
  },
  getMaxScaleOnAxis: function getMaxScaleOnAxis() {
    var a = this.elements;
    return Math.sqrt(Math.max(a[0] * a[0] + a[1] * a[1] + a[2] * a[2], Math.max(a[4] * a[4] + a[5] * a[5] + a[6] * a[6], a[8] * a[8] + a[9] * a[9] + a[10] * a[10])));
  },
  makeTranslation: function makeTranslation(a, b, c) {
    this.set(1, 0, 0, a, 0, 1, 0, b, 0, 0, 1, c, 0, 0, 0, 1);
    return this;
  },
  makeRotationX: function makeRotationX(a) {
    var b = Math.cos(a);
    a = Math.sin(a);
    this.set(1, 0, 0, 0, 0, b, -a, 0, 0, a, b, 0, 0, 0, 0, 1);
    return this;
  },
  makeRotationY: function makeRotationY(a) {
    var b = Math.cos(a);
    a = Math.sin(a);
    this.set(b, 0, a, 0, 0, 1, 0, 0, -a, 0, b, 0, 0, 0, 0, 1);
    return this;
  },
  makeRotationZ: function makeRotationZ(a) {
    var b = Math.cos(a);
    a = Math.sin(a);
    this.set(b, -a, 0, 0, a, b, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    return this;
  },
  makeRotationAxis: function makeRotationAxis(a, b) {
    var c = Math.cos(b),
        d = Math.sin(b),
        e = 1 - c,
        f = a.x,
        g = a.y,
        h = a.z,
        k = e * f,
        l = e * g;
    this.set(k * f + c, k * g - d * h, k * h + d * g, 0, k * g + d * h, l * g + c, l * h - d * f, 0, k * h - d * g, l * h + d * f, e * h * h + c, 0, 0, 0, 0, 1);
    return this;
  },
  makeScale: function makeScale(a, b, c) {
    this.set(a, 0, 0, 0, 0, b, 0, 0, 0, 0, c, 0, 0, 0, 0, 1);
    return this;
  },
  compose: function compose(a, b, c) {
    this.makeRotationFromQuaternion(b);
    this.scale(c);
    this.setPosition(a);
    return this;
  },
  decompose: function () {
    var a = new THREE.Vector3(),
        b = new THREE.Matrix4();
    return function (c, d, e) {
      var f = this.elements,
          g = a.set(f[0], f[1], f[2]).length(),
          h = a.set(f[4], f[5], f[6]).length(),
          k = a.set(f[8], f[9], f[10]).length();
      0 > this.determinant() && (g = -g);
      c.x = f[12];
      c.y = f[13];
      c.z = f[14];
      b.elements.set(this.elements);
      c = 1 / g;
      var f = 1 / h,
          l = 1 / k;
      b.elements[0] *= c;
      b.elements[1] *= c;
      b.elements[2] *= c;
      b.elements[4] *= f;
      b.elements[5] *= f;
      b.elements[6] *= f;
      b.elements[8] *= l;
      b.elements[9] *= l;
      b.elements[10] *= l;
      d.setFromRotationMatrix(b);
      e.x = g;
      e.y = h;
      e.z = k;
      return this;
    };
  }(),
  makeFrustum: function makeFrustum(a, b, c, d, e, f) {
    var g = this.elements;
    g[0] = 2 * e / (b - a);
    g[4] = 0;
    g[8] = (b + a) / (b - a);
    g[12] = 0;
    g[1] = 0;
    g[5] = 2 * e / (d - c);
    g[9] = (d + c) / (d - c);
    g[13] = 0;
    g[2] = 0;
    g[6] = 0;
    g[10] = -(f + e) / (f - e);
    g[14] = -2 * f * e / (f - e);
    g[3] = 0;
    g[7] = 0;
    g[11] = -1;
    g[15] = 0;
    return this;
  },
  makePerspective: function makePerspective(a, b, c, d) {
    a = c * Math.tan(THREE.Math.degToRad(.5 * a));
    var e = -a;
    return this.makeFrustum(e * b, a * b, e, a, c, d);
  },
  makeOrthographic: function makeOrthographic(a, b, c, d, e, f) {
    var g = this.elements,
        h = b - a,
        k = c - d,
        l = f - e;
    g[0] = 2 / h;
    g[4] = 0;
    g[8] = 0;
    g[12] = -((b + a) / h);
    g[1] = 0;
    g[5] = 2 / k;
    g[9] = 0;
    g[13] = -((c + d) / k);
    g[2] = 0;
    g[6] = 0;
    g[10] = -2 / l;
    g[14] = -((f + e) / l);
    g[3] = 0;
    g[7] = 0;
    g[11] = 0;
    g[15] = 1;
    return this;
  },
  fromArray: function fromArray(a) {
    this.elements.set(a);
    return this;
  },
  toArray: function toArray() {
    var a = this.elements;
    return [a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7], a[8], a[9], a[10], a[11], a[12], a[13], a[14], a[15]];
  },
  clone: function clone() {
    return new THREE.Matrix4().fromArray(this.elements);
  }
};

THREE.Ray = function (a, b) {
  this.origin = void 0 !== a ? a : new THREE.Vector3();
  this.direction = void 0 !== b ? b : new THREE.Vector3();
};

THREE.Ray.prototype = {
  constructor: THREE.Ray,
  set: function set(a, b) {
    this.origin.copy(a);
    this.direction.copy(b);
    return this;
  },
  copy: function copy(a) {
    this.origin.copy(a.origin);
    this.direction.copy(a.direction);
    return this;
  },
  at: function at(a, b) {
    return (b || new THREE.Vector3()).copy(this.direction).multiplyScalar(a).add(this.origin);
  },
  recast: function () {
    var a = new THREE.Vector3();
    return function (b) {
      this.origin.copy(this.at(b, a));
      return this;
    };
  }(),
  closestPointToPoint: function closestPointToPoint(a, b) {
    var c = b || new THREE.Vector3();
    c.subVectors(a, this.origin);
    var d = c.dot(this.direction);
    return 0 > d ? c.copy(this.origin) : c.copy(this.direction).multiplyScalar(d).add(this.origin);
  },
  distanceToPoint: function () {
    var a = new THREE.Vector3();
    return function (b) {
      var c = a.subVectors(b, this.origin).dot(this.direction);
      if (0 > c) return this.origin.distanceTo(b);
      a.copy(this.direction).multiplyScalar(c).add(this.origin);
      return a.distanceTo(b);
    };
  }(),
  distanceSqToSegment: function () {
    var a = new THREE.Vector3(),
        b = new THREE.Vector3(),
        c = new THREE.Vector3();
    return function (d, e, f, g) {
      a.copy(d).add(e).multiplyScalar(.5);
      b.copy(e).sub(d).normalize();
      c.copy(this.origin).sub(a);
      var h = .5 * d.distanceTo(e),
          k = -this.direction.dot(b),
          l = c.dot(this.direction),
          p = -c.dot(b),
          q = c.lengthSq(),
          n = Math.abs(1 - k * k),
          t;
      0 < n ? (d = k * p - l, e = k * l - p, t = h * n, 0 <= d ? e >= -t ? e <= t ? (h = 1 / n, d *= h, e *= h, k = d * (d + k * e + 2 * l) + e * (k * d + e + 2 * p) + q) : (e = h, d = Math.max(0, -(k * e + l)), k = -d * d + e * (e + 2 * p) + q) : (e = -h, d = Math.max(0, -(k * e + l)), k = -d * d + e * (e + 2 * p) + q) : e <= -t ? (d = Math.max(0, -(-k * h + l)), e = 0 < d ? -h : Math.min(Math.max(-h, -p), h), k = -d * d + e * (e + 2 * p) + q) : e <= t ? (d = 0, e = Math.min(Math.max(-h, -p), h), k = e * (e + 2 * p) + q) : (d = Math.max(0, -(k * h + l)), e = 0 < d ? h : Math.min(Math.max(-h, -p), h), k = -d * d + e * (e + 2 * p) + q)) : (e = 0 < k ? -h : h, d = Math.max(0, -(k * e + l)), k = -d * d + e * (e + 2 * p) + q);
      f && f.copy(this.direction).multiplyScalar(d).add(this.origin);
      g && g.copy(b).multiplyScalar(e).add(a);
      return k;
    };
  }(),
  isIntersectionSphere: function isIntersectionSphere(a) {
    return this.distanceToPoint(a.center) <= a.radius;
  },
  intersectSphere: function () {
    var a = new THREE.Vector3();
    return function (b, c) {
      a.subVectors(b.center, this.origin);
      var d = a.dot(this.direction),
          e = a.dot(a) - d * d,
          f = b.radius * b.radius;
      if (e > f) return null;
      f = Math.sqrt(f - e);
      e = d - f;
      d += f;
      return 0 > e && 0 > d ? null : 0 > e ? this.at(d, c) : this.at(e, c);
    };
  }(),
  isIntersectionPlane: function isIntersectionPlane(a) {
    var b = a.distanceToPoint(this.origin);
    return 0 === b || 0 > a.normal.dot(this.direction) * b ? !0 : !1;
  },
  distanceToPlane: function distanceToPlane(a) {
    var b = a.normal.dot(this.direction);
    if (0 == b) return 0 == a.distanceToPoint(this.origin) ? 0 : null;
    a = -(this.origin.dot(a.normal) + a.constant) / b;
    return 0 <= a ? a : null;
  },
  intersectPlane: function intersectPlane(a, b) {
    var c = this.distanceToPlane(a);
    return null === c ? null : this.at(c, b);
  },
  isIntersectionBox: function () {
    var a = new THREE.Vector3();
    return function (b) {
      return null !== this.intersectBox(b, a);
    };
  }(),
  intersectBox: function intersectBox(a, b) {
    var c, d, e, f, g;
    d = 1 / this.direction.x;
    f = 1 / this.direction.y;
    g = 1 / this.direction.z;
    var h = this.origin;
    0 <= d ? (c = (a.min.x - h.x) * d, d *= a.max.x - h.x) : (c = (a.max.x - h.x) * d, d *= a.min.x - h.x);
    0 <= f ? (e = (a.min.y - h.y) * f, f *= a.max.y - h.y) : (e = (a.max.y - h.y) * f, f *= a.min.y - h.y);
    if (c > f || e > d) return null;
    if (e > c || c !== c) c = e;
    if (f < d || d !== d) d = f;
    0 <= g ? (e = (a.min.z - h.z) * g, g *= a.max.z - h.z) : (e = (a.max.z - h.z) * g, g *= a.min.z - h.z);
    if (c > g || e > d) return null;
    if (e > c || c !== c) c = e;
    if (g < d || d !== d) d = g;
    return 0 > d ? null : this.at(0 <= c ? c : d, b);
  },
  intersectTriangle: function () {
    var a = new THREE.Vector3(),
        b = new THREE.Vector3(),
        c = new THREE.Vector3(),
        d = new THREE.Vector3();
    return function (e, f, g, h, k) {
      b.subVectors(f, e);
      c.subVectors(g, e);
      d.crossVectors(b, c);
      f = this.direction.dot(d);

      if (0 < f) {
        if (h) return null;
        h = 1;
      } else if (0 > f) h = -1, f = -f;else return null;

      a.subVectors(this.origin, e);
      e = h * this.direction.dot(c.crossVectors(a, c));
      if (0 > e) return null;
      g = h * this.direction.dot(b.cross(a));
      if (0 > g || e + g > f) return null;
      e = -h * a.dot(d);
      return 0 > e ? null : this.at(e / f, k);
    };
  }(),
  applyMatrix4: function applyMatrix4(a) {
    this.direction.add(this.origin).applyMatrix4(a);
    this.origin.applyMatrix4(a);
    this.direction.sub(this.origin);
    this.direction.normalize();
    return this;
  },
  equals: function equals(a) {
    return a.origin.equals(this.origin) && a.direction.equals(this.direction);
  },
  clone: function clone() {
    return new THREE.Ray().copy(this);
  }
};

THREE.Sphere = function (a, b) {
  this.center = void 0 !== a ? a : new THREE.Vector3();
  this.radius = void 0 !== b ? b : 0;
};

THREE.Sphere.prototype = {
  constructor: THREE.Sphere,
  set: function set(a, b) {
    this.center.copy(a);
    this.radius = b;
    return this;
  },
  setFromPoints: function () {
    var a = new THREE.Box3();
    return function (b, c) {
      var d = this.center;
      void 0 !== c ? d.copy(c) : a.setFromPoints(b).center(d);

      for (var e = 0, f = 0, g = b.length; f < g; f++) {
        e = Math.max(e, d.distanceToSquared(b[f]));
      }

      this.radius = Math.sqrt(e);
      return this;
    };
  }(),
  copy: function copy(a) {
    this.center.copy(a.center);
    this.radius = a.radius;
    return this;
  },
  empty: function empty() {
    return 0 >= this.radius;
  },
  containsPoint: function containsPoint(a) {
    return a.distanceToSquared(this.center) <= this.radius * this.radius;
  },
  distanceToPoint: function distanceToPoint(a) {
    return a.distanceTo(this.center) - this.radius;
  },
  intersectsSphere: function intersectsSphere(a) {
    var b = this.radius + a.radius;
    return a.center.distanceToSquared(this.center) <= b * b;
  },
  clampPoint: function clampPoint(a, b) {
    var c = this.center.distanceToSquared(a),
        d = b || new THREE.Vector3();
    d.copy(a);
    c > this.radius * this.radius && (d.sub(this.center).normalize(), d.multiplyScalar(this.radius).add(this.center));
    return d;
  },
  getBoundingBox: function getBoundingBox(a) {
    a = a || new THREE.Box3();
    a.set(this.center, this.center);
    a.expandByScalar(this.radius);
    return a;
  },
  applyMatrix4: function applyMatrix4(a) {
    this.center.applyMatrix4(a);
    this.radius *= a.getMaxScaleOnAxis();
    return this;
  },
  translate: function translate(a) {
    this.center.add(a);
    return this;
  },
  equals: function equals(a) {
    return a.center.equals(this.center) && a.radius === this.radius;
  },
  clone: function clone() {
    return new THREE.Sphere().copy(this);
  }
};

THREE.Frustum = function (a, b, c, d, e, f) {
  this.planes = [void 0 !== a ? a : new THREE.Plane(), void 0 !== b ? b : new THREE.Plane(), void 0 !== c ? c : new THREE.Plane(), void 0 !== d ? d : new THREE.Plane(), void 0 !== e ? e : new THREE.Plane(), void 0 !== f ? f : new THREE.Plane()];
};

THREE.Frustum.prototype = {
  constructor: THREE.Frustum,
  set: function set(a, b, c, d, e, f) {
    var g = this.planes;
    g[0].copy(a);
    g[1].copy(b);
    g[2].copy(c);
    g[3].copy(d);
    g[4].copy(e);
    g[5].copy(f);
    return this;
  },
  copy: function copy(a) {
    for (var b = this.planes, c = 0; 6 > c; c++) {
      b[c].copy(a.planes[c]);
    }

    return this;
  },
  setFromMatrix: function setFromMatrix(a) {
    var b = this.planes,
        c = a.elements;
    a = c[0];
    var d = c[1],
        e = c[2],
        f = c[3],
        g = c[4],
        h = c[5],
        k = c[6],
        l = c[7],
        p = c[8],
        q = c[9],
        n = c[10],
        t = c[11],
        r = c[12],
        s = c[13],
        u = c[14],
        c = c[15];
    b[0].setComponents(f - a, l - g, t - p, c - r).normalize();
    b[1].setComponents(f + a, l + g, t + p, c + r).normalize();
    b[2].setComponents(f + d, l + h, t + q, c + s).normalize();
    b[3].setComponents(f - d, l - h, t - q, c - s).normalize();
    b[4].setComponents(f - e, l - k, t - n, c - u).normalize();
    b[5].setComponents(f + e, l + k, t + n, c + u).normalize();
    return this;
  },
  intersectsObject: function () {
    var a = new THREE.Sphere();
    return function (b) {
      var c = b.geometry;
      null === c.boundingSphere && c.computeBoundingSphere();
      a.copy(c.boundingSphere);
      a.applyMatrix4(b.matrixWorld);
      return this.intersectsSphere(a);
    };
  }(),
  intersectsSphere: function intersectsSphere(a) {
    var b = this.planes,
        c = a.center;
    a = -a.radius;

    for (var d = 0; 6 > d; d++) {
      if (b[d].distanceToPoint(c) < a) return !1;
    }

    return !0;
  },
  intersectsBox: function () {
    var a = new THREE.Vector3(),
        b = new THREE.Vector3();
    return function (c) {
      for (var d = this.planes, e = 0; 6 > e; e++) {
        var f = d[e];
        a.x = 0 < f.normal.x ? c.min.x : c.max.x;
        b.x = 0 < f.normal.x ? c.max.x : c.min.x;
        a.y = 0 < f.normal.y ? c.min.y : c.max.y;
        b.y = 0 < f.normal.y ? c.max.y : c.min.y;
        a.z = 0 < f.normal.z ? c.min.z : c.max.z;
        b.z = 0 < f.normal.z ? c.max.z : c.min.z;
        var g = f.distanceToPoint(a),
            f = f.distanceToPoint(b);
        if (0 > g && 0 > f) return !1;
      }

      return !0;
    };
  }(),
  containsPoint: function containsPoint(a) {
    for (var b = this.planes, c = 0; 6 > c; c++) {
      if (0 > b[c].distanceToPoint(a)) return !1;
    }

    return !0;
  },
  clone: function clone() {
    return new THREE.Frustum().copy(this);
  }
};

THREE.Plane = function (a, b) {
  this.normal = void 0 !== a ? a : new THREE.Vector3(1, 0, 0);
  this.constant = void 0 !== b ? b : 0;
};

THREE.Plane.prototype = {
  constructor: THREE.Plane,
  set: function set(a, b) {
    this.normal.copy(a);
    this.constant = b;
    return this;
  },
  setComponents: function setComponents(a, b, c, d) {
    this.normal.set(a, b, c);
    this.constant = d;
    return this;
  },
  setFromNormalAndCoplanarPoint: function setFromNormalAndCoplanarPoint(a, b) {
    this.normal.copy(a);
    this.constant = -b.dot(this.normal);
    return this;
  },
  setFromCoplanarPoints: function () {
    var a = new THREE.Vector3(),
        b = new THREE.Vector3();
    return function (c, d, e) {
      d = a.subVectors(e, d).cross(b.subVectors(c, d)).normalize();
      this.setFromNormalAndCoplanarPoint(d, c);
      return this;
    };
  }(),
  copy: function copy(a) {
    this.normal.copy(a.normal);
    this.constant = a.constant;
    return this;
  },
  normalize: function normalize() {
    var a = 1 / this.normal.length();
    this.normal.multiplyScalar(a);
    this.constant *= a;
    return this;
  },
  negate: function negate() {
    this.constant *= -1;
    this.normal.negate();
    return this;
  },
  distanceToPoint: function distanceToPoint(a) {
    return this.normal.dot(a) + this.constant;
  },
  distanceToSphere: function distanceToSphere(a) {
    return this.distanceToPoint(a.center) - a.radius;
  },
  projectPoint: function projectPoint(a, b) {
    return this.orthoPoint(a, b).sub(a).negate();
  },
  orthoPoint: function orthoPoint(a, b) {
    var c = this.distanceToPoint(a);
    return (b || new THREE.Vector3()).copy(this.normal).multiplyScalar(c);
  },
  isIntersectionLine: function isIntersectionLine(a) {
    var b = this.distanceToPoint(a.start);
    a = this.distanceToPoint(a.end);
    return 0 > b && 0 < a || 0 > a && 0 < b;
  },
  intersectLine: function () {
    var a = new THREE.Vector3();
    return function (b, c) {
      var d = c || new THREE.Vector3(),
          e = b.delta(a),
          f = this.normal.dot(e);

      if (0 == f) {
        if (0 == this.distanceToPoint(b.start)) return d.copy(b.start);
      } else return f = -(b.start.dot(this.normal) + this.constant) / f, 0 > f || 1 < f ? void 0 : d.copy(e).multiplyScalar(f).add(b.start);
    };
  }(),
  coplanarPoint: function coplanarPoint(a) {
    return (a || new THREE.Vector3()).copy(this.normal).multiplyScalar(-this.constant);
  },
  applyMatrix4: function () {
    var a = new THREE.Vector3(),
        b = new THREE.Vector3(),
        c = new THREE.Matrix3();
    return function (d, e) {
      var f = e || c.getNormalMatrix(d),
          f = a.copy(this.normal).applyMatrix3(f),
          g = this.coplanarPoint(b);
      g.applyMatrix4(d);
      this.setFromNormalAndCoplanarPoint(f, g);
      return this;
    };
  }(),
  translate: function translate(a) {
    this.constant -= a.dot(this.normal);
    return this;
  },
  equals: function equals(a) {
    return a.normal.equals(this.normal) && a.constant == this.constant;
  },
  clone: function clone() {
    return new THREE.Plane().copy(this);
  }
};
THREE.Math = {
  generateUUID: function () {
    var a = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),
        b = Array(36),
        c = 0,
        d;
    return function () {
      for (var e = 0; 36 > e; e++) {
        8 == e || 13 == e || 18 == e || 23 == e ? b[e] = "-" : 14 == e ? b[e] = "4" : (2 >= c && (c = 33554432 + 16777216 * Math.random() | 0), d = c & 15, c >>= 4, b[e] = a[19 == e ? d & 3 | 8 : d]);
      }

      return b.join("");
    };
  }(),
  clamp: function clamp(a, b, c) {
    return a < b ? b : a > c ? c : a;
  },
  clampBottom: function clampBottom(a, b) {
    return a < b ? b : a;
  },
  mapLinear: function mapLinear(a, b, c, d, e) {
    return d + (a - b) * (e - d) / (c - b);
  },
  smoothstep: function smoothstep(a, b, c) {
    if (a <= b) return 0;
    if (a >= c) return 1;
    a = (a - b) / (c - b);
    return a * a * (3 - 2 * a);
  },
  smootherstep: function smootherstep(a, b, c) {
    if (a <= b) return 0;
    if (a >= c) return 1;
    a = (a - b) / (c - b);
    return a * a * a * (a * (6 * a - 15) + 10);
  },
  random16: function random16() {
    return (65280 * Math.random() + 255 * Math.random()) / 65535;
  },
  randInt: function randInt(a, b) {
    return Math.floor(this.randFloat(a, b));
  },
  randFloat: function randFloat(a, b) {
    return a + Math.random() * (b - a);
  },
  randFloatSpread: function randFloatSpread(a) {
    return a * (.5 - Math.random());
  },
  degToRad: function () {
    var a = Math.PI / 180;
    return function (b) {
      return b * a;
    };
  }(),
  radToDeg: function () {
    var a = 180 / Math.PI;
    return function (b) {
      return b * a;
    };
  }(),
  isPowerOfTwo: function isPowerOfTwo(a) {
    return 0 === (a & a - 1) && 0 !== a;
  },
  nextPowerOfTwo: function nextPowerOfTwo(a) {
    a--;
    a |= a >> 1;
    a |= a >> 2;
    a |= a >> 4;
    a |= a >> 8;
    a |= a >> 16;
    a++;
    return a;
  }
};

THREE.Spline = function (a) {
  function b(a, b, c, d, e, f, g) {
    a = .5 * (c - a);
    d = .5 * (d - b);
    return (2 * (b - c) + a + d) * g + (-3 * (b - c) - 2 * a - d) * f + a * e + b;
  }

  this.points = a;
  var c = [],
      d = {
    x: 0,
    y: 0,
    z: 0
  },
      e,
      f,
      g,
      h,
      k,
      l,
      p,
      q,
      n;

  this.initFromArray = function (a) {
    this.points = [];

    for (var b = 0; b < a.length; b++) {
      this.points[b] = {
        x: a[b][0],
        y: a[b][1],
        z: a[b][2]
      };
    }
  };

  this.getPoint = function (a) {
    e = (this.points.length - 1) * a;
    f = Math.floor(e);
    g = e - f;
    c[0] = 0 === f ? f : f - 1;
    c[1] = f;
    c[2] = f > this.points.length - 2 ? this.points.length - 1 : f + 1;
    c[3] = f > this.points.length - 3 ? this.points.length - 1 : f + 2;
    l = this.points[c[0]];
    p = this.points[c[1]];
    q = this.points[c[2]];
    n = this.points[c[3]];
    h = g * g;
    k = g * h;
    d.x = b(l.x, p.x, q.x, n.x, g, h, k);
    d.y = b(l.y, p.y, q.y, n.y, g, h, k);
    d.z = b(l.z, p.z, q.z, n.z, g, h, k);
    return d;
  };

  this.getControlPointsArray = function () {
    var a,
        b,
        c = this.points.length,
        d = [];

    for (a = 0; a < c; a++) {
      b = this.points[a], d[a] = [b.x, b.y, b.z];
    }

    return d;
  };

  this.getLength = function (a) {
    var b,
        c,
        d,
        e = b = b = 0,
        f = new THREE.Vector3(),
        g = new THREE.Vector3(),
        h = [],
        k = 0;
    h[0] = 0;
    a || (a = 100);
    c = this.points.length * a;
    f.copy(this.points[0]);

    for (a = 1; a < c; a++) {
      b = a / c, d = this.getPoint(b), g.copy(d), k += g.distanceTo(f), f.copy(d), b *= this.points.length - 1, b = Math.floor(b), b != e && (h[b] = k, e = b);
    }

    h[h.length] = k;
    return {
      chunks: h,
      total: k
    };
  };

  this.reparametrizeByArcLength = function (a) {
    var b,
        c,
        d,
        e,
        f,
        g,
        h = [],
        k = new THREE.Vector3(),
        n = this.getLength();
    h.push(k.copy(this.points[0]).clone());

    for (b = 1; b < this.points.length; b++) {
      c = n.chunks[b] - n.chunks[b - 1];
      g = Math.ceil(a * c / n.total);
      e = (b - 1) / (this.points.length - 1);
      f = b / (this.points.length - 1);

      for (c = 1; c < g - 1; c++) {
        d = e + 1 / g * c * (f - e), d = this.getPoint(d), h.push(k.copy(d).clone());
      }

      h.push(k.copy(this.points[b]).clone());
    }

    this.points = h;
  };
};

THREE.Triangle = function (a, b, c) {
  this.a = void 0 !== a ? a : new THREE.Vector3();
  this.b = void 0 !== b ? b : new THREE.Vector3();
  this.c = void 0 !== c ? c : new THREE.Vector3();
};

THREE.Triangle.normal = function () {
  var a = new THREE.Vector3();
  return function (b, c, d, e) {
    e = e || new THREE.Vector3();
    e.subVectors(d, c);
    a.subVectors(b, c);
    e.cross(a);
    b = e.lengthSq();
    return 0 < b ? e.multiplyScalar(1 / Math.sqrt(b)) : e.set(0, 0, 0);
  };
}();

THREE.Triangle.barycoordFromPoint = function () {
  var a = new THREE.Vector3(),
      b = new THREE.Vector3(),
      c = new THREE.Vector3();
  return function (d, e, f, g, h) {
    a.subVectors(g, e);
    b.subVectors(f, e);
    c.subVectors(d, e);
    d = a.dot(a);
    e = a.dot(b);
    f = a.dot(c);
    var k = b.dot(b);
    g = b.dot(c);
    var l = d * k - e * e;
    h = h || new THREE.Vector3();
    if (0 == l) return h.set(-2, -1, -1);
    l = 1 / l;
    k = (k * f - e * g) * l;
    d = (d * g - e * f) * l;
    return h.set(1 - k - d, d, k);
  };
}();

THREE.Triangle.containsPoint = function () {
  var a = new THREE.Vector3();
  return function (b, c, d, e) {
    b = THREE.Triangle.barycoordFromPoint(b, c, d, e, a);
    return 0 <= b.x && 0 <= b.y && 1 >= b.x + b.y;
  };
}();

THREE.Triangle.prototype = {
  constructor: THREE.Triangle,
  set: function set(a, b, c) {
    this.a.copy(a);
    this.b.copy(b);
    this.c.copy(c);
    return this;
  },
  setFromPointsAndIndices: function setFromPointsAndIndices(a, b, c, d) {
    this.a.copy(a[b]);
    this.b.copy(a[c]);
    this.c.copy(a[d]);
    return this;
  },
  copy: function copy(a) {
    this.a.copy(a.a);
    this.b.copy(a.b);
    this.c.copy(a.c);
    return this;
  },
  area: function () {
    var a = new THREE.Vector3(),
        b = new THREE.Vector3();
    return function () {
      a.subVectors(this.c, this.b);
      b.subVectors(this.a, this.b);
      return .5 * a.cross(b).length();
    };
  }(),
  midpoint: function midpoint(a) {
    return (a || new THREE.Vector3()).addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
  },
  normal: function normal(a) {
    return THREE.Triangle.normal(this.a, this.b, this.c, a);
  },
  plane: function plane(a) {
    return (a || new THREE.Plane()).setFromCoplanarPoints(this.a, this.b, this.c);
  },
  barycoordFromPoint: function barycoordFromPoint(a, b) {
    return THREE.Triangle.barycoordFromPoint(a, this.a, this.b, this.c, b);
  },
  containsPoint: function containsPoint(a) {
    return THREE.Triangle.containsPoint(a, this.a, this.b, this.c);
  },
  equals: function equals(a) {
    return a.a.equals(this.a) && a.b.equals(this.b) && a.c.equals(this.c);
  },
  clone: function clone() {
    return new THREE.Triangle().copy(this);
  }
};

THREE.Clock = function (a) {
  this.autoStart = void 0 !== a ? a : !0;
  this.elapsedTime = this.oldTime = this.startTime = 0;
  this.running = !1;
};

THREE.Clock.prototype = {
  constructor: THREE.Clock,
  start: function start() {
    this.oldTime = this.startTime = void 0 !== self.performance && void 0 !== self.performance.now ? self.performance.now() : Date.now();
    this.running = !0;
  },
  stop: function stop() {
    this.getElapsedTime();
    this.running = !1;
  },
  getElapsedTime: function getElapsedTime() {
    this.getDelta();
    return this.elapsedTime;
  },
  getDelta: function getDelta() {
    var a = 0;
    this.autoStart && !this.running && this.start();

    if (this.running) {
      var b = void 0 !== self.performance && void 0 !== self.performance.now ? self.performance.now() : Date.now(),
          a = .001 * (b - this.oldTime);
      this.oldTime = b;
      this.elapsedTime += a;
    }

    return a;
  }
};

THREE.EventDispatcher = function () {};

THREE.EventDispatcher.prototype = {
  constructor: THREE.EventDispatcher,
  apply: function apply(a) {
    a.addEventListener = THREE.EventDispatcher.prototype.addEventListener;
    a.hasEventListener = THREE.EventDispatcher.prototype.hasEventListener;
    a.removeEventListener = THREE.EventDispatcher.prototype.removeEventListener;
    a.dispatchEvent = THREE.EventDispatcher.prototype.dispatchEvent;
  },
  addEventListener: function addEventListener(a, b) {
    void 0 === this._listeners && (this._listeners = {});
    var c = this._listeners;
    void 0 === c[a] && (c[a] = []);
    -1 === c[a].indexOf(b) && c[a].push(b);
  },
  hasEventListener: function hasEventListener(a, b) {
    if (void 0 === this._listeners) return !1;
    var c = this._listeners;
    return void 0 !== c[a] && -1 !== c[a].indexOf(b) ? !0 : !1;
  },
  removeEventListener: function removeEventListener(a, b) {
    if (void 0 !== this._listeners) {
      var c = this._listeners[a];

      if (void 0 !== c) {
        var d = c.indexOf(b);
        -1 !== d && c.splice(d, 1);
      }
    }
  },
  dispatchEvent: function dispatchEvent(a) {
    if (void 0 !== this._listeners) {
      var b = this._listeners[a.type];

      if (void 0 !== b) {
        a.target = this;

        for (var c = [], d = b.length, e = 0; e < d; e++) {
          c[e] = b[e];
        }

        for (e = 0; e < d; e++) {
          c[e].call(this, a);
        }
      }
    }
  }
};

(function (a) {
  a.Raycaster = function (b, c, f, g) {
    this.ray = new a.Ray(b, c);
    this.near = f || 0;
    this.far = g || Infinity;
    this.params = {
      Sprite: {},
      Mesh: {},
      PointCloud: {
        threshold: 1
      },
      LOD: {},
      Line: {}
    };
  };

  var b = function b(a, _b) {
    return a.distance - _b.distance;
  },
      c = function c(a, b, f, g) {
    a.raycast(b, f);

    if (!0 === g) {
      a = a.children;
      g = 0;

      for (var h = a.length; g < h; g++) {
        c(a[g], b, f, !0);
      }
    }
  };

  a.Raycaster.prototype = {
    constructor: a.Raycaster,
    precision: 1E-4,
    linePrecision: 1,
    set: function set(a, b) {
      this.ray.set(a, b);
    },
    setFromCamera: function setFromCamera(b, c) {
      c instanceof a.PerspectiveCamera ? (this.ray.origin.copy(c.position), this.ray.direction.set(b.x, b.y, .5).unproject(c).sub(c.position).normalize()) : c instanceof a.OrthographicCamera ? (this.ray.origin.set(b.x, b.y, -1).unproject(c), this.ray.direction.set(0, 0, -1).transformDirection(c.matrixWorld)) : a.error("THREE.Raycaster: Unsupported camera type.");
    },
    intersectObject: function intersectObject(a, e) {
      var f = [];
      c(a, this, f, e);
      f.sort(b);
      return f;
    },
    intersectObjects: function intersectObjects(d, e) {
      var f = [];
      if (!1 === d instanceof Array) return a.warn("THREE.Raycaster.intersectObjects: objects is not an Array."), f;

      for (var g = 0, h = d.length; g < h; g++) {
        c(d[g], this, f, e);
      }

      f.sort(b);
      return f;
    }
  };
})(THREE);

THREE.Object3D = function () {
  Object.defineProperty(this, "id", {
    value: THREE.Object3DIdCount++
  });
  this.uuid = THREE.Math.generateUUID();
  this.name = "";
  this.type = "Object3D";
  this.parent = void 0;
  this.children = [];
  this.up = THREE.Object3D.DefaultUp.clone();
  var a = new THREE.Vector3(),
      b = new THREE.Euler(),
      c = new THREE.Quaternion(),
      d = new THREE.Vector3(1, 1, 1);
  b.onChange(function () {
    c.setFromEuler(b, !1);
  });
  c.onChange(function () {
    b.setFromQuaternion(c, void 0, !1);
  });
  Object.defineProperties(this, {
    position: {
      enumerable: !0,
      value: a
    },
    rotation: {
      enumerable: !0,
      value: b
    },
    quaternion: {
      enumerable: !0,
      value: c
    },
    scale: {
      enumerable: !0,
      value: d
    }
  });
  this.rotationAutoUpdate = !0;
  this.matrix = new THREE.Matrix4();
  this.matrixWorld = new THREE.Matrix4();
  this.matrixAutoUpdate = !0;
  this.matrixWorldNeedsUpdate = !1;
  this.visible = !0;
  this.receiveShadow = this.castShadow = !1;
  this.frustumCulled = !0;
  this.renderOrder = 0;
  this.userData = {};
};

THREE.Object3D.DefaultUp = new THREE.Vector3(0, 1, 0);
THREE.Object3D.prototype = {
  constructor: THREE.Object3D,

  get eulerOrder() {
    THREE.warn("THREE.Object3D: .eulerOrder has been moved to .rotation.order.");
    return this.rotation.order;
  },

  set eulerOrder(a) {
    THREE.warn("THREE.Object3D: .eulerOrder has been moved to .rotation.order.");
    this.rotation.order = a;
  },

  get useQuaternion() {
    THREE.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.");
  },

  set useQuaternion(a) {
    THREE.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.");
  },

  applyMatrix: function applyMatrix(a) {
    this.matrix.multiplyMatrices(a, this.matrix);
    this.matrix.decompose(this.position, this.quaternion, this.scale);
  },
  setRotationFromAxisAngle: function setRotationFromAxisAngle(a, b) {
    this.quaternion.setFromAxisAngle(a, b);
  },
  setRotationFromEuler: function setRotationFromEuler(a) {
    this.quaternion.setFromEuler(a, !0);
  },
  setRotationFromMatrix: function setRotationFromMatrix(a) {
    this.quaternion.setFromRotationMatrix(a);
  },
  setRotationFromQuaternion: function setRotationFromQuaternion(a) {
    this.quaternion.copy(a);
  },
  rotateOnAxis: function () {
    var a = new THREE.Quaternion();
    return function (b, c) {
      a.setFromAxisAngle(b, c);
      this.quaternion.multiply(a);
      return this;
    };
  }(),
  rotateX: function () {
    var a = new THREE.Vector3(1, 0, 0);
    return function (b) {
      return this.rotateOnAxis(a, b);
    };
  }(),
  rotateY: function () {
    var a = new THREE.Vector3(0, 1, 0);
    return function (b) {
      return this.rotateOnAxis(a, b);
    };
  }(),
  rotateZ: function () {
    var a = new THREE.Vector3(0, 0, 1);
    return function (b) {
      return this.rotateOnAxis(a, b);
    };
  }(),
  translateOnAxis: function () {
    var a = new THREE.Vector3();
    return function (b, c) {
      a.copy(b).applyQuaternion(this.quaternion);
      this.position.add(a.multiplyScalar(c));
      return this;
    };
  }(),
  translate: function translate(a, b) {
    THREE.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead.");
    return this.translateOnAxis(b, a);
  },
  translateX: function () {
    var a = new THREE.Vector3(1, 0, 0);
    return function (b) {
      return this.translateOnAxis(a, b);
    };
  }(),
  translateY: function () {
    var a = new THREE.Vector3(0, 1, 0);
    return function (b) {
      return this.translateOnAxis(a, b);
    };
  }(),
  translateZ: function () {
    var a = new THREE.Vector3(0, 0, 1);
    return function (b) {
      return this.translateOnAxis(a, b);
    };
  }(),
  localToWorld: function localToWorld(a) {
    return a.applyMatrix4(this.matrixWorld);
  },
  worldToLocal: function () {
    var a = new THREE.Matrix4();
    return function (b) {
      return b.applyMatrix4(a.getInverse(this.matrixWorld));
    };
  }(),
  lookAt: function () {
    var a = new THREE.Matrix4();
    return function (b) {
      a.lookAt(b, this.position, this.up);
      this.quaternion.setFromRotationMatrix(a);
    };
  }(),
  add: function add(a) {
    if (1 < arguments.length) {
      for (var b = 0; b < arguments.length; b++) {
        this.add(arguments[b]);
      }

      return this;
    }

    if (a === this) return THREE.error("THREE.Object3D.add: object can't be added as a child of itself.", a), this;
    a instanceof THREE.Object3D ? (void 0 !== a.parent && a.parent.remove(a), a.parent = this, a.dispatchEvent({
      type: "added"
    }), this.children.push(a)) : THREE.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", a);
    return this;
  },
  remove: function remove(a) {
    if (1 < arguments.length) for (var b = 0; b < arguments.length; b++) {
      this.remove(arguments[b]);
    }
    b = this.children.indexOf(a);
    -1 !== b && (a.parent = void 0, a.dispatchEvent({
      type: "removed"
    }), this.children.splice(b, 1));
  },
  getChildByName: function getChildByName(a) {
    THREE.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName().");
    return this.getObjectByName(a);
  },
  getObjectById: function getObjectById(a) {
    return this.getObjectByProperty("id", a);
  },
  getObjectByName: function getObjectByName(a) {
    return this.getObjectByProperty("name", a);
  },
  getObjectByProperty: function getObjectByProperty(a, b) {
    if (this[a] === b) return this;

    for (var c = 0, d = this.children.length; c < d; c++) {
      var e = this.children[c].getObjectByProperty(a, b);
      if (void 0 !== e) return e;
    }
  },
  getWorldPosition: function getWorldPosition(a) {
    a = a || new THREE.Vector3();
    this.updateMatrixWorld(!0);
    return a.setFromMatrixPosition(this.matrixWorld);
  },
  getWorldQuaternion: function () {
    var a = new THREE.Vector3(),
        b = new THREE.Vector3();
    return function (c) {
      c = c || new THREE.Quaternion();
      this.updateMatrixWorld(!0);
      this.matrixWorld.decompose(a, c, b);
      return c;
    };
  }(),
  getWorldRotation: function () {
    var a = new THREE.Quaternion();
    return function (b) {
      b = b || new THREE.Euler();
      this.getWorldQuaternion(a);
      return b.setFromQuaternion(a, this.rotation.order, !1);
    };
  }(),
  getWorldScale: function () {
    var a = new THREE.Vector3(),
        b = new THREE.Quaternion();
    return function (c) {
      c = c || new THREE.Vector3();
      this.updateMatrixWorld(!0);
      this.matrixWorld.decompose(a, b, c);
      return c;
    };
  }(),
  getWorldDirection: function () {
    var a = new THREE.Quaternion();
    return function (b) {
      b = b || new THREE.Vector3();
      this.getWorldQuaternion(a);
      return b.set(0, 0, 1).applyQuaternion(a);
    };
  }(),
  raycast: function raycast() {},
  traverse: function traverse(a) {
    a(this);

    for (var b = 0, c = this.children.length; b < c; b++) {
      this.children[b].traverse(a);
    }
  },
  traverseVisible: function traverseVisible(a) {
    if (!1 !== this.visible) {
      a(this);

      for (var b = 0, c = this.children.length; b < c; b++) {
        this.children[b].traverseVisible(a);
      }
    }
  },
  traverseAncestors: function traverseAncestors(a) {
    this.parent && (a(this.parent), this.parent.traverseAncestors(a));
  },
  updateMatrix: function updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale);
    this.matrixWorldNeedsUpdate = !0;
  },
  updateMatrixWorld: function updateMatrixWorld(a) {
    !0 === this.matrixAutoUpdate && this.updateMatrix();
    if (!0 === this.matrixWorldNeedsUpdate || !0 === a) void 0 === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorldNeedsUpdate = !1, a = !0;

    for (var b = 0, c = this.children.length; b < c; b++) {
      this.children[b].updateMatrixWorld(a);
    }
  },
  toJSON: function toJSON() {
    var a = {
      metadata: {
        version: 4.3,
        type: "Object",
        generator: "ObjectExporter"
      }
    },
        b = {},
        c = {},
        d = function d(b) {
      void 0 === a.materials && (a.materials = []);

      if (void 0 === c[b.uuid]) {
        var d = b.toJSON();
        delete d.metadata;
        c[b.uuid] = d;
        a.materials.push(d);
      }

      return b.uuid;
    },
        e = function e(c) {
      var g = {};
      g.uuid = c.uuid;
      g.type = c.type;
      "" !== c.name && (g.name = c.name);
      "{}" !== JSON.stringify(c.userData) && (g.userData = c.userData);
      !0 !== c.visible && (g.visible = c.visible);
      if (c instanceof THREE.PerspectiveCamera) g.fov = c.fov, g.aspect = c.aspect, g.near = c.near, g.far = c.far;else if (c instanceof THREE.OrthographicCamera) g.left = c.left, g.right = c.right, g.top = c.top, g.bottom = c.bottom, g.near = c.near, g.far = c.far;else if (c instanceof THREE.AmbientLight) g.color = c.color.getHex();else if (c instanceof THREE.DirectionalLight) g.color = c.color.getHex(), g.intensity = c.intensity;else if (c instanceof THREE.PointLight) g.color = c.color.getHex(), g.intensity = c.intensity, g.distance = c.distance, g.decay = c.decay;else if (c instanceof THREE.SpotLight) g.color = c.color.getHex(), g.intensity = c.intensity, g.distance = c.distance, g.angle = c.angle, g.exponent = c.exponent, g.decay = c.decay;else if (c instanceof THREE.HemisphereLight) g.color = c.color.getHex(), g.groundColor = c.groundColor.getHex();else if (c instanceof THREE.Mesh || c instanceof THREE.Line || c instanceof THREE.PointCloud) {
        var h = c.geometry;
        void 0 === a.geometries && (a.geometries = []);

        if (void 0 === b[h.uuid]) {
          var k = h.toJSON();
          delete k.metadata;
          b[h.uuid] = k;
          a.geometries.push(k);
        }

        g.geometry = h.uuid;
        g.material = d(c.material);
        c instanceof THREE.Line && (g.mode = c.mode);
      } else c instanceof THREE.Sprite && (g.material = d(c.material));
      g.matrix = c.matrix.toArray();
      if (0 < c.children.length) for (g.children = [], h = 0; h < c.children.length; h++) {
        g.children.push(e(c.children[h]));
      }
      return g;
    };

    a.object = e(this);
    return a;
  },
  clone: function clone(a, b) {
    void 0 === a && (a = new THREE.Object3D());
    void 0 === b && (b = !0);
    a.name = this.name;
    a.up.copy(this.up);
    a.position.copy(this.position);
    a.quaternion.copy(this.quaternion);
    a.scale.copy(this.scale);
    a.rotationAutoUpdate = this.rotationAutoUpdate;
    a.matrix.copy(this.matrix);
    a.matrixWorld.copy(this.matrixWorld);
    a.matrixAutoUpdate = this.matrixAutoUpdate;
    a.matrixWorldNeedsUpdate = this.matrixWorldNeedsUpdate;
    a.visible = this.visible;
    a.castShadow = this.castShadow;
    a.receiveShadow = this.receiveShadow;
    a.frustumCulled = this.frustumCulled;
    a.userData = JSON.parse(JSON.stringify(this.userData));
    if (!0 === b) for (var c = 0; c < this.children.length; c++) {
      a.add(this.children[c].clone());
    }
    return a;
  }
};
THREE.EventDispatcher.prototype.apply(THREE.Object3D.prototype);
THREE.Object3DIdCount = 0;

THREE.Face3 = function (a, b, c, d, e, f) {
  this.a = a;
  this.b = b;
  this.c = c;
  this.normal = d instanceof THREE.Vector3 ? d : new THREE.Vector3();
  this.vertexNormals = d instanceof Array ? d : [];
  this.color = e instanceof THREE.Color ? e : new THREE.Color();
  this.vertexColors = e instanceof Array ? e : [];
  this.vertexTangents = [];
  this.materialIndex = void 0 !== f ? f : 0;
};

THREE.Face3.prototype = {
  constructor: THREE.Face3,
  clone: function clone() {
    var a = new THREE.Face3(this.a, this.b, this.c);
    a.normal.copy(this.normal);
    a.color.copy(this.color);
    a.materialIndex = this.materialIndex;

    for (var b = 0, c = this.vertexNormals.length; b < c; b++) {
      a.vertexNormals[b] = this.vertexNormals[b].clone();
    }

    b = 0;

    for (c = this.vertexColors.length; b < c; b++) {
      a.vertexColors[b] = this.vertexColors[b].clone();
    }

    b = 0;

    for (c = this.vertexTangents.length; b < c; b++) {
      a.vertexTangents[b] = this.vertexTangents[b].clone();
    }

    return a;
  }
};

THREE.Face4 = function (a, b, c, d, e, f, g) {
  THREE.warn("THREE.Face4 has been removed. A THREE.Face3 will be created instead.");
  return new THREE.Face3(a, b, c, e, f, g);
};

THREE.BufferAttribute = function (a, b) {
  this.array = a;
  this.itemSize = b;
  this.needsUpdate = !1;
};

THREE.BufferAttribute.prototype = {
  constructor: THREE.BufferAttribute,

  get length() {
    return this.array.length;
  },

  copyAt: function copyAt(a, b, c) {
    a *= this.itemSize;
    c *= b.itemSize;

    for (var d = 0, e = this.itemSize; d < e; d++) {
      this.array[a + d] = b.array[c + d];
    }

    return this;
  },
  set: function set(a, b) {
    void 0 === b && (b = 0);
    this.array.set(a, b);
    return this;
  },
  setX: function setX(a, b) {
    this.array[a * this.itemSize] = b;
    return this;
  },
  setY: function setY(a, b) {
    this.array[a * this.itemSize + 1] = b;
    return this;
  },
  setZ: function setZ(a, b) {
    this.array[a * this.itemSize + 2] = b;
    return this;
  },
  setXY: function setXY(a, b, c) {
    a *= this.itemSize;
    this.array[a] = b;
    this.array[a + 1] = c;
    return this;
  },
  setXYZ: function setXYZ(a, b, c, d) {
    a *= this.itemSize;
    this.array[a] = b;
    this.array[a + 1] = c;
    this.array[a + 2] = d;
    return this;
  },
  setXYZW: function setXYZW(a, b, c, d, e) {
    a *= this.itemSize;
    this.array[a] = b;
    this.array[a + 1] = c;
    this.array[a + 2] = d;
    this.array[a + 3] = e;
    return this;
  },
  clone: function clone() {
    return new THREE.BufferAttribute(new this.array.constructor(this.array), this.itemSize);
  }
};

THREE.Int8Attribute = function (a, b) {
  THREE.warn("THREE.Int8Attribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead.");
  return new THREE.BufferAttribute(a, b);
};

THREE.Uint8Attribute = function (a, b) {
  THREE.warn("THREE.Uint8Attribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead.");
  return new THREE.BufferAttribute(a, b);
};

THREE.Uint8ClampedAttribute = function (a, b) {
  THREE.warn("THREE.Uint8ClampedAttribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead.");
  return new THREE.BufferAttribute(a, b);
};

THREE.Int16Attribute = function (a, b) {
  THREE.warn("THREE.Int16Attribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead.");
  return new THREE.BufferAttribute(a, b);
};

THREE.Uint16Attribute = function (a, b) {
  THREE.warn("THREE.Uint16Attribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead.");
  return new THREE.BufferAttribute(a, b);
};

THREE.Int32Attribute = function (a, b) {
  THREE.warn("THREE.Int32Attribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead.");
  return new THREE.BufferAttribute(a, b);
};

THREE.Uint32Attribute = function (a, b) {
  THREE.warn("THREE.Uint32Attribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead.");
  return new THREE.BufferAttribute(a, b);
};

THREE.Float32Attribute = function (a, b) {
  THREE.warn("THREE.Float32Attribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead.");
  return new THREE.BufferAttribute(a, b);
};

THREE.Float64Attribute = function (a, b) {
  THREE.warn("THREE.Float64Attribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead.");
  return new THREE.BufferAttribute(a, b);
};

THREE.DynamicBufferAttribute = function (a, b) {
  THREE.BufferAttribute.call(this, a, b);
  this.updateRange = {
    offset: 0,
    count: -1
  };
};

THREE.DynamicBufferAttribute.prototype = Object.create(THREE.BufferAttribute.prototype);
THREE.DynamicBufferAttribute.prototype.constructor = THREE.DynamicBufferAttribute;

THREE.DynamicBufferAttribute.prototype.clone = function () {
  return new THREE.DynamicBufferAttribute(new this.array.constructor(this.array), this.itemSize);
};

THREE.BufferGeometry = function () {
  Object.defineProperty(this, "id", {
    value: THREE.GeometryIdCount++
  });
  this.uuid = THREE.Math.generateUUID();
  this.name = "";
  this.type = "BufferGeometry";
  this.attributes = {};
  this.attributesKeys = [];
  this.offsets = this.drawcalls = [];
  this.boundingSphere = this.boundingBox = null;
};

THREE.BufferGeometry.prototype = {
  constructor: THREE.BufferGeometry,
  addAttribute: function addAttribute(a, b, c) {
    !1 === b instanceof THREE.BufferAttribute ? (THREE.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."), this.attributes[a] = {
      array: b,
      itemSize: c
    }) : (this.attributes[a] = b, this.attributesKeys = Object.keys(this.attributes));
  },
  getAttribute: function getAttribute(a) {
    return this.attributes[a];
  },
  addDrawCall: function addDrawCall(a, b, c) {
    this.drawcalls.push({
      start: a,
      count: b,
      index: void 0 !== c ? c : 0
    });
  },
  applyMatrix: function applyMatrix(a) {
    var b = this.attributes.position;
    void 0 !== b && (a.applyToVector3Array(b.array), b.needsUpdate = !0);
    b = this.attributes.normal;
    void 0 !== b && (new THREE.Matrix3().getNormalMatrix(a).applyToVector3Array(b.array), b.needsUpdate = !0);
    null !== this.boundingBox && this.computeBoundingBox();
    null !== this.boundingSphere && this.computeBoundingSphere();
  },
  center: function center() {
    this.computeBoundingBox();
    var a = this.boundingBox.center().negate();
    this.applyMatrix(new THREE.Matrix4().setPosition(a));
    return a;
  },
  fromGeometry: function fromGeometry(a, b) {
    b = b || {
      vertexColors: THREE.NoColors
    };
    var c = a.vertices,
        d = a.faces,
        e = a.faceVertexUvs,
        f = b.vertexColors,
        g = 0 < e[0].length,
        h = 3 == d[0].vertexNormals.length,
        k = new Float32Array(9 * d.length);
    this.addAttribute("position", new THREE.BufferAttribute(k, 3));
    var l = new Float32Array(9 * d.length);
    this.addAttribute("normal", new THREE.BufferAttribute(l, 3));

    if (f !== THREE.NoColors) {
      var p = new Float32Array(9 * d.length);
      this.addAttribute("color", new THREE.BufferAttribute(p, 3));
    }

    if (!0 === g) {
      var q = new Float32Array(6 * d.length);
      this.addAttribute("uv", new THREE.BufferAttribute(q, 2));
    }

    for (var n = 0, t = 0, r = 0; n < d.length; n++, t += 6, r += 9) {
      var s = d[n],
          u = c[s.a],
          v = c[s.b],
          x = c[s.c];
      k[r] = u.x;
      k[r + 1] = u.y;
      k[r + 2] = u.z;
      k[r + 3] = v.x;
      k[r + 4] = v.y;
      k[r + 5] = v.z;
      k[r + 6] = x.x;
      k[r + 7] = x.y;
      k[r + 8] = x.z;
      !0 === h ? (u = s.vertexNormals[0], v = s.vertexNormals[1], x = s.vertexNormals[2], l[r] = u.x, l[r + 1] = u.y, l[r + 2] = u.z, l[r + 3] = v.x, l[r + 4] = v.y, l[r + 5] = v.z, l[r + 6] = x.x, l[r + 7] = x.y, l[r + 8] = x.z) : (u = s.normal, l[r] = u.x, l[r + 1] = u.y, l[r + 2] = u.z, l[r + 3] = u.x, l[r + 4] = u.y, l[r + 5] = u.z, l[r + 6] = u.x, l[r + 7] = u.y, l[r + 8] = u.z);
      f === THREE.FaceColors ? (s = s.color, p[r] = s.r, p[r + 1] = s.g, p[r + 2] = s.b, p[r + 3] = s.r, p[r + 4] = s.g, p[r + 5] = s.b, p[r + 6] = s.r, p[r + 7] = s.g, p[r + 8] = s.b) : f === THREE.VertexColors && (u = s.vertexColors[0], v = s.vertexColors[1], s = s.vertexColors[2], p[r] = u.r, p[r + 1] = u.g, p[r + 2] = u.b, p[r + 3] = v.r, p[r + 4] = v.g, p[r + 5] = v.b, p[r + 6] = s.r, p[r + 7] = s.g, p[r + 8] = s.b);
      !0 === g && (s = e[0][n][0], u = e[0][n][1], v = e[0][n][2], q[t] = s.x, q[t + 1] = s.y, q[t + 2] = u.x, q[t + 3] = u.y, q[t + 4] = v.x, q[t + 5] = v.y);
    }

    this.computeBoundingSphere();
    return this;
  },
  computeBoundingBox: function () {
    var a = new THREE.Vector3();
    return function () {
      null === this.boundingBox && (this.boundingBox = new THREE.Box3());
      var b = this.attributes.position.array;

      if (b) {
        var c = this.boundingBox;
        c.makeEmpty();

        for (var d = 0, e = b.length; d < e; d += 3) {
          a.set(b[d], b[d + 1], b[d + 2]), c.expandByPoint(a);
        }
      }

      if (void 0 === b || 0 === b.length) this.boundingBox.min.set(0, 0, 0), this.boundingBox.max.set(0, 0, 0);
      (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && THREE.error('THREE.BufferGeometry.computeBoundingBox: Computed min/max have NaN values. The "position" attribute is likely to have NaN values.');
    };
  }(),
  computeBoundingSphere: function () {
    var a = new THREE.Box3(),
        b = new THREE.Vector3();
    return function () {
      null === this.boundingSphere && (this.boundingSphere = new THREE.Sphere());
      var c = this.attributes.position.array;

      if (c) {
        a.makeEmpty();

        for (var d = this.boundingSphere.center, e = 0, f = c.length; e < f; e += 3) {
          b.set(c[e], c[e + 1], c[e + 2]), a.expandByPoint(b);
        }

        a.center(d);

        for (var g = 0, e = 0, f = c.length; e < f; e += 3) {
          b.set(c[e], c[e + 1], c[e + 2]), g = Math.max(g, d.distanceToSquared(b));
        }

        this.boundingSphere.radius = Math.sqrt(g);
        isNaN(this.boundingSphere.radius) && THREE.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.');
      }
    };
  }(),
  computeFaceNormals: function computeFaceNormals() {},
  computeVertexNormals: function computeVertexNormals() {
    var a = this.attributes;

    if (a.position) {
      var b = a.position.array;
      if (void 0 === a.normal) this.addAttribute("normal", new THREE.BufferAttribute(new Float32Array(b.length), 3));else for (var c = a.normal.array, d = 0, e = c.length; d < e; d++) {
        c[d] = 0;
      }
      var c = a.normal.array,
          f,
          g,
          h,
          k = new THREE.Vector3(),
          l = new THREE.Vector3(),
          p = new THREE.Vector3(),
          q = new THREE.Vector3(),
          n = new THREE.Vector3();
      if (a.index) for (var t = a.index.array, r = 0 < this.offsets.length ? this.offsets : [{
        start: 0,
        count: t.length,
        index: 0
      }], s = 0, u = r.length; s < u; ++s) {
        e = r[s].start;
        f = r[s].count;

        for (var v = r[s].index, d = e, e = e + f; d < e; d += 3) {
          f = 3 * (v + t[d]), g = 3 * (v + t[d + 1]), h = 3 * (v + t[d + 2]), k.fromArray(b, f), l.fromArray(b, g), p.fromArray(b, h), q.subVectors(p, l), n.subVectors(k, l), q.cross(n), c[f] += q.x, c[f + 1] += q.y, c[f + 2] += q.z, c[g] += q.x, c[g + 1] += q.y, c[g + 2] += q.z, c[h] += q.x, c[h + 1] += q.y, c[h + 2] += q.z;
        }
      } else for (d = 0, e = b.length; d < e; d += 9) {
        k.fromArray(b, d), l.fromArray(b, d + 3), p.fromArray(b, d + 6), q.subVectors(p, l), n.subVectors(k, l), q.cross(n), c[d] = q.x, c[d + 1] = q.y, c[d + 2] = q.z, c[d + 3] = q.x, c[d + 4] = q.y, c[d + 5] = q.z, c[d + 6] = q.x, c[d + 7] = q.y, c[d + 8] = q.z;
      }
      this.normalizeNormals();
      a.normal.needsUpdate = !0;
    }
  },
  computeTangents: function computeTangents() {
    function a(a, b, c) {
      q.fromArray(d, 3 * a);
      n.fromArray(d, 3 * b);
      t.fromArray(d, 3 * c);
      r.fromArray(f, 2 * a);
      s.fromArray(f, 2 * b);
      u.fromArray(f, 2 * c);
      v = n.x - q.x;
      x = t.x - q.x;
      D = n.y - q.y;
      w = t.y - q.y;
      y = n.z - q.z;
      A = t.z - q.z;
      E = s.x - r.x;
      G = u.x - r.x;
      F = s.y - r.y;
      z = u.y - r.y;
      I = 1 / (E * z - G * F);
      U.set((z * v - F * x) * I, (z * D - F * w) * I, (z * y - F * A) * I);
      M.set((E * x - G * v) * I, (E * w - G * D) * I, (E * A - G * y) * I);
      k[a].add(U);
      k[b].add(U);
      k[c].add(U);
      l[a].add(M);
      l[b].add(M);
      l[c].add(M);
    }

    function b(a) {
      ha.fromArray(e, 3 * a);
      O.copy(ha);
      ba = k[a];
      oa.copy(ba);
      oa.sub(ha.multiplyScalar(ha.dot(ba))).normalize();
      ja.crossVectors(O, ba);
      qa = ja.dot(l[a]);
      ca = 0 > qa ? -1 : 1;
      h[4 * a] = oa.x;
      h[4 * a + 1] = oa.y;
      h[4 * a + 2] = oa.z;
      h[4 * a + 3] = ca;
    }

    if (void 0 === this.attributes.index || void 0 === this.attributes.position || void 0 === this.attributes.normal || void 0 === this.attributes.uv) THREE.warn("THREE.BufferGeometry: Missing required attributes (index, position, normal or uv) in BufferGeometry.computeTangents()");else {
      var c = this.attributes.index.array,
          d = this.attributes.position.array,
          e = this.attributes.normal.array,
          f = this.attributes.uv.array,
          g = d.length / 3;
      void 0 === this.attributes.tangent && this.addAttribute("tangent", new THREE.BufferAttribute(new Float32Array(4 * g), 4));

      for (var h = this.attributes.tangent.array, k = [], l = [], p = 0; p < g; p++) {
        k[p] = new THREE.Vector3(), l[p] = new THREE.Vector3();
      }

      var q = new THREE.Vector3(),
          n = new THREE.Vector3(),
          t = new THREE.Vector3(),
          r = new THREE.Vector2(),
          s = new THREE.Vector2(),
          u = new THREE.Vector2(),
          v,
          x,
          D,
          w,
          y,
          A,
          E,
          G,
          F,
          z,
          I,
          U = new THREE.Vector3(),
          M = new THREE.Vector3(),
          H,
          L,
          P,
          N,
          R;
      0 === this.drawcalls.length && this.addDrawCall(0, c.length, 0);
      var V = this.drawcalls,
          p = 0;

      for (L = V.length; p < L; ++p) {
        H = V[p].start;
        P = V[p].count;
        var J = V[p].index,
            g = H;

        for (H += P; g < H; g += 3) {
          P = J + c[g], N = J + c[g + 1], R = J + c[g + 2], a(P, N, R);
        }
      }

      var oa = new THREE.Vector3(),
          ja = new THREE.Vector3(),
          ha = new THREE.Vector3(),
          O = new THREE.Vector3(),
          ca,
          ba,
          qa,
          p = 0;

      for (L = V.length; p < L; ++p) {
        for (H = V[p].start, P = V[p].count, J = V[p].index, g = H, H += P; g < H; g += 3) {
          P = J + c[g], N = J + c[g + 1], R = J + c[g + 2], b(P), b(N), b(R);
        }
      }
    }
  },
  computeOffsets: function computeOffsets(a) {
    void 0 === a && (a = 65535);

    for (var b = this.attributes.index.array, c = this.attributes.position.array, d = b.length / 3, e = new Uint16Array(b.length), f = 0, g = 0, h = [{
      start: 0,
      count: 0,
      index: 0
    }], k = h[0], l = 0, p = 0, q = new Int32Array(6), n = new Int32Array(c.length), t = new Int32Array(c.length), r = 0; r < c.length; r++) {
      n[r] = -1, t[r] = -1;
    }

    for (c = 0; c < d; c++) {
      for (var s = p = 0; 3 > s; s++) {
        r = b[3 * c + s], -1 == n[r] ? (q[2 * s] = r, q[2 * s + 1] = -1, p++) : n[r] < k.index ? (q[2 * s] = r, q[2 * s + 1] = -1, l++) : (q[2 * s] = r, q[2 * s + 1] = n[r]);
      }

      if (g + p > k.index + a) for (k = {
        start: f,
        count: 0,
        index: g
      }, h.push(k), p = 0; 6 > p; p += 2) {
        s = q[p + 1], -1 < s && s < k.index && (q[p + 1] = -1);
      }

      for (p = 0; 6 > p; p += 2) {
        r = q[p], s = q[p + 1], -1 === s && (s = g++), n[r] = s, t[s] = r, e[f++] = s - k.index, k.count++;
      }
    }

    this.reorderBuffers(e, t, g);
    return this.drawcalls = this.offsets = h;
  },
  merge: function merge(a, b) {
    if (!1 === a instanceof THREE.BufferGeometry) THREE.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.", a);else {
      void 0 === b && (b = 0);
      var c = this.attributes,
          d;

      for (d in c) {
        if (void 0 !== a.attributes[d]) for (var e = c[d].array, f = a.attributes[d], g = f.array, h = 0, f = f.itemSize * b; h < g.length; h++, f++) {
          e[f] = g[h];
        }
      }

      return this;
    }
  },
  normalizeNormals: function normalizeNormals() {
    for (var a = this.attributes.normal.array, b, c, d, e = 0, f = a.length; e < f; e += 3) {
      b = a[e], c = a[e + 1], d = a[e + 2], b = 1 / Math.sqrt(b * b + c * c + d * d), a[e] *= b, a[e + 1] *= b, a[e + 2] *= b;
    }
  },
  reorderBuffers: function reorderBuffers(a, b, c) {
    var d = {},
        e;

    for (e in this.attributes) {
      "index" != e && (d[e] = new this.attributes[e].array.constructor(this.attributes[e].itemSize * c));
    }

    for (var f = 0; f < c; f++) {
      var g = b[f];

      for (e in this.attributes) {
        if ("index" != e) for (var h = this.attributes[e].array, k = this.attributes[e].itemSize, l = d[e], p = 0; p < k; p++) {
          l[f * k + p] = h[g * k + p];
        }
      }
    }

    this.attributes.index.array = a;

    for (e in this.attributes) {
      "index" != e && (this.attributes[e].array = d[e], this.attributes[e].numItems = this.attributes[e].itemSize * c);
    }
  },
  toJSON: function toJSON() {
    var a = {
      metadata: {
        version: 4,
        type: "BufferGeometry",
        generator: "BufferGeometryExporter"
      },
      uuid: this.uuid,
      type: this.type,
      data: {
        attributes: {}
      }
    },
        b = this.attributes,
        c = this.offsets,
        d = this.boundingSphere,
        e;

    for (e in b) {
      var f = b[e],
          g = Array.prototype.slice.call(f.array);
      a.data.attributes[e] = {
        itemSize: f.itemSize,
        type: f.array.constructor.name,
        array: g
      };
    }

    0 < c.length && (a.data.offsets = JSON.parse(JSON.stringify(c)));
    null !== d && (a.data.boundingSphere = {
      center: d.center.toArray(),
      radius: d.radius
    });
    return a;
  },
  clone: function clone() {
    var a = new THREE.BufferGeometry(),
        b;

    for (b in this.attributes) {
      a.addAttribute(b, this.attributes[b].clone());
    }

    b = 0;

    for (var c = this.offsets.length; b < c; b++) {
      var d = this.offsets[b];
      a.offsets.push({
        start: d.start,
        index: d.index,
        count: d.count
      });
    }

    return a;
  },
  dispose: function dispose() {
    this.dispatchEvent({
      type: "dispose"
    });
  }
};
THREE.EventDispatcher.prototype.apply(THREE.BufferGeometry.prototype);

THREE.Geometry = function () {
  Object.defineProperty(this, "id", {
    value: THREE.GeometryIdCount++
  });
  this.uuid = THREE.Math.generateUUID();
  this.name = "";
  this.type = "Geometry";
  this.vertices = [];
  this.colors = [];
  this.faces = [];
  this.faceVertexUvs = [[]];
  this.morphTargets = [];
  this.morphColors = [];
  this.morphNormals = [];
  this.skinWeights = [];
  this.skinIndices = [];
  this.lineDistances = [];
  this.boundingSphere = this.boundingBox = null;
  this.hasTangents = !1;
  this.dynamic = !0;
  this.groupsNeedUpdate = this.lineDistancesNeedUpdate = this.colorsNeedUpdate = this.tangentsNeedUpdate = this.normalsNeedUpdate = this.uvsNeedUpdate = this.elementsNeedUpdate = this.verticesNeedUpdate = !1;
};

THREE.Geometry.prototype = {
  constructor: THREE.Geometry,
  applyMatrix: function applyMatrix(a) {
    for (var b = new THREE.Matrix3().getNormalMatrix(a), c = 0, d = this.vertices.length; c < d; c++) {
      this.vertices[c].applyMatrix4(a);
    }

    c = 0;

    for (d = this.faces.length; c < d; c++) {
      a = this.faces[c];
      a.normal.applyMatrix3(b).normalize();

      for (var e = 0, f = a.vertexNormals.length; e < f; e++) {
        a.vertexNormals[e].applyMatrix3(b).normalize();
      }
    }

    null !== this.boundingBox && this.computeBoundingBox();
    null !== this.boundingSphere && this.computeBoundingSphere();
    this.normalsNeedUpdate = this.verticesNeedUpdate = !0;
  },
  fromBufferGeometry: function fromBufferGeometry(a) {
    for (var b = this, c = a.attributes, d = c.position.array, e = void 0 !== c.index ? c.index.array : void 0, f = void 0 !== c.normal ? c.normal.array : void 0, g = void 0 !== c.color ? c.color.array : void 0, h = void 0 !== c.uv ? c.uv.array : void 0, k = [], l = [], p = c = 0; c < d.length; c += 3, p += 2) {
      b.vertices.push(new THREE.Vector3(d[c], d[c + 1], d[c + 2])), void 0 !== f && k.push(new THREE.Vector3(f[c], f[c + 1], f[c + 2])), void 0 !== g && b.colors.push(new THREE.Color(g[c], g[c + 1], g[c + 2])), void 0 !== h && l.push(new THREE.Vector2(h[p], h[p + 1]));
    }

    var q = function q(a, c, d) {
      var e = void 0 !== f ? [k[a].clone(), k[c].clone(), k[d].clone()] : [],
          n = void 0 !== g ? [b.colors[a].clone(), b.colors[c].clone(), b.colors[d].clone()] : [];
      b.faces.push(new THREE.Face3(a, c, d, e, n));
      void 0 !== h && b.faceVertexUvs[0].push([l[a].clone(), l[c].clone(), l[d].clone()]);
    };

    if (void 0 !== e) {
      if (d = a.drawcalls, 0 < d.length) for (c = 0; c < d.length; c++) {
        for (var p = d[c], n = p.start, t = p.count, r = p.index, p = n, n = n + t; p < n; p += 3) {
          q(r + e[p], r + e[p + 1], r + e[p + 2]);
        }
      } else for (c = 0; c < e.length; c += 3) {
        q(e[c], e[c + 1], e[c + 2]);
      }
    } else for (c = 0; c < d.length / 3; c += 3) {
      q(c, c + 1, c + 2);
    }
    this.computeFaceNormals();
    null !== a.boundingBox && (this.boundingBox = a.boundingBox.clone());
    null !== a.boundingSphere && (this.boundingSphere = a.boundingSphere.clone());
    return this;
  },
  center: function center() {
    this.computeBoundingBox();
    var a = this.boundingBox.center().negate();
    this.applyMatrix(new THREE.Matrix4().setPosition(a));
    return a;
  },
  computeFaceNormals: function computeFaceNormals() {
    for (var a = new THREE.Vector3(), b = new THREE.Vector3(), c = 0, d = this.faces.length; c < d; c++) {
      var e = this.faces[c],
          f = this.vertices[e.a],
          g = this.vertices[e.b];
      a.subVectors(this.vertices[e.c], g);
      b.subVectors(f, g);
      a.cross(b);
      a.normalize();
      e.normal.copy(a);
    }
  },
  computeVertexNormals: function computeVertexNormals(a) {
    var b, c, d;
    d = Array(this.vertices.length);
    b = 0;

    for (c = this.vertices.length; b < c; b++) {
      d[b] = new THREE.Vector3();
    }

    if (a) {
      var e,
          f,
          g,
          h = new THREE.Vector3(),
          k = new THREE.Vector3();
      a = 0;

      for (b = this.faces.length; a < b; a++) {
        c = this.faces[a], e = this.vertices[c.a], f = this.vertices[c.b], g = this.vertices[c.c], h.subVectors(g, f), k.subVectors(e, f), h.cross(k), d[c.a].add(h), d[c.b].add(h), d[c.c].add(h);
      }
    } else for (a = 0, b = this.faces.length; a < b; a++) {
      c = this.faces[a], d[c.a].add(c.normal), d[c.b].add(c.normal), d[c.c].add(c.normal);
    }

    b = 0;

    for (c = this.vertices.length; b < c; b++) {
      d[b].normalize();
    }

    a = 0;

    for (b = this.faces.length; a < b; a++) {
      c = this.faces[a], c.vertexNormals[0] = d[c.a].clone(), c.vertexNormals[1] = d[c.b].clone(), c.vertexNormals[2] = d[c.c].clone();
    }
  },
  computeMorphNormals: function computeMorphNormals() {
    var a, b, c, d, e;
    c = 0;

    for (d = this.faces.length; c < d; c++) {
      for (e = this.faces[c], e.__originalFaceNormal ? e.__originalFaceNormal.copy(e.normal) : e.__originalFaceNormal = e.normal.clone(), e.__originalVertexNormals || (e.__originalVertexNormals = []), a = 0, b = e.vertexNormals.length; a < b; a++) {
        e.__originalVertexNormals[a] ? e.__originalVertexNormals[a].copy(e.vertexNormals[a]) : e.__originalVertexNormals[a] = e.vertexNormals[a].clone();
      }
    }

    var f = new THREE.Geometry();
    f.faces = this.faces;
    a = 0;

    for (b = this.morphTargets.length; a < b; a++) {
      if (!this.morphNormals[a]) {
        this.morphNormals[a] = {};
        this.morphNormals[a].faceNormals = [];
        this.morphNormals[a].vertexNormals = [];
        e = this.morphNormals[a].faceNormals;
        var g = this.morphNormals[a].vertexNormals,
            h,
            k;
        c = 0;

        for (d = this.faces.length; c < d; c++) {
          h = new THREE.Vector3(), k = {
            a: new THREE.Vector3(),
            b: new THREE.Vector3(),
            c: new THREE.Vector3()
          }, e.push(h), g.push(k);
        }
      }

      g = this.morphNormals[a];
      f.vertices = this.morphTargets[a].vertices;
      f.computeFaceNormals();
      f.computeVertexNormals();
      c = 0;

      for (d = this.faces.length; c < d; c++) {
        e = this.faces[c], h = g.faceNormals[c], k = g.vertexNormals[c], h.copy(e.normal), k.a.copy(e.vertexNormals[0]), k.b.copy(e.vertexNormals[1]), k.c.copy(e.vertexNormals[2]);
      }
    }

    c = 0;

    for (d = this.faces.length; c < d; c++) {
      e = this.faces[c], e.normal = e.__originalFaceNormal, e.vertexNormals = e.__originalVertexNormals;
    }
  },
  computeTangents: function computeTangents() {
    var a,
        b,
        c,
        d,
        e,
        f,
        g,
        h,
        k,
        l,
        p,
        q,
        n,
        t,
        r,
        s,
        u,
        v = [],
        x = [];
    c = new THREE.Vector3();
    var D = new THREE.Vector3(),
        w = new THREE.Vector3(),
        y = new THREE.Vector3(),
        A = new THREE.Vector3();
    a = 0;

    for (b = this.vertices.length; a < b; a++) {
      v[a] = new THREE.Vector3(), x[a] = new THREE.Vector3();
    }

    a = 0;

    for (b = this.faces.length; a < b; a++) {
      e = this.faces[a], f = this.faceVertexUvs[0][a], d = e.a, u = e.b, e = e.c, g = this.vertices[d], h = this.vertices[u], k = this.vertices[e], l = f[0], p = f[1], q = f[2], f = h.x - g.x, n = k.x - g.x, t = h.y - g.y, r = k.y - g.y, h = h.z - g.z, g = k.z - g.z, k = p.x - l.x, s = q.x - l.x, p = p.y - l.y, l = q.y - l.y, q = 1 / (k * l - s * p), c.set((l * f - p * n) * q, (l * t - p * r) * q, (l * h - p * g) * q), D.set((k * n - s * f) * q, (k * r - s * t) * q, (k * g - s * h) * q), v[d].add(c), v[u].add(c), v[e].add(c), x[d].add(D), x[u].add(D), x[e].add(D);
    }

    D = ["a", "b", "c", "d"];
    a = 0;

    for (b = this.faces.length; a < b; a++) {
      for (e = this.faces[a], c = 0; c < Math.min(e.vertexNormals.length, 3); c++) {
        A.copy(e.vertexNormals[c]), d = e[D[c]], u = v[d], w.copy(u), w.sub(A.multiplyScalar(A.dot(u))).normalize(), y.crossVectors(e.vertexNormals[c], u), d = y.dot(x[d]), d = 0 > d ? -1 : 1, e.vertexTangents[c] = new THREE.Vector4(w.x, w.y, w.z, d);
      }
    }

    this.hasTangents = !0;
  },
  computeLineDistances: function computeLineDistances() {
    for (var a = 0, b = this.vertices, c = 0, d = b.length; c < d; c++) {
      0 < c && (a += b[c].distanceTo(b[c - 1])), this.lineDistances[c] = a;
    }
  },
  computeBoundingBox: function computeBoundingBox() {
    null === this.boundingBox && (this.boundingBox = new THREE.Box3());
    this.boundingBox.setFromPoints(this.vertices);
  },
  computeBoundingSphere: function computeBoundingSphere() {
    null === this.boundingSphere && (this.boundingSphere = new THREE.Sphere());
    this.boundingSphere.setFromPoints(this.vertices);
  },
  merge: function merge(a, b, c) {
    if (!1 === a instanceof THREE.Geometry) THREE.error("THREE.Geometry.merge(): geometry not an instance of THREE.Geometry.", a);else {
      var d,
          e = this.vertices.length,
          f = this.vertices,
          g = a.vertices,
          h = this.faces,
          k = a.faces,
          l = this.faceVertexUvs[0];
      a = a.faceVertexUvs[0];
      void 0 === c && (c = 0);
      void 0 !== b && (d = new THREE.Matrix3().getNormalMatrix(b));

      for (var p = 0, q = g.length; p < q; p++) {
        var n = g[p].clone();
        void 0 !== b && n.applyMatrix4(b);
        f.push(n);
      }

      p = 0;

      for (q = k.length; p < q; p++) {
        var g = k[p],
            t,
            r = g.vertexNormals,
            s = g.vertexColors,
            n = new THREE.Face3(g.a + e, g.b + e, g.c + e);
        n.normal.copy(g.normal);
        void 0 !== d && n.normal.applyMatrix3(d).normalize();
        b = 0;

        for (f = r.length; b < f; b++) {
          t = r[b].clone(), void 0 !== d && t.applyMatrix3(d).normalize(), n.vertexNormals.push(t);
        }

        n.color.copy(g.color);
        b = 0;

        for (f = s.length; b < f; b++) {
          t = s[b], n.vertexColors.push(t.clone());
        }

        n.materialIndex = g.materialIndex + c;
        h.push(n);
      }

      p = 0;

      for (q = a.length; p < q; p++) {
        if (c = a[p], d = [], void 0 !== c) {
          b = 0;

          for (f = c.length; b < f; b++) {
            d.push(c[b].clone());
          }

          l.push(d);
        }
      }
    }
  },
  mergeMesh: function mergeMesh(a) {
    !1 === a instanceof THREE.Mesh ? THREE.error("THREE.Geometry.mergeMesh(): mesh not an instance of THREE.Mesh.", a) : (a.matrixAutoUpdate && a.updateMatrix(), this.merge(a.geometry, a.matrix));
  },
  mergeVertices: function mergeVertices() {
    var a = {},
        b = [],
        c = [],
        d,
        e = Math.pow(10, 4),
        f,
        g;
    f = 0;

    for (g = this.vertices.length; f < g; f++) {
      d = this.vertices[f], d = Math.round(d.x * e) + "_" + Math.round(d.y * e) + "_" + Math.round(d.z * e), void 0 === a[d] ? (a[d] = f, b.push(this.vertices[f]), c[f] = b.length - 1) : c[f] = c[a[d]];
    }

    a = [];
    f = 0;

    for (g = this.faces.length; f < g; f++) {
      for (e = this.faces[f], e.a = c[e.a], e.b = c[e.b], e.c = c[e.c], e = [e.a, e.b, e.c], d = 0; 3 > d; d++) {
        if (e[d] == e[(d + 1) % 3]) {
          a.push(f);
          break;
        }
      }
    }

    for (f = a.length - 1; 0 <= f; f--) {
      for (e = a[f], this.faces.splice(e, 1), c = 0, g = this.faceVertexUvs.length; c < g; c++) {
        this.faceVertexUvs[c].splice(e, 1);
      }
    }

    f = this.vertices.length - b.length;
    this.vertices = b;
    return f;
  },
  toJSON: function toJSON() {
    function a(a, b, c) {
      return c ? a | 1 << b : a & ~(1 << b);
    }

    function b(a) {
      var b = a.x.toString() + a.y.toString() + a.z.toString();
      if (void 0 !== l[b]) return l[b];
      l[b] = k.length / 3;
      k.push(a.x, a.y, a.z);
      return l[b];
    }

    function c(a) {
      var b = a.r.toString() + a.g.toString() + a.b.toString();
      if (void 0 !== q[b]) return q[b];
      q[b] = p.length;
      p.push(a.getHex());
      return q[b];
    }

    function d(a) {
      var b = a.x.toString() + a.y.toString();
      if (void 0 !== t[b]) return t[b];
      t[b] = n.length / 2;
      n.push(a.x, a.y);
      return t[b];
    }

    var e = {
      metadata: {
        version: 4,
        type: "BufferGeometry",
        generator: "BufferGeometryExporter"
      },
      uuid: this.uuid,
      type: this.type
    };
    "" !== this.name && (e.name = this.name);

    if (void 0 !== this.parameters) {
      var f = this.parameters,
          g;

      for (g in f) {
        void 0 !== f[g] && (e[g] = f[g]);
      }

      return e;
    }

    f = [];

    for (g = 0; g < this.vertices.length; g++) {
      var h = this.vertices[g];
      f.push(h.x, h.y, h.z);
    }

    var h = [],
        k = [],
        l = {},
        p = [],
        q = {},
        n = [],
        t = {};

    for (g = 0; g < this.faces.length; g++) {
      var r = this.faces[g],
          s = void 0 !== this.faceVertexUvs[0][g],
          u = 0 < r.normal.length(),
          v = 0 < r.vertexNormals.length,
          x = 1 !== r.color.r || 1 !== r.color.g || 1 !== r.color.b,
          D = 0 < r.vertexColors.length,
          w = 0,
          w = a(w, 0, 0),
          w = a(w, 1, !1),
          w = a(w, 2, !1),
          w = a(w, 3, s),
          w = a(w, 4, u),
          w = a(w, 5, v),
          w = a(w, 6, x),
          w = a(w, 7, D);
      h.push(w);
      h.push(r.a, r.b, r.c);
      s && (s = this.faceVertexUvs[0][g], h.push(d(s[0]), d(s[1]), d(s[2])));
      u && h.push(b(r.normal));
      v && (u = r.vertexNormals, h.push(b(u[0]), b(u[1]), b(u[2])));
      x && h.push(c(r.color));
      D && (r = r.vertexColors, h.push(c(r[0]), c(r[1]), c(r[2])));
    }

    e.data = {};
    e.data.vertices = f;
    e.data.normals = k;
    0 < p.length && (e.data.colors = p);
    0 < n.length && (e.data.uvs = [n]);
    e.data.faces = h;
    return e;
  },
  clone: function clone() {
    for (var a = new THREE.Geometry(), b = this.vertices, c = 0, d = b.length; c < d; c++) {
      a.vertices.push(b[c].clone());
    }

    b = this.faces;
    c = 0;

    for (d = b.length; c < d; c++) {
      a.faces.push(b[c].clone());
    }

    c = 0;

    for (d = this.faceVertexUvs.length; c < d; c++) {
      b = this.faceVertexUvs[c];
      void 0 === a.faceVertexUvs[c] && (a.faceVertexUvs[c] = []);

      for (var e = 0, f = b.length; e < f; e++) {
        for (var g = b[e], h = [], k = 0, l = g.length; k < l; k++) {
          h.push(g[k].clone());
        }

        a.faceVertexUvs[c].push(h);
      }
    }

    return a;
  },
  dispose: function dispose() {
    this.dispatchEvent({
      type: "dispose"
    });
  }
};
THREE.EventDispatcher.prototype.apply(THREE.Geometry.prototype);
THREE.GeometryIdCount = 0;

THREE.Camera = function () {
  THREE.Object3D.call(this);
  this.type = "Camera";
  this.matrixWorldInverse = new THREE.Matrix4();
  this.projectionMatrix = new THREE.Matrix4();
};

THREE.Camera.prototype = Object.create(THREE.Object3D.prototype);
THREE.Camera.prototype.constructor = THREE.Camera;

THREE.Camera.prototype.getWorldDirection = function () {
  var a = new THREE.Quaternion();
  return function (b) {
    b = b || new THREE.Vector3();
    this.getWorldQuaternion(a);
    return b.set(0, 0, -1).applyQuaternion(a);
  };
}();

THREE.Camera.prototype.lookAt = function () {
  var a = new THREE.Matrix4();
  return function (b) {
    a.lookAt(this.position, b, this.up);
    this.quaternion.setFromRotationMatrix(a);
  };
}();

THREE.Camera.prototype.clone = function (a) {
  void 0 === a && (a = new THREE.Camera());
  THREE.Object3D.prototype.clone.call(this, a);
  a.matrixWorldInverse.copy(this.matrixWorldInverse);
  a.projectionMatrix.copy(this.projectionMatrix);
  return a;
};

THREE.CubeCamera = function (a, b, c) {
  THREE.Object3D.call(this);
  this.type = "CubeCamera";
  var d = new THREE.PerspectiveCamera(90, 1, a, b);
  d.up.set(0, -1, 0);
  d.lookAt(new THREE.Vector3(1, 0, 0));
  this.add(d);
  var e = new THREE.PerspectiveCamera(90, 1, a, b);
  e.up.set(0, -1, 0);
  e.lookAt(new THREE.Vector3(-1, 0, 0));
  this.add(e);
  var f = new THREE.PerspectiveCamera(90, 1, a, b);
  f.up.set(0, 0, 1);
  f.lookAt(new THREE.Vector3(0, 1, 0));
  this.add(f);
  var g = new THREE.PerspectiveCamera(90, 1, a, b);
  g.up.set(0, 0, -1);
  g.lookAt(new THREE.Vector3(0, -1, 0));
  this.add(g);
  var h = new THREE.PerspectiveCamera(90, 1, a, b);
  h.up.set(0, -1, 0);
  h.lookAt(new THREE.Vector3(0, 0, 1));
  this.add(h);
  var k = new THREE.PerspectiveCamera(90, 1, a, b);
  k.up.set(0, -1, 0);
  k.lookAt(new THREE.Vector3(0, 0, -1));
  this.add(k);
  this.renderTarget = new THREE.WebGLRenderTargetCube(c, c, {
    format: THREE.RGBFormat,
    magFilter: THREE.LinearFilter,
    minFilter: THREE.LinearFilter
  });

  this.updateCubeMap = function (a, b) {
    var c = this.renderTarget,
        n = c.generateMipmaps;
    c.generateMipmaps = !1;
    c.activeCubeFace = 0;
    a.render(b, d, c);
    c.activeCubeFace = 1;
    a.render(b, e, c);
    c.activeCubeFace = 2;
    a.render(b, f, c);
    c.activeCubeFace = 3;
    a.render(b, g, c);
    c.activeCubeFace = 4;
    a.render(b, h, c);
    c.generateMipmaps = n;
    c.activeCubeFace = 5;
    a.render(b, k, c);
  };
};

THREE.CubeCamera.prototype = Object.create(THREE.Object3D.prototype);
THREE.CubeCamera.prototype.constructor = THREE.CubeCamera;

THREE.OrthographicCamera = function (a, b, c, d, e, f) {
  THREE.Camera.call(this);
  this.type = "OrthographicCamera";
  this.zoom = 1;
  this.left = a;
  this.right = b;
  this.top = c;
  this.bottom = d;
  this.near = void 0 !== e ? e : .1;
  this.far = void 0 !== f ? f : 2E3;
  this.updateProjectionMatrix();
};

THREE.OrthographicCamera.prototype = Object.create(THREE.Camera.prototype);
THREE.OrthographicCamera.prototype.constructor = THREE.OrthographicCamera;

THREE.OrthographicCamera.prototype.updateProjectionMatrix = function () {
  var a = (this.right - this.left) / (2 * this.zoom),
      b = (this.top - this.bottom) / (2 * this.zoom),
      c = (this.right + this.left) / 2,
      d = (this.top + this.bottom) / 2;
  this.projectionMatrix.makeOrthographic(c - a, c + a, d + b, d - b, this.near, this.far);
};

THREE.OrthographicCamera.prototype.clone = function () {
  var a = new THREE.OrthographicCamera();
  THREE.Camera.prototype.clone.call(this, a);
  a.zoom = this.zoom;
  a.left = this.left;
  a.right = this.right;
  a.top = this.top;
  a.bottom = this.bottom;
  a.near = this.near;
  a.far = this.far;
  a.projectionMatrix.copy(this.projectionMatrix);
  return a;
};

THREE.PerspectiveCamera = function (a, b, c, d) {
  THREE.Camera.call(this);
  this.type = "PerspectiveCamera";
  this.zoom = 1;
  this.fov = void 0 !== a ? a : 50;
  this.aspect = void 0 !== b ? b : 1;
  this.near = void 0 !== c ? c : .1;
  this.far = void 0 !== d ? d : 2E3;
  this.updateProjectionMatrix();
};

THREE.PerspectiveCamera.prototype = Object.create(THREE.Camera.prototype);
THREE.PerspectiveCamera.prototype.constructor = THREE.PerspectiveCamera;

THREE.PerspectiveCamera.prototype.setLens = function (a, b) {
  void 0 === b && (b = 24);
  this.fov = 2 * THREE.Math.radToDeg(Math.atan(b / (2 * a)));
  this.updateProjectionMatrix();
};

THREE.PerspectiveCamera.prototype.setViewOffset = function (a, b, c, d, e, f) {
  this.fullWidth = a;
  this.fullHeight = b;
  this.x = c;
  this.y = d;
  this.width = e;
  this.height = f;
  this.updateProjectionMatrix();
};

THREE.PerspectiveCamera.prototype.updateProjectionMatrix = function () {
  var a = THREE.Math.radToDeg(2 * Math.atan(Math.tan(.5 * THREE.Math.degToRad(this.fov)) / this.zoom));

  if (this.fullWidth) {
    var b = this.fullWidth / this.fullHeight,
        a = Math.tan(THREE.Math.degToRad(.5 * a)) * this.near,
        c = -a,
        d = b * c,
        b = Math.abs(b * a - d),
        c = Math.abs(a - c);
    this.projectionMatrix.makeFrustum(d + this.x * b / this.fullWidth, d + (this.x + this.width) * b / this.fullWidth, a - (this.y + this.height) * c / this.fullHeight, a - this.y * c / this.fullHeight, this.near, this.far);
  } else this.projectionMatrix.makePerspective(a, this.aspect, this.near, this.far);
};

THREE.PerspectiveCamera.prototype.clone = function () {
  var a = new THREE.PerspectiveCamera();
  THREE.Camera.prototype.clone.call(this, a);
  a.zoom = this.zoom;
  a.fov = this.fov;
  a.aspect = this.aspect;
  a.near = this.near;
  a.far = this.far;
  a.projectionMatrix.copy(this.projectionMatrix);
  return a;
};

THREE.Light = function (a) {
  THREE.Object3D.call(this);
  this.type = "Light";
  this.color = new THREE.Color(a);
};

THREE.Light.prototype = Object.create(THREE.Object3D.prototype);
THREE.Light.prototype.constructor = THREE.Light;

THREE.Light.prototype.clone = function (a) {
  void 0 === a && (a = new THREE.Light());
  THREE.Object3D.prototype.clone.call(this, a);
  a.color.copy(this.color);
  return a;
};

THREE.AmbientLight = function (a) {
  THREE.Light.call(this, a);
  this.type = "AmbientLight";
};

THREE.AmbientLight.prototype = Object.create(THREE.Light.prototype);
THREE.AmbientLight.prototype.constructor = THREE.AmbientLight;

THREE.AmbientLight.prototype.clone = function () {
  var a = new THREE.AmbientLight();
  THREE.Light.prototype.clone.call(this, a);
  return a;
};

THREE.AreaLight = function (a, b) {
  THREE.Light.call(this, a);
  this.type = "AreaLight";
  this.normal = new THREE.Vector3(0, -1, 0);
  this.right = new THREE.Vector3(1, 0, 0);
  this.intensity = void 0 !== b ? b : 1;
  this.height = this.width = 1;
  this.constantAttenuation = 1.5;
  this.linearAttenuation = .5;
  this.quadraticAttenuation = .1;
};

THREE.AreaLight.prototype = Object.create(THREE.Light.prototype);
THREE.AreaLight.prototype.constructor = THREE.AreaLight;

THREE.DirectionalLight = function (a, b) {
  THREE.Light.call(this, a);
  this.type = "DirectionalLight";
  this.position.set(0, 1, 0);
  this.target = new THREE.Object3D();
  this.intensity = void 0 !== b ? b : 1;
  this.onlyShadow = this.castShadow = !1;
  this.shadowCameraNear = 50;
  this.shadowCameraFar = 5E3;
  this.shadowCameraLeft = -500;
  this.shadowCameraTop = this.shadowCameraRight = 500;
  this.shadowCameraBottom = -500;
  this.shadowCameraVisible = !1;
  this.shadowBias = 0;
  this.shadowDarkness = .5;
  this.shadowMapHeight = this.shadowMapWidth = 512;
  this.shadowCascade = !1;
  this.shadowCascadeOffset = new THREE.Vector3(0, 0, -1E3);
  this.shadowCascadeCount = 2;
  this.shadowCascadeBias = [0, 0, 0];
  this.shadowCascadeWidth = [512, 512, 512];
  this.shadowCascadeHeight = [512, 512, 512];
  this.shadowCascadeNearZ = [-1, .99, .998];
  this.shadowCascadeFarZ = [.99, .998, 1];
  this.shadowCascadeArray = [];
  this.shadowMatrix = this.shadowCamera = this.shadowMapSize = this.shadowMap = null;
};

THREE.DirectionalLight.prototype = Object.create(THREE.Light.prototype);
THREE.DirectionalLight.prototype.constructor = THREE.DirectionalLight;

THREE.DirectionalLight.prototype.clone = function () {
  var a = new THREE.DirectionalLight();
  THREE.Light.prototype.clone.call(this, a);
  a.target = this.target.clone();
  a.intensity = this.intensity;
  a.castShadow = this.castShadow;
  a.onlyShadow = this.onlyShadow;
  a.shadowCameraNear = this.shadowCameraNear;
  a.shadowCameraFar = this.shadowCameraFar;
  a.shadowCameraLeft = this.shadowCameraLeft;
  a.shadowCameraRight = this.shadowCameraRight;
  a.shadowCameraTop = this.shadowCameraTop;
  a.shadowCameraBottom = this.shadowCameraBottom;
  a.shadowCameraVisible = this.shadowCameraVisible;
  a.shadowBias = this.shadowBias;
  a.shadowDarkness = this.shadowDarkness;
  a.shadowMapWidth = this.shadowMapWidth;
  a.shadowMapHeight = this.shadowMapHeight;
  a.shadowCascade = this.shadowCascade;
  a.shadowCascadeOffset.copy(this.shadowCascadeOffset);
  a.shadowCascadeCount = this.shadowCascadeCount;
  a.shadowCascadeBias = this.shadowCascadeBias.slice(0);
  a.shadowCascadeWidth = this.shadowCascadeWidth.slice(0);
  a.shadowCascadeHeight = this.shadowCascadeHeight.slice(0);
  a.shadowCascadeNearZ = this.shadowCascadeNearZ.slice(0);
  a.shadowCascadeFarZ = this.shadowCascadeFarZ.slice(0);
  return a;
};

THREE.HemisphereLight = function (a, b, c) {
  THREE.Light.call(this, a);
  this.type = "HemisphereLight";
  this.position.set(0, 100, 0);
  this.groundColor = new THREE.Color(b);
  this.intensity = void 0 !== c ? c : 1;
};

THREE.HemisphereLight.prototype = Object.create(THREE.Light.prototype);
THREE.HemisphereLight.prototype.constructor = THREE.HemisphereLight;

THREE.HemisphereLight.prototype.clone = function () {
  var a = new THREE.HemisphereLight();
  THREE.Light.prototype.clone.call(this, a);
  a.groundColor.copy(this.groundColor);
  a.intensity = this.intensity;
  return a;
};

THREE.PointLight = function (a, b, c, d) {
  THREE.Light.call(this, a);
  this.type = "PointLight";
  this.intensity = void 0 !== b ? b : 1;
  this.distance = void 0 !== c ? c : 0;
  this.decay = void 0 !== d ? d : 1;
};

THREE.PointLight.prototype = Object.create(THREE.Light.prototype);
THREE.PointLight.prototype.constructor = THREE.PointLight;

THREE.PointLight.prototype.clone = function () {
  var a = new THREE.PointLight();
  THREE.Light.prototype.clone.call(this, a);
  a.intensity = this.intensity;
  a.distance = this.distance;
  a.decay = this.decay;
  return a;
};

THREE.SpotLight = function (a, b, c, d, e, f) {
  THREE.Light.call(this, a);
  this.type = "SpotLight";
  this.position.set(0, 1, 0);
  this.target = new THREE.Object3D();
  this.intensity = void 0 !== b ? b : 1;
  this.distance = void 0 !== c ? c : 0;
  this.angle = void 0 !== d ? d : Math.PI / 3;
  this.exponent = void 0 !== e ? e : 10;
  this.decay = void 0 !== f ? f : 1;
  this.onlyShadow = this.castShadow = !1;
  this.shadowCameraNear = 50;
  this.shadowCameraFar = 5E3;
  this.shadowCameraFov = 50;
  this.shadowCameraVisible = !1;
  this.shadowBias = 0;
  this.shadowDarkness = .5;
  this.shadowMapHeight = this.shadowMapWidth = 512;
  this.shadowMatrix = this.shadowCamera = this.shadowMapSize = this.shadowMap = null;
};

THREE.SpotLight.prototype = Object.create(THREE.Light.prototype);
THREE.SpotLight.prototype.constructor = THREE.SpotLight;

THREE.SpotLight.prototype.clone = function () {
  var a = new THREE.SpotLight();
  THREE.Light.prototype.clone.call(this, a);
  a.target = this.target.clone();
  a.intensity = this.intensity;
  a.distance = this.distance;
  a.angle = this.angle;
  a.exponent = this.exponent;
  a.decay = this.decay;
  a.castShadow = this.castShadow;
  a.onlyShadow = this.onlyShadow;
  a.shadowCameraNear = this.shadowCameraNear;
  a.shadowCameraFar = this.shadowCameraFar;
  a.shadowCameraFov = this.shadowCameraFov;
  a.shadowCameraVisible = this.shadowCameraVisible;
  a.shadowBias = this.shadowBias;
  a.shadowDarkness = this.shadowDarkness;
  a.shadowMapWidth = this.shadowMapWidth;
  a.shadowMapHeight = this.shadowMapHeight;
  return a;
};

THREE.Cache = {
  files: {},
  add: function add(a, b) {
    this.files[a] = b;
  },
  get: function get(a) {
    return this.files[a];
  },
  remove: function remove(a) {
    delete this.files[a];
  },
  clear: function clear() {
    this.files = {};
  }
};

THREE.Loader = function (a) {
  this.statusDomElement = (this.showStatus = a) ? THREE.Loader.prototype.addStatusElement() : null;
  this.imageLoader = new THREE.ImageLoader();

  this.onLoadStart = function () {};

  this.onLoadProgress = function () {};

  this.onLoadComplete = function () {};
};

THREE.Loader.prototype = {
  constructor: THREE.Loader,
  crossOrigin: void 0,
  addStatusElement: function addStatusElement() {
    var a = document.createElement("div");
    a.style.position = "absolute";
    a.style.right = "0px";
    a.style.top = "0px";
    a.style.fontSize = "0.8em";
    a.style.textAlign = "left";
    a.style.background = "rgba(0,0,0,0.25)";
    a.style.color = "#fff";
    a.style.width = "120px";
    a.style.padding = "0.5em 0.5em 0.5em 0.5em";
    a.style.zIndex = 1E3;
    a.innerHTML = "Loading ...";
    return a;
  },
  updateProgress: function updateProgress(a) {
    var b = "Loaded ",
        b = a.total ? b + ((100 * a.loaded / a.total).toFixed(0) + "%") : b + ((a.loaded / 1024).toFixed(2) + " KB");
    this.statusDomElement.innerHTML = b;
  },
  extractUrlBase: function extractUrlBase(a) {
    a = a.split("/");
    if (1 === a.length) return "./";
    a.pop();
    return a.join("/") + "/";
  },
  initMaterials: function initMaterials(a, b) {
    for (var c = [], d = 0; d < a.length; ++d) {
      c[d] = this.createMaterial(a[d], b);
    }

    return c;
  },
  needsTangents: function needsTangents(a) {
    for (var b = 0, c = a.length; b < c; b++) {
      if (a[b] instanceof THREE.ShaderMaterial) return !0;
    }

    return !1;
  },
  createMaterial: function createMaterial(a, b) {
    function c(a) {
      a = Math.log(a) / Math.LN2;
      return Math.pow(2, Math.round(a));
    }

    function d(a, d, e, g, h, k, s) {
      var u = b + e,
          v,
          x = THREE.Loader.Handlers.get(u);
      null !== x ? v = x.load(u) : (v = new THREE.Texture(), x = f.imageLoader, x.crossOrigin = f.crossOrigin, x.load(u, function (a) {
        if (!1 === THREE.Math.isPowerOfTwo(a.width) || !1 === THREE.Math.isPowerOfTwo(a.height)) {
          var b = c(a.width),
              d = c(a.height),
              e = document.createElement("canvas");
          e.width = b;
          e.height = d;
          e.getContext("2d").drawImage(a, 0, 0, b, d);
          v.image = e;
        } else v.image = a;

        v.needsUpdate = !0;
      }));
      v.sourceFile = e;
      g && (v.repeat.set(g[0], g[1]), 1 !== g[0] && (v.wrapS = THREE.RepeatWrapping), 1 !== g[1] && (v.wrapT = THREE.RepeatWrapping));
      h && v.offset.set(h[0], h[1]);
      k && (e = {
        repeat: THREE.RepeatWrapping,
        mirror: THREE.MirroredRepeatWrapping
      }, void 0 !== e[k[0]] && (v.wrapS = e[k[0]]), void 0 !== e[k[1]] && (v.wrapT = e[k[1]]));
      s && (v.anisotropy = s);
      a[d] = v;
    }

    function e(a) {
      return (255 * a[0] << 16) + (255 * a[1] << 8) + 255 * a[2];
    }

    var f = this,
        g = "MeshLambertMaterial",
        h = {
      color: 15658734,
      opacity: 1,
      map: null,
      lightMap: null,
      normalMap: null,
      bumpMap: null,
      wireframe: !1
    };

    if (a.shading) {
      var k = a.shading.toLowerCase();
      "phong" === k ? g = "MeshPhongMaterial" : "basic" === k && (g = "MeshBasicMaterial");
    }

    void 0 !== a.blending && void 0 !== THREE[a.blending] && (h.blending = THREE[a.blending]);
    void 0 !== a.transparent && (h.transparent = a.transparent);
    void 0 !== a.opacity && 1 > a.opacity && (h.transparent = !0);
    void 0 !== a.depthTest && (h.depthTest = a.depthTest);
    void 0 !== a.depthWrite && (h.depthWrite = a.depthWrite);
    void 0 !== a.visible && (h.visible = a.visible);
    void 0 !== a.flipSided && (h.side = THREE.BackSide);
    void 0 !== a.doubleSided && (h.side = THREE.DoubleSide);
    void 0 !== a.wireframe && (h.wireframe = a.wireframe);
    void 0 !== a.vertexColors && ("face" === a.vertexColors ? h.vertexColors = THREE.FaceColors : a.vertexColors && (h.vertexColors = THREE.VertexColors));
    a.colorDiffuse ? h.color = e(a.colorDiffuse) : a.DbgColor && (h.color = a.DbgColor);
    a.colorSpecular && (h.specular = e(a.colorSpecular));
    a.colorEmissive && (h.emissive = e(a.colorEmissive));
    void 0 !== a.transparency && (console.warn("THREE.Loader: transparency has been renamed to opacity"), a.opacity = a.transparency);
    void 0 !== a.opacity && (h.opacity = a.opacity);
    a.specularCoef && (h.shininess = a.specularCoef);
    a.mapDiffuse && b && d(h, "map", a.mapDiffuse, a.mapDiffuseRepeat, a.mapDiffuseOffset, a.mapDiffuseWrap, a.mapDiffuseAnisotropy);
    a.mapLight && b && d(h, "lightMap", a.mapLight, a.mapLightRepeat, a.mapLightOffset, a.mapLightWrap, a.mapLightAnisotropy);
    a.mapBump && b && d(h, "bumpMap", a.mapBump, a.mapBumpRepeat, a.mapBumpOffset, a.mapBumpWrap, a.mapBumpAnisotropy);
    a.mapNormal && b && d(h, "normalMap", a.mapNormal, a.mapNormalRepeat, a.mapNormalOffset, a.mapNormalWrap, a.mapNormalAnisotropy);
    a.mapSpecular && b && d(h, "specularMap", a.mapSpecular, a.mapSpecularRepeat, a.mapSpecularOffset, a.mapSpecularWrap, a.mapSpecularAnisotropy);
    a.mapAlpha && b && d(h, "alphaMap", a.mapAlpha, a.mapAlphaRepeat, a.mapAlphaOffset, a.mapAlphaWrap, a.mapAlphaAnisotropy);
    a.mapBumpScale && (h.bumpScale = a.mapBumpScale);
    a.mapNormalFactor && (h.normalScale = new THREE.Vector2(a.mapNormalFactor, a.mapNormalFactor));
    g = new THREE[g](h);
    void 0 !== a.DbgName && (g.name = a.DbgName);
    return g;
  }
};
THREE.Loader.Handlers = {
  handlers: [],
  add: function add(a, b) {
    this.handlers.push(a, b);
  },
  get: function get(a) {
    for (var b = 0, c = this.handlers.length; b < c; b += 2) {
      var d = this.handlers[b + 1];
      if (this.handlers[b].test(a)) return d;
    }

    return null;
  }
};

THREE.XHRLoader = function (a) {
  this.manager = void 0 !== a ? a : THREE.DefaultLoadingManager;
};

THREE.XHRLoader.prototype = {
  constructor: THREE.XHRLoader,
  load: function load(a, b, c, d) {
    var e = this,
        f = THREE.Cache.get(a);
    void 0 !== f ? b && b(f) : (f = new XMLHttpRequest(), f.open("GET", a, !0), f.addEventListener("load", function (c) {
      THREE.Cache.add(a, this.response);
      b && b(this.response);
      e.manager.itemEnd(a);
    }, !1), void 0 !== c && f.addEventListener("progress", function (a) {
      c(a);
    }, !1), void 0 !== d && f.addEventListener("error", function (a) {
      d(a);
    }, !1), void 0 !== this.crossOrigin && (f.crossOrigin = this.crossOrigin), void 0 !== this.responseType && (f.responseType = this.responseType), f.send(null), e.manager.itemStart(a));
  },
  setResponseType: function setResponseType(a) {
    this.responseType = a;
  },
  setCrossOrigin: function setCrossOrigin(a) {
    this.crossOrigin = a;
  }
};

THREE.ImageLoader = function (a) {
  this.manager = void 0 !== a ? a : THREE.DefaultLoadingManager;
};

THREE.ImageLoader.prototype = {
  constructor: THREE.ImageLoader,
  load: function load(a, b, c, d) {
    var e = this,
        f = THREE.Cache.get(a);
    if (void 0 !== f) b(f);else return f = document.createElement("img"), f.addEventListener("load", function (c) {
      THREE.Cache.add(a, this);
      b && b(this);
      e.manager.itemEnd(a);
    }, !1), void 0 !== c && f.addEventListener("progress", function (a) {
      c(a);
    }, !1), void 0 !== d && f.addEventListener("error", function (a) {
      d(a);
    }, !1), void 0 !== this.crossOrigin && (f.crossOrigin = this.crossOrigin), f.src = a, e.manager.itemStart(a), f;
  },
  setCrossOrigin: function setCrossOrigin(a) {
    this.crossOrigin = a;
  }
};

THREE.JSONLoader = function (a) {
  THREE.Loader.call(this, a);
  this.withCredentials = !1;
};

THREE.JSONLoader.prototype = Object.create(THREE.Loader.prototype);
THREE.JSONLoader.prototype.constructor = THREE.JSONLoader;

THREE.JSONLoader.prototype.load = function (a, b, c) {
  c = c && "string" === typeof c ? c : this.extractUrlBase(a);
  this.onLoadStart();
  this.loadAjaxJSON(this, a, b, c);
};

THREE.JSONLoader.prototype.loadAjaxJSON = function (a, b, c, d, e) {
  var f = new XMLHttpRequest(),
      g = 0;

  f.onreadystatechange = function () {
    if (f.readyState === f.DONE) {
      if (200 === f.status || 0 === f.status) {
        if (f.responseText) {
          var h = JSON.parse(f.responseText),
              k = h.metadata;

          if (void 0 !== k) {
            if ("object" === k.type) {
              THREE.error("THREE.JSONLoader: " + b + " should be loaded with THREE.ObjectLoader instead.");
              return;
            }

            if ("scene" === k.type) {
              THREE.error("THREE.JSONLoader: " + b + " seems to be a Scene. Use THREE.SceneLoader instead.");
              return;
            }
          }

          h = a.parse(h, d);
          c(h.geometry, h.materials);
        } else THREE.error("THREE.JSONLoader: " + b + " seems to be unreachable or the file is empty.");

        a.onLoadComplete();
      } else THREE.error("THREE.JSONLoader: Couldn't load " + b + " (" + f.status + ")");
    } else f.readyState === f.LOADING ? e && (0 === g && (g = f.getResponseHeader("Content-Length")), e({
      total: g,
      loaded: f.responseText.length
    })) : f.readyState === f.HEADERS_RECEIVED && void 0 !== e && (g = f.getResponseHeader("Content-Length"));
  };

  f.open("GET", b, !0);
  f.withCredentials = this.withCredentials;
  f.send(null);
};

THREE.JSONLoader.prototype.parse = function (a, b) {
  var c = new THREE.Geometry(),
      d = void 0 !== a.scale ? 1 / a.scale : 1;

  (function (b) {
    var d,
        g,
        h,
        k,
        l,
        p,
        q,
        n,
        t,
        r,
        s,
        u,
        v,
        x = a.faces;
    p = a.vertices;
    var D = a.normals,
        w = a.colors,
        y = 0;

    if (void 0 !== a.uvs) {
      for (d = 0; d < a.uvs.length; d++) {
        a.uvs[d].length && y++;
      }

      for (d = 0; d < y; d++) {
        c.faceVertexUvs[d] = [];
      }
    }

    k = 0;

    for (l = p.length; k < l;) {
      d = new THREE.Vector3(), d.x = p[k++] * b, d.y = p[k++] * b, d.z = p[k++] * b, c.vertices.push(d);
    }

    k = 0;

    for (l = x.length; k < l;) {
      if (b = x[k++], t = b & 1, h = b & 2, d = b & 8, q = b & 16, r = b & 32, p = b & 64, b &= 128, t) {
        t = new THREE.Face3();
        t.a = x[k];
        t.b = x[k + 1];
        t.c = x[k + 3];
        s = new THREE.Face3();
        s.a = x[k + 1];
        s.b = x[k + 2];
        s.c = x[k + 3];
        k += 4;
        h && (h = x[k++], t.materialIndex = h, s.materialIndex = h);
        h = c.faces.length;
        if (d) for (d = 0; d < y; d++) {
          for (u = a.uvs[d], c.faceVertexUvs[d][h] = [], c.faceVertexUvs[d][h + 1] = [], g = 0; 4 > g; g++) {
            n = x[k++], v = u[2 * n], n = u[2 * n + 1], v = new THREE.Vector2(v, n), 2 !== g && c.faceVertexUvs[d][h].push(v), 0 !== g && c.faceVertexUvs[d][h + 1].push(v);
          }
        }
        q && (q = 3 * x[k++], t.normal.set(D[q++], D[q++], D[q]), s.normal.copy(t.normal));
        if (r) for (d = 0; 4 > d; d++) {
          q = 3 * x[k++], r = new THREE.Vector3(D[q++], D[q++], D[q]), 2 !== d && t.vertexNormals.push(r), 0 !== d && s.vertexNormals.push(r);
        }
        p && (p = x[k++], p = w[p], t.color.setHex(p), s.color.setHex(p));
        if (b) for (d = 0; 4 > d; d++) {
          p = x[k++], p = w[p], 2 !== d && t.vertexColors.push(new THREE.Color(p)), 0 !== d && s.vertexColors.push(new THREE.Color(p));
        }
        c.faces.push(t);
        c.faces.push(s);
      } else {
        t = new THREE.Face3();
        t.a = x[k++];
        t.b = x[k++];
        t.c = x[k++];
        h && (h = x[k++], t.materialIndex = h);
        h = c.faces.length;
        if (d) for (d = 0; d < y; d++) {
          for (u = a.uvs[d], c.faceVertexUvs[d][h] = [], g = 0; 3 > g; g++) {
            n = x[k++], v = u[2 * n], n = u[2 * n + 1], v = new THREE.Vector2(v, n), c.faceVertexUvs[d][h].push(v);
          }
        }
        q && (q = 3 * x[k++], t.normal.set(D[q++], D[q++], D[q]));
        if (r) for (d = 0; 3 > d; d++) {
          q = 3 * x[k++], r = new THREE.Vector3(D[q++], D[q++], D[q]), t.vertexNormals.push(r);
        }
        p && (p = x[k++], t.color.setHex(w[p]));
        if (b) for (d = 0; 3 > d; d++) {
          p = x[k++], t.vertexColors.push(new THREE.Color(w[p]));
        }
        c.faces.push(t);
      }
    }
  })(d);

  (function () {
    var b = void 0 !== a.influencesPerVertex ? a.influencesPerVertex : 2;
    if (a.skinWeights) for (var d = 0, g = a.skinWeights.length; d < g; d += b) {
      c.skinWeights.push(new THREE.Vector4(a.skinWeights[d], 1 < b ? a.skinWeights[d + 1] : 0, 2 < b ? a.skinWeights[d + 2] : 0, 3 < b ? a.skinWeights[d + 3] : 0));
    }
    if (a.skinIndices) for (d = 0, g = a.skinIndices.length; d < g; d += b) {
      c.skinIndices.push(new THREE.Vector4(a.skinIndices[d], 1 < b ? a.skinIndices[d + 1] : 0, 2 < b ? a.skinIndices[d + 2] : 0, 3 < b ? a.skinIndices[d + 3] : 0));
    }
    c.bones = a.bones;
    c.bones && 0 < c.bones.length && (c.skinWeights.length !== c.skinIndices.length || c.skinIndices.length !== c.vertices.length) && THREE.warn("THREE.JSONLoader: When skinning, number of vertices (" + c.vertices.length + "), skinIndices (" + c.skinIndices.length + "), and skinWeights (" + c.skinWeights.length + ") should match.");
    c.animation = a.animation;
    c.animations = a.animations;
  })();

  (function (b) {
    if (void 0 !== a.morphTargets) {
      var d, g, h, k, l, p;
      d = 0;

      for (g = a.morphTargets.length; d < g; d++) {
        for (c.morphTargets[d] = {}, c.morphTargets[d].name = a.morphTargets[d].name, c.morphTargets[d].vertices = [], l = c.morphTargets[d].vertices, p = a.morphTargets[d].vertices, h = 0, k = p.length; h < k; h += 3) {
          var q = new THREE.Vector3();
          q.x = p[h] * b;
          q.y = p[h + 1] * b;
          q.z = p[h + 2] * b;
          l.push(q);
        }
      }
    }

    if (void 0 !== a.morphColors) for (d = 0, g = a.morphColors.length; d < g; d++) {
      for (c.morphColors[d] = {}, c.morphColors[d].name = a.morphColors[d].name, c.morphColors[d].colors = [], k = c.morphColors[d].colors, l = a.morphColors[d].colors, b = 0, h = l.length; b < h; b += 3) {
        p = new THREE.Color(16755200), p.setRGB(l[b], l[b + 1], l[b + 2]), k.push(p);
      }
    }
  })(d);

  c.computeFaceNormals();
  c.computeBoundingSphere();
  if (void 0 === a.materials || 0 === a.materials.length) return {
    geometry: c
  };
  d = this.initMaterials(a.materials, b);
  this.needsTangents(d) && c.computeTangents();
  return {
    geometry: c,
    materials: d
  };
};

THREE.LoadingManager = function (a, b, c) {
  var d = this,
      e = 0,
      f = 0;
  this.onLoad = a;
  this.onProgress = b;
  this.onError = c;

  this.itemStart = function (a) {
    f++;
  };

  this.itemEnd = function (a) {
    e++;
    if (void 0 !== d.onProgress) d.onProgress(a, e, f);
    if (e === f && void 0 !== d.onLoad) d.onLoad();
  };
};

THREE.DefaultLoadingManager = new THREE.LoadingManager();

THREE.BufferGeometryLoader = function (a) {
  this.manager = void 0 !== a ? a : THREE.DefaultLoadingManager;
};

THREE.BufferGeometryLoader.prototype = {
  constructor: THREE.BufferGeometryLoader,
  load: function load(a, b, c, d) {
    var e = this,
        f = new THREE.XHRLoader(e.manager);
    f.setCrossOrigin(this.crossOrigin);
    f.load(a, function (a) {
      b(e.parse(JSON.parse(a)));
    }, c, d);
  },
  setCrossOrigin: function setCrossOrigin(a) {
    this.crossOrigin = a;
  },
  parse: function parse(a) {
    var b = new THREE.BufferGeometry(),
        c = a.data.attributes,
        d;

    for (d in c) {
      var e = c[d],
          f = new self[e.type](e.array);
      b.addAttribute(d, new THREE.BufferAttribute(f, e.itemSize));
    }

    c = a.data.offsets;
    void 0 !== c && (b.offsets = JSON.parse(JSON.stringify(c)));
    a = a.data.boundingSphere;
    void 0 !== a && (c = new THREE.Vector3(), void 0 !== a.center && c.fromArray(a.center), b.boundingSphere = new THREE.Sphere(c, a.radius));
    return b;
  }
};

THREE.MaterialLoader = function (a) {
  this.manager = void 0 !== a ? a : THREE.DefaultLoadingManager;
};

THREE.MaterialLoader.prototype = {
  constructor: THREE.MaterialLoader,
  load: function load(a, b, c, d) {
    var e = this,
        f = new THREE.XHRLoader(e.manager);
    f.setCrossOrigin(this.crossOrigin);
    f.load(a, function (a) {
      b(e.parse(JSON.parse(a)));
    }, c, d);
  },
  setCrossOrigin: function setCrossOrigin(a) {
    this.crossOrigin = a;
  },
  parse: function parse(a) {
    var b = new THREE[a.type]();
    void 0 !== a.color && b.color.setHex(a.color);
    void 0 !== a.emissive && b.emissive.setHex(a.emissive);
    void 0 !== a.specular && b.specular.setHex(a.specular);
    void 0 !== a.shininess && (b.shininess = a.shininess);
    void 0 !== a.uniforms && (b.uniforms = a.uniforms);
    void 0 !== a.vertexShader && (b.vertexShader = a.vertexShader);
    void 0 !== a.fragmentShader && (b.fragmentShader = a.fragmentShader);
    void 0 !== a.vertexColors && (b.vertexColors = a.vertexColors);
    void 0 !== a.shading && (b.shading = a.shading);
    void 0 !== a.blending && (b.blending = a.blending);
    void 0 !== a.side && (b.side = a.side);
    void 0 !== a.opacity && (b.opacity = a.opacity);
    void 0 !== a.transparent && (b.transparent = a.transparent);
    void 0 !== a.wireframe && (b.wireframe = a.wireframe);
    void 0 !== a.size && (b.size = a.size);
    void 0 !== a.sizeAttenuation && (b.sizeAttenuation = a.sizeAttenuation);
    if (void 0 !== a.materials) for (var c = 0, d = a.materials.length; c < d; c++) {
      b.materials.push(this.parse(a.materials[c]));
    }
    return b;
  }
};

THREE.ObjectLoader = function (a) {
  this.manager = void 0 !== a ? a : THREE.DefaultLoadingManager;
  this.texturePath = "";
};

THREE.ObjectLoader.prototype = {
  constructor: THREE.ObjectLoader,
  load: function load(a, b, c, d) {
    "" === this.texturePath && (this.texturePath = a.substring(0, a.lastIndexOf("/") + 1));
    var e = this,
        f = new THREE.XHRLoader(e.manager);
    f.setCrossOrigin(this.crossOrigin);
    f.load(a, function (a) {
      e.parse(JSON.parse(a), b);
    }, c, d);
  },
  setTexturePath: function setTexturePath(a) {
    this.texturePath = a;
  },
  setCrossOrigin: function setCrossOrigin(a) {
    this.crossOrigin = a;
  },
  parse: function parse(a, b) {
    var c = this.parseGeometries(a.geometries),
        d = this.parseImages(a.images, function () {
      void 0 !== b && b(e);
    }),
        d = this.parseTextures(a.textures, d),
        d = this.parseMaterials(a.materials, d),
        e = this.parseObject(a.object, c, d);
    void 0 !== a.images && 0 !== a.images.length || void 0 === b || b(e);
    return e;
  },
  parseGeometries: function parseGeometries(a) {
    var b = {};
    if (void 0 !== a) for (var c = new THREE.JSONLoader(), d = new THREE.BufferGeometryLoader(), e = 0, f = a.length; e < f; e++) {
      var g,
          h = a[e];

      switch (h.type) {
        case "PlaneGeometry":
        case "PlaneBufferGeometry":
          g = new THREE[h.type](h.width, h.height, h.widthSegments, h.heightSegments);
          break;

        case "BoxGeometry":
        case "CubeGeometry":
          g = new THREE.BoxGeometry(h.width, h.height, h.depth, h.widthSegments, h.heightSegments, h.depthSegments);
          break;

        case "CircleGeometry":
          g = new THREE.CircleGeometry(h.radius, h.segments);
          break;

        case "CylinderGeometry":
          g = new THREE.CylinderGeometry(h.radiusTop, h.radiusBottom, h.height, h.radialSegments, h.heightSegments, h.openEnded);
          break;

        case "SphereGeometry":
          g = new THREE.SphereGeometry(h.radius, h.widthSegments, h.heightSegments, h.phiStart, h.phiLength, h.thetaStart, h.thetaLength);
          break;

        case "IcosahedronGeometry":
          g = new THREE.IcosahedronGeometry(h.radius, h.detail);
          break;

        case "TorusGeometry":
          g = new THREE.TorusGeometry(h.radius, h.tube, h.radialSegments, h.tubularSegments, h.arc);
          break;

        case "TorusKnotGeometry":
          g = new THREE.TorusKnotGeometry(h.radius, h.tube, h.radialSegments, h.tubularSegments, h.p, h.q, h.heightScale);
          break;

        case "BufferGeometry":
          g = d.parse(h);
          break;

        case "Geometry":
          g = c.parse(h.data).geometry;
      }

      g.uuid = h.uuid;
      void 0 !== h.name && (g.name = h.name);
      b[h.uuid] = g;
    }
    return b;
  },
  parseMaterials: function parseMaterials(a, b) {
    var c = {};
    if (void 0 !== a) for (var d = function d(a) {
      void 0 === b[a] && THREE.warn("THREE.ObjectLoader: Undefined texture", a);
      return b[a];
    }, e = new THREE.MaterialLoader(), f = 0, g = a.length; f < g; f++) {
      var h = a[f],
          k = e.parse(h);
      k.uuid = h.uuid;
      void 0 !== h.name && (k.name = h.name);
      void 0 !== h.map && (k.map = d(h.map));
      void 0 !== h.bumpMap && (k.bumpMap = d(h.bumpMap), h.bumpScale && (k.bumpScale = new THREE.Vector2(h.bumpScale, h.bumpScale)));
      void 0 !== h.alphaMap && (k.alphaMap = d(h.alphaMap));
      void 0 !== h.envMap && (k.envMap = d(h.envMap));
      void 0 !== h.normalMap && (k.normalMap = d(h.normalMap), h.normalScale && (k.normalScale = new THREE.Vector2(h.normalScale, h.normalScale)));
      void 0 !== h.lightMap && (k.lightMap = d(h.lightMap));
      void 0 !== h.specularMap && (k.specularMap = d(h.specularMap));
      c[h.uuid] = k;
    }
    return c;
  },
  parseImages: function parseImages(a, b) {
    var c = this,
        d = {};

    if (void 0 !== a && 0 < a.length) {
      var e = new THREE.LoadingManager(b),
          f = new THREE.ImageLoader(e);
      f.setCrossOrigin(this.crossOrigin);

      for (var e = function e(a) {
        c.manager.itemStart(a);
        return f.load(a, function () {
          c.manager.itemEnd(a);
        });
      }, g = 0, h = a.length; g < h; g++) {
        var k = a[g],
            l = /^(\/\/)|([a-z]+:(\/\/)?)/i.test(k.url) ? k.url : c.texturePath + k.url;
        d[k.uuid] = e(l);
      }
    }

    return d;
  },
  parseTextures: function parseTextures(a, b) {
    var c = {};
    if (void 0 !== a) for (var d = 0, e = a.length; d < e; d++) {
      var f = a[d];
      void 0 === f.image && THREE.warn('THREE.ObjectLoader: No "image" speficied for', f.uuid);
      void 0 === b[f.image] && THREE.warn("THREE.ObjectLoader: Undefined image", f.image);
      var g = new THREE.Texture(b[f.image]);
      g.needsUpdate = !0;
      g.uuid = f.uuid;
      void 0 !== f.name && (g.name = f.name);
      void 0 !== f.repeat && (g.repeat = new THREE.Vector2(f.repeat[0], f.repeat[1]));
      void 0 !== f.minFilter && (g.minFilter = THREE[f.minFilter]);
      void 0 !== f.magFilter && (g.magFilter = THREE[f.magFilter]);
      void 0 !== f.anisotropy && (g.anisotropy = f.anisotropy);
      f.wrap instanceof Array && (g.wrapS = THREE[f.wrap[0]], g.wrapT = THREE[f.wrap[1]]);
      c[f.uuid] = g;
    }
    return c;
  },
  parseObject: function () {
    var a = new THREE.Matrix4();
    return function (b, c, d) {
      var e;

      e = function e(a) {
        void 0 === c[a] && THREE.warn("THREE.ObjectLoader: Undefined geometry", a);
        return c[a];
      };

      var f = function f(a) {
        void 0 === d[a] && THREE.warn("THREE.ObjectLoader: Undefined material", a);
        return d[a];
      };

      switch (b.type) {
        case "Scene":
          e = new THREE.Scene();
          break;

        case "PerspectiveCamera":
          e = new THREE.PerspectiveCamera(b.fov, b.aspect, b.near, b.far);
          break;

        case "OrthographicCamera":
          e = new THREE.OrthographicCamera(b.left, b.right, b.top, b.bottom, b.near, b.far);
          break;

        case "AmbientLight":
          e = new THREE.AmbientLight(b.color);
          break;

        case "DirectionalLight":
          e = new THREE.DirectionalLight(b.color, b.intensity);
          break;

        case "PointLight":
          e = new THREE.PointLight(b.color, b.intensity, b.distance, b.decay);
          break;

        case "SpotLight":
          e = new THREE.SpotLight(b.color, b.intensity, b.distance, b.angle, b.exponent, b.decay);
          break;

        case "HemisphereLight":
          e = new THREE.HemisphereLight(b.color, b.groundColor, b.intensity);
          break;

        case "Mesh":
          e = new THREE.Mesh(e(b.geometry), f(b.material));
          break;

        case "Line":
          e = new THREE.Line(e(b.geometry), f(b.material), b.mode);
          break;

        case "PointCloud":
          e = new THREE.PointCloud(e(b.geometry), f(b.material));
          break;

        case "Sprite":
          e = new THREE.Sprite(f(b.material));
          break;

        case "Group":
          e = new THREE.Group();
          break;

        default:
          e = new THREE.Object3D();
      }

      e.uuid = b.uuid;
      void 0 !== b.name && (e.name = b.name);
      void 0 !== b.matrix ? (a.fromArray(b.matrix), a.decompose(e.position, e.quaternion, e.scale)) : (void 0 !== b.position && e.position.fromArray(b.position), void 0 !== b.rotation && e.rotation.fromArray(b.rotation), void 0 !== b.scale && e.scale.fromArray(b.scale));
      void 0 !== b.visible && (e.visible = b.visible);
      void 0 !== b.userData && (e.userData = b.userData);
      if (void 0 !== b.children) for (var g in b.children) {
        e.add(this.parseObject(b.children[g], c, d));
      }
      return e;
    };
  }()
};

THREE.TextureLoader = function (a) {
  this.manager = void 0 !== a ? a : THREE.DefaultLoadingManager;
};

THREE.TextureLoader.prototype = {
  constructor: THREE.TextureLoader,
  load: function load(a, b, c, d) {
    var e = new THREE.ImageLoader(this.manager);
    e.setCrossOrigin(this.crossOrigin);
    e.load(a, function (a) {
      a = new THREE.Texture(a);
      a.needsUpdate = !0;
      void 0 !== b && b(a);
    }, c, d);
  },
  setCrossOrigin: function setCrossOrigin(a) {
    this.crossOrigin = a;
  }
};

THREE.DataTextureLoader = THREE.BinaryTextureLoader = function () {
  this._parser = null;
};

THREE.BinaryTextureLoader.prototype = {
  constructor: THREE.BinaryTextureLoader,
  load: function load(a, b, c, d) {
    var e = this,
        f = new THREE.DataTexture(),
        g = new THREE.XHRLoader();
    g.setResponseType("arraybuffer");
    g.load(a, function (a) {
      if (a = e._parser(a)) void 0 !== a.image ? f.image = a.image : void 0 !== a.data && (f.image.width = a.width, f.image.height = a.height, f.image.data = a.data), f.wrapS = void 0 !== a.wrapS ? a.wrapS : THREE.ClampToEdgeWrapping, f.wrapT = void 0 !== a.wrapT ? a.wrapT : THREE.ClampToEdgeWrapping, f.magFilter = void 0 !== a.magFilter ? a.magFilter : THREE.LinearFilter, f.minFilter = void 0 !== a.minFilter ? a.minFilter : THREE.LinearMipMapLinearFilter, f.anisotropy = void 0 !== a.anisotropy ? a.anisotropy : 1, void 0 !== a.format && (f.format = a.format), void 0 !== a.type && (f.type = a.type), void 0 !== a.mipmaps && (f.mipmaps = a.mipmaps), 1 === a.mipmapCount && (f.minFilter = THREE.LinearFilter), f.needsUpdate = !0, b && b(f, a);
    }, c, d);
    return f;
  }
};

THREE.CompressedTextureLoader = function () {
  this._parser = null;
};

THREE.CompressedTextureLoader.prototype = {
  constructor: THREE.CompressedTextureLoader,
  load: function load(a, b, c) {
    var d = this,
        e = [],
        f = new THREE.CompressedTexture();
    f.image = e;
    var g = new THREE.XHRLoader();
    g.setResponseType("arraybuffer");

    if (a instanceof Array) {
      var h = 0;

      c = function c(_c) {
        g.load(a[_c], function (a) {
          a = d._parser(a, !0);
          e[_c] = {
            width: a.width,
            height: a.height,
            format: a.format,
            mipmaps: a.mipmaps
          };
          h += 1;
          6 === h && (1 == a.mipmapCount && (f.minFilter = THREE.LinearFilter), f.format = a.format, f.needsUpdate = !0, b && b(f));
        });
      };

      for (var k = 0, l = a.length; k < l; ++k) {
        c(k);
      }
    } else g.load(a, function (a) {
      a = d._parser(a, !0);
      if (a.isCubemap) for (var c = a.mipmaps.length / a.mipmapCount, g = 0; g < c; g++) {
        e[g] = {
          mipmaps: []
        };

        for (var h = 0; h < a.mipmapCount; h++) {
          e[g].mipmaps.push(a.mipmaps[g * a.mipmapCount + h]), e[g].format = a.format, e[g].width = a.width, e[g].height = a.height;
        }
      } else f.image.width = a.width, f.image.height = a.height, f.mipmaps = a.mipmaps;
      1 === a.mipmapCount && (f.minFilter = THREE.LinearFilter);
      f.format = a.format;
      f.needsUpdate = !0;
      b && b(f);
    });

    return f;
  }
};

THREE.Material = function () {
  Object.defineProperty(this, "id", {
    value: THREE.MaterialIdCount++
  });
  this.uuid = THREE.Math.generateUUID();
  this.name = "";
  this.type = "Material";
  this.side = THREE.FrontSide;
  this.opacity = 1;
  this.transparent = !1;
  this.blending = THREE.NormalBlending;
  this.blendSrc = THREE.SrcAlphaFactor;
  this.blendDst = THREE.OneMinusSrcAlphaFactor;
  this.blendEquation = THREE.AddEquation;
  this.blendEquationAlpha = this.blendDstAlpha = this.blendSrcAlpha = null;
  this.colorWrite = this.depthWrite = this.depthTest = !0;
  this.polygonOffset = !1;
  this.overdraw = this.alphaTest = this.polygonOffsetUnits = this.polygonOffsetFactor = 0;
  this._needsUpdate = this.visible = !0;
};

THREE.Material.prototype = {
  constructor: THREE.Material,

  get needsUpdate() {
    return this._needsUpdate;
  },

  set needsUpdate(a) {
    !0 === a && this.update();
    this._needsUpdate = a;
  },

  setValues: function setValues(a) {
    if (void 0 !== a) for (var b in a) {
      var c = a[b];
      if (void 0 === c) THREE.warn("THREE.Material: '" + b + "' parameter is undefined.");else if (b in this) {
        var d = this[b];
        d instanceof THREE.Color ? d.set(c) : d instanceof THREE.Vector3 && c instanceof THREE.Vector3 ? d.copy(c) : this[b] = "overdraw" == b ? Number(c) : c;
      }
    }
  },
  toJSON: function toJSON() {
    var a = {
      metadata: {
        version: 4.2,
        type: "material",
        generator: "MaterialExporter"
      },
      uuid: this.uuid,
      type: this.type
    };
    "" !== this.name && (a.name = this.name);
    this instanceof THREE.MeshBasicMaterial ? (a.color = this.color.getHex(), this.vertexColors !== THREE.NoColors && (a.vertexColors = this.vertexColors), this.blending !== THREE.NormalBlending && (a.blending = this.blending), this.side !== THREE.FrontSide && (a.side = this.side)) : this instanceof THREE.MeshLambertMaterial ? (a.color = this.color.getHex(), a.emissive = this.emissive.getHex(), this.vertexColors !== THREE.NoColors && (a.vertexColors = this.vertexColors), this.shading !== THREE.SmoothShading && (a.shading = this.shading), this.blending !== THREE.NormalBlending && (a.blending = this.blending), this.side !== THREE.FrontSide && (a.side = this.side)) : this instanceof THREE.MeshPhongMaterial ? (a.color = this.color.getHex(), a.emissive = this.emissive.getHex(), a.specular = this.specular.getHex(), a.shininess = this.shininess, this.vertexColors !== THREE.NoColors && (a.vertexColors = this.vertexColors), this.shading !== THREE.SmoothShading && (a.shading = this.shading), this.blending !== THREE.NormalBlending && (a.blending = this.blending), this.side !== THREE.FrontSide && (a.side = this.side)) : this instanceof THREE.MeshNormalMaterial ? (this.blending !== THREE.NormalBlending && (a.blending = this.blending), this.side !== THREE.FrontSide && (a.side = this.side)) : this instanceof THREE.MeshDepthMaterial ? (this.blending !== THREE.NormalBlending && (a.blending = this.blending), this.side !== THREE.FrontSide && (a.side = this.side)) : this instanceof THREE.PointCloudMaterial ? (a.size = this.size, a.sizeAttenuation = this.sizeAttenuation, a.color = this.color.getHex(), this.vertexColors !== THREE.NoColors && (a.vertexColors = this.vertexColors), this.blending !== THREE.NormalBlending && (a.blending = this.blending)) : this instanceof THREE.ShaderMaterial ? (a.uniforms = this.uniforms, a.vertexShader = this.vertexShader, a.fragmentShader = this.fragmentShader) : this instanceof THREE.SpriteMaterial && (a.color = this.color.getHex());
    1 > this.opacity && (a.opacity = this.opacity);
    !1 !== this.transparent && (a.transparent = this.transparent);
    !1 !== this.wireframe && (a.wireframe = this.wireframe);
    return a;
  },
  clone: function clone(a) {
    void 0 === a && (a = new THREE.Material());
    a.name = this.name;
    a.side = this.side;
    a.opacity = this.opacity;
    a.transparent = this.transparent;
    a.blending = this.blending;
    a.blendSrc = this.blendSrc;
    a.blendDst = this.blendDst;
    a.blendEquation = this.blendEquation;
    a.blendSrcAlpha = this.blendSrcAlpha;
    a.blendDstAlpha = this.blendDstAlpha;
    a.blendEquationAlpha = this.blendEquationAlpha;
    a.depthTest = this.depthTest;
    a.depthWrite = this.depthWrite;
    a.polygonOffset = this.polygonOffset;
    a.polygonOffsetFactor = this.polygonOffsetFactor;
    a.polygonOffsetUnits = this.polygonOffsetUnits;
    a.alphaTest = this.alphaTest;
    a.overdraw = this.overdraw;
    a.visible = this.visible;
    return a;
  },
  update: function update() {
    this.dispatchEvent({
      type: "update"
    });
  },
  dispose: function dispose() {
    this.dispatchEvent({
      type: "dispose"
    });
  }
};
THREE.EventDispatcher.prototype.apply(THREE.Material.prototype);
THREE.MaterialIdCount = 0;

THREE.LineBasicMaterial = function (a) {
  THREE.Material.call(this);
  this.type = "LineBasicMaterial";
  this.color = new THREE.Color(16777215);
  this.linewidth = 1;
  this.linejoin = this.linecap = "round";
  this.vertexColors = THREE.NoColors;
  this.fog = !0;
  this.setValues(a);
};

THREE.LineBasicMaterial.prototype = Object.create(THREE.Material.prototype);
THREE.LineBasicMaterial.prototype.constructor = THREE.LineBasicMaterial;

THREE.LineBasicMaterial.prototype.clone = function () {
  var a = new THREE.LineBasicMaterial();
  THREE.Material.prototype.clone.call(this, a);
  a.color.copy(this.color);
  a.linewidth = this.linewidth;
  a.linecap = this.linecap;
  a.linejoin = this.linejoin;
  a.vertexColors = this.vertexColors;
  a.fog = this.fog;
  return a;
};

THREE.LineDashedMaterial = function (a) {
  THREE.Material.call(this);
  this.type = "LineDashedMaterial";
  this.color = new THREE.Color(16777215);
  this.scale = this.linewidth = 1;
  this.dashSize = 3;
  this.gapSize = 1;
  this.vertexColors = !1;
  this.fog = !0;
  this.setValues(a);
};

THREE.LineDashedMaterial.prototype = Object.create(THREE.Material.prototype);
THREE.LineDashedMaterial.prototype.constructor = THREE.LineDashedMaterial;

THREE.LineDashedMaterial.prototype.clone = function () {
  var a = new THREE.LineDashedMaterial();
  THREE.Material.prototype.clone.call(this, a);
  a.color.copy(this.color);
  a.linewidth = this.linewidth;
  a.scale = this.scale;
  a.dashSize = this.dashSize;
  a.gapSize = this.gapSize;
  a.vertexColors = this.vertexColors;
  a.fog = this.fog;
  return a;
};

THREE.MeshBasicMaterial = function (a) {
  THREE.Material.call(this);
  this.type = "MeshBasicMaterial";
  this.color = new THREE.Color(16777215);
  this.envMap = this.alphaMap = this.specularMap = this.lightMap = this.map = null;
  this.combine = THREE.MultiplyOperation;
  this.reflectivity = 1;
  this.refractionRatio = .98;
  this.fog = !0;
  this.shading = THREE.SmoothShading;
  this.wireframe = !1;
  this.wireframeLinewidth = 1;
  this.wireframeLinejoin = this.wireframeLinecap = "round";
  this.vertexColors = THREE.NoColors;
  this.morphTargets = this.skinning = !1;
  this.setValues(a);
};

THREE.MeshBasicMaterial.prototype = Object.create(THREE.Material.prototype);
THREE.MeshBasicMaterial.prototype.constructor = THREE.MeshBasicMaterial;

THREE.MeshBasicMaterial.prototype.clone = function () {
  var a = new THREE.MeshBasicMaterial();
  THREE.Material.prototype.clone.call(this, a);
  a.color.copy(this.color);
  a.map = this.map;
  a.lightMap = this.lightMap;
  a.specularMap = this.specularMap;
  a.alphaMap = this.alphaMap;
  a.envMap = this.envMap;
  a.combine = this.combine;
  a.reflectivity = this.reflectivity;
  a.refractionRatio = this.refractionRatio;
  a.fog = this.fog;
  a.shading = this.shading;
  a.wireframe = this.wireframe;
  a.wireframeLinewidth = this.wireframeLinewidth;
  a.wireframeLinecap = this.wireframeLinecap;
  a.wireframeLinejoin = this.wireframeLinejoin;
  a.vertexColors = this.vertexColors;
  a.skinning = this.skinning;
  a.morphTargets = this.morphTargets;
  return a;
};

THREE.MeshLambertMaterial = function (a) {
  THREE.Material.call(this);
  this.type = "MeshLambertMaterial";
  this.color = new THREE.Color(16777215);
  this.emissive = new THREE.Color(0);
  this.wrapAround = !1;
  this.wrapRGB = new THREE.Vector3(1, 1, 1);
  this.envMap = this.alphaMap = this.specularMap = this.lightMap = this.map = null;
  this.combine = THREE.MultiplyOperation;
  this.reflectivity = 1;
  this.refractionRatio = .98;
  this.fog = !0;
  this.shading = THREE.SmoothShading;
  this.wireframe = !1;
  this.wireframeLinewidth = 1;
  this.wireframeLinejoin = this.wireframeLinecap = "round";
  this.vertexColors = THREE.NoColors;
  this.morphNormals = this.morphTargets = this.skinning = !1;
  this.setValues(a);
};

THREE.MeshLambertMaterial.prototype = Object.create(THREE.Material.prototype);
THREE.MeshLambertMaterial.prototype.constructor = THREE.MeshLambertMaterial;

THREE.MeshLambertMaterial.prototype.clone = function () {
  var a = new THREE.MeshLambertMaterial();
  THREE.Material.prototype.clone.call(this, a);
  a.color.copy(this.color);
  a.emissive.copy(this.emissive);
  a.wrapAround = this.wrapAround;
  a.wrapRGB.copy(this.wrapRGB);
  a.map = this.map;
  a.lightMap = this.lightMap;
  a.specularMap = this.specularMap;
  a.alphaMap = this.alphaMap;
  a.envMap = this.envMap;
  a.combine = this.combine;
  a.reflectivity = this.reflectivity;
  a.refractionRatio = this.refractionRatio;
  a.fog = this.fog;
  a.shading = this.shading;
  a.wireframe = this.wireframe;
  a.wireframeLinewidth = this.wireframeLinewidth;
  a.wireframeLinecap = this.wireframeLinecap;
  a.wireframeLinejoin = this.wireframeLinejoin;
  a.vertexColors = this.vertexColors;
  a.skinning = this.skinning;
  a.morphTargets = this.morphTargets;
  a.morphNormals = this.morphNormals;
  return a;
};

THREE.MeshPhongMaterial = function (a) {
  THREE.Material.call(this);
  this.type = "MeshPhongMaterial";
  this.color = new THREE.Color(16777215);
  this.emissive = new THREE.Color(0);
  this.specular = new THREE.Color(1118481);
  this.shininess = 30;
  this.wrapAround = this.metal = !1;
  this.wrapRGB = new THREE.Vector3(1, 1, 1);
  this.bumpMap = this.lightMap = this.map = null;
  this.bumpScale = 1;
  this.normalMap = null;
  this.normalScale = new THREE.Vector2(1, 1);
  this.envMap = this.alphaMap = this.specularMap = null;
  this.combine = THREE.MultiplyOperation;
  this.reflectivity = 1;
  this.refractionRatio = .98;
  this.fog = !0;
  this.shading = THREE.SmoothShading;
  this.wireframe = !1;
  this.wireframeLinewidth = 1;
  this.wireframeLinejoin = this.wireframeLinecap = "round";
  this.vertexColors = THREE.NoColors;
  this.morphNormals = this.morphTargets = this.skinning = !1;
  this.setValues(a);
};

THREE.MeshPhongMaterial.prototype = Object.create(THREE.Material.prototype);
THREE.MeshPhongMaterial.prototype.constructor = THREE.MeshPhongMaterial;

THREE.MeshPhongMaterial.prototype.clone = function () {
  var a = new THREE.MeshPhongMaterial();
  THREE.Material.prototype.clone.call(this, a);
  a.color.copy(this.color);
  a.emissive.copy(this.emissive);
  a.specular.copy(this.specular);
  a.shininess = this.shininess;
  a.metal = this.metal;
  a.wrapAround = this.wrapAround;
  a.wrapRGB.copy(this.wrapRGB);
  a.map = this.map;
  a.lightMap = this.lightMap;
  a.bumpMap = this.bumpMap;
  a.bumpScale = this.bumpScale;
  a.normalMap = this.normalMap;
  a.normalScale.copy(this.normalScale);
  a.specularMap = this.specularMap;
  a.alphaMap = this.alphaMap;
  a.envMap = this.envMap;
  a.combine = this.combine;
  a.reflectivity = this.reflectivity;
  a.refractionRatio = this.refractionRatio;
  a.fog = this.fog;
  a.shading = this.shading;
  a.wireframe = this.wireframe;
  a.wireframeLinewidth = this.wireframeLinewidth;
  a.wireframeLinecap = this.wireframeLinecap;
  a.wireframeLinejoin = this.wireframeLinejoin;
  a.vertexColors = this.vertexColors;
  a.skinning = this.skinning;
  a.morphTargets = this.morphTargets;
  a.morphNormals = this.morphNormals;
  return a;
};

THREE.MeshDepthMaterial = function (a) {
  THREE.Material.call(this);
  this.type = "MeshDepthMaterial";
  this.wireframe = this.morphTargets = !1;
  this.wireframeLinewidth = 1;
  this.setValues(a);
};

THREE.MeshDepthMaterial.prototype = Object.create(THREE.Material.prototype);
THREE.MeshDepthMaterial.prototype.constructor = THREE.MeshDepthMaterial;

THREE.MeshDepthMaterial.prototype.clone = function () {
  var a = new THREE.MeshDepthMaterial();
  THREE.Material.prototype.clone.call(this, a);
  a.wireframe = this.wireframe;
  a.wireframeLinewidth = this.wireframeLinewidth;
  return a;
};

THREE.MeshNormalMaterial = function (a) {
  THREE.Material.call(this, a);
  this.type = "MeshNormalMaterial";
  this.wireframe = !1;
  this.wireframeLinewidth = 1;
  this.morphTargets = !1;
  this.setValues(a);
};

THREE.MeshNormalMaterial.prototype = Object.create(THREE.Material.prototype);
THREE.MeshNormalMaterial.prototype.constructor = THREE.MeshNormalMaterial;

THREE.MeshNormalMaterial.prototype.clone = function () {
  var a = new THREE.MeshNormalMaterial();
  THREE.Material.prototype.clone.call(this, a);
  a.wireframe = this.wireframe;
  a.wireframeLinewidth = this.wireframeLinewidth;
  return a;
};

THREE.MeshFaceMaterial = function (a) {
  this.uuid = THREE.Math.generateUUID();
  this.type = "MeshFaceMaterial";
  this.materials = a instanceof Array ? a : [];
};

THREE.MeshFaceMaterial.prototype = {
  constructor: THREE.MeshFaceMaterial,
  toJSON: function toJSON() {
    for (var a = {
      metadata: {
        version: 4.2,
        type: "material",
        generator: "MaterialExporter"
      },
      uuid: this.uuid,
      type: this.type,
      materials: []
    }, b = 0, c = this.materials.length; b < c; b++) {
      a.materials.push(this.materials[b].toJSON());
    }

    return a;
  },
  clone: function clone() {
    for (var a = new THREE.MeshFaceMaterial(), b = 0; b < this.materials.length; b++) {
      a.materials.push(this.materials[b].clone());
    }

    return a;
  }
};

THREE.PointCloudMaterial = function (a) {
  THREE.Material.call(this);
  this.type = "PointCloudMaterial";
  this.color = new THREE.Color(16777215);
  this.map = null;
  this.size = 1;
  this.sizeAttenuation = !0;
  this.vertexColors = THREE.NoColors;
  this.fog = !0;
  this.setValues(a);
};

THREE.PointCloudMaterial.prototype = Object.create(THREE.Material.prototype);
THREE.PointCloudMaterial.prototype.constructor = THREE.PointCloudMaterial;

THREE.PointCloudMaterial.prototype.clone = function () {
  var a = new THREE.PointCloudMaterial();
  THREE.Material.prototype.clone.call(this, a);
  a.color.copy(this.color);
  a.map = this.map;
  a.size = this.size;
  a.sizeAttenuation = this.sizeAttenuation;
  a.vertexColors = this.vertexColors;
  a.fog = this.fog;
  return a;
};

THREE.ParticleBasicMaterial = function (a) {
  THREE.warn("THREE.ParticleBasicMaterial has been renamed to THREE.PointCloudMaterial.");
  return new THREE.PointCloudMaterial(a);
};

THREE.ParticleSystemMaterial = function (a) {
  THREE.warn("THREE.ParticleSystemMaterial has been renamed to THREE.PointCloudMaterial.");
  return new THREE.PointCloudMaterial(a);
};

THREE.ShaderMaterial = function (a) {
  THREE.Material.call(this);
  this.type = "ShaderMaterial";
  this.defines = {};
  this.uniforms = {};
  this.attributes = null;
  this.vertexShader = "void main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}";
  this.fragmentShader = "void main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}";
  this.shading = THREE.SmoothShading;
  this.linewidth = 1;
  this.wireframe = !1;
  this.wireframeLinewidth = 1;
  this.lights = this.fog = !1;
  this.vertexColors = THREE.NoColors;
  this.morphNormals = this.morphTargets = this.skinning = !1;
  this.defaultAttributeValues = {
    color: [1, 1, 1],
    uv: [0, 0],
    uv2: [0, 0]
  };
  this.index0AttributeName = void 0;
  this.setValues(a);
};

THREE.ShaderMaterial.prototype = Object.create(THREE.Material.prototype);
THREE.ShaderMaterial.prototype.constructor = THREE.ShaderMaterial;

THREE.ShaderMaterial.prototype.clone = function () {
  var a = new THREE.ShaderMaterial();
  THREE.Material.prototype.clone.call(this, a);
  a.fragmentShader = this.fragmentShader;
  a.vertexShader = this.vertexShader;
  a.uniforms = THREE.UniformsUtils.clone(this.uniforms);
  a.attributes = this.attributes;
  a.defines = this.defines;
  a.shading = this.shading;
  a.wireframe = this.wireframe;
  a.wireframeLinewidth = this.wireframeLinewidth;
  a.fog = this.fog;
  a.lights = this.lights;
  a.vertexColors = this.vertexColors;
  a.skinning = this.skinning;
  a.morphTargets = this.morphTargets;
  a.morphNormals = this.morphNormals;
  return a;
};

THREE.RawShaderMaterial = function (a) {
  THREE.ShaderMaterial.call(this, a);
  this.type = "RawShaderMaterial";
};

THREE.RawShaderMaterial.prototype = Object.create(THREE.ShaderMaterial.prototype);
THREE.RawShaderMaterial.prototype.constructor = THREE.RawShaderMaterial;

THREE.RawShaderMaterial.prototype.clone = function () {
  var a = new THREE.RawShaderMaterial();
  THREE.ShaderMaterial.prototype.clone.call(this, a);
  return a;
};

THREE.SpriteMaterial = function (a) {
  THREE.Material.call(this);
  this.type = "SpriteMaterial";
  this.color = new THREE.Color(16777215);
  this.map = null;
  this.rotation = 0;
  this.fog = !1;
  this.setValues(a);
};

THREE.SpriteMaterial.prototype = Object.create(THREE.Material.prototype);
THREE.SpriteMaterial.prototype.constructor = THREE.SpriteMaterial;

THREE.SpriteMaterial.prototype.clone = function () {
  var a = new THREE.SpriteMaterial();
  THREE.Material.prototype.clone.call(this, a);
  a.color.copy(this.color);
  a.map = this.map;
  a.rotation = this.rotation;
  a.fog = this.fog;
  return a;
};

THREE.Texture = function (a, b, c, d, e, f, g, h, k) {
  Object.defineProperty(this, "id", {
    value: THREE.TextureIdCount++
  });
  this.uuid = THREE.Math.generateUUID();
  this.sourceFile = this.name = "";
  this.image = void 0 !== a ? a : THREE.Texture.DEFAULT_IMAGE;
  this.mipmaps = [];
  this.mapping = void 0 !== b ? b : THREE.Texture.DEFAULT_MAPPING;
  this.wrapS = void 0 !== c ? c : THREE.ClampToEdgeWrapping;
  this.wrapT = void 0 !== d ? d : THREE.ClampToEdgeWrapping;
  this.magFilter = void 0 !== e ? e : THREE.LinearFilter;
  this.minFilter = void 0 !== f ? f : THREE.LinearMipMapLinearFilter;
  this.anisotropy = void 0 !== k ? k : 1;
  this.format = void 0 !== g ? g : THREE.RGBAFormat;
  this.type = void 0 !== h ? h : THREE.UnsignedByteType;
  this.offset = new THREE.Vector2(0, 0);
  this.repeat = new THREE.Vector2(1, 1);
  this.generateMipmaps = !0;
  this.premultiplyAlpha = !1;
  this.flipY = !0;
  this.unpackAlignment = 4;
  this._needsUpdate = !1;
  this.onUpdate = null;
};

THREE.Texture.DEFAULT_IMAGE = void 0;
THREE.Texture.DEFAULT_MAPPING = THREE.UVMapping;
THREE.Texture.prototype = {
  constructor: THREE.Texture,

  get needsUpdate() {
    return this._needsUpdate;
  },

  set needsUpdate(a) {
    !0 === a && this.update();
    this._needsUpdate = a;
  },

  clone: function clone(a) {
    void 0 === a && (a = new THREE.Texture());
    a.image = this.image;
    a.mipmaps = this.mipmaps.slice(0);
    a.mapping = this.mapping;
    a.wrapS = this.wrapS;
    a.wrapT = this.wrapT;
    a.magFilter = this.magFilter;
    a.minFilter = this.minFilter;
    a.anisotropy = this.anisotropy;
    a.format = this.format;
    a.type = this.type;
    a.offset.copy(this.offset);
    a.repeat.copy(this.repeat);
    a.generateMipmaps = this.generateMipmaps;
    a.premultiplyAlpha = this.premultiplyAlpha;
    a.flipY = this.flipY;
    a.unpackAlignment = this.unpackAlignment;
    return a;
  },
  update: function update() {
    this.dispatchEvent({
      type: "update"
    });
  },
  dispose: function dispose() {
    this.dispatchEvent({
      type: "dispose"
    });
  }
};
THREE.EventDispatcher.prototype.apply(THREE.Texture.prototype);
THREE.TextureIdCount = 0;

THREE.CubeTexture = function (a, b, c, d, e, f, g, h, k) {
  b = void 0 !== b ? b : THREE.CubeReflectionMapping;
  THREE.Texture.call(this, a, b, c, d, e, f, g, h, k);
  this.images = a;
};

THREE.CubeTexture.prototype = Object.create(THREE.Texture.prototype);
THREE.CubeTexture.prototype.constructor = THREE.CubeTexture;

THREE.CubeTexture.clone = function (a) {
  void 0 === a && (a = new THREE.CubeTexture());
  THREE.Texture.prototype.clone.call(this, a);
  a.images = this.images;
  return a;
};

THREE.CompressedTexture = function (a, b, c, d, e, f, g, h, k, l, p) {
  THREE.Texture.call(this, null, f, g, h, k, l, d, e, p);
  this.image = {
    width: b,
    height: c
  };
  this.mipmaps = a;
  this.generateMipmaps = this.flipY = !1;
};

THREE.CompressedTexture.prototype = Object.create(THREE.Texture.prototype);
THREE.CompressedTexture.prototype.constructor = THREE.CompressedTexture;

THREE.CompressedTexture.prototype.clone = function () {
  var a = new THREE.CompressedTexture();
  THREE.Texture.prototype.clone.call(this, a);
  return a;
};

THREE.DataTexture = function (a, b, c, d, e, f, g, h, k, l, p) {
  THREE.Texture.call(this, null, f, g, h, k, l, d, e, p);
  this.image = {
    data: a,
    width: b,
    height: c
  };
};

THREE.DataTexture.prototype = Object.create(THREE.Texture.prototype);
THREE.DataTexture.prototype.constructor = THREE.DataTexture;

THREE.DataTexture.prototype.clone = function () {
  var a = new THREE.DataTexture();
  THREE.Texture.prototype.clone.call(this, a);
  return a;
};

THREE.VideoTexture = function (a, b, c, d, e, f, g, h, k) {
  THREE.Texture.call(this, a, b, c, d, e, f, g, h, k);
  this.generateMipmaps = !1;

  var l = this,
      p = function p() {
    requestAnimationFrame(p);
    a.readyState === a.HAVE_ENOUGH_DATA && (l.needsUpdate = !0);
  };

  p();
};

THREE.VideoTexture.prototype = Object.create(THREE.Texture.prototype);
THREE.VideoTexture.prototype.constructor = THREE.VideoTexture;

THREE.Group = function () {
  THREE.Object3D.call(this);
  this.type = "Group";
};

THREE.Group.prototype = Object.create(THREE.Object3D.prototype);
THREE.Group.prototype.constructor = THREE.Group;

THREE.PointCloud = function (a, b) {
  THREE.Object3D.call(this);
  this.type = "PointCloud";
  this.geometry = void 0 !== a ? a : new THREE.Geometry();
  this.material = void 0 !== b ? b : new THREE.PointCloudMaterial({
    color: 16777215 * Math.random()
  });
};

THREE.PointCloud.prototype = Object.create(THREE.Object3D.prototype);
THREE.PointCloud.prototype.constructor = THREE.PointCloud;

THREE.PointCloud.prototype.raycast = function () {
  var a = new THREE.Matrix4(),
      b = new THREE.Ray();
  return function (c, d) {
    var e = this,
        f = e.geometry,
        g = c.params.PointCloud.threshold;
    a.getInverse(this.matrixWorld);
    b.copy(c.ray).applyMatrix4(a);

    if (null === f.boundingBox || !1 !== b.isIntersectionBox(f.boundingBox)) {
      var h = g / ((this.scale.x + this.scale.y + this.scale.z) / 3),
          k = new THREE.Vector3(),
          g = function g(a, f) {
        var g = b.distanceToPoint(a);

        if (g < h) {
          var k = b.closestPointToPoint(a);
          k.applyMatrix4(e.matrixWorld);
          var n = c.ray.origin.distanceTo(k);
          d.push({
            distance: n,
            distanceToRay: g,
            point: k.clone(),
            index: f,
            face: null,
            object: e
          });
        }
      };

      if (f instanceof THREE.BufferGeometry) {
        var l = f.attributes,
            p = l.position.array;

        if (void 0 !== l.index) {
          var l = l.index.array,
              q = f.offsets;
          0 === q.length && (q = [{
            start: 0,
            count: l.length,
            index: 0
          }]);

          for (var n = 0, t = q.length; n < t; ++n) {
            for (var r = q[n].start, s = q[n].index, f = r, r = r + q[n].count; f < r; f++) {
              var u = s + l[f];
              k.fromArray(p, 3 * u);
              g(k, u);
            }
          }
        } else for (l = p.length / 3, f = 0; f < l; f++) {
          k.set(p[3 * f], p[3 * f + 1], p[3 * f + 2]), g(k, f);
        }
      } else for (k = this.geometry.vertices, f = 0; f < k.length; f++) {
        g(k[f], f);
      }
    }
  };
}();

THREE.PointCloud.prototype.clone = function (a) {
  void 0 === a && (a = new THREE.PointCloud(this.geometry, this.material));
  THREE.Object3D.prototype.clone.call(this, a);
  return a;
};

THREE.ParticleSystem = function (a, b) {
  THREE.warn("THREE.ParticleSystem has been renamed to THREE.PointCloud.");
  return new THREE.PointCloud(a, b);
};

THREE.Line = function (a, b, c) {
  THREE.Object3D.call(this);
  this.type = "Line";
  this.geometry = void 0 !== a ? a : new THREE.Geometry();
  this.material = void 0 !== b ? b : new THREE.LineBasicMaterial({
    color: 16777215 * Math.random()
  });
  this.mode = void 0 !== c ? c : THREE.LineStrip;
};

THREE.LineStrip = 0;
THREE.LinePieces = 1;
THREE.Line.prototype = Object.create(THREE.Object3D.prototype);
THREE.Line.prototype.constructor = THREE.Line;

THREE.Line.prototype.raycast = function () {
  var a = new THREE.Matrix4(),
      b = new THREE.Ray(),
      c = new THREE.Sphere();
  return function (d, e) {
    var f = d.linePrecision,
        f = f * f,
        g = this.geometry;
    null === g.boundingSphere && g.computeBoundingSphere();
    c.copy(g.boundingSphere);
    c.applyMatrix4(this.matrixWorld);

    if (!1 !== d.ray.isIntersectionSphere(c)) {
      a.getInverse(this.matrixWorld);
      b.copy(d.ray).applyMatrix4(a);
      var h = new THREE.Vector3(),
          k = new THREE.Vector3(),
          l = new THREE.Vector3(),
          p = new THREE.Vector3(),
          q = this.mode === THREE.LineStrip ? 1 : 2;

      if (g instanceof THREE.BufferGeometry) {
        var n = g.attributes;

        if (void 0 !== n.index) {
          var t = n.index.array,
              n = n.position.array,
              r = g.offsets;
          0 === r.length && (r = [{
            start: 0,
            count: t.length,
            index: 0
          }]);

          for (var s = 0; s < r.length; s++) {
            for (var u = r[s].start, v = r[s].count, x = r[s].index, g = u; g < u + v - 1; g += q) {
              var D = x + t[g + 1];
              h.fromArray(n, 3 * (x + t[g]));
              k.fromArray(n, 3 * D);
              D = b.distanceSqToSegment(h, k, p, l);
              D > f || (D = b.origin.distanceTo(p), D < d.near || D > d.far || e.push({
                distance: D,
                point: l.clone().applyMatrix4(this.matrixWorld),
                index: g,
                offsetIndex: s,
                face: null,
                faceIndex: null,
                object: this
              }));
            }
          }
        } else for (n = n.position.array, g = 0; g < n.length / 3 - 1; g += q) {
          h.fromArray(n, 3 * g), k.fromArray(n, 3 * g + 3), D = b.distanceSqToSegment(h, k, p, l), D > f || (D = b.origin.distanceTo(p), D < d.near || D > d.far || e.push({
            distance: D,
            point: l.clone().applyMatrix4(this.matrixWorld),
            index: g,
            face: null,
            faceIndex: null,
            object: this
          }));
        }
      } else if (g instanceof THREE.Geometry) for (h = g.vertices, k = h.length, g = 0; g < k - 1; g += q) {
        D = b.distanceSqToSegment(h[g], h[g + 1], p, l), D > f || (D = b.origin.distanceTo(p), D < d.near || D > d.far || e.push({
          distance: D,
          point: l.clone().applyMatrix4(this.matrixWorld),
          index: g,
          face: null,
          faceIndex: null,
          object: this
        }));
      }
    }
  };
}();

THREE.Line.prototype.clone = function (a) {
  void 0 === a && (a = new THREE.Line(this.geometry, this.material, this.mode));
  THREE.Object3D.prototype.clone.call(this, a);
  return a;
};

THREE.Mesh = function (a, b) {
  THREE.Object3D.call(this);
  this.type = "Mesh";
  this.geometry = void 0 !== a ? a : new THREE.Geometry();
  this.material = void 0 !== b ? b : new THREE.MeshBasicMaterial({
    color: 16777215 * Math.random()
  });
  this.updateMorphTargets();
};

THREE.Mesh.prototype = Object.create(THREE.Object3D.prototype);
THREE.Mesh.prototype.constructor = THREE.Mesh;

THREE.Mesh.prototype.updateMorphTargets = function () {
  if (void 0 !== this.geometry.morphTargets && 0 < this.geometry.morphTargets.length) {
    this.morphTargetBase = -1;
    this.morphTargetForcedOrder = [];
    this.morphTargetInfluences = [];
    this.morphTargetDictionary = {};

    for (var a = 0, b = this.geometry.morphTargets.length; a < b; a++) {
      this.morphTargetInfluences.push(0), this.morphTargetDictionary[this.geometry.morphTargets[a].name] = a;
    }
  }
};

THREE.Mesh.prototype.getMorphTargetIndexByName = function (a) {
  if (void 0 !== this.morphTargetDictionary[a]) return this.morphTargetDictionary[a];
  THREE.warn("THREE.Mesh.getMorphTargetIndexByName: morph target " + a + " does not exist. Returning 0.");
  return 0;
};

THREE.Mesh.prototype.raycast = function () {
  var a = new THREE.Matrix4(),
      b = new THREE.Ray(),
      c = new THREE.Sphere(),
      d = new THREE.Vector3(),
      e = new THREE.Vector3(),
      f = new THREE.Vector3();
  return function (g, h) {
    var k = this.geometry;
    null === k.boundingSphere && k.computeBoundingSphere();
    c.copy(k.boundingSphere);
    c.applyMatrix4(this.matrixWorld);
    if (!1 !== g.ray.isIntersectionSphere(c) && (a.getInverse(this.matrixWorld), b.copy(g.ray).applyMatrix4(a), null === k.boundingBox || !1 !== b.isIntersectionBox(k.boundingBox))) if (k instanceof THREE.BufferGeometry) {
      var l = this.material;

      if (void 0 !== l) {
        var p = k.attributes,
            q,
            n,
            t = g.precision;

        if (void 0 !== p.index) {
          var r = p.index.array,
              s = p.position.array,
              u = k.offsets;
          0 === u.length && (u = [{
            start: 0,
            count: r.length,
            index: 0
          }]);

          for (var v = 0, x = u.length; v < x; ++v) {
            for (var p = u[v].start, D = u[v].index, k = p, w = p + u[v].count; k < w; k += 3) {
              p = D + r[k];
              q = D + r[k + 1];
              n = D + r[k + 2];
              d.fromArray(s, 3 * p);
              e.fromArray(s, 3 * q);
              f.fromArray(s, 3 * n);
              var y = l.side === THREE.BackSide ? b.intersectTriangle(f, e, d, !0) : b.intersectTriangle(d, e, f, l.side !== THREE.DoubleSide);

              if (null !== y) {
                y.applyMatrix4(this.matrixWorld);
                var A = g.ray.origin.distanceTo(y);
                A < t || A < g.near || A > g.far || h.push({
                  distance: A,
                  point: y,
                  face: new THREE.Face3(p, q, n, THREE.Triangle.normal(d, e, f)),
                  faceIndex: null,
                  object: this
                });
              }
            }
          }
        } else for (s = p.position.array, r = k = 0, w = s.length; k < w; k += 3, r += 9) {
          p = k, q = k + 1, n = k + 2, d.fromArray(s, r), e.fromArray(s, r + 3), f.fromArray(s, r + 6), y = l.side === THREE.BackSide ? b.intersectTriangle(f, e, d, !0) : b.intersectTriangle(d, e, f, l.side !== THREE.DoubleSide), null !== y && (y.applyMatrix4(this.matrixWorld), A = g.ray.origin.distanceTo(y), A < t || A < g.near || A > g.far || h.push({
            distance: A,
            point: y,
            face: new THREE.Face3(p, q, n, THREE.Triangle.normal(d, e, f)),
            faceIndex: null,
            object: this
          }));
        }
      }
    } else if (k instanceof THREE.Geometry) for (r = this.material instanceof THREE.MeshFaceMaterial, s = !0 === r ? this.material.materials : null, t = g.precision, u = k.vertices, v = 0, x = k.faces.length; v < x; v++) {
      if (D = k.faces[v], l = !0 === r ? s[D.materialIndex] : this.material, void 0 !== l) {
        p = u[D.a];
        q = u[D.b];
        n = u[D.c];

        if (!0 === l.morphTargets) {
          y = k.morphTargets;
          A = this.morphTargetInfluences;
          d.set(0, 0, 0);
          e.set(0, 0, 0);
          f.set(0, 0, 0);

          for (var w = 0, E = y.length; w < E; w++) {
            var G = A[w];

            if (0 !== G) {
              var F = y[w].vertices;
              d.x += (F[D.a].x - p.x) * G;
              d.y += (F[D.a].y - p.y) * G;
              d.z += (F[D.a].z - p.z) * G;
              e.x += (F[D.b].x - q.x) * G;
              e.y += (F[D.b].y - q.y) * G;
              e.z += (F[D.b].z - q.z) * G;
              f.x += (F[D.c].x - n.x) * G;
              f.y += (F[D.c].y - n.y) * G;
              f.z += (F[D.c].z - n.z) * G;
            }
          }

          d.add(p);
          e.add(q);
          f.add(n);
          p = d;
          q = e;
          n = f;
        }

        y = l.side === THREE.BackSide ? b.intersectTriangle(n, q, p, !0) : b.intersectTriangle(p, q, n, l.side !== THREE.DoubleSide);
        null !== y && (y.applyMatrix4(this.matrixWorld), A = g.ray.origin.distanceTo(y), A < t || A < g.near || A > g.far || h.push({
          distance: A,
          point: y,
          face: D,
          faceIndex: v,
          object: this
        }));
      }
    }
  };
}();

THREE.Mesh.prototype.clone = function (a, b) {
  void 0 === a && (a = new THREE.Mesh(this.geometry, this.material));
  THREE.Object3D.prototype.clone.call(this, a, b);
  return a;
};

THREE.Bone = function (a) {
  THREE.Object3D.call(this);
  this.type = "Bone";
  this.skin = a;
};

THREE.Bone.prototype = Object.create(THREE.Object3D.prototype);
THREE.Bone.prototype.constructor = THREE.Bone;

THREE.Skeleton = function (a, b, c) {
  this.useVertexTexture = void 0 !== c ? c : !0;
  this.identityMatrix = new THREE.Matrix4();
  a = a || [];
  this.bones = a.slice(0);
  this.useVertexTexture ? (this.boneTextureHeight = this.boneTextureWidth = a = 256 < this.bones.length ? 64 : 64 < this.bones.length ? 32 : 16 < this.bones.length ? 16 : 8, this.boneMatrices = new Float32Array(this.boneTextureWidth * this.boneTextureHeight * 4), this.boneTexture = new THREE.DataTexture(this.boneMatrices, this.boneTextureWidth, this.boneTextureHeight, THREE.RGBAFormat, THREE.FloatType), this.boneTexture.minFilter = THREE.NearestFilter, this.boneTexture.magFilter = THREE.NearestFilter, this.boneTexture.generateMipmaps = !1, this.boneTexture.flipY = !1) : this.boneMatrices = new Float32Array(16 * this.bones.length);
  if (void 0 === b) this.calculateInverses();else if (this.bones.length === b.length) this.boneInverses = b.slice(0);else for (THREE.warn("THREE.Skeleton bonInverses is the wrong length."), this.boneInverses = [], b = 0, a = this.bones.length; b < a; b++) {
    this.boneInverses.push(new THREE.Matrix4());
  }
};

THREE.Skeleton.prototype.calculateInverses = function () {
  this.boneInverses = [];

  for (var a = 0, b = this.bones.length; a < b; a++) {
    var c = new THREE.Matrix4();
    this.bones[a] && c.getInverse(this.bones[a].matrixWorld);
    this.boneInverses.push(c);
  }
};

THREE.Skeleton.prototype.pose = function () {
  for (var a, b = 0, c = this.bones.length; b < c; b++) {
    (a = this.bones[b]) && a.matrixWorld.getInverse(this.boneInverses[b]);
  }

  b = 0;

  for (c = this.bones.length; b < c; b++) {
    if (a = this.bones[b]) a.parent ? (a.matrix.getInverse(a.parent.matrixWorld), a.matrix.multiply(a.matrixWorld)) : a.matrix.copy(a.matrixWorld), a.matrix.decompose(a.position, a.quaternion, a.scale);
  }
};

THREE.Skeleton.prototype.update = function () {
  var a = new THREE.Matrix4();
  return function () {
    for (var b = 0, c = this.bones.length; b < c; b++) {
      a.multiplyMatrices(this.bones[b] ? this.bones[b].matrixWorld : this.identityMatrix, this.boneInverses[b]), a.flattenToArrayOffset(this.boneMatrices, 16 * b);
    }

    this.useVertexTexture && (this.boneTexture.needsUpdate = !0);
  };
}();

THREE.SkinnedMesh = function (a, b, c) {
  THREE.Mesh.call(this, a, b);
  this.type = "SkinnedMesh";
  this.bindMode = "attached";
  this.bindMatrix = new THREE.Matrix4();
  this.bindMatrixInverse = new THREE.Matrix4();
  a = [];

  if (this.geometry && void 0 !== this.geometry.bones) {
    for (var d, e, f, g, h = 0, k = this.geometry.bones.length; h < k; ++h) {
      d = this.geometry.bones[h], e = d.pos, f = d.rotq, g = d.scl, b = new THREE.Bone(this), a.push(b), b.name = d.name, b.position.set(e[0], e[1], e[2]), b.quaternion.set(f[0], f[1], f[2], f[3]), void 0 !== g ? b.scale.set(g[0], g[1], g[2]) : b.scale.set(1, 1, 1);
    }

    h = 0;

    for (k = this.geometry.bones.length; h < k; ++h) {
      d = this.geometry.bones[h], -1 !== d.parent ? a[d.parent].add(a[h]) : this.add(a[h]);
    }
  }

  this.normalizeSkinWeights();
  this.updateMatrixWorld(!0);
  this.bind(new THREE.Skeleton(a, void 0, c));
};

THREE.SkinnedMesh.prototype = Object.create(THREE.Mesh.prototype);
THREE.SkinnedMesh.prototype.constructor = THREE.SkinnedMesh;

THREE.SkinnedMesh.prototype.bind = function (a, b) {
  this.skeleton = a;
  void 0 === b && (this.updateMatrixWorld(!0), b = this.matrixWorld);
  this.bindMatrix.copy(b);
  this.bindMatrixInverse.getInverse(b);
};

THREE.SkinnedMesh.prototype.pose = function () {
  this.skeleton.pose();
};

THREE.SkinnedMesh.prototype.normalizeSkinWeights = function () {
  if (this.geometry instanceof THREE.Geometry) for (var a = 0; a < this.geometry.skinIndices.length; a++) {
    var b = this.geometry.skinWeights[a],
        c = 1 / b.lengthManhattan();
    Infinity !== c ? b.multiplyScalar(c) : b.set(1);
  }
};

THREE.SkinnedMesh.prototype.updateMatrixWorld = function (a) {
  THREE.Mesh.prototype.updateMatrixWorld.call(this, !0);
  "attached" === this.bindMode ? this.bindMatrixInverse.getInverse(this.matrixWorld) : "detached" === this.bindMode ? this.bindMatrixInverse.getInverse(this.bindMatrix) : THREE.warn("THREE.SkinnedMesh unreckognized bindMode: " + this.bindMode);
};

THREE.SkinnedMesh.prototype.clone = function (a) {
  void 0 === a && (a = new THREE.SkinnedMesh(this.geometry, this.material, this.useVertexTexture));
  THREE.Mesh.prototype.clone.call(this, a);
  return a;
};

THREE.MorphAnimMesh = function (a, b) {
  THREE.Mesh.call(this, a, b);
  this.type = "MorphAnimMesh";
  this.duration = 1E3;
  this.mirroredLoop = !1;
  this.currentKeyframe = this.lastKeyframe = this.time = 0;
  this.direction = 1;
  this.directionBackwards = !1;
  this.setFrameRange(0, this.geometry.morphTargets.length - 1);
};

THREE.MorphAnimMesh.prototype = Object.create(THREE.Mesh.prototype);
THREE.MorphAnimMesh.prototype.constructor = THREE.MorphAnimMesh;

THREE.MorphAnimMesh.prototype.setFrameRange = function (a, b) {
  this.startKeyframe = a;
  this.endKeyframe = b;
  this.length = this.endKeyframe - this.startKeyframe + 1;
};

THREE.MorphAnimMesh.prototype.setDirectionForward = function () {
  this.direction = 1;
  this.directionBackwards = !1;
};

THREE.MorphAnimMesh.prototype.setDirectionBackward = function () {
  this.direction = -1;
  this.directionBackwards = !0;
};

THREE.MorphAnimMesh.prototype.parseAnimations = function () {
  var a = this.geometry;
  a.animations || (a.animations = {});

  for (var b, c = a.animations, d = /([a-z]+)_?(\d+)/, e = 0, f = a.morphTargets.length; e < f; e++) {
    var g = a.morphTargets[e].name.match(d);

    if (g && 1 < g.length) {
      g = g[1];
      c[g] || (c[g] = {
        start: Infinity,
        end: -Infinity
      });
      var h = c[g];
      e < h.start && (h.start = e);
      e > h.end && (h.end = e);
      b || (b = g);
    }
  }

  a.firstAnimation = b;
};

THREE.MorphAnimMesh.prototype.setAnimationLabel = function (a, b, c) {
  this.geometry.animations || (this.geometry.animations = {});
  this.geometry.animations[a] = {
    start: b,
    end: c
  };
};

THREE.MorphAnimMesh.prototype.playAnimation = function (a, b) {
  var c = this.geometry.animations[a];
  c ? (this.setFrameRange(c.start, c.end), this.duration = (c.end - c.start) / b * 1E3, this.time = 0) : THREE.warn("THREE.MorphAnimMesh: animation[" + a + "] undefined in .playAnimation()");
};

THREE.MorphAnimMesh.prototype.updateAnimation = function (a) {
  var b = this.duration / this.length;
  this.time += this.direction * a;

  if (this.mirroredLoop) {
    if (this.time > this.duration || 0 > this.time) this.direction *= -1, this.time > this.duration && (this.time = this.duration, this.directionBackwards = !0), 0 > this.time && (this.time = 0, this.directionBackwards = !1);
  } else this.time %= this.duration, 0 > this.time && (this.time += this.duration);

  a = this.startKeyframe + THREE.Math.clamp(Math.floor(this.time / b), 0, this.length - 1);
  a !== this.currentKeyframe && (this.morphTargetInfluences[this.lastKeyframe] = 0, this.morphTargetInfluences[this.currentKeyframe] = 1, this.morphTargetInfluences[a] = 0, this.lastKeyframe = this.currentKeyframe, this.currentKeyframe = a);
  b = this.time % b / b;
  this.directionBackwards && (b = 1 - b);
  this.morphTargetInfluences[this.currentKeyframe] = b;
  this.morphTargetInfluences[this.lastKeyframe] = 1 - b;
};

THREE.MorphAnimMesh.prototype.interpolateTargets = function (a, b, c) {
  for (var d = this.morphTargetInfluences, e = 0, f = d.length; e < f; e++) {
    d[e] = 0;
  }

  -1 < a && (d[a] = 1 - c);
  -1 < b && (d[b] = c);
};

THREE.MorphAnimMesh.prototype.clone = function (a) {
  void 0 === a && (a = new THREE.MorphAnimMesh(this.geometry, this.material));
  a.duration = this.duration;
  a.mirroredLoop = this.mirroredLoop;
  a.time = this.time;
  a.lastKeyframe = this.lastKeyframe;
  a.currentKeyframe = this.currentKeyframe;
  a.direction = this.direction;
  a.directionBackwards = this.directionBackwards;
  THREE.Mesh.prototype.clone.call(this, a);
  return a;
};

THREE.LOD = function () {
  THREE.Object3D.call(this);
  this.objects = [];
};

THREE.LOD.prototype = Object.create(THREE.Object3D.prototype);
THREE.LOD.prototype.constructor = THREE.LOD;

THREE.LOD.prototype.addLevel = function (a, b) {
  void 0 === b && (b = 0);
  b = Math.abs(b);

  for (var c = 0; c < this.objects.length && !(b < this.objects[c].distance); c++) {
    ;
  }

  this.objects.splice(c, 0, {
    distance: b,
    object: a
  });
  this.add(a);
};

THREE.LOD.prototype.getObjectForDistance = function (a) {
  for (var b = 1, c = this.objects.length; b < c && !(a < this.objects[b].distance); b++) {
    ;
  }

  return this.objects[b - 1].object;
};

THREE.LOD.prototype.raycast = function () {
  var a = new THREE.Vector3();
  return function (b, c) {
    a.setFromMatrixPosition(this.matrixWorld);
    var d = b.ray.origin.distanceTo(a);
    this.getObjectForDistance(d).raycast(b, c);
  };
}();

THREE.LOD.prototype.update = function () {
  var a = new THREE.Vector3(),
      b = new THREE.Vector3();
  return function (c) {
    if (1 < this.objects.length) {
      a.setFromMatrixPosition(c.matrixWorld);
      b.setFromMatrixPosition(this.matrixWorld);
      c = a.distanceTo(b);
      this.objects[0].object.visible = !0;

      for (var d = 1, e = this.objects.length; d < e; d++) {
        if (c >= this.objects[d].distance) this.objects[d - 1].object.visible = !1, this.objects[d].object.visible = !0;else break;
      }

      for (; d < e; d++) {
        this.objects[d].object.visible = !1;
      }
    }
  };
}();

THREE.LOD.prototype.clone = function (a) {
  void 0 === a && (a = new THREE.LOD());
  THREE.Object3D.prototype.clone.call(this, a);

  for (var b = 0, c = this.objects.length; b < c; b++) {
    var d = this.objects[b].object.clone();
    d.visible = 0 === b;
    a.addLevel(d, this.objects[b].distance);
  }

  return a;
};

THREE.Sprite = function () {
  var a = new Uint16Array([0, 1, 2, 0, 2, 3]),
      b = new Float32Array([-.5, -.5, 0, .5, -.5, 0, .5, .5, 0, -.5, .5, 0]),
      c = new Float32Array([0, 0, 1, 0, 1, 1, 0, 1]),
      d = new THREE.BufferGeometry();
  d.addAttribute("index", new THREE.BufferAttribute(a, 1));
  d.addAttribute("position", new THREE.BufferAttribute(b, 3));
  d.addAttribute("uv", new THREE.BufferAttribute(c, 2));
  return function (a) {
    THREE.Object3D.call(this);
    this.type = "Sprite";
    this.geometry = d;
    this.material = void 0 !== a ? a : new THREE.SpriteMaterial();
  };
}();

THREE.Sprite.prototype = Object.create(THREE.Object3D.prototype);
THREE.Sprite.prototype.constructor = THREE.Sprite;

THREE.Sprite.prototype.raycast = function () {
  var a = new THREE.Vector3();
  return function (b, c) {
    a.setFromMatrixPosition(this.matrixWorld);
    var d = b.ray.distanceToPoint(a);
    d > this.scale.x || c.push({
      distance: d,
      point: this.position,
      face: null,
      object: this
    });
  };
}();

THREE.Sprite.prototype.clone = function (a) {
  void 0 === a && (a = new THREE.Sprite(this.material));
  THREE.Object3D.prototype.clone.call(this, a);
  return a;
};

THREE.Particle = THREE.Sprite;

THREE.LensFlare = function (a, b, c, d, e) {
  THREE.Object3D.call(this);
  this.lensFlares = [];
  this.positionScreen = new THREE.Vector3();
  this.customUpdateCallback = void 0;
  void 0 !== a && this.add(a, b, c, d, e);
};

THREE.LensFlare.prototype = Object.create(THREE.Object3D.prototype);
THREE.LensFlare.prototype.constructor = THREE.LensFlare;

THREE.LensFlare.prototype.add = function (a, b, c, d, e, f) {
  void 0 === b && (b = -1);
  void 0 === c && (c = 0);
  void 0 === f && (f = 1);
  void 0 === e && (e = new THREE.Color(16777215));
  void 0 === d && (d = THREE.NormalBlending);
  c = Math.min(c, Math.max(0, c));
  this.lensFlares.push({
    texture: a,
    size: b,
    distance: c,
    x: 0,
    y: 0,
    z: 0,
    scale: 1,
    rotation: 1,
    opacity: f,
    color: e,
    blending: d
  });
};

THREE.LensFlare.prototype.updateLensFlares = function () {
  var a,
      b = this.lensFlares.length,
      c,
      d = 2 * -this.positionScreen.x,
      e = 2 * -this.positionScreen.y;

  for (a = 0; a < b; a++) {
    c = this.lensFlares[a], c.x = this.positionScreen.x + d * c.distance, c.y = this.positionScreen.y + e * c.distance, c.wantedRotation = c.x * Math.PI * .25, c.rotation += .25 * (c.wantedRotation - c.rotation);
  }
};

THREE.Scene = function () {
  THREE.Object3D.call(this);
  this.type = "Scene";
  this.overrideMaterial = this.fog = null;
  this.autoUpdate = !0;
};

THREE.Scene.prototype = Object.create(THREE.Object3D.prototype);
THREE.Scene.prototype.constructor = THREE.Scene;

THREE.Scene.prototype.clone = function (a) {
  void 0 === a && (a = new THREE.Scene());
  THREE.Object3D.prototype.clone.call(this, a);
  null !== this.fog && (a.fog = this.fog.clone());
  null !== this.overrideMaterial && (a.overrideMaterial = this.overrideMaterial.clone());
  a.autoUpdate = this.autoUpdate;
  a.matrixAutoUpdate = this.matrixAutoUpdate;
  return a;
};

THREE.Fog = function (a, b, c) {
  this.name = "";
  this.color = new THREE.Color(a);
  this.near = void 0 !== b ? b : 1;
  this.far = void 0 !== c ? c : 1E3;
};

THREE.Fog.prototype.clone = function () {
  return new THREE.Fog(this.color.getHex(), this.near, this.far);
};

THREE.FogExp2 = function (a, b) {
  this.name = "";
  this.color = new THREE.Color(a);
  this.density = void 0 !== b ? b : 2.5E-4;
};

THREE.FogExp2.prototype.clone = function () {
  return new THREE.FogExp2(this.color.getHex(), this.density);
};

THREE.ShaderChunk = {};
THREE.ShaderChunk.common = "#define PI 3.14159\n#define PI2 6.28318\n#define RECIPROCAL_PI2 0.15915494\n#define LOG2 1.442695\n#define EPSILON 1e-6\n\nfloat square( in float a ) { return a*a; }\nvec2  square( in vec2 a )  { return vec2( a.x*a.x, a.y*a.y ); }\nvec3  square( in vec3 a )  { return vec3( a.x*a.x, a.y*a.y, a.z*a.z ); }\nvec4  square( in vec4 a )  { return vec4( a.x*a.x, a.y*a.y, a.z*a.z, a.w*a.w ); }\nfloat saturate( in float a ) { return clamp( a, 0.0, 1.0 ); }\nvec2  saturate( in vec2 a )  { return clamp( a, 0.0, 1.0 ); }\nvec3  saturate( in vec3 a )  { return clamp( a, 0.0, 1.0 ); }\nvec4  saturate( in vec4 a )  { return clamp( a, 0.0, 1.0 ); }\nfloat average( in float a ) { return a; }\nfloat average( in vec2 a )  { return ( a.x + a.y) * 0.5; }\nfloat average( in vec3 a )  { return ( a.x + a.y + a.z) / 3.0; }\nfloat average( in vec4 a )  { return ( a.x + a.y + a.z + a.w) * 0.25; }\nfloat whiteCompliment( in float a ) { return saturate( 1.0 - a ); }\nvec2  whiteCompliment( in vec2 a )  { return saturate( vec2(1.0) - a ); }\nvec3  whiteCompliment( in vec3 a )  { return saturate( vec3(1.0) - a ); }\nvec4  whiteCompliment( in vec4 a )  { return saturate( vec4(1.0) - a ); }\nvec3 transformDirection( in vec3 normal, in mat4 matrix ) {\n\treturn normalize( ( matrix * vec4( normal, 0.0 ) ).xyz );\n}\n// http://en.wikibooks.org/wiki/GLSL_Programming/Applying_Matrix_Transformations\nvec3 inverseTransformDirection( in vec3 normal, in mat4 matrix ) {\n\treturn normalize( ( vec4( normal, 0.0 ) * matrix ).xyz );\n}\nvec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal) {\n\tfloat distance = dot( planeNormal, point-pointOnPlane );\n\treturn point - distance * planeNormal;\n}\nfloat sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn sign( dot( point - pointOnPlane, planeNormal ) );\n}\nvec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn pointOnLine + lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) );\n}\nfloat calcLightAttenuation( float lightDistance, float cutoffDistance, float decayExponent ) {\n\tif ( decayExponent > 0.0 ) {\n\t  return pow( saturate( 1.0 - lightDistance / cutoffDistance ), decayExponent );\n\t}\n\treturn 1.0;\n}\n\nvec3 inputToLinear( in vec3 a ) {\n#ifdef GAMMA_INPUT\n\treturn pow( a, vec3( float( GAMMA_FACTOR ) ) );\n#else\n\treturn a;\n#endif\n}\nvec3 linearToOutput( in vec3 a ) {\n#ifdef GAMMA_OUTPUT\n\treturn pow( a, vec3( 1.0 / float( GAMMA_FACTOR ) ) );\n#else\n\treturn a;\n#endif\n}\n";
THREE.ShaderChunk.alphatest_fragment = "#ifdef ALPHATEST\n\n\tif ( diffuseColor.a < ALPHATEST ) discard;\n\n#endif\n";
THREE.ShaderChunk.lights_lambert_vertex = "vLightFront = vec3( 0.0 );\n\n#ifdef DOUBLE_SIDED\n\n\tvLightBack = vec3( 0.0 );\n\n#endif\n\ntransformedNormal = normalize( transformedNormal );\n\n#if MAX_DIR_LIGHTS > 0\n\nfor( int i = 0; i < MAX_DIR_LIGHTS; i ++ ) {\n\n\tvec3 dirVector = transformDirection( directionalLightDirection[ i ], viewMatrix );\n\n\tfloat dotProduct = dot( transformedNormal, dirVector );\n\tvec3 directionalLightWeighting = vec3( max( dotProduct, 0.0 ) );\n\n\t#ifdef DOUBLE_SIDED\n\n\t\tvec3 directionalLightWeightingBack = vec3( max( -dotProduct, 0.0 ) );\n\n\t\t#ifdef WRAP_AROUND\n\n\t\t\tvec3 directionalLightWeightingHalfBack = vec3( max( -0.5 * dotProduct + 0.5, 0.0 ) );\n\n\t\t#endif\n\n\t#endif\n\n\t#ifdef WRAP_AROUND\n\n\t\tvec3 directionalLightWeightingHalf = vec3( max( 0.5 * dotProduct + 0.5, 0.0 ) );\n\t\tdirectionalLightWeighting = mix( directionalLightWeighting, directionalLightWeightingHalf, wrapRGB );\n\n\t\t#ifdef DOUBLE_SIDED\n\n\t\t\tdirectionalLightWeightingBack = mix( directionalLightWeightingBack, directionalLightWeightingHalfBack, wrapRGB );\n\n\t\t#endif\n\n\t#endif\n\n\tvLightFront += directionalLightColor[ i ] * directionalLightWeighting;\n\n\t#ifdef DOUBLE_SIDED\n\n\t\tvLightBack += directionalLightColor[ i ] * directionalLightWeightingBack;\n\n\t#endif\n\n}\n\n#endif\n\n#if MAX_POINT_LIGHTS > 0\n\n\tfor( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {\n\n\t\tvec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );\n\t\tvec3 lVector = lPosition.xyz - mvPosition.xyz;\n\n\t\tfloat attenuation = calcLightAttenuation( length( lVector ), pointLightDistance[ i ], pointLightDecay[ i ] );\n\n\t\tlVector = normalize( lVector );\n\t\tfloat dotProduct = dot( transformedNormal, lVector );\n\n\t\tvec3 pointLightWeighting = vec3( max( dotProduct, 0.0 ) );\n\n\t\t#ifdef DOUBLE_SIDED\n\n\t\t\tvec3 pointLightWeightingBack = vec3( max( -dotProduct, 0.0 ) );\n\n\t\t\t#ifdef WRAP_AROUND\n\n\t\t\t\tvec3 pointLightWeightingHalfBack = vec3( max( -0.5 * dotProduct + 0.5, 0.0 ) );\n\n\t\t\t#endif\n\n\t\t#endif\n\n\t\t#ifdef WRAP_AROUND\n\n\t\t\tvec3 pointLightWeightingHalf = vec3( max( 0.5 * dotProduct + 0.5, 0.0 ) );\n\t\t\tpointLightWeighting = mix( pointLightWeighting, pointLightWeightingHalf, wrapRGB );\n\n\t\t\t#ifdef DOUBLE_SIDED\n\n\t\t\t\tpointLightWeightingBack = mix( pointLightWeightingBack, pointLightWeightingHalfBack, wrapRGB );\n\n\t\t\t#endif\n\n\t\t#endif\n\n\t\tvLightFront += pointLightColor[ i ] * pointLightWeighting * attenuation;\n\n\t\t#ifdef DOUBLE_SIDED\n\n\t\t\tvLightBack += pointLightColor[ i ] * pointLightWeightingBack * attenuation;\n\n\t\t#endif\n\n\t}\n\n#endif\n\n#if MAX_SPOT_LIGHTS > 0\n\n\tfor( int i = 0; i < MAX_SPOT_LIGHTS; i ++ ) {\n\n\t\tvec4 lPosition = viewMatrix * vec4( spotLightPosition[ i ], 1.0 );\n\t\tvec3 lVector = lPosition.xyz - mvPosition.xyz;\n\n\t\tfloat spotEffect = dot( spotLightDirection[ i ], normalize( spotLightPosition[ i ] - worldPosition.xyz ) );\n\n\t\tif ( spotEffect > spotLightAngleCos[ i ] ) {\n\n\t\t\tspotEffect = max( pow( max( spotEffect, 0.0 ), spotLightExponent[ i ] ), 0.0 );\n\n\t\t\tfloat attenuation = calcLightAttenuation( length( lVector ), spotLightDistance[ i ], spotLightDecay[ i ] );\n\n\t\t\tlVector = normalize( lVector );\n\n\t\t\tfloat dotProduct = dot( transformedNormal, lVector );\n\t\t\tvec3 spotLightWeighting = vec3( max( dotProduct, 0.0 ) );\n\n\t\t\t#ifdef DOUBLE_SIDED\n\n\t\t\t\tvec3 spotLightWeightingBack = vec3( max( -dotProduct, 0.0 ) );\n\n\t\t\t\t#ifdef WRAP_AROUND\n\n\t\t\t\t\tvec3 spotLightWeightingHalfBack = vec3( max( -0.5 * dotProduct + 0.5, 0.0 ) );\n\n\t\t\t\t#endif\n\n\t\t\t#endif\n\n\t\t\t#ifdef WRAP_AROUND\n\n\t\t\t\tvec3 spotLightWeightingHalf = vec3( max( 0.5 * dotProduct + 0.5, 0.0 ) );\n\t\t\t\tspotLightWeighting = mix( spotLightWeighting, spotLightWeightingHalf, wrapRGB );\n\n\t\t\t\t#ifdef DOUBLE_SIDED\n\n\t\t\t\t\tspotLightWeightingBack = mix( spotLightWeightingBack, spotLightWeightingHalfBack, wrapRGB );\n\n\t\t\t\t#endif\n\n\t\t\t#endif\n\n\t\t\tvLightFront += spotLightColor[ i ] * spotLightWeighting * attenuation * spotEffect;\n\n\t\t\t#ifdef DOUBLE_SIDED\n\n\t\t\t\tvLightBack += spotLightColor[ i ] * spotLightWeightingBack * attenuation * spotEffect;\n\n\t\t\t#endif\n\n\t\t}\n\n\t}\n\n#endif\n\n#if MAX_HEMI_LIGHTS > 0\n\n\tfor( int i = 0; i < MAX_HEMI_LIGHTS; i ++ ) {\n\n\t\tvec3 lVector = transformDirection( hemisphereLightDirection[ i ], viewMatrix );\n\n\t\tfloat dotProduct = dot( transformedNormal, lVector );\n\n\t\tfloat hemiDiffuseWeight = 0.5 * dotProduct + 0.5;\n\t\tfloat hemiDiffuseWeightBack = -0.5 * dotProduct + 0.5;\n\n\t\tvLightFront += mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeight );\n\n\t\t#ifdef DOUBLE_SIDED\n\n\t\t\tvLightBack += mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeightBack );\n\n\t\t#endif\n\n\t}\n\n#endif\n\nvLightFront += ambientLightColor;\n\n#ifdef DOUBLE_SIDED\n\n\tvLightBack += ambientLightColor;\n\n#endif\n";
THREE.ShaderChunk.map_particle_pars_fragment = "#ifdef USE_MAP\n\n\tuniform vec4 offsetRepeat;\n\tuniform sampler2D map;\n\n#endif\n";
THREE.ShaderChunk.default_vertex = "#ifdef USE_SKINNING\n\n\tvec4 mvPosition = modelViewMatrix * skinned;\n\n#elif defined( USE_MORPHTARGETS )\n\n\tvec4 mvPosition = modelViewMatrix * vec4( morphed, 1.0 );\n\n#else\n\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n\n#endif\n\ngl_Position = projectionMatrix * mvPosition;\n";
THREE.ShaderChunk.map_pars_fragment = "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP )\n\n\tvarying vec2 vUv;\n\n#endif\n\n#ifdef USE_MAP\n\n\tuniform sampler2D map;\n\n#endif";
THREE.ShaderChunk.skinnormal_vertex = "#ifdef USE_SKINNING\n\n\tmat4 skinMatrix = mat4( 0.0 );\n\tskinMatrix += skinWeight.x * boneMatX;\n\tskinMatrix += skinWeight.y * boneMatY;\n\tskinMatrix += skinWeight.z * boneMatZ;\n\tskinMatrix += skinWeight.w * boneMatW;\n\tskinMatrix  = bindMatrixInverse * skinMatrix * bindMatrix;\n\n\t#ifdef USE_MORPHNORMALS\n\n\tvec4 skinnedNormal = skinMatrix * vec4( morphedNormal, 0.0 );\n\n\t#else\n\n\tvec4 skinnedNormal = skinMatrix * vec4( normal, 0.0 );\n\n\t#endif\n\n#endif\n";
THREE.ShaderChunk.logdepthbuf_pars_vertex = "#ifdef USE_LOGDEPTHBUF\n\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\n\t\tvarying float vFragDepth;\n\n\t#endif\n\n\tuniform float logDepthBufFC;\n\n#endif";
THREE.ShaderChunk.lightmap_pars_vertex = "#ifdef USE_LIGHTMAP\n\n\tvarying vec2 vUv2;\n\n#endif";
THREE.ShaderChunk.lights_phong_fragment = "#ifndef FLAT_SHADED\n\n\tvec3 normal = normalize( vNormal );\n\n\t#ifdef DOUBLE_SIDED\n\n\t\tnormal = normal * ( -1.0 + 2.0 * float( gl_FrontFacing ) );\n\n\t#endif\n\n#else\n\n\tvec3 fdx = dFdx( vViewPosition );\n\tvec3 fdy = dFdy( vViewPosition );\n\tvec3 normal = normalize( cross( fdx, fdy ) );\n\n#endif\n\nvec3 viewPosition = normalize( vViewPosition );\n\n#ifdef USE_NORMALMAP\n\n\tnormal = perturbNormal2Arb( -vViewPosition, normal );\n\n#elif defined( USE_BUMPMAP )\n\n\tnormal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );\n\n#endif\n\nvec3 totalDiffuseLight = vec3( 0.0 );\nvec3 totalSpecularLight = vec3( 0.0 );\n\n#if MAX_POINT_LIGHTS > 0\n\n\tfor ( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {\n\n\t\tvec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );\n\t\tvec3 lVector = lPosition.xyz + vViewPosition.xyz;\n\n\t\tfloat attenuation = calcLightAttenuation( length( lVector ), pointLightDistance[ i ], pointLightDecay[ i ] );\n\n\t\tlVector = normalize( lVector );\n\n\t\t// diffuse\n\n\t\tfloat dotProduct = dot( normal, lVector );\n\n\t\t#ifdef WRAP_AROUND\n\n\t\t\tfloat pointDiffuseWeightFull = max( dotProduct, 0.0 );\n\t\t\tfloat pointDiffuseWeightHalf = max( 0.5 * dotProduct + 0.5, 0.0 );\n\n\t\t\tvec3 pointDiffuseWeight = mix( vec3( pointDiffuseWeightFull ), vec3( pointDiffuseWeightHalf ), wrapRGB );\n\n\t\t#else\n\n\t\t\tfloat pointDiffuseWeight = max( dotProduct, 0.0 );\n\n\t\t#endif\n\n\t\ttotalDiffuseLight += pointLightColor[ i ] * pointDiffuseWeight * attenuation;\n\n\t\t\t\t// specular\n\n\t\tvec3 pointHalfVector = normalize( lVector + viewPosition );\n\t\tfloat pointDotNormalHalf = max( dot( normal, pointHalfVector ), 0.0 );\n\t\tfloat pointSpecularWeight = specularStrength * max( pow( pointDotNormalHalf, shininess ), 0.0 );\n\n\t\tfloat specularNormalization = ( shininess + 2.0 ) / 8.0;\n\n\t\tvec3 schlick = specular + vec3( 1.0 - specular ) * pow( max( 1.0 - dot( lVector, pointHalfVector ), 0.0 ), 5.0 );\n\t\ttotalSpecularLight += schlick * pointLightColor[ i ] * pointSpecularWeight * pointDiffuseWeight * attenuation * specularNormalization;\n\n\t}\n\n#endif\n\n#if MAX_SPOT_LIGHTS > 0\n\n\tfor ( int i = 0; i < MAX_SPOT_LIGHTS; i ++ ) {\n\n\t\tvec4 lPosition = viewMatrix * vec4( spotLightPosition[ i ], 1.0 );\n\t\tvec3 lVector = lPosition.xyz + vViewPosition.xyz;\n\n\t\tfloat attenuation = calcLightAttenuation( length( lVector ), spotLightDistance[ i ], spotLightDecay[ i ] );\n\n\t\tlVector = normalize( lVector );\n\n\t\tfloat spotEffect = dot( spotLightDirection[ i ], normalize( spotLightPosition[ i ] - vWorldPosition ) );\n\n\t\tif ( spotEffect > spotLightAngleCos[ i ] ) {\n\n\t\t\tspotEffect = max( pow( max( spotEffect, 0.0 ), spotLightExponent[ i ] ), 0.0 );\n\n\t\t\t// diffuse\n\n\t\t\tfloat dotProduct = dot( normal, lVector );\n\n\t\t\t#ifdef WRAP_AROUND\n\n\t\t\t\tfloat spotDiffuseWeightFull = max( dotProduct, 0.0 );\n\t\t\t\tfloat spotDiffuseWeightHalf = max( 0.5 * dotProduct + 0.5, 0.0 );\n\n\t\t\t\tvec3 spotDiffuseWeight = mix( vec3( spotDiffuseWeightFull ), vec3( spotDiffuseWeightHalf ), wrapRGB );\n\n\t\t\t#else\n\n\t\t\t\tfloat spotDiffuseWeight = max( dotProduct, 0.0 );\n\n\t\t\t#endif\n\n\t\t\ttotalDiffuseLight += spotLightColor[ i ] * spotDiffuseWeight * attenuation * spotEffect;\n\n\t\t\t// specular\n\n\t\t\tvec3 spotHalfVector = normalize( lVector + viewPosition );\n\t\t\tfloat spotDotNormalHalf = max( dot( normal, spotHalfVector ), 0.0 );\n\t\t\tfloat spotSpecularWeight = specularStrength * max( pow( spotDotNormalHalf, shininess ), 0.0 );\n\n\t\t\tfloat specularNormalization = ( shininess + 2.0 ) / 8.0;\n\n\t\t\tvec3 schlick = specular + vec3( 1.0 - specular ) * pow( max( 1.0 - dot( lVector, spotHalfVector ), 0.0 ), 5.0 );\n\t\t\ttotalSpecularLight += schlick * spotLightColor[ i ] * spotSpecularWeight * spotDiffuseWeight * attenuation * specularNormalization * spotEffect;\n\n\t\t}\n\n\t}\n\n#endif\n\n#if MAX_DIR_LIGHTS > 0\n\n\tfor( int i = 0; i < MAX_DIR_LIGHTS; i ++ ) {\n\n\t\tvec3 dirVector = transformDirection( directionalLightDirection[ i ], viewMatrix );\n\n\t\t// diffuse\n\n\t\tfloat dotProduct = dot( normal, dirVector );\n\n\t\t#ifdef WRAP_AROUND\n\n\t\t\tfloat dirDiffuseWeightFull = max( dotProduct, 0.0 );\n\t\t\tfloat dirDiffuseWeightHalf = max( 0.5 * dotProduct + 0.5, 0.0 );\n\n\t\t\tvec3 dirDiffuseWeight = mix( vec3( dirDiffuseWeightFull ), vec3( dirDiffuseWeightHalf ), wrapRGB );\n\n\t\t#else\n\n\t\t\tfloat dirDiffuseWeight = max( dotProduct, 0.0 );\n\n\t\t#endif\n\n\t\ttotalDiffuseLight += directionalLightColor[ i ] * dirDiffuseWeight;\n\n\t\t// specular\n\n\t\tvec3 dirHalfVector = normalize( dirVector + viewPosition );\n\t\tfloat dirDotNormalHalf = max( dot( normal, dirHalfVector ), 0.0 );\n\t\tfloat dirSpecularWeight = specularStrength * max( pow( dirDotNormalHalf, shininess ), 0.0 );\n\n\t\t/*\n\t\t// fresnel term from skin shader\n\t\tconst float F0 = 0.128;\n\n\t\tfloat base = 1.0 - dot( viewPosition, dirHalfVector );\n\t\tfloat exponential = pow( base, 5.0 );\n\n\t\tfloat fresnel = exponential + F0 * ( 1.0 - exponential );\n\t\t*/\n\n\t\t/*\n\t\t// fresnel term from fresnel shader\n\t\tconst float mFresnelBias = 0.08;\n\t\tconst float mFresnelScale = 0.3;\n\t\tconst float mFresnelPower = 5.0;\n\n\t\tfloat fresnel = mFresnelBias + mFresnelScale * pow( 1.0 + dot( normalize( -viewPosition ), normal ), mFresnelPower );\n\t\t*/\n\n\t\tfloat specularNormalization = ( shininess + 2.0 ) / 8.0;\n\n\t\t// \t\tdirSpecular += specular * directionalLightColor[ i ] * dirSpecularWeight * dirDiffuseWeight * specularNormalization * fresnel;\n\n\t\tvec3 schlick = specular + vec3( 1.0 - specular ) * pow( max( 1.0 - dot( dirVector, dirHalfVector ), 0.0 ), 5.0 );\n\t\ttotalSpecularLight += schlick * directionalLightColor[ i ] * dirSpecularWeight * dirDiffuseWeight * specularNormalization;\n\n\n\t}\n\n#endif\n\n#if MAX_HEMI_LIGHTS > 0\n\n\tfor( int i = 0; i < MAX_HEMI_LIGHTS; i ++ ) {\n\n\t\tvec3 lVector = transformDirection( hemisphereLightDirection[ i ], viewMatrix );\n\n\t\t// diffuse\n\n\t\tfloat dotProduct = dot( normal, lVector );\n\t\tfloat hemiDiffuseWeight = 0.5 * dotProduct + 0.5;\n\n\t\tvec3 hemiColor = mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeight );\n\n\t\ttotalDiffuseLight += hemiColor;\n\n\t\t// specular (sky light)\n\n\t\tvec3 hemiHalfVectorSky = normalize( lVector + viewPosition );\n\t\tfloat hemiDotNormalHalfSky = 0.5 * dot( normal, hemiHalfVectorSky ) + 0.5;\n\t\tfloat hemiSpecularWeightSky = specularStrength * max( pow( max( hemiDotNormalHalfSky, 0.0 ), shininess ), 0.0 );\n\n\t\t// specular (ground light)\n\n\t\tvec3 lVectorGround = -lVector;\n\n\t\tvec3 hemiHalfVectorGround = normalize( lVectorGround + viewPosition );\n\t\tfloat hemiDotNormalHalfGround = 0.5 * dot( normal, hemiHalfVectorGround ) + 0.5;\n\t\tfloat hemiSpecularWeightGround = specularStrength * max( pow( max( hemiDotNormalHalfGround, 0.0 ), shininess ), 0.0 );\n\n\t\tfloat dotProductGround = dot( normal, lVectorGround );\n\n\t\tfloat specularNormalization = ( shininess + 2.0 ) / 8.0;\n\n\t\tvec3 schlickSky = specular + vec3( 1.0 - specular ) * pow( max( 1.0 - dot( lVector, hemiHalfVectorSky ), 0.0 ), 5.0 );\n\t\tvec3 schlickGround = specular + vec3( 1.0 - specular ) * pow( max( 1.0 - dot( lVectorGround, hemiHalfVectorGround ), 0.0 ), 5.0 );\n\t\ttotalSpecularLight += hemiColor * specularNormalization * ( schlickSky * hemiSpecularWeightSky * max( dotProduct, 0.0 ) + schlickGround * hemiSpecularWeightGround * max( dotProductGround, 0.0 ) );\n\n\t}\n\n#endif\n\n#ifdef METAL\n\n\toutgoingLight += diffuseColor.rgb * ( totalDiffuseLight + ambientLightColor ) * specular + totalSpecularLight + emissive;\n\n#else\n\n\toutgoingLight += diffuseColor.rgb * ( totalDiffuseLight + ambientLightColor ) + totalSpecularLight + emissive;\n\n#endif\n";
THREE.ShaderChunk.fog_pars_fragment = "#ifdef USE_FOG\n\n\tuniform vec3 fogColor;\n\n\t#ifdef FOG_EXP2\n\n\t\tuniform float fogDensity;\n\n\t#else\n\n\t\tuniform float fogNear;\n\t\tuniform float fogFar;\n\t#endif\n\n#endif";
THREE.ShaderChunk.morphnormal_vertex = "#ifdef USE_MORPHNORMALS\n\n\tvec3 morphedNormal = vec3( 0.0 );\n\n\tmorphedNormal += ( morphNormal0 - normal ) * morphTargetInfluences[ 0 ];\n\tmorphedNormal += ( morphNormal1 - normal ) * morphTargetInfluences[ 1 ];\n\tmorphedNormal += ( morphNormal2 - normal ) * morphTargetInfluences[ 2 ];\n\tmorphedNormal += ( morphNormal3 - normal ) * morphTargetInfluences[ 3 ];\n\n\tmorphedNormal += normal;\n\n#endif";
THREE.ShaderChunk.envmap_pars_fragment = "#ifdef USE_ENVMAP\n\n\tuniform float reflectivity;\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tuniform samplerCube envMap;\n\t#else\n\t\tuniform sampler2D envMap;\n\t#endif\n\tuniform float flipEnvMap;\n\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\n\t\tuniform float refractionRatio;\n\n\t#else\n\n\t\tvarying vec3 vReflect;\n\n\t#endif\n\n#endif\n";
THREE.ShaderChunk.logdepthbuf_fragment = "#if defined(USE_LOGDEPTHBUF) && defined(USE_LOGDEPTHBUF_EXT)\n\n\tgl_FragDepthEXT = log2(vFragDepth) * logDepthBufFC * 0.5;\n\n#endif";
THREE.ShaderChunk.normalmap_pars_fragment = "#ifdef USE_NORMALMAP\n\n\tuniform sampler2D normalMap;\n\tuniform vec2 normalScale;\n\n\t// Per-Pixel Tangent Space Normal Mapping\n\t// http://hacksoflife.blogspot.ch/2009/11/per-pixel-tangent-space-normal-mapping.html\n\n\tvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm ) {\n\n\t\tvec3 q0 = dFdx( eye_pos.xyz );\n\t\tvec3 q1 = dFdy( eye_pos.xyz );\n\t\tvec2 st0 = dFdx( vUv.st );\n\t\tvec2 st1 = dFdy( vUv.st );\n\n\t\tvec3 S = normalize( q0 * st1.t - q1 * st0.t );\n\t\tvec3 T = normalize( -q0 * st1.s + q1 * st0.s );\n\t\tvec3 N = normalize( surf_norm );\n\n\t\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t\tmapN.xy = normalScale * mapN.xy;\n\t\tmat3 tsn = mat3( S, T, N );\n\t\treturn normalize( tsn * mapN );\n\n\t}\n\n#endif\n";
THREE.ShaderChunk.lights_phong_pars_vertex = "#if MAX_SPOT_LIGHTS > 0 || defined( USE_BUMPMAP ) || defined( USE_ENVMAP )\n\n\tvarying vec3 vWorldPosition;\n\n#endif\n";
THREE.ShaderChunk.lightmap_pars_fragment = "#ifdef USE_LIGHTMAP\n\n\tvarying vec2 vUv2;\n\tuniform sampler2D lightMap;\n\n#endif";
THREE.ShaderChunk.shadowmap_vertex = "#ifdef USE_SHADOWMAP\n\n\tfor( int i = 0; i < MAX_SHADOWS; i ++ ) {\n\n\t\tvShadowCoord[ i ] = shadowMatrix[ i ] * worldPosition;\n\n\t}\n\n#endif";
THREE.ShaderChunk.lights_phong_vertex = "#if MAX_SPOT_LIGHTS > 0 || defined( USE_BUMPMAP ) || defined( USE_ENVMAP )\n\n\tvWorldPosition = worldPosition.xyz;\n\n#endif";
THREE.ShaderChunk.map_fragment = "#ifdef USE_MAP\n\n\tvec4 texelColor = texture2D( map, vUv );\n\n\ttexelColor.xyz = inputToLinear( texelColor.xyz );\n\n\tdiffuseColor *= texelColor;\n\n#endif";
THREE.ShaderChunk.lightmap_vertex = "#ifdef USE_LIGHTMAP\n\n\tvUv2 = uv2;\n\n#endif";
THREE.ShaderChunk.map_particle_fragment = "#ifdef USE_MAP\n\n\tdiffuseColor *= texture2D( map, vec2( gl_PointCoord.x, 1.0 - gl_PointCoord.y ) * offsetRepeat.zw + offsetRepeat.xy );\n\n#endif\n";
THREE.ShaderChunk.color_pars_fragment = "#ifdef USE_COLOR\n\n\tvarying vec3 vColor;\n\n#endif\n";
THREE.ShaderChunk.color_vertex = "#ifdef USE_COLOR\n\n\tvColor.xyz = inputToLinear( color.xyz );\n\n#endif";
THREE.ShaderChunk.skinning_vertex = "#ifdef USE_SKINNING\n\n\t#ifdef USE_MORPHTARGETS\n\n\tvec4 skinVertex = bindMatrix * vec4( morphed, 1.0 );\n\n\t#else\n\n\tvec4 skinVertex = bindMatrix * vec4( position, 1.0 );\n\n\t#endif\n\n\tvec4 skinned = vec4( 0.0 );\n\tskinned += boneMatX * skinVertex * skinWeight.x;\n\tskinned += boneMatY * skinVertex * skinWeight.y;\n\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\tskinned += boneMatW * skinVertex * skinWeight.w;\n\tskinned  = bindMatrixInverse * skinned;\n\n#endif\n";
THREE.ShaderChunk.envmap_pars_vertex = "#if defined( USE_ENVMAP ) && ! defined( USE_BUMPMAP ) && ! defined( USE_NORMALMAP ) && ! defined( PHONG )\n\n\tvarying vec3 vReflect;\n\n\tuniform float refractionRatio;\n\n#endif\n";
THREE.ShaderChunk.linear_to_gamma_fragment = "\n\toutgoingLight = linearToOutput( outgoingLight );\n";
THREE.ShaderChunk.color_pars_vertex = "#ifdef USE_COLOR\n\n\tvarying vec3 vColor;\n\n#endif";
THREE.ShaderChunk.lights_lambert_pars_vertex = "uniform vec3 ambientLightColor;\n\n#if MAX_DIR_LIGHTS > 0\n\n\tuniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];\n\tuniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];\n\n#endif\n\n#if MAX_HEMI_LIGHTS > 0\n\n\tuniform vec3 hemisphereLightSkyColor[ MAX_HEMI_LIGHTS ];\n\tuniform vec3 hemisphereLightGroundColor[ MAX_HEMI_LIGHTS ];\n\tuniform vec3 hemisphereLightDirection[ MAX_HEMI_LIGHTS ];\n\n#endif\n\n#if MAX_POINT_LIGHTS > 0\n\n\tuniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];\n\tuniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\n\tuniform float pointLightDistance[ MAX_POINT_LIGHTS ];\n\tuniform float pointLightDecay[ MAX_POINT_LIGHTS ];\n\n#endif\n\n#if MAX_SPOT_LIGHTS > 0\n\n\tuniform vec3 spotLightColor[ MAX_SPOT_LIGHTS ];\n\tuniform vec3 spotLightPosition[ MAX_SPOT_LIGHTS ];\n\tuniform vec3 spotLightDirection[ MAX_SPOT_LIGHTS ];\n\tuniform float spotLightDistance[ MAX_SPOT_LIGHTS ];\n\tuniform float spotLightAngleCos[ MAX_SPOT_LIGHTS ];\n\tuniform float spotLightExponent[ MAX_SPOT_LIGHTS ];\n\tuniform float spotLightDecay[ MAX_SPOT_LIGHTS ];\n\n#endif\n\n#ifdef WRAP_AROUND\n\n\tuniform vec3 wrapRGB;\n\n#endif\n";
THREE.ShaderChunk.map_pars_vertex = "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP )\n\n\tvarying vec2 vUv;\n\tuniform vec4 offsetRepeat;\n\n#endif\n";
THREE.ShaderChunk.envmap_fragment = "#ifdef USE_ENVMAP\n\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\n\t\tvec3 cameraToVertex = normalize( vWorldPosition - cameraPosition );\n\n\t\t// Transforming Normal Vectors with the Inverse Transformation\n\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\n\t\t\tvec3 reflectVec = reflect( cameraToVertex, worldNormal );\n\n\t\t#else\n\n\t\t\tvec3 reflectVec = refract( cameraToVertex, worldNormal, refractionRatio );\n\n\t\t#endif\n\n\t#else\n\n\t\tvec3 reflectVec = vReflect;\n\n\t#endif\n\n\t#ifdef DOUBLE_SIDED\n\t\tfloat flipNormal = ( -1.0 + 2.0 * float( gl_FrontFacing ) );\n\t#else\n\t\tfloat flipNormal = 1.0;\n\t#endif\n\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 envColor = textureCube( envMap, flipNormal * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\n\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\t\tvec2 sampleUV;\n\t\tsampleUV.y = saturate( flipNormal * reflectVec.y * 0.5 + 0.5 );\n\t\tsampleUV.x = atan( flipNormal * reflectVec.z, flipNormal * reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\t\tvec4 envColor = texture2D( envMap, sampleUV );\n\n\t#elif defined( ENVMAP_TYPE_SPHERE )\n\t\tvec3 reflectView = flipNormal * normalize((viewMatrix * vec4( reflectVec, 0.0 )).xyz + vec3(0.0,0.0,1.0));\n\t\tvec4 envColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5 );\n\t#endif\n\n\tenvColor.xyz = inputToLinear( envColor.xyz );\n\n\t#ifdef ENVMAP_BLENDING_MULTIPLY\n\n\t\toutgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\n\t#elif defined( ENVMAP_BLENDING_MIX )\n\n\t\toutgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\n\t#elif defined( ENVMAP_BLENDING_ADD )\n\n\t\toutgoingLight += envColor.xyz * specularStrength * reflectivity;\n\n\t#endif\n\n#endif\n";
THREE.ShaderChunk.specularmap_pars_fragment = "#ifdef USE_SPECULARMAP\n\n\tuniform sampler2D specularMap;\n\n#endif";
THREE.ShaderChunk.logdepthbuf_vertex = "#ifdef USE_LOGDEPTHBUF\n\n\tgl_Position.z = log2(max( EPSILON, gl_Position.w + 1.0 )) * logDepthBufFC;\n\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\n\t\tvFragDepth = 1.0 + gl_Position.w;\n\n#else\n\n\t\tgl_Position.z = (gl_Position.z - 1.0) * gl_Position.w;\n\n\t#endif\n\n#endif";
THREE.ShaderChunk.morphtarget_pars_vertex = "#ifdef USE_MORPHTARGETS\n\n\t#ifndef USE_MORPHNORMALS\n\n\tuniform float morphTargetInfluences[ 8 ];\n\n\t#else\n\n\tuniform float morphTargetInfluences[ 4 ];\n\n\t#endif\n\n#endif";
THREE.ShaderChunk.specularmap_fragment = "float specularStrength;\n\n#ifdef USE_SPECULARMAP\n\n\tvec4 texelSpecular = texture2D( specularMap, vUv );\n\tspecularStrength = texelSpecular.r;\n\n#else\n\n\tspecularStrength = 1.0;\n\n#endif";
THREE.ShaderChunk.fog_fragment = "#ifdef USE_FOG\n\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\n\t\tfloat depth = gl_FragDepthEXT / gl_FragCoord.w;\n\n\t#else\n\n\t\tfloat depth = gl_FragCoord.z / gl_FragCoord.w;\n\n\t#endif\n\n\t#ifdef FOG_EXP2\n\n\t\tfloat fogFactor = exp2( - square( fogDensity ) * square( depth ) * LOG2 );\n\t\tfogFactor = whiteCompliment( fogFactor );\n\n\t#else\n\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, depth );\n\n\t#endif\n\t\n\toutgoingLight = mix( outgoingLight, fogColor, fogFactor );\n\n#endif";
THREE.ShaderChunk.bumpmap_pars_fragment = "#ifdef USE_BUMPMAP\n\n\tuniform sampler2D bumpMap;\n\tuniform float bumpScale;\n\n\t// Derivative maps - bump mapping unparametrized surfaces by Morten Mikkelsen\n\t// http://mmikkelsen3d.blogspot.sk/2011/07/derivative-maps.html\n\n\t// Evaluate the derivative of the height w.r.t. screen-space using forward differencing (listing 2)\n\n\tvec2 dHdxy_fwd() {\n\n\t\tvec2 dSTdx = dFdx( vUv );\n\t\tvec2 dSTdy = dFdy( vUv );\n\n\t\tfloat Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n\t\tfloat dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n\t\tfloat dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n\n\t\treturn vec2( dBx, dBy );\n\n\t}\n\n\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {\n\n\t\tvec3 vSigmaX = dFdx( surf_pos );\n\t\tvec3 vSigmaY = dFdy( surf_pos );\n\t\tvec3 vN = surf_norm;\t\t// normalized\n\n\t\tvec3 R1 = cross( vSigmaY, vN );\n\t\tvec3 R2 = cross( vN, vSigmaX );\n\n\t\tfloat fDet = dot( vSigmaX, R1 );\n\n\t\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n\t\treturn normalize( abs( fDet ) * surf_norm - vGrad );\n\n\t}\n\n#endif\n";
THREE.ShaderChunk.defaultnormal_vertex = "#ifdef USE_SKINNING\n\n\tvec3 objectNormal = skinnedNormal.xyz;\n\n#elif defined( USE_MORPHNORMALS )\n\n\tvec3 objectNormal = morphedNormal;\n\n#else\n\n\tvec3 objectNormal = normal;\n\n#endif\n\n#ifdef FLIP_SIDED\n\n\tobjectNormal = -objectNormal;\n\n#endif\n\nvec3 transformedNormal = normalMatrix * objectNormal;\n";
THREE.ShaderChunk.lights_phong_pars_fragment = "uniform vec3 ambientLightColor;\n\n#if MAX_DIR_LIGHTS > 0\n\n\tuniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];\n\tuniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];\n\n#endif\n\n#if MAX_HEMI_LIGHTS > 0\n\n\tuniform vec3 hemisphereLightSkyColor[ MAX_HEMI_LIGHTS ];\n\tuniform vec3 hemisphereLightGroundColor[ MAX_HEMI_LIGHTS ];\n\tuniform vec3 hemisphereLightDirection[ MAX_HEMI_LIGHTS ];\n\n#endif\n\n#if MAX_POINT_LIGHTS > 0\n\n\tuniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];\n\n\tuniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\n\tuniform float pointLightDistance[ MAX_POINT_LIGHTS ];\n\tuniform float pointLightDecay[ MAX_POINT_LIGHTS ];\n\n#endif\n\n#if MAX_SPOT_LIGHTS > 0\n\n\tuniform vec3 spotLightColor[ MAX_SPOT_LIGHTS ];\n\tuniform vec3 spotLightPosition[ MAX_SPOT_LIGHTS ];\n\tuniform vec3 spotLightDirection[ MAX_SPOT_LIGHTS ];\n\tuniform float spotLightAngleCos[ MAX_SPOT_LIGHTS ];\n\tuniform float spotLightExponent[ MAX_SPOT_LIGHTS ];\n\tuniform float spotLightDistance[ MAX_SPOT_LIGHTS ];\n\tuniform float spotLightDecay[ MAX_SPOT_LIGHTS ];\n\n#endif\n\n#if MAX_SPOT_LIGHTS > 0 || defined( USE_BUMPMAP ) || defined( USE_ENVMAP )\n\n\tvarying vec3 vWorldPosition;\n\n#endif\n\n#ifdef WRAP_AROUND\n\n\tuniform vec3 wrapRGB;\n\n#endif\n\nvarying vec3 vViewPosition;\n\n#ifndef FLAT_SHADED\n\n\tvarying vec3 vNormal;\n\n#endif\n";
THREE.ShaderChunk.skinbase_vertex = "#ifdef USE_SKINNING\n\n\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\n\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\n\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\n\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\n\n#endif";
THREE.ShaderChunk.map_vertex = "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP )\n\n\tvUv = uv * offsetRepeat.zw + offsetRepeat.xy;\n\n#endif";
THREE.ShaderChunk.lightmap_fragment = "#ifdef USE_LIGHTMAP\n\n\toutgoingLight *= diffuseColor.xyz * texture2D( lightMap, vUv2 ).xyz;\n\n#endif";
THREE.ShaderChunk.shadowmap_pars_vertex = "#ifdef USE_SHADOWMAP\n\n\tvarying vec4 vShadowCoord[ MAX_SHADOWS ];\n\tuniform mat4 shadowMatrix[ MAX_SHADOWS ];\n\n#endif";
THREE.ShaderChunk.color_fragment = "#ifdef USE_COLOR\n\n\tdiffuseColor.rgb *= vColor;\n\n#endif";
THREE.ShaderChunk.morphtarget_vertex = "#ifdef USE_MORPHTARGETS\n\n\tvec3 morphed = vec3( 0.0 );\n\tmorphed += ( morphTarget0 - position ) * morphTargetInfluences[ 0 ];\n\tmorphed += ( morphTarget1 - position ) * morphTargetInfluences[ 1 ];\n\tmorphed += ( morphTarget2 - position ) * morphTargetInfluences[ 2 ];\n\tmorphed += ( morphTarget3 - position ) * morphTargetInfluences[ 3 ];\n\n\t#ifndef USE_MORPHNORMALS\n\n\tmorphed += ( morphTarget4 - position ) * morphTargetInfluences[ 4 ];\n\tmorphed += ( morphTarget5 - position ) * morphTargetInfluences[ 5 ];\n\tmorphed += ( morphTarget6 - position ) * morphTargetInfluences[ 6 ];\n\tmorphed += ( morphTarget7 - position ) * morphTargetInfluences[ 7 ];\n\n\t#endif\n\n\tmorphed += position;\n\n#endif";
THREE.ShaderChunk.envmap_vertex = "#if defined( USE_ENVMAP ) && ! defined( USE_BUMPMAP ) && ! defined( USE_NORMALMAP ) && ! defined( PHONG )\n\n\tvec3 worldNormal = transformDirection( objectNormal, modelMatrix );\n\n\tvec3 cameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\n\t#ifdef ENVMAP_MODE_REFLECTION\n\n\t\tvReflect = reflect( cameraToVertex, worldNormal );\n\n\t#else\n\n\t\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\n\t#endif\n\n#endif\n";
THREE.ShaderChunk.shadowmap_fragment = "#ifdef USE_SHADOWMAP\n\n\t#ifdef SHADOWMAP_DEBUG\n\n\t\tvec3 frustumColors[3];\n\t\tfrustumColors[0] = vec3( 1.0, 0.5, 0.0 );\n\t\tfrustumColors[1] = vec3( 0.0, 1.0, 0.8 );\n\t\tfrustumColors[2] = vec3( 0.0, 0.5, 1.0 );\n\n\t#endif\n\n\t#ifdef SHADOWMAP_CASCADE\n\n\t\tint inFrustumCount = 0;\n\n\t#endif\n\n\tfloat fDepth;\n\tvec3 shadowColor = vec3( 1.0 );\n\n\tfor( int i = 0; i < MAX_SHADOWS; i ++ ) {\n\n\t\tvec3 shadowCoord = vShadowCoord[ i ].xyz / vShadowCoord[ i ].w;\n\n\t\t\t\t// if ( something && something ) breaks ATI OpenGL shader compiler\n\t\t\t\t// if ( all( something, something ) ) using this instead\n\n\t\tbvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n\t\tbool inFrustum = all( inFrustumVec );\n\n\t\t\t\t// don't shadow pixels outside of light frustum\n\t\t\t\t// use just first frustum (for cascades)\n\t\t\t\t// don't shadow pixels behind far plane of light frustum\n\n\t\t#ifdef SHADOWMAP_CASCADE\n\n\t\t\tinFrustumCount += int( inFrustum );\n\t\t\tbvec3 frustumTestVec = bvec3( inFrustum, inFrustumCount == 1, shadowCoord.z <= 1.0 );\n\n\t\t#else\n\n\t\t\tbvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n\n\t\t#endif\n\n\t\tbool frustumTest = all( frustumTestVec );\n\n\t\tif ( frustumTest ) {\n\n\t\t\tshadowCoord.z += shadowBias[ i ];\n\n\t\t\t#if defined( SHADOWMAP_TYPE_PCF )\n\n\t\t\t\t\t\t// Percentage-close filtering\n\t\t\t\t\t\t// (9 pixel kernel)\n\t\t\t\t\t\t// http://fabiensanglard.net/shadowmappingPCF/\n\n\t\t\t\tfloat shadow = 0.0;\n\n\t\t/*\n\t\t\t\t\t\t// nested loops breaks shader compiler / validator on some ATI cards when using OpenGL\n\t\t\t\t\t\t// must enroll loop manually\n\n\t\t\t\tfor ( float y = -1.25; y <= 1.25; y += 1.25 )\n\t\t\t\t\tfor ( float x = -1.25; x <= 1.25; x += 1.25 ) {\n\n\t\t\t\t\t\tvec4 rgbaDepth = texture2D( shadowMap[ i ], vec2( x * xPixelOffset, y * yPixelOffset ) + shadowCoord.xy );\n\n\t\t\t\t\t\t\t\t// doesn't seem to produce any noticeable visual difference compared to simple texture2D lookup\n\t\t\t\t\t\t\t\t//vec4 rgbaDepth = texture2DProj( shadowMap[ i ], vec4( vShadowCoord[ i ].w * ( vec2( x * xPixelOffset, y * yPixelOffset ) + shadowCoord.xy ), 0.05, vShadowCoord[ i ].w ) );\n\n\t\t\t\t\t\tfloat fDepth = unpackDepth( rgbaDepth );\n\n\t\t\t\t\t\tif ( fDepth < shadowCoord.z )\n\t\t\t\t\t\t\tshadow += 1.0;\n\n\t\t\t\t}\n\n\t\t\t\tshadow /= 9.0;\n\n\t\t*/\n\n\t\t\t\tconst float shadowDelta = 1.0 / 9.0;\n\n\t\t\t\tfloat xPixelOffset = 1.0 / shadowMapSize[ i ].x;\n\t\t\t\tfloat yPixelOffset = 1.0 / shadowMapSize[ i ].y;\n\n\t\t\t\tfloat dx0 = -1.25 * xPixelOffset;\n\t\t\t\tfloat dy0 = -1.25 * yPixelOffset;\n\t\t\t\tfloat dx1 = 1.25 * xPixelOffset;\n\t\t\t\tfloat dy1 = 1.25 * yPixelOffset;\n\n\t\t\t\tfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy0 ) ) );\n\t\t\t\tif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n\t\t\t\tfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy0 ) ) );\n\t\t\t\tif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n\t\t\t\tfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy0 ) ) );\n\t\t\t\tif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n\t\t\t\tfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, 0.0 ) ) );\n\t\t\t\tif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n\t\t\t\tfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy ) );\n\t\t\t\tif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n\t\t\t\tfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, 0.0 ) ) );\n\t\t\t\tif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n\t\t\t\tfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy1 ) ) );\n\t\t\t\tif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n\t\t\t\tfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy1 ) ) );\n\t\t\t\tif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n\t\t\t\tfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy1 ) ) );\n\t\t\t\tif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n\t\t\t\tshadowColor = shadowColor * vec3( ( 1.0 - shadowDarkness[ i ] * shadow ) );\n\n\t\t\t#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\n\t\t\t\t\t\t// Percentage-close filtering\n\t\t\t\t\t\t// (9 pixel kernel)\n\t\t\t\t\t\t// http://fabiensanglard.net/shadowmappingPCF/\n\n\t\t\t\tfloat shadow = 0.0;\n\n\t\t\t\tfloat xPixelOffset = 1.0 / shadowMapSize[ i ].x;\n\t\t\t\tfloat yPixelOffset = 1.0 / shadowMapSize[ i ].y;\n\n\t\t\t\tfloat dx0 = -1.0 * xPixelOffset;\n\t\t\t\tfloat dy0 = -1.0 * yPixelOffset;\n\t\t\t\tfloat dx1 = 1.0 * xPixelOffset;\n\t\t\t\tfloat dy1 = 1.0 * yPixelOffset;\n\n\t\t\t\tmat3 shadowKernel;\n\t\t\t\tmat3 depthKernel;\n\n\t\t\t\tdepthKernel[0][0] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy0 ) ) );\n\t\t\t\tdepthKernel[0][1] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, 0.0 ) ) );\n\t\t\t\tdepthKernel[0][2] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy1 ) ) );\n\t\t\t\tdepthKernel[1][0] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy0 ) ) );\n\t\t\t\tdepthKernel[1][1] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy ) );\n\t\t\t\tdepthKernel[1][2] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy1 ) ) );\n\t\t\t\tdepthKernel[2][0] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy0 ) ) );\n\t\t\t\tdepthKernel[2][1] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, 0.0 ) ) );\n\t\t\t\tdepthKernel[2][2] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy1 ) ) );\n\n\t\t\t\tvec3 shadowZ = vec3( shadowCoord.z );\n\t\t\t\tshadowKernel[0] = vec3(lessThan(depthKernel[0], shadowZ ));\n\t\t\t\tshadowKernel[0] *= vec3(0.25);\n\n\t\t\t\tshadowKernel[1] = vec3(lessThan(depthKernel[1], shadowZ ));\n\t\t\t\tshadowKernel[1] *= vec3(0.25);\n\n\t\t\t\tshadowKernel[2] = vec3(lessThan(depthKernel[2], shadowZ ));\n\t\t\t\tshadowKernel[2] *= vec3(0.25);\n\n\t\t\t\tvec2 fractionalCoord = 1.0 - fract( shadowCoord.xy * shadowMapSize[i].xy );\n\n\t\t\t\tshadowKernel[0] = mix( shadowKernel[1], shadowKernel[0], fractionalCoord.x );\n\t\t\t\tshadowKernel[1] = mix( shadowKernel[2], shadowKernel[1], fractionalCoord.x );\n\n\t\t\t\tvec4 shadowValues;\n\t\t\t\tshadowValues.x = mix( shadowKernel[0][1], shadowKernel[0][0], fractionalCoord.y );\n\t\t\t\tshadowValues.y = mix( shadowKernel[0][2], shadowKernel[0][1], fractionalCoord.y );\n\t\t\t\tshadowValues.z = mix( shadowKernel[1][1], shadowKernel[1][0], fractionalCoord.y );\n\t\t\t\tshadowValues.w = mix( shadowKernel[1][2], shadowKernel[1][1], fractionalCoord.y );\n\n\t\t\t\tshadow = dot( shadowValues, vec4( 1.0 ) );\n\n\t\t\t\tshadowColor = shadowColor * vec3( ( 1.0 - shadowDarkness[ i ] * shadow ) );\n\n\t\t\t#else\n\n\t\t\t\tvec4 rgbaDepth = texture2D( shadowMap[ i ], shadowCoord.xy );\n\t\t\t\tfloat fDepth = unpackDepth( rgbaDepth );\n\n\t\t\t\tif ( fDepth < shadowCoord.z )\n\n\t\t// spot with multiple shadows is darker\n\n\t\t\t\t\tshadowColor = shadowColor * vec3( 1.0 - shadowDarkness[ i ] );\n\n\t\t// spot with multiple shadows has the same color as single shadow spot\n\n\t\t// \t\t\t\t\tshadowColor = min( shadowColor, vec3( shadowDarkness[ i ] ) );\n\n\t\t\t#endif\n\n\t\t}\n\n\n\t\t#ifdef SHADOWMAP_DEBUG\n\n\t\t\t#ifdef SHADOWMAP_CASCADE\n\n\t\t\t\tif ( inFrustum && inFrustumCount == 1 ) outgoingLight *= frustumColors[ i ];\n\n\t\t\t#else\n\n\t\t\t\tif ( inFrustum ) outgoingLight *= frustumColors[ i ];\n\n\t\t\t#endif\n\n\t\t#endif\n\n\t}\n\n\t// NOTE: I am unsure if this is correct in linear space.  -bhouston, Dec 29, 2014\n\tshadowColor = inputToLinear( shadowColor );\n\n\toutgoingLight = outgoingLight * shadowColor;\n\n#endif\n";
THREE.ShaderChunk.worldpos_vertex = "#if defined( USE_ENVMAP ) || defined( PHONG ) || defined( LAMBERT ) || defined ( USE_SHADOWMAP )\n\n\t#ifdef USE_SKINNING\n\n\t\tvec4 worldPosition = modelMatrix * skinned;\n\n\t#elif defined( USE_MORPHTARGETS )\n\n\t\tvec4 worldPosition = modelMatrix * vec4( morphed, 1.0 );\n\n\t#else\n\n\t\tvec4 worldPosition = modelMatrix * vec4( position, 1.0 );\n\n\t#endif\n\n#endif\n";
THREE.ShaderChunk.shadowmap_pars_fragment = "#ifdef USE_SHADOWMAP\n\n\tuniform sampler2D shadowMap[ MAX_SHADOWS ];\n\tuniform vec2 shadowMapSize[ MAX_SHADOWS ];\n\n\tuniform float shadowDarkness[ MAX_SHADOWS ];\n\tuniform float shadowBias[ MAX_SHADOWS ];\n\n\tvarying vec4 vShadowCoord[ MAX_SHADOWS ];\n\n\tfloat unpackDepth( const in vec4 rgba_depth ) {\n\n\t\tconst vec4 bit_shift = vec4( 1.0 / ( 256.0 * 256.0 * 256.0 ), 1.0 / ( 256.0 * 256.0 ), 1.0 / 256.0, 1.0 );\n\t\tfloat depth = dot( rgba_depth, bit_shift );\n\t\treturn depth;\n\n\t}\n\n#endif";
THREE.ShaderChunk.skinning_pars_vertex = "#ifdef USE_SKINNING\n\n\tuniform mat4 bindMatrix;\n\tuniform mat4 bindMatrixInverse;\n\n\t#ifdef BONE_TEXTURE\n\n\t\tuniform sampler2D boneTexture;\n\t\tuniform int boneTextureWidth;\n\t\tuniform int boneTextureHeight;\n\n\t\tmat4 getBoneMatrix( const in float i ) {\n\n\t\t\tfloat j = i * 4.0;\n\t\t\tfloat x = mod( j, float( boneTextureWidth ) );\n\t\t\tfloat y = floor( j / float( boneTextureWidth ) );\n\n\t\t\tfloat dx = 1.0 / float( boneTextureWidth );\n\t\t\tfloat dy = 1.0 / float( boneTextureHeight );\n\n\t\t\ty = dy * ( y + 0.5 );\n\n\t\t\tvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n\t\t\tvec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n\t\t\tvec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n\t\t\tvec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n\n\t\t\tmat4 bone = mat4( v1, v2, v3, v4 );\n\n\t\t\treturn bone;\n\n\t\t}\n\n\t#else\n\n\t\tuniform mat4 boneGlobalMatrices[ MAX_BONES ];\n\n\t\tmat4 getBoneMatrix( const in float i ) {\n\n\t\t\tmat4 bone = boneGlobalMatrices[ int(i) ];\n\t\t\treturn bone;\n\n\t\t}\n\n\t#endif\n\n#endif\n";
THREE.ShaderChunk.logdepthbuf_pars_fragment = "#ifdef USE_LOGDEPTHBUF\n\n\tuniform float logDepthBufFC;\n\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\n\t\t#extension GL_EXT_frag_depth : enable\n\t\tvarying float vFragDepth;\n\n\t#endif\n\n#endif";
THREE.ShaderChunk.alphamap_fragment = "#ifdef USE_ALPHAMAP\n\n\tdiffuseColor.a *= texture2D( alphaMap, vUv ).g;\n\n#endif\n";
THREE.ShaderChunk.alphamap_pars_fragment = "#ifdef USE_ALPHAMAP\n\n\tuniform sampler2D alphaMap;\n\n#endif\n";
THREE.UniformsUtils = {
  merge: function merge(a) {
    for (var b = {}, c = 0; c < a.length; c++) {
      var d = this.clone(a[c]),
          e;

      for (e in d) {
        b[e] = d[e];
      }
    }

    return b;
  },
  clone: function clone(a) {
    var b = {},
        c;

    for (c in a) {
      b[c] = {};

      for (var d in a[c]) {
        var e = a[c][d];
        b[c][d] = e instanceof THREE.Color || e instanceof THREE.Vector2 || e instanceof THREE.Vector3 || e instanceof THREE.Vector4 || e instanceof THREE.Matrix4 || e instanceof THREE.Texture ? e.clone() : e instanceof Array ? e.slice() : e;
      }
    }

    return b;
  }
};
THREE.UniformsLib = {
  common: {
    diffuse: {
      type: "c",
      value: new THREE.Color(15658734)
    },
    opacity: {
      type: "f",
      value: 1
    },
    map: {
      type: "t",
      value: null
    },
    offsetRepeat: {
      type: "v4",
      value: new THREE.Vector4(0, 0, 1, 1)
    },
    lightMap: {
      type: "t",
      value: null
    },
    specularMap: {
      type: "t",
      value: null
    },
    alphaMap: {
      type: "t",
      value: null
    },
    envMap: {
      type: "t",
      value: null
    },
    flipEnvMap: {
      type: "f",
      value: -1
    },
    reflectivity: {
      type: "f",
      value: 1
    },
    refractionRatio: {
      type: "f",
      value: .98
    },
    morphTargetInfluences: {
      type: "f",
      value: 0
    }
  },
  bump: {
    bumpMap: {
      type: "t",
      value: null
    },
    bumpScale: {
      type: "f",
      value: 1
    }
  },
  normalmap: {
    normalMap: {
      type: "t",
      value: null
    },
    normalScale: {
      type: "v2",
      value: new THREE.Vector2(1, 1)
    }
  },
  fog: {
    fogDensity: {
      type: "f",
      value: 2.5E-4
    },
    fogNear: {
      type: "f",
      value: 1
    },
    fogFar: {
      type: "f",
      value: 2E3
    },
    fogColor: {
      type: "c",
      value: new THREE.Color(16777215)
    }
  },
  lights: {
    ambientLightColor: {
      type: "fv",
      value: []
    },
    directionalLightDirection: {
      type: "fv",
      value: []
    },
    directionalLightColor: {
      type: "fv",
      value: []
    },
    hemisphereLightDirection: {
      type: "fv",
      value: []
    },
    hemisphereLightSkyColor: {
      type: "fv",
      value: []
    },
    hemisphereLightGroundColor: {
      type: "fv",
      value: []
    },
    pointLightColor: {
      type: "fv",
      value: []
    },
    pointLightPosition: {
      type: "fv",
      value: []
    },
    pointLightDistance: {
      type: "fv1",
      value: []
    },
    pointLightDecay: {
      type: "fv1",
      value: []
    },
    spotLightColor: {
      type: "fv",
      value: []
    },
    spotLightPosition: {
      type: "fv",
      value: []
    },
    spotLightDirection: {
      type: "fv",
      value: []
    },
    spotLightDistance: {
      type: "fv1",
      value: []
    },
    spotLightAngleCos: {
      type: "fv1",
      value: []
    },
    spotLightExponent: {
      type: "fv1",
      value: []
    },
    spotLightDecay: {
      type: "fv1",
      value: []
    }
  },
  particle: {
    psColor: {
      type: "c",
      value: new THREE.Color(15658734)
    },
    opacity: {
      type: "f",
      value: 1
    },
    size: {
      type: "f",
      value: 1
    },
    scale: {
      type: "f",
      value: 1
    },
    map: {
      type: "t",
      value: null
    },
    offsetRepeat: {
      type: "v4",
      value: new THREE.Vector4(0, 0, 1, 1)
    },
    fogDensity: {
      type: "f",
      value: 2.5E-4
    },
    fogNear: {
      type: "f",
      value: 1
    },
    fogFar: {
      type: "f",
      value: 2E3
    },
    fogColor: {
      type: "c",
      value: new THREE.Color(16777215)
    }
  },
  shadowmap: {
    shadowMap: {
      type: "tv",
      value: []
    },
    shadowMapSize: {
      type: "v2v",
      value: []
    },
    shadowBias: {
      type: "fv1",
      value: []
    },
    shadowDarkness: {
      type: "fv1",
      value: []
    },
    shadowMatrix: {
      type: "m4v",
      value: []
    }
  }
};
THREE.ShaderLib = {
  basic: {
    uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.common, THREE.UniformsLib.fog, THREE.UniformsLib.shadowmap]),
    vertexShader: [THREE.ShaderChunk.common, THREE.ShaderChunk.map_pars_vertex, THREE.ShaderChunk.lightmap_pars_vertex, THREE.ShaderChunk.envmap_pars_vertex, THREE.ShaderChunk.color_pars_vertex, THREE.ShaderChunk.morphtarget_pars_vertex, THREE.ShaderChunk.skinning_pars_vertex, THREE.ShaderChunk.shadowmap_pars_vertex, THREE.ShaderChunk.logdepthbuf_pars_vertex, "void main() {", THREE.ShaderChunk.map_vertex, THREE.ShaderChunk.lightmap_vertex, THREE.ShaderChunk.color_vertex, THREE.ShaderChunk.skinbase_vertex, "\t#ifdef USE_ENVMAP", THREE.ShaderChunk.morphnormal_vertex, THREE.ShaderChunk.skinnormal_vertex, THREE.ShaderChunk.defaultnormal_vertex, "\t#endif", THREE.ShaderChunk.morphtarget_vertex, THREE.ShaderChunk.skinning_vertex, THREE.ShaderChunk.default_vertex, THREE.ShaderChunk.logdepthbuf_vertex, THREE.ShaderChunk.worldpos_vertex, THREE.ShaderChunk.envmap_vertex, THREE.ShaderChunk.shadowmap_vertex, "}"].join("\n"),
    fragmentShader: ["uniform vec3 diffuse;\nuniform float opacity;", THREE.ShaderChunk.common, THREE.ShaderChunk.color_pars_fragment, THREE.ShaderChunk.map_pars_fragment, THREE.ShaderChunk.alphamap_pars_fragment, THREE.ShaderChunk.lightmap_pars_fragment, THREE.ShaderChunk.envmap_pars_fragment, THREE.ShaderChunk.fog_pars_fragment, THREE.ShaderChunk.shadowmap_pars_fragment, THREE.ShaderChunk.specularmap_pars_fragment, THREE.ShaderChunk.logdepthbuf_pars_fragment, "void main() {\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );", THREE.ShaderChunk.logdepthbuf_fragment, THREE.ShaderChunk.map_fragment, THREE.ShaderChunk.color_fragment, THREE.ShaderChunk.alphamap_fragment, THREE.ShaderChunk.alphatest_fragment, THREE.ShaderChunk.specularmap_fragment, "\toutgoingLight = diffuseColor.rgb;", THREE.ShaderChunk.lightmap_fragment, THREE.ShaderChunk.envmap_fragment, THREE.ShaderChunk.shadowmap_fragment, THREE.ShaderChunk.linear_to_gamma_fragment, THREE.ShaderChunk.fog_fragment, "\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n}"].join("\n")
  },
  lambert: {
    uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.common, THREE.UniformsLib.fog, THREE.UniformsLib.lights, THREE.UniformsLib.shadowmap, {
      emissive: {
        type: "c",
        value: new THREE.Color(0)
      },
      wrapRGB: {
        type: "v3",
        value: new THREE.Vector3(1, 1, 1)
      }
    }]),
    vertexShader: ["#define LAMBERT\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n#endif", THREE.ShaderChunk.common, THREE.ShaderChunk.map_pars_vertex, THREE.ShaderChunk.lightmap_pars_vertex, THREE.ShaderChunk.envmap_pars_vertex, THREE.ShaderChunk.lights_lambert_pars_vertex, THREE.ShaderChunk.color_pars_vertex, THREE.ShaderChunk.morphtarget_pars_vertex, THREE.ShaderChunk.skinning_pars_vertex, THREE.ShaderChunk.shadowmap_pars_vertex, THREE.ShaderChunk.logdepthbuf_pars_vertex, "void main() {", THREE.ShaderChunk.map_vertex, THREE.ShaderChunk.lightmap_vertex, THREE.ShaderChunk.color_vertex, THREE.ShaderChunk.morphnormal_vertex, THREE.ShaderChunk.skinbase_vertex, THREE.ShaderChunk.skinnormal_vertex, THREE.ShaderChunk.defaultnormal_vertex, THREE.ShaderChunk.morphtarget_vertex, THREE.ShaderChunk.skinning_vertex, THREE.ShaderChunk.default_vertex, THREE.ShaderChunk.logdepthbuf_vertex, THREE.ShaderChunk.worldpos_vertex, THREE.ShaderChunk.envmap_vertex, THREE.ShaderChunk.lights_lambert_vertex, THREE.ShaderChunk.shadowmap_vertex, "}"].join("\n"),
    fragmentShader: ["uniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n#endif", THREE.ShaderChunk.common, THREE.ShaderChunk.color_pars_fragment, THREE.ShaderChunk.map_pars_fragment, THREE.ShaderChunk.alphamap_pars_fragment, THREE.ShaderChunk.lightmap_pars_fragment, THREE.ShaderChunk.envmap_pars_fragment, THREE.ShaderChunk.fog_pars_fragment, THREE.ShaderChunk.shadowmap_pars_fragment, THREE.ShaderChunk.specularmap_pars_fragment, THREE.ShaderChunk.logdepthbuf_pars_fragment, "void main() {\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );", THREE.ShaderChunk.logdepthbuf_fragment, THREE.ShaderChunk.map_fragment, THREE.ShaderChunk.color_fragment, THREE.ShaderChunk.alphamap_fragment, THREE.ShaderChunk.alphatest_fragment, THREE.ShaderChunk.specularmap_fragment, "\t#ifdef DOUBLE_SIDED\n\t\tif ( gl_FrontFacing )\n\t\t\toutgoingLight += diffuseColor.rgb * vLightFront + emissive;\n\t\telse\n\t\t\toutgoingLight += diffuseColor.rgb * vLightBack + emissive;\n\t#else\n\t\toutgoingLight += diffuseColor.rgb * vLightFront + emissive;\n\t#endif", THREE.ShaderChunk.lightmap_fragment, THREE.ShaderChunk.envmap_fragment, THREE.ShaderChunk.shadowmap_fragment, THREE.ShaderChunk.linear_to_gamma_fragment, THREE.ShaderChunk.fog_fragment, "\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n}"].join("\n")
  },
  phong: {
    uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.common, THREE.UniformsLib.bump, THREE.UniformsLib.normalmap, THREE.UniformsLib.fog, THREE.UniformsLib.lights, THREE.UniformsLib.shadowmap, {
      emissive: {
        type: "c",
        value: new THREE.Color(0)
      },
      specular: {
        type: "c",
        value: new THREE.Color(1118481)
      },
      shininess: {
        type: "f",
        value: 30
      },
      wrapRGB: {
        type: "v3",
        value: new THREE.Vector3(1, 1, 1)
      }
    }]),
    vertexShader: ["#define PHONG\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif", THREE.ShaderChunk.common, THREE.ShaderChunk.map_pars_vertex, THREE.ShaderChunk.lightmap_pars_vertex, THREE.ShaderChunk.envmap_pars_vertex, THREE.ShaderChunk.lights_phong_pars_vertex, THREE.ShaderChunk.color_pars_vertex, THREE.ShaderChunk.morphtarget_pars_vertex, THREE.ShaderChunk.skinning_pars_vertex, THREE.ShaderChunk.shadowmap_pars_vertex, THREE.ShaderChunk.logdepthbuf_pars_vertex, "void main() {", THREE.ShaderChunk.map_vertex, THREE.ShaderChunk.lightmap_vertex, THREE.ShaderChunk.color_vertex, THREE.ShaderChunk.morphnormal_vertex, THREE.ShaderChunk.skinbase_vertex, THREE.ShaderChunk.skinnormal_vertex, THREE.ShaderChunk.defaultnormal_vertex, "#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif", THREE.ShaderChunk.morphtarget_vertex, THREE.ShaderChunk.skinning_vertex, THREE.ShaderChunk.default_vertex, THREE.ShaderChunk.logdepthbuf_vertex, "\tvViewPosition = -mvPosition.xyz;", THREE.ShaderChunk.worldpos_vertex, THREE.ShaderChunk.envmap_vertex, THREE.ShaderChunk.lights_phong_vertex, THREE.ShaderChunk.shadowmap_vertex, "}"].join("\n"),
    fragmentShader: ["#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;", THREE.ShaderChunk.common, THREE.ShaderChunk.color_pars_fragment, THREE.ShaderChunk.map_pars_fragment, THREE.ShaderChunk.alphamap_pars_fragment, THREE.ShaderChunk.lightmap_pars_fragment, THREE.ShaderChunk.envmap_pars_fragment, THREE.ShaderChunk.fog_pars_fragment, THREE.ShaderChunk.lights_phong_pars_fragment, THREE.ShaderChunk.shadowmap_pars_fragment, THREE.ShaderChunk.bumpmap_pars_fragment, THREE.ShaderChunk.normalmap_pars_fragment, THREE.ShaderChunk.specularmap_pars_fragment, THREE.ShaderChunk.logdepthbuf_pars_fragment, "void main() {\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );", THREE.ShaderChunk.logdepthbuf_fragment, THREE.ShaderChunk.map_fragment, THREE.ShaderChunk.color_fragment, THREE.ShaderChunk.alphamap_fragment, THREE.ShaderChunk.alphatest_fragment, THREE.ShaderChunk.specularmap_fragment, THREE.ShaderChunk.lights_phong_fragment, THREE.ShaderChunk.lightmap_fragment, THREE.ShaderChunk.envmap_fragment, THREE.ShaderChunk.shadowmap_fragment, THREE.ShaderChunk.linear_to_gamma_fragment, THREE.ShaderChunk.fog_fragment, "\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n}"].join("\n")
  },
  particle_basic: {
    uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.particle, THREE.UniformsLib.shadowmap]),
    vertexShader: ["uniform float size;\nuniform float scale;", THREE.ShaderChunk.common, THREE.ShaderChunk.color_pars_vertex, THREE.ShaderChunk.shadowmap_pars_vertex, THREE.ShaderChunk.logdepthbuf_pars_vertex, "void main() {", THREE.ShaderChunk.color_vertex, "\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n\t#ifdef USE_SIZEATTENUATION\n\t\tgl_PointSize = size * ( scale / length( mvPosition.xyz ) );\n\t#else\n\t\tgl_PointSize = size;\n\t#endif\n\tgl_Position = projectionMatrix * mvPosition;", THREE.ShaderChunk.logdepthbuf_vertex, THREE.ShaderChunk.worldpos_vertex, THREE.ShaderChunk.shadowmap_vertex, "}"].join("\n"),
    fragmentShader: ["uniform vec3 psColor;\nuniform float opacity;", THREE.ShaderChunk.common, THREE.ShaderChunk.color_pars_fragment, THREE.ShaderChunk.map_particle_pars_fragment, THREE.ShaderChunk.fog_pars_fragment, THREE.ShaderChunk.shadowmap_pars_fragment, THREE.ShaderChunk.logdepthbuf_pars_fragment, "void main() {\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( psColor, opacity );", THREE.ShaderChunk.logdepthbuf_fragment, THREE.ShaderChunk.map_particle_fragment, THREE.ShaderChunk.color_fragment, THREE.ShaderChunk.alphatest_fragment, "\toutgoingLight = diffuseColor.rgb;", THREE.ShaderChunk.shadowmap_fragment, THREE.ShaderChunk.fog_fragment, "\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n}"].join("\n")
  },
  dashed: {
    uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.common, THREE.UniformsLib.fog, {
      scale: {
        type: "f",
        value: 1
      },
      dashSize: {
        type: "f",
        value: 1
      },
      totalSize: {
        type: "f",
        value: 2
      }
    }]),
    vertexShader: ["uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;", THREE.ShaderChunk.common, THREE.ShaderChunk.color_pars_vertex, THREE.ShaderChunk.logdepthbuf_pars_vertex, "void main() {", THREE.ShaderChunk.color_vertex, "\tvLineDistance = scale * lineDistance;\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n\tgl_Position = projectionMatrix * mvPosition;", THREE.ShaderChunk.logdepthbuf_vertex, "}"].join("\n"),
    fragmentShader: ["uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;", THREE.ShaderChunk.common, THREE.ShaderChunk.color_pars_fragment, THREE.ShaderChunk.fog_pars_fragment, THREE.ShaderChunk.logdepthbuf_pars_fragment, "void main() {\n\tif ( mod( vLineDistance, totalSize ) > dashSize ) {\n\t\tdiscard;\n\t}\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );", THREE.ShaderChunk.logdepthbuf_fragment, THREE.ShaderChunk.color_fragment, "\toutgoingLight = diffuseColor.rgb;", THREE.ShaderChunk.fog_fragment, "\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n}"].join("\n")
  },
  depth: {
    uniforms: {
      mNear: {
        type: "f",
        value: 1
      },
      mFar: {
        type: "f",
        value: 2E3
      },
      opacity: {
        type: "f",
        value: 1
      }
    },
    vertexShader: [THREE.ShaderChunk.common, THREE.ShaderChunk.morphtarget_pars_vertex, THREE.ShaderChunk.logdepthbuf_pars_vertex, "void main() {", THREE.ShaderChunk.morphtarget_vertex, THREE.ShaderChunk.default_vertex, THREE.ShaderChunk.logdepthbuf_vertex, "}"].join("\n"),
    fragmentShader: ["uniform float mNear;\nuniform float mFar;\nuniform float opacity;", THREE.ShaderChunk.common, THREE.ShaderChunk.logdepthbuf_pars_fragment, "void main() {", THREE.ShaderChunk.logdepthbuf_fragment, "\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tfloat depth = gl_FragDepthEXT / gl_FragCoord.w;\n\t#else\n\t\tfloat depth = gl_FragCoord.z / gl_FragCoord.w;\n\t#endif\n\tfloat color = 1.0 - smoothstep( mNear, mFar, depth );\n\tgl_FragColor = vec4( vec3( color ), opacity );\n}"].join("\n")
  },
  normal: {
    uniforms: {
      opacity: {
        type: "f",
        value: 1
      }
    },
    vertexShader: ["varying vec3 vNormal;", THREE.ShaderChunk.common, THREE.ShaderChunk.morphtarget_pars_vertex, THREE.ShaderChunk.logdepthbuf_pars_vertex, "void main() {\n\tvNormal = normalize( normalMatrix * normal );", THREE.ShaderChunk.morphtarget_vertex, THREE.ShaderChunk.default_vertex, THREE.ShaderChunk.logdepthbuf_vertex, "}"].join("\n"),
    fragmentShader: ["uniform float opacity;\nvarying vec3 vNormal;", THREE.ShaderChunk.common, THREE.ShaderChunk.logdepthbuf_pars_fragment, "void main() {\n\tgl_FragColor = vec4( 0.5 * normalize( vNormal ) + 0.5, opacity );", THREE.ShaderChunk.logdepthbuf_fragment, "}"].join("\n")
  },
  cube: {
    uniforms: {
      tCube: {
        type: "t",
        value: null
      },
      tFlip: {
        type: "f",
        value: -1
      }
    },
    vertexShader: ["varying vec3 vWorldPosition;", THREE.ShaderChunk.common, THREE.ShaderChunk.logdepthbuf_pars_vertex, "void main() {\n\tvWorldPosition = transformDirection( position, modelMatrix );\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );", THREE.ShaderChunk.logdepthbuf_vertex, "}"].join("\n"),
    fragmentShader: ["uniform samplerCube tCube;\nuniform float tFlip;\nvarying vec3 vWorldPosition;", THREE.ShaderChunk.common, THREE.ShaderChunk.logdepthbuf_pars_fragment, "void main() {\n\tgl_FragColor = textureCube( tCube, vec3( tFlip * vWorldPosition.x, vWorldPosition.yz ) );", THREE.ShaderChunk.logdepthbuf_fragment, "}"].join("\n")
  },
  equirect: {
    uniforms: {
      tEquirect: {
        type: "t",
        value: null
      },
      tFlip: {
        type: "f",
        value: -1
      }
    },
    vertexShader: ["varying vec3 vWorldPosition;", THREE.ShaderChunk.common, THREE.ShaderChunk.logdepthbuf_pars_vertex, "void main() {\n\tvWorldPosition = transformDirection( position, modelMatrix );\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );", THREE.ShaderChunk.logdepthbuf_vertex, "}"].join("\n"),
    fragmentShader: ["uniform sampler2D tEquirect;\nuniform float tFlip;\nvarying vec3 vWorldPosition;", THREE.ShaderChunk.common, THREE.ShaderChunk.logdepthbuf_pars_fragment, "void main() {\nvec3 direction = normalize( vWorldPosition );\nvec2 sampleUV;\nsampleUV.y = saturate( tFlip * direction.y * -0.5 + 0.5 );\nsampleUV.x = atan( direction.z, direction.x ) * RECIPROCAL_PI2 + 0.5;\ngl_FragColor = texture2D( tEquirect, sampleUV );", THREE.ShaderChunk.logdepthbuf_fragment, "}"].join("\n")
  },
  depthRGBA: {
    uniforms: {},
    vertexShader: [THREE.ShaderChunk.common, THREE.ShaderChunk.morphtarget_pars_vertex, THREE.ShaderChunk.skinning_pars_vertex, THREE.ShaderChunk.logdepthbuf_pars_vertex, "void main() {", THREE.ShaderChunk.skinbase_vertex, THREE.ShaderChunk.morphtarget_vertex, THREE.ShaderChunk.skinning_vertex, THREE.ShaderChunk.default_vertex, THREE.ShaderChunk.logdepthbuf_vertex, "}"].join("\n"),
    fragmentShader: [THREE.ShaderChunk.common, THREE.ShaderChunk.logdepthbuf_pars_fragment, "vec4 pack_depth( const in float depth ) {\n\tconst vec4 bit_shift = vec4( 256.0 * 256.0 * 256.0, 256.0 * 256.0, 256.0, 1.0 );\n\tconst vec4 bit_mask = vec4( 0.0, 1.0 / 256.0, 1.0 / 256.0, 1.0 / 256.0 );\n\tvec4 res = mod( depth * bit_shift * vec4( 255 ), vec4( 256 ) ) / vec4( 255 );\n\tres -= res.xxyz * bit_mask;\n\treturn res;\n}\nvoid main() {", THREE.ShaderChunk.logdepthbuf_fragment, "\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tgl_FragData[ 0 ] = pack_depth( gl_FragDepthEXT );\n\t#else\n\t\tgl_FragData[ 0 ] = pack_depth( gl_FragCoord.z );\n\t#endif\n}"].join("\n")
  }
};

THREE.WebGLRenderer = function (a) {
  function b(a) {
    var b = a.geometry;
    a = a.material;
    var c = b.vertices.length;

    if (a.attributes) {
      void 0 === b.__webglCustomAttributesList && (b.__webglCustomAttributesList = []);

      for (var d in a.attributes) {
        var e = a.attributes[d];

        if (!e.__webglInitialized || e.createUniqueBuffers) {
          e.__webglInitialized = !0;
          var f = 1;
          "v2" === e.type ? f = 2 : "v3" === e.type ? f = 3 : "v4" === e.type ? f = 4 : "c" === e.type && (f = 3);
          e.size = f;
          e.array = new Float32Array(c * f);
          e.buffer = m.createBuffer();
          e.buffer.belongsToAttribute = d;
          e.needsUpdate = !0;
        }

        b.__webglCustomAttributesList.push(e);
      }
    }
  }

  function c(a, b) {
    return a.material instanceof THREE.MeshFaceMaterial ? a.material.materials[b.materialIndex] : a.material;
  }

  function d(a, b, c, d) {
    c = c.attributes;
    var e = b.attributes;
    b = b.attributesKeys;

    for (var f = 0, g = b.length; f < g; f++) {
      var h = b[f],
          k = e[h];

      if (0 <= k) {
        var n = c[h];
        void 0 !== n ? (h = n.itemSize, m.bindBuffer(m.ARRAY_BUFFER, n.buffer), W.enableAttribute(k), m.vertexAttribPointer(k, h, m.FLOAT, !1, 0, d * h * 4)) : void 0 !== a.defaultAttributeValues && (2 === a.defaultAttributeValues[h].length ? m.vertexAttrib2fv(k, a.defaultAttributeValues[h]) : 3 === a.defaultAttributeValues[h].length && m.vertexAttrib3fv(k, a.defaultAttributeValues[h]));
      }
    }

    W.disableUnusedAttributes();
  }

  function e(a, b) {
    return a.object.renderOrder !== b.object.renderOrder ? a.object.renderOrder - b.object.renderOrder : a.material.id !== b.material.id ? a.material.id - b.material.id : a.z !== b.z ? a.z - b.z : a.id - b.id;
  }

  function f(a, b) {
    return a.object.renderOrder !== b.object.renderOrder ? a.object.renderOrder - b.object.renderOrder : a.z !== b.z ? b.z - a.z : a.id - b.id;
  }

  function g(a, b) {
    return b[0] - a[0];
  }

  function h(a) {
    if (!1 !== a.visible) {
      if (!(a instanceof THREE.Scene || a instanceof THREE.Group)) {
        void 0 === a.__webglInit && (a.__webglInit = !0, a._modelViewMatrix = new THREE.Matrix4(), a._normalMatrix = new THREE.Matrix3(), a.addEventListener("removed", wb));
        var c = a.geometry;
        if (void 0 !== c && void 0 === c.__webglInit) if (c.__webglInit = !0, c.addEventListener("dispose", jb), c instanceof THREE.BufferGeometry) B.info.memory.geometries++;else if (a instanceof THREE.Mesh) q(a, c);else if (a instanceof THREE.Line) {
          if (void 0 === c.__webglVertexBuffer) {
            c.__webglVertexBuffer = m.createBuffer();
            c.__webglColorBuffer = m.createBuffer();
            c.__webglLineDistanceBuffer = m.createBuffer();
            B.info.memory.geometries++;
            var d = c.vertices.length;
            c.__vertexArray = new Float32Array(3 * d);
            c.__colorArray = new Float32Array(3 * d);
            c.__lineDistanceArray = new Float32Array(1 * d);
            c.__webglLineCount = d;
            b(a);
            c.verticesNeedUpdate = !0;
            c.colorsNeedUpdate = !0;
            c.lineDistancesNeedUpdate = !0;
          }
        } else a instanceof THREE.PointCloud && void 0 === c.__webglVertexBuffer && (c.__webglVertexBuffer = m.createBuffer(), c.__webglColorBuffer = m.createBuffer(), B.info.memory.geometries++, d = c.vertices.length, c.__vertexArray = new Float32Array(3 * d), c.__colorArray = new Float32Array(3 * d), c.__webglParticleCount = d, b(a), c.verticesNeedUpdate = !0, c.colorsNeedUpdate = !0);
        if (void 0 === a.__webglActive) if (a.__webglActive = !0, a instanceof THREE.Mesh) {
          if (c instanceof THREE.BufferGeometry) n(ba, c, a);else {
            if (c instanceof THREE.Geometry) for (var c = Ua[c.id], d = 0, e = c.length; d < e; d++) {
              n(ba, c[d], a);
            }
          }
        } else a instanceof THREE.Line || a instanceof THREE.PointCloud ? n(ba, c, a) : (a instanceof THREE.ImmediateRenderObject || a.immediateRenderCallback) && qa.push({
          id: null,
          object: a,
          opaque: null,
          transparent: null,
          z: 0
        });
        if (a instanceof THREE.Light) ca.push(a);else if (a instanceof THREE.Sprite) Xa.push(a);else if (a instanceof THREE.LensFlare) Ya.push(a);else if ((c = ba[a.id]) && (!1 === a.frustumCulled || !0 === cb.intersectsObject(a))) for (d = 0, e = c.length; d < e; d++) {
          var f = c[d],
              g = f,
              k = g.object,
              l = g.buffer,
              p = k.geometry,
              k = k.material;
          k instanceof THREE.MeshFaceMaterial ? (k = k.materials[p instanceof THREE.BufferGeometry ? 0 : l.materialIndex], g.material = k, k.transparent ? Qa.push(g) : Ka.push(g)) : k && (g.material = k, k.transparent ? Qa.push(g) : Ka.push(g));
          f.render = !0;
          !0 === B.sortObjects && (wa.setFromMatrixPosition(a.matrixWorld), wa.applyProjection(db), f.z = wa.z);
        }
      }

      d = 0;

      for (e = a.children.length; d < e; d++) {
        h(a.children[d]);
      }
    }
  }

  function k(a, b, c, d, e) {
    for (var f, g = 0, h = a.length; g < h; g++) {
      f = a[g];
      var k = f.object,
          m = f.buffer;
      w(k, b);
      if (e) f = e;else {
        f = f.material;
        if (!f) continue;
        u(f);
      }
      B.setMaterialFaces(f);
      m instanceof THREE.BufferGeometry ? B.renderBufferDirect(b, c, d, f, m, k) : B.renderBuffer(b, c, d, f, m, k);
    }
  }

  function l(a, b, c, d, e, f) {
    for (var g, h = 0, k = a.length; h < k; h++) {
      g = a[h];
      var m = g.object;

      if (m.visible) {
        if (f) g = f;else {
          g = g[b];
          if (!g) continue;
          u(g);
        }
        B.renderImmediateObject(c, d, e, g, m);
      }
    }
  }

  function p(a) {
    var b = a.object.material;
    b.transparent ? (a.transparent = b, a.opaque = null) : (a.opaque = b, a.transparent = null);
  }

  function q(a, b) {
    var d = a.material,
        e = !1;

    if (void 0 === Ua[b.id] || !0 === b.groupsNeedUpdate) {
      delete ba[a.id];

      for (var f = Ua, g = b.id, d = d instanceof THREE.MeshFaceMaterial, h = da.get("OES_element_index_uint") ? 4294967296 : 65535, k, e = {}, l = b.morphTargets.length, p = b.morphNormals.length, q, s = {}, t = [], r = 0, w = b.faces.length; r < w; r++) {
        k = b.faces[r];
        var u = d ? k.materialIndex : 0;
        u in e || (e[u] = {
          hash: u,
          counter: 0
        });
        k = e[u].hash + "_" + e[u].counter;
        k in s || (q = {
          id: Qb++,
          faces3: [],
          materialIndex: u,
          vertices: 0,
          numMorphTargets: l,
          numMorphNormals: p
        }, s[k] = q, t.push(q));
        s[k].vertices + 3 > h && (e[u].counter += 1, k = e[u].hash + "_" + e[u].counter, k in s || (q = {
          id: Qb++,
          faces3: [],
          materialIndex: u,
          vertices: 0,
          numMorphTargets: l,
          numMorphNormals: p
        }, s[k] = q, t.push(q)));
        s[k].faces3.push(r);
        s[k].vertices += 3;
      }

      f[g] = t;
      b.groupsNeedUpdate = !1;
    }

    f = Ua[b.id];
    g = 0;

    for (d = f.length; g < d; g++) {
      h = f[g];

      if (void 0 === h.__webglVertexBuffer) {
        e = h;
        e.__webglVertexBuffer = m.createBuffer();
        e.__webglNormalBuffer = m.createBuffer();
        e.__webglTangentBuffer = m.createBuffer();
        e.__webglColorBuffer = m.createBuffer();
        e.__webglUVBuffer = m.createBuffer();
        e.__webglUV2Buffer = m.createBuffer();
        e.__webglSkinIndicesBuffer = m.createBuffer();
        e.__webglSkinWeightsBuffer = m.createBuffer();
        e.__webglFaceBuffer = m.createBuffer();
        e.__webglLineBuffer = m.createBuffer();
        if (p = e.numMorphTargets) for (e.__webglMorphTargetsBuffers = [], l = 0; l < p; l++) {
          e.__webglMorphTargetsBuffers.push(m.createBuffer());
        }
        if (p = e.numMorphNormals) for (e.__webglMorphNormalsBuffers = [], l = 0; l < p; l++) {
          e.__webglMorphNormalsBuffers.push(m.createBuffer());
        }
        B.info.memory.geometries++;
        e = h;
        r = a;
        w = r.geometry;
        p = e.faces3;
        l = 3 * p.length;
        s = 1 * p.length;
        t = 3 * p.length;
        p = c(r, e);
        e.__vertexArray = new Float32Array(3 * l);
        e.__normalArray = new Float32Array(3 * l);
        e.__colorArray = new Float32Array(3 * l);
        e.__uvArray = new Float32Array(2 * l);
        1 < w.faceVertexUvs.length && (e.__uv2Array = new Float32Array(2 * l));
        w.hasTangents && (e.__tangentArray = new Float32Array(4 * l));
        r.geometry.skinWeights.length && r.geometry.skinIndices.length && (e.__skinIndexArray = new Float32Array(4 * l), e.__skinWeightArray = new Float32Array(4 * l));
        r = null !== da.get("OES_element_index_uint") && 21845 < s ? Uint32Array : Uint16Array;
        e.__typeArray = r;
        e.__faceArray = new r(3 * s);
        e.__lineArray = new r(2 * t);
        if (w = e.numMorphTargets) for (e.__morphTargetsArrays = [], r = 0; r < w; r++) {
          e.__morphTargetsArrays.push(new Float32Array(3 * l));
        }
        if (w = e.numMorphNormals) for (e.__morphNormalsArrays = [], r = 0; r < w; r++) {
          e.__morphNormalsArrays.push(new Float32Array(3 * l));
        }
        e.__webglFaceCount = 3 * s;
        e.__webglLineCount = 2 * t;
        if (p.attributes) for (s in void 0 === e.__webglCustomAttributesList && (e.__webglCustomAttributesList = []), s = void 0, p.attributes) {
          var t = p.attributes[s],
              r = {},
              v;

          for (v in t) {
            r[v] = t[v];
          }

          if (!r.__webglInitialized || r.createUniqueBuffers) r.__webglInitialized = !0, w = 1, "v2" === r.type ? w = 2 : "v3" === r.type ? w = 3 : "v4" === r.type ? w = 4 : "c" === r.type && (w = 3), r.size = w, r.array = new Float32Array(l * w), r.buffer = m.createBuffer(), r.buffer.belongsToAttribute = s, t.needsUpdate = !0, r.__original = t;

          e.__webglCustomAttributesList.push(r);
        }
        e.__inittedArrays = !0;
        b.verticesNeedUpdate = !0;
        b.morphTargetsNeedUpdate = !0;
        b.elementsNeedUpdate = !0;
        b.uvsNeedUpdate = !0;
        b.normalsNeedUpdate = !0;
        b.tangentsNeedUpdate = !0;
        e = b.colorsNeedUpdate = !0;
      } else e = !1;

      (e || void 0 === a.__webglActive) && n(ba, h, a);
    }

    a.__webglActive = !0;
  }

  function n(a, b, c) {
    var d = c.id;
    a[d] = a[d] || [];
    a[d].push({
      id: d,
      buffer: b,
      object: c,
      material: null,
      z: 0
    });
  }

  function t(a) {
    var b = a.geometry;
    if (b instanceof THREE.BufferGeometry) for (var d = b.attributes, e = b.attributesKeys, f = 0, g = e.length; f < g; f++) {
      var h = e[f],
          k = d[h],
          n = "index" === h ? m.ELEMENT_ARRAY_BUFFER : m.ARRAY_BUFFER;
      void 0 === k.buffer ? (k.buffer = m.createBuffer(), m.bindBuffer(n, k.buffer), m.bufferData(n, k.array, k instanceof THREE.DynamicBufferAttribute ? m.DYNAMIC_DRAW : m.STATIC_DRAW), k.needsUpdate = !1) : !0 === k.needsUpdate && (m.bindBuffer(n, k.buffer), void 0 === k.updateRange || -1 === k.updateRange.count ? m.bufferSubData(n, 0, k.array) : 0 === k.updateRange.count ? console.error("THREE.WebGLRenderer.updateObject: using updateRange for THREE.DynamicBufferAttribute and marked as needsUpdate but count is 0, ensure you are using set methods or updating manually.") : (m.bufferSubData(n, k.updateRange.offset * k.array.BYTES_PER_ELEMENT, k.array.subarray(k.updateRange.offset, k.updateRange.offset + k.updateRange.count)), k.updateRange.count = 0), k.needsUpdate = !1);
    } else if (a instanceof THREE.Mesh) {
      !0 === b.groupsNeedUpdate && q(a, b);

      for (var l = Ua[b.id], f = 0, p = l.length; f < p; f++) {
        var t = l[f],
            w = c(a, t),
            u = w.attributes && r(w);

        if (b.verticesNeedUpdate || b.morphTargetsNeedUpdate || b.elementsNeedUpdate || b.uvsNeedUpdate || b.normalsNeedUpdate || b.colorsNeedUpdate || b.tangentsNeedUpdate || u) {
          var v = t,
              x = a,
              D = m.DYNAMIC_DRAW,
              A = !b.dynamic,
              E = w;

          if (v.__inittedArrays) {
            var G = !1 === E instanceof THREE.MeshPhongMaterial && E.shading === THREE.FlatShading,
                y = void 0,
                z = void 0,
                F = void 0,
                B = void 0,
                I = void 0,
                H = void 0,
                M = void 0,
                R = void 0,
                P = void 0,
                U = void 0,
                O = void 0,
                J = void 0,
                L = void 0,
                N = void 0,
                Ka = void 0,
                V = void 0,
                W = void 0,
                Qa = void 0,
                Ya = void 0,
                Xa = void 0,
                da = void 0,
                ba = void 0,
                ja = void 0,
                Pa = void 0,
                ka = void 0,
                Q = void 0,
                ha = void 0,
                ia = void 0,
                ob = void 0,
                Y = void 0,
                ub = void 0,
                pa = void 0,
                ab = void 0,
                oa = void 0,
                ca = void 0,
                qa = void 0,
                Ca = void 0,
                ta = void 0,
                na = void 0,
                wa = void 0,
                La = 0,
                Ma = 0,
                kb = 0,
                yb = 0,
                zb = 0,
                Ra = 0,
                Aa = 0,
                eb = 0,
                Ha = 0,
                la = 0,
                ra = 0,
                K = 0,
                za = void 0,
                Sa = v.__vertexArray,
                Ab = v.__uvArray,
                lb = v.__uv2Array,
                Na = v.__normalArray,
                sa = v.__tangentArray,
                Da = v.__colorArray,
                Ea = v.__skinIndexArray,
                Fa = v.__skinWeightArray,
                Gb = v.__morphTargetsArrays,
                Bb = v.__morphNormalsArrays,
                mb = v.__webglCustomAttributesList,
                C = void 0,
                Va = v.__faceArray,
                Ta = v.__lineArray,
                ea = x.geometry,
                fb = ea.elementsNeedUpdate,
                vb = ea.uvsNeedUpdate,
                Mb = ea.normalsNeedUpdate,
                Ob = ea.tangentsNeedUpdate,
                ib = ea.colorsNeedUpdate,
                sb = ea.morphTargetsNeedUpdate,
                Cb = ea.vertices,
                $ = v.faces3,
                xa = ea.faces,
                Hb = ea.faceVertexUvs[0],
                Oa = ea.faceVertexUvs[1],
                $a = ea.skinIndices,
                Ga = ea.skinWeights,
                nb = ea.morphTargets,
                bb = ea.morphNormals;

            if (ea.verticesNeedUpdate) {
              y = 0;

              for (z = $.length; y < z; y++) {
                B = xa[$[y]], J = Cb[B.a], L = Cb[B.b], N = Cb[B.c], Sa[Ma] = J.x, Sa[Ma + 1] = J.y, Sa[Ma + 2] = J.z, Sa[Ma + 3] = L.x, Sa[Ma + 4] = L.y, Sa[Ma + 5] = L.z, Sa[Ma + 6] = N.x, Sa[Ma + 7] = N.y, Sa[Ma + 8] = N.z, Ma += 9;
              }

              m.bindBuffer(m.ARRAY_BUFFER, v.__webglVertexBuffer);
              m.bufferData(m.ARRAY_BUFFER, Sa, D);
            }

            if (sb) for (ca = 0, qa = nb.length; ca < qa; ca++) {
              y = ra = 0;

              for (z = $.length; y < z; y++) {
                na = $[y], B = xa[na], J = nb[ca].vertices[B.a], L = nb[ca].vertices[B.b], N = nb[ca].vertices[B.c], Ca = Gb[ca], Ca[ra] = J.x, Ca[ra + 1] = J.y, Ca[ra + 2] = J.z, Ca[ra + 3] = L.x, Ca[ra + 4] = L.y, Ca[ra + 5] = L.z, Ca[ra + 6] = N.x, Ca[ra + 7] = N.y, Ca[ra + 8] = N.z, E.morphNormals && (G ? Xa = Ya = Qa = bb[ca].faceNormals[na] : (wa = bb[ca].vertexNormals[na], Qa = wa.a, Ya = wa.b, Xa = wa.c), ta = Bb[ca], ta[ra] = Qa.x, ta[ra + 1] = Qa.y, ta[ra + 2] = Qa.z, ta[ra + 3] = Ya.x, ta[ra + 4] = Ya.y, ta[ra + 5] = Ya.z, ta[ra + 6] = Xa.x, ta[ra + 7] = Xa.y, ta[ra + 8] = Xa.z), ra += 9;
              }

              m.bindBuffer(m.ARRAY_BUFFER, v.__webglMorphTargetsBuffers[ca]);
              m.bufferData(m.ARRAY_BUFFER, Gb[ca], D);
              E.morphNormals && (m.bindBuffer(m.ARRAY_BUFFER, v.__webglMorphNormalsBuffers[ca]), m.bufferData(m.ARRAY_BUFFER, Bb[ca], D));
            }

            if (Ga.length) {
              y = 0;

              for (z = $.length; y < z; y++) {
                B = xa[$[y]], Pa = Ga[B.a], ka = Ga[B.b], Q = Ga[B.c], Fa[la] = Pa.x, Fa[la + 1] = Pa.y, Fa[la + 2] = Pa.z, Fa[la + 3] = Pa.w, Fa[la + 4] = ka.x, Fa[la + 5] = ka.y, Fa[la + 6] = ka.z, Fa[la + 7] = ka.w, Fa[la + 8] = Q.x, Fa[la + 9] = Q.y, Fa[la + 10] = Q.z, Fa[la + 11] = Q.w, ha = $a[B.a], ia = $a[B.b], ob = $a[B.c], Ea[la] = ha.x, Ea[la + 1] = ha.y, Ea[la + 2] = ha.z, Ea[la + 3] = ha.w, Ea[la + 4] = ia.x, Ea[la + 5] = ia.y, Ea[la + 6] = ia.z, Ea[la + 7] = ia.w, Ea[la + 8] = ob.x, Ea[la + 9] = ob.y, Ea[la + 10] = ob.z, Ea[la + 11] = ob.w, la += 12;
              }

              0 < la && (m.bindBuffer(m.ARRAY_BUFFER, v.__webglSkinIndicesBuffer), m.bufferData(m.ARRAY_BUFFER, Ea, D), m.bindBuffer(m.ARRAY_BUFFER, v.__webglSkinWeightsBuffer), m.bufferData(m.ARRAY_BUFFER, Fa, D));
            }

            if (ib) {
              y = 0;

              for (z = $.length; y < z; y++) {
                B = xa[$[y]], M = B.vertexColors, R = B.color, 3 === M.length && E.vertexColors === THREE.VertexColors ? (da = M[0], ba = M[1], ja = M[2]) : ja = ba = da = R, Da[Ha] = da.r, Da[Ha + 1] = da.g, Da[Ha + 2] = da.b, Da[Ha + 3] = ba.r, Da[Ha + 4] = ba.g, Da[Ha + 5] = ba.b, Da[Ha + 6] = ja.r, Da[Ha + 7] = ja.g, Da[Ha + 8] = ja.b, Ha += 9;
              }

              0 < Ha && (m.bindBuffer(m.ARRAY_BUFFER, v.__webglColorBuffer), m.bufferData(m.ARRAY_BUFFER, Da, D));
            }

            if (Ob && ea.hasTangents) {
              y = 0;

              for (z = $.length; y < z; y++) {
                B = xa[$[y]], P = B.vertexTangents, Ka = P[0], V = P[1], W = P[2], sa[Aa] = Ka.x, sa[Aa + 1] = Ka.y, sa[Aa + 2] = Ka.z, sa[Aa + 3] = Ka.w, sa[Aa + 4] = V.x, sa[Aa + 5] = V.y, sa[Aa + 6] = V.z, sa[Aa + 7] = V.w, sa[Aa + 8] = W.x, sa[Aa + 9] = W.y, sa[Aa + 10] = W.z, sa[Aa + 11] = W.w, Aa += 12;
              }

              m.bindBuffer(m.ARRAY_BUFFER, v.__webglTangentBuffer);
              m.bufferData(m.ARRAY_BUFFER, sa, D);
            }

            if (Mb) {
              y = 0;

              for (z = $.length; y < z; y++) {
                if (B = xa[$[y]], I = B.vertexNormals, H = B.normal, 3 === I.length && !1 === G) for (Y = 0; 3 > Y; Y++) {
                  pa = I[Y], Na[Ra] = pa.x, Na[Ra + 1] = pa.y, Na[Ra + 2] = pa.z, Ra += 3;
                } else for (Y = 0; 3 > Y; Y++) {
                  Na[Ra] = H.x, Na[Ra + 1] = H.y, Na[Ra + 2] = H.z, Ra += 3;
                }
              }

              m.bindBuffer(m.ARRAY_BUFFER, v.__webglNormalBuffer);
              m.bufferData(m.ARRAY_BUFFER, Na, D);
            }

            if (vb && Hb) {
              y = 0;

              for (z = $.length; y < z; y++) {
                if (F = $[y], U = Hb[F], void 0 !== U) for (Y = 0; 3 > Y; Y++) {
                  ab = U[Y], Ab[kb] = ab.x, Ab[kb + 1] = ab.y, kb += 2;
                }
              }

              0 < kb && (m.bindBuffer(m.ARRAY_BUFFER, v.__webglUVBuffer), m.bufferData(m.ARRAY_BUFFER, Ab, D));
            }

            if (vb && Oa) {
              y = 0;

              for (z = $.length; y < z; y++) {
                if (F = $[y], O = Oa[F], void 0 !== O) for (Y = 0; 3 > Y; Y++) {
                  oa = O[Y], lb[yb] = oa.x, lb[yb + 1] = oa.y, yb += 2;
                }
              }

              0 < yb && (m.bindBuffer(m.ARRAY_BUFFER, v.__webglUV2Buffer), m.bufferData(m.ARRAY_BUFFER, lb, D));
            }

            if (fb) {
              y = 0;

              for (z = $.length; y < z; y++) {
                Va[zb] = La, Va[zb + 1] = La + 1, Va[zb + 2] = La + 2, zb += 3, Ta[eb] = La, Ta[eb + 1] = La + 1, Ta[eb + 2] = La, Ta[eb + 3] = La + 2, Ta[eb + 4] = La + 1, Ta[eb + 5] = La + 2, eb += 6, La += 3;
              }

              m.bindBuffer(m.ELEMENT_ARRAY_BUFFER, v.__webglFaceBuffer);
              m.bufferData(m.ELEMENT_ARRAY_BUFFER, Va, D);
              m.bindBuffer(m.ELEMENT_ARRAY_BUFFER, v.__webglLineBuffer);
              m.bufferData(m.ELEMENT_ARRAY_BUFFER, Ta, D);
            }

            if (mb) for (Y = 0, ub = mb.length; Y < ub; Y++) {
              if (C = mb[Y], C.__original.needsUpdate) {
                K = 0;
                if (1 === C.size) {
                  if (void 0 === C.boundTo || "vertices" === C.boundTo) for (y = 0, z = $.length; y < z; y++) {
                    B = xa[$[y]], C.array[K] = C.value[B.a], C.array[K + 1] = C.value[B.b], C.array[K + 2] = C.value[B.c], K += 3;
                  } else {
                    if ("faces" === C.boundTo) for (y = 0, z = $.length; y < z; y++) {
                      za = C.value[$[y]], C.array[K] = za, C.array[K + 1] = za, C.array[K + 2] = za, K += 3;
                    }
                  }
                } else if (2 === C.size) {
                  if (void 0 === C.boundTo || "vertices" === C.boundTo) for (y = 0, z = $.length; y < z; y++) {
                    B = xa[$[y]], J = C.value[B.a], L = C.value[B.b], N = C.value[B.c], C.array[K] = J.x, C.array[K + 1] = J.y, C.array[K + 2] = L.x, C.array[K + 3] = L.y, C.array[K + 4] = N.x, C.array[K + 5] = N.y, K += 6;
                  } else {
                    if ("faces" === C.boundTo) for (y = 0, z = $.length; y < z; y++) {
                      N = L = J = za = C.value[$[y]], C.array[K] = J.x, C.array[K + 1] = J.y, C.array[K + 2] = L.x, C.array[K + 3] = L.y, C.array[K + 4] = N.x, C.array[K + 5] = N.y, K += 6;
                    }
                  }
                } else if (3 === C.size) {
                  var T;
                  T = "c" === C.type ? ["r", "g", "b"] : ["x", "y", "z"];
                  if (void 0 === C.boundTo || "vertices" === C.boundTo) for (y = 0, z = $.length; y < z; y++) {
                    B = xa[$[y]], J = C.value[B.a], L = C.value[B.b], N = C.value[B.c], C.array[K] = J[T[0]], C.array[K + 1] = J[T[1]], C.array[K + 2] = J[T[2]], C.array[K + 3] = L[T[0]], C.array[K + 4] = L[T[1]], C.array[K + 5] = L[T[2]], C.array[K + 6] = N[T[0]], C.array[K + 7] = N[T[1]], C.array[K + 8] = N[T[2]], K += 9;
                  } else if ("faces" === C.boundTo) for (y = 0, z = $.length; y < z; y++) {
                    N = L = J = za = C.value[$[y]], C.array[K] = J[T[0]], C.array[K + 1] = J[T[1]], C.array[K + 2] = J[T[2]], C.array[K + 3] = L[T[0]], C.array[K + 4] = L[T[1]], C.array[K + 5] = L[T[2]], C.array[K + 6] = N[T[0]], C.array[K + 7] = N[T[1]], C.array[K + 8] = N[T[2]], K += 9;
                  } else if ("faceVertices" === C.boundTo) for (y = 0, z = $.length; y < z; y++) {
                    za = C.value[$[y]], J = za[0], L = za[1], N = za[2], C.array[K] = J[T[0]], C.array[K + 1] = J[T[1]], C.array[K + 2] = J[T[2]], C.array[K + 3] = L[T[0]], C.array[K + 4] = L[T[1]], C.array[K + 5] = L[T[2]], C.array[K + 6] = N[T[0]], C.array[K + 7] = N[T[1]], C.array[K + 8] = N[T[2]], K += 9;
                  }
                } else if (4 === C.size) if (void 0 === C.boundTo || "vertices" === C.boundTo) for (y = 0, z = $.length; y < z; y++) {
                  B = xa[$[y]], J = C.value[B.a], L = C.value[B.b], N = C.value[B.c], C.array[K] = J.x, C.array[K + 1] = J.y, C.array[K + 2] = J.z, C.array[K + 3] = J.w, C.array[K + 4] = L.x, C.array[K + 5] = L.y, C.array[K + 6] = L.z, C.array[K + 7] = L.w, C.array[K + 8] = N.x, C.array[K + 9] = N.y, C.array[K + 10] = N.z, C.array[K + 11] = N.w, K += 12;
                } else if ("faces" === C.boundTo) for (y = 0, z = $.length; y < z; y++) {
                  N = L = J = za = C.value[$[y]], C.array[K] = J.x, C.array[K + 1] = J.y, C.array[K + 2] = J.z, C.array[K + 3] = J.w, C.array[K + 4] = L.x, C.array[K + 5] = L.y, C.array[K + 6] = L.z, C.array[K + 7] = L.w, C.array[K + 8] = N.x, C.array[K + 9] = N.y, C.array[K + 10] = N.z, C.array[K + 11] = N.w, K += 12;
                } else if ("faceVertices" === C.boundTo) for (y = 0, z = $.length; y < z; y++) {
                  za = C.value[$[y]], J = za[0], L = za[1], N = za[2], C.array[K] = J.x, C.array[K + 1] = J.y, C.array[K + 2] = J.z, C.array[K + 3] = J.w, C.array[K + 4] = L.x, C.array[K + 5] = L.y, C.array[K + 6] = L.z, C.array[K + 7] = L.w, C.array[K + 8] = N.x, C.array[K + 9] = N.y, C.array[K + 10] = N.z, C.array[K + 11] = N.w, K += 12;
                }
                m.bindBuffer(m.ARRAY_BUFFER, C.buffer);
                m.bufferData(m.ARRAY_BUFFER, C.array, D);
              }
            }
            A && (delete v.__inittedArrays, delete v.__colorArray, delete v.__normalArray, delete v.__tangentArray, delete v.__uvArray, delete v.__uv2Array, delete v.__faceArray, delete v.__vertexArray, delete v.__lineArray, delete v.__skinIndexArray, delete v.__skinWeightArray);
          }
        }
      }

      b.verticesNeedUpdate = !1;
      b.morphTargetsNeedUpdate = !1;
      b.elementsNeedUpdate = !1;
      b.uvsNeedUpdate = !1;
      b.normalsNeedUpdate = !1;
      b.colorsNeedUpdate = !1;
      b.tangentsNeedUpdate = !1;
      w.attributes && s(w);
    } else if (a instanceof THREE.Line) {
      w = c(a, b);
      u = w.attributes && r(w);

      if (b.verticesNeedUpdate || b.colorsNeedUpdate || b.lineDistancesNeedUpdate || u) {
        var Db = m.DYNAMIC_DRAW,
            S,
            aa,
            Z,
            Ba,
            X,
            Eb,
            Rb = b.vertices,
            Ib = b.colors,
            gb = b.lineDistances,
            ya = Rb.length,
            pb = Ib.length,
            qb = gb.length,
            Wa = b.__vertexArray,
            tb = b.__colorArray,
            hb = b.__lineDistanceArray,
            $b = b.colorsNeedUpdate,
            Fb = b.lineDistancesNeedUpdate,
            Sb = b.__webglCustomAttributesList,
            Jb,
            cb,
            ua,
            Kb,
            Ia,
            fa;

        if (b.verticesNeedUpdate) {
          for (S = 0; S < ya; S++) {
            Ba = Rb[S], X = 3 * S, Wa[X] = Ba.x, Wa[X + 1] = Ba.y, Wa[X + 2] = Ba.z;
          }

          m.bindBuffer(m.ARRAY_BUFFER, b.__webglVertexBuffer);
          m.bufferData(m.ARRAY_BUFFER, Wa, Db);
        }

        if ($b) {
          for (aa = 0; aa < pb; aa++) {
            Eb = Ib[aa], X = 3 * aa, tb[X] = Eb.r, tb[X + 1] = Eb.g, tb[X + 2] = Eb.b;
          }

          m.bindBuffer(m.ARRAY_BUFFER, b.__webglColorBuffer);
          m.bufferData(m.ARRAY_BUFFER, tb, Db);
        }

        if (Fb) {
          for (Z = 0; Z < qb; Z++) {
            hb[Z] = gb[Z];
          }

          m.bindBuffer(m.ARRAY_BUFFER, b.__webglLineDistanceBuffer);
          m.bufferData(m.ARRAY_BUFFER, hb, Db);
        }

        if (Sb) for (Jb = 0, cb = Sb.length; Jb < cb; Jb++) {
          if (fa = Sb[Jb], fa.needsUpdate && (void 0 === fa.boundTo || "vertices" === fa.boundTo)) {
            X = 0;
            Kb = fa.value.length;
            if (1 === fa.size) for (ua = 0; ua < Kb; ua++) {
              fa.array[ua] = fa.value[ua];
            } else if (2 === fa.size) for (ua = 0; ua < Kb; ua++) {
              Ia = fa.value[ua], fa.array[X] = Ia.x, fa.array[X + 1] = Ia.y, X += 2;
            } else if (3 === fa.size) {
              if ("c" === fa.type) for (ua = 0; ua < Kb; ua++) {
                Ia = fa.value[ua], fa.array[X] = Ia.r, fa.array[X + 1] = Ia.g, fa.array[X + 2] = Ia.b, X += 3;
              } else for (ua = 0; ua < Kb; ua++) {
                Ia = fa.value[ua], fa.array[X] = Ia.x, fa.array[X + 1] = Ia.y, fa.array[X + 2] = Ia.z, X += 3;
              }
            } else if (4 === fa.size) for (ua = 0; ua < Kb; ua++) {
              Ia = fa.value[ua], fa.array[X] = Ia.x, fa.array[X + 1] = Ia.y, fa.array[X + 2] = Ia.z, fa.array[X + 3] = Ia.w, X += 4;
            }
            m.bindBuffer(m.ARRAY_BUFFER, fa.buffer);
            m.bufferData(m.ARRAY_BUFFER, fa.array, Db);
            fa.needsUpdate = !1;
          }
        }
      }

      b.verticesNeedUpdate = !1;
      b.colorsNeedUpdate = !1;
      b.lineDistancesNeedUpdate = !1;
      w.attributes && s(w);
    } else if (a instanceof THREE.PointCloud) {
      w = c(a, b);
      u = w.attributes && r(w);

      if (b.verticesNeedUpdate || b.colorsNeedUpdate || u) {
        var db = m.DYNAMIC_DRAW,
            Tb,
            Ub,
            ac,
            ma,
            bc,
            Nb = b.vertices,
            Vb = Nb.length,
            Pb = b.colors,
            rb = Pb.length,
            cc = b.__vertexArray,
            dc = b.__colorArray,
            wb = b.colorsNeedUpdate,
            gc = b.__webglCustomAttributesList,
            ec,
            jb,
            va,
            Lb,
            Ja,
            ga;

        if (b.verticesNeedUpdate) {
          for (Tb = 0; Tb < Vb; Tb++) {
            ac = Nb[Tb], ma = 3 * Tb, cc[ma] = ac.x, cc[ma + 1] = ac.y, cc[ma + 2] = ac.z;
          }

          m.bindBuffer(m.ARRAY_BUFFER, b.__webglVertexBuffer);
          m.bufferData(m.ARRAY_BUFFER, cc, db);
        }

        if (wb) {
          for (Ub = 0; Ub < rb; Ub++) {
            bc = Pb[Ub], ma = 3 * Ub, dc[ma] = bc.r, dc[ma + 1] = bc.g, dc[ma + 2] = bc.b;
          }

          m.bindBuffer(m.ARRAY_BUFFER, b.__webglColorBuffer);
          m.bufferData(m.ARRAY_BUFFER, dc, db);
        }

        if (gc) for (ec = 0, jb = gc.length; ec < jb; ec++) {
          ga = gc[ec];
          if (ga.needsUpdate && (void 0 === ga.boundTo || "vertices" === ga.boundTo)) if (Lb = ga.value.length, ma = 0, 1 === ga.size) for (va = 0; va < Lb; va++) {
            ga.array[va] = ga.value[va];
          } else if (2 === ga.size) for (va = 0; va < Lb; va++) {
            Ja = ga.value[va], ga.array[ma] = Ja.x, ga.array[ma + 1] = Ja.y, ma += 2;
          } else if (3 === ga.size) {
            if ("c" === ga.type) for (va = 0; va < Lb; va++) {
              Ja = ga.value[va], ga.array[ma] = Ja.r, ga.array[ma + 1] = Ja.g, ga.array[ma + 2] = Ja.b, ma += 3;
            } else for (va = 0; va < Lb; va++) {
              Ja = ga.value[va], ga.array[ma] = Ja.x, ga.array[ma + 1] = Ja.y, ga.array[ma + 2] = Ja.z, ma += 3;
            }
          } else if (4 === ga.size) for (va = 0; va < Lb; va++) {
            Ja = ga.value[va], ga.array[ma] = Ja.x, ga.array[ma + 1] = Ja.y, ga.array[ma + 2] = Ja.z, ga.array[ma + 3] = Ja.w, ma += 4;
          }
          m.bindBuffer(m.ARRAY_BUFFER, ga.buffer);
          m.bufferData(m.ARRAY_BUFFER, ga.array, db);
          ga.needsUpdate = !1;
        }
      }

      b.verticesNeedUpdate = !1;
      b.colorsNeedUpdate = !1;
      w.attributes && s(w);
    }
  }

  function r(a) {
    for (var b in a.attributes) {
      if (a.attributes[b].needsUpdate) return !0;
    }

    return !1;
  }

  function s(a) {
    for (var b in a.attributes) {
      a.attributes[b].needsUpdate = !1;
    }
  }

  function u(a) {
    !0 === a.transparent ? W.setBlending(a.blending, a.blendEquation, a.blendSrc, a.blendDst, a.blendEquationAlpha, a.blendSrcAlpha, a.blendDstAlpha) : W.setBlending(THREE.NoBlending);
    W.setDepthTest(a.depthTest);
    W.setDepthWrite(a.depthWrite);
    W.setColorWrite(a.colorWrite);
    W.setPolygonOffset(a.polygonOffset, a.polygonOffsetFactor, a.polygonOffsetUnits);
  }

  function v(a, b, c, d, e) {
    var f, g, h, k;
    Mb = 0;

    if (d.needsUpdate) {
      d.program && hc(d);
      d.addEventListener("dispose", ic);
      var n = pc[d.type];

      if (n) {
        var l = THREE.ShaderLib[n];
        d.__webglShader = {
          uniforms: THREE.UniformsUtils.clone(l.uniforms),
          vertexShader: l.vertexShader,
          fragmentShader: l.fragmentShader
        };
      } else d.__webglShader = {
        uniforms: d.uniforms,
        vertexShader: d.vertexShader,
        fragmentShader: d.fragmentShader
      };

      for (var p = 0, q = 0, r = 0, s = 0, t = 0, w = b.length; t < w; t++) {
        var v = b[t];
        v.onlyShadow || !1 === v.visible || (v instanceof THREE.DirectionalLight && p++, v instanceof THREE.PointLight && q++, v instanceof THREE.SpotLight && r++, v instanceof THREE.HemisphereLight && s++);
      }

      f = p;
      g = q;
      h = r;
      k = s;

      for (var u, z = 0, G = 0, F = b.length; G < F; G++) {
        var J = b[G];
        J.castShadow && (J instanceof THREE.SpotLight && z++, J instanceof THREE.DirectionalLight && !J.shadowCascade && z++);
      }

      u = z;
      var H;
      if (Nb && e && e.skeleton && e.skeleton.useVertexTexture) H = 1024;else {
        var N = m.getParameter(m.MAX_VERTEX_UNIFORM_VECTORS),
            M = Math.floor((N - 20) / 4);
        void 0 !== e && e instanceof THREE.SkinnedMesh && (M = Math.min(e.skeleton.bones.length, M), M < e.skeleton.bones.length && THREE.warn("WebGLRenderer: too many bones - " + e.skeleton.bones.length + ", this GPU supports just " + M + " (try OpenGL instead of ANGLE)"));
        H = M;
      }
      var P = {
        precision: L,
        supportsVertexTextures: Vb,
        map: !!d.map,
        envMap: !!d.envMap,
        envMapMode: d.envMap && d.envMap.mapping,
        lightMap: !!d.lightMap,
        bumpMap: !!d.bumpMap,
        normalMap: !!d.normalMap,
        specularMap: !!d.specularMap,
        alphaMap: !!d.alphaMap,
        combine: d.combine,
        vertexColors: d.vertexColors,
        fog: c,
        useFog: d.fog,
        fogExp: c instanceof THREE.FogExp2,
        flatShading: d.shading === THREE.FlatShading,
        sizeAttenuation: d.sizeAttenuation,
        logarithmicDepthBuffer: ja,
        skinning: d.skinning,
        maxBones: H,
        useVertexTexture: Nb && e && e.skeleton && e.skeleton.useVertexTexture,
        morphTargets: d.morphTargets,
        morphNormals: d.morphNormals,
        maxMorphTargets: B.maxMorphTargets,
        maxMorphNormals: B.maxMorphNormals,
        maxDirLights: f,
        maxPointLights: g,
        maxSpotLights: h,
        maxHemiLights: k,
        maxShadows: u,
        shadowMapEnabled: B.shadowMapEnabled && e.receiveShadow && 0 < u,
        shadowMapType: B.shadowMapType,
        shadowMapDebug: B.shadowMapDebug,
        shadowMapCascade: B.shadowMapCascade,
        alphaTest: d.alphaTest,
        metal: d.metal,
        wrapAround: d.wrapAround,
        doubleSided: d.side === THREE.DoubleSide,
        flipSided: d.side === THREE.BackSide
      },
          R = [];
      n ? R.push(n) : (R.push(d.fragmentShader), R.push(d.vertexShader));
      if (void 0 !== d.defines) for (var O in d.defines) {
        R.push(O), R.push(d.defines[O]);
      }

      for (O in P) {
        R.push(O), R.push(P[O]);
      }

      for (var Ka = R.join(), V, W = 0, Qa = Pa.length; W < Qa; W++) {
        var Ya = Pa[W];

        if (Ya.code === Ka) {
          V = Ya;
          V.usedTimes++;
          break;
        }
      }

      void 0 === V && (V = new THREE.WebGLProgram(B, Ka, d, P), Pa.push(V), B.info.memory.programs = Pa.length);
      d.program = V;
      var Xa = V.attributes;

      if (d.morphTargets) {
        d.numSupportedMorphTargets = 0;

        for (var ca, da = "morphTarget", ba = 0; ba < B.maxMorphTargets; ba++) {
          ca = da + ba, 0 <= Xa[ca] && d.numSupportedMorphTargets++;
        }
      }

      if (d.morphNormals) for (d.numSupportedMorphNormals = 0, da = "morphNormal", ba = 0; ba < B.maxMorphNormals; ba++) {
        ca = da + ba, 0 <= Xa[ca] && d.numSupportedMorphNormals++;
      }
      d.uniformsList = [];

      for (var ha in d.__webglShader.uniforms) {
        var ta = d.program.uniforms[ha];
        ta && d.uniformsList.push([d.__webglShader.uniforms[ha], ta]);
      }

      d.needsUpdate = !1;
    }

    d.morphTargets && !e.__webglMorphTargetInfluences && (e.__webglMorphTargetInfluences = new Float32Array(B.maxMorphTargets));
    var ab = !1,
        oa = !1,
        qa = !1,
        Ua = d.program,
        ka = Ua.uniforms,
        Q = d.__webglShader.uniforms;
    Ua.id !== ob && (m.useProgram(Ua.program), ob = Ua.id, qa = oa = ab = !0);
    d.id !== ub && (-1 === ub && (qa = !0), ub = d.id, oa = !0);
    if (ab || a !== vb) m.uniformMatrix4fv(ka.projectionMatrix, !1, a.projectionMatrix.elements), ja && m.uniform1f(ka.logDepthBufFC, 2 / (Math.log(a.far + 1) / Math.LN2)), a !== vb && (vb = a), (d instanceof THREE.ShaderMaterial || d instanceof THREE.MeshPhongMaterial || d.envMap) && null !== ka.cameraPosition && (wa.setFromMatrixPosition(a.matrixWorld), m.uniform3f(ka.cameraPosition, wa.x, wa.y, wa.z)), (d instanceof THREE.MeshPhongMaterial || d instanceof THREE.MeshLambertMaterial || d instanceof THREE.MeshBasicMaterial || d instanceof THREE.ShaderMaterial || d.skinning) && null !== ka.viewMatrix && m.uniformMatrix4fv(ka.viewMatrix, !1, a.matrixWorldInverse.elements);
    if (d.skinning) if (e.bindMatrix && null !== ka.bindMatrix && m.uniformMatrix4fv(ka.bindMatrix, !1, e.bindMatrix.elements), e.bindMatrixInverse && null !== ka.bindMatrixInverse && m.uniformMatrix4fv(ka.bindMatrixInverse, !1, e.bindMatrixInverse.elements), Nb && e.skeleton && e.skeleton.useVertexTexture) {
      if (null !== ka.boneTexture) {
        var db = D();
        m.uniform1i(ka.boneTexture, db);
        B.setTexture(e.skeleton.boneTexture, db);
      }

      null !== ka.boneTextureWidth && m.uniform1i(ka.boneTextureWidth, e.skeleton.boneTextureWidth);
      null !== ka.boneTextureHeight && m.uniform1i(ka.boneTextureHeight, e.skeleton.boneTextureHeight);
    } else e.skeleton && e.skeleton.boneMatrices && null !== ka.boneGlobalMatrices && m.uniformMatrix4fv(ka.boneGlobalMatrices, !1, e.skeleton.boneMatrices);

    if (oa) {
      c && d.fog && (Q.fogColor.value = c.color, c instanceof THREE.Fog ? (Q.fogNear.value = c.near, Q.fogFar.value = c.far) : c instanceof THREE.FogExp2 && (Q.fogDensity.value = c.density));

      if (d instanceof THREE.MeshPhongMaterial || d instanceof THREE.MeshLambertMaterial || d.lights) {
        if (Ob) {
          var qa = !0,
              ia,
              Za,
              Y,
              bb = 0,
              cb = 0,
              ib = 0,
              xb,
              pb,
              qb,
              Ca,
              jb,
              na = jc,
              rb = na.directional.colors,
              La = na.directional.positions,
              Ma = na.point.colors,
              kb = na.point.positions,
              yb = na.point.distances,
              zb = na.point.decays,
              Ra = na.spot.colors,
              Aa = na.spot.positions,
              eb = na.spot.distances,
              Ha = na.spot.directions,
              la = na.spot.anglesCos,
              ra = na.spot.exponents,
              K = na.spot.decays,
              za = na.hemi.skyColors,
              Sa = na.hemi.groundColors,
              Ab = na.hemi.positions,
              lb = 0,
              Na = 0,
              sa = 0,
              Da = 0,
              Ea = 0,
              Fa = 0,
              Gb = 0,
              Bb = 0,
              mb = 0,
              C = 0,
              Va = 0,
              Ta = 0;
          ia = 0;

          for (Za = b.length; ia < Za; ia++) {
            Y = b[ia], Y.onlyShadow || (xb = Y.color, Ca = Y.intensity, jb = Y.distance, Y instanceof THREE.AmbientLight ? Y.visible && (bb += xb.r, cb += xb.g, ib += xb.b) : Y instanceof THREE.DirectionalLight ? (Ea += 1, Y.visible && (pa.setFromMatrixPosition(Y.matrixWorld), wa.setFromMatrixPosition(Y.target.matrixWorld), pa.sub(wa), pa.normalize(), mb = 3 * lb, La[mb] = pa.x, La[mb + 1] = pa.y, La[mb + 2] = pa.z, y(rb, mb, xb, Ca), lb += 1)) : Y instanceof THREE.PointLight ? (Fa += 1, Y.visible && (C = 3 * Na, y(Ma, C, xb, Ca), wa.setFromMatrixPosition(Y.matrixWorld), kb[C] = wa.x, kb[C + 1] = wa.y, kb[C + 2] = wa.z, yb[Na] = jb, zb[Na] = 0 === Y.distance ? 0 : Y.decay, Na += 1)) : Y instanceof THREE.SpotLight ? (Gb += 1, Y.visible && (Va = 3 * sa, y(Ra, Va, xb, Ca), pa.setFromMatrixPosition(Y.matrixWorld), Aa[Va] = pa.x, Aa[Va + 1] = pa.y, Aa[Va + 2] = pa.z, eb[sa] = jb, wa.setFromMatrixPosition(Y.target.matrixWorld), pa.sub(wa), pa.normalize(), Ha[Va] = pa.x, Ha[Va + 1] = pa.y, Ha[Va + 2] = pa.z, la[sa] = Math.cos(Y.angle), ra[sa] = Y.exponent, K[sa] = 0 === Y.distance ? 0 : Y.decay, sa += 1)) : Y instanceof THREE.HemisphereLight && (Bb += 1, Y.visible && (pa.setFromMatrixPosition(Y.matrixWorld), pa.normalize(), Ta = 3 * Da, Ab[Ta] = pa.x, Ab[Ta + 1] = pa.y, Ab[Ta + 2] = pa.z, pb = Y.color, qb = Y.groundColor, y(za, Ta, pb, Ca), y(Sa, Ta, qb, Ca), Da += 1)));
          }

          ia = 3 * lb;

          for (Za = Math.max(rb.length, 3 * Ea); ia < Za; ia++) {
            rb[ia] = 0;
          }

          ia = 3 * Na;

          for (Za = Math.max(Ma.length, 3 * Fa); ia < Za; ia++) {
            Ma[ia] = 0;
          }

          ia = 3 * sa;

          for (Za = Math.max(Ra.length, 3 * Gb); ia < Za; ia++) {
            Ra[ia] = 0;
          }

          ia = 3 * Da;

          for (Za = Math.max(za.length, 3 * Bb); ia < Za; ia++) {
            za[ia] = 0;
          }

          ia = 3 * Da;

          for (Za = Math.max(Sa.length, 3 * Bb); ia < Za; ia++) {
            Sa[ia] = 0;
          }

          na.directional.length = lb;
          na.point.length = Na;
          na.spot.length = sa;
          na.hemi.length = Da;
          na.ambient[0] = bb;
          na.ambient[1] = cb;
          na.ambient[2] = ib;
          Ob = !1;
        }

        if (qa) {
          var ea = jc;
          Q.ambientLightColor.value = ea.ambient;
          Q.directionalLightColor.value = ea.directional.colors;
          Q.directionalLightDirection.value = ea.directional.positions;
          Q.pointLightColor.value = ea.point.colors;
          Q.pointLightPosition.value = ea.point.positions;
          Q.pointLightDistance.value = ea.point.distances;
          Q.pointLightDecay.value = ea.point.decays;
          Q.spotLightColor.value = ea.spot.colors;
          Q.spotLightPosition.value = ea.spot.positions;
          Q.spotLightDistance.value = ea.spot.distances;
          Q.spotLightDirection.value = ea.spot.directions;
          Q.spotLightAngleCos.value = ea.spot.anglesCos;
          Q.spotLightExponent.value = ea.spot.exponents;
          Q.spotLightDecay.value = ea.spot.decays;
          Q.hemisphereLightSkyColor.value = ea.hemi.skyColors;
          Q.hemisphereLightGroundColor.value = ea.hemi.groundColors;
          Q.hemisphereLightDirection.value = ea.hemi.positions;
          x(Q, !0);
        } else x(Q, !1);
      }

      if (d instanceof THREE.MeshBasicMaterial || d instanceof THREE.MeshLambertMaterial || d instanceof THREE.MeshPhongMaterial) {
        Q.opacity.value = d.opacity;
        Q.diffuse.value = d.color;
        Q.map.value = d.map;
        Q.lightMap.value = d.lightMap;
        Q.specularMap.value = d.specularMap;
        Q.alphaMap.value = d.alphaMap;
        d.bumpMap && (Q.bumpMap.value = d.bumpMap, Q.bumpScale.value = d.bumpScale);
        d.normalMap && (Q.normalMap.value = d.normalMap, Q.normalScale.value.copy(d.normalScale));
        var fb;
        d.map ? fb = d.map : d.specularMap ? fb = d.specularMap : d.normalMap ? fb = d.normalMap : d.bumpMap ? fb = d.bumpMap : d.alphaMap && (fb = d.alphaMap);

        if (void 0 !== fb) {
          var wb = fb.offset,
              Qb = fb.repeat;
          Q.offsetRepeat.value.set(wb.x, wb.y, Qb.x, Qb.y);
        }

        Q.envMap.value = d.envMap;
        Q.flipEnvMap.value = d.envMap instanceof THREE.WebGLRenderTargetCube ? 1 : -1;
        Q.reflectivity.value = d.reflectivity;
        Q.refractionRatio.value = d.refractionRatio;
      }

      if (d instanceof THREE.LineBasicMaterial) Q.diffuse.value = d.color, Q.opacity.value = d.opacity;else if (d instanceof THREE.LineDashedMaterial) Q.diffuse.value = d.color, Q.opacity.value = d.opacity, Q.dashSize.value = d.dashSize, Q.totalSize.value = d.dashSize + d.gapSize, Q.scale.value = d.scale;else if (d instanceof THREE.PointCloudMaterial) {
        if (Q.psColor.value = d.color, Q.opacity.value = d.opacity, Q.size.value = d.size, Q.scale.value = U.height / 2, Q.map.value = d.map, null !== d.map) {
          var Wb = d.map.offset,
              Xb = d.map.repeat;
          Q.offsetRepeat.value.set(Wb.x, Wb.y, Xb.x, Xb.y);
        }
      } else d instanceof THREE.MeshPhongMaterial ? (Q.shininess.value = d.shininess, Q.emissive.value = d.emissive, Q.specular.value = d.specular, d.wrapAround && Q.wrapRGB.value.copy(d.wrapRGB)) : d instanceof THREE.MeshLambertMaterial ? (Q.emissive.value = d.emissive, d.wrapAround && Q.wrapRGB.value.copy(d.wrapRGB)) : d instanceof THREE.MeshDepthMaterial ? (Q.mNear.value = a.near, Q.mFar.value = a.far, Q.opacity.value = d.opacity) : d instanceof THREE.MeshNormalMaterial && (Q.opacity.value = d.opacity);
      if (e.receiveShadow && !d._shadowPass && Q.shadowMatrix) for (var sb = 0, Cb = 0, $ = b.length; Cb < $; Cb++) {
        var xa = b[Cb];
        xa.castShadow && (xa instanceof THREE.SpotLight || xa instanceof THREE.DirectionalLight && !xa.shadowCascade) && (Q.shadowMap.value[sb] = xa.shadowMap, Q.shadowMapSize.value[sb] = xa.shadowMapSize, Q.shadowMatrix.value[sb] = xa.shadowMatrix, Q.shadowDarkness.value[sb] = xa.shadowDarkness, Q.shadowBias.value[sb] = xa.shadowBias, sb++);
      }

      for (var Hb = d.uniformsList, Oa, $a, Ga, nb = 0, fc = Hb.length; nb < fc; nb++) {
        var T = Hb[nb][0];

        if (!1 !== T.needsUpdate) {
          var Db = T.type,
              S = T.value,
              aa = Hb[nb][1];

          switch (Db) {
            case "1i":
              m.uniform1i(aa, S);
              break;

            case "1f":
              m.uniform1f(aa, S);
              break;

            case "2f":
              m.uniform2f(aa, S[0], S[1]);
              break;

            case "3f":
              m.uniform3f(aa, S[0], S[1], S[2]);
              break;

            case "4f":
              m.uniform4f(aa, S[0], S[1], S[2], S[3]);
              break;

            case "1iv":
              m.uniform1iv(aa, S);
              break;

            case "3iv":
              m.uniform3iv(aa, S);
              break;

            case "1fv":
              m.uniform1fv(aa, S);
              break;

            case "2fv":
              m.uniform2fv(aa, S);
              break;

            case "3fv":
              m.uniform3fv(aa, S);
              break;

            case "4fv":
              m.uniform4fv(aa, S);
              break;

            case "Matrix3fv":
              m.uniformMatrix3fv(aa, !1, S);
              break;

            case "Matrix4fv":
              m.uniformMatrix4fv(aa, !1, S);
              break;

            case "i":
              m.uniform1i(aa, S);
              break;

            case "f":
              m.uniform1f(aa, S);
              break;

            case "v2":
              m.uniform2f(aa, S.x, S.y);
              break;

            case "v3":
              m.uniform3f(aa, S.x, S.y, S.z);
              break;

            case "v4":
              m.uniform4f(aa, S.x, S.y, S.z, S.w);
              break;

            case "c":
              m.uniform3f(aa, S.r, S.g, S.b);
              break;

            case "iv1":
              m.uniform1iv(aa, S);
              break;

            case "iv":
              m.uniform3iv(aa, S);
              break;

            case "fv1":
              m.uniform1fv(aa, S);
              break;

            case "fv":
              m.uniform3fv(aa, S);
              break;

            case "v2v":
              void 0 === T._array && (T._array = new Float32Array(2 * S.length));

              for (var Z = 0, Ba = S.length; Z < Ba; Z++) {
                Ga = 2 * Z, T._array[Ga] = S[Z].x, T._array[Ga + 1] = S[Z].y;
              }

              m.uniform2fv(aa, T._array);
              break;

            case "v3v":
              void 0 === T._array && (T._array = new Float32Array(3 * S.length));
              Z = 0;

              for (Ba = S.length; Z < Ba; Z++) {
                Ga = 3 * Z, T._array[Ga] = S[Z].x, T._array[Ga + 1] = S[Z].y, T._array[Ga + 2] = S[Z].z;
              }

              m.uniform3fv(aa, T._array);
              break;

            case "v4v":
              void 0 === T._array && (T._array = new Float32Array(4 * S.length));
              Z = 0;

              for (Ba = S.length; Z < Ba; Z++) {
                Ga = 4 * Z, T._array[Ga] = S[Z].x, T._array[Ga + 1] = S[Z].y, T._array[Ga + 2] = S[Z].z, T._array[Ga + 3] = S[Z].w;
              }

              m.uniform4fv(aa, T._array);
              break;

            case "m3":
              m.uniformMatrix3fv(aa, !1, S.elements);
              break;

            case "m3v":
              void 0 === T._array && (T._array = new Float32Array(9 * S.length));
              Z = 0;

              for (Ba = S.length; Z < Ba; Z++) {
                S[Z].flattenToArrayOffset(T._array, 9 * Z);
              }

              m.uniformMatrix3fv(aa, !1, T._array);
              break;

            case "m4":
              m.uniformMatrix4fv(aa, !1, S.elements);
              break;

            case "m4v":
              void 0 === T._array && (T._array = new Float32Array(16 * S.length));
              Z = 0;

              for (Ba = S.length; Z < Ba; Z++) {
                S[Z].flattenToArrayOffset(T._array, 16 * Z);
              }

              m.uniformMatrix4fv(aa, !1, T._array);
              break;

            case "t":
              Oa = S;
              $a = D();
              m.uniform1i(aa, $a);
              if (!Oa) continue;

              if (Oa instanceof THREE.CubeTexture || Oa.image instanceof Array && 6 === Oa.image.length) {
                var X = Oa,
                    Eb = $a;
                if (6 === X.image.length) if (X.needsUpdate) {
                  X.image.__webglTextureCube || (X.addEventListener("dispose", Pb), X.image.__webglTextureCube = m.createTexture(), B.info.memory.textures++);
                  m.activeTexture(m.TEXTURE0 + Eb);
                  m.bindTexture(m.TEXTURE_CUBE_MAP, X.image.__webglTextureCube);
                  m.pixelStorei(m.UNPACK_FLIP_Y_WEBGL, X.flipY);

                  for (var Rb = X instanceof THREE.CompressedTexture, Ib = X.image[0] instanceof THREE.DataTexture, gb = [], ya = 0; 6 > ya; ya++) {
                    gb[ya] = !B.autoScaleCubemaps || Rb || Ib ? Ib ? X.image[ya].image : X.image[ya] : E(X.image[ya], qc);
                  }

                  var Yb = gb[0],
                      Zb = THREE.Math.isPowerOfTwo(Yb.width) && THREE.Math.isPowerOfTwo(Yb.height),
                      Wa = I(X.format),
                      tb = I(X.type);
                  A(m.TEXTURE_CUBE_MAP, X, Zb);

                  for (ya = 0; 6 > ya; ya++) {
                    if (Rb) for (var hb, $b = gb[ya].mipmaps, Fb = 0, Sb = $b.length; Fb < Sb; Fb++) {
                      hb = $b[Fb], X.format !== THREE.RGBAFormat && X.format !== THREE.RGBFormat ? -1 < kc().indexOf(Wa) ? m.compressedTexImage2D(m.TEXTURE_CUBE_MAP_POSITIVE_X + ya, Fb, Wa, hb.width, hb.height, 0, hb.data) : THREE.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setCubeTexture()") : m.texImage2D(m.TEXTURE_CUBE_MAP_POSITIVE_X + ya, Fb, Wa, hb.width, hb.height, 0, Wa, tb, hb.data);
                    } else Ib ? m.texImage2D(m.TEXTURE_CUBE_MAP_POSITIVE_X + ya, 0, Wa, gb[ya].width, gb[ya].height, 0, Wa, tb, gb[ya].data) : m.texImage2D(m.TEXTURE_CUBE_MAP_POSITIVE_X + ya, 0, Wa, Wa, tb, gb[ya]);
                  }

                  X.generateMipmaps && Zb && m.generateMipmap(m.TEXTURE_CUBE_MAP);
                  X.needsUpdate = !1;
                  if (X.onUpdate) X.onUpdate();
                } else m.activeTexture(m.TEXTURE0 + Eb), m.bindTexture(m.TEXTURE_CUBE_MAP, X.image.__webglTextureCube);
              } else if (Oa instanceof THREE.WebGLRenderTargetCube) {
                var Jb = Oa;
                m.activeTexture(m.TEXTURE0 + $a);
                m.bindTexture(m.TEXTURE_CUBE_MAP, Jb.__webglTexture);
              } else B.setTexture(Oa, $a);

              break;

            case "tv":
              void 0 === T._array && (T._array = []);
              Z = 0;

              for (Ba = T.value.length; Z < Ba; Z++) {
                T._array[Z] = D();
              }

              m.uniform1iv(aa, T._array);
              Z = 0;

              for (Ba = T.value.length; Z < Ba; Z++) {
                Oa = T.value[Z], $a = T._array[Z], Oa && B.setTexture(Oa, $a);
              }

              break;

            default:
              THREE.warn("THREE.WebGLRenderer: Unknown uniform type: " + Db);
          }
        }
      }
    }

    m.uniformMatrix4fv(ka.modelViewMatrix, !1, e._modelViewMatrix.elements);
    ka.normalMatrix && m.uniformMatrix3fv(ka.normalMatrix, !1, e._normalMatrix.elements);
    null !== ka.modelMatrix && m.uniformMatrix4fv(ka.modelMatrix, !1, e.matrixWorld.elements);
    return Ua;
  }

  function x(a, b) {
    a.ambientLightColor.needsUpdate = b;
    a.directionalLightColor.needsUpdate = b;
    a.directionalLightDirection.needsUpdate = b;
    a.pointLightColor.needsUpdate = b;
    a.pointLightPosition.needsUpdate = b;
    a.pointLightDistance.needsUpdate = b;
    a.pointLightDecay.needsUpdate = b;
    a.spotLightColor.needsUpdate = b;
    a.spotLightPosition.needsUpdate = b;
    a.spotLightDistance.needsUpdate = b;
    a.spotLightDirection.needsUpdate = b;
    a.spotLightAngleCos.needsUpdate = b;
    a.spotLightExponent.needsUpdate = b;
    a.spotLightDecay.needsUpdate = b;
    a.hemisphereLightSkyColor.needsUpdate = b;
    a.hemisphereLightGroundColor.needsUpdate = b;
    a.hemisphereLightDirection.needsUpdate = b;
  }

  function D() {
    var a = Mb;
    a >= Wb && THREE.warn("WebGLRenderer: trying to use " + a + " texture units while this GPU supports only " + Wb);
    Mb += 1;
    return a;
  }

  function w(a, b) {
    a._modelViewMatrix.multiplyMatrices(b.matrixWorldInverse, a.matrixWorld);

    a._normalMatrix.getNormalMatrix(a._modelViewMatrix);
  }

  function y(a, b, c, d) {
    a[b] = c.r * d;
    a[b + 1] = c.g * d;
    a[b + 2] = c.b * d;
  }

  function A(a, b, c) {
    c ? (m.texParameteri(a, m.TEXTURE_WRAP_S, I(b.wrapS)), m.texParameteri(a, m.TEXTURE_WRAP_T, I(b.wrapT)), m.texParameteri(a, m.TEXTURE_MAG_FILTER, I(b.magFilter)), m.texParameteri(a, m.TEXTURE_MIN_FILTER, I(b.minFilter))) : (m.texParameteri(a, m.TEXTURE_WRAP_S, m.CLAMP_TO_EDGE), m.texParameteri(a, m.TEXTURE_WRAP_T, m.CLAMP_TO_EDGE), b.wrapS === THREE.ClampToEdgeWrapping && b.wrapT === THREE.ClampToEdgeWrapping || THREE.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping. ( " + b.sourceFile + " )"), m.texParameteri(a, m.TEXTURE_MAG_FILTER, z(b.magFilter)), m.texParameteri(a, m.TEXTURE_MIN_FILTER, z(b.minFilter)), b.minFilter !== THREE.NearestFilter && b.minFilter !== THREE.LinearFilter && THREE.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter. ( " + b.sourceFile + " )"));
    (c = da.get("EXT_texture_filter_anisotropic")) && b.type !== THREE.FloatType && b.type !== THREE.HalfFloatType && (1 < b.anisotropy || b.__currentAnisotropy) && (m.texParameterf(a, c.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(b.anisotropy, B.getMaxAnisotropy())), b.__currentAnisotropy = b.anisotropy);
  }

  function E(a, b) {
    if (a.width > b || a.height > b) {
      var c = b / Math.max(a.width, a.height),
          d = document.createElement("canvas");
      d.width = Math.floor(a.width * c);
      d.height = Math.floor(a.height * c);
      d.getContext("2d").drawImage(a, 0, 0, a.width, a.height, 0, 0, d.width, d.height);
      THREE.warn("THREE.WebGLRenderer: image is too big (" + a.width + "x" + a.height + "). Resized to " + d.width + "x" + d.height, a);
      return d;
    }

    return a;
  }

  function G(a, b) {
    m.bindRenderbuffer(m.RENDERBUFFER, a);
    b.depthBuffer && !b.stencilBuffer ? (m.renderbufferStorage(m.RENDERBUFFER, m.DEPTH_COMPONENT16, b.width, b.height), m.framebufferRenderbuffer(m.FRAMEBUFFER, m.DEPTH_ATTACHMENT, m.RENDERBUFFER, a)) : b.depthBuffer && b.stencilBuffer ? (m.renderbufferStorage(m.RENDERBUFFER, m.DEPTH_STENCIL, b.width, b.height), m.framebufferRenderbuffer(m.FRAMEBUFFER, m.DEPTH_STENCIL_ATTACHMENT, m.RENDERBUFFER, a)) : m.renderbufferStorage(m.RENDERBUFFER, m.RGBA4, b.width, b.height);
  }

  function F(a) {
    a instanceof THREE.WebGLRenderTargetCube ? (m.bindTexture(m.TEXTURE_CUBE_MAP, a.__webglTexture), m.generateMipmap(m.TEXTURE_CUBE_MAP), m.bindTexture(m.TEXTURE_CUBE_MAP, null)) : (m.bindTexture(m.TEXTURE_2D, a.__webglTexture), m.generateMipmap(m.TEXTURE_2D), m.bindTexture(m.TEXTURE_2D, null));
  }

  function z(a) {
    return a === THREE.NearestFilter || a === THREE.NearestMipMapNearestFilter || a === THREE.NearestMipMapLinearFilter ? m.NEAREST : m.LINEAR;
  }

  function I(a) {
    var b;
    if (a === THREE.RepeatWrapping) return m.REPEAT;
    if (a === THREE.ClampToEdgeWrapping) return m.CLAMP_TO_EDGE;
    if (a === THREE.MirroredRepeatWrapping) return m.MIRRORED_REPEAT;
    if (a === THREE.NearestFilter) return m.NEAREST;
    if (a === THREE.NearestMipMapNearestFilter) return m.NEAREST_MIPMAP_NEAREST;
    if (a === THREE.NearestMipMapLinearFilter) return m.NEAREST_MIPMAP_LINEAR;
    if (a === THREE.LinearFilter) return m.LINEAR;
    if (a === THREE.LinearMipMapNearestFilter) return m.LINEAR_MIPMAP_NEAREST;
    if (a === THREE.LinearMipMapLinearFilter) return m.LINEAR_MIPMAP_LINEAR;
    if (a === THREE.UnsignedByteType) return m.UNSIGNED_BYTE;
    if (a === THREE.UnsignedShort4444Type) return m.UNSIGNED_SHORT_4_4_4_4;
    if (a === THREE.UnsignedShort5551Type) return m.UNSIGNED_SHORT_5_5_5_1;
    if (a === THREE.UnsignedShort565Type) return m.UNSIGNED_SHORT_5_6_5;
    if (a === THREE.ByteType) return m.BYTE;
    if (a === THREE.ShortType) return m.SHORT;
    if (a === THREE.UnsignedShortType) return m.UNSIGNED_SHORT;
    if (a === THREE.IntType) return m.INT;
    if (a === THREE.UnsignedIntType) return m.UNSIGNED_INT;
    if (a === THREE.FloatType) return m.FLOAT;
    b = da.get("OES_texture_half_float");
    if (null !== b && a === THREE.HalfFloatType) return b.HALF_FLOAT_OES;
    if (a === THREE.AlphaFormat) return m.ALPHA;
    if (a === THREE.RGBFormat) return m.RGB;
    if (a === THREE.RGBAFormat) return m.RGBA;
    if (a === THREE.LuminanceFormat) return m.LUMINANCE;
    if (a === THREE.LuminanceAlphaFormat) return m.LUMINANCE_ALPHA;
    if (a === THREE.AddEquation) return m.FUNC_ADD;
    if (a === THREE.SubtractEquation) return m.FUNC_SUBTRACT;
    if (a === THREE.ReverseSubtractEquation) return m.FUNC_REVERSE_SUBTRACT;
    if (a === THREE.ZeroFactor) return m.ZERO;
    if (a === THREE.OneFactor) return m.ONE;
    if (a === THREE.SrcColorFactor) return m.SRC_COLOR;
    if (a === THREE.OneMinusSrcColorFactor) return m.ONE_MINUS_SRC_COLOR;
    if (a === THREE.SrcAlphaFactor) return m.SRC_ALPHA;
    if (a === THREE.OneMinusSrcAlphaFactor) return m.ONE_MINUS_SRC_ALPHA;
    if (a === THREE.DstAlphaFactor) return m.DST_ALPHA;
    if (a === THREE.OneMinusDstAlphaFactor) return m.ONE_MINUS_DST_ALPHA;
    if (a === THREE.DstColorFactor) return m.DST_COLOR;
    if (a === THREE.OneMinusDstColorFactor) return m.ONE_MINUS_DST_COLOR;
    if (a === THREE.SrcAlphaSaturateFactor) return m.SRC_ALPHA_SATURATE;
    b = da.get("WEBGL_compressed_texture_s3tc");

    if (null !== b) {
      if (a === THREE.RGB_S3TC_DXT1_Format) return b.COMPRESSED_RGB_S3TC_DXT1_EXT;
      if (a === THREE.RGBA_S3TC_DXT1_Format) return b.COMPRESSED_RGBA_S3TC_DXT1_EXT;
      if (a === THREE.RGBA_S3TC_DXT3_Format) return b.COMPRESSED_RGBA_S3TC_DXT3_EXT;
      if (a === THREE.RGBA_S3TC_DXT5_Format) return b.COMPRESSED_RGBA_S3TC_DXT5_EXT;
    }

    b = da.get("WEBGL_compressed_texture_pvrtc");

    if (null !== b) {
      if (a === THREE.RGB_PVRTC_4BPPV1_Format) return b.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
      if (a === THREE.RGB_PVRTC_2BPPV1_Format) return b.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
      if (a === THREE.RGBA_PVRTC_4BPPV1_Format) return b.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
      if (a === THREE.RGBA_PVRTC_2BPPV1_Format) return b.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
    }

    b = da.get("EXT_blend_minmax");

    if (null !== b) {
      if (a === THREE.MinEquation) return b.MIN_EXT;
      if (a === THREE.MaxEquation) return b.MAX_EXT;
    }

    return 0;
  }

  console.log("THREE.WebGLRenderer", THREE.REVISION);
  a = a || {};
  var U = void 0 !== a.canvas ? a.canvas : document.createElement("canvas"),
      M = void 0 !== a.context ? a.context : null,
      H = 1,
      L = void 0 !== a.precision ? a.precision : "highp",
      P = void 0 !== a.alpha ? a.alpha : !1,
      N = void 0 !== a.depth ? a.depth : !0,
      R = void 0 !== a.stencil ? a.stencil : !0,
      V = void 0 !== a.antialias ? a.antialias : !1,
      J = void 0 !== a.premultipliedAlpha ? a.premultipliedAlpha : !0,
      oa = void 0 !== a.preserveDrawingBuffer ? a.preserveDrawingBuffer : !1,
      ja = void 0 !== a.logarithmicDepthBuffer ? a.logarithmicDepthBuffer : !1,
      ha = new THREE.Color(0),
      O = 0,
      ca = [],
      ba = {},
      qa = [],
      Ka = [],
      Qa = [],
      Xa = [],
      Ya = [];
  this.domElement = U;
  this.context = null;
  this.sortObjects = this.autoClearStencil = this.autoClearDepth = this.autoClearColor = this.autoClear = !0;
  this.gammaFactor = 2;
  this.shadowMapEnabled = this.gammaOutput = this.gammaInput = !1;
  this.shadowMapType = THREE.PCFShadowMap;
  this.shadowMapCullFace = THREE.CullFaceFront;
  this.shadowMapCascade = this.shadowMapDebug = !1;
  this.maxMorphTargets = 8;
  this.maxMorphNormals = 4;
  this.autoScaleCubemaps = !0;
  this.info = {
    memory: {
      programs: 0,
      geometries: 0,
      textures: 0
    },
    render: {
      calls: 0,
      vertices: 0,
      faces: 0,
      points: 0
    }
  };
  var B = this,
      Pa = [],
      ob = null,
      ab = null,
      ub = -1,
      ta = "",
      vb = null,
      Mb = 0,
      ib = 0,
      bb = 0,
      pb = U.width,
      qb = U.height,
      Xb = 0,
      fc = 0,
      cb = new THREE.Frustum(),
      db = new THREE.Matrix4(),
      wa = new THREE.Vector3(),
      pa = new THREE.Vector3(),
      Ob = !0,
      jc = {
    ambient: [0, 0, 0],
    directional: {
      length: 0,
      colors: [],
      positions: []
    },
    point: {
      length: 0,
      colors: [],
      positions: [],
      distances: [],
      decays: []
    },
    spot: {
      length: 0,
      colors: [],
      positions: [],
      distances: [],
      directions: [],
      anglesCos: [],
      exponents: [],
      decays: []
    },
    hemi: {
      length: 0,
      skyColors: [],
      groundColors: [],
      positions: []
    }
  },
      m;

  try {
    var Yb = {
      alpha: P,
      depth: N,
      stencil: R,
      antialias: V,
      premultipliedAlpha: J,
      preserveDrawingBuffer: oa
    };
    m = M || U.getContext("webgl", Yb) || U.getContext("experimental-webgl", Yb);

    if (null === m) {
      if (null !== U.getContext("webgl")) throw "Error creating WebGL context with your selected attributes.";
      throw "Error creating WebGL context.";
    }

    U.addEventListener("webglcontextlost", function (a) {
      a.preventDefault();
      Zb();
      lc();
      ba = {};
    }, !1);
  } catch (rc) {
    THREE.error("THREE.WebGLRenderer: " + rc);
  }

  var W = new THREE.WebGLState(m, I);
  void 0 === m.getShaderPrecisionFormat && (m.getShaderPrecisionFormat = function () {
    return {
      rangeMin: 1,
      rangeMax: 1,
      precision: 1
    };
  });
  var da = new THREE.WebGLExtensions(m);
  da.get("OES_texture_float");
  da.get("OES_texture_float_linear");
  da.get("OES_texture_half_float");
  da.get("OES_texture_half_float_linear");
  da.get("OES_standard_derivatives");
  ja && da.get("EXT_frag_depth");

  var rb = function rb(a, b, c, d) {
    !0 === J && (a *= d, b *= d, c *= d);
    m.clearColor(a, b, c, d);
  },
      lc = function lc() {
    m.clearColor(0, 0, 0, 1);
    m.clearDepth(1);
    m.clearStencil(0);
    m.enable(m.DEPTH_TEST);
    m.depthFunc(m.LEQUAL);
    m.frontFace(m.CCW);
    m.cullFace(m.BACK);
    m.enable(m.CULL_FACE);
    m.enable(m.BLEND);
    m.blendEquation(m.FUNC_ADD);
    m.blendFunc(m.SRC_ALPHA, m.ONE_MINUS_SRC_ALPHA);
    m.viewport(ib, bb, pb, qb);
    rb(ha.r, ha.g, ha.b, O);
  },
      Zb = function Zb() {
    vb = ob = null;
    ta = "";
    ub = -1;
    Ob = !0;
    W.reset();
  };

  lc();
  this.context = m;
  this.state = W;

  var Wb = m.getParameter(m.MAX_TEXTURE_IMAGE_UNITS),
      sc = m.getParameter(m.MAX_VERTEX_TEXTURE_IMAGE_UNITS),
      tc = m.getParameter(m.MAX_TEXTURE_SIZE),
      qc = m.getParameter(m.MAX_CUBE_MAP_TEXTURE_SIZE),
      Vb = 0 < sc,
      Nb = Vb && da.get("OES_texture_float"),
      uc = m.getShaderPrecisionFormat(m.VERTEX_SHADER, m.HIGH_FLOAT),
      vc = m.getShaderPrecisionFormat(m.VERTEX_SHADER, m.MEDIUM_FLOAT),
      wc = m.getShaderPrecisionFormat(m.FRAGMENT_SHADER, m.HIGH_FLOAT),
      xc = m.getShaderPrecisionFormat(m.FRAGMENT_SHADER, m.MEDIUM_FLOAT),
      kc = function () {
    var a;
    return function () {
      if (void 0 !== a) return a;
      a = [];
      if (da.get("WEBGL_compressed_texture_pvrtc") || da.get("WEBGL_compressed_texture_s3tc")) for (var b = m.getParameter(m.COMPRESSED_TEXTURE_FORMATS), c = 0; c < b.length; c++) {
        a.push(b[c]);
      }
      return a;
    };
  }(),
      yc = 0 < uc.precision && 0 < wc.precision,
      mc = 0 < vc.precision && 0 < xc.precision;

  "highp" !== L || yc || (mc ? (L = "mediump", THREE.warn("THREE.WebGLRenderer: highp not supported, using mediump.")) : (L = "lowp", THREE.warn("THREE.WebGLRenderer: highp and mediump not supported, using lowp.")));
  "mediump" !== L || mc || (L = "lowp", THREE.warn("THREE.WebGLRenderer: mediump not supported, using lowp."));
  var zc = new THREE.ShadowMapPlugin(this, ca, ba, qa),
      Ac = new THREE.SpritePlugin(this, Xa),
      Bc = new THREE.LensFlarePlugin(this, Ya);

  this.getContext = function () {
    return m;
  };

  this.forceContextLoss = function () {
    da.get("WEBGL_lose_context").loseContext();
  };

  this.supportsVertexTextures = function () {
    return Vb;
  };

  this.supportsFloatTextures = function () {
    return da.get("OES_texture_float");
  };

  this.supportsHalfFloatTextures = function () {
    return da.get("OES_texture_half_float");
  };

  this.supportsStandardDerivatives = function () {
    return da.get("OES_standard_derivatives");
  };

  this.supportsCompressedTextureS3TC = function () {
    return da.get("WEBGL_compressed_texture_s3tc");
  };

  this.supportsCompressedTexturePVRTC = function () {
    return da.get("WEBGL_compressed_texture_pvrtc");
  };

  this.supportsBlendMinMax = function () {
    return da.get("EXT_blend_minmax");
  };

  this.getMaxAnisotropy = function () {
    var a;
    return function () {
      if (void 0 !== a) return a;
      var b = da.get("EXT_texture_filter_anisotropic");
      return a = null !== b ? m.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0;
    };
  }();

  this.getPrecision = function () {
    return L;
  };

  this.getPixelRatio = function () {
    return H;
  };

  this.setPixelRatio = function (a) {
    H = a;
  };

  this.setSize = function (a, b, c) {
    U.width = a * H;
    U.height = b * H;
    !1 !== c && (U.style.width = a + "px", U.style.height = b + "px");
    this.setViewport(0, 0, a, b);
  };

  this.setViewport = function (a, b, c, d) {
    ib = a * H;
    bb = b * H;
    pb = c * H;
    qb = d * H;
    m.viewport(ib, bb, pb, qb);
  };

  this.setScissor = function (a, b, c, d) {
    m.scissor(a * H, b * H, c * H, d * H);
  };

  this.enableScissorTest = function (a) {
    a ? m.enable(m.SCISSOR_TEST) : m.disable(m.SCISSOR_TEST);
  };

  this.getClearColor = function () {
    return ha;
  };

  this.setClearColor = function (a, b) {
    ha.set(a);
    O = void 0 !== b ? b : 1;
    rb(ha.r, ha.g, ha.b, O);
  };

  this.getClearAlpha = function () {
    return O;
  };

  this.setClearAlpha = function (a) {
    O = a;
    rb(ha.r, ha.g, ha.b, O);
  };

  this.clear = function (a, b, c) {
    var d = 0;
    if (void 0 === a || a) d |= m.COLOR_BUFFER_BIT;
    if (void 0 === b || b) d |= m.DEPTH_BUFFER_BIT;
    if (void 0 === c || c) d |= m.STENCIL_BUFFER_BIT;
    m.clear(d);
  };

  this.clearColor = function () {
    m.clear(m.COLOR_BUFFER_BIT);
  };

  this.clearDepth = function () {
    m.clear(m.DEPTH_BUFFER_BIT);
  };

  this.clearStencil = function () {
    m.clear(m.STENCIL_BUFFER_BIT);
  };

  this.clearTarget = function (a, b, c, d) {
    this.setRenderTarget(a);
    this.clear(b, c, d);
  };

  this.resetGLState = Zb;

  var wb = function wb(a) {
    a.target.traverse(function (a) {
      a.removeEventListener("remove", wb);
      if (a instanceof THREE.Mesh || a instanceof THREE.PointCloud || a instanceof THREE.Line) delete ba[a.id];else if (a instanceof THREE.ImmediateRenderObject || a.immediateRenderCallback) for (var b = qa, c = b.length - 1; 0 <= c; c--) {
        b[c].object === a && b.splice(c, 1);
      }
      delete a.__webglInit;
      delete a._modelViewMatrix;
      delete a._normalMatrix;
      delete a.__webglActive;
    });
  },
      jb = function jb(a) {
    a = a.target;
    a.removeEventListener("dispose", jb);
    delete a.__webglInit;

    if (a instanceof THREE.BufferGeometry) {
      for (var b in a.attributes) {
        var c = a.attributes[b];
        void 0 !== c.buffer && (m.deleteBuffer(c.buffer), delete c.buffer);
      }

      B.info.memory.geometries--;
    } else if (b = Ua[a.id], void 0 !== b) {
      for (var c = 0, d = b.length; c < d; c++) {
        var e = b[c];

        if (void 0 !== e.numMorphTargets) {
          for (var f = 0, g = e.numMorphTargets; f < g; f++) {
            m.deleteBuffer(e.__webglMorphTargetsBuffers[f]);
          }

          delete e.__webglMorphTargetsBuffers;
        }

        if (void 0 !== e.numMorphNormals) {
          f = 0;

          for (g = e.numMorphNormals; f < g; f++) {
            m.deleteBuffer(e.__webglMorphNormalsBuffers[f]);
          }

          delete e.__webglMorphNormalsBuffers;
        }

        nc(e);
      }

      delete Ua[a.id];
    } else nc(a);

    ta = "";
  },
      Pb = function Pb(a) {
    a = a.target;
    a.removeEventListener("dispose", Pb);
    a.image && a.image.__webglTextureCube ? (m.deleteTexture(a.image.__webglTextureCube), delete a.image.__webglTextureCube) : void 0 !== a.__webglInit && (m.deleteTexture(a.__webglTexture), delete a.__webglTexture, delete a.__webglInit);
    B.info.memory.textures--;
  },
      oc = function oc(a) {
    a = a.target;
    a.removeEventListener("dispose", oc);

    if (a && void 0 !== a.__webglTexture) {
      m.deleteTexture(a.__webglTexture);
      delete a.__webglTexture;
      if (a instanceof THREE.WebGLRenderTargetCube) for (var b = 0; 6 > b; b++) {
        m.deleteFramebuffer(a.__webglFramebuffer[b]), m.deleteRenderbuffer(a.__webglRenderbuffer[b]);
      } else m.deleteFramebuffer(a.__webglFramebuffer), m.deleteRenderbuffer(a.__webglRenderbuffer);
      delete a.__webglFramebuffer;
      delete a.__webglRenderbuffer;
    }

    B.info.memory.textures--;
  },
      ic = function ic(a) {
    a = a.target;
    a.removeEventListener("dispose", ic);
    hc(a);
  },
      nc = function nc(a) {
    for (var b = "__webglVertexBuffer __webglNormalBuffer __webglTangentBuffer __webglColorBuffer __webglUVBuffer __webglUV2Buffer __webglSkinIndicesBuffer __webglSkinWeightsBuffer __webglFaceBuffer __webglLineBuffer __webglLineDistanceBuffer".split(" "), c = 0, d = b.length; c < d; c++) {
      var e = b[c];
      void 0 !== a[e] && (m.deleteBuffer(a[e]), delete a[e]);
    }

    if (void 0 !== a.__webglCustomAttributesList) {
      for (e in a.__webglCustomAttributesList) {
        m.deleteBuffer(a.__webglCustomAttributesList[e].buffer);
      }

      delete a.__webglCustomAttributesList;
    }

    B.info.memory.geometries--;
  },
      hc = function hc(a) {
    var b = a.program.program;

    if (void 0 !== b) {
      a.program = void 0;
      var c,
          d,
          e = !1;
      a = 0;

      for (c = Pa.length; a < c; a++) {
        if (d = Pa[a], d.program === b) {
          d.usedTimes--;
          0 === d.usedTimes && (e = !0);
          break;
        }
      }

      if (!0 === e) {
        e = [];
        a = 0;

        for (c = Pa.length; a < c; a++) {
          d = Pa[a], d.program !== b && e.push(d);
        }

        Pa = e;
        m.deleteProgram(b);
        B.info.memory.programs--;
      }
    }
  };

  this.renderBufferImmediate = function (a, b, c) {
    W.initAttributes();
    a.hasPositions && !a.__webglVertexBuffer && (a.__webglVertexBuffer = m.createBuffer());
    a.hasNormals && !a.__webglNormalBuffer && (a.__webglNormalBuffer = m.createBuffer());
    a.hasUvs && !a.__webglUvBuffer && (a.__webglUvBuffer = m.createBuffer());
    a.hasColors && !a.__webglColorBuffer && (a.__webglColorBuffer = m.createBuffer());
    a.hasPositions && (m.bindBuffer(m.ARRAY_BUFFER, a.__webglVertexBuffer), m.bufferData(m.ARRAY_BUFFER, a.positionArray, m.DYNAMIC_DRAW), W.enableAttribute(b.attributes.position), m.vertexAttribPointer(b.attributes.position, 3, m.FLOAT, !1, 0, 0));

    if (a.hasNormals) {
      m.bindBuffer(m.ARRAY_BUFFER, a.__webglNormalBuffer);

      if (!1 === c instanceof THREE.MeshPhongMaterial && c.shading === THREE.FlatShading) {
        var d,
            e,
            f,
            g,
            h,
            k,
            n,
            l,
            p,
            q,
            r,
            s = 3 * a.count;

        for (r = 0; r < s; r += 9) {
          q = a.normalArray, d = q[r], e = q[r + 1], f = q[r + 2], g = q[r + 3], k = q[r + 4], l = q[r + 5], h = q[r + 6], n = q[r + 7], p = q[r + 8], d = (d + g + h) / 3, e = (e + k + n) / 3, f = (f + l + p) / 3, q[r] = d, q[r + 1] = e, q[r + 2] = f, q[r + 3] = d, q[r + 4] = e, q[r + 5] = f, q[r + 6] = d, q[r + 7] = e, q[r + 8] = f;
        }
      }

      m.bufferData(m.ARRAY_BUFFER, a.normalArray, m.DYNAMIC_DRAW);
      W.enableAttribute(b.attributes.normal);
      m.vertexAttribPointer(b.attributes.normal, 3, m.FLOAT, !1, 0, 0);
    }

    a.hasUvs && c.map && (m.bindBuffer(m.ARRAY_BUFFER, a.__webglUvBuffer), m.bufferData(m.ARRAY_BUFFER, a.uvArray, m.DYNAMIC_DRAW), W.enableAttribute(b.attributes.uv), m.vertexAttribPointer(b.attributes.uv, 2, m.FLOAT, !1, 0, 0));
    a.hasColors && c.vertexColors !== THREE.NoColors && (m.bindBuffer(m.ARRAY_BUFFER, a.__webglColorBuffer), m.bufferData(m.ARRAY_BUFFER, a.colorArray, m.DYNAMIC_DRAW), W.enableAttribute(b.attributes.color), m.vertexAttribPointer(b.attributes.color, 3, m.FLOAT, !1, 0, 0));
    W.disableUnusedAttributes();
    m.drawArrays(m.TRIANGLES, 0, a.count);
    a.count = 0;
  };

  this.renderBufferDirect = function (a, b, c, e, f, g) {
    if (!1 !== e.visible) if (t(g), a = v(a, b, c, e, g), b = !1, c = "direct_" + f.id + "_" + a.id + "_" + (e.wireframe ? 1 : 0), c !== ta && (ta = c, b = !0), b && W.initAttributes(), g instanceof THREE.Mesh) {
      g = !0 === e.wireframe ? m.LINES : m.TRIANGLES;
      var h = f.attributes.index;

      if (h) {
        var k, n;
        h.array instanceof Uint32Array && da.get("OES_element_index_uint") ? (k = m.UNSIGNED_INT, n = 4) : (k = m.UNSIGNED_SHORT, n = 2);
        c = f.offsets;
        if (0 === c.length) b && (d(e, a, f, 0), m.bindBuffer(m.ELEMENT_ARRAY_BUFFER, h.buffer)), m.drawElements(g, h.array.length, k, 0), B.info.render.calls++, B.info.render.vertices += h.array.length, B.info.render.faces += h.array.length / 3;else {
          b = !0;

          for (var l = 0, p = c.length; l < p; l++) {
            var q = c[l].index;
            b && (d(e, a, f, q), m.bindBuffer(m.ELEMENT_ARRAY_BUFFER, h.buffer));
            m.drawElements(g, c[l].count, k, c[l].start * n);
            B.info.render.calls++;
            B.info.render.vertices += c[l].count;
            B.info.render.faces += c[l].count / 3;
          }
        }
      } else b && d(e, a, f, 0), e = f.attributes.position, m.drawArrays(g, 0, e.array.length / e.itemSize), B.info.render.calls++, B.info.render.vertices += e.array.length / e.itemSize, B.info.render.faces += e.array.length / (3 * e.itemSize);
    } else if (g instanceof THREE.PointCloud) {
      if (g = m.POINTS, h = f.attributes.index) {
        if (h.array instanceof Uint32Array && da.get("OES_element_index_uint") ? (k = m.UNSIGNED_INT, n = 4) : (k = m.UNSIGNED_SHORT, n = 2), c = f.offsets, 0 === c.length) b && (d(e, a, f, 0), m.bindBuffer(m.ELEMENT_ARRAY_BUFFER, h.buffer)), m.drawElements(g, h.array.length, k, 0), B.info.render.calls++, B.info.render.points += h.array.length;else for (1 < c.length && (b = !0), l = 0, p = c.length; l < p; l++) {
          q = c[l].index, b && (d(e, a, f, q), m.bindBuffer(m.ELEMENT_ARRAY_BUFFER, h.buffer)), m.drawElements(g, c[l].count, k, c[l].start * n), B.info.render.calls++, B.info.render.points += c[l].count;
        }
      } else if (b && d(e, a, f, 0), e = f.attributes.position, c = f.offsets, 0 === c.length) m.drawArrays(g, 0, e.array.length / 3), B.info.render.calls++, B.info.render.points += e.array.length / 3;else for (l = 0, p = c.length; l < p; l++) {
        m.drawArrays(g, c[l].index, c[l].count), B.info.render.calls++, B.info.render.points += c[l].count;
      }
    } else if (g instanceof THREE.Line) if (g = g.mode === THREE.LineStrip ? m.LINE_STRIP : m.LINES, W.setLineWidth(e.linewidth * H), h = f.attributes.index) {
      if (h.array instanceof Uint32Array ? (k = m.UNSIGNED_INT, n = 4) : (k = m.UNSIGNED_SHORT, n = 2), c = f.offsets, 0 === c.length) b && (d(e, a, f, 0), m.bindBuffer(m.ELEMENT_ARRAY_BUFFER, h.buffer)), m.drawElements(g, h.array.length, k, 0), B.info.render.calls++, B.info.render.vertices += h.array.length;else for (1 < c.length && (b = !0), l = 0, p = c.length; l < p; l++) {
        q = c[l].index, b && (d(e, a, f, q), m.bindBuffer(m.ELEMENT_ARRAY_BUFFER, h.buffer)), m.drawElements(g, c[l].count, k, c[l].start * n), B.info.render.calls++, B.info.render.vertices += c[l].count;
      }
    } else if (b && d(e, a, f, 0), e = f.attributes.position, c = f.offsets, 0 === c.length) m.drawArrays(g, 0, e.array.length / 3), B.info.render.calls++, B.info.render.vertices += e.array.length / 3;else for (l = 0, p = c.length; l < p; l++) {
      m.drawArrays(g, c[l].index, c[l].count), B.info.render.calls++, B.info.render.vertices += c[l].count;
    }
  };

  this.renderBuffer = function (a, b, c, d, e, f) {
    if (!1 !== d.visible) {
      t(f);
      c = v(a, b, c, d, f);
      b = c.attributes;
      a = !1;
      c = e.id + "_" + c.id + "_" + (d.wireframe ? 1 : 0);
      c !== ta && (ta = c, a = !0);
      a && W.initAttributes();
      if (!d.morphTargets && 0 <= b.position) a && (m.bindBuffer(m.ARRAY_BUFFER, e.__webglVertexBuffer), W.enableAttribute(b.position), m.vertexAttribPointer(b.position, 3, m.FLOAT, !1, 0, 0));else if (f.morphTargetBase) {
        c = d.program.attributes;
        -1 !== f.morphTargetBase && 0 <= c.position ? (m.bindBuffer(m.ARRAY_BUFFER, e.__webglMorphTargetsBuffers[f.morphTargetBase]), W.enableAttribute(c.position), m.vertexAttribPointer(c.position, 3, m.FLOAT, !1, 0, 0)) : 0 <= c.position && (m.bindBuffer(m.ARRAY_BUFFER, e.__webglVertexBuffer), W.enableAttribute(c.position), m.vertexAttribPointer(c.position, 3, m.FLOAT, !1, 0, 0));
        if (f.morphTargetForcedOrder.length) for (var h = 0, k = f.morphTargetForcedOrder, n = f.morphTargetInfluences, l; h < d.numSupportedMorphTargets && h < k.length;) {
          l = c["morphTarget" + h], 0 <= l && (m.bindBuffer(m.ARRAY_BUFFER, e.__webglMorphTargetsBuffers[k[h]]), W.enableAttribute(l), m.vertexAttribPointer(l, 3, m.FLOAT, !1, 0, 0)), l = c["morphNormal" + h], 0 <= l && d.morphNormals && (m.bindBuffer(m.ARRAY_BUFFER, e.__webglMorphNormalsBuffers[k[h]]), W.enableAttribute(l), m.vertexAttribPointer(l, 3, m.FLOAT, !1, 0, 0)), f.__webglMorphTargetInfluences[h] = n[k[h]], h++;
        } else {
          k = [];
          n = f.morphTargetInfluences;
          h = f.geometry.morphTargets;
          n.length > h.length && (console.warn("THREE.WebGLRenderer: Influences array is bigger than morphTargets array."), n.length = h.length);
          h = 0;

          for (l = n.length; h < l; h++) {
            k.push([n[h], h]);
          }

          k.length > d.numSupportedMorphTargets ? (k.sort(g), k.length = d.numSupportedMorphTargets) : k.length > d.numSupportedMorphNormals ? k.sort(g) : 0 === k.length && k.push([0, 0]);

          for (var h = 0, p = d.numSupportedMorphTargets; h < p; h++) {
            if (k[h]) {
              var q = k[h][1];
              l = c["morphTarget" + h];
              0 <= l && (m.bindBuffer(m.ARRAY_BUFFER, e.__webglMorphTargetsBuffers[q]), W.enableAttribute(l), m.vertexAttribPointer(l, 3, m.FLOAT, !1, 0, 0));
              l = c["morphNormal" + h];
              0 <= l && d.morphNormals && (m.bindBuffer(m.ARRAY_BUFFER, e.__webglMorphNormalsBuffers[q]), W.enableAttribute(l), m.vertexAttribPointer(l, 3, m.FLOAT, !1, 0, 0));
              f.__webglMorphTargetInfluences[h] = n[q];
            } else f.__webglMorphTargetInfluences[h] = 0;
          }
        }
        null !== d.program.uniforms.morphTargetInfluences && m.uniform1fv(d.program.uniforms.morphTargetInfluences, f.__webglMorphTargetInfluences);
      }

      if (a) {
        if (e.__webglCustomAttributesList) for (c = 0, n = e.__webglCustomAttributesList.length; c < n; c++) {
          k = e.__webglCustomAttributesList[c], 0 <= b[k.buffer.belongsToAttribute] && (m.bindBuffer(m.ARRAY_BUFFER, k.buffer), W.enableAttribute(b[k.buffer.belongsToAttribute]), m.vertexAttribPointer(b[k.buffer.belongsToAttribute], k.size, m.FLOAT, !1, 0, 0));
        }
        0 <= b.color && (0 < f.geometry.colors.length || 0 < f.geometry.faces.length ? (m.bindBuffer(m.ARRAY_BUFFER, e.__webglColorBuffer), W.enableAttribute(b.color), m.vertexAttribPointer(b.color, 3, m.FLOAT, !1, 0, 0)) : void 0 !== d.defaultAttributeValues && m.vertexAttrib3fv(b.color, d.defaultAttributeValues.color));
        0 <= b.normal && (m.bindBuffer(m.ARRAY_BUFFER, e.__webglNormalBuffer), W.enableAttribute(b.normal), m.vertexAttribPointer(b.normal, 3, m.FLOAT, !1, 0, 0));
        0 <= b.tangent && (m.bindBuffer(m.ARRAY_BUFFER, e.__webglTangentBuffer), W.enableAttribute(b.tangent), m.vertexAttribPointer(b.tangent, 4, m.FLOAT, !1, 0, 0));
        0 <= b.uv && (f.geometry.faceVertexUvs[0] ? (m.bindBuffer(m.ARRAY_BUFFER, e.__webglUVBuffer), W.enableAttribute(b.uv), m.vertexAttribPointer(b.uv, 2, m.FLOAT, !1, 0, 0)) : void 0 !== d.defaultAttributeValues && m.vertexAttrib2fv(b.uv, d.defaultAttributeValues.uv));
        0 <= b.uv2 && (f.geometry.faceVertexUvs[1] ? (m.bindBuffer(m.ARRAY_BUFFER, e.__webglUV2Buffer), W.enableAttribute(b.uv2), m.vertexAttribPointer(b.uv2, 2, m.FLOAT, !1, 0, 0)) : void 0 !== d.defaultAttributeValues && m.vertexAttrib2fv(b.uv2, d.defaultAttributeValues.uv2));
        d.skinning && 0 <= b.skinIndex && 0 <= b.skinWeight && (m.bindBuffer(m.ARRAY_BUFFER, e.__webglSkinIndicesBuffer), W.enableAttribute(b.skinIndex), m.vertexAttribPointer(b.skinIndex, 4, m.FLOAT, !1, 0, 0), m.bindBuffer(m.ARRAY_BUFFER, e.__webglSkinWeightsBuffer), W.enableAttribute(b.skinWeight), m.vertexAttribPointer(b.skinWeight, 4, m.FLOAT, !1, 0, 0));
        0 <= b.lineDistance && (m.bindBuffer(m.ARRAY_BUFFER, e.__webglLineDistanceBuffer), W.enableAttribute(b.lineDistance), m.vertexAttribPointer(b.lineDistance, 1, m.FLOAT, !1, 0, 0));
      }

      W.disableUnusedAttributes();
      f instanceof THREE.Mesh ? (f = e.__typeArray === Uint32Array ? m.UNSIGNED_INT : m.UNSIGNED_SHORT, d.wireframe ? (W.setLineWidth(d.wireframeLinewidth * H), a && m.bindBuffer(m.ELEMENT_ARRAY_BUFFER, e.__webglLineBuffer), m.drawElements(m.LINES, e.__webglLineCount, f, 0)) : (a && m.bindBuffer(m.ELEMENT_ARRAY_BUFFER, e.__webglFaceBuffer), m.drawElements(m.TRIANGLES, e.__webglFaceCount, f, 0)), B.info.render.calls++, B.info.render.vertices += e.__webglFaceCount, B.info.render.faces += e.__webglFaceCount / 3) : f instanceof THREE.Line ? (f = f.mode === THREE.LineStrip ? m.LINE_STRIP : m.LINES, W.setLineWidth(d.linewidth * H), m.drawArrays(f, 0, e.__webglLineCount), B.info.render.calls++) : f instanceof THREE.PointCloud && (m.drawArrays(m.POINTS, 0, e.__webglParticleCount), B.info.render.calls++, B.info.render.points += e.__webglParticleCount);
    }
  };

  this.render = function (a, b, c, d) {
    if (!1 === b instanceof THREE.Camera) THREE.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");else {
      var g = a.fog;
      ta = "";
      ub = -1;
      vb = null;
      Ob = !0;
      !0 === a.autoUpdate && a.updateMatrixWorld();
      void 0 === b.parent && b.updateMatrixWorld();
      a.traverse(function (a) {
        a instanceof THREE.SkinnedMesh && a.skeleton.update();
      });
      b.matrixWorldInverse.getInverse(b.matrixWorld);
      db.multiplyMatrices(b.projectionMatrix, b.matrixWorldInverse);
      cb.setFromMatrix(db);
      ca.length = 0;
      Ka.length = 0;
      Qa.length = 0;
      Xa.length = 0;
      Ya.length = 0;
      h(a);
      !0 === B.sortObjects && (Ka.sort(e), Qa.sort(f));
      zc.render(a, b);
      B.info.render.calls = 0;
      B.info.render.vertices = 0;
      B.info.render.faces = 0;
      B.info.render.points = 0;
      this.setRenderTarget(c);
      (this.autoClear || d) && this.clear(this.autoClearColor, this.autoClearDepth, this.autoClearStencil);
      d = 0;

      for (var n = qa.length; d < n; d++) {
        var m = qa[d],
            q = m.object;
        q.visible && (w(q, b), p(m));
      }

      a.overrideMaterial ? (d = a.overrideMaterial, u(d), k(Ka, b, ca, g, d), k(Qa, b, ca, g, d), l(qa, "", b, ca, g, d)) : (W.setBlending(THREE.NoBlending), k(Ka, b, ca, g, null), l(qa, "opaque", b, ca, g, null), k(Qa, b, ca, g, null), l(qa, "transparent", b, ca, g, null));
      Ac.render(a, b);
      Bc.render(a, b, Xb, fc);
      c && c.generateMipmaps && c.minFilter !== THREE.NearestFilter && c.minFilter !== THREE.LinearFilter && F(c);
      W.setDepthTest(!0);
      W.setDepthWrite(!0);
      W.setColorWrite(!0);
    }
  };

  this.renderImmediateObject = function (a, b, c, d, e) {
    var f = v(a, b, c, d, e);
    ta = "";
    B.setMaterialFaces(d);
    e.immediateRenderCallback ? e.immediateRenderCallback(f, m, cb) : e.render(function (a) {
      B.renderBufferImmediate(a, f, d);
    });
  };

  var Ua = {},
      Qb = 0,
      pc = {
    MeshDepthMaterial: "depth",
    MeshNormalMaterial: "normal",
    MeshBasicMaterial: "basic",
    MeshLambertMaterial: "lambert",
    MeshPhongMaterial: "phong",
    LineBasicMaterial: "basic",
    LineDashedMaterial: "dashed",
    PointCloudMaterial: "particle_basic"
  };

  this.setFaceCulling = function (a, b) {
    a === THREE.CullFaceNone ? m.disable(m.CULL_FACE) : (b === THREE.FrontFaceDirectionCW ? m.frontFace(m.CW) : m.frontFace(m.CCW), a === THREE.CullFaceBack ? m.cullFace(m.BACK) : a === THREE.CullFaceFront ? m.cullFace(m.FRONT) : m.cullFace(m.FRONT_AND_BACK), m.enable(m.CULL_FACE));
  };

  this.setMaterialFaces = function (a) {
    W.setDoubleSided(a.side === THREE.DoubleSide);
    W.setFlipSided(a.side === THREE.BackSide);
  };

  this.uploadTexture = function (a) {
    void 0 === a.__webglInit && (a.__webglInit = !0, a.addEventListener("dispose", Pb), a.__webglTexture = m.createTexture(), B.info.memory.textures++);
    m.bindTexture(m.TEXTURE_2D, a.__webglTexture);
    m.pixelStorei(m.UNPACK_FLIP_Y_WEBGL, a.flipY);
    m.pixelStorei(m.UNPACK_PREMULTIPLY_ALPHA_WEBGL, a.premultiplyAlpha);
    m.pixelStorei(m.UNPACK_ALIGNMENT, a.unpackAlignment);
    a.image = E(a.image, tc);
    var b = a.image,
        c = THREE.Math.isPowerOfTwo(b.width) && THREE.Math.isPowerOfTwo(b.height),
        d = I(a.format),
        e = I(a.type);
    A(m.TEXTURE_2D, a, c);
    var f = a.mipmaps;
    if (a instanceof THREE.DataTexture) {
      if (0 < f.length && c) {
        for (var g = 0, h = f.length; g < h; g++) {
          b = f[g], m.texImage2D(m.TEXTURE_2D, g, d, b.width, b.height, 0, d, e, b.data);
        }

        a.generateMipmaps = !1;
      } else m.texImage2D(m.TEXTURE_2D, 0, d, b.width, b.height, 0, d, e, b.data);
    } else if (a instanceof THREE.CompressedTexture) for (g = 0, h = f.length; g < h; g++) {
      b = f[g], a.format !== THREE.RGBAFormat && a.format !== THREE.RGBFormat ? -1 < kc().indexOf(d) ? m.compressedTexImage2D(m.TEXTURE_2D, g, d, b.width, b.height, 0, b.data) : THREE.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : m.texImage2D(m.TEXTURE_2D, g, d, b.width, b.height, 0, d, e, b.data);
    } else if (0 < f.length && c) {
      g = 0;

      for (h = f.length; g < h; g++) {
        b = f[g], m.texImage2D(m.TEXTURE_2D, g, d, d, e, b);
      }

      a.generateMipmaps = !1;
    } else m.texImage2D(m.TEXTURE_2D, 0, d, d, e, a.image);
    a.generateMipmaps && c && m.generateMipmap(m.TEXTURE_2D);
    a.needsUpdate = !1;
    if (a.onUpdate) a.onUpdate();
  };

  this.setTexture = function (a, b) {
    m.activeTexture(m.TEXTURE0 + b);
    a.needsUpdate ? B.uploadTexture(a) : m.bindTexture(m.TEXTURE_2D, a.__webglTexture);
  };

  this.setRenderTarget = function (a) {
    var b = a instanceof THREE.WebGLRenderTargetCube;

    if (a && void 0 === a.__webglFramebuffer) {
      void 0 === a.depthBuffer && (a.depthBuffer = !0);
      void 0 === a.stencilBuffer && (a.stencilBuffer = !0);
      a.addEventListener("dispose", oc);
      a.__webglTexture = m.createTexture();
      B.info.memory.textures++;
      var c = THREE.Math.isPowerOfTwo(a.width) && THREE.Math.isPowerOfTwo(a.height),
          d = I(a.format),
          e = I(a.type);

      if (b) {
        a.__webglFramebuffer = [];
        a.__webglRenderbuffer = [];
        m.bindTexture(m.TEXTURE_CUBE_MAP, a.__webglTexture);
        A(m.TEXTURE_CUBE_MAP, a, c);

        for (var f = 0; 6 > f; f++) {
          a.__webglFramebuffer[f] = m.createFramebuffer();
          a.__webglRenderbuffer[f] = m.createRenderbuffer();
          m.texImage2D(m.TEXTURE_CUBE_MAP_POSITIVE_X + f, 0, d, a.width, a.height, 0, d, e, null);
          var g = a,
              h = m.TEXTURE_CUBE_MAP_POSITIVE_X + f;
          m.bindFramebuffer(m.FRAMEBUFFER, a.__webglFramebuffer[f]);
          m.framebufferTexture2D(m.FRAMEBUFFER, m.COLOR_ATTACHMENT0, h, g.__webglTexture, 0);
          G(a.__webglRenderbuffer[f], a);
        }

        c && m.generateMipmap(m.TEXTURE_CUBE_MAP);
      } else a.__webglFramebuffer = m.createFramebuffer(), a.__webglRenderbuffer = a.shareDepthFrom ? a.shareDepthFrom.__webglRenderbuffer : m.createRenderbuffer(), m.bindTexture(m.TEXTURE_2D, a.__webglTexture), A(m.TEXTURE_2D, a, c), m.texImage2D(m.TEXTURE_2D, 0, d, a.width, a.height, 0, d, e, null), d = m.TEXTURE_2D, m.bindFramebuffer(m.FRAMEBUFFER, a.__webglFramebuffer), m.framebufferTexture2D(m.FRAMEBUFFER, m.COLOR_ATTACHMENT0, d, a.__webglTexture, 0), a.shareDepthFrom ? a.depthBuffer && !a.stencilBuffer ? m.framebufferRenderbuffer(m.FRAMEBUFFER, m.DEPTH_ATTACHMENT, m.RENDERBUFFER, a.__webglRenderbuffer) : a.depthBuffer && a.stencilBuffer && m.framebufferRenderbuffer(m.FRAMEBUFFER, m.DEPTH_STENCIL_ATTACHMENT, m.RENDERBUFFER, a.__webglRenderbuffer) : G(a.__webglRenderbuffer, a), c && m.generateMipmap(m.TEXTURE_2D);

      b ? m.bindTexture(m.TEXTURE_CUBE_MAP, null) : m.bindTexture(m.TEXTURE_2D, null);
      m.bindRenderbuffer(m.RENDERBUFFER, null);
      m.bindFramebuffer(m.FRAMEBUFFER, null);
    }

    a ? (b = b ? a.__webglFramebuffer[a.activeCubeFace] : a.__webglFramebuffer, c = a.width, a = a.height, e = d = 0) : (b = null, c = pb, a = qb, d = ib, e = bb);
    b !== ab && (m.bindFramebuffer(m.FRAMEBUFFER, b), m.viewport(d, e, c, a), ab = b);
    Xb = c;
    fc = a;
  };

  this.readRenderTargetPixels = function (a, b, c, d, e, f) {
    if (!(a instanceof THREE.WebGLRenderTarget)) console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");else if (a.__webglFramebuffer) if (a.format !== THREE.RGBAFormat) console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA format. readPixels can read only RGBA format.");else {
      var g = !1;
      a.__webglFramebuffer !== ab && (m.bindFramebuffer(m.FRAMEBUFFER, a.__webglFramebuffer), g = !0);
      m.checkFramebufferStatus(m.FRAMEBUFFER) === m.FRAMEBUFFER_COMPLETE ? m.readPixels(b, c, d, e, m.RGBA, m.UNSIGNED_BYTE, f) : console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.");
      g && m.bindFramebuffer(m.FRAMEBUFFER, ab);
    }
  };

  this.initMaterial = function () {
    THREE.warn("THREE.WebGLRenderer: .initMaterial() has been removed.");
  };

  this.addPrePlugin = function () {
    THREE.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.");
  };

  this.addPostPlugin = function () {
    THREE.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.");
  };

  this.updateShadowMap = function () {
    THREE.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.");
  };
};

THREE.WebGLRenderTarget = function (a, b, c) {
  this.width = a;
  this.height = b;
  c = c || {};
  this.wrapS = void 0 !== c.wrapS ? c.wrapS : THREE.ClampToEdgeWrapping;
  this.wrapT = void 0 !== c.wrapT ? c.wrapT : THREE.ClampToEdgeWrapping;
  this.magFilter = void 0 !== c.magFilter ? c.magFilter : THREE.LinearFilter;
  this.minFilter = void 0 !== c.minFilter ? c.minFilter : THREE.LinearMipMapLinearFilter;
  this.anisotropy = void 0 !== c.anisotropy ? c.anisotropy : 1;
  this.offset = new THREE.Vector2(0, 0);
  this.repeat = new THREE.Vector2(1, 1);
  this.format = void 0 !== c.format ? c.format : THREE.RGBAFormat;
  this.type = void 0 !== c.type ? c.type : THREE.UnsignedByteType;
  this.depthBuffer = void 0 !== c.depthBuffer ? c.depthBuffer : !0;
  this.stencilBuffer = void 0 !== c.stencilBuffer ? c.stencilBuffer : !0;
  this.generateMipmaps = !0;
  this.shareDepthFrom = void 0 !== c.shareDepthFrom ? c.shareDepthFrom : null;
};

THREE.WebGLRenderTarget.prototype = {
  constructor: THREE.WebGLRenderTarget,
  setSize: function setSize(a, b) {
    this.width = a;
    this.height = b;
  },
  clone: function clone() {
    var a = new THREE.WebGLRenderTarget(this.width, this.height);
    a.wrapS = this.wrapS;
    a.wrapT = this.wrapT;
    a.magFilter = this.magFilter;
    a.minFilter = this.minFilter;
    a.anisotropy = this.anisotropy;
    a.offset.copy(this.offset);
    a.repeat.copy(this.repeat);
    a.format = this.format;
    a.type = this.type;
    a.depthBuffer = this.depthBuffer;
    a.stencilBuffer = this.stencilBuffer;
    a.generateMipmaps = this.generateMipmaps;
    a.shareDepthFrom = this.shareDepthFrom;
    return a;
  },
  dispose: function dispose() {
    this.dispatchEvent({
      type: "dispose"
    });
  }
};
THREE.EventDispatcher.prototype.apply(THREE.WebGLRenderTarget.prototype);

THREE.WebGLRenderTargetCube = function (a, b, c) {
  THREE.WebGLRenderTarget.call(this, a, b, c);
  this.activeCubeFace = 0;
};

THREE.WebGLRenderTargetCube.prototype = Object.create(THREE.WebGLRenderTarget.prototype);
THREE.WebGLRenderTargetCube.prototype.constructor = THREE.WebGLRenderTargetCube;

THREE.WebGLExtensions = function (a) {
  var b = {};

  this.get = function (c) {
    if (void 0 !== b[c]) return b[c];
    var d;

    switch (c) {
      case "EXT_texture_filter_anisotropic":
        d = a.getExtension("EXT_texture_filter_anisotropic") || a.getExtension("MOZ_EXT_texture_filter_anisotropic") || a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
        break;

      case "WEBGL_compressed_texture_s3tc":
        d = a.getExtension("WEBGL_compressed_texture_s3tc") || a.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
        break;

      case "WEBGL_compressed_texture_pvrtc":
        d = a.getExtension("WEBGL_compressed_texture_pvrtc") || a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
        break;

      default:
        d = a.getExtension(c);
    }

    null === d && THREE.warn("THREE.WebGLRenderer: " + c + " extension not supported.");
    return b[c] = d;
  };
};

THREE.WebGLProgram = function () {
  var a = 0;
  return function (b, c, d, e) {
    var f = b.context,
        g = d.defines,
        h = d.__webglShader.uniforms,
        k = d.attributes,
        l = d.__webglShader.vertexShader,
        p = d.__webglShader.fragmentShader,
        q = d.index0AttributeName;
    void 0 === q && !0 === e.morphTargets && (q = "position");
    var n = "SHADOWMAP_TYPE_BASIC";
    e.shadowMapType === THREE.PCFShadowMap ? n = "SHADOWMAP_TYPE_PCF" : e.shadowMapType === THREE.PCFSoftShadowMap && (n = "SHADOWMAP_TYPE_PCF_SOFT");
    var t = "ENVMAP_TYPE_CUBE",
        r = "ENVMAP_MODE_REFLECTION",
        s = "ENVMAP_BLENDING_MULTIPLY";

    if (e.envMap) {
      switch (d.envMap.mapping) {
        case THREE.CubeReflectionMapping:
        case THREE.CubeRefractionMapping:
          t = "ENVMAP_TYPE_CUBE";
          break;

        case THREE.EquirectangularReflectionMapping:
        case THREE.EquirectangularRefractionMapping:
          t = "ENVMAP_TYPE_EQUIREC";
          break;

        case THREE.SphericalReflectionMapping:
          t = "ENVMAP_TYPE_SPHERE";
      }

      switch (d.envMap.mapping) {
        case THREE.CubeRefractionMapping:
        case THREE.EquirectangularRefractionMapping:
          r = "ENVMAP_MODE_REFRACTION";
      }

      switch (d.combine) {
        case THREE.MultiplyOperation:
          s = "ENVMAP_BLENDING_MULTIPLY";
          break;

        case THREE.MixOperation:
          s = "ENVMAP_BLENDING_MIX";
          break;

        case THREE.AddOperation:
          s = "ENVMAP_BLENDING_ADD";
      }
    }

    var u = 0 < b.gammaFactor ? b.gammaFactor : 1,
        v,
        x;
    v = [];

    for (var D in g) {
      x = g[D], !1 !== x && (x = "#define " + D + " " + x, v.push(x));
    }

    v = v.join("\n");
    g = f.createProgram();
    d instanceof THREE.RawShaderMaterial ? b = d = "" : (d = ["precision " + e.precision + " float;", "precision " + e.precision + " int;", v, e.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "", b.gammaInput ? "#define GAMMA_INPUT" : "", b.gammaOutput ? "#define GAMMA_OUTPUT" : "", "#define GAMMA_FACTOR " + u, "#define MAX_DIR_LIGHTS " + e.maxDirLights, "#define MAX_POINT_LIGHTS " + e.maxPointLights, "#define MAX_SPOT_LIGHTS " + e.maxSpotLights, "#define MAX_HEMI_LIGHTS " + e.maxHemiLights, "#define MAX_SHADOWS " + e.maxShadows, "#define MAX_BONES " + e.maxBones, e.map ? "#define USE_MAP" : "", e.envMap ? "#define USE_ENVMAP" : "", e.envMap ? "#define " + r : "", e.lightMap ? "#define USE_LIGHTMAP" : "", e.bumpMap ? "#define USE_BUMPMAP" : "", e.normalMap ? "#define USE_NORMALMAP" : "", e.specularMap ? "#define USE_SPECULARMAP" : "", e.alphaMap ? "#define USE_ALPHAMAP" : "", e.vertexColors ? "#define USE_COLOR" : "", e.flatShading ? "#define FLAT_SHADED" : "", e.skinning ? "#define USE_SKINNING" : "", e.useVertexTexture ? "#define BONE_TEXTURE" : "", e.morphTargets ? "#define USE_MORPHTARGETS" : "", e.morphNormals ? "#define USE_MORPHNORMALS" : "", e.wrapAround ? "#define WRAP_AROUND" : "", e.doubleSided ? "#define DOUBLE_SIDED" : "", e.flipSided ? "#define FLIP_SIDED" : "", e.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", e.shadowMapEnabled ? "#define " + n : "", e.shadowMapDebug ? "#define SHADOWMAP_DEBUG" : "", e.shadowMapCascade ? "#define SHADOWMAP_CASCADE" : "", e.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", e.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", "uniform mat4 modelMatrix;\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat4 viewMatrix;\nuniform mat3 normalMatrix;\nuniform vec3 cameraPosition;\nattribute vec3 position;\nattribute vec3 normal;\nattribute vec2 uv;\nattribute vec2 uv2;\n#ifdef USE_COLOR\n\tattribute vec3 color;\n#endif\n#ifdef USE_MORPHTARGETS\n\tattribute vec3 morphTarget0;\n\tattribute vec3 morphTarget1;\n\tattribute vec3 morphTarget2;\n\tattribute vec3 morphTarget3;\n\t#ifdef USE_MORPHNORMALS\n\t\tattribute vec3 morphNormal0;\n\t\tattribute vec3 morphNormal1;\n\t\tattribute vec3 morphNormal2;\n\t\tattribute vec3 morphNormal3;\n\t#else\n\t\tattribute vec3 morphTarget4;\n\t\tattribute vec3 morphTarget5;\n\t\tattribute vec3 morphTarget6;\n\t\tattribute vec3 morphTarget7;\n\t#endif\n#endif\n#ifdef USE_SKINNING\n\tattribute vec4 skinIndex;\n\tattribute vec4 skinWeight;\n#endif\n"].join("\n"), b = ["precision " + e.precision + " float;", "precision " + e.precision + " int;", e.bumpMap || e.normalMap || e.flatShading ? "#extension GL_OES_standard_derivatives : enable" : "", v, "#define MAX_DIR_LIGHTS " + e.maxDirLights, "#define MAX_POINT_LIGHTS " + e.maxPointLights, "#define MAX_SPOT_LIGHTS " + e.maxSpotLights, "#define MAX_HEMI_LIGHTS " + e.maxHemiLights, "#define MAX_SHADOWS " + e.maxShadows, e.alphaTest ? "#define ALPHATEST " + e.alphaTest : "", b.gammaInput ? "#define GAMMA_INPUT" : "", b.gammaOutput ? "#define GAMMA_OUTPUT" : "", "#define GAMMA_FACTOR " + u, e.useFog && e.fog ? "#define USE_FOG" : "", e.useFog && e.fogExp ? "#define FOG_EXP2" : "", e.map ? "#define USE_MAP" : "", e.envMap ? "#define USE_ENVMAP" : "", e.envMap ? "#define " + t : "", e.envMap ? "#define " + r : "", e.envMap ? "#define " + s : "", e.lightMap ? "#define USE_LIGHTMAP" : "", e.bumpMap ? "#define USE_BUMPMAP" : "", e.normalMap ? "#define USE_NORMALMAP" : "", e.specularMap ? "#define USE_SPECULARMAP" : "", e.alphaMap ? "#define USE_ALPHAMAP" : "", e.vertexColors ? "#define USE_COLOR" : "", e.flatShading ? "#define FLAT_SHADED" : "", e.metal ? "#define METAL" : "", e.wrapAround ? "#define WRAP_AROUND" : "", e.doubleSided ? "#define DOUBLE_SIDED" : "", e.flipSided ? "#define FLIP_SIDED" : "", e.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", e.shadowMapEnabled ? "#define " + n : "", e.shadowMapDebug ? "#define SHADOWMAP_DEBUG" : "", e.shadowMapCascade ? "#define SHADOWMAP_CASCADE" : "", e.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", "uniform mat4 viewMatrix;\nuniform vec3 cameraPosition;\n"].join("\n"));
    l = new THREE.WebGLShader(f, f.VERTEX_SHADER, d + l);
    p = new THREE.WebGLShader(f, f.FRAGMENT_SHADER, b + p);
    f.attachShader(g, l);
    f.attachShader(g, p);
    void 0 !== q && f.bindAttribLocation(g, 0, q);
    f.linkProgram(g);
    q = f.getProgramInfoLog(g);
    !1 === f.getProgramParameter(g, f.LINK_STATUS) && THREE.error("THREE.WebGLProgram: shader error: " + f.getError(), "gl.VALIDATE_STATUS", f.getProgramParameter(g, f.VALIDATE_STATUS), "gl.getPRogramInfoLog", q);
    "" !== q && THREE.warn("THREE.WebGLProgram: gl.getProgramInfoLog()" + q);
    f.deleteShader(l);
    f.deleteShader(p);
    q = "viewMatrix modelViewMatrix projectionMatrix normalMatrix modelMatrix cameraPosition morphTargetInfluences bindMatrix bindMatrixInverse".split(" ");
    e.useVertexTexture ? (q.push("boneTexture"), q.push("boneTextureWidth"), q.push("boneTextureHeight")) : q.push("boneGlobalMatrices");
    e.logarithmicDepthBuffer && q.push("logDepthBufFC");

    for (var w in h) {
      q.push(w);
    }

    h = q;
    w = {};
    q = 0;

    for (b = h.length; q < b; q++) {
      n = h[q], w[n] = f.getUniformLocation(g, n);
    }

    this.uniforms = w;
    q = "position normal uv uv2 tangent color skinIndex skinWeight lineDistance".split(" ");

    for (h = 0; h < e.maxMorphTargets; h++) {
      q.push("morphTarget" + h);
    }

    for (h = 0; h < e.maxMorphNormals; h++) {
      q.push("morphNormal" + h);
    }

    for (var y in k) {
      q.push(y);
    }

    e = q;
    k = {};
    y = 0;

    for (h = e.length; y < h; y++) {
      w = e[y], k[w] = f.getAttribLocation(g, w);
    }

    this.attributes = k;
    this.attributesKeys = Object.keys(this.attributes);
    this.id = a++;
    this.code = c;
    this.usedTimes = 1;
    this.program = g;
    this.vertexShader = l;
    this.fragmentShader = p;
    return this;
  };
}();

THREE.WebGLShader = function () {
  var a = function a(_a) {
    _a = _a.split("\n");

    for (var c = 0; c < _a.length; c++) {
      _a[c] = c + 1 + ": " + _a[c];
    }

    return _a.join("\n");
  };

  return function (b, c, d) {
    c = b.createShader(c);
    b.shaderSource(c, d);
    b.compileShader(c);
    !1 === b.getShaderParameter(c, b.COMPILE_STATUS) && THREE.error("THREE.WebGLShader: Shader couldn't compile.");
    "" !== b.getShaderInfoLog(c) && THREE.warn("THREE.WebGLShader: gl.getShaderInfoLog()", b.getShaderInfoLog(c), a(d));
    return c;
  };
}();

THREE.WebGLState = function (a, b) {
  var c = new Uint8Array(16),
      d = new Uint8Array(16),
      e = null,
      f = null,
      g = null,
      h = null,
      k = null,
      l = null,
      p = null,
      q = null,
      n = null,
      t = null,
      r = null,
      s = null,
      u = null,
      v = null,
      x = null,
      D = null;

  this.initAttributes = function () {
    for (var a = 0, b = c.length; a < b; a++) {
      c[a] = 0;
    }
  };

  this.enableAttribute = function (b) {
    c[b] = 1;
    0 === d[b] && (a.enableVertexAttribArray(b), d[b] = 1);
  };

  this.disableUnusedAttributes = function () {
    for (var b = 0, e = d.length; b < e; b++) {
      d[b] !== c[b] && (a.disableVertexAttribArray(b), d[b] = 0);
    }
  };

  this.setBlending = function (c, d, n, q, r, s, t) {
    c !== e && (c === THREE.NoBlending ? a.disable(a.BLEND) : c === THREE.AdditiveBlending ? (a.enable(a.BLEND), a.blendEquation(a.FUNC_ADD), a.blendFunc(a.SRC_ALPHA, a.ONE)) : c === THREE.SubtractiveBlending ? (a.enable(a.BLEND), a.blendEquation(a.FUNC_ADD), a.blendFunc(a.ZERO, a.ONE_MINUS_SRC_COLOR)) : c === THREE.MultiplyBlending ? (a.enable(a.BLEND), a.blendEquation(a.FUNC_ADD), a.blendFunc(a.ZERO, a.SRC_COLOR)) : c === THREE.CustomBlending ? a.enable(a.BLEND) : (a.enable(a.BLEND), a.blendEquationSeparate(a.FUNC_ADD, a.FUNC_ADD), a.blendFuncSeparate(a.SRC_ALPHA, a.ONE_MINUS_SRC_ALPHA, a.ONE, a.ONE_MINUS_SRC_ALPHA)), e = c);

    if (c === THREE.CustomBlending) {
      r = r || d;
      s = s || n;
      t = t || q;
      if (d !== f || r !== k) a.blendEquationSeparate(b(d), b(r)), f = d, k = r;
      if (n !== g || q !== h || s !== l || t !== p) a.blendFuncSeparate(b(n), b(q), b(s), b(t)), g = n, h = q, l = s, p = t;
    } else p = l = k = h = g = f = null;
  };

  this.setDepthTest = function (b) {
    q !== b && (b ? a.enable(a.DEPTH_TEST) : a.disable(a.DEPTH_TEST), q = b);
  };

  this.setDepthWrite = function (b) {
    n !== b && (a.depthMask(b), n = b);
  };

  this.setColorWrite = function (b) {
    t !== b && (a.colorMask(b, b, b, b), t = b);
  };

  this.setDoubleSided = function (b) {
    r !== b && (b ? a.disable(a.CULL_FACE) : a.enable(a.CULL_FACE), r = b);
  };

  this.setFlipSided = function (b) {
    s !== b && (b ? a.frontFace(a.CW) : a.frontFace(a.CCW), s = b);
  };

  this.setLineWidth = function (b) {
    b !== u && (a.lineWidth(b), u = b);
  };

  this.setPolygonOffset = function (b, c, d) {
    v !== b && (b ? a.enable(a.POLYGON_OFFSET_FILL) : a.disable(a.POLYGON_OFFSET_FILL), v = b);
    !b || x === c && D === d || (a.polygonOffset(c, d), x = c, D = d);
  };

  this.reset = function () {
    for (var a = 0; a < d.length; a++) {
      d[a] = 0;
    }

    s = r = t = n = q = e = null;
  };
};

THREE.LensFlarePlugin = function (a, b) {
  var c,
      d,
      e,
      f,
      g,
      h,
      k,
      l,
      p,
      q,
      n = a.context,
      t,
      r,
      s,
      u,
      v,
      x;

  this.render = function (D, w, y, A) {
    if (0 !== b.length) {
      D = new THREE.Vector3();
      var E = A / y,
          G = .5 * y,
          F = .5 * A,
          z = 16 / A,
          I = new THREE.Vector2(z * E, z),
          U = new THREE.Vector3(1, 1, 0),
          M = new THREE.Vector2(1, 1);

      if (void 0 === s) {
        var z = new Float32Array([-1, -1, 0, 0, 1, -1, 1, 0, 1, 1, 1, 1, -1, 1, 0, 1]),
            H = new Uint16Array([0, 1, 2, 0, 2, 3]);
        t = n.createBuffer();
        r = n.createBuffer();
        n.bindBuffer(n.ARRAY_BUFFER, t);
        n.bufferData(n.ARRAY_BUFFER, z, n.STATIC_DRAW);
        n.bindBuffer(n.ELEMENT_ARRAY_BUFFER, r);
        n.bufferData(n.ELEMENT_ARRAY_BUFFER, H, n.STATIC_DRAW);
        v = n.createTexture();
        x = n.createTexture();
        n.bindTexture(n.TEXTURE_2D, v);
        n.texImage2D(n.TEXTURE_2D, 0, n.RGB, 16, 16, 0, n.RGB, n.UNSIGNED_BYTE, null);
        n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_S, n.CLAMP_TO_EDGE);
        n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_T, n.CLAMP_TO_EDGE);
        n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MAG_FILTER, n.NEAREST);
        n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MIN_FILTER, n.NEAREST);
        n.bindTexture(n.TEXTURE_2D, x);
        n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, 16, 16, 0, n.RGBA, n.UNSIGNED_BYTE, null);
        n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_S, n.CLAMP_TO_EDGE);
        n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_T, n.CLAMP_TO_EDGE);
        n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MAG_FILTER, n.NEAREST);
        n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MIN_FILTER, n.NEAREST);
        var z = (u = 0 < n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS)) ? {
          vertexShader: "uniform lowp int renderType;\nuniform vec3 screenPosition;\nuniform vec2 scale;\nuniform float rotation;\nuniform sampler2D occlusionMap;\nattribute vec2 position;\nattribute vec2 uv;\nvarying vec2 vUV;\nvarying float vVisibility;\nvoid main() {\nvUV = uv;\nvec2 pos = position;\nif( renderType == 2 ) {\nvec4 visibility = texture2D( occlusionMap, vec2( 0.1, 0.1 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.5, 0.1 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.9, 0.1 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.9, 0.9 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.1, 0.9 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.5, 0.5 ) );\nvVisibility =        visibility.r / 9.0;\nvVisibility *= 1.0 - visibility.g / 9.0;\nvVisibility *=       visibility.b / 9.0;\nvVisibility *= 1.0 - visibility.a / 9.0;\npos.x = cos( rotation ) * position.x - sin( rotation ) * position.y;\npos.y = sin( rotation ) * position.x + cos( rotation ) * position.y;\n}\ngl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );\n}",
          fragmentShader: "uniform lowp int renderType;\nuniform sampler2D map;\nuniform float opacity;\nuniform vec3 color;\nvarying vec2 vUV;\nvarying float vVisibility;\nvoid main() {\nif( renderType == 0 ) {\ngl_FragColor = vec4( 1.0, 0.0, 1.0, 0.0 );\n} else if( renderType == 1 ) {\ngl_FragColor = texture2D( map, vUV );\n} else {\nvec4 texture = texture2D( map, vUV );\ntexture.a *= opacity * vVisibility;\ngl_FragColor = texture;\ngl_FragColor.rgb *= color;\n}\n}"
        } : {
          vertexShader: "uniform lowp int renderType;\nuniform vec3 screenPosition;\nuniform vec2 scale;\nuniform float rotation;\nattribute vec2 position;\nattribute vec2 uv;\nvarying vec2 vUV;\nvoid main() {\nvUV = uv;\nvec2 pos = position;\nif( renderType == 2 ) {\npos.x = cos( rotation ) * position.x - sin( rotation ) * position.y;\npos.y = sin( rotation ) * position.x + cos( rotation ) * position.y;\n}\ngl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );\n}",
          fragmentShader: "precision mediump float;\nuniform lowp int renderType;\nuniform sampler2D map;\nuniform sampler2D occlusionMap;\nuniform float opacity;\nuniform vec3 color;\nvarying vec2 vUV;\nvoid main() {\nif( renderType == 0 ) {\ngl_FragColor = vec4( texture2D( map, vUV ).rgb, 0.0 );\n} else if( renderType == 1 ) {\ngl_FragColor = texture2D( map, vUV );\n} else {\nfloat visibility = texture2D( occlusionMap, vec2( 0.5, 0.1 ) ).a;\nvisibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) ).a;\nvisibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) ).a;\nvisibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) ).a;\nvisibility = ( 1.0 - visibility / 4.0 );\nvec4 texture = texture2D( map, vUV );\ntexture.a *= opacity * visibility;\ngl_FragColor = texture;\ngl_FragColor.rgb *= color;\n}\n}"
        },
            H = n.createProgram(),
            L = n.createShader(n.FRAGMENT_SHADER),
            P = n.createShader(n.VERTEX_SHADER),
            N = "precision " + a.getPrecision() + " float;\n";
        n.shaderSource(L, N + z.fragmentShader);
        n.shaderSource(P, N + z.vertexShader);
        n.compileShader(L);
        n.compileShader(P);
        n.attachShader(H, L);
        n.attachShader(H, P);
        n.linkProgram(H);
        s = H;
        p = n.getAttribLocation(s, "position");
        q = n.getAttribLocation(s, "uv");
        c = n.getUniformLocation(s, "renderType");
        d = n.getUniformLocation(s, "map");
        e = n.getUniformLocation(s, "occlusionMap");
        f = n.getUniformLocation(s, "opacity");
        g = n.getUniformLocation(s, "color");
        h = n.getUniformLocation(s, "scale");
        k = n.getUniformLocation(s, "rotation");
        l = n.getUniformLocation(s, "screenPosition");
      }

      n.useProgram(s);
      n.enableVertexAttribArray(p);
      n.enableVertexAttribArray(q);
      n.uniform1i(e, 0);
      n.uniform1i(d, 1);
      n.bindBuffer(n.ARRAY_BUFFER, t);
      n.vertexAttribPointer(p, 2, n.FLOAT, !1, 16, 0);
      n.vertexAttribPointer(q, 2, n.FLOAT, !1, 16, 8);
      n.bindBuffer(n.ELEMENT_ARRAY_BUFFER, r);
      n.disable(n.CULL_FACE);
      n.depthMask(!1);
      H = 0;

      for (L = b.length; H < L; H++) {
        if (z = 16 / A, I.set(z * E, z), P = b[H], D.set(P.matrixWorld.elements[12], P.matrixWorld.elements[13], P.matrixWorld.elements[14]), D.applyMatrix4(w.matrixWorldInverse), D.applyProjection(w.projectionMatrix), U.copy(D), M.x = U.x * G + G, M.y = U.y * F + F, u || 0 < M.x && M.x < y && 0 < M.y && M.y < A) {
          n.activeTexture(n.TEXTURE1);
          n.bindTexture(n.TEXTURE_2D, v);
          n.copyTexImage2D(n.TEXTURE_2D, 0, n.RGB, M.x - 8, M.y - 8, 16, 16, 0);
          n.uniform1i(c, 0);
          n.uniform2f(h, I.x, I.y);
          n.uniform3f(l, U.x, U.y, U.z);
          n.disable(n.BLEND);
          n.enable(n.DEPTH_TEST);
          n.drawElements(n.TRIANGLES, 6, n.UNSIGNED_SHORT, 0);
          n.activeTexture(n.TEXTURE0);
          n.bindTexture(n.TEXTURE_2D, x);
          n.copyTexImage2D(n.TEXTURE_2D, 0, n.RGBA, M.x - 8, M.y - 8, 16, 16, 0);
          n.uniform1i(c, 1);
          n.disable(n.DEPTH_TEST);
          n.activeTexture(n.TEXTURE1);
          n.bindTexture(n.TEXTURE_2D, v);
          n.drawElements(n.TRIANGLES, 6, n.UNSIGNED_SHORT, 0);
          P.positionScreen.copy(U);
          P.customUpdateCallback ? P.customUpdateCallback(P) : P.updateLensFlares();
          n.uniform1i(c, 2);
          n.enable(n.BLEND);

          for (var N = 0, R = P.lensFlares.length; N < R; N++) {
            var V = P.lensFlares[N];
            .001 < V.opacity && .001 < V.scale && (U.x = V.x, U.y = V.y, U.z = V.z, z = V.size * V.scale / A, I.x = z * E, I.y = z, n.uniform3f(l, U.x, U.y, U.z), n.uniform2f(h, I.x, I.y), n.uniform1f(k, V.rotation), n.uniform1f(f, V.opacity), n.uniform3f(g, V.color.r, V.color.g, V.color.b), a.state.setBlending(V.blending, V.blendEquation, V.blendSrc, V.blendDst), a.setTexture(V.texture, 1), n.drawElements(n.TRIANGLES, 6, n.UNSIGNED_SHORT, 0));
          }
        }
      }

      n.enable(n.CULL_FACE);
      n.enable(n.DEPTH_TEST);
      n.depthMask(!0);
      a.resetGLState();
    }
  };
};

THREE.ShadowMapPlugin = function (a, b, c, d) {
  function e(a, b, d) {
    if (b.visible) {
      var f = c[b.id];
      if (f && b.castShadow && (!1 === b.frustumCulled || !0 === p.intersectsObject(b))) for (var g = 0, h = f.length; g < h; g++) {
        var k = f[g];

        b._modelViewMatrix.multiplyMatrices(d.matrixWorldInverse, b.matrixWorld);

        s.push(k);
      }
      g = 0;

      for (h = b.children.length; g < h; g++) {
        e(a, b.children[g], d);
      }
    }
  }

  var f = a.context,
      g,
      h,
      k,
      l,
      p = new THREE.Frustum(),
      q = new THREE.Matrix4(),
      n = new THREE.Vector3(),
      t = new THREE.Vector3(),
      r = new THREE.Vector3(),
      s = [],
      u = THREE.ShaderLib.depthRGBA,
      v = THREE.UniformsUtils.clone(u.uniforms);
  g = new THREE.ShaderMaterial({
    uniforms: v,
    vertexShader: u.vertexShader,
    fragmentShader: u.fragmentShader
  });
  h = new THREE.ShaderMaterial({
    uniforms: v,
    vertexShader: u.vertexShader,
    fragmentShader: u.fragmentShader,
    morphTargets: !0
  });
  k = new THREE.ShaderMaterial({
    uniforms: v,
    vertexShader: u.vertexShader,
    fragmentShader: u.fragmentShader,
    skinning: !0
  });
  l = new THREE.ShaderMaterial({
    uniforms: v,
    vertexShader: u.vertexShader,
    fragmentShader: u.fragmentShader,
    morphTargets: !0,
    skinning: !0
  });
  g._shadowPass = !0;
  h._shadowPass = !0;
  k._shadowPass = !0;
  l._shadowPass = !0;

  this.render = function (c, v) {
    if (!1 !== a.shadowMapEnabled) {
      var u,
          y,
          A,
          E,
          G,
          F,
          z,
          I,
          U = [];
      E = 0;
      f.clearColor(1, 1, 1, 1);
      f.disable(f.BLEND);
      f.enable(f.CULL_FACE);
      f.frontFace(f.CCW);
      a.shadowMapCullFace === THREE.CullFaceFront ? f.cullFace(f.FRONT) : f.cullFace(f.BACK);
      a.state.setDepthTest(!0);
      u = 0;

      for (y = b.length; u < y; u++) {
        if (A = b[u], A.castShadow) if (A instanceof THREE.DirectionalLight && A.shadowCascade) for (G = 0; G < A.shadowCascadeCount; G++) {
          var M;
          if (A.shadowCascadeArray[G]) M = A.shadowCascadeArray[G];else {
            z = A;
            var H = G;
            M = new THREE.DirectionalLight();
            M.isVirtual = !0;
            M.onlyShadow = !0;
            M.castShadow = !0;
            M.shadowCameraNear = z.shadowCameraNear;
            M.shadowCameraFar = z.shadowCameraFar;
            M.shadowCameraLeft = z.shadowCameraLeft;
            M.shadowCameraRight = z.shadowCameraRight;
            M.shadowCameraBottom = z.shadowCameraBottom;
            M.shadowCameraTop = z.shadowCameraTop;
            M.shadowCameraVisible = z.shadowCameraVisible;
            M.shadowDarkness = z.shadowDarkness;
            M.shadowBias = z.shadowCascadeBias[H];
            M.shadowMapWidth = z.shadowCascadeWidth[H];
            M.shadowMapHeight = z.shadowCascadeHeight[H];
            M.pointsWorld = [];
            M.pointsFrustum = [];
            I = M.pointsWorld;
            F = M.pointsFrustum;

            for (var L = 0; 8 > L; L++) {
              I[L] = new THREE.Vector3(), F[L] = new THREE.Vector3();
            }

            I = z.shadowCascadeNearZ[H];
            z = z.shadowCascadeFarZ[H];
            F[0].set(-1, -1, I);
            F[1].set(1, -1, I);
            F[2].set(-1, 1, I);
            F[3].set(1, 1, I);
            F[4].set(-1, -1, z);
            F[5].set(1, -1, z);
            F[6].set(-1, 1, z);
            F[7].set(1, 1, z);
            M.originalCamera = v;
            F = new THREE.Gyroscope();
            F.position.copy(A.shadowCascadeOffset);
            F.add(M);
            F.add(M.target);
            v.add(F);
            A.shadowCascadeArray[G] = M;
          }
          H = A;
          I = G;
          z = H.shadowCascadeArray[I];
          z.position.copy(H.position);
          z.target.position.copy(H.target.position);
          z.lookAt(z.target);
          z.shadowCameraVisible = H.shadowCameraVisible;
          z.shadowDarkness = H.shadowDarkness;
          z.shadowBias = H.shadowCascadeBias[I];
          F = H.shadowCascadeNearZ[I];
          H = H.shadowCascadeFarZ[I];
          z = z.pointsFrustum;
          z[0].z = F;
          z[1].z = F;
          z[2].z = F;
          z[3].z = F;
          z[4].z = H;
          z[5].z = H;
          z[6].z = H;
          z[7].z = H;
          U[E] = M;
          E++;
        } else U[E] = A, E++;
      }

      u = 0;

      for (y = U.length; u < y; u++) {
        A = U[u];
        A.shadowMap || (G = THREE.LinearFilter, a.shadowMapType === THREE.PCFSoftShadowMap && (G = THREE.NearestFilter), A.shadowMap = new THREE.WebGLRenderTarget(A.shadowMapWidth, A.shadowMapHeight, {
          minFilter: G,
          magFilter: G,
          format: THREE.RGBAFormat
        }), A.shadowMapSize = new THREE.Vector2(A.shadowMapWidth, A.shadowMapHeight), A.shadowMatrix = new THREE.Matrix4());

        if (!A.shadowCamera) {
          if (A instanceof THREE.SpotLight) A.shadowCamera = new THREE.PerspectiveCamera(A.shadowCameraFov, A.shadowMapWidth / A.shadowMapHeight, A.shadowCameraNear, A.shadowCameraFar);else if (A instanceof THREE.DirectionalLight) A.shadowCamera = new THREE.OrthographicCamera(A.shadowCameraLeft, A.shadowCameraRight, A.shadowCameraTop, A.shadowCameraBottom, A.shadowCameraNear, A.shadowCameraFar);else {
            THREE.error("THREE.ShadowMapPlugin: Unsupported light type for shadow", A);
            continue;
          }
          c.add(A.shadowCamera);
          !0 === c.autoUpdate && c.updateMatrixWorld();
        }

        A.shadowCameraVisible && !A.cameraHelper && (A.cameraHelper = new THREE.CameraHelper(A.shadowCamera), c.add(A.cameraHelper));

        if (A.isVirtual && M.originalCamera == v) {
          G = v;
          E = A.shadowCamera;
          F = A.pointsFrustum;
          z = A.pointsWorld;
          n.set(Infinity, Infinity, Infinity);
          t.set(-Infinity, -Infinity, -Infinity);

          for (H = 0; 8 > H; H++) {
            I = z[H], I.copy(F[H]), I.unproject(G), I.applyMatrix4(E.matrixWorldInverse), I.x < n.x && (n.x = I.x), I.x > t.x && (t.x = I.x), I.y < n.y && (n.y = I.y), I.y > t.y && (t.y = I.y), I.z < n.z && (n.z = I.z), I.z > t.z && (t.z = I.z);
          }

          E.left = n.x;
          E.right = t.x;
          E.top = t.y;
          E.bottom = n.y;
          E.updateProjectionMatrix();
        }

        E = A.shadowMap;
        F = A.shadowMatrix;
        G = A.shadowCamera;
        G.position.setFromMatrixPosition(A.matrixWorld);
        r.setFromMatrixPosition(A.target.matrixWorld);
        G.lookAt(r);
        G.updateMatrixWorld();
        G.matrixWorldInverse.getInverse(G.matrixWorld);
        A.cameraHelper && (A.cameraHelper.visible = A.shadowCameraVisible);
        A.shadowCameraVisible && A.cameraHelper.update();
        F.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5, 0, 0, 0, 1);
        F.multiply(G.projectionMatrix);
        F.multiply(G.matrixWorldInverse);
        q.multiplyMatrices(G.projectionMatrix, G.matrixWorldInverse);
        p.setFromMatrix(q);
        a.setRenderTarget(E);
        a.clear();
        s.length = 0;
        e(c, c, G);
        A = 0;

        for (E = s.length; A < E; A++) {
          z = s[A], F = z.object, z = z.buffer, H = F.material instanceof THREE.MeshFaceMaterial ? F.material.materials[0] : F.material, I = void 0 !== F.geometry.morphTargets && 0 < F.geometry.morphTargets.length && H.morphTargets, L = F instanceof THREE.SkinnedMesh && H.skinning, I = F.customDepthMaterial ? F.customDepthMaterial : L ? I ? l : k : I ? h : g, a.setMaterialFaces(H), z instanceof THREE.BufferGeometry ? a.renderBufferDirect(G, b, null, I, z, F) : a.renderBuffer(G, b, null, I, z, F);
        }

        A = 0;

        for (E = d.length; A < E; A++) {
          z = d[A], F = z.object, F.visible && F.castShadow && (F._modelViewMatrix.multiplyMatrices(G.matrixWorldInverse, F.matrixWorld), a.renderImmediateObject(G, b, null, g, F));
        }
      }

      u = a.getClearColor();
      y = a.getClearAlpha();
      f.clearColor(u.r, u.g, u.b, y);
      f.enable(f.BLEND);
      a.shadowMapCullFace === THREE.CullFaceFront && f.cullFace(f.BACK);
      a.resetGLState();
    }
  };
};

THREE.SpritePlugin = function (a, b) {
  var c, d, e, f, g, h, k, l, p, q, n, t, r, s, u, v, x;

  function D(a, b) {
    return a.z !== b.z ? b.z - a.z : b.id - a.id;
  }

  var w = a.context,
      y,
      A,
      E,
      G,
      F = new THREE.Vector3(),
      z = new THREE.Quaternion(),
      I = new THREE.Vector3();

  this.render = function (U, M) {
    if (0 !== b.length) {
      if (void 0 === E) {
        var H = new Float32Array([-.5, -.5, 0, 0, .5, -.5, 1, 0, .5, .5, 1, 1, -.5, .5, 0, 1]),
            L = new Uint16Array([0, 1, 2, 0, 2, 3]);
        y = w.createBuffer();
        A = w.createBuffer();
        w.bindBuffer(w.ARRAY_BUFFER, y);
        w.bufferData(w.ARRAY_BUFFER, H, w.STATIC_DRAW);
        w.bindBuffer(w.ELEMENT_ARRAY_BUFFER, A);
        w.bufferData(w.ELEMENT_ARRAY_BUFFER, L, w.STATIC_DRAW);
        var H = w.createProgram(),
            L = w.createShader(w.VERTEX_SHADER),
            P = w.createShader(w.FRAGMENT_SHADER);
        w.shaderSource(L, ["precision " + a.getPrecision() + " float;", "uniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform float rotation;\nuniform vec2 scale;\nuniform vec2 uvOffset;\nuniform vec2 uvScale;\nattribute vec2 position;\nattribute vec2 uv;\nvarying vec2 vUV;\nvoid main() {\nvUV = uvOffset + uv * uvScale;\nvec2 alignedPosition = position * scale;\nvec2 rotatedPosition;\nrotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\nrotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\nvec4 finalPosition;\nfinalPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\nfinalPosition.xy += rotatedPosition;\nfinalPosition = projectionMatrix * finalPosition;\ngl_Position = finalPosition;\n}"].join("\n"));
        w.shaderSource(P, ["precision " + a.getPrecision() + " float;", "uniform vec3 color;\nuniform sampler2D map;\nuniform float opacity;\nuniform int fogType;\nuniform vec3 fogColor;\nuniform float fogDensity;\nuniform float fogNear;\nuniform float fogFar;\nuniform float alphaTest;\nvarying vec2 vUV;\nvoid main() {\nvec4 texture = texture2D( map, vUV );\nif ( texture.a < alphaTest ) discard;\ngl_FragColor = vec4( color * texture.xyz, texture.a * opacity );\nif ( fogType > 0 ) {\nfloat depth = gl_FragCoord.z / gl_FragCoord.w;\nfloat fogFactor = 0.0;\nif ( fogType == 1 ) {\nfogFactor = smoothstep( fogNear, fogFar, depth );\n} else {\nconst float LOG2 = 1.442695;\nfloat fogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );\nfogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );\n}\ngl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );\n}\n}"].join("\n"));
        w.compileShader(L);
        w.compileShader(P);
        w.attachShader(H, L);
        w.attachShader(H, P);
        w.linkProgram(H);
        E = H;
        v = w.getAttribLocation(E, "position");
        x = w.getAttribLocation(E, "uv");
        c = w.getUniformLocation(E, "uvOffset");
        d = w.getUniformLocation(E, "uvScale");
        e = w.getUniformLocation(E, "rotation");
        f = w.getUniformLocation(E, "scale");
        g = w.getUniformLocation(E, "color");
        h = w.getUniformLocation(E, "map");
        k = w.getUniformLocation(E, "opacity");
        l = w.getUniformLocation(E, "modelViewMatrix");
        p = w.getUniformLocation(E, "projectionMatrix");
        q = w.getUniformLocation(E, "fogType");
        n = w.getUniformLocation(E, "fogDensity");
        t = w.getUniformLocation(E, "fogNear");
        r = w.getUniformLocation(E, "fogFar");
        s = w.getUniformLocation(E, "fogColor");
        u = w.getUniformLocation(E, "alphaTest");
        H = document.createElement("canvas");
        H.width = 8;
        H.height = 8;
        L = H.getContext("2d");
        L.fillStyle = "white";
        L.fillRect(0, 0, 8, 8);
        G = new THREE.Texture(H);
        G.needsUpdate = !0;
      }

      w.useProgram(E);
      w.enableVertexAttribArray(v);
      w.enableVertexAttribArray(x);
      w.disable(w.CULL_FACE);
      w.enable(w.BLEND);
      w.bindBuffer(w.ARRAY_BUFFER, y);
      w.vertexAttribPointer(v, 2, w.FLOAT, !1, 16, 0);
      w.vertexAttribPointer(x, 2, w.FLOAT, !1, 16, 8);
      w.bindBuffer(w.ELEMENT_ARRAY_BUFFER, A);
      w.uniformMatrix4fv(p, !1, M.projectionMatrix.elements);
      w.activeTexture(w.TEXTURE0);
      w.uniform1i(h, 0);
      L = H = 0;
      (P = U.fog) ? (w.uniform3f(s, P.color.r, P.color.g, P.color.b), P instanceof THREE.Fog ? (w.uniform1f(t, P.near), w.uniform1f(r, P.far), w.uniform1i(q, 1), L = H = 1) : P instanceof THREE.FogExp2 && (w.uniform1f(n, P.density), w.uniform1i(q, 2), L = H = 2)) : (w.uniform1i(q, 0), L = H = 0);

      for (var P = 0, N = b.length; P < N; P++) {
        var R = b[P];

        R._modelViewMatrix.multiplyMatrices(M.matrixWorldInverse, R.matrixWorld);

        R.z = -R._modelViewMatrix.elements[14];
      }

      b.sort(D);

      for (var V = [], P = 0, N = b.length; P < N; P++) {
        var R = b[P],
            J = R.material;
        w.uniform1f(u, J.alphaTest);
        w.uniformMatrix4fv(l, !1, R._modelViewMatrix.elements);
        R.matrixWorld.decompose(F, z, I);
        V[0] = I.x;
        V[1] = I.y;
        R = 0;
        U.fog && J.fog && (R = L);
        H !== R && (w.uniform1i(q, R), H = R);
        null !== J.map ? (w.uniform2f(c, J.map.offset.x, J.map.offset.y), w.uniform2f(d, J.map.repeat.x, J.map.repeat.y)) : (w.uniform2f(c, 0, 0), w.uniform2f(d, 1, 1));
        w.uniform1f(k, J.opacity);
        w.uniform3f(g, J.color.r, J.color.g, J.color.b);
        w.uniform1f(e, J.rotation);
        w.uniform2fv(f, V);
        a.state.setBlending(J.blending, J.blendEquation, J.blendSrc, J.blendDst);
        a.state.setDepthTest(J.depthTest);
        a.state.setDepthWrite(J.depthWrite);
        J.map && J.map.image && J.map.image.width ? a.setTexture(J.map, 0) : a.setTexture(G, 0);
        w.drawElements(w.TRIANGLES, 6, w.UNSIGNED_SHORT, 0);
      }

      w.enable(w.CULL_FACE);
      a.resetGLState();
    }
  };
};

THREE.GeometryUtils = {
  merge: function merge(a, b, c) {
    THREE.warn("THREE.GeometryUtils: .merge() has been moved to Geometry. Use geometry.merge( geometry2, matrix, materialIndexOffset ) instead.");
    var d;
    b instanceof THREE.Mesh && (b.matrixAutoUpdate && b.updateMatrix(), d = b.matrix, b = b.geometry);
    a.merge(b, d, c);
  },
  center: function center(a) {
    THREE.warn("THREE.GeometryUtils: .center() has been moved to Geometry. Use geometry.center() instead.");
    return a.center();
  }
};
THREE.ImageUtils = {
  crossOrigin: void 0,
  loadTexture: function loadTexture(a, b, c, d) {
    var e = new THREE.ImageLoader();
    e.crossOrigin = this.crossOrigin;
    var f = new THREE.Texture(void 0, b);
    e.load(a, function (a) {
      f.image = a;
      f.needsUpdate = !0;
      c && c(f);
    }, void 0, function (a) {
      d && d(a);
    });
    f.sourceFile = a;
    return f;
  },
  loadTextureCube: function loadTextureCube(a, b, c, d) {
    var e = new THREE.ImageLoader();
    e.crossOrigin = this.crossOrigin;
    var f = new THREE.CubeTexture([], b);
    f.flipY = !1;
    var g = 0;

    b = function b(_b2) {
      e.load(a[_b2], function (a) {
        f.images[_b2] = a;
        g += 1;
        6 === g && (f.needsUpdate = !0, c && c(f));
      }, void 0, d);
    };

    for (var h = 0, k = a.length; h < k; ++h) {
      b(h);
    }

    return f;
  },
  loadCompressedTexture: function loadCompressedTexture() {
    THREE.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.");
  },
  loadCompressedTextureCube: function loadCompressedTextureCube() {
    THREE.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.");
  },
  getNormalMap: function getNormalMap(a, b) {
    var c = function c(a) {
      var b = Math.sqrt(a[0] * a[0] + a[1] * a[1] + a[2] * a[2]);
      return [a[0] / b, a[1] / b, a[2] / b];
    };

    b |= 1;
    var d = a.width,
        e = a.height,
        f = document.createElement("canvas");
    f.width = d;
    f.height = e;
    var g = f.getContext("2d");
    g.drawImage(a, 0, 0);

    for (var h = g.getImageData(0, 0, d, e).data, k = g.createImageData(d, e), l = k.data, p = 0; p < d; p++) {
      for (var q = 0; q < e; q++) {
        var n = 0 > q - 1 ? 0 : q - 1,
            t = q + 1 > e - 1 ? e - 1 : q + 1,
            r = 0 > p - 1 ? 0 : p - 1,
            s = p + 1 > d - 1 ? d - 1 : p + 1,
            u = [],
            v = [0, 0, h[4 * (q * d + p)] / 255 * b];
        u.push([-1, 0, h[4 * (q * d + r)] / 255 * b]);
        u.push([-1, -1, h[4 * (n * d + r)] / 255 * b]);
        u.push([0, -1, h[4 * (n * d + p)] / 255 * b]);
        u.push([1, -1, h[4 * (n * d + s)] / 255 * b]);
        u.push([1, 0, h[4 * (q * d + s)] / 255 * b]);
        u.push([1, 1, h[4 * (t * d + s)] / 255 * b]);
        u.push([0, 1, h[4 * (t * d + p)] / 255 * b]);
        u.push([-1, 1, h[4 * (t * d + r)] / 255 * b]);
        n = [];
        r = u.length;

        for (t = 0; t < r; t++) {
          var s = u[t],
              x = u[(t + 1) % r],
              s = [s[0] - v[0], s[1] - v[1], s[2] - v[2]],
              x = [x[0] - v[0], x[1] - v[1], x[2] - v[2]];
          n.push(c([s[1] * x[2] - s[2] * x[1], s[2] * x[0] - s[0] * x[2], s[0] * x[1] - s[1] * x[0]]));
        }

        u = [0, 0, 0];

        for (t = 0; t < n.length; t++) {
          u[0] += n[t][0], u[1] += n[t][1], u[2] += n[t][2];
        }

        u[0] /= n.length;
        u[1] /= n.length;
        u[2] /= n.length;
        v = 4 * (q * d + p);
        l[v] = (u[0] + 1) / 2 * 255 | 0;
        l[v + 1] = (u[1] + 1) / 2 * 255 | 0;
        l[v + 2] = 255 * u[2] | 0;
        l[v + 3] = 255;
      }
    }

    g.putImageData(k, 0, 0);
    return f;
  },
  generateDataTexture: function generateDataTexture(a, b, c) {
    var d = a * b,
        e = new Uint8Array(3 * d),
        f = Math.floor(255 * c.r),
        g = Math.floor(255 * c.g);
    c = Math.floor(255 * c.b);

    for (var h = 0; h < d; h++) {
      e[3 * h] = f, e[3 * h + 1] = g, e[3 * h + 2] = c;
    }

    a = new THREE.DataTexture(e, a, b, THREE.RGBFormat);
    a.needsUpdate = !0;
    return a;
  }
};
THREE.SceneUtils = {
  createMultiMaterialObject: function createMultiMaterialObject(a, b) {
    for (var c = new THREE.Object3D(), d = 0, e = b.length; d < e; d++) {
      c.add(new THREE.Mesh(a, b[d]));
    }

    return c;
  },
  detach: function detach(a, b, c) {
    a.applyMatrix(b.matrixWorld);
    b.remove(a);
    c.add(a);
  },
  attach: function attach(a, b, c) {
    var d = new THREE.Matrix4();
    d.getInverse(c.matrixWorld);
    a.applyMatrix(d);
    b.remove(a);
    c.add(a);
  }
};
THREE.FontUtils = {
  faces: {},
  face: "helvetiker",
  weight: "normal",
  style: "normal",
  size: 150,
  divisions: 10,
  getFace: function getFace() {
    try {
      return this.faces[this.face][this.weight][this.style];
    } catch (a) {
      throw "The font " + this.face + " with " + this.weight + " weight and " + this.style + " style is missing.";
    }
  },
  loadFace: function loadFace(a) {
    var b = a.familyName.toLowerCase();
    this.faces[b] = this.faces[b] || {};
    this.faces[b][a.cssFontWeight] = this.faces[b][a.cssFontWeight] || {};
    this.faces[b][a.cssFontWeight][a.cssFontStyle] = a;
    return this.faces[b][a.cssFontWeight][a.cssFontStyle] = a;
  },
  drawText: function drawText(a) {
    var b = this.getFace(),
        c = this.size / b.resolution,
        d = 0,
        e = String(a).split(""),
        f = e.length,
        g = [];

    for (a = 0; a < f; a++) {
      var h = new THREE.Path(),
          h = this.extractGlyphPoints(e[a], b, c, d, h),
          d = d + h.offset;
      g.push(h.path);
    }

    return {
      paths: g,
      offset: d / 2
    };
  },
  extractGlyphPoints: function extractGlyphPoints(a, b, c, d, e) {
    var f = [],
        g,
        h,
        k,
        l,
        p,
        q,
        n,
        t,
        r,
        s,
        u,
        v = b.glyphs[a] || b.glyphs["?"];

    if (v) {
      if (v.o) for (b = v._cachedOutline || (v._cachedOutline = v.o.split(" ")), l = b.length, a = 0; a < l;) {
        switch (k = b[a++], k) {
          case "m":
            k = b[a++] * c + d;
            p = b[a++] * c;
            e.moveTo(k, p);
            break;

          case "l":
            k = b[a++] * c + d;
            p = b[a++] * c;
            e.lineTo(k, p);
            break;

          case "q":
            k = b[a++] * c + d;
            p = b[a++] * c;
            t = b[a++] * c + d;
            r = b[a++] * c;
            e.quadraticCurveTo(t, r, k, p);
            if (g = f[f.length - 1]) for (q = g.x, n = g.y, g = 1, h = this.divisions; g <= h; g++) {
              var x = g / h;
              THREE.Shape.Utils.b2(x, q, t, k);
              THREE.Shape.Utils.b2(x, n, r, p);
            }
            break;

          case "b":
            if (k = b[a++] * c + d, p = b[a++] * c, t = b[a++] * c + d, r = b[a++] * c, s = b[a++] * c + d, u = b[a++] * c, e.bezierCurveTo(t, r, s, u, k, p), g = f[f.length - 1]) for (q = g.x, n = g.y, g = 1, h = this.divisions; g <= h; g++) {
              x = g / h, THREE.Shape.Utils.b3(x, q, t, s, k), THREE.Shape.Utils.b3(x, n, r, u, p);
            }
        }
      }
      return {
        offset: v.ha * c,
        path: e
      };
    }
  }
};

THREE.FontUtils.generateShapes = function (a, b) {
  b = b || {};
  var c = void 0 !== b.curveSegments ? b.curveSegments : 4,
      d = void 0 !== b.font ? b.font : "helvetiker",
      e = void 0 !== b.weight ? b.weight : "normal",
      f = void 0 !== b.style ? b.style : "normal";
  THREE.FontUtils.size = void 0 !== b.size ? b.size : 100;
  THREE.FontUtils.divisions = c;
  THREE.FontUtils.face = d;
  THREE.FontUtils.weight = e;
  THREE.FontUtils.style = f;
  c = THREE.FontUtils.drawText(a).paths;
  d = [];
  e = 0;

  for (f = c.length; e < f; e++) {
    Array.prototype.push.apply(d, c[e].toShapes());
  }

  return d;
};

(function (a) {
  var b = function b(a) {
    for (var b = a.length, e = 0, f = b - 1, g = 0; g < b; f = g++) {
      e += a[f].x * a[g].y - a[g].x * a[f].y;
    }

    return .5 * e;
  };

  a.Triangulate = function (a, d) {
    var e = a.length;
    if (3 > e) return null;
    var f = [],
        g = [],
        h = [],
        k,
        l,
        p;
    if (0 < b(a)) for (l = 0; l < e; l++) {
      g[l] = l;
    } else for (l = 0; l < e; l++) {
      g[l] = e - 1 - l;
    }
    var q = 2 * e;

    for (l = e - 1; 2 < e;) {
      if (0 >= q--) {
        THREE.warn("THREE.FontUtils: Warning, unable to triangulate polygon! in Triangulate.process()");
        break;
      }

      k = l;
      e <= k && (k = 0);
      l = k + 1;
      e <= l && (l = 0);
      p = l + 1;
      e <= p && (p = 0);
      var n;

      a: {
        var t = n = void 0,
            r = void 0,
            s = void 0,
            u = void 0,
            v = void 0,
            x = void 0,
            D = void 0,
            w = void 0,
            t = a[g[k]].x,
            r = a[g[k]].y,
            s = a[g[l]].x,
            u = a[g[l]].y,
            v = a[g[p]].x,
            x = a[g[p]].y;
        if (1E-10 > (s - t) * (x - r) - (u - r) * (v - t)) n = !1;else {
          var y = void 0,
              A = void 0,
              E = void 0,
              G = void 0,
              F = void 0,
              z = void 0,
              I = void 0,
              U = void 0,
              M = void 0,
              H = void 0,
              M = U = I = w = D = void 0,
              y = v - s,
              A = x - u,
              E = t - v,
              G = r - x,
              F = s - t,
              z = u - r;

          for (n = 0; n < e; n++) {
            if (D = a[g[n]].x, w = a[g[n]].y, !(D === t && w === r || D === s && w === u || D === v && w === x) && (I = D - t, U = w - r, M = D - s, H = w - u, D -= v, w -= x, M = y * H - A * M, I = F * U - z * I, U = E * w - G * D, -1E-10 <= M && -1E-10 <= U && -1E-10 <= I)) {
              n = !1;
              break a;
            }
          }

          n = !0;
        }
      }

      if (n) {
        f.push([a[g[k]], a[g[l]], a[g[p]]]);
        h.push([g[k], g[l], g[p]]);
        k = l;

        for (p = l + 1; p < e; k++, p++) {
          g[k] = g[p];
        }

        e--;
        q = 2 * e;
      }
    }

    return d ? h : f;
  };

  a.Triangulate.area = b;
  return a;
})(THREE.FontUtils);

self._typeface_js = {
  faces: THREE.FontUtils.faces,
  loadFace: THREE.FontUtils.loadFace
};
THREE.typeface_js = self._typeface_js;

THREE.Audio = function (a) {
  THREE.Object3D.call(this);
  this.type = "Audio";
  this.context = a.context;
  this.source = this.context.createBufferSource();
  this.source.onended = this.onEnded.bind(this);
  this.gain = this.context.createGain();
  this.gain.connect(this.context.destination);
  this.panner = this.context.createPanner();
  this.panner.connect(this.gain);
  this.autoplay = !1;
  this.startTime = 0;
  this.isPlaying = !1;
};

THREE.Audio.prototype = Object.create(THREE.Object3D.prototype);
THREE.Audio.prototype.constructor = THREE.Audio;

THREE.Audio.prototype.load = function (a) {
  var b = this,
      c = new XMLHttpRequest();
  c.open("GET", a, !0);
  c.responseType = "arraybuffer";

  c.onload = function (a) {
    b.context.decodeAudioData(this.response, function (a) {
      b.source.buffer = a;
      b.autoplay && b.play();
    });
  };

  c.send();
  return this;
};

THREE.Audio.prototype.play = function () {
  if (!0 === this.isPlaying) THREE.warn("THREE.Audio: Audio is already playing.");else {
    var a = this.context.createBufferSource();
    a.buffer = this.source.buffer;
    a.loop = this.source.loop;
    a.onended = this.source.onended;
    a.connect(this.panner);
    a.start(0, this.startTime);
    this.isPlaying = !0;
    this.source = a;
  }
};

THREE.Audio.prototype.pause = function () {
  this.source.stop();
  this.startTime = this.context.currentTime;
};

THREE.Audio.prototype.stop = function () {
  this.source.stop();
  this.startTime = 0;
};

THREE.Audio.prototype.onEnded = function () {
  this.isPlaying = !1;
};

THREE.Audio.prototype.setLoop = function (a) {
  this.source.loop = a;
};

THREE.Audio.prototype.setRefDistance = function (a) {
  this.panner.refDistance = a;
};

THREE.Audio.prototype.setRolloffFactor = function (a) {
  this.panner.rolloffFactor = a;
};

THREE.Audio.prototype.setVolume = function (a) {
  this.gain.gain.value = a;
};

THREE.Audio.prototype.updateMatrixWorld = function () {
  var a = new THREE.Vector3();
  return function (b) {
    THREE.Object3D.prototype.updateMatrixWorld.call(this, b);
    a.setFromMatrixPosition(this.matrixWorld);
    this.panner.setPosition(a.x, a.y, a.z);
  };
}();

THREE.AudioListener = function () {
  THREE.Object3D.call(this);
  this.type = "AudioListener";
  this.context = new (window.AudioContext || window.webkitAudioContext)();
};

THREE.AudioListener.prototype = Object.create(THREE.Object3D.prototype);
THREE.AudioListener.prototype.constructor = THREE.AudioListener;

THREE.AudioListener.prototype.updateMatrixWorld = function () {
  var a = new THREE.Vector3(),
      b = new THREE.Quaternion(),
      c = new THREE.Vector3(),
      d = new THREE.Vector3(),
      e = new THREE.Vector3(),
      f = new THREE.Vector3();
  return function (g) {
    THREE.Object3D.prototype.updateMatrixWorld.call(this, g);
    g = this.context.listener;
    var h = this.up;
    this.matrixWorld.decompose(a, b, c);
    d.set(0, 0, -1).applyQuaternion(b);
    e.subVectors(a, f);
    g.setPosition(a.x, a.y, a.z);
    g.setOrientation(d.x, d.y, d.z, h.x, h.y, h.z);
    g.setVelocity(e.x, e.y, e.z);
    f.copy(a);
  };
}();

THREE.Curve = function () {};

THREE.Curve.prototype.getPoint = function (a) {
  THREE.warn("THREE.Curve: Warning, getPoint() not implemented!");
  return null;
};

THREE.Curve.prototype.getPointAt = function (a) {
  a = this.getUtoTmapping(a);
  return this.getPoint(a);
};

THREE.Curve.prototype.getPoints = function (a) {
  a || (a = 5);
  var b,
      c = [];

  for (b = 0; b <= a; b++) {
    c.push(this.getPoint(b / a));
  }

  return c;
};

THREE.Curve.prototype.getSpacedPoints = function (a) {
  a || (a = 5);
  var b,
      c = [];

  for (b = 0; b <= a; b++) {
    c.push(this.getPointAt(b / a));
  }

  return c;
};

THREE.Curve.prototype.getLength = function () {
  var a = this.getLengths();
  return a[a.length - 1];
};

THREE.Curve.prototype.getLengths = function (a) {
  a || (a = this.__arcLengthDivisions ? this.__arcLengthDivisions : 200);
  if (this.cacheArcLengths && this.cacheArcLengths.length == a + 1 && !this.needsUpdate) return this.cacheArcLengths;
  this.needsUpdate = !1;
  var b = [],
      c,
      d = this.getPoint(0),
      e,
      f = 0;
  b.push(0);

  for (e = 1; e <= a; e++) {
    c = this.getPoint(e / a), f += c.distanceTo(d), b.push(f), d = c;
  }

  return this.cacheArcLengths = b;
};

THREE.Curve.prototype.updateArcLengths = function () {
  this.needsUpdate = !0;
  this.getLengths();
};

THREE.Curve.prototype.getUtoTmapping = function (a, b) {
  var c = this.getLengths(),
      d = 0,
      e = c.length,
      f;
  f = b ? b : a * c[e - 1];

  for (var g = 0, h = e - 1, k; g <= h;) {
    if (d = Math.floor(g + (h - g) / 2), k = c[d] - f, 0 > k) g = d + 1;else if (0 < k) h = d - 1;else {
      h = d;
      break;
    }
  }

  d = h;
  if (c[d] == f) return d / (e - 1);
  g = c[d];
  return c = (d + (f - g) / (c[d + 1] - g)) / (e - 1);
};

THREE.Curve.prototype.getTangent = function (a) {
  var b = a - 1E-4;
  a += 1E-4;
  0 > b && (b = 0);
  1 < a && (a = 1);
  b = this.getPoint(b);
  return this.getPoint(a).clone().sub(b).normalize();
};

THREE.Curve.prototype.getTangentAt = function (a) {
  a = this.getUtoTmapping(a);
  return this.getTangent(a);
};

THREE.Curve.Utils = {
  tangentQuadraticBezier: function tangentQuadraticBezier(a, b, c, d) {
    return 2 * (1 - a) * (c - b) + 2 * a * (d - c);
  },
  tangentCubicBezier: function tangentCubicBezier(a, b, c, d, e) {
    return -3 * b * (1 - a) * (1 - a) + 3 * c * (1 - a) * (1 - a) - 6 * a * c * (1 - a) + 6 * a * d * (1 - a) - 3 * a * a * d + 3 * a * a * e;
  },
  tangentSpline: function tangentSpline(a, b, c, d, e) {
    return 6 * a * a - 6 * a + (3 * a * a - 4 * a + 1) + (-6 * a * a + 6 * a) + (3 * a * a - 2 * a);
  },
  interpolate: function interpolate(a, b, c, d, e) {
    a = .5 * (c - a);
    d = .5 * (d - b);
    var f = e * e;
    return (2 * b - 2 * c + a + d) * e * f + (-3 * b + 3 * c - 2 * a - d) * f + a * e + b;
  }
};

THREE.Curve.create = function (a, b) {
  a.prototype = Object.create(THREE.Curve.prototype);
  a.prototype.constructor = a;
  a.prototype.getPoint = b;
  return a;
};

THREE.CurvePath = function () {
  this.curves = [];
  this.bends = [];
  this.autoClose = !1;
};

THREE.CurvePath.prototype = Object.create(THREE.Curve.prototype);
THREE.CurvePath.prototype.constructor = THREE.CurvePath;

THREE.CurvePath.prototype.add = function (a) {
  this.curves.push(a);
};

THREE.CurvePath.prototype.checkConnection = function () {};

THREE.CurvePath.prototype.closePath = function () {
  var a = this.curves[0].getPoint(0),
      b = this.curves[this.curves.length - 1].getPoint(1);
  a.equals(b) || this.curves.push(new THREE.LineCurve(b, a));
};

THREE.CurvePath.prototype.getPoint = function (a) {
  var b = a * this.getLength(),
      c = this.getCurveLengths();

  for (a = 0; a < c.length;) {
    if (c[a] >= b) return b = c[a] - b, a = this.curves[a], b = 1 - b / a.getLength(), a.getPointAt(b);
    a++;
  }

  return null;
};

THREE.CurvePath.prototype.getLength = function () {
  var a = this.getCurveLengths();
  return a[a.length - 1];
};

THREE.CurvePath.prototype.getCurveLengths = function () {
  if (this.cacheLengths && this.cacheLengths.length == this.curves.length) return this.cacheLengths;
  var a = [],
      b = 0,
      c,
      d = this.curves.length;

  for (c = 0; c < d; c++) {
    b += this.curves[c].getLength(), a.push(b);
  }

  return this.cacheLengths = a;
};

THREE.CurvePath.prototype.getBoundingBox = function () {
  var a = this.getPoints(),
      b,
      c,
      d,
      e,
      f,
      g;
  b = c = Number.NEGATIVE_INFINITY;
  e = f = Number.POSITIVE_INFINITY;
  var h,
      k,
      l,
      p,
      q = a[0] instanceof THREE.Vector3;
  p = q ? new THREE.Vector3() : new THREE.Vector2();
  k = 0;

  for (l = a.length; k < l; k++) {
    h = a[k], h.x > b ? b = h.x : h.x < e && (e = h.x), h.y > c ? c = h.y : h.y < f && (f = h.y), q && (h.z > d ? d = h.z : h.z < g && (g = h.z)), p.add(h);
  }

  a = {
    minX: e,
    minY: f,
    maxX: b,
    maxY: c
  };
  q && (a.maxZ = d, a.minZ = g);
  return a;
};

THREE.CurvePath.prototype.createPointsGeometry = function (a) {
  a = this.getPoints(a, !0);
  return this.createGeometry(a);
};

THREE.CurvePath.prototype.createSpacedPointsGeometry = function (a) {
  a = this.getSpacedPoints(a, !0);
  return this.createGeometry(a);
};

THREE.CurvePath.prototype.createGeometry = function (a) {
  for (var b = new THREE.Geometry(), c = 0; c < a.length; c++) {
    b.vertices.push(new THREE.Vector3(a[c].x, a[c].y, a[c].z || 0));
  }

  return b;
};

THREE.CurvePath.prototype.addWrapPath = function (a) {
  this.bends.push(a);
};

THREE.CurvePath.prototype.getTransformedPoints = function (a, b) {
  var c = this.getPoints(a),
      d,
      e;
  b || (b = this.bends);
  d = 0;

  for (e = b.length; d < e; d++) {
    c = this.getWrapPoints(c, b[d]);
  }

  return c;
};

THREE.CurvePath.prototype.getTransformedSpacedPoints = function (a, b) {
  var c = this.getSpacedPoints(a),
      d,
      e;
  b || (b = this.bends);
  d = 0;

  for (e = b.length; d < e; d++) {
    c = this.getWrapPoints(c, b[d]);
  }

  return c;
};

THREE.CurvePath.prototype.getWrapPoints = function (a, b) {
  var c = this.getBoundingBox(),
      d,
      e,
      f,
      g,
      h,
      k;
  d = 0;

  for (e = a.length; d < e; d++) {
    f = a[d], g = f.x, h = f.y, k = g / c.maxX, k = b.getUtoTmapping(k, g), g = b.getPoint(k), k = b.getTangent(k), k.set(-k.y, k.x).multiplyScalar(h), f.x = g.x + k.x, f.y = g.y + k.y;
  }

  return a;
};

THREE.Gyroscope = function () {
  THREE.Object3D.call(this);
};

THREE.Gyroscope.prototype = Object.create(THREE.Object3D.prototype);
THREE.Gyroscope.prototype.constructor = THREE.Gyroscope;

THREE.Gyroscope.prototype.updateMatrixWorld = function () {
  var a = new THREE.Vector3(),
      b = new THREE.Quaternion(),
      c = new THREE.Vector3(),
      d = new THREE.Vector3(),
      e = new THREE.Quaternion(),
      f = new THREE.Vector3();
  return function (g) {
    this.matrixAutoUpdate && this.updateMatrix();
    if (this.matrixWorldNeedsUpdate || g) this.parent ? (this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorld.decompose(d, e, f), this.matrix.decompose(a, b, c), this.matrixWorld.compose(d, b, f)) : this.matrixWorld.copy(this.matrix), this.matrixWorldNeedsUpdate = !1, g = !0;

    for (var h = 0, k = this.children.length; h < k; h++) {
      this.children[h].updateMatrixWorld(g);
    }
  };
}();

THREE.Path = function (a) {
  THREE.CurvePath.call(this);
  this.actions = [];
  a && this.fromPoints(a);
};

THREE.Path.prototype = Object.create(THREE.CurvePath.prototype);
THREE.Path.prototype.constructor = THREE.Path;
THREE.PathActions = {
  MOVE_TO: "moveTo",
  LINE_TO: "lineTo",
  QUADRATIC_CURVE_TO: "quadraticCurveTo",
  BEZIER_CURVE_TO: "bezierCurveTo",
  CSPLINE_THRU: "splineThru",
  ARC: "arc",
  ELLIPSE: "ellipse"
};

THREE.Path.prototype.fromPoints = function (a) {
  this.moveTo(a[0].x, a[0].y);

  for (var b = 1, c = a.length; b < c; b++) {
    this.lineTo(a[b].x, a[b].y);
  }
};

THREE.Path.prototype.moveTo = function (a, b) {
  var c = Array.prototype.slice.call(arguments);
  this.actions.push({
    action: THREE.PathActions.MOVE_TO,
    args: c
  });
};

THREE.Path.prototype.lineTo = function (a, b) {
  var c = Array.prototype.slice.call(arguments),
      d = this.actions[this.actions.length - 1].args,
      d = new THREE.LineCurve(new THREE.Vector2(d[d.length - 2], d[d.length - 1]), new THREE.Vector2(a, b));
  this.curves.push(d);
  this.actions.push({
    action: THREE.PathActions.LINE_TO,
    args: c
  });
};

THREE.Path.prototype.quadraticCurveTo = function (a, b, c, d) {
  var e = Array.prototype.slice.call(arguments),
      f = this.actions[this.actions.length - 1].args,
      f = new THREE.QuadraticBezierCurve(new THREE.Vector2(f[f.length - 2], f[f.length - 1]), new THREE.Vector2(a, b), new THREE.Vector2(c, d));
  this.curves.push(f);
  this.actions.push({
    action: THREE.PathActions.QUADRATIC_CURVE_TO,
    args: e
  });
};

THREE.Path.prototype.bezierCurveTo = function (a, b, c, d, e, f) {
  var g = Array.prototype.slice.call(arguments),
      h = this.actions[this.actions.length - 1].args,
      h = new THREE.CubicBezierCurve(new THREE.Vector2(h[h.length - 2], h[h.length - 1]), new THREE.Vector2(a, b), new THREE.Vector2(c, d), new THREE.Vector2(e, f));
  this.curves.push(h);
  this.actions.push({
    action: THREE.PathActions.BEZIER_CURVE_TO,
    args: g
  });
};

THREE.Path.prototype.splineThru = function (a) {
  var b = Array.prototype.slice.call(arguments),
      c = this.actions[this.actions.length - 1].args,
      c = [new THREE.Vector2(c[c.length - 2], c[c.length - 1])];
  Array.prototype.push.apply(c, a);
  c = new THREE.SplineCurve(c);
  this.curves.push(c);
  this.actions.push({
    action: THREE.PathActions.CSPLINE_THRU,
    args: b
  });
};

THREE.Path.prototype.arc = function (a, b, c, d, e, f) {
  var g = this.actions[this.actions.length - 1].args;
  this.absarc(a + g[g.length - 2], b + g[g.length - 1], c, d, e, f);
};

THREE.Path.prototype.absarc = function (a, b, c, d, e, f) {
  this.absellipse(a, b, c, c, d, e, f);
};

THREE.Path.prototype.ellipse = function (a, b, c, d, e, f, g) {
  var h = this.actions[this.actions.length - 1].args;
  this.absellipse(a + h[h.length - 2], b + h[h.length - 1], c, d, e, f, g);
};

THREE.Path.prototype.absellipse = function (a, b, c, d, e, f, g) {
  var h = Array.prototype.slice.call(arguments),
      k = new THREE.EllipseCurve(a, b, c, d, e, f, g);
  this.curves.push(k);
  k = k.getPoint(1);
  h.push(k.x);
  h.push(k.y);
  this.actions.push({
    action: THREE.PathActions.ELLIPSE,
    args: h
  });
};

THREE.Path.prototype.getSpacedPoints = function (a, b) {
  a || (a = 40);

  for (var c = [], d = 0; d < a; d++) {
    c.push(this.getPoint(d / a));
  }

  return c;
};

THREE.Path.prototype.getPoints = function (a, b) {
  if (this.useSpacedPoints) return console.log("tata"), this.getSpacedPoints(a, b);
  a = a || 12;
  var c = [],
      d,
      e,
      f,
      g,
      h,
      k,
      l,
      p,
      q,
      n,
      t,
      r,
      s;
  d = 0;

  for (e = this.actions.length; d < e; d++) {
    switch (f = this.actions[d], g = f.action, f = f.args, g) {
      case THREE.PathActions.MOVE_TO:
        c.push(new THREE.Vector2(f[0], f[1]));
        break;

      case THREE.PathActions.LINE_TO:
        c.push(new THREE.Vector2(f[0], f[1]));
        break;

      case THREE.PathActions.QUADRATIC_CURVE_TO:
        h = f[2];
        k = f[3];
        q = f[0];
        n = f[1];
        0 < c.length ? (g = c[c.length - 1], t = g.x, r = g.y) : (g = this.actions[d - 1].args, t = g[g.length - 2], r = g[g.length - 1]);

        for (f = 1; f <= a; f++) {
          s = f / a, g = THREE.Shape.Utils.b2(s, t, q, h), s = THREE.Shape.Utils.b2(s, r, n, k), c.push(new THREE.Vector2(g, s));
        }

        break;

      case THREE.PathActions.BEZIER_CURVE_TO:
        h = f[4];
        k = f[5];
        q = f[0];
        n = f[1];
        l = f[2];
        p = f[3];
        0 < c.length ? (g = c[c.length - 1], t = g.x, r = g.y) : (g = this.actions[d - 1].args, t = g[g.length - 2], r = g[g.length - 1]);

        for (f = 1; f <= a; f++) {
          s = f / a, g = THREE.Shape.Utils.b3(s, t, q, l, h), s = THREE.Shape.Utils.b3(s, r, n, p, k), c.push(new THREE.Vector2(g, s));
        }

        break;

      case THREE.PathActions.CSPLINE_THRU:
        g = this.actions[d - 1].args;
        s = [new THREE.Vector2(g[g.length - 2], g[g.length - 1])];
        g = a * f[0].length;
        s = s.concat(f[0]);
        s = new THREE.SplineCurve(s);

        for (f = 1; f <= g; f++) {
          c.push(s.getPointAt(f / g));
        }

        break;

      case THREE.PathActions.ARC:
        h = f[0];
        k = f[1];
        n = f[2];
        l = f[3];
        g = f[4];
        q = !!f[5];
        t = g - l;
        r = 2 * a;

        for (f = 1; f <= r; f++) {
          s = f / r, q || (s = 1 - s), s = l + s * t, g = h + n * Math.cos(s), s = k + n * Math.sin(s), c.push(new THREE.Vector2(g, s));
        }

        break;

      case THREE.PathActions.ELLIPSE:
        for (h = f[0], k = f[1], n = f[2], p = f[3], l = f[4], g = f[5], q = !!f[6], t = g - l, r = 2 * a, f = 1; f <= r; f++) {
          s = f / r, q || (s = 1 - s), s = l + s * t, g = h + n * Math.cos(s), s = k + p * Math.sin(s), c.push(new THREE.Vector2(g, s));
        }

    }
  }

  d = c[c.length - 1];
  1E-10 > Math.abs(d.x - c[0].x) && 1E-10 > Math.abs(d.y - c[0].y) && c.splice(c.length - 1, 1);
  b && c.push(c[0]);
  return c;
};

THREE.Path.prototype.toShapes = function (a, b) {
  function c(a) {
    for (var b = [], c = 0, d = a.length; c < d; c++) {
      var e = a[c],
          f = new THREE.Shape();
      f.actions = e.actions;
      f.curves = e.curves;
      b.push(f);
    }

    return b;
  }

  function d(a, b) {
    for (var c = b.length, d = !1, e = c - 1, f = 0; f < c; e = f++) {
      var g = b[e],
          h = b[f],
          k = h.x - g.x,
          n = h.y - g.y;

      if (1E-10 < Math.abs(n)) {
        if (0 > n && (g = b[f], k = -k, h = b[e], n = -n), !(a.y < g.y || a.y > h.y)) if (a.y == g.y) {
          if (a.x == g.x) return !0;
        } else {
          e = n * (a.x - g.x) - k * (a.y - g.y);
          if (0 == e) return !0;
          0 > e || (d = !d);
        }
      } else if (a.y == g.y && (h.x <= a.x && a.x <= g.x || g.x <= a.x && a.x <= h.x)) return !0;
    }

    return d;
  }

  var e = function (a) {
    var b,
        c,
        d,
        e,
        f = [],
        g = new THREE.Path();
    b = 0;

    for (c = a.length; b < c; b++) {
      d = a[b], e = d.args, d = d.action, d == THREE.PathActions.MOVE_TO && 0 != g.actions.length && (f.push(g), g = new THREE.Path()), g[d].apply(g, e);
    }

    0 != g.actions.length && f.push(g);
    return f;
  }(this.actions);

  if (0 == e.length) return [];
  if (!0 === b) return c(e);
  var f,
      g,
      h,
      k = [];
  if (1 == e.length) return g = e[0], h = new THREE.Shape(), h.actions = g.actions, h.curves = g.curves, k.push(h), k;
  var l = !THREE.Shape.Utils.isClockWise(e[0].getPoints()),
      l = a ? !l : l;
  h = [];
  var p = [],
      q = [],
      n = 0,
      t;
  p[n] = void 0;
  q[n] = [];
  var r, s;
  r = 0;

  for (s = e.length; r < s; r++) {
    g = e[r], t = g.getPoints(), f = THREE.Shape.Utils.isClockWise(t), (f = a ? !f : f) ? (!l && p[n] && n++, p[n] = {
      s: new THREE.Shape(),
      p: t
    }, p[n].s.actions = g.actions, p[n].s.curves = g.curves, l && n++, q[n] = []) : q[n].push({
      h: g,
      p: t[0]
    });
  }

  if (!p[0]) return c(e);

  if (1 < p.length) {
    r = !1;
    s = [];
    g = 0;

    for (e = p.length; g < e; g++) {
      h[g] = [];
    }

    g = 0;

    for (e = p.length; g < e; g++) {
      for (f = q[g], l = 0; l < f.length; l++) {
        n = f[l];
        t = !0;

        for (var u = 0; u < p.length; u++) {
          d(n.p, p[u].p) && (g != u && s.push({
            froms: g,
            tos: u,
            hole: l
          }), t ? (t = !1, h[u].push(n)) : r = !0);
        }

        t && h[g].push(n);
      }
    }

    0 < s.length && (r || (q = h));
  }

  r = 0;

  for (s = p.length; r < s; r++) {
    for (h = p[r].s, k.push(h), g = q[r], e = 0, f = g.length; e < f; e++) {
      h.holes.push(g[e].h);
    }
  }

  return k;
};

THREE.Shape = function () {
  THREE.Path.apply(this, arguments);
  this.holes = [];
};

THREE.Shape.prototype = Object.create(THREE.Path.prototype);
THREE.Shape.prototype.constructor = THREE.Shape;

THREE.Shape.prototype.extrude = function (a) {
  return new THREE.ExtrudeGeometry(this, a);
};

THREE.Shape.prototype.makeGeometry = function (a) {
  return new THREE.ShapeGeometry(this, a);
};

THREE.Shape.prototype.getPointsHoles = function (a) {
  var b,
      c = this.holes.length,
      d = [];

  for (b = 0; b < c; b++) {
    d[b] = this.holes[b].getTransformedPoints(a, this.bends);
  }

  return d;
};

THREE.Shape.prototype.getSpacedPointsHoles = function (a) {
  var b,
      c = this.holes.length,
      d = [];

  for (b = 0; b < c; b++) {
    d[b] = this.holes[b].getTransformedSpacedPoints(a, this.bends);
  }

  return d;
};

THREE.Shape.prototype.extractAllPoints = function (a) {
  return {
    shape: this.getTransformedPoints(a),
    holes: this.getPointsHoles(a)
  };
};

THREE.Shape.prototype.extractPoints = function (a) {
  return this.useSpacedPoints ? this.extractAllSpacedPoints(a) : this.extractAllPoints(a);
};

THREE.Shape.prototype.extractAllSpacedPoints = function (a) {
  return {
    shape: this.getTransformedSpacedPoints(a),
    holes: this.getSpacedPointsHoles(a)
  };
};

THREE.Shape.Utils = {
  triangulateShape: function triangulateShape(a, b) {
    function c(a, b, c) {
      return a.x != b.x ? a.x < b.x ? a.x <= c.x && c.x <= b.x : b.x <= c.x && c.x <= a.x : a.y < b.y ? a.y <= c.y && c.y <= b.y : b.y <= c.y && c.y <= a.y;
    }

    function d(a, b, d, e, f) {
      var g = b.x - a.x,
          h = b.y - a.y,
          k = e.x - d.x,
          l = e.y - d.y,
          p = a.x - d.x,
          q = a.y - d.y,
          E = h * k - g * l,
          G = h * p - g * q;

      if (1E-10 < Math.abs(E)) {
        if (0 < E) {
          if (0 > G || G > E) return [];
          k = l * p - k * q;
          if (0 > k || k > E) return [];
        } else {
          if (0 < G || G < E) return [];
          k = l * p - k * q;
          if (0 < k || k < E) return [];
        }

        if (0 == k) return !f || 0 != G && G != E ? [a] : [];
        if (k == E) return !f || 0 != G && G != E ? [b] : [];
        if (0 == G) return [d];
        if (G == E) return [e];
        f = k / E;
        return [{
          x: a.x + f * g,
          y: a.y + f * h
        }];
      }

      if (0 != G || l * p != k * q) return [];
      h = 0 == g && 0 == h;
      k = 0 == k && 0 == l;
      if (h && k) return a.x != d.x || a.y != d.y ? [] : [a];
      if (h) return c(d, e, a) ? [a] : [];
      if (k) return c(a, b, d) ? [d] : [];
      0 != g ? (a.x < b.x ? (g = a, k = a.x, h = b, a = b.x) : (g = b, k = b.x, h = a, a = a.x), d.x < e.x ? (b = d, E = d.x, l = e, d = e.x) : (b = e, E = e.x, l = d, d = d.x)) : (a.y < b.y ? (g = a, k = a.y, h = b, a = b.y) : (g = b, k = b.y, h = a, a = a.y), d.y < e.y ? (b = d, E = d.y, l = e, d = e.y) : (b = e, E = e.y, l = d, d = d.y));
      return k <= E ? a < E ? [] : a == E ? f ? [] : [b] : a <= d ? [b, h] : [b, l] : k > d ? [] : k == d ? f ? [] : [g] : a <= d ? [g, h] : [g, l];
    }

    function e(a, b, c, d) {
      var e = b.x - a.x,
          f = b.y - a.y;
      b = c.x - a.x;
      c = c.y - a.y;
      var g = d.x - a.x;
      d = d.y - a.y;
      a = e * c - f * b;
      e = e * d - f * g;
      return 1E-10 < Math.abs(a) ? (b = g * c - d * b, 0 < a ? 0 <= e && 0 <= b : 0 <= e || 0 <= b) : 0 < e;
    }

    var f,
        g,
        h,
        k,
        l,
        p = {};
    h = a.concat();
    f = 0;

    for (g = b.length; f < g; f++) {
      Array.prototype.push.apply(h, b[f]);
    }

    f = 0;

    for (g = h.length; f < g; f++) {
      l = h[f].x + ":" + h[f].y, void 0 !== p[l] && THREE.warn("THREE.Shape: Duplicate point", l), p[l] = f;
    }

    f = function (a, b) {
      function c(a, b) {
        var d = h.length - 1,
            f = a - 1;
        0 > f && (f = d);
        var g = a + 1;
        g > d && (g = 0);
        d = e(h[a], h[f], h[g], k[b]);
        if (!d) return !1;
        d = k.length - 1;
        f = b - 1;
        0 > f && (f = d);
        g = b + 1;
        g > d && (g = 0);
        return (d = e(k[b], k[f], k[g], h[a])) ? !0 : !1;
      }

      function f(a, b) {
        var c, e;

        for (c = 0; c < h.length; c++) {
          if (e = c + 1, e %= h.length, e = d(a, b, h[c], h[e], !0), 0 < e.length) return !0;
        }

        return !1;
      }

      function g(a, c) {
        var e, f, h, k;

        for (e = 0; e < l.length; e++) {
          for (f = b[l[e]], h = 0; h < f.length; h++) {
            if (k = h + 1, k %= f.length, k = d(a, c, f[h], f[k], !0), 0 < k.length) return !0;
          }
        }

        return !1;
      }

      var h = a.concat(),
          k,
          l = [],
          p,
          q,
          A,
          E,
          G,
          F = [],
          z,
          I,
          U,
          M = 0;

      for (p = b.length; M < p; M++) {
        l.push(M);
      }

      z = 0;

      for (var H = 2 * l.length; 0 < l.length;) {
        H--;

        if (0 > H) {
          console.log("Infinite Loop! Holes left:" + l.length + ", Probably Hole outside Shape!");
          break;
        }

        for (q = z; q < h.length; q++) {
          A = h[q];
          p = -1;

          for (M = 0; M < l.length; M++) {
            if (E = l[M], G = A.x + ":" + A.y + ":" + E, void 0 === F[G]) {
              k = b[E];

              for (I = 0; I < k.length; I++) {
                if (E = k[I], c(q, I) && !f(A, E) && !g(A, E)) {
                  p = I;
                  l.splice(M, 1);
                  z = h.slice(0, q + 1);
                  E = h.slice(q);
                  I = k.slice(p);
                  U = k.slice(0, p + 1);
                  h = z.concat(I).concat(U).concat(E);
                  z = q;
                  break;
                }
              }

              if (0 <= p) break;
              F[G] = !0;
            }
          }

          if (0 <= p) break;
        }
      }

      return h;
    }(a, b);

    var q = THREE.FontUtils.Triangulate(f, !1);
    f = 0;

    for (g = q.length; f < g; f++) {
      for (k = q[f], h = 0; 3 > h; h++) {
        l = k[h].x + ":" + k[h].y, l = p[l], void 0 !== l && (k[h] = l);
      }
    }

    return q.concat();
  },
  isClockWise: function isClockWise(a) {
    return 0 > THREE.FontUtils.Triangulate.area(a);
  },
  b2p0: function b2p0(a, b) {
    var c = 1 - a;
    return c * c * b;
  },
  b2p1: function b2p1(a, b) {
    return 2 * (1 - a) * a * b;
  },
  b2p2: function b2p2(a, b) {
    return a * a * b;
  },
  b2: function b2(a, b, c, d) {
    return this.b2p0(a, b) + this.b2p1(a, c) + this.b2p2(a, d);
  },
  b3p0: function b3p0(a, b) {
    var c = 1 - a;
    return c * c * c * b;
  },
  b3p1: function b3p1(a, b) {
    var c = 1 - a;
    return 3 * c * c * a * b;
  },
  b3p2: function b3p2(a, b) {
    return 3 * (1 - a) * a * a * b;
  },
  b3p3: function b3p3(a, b) {
    return a * a * a * b;
  },
  b3: function b3(a, b, c, d, e) {
    return this.b3p0(a, b) + this.b3p1(a, c) + this.b3p2(a, d) + this.b3p3(a, e);
  }
};

THREE.LineCurve = function (a, b) {
  this.v1 = a;
  this.v2 = b;
};

THREE.LineCurve.prototype = Object.create(THREE.Curve.prototype);
THREE.LineCurve.prototype.constructor = THREE.LineCurve;

THREE.LineCurve.prototype.getPoint = function (a) {
  var b = this.v2.clone().sub(this.v1);
  b.multiplyScalar(a).add(this.v1);
  return b;
};

THREE.LineCurve.prototype.getPointAt = function (a) {
  return this.getPoint(a);
};

THREE.LineCurve.prototype.getTangent = function (a) {
  return this.v2.clone().sub(this.v1).normalize();
};

THREE.QuadraticBezierCurve = function (a, b, c) {
  this.v0 = a;
  this.v1 = b;
  this.v2 = c;
};

THREE.QuadraticBezierCurve.prototype = Object.create(THREE.Curve.prototype);
THREE.QuadraticBezierCurve.prototype.constructor = THREE.QuadraticBezierCurve;

THREE.QuadraticBezierCurve.prototype.getPoint = function (a) {
  var b = new THREE.Vector2();
  b.x = THREE.Shape.Utils.b2(a, this.v0.x, this.v1.x, this.v2.x);
  b.y = THREE.Shape.Utils.b2(a, this.v0.y, this.v1.y, this.v2.y);
  return b;
};

THREE.QuadraticBezierCurve.prototype.getTangent = function (a) {
  var b = new THREE.Vector2();
  b.x = THREE.Curve.Utils.tangentQuadraticBezier(a, this.v0.x, this.v1.x, this.v2.x);
  b.y = THREE.Curve.Utils.tangentQuadraticBezier(a, this.v0.y, this.v1.y, this.v2.y);
  return b.normalize();
};

THREE.CubicBezierCurve = function (a, b, c, d) {
  this.v0 = a;
  this.v1 = b;
  this.v2 = c;
  this.v3 = d;
};

THREE.CubicBezierCurve.prototype = Object.create(THREE.Curve.prototype);
THREE.CubicBezierCurve.prototype.constructor = THREE.CubicBezierCurve;

THREE.CubicBezierCurve.prototype.getPoint = function (a) {
  var b;
  b = THREE.Shape.Utils.b3(a, this.v0.x, this.v1.x, this.v2.x, this.v3.x);
  a = THREE.Shape.Utils.b3(a, this.v0.y, this.v1.y, this.v2.y, this.v3.y);
  return new THREE.Vector2(b, a);
};

THREE.CubicBezierCurve.prototype.getTangent = function (a) {
  var b;
  b = THREE.Curve.Utils.tangentCubicBezier(a, this.v0.x, this.v1.x, this.v2.x, this.v3.x);
  a = THREE.Curve.Utils.tangentCubicBezier(a, this.v0.y, this.v1.y, this.v2.y, this.v3.y);
  b = new THREE.Vector2(b, a);
  b.normalize();
  return b;
};

THREE.SplineCurve = function (a) {
  this.points = void 0 == a ? [] : a;
};

THREE.SplineCurve.prototype = Object.create(THREE.Curve.prototype);
THREE.SplineCurve.prototype.constructor = THREE.SplineCurve;

THREE.SplineCurve.prototype.getPoint = function (a) {
  var b = this.points;
  a *= b.length - 1;
  var c = Math.floor(a);
  a -= c;
  var d = b[0 == c ? c : c - 1],
      e = b[c],
      f = b[c > b.length - 2 ? b.length - 1 : c + 1],
      b = b[c > b.length - 3 ? b.length - 1 : c + 2],
      c = new THREE.Vector2();
  c.x = THREE.Curve.Utils.interpolate(d.x, e.x, f.x, b.x, a);
  c.y = THREE.Curve.Utils.interpolate(d.y, e.y, f.y, b.y, a);
  return c;
};

THREE.EllipseCurve = function (a, b, c, d, e, f, g) {
  this.aX = a;
  this.aY = b;
  this.xRadius = c;
  this.yRadius = d;
  this.aStartAngle = e;
  this.aEndAngle = f;
  this.aClockwise = g;
};

THREE.EllipseCurve.prototype = Object.create(THREE.Curve.prototype);
THREE.EllipseCurve.prototype.constructor = THREE.EllipseCurve;

THREE.EllipseCurve.prototype.getPoint = function (a) {
  var b = this.aEndAngle - this.aStartAngle;
  0 > b && (b += 2 * Math.PI);
  b > 2 * Math.PI && (b -= 2 * Math.PI);
  a = !0 === this.aClockwise ? this.aEndAngle + (1 - a) * (2 * Math.PI - b) : this.aStartAngle + a * b;
  b = new THREE.Vector2();
  b.x = this.aX + this.xRadius * Math.cos(a);
  b.y = this.aY + this.yRadius * Math.sin(a);
  return b;
};

THREE.ArcCurve = function (a, b, c, d, e, f) {
  THREE.EllipseCurve.call(this, a, b, c, c, d, e, f);
};

THREE.ArcCurve.prototype = Object.create(THREE.EllipseCurve.prototype);
THREE.ArcCurve.prototype.constructor = THREE.ArcCurve;
THREE.LineCurve3 = THREE.Curve.create(function (a, b) {
  this.v1 = a;
  this.v2 = b;
}, function (a) {
  var b = new THREE.Vector3();
  b.subVectors(this.v2, this.v1);
  b.multiplyScalar(a);
  b.add(this.v1);
  return b;
});
THREE.QuadraticBezierCurve3 = THREE.Curve.create(function (a, b, c) {
  this.v0 = a;
  this.v1 = b;
  this.v2 = c;
}, function (a) {
  var b = new THREE.Vector3();
  b.x = THREE.Shape.Utils.b2(a, this.v0.x, this.v1.x, this.v2.x);
  b.y = THREE.Shape.Utils.b2(a, this.v0.y, this.v1.y, this.v2.y);
  b.z = THREE.Shape.Utils.b2(a, this.v0.z, this.v1.z, this.v2.z);
  return b;
});
THREE.CubicBezierCurve3 = THREE.Curve.create(function (a, b, c, d) {
  this.v0 = a;
  this.v1 = b;
  this.v2 = c;
  this.v3 = d;
}, function (a) {
  var b = new THREE.Vector3();
  b.x = THREE.Shape.Utils.b3(a, this.v0.x, this.v1.x, this.v2.x, this.v3.x);
  b.y = THREE.Shape.Utils.b3(a, this.v0.y, this.v1.y, this.v2.y, this.v3.y);
  b.z = THREE.Shape.Utils.b3(a, this.v0.z, this.v1.z, this.v2.z, this.v3.z);
  return b;
});
THREE.SplineCurve3 = THREE.Curve.create(function (a) {
  this.points = void 0 == a ? [] : a;
}, function (a) {
  var b = this.points;
  a *= b.length - 1;
  var c = Math.floor(a);
  a -= c;
  var d = b[0 == c ? c : c - 1],
      e = b[c],
      f = b[c > b.length - 2 ? b.length - 1 : c + 1],
      b = b[c > b.length - 3 ? b.length - 1 : c + 2],
      c = new THREE.Vector3();
  c.x = THREE.Curve.Utils.interpolate(d.x, e.x, f.x, b.x, a);
  c.y = THREE.Curve.Utils.interpolate(d.y, e.y, f.y, b.y, a);
  c.z = THREE.Curve.Utils.interpolate(d.z, e.z, f.z, b.z, a);
  return c;
});
THREE.ClosedSplineCurve3 = THREE.Curve.create(function (a) {
  this.points = void 0 == a ? [] : a;
}, function (a) {
  var b = this.points;
  a *= b.length - 0;
  var c = Math.floor(a);
  a -= c;
  var c = c + (0 < c ? 0 : (Math.floor(Math.abs(c) / b.length) + 1) * b.length),
      d = b[(c - 1) % b.length],
      e = b[c % b.length],
      f = b[(c + 1) % b.length],
      b = b[(c + 2) % b.length],
      c = new THREE.Vector3();
  c.x = THREE.Curve.Utils.interpolate(d.x, e.x, f.x, b.x, a);
  c.y = THREE.Curve.Utils.interpolate(d.y, e.y, f.y, b.y, a);
  c.z = THREE.Curve.Utils.interpolate(d.z, e.z, f.z, b.z, a);
  return c;
});
THREE.AnimationHandler = {
  LINEAR: 0,
  CATMULLROM: 1,
  CATMULLROM_FORWARD: 2,
  add: function add() {
    THREE.warn("THREE.AnimationHandler.add() has been deprecated.");
  },
  get: function get() {
    THREE.warn("THREE.AnimationHandler.get() has been deprecated.");
  },
  remove: function remove() {
    THREE.warn("THREE.AnimationHandler.remove() has been deprecated.");
  },
  animations: [],
  init: function init(a) {
    if (!0 === a.initialized) return a;

    for (var b = 0; b < a.hierarchy.length; b++) {
      for (var c = 0; c < a.hierarchy[b].keys.length; c++) {
        if (0 > a.hierarchy[b].keys[c].time && (a.hierarchy[b].keys[c].time = 0), void 0 !== a.hierarchy[b].keys[c].rot && !(a.hierarchy[b].keys[c].rot instanceof THREE.Quaternion)) {
          var d = a.hierarchy[b].keys[c].rot;
          a.hierarchy[b].keys[c].rot = new THREE.Quaternion().fromArray(d);
        }
      }

      if (a.hierarchy[b].keys.length && void 0 !== a.hierarchy[b].keys[0].morphTargets) {
        d = {};

        for (c = 0; c < a.hierarchy[b].keys.length; c++) {
          for (var e = 0; e < a.hierarchy[b].keys[c].morphTargets.length; e++) {
            var f = a.hierarchy[b].keys[c].morphTargets[e];
            d[f] = -1;
          }
        }

        a.hierarchy[b].usedMorphTargets = d;

        for (c = 0; c < a.hierarchy[b].keys.length; c++) {
          var g = {};

          for (f in d) {
            for (e = 0; e < a.hierarchy[b].keys[c].morphTargets.length; e++) {
              if (a.hierarchy[b].keys[c].morphTargets[e] === f) {
                g[f] = a.hierarchy[b].keys[c].morphTargetsInfluences[e];
                break;
              }
            }

            e === a.hierarchy[b].keys[c].morphTargets.length && (g[f] = 0);
          }

          a.hierarchy[b].keys[c].morphTargetsInfluences = g;
        }
      }

      for (c = 1; c < a.hierarchy[b].keys.length; c++) {
        a.hierarchy[b].keys[c].time === a.hierarchy[b].keys[c - 1].time && (a.hierarchy[b].keys.splice(c, 1), c--);
      }

      for (c = 0; c < a.hierarchy[b].keys.length; c++) {
        a.hierarchy[b].keys[c].index = c;
      }
    }

    a.initialized = !0;
    return a;
  },
  parse: function parse(a) {
    var b = function b(a, c) {
      c.push(a);

      for (var d = 0; d < a.children.length; d++) {
        b(a.children[d], c);
      }
    },
        c = [];

    if (a instanceof THREE.SkinnedMesh) for (var d = 0; d < a.skeleton.bones.length; d++) {
      c.push(a.skeleton.bones[d]);
    } else b(a, c);
    return c;
  },
  play: function play(a) {
    -1 === this.animations.indexOf(a) && this.animations.push(a);
  },
  stop: function stop(a) {
    a = this.animations.indexOf(a);
    -1 !== a && this.animations.splice(a, 1);
  },
  update: function update(a) {
    for (var b = 0; b < this.animations.length; b++) {
      this.animations[b].resetBlendWeights();
    }

    for (b = 0; b < this.animations.length; b++) {
      this.animations[b].update(a);
    }
  }
};

THREE.Animation = function (a, b) {
  this.root = a;
  this.data = THREE.AnimationHandler.init(b);
  this.hierarchy = THREE.AnimationHandler.parse(a);
  this.currentTime = 0;
  this.timeScale = 1;
  this.isPlaying = !1;
  this.loop = !0;
  this.weight = 0;
  this.interpolationType = THREE.AnimationHandler.LINEAR;
};

THREE.Animation.prototype = {
  constructor: THREE.Animation,
  keyTypes: ["pos", "rot", "scl"],
  play: function play(a, b) {
    this.currentTime = void 0 !== a ? a : 0;
    this.weight = void 0 !== b ? b : 1;
    this.isPlaying = !0;
    this.reset();
    THREE.AnimationHandler.play(this);
  },
  stop: function stop() {
    this.isPlaying = !1;
    THREE.AnimationHandler.stop(this);
  },
  reset: function reset() {
    for (var a = 0, b = this.hierarchy.length; a < b; a++) {
      var c = this.hierarchy[a];
      void 0 === c.animationCache && (c.animationCache = {
        animations: {},
        blending: {
          positionWeight: 0,
          quaternionWeight: 0,
          scaleWeight: 0
        }
      });
      var d = this.data.name,
          e = c.animationCache.animations,
          f = e[d];
      void 0 === f && (f = {
        prevKey: {
          pos: 0,
          rot: 0,
          scl: 0
        },
        nextKey: {
          pos: 0,
          rot: 0,
          scl: 0
        },
        originalMatrix: c.matrix
      }, e[d] = f);

      for (c = 0; 3 > c; c++) {
        for (var d = this.keyTypes[c], e = this.data.hierarchy[a].keys[0], g = this.getNextKeyWith(d, a, 1); g.time < this.currentTime && g.index > e.index;) {
          e = g, g = this.getNextKeyWith(d, a, g.index + 1);
        }

        f.prevKey[d] = e;
        f.nextKey[d] = g;
      }
    }
  },
  resetBlendWeights: function resetBlendWeights() {
    for (var a = 0, b = this.hierarchy.length; a < b; a++) {
      var c = this.hierarchy[a].animationCache;
      void 0 !== c && (c = c.blending, c.positionWeight = 0, c.quaternionWeight = 0, c.scaleWeight = 0);
    }
  },
  update: function () {
    var a = [],
        b = new THREE.Vector3(),
        c = new THREE.Vector3(),
        d = new THREE.Quaternion(),
        e = function e(a, b) {
      var c = [],
          d = [],
          e,
          q,
          n,
          t,
          r,
          s;
      e = (a.length - 1) * b;
      q = Math.floor(e);
      e -= q;
      c[0] = 0 === q ? q : q - 1;
      c[1] = q;
      c[2] = q > a.length - 2 ? q : q + 1;
      c[3] = q > a.length - 3 ? q : q + 2;
      q = a[c[0]];
      t = a[c[1]];
      r = a[c[2]];
      s = a[c[3]];
      c = e * e;
      n = e * c;
      d[0] = f(q[0], t[0], r[0], s[0], e, c, n);
      d[1] = f(q[1], t[1], r[1], s[1], e, c, n);
      d[2] = f(q[2], t[2], r[2], s[2], e, c, n);
      return d;
    },
        f = function f(a, b, c, d, e, _f, n) {
      a = .5 * (c - a);
      d = .5 * (d - b);
      return (2 * (b - c) + a + d) * n + (-3 * (b - c) - 2 * a - d) * _f + a * e + b;
    };

    return function (f) {
      if (!1 !== this.isPlaying && (this.currentTime += f * this.timeScale, 0 !== this.weight)) {
        f = this.data.length;
        if (this.currentTime > f || 0 > this.currentTime) this.loop ? (this.currentTime %= f, 0 > this.currentTime && (this.currentTime += f), this.reset()) : this.stop();
        f = 0;

        for (var h = this.hierarchy.length; f < h; f++) {
          for (var k = this.hierarchy[f], l = k.animationCache.animations[this.data.name], p = k.animationCache.blending, q = 0; 3 > q; q++) {
            var n = this.keyTypes[q],
                t = l.prevKey[n],
                r = l.nextKey[n];

            if (0 < this.timeScale && r.time <= this.currentTime || 0 > this.timeScale && t.time >= this.currentTime) {
              t = this.data.hierarchy[f].keys[0];

              for (r = this.getNextKeyWith(n, f, 1); r.time < this.currentTime && r.index > t.index;) {
                t = r, r = this.getNextKeyWith(n, f, r.index + 1);
              }

              l.prevKey[n] = t;
              l.nextKey[n] = r;
            }

            var s = (this.currentTime - t.time) / (r.time - t.time),
                u = t[n],
                v = r[n];
            0 > s && (s = 0);
            1 < s && (s = 1);
            if ("pos" === n) {
              if (this.interpolationType === THREE.AnimationHandler.LINEAR) c.x = u[0] + (v[0] - u[0]) * s, c.y = u[1] + (v[1] - u[1]) * s, c.z = u[2] + (v[2] - u[2]) * s, t = this.weight / (this.weight + p.positionWeight), k.position.lerp(c, t), p.positionWeight += this.weight;else {
                if (this.interpolationType === THREE.AnimationHandler.CATMULLROM || this.interpolationType === THREE.AnimationHandler.CATMULLROM_FORWARD) a[0] = this.getPrevKeyWith("pos", f, t.index - 1).pos, a[1] = u, a[2] = v, a[3] = this.getNextKeyWith("pos", f, r.index + 1).pos, s = .33 * s + .33, r = e(a, s), t = this.weight / (this.weight + p.positionWeight), p.positionWeight += this.weight, n = k.position, n.x += (r[0] - n.x) * t, n.y += (r[1] - n.y) * t, n.z += (r[2] - n.z) * t, this.interpolationType === THREE.AnimationHandler.CATMULLROM_FORWARD && (s = e(a, 1.01 * s), b.set(s[0], s[1], s[2]), b.sub(n), b.y = 0, b.normalize(), s = Math.atan2(b.x, b.z), k.rotation.set(0, s, 0));
              }
            } else "rot" === n ? (THREE.Quaternion.slerp(u, v, d, s), 0 === p.quaternionWeight ? (k.quaternion.copy(d), p.quaternionWeight = this.weight) : (t = this.weight / (this.weight + p.quaternionWeight), THREE.Quaternion.slerp(k.quaternion, d, k.quaternion, t), p.quaternionWeight += this.weight)) : "scl" === n && (c.x = u[0] + (v[0] - u[0]) * s, c.y = u[1] + (v[1] - u[1]) * s, c.z = u[2] + (v[2] - u[2]) * s, t = this.weight / (this.weight + p.scaleWeight), k.scale.lerp(c, t), p.scaleWeight += this.weight);
          }
        }

        return !0;
      }
    };
  }(),
  getNextKeyWith: function getNextKeyWith(a, b, c) {
    var d = this.data.hierarchy[b].keys;

    for (c = this.interpolationType === THREE.AnimationHandler.CATMULLROM || this.interpolationType === THREE.AnimationHandler.CATMULLROM_FORWARD ? c < d.length - 1 ? c : d.length - 1 : c % d.length; c < d.length; c++) {
      if (void 0 !== d[c][a]) return d[c];
    }

    return this.data.hierarchy[b].keys[0];
  },
  getPrevKeyWith: function getPrevKeyWith(a, b, c) {
    var d = this.data.hierarchy[b].keys;

    for (c = this.interpolationType === THREE.AnimationHandler.CATMULLROM || this.interpolationType === THREE.AnimationHandler.CATMULLROM_FORWARD ? 0 < c ? c : 0 : 0 <= c ? c : c + d.length; 0 <= c; c--) {
      if (void 0 !== d[c][a]) return d[c];
    }

    return this.data.hierarchy[b].keys[d.length - 1];
  }
};

THREE.KeyFrameAnimation = function (a) {
  this.root = a.node;
  this.data = THREE.AnimationHandler.init(a);
  this.hierarchy = THREE.AnimationHandler.parse(this.root);
  this.currentTime = 0;
  this.timeScale = .001;
  this.isPlaying = !1;
  this.loop = this.isPaused = !0;
  a = 0;

  for (var b = this.hierarchy.length; a < b; a++) {
    var c = this.data.hierarchy[a].sids,
        d = this.hierarchy[a];

    if (this.data.hierarchy[a].keys.length && c) {
      for (var e = 0; e < c.length; e++) {
        var f = c[e],
            g = this.getNextKeyWith(f, a, 0);
        g && g.apply(f);
      }

      d.matrixAutoUpdate = !1;
      this.data.hierarchy[a].node.updateMatrix();
      d.matrixWorldNeedsUpdate = !0;
    }
  }
};

THREE.KeyFrameAnimation.prototype = {
  constructor: THREE.KeyFrameAnimation,
  play: function play(a) {
    this.currentTime = void 0 !== a ? a : 0;

    if (!1 === this.isPlaying) {
      this.isPlaying = !0;
      var b = this.hierarchy.length,
          c,
          d;

      for (a = 0; a < b; a++) {
        c = this.hierarchy[a], d = this.data.hierarchy[a], void 0 === d.animationCache && (d.animationCache = {}, d.animationCache.prevKey = null, d.animationCache.nextKey = null, d.animationCache.originalMatrix = c.matrix), c = this.data.hierarchy[a].keys, c.length && (d.animationCache.prevKey = c[0], d.animationCache.nextKey = c[1], this.startTime = Math.min(c[0].time, this.startTime), this.endTime = Math.max(c[c.length - 1].time, this.endTime));
      }

      this.update(0);
    }

    this.isPaused = !1;
    THREE.AnimationHandler.play(this);
  },
  stop: function stop() {
    this.isPaused = this.isPlaying = !1;
    THREE.AnimationHandler.stop(this);

    for (var a = 0; a < this.data.hierarchy.length; a++) {
      var b = this.hierarchy[a],
          c = this.data.hierarchy[a];

      if (void 0 !== c.animationCache) {
        var d = c.animationCache.originalMatrix;
        d.copy(b.matrix);
        b.matrix = d;
        delete c.animationCache;
      }
    }
  },
  update: function update(a) {
    if (!1 !== this.isPlaying) {
      this.currentTime += a * this.timeScale;
      a = this.data.length;
      !0 === this.loop && this.currentTime > a && (this.currentTime %= a);
      this.currentTime = Math.min(this.currentTime, a);
      a = 0;

      for (var b = this.hierarchy.length; a < b; a++) {
        var c = this.hierarchy[a],
            d = this.data.hierarchy[a],
            e = d.keys,
            d = d.animationCache;

        if (e.length) {
          var f = d.prevKey,
              g = d.nextKey;

          if (g.time <= this.currentTime) {
            for (; g.time < this.currentTime && g.index > f.index;) {
              f = g, g = e[f.index + 1];
            }

            d.prevKey = f;
            d.nextKey = g;
          }

          g.time >= this.currentTime ? f.interpolate(g, this.currentTime) : f.interpolate(g, g.time);
          this.data.hierarchy[a].node.updateMatrix();
          c.matrixWorldNeedsUpdate = !0;
        }
      }
    }
  },
  getNextKeyWith: function getNextKeyWith(a, b, c) {
    b = this.data.hierarchy[b].keys;

    for (c %= b.length; c < b.length; c++) {
      if (b[c].hasTarget(a)) return b[c];
    }

    return b[0];
  },
  getPrevKeyWith: function getPrevKeyWith(a, b, c) {
    b = this.data.hierarchy[b].keys;

    for (c = 0 <= c ? c : c + b.length; 0 <= c; c--) {
      if (b[c].hasTarget(a)) return b[c];
    }

    return b[b.length - 1];
  }
};

THREE.MorphAnimation = function (a) {
  this.mesh = a;
  this.frames = a.morphTargetInfluences.length;
  this.currentTime = 0;
  this.duration = 1E3;
  this.loop = !0;
  this.currentFrame = this.lastFrame = 0;
  this.isPlaying = !1;
};

THREE.MorphAnimation.prototype = {
  constructor: THREE.MorphAnimation,
  play: function play() {
    this.isPlaying = !0;
  },
  pause: function pause() {
    this.isPlaying = !1;
  },
  update: function update(a) {
    if (!1 !== this.isPlaying) {
      this.currentTime += a;
      !0 === this.loop && this.currentTime > this.duration && (this.currentTime %= this.duration);
      this.currentTime = Math.min(this.currentTime, this.duration);
      a = this.duration / this.frames;
      var b = Math.floor(this.currentTime / a),
          c = this.mesh.morphTargetInfluences;
      b != this.currentFrame && (c[this.lastFrame] = 0, c[this.currentFrame] = 1, c[b] = 0, this.lastFrame = this.currentFrame, this.currentFrame = b);
      c[b] = this.currentTime % a / a;
      c[this.lastFrame] = 1 - c[b];
    }
  }
};

THREE.BoxGeometry = function (a, b, c, d, e, f) {
  function g(a, b, c, d, e, f, g, s) {
    var u,
        v = h.widthSegments,
        x = h.heightSegments,
        D = e / 2,
        w = f / 2,
        y = h.vertices.length;
    if ("x" === a && "y" === b || "y" === a && "x" === b) u = "z";else if ("x" === a && "z" === b || "z" === a && "x" === b) u = "y", x = h.depthSegments;else if ("z" === a && "y" === b || "y" === a && "z" === b) u = "x", v = h.depthSegments;
    var A = v + 1,
        E = x + 1,
        G = e / v,
        F = f / x,
        z = new THREE.Vector3();
    z[u] = 0 < g ? 1 : -1;

    for (e = 0; e < E; e++) {
      for (f = 0; f < A; f++) {
        var I = new THREE.Vector3();
        I[a] = (f * G - D) * c;
        I[b] = (e * F - w) * d;
        I[u] = g;
        h.vertices.push(I);
      }
    }

    for (e = 0; e < x; e++) {
      for (f = 0; f < v; f++) {
        w = f + A * e, a = f + A * (e + 1), b = f + 1 + A * (e + 1), c = f + 1 + A * e, d = new THREE.Vector2(f / v, 1 - e / x), g = new THREE.Vector2(f / v, 1 - (e + 1) / x), u = new THREE.Vector2((f + 1) / v, 1 - (e + 1) / x), D = new THREE.Vector2((f + 1) / v, 1 - e / x), w = new THREE.Face3(w + y, a + y, c + y), w.normal.copy(z), w.vertexNormals.push(z.clone(), z.clone(), z.clone()), w.materialIndex = s, h.faces.push(w), h.faceVertexUvs[0].push([d, g, D]), w = new THREE.Face3(a + y, b + y, c + y), w.normal.copy(z), w.vertexNormals.push(z.clone(), z.clone(), z.clone()), w.materialIndex = s, h.faces.push(w), h.faceVertexUvs[0].push([g.clone(), u, D.clone()]);
      }
    }
  }

  THREE.Geometry.call(this);
  this.type = "BoxGeometry";
  this.parameters = {
    width: a,
    height: b,
    depth: c,
    widthSegments: d,
    heightSegments: e,
    depthSegments: f
  };
  this.widthSegments = d || 1;
  this.heightSegments = e || 1;
  this.depthSegments = f || 1;
  var h = this;
  d = a / 2;
  e = b / 2;
  f = c / 2;
  g("z", "y", -1, -1, c, b, d, 0);
  g("z", "y", 1, -1, c, b, -d, 1);
  g("x", "z", 1, 1, a, c, e, 2);
  g("x", "z", 1, -1, a, c, -e, 3);
  g("x", "y", 1, -1, a, b, f, 4);
  g("x", "y", -1, -1, a, b, -f, 5);
  this.mergeVertices();
};

THREE.BoxGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.BoxGeometry.prototype.constructor = THREE.BoxGeometry;

THREE.CircleGeometry = function (a, b, c, d) {
  THREE.Geometry.call(this);
  this.type = "CircleGeometry";
  this.parameters = {
    radius: a,
    segments: b,
    thetaStart: c,
    thetaLength: d
  };
  a = a || 50;
  b = void 0 !== b ? Math.max(3, b) : 8;
  c = void 0 !== c ? c : 0;
  d = void 0 !== d ? d : 2 * Math.PI;
  var e,
      f = [];
  e = new THREE.Vector3();
  var g = new THREE.Vector2(.5, .5);
  this.vertices.push(e);
  f.push(g);

  for (e = 0; e <= b; e++) {
    var h = new THREE.Vector3(),
        k = c + e / b * d;
    h.x = a * Math.cos(k);
    h.y = a * Math.sin(k);
    this.vertices.push(h);
    f.push(new THREE.Vector2((h.x / a + 1) / 2, (h.y / a + 1) / 2));
  }

  c = new THREE.Vector3(0, 0, 1);

  for (e = 1; e <= b; e++) {
    this.faces.push(new THREE.Face3(e, e + 1, 0, [c.clone(), c.clone(), c.clone()])), this.faceVertexUvs[0].push([f[e].clone(), f[e + 1].clone(), g.clone()]);
  }

  this.computeFaceNormals();
  this.boundingSphere = new THREE.Sphere(new THREE.Vector3(), a);
};

THREE.CircleGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.CircleGeometry.prototype.constructor = THREE.CircleGeometry;

THREE.CubeGeometry = function (a, b, c, d, e, f) {
  THREE.warn("THREE.CubeGeometry has been renamed to THREE.BoxGeometry.");
  return new THREE.BoxGeometry(a, b, c, d, e, f);
};

THREE.CylinderGeometry = function (a, b, c, d, e, f, g, h) {
  THREE.Geometry.call(this);
  this.type = "CylinderGeometry";
  this.parameters = {
    radiusTop: a,
    radiusBottom: b,
    height: c,
    radialSegments: d,
    heightSegments: e,
    openEnded: f,
    thetaStart: g,
    thetaLength: h
  };
  a = void 0 !== a ? a : 20;
  b = void 0 !== b ? b : 20;
  c = void 0 !== c ? c : 100;
  d = d || 8;
  e = e || 1;
  f = void 0 !== f ? f : !1;
  g = void 0 !== g ? g : 0;
  h = void 0 !== h ? h : 2 * Math.PI;
  var k = c / 2,
      l,
      p,
      q = [],
      n = [];

  for (p = 0; p <= e; p++) {
    var t = [],
        r = [],
        s = p / e,
        u = s * (b - a) + a;

    for (l = 0; l <= d; l++) {
      var v = l / d,
          x = new THREE.Vector3();
      x.x = u * Math.sin(v * h + g);
      x.y = -s * c + k;
      x.z = u * Math.cos(v * h + g);
      this.vertices.push(x);
      t.push(this.vertices.length - 1);
      r.push(new THREE.Vector2(v, 1 - s));
    }

    q.push(t);
    n.push(r);
  }

  c = (b - a) / c;

  for (l = 0; l < d; l++) {
    for (0 !== a ? (g = this.vertices[q[0][l]].clone(), h = this.vertices[q[0][l + 1]].clone()) : (g = this.vertices[q[1][l]].clone(), h = this.vertices[q[1][l + 1]].clone()), g.setY(Math.sqrt(g.x * g.x + g.z * g.z) * c).normalize(), h.setY(Math.sqrt(h.x * h.x + h.z * h.z) * c).normalize(), p = 0; p < e; p++) {
      var t = q[p][l],
          r = q[p + 1][l],
          s = q[p + 1][l + 1],
          u = q[p][l + 1],
          v = g.clone(),
          x = g.clone(),
          D = h.clone(),
          w = h.clone(),
          y = n[p][l].clone(),
          A = n[p + 1][l].clone(),
          E = n[p + 1][l + 1].clone(),
          G = n[p][l + 1].clone();
      this.faces.push(new THREE.Face3(t, r, u, [v, x, w]));
      this.faceVertexUvs[0].push([y, A, G]);
      this.faces.push(new THREE.Face3(r, s, u, [x.clone(), D, w.clone()]));
      this.faceVertexUvs[0].push([A.clone(), E, G.clone()]);
    }
  }

  if (!1 === f && 0 < a) for (this.vertices.push(new THREE.Vector3(0, k, 0)), l = 0; l < d; l++) {
    t = q[0][l], r = q[0][l + 1], s = this.vertices.length - 1, v = new THREE.Vector3(0, 1, 0), x = new THREE.Vector3(0, 1, 0), D = new THREE.Vector3(0, 1, 0), y = n[0][l].clone(), A = n[0][l + 1].clone(), E = new THREE.Vector2(A.x, 0), this.faces.push(new THREE.Face3(t, r, s, [v, x, D])), this.faceVertexUvs[0].push([y, A, E]);
  }
  if (!1 === f && 0 < b) for (this.vertices.push(new THREE.Vector3(0, -k, 0)), l = 0; l < d; l++) {
    t = q[e][l + 1], r = q[e][l], s = this.vertices.length - 1, v = new THREE.Vector3(0, -1, 0), x = new THREE.Vector3(0, -1, 0), D = new THREE.Vector3(0, -1, 0), y = n[e][l + 1].clone(), A = n[e][l].clone(), E = new THREE.Vector2(A.x, 1), this.faces.push(new THREE.Face3(t, r, s, [v, x, D])), this.faceVertexUvs[0].push([y, A, E]);
  }
  this.computeFaceNormals();
};

THREE.CylinderGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.CylinderGeometry.prototype.constructor = THREE.CylinderGeometry;

THREE.ExtrudeGeometry = function (a, b) {
  "undefined" !== typeof a && (THREE.Geometry.call(this), this.type = "ExtrudeGeometry", a = a instanceof Array ? a : [a], this.addShapeList(a, b), this.computeFaceNormals());
};

THREE.ExtrudeGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.ExtrudeGeometry.prototype.constructor = THREE.ExtrudeGeometry;

THREE.ExtrudeGeometry.prototype.addShapeList = function (a, b) {
  for (var c = a.length, d = 0; d < c; d++) {
    this.addShape(a[d], b);
  }
};

THREE.ExtrudeGeometry.prototype.addShape = function (a, b) {
  function c(a, b, c) {
    b || THREE.error("THREE.ExtrudeGeometry: vec does not exist");
    return b.clone().multiplyScalar(c).add(a);
  }

  function d(a, b, c) {
    var d = 1,
        d = a.x - b.x,
        e = a.y - b.y,
        f = c.x - a.x,
        g = c.y - a.y,
        h = d * d + e * e;

    if (1E-10 < Math.abs(d * g - e * f)) {
      var k = Math.sqrt(h),
          l = Math.sqrt(f * f + g * g),
          h = b.x - e / k;
      b = b.y + d / k;
      f = ((c.x - g / l - h) * g - (c.y + f / l - b) * f) / (d * g - e * f);
      c = h + d * f - a.x;
      a = b + e * f - a.y;
      d = c * c + a * a;
      if (2 >= d) return new THREE.Vector2(c, a);
      d = Math.sqrt(d / 2);
    } else a = !1, 1E-10 < d ? 1E-10 < f && (a = !0) : -1E-10 > d ? -1E-10 > f && (a = !0) : Math.sign(e) == Math.sign(g) && (a = !0), a ? (c = -e, a = d, d = Math.sqrt(h)) : (c = d, a = e, d = Math.sqrt(h / 2));

    return new THREE.Vector2(c / d, a / d);
  }

  function e(a, b) {
    var c, d;

    for (O = a.length; 0 <= --O;) {
      c = O;
      d = O - 1;
      0 > d && (d = a.length - 1);

      for (var e = 0, f = t + 2 * p, e = 0; e < f; e++) {
        var g = oa * e,
            h = oa * (e + 1),
            k = b + c + g,
            g = b + d + g,
            l = b + d + h,
            h = b + c + h,
            k = k + U,
            g = g + U,
            l = l + U,
            h = h + U;
        I.faces.push(new THREE.Face3(k, g, h, null, null, x));
        I.faces.push(new THREE.Face3(g, l, h, null, null, x));
        k = D.generateSideWallUV(I, k, g, l, h);
        I.faceVertexUvs[0].push([k[0], k[1], k[3]]);
        I.faceVertexUvs[0].push([k[1], k[2], k[3]]);
      }
    }
  }

  function f(a, b, c) {
    I.vertices.push(new THREE.Vector3(a, b, c));
  }

  function g(a, b, c) {
    a += U;
    b += U;
    c += U;
    I.faces.push(new THREE.Face3(a, b, c, null, null, v));
    a = D.generateTopUV(I, a, b, c);
    I.faceVertexUvs[0].push(a);
  }

  var h = void 0 !== b.amount ? b.amount : 100,
      k = void 0 !== b.bevelThickness ? b.bevelThickness : 6,
      l = void 0 !== b.bevelSize ? b.bevelSize : k - 2,
      p = void 0 !== b.bevelSegments ? b.bevelSegments : 3,
      q = void 0 !== b.bevelEnabled ? b.bevelEnabled : !0,
      n = void 0 !== b.curveSegments ? b.curveSegments : 12,
      t = void 0 !== b.steps ? b.steps : 1,
      r = b.extrudePath,
      s,
      u = !1,
      v = b.material,
      x = b.extrudeMaterial,
      D = void 0 !== b.UVGenerator ? b.UVGenerator : THREE.ExtrudeGeometry.WorldUVGenerator,
      w,
      y,
      A,
      E;
  r && (s = r.getSpacedPoints(t), u = !0, q = !1, w = void 0 !== b.frames ? b.frames : new THREE.TubeGeometry.FrenetFrames(r, t, !1), y = new THREE.Vector3(), A = new THREE.Vector3(), E = new THREE.Vector3());
  q || (l = k = p = 0);
  var G,
      F,
      z,
      I = this,
      U = this.vertices.length,
      r = a.extractPoints(n),
      n = r.shape,
      M = r.holes;

  if (r = !THREE.Shape.Utils.isClockWise(n)) {
    n = n.reverse();
    F = 0;

    for (z = M.length; F < z; F++) {
      G = M[F], THREE.Shape.Utils.isClockWise(G) && (M[F] = G.reverse());
    }

    r = !1;
  }

  var H = THREE.Shape.Utils.triangulateShape(n, M),
      L = n;
  F = 0;

  for (z = M.length; F < z; F++) {
    G = M[F], n = n.concat(G);
  }

  var P,
      N,
      R,
      V,
      J,
      oa = n.length,
      ja,
      ha = H.length,
      r = [],
      O = 0;
  R = L.length;
  P = R - 1;

  for (N = O + 1; O < R; O++, P++, N++) {
    P === R && (P = 0), N === R && (N = 0), r[O] = d(L[O], L[P], L[N]);
  }

  var ca = [],
      ba,
      qa = r.concat();
  F = 0;

  for (z = M.length; F < z; F++) {
    G = M[F];
    ba = [];
    O = 0;
    R = G.length;
    P = R - 1;

    for (N = O + 1; O < R; O++, P++, N++) {
      P === R && (P = 0), N === R && (N = 0), ba[O] = d(G[O], G[P], G[N]);
    }

    ca.push(ba);
    qa = qa.concat(ba);
  }

  for (P = 0; P < p; P++) {
    R = P / p;
    V = k * (1 - R);
    N = l * Math.sin(R * Math.PI / 2);
    O = 0;

    for (R = L.length; O < R; O++) {
      J = c(L[O], r[O], N), f(J.x, J.y, -V);
    }

    F = 0;

    for (z = M.length; F < z; F++) {
      for (G = M[F], ba = ca[F], O = 0, R = G.length; O < R; O++) {
        J = c(G[O], ba[O], N), f(J.x, J.y, -V);
      }
    }
  }

  N = l;

  for (O = 0; O < oa; O++) {
    J = q ? c(n[O], qa[O], N) : n[O], u ? (A.copy(w.normals[0]).multiplyScalar(J.x), y.copy(w.binormals[0]).multiplyScalar(J.y), E.copy(s[0]).add(A).add(y), f(E.x, E.y, E.z)) : f(J.x, J.y, 0);
  }

  for (R = 1; R <= t; R++) {
    for (O = 0; O < oa; O++) {
      J = q ? c(n[O], qa[O], N) : n[O], u ? (A.copy(w.normals[R]).multiplyScalar(J.x), y.copy(w.binormals[R]).multiplyScalar(J.y), E.copy(s[R]).add(A).add(y), f(E.x, E.y, E.z)) : f(J.x, J.y, h / t * R);
    }
  }

  for (P = p - 1; 0 <= P; P--) {
    R = P / p;
    V = k * (1 - R);
    N = l * Math.sin(R * Math.PI / 2);
    O = 0;

    for (R = L.length; O < R; O++) {
      J = c(L[O], r[O], N), f(J.x, J.y, h + V);
    }

    F = 0;

    for (z = M.length; F < z; F++) {
      for (G = M[F], ba = ca[F], O = 0, R = G.length; O < R; O++) {
        J = c(G[O], ba[O], N), u ? f(J.x, J.y + s[t - 1].y, s[t - 1].x + V) : f(J.x, J.y, h + V);
      }
    }
  }

  (function () {
    if (q) {
      var a;
      a = 0 * oa;

      for (O = 0; O < ha; O++) {
        ja = H[O], g(ja[2] + a, ja[1] + a, ja[0] + a);
      }

      a = t + 2 * p;
      a *= oa;

      for (O = 0; O < ha; O++) {
        ja = H[O], g(ja[0] + a, ja[1] + a, ja[2] + a);
      }
    } else {
      for (O = 0; O < ha; O++) {
        ja = H[O], g(ja[2], ja[1], ja[0]);
      }

      for (O = 0; O < ha; O++) {
        ja = H[O], g(ja[0] + oa * t, ja[1] + oa * t, ja[2] + oa * t);
      }
    }
  })();

  (function () {
    var a = 0;
    e(L, a);
    a += L.length;
    F = 0;

    for (z = M.length; F < z; F++) {
      G = M[F], e(G, a), a += G.length;
    }
  })();
};

THREE.ExtrudeGeometry.WorldUVGenerator = {
  generateTopUV: function generateTopUV(a, b, c, d) {
    a = a.vertices;
    b = a[b];
    c = a[c];
    d = a[d];
    return [new THREE.Vector2(b.x, b.y), new THREE.Vector2(c.x, c.y), new THREE.Vector2(d.x, d.y)];
  },
  generateSideWallUV: function generateSideWallUV(a, b, c, d, e) {
    a = a.vertices;
    b = a[b];
    c = a[c];
    d = a[d];
    e = a[e];
    return .01 > Math.abs(b.y - c.y) ? [new THREE.Vector2(b.x, 1 - b.z), new THREE.Vector2(c.x, 1 - c.z), new THREE.Vector2(d.x, 1 - d.z), new THREE.Vector2(e.x, 1 - e.z)] : [new THREE.Vector2(b.y, 1 - b.z), new THREE.Vector2(c.y, 1 - c.z), new THREE.Vector2(d.y, 1 - d.z), new THREE.Vector2(e.y, 1 - e.z)];
  }
};

THREE.ShapeGeometry = function (a, b) {
  THREE.Geometry.call(this);
  this.type = "ShapeGeometry";
  !1 === a instanceof Array && (a = [a]);
  this.addShapeList(a, b);
  this.computeFaceNormals();
};

THREE.ShapeGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.ShapeGeometry.prototype.constructor = THREE.ShapeGeometry;

THREE.ShapeGeometry.prototype.addShapeList = function (a, b) {
  for (var c = 0, d = a.length; c < d; c++) {
    this.addShape(a[c], b);
  }

  return this;
};

THREE.ShapeGeometry.prototype.addShape = function (a, b) {
  void 0 === b && (b = {});
  var c = b.material,
      d = void 0 === b.UVGenerator ? THREE.ExtrudeGeometry.WorldUVGenerator : b.UVGenerator,
      e,
      f,
      g,
      h = this.vertices.length;
  e = a.extractPoints(void 0 !== b.curveSegments ? b.curveSegments : 12);
  var k = e.shape,
      l = e.holes;
  if (!THREE.Shape.Utils.isClockWise(k)) for (k = k.reverse(), e = 0, f = l.length; e < f; e++) {
    g = l[e], THREE.Shape.Utils.isClockWise(g) && (l[e] = g.reverse());
  }
  var p = THREE.Shape.Utils.triangulateShape(k, l);
  e = 0;

  for (f = l.length; e < f; e++) {
    g = l[e], k = k.concat(g);
  }

  l = k.length;
  f = p.length;

  for (e = 0; e < l; e++) {
    g = k[e], this.vertices.push(new THREE.Vector3(g.x, g.y, 0));
  }

  for (e = 0; e < f; e++) {
    l = p[e], k = l[0] + h, g = l[1] + h, l = l[2] + h, this.faces.push(new THREE.Face3(k, g, l, null, null, c)), this.faceVertexUvs[0].push(d.generateTopUV(this, k, g, l));
  }
};

THREE.LatheGeometry = function (a, b, c, d) {
  THREE.Geometry.call(this);
  this.type = "LatheGeometry";
  this.parameters = {
    points: a,
    segments: b,
    phiStart: c,
    phiLength: d
  };
  b = b || 12;
  c = c || 0;
  d = d || 2 * Math.PI;

  for (var e = 1 / (a.length - 1), f = 1 / b, g = 0, h = b; g <= h; g++) {
    for (var k = c + g * f * d, l = Math.cos(k), p = Math.sin(k), k = 0, q = a.length; k < q; k++) {
      var n = a[k],
          t = new THREE.Vector3();
      t.x = l * n.x - p * n.y;
      t.y = p * n.x + l * n.y;
      t.z = n.z;
      this.vertices.push(t);
    }
  }

  c = a.length;
  g = 0;

  for (h = b; g < h; g++) {
    for (k = 0, q = a.length - 1; k < q; k++) {
      b = p = k + c * g;
      d = p + c;
      var l = p + 1 + c,
          p = p + 1,
          n = g * f,
          t = k * e,
          r = n + f,
          s = t + e;
      this.faces.push(new THREE.Face3(b, d, p));
      this.faceVertexUvs[0].push([new THREE.Vector2(n, t), new THREE.Vector2(r, t), new THREE.Vector2(n, s)]);
      this.faces.push(new THREE.Face3(d, l, p));
      this.faceVertexUvs[0].push([new THREE.Vector2(r, t), new THREE.Vector2(r, s), new THREE.Vector2(n, s)]);
    }
  }

  this.mergeVertices();
  this.computeFaceNormals();
  this.computeVertexNormals();
};

THREE.LatheGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.LatheGeometry.prototype.constructor = THREE.LatheGeometry;

THREE.PlaneGeometry = function (a, b, c, d) {
  console.info("THREE.PlaneGeometry: Consider using THREE.PlaneBufferGeometry for lower memory footprint.");
  THREE.Geometry.call(this);
  this.type = "PlaneGeometry";
  this.parameters = {
    width: a,
    height: b,
    widthSegments: c,
    heightSegments: d
  };
  this.fromBufferGeometry(new THREE.PlaneBufferGeometry(a, b, c, d));
};

THREE.PlaneGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.PlaneGeometry.prototype.constructor = THREE.PlaneGeometry;

THREE.PlaneBufferGeometry = function (a, b, c, d) {
  THREE.BufferGeometry.call(this);
  this.type = "PlaneBufferGeometry";
  this.parameters = {
    width: a,
    height: b,
    widthSegments: c,
    heightSegments: d
  };
  var e = a / 2,
      f = b / 2;
  c = c || 1;
  d = d || 1;
  var g = c + 1,
      h = d + 1,
      k = a / c,
      l = b / d;
  b = new Float32Array(g * h * 3);
  a = new Float32Array(g * h * 3);

  for (var p = new Float32Array(g * h * 2), q = 0, n = 0, t = 0; t < h; t++) {
    for (var r = t * l - f, s = 0; s < g; s++) {
      b[q] = s * k - e, b[q + 1] = -r, a[q + 2] = 1, p[n] = s / c, p[n + 1] = 1 - t / d, q += 3, n += 2;
    }
  }

  q = 0;
  e = new (65535 < b.length / 3 ? Uint32Array : Uint16Array)(c * d * 6);

  for (t = 0; t < d; t++) {
    for (s = 0; s < c; s++) {
      f = s + g * (t + 1), h = s + 1 + g * (t + 1), k = s + 1 + g * t, e[q] = s + g * t, e[q + 1] = f, e[q + 2] = k, e[q + 3] = f, e[q + 4] = h, e[q + 5] = k, q += 6;
    }
  }

  this.addAttribute("index", new THREE.BufferAttribute(e, 1));
  this.addAttribute("position", new THREE.BufferAttribute(b, 3));
  this.addAttribute("normal", new THREE.BufferAttribute(a, 3));
  this.addAttribute("uv", new THREE.BufferAttribute(p, 2));
};

THREE.PlaneBufferGeometry.prototype = Object.create(THREE.BufferGeometry.prototype);
THREE.PlaneBufferGeometry.prototype.constructor = THREE.PlaneBufferGeometry;

THREE.RingGeometry = function (a, b, c, d, e, f) {
  THREE.Geometry.call(this);
  this.type = "RingGeometry";
  this.parameters = {
    innerRadius: a,
    outerRadius: b,
    thetaSegments: c,
    phiSegments: d,
    thetaStart: e,
    thetaLength: f
  };
  a = a || 0;
  b = b || 50;
  e = void 0 !== e ? e : 0;
  f = void 0 !== f ? f : 2 * Math.PI;
  c = void 0 !== c ? Math.max(3, c) : 8;
  d = void 0 !== d ? Math.max(1, d) : 8;
  var g,
      h = [],
      k = a,
      l = (b - a) / d;

  for (a = 0; a < d + 1; a++) {
    for (g = 0; g < c + 1; g++) {
      var p = new THREE.Vector3(),
          q = e + g / c * f;
      p.x = k * Math.cos(q);
      p.y = k * Math.sin(q);
      this.vertices.push(p);
      h.push(new THREE.Vector2((p.x / b + 1) / 2, (p.y / b + 1) / 2));
    }

    k += l;
  }

  b = new THREE.Vector3(0, 0, 1);

  for (a = 0; a < d; a++) {
    for (e = a * (c + 1), g = 0; g < c; g++) {
      f = q = g + e, l = q + c + 1, p = q + c + 2, this.faces.push(new THREE.Face3(f, l, p, [b.clone(), b.clone(), b.clone()])), this.faceVertexUvs[0].push([h[f].clone(), h[l].clone(), h[p].clone()]), f = q, l = q + c + 2, p = q + 1, this.faces.push(new THREE.Face3(f, l, p, [b.clone(), b.clone(), b.clone()])), this.faceVertexUvs[0].push([h[f].clone(), h[l].clone(), h[p].clone()]);
    }
  }

  this.computeFaceNormals();
  this.boundingSphere = new THREE.Sphere(new THREE.Vector3(), k);
};

THREE.RingGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.RingGeometry.prototype.constructor = THREE.RingGeometry;

THREE.SphereGeometry = function (a, b, c, d, e, f, g) {
  THREE.Geometry.call(this);
  this.type = "SphereGeometry";
  this.parameters = {
    radius: a,
    widthSegments: b,
    heightSegments: c,
    phiStart: d,
    phiLength: e,
    thetaStart: f,
    thetaLength: g
  };
  a = a || 50;
  b = Math.max(3, Math.floor(b) || 8);
  c = Math.max(2, Math.floor(c) || 6);
  d = void 0 !== d ? d : 0;
  e = void 0 !== e ? e : 2 * Math.PI;
  f = void 0 !== f ? f : 0;
  g = void 0 !== g ? g : Math.PI;
  var h,
      k,
      l = [],
      p = [];

  for (k = 0; k <= c; k++) {
    var q = [],
        n = [];

    for (h = 0; h <= b; h++) {
      var t = h / b,
          r = k / c,
          s = new THREE.Vector3();
      s.x = -a * Math.cos(d + t * e) * Math.sin(f + r * g);
      s.y = a * Math.cos(f + r * g);
      s.z = a * Math.sin(d + t * e) * Math.sin(f + r * g);
      this.vertices.push(s);
      q.push(this.vertices.length - 1);
      n.push(new THREE.Vector2(t, 1 - r));
    }

    l.push(q);
    p.push(n);
  }

  for (k = 0; k < c; k++) {
    for (h = 0; h < b; h++) {
      d = l[k][h + 1];
      e = l[k][h];
      f = l[k + 1][h];
      g = l[k + 1][h + 1];
      var q = this.vertices[d].clone().normalize(),
          n = this.vertices[e].clone().normalize(),
          t = this.vertices[f].clone().normalize(),
          r = this.vertices[g].clone().normalize(),
          s = p[k][h + 1].clone(),
          u = p[k][h].clone(),
          v = p[k + 1][h].clone(),
          x = p[k + 1][h + 1].clone();
      Math.abs(this.vertices[d].y) === a ? (s.x = (s.x + u.x) / 2, this.faces.push(new THREE.Face3(d, f, g, [q, t, r])), this.faceVertexUvs[0].push([s, v, x])) : Math.abs(this.vertices[f].y) === a ? (v.x = (v.x + x.x) / 2, this.faces.push(new THREE.Face3(d, e, f, [q, n, t])), this.faceVertexUvs[0].push([s, u, v])) : (this.faces.push(new THREE.Face3(d, e, g, [q, n, r])), this.faceVertexUvs[0].push([s, u, x]), this.faces.push(new THREE.Face3(e, f, g, [n.clone(), t, r.clone()])), this.faceVertexUvs[0].push([u.clone(), v, x.clone()]));
    }
  }

  this.computeFaceNormals();
  this.boundingSphere = new THREE.Sphere(new THREE.Vector3(), a);
};

THREE.SphereGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.SphereGeometry.prototype.constructor = THREE.SphereGeometry;

THREE.TextGeometry = function (a, b) {
  b = b || {};
  var c = THREE.FontUtils.generateShapes(a, b);
  b.amount = void 0 !== b.height ? b.height : 50;
  void 0 === b.bevelThickness && (b.bevelThickness = 10);
  void 0 === b.bevelSize && (b.bevelSize = 8);
  void 0 === b.bevelEnabled && (b.bevelEnabled = !1);
  THREE.ExtrudeGeometry.call(this, c, b);
  this.type = "TextGeometry";
};

THREE.TextGeometry.prototype = Object.create(THREE.ExtrudeGeometry.prototype);
THREE.TextGeometry.prototype.constructor = THREE.TextGeometry;

THREE.TorusGeometry = function (a, b, c, d, e) {
  THREE.Geometry.call(this);
  this.type = "TorusGeometry";
  this.parameters = {
    radius: a,
    tube: b,
    radialSegments: c,
    tubularSegments: d,
    arc: e
  };
  a = a || 100;
  b = b || 40;
  c = c || 8;
  d = d || 6;
  e = e || 2 * Math.PI;

  for (var f = new THREE.Vector3(), g = [], h = [], k = 0; k <= c; k++) {
    for (var l = 0; l <= d; l++) {
      var p = l / d * e,
          q = k / c * Math.PI * 2;
      f.x = a * Math.cos(p);
      f.y = a * Math.sin(p);
      var n = new THREE.Vector3();
      n.x = (a + b * Math.cos(q)) * Math.cos(p);
      n.y = (a + b * Math.cos(q)) * Math.sin(p);
      n.z = b * Math.sin(q);
      this.vertices.push(n);
      g.push(new THREE.Vector2(l / d, k / c));
      h.push(n.clone().sub(f).normalize());
    }
  }

  for (k = 1; k <= c; k++) {
    for (l = 1; l <= d; l++) {
      a = (d + 1) * k + l - 1, b = (d + 1) * (k - 1) + l - 1, e = (d + 1) * (k - 1) + l, f = (d + 1) * k + l, p = new THREE.Face3(a, b, f, [h[a].clone(), h[b].clone(), h[f].clone()]), this.faces.push(p), this.faceVertexUvs[0].push([g[a].clone(), g[b].clone(), g[f].clone()]), p = new THREE.Face3(b, e, f, [h[b].clone(), h[e].clone(), h[f].clone()]), this.faces.push(p), this.faceVertexUvs[0].push([g[b].clone(), g[e].clone(), g[f].clone()]);
    }
  }

  this.computeFaceNormals();
};

THREE.TorusGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.TorusGeometry.prototype.constructor = THREE.TorusGeometry;

THREE.TorusKnotGeometry = function (a, b, c, d, e, f, g) {
  function h(a, b, c, d, e) {
    var f = Math.cos(a),
        g = Math.sin(a);
    a *= b / c;
    b = Math.cos(a);
    f *= d * (2 + b) * .5;
    g = d * (2 + b) * g * .5;
    d = e * d * Math.sin(a) * .5;
    return new THREE.Vector3(f, g, d);
  }

  THREE.Geometry.call(this);
  this.type = "TorusKnotGeometry";
  this.parameters = {
    radius: a,
    tube: b,
    radialSegments: c,
    tubularSegments: d,
    p: e,
    q: f,
    heightScale: g
  };
  a = a || 100;
  b = b || 40;
  c = c || 64;
  d = d || 8;
  e = e || 2;
  f = f || 3;
  g = g || 1;

  for (var k = Array(c), l = new THREE.Vector3(), p = new THREE.Vector3(), q = new THREE.Vector3(), n = 0; n < c; ++n) {
    k[n] = Array(d);
    var t = n / c * 2 * e * Math.PI,
        r = h(t, f, e, a, g),
        t = h(t + .01, f, e, a, g);
    l.subVectors(t, r);
    p.addVectors(t, r);
    q.crossVectors(l, p);
    p.crossVectors(q, l);
    q.normalize();
    p.normalize();

    for (t = 0; t < d; ++t) {
      var s = t / d * 2 * Math.PI,
          u = -b * Math.cos(s),
          s = b * Math.sin(s),
          v = new THREE.Vector3();
      v.x = r.x + u * p.x + s * q.x;
      v.y = r.y + u * p.y + s * q.y;
      v.z = r.z + u * p.z + s * q.z;
      k[n][t] = this.vertices.push(v) - 1;
    }
  }

  for (n = 0; n < c; ++n) {
    for (t = 0; t < d; ++t) {
      e = (n + 1) % c, f = (t + 1) % d, a = k[n][t], b = k[e][t], e = k[e][f], f = k[n][f], g = new THREE.Vector2(n / c, t / d), l = new THREE.Vector2((n + 1) / c, t / d), p = new THREE.Vector2((n + 1) / c, (t + 1) / d), q = new THREE.Vector2(n / c, (t + 1) / d), this.faces.push(new THREE.Face3(a, b, f)), this.faceVertexUvs[0].push([g, l, q]), this.faces.push(new THREE.Face3(b, e, f)), this.faceVertexUvs[0].push([l.clone(), p, q.clone()]);
    }
  }

  this.computeFaceNormals();
  this.computeVertexNormals();
};

THREE.TorusKnotGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.TorusKnotGeometry.prototype.constructor = THREE.TorusKnotGeometry;

THREE.TubeGeometry = function (a, b, c, d, e, f) {
  THREE.Geometry.call(this);
  this.type = "TubeGeometry";
  this.parameters = {
    path: a,
    segments: b,
    radius: c,
    radialSegments: d,
    closed: e
  };
  b = b || 64;
  c = c || 1;
  d = d || 8;
  e = e || !1;
  f = f || THREE.TubeGeometry.NoTaper;
  var g = [],
      h,
      k,
      l = b + 1,
      p,
      q,
      n,
      t,
      r,
      s = new THREE.Vector3(),
      u,
      v,
      x;
  u = new THREE.TubeGeometry.FrenetFrames(a, b, e);
  v = u.normals;
  x = u.binormals;
  this.tangents = u.tangents;
  this.normals = v;
  this.binormals = x;

  for (u = 0; u < l; u++) {
    for (g[u] = [], p = u / (l - 1), r = a.getPointAt(p), h = v[u], k = x[u], n = c * f(p), p = 0; p < d; p++) {
      q = p / d * 2 * Math.PI, t = -n * Math.cos(q), q = n * Math.sin(q), s.copy(r), s.x += t * h.x + q * k.x, s.y += t * h.y + q * k.y, s.z += t * h.z + q * k.z, g[u][p] = this.vertices.push(new THREE.Vector3(s.x, s.y, s.z)) - 1;
    }
  }

  for (u = 0; u < b; u++) {
    for (p = 0; p < d; p++) {
      f = e ? (u + 1) % b : u + 1, l = (p + 1) % d, a = g[u][p], c = g[f][p], f = g[f][l], l = g[u][l], s = new THREE.Vector2(u / b, p / d), v = new THREE.Vector2((u + 1) / b, p / d), x = new THREE.Vector2((u + 1) / b, (p + 1) / d), h = new THREE.Vector2(u / b, (p + 1) / d), this.faces.push(new THREE.Face3(a, c, l)), this.faceVertexUvs[0].push([s, v, h]), this.faces.push(new THREE.Face3(c, f, l)), this.faceVertexUvs[0].push([v.clone(), x, h.clone()]);
    }
  }

  this.computeFaceNormals();
  this.computeVertexNormals();
};

THREE.TubeGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.TubeGeometry.prototype.constructor = THREE.TubeGeometry;

THREE.TubeGeometry.NoTaper = function (a) {
  return 1;
};

THREE.TubeGeometry.SinusoidalTaper = function (a) {
  return Math.sin(Math.PI * a);
};

THREE.TubeGeometry.FrenetFrames = function (a, b, c) {
  var d = new THREE.Vector3(),
      e = [],
      f = [],
      g = [],
      h = new THREE.Vector3(),
      k = new THREE.Matrix4();
  b += 1;
  var l, p, q;
  this.tangents = e;
  this.normals = f;
  this.binormals = g;

  for (l = 0; l < b; l++) {
    p = l / (b - 1), e[l] = a.getTangentAt(p), e[l].normalize();
  }

  f[0] = new THREE.Vector3();
  g[0] = new THREE.Vector3();
  a = Number.MAX_VALUE;
  l = Math.abs(e[0].x);
  p = Math.abs(e[0].y);
  q = Math.abs(e[0].z);
  l <= a && (a = l, d.set(1, 0, 0));
  p <= a && (a = p, d.set(0, 1, 0));
  q <= a && d.set(0, 0, 1);
  h.crossVectors(e[0], d).normalize();
  f[0].crossVectors(e[0], h);
  g[0].crossVectors(e[0], f[0]);

  for (l = 1; l < b; l++) {
    f[l] = f[l - 1].clone(), g[l] = g[l - 1].clone(), h.crossVectors(e[l - 1], e[l]), 1E-4 < h.length() && (h.normalize(), d = Math.acos(THREE.Math.clamp(e[l - 1].dot(e[l]), -1, 1)), f[l].applyMatrix4(k.makeRotationAxis(h, d))), g[l].crossVectors(e[l], f[l]);
  }

  if (c) for (d = Math.acos(THREE.Math.clamp(f[0].dot(f[b - 1]), -1, 1)), d /= b - 1, 0 < e[0].dot(h.crossVectors(f[0], f[b - 1])) && (d = -d), l = 1; l < b; l++) {
    f[l].applyMatrix4(k.makeRotationAxis(e[l], d * l)), g[l].crossVectors(e[l], f[l]);
  }
};

THREE.PolyhedronGeometry = function (a, b, c, d) {
  function e(a) {
    var b = a.normalize().clone();
    b.index = k.vertices.push(b) - 1;
    var c = Math.atan2(a.z, -a.x) / 2 / Math.PI + .5;
    a = Math.atan2(-a.y, Math.sqrt(a.x * a.x + a.z * a.z)) / Math.PI + .5;
    b.uv = new THREE.Vector2(c, 1 - a);
    return b;
  }

  function f(a, b, c) {
    var d = new THREE.Face3(a.index, b.index, c.index, [a.clone(), b.clone(), c.clone()]);
    k.faces.push(d);
    u.copy(a).add(b).add(c).divideScalar(3);
    d = Math.atan2(u.z, -u.x);
    k.faceVertexUvs[0].push([h(a.uv, a, d), h(b.uv, b, d), h(c.uv, c, d)]);
  }

  function g(a, b) {
    for (var c = Math.pow(2, b), d = e(k.vertices[a.a]), g = e(k.vertices[a.b]), h = e(k.vertices[a.c]), l = [], n = 0; n <= c; n++) {
      l[n] = [];

      for (var p = e(d.clone().lerp(h, n / c)), q = e(g.clone().lerp(h, n / c)), s = c - n, r = 0; r <= s; r++) {
        l[n][r] = 0 == r && n == c ? p : e(p.clone().lerp(q, r / s));
      }
    }

    for (n = 0; n < c; n++) {
      for (r = 0; r < 2 * (c - n) - 1; r++) {
        d = Math.floor(r / 2), 0 == r % 2 ? f(l[n][d + 1], l[n + 1][d], l[n][d]) : f(l[n][d + 1], l[n + 1][d + 1], l[n + 1][d]);
      }
    }
  }

  function h(a, b, c) {
    0 > c && 1 === a.x && (a = new THREE.Vector2(a.x - 1, a.y));
    0 === b.x && 0 === b.z && (a = new THREE.Vector2(c / 2 / Math.PI + .5, a.y));
    return a.clone();
  }

  THREE.Geometry.call(this);
  this.type = "PolyhedronGeometry";
  this.parameters = {
    vertices: a,
    indices: b,
    radius: c,
    detail: d
  };
  c = c || 1;
  d = d || 0;

  for (var k = this, l = 0, p = a.length; l < p; l += 3) {
    e(new THREE.Vector3(a[l], a[l + 1], a[l + 2]));
  }

  a = this.vertices;

  for (var q = [], n = l = 0, p = b.length; l < p; l += 3, n++) {
    var t = a[b[l]],
        r = a[b[l + 1]],
        s = a[b[l + 2]];
    q[n] = new THREE.Face3(t.index, r.index, s.index, [t.clone(), r.clone(), s.clone()]);
  }

  for (var u = new THREE.Vector3(), l = 0, p = q.length; l < p; l++) {
    g(q[l], d);
  }

  l = 0;

  for (p = this.faceVertexUvs[0].length; l < p; l++) {
    b = this.faceVertexUvs[0][l], d = b[0].x, a = b[1].x, q = b[2].x, n = Math.max(d, Math.max(a, q)), t = Math.min(d, Math.min(a, q)), .9 < n && .1 > t && (.2 > d && (b[0].x += 1), .2 > a && (b[1].x += 1), .2 > q && (b[2].x += 1));
  }

  l = 0;

  for (p = this.vertices.length; l < p; l++) {
    this.vertices[l].multiplyScalar(c);
  }

  this.mergeVertices();
  this.computeFaceNormals();
  this.boundingSphere = new THREE.Sphere(new THREE.Vector3(), c);
};

THREE.PolyhedronGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.PolyhedronGeometry.prototype.constructor = THREE.PolyhedronGeometry;

THREE.DodecahedronGeometry = function (a, b) {
  this.parameters = {
    radius: a,
    detail: b
  };
  var c = (1 + Math.sqrt(5)) / 2,
      d = 1 / c;
  THREE.PolyhedronGeometry.call(this, [-1, -1, -1, -1, -1, 1, -1, 1, -1, -1, 1, 1, 1, -1, -1, 1, -1, 1, 1, 1, -1, 1, 1, 1, 0, -d, -c, 0, -d, c, 0, d, -c, 0, d, c, -d, -c, 0, -d, c, 0, d, -c, 0, d, c, 0, -c, 0, -d, c, 0, -d, -c, 0, d, c, 0, d], [3, 11, 7, 3, 7, 15, 3, 15, 13, 7, 19, 17, 7, 17, 6, 7, 6, 15, 17, 4, 8, 17, 8, 10, 17, 10, 6, 8, 0, 16, 8, 16, 2, 8, 2, 10, 0, 12, 1, 0, 1, 18, 0, 18, 16, 6, 10, 2, 6, 2, 13, 6, 13, 15, 2, 16, 18, 2, 18, 3, 2, 3, 13, 18, 1, 9, 18, 9, 11, 18, 11, 3, 4, 14, 12, 4, 12, 0, 4, 0, 8, 11, 9, 5, 11, 5, 19, 11, 19, 7, 19, 5, 14, 19, 14, 4, 19, 4, 17, 1, 12, 14, 1, 14, 5, 1, 5, 9], a, b);
};

THREE.DodecahedronGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.DodecahedronGeometry.prototype.constructor = THREE.DodecahedronGeometry;

THREE.IcosahedronGeometry = function (a, b) {
  var c = (1 + Math.sqrt(5)) / 2;
  THREE.PolyhedronGeometry.call(this, [-1, c, 0, 1, c, 0, -1, -c, 0, 1, -c, 0, 0, -1, c, 0, 1, c, 0, -1, -c, 0, 1, -c, c, 0, -1, c, 0, 1, -c, 0, -1, -c, 0, 1], [0, 11, 5, 0, 5, 1, 0, 1, 7, 0, 7, 10, 0, 10, 11, 1, 5, 9, 5, 11, 4, 11, 10, 2, 10, 7, 6, 7, 1, 8, 3, 9, 4, 3, 4, 2, 3, 2, 6, 3, 6, 8, 3, 8, 9, 4, 9, 5, 2, 4, 11, 6, 2, 10, 8, 6, 7, 9, 8, 1], a, b);
  this.type = "IcosahedronGeometry";
  this.parameters = {
    radius: a,
    detail: b
  };
};

THREE.IcosahedronGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.IcosahedronGeometry.prototype.constructor = THREE.IcosahedronGeometry;

THREE.OctahedronGeometry = function (a, b) {
  this.parameters = {
    radius: a,
    detail: b
  };
  THREE.PolyhedronGeometry.call(this, [1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1], [0, 2, 4, 0, 4, 3, 0, 3, 5, 0, 5, 2, 1, 2, 5, 1, 5, 3, 1, 3, 4, 1, 4, 2], a, b);
  this.type = "OctahedronGeometry";
  this.parameters = {
    radius: a,
    detail: b
  };
};

THREE.OctahedronGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.OctahedronGeometry.prototype.constructor = THREE.OctahedronGeometry;

THREE.TetrahedronGeometry = function (a, b) {
  THREE.PolyhedronGeometry.call(this, [1, 1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1], [2, 1, 0, 0, 3, 2, 1, 3, 0, 2, 3, 1], a, b);
  this.type = "TetrahedronGeometry";
  this.parameters = {
    radius: a,
    detail: b
  };
};

THREE.TetrahedronGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.TetrahedronGeometry.prototype.constructor = THREE.TetrahedronGeometry;

THREE.ParametricGeometry = function (a, b, c) {
  THREE.Geometry.call(this);
  this.type = "ParametricGeometry";
  this.parameters = {
    func: a,
    slices: b,
    stacks: c
  };
  var d = this.vertices,
      e = this.faces,
      f = this.faceVertexUvs[0],
      g,
      h,
      k,
      l,
      p = b + 1;

  for (g = 0; g <= c; g++) {
    for (l = g / c, h = 0; h <= b; h++) {
      k = h / b, k = a(k, l), d.push(k);
    }
  }

  var q, n, t, r;

  for (g = 0; g < c; g++) {
    for (h = 0; h < b; h++) {
      a = g * p + h, d = g * p + h + 1, l = (g + 1) * p + h + 1, k = (g + 1) * p + h, q = new THREE.Vector2(h / b, g / c), n = new THREE.Vector2((h + 1) / b, g / c), t = new THREE.Vector2((h + 1) / b, (g + 1) / c), r = new THREE.Vector2(h / b, (g + 1) / c), e.push(new THREE.Face3(a, d, k)), f.push([q, n, r]), e.push(new THREE.Face3(d, l, k)), f.push([n.clone(), t, r.clone()]);
    }
  }

  this.computeFaceNormals();
  this.computeVertexNormals();
};

THREE.ParametricGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.ParametricGeometry.prototype.constructor = THREE.ParametricGeometry;

THREE.AxisHelper = function (a) {
  a = a || 1;
  var b = new Float32Array([0, 0, 0, a, 0, 0, 0, 0, 0, 0, a, 0, 0, 0, 0, 0, 0, a]),
      c = new Float32Array([1, 0, 0, 1, .6, 0, 0, 1, 0, .6, 1, 0, 0, 0, 1, 0, .6, 1]);
  a = new THREE.BufferGeometry();
  a.addAttribute("position", new THREE.BufferAttribute(b, 3));
  a.addAttribute("color", new THREE.BufferAttribute(c, 3));
  b = new THREE.LineBasicMaterial({
    vertexColors: THREE.VertexColors
  });
  THREE.Line.call(this, a, b, THREE.LinePieces);
};

THREE.AxisHelper.prototype = Object.create(THREE.Line.prototype);
THREE.AxisHelper.prototype.constructor = THREE.AxisHelper;

THREE.ArrowHelper = function () {
  var a = new THREE.Geometry();
  a.vertices.push(new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 1, 0));
  var b = new THREE.CylinderGeometry(0, .5, 1, 5, 1);
  b.applyMatrix(new THREE.Matrix4().makeTranslation(0, -.5, 0));
  return function (c, d, e, f, g, h) {
    THREE.Object3D.call(this);
    void 0 === f && (f = 16776960);
    void 0 === e && (e = 1);
    void 0 === g && (g = .2 * e);
    void 0 === h && (h = .2 * g);
    this.position.copy(d);
    this.line = new THREE.Line(a, new THREE.LineBasicMaterial({
      color: f
    }));
    this.line.matrixAutoUpdate = !1;
    this.add(this.line);
    this.cone = new THREE.Mesh(b, new THREE.MeshBasicMaterial({
      color: f
    }));
    this.cone.matrixAutoUpdate = !1;
    this.add(this.cone);
    this.setDirection(c);
    this.setLength(e, g, h);
  };
}();

THREE.ArrowHelper.prototype = Object.create(THREE.Object3D.prototype);
THREE.ArrowHelper.prototype.constructor = THREE.ArrowHelper;

THREE.ArrowHelper.prototype.setDirection = function () {
  var a = new THREE.Vector3(),
      b;
  return function (c) {
    .99999 < c.y ? this.quaternion.set(0, 0, 0, 1) : -.99999 > c.y ? this.quaternion.set(1, 0, 0, 0) : (a.set(c.z, 0, -c.x).normalize(), b = Math.acos(c.y), this.quaternion.setFromAxisAngle(a, b));
  };
}();

THREE.ArrowHelper.prototype.setLength = function (a, b, c) {
  void 0 === b && (b = .2 * a);
  void 0 === c && (c = .2 * b);
  this.line.scale.set(1, a - b, 1);
  this.line.updateMatrix();
  this.cone.scale.set(c, b, c);
  this.cone.position.y = a;
  this.cone.updateMatrix();
};

THREE.ArrowHelper.prototype.setColor = function (a) {
  this.line.material.color.set(a);
  this.cone.material.color.set(a);
};

THREE.BoxHelper = function (a) {
  var b = new THREE.BufferGeometry();
  b.addAttribute("position", new THREE.BufferAttribute(new Float32Array(72), 3));
  THREE.Line.call(this, b, new THREE.LineBasicMaterial({
    color: 16776960
  }), THREE.LinePieces);
  void 0 !== a && this.update(a);
};

THREE.BoxHelper.prototype = Object.create(THREE.Line.prototype);
THREE.BoxHelper.prototype.constructor = THREE.BoxHelper;

THREE.BoxHelper.prototype.update = function (a) {
  var b = a.geometry;
  null === b.boundingBox && b.computeBoundingBox();
  var c = b.boundingBox.min,
      b = b.boundingBox.max,
      d = this.geometry.attributes.position.array;
  d[0] = b.x;
  d[1] = b.y;
  d[2] = b.z;
  d[3] = c.x;
  d[4] = b.y;
  d[5] = b.z;
  d[6] = c.x;
  d[7] = b.y;
  d[8] = b.z;
  d[9] = c.x;
  d[10] = c.y;
  d[11] = b.z;
  d[12] = c.x;
  d[13] = c.y;
  d[14] = b.z;
  d[15] = b.x;
  d[16] = c.y;
  d[17] = b.z;
  d[18] = b.x;
  d[19] = c.y;
  d[20] = b.z;
  d[21] = b.x;
  d[22] = b.y;
  d[23] = b.z;
  d[24] = b.x;
  d[25] = b.y;
  d[26] = c.z;
  d[27] = c.x;
  d[28] = b.y;
  d[29] = c.z;
  d[30] = c.x;
  d[31] = b.y;
  d[32] = c.z;
  d[33] = c.x;
  d[34] = c.y;
  d[35] = c.z;
  d[36] = c.x;
  d[37] = c.y;
  d[38] = c.z;
  d[39] = b.x;
  d[40] = c.y;
  d[41] = c.z;
  d[42] = b.x;
  d[43] = c.y;
  d[44] = c.z;
  d[45] = b.x;
  d[46] = b.y;
  d[47] = c.z;
  d[48] = b.x;
  d[49] = b.y;
  d[50] = b.z;
  d[51] = b.x;
  d[52] = b.y;
  d[53] = c.z;
  d[54] = c.x;
  d[55] = b.y;
  d[56] = b.z;
  d[57] = c.x;
  d[58] = b.y;
  d[59] = c.z;
  d[60] = c.x;
  d[61] = c.y;
  d[62] = b.z;
  d[63] = c.x;
  d[64] = c.y;
  d[65] = c.z;
  d[66] = b.x;
  d[67] = c.y;
  d[68] = b.z;
  d[69] = b.x;
  d[70] = c.y;
  d[71] = c.z;
  this.geometry.attributes.position.needsUpdate = !0;
  this.geometry.computeBoundingSphere();
  this.matrix = a.matrixWorld;
  this.matrixAutoUpdate = !1;
};

THREE.BoundingBoxHelper = function (a, b) {
  var c = void 0 !== b ? b : 8947848;
  this.object = a;
  this.box = new THREE.Box3();
  THREE.Mesh.call(this, new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({
    color: c,
    wireframe: !0
  }));
};

THREE.BoundingBoxHelper.prototype = Object.create(THREE.Mesh.prototype);
THREE.BoundingBoxHelper.prototype.constructor = THREE.BoundingBoxHelper;

THREE.BoundingBoxHelper.prototype.update = function () {
  this.box.setFromObject(this.object);
  this.box.size(this.scale);
  this.box.center(this.position);
};

THREE.CameraHelper = function (a) {
  function b(a, b, d) {
    c(a, d);
    c(b, d);
  }

  function c(a, b) {
    d.vertices.push(new THREE.Vector3());
    d.colors.push(new THREE.Color(b));
    void 0 === f[a] && (f[a] = []);
    f[a].push(d.vertices.length - 1);
  }

  var d = new THREE.Geometry(),
      e = new THREE.LineBasicMaterial({
    color: 16777215,
    vertexColors: THREE.FaceColors
  }),
      f = {};
  b("n1", "n2", 16755200);
  b("n2", "n4", 16755200);
  b("n4", "n3", 16755200);
  b("n3", "n1", 16755200);
  b("f1", "f2", 16755200);
  b("f2", "f4", 16755200);
  b("f4", "f3", 16755200);
  b("f3", "f1", 16755200);
  b("n1", "f1", 16755200);
  b("n2", "f2", 16755200);
  b("n3", "f3", 16755200);
  b("n4", "f4", 16755200);
  b("p", "n1", 16711680);
  b("p", "n2", 16711680);
  b("p", "n3", 16711680);
  b("p", "n4", 16711680);
  b("u1", "u2", 43775);
  b("u2", "u3", 43775);
  b("u3", "u1", 43775);
  b("c", "t", 16777215);
  b("p", "c", 3355443);
  b("cn1", "cn2", 3355443);
  b("cn3", "cn4", 3355443);
  b("cf1", "cf2", 3355443);
  b("cf3", "cf4", 3355443);
  THREE.Line.call(this, d, e, THREE.LinePieces);
  this.camera = a;
  this.matrix = a.matrixWorld;
  this.matrixAutoUpdate = !1;
  this.pointMap = f;
  this.update();
};

THREE.CameraHelper.prototype = Object.create(THREE.Line.prototype);
THREE.CameraHelper.prototype.constructor = THREE.CameraHelper;

THREE.CameraHelper.prototype.update = function () {
  var a,
      b,
      c = new THREE.Vector3(),
      d = new THREE.Camera(),
      e = function e(_e, g, h, k) {
    c.set(g, h, k).unproject(d);
    _e = b[_e];
    if (void 0 !== _e) for (g = 0, h = _e.length; g < h; g++) {
      a.vertices[_e[g]].copy(c);
    }
  };

  return function () {
    a = this.geometry;
    b = this.pointMap;
    d.projectionMatrix.copy(this.camera.projectionMatrix);
    e("c", 0, 0, -1);
    e("t", 0, 0, 1);
    e("n1", -1, -1, -1);
    e("n2", 1, -1, -1);
    e("n3", -1, 1, -1);
    e("n4", 1, 1, -1);
    e("f1", -1, -1, 1);
    e("f2", 1, -1, 1);
    e("f3", -1, 1, 1);
    e("f4", 1, 1, 1);
    e("u1", .7, 1.1, -1);
    e("u2", -.7, 1.1, -1);
    e("u3", 0, 2, -1);
    e("cf1", -1, 0, 1);
    e("cf2", 1, 0, 1);
    e("cf3", 0, -1, 1);
    e("cf4", 0, 1, 1);
    e("cn1", -1, 0, -1);
    e("cn2", 1, 0, -1);
    e("cn3", 0, -1, -1);
    e("cn4", 0, 1, -1);
    a.verticesNeedUpdate = !0;
  };
}();

THREE.DirectionalLightHelper = function (a, b) {
  THREE.Object3D.call(this);
  this.light = a;
  this.light.updateMatrixWorld();
  this.matrix = a.matrixWorld;
  this.matrixAutoUpdate = !1;
  b = b || 1;
  var c = new THREE.Geometry();
  c.vertices.push(new THREE.Vector3(-b, b, 0), new THREE.Vector3(b, b, 0), new THREE.Vector3(b, -b, 0), new THREE.Vector3(-b, -b, 0), new THREE.Vector3(-b, b, 0));
  var d = new THREE.LineBasicMaterial({
    fog: !1
  });
  d.color.copy(this.light.color).multiplyScalar(this.light.intensity);
  this.lightPlane = new THREE.Line(c, d);
  this.add(this.lightPlane);
  c = new THREE.Geometry();
  c.vertices.push(new THREE.Vector3(), new THREE.Vector3());
  d = new THREE.LineBasicMaterial({
    fog: !1
  });
  d.color.copy(this.light.color).multiplyScalar(this.light.intensity);
  this.targetLine = new THREE.Line(c, d);
  this.add(this.targetLine);
  this.update();
};

THREE.DirectionalLightHelper.prototype = Object.create(THREE.Object3D.prototype);
THREE.DirectionalLightHelper.prototype.constructor = THREE.DirectionalLightHelper;

THREE.DirectionalLightHelper.prototype.dispose = function () {
  this.lightPlane.geometry.dispose();
  this.lightPlane.material.dispose();
  this.targetLine.geometry.dispose();
  this.targetLine.material.dispose();
};

THREE.DirectionalLightHelper.prototype.update = function () {
  var a = new THREE.Vector3(),
      b = new THREE.Vector3(),
      c = new THREE.Vector3();
  return function () {
    a.setFromMatrixPosition(this.light.matrixWorld);
    b.setFromMatrixPosition(this.light.target.matrixWorld);
    c.subVectors(b, a);
    this.lightPlane.lookAt(c);
    this.lightPlane.material.color.copy(this.light.color).multiplyScalar(this.light.intensity);
    this.targetLine.geometry.vertices[1].copy(c);
    this.targetLine.geometry.verticesNeedUpdate = !0;
    this.targetLine.material.color.copy(this.lightPlane.material.color);
  };
}();

THREE.EdgesHelper = function (a, b, c) {
  b = void 0 !== b ? b : 16777215;
  c = Math.cos(THREE.Math.degToRad(void 0 !== c ? c : 1));

  var d = [0, 0],
      e = {},
      f = function f(a, b) {
    return a - b;
  },
      g = ["a", "b", "c"],
      h = new THREE.BufferGeometry(),
      k;

  a.geometry instanceof THREE.BufferGeometry ? (k = new THREE.Geometry(), k.fromBufferGeometry(a.geometry)) : k = a.geometry.clone();
  k.mergeVertices();
  k.computeFaceNormals();
  var l = k.vertices;
  k = k.faces;

  for (var p = 0, q = 0, n = k.length; q < n; q++) {
    for (var t = k[q], r = 0; 3 > r; r++) {
      d[0] = t[g[r]];
      d[1] = t[g[(r + 1) % 3]];
      d.sort(f);
      var s = d.toString();
      void 0 === e[s] ? (e[s] = {
        vert1: d[0],
        vert2: d[1],
        face1: q,
        face2: void 0
      }, p++) : e[s].face2 = q;
    }
  }

  d = new Float32Array(6 * p);
  f = 0;

  for (s in e) {
    if (g = e[s], void 0 === g.face2 || k[g.face1].normal.dot(k[g.face2].normal) <= c) p = l[g.vert1], d[f++] = p.x, d[f++] = p.y, d[f++] = p.z, p = l[g.vert2], d[f++] = p.x, d[f++] = p.y, d[f++] = p.z;
  }

  h.addAttribute("position", new THREE.BufferAttribute(d, 3));
  THREE.Line.call(this, h, new THREE.LineBasicMaterial({
    color: b
  }), THREE.LinePieces);
  this.matrix = a.matrixWorld;
  this.matrixAutoUpdate = !1;
};

THREE.EdgesHelper.prototype = Object.create(THREE.Line.prototype);
THREE.EdgesHelper.prototype.constructor = THREE.EdgesHelper;

THREE.FaceNormalsHelper = function (a, b, c, d) {
  this.object = a;
  this.size = void 0 !== b ? b : 1;
  a = void 0 !== c ? c : 16776960;
  d = void 0 !== d ? d : 1;
  b = new THREE.Geometry();
  c = 0;

  for (var e = this.object.geometry.faces.length; c < e; c++) {
    b.vertices.push(new THREE.Vector3(), new THREE.Vector3());
  }

  THREE.Line.call(this, b, new THREE.LineBasicMaterial({
    color: a,
    linewidth: d
  }), THREE.LinePieces);
  this.matrixAutoUpdate = !1;
  this.normalMatrix = new THREE.Matrix3();
  this.update();
};

THREE.FaceNormalsHelper.prototype = Object.create(THREE.Line.prototype);
THREE.FaceNormalsHelper.prototype.constructor = THREE.FaceNormalsHelper;

THREE.FaceNormalsHelper.prototype.update = function () {
  var a = this.geometry.vertices,
      b = this.object,
      c = b.geometry.vertices,
      d = b.geometry.faces,
      e = b.matrixWorld;
  b.updateMatrixWorld(!0);
  this.normalMatrix.getNormalMatrix(e);

  for (var f = b = 0, g = d.length; b < g; b++, f += 2) {
    var h = d[b];
    a[f].copy(c[h.a]).add(c[h.b]).add(c[h.c]).divideScalar(3).applyMatrix4(e);
    a[f + 1].copy(h.normal).applyMatrix3(this.normalMatrix).normalize().multiplyScalar(this.size).add(a[f]);
  }

  this.geometry.verticesNeedUpdate = !0;
  return this;
};

THREE.GridHelper = function (a, b) {
  var c = new THREE.Geometry(),
      d = new THREE.LineBasicMaterial({
    vertexColors: THREE.VertexColors
  });
  this.color1 = new THREE.Color(4473924);
  this.color2 = new THREE.Color(8947848);

  for (var e = -a; e <= a; e += b) {
    c.vertices.push(new THREE.Vector3(-a, 0, e), new THREE.Vector3(a, 0, e), new THREE.Vector3(e, 0, -a), new THREE.Vector3(e, 0, a));
    var f = 0 === e ? this.color1 : this.color2;
    c.colors.push(f, f, f, f);
  }

  THREE.Line.call(this, c, d, THREE.LinePieces);
};

THREE.GridHelper.prototype = Object.create(THREE.Line.prototype);
THREE.GridHelper.prototype.constructor = THREE.GridHelper;

THREE.GridHelper.prototype.setColors = function (a, b) {
  this.color1.set(a);
  this.color2.set(b);
  this.geometry.colorsNeedUpdate = !0;
};

THREE.HemisphereLightHelper = function (a, b) {
  THREE.Object3D.call(this);
  this.light = a;
  this.light.updateMatrixWorld();
  this.matrix = a.matrixWorld;
  this.matrixAutoUpdate = !1;
  this.colors = [new THREE.Color(), new THREE.Color()];
  var c = new THREE.SphereGeometry(b, 4, 2);
  c.applyMatrix(new THREE.Matrix4().makeRotationX(-Math.PI / 2));

  for (var d = 0; 8 > d; d++) {
    c.faces[d].color = this.colors[4 > d ? 0 : 1];
  }

  d = new THREE.MeshBasicMaterial({
    vertexColors: THREE.FaceColors,
    wireframe: !0
  });
  this.lightSphere = new THREE.Mesh(c, d);
  this.add(this.lightSphere);
  this.update();
};

THREE.HemisphereLightHelper.prototype = Object.create(THREE.Object3D.prototype);
THREE.HemisphereLightHelper.prototype.constructor = THREE.HemisphereLightHelper;

THREE.HemisphereLightHelper.prototype.dispose = function () {
  this.lightSphere.geometry.dispose();
  this.lightSphere.material.dispose();
};

THREE.HemisphereLightHelper.prototype.update = function () {
  var a = new THREE.Vector3();
  return function () {
    this.colors[0].copy(this.light.color).multiplyScalar(this.light.intensity);
    this.colors[1].copy(this.light.groundColor).multiplyScalar(this.light.intensity);
    this.lightSphere.lookAt(a.setFromMatrixPosition(this.light.matrixWorld).negate());
    this.lightSphere.geometry.colorsNeedUpdate = !0;
  };
}();

THREE.PointLightHelper = function (a, b) {
  this.light = a;
  this.light.updateMatrixWorld();
  var c = new THREE.SphereGeometry(b, 4, 2),
      d = new THREE.MeshBasicMaterial({
    wireframe: !0,
    fog: !1
  });
  d.color.copy(this.light.color).multiplyScalar(this.light.intensity);
  THREE.Mesh.call(this, c, d);
  this.matrix = this.light.matrixWorld;
  this.matrixAutoUpdate = !1;
};

THREE.PointLightHelper.prototype = Object.create(THREE.Mesh.prototype);
THREE.PointLightHelper.prototype.constructor = THREE.PointLightHelper;

THREE.PointLightHelper.prototype.dispose = function () {
  this.geometry.dispose();
  this.material.dispose();
};

THREE.PointLightHelper.prototype.update = function () {
  this.material.color.copy(this.light.color).multiplyScalar(this.light.intensity);
};

THREE.SkeletonHelper = function (a) {
  this.bones = this.getBoneList(a);

  for (var b = new THREE.Geometry(), c = 0; c < this.bones.length; c++) {
    this.bones[c].parent instanceof THREE.Bone && (b.vertices.push(new THREE.Vector3()), b.vertices.push(new THREE.Vector3()), b.colors.push(new THREE.Color(0, 0, 1)), b.colors.push(new THREE.Color(0, 1, 0)));
  }

  c = new THREE.LineBasicMaterial({
    vertexColors: THREE.VertexColors,
    depthTest: !1,
    depthWrite: !1,
    transparent: !0
  });
  THREE.Line.call(this, b, c, THREE.LinePieces);
  this.root = a;
  this.matrix = a.matrixWorld;
  this.matrixAutoUpdate = !1;
  this.update();
};

THREE.SkeletonHelper.prototype = Object.create(THREE.Line.prototype);
THREE.SkeletonHelper.prototype.constructor = THREE.SkeletonHelper;

THREE.SkeletonHelper.prototype.getBoneList = function (a) {
  var b = [];
  a instanceof THREE.Bone && b.push(a);

  for (var c = 0; c < a.children.length; c++) {
    b.push.apply(b, this.getBoneList(a.children[c]));
  }

  return b;
};

THREE.SkeletonHelper.prototype.update = function () {
  for (var a = this.geometry, b = new THREE.Matrix4().getInverse(this.root.matrixWorld), c = new THREE.Matrix4(), d = 0, e = 0; e < this.bones.length; e++) {
    var f = this.bones[e];
    f.parent instanceof THREE.Bone && (c.multiplyMatrices(b, f.matrixWorld), a.vertices[d].setFromMatrixPosition(c), c.multiplyMatrices(b, f.parent.matrixWorld), a.vertices[d + 1].setFromMatrixPosition(c), d += 2);
  }

  a.verticesNeedUpdate = !0;
  a.computeBoundingSphere();
};

THREE.SpotLightHelper = function (a) {
  THREE.Object3D.call(this);
  this.light = a;
  this.light.updateMatrixWorld();
  this.matrix = a.matrixWorld;
  this.matrixAutoUpdate = !1;
  a = new THREE.CylinderGeometry(0, 1, 1, 8, 1, !0);
  a.applyMatrix(new THREE.Matrix4().makeTranslation(0, -.5, 0));
  a.applyMatrix(new THREE.Matrix4().makeRotationX(-Math.PI / 2));
  var b = new THREE.MeshBasicMaterial({
    wireframe: !0,
    fog: !1
  });
  this.cone = new THREE.Mesh(a, b);
  this.add(this.cone);
  this.update();
};

THREE.SpotLightHelper.prototype = Object.create(THREE.Object3D.prototype);
THREE.SpotLightHelper.prototype.constructor = THREE.SpotLightHelper;

THREE.SpotLightHelper.prototype.dispose = function () {
  this.cone.geometry.dispose();
  this.cone.material.dispose();
};

THREE.SpotLightHelper.prototype.update = function () {
  var a = new THREE.Vector3(),
      b = new THREE.Vector3();
  return function () {
    var c = this.light.distance ? this.light.distance : 1E4,
        d = c * Math.tan(this.light.angle);
    this.cone.scale.set(d, d, c);
    a.setFromMatrixPosition(this.light.matrixWorld);
    b.setFromMatrixPosition(this.light.target.matrixWorld);
    this.cone.lookAt(b.sub(a));
    this.cone.material.color.copy(this.light.color).multiplyScalar(this.light.intensity);
  };
}();

THREE.VertexNormalsHelper = function (a, b, c, d) {
  this.object = a;
  this.size = void 0 !== b ? b : 1;
  b = void 0 !== c ? c : 16711680;
  d = void 0 !== d ? d : 1;
  c = new THREE.Geometry();
  a = a.geometry.faces;

  for (var e = 0, f = a.length; e < f; e++) {
    for (var g = 0, h = a[e].vertexNormals.length; g < h; g++) {
      c.vertices.push(new THREE.Vector3(), new THREE.Vector3());
    }
  }

  THREE.Line.call(this, c, new THREE.LineBasicMaterial({
    color: b,
    linewidth: d
  }), THREE.LinePieces);
  this.matrixAutoUpdate = !1;
  this.normalMatrix = new THREE.Matrix3();
  this.update();
};

THREE.VertexNormalsHelper.prototype = Object.create(THREE.Line.prototype);
THREE.VertexNormalsHelper.prototype.constructor = THREE.VertexNormalsHelper;

THREE.VertexNormalsHelper.prototype.update = function (a) {
  var b = new THREE.Vector3();
  return function (a) {
    a = ["a", "b", "c", "d"];
    this.object.updateMatrixWorld(!0);
    this.normalMatrix.getNormalMatrix(this.object.matrixWorld);

    for (var d = this.geometry.vertices, e = this.object.geometry.vertices, f = this.object.geometry.faces, g = this.object.matrixWorld, h = 0, k = 0, l = f.length; k < l; k++) {
      for (var p = f[k], q = 0, n = p.vertexNormals.length; q < n; q++) {
        var t = p.vertexNormals[q];
        d[h].copy(e[p[a[q]]]).applyMatrix4(g);
        b.copy(t).applyMatrix3(this.normalMatrix).normalize().multiplyScalar(this.size);
        b.add(d[h]);
        h += 1;
        d[h].copy(b);
        h += 1;
      }
    }

    this.geometry.verticesNeedUpdate = !0;
    return this;
  };
}();

THREE.VertexTangentsHelper = function (a, b, c, d) {
  this.object = a;
  this.size = void 0 !== b ? b : 1;
  b = void 0 !== c ? c : 255;
  d = void 0 !== d ? d : 1;
  c = new THREE.Geometry();
  a = a.geometry.faces;

  for (var e = 0, f = a.length; e < f; e++) {
    for (var g = 0, h = a[e].vertexTangents.length; g < h; g++) {
      c.vertices.push(new THREE.Vector3()), c.vertices.push(new THREE.Vector3());
    }
  }

  THREE.Line.call(this, c, new THREE.LineBasicMaterial({
    color: b,
    linewidth: d
  }), THREE.LinePieces);
  this.matrixAutoUpdate = !1;
  this.update();
};

THREE.VertexTangentsHelper.prototype = Object.create(THREE.Line.prototype);
THREE.VertexTangentsHelper.prototype.constructor = THREE.VertexTangentsHelper;

THREE.VertexTangentsHelper.prototype.update = function (a) {
  var b = new THREE.Vector3();
  return function (a) {
    a = ["a", "b", "c", "d"];
    this.object.updateMatrixWorld(!0);

    for (var d = this.geometry.vertices, e = this.object.geometry.vertices, f = this.object.geometry.faces, g = this.object.matrixWorld, h = 0, k = 0, l = f.length; k < l; k++) {
      for (var p = f[k], q = 0, n = p.vertexTangents.length; q < n; q++) {
        var t = p.vertexTangents[q];
        d[h].copy(e[p[a[q]]]).applyMatrix4(g);
        b.copy(t).transformDirection(g).multiplyScalar(this.size);
        b.add(d[h]);
        h += 1;
        d[h].copy(b);
        h += 1;
      }
    }

    this.geometry.verticesNeedUpdate = !0;
    return this;
  };
}();

THREE.WireframeHelper = function (a, b) {
  var c = void 0 !== b ? b : 16777215,
      d = [0, 0],
      e = {},
      f = function f(a, b) {
    return a - b;
  },
      g = ["a", "b", "c"],
      h = new THREE.BufferGeometry();

  if (a.geometry instanceof THREE.Geometry) {
    for (var k = a.geometry.vertices, l = a.geometry.faces, p = 0, q = new Uint32Array(6 * l.length), n = 0, t = l.length; n < t; n++) {
      for (var r = l[n], s = 0; 3 > s; s++) {
        d[0] = r[g[s]];
        d[1] = r[g[(s + 1) % 3]];
        d.sort(f);
        var u = d.toString();
        void 0 === e[u] && (q[2 * p] = d[0], q[2 * p + 1] = d[1], e[u] = !0, p++);
      }
    }

    d = new Float32Array(6 * p);
    n = 0;

    for (t = p; n < t; n++) {
      for (s = 0; 2 > s; s++) {
        p = k[q[2 * n + s]], g = 6 * n + 3 * s, d[g + 0] = p.x, d[g + 1] = p.y, d[g + 2] = p.z;
      }
    }

    h.addAttribute("position", new THREE.BufferAttribute(d, 3));
  } else if (a.geometry instanceof THREE.BufferGeometry) {
    if (void 0 !== a.geometry.attributes.index) {
      k = a.geometry.attributes.position.array;
      t = a.geometry.attributes.index.array;
      l = a.geometry.drawcalls;
      p = 0;
      0 === l.length && (l = [{
        count: t.length,
        index: 0,
        start: 0
      }]);

      for (var q = new Uint32Array(2 * t.length), r = 0, v = l.length; r < v; ++r) {
        for (var s = l[r].start, u = l[r].count, g = l[r].index, n = s, x = s + u; n < x; n += 3) {
          for (s = 0; 3 > s; s++) {
            d[0] = g + t[n + s], d[1] = g + t[n + (s + 1) % 3], d.sort(f), u = d.toString(), void 0 === e[u] && (q[2 * p] = d[0], q[2 * p + 1] = d[1], e[u] = !0, p++);
          }
        }
      }

      d = new Float32Array(6 * p);
      n = 0;

      for (t = p; n < t; n++) {
        for (s = 0; 2 > s; s++) {
          g = 6 * n + 3 * s, p = 3 * q[2 * n + s], d[g + 0] = k[p], d[g + 1] = k[p + 1], d[g + 2] = k[p + 2];
        }
      }
    } else for (k = a.geometry.attributes.position.array, p = k.length / 3, q = p / 3, d = new Float32Array(6 * p), n = 0, t = q; n < t; n++) {
      for (s = 0; 3 > s; s++) {
        g = 18 * n + 6 * s, q = 9 * n + 3 * s, d[g + 0] = k[q], d[g + 1] = k[q + 1], d[g + 2] = k[q + 2], p = 9 * n + (s + 1) % 3 * 3, d[g + 3] = k[p], d[g + 4] = k[p + 1], d[g + 5] = k[p + 2];
      }
    }

    h.addAttribute("position", new THREE.BufferAttribute(d, 3));
  }

  THREE.Line.call(this, h, new THREE.LineBasicMaterial({
    color: c
  }), THREE.LinePieces);
  this.matrix = a.matrixWorld;
  this.matrixAutoUpdate = !1;
};

THREE.WireframeHelper.prototype = Object.create(THREE.Line.prototype);
THREE.WireframeHelper.prototype.constructor = THREE.WireframeHelper;

THREE.ImmediateRenderObject = function () {
  THREE.Object3D.call(this);

  this.render = function (a) {};
};

THREE.ImmediateRenderObject.prototype = Object.create(THREE.Object3D.prototype);
THREE.ImmediateRenderObject.prototype.constructor = THREE.ImmediateRenderObject;

THREE.MorphBlendMesh = function (a, b) {
  THREE.Mesh.call(this, a, b);
  this.animationsMap = {};
  this.animationsList = [];
  var c = this.geometry.morphTargets.length;
  this.createAnimation("__default", 0, c - 1, c / 1);
  this.setAnimationWeight("__default", 1);
};

THREE.MorphBlendMesh.prototype = Object.create(THREE.Mesh.prototype);
THREE.MorphBlendMesh.prototype.constructor = THREE.MorphBlendMesh;

THREE.MorphBlendMesh.prototype.createAnimation = function (a, b, c, d) {
  b = {
    startFrame: b,
    endFrame: c,
    length: c - b + 1,
    fps: d,
    duration: (c - b) / d,
    lastFrame: 0,
    currentFrame: 0,
    active: !1,
    time: 0,
    direction: 1,
    weight: 1,
    directionBackwards: !1,
    mirroredLoop: !1
  };
  this.animationsMap[a] = b;
  this.animationsList.push(b);
};

THREE.MorphBlendMesh.prototype.autoCreateAnimations = function (a) {
  for (var b = /([a-z]+)_?(\d+)/, c, d = {}, e = this.geometry, f = 0, g = e.morphTargets.length; f < g; f++) {
    var h = e.morphTargets[f].name.match(b);

    if (h && 1 < h.length) {
      var k = h[1];
      d[k] || (d[k] = {
        start: Infinity,
        end: -Infinity
      });
      h = d[k];
      f < h.start && (h.start = f);
      f > h.end && (h.end = f);
      c || (c = k);
    }
  }

  for (k in d) {
    h = d[k], this.createAnimation(k, h.start, h.end, a);
  }

  this.firstAnimation = c;
};

THREE.MorphBlendMesh.prototype.setAnimationDirectionForward = function (a) {
  if (a = this.animationsMap[a]) a.direction = 1, a.directionBackwards = !1;
};

THREE.MorphBlendMesh.prototype.setAnimationDirectionBackward = function (a) {
  if (a = this.animationsMap[a]) a.direction = -1, a.directionBackwards = !0;
};

THREE.MorphBlendMesh.prototype.setAnimationFPS = function (a, b) {
  var c = this.animationsMap[a];
  c && (c.fps = b, c.duration = (c.end - c.start) / c.fps);
};

THREE.MorphBlendMesh.prototype.setAnimationDuration = function (a, b) {
  var c = this.animationsMap[a];
  c && (c.duration = b, c.fps = (c.end - c.start) / c.duration);
};

THREE.MorphBlendMesh.prototype.setAnimationWeight = function (a, b) {
  var c = this.animationsMap[a];
  c && (c.weight = b);
};

THREE.MorphBlendMesh.prototype.setAnimationTime = function (a, b) {
  var c = this.animationsMap[a];
  c && (c.time = b);
};

THREE.MorphBlendMesh.prototype.getAnimationTime = function (a) {
  var b = 0;
  if (a = this.animationsMap[a]) b = a.time;
  return b;
};

THREE.MorphBlendMesh.prototype.getAnimationDuration = function (a) {
  var b = -1;
  if (a = this.animationsMap[a]) b = a.duration;
  return b;
};

THREE.MorphBlendMesh.prototype.playAnimation = function (a) {
  var b = this.animationsMap[a];
  b ? (b.time = 0, b.active = !0) : THREE.warn("THREE.MorphBlendMesh: animation[" + a + "] undefined in .playAnimation()");
};

THREE.MorphBlendMesh.prototype.stopAnimation = function (a) {
  if (a = this.animationsMap[a]) a.active = !1;
};

THREE.MorphBlendMesh.prototype.update = function (a) {
  for (var b = 0, c = this.animationsList.length; b < c; b++) {
    var d = this.animationsList[b];

    if (d.active) {
      var e = d.duration / d.length;
      d.time += d.direction * a;

      if (d.mirroredLoop) {
        if (d.time > d.duration || 0 > d.time) d.direction *= -1, d.time > d.duration && (d.time = d.duration, d.directionBackwards = !0), 0 > d.time && (d.time = 0, d.directionBackwards = !1);
      } else d.time %= d.duration, 0 > d.time && (d.time += d.duration);

      var f = d.startFrame + THREE.Math.clamp(Math.floor(d.time / e), 0, d.length - 1),
          g = d.weight;
      f !== d.currentFrame && (this.morphTargetInfluences[d.lastFrame] = 0, this.morphTargetInfluences[d.currentFrame] = 1 * g, this.morphTargetInfluences[f] = 0, d.lastFrame = d.currentFrame, d.currentFrame = f);
      e = d.time % e / e;
      d.directionBackwards && (e = 1 - e);
      this.morphTargetInfluences[d.currentFrame] = e * g;
      this.morphTargetInfluences[d.lastFrame] = (1 - e) * g;
    }
  }
};
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var VanillaTilt = function () {
  "use strict";

  var t = /*#__PURE__*/function () {
    function t(e) {
      var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, t);

      if (!(e instanceof Node)) throw "Can't initialize VanillaTilt because " + e + " is not a Node.";
      this.width = null, this.height = null, this.clientWidth = null, this.clientHeight = null, this.left = null, this.top = null, this.gammazero = null, this.betazero = null, this.lastgammazero = null, this.lastbetazero = null, this.transitionTimeout = null, this.updateCall = null, this.event = null, this.updateBind = this.update.bind(this), this.resetBind = this.reset.bind(this), this.element = e, this.settings = this.extendSettings(i), this.reverse = this.settings.reverse ? -1 : 1, this.glare = t.isSettingTrue(this.settings.glare), this.glarePrerender = t.isSettingTrue(this.settings["glare-prerender"]), this.fullPageListening = t.isSettingTrue(this.settings["full-page-listening"]), this.gyroscope = t.isSettingTrue(this.settings.gyroscope), this.gyroscopeSamples = this.settings.gyroscopeSamples, this.elementListener = this.getElementListener(), this.glare && this.prepareGlare(), this.fullPageListening && this.updateClientSize(), this.addEventListeners(), this.updateInitialPosition();
    }

    _createClass(t, [{
      key: "getElementListener",
      value: function getElementListener() {
        if (this.fullPageListening) return window.document;

        if ("string" == typeof this.settings["mouse-event-element"]) {
          var _t = document.querySelector(this.settings["mouse-event-element"]);

          if (_t) return _t;
        }

        return this.settings["mouse-event-element"] instanceof Node ? this.settings["mouse-event-element"] : this.element;
      }
    }, {
      key: "addEventListeners",
      value: function addEventListeners() {
        this.onMouseEnterBind = this.onMouseEnter.bind(this), this.onMouseMoveBind = this.onMouseMove.bind(this), this.onMouseLeaveBind = this.onMouseLeave.bind(this), this.onWindowResizeBind = this.onWindowResize.bind(this), this.onDeviceOrientationBind = this.onDeviceOrientation.bind(this), this.elementListener.addEventListener("mouseenter", this.onMouseEnterBind), this.elementListener.addEventListener("mouseleave", this.onMouseLeaveBind), this.elementListener.addEventListener("mousemove", this.onMouseMoveBind), (this.glare || this.fullPageListening) && window.addEventListener("resize", this.onWindowResizeBind), this.gyroscope && window.addEventListener("deviceorientation", this.onDeviceOrientationBind);
      }
    }, {
      key: "removeEventListeners",
      value: function removeEventListeners() {
        this.elementListener.removeEventListener("mouseenter", this.onMouseEnterBind), this.elementListener.removeEventListener("mouseleave", this.onMouseLeaveBind), this.elementListener.removeEventListener("mousemove", this.onMouseMoveBind), this.gyroscope && window.removeEventListener("deviceorientation", this.onDeviceOrientationBind), (this.glare || this.fullPageListening) && window.removeEventListener("resize", this.onWindowResizeBind);
      }
    }, {
      key: "destroy",
      value: function destroy() {
        clearTimeout(this.transitionTimeout), null !== this.updateCall && cancelAnimationFrame(this.updateCall), this.reset(), this.removeEventListeners(), this.element.vanillaTilt = null, delete this.element.vanillaTilt, this.element = null;
      }
    }, {
      key: "onDeviceOrientation",
      value: function onDeviceOrientation(t) {
        if (null === t.gamma || null === t.beta) return;
        this.updateElementPosition(), this.gyroscopeSamples > 0 && (this.lastgammazero = this.gammazero, this.lastbetazero = this.betazero, null === this.gammazero ? (this.gammazero = t.gamma, this.betazero = t.beta) : (this.gammazero = (t.gamma + this.lastgammazero) / 2, this.betazero = (t.beta + this.lastbetazero) / 2), this.gyroscopeSamples -= 1);
        var e = this.settings.gyroscopeMaxAngleX - this.settings.gyroscopeMinAngleX,
            i = this.settings.gyroscopeMaxAngleY - this.settings.gyroscopeMinAngleY,
            s = e / this.width,
            n = i / this.height,
            l = (t.gamma - (this.settings.gyroscopeMinAngleX + this.gammazero)) / s,
            a = (t.beta - (this.settings.gyroscopeMinAngleY + this.betazero)) / n;
        null !== this.updateCall && cancelAnimationFrame(this.updateCall), this.event = {
          clientX: l + this.left,
          clientY: a + this.top
        }, this.updateCall = requestAnimationFrame(this.updateBind);
      }
    }, {
      key: "onMouseEnter",
      value: function onMouseEnter() {
        this.updateElementPosition(), this.element.style.willChange = "transform", this.setTransition();
      }
    }, {
      key: "onMouseMove",
      value: function onMouseMove(t) {
        null !== this.updateCall && cancelAnimationFrame(this.updateCall), this.event = t, this.updateCall = requestAnimationFrame(this.updateBind);
      }
    }, {
      key: "onMouseLeave",
      value: function onMouseLeave() {
        this.setTransition(), this.settings.reset && requestAnimationFrame(this.resetBind);
      }
    }, {
      key: "reset",
      value: function reset() {
        this.event = {
          clientX: this.left + this.width / 2,
          clientY: this.top + this.height / 2
        }, this.element && this.element.style && (this.element.style.transform = "perspective(".concat(this.settings.perspective, "px) ") + "rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"), this.resetGlare();
      }
    }, {
      key: "resetGlare",
      value: function resetGlare() {
        this.glare && (this.glareElement.style.transform = "rotate(180deg) translate(-50%, -50%)", this.glareElement.style.opacity = "0");
      }
    }, {
      key: "updateInitialPosition",
      value: function updateInitialPosition() {
        if (0 === this.settings.startX && 0 === this.settings.startY) return;
        this.onMouseEnter(), this.fullPageListening ? this.event = {
          clientX: (this.settings.startX + this.settings.max) / (2 * this.settings.max) * this.clientWidth,
          clientY: (this.settings.startY + this.settings.max) / (2 * this.settings.max) * this.clientHeight
        } : this.event = {
          clientX: this.left + (this.settings.startX + this.settings.max) / (2 * this.settings.max) * this.width,
          clientY: this.top + (this.settings.startY + this.settings.max) / (2 * this.settings.max) * this.height
        };
        var t = this.settings.scale;
        this.settings.scale = 1, this.update(), this.settings.scale = t, this.resetGlare();
      }
    }, {
      key: "getValues",
      value: function getValues() {
        var t, e;
        return this.fullPageListening ? (t = this.event.clientX / this.clientWidth, e = this.event.clientY / this.clientHeight) : (t = (this.event.clientX - this.left) / this.width, e = (this.event.clientY - this.top) / this.height), t = Math.min(Math.max(t, 0), 1), e = Math.min(Math.max(e, 0), 1), {
          tiltX: (this.reverse * (this.settings.max - t * this.settings.max * 2)).toFixed(2),
          tiltY: (this.reverse * (e * this.settings.max * 2 - this.settings.max)).toFixed(2),
          percentageX: 100 * t,
          percentageY: 100 * e,
          angle: Math.atan2(this.event.clientX - (this.left + this.width / 2), -(this.event.clientY - (this.top + this.height / 2))) * (180 / Math.PI)
        };
      }
    }, {
      key: "updateElementPosition",
      value: function updateElementPosition() {
        var t = this.element.getBoundingClientRect();
        this.width = this.element.offsetWidth, this.height = this.element.offsetHeight, this.left = t.left, this.top = t.top;
      }
    }, {
      key: "update",
      value: function update() {
        var t = this.getValues();
        this.element.style.transform = "perspective(" + this.settings.perspective + "px) rotateX(" + ("x" === this.settings.axis ? 0 : t.tiltY) + "deg) rotateY(" + ("y" === this.settings.axis ? 0 : t.tiltX) + "deg) scale3d(" + this.settings.scale + ", " + this.settings.scale + ", " + this.settings.scale + ")", this.glare && (this.glareElement.style.transform = "rotate(".concat(t.angle, "deg) translate(-50%, -50%)"), this.glareElement.style.opacity = "".concat(t.percentageY * this.settings["max-glare"] / 100)), this.element.dispatchEvent(new CustomEvent("tiltChange", {
          detail: t
        })), this.updateCall = null;
      }
    }, {
      key: "prepareGlare",
      value: function prepareGlare() {
        if (!this.glarePrerender) {
          var _t2 = document.createElement("div");

          _t2.classList.add("js-tilt-glare");

          var e = document.createElement("div");
          e.classList.add("js-tilt-glare-inner"), _t2.appendChild(e), this.element.appendChild(_t2);
        }

        this.glareElementWrapper = this.element.querySelector(".js-tilt-glare"), this.glareElement = this.element.querySelector(".js-tilt-glare-inner"), this.glarePrerender || (Object.assign(this.glareElementWrapper.style, {
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          overflow: "hidden",
          "pointer-events": "none"
        }), Object.assign(this.glareElement.style, {
          position: "absolute",
          top: "50%",
          left: "50%",
          "pointer-events": "none",
          "background-image": "linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)",
          width: "".concat(2 * this.element.offsetWidth, "px"),
          height: "".concat(2 * this.element.offsetWidth, "px"),
          transform: "rotate(180deg) translate(-50%, -50%)",
          "transform-origin": "0% 0%",
          opacity: "0"
        }));
      }
    }, {
      key: "updateGlareSize",
      value: function updateGlareSize() {
        this.glare && Object.assign(this.glareElement.style, {
          width: "".concat(2 * this.element.offsetWidth),
          height: "".concat(2 * this.element.offsetWidth)
        });
      }
    }, {
      key: "updateClientSize",
      value: function updateClientSize() {
        this.clientWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth, this.clientHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
      }
    }, {
      key: "onWindowResize",
      value: function onWindowResize() {
        this.updateGlareSize(), this.updateClientSize();
      }
    }, {
      key: "setTransition",
      value: function setTransition() {
        var _this = this;

        clearTimeout(this.transitionTimeout), this.element.style.transition = this.settings.speed + "ms " + this.settings.easing, this.glare && (this.glareElement.style.transition = "opacity ".concat(this.settings.speed, "ms ").concat(this.settings.easing)), this.transitionTimeout = setTimeout(function () {
          _this.element.style.transition = "", _this.glare && (_this.glareElement.style.transition = "");
        }, this.settings.speed);
      }
    }, {
      key: "extendSettings",
      value: function extendSettings(t) {
        var e = {
          reverse: !1,
          max: 15,
          startX: 0,
          startY: 0,
          perspective: 1e3,
          easing: "cubic-bezier(.03,.98,.52,.99)",
          scale: 1,
          speed: 300,
          transition: !0,
          axis: null,
          glare: !1,
          "max-glare": 1,
          "glare-prerender": !1,
          "full-page-listening": !1,
          "mouse-event-element": null,
          reset: !0,
          gyroscope: !0,
          gyroscopeMinAngleX: -45,
          gyroscopeMaxAngleX: 45,
          gyroscopeMinAngleY: -45,
          gyroscopeMaxAngleY: 45,
          gyroscopeSamples: 10
        },
            i = {};

        for (var s in e) {
          if (s in t) i[s] = t[s];else if (this.element.hasAttribute("data-tilt-" + s)) {
            var _t3 = this.element.getAttribute("data-tilt-" + s);

            try {
              i[s] = JSON.parse(_t3);
            } catch (e) {
              i[s] = _t3;
            }
          } else i[s] = e[s];
        }

        return i;
      }
    }], [{
      key: "isSettingTrue",
      value: function isSettingTrue(t) {
        return "" === t || !0 === t || 1 === t;
      }
    }, {
      key: "init",
      value: function init(e, i) {
        e instanceof Node && (e = [e]), e instanceof NodeList && (e = [].slice.call(e)), e instanceof Array && e.forEach(function (e) {
          "vanillaTilt" in e || (e.vanillaTilt = new t(e, i));
        });
      }
    }]);

    return t;
  }();

  return "undefined" != typeof document && (window.VanillaTilt = t, t.init(document.querySelectorAll("[data-tilt]"))), t;
}();
/**
 * @author mrdoob / http://mrdoob.com/
 */
THREE.SpriteCanvasMaterial = function (parameters) {
  THREE.Material.call(this);
  this.type = 'SpriteCanvasMaterial';
  this.color = new THREE.Color(0xffffff);

  this.program = function (context, color) {};

  this.setValues(parameters);
};

THREE.SpriteCanvasMaterial.prototype = Object.create(THREE.Material.prototype);
THREE.SpriteCanvasMaterial.prototype.constructor = THREE.SpriteCanvasMaterial;

THREE.SpriteCanvasMaterial.prototype.clone = function () {
  var material = new THREE.SpriteCanvasMaterial();
  THREE.Material.prototype.clone.call(this, material);
  material.color.copy(this.color);
  material.program = this.program;
  return material;
}; //


THREE.CanvasRenderer = function (parameters) {
  console.log('THREE.CanvasRenderer', THREE.REVISION);
  var smoothstep = THREE.Math.smoothstep;
  parameters = parameters || {};

  var _this = this,
      _renderData,
      _elements,
      _lights,
      _projector = new THREE.Projector(),
      _canvas = parameters.canvas !== undefined ? parameters.canvas : document.createElement('canvas'),
      _canvasWidth = _canvas.width,
      _canvasHeight = _canvas.height,
      _canvasWidthHalf = Math.floor(_canvasWidth / 2),
      _canvasHeightHalf = Math.floor(_canvasHeight / 2),
      _viewportX = 0,
      _viewportY = 0,
      _viewportWidth = _canvasWidth,
      _viewportHeight = _canvasHeight,
      pixelRatio = 1,
      _context = _canvas.getContext('2d', {
    alpha: parameters.alpha === true
  }),
      _clearColor = new THREE.Color(0x000000),
      _clearAlpha = parameters.alpha === true ? 0 : 1,
      _contextGlobalAlpha = 1,
      _contextGlobalCompositeOperation = 0,
      _contextStrokeStyle = null,
      _contextFillStyle = null,
      _contextLineWidth = null,
      _contextLineCap = null,
      _contextLineJoin = null,
      _contextLineDash = [],
      _camera,
      _v1,
      _v2,
      _v3,
      _v4,
      _v5 = new THREE.RenderableVertex(),
      _v6 = new THREE.RenderableVertex(),
      _v1x,
      _v1y,
      _v2x,
      _v2y,
      _v3x,
      _v3y,
      _v4x,
      _v4y,
      _v5x,
      _v5y,
      _v6x,
      _v6y,
      _color = new THREE.Color(),
      _color1 = new THREE.Color(),
      _color2 = new THREE.Color(),
      _color3 = new THREE.Color(),
      _color4 = new THREE.Color(),
      _diffuseColor = new THREE.Color(),
      _emissiveColor = new THREE.Color(),
      _lightColor = new THREE.Color(),
      _patterns = {},
      _image,
      _uvs,
      _uv1x,
      _uv1y,
      _uv2x,
      _uv2y,
      _uv3x,
      _uv3y,
      _clipBox = new THREE.Box2(),
      _clearBox = new THREE.Box2(),
      _elemBox = new THREE.Box2(),
      _ambientLight = new THREE.Color(),
      _directionalLights = new THREE.Color(),
      _pointLights = new THREE.Color(),
      _vector3 = new THREE.Vector3(),
      // Needed for PointLight
  _centroid = new THREE.Vector3(),
      _normal = new THREE.Vector3(),
      _normalViewMatrix = new THREE.Matrix3(); // dash+gap fallbacks for Firefox and everything else


  if (_context.setLineDash === undefined) {
    _context.setLineDash = function () {};
  }

  this.domElement = _canvas;
  this.autoClear = true;
  this.sortObjects = true;
  this.sortElements = true;
  this.info = {
    render: {
      vertices: 0,
      faces: 0
    }
  }; // WebGLRenderer compatibility

  this.supportsVertexTextures = function () {};

  this.setFaceCulling = function () {}; //


  this.getPixelRatio = function () {
    return pixelRatio;
  };

  this.setPixelRatio = function (value) {
    pixelRatio = value;
  };

  this.setSize = function (width, height, updateStyle) {
    _canvasWidth = width * pixelRatio;
    _canvasHeight = height * pixelRatio;
    _canvas.width = _canvasWidth;
    _canvas.height = _canvasHeight;
    _canvasWidthHalf = Math.floor(_canvasWidth / 2);
    _canvasHeightHalf = Math.floor(_canvasHeight / 2);

    if (updateStyle !== false) {
      _canvas.style.width = width + 'px';
      _canvas.style.height = height + 'px';
    }

    _clipBox.min.set(-_canvasWidthHalf, -_canvasHeightHalf), _clipBox.max.set(_canvasWidthHalf, _canvasHeightHalf);

    _clearBox.min.set(-_canvasWidthHalf, -_canvasHeightHalf);

    _clearBox.max.set(_canvasWidthHalf, _canvasHeightHalf);

    _contextGlobalAlpha = 1;
    _contextGlobalCompositeOperation = 0;
    _contextStrokeStyle = null;
    _contextFillStyle = null;
    _contextLineWidth = null;
    _contextLineCap = null;
    _contextLineJoin = null;
    this.setViewport(0, 0, width, height);
  };

  this.setViewport = function (x, y, width, height) {
    _viewportX = x * pixelRatio;
    _viewportY = y * pixelRatio;
    _viewportWidth = width * pixelRatio;
    _viewportHeight = height * pixelRatio;
  };

  this.setScissor = function () {};

  this.enableScissorTest = function () {};

  this.setClearColor = function (color, alpha) {
    _clearColor.set(color);

    _clearAlpha = alpha !== undefined ? alpha : 1;

    _clearBox.min.set(-_canvasWidthHalf, -_canvasHeightHalf);

    _clearBox.max.set(_canvasWidthHalf, _canvasHeightHalf);
  };

  this.setClearColorHex = function (hex, alpha) {
    console.warn('THREE.CanvasRenderer: .setClearColorHex() is being removed. Use .setClearColor() instead.');
    this.setClearColor(hex, alpha);
  };

  this.getClearColor = function () {
    return _clearColor;
  };

  this.getClearAlpha = function () {
    return _clearAlpha;
  };

  this.getMaxAnisotropy = function () {
    return 0;
  };

  this.clear = function () {
    if (_clearBox.empty() === false) {
      _clearBox.intersect(_clipBox);

      _clearBox.expandByScalar(2);

      _clearBox.min.x = _clearBox.min.x + _canvasWidthHalf;
      _clearBox.min.y = -_clearBox.min.y + _canvasHeightHalf; // higher y value !

      _clearBox.max.x = _clearBox.max.x + _canvasWidthHalf;
      _clearBox.max.y = -_clearBox.max.y + _canvasHeightHalf; // lower y value !

      if (_clearAlpha < 1) {
        _context.clearRect(_clearBox.min.x | 0, _clearBox.max.y | 0, _clearBox.max.x - _clearBox.min.x | 0, _clearBox.min.y - _clearBox.max.y | 0);
      }

      if (_clearAlpha > 0) {
        setBlending(THREE.NormalBlending);
        setOpacity(1);
        setFillStyle('rgba(' + Math.floor(_clearColor.r * 255) + ',' + Math.floor(_clearColor.g * 255) + ',' + Math.floor(_clearColor.b * 255) + ',' + _clearAlpha + ')');

        _context.fillRect(_clearBox.min.x | 0, _clearBox.max.y | 0, _clearBox.max.x - _clearBox.min.x | 0, _clearBox.min.y - _clearBox.max.y | 0);
      }

      _clearBox.makeEmpty();
    }
  }; // compatibility


  this.clearColor = function () {};

  this.clearDepth = function () {};

  this.clearStencil = function () {};

  this.render = function (scene, camera) {
    if (camera instanceof THREE.Camera === false) {
      console.error('THREE.CanvasRenderer.render: camera is not an instance of THREE.Camera.');
      return;
    }

    if (this.autoClear === true) this.clear();
    _this.info.render.vertices = 0;
    _this.info.render.faces = 0;

    _context.setTransform(_viewportWidth / _canvasWidth, 0, 0, -_viewportHeight / _canvasHeight, _viewportX, _canvasHeight - _viewportY);

    _context.translate(_canvasWidthHalf, _canvasHeightHalf);

    _renderData = _projector.projectScene(scene, camera, this.sortObjects, this.sortElements);
    _elements = _renderData.elements;
    _lights = _renderData.lights;
    _camera = camera;

    _normalViewMatrix.getNormalMatrix(camera.matrixWorldInverse);
    /* DEBUG
    setFillStyle( 'rgba( 0, 255, 255, 0.5 )' );
    _context.fillRect( _clipBox.min.x, _clipBox.min.y, _clipBox.max.x - _clipBox.min.x, _clipBox.max.y - _clipBox.min.y );
    */


    calculateLights();

    for (var e = 0, el = _elements.length; e < el; e++) {
      var element = _elements[e];
      var material = element.material;
      if (material === undefined || material.opacity === 0) continue;

      _elemBox.makeEmpty();

      if (element instanceof THREE.RenderableSprite) {
        _v1 = element;
        _v1.x *= _canvasWidthHalf;
        _v1.y *= _canvasHeightHalf;
        renderSprite(_v1, element, material);
      } else if (element instanceof THREE.RenderableLine) {
        _v1 = element.v1;
        _v2 = element.v2;
        _v1.positionScreen.x *= _canvasWidthHalf;
        _v1.positionScreen.y *= _canvasHeightHalf;
        _v2.positionScreen.x *= _canvasWidthHalf;
        _v2.positionScreen.y *= _canvasHeightHalf;

        _elemBox.setFromPoints([_v1.positionScreen, _v2.positionScreen]);

        if (_clipBox.isIntersectionBox(_elemBox) === true) {
          renderLine(_v1, _v2, element, material);
        }
      } else if (element instanceof THREE.RenderableFace) {
        _v1 = element.v1;
        _v2 = element.v2;
        _v3 = element.v3;
        if (_v1.positionScreen.z < -1 || _v1.positionScreen.z > 1) continue;
        if (_v2.positionScreen.z < -1 || _v2.positionScreen.z > 1) continue;
        if (_v3.positionScreen.z < -1 || _v3.positionScreen.z > 1) continue;
        _v1.positionScreen.x *= _canvasWidthHalf;
        _v1.positionScreen.y *= _canvasHeightHalf;
        _v2.positionScreen.x *= _canvasWidthHalf;
        _v2.positionScreen.y *= _canvasHeightHalf;
        _v3.positionScreen.x *= _canvasWidthHalf;
        _v3.positionScreen.y *= _canvasHeightHalf;

        if (material.overdraw > 0) {
          expand(_v1.positionScreen, _v2.positionScreen, material.overdraw);
          expand(_v2.positionScreen, _v3.positionScreen, material.overdraw);
          expand(_v3.positionScreen, _v1.positionScreen, material.overdraw);
        }

        _elemBox.setFromPoints([_v1.positionScreen, _v2.positionScreen, _v3.positionScreen]);

        if (_clipBox.isIntersectionBox(_elemBox) === true) {
          renderFace3(_v1, _v2, _v3, 0, 1, 2, element, material);
        }
      }
      /* DEBUG
      setLineWidth( 1 );
      setStrokeStyle( 'rgba( 0, 255, 0, 0.5 )' );
      _context.strokeRect( _elemBox.min.x, _elemBox.min.y, _elemBox.max.x - _elemBox.min.x, _elemBox.max.y - _elemBox.min.y );
      */


      _clearBox.union(_elemBox);
    }
    /* DEBUG
    setLineWidth( 1 );
    setStrokeStyle( 'rgba( 255, 0, 0, 0.5 )' );
    _context.strokeRect( _clearBox.min.x, _clearBox.min.y, _clearBox.max.x - _clearBox.min.x, _clearBox.max.y - _clearBox.min.y );
    */


    _context.setTransform(1, 0, 0, 1, 0, 0);
  }; //


  function calculateLights() {
    _ambientLight.setRGB(0, 0, 0);

    _directionalLights.setRGB(0, 0, 0);

    _pointLights.setRGB(0, 0, 0);

    for (var l = 0, ll = _lights.length; l < ll; l++) {
      var light = _lights[l];
      var lightColor = light.color;

      if (light instanceof THREE.AmbientLight) {
        _ambientLight.add(lightColor);
      } else if (light instanceof THREE.DirectionalLight) {
        // for sprites
        _directionalLights.add(lightColor);
      } else if (light instanceof THREE.PointLight) {
        // for sprites
        _pointLights.add(lightColor);
      }
    }
  }

  function calculateLight(position, normal, color) {
    for (var l = 0, ll = _lights.length; l < ll; l++) {
      var light = _lights[l];

      _lightColor.copy(light.color);

      if (light instanceof THREE.DirectionalLight) {
        var lightPosition = _vector3.setFromMatrixPosition(light.matrixWorld).normalize();

        var amount = normal.dot(lightPosition);
        if (amount <= 0) continue;
        amount *= light.intensity;
        color.add(_lightColor.multiplyScalar(amount));
      } else if (light instanceof THREE.PointLight) {
        var lightPosition = _vector3.setFromMatrixPosition(light.matrixWorld);

        var amount = normal.dot(_vector3.subVectors(lightPosition, position).normalize());
        if (amount <= 0) continue;
        amount *= light.distance == 0 ? 1 : 1 - Math.min(position.distanceTo(lightPosition) / light.distance, 1);
        if (amount == 0) continue;
        amount *= light.intensity;
        color.add(_lightColor.multiplyScalar(amount));
      }
    }
  }

  function renderSprite(v1, element, material) {
    setOpacity(material.opacity);
    setBlending(material.blending);
    var scaleX = element.scale.x * _canvasWidthHalf;
    var scaleY = element.scale.y * _canvasHeightHalf;
    var dist = 0.5 * Math.sqrt(scaleX * scaleX + scaleY * scaleY); // allow for rotated sprite

    _elemBox.min.set(v1.x - dist, v1.y - dist);

    _elemBox.max.set(v1.x + dist, v1.y + dist);

    if (material instanceof THREE.SpriteMaterial) {
      var texture = material.map;

      if (texture !== null && texture.image !== undefined) {
        if (texture.hasEventListener('update', onTextureUpdate) === false) {
          if (texture.image.width > 0) {
            textureToPattern(texture);
          }

          texture.addEventListener('update', onTextureUpdate);
        }

        var pattern = _patterns[texture.id];

        if (pattern !== undefined) {
          setFillStyle(pattern);
        } else {
          setFillStyle('rgba( 0, 0, 0, 1 )');
        } //


        var bitmap = texture.image;
        var ox = bitmap.width * texture.offset.x;
        var oy = bitmap.height * texture.offset.y;
        var sx = bitmap.width * texture.repeat.x;
        var sy = bitmap.height * texture.repeat.y;
        var cx = scaleX / sx;
        var cy = scaleY / sy;

        _context.save();

        _context.translate(v1.x, v1.y);

        if (material.rotation !== 0) _context.rotate(material.rotation);

        _context.translate(-scaleX / 2, -scaleY / 2);

        _context.scale(cx, cy);

        _context.translate(-ox, -oy);

        _context.fillRect(ox, oy, sx, sy);

        _context.restore();
      } else {
        // no texture
        setFillStyle(material.color.getStyle());

        _context.save();

        _context.translate(v1.x, v1.y);

        if (material.rotation !== 0) _context.rotate(material.rotation);

        _context.scale(scaleX, -scaleY);

        _context.fillRect(-0.5, -0.5, 1, 1);

        _context.restore();
      }
    } else if (material instanceof THREE.SpriteCanvasMaterial) {
      setStrokeStyle(material.color.getStyle());
      setFillStyle(material.color.getStyle());

      _context.save();

      _context.translate(v1.x, v1.y);

      if (material.rotation !== 0) _context.rotate(material.rotation);

      _context.scale(scaleX, scaleY);

      material.program(_context);

      _context.restore();
    }
    /* DEBUG
    setStrokeStyle( 'rgb(255,255,0)' );
    _context.beginPath();
    _context.moveTo( v1.x - 10, v1.y );
    _context.lineTo( v1.x + 10, v1.y );
    _context.moveTo( v1.x, v1.y - 10 );
    _context.lineTo( v1.x, v1.y + 10 );
    _context.stroke();
    */

  }

  function renderLine(v1, v2, element, material) {
    setOpacity(material.opacity);
    setBlending(material.blending);

    _context.beginPath();

    _context.moveTo(v1.positionScreen.x, v1.positionScreen.y);

    _context.lineTo(v2.positionScreen.x, v2.positionScreen.y);

    if (material instanceof THREE.LineBasicMaterial) {
      setLineWidth(material.linewidth);
      setLineCap(material.linecap);
      setLineJoin(material.linejoin);

      if (material.vertexColors !== THREE.VertexColors) {
        setStrokeStyle(material.color.getStyle());
      } else {
        var colorStyle1 = element.vertexColors[0].getStyle();
        var colorStyle2 = element.vertexColors[1].getStyle();

        if (colorStyle1 === colorStyle2) {
          setStrokeStyle(colorStyle1);
        } else {
          try {
            var grad = _context.createLinearGradient(v1.positionScreen.x, v1.positionScreen.y, v2.positionScreen.x, v2.positionScreen.y);

            grad.addColorStop(0, colorStyle1);
            grad.addColorStop(1, colorStyle2);
          } catch (exception) {
            grad = colorStyle1;
          }

          setStrokeStyle(grad);
        }
      }

      _context.stroke();

      _elemBox.expandByScalar(material.linewidth * 2);
    } else if (material instanceof THREE.LineDashedMaterial) {
      setLineWidth(material.linewidth);
      setLineCap(material.linecap);
      setLineJoin(material.linejoin);
      setStrokeStyle(material.color.getStyle());
      setLineDash([material.dashSize, material.gapSize]);

      _context.stroke();

      _elemBox.expandByScalar(material.linewidth * 2);

      setLineDash([]);
    }
  }

  function renderFace3(v1, v2, v3, uv1, uv2, uv3, element, material) {
    _this.info.render.vertices += 3;
    _this.info.render.faces++;
    setOpacity(material.opacity);
    setBlending(material.blending);
    _v1x = v1.positionScreen.x;
    _v1y = v1.positionScreen.y;
    _v2x = v2.positionScreen.x;
    _v2y = v2.positionScreen.y;
    _v3x = v3.positionScreen.x;
    _v3y = v3.positionScreen.y;
    drawTriangle(_v1x, _v1y, _v2x, _v2y, _v3x, _v3y);

    if ((material instanceof THREE.MeshLambertMaterial || material instanceof THREE.MeshPhongMaterial) && material.map === null) {
      _diffuseColor.copy(material.color);

      _emissiveColor.copy(material.emissive);

      if (material.vertexColors === THREE.FaceColors) {
        _diffuseColor.multiply(element.color);
      }

      _color.copy(_ambientLight);

      _centroid.copy(v1.positionWorld).add(v2.positionWorld).add(v3.positionWorld).divideScalar(3);

      calculateLight(_centroid, element.normalModel, _color);

      _color.multiply(_diffuseColor).add(_emissiveColor);

      material.wireframe === true ? strokePath(_color, material.wireframeLinewidth, material.wireframeLinecap, material.wireframeLinejoin) : fillPath(_color);
    } else if (material instanceof THREE.MeshBasicMaterial || material instanceof THREE.MeshLambertMaterial || material instanceof THREE.MeshPhongMaterial) {
      if (material.map !== null) {
        var mapping = material.map.mapping;

        if (mapping === THREE.UVMapping) {
          _uvs = element.uvs;
          patternPath(_v1x, _v1y, _v2x, _v2y, _v3x, _v3y, _uvs[uv1].x, _uvs[uv1].y, _uvs[uv2].x, _uvs[uv2].y, _uvs[uv3].x, _uvs[uv3].y, material.map);
        }
      } else if (material.envMap !== null) {
        if (material.envMap.mapping === THREE.SphericalReflectionMapping) {
          _normal.copy(element.vertexNormalsModel[uv1]).applyMatrix3(_normalViewMatrix);

          _uv1x = 0.5 * _normal.x + 0.5;
          _uv1y = 0.5 * _normal.y + 0.5;

          _normal.copy(element.vertexNormalsModel[uv2]).applyMatrix3(_normalViewMatrix);

          _uv2x = 0.5 * _normal.x + 0.5;
          _uv2y = 0.5 * _normal.y + 0.5;

          _normal.copy(element.vertexNormalsModel[uv3]).applyMatrix3(_normalViewMatrix);

          _uv3x = 0.5 * _normal.x + 0.5;
          _uv3y = 0.5 * _normal.y + 0.5;
          patternPath(_v1x, _v1y, _v2x, _v2y, _v3x, _v3y, _uv1x, _uv1y, _uv2x, _uv2y, _uv3x, _uv3y, material.envMap);
        }
      } else {
        _color.copy(material.color);

        if (material.vertexColors === THREE.FaceColors) {
          _color.multiply(element.color);
        }

        material.wireframe === true ? strokePath(_color, material.wireframeLinewidth, material.wireframeLinecap, material.wireframeLinejoin) : fillPath(_color);
      }
    } else if (material instanceof THREE.MeshDepthMaterial) {
      _color.r = _color.g = _color.b = 1 - smoothstep(v1.positionScreen.z * v1.positionScreen.w, _camera.near, _camera.far);
      material.wireframe === true ? strokePath(_color, material.wireframeLinewidth, material.wireframeLinecap, material.wireframeLinejoin) : fillPath(_color);
    } else if (material instanceof THREE.MeshNormalMaterial) {
      _normal.copy(element.normalModel).applyMatrix3(_normalViewMatrix);

      _color.setRGB(_normal.x, _normal.y, _normal.z).multiplyScalar(0.5).addScalar(0.5);

      material.wireframe === true ? strokePath(_color, material.wireframeLinewidth, material.wireframeLinecap, material.wireframeLinejoin) : fillPath(_color);
    } else {
      _color.setRGB(1, 1, 1);

      material.wireframe === true ? strokePath(_color, material.wireframeLinewidth, material.wireframeLinecap, material.wireframeLinejoin) : fillPath(_color);
    }
  } //


  function drawTriangle(x0, y0, x1, y1, x2, y2) {
    _context.beginPath();

    _context.moveTo(x0, y0);

    _context.lineTo(x1, y1);

    _context.lineTo(x2, y2);

    _context.closePath();
  }

  function strokePath(color, linewidth, linecap, linejoin) {
    setLineWidth(linewidth);
    setLineCap(linecap);
    setLineJoin(linejoin);
    setStrokeStyle(color.getStyle());

    _context.stroke();

    _elemBox.expandByScalar(linewidth * 2);
  }

  function fillPath(color) {
    setFillStyle(color.getStyle());

    _context.fill();
  }

  function onTextureUpdate(event) {
    textureToPattern(event.target);
  }

  function textureToPattern(texture) {
    if (texture instanceof THREE.CompressedTexture) return;
    var repeatX = texture.wrapS === THREE.RepeatWrapping;
    var repeatY = texture.wrapT === THREE.RepeatWrapping;
    var image = texture.image;
    var canvas = document.createElement('canvas');
    canvas.width = image.width;
    canvas.height = image.height;
    var context = canvas.getContext('2d');
    context.setTransform(1, 0, 0, -1, 0, image.height);
    context.drawImage(image, 0, 0);
    _patterns[texture.id] = _context.createPattern(canvas, repeatX === true && repeatY === true ? 'repeat' : repeatX === true && repeatY === false ? 'repeat-x' : repeatX === false && repeatY === true ? 'repeat-y' : 'no-repeat');
  }

  function patternPath(x0, y0, x1, y1, x2, y2, u0, v0, u1, v1, u2, v2, texture) {
    if (texture instanceof THREE.DataTexture) return;

    if (texture.hasEventListener('update', onTextureUpdate) === false) {
      if (texture.image !== undefined && texture.image.width > 0) {
        textureToPattern(texture);
      }

      texture.addEventListener('update', onTextureUpdate);
    }

    var pattern = _patterns[texture.id];

    if (pattern !== undefined) {
      setFillStyle(pattern);
    } else {
      setFillStyle('rgba(0,0,0,1)');

      _context.fill();

      return;
    } // http://extremelysatisfactorytotalitarianism.com/blog/?p=2120


    var a,
        b,
        c,
        d,
        e,
        f,
        det,
        idet,
        offsetX = texture.offset.x / texture.repeat.x,
        offsetY = texture.offset.y / texture.repeat.y,
        width = texture.image.width * texture.repeat.x,
        height = texture.image.height * texture.repeat.y;
    u0 = (u0 + offsetX) * width;
    v0 = (v0 + offsetY) * height;
    u1 = (u1 + offsetX) * width;
    v1 = (v1 + offsetY) * height;
    u2 = (u2 + offsetX) * width;
    v2 = (v2 + offsetY) * height;
    x1 -= x0;
    y1 -= y0;
    x2 -= x0;
    y2 -= y0;
    u1 -= u0;
    v1 -= v0;
    u2 -= u0;
    v2 -= v0;
    det = u1 * v2 - u2 * v1;
    if (det === 0) return;
    idet = 1 / det;
    a = (v2 * x1 - v1 * x2) * idet;
    b = (v2 * y1 - v1 * y2) * idet;
    c = (u1 * x2 - u2 * x1) * idet;
    d = (u1 * y2 - u2 * y1) * idet;
    e = x0 - a * u0 - c * v0;
    f = y0 - b * u0 - d * v0;

    _context.save();

    _context.transform(a, b, c, d, e, f);

    _context.fill();

    _context.restore();
  }

  function clipImage(x0, y0, x1, y1, x2, y2, u0, v0, u1, v1, u2, v2, image) {
    // http://extremelysatisfactorytotalitarianism.com/blog/?p=2120
    var a,
        b,
        c,
        d,
        e,
        f,
        det,
        idet,
        width = image.width - 1,
        height = image.height - 1;
    u0 *= width;
    v0 *= height;
    u1 *= width;
    v1 *= height;
    u2 *= width;
    v2 *= height;
    x1 -= x0;
    y1 -= y0;
    x2 -= x0;
    y2 -= y0;
    u1 -= u0;
    v1 -= v0;
    u2 -= u0;
    v2 -= v0;
    det = u1 * v2 - u2 * v1;
    idet = 1 / det;
    a = (v2 * x1 - v1 * x2) * idet;
    b = (v2 * y1 - v1 * y2) * idet;
    c = (u1 * x2 - u2 * x1) * idet;
    d = (u1 * y2 - u2 * y1) * idet;
    e = x0 - a * u0 - c * v0;
    f = y0 - b * u0 - d * v0;

    _context.save();

    _context.transform(a, b, c, d, e, f);

    _context.clip();

    _context.drawImage(image, 0, 0);

    _context.restore();
  } // Hide anti-alias gaps


  function expand(v1, v2, pixels) {
    var x = v2.x - v1.x,
        y = v2.y - v1.y,
        det = x * x + y * y,
        idet;
    if (det === 0) return;
    idet = pixels / Math.sqrt(det);
    x *= idet;
    y *= idet;
    v2.x += x;
    v2.y += y;
    v1.x -= x;
    v1.y -= y;
  } // Context cached methods.


  function setOpacity(value) {
    if (_contextGlobalAlpha !== value) {
      _context.globalAlpha = value;
      _contextGlobalAlpha = value;
    }
  }

  function setBlending(value) {
    if (_contextGlobalCompositeOperation !== value) {
      if (value === THREE.NormalBlending) {
        _context.globalCompositeOperation = 'source-over';
      } else if (value === THREE.AdditiveBlending) {
        _context.globalCompositeOperation = 'lighter';
      } else if (value === THREE.SubtractiveBlending) {
        _context.globalCompositeOperation = 'darker';
      }

      _contextGlobalCompositeOperation = value;
    }
  }

  function setLineWidth(value) {
    if (_contextLineWidth !== value) {
      _context.lineWidth = value;
      _contextLineWidth = value;
    }
  }

  function setLineCap(value) {
    // "butt", "round", "square"
    if (_contextLineCap !== value) {
      _context.lineCap = value;
      _contextLineCap = value;
    }
  }

  function setLineJoin(value) {
    // "round", "bevel", "miter"
    if (_contextLineJoin !== value) {
      _context.lineJoin = value;
      _contextLineJoin = value;
    }
  }

  function setStrokeStyle(value) {
    if (_contextStrokeStyle !== value) {
      _context.strokeStyle = value;
      _contextStrokeStyle = value;
    }
  }

  function setFillStyle(value) {
    if (_contextFillStyle !== value) {
      _context.fillStyle = value;
      _contextFillStyle = value;
    }
  }

  function setLineDash(value) {
    if (_contextLineDash.length !== value.length) {
      _context.setLineDash(value);

      _contextLineDash = value;
    }
  }
};
/**
 * @author mrdoob / http://mrdoob.com/
 * @author supereggbert / http://www.paulbrunt.co.uk/
 * @author julianwa / https://github.com/julianwa
 */
THREE.RenderableObject = function () {
  this.id = 0;
  this.object = null;
  this.z = 0;
}; //


THREE.RenderableFace = function () {
  this.id = 0;
  this.v1 = new THREE.RenderableVertex();
  this.v2 = new THREE.RenderableVertex();
  this.v3 = new THREE.RenderableVertex();
  this.normalModel = new THREE.Vector3();
  this.vertexNormalsModel = [new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3()];
  this.vertexNormalsLength = 0;
  this.color = new THREE.Color();
  this.material = null;
  this.uvs = [new THREE.Vector2(), new THREE.Vector2(), new THREE.Vector2()];
  this.z = 0;
}; //


THREE.RenderableVertex = function () {
  this.position = new THREE.Vector3();
  this.positionWorld = new THREE.Vector3();
  this.positionScreen = new THREE.Vector4();
  this.visible = true;
};

THREE.RenderableVertex.prototype.copy = function (vertex) {
  this.positionWorld.copy(vertex.positionWorld);
  this.positionScreen.copy(vertex.positionScreen);
}; //


THREE.RenderableLine = function () {
  this.id = 0;
  this.v1 = new THREE.RenderableVertex();
  this.v2 = new THREE.RenderableVertex();
  this.vertexColors = [new THREE.Color(), new THREE.Color()];
  this.material = null;
  this.z = 0;
}; //


THREE.RenderableSprite = function () {
  this.id = 0;
  this.object = null;
  this.x = 0;
  this.y = 0;
  this.z = 0;
  this.rotation = 0;
  this.scale = new THREE.Vector2();
  this.material = null;
}; //


THREE.Projector = function () {
  var _object,
      _objectCount,
      _objectPool = [],
      _objectPoolLength = 0,
      _vertex,
      _vertexCount,
      _vertexPool = [],
      _vertexPoolLength = 0,
      _face,
      _faceCount,
      _facePool = [],
      _facePoolLength = 0,
      _line,
      _lineCount,
      _linePool = [],
      _linePoolLength = 0,
      _sprite,
      _spriteCount,
      _spritePool = [],
      _spritePoolLength = 0,
      _renderData = {
    objects: [],
    lights: [],
    elements: []
  },
      _vector3 = new THREE.Vector3(),
      _vector4 = new THREE.Vector4(),
      _clipBox = new THREE.Box3(new THREE.Vector3(-1, -1, -1), new THREE.Vector3(1, 1, 1)),
      _boundingBox = new THREE.Box3(),
      _points3 = new Array(3),
      _points4 = new Array(4),
      _viewMatrix = new THREE.Matrix4(),
      _viewProjectionMatrix = new THREE.Matrix4(),
      _modelMatrix,
      _modelViewProjectionMatrix = new THREE.Matrix4(),
      _normalMatrix = new THREE.Matrix3(),
      _frustum = new THREE.Frustum(),
      _clippedVertex1PositionScreen = new THREE.Vector4(),
      _clippedVertex2PositionScreen = new THREE.Vector4(); //


  this.projectVector = function (vector, camera) {
    console.warn('THREE.Projector: .projectVector() is now vector.project().');
    vector.project(camera);
  };

  this.unprojectVector = function (vector, camera) {
    console.warn('THREE.Projector: .unprojectVector() is now vector.unproject().');
    vector.unproject(camera);
  };

  this.pickingRay = function (vector, camera) {
    console.error('THREE.Projector: .pickingRay() is now raycaster.setFromCamera().');
  }; //


  var RenderList = function RenderList() {
    var normals = [];
    var uvs = [];
    var object = null;
    var material = null;
    var normalMatrix = new THREE.Matrix3();

    var setObject = function setObject(value) {
      object = value;
      material = object.material;
      normalMatrix.getNormalMatrix(object.matrixWorld);
      normals.length = 0;
      uvs.length = 0;
    };

    var projectVertex = function projectVertex(vertex) {
      var position = vertex.position;
      var positionWorld = vertex.positionWorld;
      var positionScreen = vertex.positionScreen;
      positionWorld.copy(position).applyMatrix4(_modelMatrix);
      positionScreen.copy(positionWorld).applyMatrix4(_viewProjectionMatrix);
      var invW = 1 / positionScreen.w;
      positionScreen.x *= invW;
      positionScreen.y *= invW;
      positionScreen.z *= invW;
      vertex.visible = positionScreen.x >= -1 && positionScreen.x <= 1 && positionScreen.y >= -1 && positionScreen.y <= 1 && positionScreen.z >= -1 && positionScreen.z <= 1;
    };

    var pushVertex = function pushVertex(x, y, z) {
      _vertex = getNextVertexInPool();

      _vertex.position.set(x, y, z);

      projectVertex(_vertex);
    };

    var pushNormal = function pushNormal(x, y, z) {
      normals.push(x, y, z);
    };

    var pushUv = function pushUv(x, y) {
      uvs.push(x, y);
    };

    var checkTriangleVisibility = function checkTriangleVisibility(v1, v2, v3) {
      if (v1.visible === true || v2.visible === true || v3.visible === true) return true;
      _points3[0] = v1.positionScreen;
      _points3[1] = v2.positionScreen;
      _points3[2] = v3.positionScreen;
      return _clipBox.isIntersectionBox(_boundingBox.setFromPoints(_points3));
    };

    var checkBackfaceCulling = function checkBackfaceCulling(v1, v2, v3) {
      return (v3.positionScreen.x - v1.positionScreen.x) * (v2.positionScreen.y - v1.positionScreen.y) - (v3.positionScreen.y - v1.positionScreen.y) * (v2.positionScreen.x - v1.positionScreen.x) < 0;
    };

    var pushLine = function pushLine(a, b) {
      var v1 = _vertexPool[a];
      var v2 = _vertexPool[b];
      _line = getNextLineInPool();
      _line.id = object.id;

      _line.v1.copy(v1);

      _line.v2.copy(v2);

      _line.z = (v1.positionScreen.z + v2.positionScreen.z) / 2;
      _line.material = object.material;

      _renderData.elements.push(_line);
    };

    var pushTriangle = function pushTriangle(a, b, c) {
      var v1 = _vertexPool[a];
      var v2 = _vertexPool[b];
      var v3 = _vertexPool[c];
      if (checkTriangleVisibility(v1, v2, v3) === false) return;

      if (material.side === THREE.DoubleSide || checkBackfaceCulling(v1, v2, v3) === true) {
        _face = getNextFaceInPool();
        _face.id = object.id;

        _face.v1.copy(v1);

        _face.v2.copy(v2);

        _face.v3.copy(v3);

        _face.z = (v1.positionScreen.z + v2.positionScreen.z + v3.positionScreen.z) / 3;

        for (var i = 0; i < 3; i++) {
          var offset = arguments[i] * 3;
          var normal = _face.vertexNormalsModel[i];
          normal.set(normals[offset], normals[offset + 1], normals[offset + 2]);
          normal.applyMatrix3(normalMatrix).normalize();
          var offset2 = arguments[i] * 2;
          var uv = _face.uvs[i];
          uv.set(uvs[offset2], uvs[offset2 + 1]);
        }

        _face.vertexNormalsLength = 3;
        _face.material = object.material;

        _renderData.elements.push(_face);
      }
    };

    return {
      setObject: setObject,
      projectVertex: projectVertex,
      checkTriangleVisibility: checkTriangleVisibility,
      checkBackfaceCulling: checkBackfaceCulling,
      pushVertex: pushVertex,
      pushNormal: pushNormal,
      pushUv: pushUv,
      pushLine: pushLine,
      pushTriangle: pushTriangle
    };
  };

  var renderList = new RenderList();

  this.projectScene = function (scene, camera, sortObjects, sortElements) {
    _faceCount = 0;
    _lineCount = 0;
    _spriteCount = 0;
    _renderData.elements.length = 0;
    if (scene.autoUpdate === true) scene.updateMatrixWorld();
    if (camera.parent === undefined) camera.updateMatrixWorld();

    _viewMatrix.copy(camera.matrixWorldInverse.getInverse(camera.matrixWorld));

    _viewProjectionMatrix.multiplyMatrices(camera.projectionMatrix, _viewMatrix);

    _frustum.setFromMatrix(_viewProjectionMatrix); //


    _objectCount = 0;
    _renderData.objects.length = 0;
    _renderData.lights.length = 0;
    scene.traverseVisible(function (object) {
      if (object instanceof THREE.Light) {
        _renderData.lights.push(object);
      } else if (object instanceof THREE.Mesh || object instanceof THREE.Line || object instanceof THREE.Sprite) {
        if (object.material.visible === false) return;

        if (object.frustumCulled === false || _frustum.intersectsObject(object) === true) {
          _object = getNextObjectInPool();
          _object.id = object.id;
          _object.object = object;

          _vector3.setFromMatrixPosition(object.matrixWorld);

          _vector3.applyProjection(_viewProjectionMatrix);

          _object.z = _vector3.z;

          _renderData.objects.push(_object);
        }
      }
    });

    if (sortObjects === true) {
      _renderData.objects.sort(painterSort);
    } //


    for (var o = 0, ol = _renderData.objects.length; o < ol; o++) {
      var object = _renderData.objects[o].object;
      var geometry = object.geometry;
      renderList.setObject(object);
      _modelMatrix = object.matrixWorld;
      _vertexCount = 0;

      if (object instanceof THREE.Mesh) {
        if (geometry instanceof THREE.BufferGeometry) {
          var attributes = geometry.attributes;
          var offsets = geometry.offsets;
          if (attributes.position === undefined) continue;
          var positions = attributes.position.array;

          for (var i = 0, l = positions.length; i < l; i += 3) {
            renderList.pushVertex(positions[i], positions[i + 1], positions[i + 2]);
          }

          if (attributes.normal !== undefined) {
            var normals = attributes.normal.array;

            for (var i = 0, l = normals.length; i < l; i += 3) {
              renderList.pushNormal(normals[i], normals[i + 1], normals[i + 2]);
            }
          }

          if (attributes.uv !== undefined) {
            var uvs = attributes.uv.array;

            for (var i = 0, l = uvs.length; i < l; i += 2) {
              renderList.pushUv(uvs[i], uvs[i + 1]);
            }
          }

          if (attributes.index !== undefined) {
            var indices = attributes.index.array;

            if (offsets.length > 0) {
              for (var o = 0; o < offsets.length; o++) {
                var offset = offsets[o];
                var index = offset.index;

                for (var i = offset.start, l = offset.start + offset.count; i < l; i += 3) {
                  renderList.pushTriangle(indices[i] + index, indices[i + 1] + index, indices[i + 2] + index);
                }
              }
            } else {
              for (var i = 0, l = indices.length; i < l; i += 3) {
                renderList.pushTriangle(indices[i], indices[i + 1], indices[i + 2]);
              }
            }
          } else {
            for (var i = 0, l = positions.length / 3; i < l; i += 3) {
              renderList.pushTriangle(i, i + 1, i + 2);
            }
          }
        } else if (geometry instanceof THREE.Geometry) {
          var vertices = geometry.vertices;
          var faces = geometry.faces;
          var faceVertexUvs = geometry.faceVertexUvs[0];

          _normalMatrix.getNormalMatrix(_modelMatrix);

          var material = object.material;
          var isFaceMaterial = material instanceof THREE.MeshFaceMaterial;
          var objectMaterials = isFaceMaterial === true ? object.material : null;

          for (var v = 0, vl = vertices.length; v < vl; v++) {
            var vertex = vertices[v];

            _vector3.copy(vertex);

            if (material.morphTargets === true) {
              var morphTargets = geometry.morphTargets;
              var morphInfluences = object.morphTargetInfluences;

              for (var t = 0, tl = morphTargets.length; t < tl; t++) {
                var influence = morphInfluences[t];
                if (influence === 0) continue;
                var target = morphTargets[t];
                var targetVertex = target.vertices[v];
                _vector3.x += (targetVertex.x - vertex.x) * influence;
                _vector3.y += (targetVertex.y - vertex.y) * influence;
                _vector3.z += (targetVertex.z - vertex.z) * influence;
              }
            }

            renderList.pushVertex(_vector3.x, _vector3.y, _vector3.z);
          }

          for (var f = 0, fl = faces.length; f < fl; f++) {
            var face = faces[f];
            var material = isFaceMaterial === true ? objectMaterials.materials[face.materialIndex] : object.material;
            if (material === undefined) continue;
            var side = material.side;
            var v1 = _vertexPool[face.a];
            var v2 = _vertexPool[face.b];
            var v3 = _vertexPool[face.c];
            if (renderList.checkTriangleVisibility(v1, v2, v3) === false) continue;
            var visible = renderList.checkBackfaceCulling(v1, v2, v3);

            if (side !== THREE.DoubleSide) {
              if (side === THREE.FrontSide && visible === false) continue;
              if (side === THREE.BackSide && visible === true) continue;
            }

            _face = getNextFaceInPool();
            _face.id = object.id;

            _face.v1.copy(v1);

            _face.v2.copy(v2);

            _face.v3.copy(v3);

            _face.normalModel.copy(face.normal);

            if (visible === false && (side === THREE.BackSide || side === THREE.DoubleSide)) {
              _face.normalModel.negate();
            }

            _face.normalModel.applyMatrix3(_normalMatrix).normalize();

            var faceVertexNormals = face.vertexNormals;

            for (var n = 0, nl = Math.min(faceVertexNormals.length, 3); n < nl; n++) {
              var normalModel = _face.vertexNormalsModel[n];
              normalModel.copy(faceVertexNormals[n]);

              if (visible === false && (side === THREE.BackSide || side === THREE.DoubleSide)) {
                normalModel.negate();
              }

              normalModel.applyMatrix3(_normalMatrix).normalize();
            }

            _face.vertexNormalsLength = faceVertexNormals.length;
            var vertexUvs = faceVertexUvs[f];

            if (vertexUvs !== undefined) {
              for (var u = 0; u < 3; u++) {
                _face.uvs[u].copy(vertexUvs[u]);
              }
            }

            _face.color = face.color;
            _face.material = material;
            _face.z = (v1.positionScreen.z + v2.positionScreen.z + v3.positionScreen.z) / 3;

            _renderData.elements.push(_face);
          }
        }
      } else if (object instanceof THREE.Line) {
        if (geometry instanceof THREE.BufferGeometry) {
          var attributes = geometry.attributes;

          if (attributes.position !== undefined) {
            var positions = attributes.position.array;

            for (var i = 0, l = positions.length; i < l; i += 3) {
              renderList.pushVertex(positions[i], positions[i + 1], positions[i + 2]);
            }

            if (attributes.index !== undefined) {
              var indices = attributes.index.array;

              for (var i = 0, l = indices.length; i < l; i += 2) {
                renderList.pushLine(indices[i], indices[i + 1]);
              }
            } else {
              var step = object.mode === THREE.LinePieces ? 2 : 1;

              for (var i = 0, l = positions.length / 3 - 1; i < l; i += step) {
                renderList.pushLine(i, i + 1);
              }
            }
          }
        } else if (geometry instanceof THREE.Geometry) {
          _modelViewProjectionMatrix.multiplyMatrices(_viewProjectionMatrix, _modelMatrix);

          var vertices = object.geometry.vertices;
          if (vertices.length === 0) continue;
          v1 = getNextVertexInPool();
          v1.positionScreen.copy(vertices[0]).applyMatrix4(_modelViewProjectionMatrix); // Handle LineStrip and LinePieces

          var step = object.mode === THREE.LinePieces ? 2 : 1;

          for (var v = 1, vl = vertices.length; v < vl; v++) {
            v1 = getNextVertexInPool();
            v1.positionScreen.copy(vertices[v]).applyMatrix4(_modelViewProjectionMatrix);
            if ((v + 1) % step > 0) continue;
            v2 = _vertexPool[_vertexCount - 2];

            _clippedVertex1PositionScreen.copy(v1.positionScreen);

            _clippedVertex2PositionScreen.copy(v2.positionScreen);

            if (clipLine(_clippedVertex1PositionScreen, _clippedVertex2PositionScreen) === true) {
              // Perform the perspective divide
              _clippedVertex1PositionScreen.multiplyScalar(1 / _clippedVertex1PositionScreen.w);

              _clippedVertex2PositionScreen.multiplyScalar(1 / _clippedVertex2PositionScreen.w);

              _line = getNextLineInPool();
              _line.id = object.id;

              _line.v1.positionScreen.copy(_clippedVertex1PositionScreen);

              _line.v2.positionScreen.copy(_clippedVertex2PositionScreen);

              _line.z = Math.max(_clippedVertex1PositionScreen.z, _clippedVertex2PositionScreen.z);
              _line.material = object.material;

              if (object.material.vertexColors === THREE.VertexColors) {
                _line.vertexColors[0].copy(object.geometry.colors[v]);

                _line.vertexColors[1].copy(object.geometry.colors[v - 1]);
              }

              _renderData.elements.push(_line);
            }
          }
        }
      } else if (object instanceof THREE.Sprite) {
        _vector4.set(_modelMatrix.elements[12], _modelMatrix.elements[13], _modelMatrix.elements[14], 1);

        _vector4.applyMatrix4(_viewProjectionMatrix);

        var invW = 1 / _vector4.w;
        _vector4.z *= invW;

        if (_vector4.z >= -1 && _vector4.z <= 1) {
          _sprite = getNextSpriteInPool();
          _sprite.id = object.id;
          _sprite.x = _vector4.x * invW;
          _sprite.y = _vector4.y * invW;
          _sprite.z = _vector4.z;
          _sprite.object = object;
          _sprite.rotation = object.rotation;
          _sprite.scale.x = object.scale.x * Math.abs(_sprite.x - (_vector4.x + camera.projectionMatrix.elements[0]) / (_vector4.w + camera.projectionMatrix.elements[12]));
          _sprite.scale.y = object.scale.y * Math.abs(_sprite.y - (_vector4.y + camera.projectionMatrix.elements[5]) / (_vector4.w + camera.projectionMatrix.elements[13]));
          _sprite.material = object.material;

          _renderData.elements.push(_sprite);
        }
      }
    }

    if (sortElements === true) {
      _renderData.elements.sort(painterSort);
    }

    return _renderData;
  }; // Pools


  function getNextObjectInPool() {
    if (_objectCount === _objectPoolLength) {
      var object = new THREE.RenderableObject();

      _objectPool.push(object);

      _objectPoolLength++;
      _objectCount++;
      return object;
    }

    return _objectPool[_objectCount++];
  }

  function getNextVertexInPool() {
    if (_vertexCount === _vertexPoolLength) {
      var vertex = new THREE.RenderableVertex();

      _vertexPool.push(vertex);

      _vertexPoolLength++;
      _vertexCount++;
      return vertex;
    }

    return _vertexPool[_vertexCount++];
  }

  function getNextFaceInPool() {
    if (_faceCount === _facePoolLength) {
      var face = new THREE.RenderableFace();

      _facePool.push(face);

      _facePoolLength++;
      _faceCount++;
      return face;
    }

    return _facePool[_faceCount++];
  }

  function getNextLineInPool() {
    if (_lineCount === _linePoolLength) {
      var line = new THREE.RenderableLine();

      _linePool.push(line);

      _linePoolLength++;
      _lineCount++;
      return line;
    }

    return _linePool[_lineCount++];
  }

  function getNextSpriteInPool() {
    if (_spriteCount === _spritePoolLength) {
      var sprite = new THREE.RenderableSprite();

      _spritePool.push(sprite);

      _spritePoolLength++;
      _spriteCount++;
      return sprite;
    }

    return _spritePool[_spriteCount++];
  } //


  function painterSort(a, b) {
    if (a.z !== b.z) {
      return b.z - a.z;
    } else if (a.id !== b.id) {
      return a.id - b.id;
    } else {
      return 0;
    }
  }

  function clipLine(s1, s2) {
    var alpha1 = 0,
        alpha2 = 1,
        // Calculate the boundary coordinate of each vertex for the near and far clip planes,
    // Z = -1 and Z = +1, respectively.
    bc1near = s1.z + s1.w,
        bc2near = s2.z + s2.w,
        bc1far = -s1.z + s1.w,
        bc2far = -s2.z + s2.w;

    if (bc1near >= 0 && bc2near >= 0 && bc1far >= 0 && bc2far >= 0) {
      // Both vertices lie entirely within all clip planes.
      return true;
    } else if (bc1near < 0 && bc2near < 0 || bc1far < 0 && bc2far < 0) {
      // Both vertices lie entirely outside one of the clip planes.
      return false;
    } else {
      // The line segment spans at least one clip plane.
      if (bc1near < 0) {
        // v1 lies outside the near plane, v2 inside
        alpha1 = Math.max(alpha1, bc1near / (bc1near - bc2near));
      } else if (bc2near < 0) {
        // v2 lies outside the near plane, v1 inside
        alpha2 = Math.min(alpha2, bc1near / (bc1near - bc2near));
      }

      if (bc1far < 0) {
        // v1 lies outside the far plane, v2 inside
        alpha1 = Math.max(alpha1, bc1far / (bc1far - bc2far));
      } else if (bc2far < 0) {
        // v2 lies outside the far plane, v2 inside
        alpha2 = Math.min(alpha2, bc1far / (bc1far - bc2far));
      }

      if (alpha2 < alpha1) {
        // The line segment spans two boundaries, but is outside both of them.
        // (This can't happen when we're only clipping against just near/far but good
        //  to leave the check here for future usage if other clip planes are added.)
        return false;
      } else {
        // Update the s1 and s2 vertices to match the clipped line segment.
        s1.lerp(s2, alpha1);
        s2.lerp(s1, 1 - alpha2);
        return true;
      }
    }
  }
};
// helper functions for m9 digital
// selecting elements
// select a list of matching elements, context is optional
function $(selector, context) {
  return (context || document).querySelectorAll(selector);
} // select the first match only, context is optional


function $1(selector, context) {
  return (context || document).querySelector(selector);
} // has, add, remove Class


function hasClass(el, className) {
  return el.classList ? el.classList.contains(className) : new RegExp('\\b' + className + '\\b').test(el.className);
}

function addClass(el, className) {
  if (el.classList) el.classList.add(className);else if (!hasClass(el, className)) el.className += ' ' + className;
}

function removeClass(el, className) {
  if (el.classList) el.classList.remove(className);else el.className = el.className.replace(new RegExp('\\b' + className + '\\b', 'g'), '');
}

function toggleClass(el, className, callback) {
  el.classList.toggle(className);

  if (callback && callback.typeOf === 'function') {
    callback();
  }
} // debounced resize
// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.


function debounce(func, wait, immediate) {
  var timeout;
  return function () {
    var context = this,
        args = arguments;

    var later = function later() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };

    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

;

function getElementPosition(el) {
  var tp = el.offsetTop;
  return tp;
} // get current screenSize


function currScreenSize() {
  var head = document.getElementsByTagName('head')[0];
  var computed;

  if (window.getComputedStyle) {
    computed = window.getComputedStyle(head, null);
  } else if (document.documentElement.currentStyle) {
    computed = head.currentStyle;
  }

  var size = computed.fontSize;
  size = parseInt(size, 10);
  var screenDef;

  if (size === 10) {
    // small screen
    screenDef = 'ss';
  } else if (size === 20) {
    // midi screen
    screenDef = 'ms';
  } else if (size === 30) {
    // large screen
    screenDef = 'ls';
  } else if (size === 40) {
    screenDef = 'xls';
  }

  return screenDef;
}

function partialLoader(container, partial) {
  return new Promise(function (resolve, reject) {
    var x;

    if (XMLHttpRequest) {
      x = new XMLHttpRequest();
    } else {
      x = new ActiveXObject("Microsoft.XMLHTTP");
    }

    x.open("GET", partial, true);
    x.send();

    x.onreadystatechange = function () {
      if (x.readyState === 4) {
        if (x.status === 200) {
          container.innerHTML = x.responseText;
          resolve('Success');
        } else {
          container.innerHTML = "Error loading document";
          reject('Error');
        }
      }
    };
  });
} // detect the dreaded crappo versions of IE


function detectOldIE() {
  var ua = window.navigator.userAgent;
  var msie = ua.indexOf('MSIE ');

  if (msie > 0) {
    // IE 10 or older => return version number
    return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
  }

  var trident = ua.indexOf('Trident/');

  if (trident > 0) {
    // IE 11 => return version number
    var rv = ua.indexOf('rv:');
    return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
  } // other browser


  return false;
}

function Timer(fn, t) {
  var timerObj = setInterval(fn, t);

  this.stop = function () {
    if (timerObj) {
      clearInterval(timerObj);
      timerObj = null;
    }

    return this;
  }; // start timer using current settings (if it's not already running)


  this.start = function () {
    if (!timerObj) {
      this.stop();
      timerObj = setInterval(fn, t);
    }

    return this;
  }; // start with new interval, stop current interval


  this.reset = function (newT) {
    t = newT;
    return this.stop().start();
  };
}

function setCookie(name, value, days) {
  var expires = "";

  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }

  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');

  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];

    while (c.charAt(0) == ' ') {
      c = c.substring(1, c.length);
    }

    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }

  return null;
}
var mouseX = 0,
    mouseY = 0,
    windowHalfX = window.innerWidth / 2,
    windowHalfY = window.innerHeight / 2,
    SEPARATION = 500,
    AMOUNTX = 0.3,
    AMOUNTY = 1,
    camera,
    scene,
    renderer;
init();
animate();

function init() {
  /*
   *   Define variables
   */
  var container,
      separation = 1000,
      amountX = 20,
      amountY = 50,
      color = 0xffffff,
      particles,
      particle;
  container = document.getElementById("canvas");
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
  camera.position.z = 100;
  scene = new THREE.Scene();
  renderer = new THREE.CanvasRenderer({
    alpha: true
  });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setClearColor(0x000000, 0); // canvas background color

  renderer.setSize(window.innerWidth, window.innerHeight);
  container.appendChild(renderer.domElement);
  var PI2 = Math.PI * 2;
  var material = new THREE.SpriteCanvasMaterial({
    color: color,
    opacity: 0.5,
    program: function program(context) {
      context.beginPath();
      context.arc(0, 0, 0.5, 0, PI2, true);
      context.fill();
    }
  });
  var geometry = new THREE.Geometry();
  /*
   *   Number of particles
   */

  for (var i = 0; i < 150; i++) {
    particle = new THREE.Sprite(material);
    particle.position.x = Math.random() * 2 - 1;
    particle.position.y = Math.random() * 2 - 1;
    particle.position.z = Math.random() * 2 - 1;
    particle.position.normalize();
    particle.position.multiplyScalar(Math.random() * 10 + 600);
    particle.scale.x = particle.scale.y = 5;
    scene.add(particle);
    geometry.vertices.push(particle.position);
  }
  /*
   *   Lines
   */


  var line = new THREE.Line(geometry, new THREE.LineBasicMaterial({
    color: color,
    opacity: 0.2
  }));
  scene.add(line);
  document.addEventListener('mousemove', onDocumentMouseMove, false);
  document.addEventListener('touchstart', onDocumentTouchStart, false);
  document.addEventListener('touchmove', onDocumentTouchMove, false); //

  window.addEventListener('resize', onWindowResize, false);
}

function onWindowResize() {
  windowHalfX = window.innerWidth / 2;
  windowHalfY = window.innerHeight / 2;
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
} //


function onDocumentMouseMove(event) {
  mouseX = (event.clientX - windowHalfX) * 0.05;
  mouseY = (event.clientY - windowHalfY) * 0.2;
}

function onDocumentTouchStart(event) {
  if (event.touches.length > 1) {
    event.preventDefault();
    mouseX = (event.touches[0].pageX - windowHalfX) * 0.7;
    mouseY = (event.touches[0].pageY - windowHalfY) * 0.7;
  }
}

function onDocumentTouchMove(event) {
  if (event.touches.length == 1) {
    event.preventDefault();
    mouseX = event.touches[0].pageX - windowHalfX;
    mouseY = event.touches[0].pageY - windowHalfY;
  }
} //


function animate() {
  requestAnimationFrame(animate);
  render();
}

function render() {
  camera.position.x += (mouseX - camera.position.x) * 0.1;
  camera.position.y += (-mouseY + 200 - camera.position.y) * 0.05;
  camera.lookAt(scene.position);
  renderer.render(scene, camera);
}
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var mNineDScript = {};
mNineDScript.start = {
  'config': {},
  init: function init(settings) {
    // loop through any settings passed in, and overwrite the default config with those settings
    if (settings && _typeof(settings) === 'object') {
      for (var prop in settings) {
        if (settings.hasOwnProperty(prop)) {
          this.config[prop] = settings[prop];
        }
      }
    }

    var currSS = currScreenSize();

    if (currSS === 'ls' | currSS === 'xls') {
      this.cursorSetup();
    }

    this.runNav();
    this.runScrollAnimations();
    this.scrollToSection();
    this.projectsSummaryControl();
  },
  cursorSetup: function cursorSetup() {
    var cursor = {
      delay: 8,
      _x: 0,
      _y: 0,
      endX: window.innerWidth / 2,
      endY: window.innerHeight / 2,
      cursorVisible: true,
      cursorEnlarged: false,
      $dot: $1('.cursor-dot'),
      $outline: $1('.cursor-dot-outline'),
      init: function init() {
        // Set up element sizes
        this.dotSize = this.$dot.offsetWidth;
        this.outlineSize = this.$outline.offsetWidth;
        this.setupEventListeners();
        this.animateDotOutline();
      },
      setupEventListeners: function setupEventListeners() {
        var self = this; // Anchor hovering

        $('a, button').forEach(function (el) {
          el.addEventListener('mouseover', function () {
            self.cursorEnlarged = true;
            self.toggleCursorSize();
            addClass(self.$outline, 'elementHover');
          });
          el.addEventListener('mouseout', function () {
            self.cursorEnlarged = false;
            self.toggleCursorSize();
            removeClass(self.$outline, 'elementHover');
          });
        }); // Click events

        document.addEventListener('mousedown', function () {
          self.cursorEnlarged = true;
          self.toggleCursorSize();
        });
        document.addEventListener('mouseup', function () {
          self.cursorEnlarged = false;
          self.toggleCursorSize();
        });
        document.addEventListener('mousemove', function (e) {
          // Show the cursor
          self.cursorVisible = true;
          self.toggleCursorVisibility(); // Position the dot

          self.endX = e.pageX;
          self.endY = e.pageY;
          self.$dot.style.top = self.endY + 'px';
          self.$dot.style.left = self.endX + 'px';
        }); // Hide/show cursor

        document.addEventListener('mouseenter', function (e) {
          self.cursorVisible = true;
          self.toggleCursorVisibility();
          self.$dot.style.opacity = 1;
          self.$outline.style.opacity = 1;
        });
        document.addEventListener('mouseleave', function (e) {
          self.cursorVisible = true;
          self.toggleCursorVisibility();
          self.$dot.style.opacity = 0;
          self.$outline.style.opacity = 0;
        });
      },
      animateDotOutline: function animateDotOutline() {
        var self = this;
        self._x += (self.endX - self._x) / self.delay;
        self._y += (self.endY - self._y) / self.delay;
        self.$outline.style.top = self._y + 'px';
        self.$outline.style.left = self._x + 'px';
        requestAnimationFrame(this.animateDotOutline.bind(self));
      },
      toggleCursorSize: function toggleCursorSize() {
        var self = this;

        if (self.cursorEnlarged) {
          self.$dot.style.transform = 'translate(-50%, -50%) scale(0.00)';
          self.$outline.style.transform = 'translate(-50%, -50%) scale(1.5)';
        } else {
          self.$dot.style.transform = 'translate(-50%, -50%) scale(1)';
          self.$outline.style.transform = 'translate(-50%, -50%) scale(1)';
        }
      },
      toggleCursorVisibility: function toggleCursorVisibility() {
        var self = this;

        if (self.cursorVisible && !hasClass(self.$outline, 'elementHover')) {
          self.$dot.style.opacity = 1;
          self.$outline.style.opacity = 1;
        } else if (self.cursorVisible && hasClass(self.$outline, 'elementHover')) {
          self.$outline.style.opacity = 0.3;
        } else {
          self.$dot.style.opacity = 0;
          self.$outline.style.opacity = 0;
        }
      }
    };
    cursor.init();
  },
  runNav: function runNav() {
    var _this = this;

    var navTrigger = $1('.hamburger');
    var navWrapper = $1('.mn-site-nav');
    var navItems = $('.mn-site-nav-link-item');
    var bodyEl = $1('body');
    var navVideoWrap = $1('.mn-site-nav-video-bg');
    var navTitle = $('.mn-site-nav-contact-title');
    var navCopy = $1('.mn-site-nav-contact-txt');
    var navLinks = $('.mn-site-nav-contact-link');
    var tl = gsap.timeline();

    function toggleNavTriggerClass() {
      toggleClass(navTrigger, 'is-active');
      toggleClass(bodyEl, 'is-nav-active');
    }

    function addNavClass() {
      addClass(navWrapper, 'is-active');
    }

    function addVisibleNavItemClass() {
      var delay = 0;

      var _loop = function _loop(i) {
        var el = navItems[i];
        delay += 250;
        setTimeout(function () {
          addClass(el, 'is-visible');
        }, 100 + delay);
      };

      for (var i = 0; i < navItems.length; i++) {
        _loop(i);
      }
    }

    function removeVisibleNavItemClass() {
      navItems.forEach(function (el) {
        removeClass(el, 'is-visible');
      });
    }

    function removeNavClass() {
      removeClass(navWrapper, 'is-active');
    }

    navTrigger.addEventListener('click', function () {
      animationNavigation();
    });

    function animationNavigation() {
      if (hasClass(navWrapper, 'is-active')) {
        if (!tl.isActive()) {
          tl.call(toggleNavTriggerClass);
          tl.to(navVideoWrap, {
            opacity: 0,
            duration: 0.5,
            ease: "circ.inOut"
          });
          tl.to(navLinks, {
            opacity: 0,
            duration: 0.3
          });
          tl.to(navTitle, {
            opacity: 0,
            stagger: 0.2,
            top: -200,
            left: 200,
            duration: 0.5,
            ease: "expo.out"
          });
          tl.to(navCopy, {
            opacity: 0,
            left: -50,
            duration: 0.4,
            ease: "circ.out"
          }, ">-0.3");
          tl.to(navItems, {
            left: 200,
            opacity: 0,
            duration: 0.15,
            stagger: 0.15,
            ease: "circ.Out",
            onComplete: removeVisibleNavItemClass
          }, ">-0.4");
          tl.to(navWrapper, {
            x: '100%',
            duration: 1,
            ease: "circ.inOut",
            onComplete: removeNavClass
          });
        }
      } else {
        if (!tl.isActive()) {
          tl.call(toggleNavTriggerClass);
          tl.to(navWrapper, {
            x: 0,
            duration: 1,
            ease: "circ.inOut",
            onComplete: addNavClass
          });
          tl.to(navTitle, {
            opacity: 0.7,
            top: 0,
            left: 0,
            stagger: 0.2,
            duration: 0.8,
            ease: "expo.out"
          });
          tl.to(navCopy, {
            opacity: 1,
            left: 0,
            duration: 0.5,
            ease: "circ.out"
          }, ">-0.4");
          tl.to(navItems, {
            left: 0,
            opacity: 1,
            duration: 0.35,
            stagger: 0.35,
            ease: "circ.Out",
            onStart: addVisibleNavItemClass
          }, ">-0.4");
          tl.to(navLinks, {
            opacity: 1,
            duration: 0.5
          });
          tl.to(navVideoWrap, {
            opacity: 1,
            duration: 2,
            ease: "circ.inOut"
          });
        }
      }
    }

    navItems.forEach(function (el) {
      el.addEventListener('click', function (e) {
        e.preventDefault();

        if (!tl.isActive()) {
          var sectionTarget = el.getAttribute('href');
          animationNavigation();
          setTimeout(function () {
            _this.doPageScroll(sectionTarget);
          }, 3000);
        }
      });
    });
  },
  runScrollAnimations: function runScrollAnimations() {
    var aboutGridContent = $('.mn-section-about-grid-item-inner'); //

    var scrollController = new ScrollMagic.Controller();
    var aboutTl = gsap.timeline({
      paused: true
    }); //let imageTween = aboutTl.to(aboutGridImages, {duration : 1.0, stagger: 0.4, scaleX: 1, scaleY: 1, opacity: 1, '-webkit-filter': " blur(0px)", ease: "circ.inOut(0.5)"},">-0.3");

    var contentTween = aboutTl.to(aboutGridContent, {
      duration: 0.7,
      stagger: 0.45,
      opacity: 1,
      top: 0,
      ease: "circ.inOut(0.5)"
    });
    var aboutScene = new ScrollMagic.Scene({
      triggerElement: '#js-about-top',
      offset: 100
    }).on("enter", function (e) {
      aboutTl.play();
    }).on("leave", function (e) {
      aboutTl.reverse();
    }).addTo(scrollController);
    var servicesTl = gsap.timeline({
      paused: true
    });
    var servTitleHd = $1('.mn-section-services-hd-lg');
    var servTitleEls = $('.mn-section-services-hd-anim');
    var servicePanels = $('.mn-section-services-item');
    var serviceHeadings = $('.mn-section-services-item-hd');
    var serviceItems = $('.mn-section-services-item-list');
    var serveTitleTween = servicesTl.to(servTitleHd, {
      duration: 0.7,
      opacity: 1,
      left: 0,
      '-webkit-filter': " blur(0px)",
      ease: "circ.inOut(0.5)"
    }, 0.5);
    var serveElsTween = servicesTl.to(servTitleEls, {
      duration: 0.8,
      stagger: 0.25,
      opacity: 1,
      top: 0,
      '-webkit-filter': " blur(0px)",
      ease: "circ.inOut(0.5)"
    }, ">-0.3");
    var servePanelTween = servicesTl.to(servicePanels, {
      duration: 2,
      stagger: 0.3,
      opacity: 1,
      scaleX: 1,
      scaleY: 1,
      ease: "elastic.out(0.8)"
    });
    var serveHeadingsTween = servicesTl.to(serviceHeadings, {
      duration: 0.2,
      opacity: 1,
      stagger: 0.2,
      scaleX: 1,
      scaleY: 1,
      '-webkit-filter': " blur(0px)",
      ease: "circ.inOut(0.3)"
    }, ">-1.8");
    var serveItemsTween = servicesTl.to(serviceItems, {
      duration: 0.4,
      stagger: 0.17,
      opacity: 1,
      top: 0,
      ease: "circ.out(0.4)"
    }, ">0.2");
    var servicesScene = new ScrollMagic.Scene({
      triggerElement: '#js-services-top',
      offset: 50
    }).on("enter", function (e) {
      servicesTl.play();
    }).on("leave", function (e) {
      servicesTl.reverse();
    }).addTo(scrollController);
  },
  scrollToSection: function scrollToSection() {
    var self = this;
    var scrollTriggers = $('.mn-scroll-trig');

    for (var i = 0; i < scrollTriggers.length; i++) {
      scrollTriggers[i].addEventListener('click', function (e) {
        e.preventDefault();
        var target = this.getAttribute("href");
        self.doPageScroll(target);
      });
    }
  },
  doPageScroll: function doPageScroll(scrollTarget) {
    var scrollDuration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1.3;
    gsap.to(window, {
      duration: scrollDuration,
      scrollTo: {
        y: scrollTarget,
        autoKill: false
      },
      ease: "circ.inOut"
    });
  },
  projectsSummaryControl: function projectsSummaryControl() {
    // this needs re-factor to make more manageable
    var projectSummaryTriggers = $('.mn-section-project-summary-trigger');
    var projectsTl = gsap.timeline();
    var projectWrappers = $('.mn-section-project-summary-item');
    var itemHeight = 65;
    var projectsSummaryContainer = $1('#js-projects-summary-container');
    var bodyEl = $1('body');
    var projectSummaryClose = $1('.mn-projects-summary-detail-close');
    var projectsSection = $1('#js-projects-top');
    var fadeSections = $('.mn-section-fade');
    var projectContainerClass = '.mn-projects-summary-detail-wrapper';

    var _self = this;

    for (var i = 0; i < projectWrappers.length; i++) {
      var el = projectWrappers[i];
      addClass(el, 'is-inactive');
      el.dataset.originalPosition = el.style.top = i * itemHeight;
      el.dataset.originalIndex = i;

      if (i > 0) {
        el.style.top = i * itemHeight + 'px';
        el.style.zIndex = i;
      }
    }

    projectSummaryTriggers.forEach(function (el) {
      el.addEventListener('click', function (e) {
        e.preventDefault();
        var contentToLoad = el.dataset.content;
        var elParent = el.parentNode.parentNode;
        var projectContainer = $1(projectContainerClass, elParent);
        partialLoader(projectContainer, contentToLoad).then(function () {
          setTimeout(function () {
            // need to look at pre-loader here
            removeClass(elParent, 'is-inactive');
            addClass(elParent, 'is-active-wrapper');
            openProject(el);
          }, 500);
        })["catch"](function () {// need to do something here with the error handler
        });
      });
    });

    function openProject(element) {
      var parentEl = element.parentNode.parentNode;
      var inactiveSiblings = $('li.is-inactive');
      projectsTl.to(element, {
        duration: 0.9,
        backgroundColor: '#000000'
      });
      projectsTl.to(inactiveSiblings, {
        duration: 0.3,
        opacity: 0.5
      });
      projectsTl.to(fadeSections, {
        duration: 0.5,
        opacity: 0,
        onComplete: function onComplete() {
          gsap.to(window, {
            duration: 1.1,
            scrollTo: {
              y: projectsSummaryContainer,
              autoKill: false
            },
            ease: "circ.inOut",
            onComplete: function onComplete() {
              projectOpenActions();
            }
          });
        }
      });

      function projectOpenActions() {
        projectsTl.to(element, {
          duration: 0.6,
          className: "+=is-active",
          ease: "circ.inOut(0.5)"
        });
        projectsTl.to(parentEl, {
          duration: 0.7,
          top: 0,
          opacity: 1,
          ease: "expo.inOut(0.5)"
        });
        projectsTl.to(parentEl, {
          duration: 0.7,
          height: '100vh',
          ease: "expo.inOut(0.5)"
        });
        projectsTl.to(inactiveSiblings, {
          duration: 0.3,
          opacity: 0
        });
        projectsTl.to(parentEl, {
          duration: 0.4,
          zIndex: '1000',
          backgroundColor: 'rgba(0,0,0,0.4)',
          opacity: 1,
          ease: "circ.inOut(0.3)",
          onComplete: function onComplete() {
            openDetail(parentEl);
          }
        }); // these will run as the timeline is running

        addClass(projectsSummaryContainer, 'is-active');
        addClass(bodyEl, 'is-projects-active');
      }
    }

    function openDetail(element) {
      var detailEl = $1('.mn-projects-summary-detail-wrapper', element);
      gsap.to(detailEl, {
        duration: 0.1,
        display: 'block'
      });
      gsap.to(detailEl, {
        duration: 0.7,
        top: 0,
        opacity: 1,
        height: '100%',
        ease: "circ.inOut(0.5)",
        onComplete: function onComplete() {
          _self.projectDetailControl();
        }
      });
    }

    function resetProjectsWindow() {
      gsap.to(window, {
        duration: 0.9,
        scrollTo: {
          y: projectsSection,
          autoKill: false
        },
        ease: "expo.inOut(0.6)"
      });
      projectsTl.to(fadeSections, {
        duration: 0.5,
        opacity: 1
      });
    }

    function resetProjects() {
      var activeWrapper = $1('.is-active-wrapper');
      var activeDetail = $1('.mn-projects-summary-detail-wrapper', activeWrapper);
      var activeAnchor = $1('.is-active', activeWrapper);
      var activeWrapperOriginalPos = activeWrapper.dataset.originalPosition;
      var activeWrapperOriginalIndex = activeWrapper.dataset.originalIndex;
      var inactiveSiblings = $('li.is-inactive');
      var resetTl = gsap.timeline(); // need to hide content first here
      // hiding content here

      resetTl.to(activeDetail, {
        duration: 0.7,
        opacity: 0,
        ease: "circ.inOut(0.5)",
        onComplete: function onComplete() {
          activeDetail.style = '';
        }
      }); // set the summary item back to 65 px height

      resetTl.to(activeWrapper, {
        duration: 0.9,
        height: itemHeight + 'px',
        ease: "circ.inOut(0.5)"
      }); // make the siblings visible again

      resetTl.to(inactiveSiblings, {
        duration: 0.7,
        opacity: 1
      }); // move the summary item back to it's original position

      resetTl.to(activeWrapper, {
        duration: 0.65,
        top: activeWrapperOriginalPos + 'px',
        ease: "expo.inOut(0.4)"
      }); // move the anchor back to the left of the list

      resetTl.to(activeAnchor, {
        duration: 0.7,
        translateX: '40px',
        className: "-=is-active",
        ease: "circ.inOut(0.4)",
        onComplete: function onComplete() {
          // take the inline style for bg color off
          activeWrapper.style.removeProperty('background-color'); // reset the z index for the element

          activeWrapper.style.zIndex = activeWrapperOriginalIndex; // take the background color off the anchor as well

          activeAnchor.style.removeProperty('background-color'); // remove the class from the active wrapper

          removeClass(activeWrapper, 'is-active-wrapper'); // move the window back to top of projects

          resetProjectsWindow();
        }
      }); // remove container class, and body class to remove fixed positioning etc

      removeClass(projectsSummaryContainer, 'is-active');
      removeClass(bodyEl, 'is-projects-active'); // add the default class back to previously added element

      addClass(activeWrapper, 'is-inactive');
    }

    projectSummaryClose.addEventListener('click', function () {
      resetProjects();
    });
  },
  projectDetailControl: function projectDetailControl() {
    var projectDetailTl = gsap.timeline();
    var detailDash = $1('.mn-projects-summary-detail-dash-anim');
    var detailHd = $1('.mn-projects-summary-detail-hd');
    projectDetailTl.to(detailDash, {
      duration: 0.4,
      repeat: 3,
      opacity: 0
    });
    projectDetailTl.to(detailDash, {
      duration: 0.1,
      opacity: 1
    });
    projectDetailTl.to(detailDash, {
      duration: 0.4,
      left: '30vw',
      ease: "circ.inOut(0.4)"
    });
    projectDetailTl.to(detailHd, {
      duration: 0.6,
      left: '0vw',
      opacity: 1,
      '-webkit-filter': " blur(0px)",
      ease: "expo.out(0.6)"
    });
    projectDetailTl.to(detailDash, {
      duration: 0.2,
      opacity: 0,
      ease: "circ.inOut(0.4)"
    }); // move the anchor back to the left of the list
  }
};
window.addEventListener('DOMContentLoaded', function () {
  gsap.registerPlugin(ScrollToPlugin);
  gsap.registerPlugin(CSSRulePlugin); // dom is loaded!

  mNineDScript.start.init();
});