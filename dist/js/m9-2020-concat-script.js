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
    var navTrigger = $1('.hamburger');
    var navWrapper = $1('.mn-site-nav');
    var navItems = $('.mn-site-nav-link-item');
    var bodyEl = $1('body'); //const navVideoWrap = $1('.mn-site-nav-video-bg');

    var navTitle = $1('.mn-site-nav-contact-title');
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

    ;

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
      if (hasClass(navWrapper, 'is-active')) {
        if (!tl.isActive()) {
          tl.call(toggleNavTriggerClass); //tl.to(navVideoWrap, {opacity: 0, duration: 0.5, ease: "circ.inOut"});

          tl.to(navLinks, {
            opacity: 0,
            duration: 0.3
          });
          tl.to(navTitle, {
            opacity: 0,
            top: -200,
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
            opacity: 1,
            top: 0,
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
          }); //tl.to(navVideoWrap, {opacity: 0.5, duration: 0.7, ease: "circ.inOut"});
        }
      }
    });
  }
};
window.addEventListener('DOMContentLoaded', function () {
  // dom is loaded!
  mNineDScript.start.init();
});