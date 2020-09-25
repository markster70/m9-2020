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
 * Flickity PACKAGED v2.2.1
 * Touch, responsive, flickable carousels
 *
 * Licensed GPLv3 for open source use
 * or Flickity Commercial License for commercial use
 *
 * https://flickity.metafizzy.co
 * Copyright 2015-2019 Metafizzy
 */
!function (e, i) {
  "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function (t) {
    return i(e, t);
  }) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = i(e, require("jquery")) : e.jQueryBridget = i(e, e.jQuery);
}(window, function (t, e) {
  "use strict";

  var i = Array.prototype.slice,
      n = t.console,
      d = void 0 === n ? function () {} : function (t) {
    n.error(t);
  };

  function s(h, s, c) {
    (c = c || e || t.jQuery) && (s.prototype.option || (s.prototype.option = function (t) {
      c.isPlainObject(t) && (this.options = c.extend(!0, this.options, t));
    }), c.fn[h] = function (t) {
      return "string" == typeof t ? function (t, o, r) {
        var a,
            l = "$()." + h + '("' + o + '")';
        return t.each(function (t, e) {
          var i = c.data(e, h);

          if (i) {
            var n = i[o];

            if (n && "_" != o.charAt(0)) {
              var s = n.apply(i, r);
              a = void 0 === a ? s : a;
            } else d(l + " is not a valid method");
          } else d(h + " not initialized. Cannot call methods, i.e. " + l);
        }), void 0 !== a ? a : t;
      }(this, t, i.call(arguments, 1)) : (function (t, n) {
        t.each(function (t, e) {
          var i = c.data(e, h);
          i ? (i.option(n), i._init()) : (i = new s(e, n), c.data(e, h, i));
        });
      }(this, t), this);
    }, o(c));
  }

  function o(t) {
    !t || t && t.bridget || (t.bridget = s);
  }

  return o(e || t.jQuery), s;
}), function (t, e) {
  "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e() : t.EvEmitter = e();
}("undefined" != typeof window ? window : this, function () {
  function t() {}

  var e = t.prototype;
  return e.on = function (t, e) {
    if (t && e) {
      var i = this._events = this._events || {},
          n = i[t] = i[t] || [];
      return -1 == n.indexOf(e) && n.push(e), this;
    }
  }, e.once = function (t, e) {
    if (t && e) {
      this.on(t, e);
      var i = this._onceEvents = this._onceEvents || {};
      return (i[t] = i[t] || {})[e] = !0, this;
    }
  }, e.off = function (t, e) {
    var i = this._events && this._events[t];

    if (i && i.length) {
      var n = i.indexOf(e);
      return -1 != n && i.splice(n, 1), this;
    }
  }, e.emitEvent = function (t, e) {
    var i = this._events && this._events[t];

    if (i && i.length) {
      i = i.slice(0), e = e || [];

      for (var n = this._onceEvents && this._onceEvents[t], s = 0; s < i.length; s++) {
        var o = i[s];
        n && n[o] && (this.off(t, o), delete n[o]), o.apply(this, e);
      }

      return this;
    }
  }, e.allOff = function () {
    delete this._events, delete this._onceEvents;
  }, t;
}), function (t, e) {
  "function" == typeof define && define.amd ? define("get-size/get-size", e) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e() : t.getSize = e();
}(window, function () {
  "use strict";

  function m(t) {
    var e = parseFloat(t);
    return -1 == t.indexOf("%") && !isNaN(e) && e;
  }

  var i = "undefined" == typeof console ? function () {} : function (t) {
    console.error(t);
  },
      y = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
      b = y.length;

  function E(t) {
    var e = getComputedStyle(t);
    return e || i("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"), e;
  }

  var S,
      C = !1;

  function x(t) {
    if (function () {
      if (!C) {
        C = !0;
        var t = document.createElement("div");
        t.style.width = "200px", t.style.padding = "1px 2px 3px 4px", t.style.borderStyle = "solid", t.style.borderWidth = "1px 2px 3px 4px", t.style.boxSizing = "border-box";
        var e = document.body || document.documentElement;
        e.appendChild(t);
        var i = E(t);
        S = 200 == Math.round(m(i.width)), x.isBoxSizeOuter = S, e.removeChild(t);
      }
    }(), "string" == typeof t && (t = document.querySelector(t)), t && "object" == _typeof(t) && t.nodeType) {
      var e = E(t);
      if ("none" == e.display) return function () {
        for (var t = {
          width: 0,
          height: 0,
          innerWidth: 0,
          innerHeight: 0,
          outerWidth: 0,
          outerHeight: 0
        }, e = 0; e < b; e++) {
          t[y[e]] = 0;
        }

        return t;
      }();
      var i = {};
      i.width = t.offsetWidth, i.height = t.offsetHeight;

      for (var n = i.isBorderBox = "border-box" == e.boxSizing, s = 0; s < b; s++) {
        var o = y[s],
            r = e[o],
            a = parseFloat(r);
        i[o] = isNaN(a) ? 0 : a;
      }

      var l = i.paddingLeft + i.paddingRight,
          h = i.paddingTop + i.paddingBottom,
          c = i.marginLeft + i.marginRight,
          d = i.marginTop + i.marginBottom,
          u = i.borderLeftWidth + i.borderRightWidth,
          f = i.borderTopWidth + i.borderBottomWidth,
          p = n && S,
          g = m(e.width);
      !1 !== g && (i.width = g + (p ? 0 : l + u));
      var v = m(e.height);
      return !1 !== v && (i.height = v + (p ? 0 : h + f)), i.innerWidth = i.width - (l + u), i.innerHeight = i.height - (h + f), i.outerWidth = i.width + c, i.outerHeight = i.height + d, i;
    }
  }

  return x;
}), function (t, e) {
  "use strict";

  "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e() : t.matchesSelector = e();
}(window, function () {
  "use strict";

  var i = function () {
    var t = window.Element.prototype;
    if (t.matches) return "matches";
    if (t.matchesSelector) return "matchesSelector";

    for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
      var n = e[i] + "MatchesSelector";
      if (t[n]) return n;
    }
  }();

  return function (t, e) {
    return t[i](e);
  };
}), function (e, i) {
  "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function (t) {
    return i(e, t);
  }) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = i(e, require("desandro-matches-selector")) : e.fizzyUIUtils = i(e, e.matchesSelector);
}(window, function (h, o) {
  var c = {
    extend: function extend(t, e) {
      for (var i in e) {
        t[i] = e[i];
      }

      return t;
    },
    modulo: function modulo(t, e) {
      return (t % e + e) % e;
    }
  },
      e = Array.prototype.slice;
  c.makeArray = function (t) {
    return Array.isArray(t) ? t : null == t ? [] : "object" == _typeof(t) && "number" == typeof t.length ? e.call(t) : [t];
  }, c.removeFrom = function (t, e) {
    var i = t.indexOf(e);
    -1 != i && t.splice(i, 1);
  }, c.getParent = function (t, e) {
    for (; t.parentNode && t != document.body;) {
      if (t = t.parentNode, o(t, e)) return t;
    }
  }, c.getQueryElement = function (t) {
    return "string" == typeof t ? document.querySelector(t) : t;
  }, c.handleEvent = function (t) {
    var e = "on" + t.type;
    this[e] && this[e](t);
  }, c.filterFindElements = function (t, n) {
    t = c.makeArray(t);
    var s = [];
    return t.forEach(function (t) {
      if (t instanceof HTMLElement) if (n) {
        o(t, n) && s.push(t);

        for (var e = t.querySelectorAll(n), i = 0; i < e.length; i++) {
          s.push(e[i]);
        }
      } else s.push(t);
    }), s;
  }, c.debounceMethod = function (t, e, n) {
    n = n || 100;
    var s = t.prototype[e],
        o = e + "Timeout";

    t.prototype[e] = function () {
      var t = this[o];
      clearTimeout(t);
      var e = arguments,
          i = this;
      this[o] = setTimeout(function () {
        s.apply(i, e), delete i[o];
      }, n);
    };
  }, c.docReady = function (t) {
    var e = document.readyState;
    "complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t);
  }, c.toDashed = function (t) {
    return t.replace(/(.)([A-Z])/g, function (t, e, i) {
      return e + "-" + i;
    }).toLowerCase();
  };
  var d = h.console;
  return c.htmlInit = function (a, l) {
    c.docReady(function () {
      var t = c.toDashed(l),
          s = "data-" + t,
          e = document.querySelectorAll("[" + s + "]"),
          i = document.querySelectorAll(".js-" + t),
          n = c.makeArray(e).concat(c.makeArray(i)),
          o = s + "-options",
          r = h.jQuery;
      n.forEach(function (e) {
        var t,
            i = e.getAttribute(s) || e.getAttribute(o);

        try {
          t = i && JSON.parse(i);
        } catch (t) {
          return void (d && d.error("Error parsing " + s + " on " + e.className + ": " + t));
        }

        var n = new a(e, t);
        r && r.data(e, l, n);
      });
    });
  }, c;
}), function (e, i) {
  "function" == typeof define && define.amd ? define("flickity/js/cell", ["get-size/get-size"], function (t) {
    return i(e, t);
  }) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = i(e, require("get-size")) : (e.Flickity = e.Flickity || {}, e.Flickity.Cell = i(e, e.getSize));
}(window, function (t, e) {
  function i(t, e) {
    this.element = t, this.parent = e, this.create();
  }

  var n = i.prototype;
  return n.create = function () {
    this.element.style.position = "absolute", this.element.setAttribute("aria-hidden", "true"), this.x = 0, this.shift = 0;
  }, n.destroy = function () {
    this.unselect(), this.element.style.position = "";
    var t = this.parent.originSide;
    this.element.style[t] = "";
  }, n.getSize = function () {
    this.size = e(this.element);
  }, n.setPosition = function (t) {
    this.x = t, this.updateTarget(), this.renderPosition(t);
  }, n.updateTarget = n.setDefaultTarget = function () {
    var t = "left" == this.parent.originSide ? "marginLeft" : "marginRight";
    this.target = this.x + this.size[t] + this.size.width * this.parent.cellAlign;
  }, n.renderPosition = function (t) {
    var e = this.parent.originSide;
    this.element.style[e] = this.parent.getPositionValue(t);
  }, n.select = function () {
    this.element.classList.add("is-selected"), this.element.removeAttribute("aria-hidden");
  }, n.unselect = function () {
    this.element.classList.remove("is-selected"), this.element.setAttribute("aria-hidden", "true");
  }, n.wrapShift = function (t) {
    this.shift = t, this.renderPosition(this.x + this.parent.slideableWidth * t);
  }, n.remove = function () {
    this.element.parentNode.removeChild(this.element);
  }, i;
}), function (t, e) {
  "function" == typeof define && define.amd ? define("flickity/js/slide", e) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e() : (t.Flickity = t.Flickity || {}, t.Flickity.Slide = e());
}(window, function () {
  "use strict";

  function t(t) {
    this.parent = t, this.isOriginLeft = "left" == t.originSide, this.cells = [], this.outerWidth = 0, this.height = 0;
  }

  var e = t.prototype;
  return e.addCell = function (t) {
    if (this.cells.push(t), this.outerWidth += t.size.outerWidth, this.height = Math.max(t.size.outerHeight, this.height), 1 == this.cells.length) {
      this.x = t.x;
      var e = this.isOriginLeft ? "marginLeft" : "marginRight";
      this.firstMargin = t.size[e];
    }
  }, e.updateTarget = function () {
    var t = this.isOriginLeft ? "marginRight" : "marginLeft",
        e = this.getLastCell(),
        i = e ? e.size[t] : 0,
        n = this.outerWidth - (this.firstMargin + i);
    this.target = this.x + this.firstMargin + n * this.parent.cellAlign;
  }, e.getLastCell = function () {
    return this.cells[this.cells.length - 1];
  }, e.select = function () {
    this.cells.forEach(function (t) {
      t.select();
    });
  }, e.unselect = function () {
    this.cells.forEach(function (t) {
      t.unselect();
    });
  }, e.getCellElements = function () {
    return this.cells.map(function (t) {
      return t.element;
    });
  }, t;
}), function (e, i) {
  "function" == typeof define && define.amd ? define("flickity/js/animate", ["fizzy-ui-utils/utils"], function (t) {
    return i(e, t);
  }) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = i(e, require("fizzy-ui-utils")) : (e.Flickity = e.Flickity || {}, e.Flickity.animatePrototype = i(e, e.fizzyUIUtils));
}(window, function (t, e) {
  var i = {
    startAnimation: function startAnimation() {
      this.isAnimating || (this.isAnimating = !0, this.restingFrames = 0, this.animate());
    },
    animate: function animate() {
      this.applyDragForce(), this.applySelectedAttraction();
      var t = this.x;

      if (this.integratePhysics(), this.positionSlider(), this.settle(t), this.isAnimating) {
        var e = this;
        requestAnimationFrame(function () {
          e.animate();
        });
      }
    },
    positionSlider: function positionSlider() {
      var t = this.x;
      this.options.wrapAround && 1 < this.cells.length && (t = e.modulo(t, this.slideableWidth), t -= this.slideableWidth, this.shiftWrapCells(t)), this.setTranslateX(t, this.isAnimating), this.dispatchScrollEvent();
    },
    setTranslateX: function setTranslateX(t, e) {
      t += this.cursorPosition, t = this.options.rightToLeft ? -t : t;
      var i = this.getPositionValue(t);
      this.slider.style.transform = e ? "translate3d(" + i + ",0,0)" : "translateX(" + i + ")";
    },
    dispatchScrollEvent: function dispatchScrollEvent() {
      var t = this.slides[0];

      if (t) {
        var e = -this.x - t.target,
            i = e / this.slidesWidth;
        this.dispatchEvent("scroll", null, [i, e]);
      }
    },
    positionSliderAtSelected: function positionSliderAtSelected() {
      this.cells.length && (this.x = -this.selectedSlide.target, this.velocity = 0, this.positionSlider());
    },
    getPositionValue: function getPositionValue(t) {
      return this.options.percentPosition ? .01 * Math.round(t / this.size.innerWidth * 1e4) + "%" : Math.round(t) + "px";
    },
    settle: function settle(t) {
      this.isPointerDown || Math.round(100 * this.x) != Math.round(100 * t) || this.restingFrames++, 2 < this.restingFrames && (this.isAnimating = !1, delete this.isFreeScrolling, this.positionSlider(), this.dispatchEvent("settle", null, [this.selectedIndex]));
    },
    shiftWrapCells: function shiftWrapCells(t) {
      var e = this.cursorPosition + t;

      this._shiftCells(this.beforeShiftCells, e, -1);

      var i = this.size.innerWidth - (t + this.slideableWidth + this.cursorPosition);

      this._shiftCells(this.afterShiftCells, i, 1);
    },
    _shiftCells: function _shiftCells(t, e, i) {
      for (var n = 0; n < t.length; n++) {
        var s = t[n],
            o = 0 < e ? i : 0;
        s.wrapShift(o), e -= s.size.outerWidth;
      }
    },
    _unshiftCells: function _unshiftCells(t) {
      if (t && t.length) for (var e = 0; e < t.length; e++) {
        t[e].wrapShift(0);
      }
    },
    integratePhysics: function integratePhysics() {
      this.x += this.velocity, this.velocity *= this.getFrictionFactor();
    },
    applyForce: function applyForce(t) {
      this.velocity += t;
    },
    getFrictionFactor: function getFrictionFactor() {
      return 1 - this.options[this.isFreeScrolling ? "freeScrollFriction" : "friction"];
    },
    getRestingPosition: function getRestingPosition() {
      return this.x + this.velocity / (1 - this.getFrictionFactor());
    },
    applyDragForce: function applyDragForce() {
      if (this.isDraggable && this.isPointerDown) {
        var t = this.dragX - this.x - this.velocity;
        this.applyForce(t);
      }
    },
    applySelectedAttraction: function applySelectedAttraction() {
      if (!(this.isDraggable && this.isPointerDown) && !this.isFreeScrolling && this.slides.length) {
        var t = (-1 * this.selectedSlide.target - this.x) * this.options.selectedAttraction;
        this.applyForce(t);
      }
    }
  };
  return i;
}), function (r, a) {
  if ("function" == typeof define && define.amd) define("flickity/js/flickity", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./cell", "./slide", "./animate"], function (t, e, i, n, s, o) {
    return a(r, t, e, i, n, s, o);
  });else if ("object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports) module.exports = a(r, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./cell"), require("./slide"), require("./animate"));else {
    var t = r.Flickity;
    r.Flickity = a(r, r.EvEmitter, r.getSize, r.fizzyUIUtils, t.Cell, t.Slide, t.animatePrototype);
  }
}(window, function (n, t, e, a, i, r, s) {
  var l = n.jQuery,
      o = n.getComputedStyle,
      h = n.console;

  function c(t, e) {
    for (t = a.makeArray(t); t.length;) {
      e.appendChild(t.shift());
    }
  }

  var d = 0,
      u = {};

  function f(t, e) {
    var i = a.getQueryElement(t);

    if (i) {
      if (this.element = i, this.element.flickityGUID) {
        var n = u[this.element.flickityGUID];
        return n.option(e), n;
      }

      l && (this.$element = l(this.element)), this.options = a.extend({}, this.constructor.defaults), this.option(e), this._create();
    } else h && h.error("Bad element for Flickity: " + (i || t));
  }

  f.defaults = {
    accessibility: !0,
    cellAlign: "center",
    freeScrollFriction: .075,
    friction: .28,
    namespaceJQueryEvents: !0,
    percentPosition: !0,
    resize: !0,
    selectedAttraction: .025,
    setGallerySize: !0
  }, f.createMethods = [];
  var p = f.prototype;
  a.extend(p, t.prototype), p._create = function () {
    var t = this.guid = ++d;

    for (var e in this.element.flickityGUID = t, (u[t] = this).selectedIndex = 0, this.restingFrames = 0, this.x = 0, this.velocity = 0, this.originSide = this.options.rightToLeft ? "right" : "left", this.viewport = document.createElement("div"), this.viewport.className = "flickity-viewport", this._createSlider(), (this.options.resize || this.options.watchCSS) && n.addEventListener("resize", this), this.options.on) {
      var i = this.options.on[e];
      this.on(e, i);
    }

    f.createMethods.forEach(function (t) {
      this[t]();
    }, this), this.options.watchCSS ? this.watchCSS() : this.activate();
  }, p.option = function (t) {
    a.extend(this.options, t);
  }, p.activate = function () {
    this.isActive || (this.isActive = !0, this.element.classList.add("flickity-enabled"), this.options.rightToLeft && this.element.classList.add("flickity-rtl"), this.getSize(), c(this._filterFindCellElements(this.element.children), this.slider), this.viewport.appendChild(this.slider), this.element.appendChild(this.viewport), this.reloadCells(), this.options.accessibility && (this.element.tabIndex = 0, this.element.addEventListener("keydown", this)), this.emitEvent("activate"), this.selectInitialIndex(), this.isInitActivated = !0, this.dispatchEvent("ready"));
  }, p._createSlider = function () {
    var t = document.createElement("div");
    t.className = "flickity-slider", t.style[this.originSide] = 0, this.slider = t;
  }, p._filterFindCellElements = function (t) {
    return a.filterFindElements(t, this.options.cellSelector);
  }, p.reloadCells = function () {
    this.cells = this._makeCells(this.slider.children), this.positionCells(), this._getWrapShiftCells(), this.setGallerySize();
  }, p._makeCells = function (t) {
    return this._filterFindCellElements(t).map(function (t) {
      return new i(t, this);
    }, this);
  }, p.getLastCell = function () {
    return this.cells[this.cells.length - 1];
  }, p.getLastSlide = function () {
    return this.slides[this.slides.length - 1];
  }, p.positionCells = function () {
    this._sizeCells(this.cells), this._positionCells(0);
  }, p._positionCells = function (t) {
    t = t || 0, this.maxCellHeight = t && this.maxCellHeight || 0;
    var e = 0;

    if (0 < t) {
      var i = this.cells[t - 1];
      e = i.x + i.size.outerWidth;
    }

    for (var n = this.cells.length, s = t; s < n; s++) {
      var o = this.cells[s];
      o.setPosition(e), e += o.size.outerWidth, this.maxCellHeight = Math.max(o.size.outerHeight, this.maxCellHeight);
    }

    this.slideableWidth = e, this.updateSlides(), this._containSlides(), this.slidesWidth = n ? this.getLastSlide().target - this.slides[0].target : 0;
  }, p._sizeCells = function (t) {
    t.forEach(function (t) {
      t.getSize();
    });
  }, p.updateSlides = function () {
    if (this.slides = [], this.cells.length) {
      var n = new r(this);
      this.slides.push(n);

      var s = "left" == this.originSide ? "marginRight" : "marginLeft",
          o = this._getCanCellFit();

      this.cells.forEach(function (t, e) {
        if (n.cells.length) {
          var i = n.outerWidth - n.firstMargin + (t.size.outerWidth - t.size[s]);
          o.call(this, e, i) || (n.updateTarget(), n = new r(this), this.slides.push(n)), n.addCell(t);
        } else n.addCell(t);
      }, this), n.updateTarget(), this.updateSelectedSlide();
    }
  }, p._getCanCellFit = function () {
    var t = this.options.groupCells;
    if (!t) return function () {
      return !1;
    };

    if ("number" == typeof t) {
      var e = parseInt(t, 10);
      return function (t) {
        return t % e != 0;
      };
    }

    var i = "string" == typeof t && t.match(/^(\d+)%$/),
        n = i ? parseInt(i[1], 10) / 100 : 1;
    return function (t, e) {
      return e <= (this.size.innerWidth + 1) * n;
    };
  }, p._init = p.reposition = function () {
    this.positionCells(), this.positionSliderAtSelected();
  }, p.getSize = function () {
    this.size = e(this.element), this.setCellAlign(), this.cursorPosition = this.size.innerWidth * this.cellAlign;
  };
  var g = {
    center: {
      left: .5,
      right: .5
    },
    left: {
      left: 0,
      right: 1
    },
    right: {
      right: 0,
      left: 1
    }
  };
  return p.setCellAlign = function () {
    var t = g[this.options.cellAlign];
    this.cellAlign = t ? t[this.originSide] : this.options.cellAlign;
  }, p.setGallerySize = function () {
    if (this.options.setGallerySize) {
      var t = this.options.adaptiveHeight && this.selectedSlide ? this.selectedSlide.height : this.maxCellHeight;
      this.viewport.style.height = t + "px";
    }
  }, p._getWrapShiftCells = function () {
    if (this.options.wrapAround) {
      this._unshiftCells(this.beforeShiftCells), this._unshiftCells(this.afterShiftCells);
      var t = this.cursorPosition,
          e = this.cells.length - 1;
      this.beforeShiftCells = this._getGapCells(t, e, -1), t = this.size.innerWidth - this.cursorPosition, this.afterShiftCells = this._getGapCells(t, 0, 1);
    }
  }, p._getGapCells = function (t, e, i) {
    for (var n = []; 0 < t;) {
      var s = this.cells[e];
      if (!s) break;
      n.push(s), e += i, t -= s.size.outerWidth;
    }

    return n;
  }, p._containSlides = function () {
    if (this.options.contain && !this.options.wrapAround && this.cells.length) {
      var t = this.options.rightToLeft,
          e = t ? "marginRight" : "marginLeft",
          i = t ? "marginLeft" : "marginRight",
          n = this.slideableWidth - this.getLastCell().size[i],
          s = n < this.size.innerWidth,
          o = this.cursorPosition + this.cells[0].size[e],
          r = n - this.size.innerWidth * (1 - this.cellAlign);
      this.slides.forEach(function (t) {
        s ? t.target = n * this.cellAlign : (t.target = Math.max(t.target, o), t.target = Math.min(t.target, r));
      }, this);
    }
  }, p.dispatchEvent = function (t, e, i) {
    var n = e ? [e].concat(i) : i;

    if (this.emitEvent(t, n), l && this.$element) {
      var s = t += this.options.namespaceJQueryEvents ? ".flickity" : "";

      if (e) {
        var o = l.Event(e);
        o.type = t, s = o;
      }

      this.$element.trigger(s, i);
    }
  }, p.select = function (t, e, i) {
    if (this.isActive && (t = parseInt(t, 10), this._wrapSelect(t), (this.options.wrapAround || e) && (t = a.modulo(t, this.slides.length)), this.slides[t])) {
      var n = this.selectedIndex;
      this.selectedIndex = t, this.updateSelectedSlide(), i ? this.positionSliderAtSelected() : this.startAnimation(), this.options.adaptiveHeight && this.setGallerySize(), this.dispatchEvent("select", null, [t]), t != n && this.dispatchEvent("change", null, [t]), this.dispatchEvent("cellSelect");
    }
  }, p._wrapSelect = function (t) {
    var e = this.slides.length;
    if (!(this.options.wrapAround && 1 < e)) return t;
    var i = a.modulo(t, e),
        n = Math.abs(i - this.selectedIndex),
        s = Math.abs(i + e - this.selectedIndex),
        o = Math.abs(i - e - this.selectedIndex);
    !this.isDragSelect && s < n ? t += e : !this.isDragSelect && o < n && (t -= e), t < 0 ? this.x -= this.slideableWidth : e <= t && (this.x += this.slideableWidth);
  }, p.previous = function (t, e) {
    this.select(this.selectedIndex - 1, t, e);
  }, p.next = function (t, e) {
    this.select(this.selectedIndex + 1, t, e);
  }, p.updateSelectedSlide = function () {
    var t = this.slides[this.selectedIndex];
    t && (this.unselectSelectedSlide(), (this.selectedSlide = t).select(), this.selectedCells = t.cells, this.selectedElements = t.getCellElements(), this.selectedCell = t.cells[0], this.selectedElement = this.selectedElements[0]);
  }, p.unselectSelectedSlide = function () {
    this.selectedSlide && this.selectedSlide.unselect();
  }, p.selectInitialIndex = function () {
    var t = this.options.initialIndex;
    if (this.isInitActivated) this.select(this.selectedIndex, !1, !0);else {
      if (t && "string" == typeof t) if (this.queryCell(t)) return void this.selectCell(t, !1, !0);
      var e = 0;
      t && this.slides[t] && (e = t), this.select(e, !1, !0);
    }
  }, p.selectCell = function (t, e, i) {
    var n = this.queryCell(t);

    if (n) {
      var s = this.getCellSlideIndex(n);
      this.select(s, e, i);
    }
  }, p.getCellSlideIndex = function (t) {
    for (var e = 0; e < this.slides.length; e++) {
      if (-1 != this.slides[e].cells.indexOf(t)) return e;
    }
  }, p.getCell = function (t) {
    for (var e = 0; e < this.cells.length; e++) {
      var i = this.cells[e];
      if (i.element == t) return i;
    }
  }, p.getCells = function (t) {
    t = a.makeArray(t);
    var i = [];
    return t.forEach(function (t) {
      var e = this.getCell(t);
      e && i.push(e);
    }, this), i;
  }, p.getCellElements = function () {
    return this.cells.map(function (t) {
      return t.element;
    });
  }, p.getParentCell = function (t) {
    var e = this.getCell(t);
    return e || (t = a.getParent(t, ".flickity-slider > *"), this.getCell(t));
  }, p.getAdjacentCellElements = function (t, e) {
    if (!t) return this.selectedSlide.getCellElements();
    e = void 0 === e ? this.selectedIndex : e;
    var i = this.slides.length;
    if (i <= 1 + 2 * t) return this.getCellElements();

    for (var n = [], s = e - t; s <= e + t; s++) {
      var o = this.options.wrapAround ? a.modulo(s, i) : s,
          r = this.slides[o];
      r && (n = n.concat(r.getCellElements()));
    }

    return n;
  }, p.queryCell = function (t) {
    if ("number" == typeof t) return this.cells[t];

    if ("string" == typeof t) {
      if (t.match(/^[#\.]?[\d\/]/)) return;
      t = this.element.querySelector(t);
    }

    return this.getCell(t);
  }, p.uiChange = function () {
    this.emitEvent("uiChange");
  }, p.childUIPointerDown = function (t) {
    "touchstart" != t.type && t.preventDefault(), this.focus();
  }, p.onresize = function () {
    this.watchCSS(), this.resize();
  }, a.debounceMethod(f, "onresize", 150), p.resize = function () {
    if (this.isActive) {
      this.getSize(), this.options.wrapAround && (this.x = a.modulo(this.x, this.slideableWidth)), this.positionCells(), this._getWrapShiftCells(), this.setGallerySize(), this.emitEvent("resize");
      var t = this.selectedElements && this.selectedElements[0];
      this.selectCell(t, !1, !0);
    }
  }, p.watchCSS = function () {
    this.options.watchCSS && (-1 != o(this.element, ":after").content.indexOf("flickity") ? this.activate() : this.deactivate());
  }, p.onkeydown = function (t) {
    var e = document.activeElement && document.activeElement != this.element;

    if (this.options.accessibility && !e) {
      var i = f.keyboardHandlers[t.keyCode];
      i && i.call(this);
    }
  }, f.keyboardHandlers = {
    37: function _() {
      var t = this.options.rightToLeft ? "next" : "previous";
      this.uiChange(), this[t]();
    },
    39: function _() {
      var t = this.options.rightToLeft ? "previous" : "next";
      this.uiChange(), this[t]();
    }
  }, p.focus = function () {
    var t = n.pageYOffset;
    this.element.focus({
      preventScroll: !0
    }), n.pageYOffset != t && n.scrollTo(n.pageXOffset, t);
  }, p.deactivate = function () {
    this.isActive && (this.element.classList.remove("flickity-enabled"), this.element.classList.remove("flickity-rtl"), this.unselectSelectedSlide(), this.cells.forEach(function (t) {
      t.destroy();
    }), this.element.removeChild(this.viewport), c(this.slider.children, this.element), this.options.accessibility && (this.element.removeAttribute("tabIndex"), this.element.removeEventListener("keydown", this)), this.isActive = !1, this.emitEvent("deactivate"));
  }, p.destroy = function () {
    this.deactivate(), n.removeEventListener("resize", this), this.allOff(), this.emitEvent("destroy"), l && this.$element && l.removeData(this.element, "flickity"), delete this.element.flickityGUID, delete u[this.guid];
  }, a.extend(p, s), f.data = function (t) {
    var e = (t = a.getQueryElement(t)) && t.flickityGUID;
    return e && u[e];
  }, a.htmlInit(f, "flickity"), l && l.bridget && l.bridget("flickity", f), f.setJQuery = function (t) {
    l = t;
  }, f.Cell = i, f.Slide = r, f;
}), function (e, i) {
  "function" == typeof define && define.amd ? define("unipointer/unipointer", ["ev-emitter/ev-emitter"], function (t) {
    return i(e, t);
  }) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = i(e, require("ev-emitter")) : e.Unipointer = i(e, e.EvEmitter);
}(window, function (s, t) {
  function e() {}

  var i = e.prototype = Object.create(t.prototype);
  i.bindStartEvent = function (t) {
    this._bindStartEvent(t, !0);
  }, i.unbindStartEvent = function (t) {
    this._bindStartEvent(t, !1);
  }, i._bindStartEvent = function (t, e) {
    var i = (e = void 0 === e || e) ? "addEventListener" : "removeEventListener",
        n = "mousedown";
    s.PointerEvent ? n = "pointerdown" : "ontouchstart" in s && (n = "touchstart"), t[i](n, this);
  }, i.handleEvent = function (t) {
    var e = "on" + t.type;
    this[e] && this[e](t);
  }, i.getTouch = function (t) {
    for (var e = 0; e < t.length; e++) {
      var i = t[e];
      if (i.identifier == this.pointerIdentifier) return i;
    }
  }, i.onmousedown = function (t) {
    var e = t.button;
    e && 0 !== e && 1 !== e || this._pointerDown(t, t);
  }, i.ontouchstart = function (t) {
    this._pointerDown(t, t.changedTouches[0]);
  }, i.onpointerdown = function (t) {
    this._pointerDown(t, t);
  }, i._pointerDown = function (t, e) {
    t.button || this.isPointerDown || (this.isPointerDown = !0, this.pointerIdentifier = void 0 !== e.pointerId ? e.pointerId : e.identifier, this.pointerDown(t, e));
  }, i.pointerDown = function (t, e) {
    this._bindPostStartEvents(t), this.emitEvent("pointerDown", [t, e]);
  };
  var n = {
    mousedown: ["mousemove", "mouseup"],
    touchstart: ["touchmove", "touchend", "touchcancel"],
    pointerdown: ["pointermove", "pointerup", "pointercancel"]
  };
  return i._bindPostStartEvents = function (t) {
    if (t) {
      var e = n[t.type];
      e.forEach(function (t) {
        s.addEventListener(t, this);
      }, this), this._boundPointerEvents = e;
    }
  }, i._unbindPostStartEvents = function () {
    this._boundPointerEvents && (this._boundPointerEvents.forEach(function (t) {
      s.removeEventListener(t, this);
    }, this), delete this._boundPointerEvents);
  }, i.onmousemove = function (t) {
    this._pointerMove(t, t);
  }, i.onpointermove = function (t) {
    t.pointerId == this.pointerIdentifier && this._pointerMove(t, t);
  }, i.ontouchmove = function (t) {
    var e = this.getTouch(t.changedTouches);
    e && this._pointerMove(t, e);
  }, i._pointerMove = function (t, e) {
    this.pointerMove(t, e);
  }, i.pointerMove = function (t, e) {
    this.emitEvent("pointerMove", [t, e]);
  }, i.onmouseup = function (t) {
    this._pointerUp(t, t);
  }, i.onpointerup = function (t) {
    t.pointerId == this.pointerIdentifier && this._pointerUp(t, t);
  }, i.ontouchend = function (t) {
    var e = this.getTouch(t.changedTouches);
    e && this._pointerUp(t, e);
  }, i._pointerUp = function (t, e) {
    this._pointerDone(), this.pointerUp(t, e);
  }, i.pointerUp = function (t, e) {
    this.emitEvent("pointerUp", [t, e]);
  }, i._pointerDone = function () {
    this._pointerReset(), this._unbindPostStartEvents(), this.pointerDone();
  }, i._pointerReset = function () {
    this.isPointerDown = !1, delete this.pointerIdentifier;
  }, i.pointerDone = function () {}, i.onpointercancel = function (t) {
    t.pointerId == this.pointerIdentifier && this._pointerCancel(t, t);
  }, i.ontouchcancel = function (t) {
    var e = this.getTouch(t.changedTouches);
    e && this._pointerCancel(t, e);
  }, i._pointerCancel = function (t, e) {
    this._pointerDone(), this.pointerCancel(t, e);
  }, i.pointerCancel = function (t, e) {
    this.emitEvent("pointerCancel", [t, e]);
  }, e.getPointerPoint = function (t) {
    return {
      x: t.pageX,
      y: t.pageY
    };
  }, e;
}), function (e, i) {
  "function" == typeof define && define.amd ? define("unidragger/unidragger", ["unipointer/unipointer"], function (t) {
    return i(e, t);
  }) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = i(e, require("unipointer")) : e.Unidragger = i(e, e.Unipointer);
}(window, function (o, t) {
  function e() {}

  var i = e.prototype = Object.create(t.prototype);
  i.bindHandles = function () {
    this._bindHandles(!0);
  }, i.unbindHandles = function () {
    this._bindHandles(!1);
  }, i._bindHandles = function (t) {
    for (var e = (t = void 0 === t || t) ? "addEventListener" : "removeEventListener", i = t ? this._touchActionValue : "", n = 0; n < this.handles.length; n++) {
      var s = this.handles[n];
      this._bindStartEvent(s, t), s[e]("click", this), o.PointerEvent && (s.style.touchAction = i);
    }
  }, i._touchActionValue = "none", i.pointerDown = function (t, e) {
    this.okayPointerDown(t) && (this.pointerDownPointer = e, t.preventDefault(), this.pointerDownBlur(), this._bindPostStartEvents(t), this.emitEvent("pointerDown", [t, e]));
  };
  var s = {
    TEXTAREA: !0,
    INPUT: !0,
    SELECT: !0,
    OPTION: !0
  },
      r = {
    radio: !0,
    checkbox: !0,
    button: !0,
    submit: !0,
    image: !0,
    file: !0
  };
  return i.okayPointerDown = function (t) {
    var e = s[t.target.nodeName],
        i = r[t.target.type],
        n = !e || i;
    return n || this._pointerReset(), n;
  }, i.pointerDownBlur = function () {
    var t = document.activeElement;
    t && t.blur && t != document.body && t.blur();
  }, i.pointerMove = function (t, e) {
    var i = this._dragPointerMove(t, e);

    this.emitEvent("pointerMove", [t, e, i]), this._dragMove(t, e, i);
  }, i._dragPointerMove = function (t, e) {
    var i = {
      x: e.pageX - this.pointerDownPointer.pageX,
      y: e.pageY - this.pointerDownPointer.pageY
    };
    return !this.isDragging && this.hasDragStarted(i) && this._dragStart(t, e), i;
  }, i.hasDragStarted = function (t) {
    return 3 < Math.abs(t.x) || 3 < Math.abs(t.y);
  }, i.pointerUp = function (t, e) {
    this.emitEvent("pointerUp", [t, e]), this._dragPointerUp(t, e);
  }, i._dragPointerUp = function (t, e) {
    this.isDragging ? this._dragEnd(t, e) : this._staticClick(t, e);
  }, i._dragStart = function (t, e) {
    this.isDragging = !0, this.isPreventingClicks = !0, this.dragStart(t, e);
  }, i.dragStart = function (t, e) {
    this.emitEvent("dragStart", [t, e]);
  }, i._dragMove = function (t, e, i) {
    this.isDragging && this.dragMove(t, e, i);
  }, i.dragMove = function (t, e, i) {
    t.preventDefault(), this.emitEvent("dragMove", [t, e, i]);
  }, i._dragEnd = function (t, e) {
    this.isDragging = !1, setTimeout(function () {
      delete this.isPreventingClicks;
    }.bind(this)), this.dragEnd(t, e);
  }, i.dragEnd = function (t, e) {
    this.emitEvent("dragEnd", [t, e]);
  }, i.onclick = function (t) {
    this.isPreventingClicks && t.preventDefault();
  }, i._staticClick = function (t, e) {
    this.isIgnoringMouseUp && "mouseup" == t.type || (this.staticClick(t, e), "mouseup" != t.type && (this.isIgnoringMouseUp = !0, setTimeout(function () {
      delete this.isIgnoringMouseUp;
    }.bind(this), 400)));
  }, i.staticClick = function (t, e) {
    this.emitEvent("staticClick", [t, e]);
  }, e.getPointerPoint = t.getPointerPoint, e;
}), function (n, s) {
  "function" == typeof define && define.amd ? define("flickity/js/drag", ["./flickity", "unidragger/unidragger", "fizzy-ui-utils/utils"], function (t, e, i) {
    return s(n, t, e, i);
  }) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = s(n, require("./flickity"), require("unidragger"), require("fizzy-ui-utils")) : n.Flickity = s(n, n.Flickity, n.Unidragger, n.fizzyUIUtils);
}(window, function (i, t, e, a) {
  a.extend(t.defaults, {
    draggable: ">1",
    dragThreshold: 3
  }), t.createMethods.push("_createDrag");
  var n = t.prototype;
  a.extend(n, e.prototype), n._touchActionValue = "pan-y";
  var s = ("createTouch" in document),
      o = !1;
  n._createDrag = function () {
    this.on("activate", this.onActivateDrag), this.on("uiChange", this._uiChangeDrag), this.on("deactivate", this.onDeactivateDrag), this.on("cellChange", this.updateDraggable), s && !o && (i.addEventListener("touchmove", function () {}), o = !0);
  }, n.onActivateDrag = function () {
    this.handles = [this.viewport], this.bindHandles(), this.updateDraggable();
  }, n.onDeactivateDrag = function () {
    this.unbindHandles(), this.element.classList.remove("is-draggable");
  }, n.updateDraggable = function () {
    ">1" == this.options.draggable ? this.isDraggable = 1 < this.slides.length : this.isDraggable = this.options.draggable, this.isDraggable ? this.element.classList.add("is-draggable") : this.element.classList.remove("is-draggable");
  }, n.bindDrag = function () {
    this.options.draggable = !0, this.updateDraggable();
  }, n.unbindDrag = function () {
    this.options.draggable = !1, this.updateDraggable();
  }, n._uiChangeDrag = function () {
    delete this.isFreeScrolling;
  }, n.pointerDown = function (t, e) {
    this.isDraggable ? this.okayPointerDown(t) && (this._pointerDownPreventDefault(t), this.pointerDownFocus(t), document.activeElement != this.element && this.pointerDownBlur(), this.dragX = this.x, this.viewport.classList.add("is-pointer-down"), this.pointerDownScroll = l(), i.addEventListener("scroll", this), this._pointerDownDefault(t, e)) : this._pointerDownDefault(t, e);
  }, n._pointerDownDefault = function (t, e) {
    this.pointerDownPointer = {
      pageX: e.pageX,
      pageY: e.pageY
    }, this._bindPostStartEvents(t), this.dispatchEvent("pointerDown", t, [e]);
  };
  var r = {
    INPUT: !0,
    TEXTAREA: !0,
    SELECT: !0
  };

  function l() {
    return {
      x: i.pageXOffset,
      y: i.pageYOffset
    };
  }

  return n.pointerDownFocus = function (t) {
    r[t.target.nodeName] || this.focus();
  }, n._pointerDownPreventDefault = function (t) {
    var e = "touchstart" == t.type,
        i = "touch" == t.pointerType,
        n = r[t.target.nodeName];
    e || i || n || t.preventDefault();
  }, n.hasDragStarted = function (t) {
    return Math.abs(t.x) > this.options.dragThreshold;
  }, n.pointerUp = function (t, e) {
    delete this.isTouchScrolling, this.viewport.classList.remove("is-pointer-down"), this.dispatchEvent("pointerUp", t, [e]), this._dragPointerUp(t, e);
  }, n.pointerDone = function () {
    i.removeEventListener("scroll", this), delete this.pointerDownScroll;
  }, n.dragStart = function (t, e) {
    this.isDraggable && (this.dragStartPosition = this.x, this.startAnimation(), i.removeEventListener("scroll", this), this.dispatchEvent("dragStart", t, [e]));
  }, n.pointerMove = function (t, e) {
    var i = this._dragPointerMove(t, e);

    this.dispatchEvent("pointerMove", t, [e, i]), this._dragMove(t, e, i);
  }, n.dragMove = function (t, e, i) {
    if (this.isDraggable) {
      t.preventDefault(), this.previousDragX = this.dragX;
      var n = this.options.rightToLeft ? -1 : 1;
      this.options.wrapAround && (i.x = i.x % this.slideableWidth);
      var s = this.dragStartPosition + i.x * n;

      if (!this.options.wrapAround && this.slides.length) {
        var o = Math.max(-this.slides[0].target, this.dragStartPosition);
        s = o < s ? .5 * (s + o) : s;
        var r = Math.min(-this.getLastSlide().target, this.dragStartPosition);
        s = s < r ? .5 * (s + r) : s;
      }

      this.dragX = s, this.dragMoveTime = new Date(), this.dispatchEvent("dragMove", t, [e, i]);
    }
  }, n.dragEnd = function (t, e) {
    if (this.isDraggable) {
      this.options.freeScroll && (this.isFreeScrolling = !0);
      var i = this.dragEndRestingSelect();

      if (this.options.freeScroll && !this.options.wrapAround) {
        var n = this.getRestingPosition();
        this.isFreeScrolling = -n > this.slides[0].target && -n < this.getLastSlide().target;
      } else this.options.freeScroll || i != this.selectedIndex || (i += this.dragEndBoostSelect());

      delete this.previousDragX, this.isDragSelect = this.options.wrapAround, this.select(i), delete this.isDragSelect, this.dispatchEvent("dragEnd", t, [e]);
    }
  }, n.dragEndRestingSelect = function () {
    var t = this.getRestingPosition(),
        e = Math.abs(this.getSlideDistance(-t, this.selectedIndex)),
        i = this._getClosestResting(t, e, 1),
        n = this._getClosestResting(t, e, -1);

    return i.distance < n.distance ? i.index : n.index;
  }, n._getClosestResting = function (t, e, i) {
    for (var n = this.selectedIndex, s = 1 / 0, o = this.options.contain && !this.options.wrapAround ? function (t, e) {
      return t <= e;
    } : function (t, e) {
      return t < e;
    }; o(e, s) && (n += i, s = e, null !== (e = this.getSlideDistance(-t, n)));) {
      e = Math.abs(e);
    }

    return {
      distance: s,
      index: n - i
    };
  }, n.getSlideDistance = function (t, e) {
    var i = this.slides.length,
        n = this.options.wrapAround && 1 < i,
        s = n ? a.modulo(e, i) : e,
        o = this.slides[s];
    if (!o) return null;
    var r = n ? this.slideableWidth * Math.floor(e / i) : 0;
    return t - (o.target + r);
  }, n.dragEndBoostSelect = function () {
    if (void 0 === this.previousDragX || !this.dragMoveTime || 100 < new Date() - this.dragMoveTime) return 0;
    var t = this.getSlideDistance(-this.dragX, this.selectedIndex),
        e = this.previousDragX - this.dragX;
    return 0 < t && 0 < e ? 1 : t < 0 && e < 0 ? -1 : 0;
  }, n.staticClick = function (t, e) {
    var i = this.getParentCell(t.target),
        n = i && i.element,
        s = i && this.cells.indexOf(i);
    this.dispatchEvent("staticClick", t, [e, n, s]);
  }, n.onscroll = function () {
    var t = l(),
        e = this.pointerDownScroll.x - t.x,
        i = this.pointerDownScroll.y - t.y;
    (3 < Math.abs(e) || 3 < Math.abs(i)) && this._pointerDone();
  }, t;
}), function (n, s) {
  "function" == typeof define && define.amd ? define("flickity/js/prev-next-button", ["./flickity", "unipointer/unipointer", "fizzy-ui-utils/utils"], function (t, e, i) {
    return s(n, t, e, i);
  }) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = s(n, require("./flickity"), require("unipointer"), require("fizzy-ui-utils")) : s(n, n.Flickity, n.Unipointer, n.fizzyUIUtils);
}(window, function (t, e, i, n) {
  "use strict";

  var s = "http://www.w3.org/2000/svg";

  function o(t, e) {
    this.direction = t, this.parent = e, this._create();
  }

  (o.prototype = Object.create(i.prototype))._create = function () {
    this.isEnabled = !0, this.isPrevious = -1 == this.direction;
    var t = this.parent.options.rightToLeft ? 1 : -1;
    this.isLeft = this.direction == t;
    var e = this.element = document.createElement("button");
    e.className = "flickity-button flickity-prev-next-button", e.className += this.isPrevious ? " previous" : " next", e.setAttribute("type", "button"), this.disable(), e.setAttribute("aria-label", this.isPrevious ? "Previous" : "Next");
    var i = this.createSVG();
    e.appendChild(i), this.parent.on("select", this.update.bind(this)), this.on("pointerDown", this.parent.childUIPointerDown.bind(this.parent));
  }, o.prototype.activate = function () {
    this.bindStartEvent(this.element), this.element.addEventListener("click", this), this.parent.element.appendChild(this.element);
  }, o.prototype.deactivate = function () {
    this.parent.element.removeChild(this.element), this.unbindStartEvent(this.element), this.element.removeEventListener("click", this);
  }, o.prototype.createSVG = function () {
    var t = document.createElementNS(s, "svg");
    t.setAttribute("class", "flickity-button-icon"), t.setAttribute("viewBox", "0 0 100 100");

    var e = document.createElementNS(s, "path"),
        i = function (t) {
      return "string" != typeof t ? "M " + t.x0 + ",50 L " + t.x1 + "," + (t.y1 + 50) + " L " + t.x2 + "," + (t.y2 + 50) + " L " + t.x3 + ",50  L " + t.x2 + "," + (50 - t.y2) + " L " + t.x1 + "," + (50 - t.y1) + " Z" : t;
    }(this.parent.options.arrowShape);

    return e.setAttribute("d", i), e.setAttribute("class", "arrow"), this.isLeft || e.setAttribute("transform", "translate(100, 100) rotate(180) "), t.appendChild(e), t;
  }, o.prototype.handleEvent = n.handleEvent, o.prototype.onclick = function () {
    if (this.isEnabled) {
      this.parent.uiChange();
      var t = this.isPrevious ? "previous" : "next";
      this.parent[t]();
    }
  }, o.prototype.enable = function () {
    this.isEnabled || (this.element.disabled = !1, this.isEnabled = !0);
  }, o.prototype.disable = function () {
    this.isEnabled && (this.element.disabled = !0, this.isEnabled = !1);
  }, o.prototype.update = function () {
    var t = this.parent.slides;
    if (this.parent.options.wrapAround && 1 < t.length) this.enable();else {
      var e = t.length ? t.length - 1 : 0,
          i = this.isPrevious ? 0 : e;
      this[this.parent.selectedIndex == i ? "disable" : "enable"]();
    }
  }, o.prototype.destroy = function () {
    this.deactivate(), this.allOff();
  }, n.extend(e.defaults, {
    prevNextButtons: !0,
    arrowShape: {
      x0: 10,
      x1: 60,
      y1: 50,
      x2: 70,
      y2: 40,
      x3: 30
    }
  }), e.createMethods.push("_createPrevNextButtons");
  var r = e.prototype;
  return r._createPrevNextButtons = function () {
    this.options.prevNextButtons && (this.prevButton = new o(-1, this), this.nextButton = new o(1, this), this.on("activate", this.activatePrevNextButtons));
  }, r.activatePrevNextButtons = function () {
    this.prevButton.activate(), this.nextButton.activate(), this.on("deactivate", this.deactivatePrevNextButtons);
  }, r.deactivatePrevNextButtons = function () {
    this.prevButton.deactivate(), this.nextButton.deactivate(), this.off("deactivate", this.deactivatePrevNextButtons);
  }, e.PrevNextButton = o, e;
}), function (n, s) {
  "function" == typeof define && define.amd ? define("flickity/js/page-dots", ["./flickity", "unipointer/unipointer", "fizzy-ui-utils/utils"], function (t, e, i) {
    return s(n, t, e, i);
  }) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = s(n, require("./flickity"), require("unipointer"), require("fizzy-ui-utils")) : s(n, n.Flickity, n.Unipointer, n.fizzyUIUtils);
}(window, function (t, e, i, n) {
  function s(t) {
    this.parent = t, this._create();
  }

  (s.prototype = Object.create(i.prototype))._create = function () {
    this.holder = document.createElement("ol"), this.holder.className = "flickity-page-dots", this.dots = [], this.handleClick = this.onClick.bind(this), this.on("pointerDown", this.parent.childUIPointerDown.bind(this.parent));
  }, s.prototype.activate = function () {
    this.setDots(), this.holder.addEventListener("click", this.handleClick), this.bindStartEvent(this.holder), this.parent.element.appendChild(this.holder);
  }, s.prototype.deactivate = function () {
    this.holder.removeEventListener("click", this.handleClick), this.unbindStartEvent(this.holder), this.parent.element.removeChild(this.holder);
  }, s.prototype.setDots = function () {
    var t = this.parent.slides.length - this.dots.length;
    0 < t ? this.addDots(t) : t < 0 && this.removeDots(-t);
  }, s.prototype.addDots = function (t) {
    for (var e = document.createDocumentFragment(), i = [], n = this.dots.length, s = n + t, o = n; o < s; o++) {
      var r = document.createElement("li");
      r.className = "dot", r.setAttribute("aria-label", "Page dot " + (o + 1)), e.appendChild(r), i.push(r);
    }

    this.holder.appendChild(e), this.dots = this.dots.concat(i);
  }, s.prototype.removeDots = function (t) {
    this.dots.splice(this.dots.length - t, t).forEach(function (t) {
      this.holder.removeChild(t);
    }, this);
  }, s.prototype.updateSelected = function () {
    this.selectedDot && (this.selectedDot.className = "dot", this.selectedDot.removeAttribute("aria-current")), this.dots.length && (this.selectedDot = this.dots[this.parent.selectedIndex], this.selectedDot.className = "dot is-selected", this.selectedDot.setAttribute("aria-current", "step"));
  }, s.prototype.onTap = s.prototype.onClick = function (t) {
    var e = t.target;

    if ("LI" == e.nodeName) {
      this.parent.uiChange();
      var i = this.dots.indexOf(e);
      this.parent.select(i);
    }
  }, s.prototype.destroy = function () {
    this.deactivate(), this.allOff();
  }, e.PageDots = s, n.extend(e.defaults, {
    pageDots: !0
  }), e.createMethods.push("_createPageDots");
  var o = e.prototype;
  return o._createPageDots = function () {
    this.options.pageDots && (this.pageDots = new s(this), this.on("activate", this.activatePageDots), this.on("select", this.updateSelectedPageDots), this.on("cellChange", this.updatePageDots), this.on("resize", this.updatePageDots), this.on("deactivate", this.deactivatePageDots));
  }, o.activatePageDots = function () {
    this.pageDots.activate();
  }, o.updateSelectedPageDots = function () {
    this.pageDots.updateSelected();
  }, o.updatePageDots = function () {
    this.pageDots.setDots();
  }, o.deactivatePageDots = function () {
    this.pageDots.deactivate();
  }, e.PageDots = s, e;
}), function (t, n) {
  "function" == typeof define && define.amd ? define("flickity/js/player", ["ev-emitter/ev-emitter", "fizzy-ui-utils/utils", "./flickity"], function (t, e, i) {
    return n(t, e, i);
  }) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = n(require("ev-emitter"), require("fizzy-ui-utils"), require("./flickity")) : n(t.EvEmitter, t.fizzyUIUtils, t.Flickity);
}(window, function (t, e, i) {
  function n(t) {
    this.parent = t, this.state = "stopped", this.onVisibilityChange = this.visibilityChange.bind(this), this.onVisibilityPlay = this.visibilityPlay.bind(this);
  }

  (n.prototype = Object.create(t.prototype)).play = function () {
    "playing" != this.state && (document.hidden ? document.addEventListener("visibilitychange", this.onVisibilityPlay) : (this.state = "playing", document.addEventListener("visibilitychange", this.onVisibilityChange), this.tick()));
  }, n.prototype.tick = function () {
    if ("playing" == this.state) {
      var t = this.parent.options.autoPlay;
      t = "number" == typeof t ? t : 3e3;
      var e = this;
      this.clear(), this.timeout = setTimeout(function () {
        e.parent.next(!0), e.tick();
      }, t);
    }
  }, n.prototype.stop = function () {
    this.state = "stopped", this.clear(), document.removeEventListener("visibilitychange", this.onVisibilityChange);
  }, n.prototype.clear = function () {
    clearTimeout(this.timeout);
  }, n.prototype.pause = function () {
    "playing" == this.state && (this.state = "paused", this.clear());
  }, n.prototype.unpause = function () {
    "paused" == this.state && this.play();
  }, n.prototype.visibilityChange = function () {
    this[document.hidden ? "pause" : "unpause"]();
  }, n.prototype.visibilityPlay = function () {
    this.play(), document.removeEventListener("visibilitychange", this.onVisibilityPlay);
  }, e.extend(i.defaults, {
    pauseAutoPlayOnHover: !0
  }), i.createMethods.push("_createPlayer");
  var s = i.prototype;
  return s._createPlayer = function () {
    this.player = new n(this), this.on("activate", this.activatePlayer), this.on("uiChange", this.stopPlayer), this.on("pointerDown", this.stopPlayer), this.on("deactivate", this.deactivatePlayer);
  }, s.activatePlayer = function () {
    this.options.autoPlay && (this.player.play(), this.element.addEventListener("mouseenter", this));
  }, s.playPlayer = function () {
    this.player.play();
  }, s.stopPlayer = function () {
    this.player.stop();
  }, s.pausePlayer = function () {
    this.player.pause();
  }, s.unpausePlayer = function () {
    this.player.unpause();
  }, s.deactivatePlayer = function () {
    this.player.stop(), this.element.removeEventListener("mouseenter", this);
  }, s.onmouseenter = function () {
    this.options.pauseAutoPlayOnHover && (this.player.pause(), this.element.addEventListener("mouseleave", this));
  }, s.onmouseleave = function () {
    this.player.unpause(), this.element.removeEventListener("mouseleave", this);
  }, i.Player = n, i;
}), function (i, n) {
  "function" == typeof define && define.amd ? define("flickity/js/add-remove-cell", ["./flickity", "fizzy-ui-utils/utils"], function (t, e) {
    return n(i, t, e);
  }) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = n(i, require("./flickity"), require("fizzy-ui-utils")) : n(i, i.Flickity, i.fizzyUIUtils);
}(window, function (t, e, n) {
  var i = e.prototype;
  return i.insert = function (t, e) {
    var i = this._makeCells(t);

    if (i && i.length) {
      var n = this.cells.length;
      e = void 0 === e ? n : e;

      var s = function (t) {
        var e = document.createDocumentFragment();
        return t.forEach(function (t) {
          e.appendChild(t.element);
        }), e;
      }(i),
          o = e == n;

      if (o) this.slider.appendChild(s);else {
        var r = this.cells[e].element;
        this.slider.insertBefore(s, r);
      }
      if (0 === e) this.cells = i.concat(this.cells);else if (o) this.cells = this.cells.concat(i);else {
        var a = this.cells.splice(e, n - e);
        this.cells = this.cells.concat(i).concat(a);
      }
      this._sizeCells(i), this.cellChange(e, !0);
    }
  }, i.append = function (t) {
    this.insert(t, this.cells.length);
  }, i.prepend = function (t) {
    this.insert(t, 0);
  }, i.remove = function (t) {
    var e = this.getCells(t);

    if (e && e.length) {
      var i = this.cells.length - 1;
      e.forEach(function (t) {
        t.remove();
        var e = this.cells.indexOf(t);
        i = Math.min(e, i), n.removeFrom(this.cells, t);
      }, this), this.cellChange(i, !0);
    }
  }, i.cellSizeChange = function (t) {
    var e = this.getCell(t);

    if (e) {
      e.getSize();
      var i = this.cells.indexOf(e);
      this.cellChange(i);
    }
  }, i.cellChange = function (t, e) {
    var i = this.selectedElement;
    this._positionCells(t), this._getWrapShiftCells(), this.setGallerySize();
    var n = this.getCell(i);
    n && (this.selectedIndex = this.getCellSlideIndex(n)), this.selectedIndex = Math.min(this.slides.length - 1, this.selectedIndex), this.emitEvent("cellChange", [t]), this.select(this.selectedIndex), e && this.positionSliderAtSelected();
  }, e;
}), function (i, n) {
  "function" == typeof define && define.amd ? define("flickity/js/lazyload", ["./flickity", "fizzy-ui-utils/utils"], function (t, e) {
    return n(i, t, e);
  }) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = n(i, require("./flickity"), require("fizzy-ui-utils")) : n(i, i.Flickity, i.fizzyUIUtils);
}(window, function (t, e, o) {
  "use strict";

  e.createMethods.push("_createLazyload");
  var i = e.prototype;

  function s(t, e) {
    this.img = t, this.flickity = e, this.load();
  }

  return i._createLazyload = function () {
    this.on("select", this.lazyLoad);
  }, i.lazyLoad = function () {
    var t = this.options.lazyLoad;

    if (t) {
      var e = "number" == typeof t ? t : 0,
          i = this.getAdjacentCellElements(e),
          n = [];
      i.forEach(function (t) {
        var e = function (t) {
          if ("IMG" == t.nodeName) {
            var e = t.getAttribute("data-flickity-lazyload"),
                i = t.getAttribute("data-flickity-lazyload-src"),
                n = t.getAttribute("data-flickity-lazyload-srcset");
            if (e || i || n) return [t];
          }

          var s = t.querySelectorAll("img[data-flickity-lazyload], img[data-flickity-lazyload-src], img[data-flickity-lazyload-srcset]");
          return o.makeArray(s);
        }(t);

        n = n.concat(e);
      }), n.forEach(function (t) {
        new s(t, this);
      }, this);
    }
  }, s.prototype.handleEvent = o.handleEvent, s.prototype.load = function () {
    this.img.addEventListener("load", this), this.img.addEventListener("error", this);
    var t = this.img.getAttribute("data-flickity-lazyload") || this.img.getAttribute("data-flickity-lazyload-src"),
        e = this.img.getAttribute("data-flickity-lazyload-srcset");
    this.img.src = t, e && this.img.setAttribute("srcset", e), this.img.removeAttribute("data-flickity-lazyload"), this.img.removeAttribute("data-flickity-lazyload-src"), this.img.removeAttribute("data-flickity-lazyload-srcset");
  }, s.prototype.onload = function (t) {
    this.complete(t, "flickity-lazyloaded");
  }, s.prototype.onerror = function (t) {
    this.complete(t, "flickity-lazyerror");
  }, s.prototype.complete = function (t, e) {
    this.img.removeEventListener("load", this), this.img.removeEventListener("error", this);
    var i = this.flickity.getParentCell(this.img),
        n = i && i.element;
    this.flickity.cellSizeChange(n), this.img.classList.add(e), this.flickity.dispatchEvent("lazyLoad", t, n);
  }, e.LazyLoader = s, e;
}), function (t, e) {
  "function" == typeof define && define.amd ? define("flickity/js/index", ["./flickity", "./drag", "./prev-next-button", "./page-dots", "./player", "./add-remove-cell", "./lazyload"], e) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports && (module.exports = e(require("./flickity"), require("./drag"), require("./prev-next-button"), require("./page-dots"), require("./player"), require("./add-remove-cell"), require("./lazyload")));
}(window, function (t) {
  return t;
}), function (t, e) {
  "function" == typeof define && define.amd ? define("flickity-as-nav-for/as-nav-for", ["flickity/js/index", "fizzy-ui-utils/utils"], e) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(require("flickity"), require("fizzy-ui-utils")) : t.Flickity = e(t.Flickity, t.fizzyUIUtils);
}(window, function (n, s) {
  n.createMethods.push("_createAsNavFor");
  var t = n.prototype;
  return t._createAsNavFor = function () {
    this.on("activate", this.activateAsNavFor), this.on("deactivate", this.deactivateAsNavFor), this.on("destroy", this.destroyAsNavFor);
    var t = this.options.asNavFor;

    if (t) {
      var e = this;
      setTimeout(function () {
        e.setNavCompanion(t);
      });
    }
  }, t.setNavCompanion = function (t) {
    t = s.getQueryElement(t);
    var e = n.data(t);

    if (e && e != this) {
      this.navCompanion = e;
      var i = this;
      this.onNavCompanionSelect = function () {
        i.navCompanionSelect();
      }, e.on("select", this.onNavCompanionSelect), this.on("staticClick", this.onNavStaticClick), this.navCompanionSelect(!0);
    }
  }, t.navCompanionSelect = function (t) {
    var e = this.navCompanion && this.navCompanion.selectedCells;

    if (e) {
      var i = e[0],
          n = this.navCompanion.cells.indexOf(i),
          s = n + e.length - 1,
          o = Math.floor(function (t, e, i) {
        return (e - t) * i + t;
      }(n, s, this.navCompanion.cellAlign));

      if (this.selectCell(o, !1, t), this.removeNavSelectedElements(), !(o >= this.cells.length)) {
        var r = this.cells.slice(n, 1 + s);
        this.navSelectedElements = r.map(function (t) {
          return t.element;
        }), this.changeNavSelectedClass("add");
      }
    }
  }, t.changeNavSelectedClass = function (e) {
    this.navSelectedElements.forEach(function (t) {
      t.classList[e]("is-nav-selected");
    });
  }, t.activateAsNavFor = function () {
    this.navCompanionSelect(!0);
  }, t.removeNavSelectedElements = function () {
    this.navSelectedElements && (this.changeNavSelectedClass("remove"), delete this.navSelectedElements);
  }, t.onNavStaticClick = function (t, e, i, n) {
    "number" == typeof n && this.navCompanion.selectCell(n);
  }, t.deactivateAsNavFor = function () {
    this.removeNavSelectedElements();
  }, t.destroyAsNavFor = function () {
    this.navCompanion && (this.navCompanion.off("select", this.onNavCompanionSelect), this.off("staticClick", this.onNavStaticClick), delete this.navCompanion);
  }, n;
}), function (e, i) {
  "use strict";

  "function" == typeof define && define.amd ? define("imagesloaded/imagesloaded", ["ev-emitter/ev-emitter"], function (t) {
    return i(e, t);
  }) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = i(e, require("ev-emitter")) : e.imagesLoaded = i(e, e.EvEmitter);
}("undefined" != typeof window ? window : this, function (e, t) {
  var s = e.jQuery,
      o = e.console;

  function r(t, e) {
    for (var i in e) {
      t[i] = e[i];
    }

    return t;
  }

  var a = Array.prototype.slice;

  function l(t, e, i) {
    if (!(this instanceof l)) return new l(t, e, i);
    var n = t;
    "string" == typeof t && (n = document.querySelectorAll(t)), n ? (this.elements = function (t) {
      return Array.isArray(t) ? t : "object" == _typeof(t) && "number" == typeof t.length ? a.call(t) : [t];
    }(n), this.options = r({}, this.options), "function" == typeof e ? i = e : r(this.options, e), i && this.on("always", i), this.getImages(), s && (this.jqDeferred = new s.Deferred()), setTimeout(this.check.bind(this))) : o.error("Bad element for imagesLoaded " + (n || t));
  }

  (l.prototype = Object.create(t.prototype)).options = {}, l.prototype.getImages = function () {
    this.images = [], this.elements.forEach(this.addElementImages, this);
  }, l.prototype.addElementImages = function (t) {
    "IMG" == t.nodeName && this.addImage(t), !0 === this.options.background && this.addElementBackgroundImages(t);
    var e = t.nodeType;

    if (e && h[e]) {
      for (var i = t.querySelectorAll("img"), n = 0; n < i.length; n++) {
        var s = i[n];
        this.addImage(s);
      }

      if ("string" == typeof this.options.background) {
        var o = t.querySelectorAll(this.options.background);

        for (n = 0; n < o.length; n++) {
          var r = o[n];
          this.addElementBackgroundImages(r);
        }
      }
    }
  };
  var h = {
    1: !0,
    9: !0,
    11: !0
  };

  function i(t) {
    this.img = t;
  }

  function n(t, e) {
    this.url = t, this.element = e, this.img = new Image();
  }

  return l.prototype.addElementBackgroundImages = function (t) {
    var e = getComputedStyle(t);
    if (e) for (var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(e.backgroundImage); null !== n;) {
      var s = n && n[2];
      s && this.addBackground(s, t), n = i.exec(e.backgroundImage);
    }
  }, l.prototype.addImage = function (t) {
    var e = new i(t);
    this.images.push(e);
  }, l.prototype.addBackground = function (t, e) {
    var i = new n(t, e);
    this.images.push(i);
  }, l.prototype.check = function () {
    var n = this;

    function e(t, e, i) {
      setTimeout(function () {
        n.progress(t, e, i);
      });
    }

    this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? this.images.forEach(function (t) {
      t.once("progress", e), t.check();
    }) : this.complete();
  }, l.prototype.progress = function (t, e, i) {
    this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded, this.emitEvent("progress", [this, t, e]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, t), this.progressedCount == this.images.length && this.complete(), this.options.debug && o && o.log("progress: " + i, t, e);
  }, l.prototype.complete = function () {
    var t = this.hasAnyBroken ? "fail" : "done";

    if (this.isComplete = !0, this.emitEvent(t, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
      var e = this.hasAnyBroken ? "reject" : "resolve";
      this.jqDeferred[e](this);
    }
  }, (i.prototype = Object.create(t.prototype)).check = function () {
    this.getIsImageComplete() ? this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image(), this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.proxyImage.src = this.img.src);
  }, i.prototype.getIsImageComplete = function () {
    return this.img.complete && this.img.naturalWidth;
  }, i.prototype.confirm = function (t, e) {
    this.isLoaded = t, this.emitEvent("progress", [this, this.img, e]);
  }, i.prototype.handleEvent = function (t) {
    var e = "on" + t.type;
    this[e] && this[e](t);
  }, i.prototype.onload = function () {
    this.confirm(!0, "onload"), this.unbindEvents();
  }, i.prototype.onerror = function () {
    this.confirm(!1, "onerror"), this.unbindEvents();
  }, i.prototype.unbindEvents = function () {
    this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this);
  }, (n.prototype = Object.create(i.prototype)).check = function () {
    this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url, this.getIsImageComplete() && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents());
  }, n.prototype.unbindEvents = function () {
    this.img.removeEventListener("load", this), this.img.removeEventListener("error", this);
  }, n.prototype.confirm = function (t, e) {
    this.isLoaded = t, this.emitEvent("progress", [this, this.element, e]);
  }, l.makeJQueryPlugin = function (t) {
    (t = t || e.jQuery) && ((s = t).fn.imagesLoaded = function (t, e) {
      return new l(this, t, e).jqDeferred.promise(s(this));
    });
  }, l.makeJQueryPlugin(), l;
}), function (i, n) {
  "function" == typeof define && define.amd ? define(["flickity/js/index", "imagesloaded/imagesloaded"], function (t, e) {
    return n(i, t, e);
  }) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = n(i, require("flickity"), require("imagesloaded")) : i.Flickity = n(i, i.Flickity, i.imagesLoaded);
}(window, function (t, e, i) {
  "use strict";

  e.createMethods.push("_createImagesLoaded");
  var n = e.prototype;
  return n._createImagesLoaded = function () {
    this.on("activate", this.imagesLoaded);
  }, n.imagesLoaded = function () {
    if (this.options.imagesLoaded) {
      var n = this;
      i(this.slider).on("progress", function (t, e) {
        var i = n.getParentCell(e.img);
        n.cellSizeChange(i && i.element), n.options.freeScroll || n.positionSliderAtSelected();
      });
    }
  }, e;
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
"use strict";

function _typeof2(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _defineProperty(e, t, i) {
  return t in e ? Object.defineProperty(e, t, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = i, e;
}

var _typeof = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function (e) {
  return _typeof2(e);
} : function (e) {
  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof2(e);
};

!function () {
  for (var e = ["DocumentType", "Element", "CharacterData"], t = function t() {
    null != this.parentNode && this.parentNode.removeChild(this);
  }, i = 0; i < e.length; i++) {
    var r = e[i];
    window[r] && !window[r].prototype.remove && (window[r].prototype.remove = t);
  }
}(), function (e) {
  function t() {}

  function i(e, t) {
    return function () {
      e.apply(t, arguments);
    };
  }

  function r(e) {
    if ("object" !== _typeof(this)) throw new TypeError("Promises must be constructed via new");
    if ("function" != typeof e) throw new TypeError("not a function");
    this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], u(e, this);
  }

  function n(e, t) {
    for (; 3 === e._state;) {
      e = e._value;
    }

    return 0 === e._state ? void e._deferreds.push(t) : (e._handled = !0, void r._immediateFn(function () {
      var i = 1 === e._state ? t.onFulfilled : t.onRejected;
      if (null === i) return void (1 === e._state ? o : s)(t.promise, e._value);
      var r;

      try {
        r = i(e._value);
      } catch (n) {
        return void s(t.promise, n);
      }

      o(t.promise, r);
    }));
  }

  function o(e, t) {
    try {
      if (t === e) throw new TypeError("A promise cannot be resolved with itself.");

      if (t && ("object" === ("undefined" == typeof t ? "undefined" : _typeof(t)) || "function" == typeof t)) {
        var n = t.then;
        if (t instanceof r) return e._state = 3, e._value = t, void a(e);
        if ("function" == typeof n) return void u(i(n, t), e);
      }

      e._state = 1, e._value = t, a(e);
    } catch (o) {
      s(e, o);
    }
  }

  function s(e, t) {
    e._state = 2, e._value = t, a(e);
  }

  function a(e) {
    2 === e._state && 0 === e._deferreds.length && r._immediateFn(function () {
      e._handled || r._unhandledRejectionFn(e._value);
    });

    for (var t = 0, i = e._deferreds.length; t < i; t++) {
      n(e, e._deferreds[t]);
    }

    e._deferreds = null;
  }

  function l(e, t, i) {
    this.onFulfilled = "function" == typeof e ? e : null, this.onRejected = "function" == typeof t ? t : null, this.promise = i;
  }

  function u(e, t) {
    var i = !1;

    try {
      e(function (e) {
        i || (i = !0, o(t, e));
      }, function (e) {
        i || (i = !0, s(t, e));
      });
    } catch (r) {
      if (i) return;
      i = !0, s(t, r);
    }
  }

  var d = setTimeout;
  r.prototype["catch"] = function (e) {
    return this.then(null, e);
  }, r.prototype.then = function (e, i) {
    var r = new this.constructor(t);
    return n(this, new l(e, i, r)), r;
  }, r.all = function (e) {
    var t = Array.prototype.slice.call(e);
    return new r(function (e, i) {
      function r(o, s) {
        try {
          if (s && ("object" === ("undefined" == typeof s ? "undefined" : _typeof(s)) || "function" == typeof s)) {
            var a = s.then;
            if ("function" == typeof a) return void a.call(s, function (e) {
              r(o, e);
            }, i);
          }

          t[o] = s, 0 === --n && e(t);
        } catch (l) {
          i(l);
        }
      }

      if (0 === t.length) return e([]);

      for (var n = t.length, o = 0; o < t.length; o++) {
        r(o, t[o]);
      }
    });
  }, r.resolve = function (e) {
    return e && "object" === ("undefined" == typeof e ? "undefined" : _typeof(e)) && e.constructor === r ? e : new r(function (t) {
      t(e);
    });
  }, r.reject = function (e) {
    return new r(function (t, i) {
      i(e);
    });
  }, r.race = function (e) {
    return new r(function (t, i) {
      for (var r = 0, n = e.length; r < n; r++) {
        e[r].then(t, i);
      }
    });
  }, r._immediateFn = "function" == typeof setImmediate && function (e) {
    setImmediate(e);
  } || function (e) {
    d(e, 0);
  }, r._unhandledRejectionFn = function (e) {
    "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", e);
  }, r._setImmediateFn = function (e) {
    r._immediateFn = e;
  }, r._setUnhandledRejectionFn = function (e) {
    r._unhandledRejectionFn = e;
  }, "undefined" != typeof module && module.exports ? module.exports = r : e.Promise || (e.Promise = r);
}(window), function (e) {
  e.Promise || (e.Promise = Promise);

  var t = "required",
      i = "email",
      r = "minLength",
      n = "maxLength",
      o = "password",
      s = "zip",
      a = "phone",
      l = "remote",
      u = "strength",
      d = "function",
      c = function c(e, t) {
    if ("string" == typeof e) return e;
    var i = "post" === t.toLowerCase() ? "" : "?";
    return Array.isArray(e) ? i + e.map(function (e) {
      return e.name + "=" + e.value;
    }).join("&") : i + Object.keys(e).map(function (t) {
      return t + "=" + e[t];
    }).join("&");
  },
      h = function h(e) {
    var t = e.url,
        i = e.method,
        r = e.data,
        n = e.debug,
        o = e.callback,
        s = e.error;
    if (n) return void o("test");
    var a = e.async !== !1,
        l = new XMLHttpRequest(),
        u = c(r, "get"),
        d = null;
    "post" === i.toLowerCase() && (d = c(r, "post"), u = ""), l.open(i, t + u, a), l.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), l.onreadystatechange = function () {
      4 === this.readyState && (200 === this.status ? o(this.responseText) : s && s(this.responseText));
    }, l.send(d);
  },
      f = function f(e, t) {
    this.options = t || {}, this.rules = this.options.rules || {}, this.messages = this.options.messages || void 0, this.colorWrong = this.options.colorWrong || "#B81111", this.result = {}, this.elements = [], this.tooltip = this.options.tooltip || {}, this.tooltipFadeOutTime = this.tooltip.fadeOutTime || 5e3, this.tooltipFadeOutClass = this.tooltip.fadeOutClass || "just-validate-tooltip-hide", this.tooltipSelectorWrap = document.querySelectorAll(this.tooltip.selectorWrap).length ? document.querySelectorAll(this.tooltip.selectorWrap) : document.querySelectorAll(".just-validate-tooltip-container"), this.bindHandlerKeyup = this.handlerKeyup.bind(this), this.submitHandler = this.options.submitHandler || void 0, this.invalidFormCallback = this.options.invalidFormCallback || void 0, this.promisesRemote = [], this.isValidationSuccess = !1, this.focusWrongField = this.options.focusWrongField || !1, this.REGEXP = {
      email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      zip: /^\d{5}(-\d{4})?$/,
      phone: /^([0-9]( |-)?)?(\(?[0-9]{3}\)?|[0-9]{3})( |-)?([0-9]{3}( |-)?[0-9]{4}|[a-zA-Z0-9]{7})$/,
      password: /[^\w\d]*(([0-9]+.*[A-Za-z]+.*)|[A-Za-z]+.*([0-9]+.*))/,
      strengthPass: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]/
    }, this.DEFAULT_REMOTE_ERROR = "Error", this.state = {
      tooltipsTimer: null
    }, this.setForm(document.querySelector(e));
  };

  f.prototype = {
    defaultRules: {
      email: {
        required: !0,
        email: !0
      },
      name: {
        required: !0,
        minLength: 3,
        maxLength: 15
      },
      text: {
        required: !0,
        maxLength: 300,
        minLength: 5
      },
      password: {
        required: !0,
        password: !0,
        minLength: 4,
        maxLength: 8
      },
      zip: {
        required: !0,
        zip: !0
      },
      phone: {
        phone: !0
      }
    },
    defaultMessages: {
      required: "The field is required",
      email: "Please, type a valid email",
      maxLength: "The field must contain a maximum of :value characters",
      minLength: "The field must contain a minimum of :value characters",
      password: "Password is not valid",
      remote: "Email already exists",
      strength: "Password must contents at least one uppercase letter, one lowercase letter and one number",
      "function": "Function returned false"
    },
    handlerKeyup: function handlerKeyup(e) {
      var t = e.target,
          i = {
        name: t.getAttribute("data-validate-field"),
        value: t.value
      };
      delete this.result[i.name], this.validateItem({
        name: i.name,
        value: i.value,
        group: [],
        isKeyupChange: !0
      }), this.renderErrors();
    },
    setterEventListener: function setterEventListener(e, t, i, r) {
      switch ("keyup" === t && (i = this.bindHandlerKeyup), r) {
        case "add":
          e.addEventListener(t, i);
          break;

        case "remove":
          e.removeEventListener(t, i);
      }
    },
    getElementsRealValue: function getElementsRealValue() {
      for (var e = this.$form.querySelectorAll("*"), t = void 0, i = {}, r = 0, n = e.length; r < n; ++r) {
        if (t = e[r].getAttribute("name")) {
          if ("checkbox" === e[r].type) {
            i[t] = e[r].checked;
            continue;
          }

          i[t] = e[r].value;
        }
      }

      return i;
    },
    validationFailed: function validationFailed() {
      this.invalidFormCallback && this.invalidFormCallback(this.result);
      var e = document.querySelector(".js-validate-error-field");
      this.focusWrongField && e && e.focus && e.focus();
    },
    validationSuccess: function validationSuccess() {
      if (0 === Object.keys(this.result).length) {
        if (this.isValidationSuccess = !1, this.submitHandler) {
          var e = this.getElementsRealValue();
          return void this.submitHandler(this.$form, e, h);
        }

        this.$form.submit();
      }
    },
    setForm: function setForm(e) {
      var t = this;
      this.$form = e, this.$form.setAttribute("novalidate", "novalidate"), this.$form.addEventListener("submit", function (e) {
        return e.preventDefault(), t.result = [], t.getElements(), t.promisesRemote.length ? void Promise.all(t.promisesRemote).then(function () {
          t.promisesRemote = [], t.isValidationSuccess ? t.validationSuccess() : t.validationFailed();
        }) : void (t.isValidationSuccess ? t.validationSuccess() : t.validationFailed());
      });
    },
    isEmail: function isEmail(e) {
      return this.REGEXP.email.test(e);
    },
    isZip: function isZip(e) {
      return this.REGEXP.zip.test(e);
    },
    isPhone: function isPhone(e) {
      return this.REGEXP.phone.test(e);
    },
    isPassword: function isPassword(e) {
      return this.REGEXP.password.test(e);
    },
    isEmpty: function isEmpty(e) {
      var t = e;
      return e.trim && (t = e.trim()), !t;
    },
    checkLengthMax: function checkLengthMax(e, t) {
      return e.length <= t;
    },
    checkLengthMin: function checkLengthMin(e, t) {
      return e.length >= t;
    },
    checkStrengthPass: function checkStrengthPass(e) {
      return this.REGEXP.strengthPass.test(e);
    },
    getElements: function getElements() {
      var e = this,
          t = this.$form.querySelectorAll("[data-validate-field]");
      this.elements = [];

      for (var i = function i(_i, r) {
        var n = t[_i],
            o = n.getAttribute("data-validate-field"),
            s = n.value,
            a = !1,
            l = [];

        if ("checkbox" === n.type && (s = n.checked || "", n.addEventListener("change", function (t) {
          var i = t.target,
              r = {
            name: i.getAttribute("data-validate-field"),
            value: i.checked
          };
          delete e.result[r.name], e.validateItem({
            name: r.name,
            value: r.value,
            group: []
          }), e.renderErrors();
        })), "radio" === n.type) {
          var u = e.elements.filter(function (e) {
            if (e.name === o) return e;
          })[0];
          u ? (u.group.push(n.checked), a = !0) : l.push(n.checked), n.addEventListener("change", function (t) {
            var i = t.target,
                r = {
              name: i.getAttribute("data-validate-field"),
              value: i.checked
            };
            delete e.result[r.name], e.validateItem({
              name: r.name,
              value: r.value,
              group: []
            }), e.renderErrors();
          });
        }

        e.setterEventListener(n, "keyup", e.handlerKeyup, "add"), a || e.elements.push({
          name: o,
          value: s,
          group: l
        });
      }, r = 0, n = t.length; r < n; ++r) {
        i(r, n);
      }

      this.validateElements();
    },
    validateRequired: function validateRequired(e) {
      return !this.isEmpty(e);
    },
    validateEmail: function validateEmail(e) {
      return this.isEmail(e);
    },
    validatePhone: function validatePhone(e) {
      return this.isPhone(e);
    },
    validateMinLength: function validateMinLength(e, t) {
      return this.checkLengthMin(e, t);
    },
    validateMaxLength: function validateMaxLength(e, t) {
      return this.checkLengthMax(e, t);
    },
    validateStrengthPass: function validateStrengthPass(e) {
      return this.checkStrengthPass(e);
    },
    validatePassword: function validatePassword(e) {
      return this.isPassword(e);
    },
    validateZip: function validateZip(e) {
      return this.isZip(e);
    },
    validateRemote: function validateRemote(e) {
      var t = e.value,
          i = e.name,
          r = e.url,
          n = e.successAnswer,
          o = e.sendParam,
          s = e.method;
      return new Promise(function (e) {
        h({
          url: r,
          method: s,
          data: _defineProperty({}, o, t),
          async: !0,
          callback: function callback(t) {
            t.toLowerCase() === n.toLowerCase() && e("ok"), e({
              type: "incorrect",
              name: i
            });
          },
          error: function error() {
            e({
              type: "error",
              name: i
            });
          }
        });
      });
    },
    generateMessage: function generateMessage(e, t, i) {
      var r = this.messages || this.defaultMessages,
          n = r[t] && r[t][e] || this.messages && "string" == typeof this.messages[t] && r[t] || this.defaultMessages[e] || this.DEFAULT_REMOTE_ERROR;
      i && (n = n.replace(":value", i.toString())), this.result[t] = {
        message: n
      };
    },
    validateElements: function validateElements() {
      var e = this;
      return this.lockForm(), this.elements.forEach(function (t) {
        e.validateItem({
          name: t.name,
          value: t.value,
          group: t.group
        });
      }), this.promisesRemote.length ? void Promise.all(this.promisesRemote).then(function (t) {
        t.forEach(function (t) {
          return "ok" === t ? void e.renderErrors() : ("error" === t.type && alert("Server error occured. Please try later."), e.generateMessage(l, t.name), void e.renderErrors());
        });
      }) : void this.renderErrors();
    },
    validateItem: function validateItem(e) {
      var c = this,
          h = e.name,
          f = e.group,
          m = e.value,
          v = e.isKeyupChange,
          p = this.rules[h] || this.defaultRules[h] || !1;
      if (p) for (var g in p) {
        var y = p[g];
        if (g !== t && g !== d && "" == m) return;

        switch (g) {
          case d:
            if ("function" != typeof y) break;
            if (y(h, m)) break;
            return void this.generateMessage(d, h, y);

          case t:
            if (!y) break;

            if (f.length) {
              var b = !1;
              if (f.forEach(function (e) {
                c.validateRequired(e) && (b = !0);
              }), b) break;
            } else if (this.validateRequired(m)) break;

            return void this.generateMessage(t, h);

          case i:
            if (!y) break;
            if (this.validateEmail(m)) break;
            return void this.generateMessage(i, h);

          case r:
            if (!y) break;
            if (this.validateMinLength(m, y)) break;
            return void this.generateMessage(r, h, y);

          case n:
            if (!y) break;
            if (this.validateMaxLength(m, y)) break;
            return void this.generateMessage(n, h, y);

          case a:
            if (!y) break;
            if (this.validatePhone(m)) break;
            return void this.generateMessage(a, h);

          case o:
            if (!y) break;
            if (this.validatePassword(m)) break;
            return void this.generateMessage(o, h);

          case u:
            if (!y || "object" !== ("undefined" == typeof y ? "undefined" : _typeof(y))) break;
            if (y["default"] && this.validateStrengthPass(m)) break;

            if (y.custom) {
              var E = void 0;

              try {
                E = new RegExp(y.custom);
              } catch (w) {
                E = this.REGEXP.strengthPass, console.error("Custom regexp for strength rule is not valid. Default regexp was used.");
              }

              if (E.test(m)) break;
            }

            return void this.generateMessage(u, h);

          case s:
            if (!y) break;
            if (this.validateZip(m)) break;
            return void this.generateMessage(s, h);

          case l:
            if (v) break;
            if (!y) break;
            var k = y.url,
                _ = y.successAnswer,
                P = y.method,
                R = y.sendParam,
                S = this.$form.querySelector('input[data-validate-field="' + h + '"]');
            return this.setterEventListener(S, "keyup", this.handlerKeyup, "remove"), void this.promisesRemote.push(this.validateRemote({
              name: h,
              value: m,
              url: k,
              method: P,
              sendParam: R,
              successAnswer: _
            }));
        }
      }
    },
    clearErrors: function clearErrors() {
      for (var e = document.querySelectorAll(".js-validate-error-label"), t = 0, i = e.length; t < i; ++t) {
        e[t].remove();
      }

      e = document.querySelectorAll(".js-validate-error-field");

      for (var r = 0, n = e.length; r < n; ++r) {
        e[r].classList.remove("js-validate-error-field"), e[r].style.border = "", e[r].style.color = "";
      }
    },
    renderErrors: function renderErrors() {
      var e = this;
      if (this.clearErrors(), this.unlockForm(), this.isValidationSuccess = !1, 0 === Object.keys(this.result).length) return void (this.isValidationSuccess = !0);

      for (var t in this.result) {
        var i = this.result[t].message,
            r = this.$form.querySelectorAll('[data-validate-field="' + t + '"]'),
            n = r[r.length - 1],
            o = document.createElement("div");

        if (o.innerHTML = i, o.className = "js-validate-error-label", o.setAttribute("style", "color: " + this.colorWrong), n.style.border = "1px solid " + this.colorWrong, n.style.color = "" + this.colorWrong, n.classList.add("js-validate-error-field"), "checkbox" === n.type || "radio" === n.type) {
          var s = document.querySelector('label[for="' + n.getAttribute("id") + '"]');
          "label" === n.parentNode.tagName.toLowerCase() ? n.parentNode.parentNode.insertBefore(o, null) : s ? s.parentNode.insertBefore(o, s.nextSibling) : n.parentNode.insertBefore(o, n.nextSibling);
        } else n.parentNode.insertBefore(o, n.nextSibling);
      }

      this.tooltipSelectorWrap.length && (this.state.tooltipsTimer = setTimeout(function () {
        e.hideTooltips();
      }, this.tooltipFadeOutTime));
    },
    hideTooltips: function hideTooltips() {
      var e = this,
          t = document.querySelectorAll(".js-validate-error-label");
      t.forEach(function (t) {
        t.classList.add(e.tooltipFadeOutClass);
      }), this.state.tooltipsTimer = null;
    },
    lockForm: function lockForm() {
      for (var e = this.$form.querySelectorAll("input, textarea, button, select"), t = 0, i = e.length; t < i; ++t) {
        e[t].setAttribute("disabled", "disabled"), e[t].style.pointerEvents = "none", e[t].style.webitFilter = "grayscale(100%)", e[t].style.filter = "grayscale(100%)";
      }
    },
    unlockForm: function unlockForm() {
      for (var e = this.$form.querySelectorAll("input, textarea, button, select"), t = 0, i = e.length; t < i; ++t) {
        e[t].removeAttribute("disabled"), e[t].style.pointerEvents = "", e[t].style.webitFilter = "", e[t].style.filter = "";
      }
    }
  }, e.JustValidate = f;
}(window);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
Waypoints - 4.0.1
Copyright © 2011-2016 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
*/
(function () {
  'use strict';

  var keyCounter = 0;
  var allWaypoints = {};
  /* http://imakewebthings.com/waypoints/api/waypoint */

  function Waypoint(options) {
    if (!options) {
      throw new Error('No options passed to Waypoint constructor');
    }

    if (!options.element) {
      throw new Error('No element option passed to Waypoint constructor');
    }

    if (!options.handler) {
      throw new Error('No handler option passed to Waypoint constructor');
    }

    this.key = 'waypoint-' + keyCounter;
    this.options = Waypoint.Adapter.extend({}, Waypoint.defaults, options);
    this.element = this.options.element;
    this.adapter = new Waypoint.Adapter(this.element);
    this.callback = options.handler;
    this.axis = this.options.horizontal ? 'horizontal' : 'vertical';
    this.enabled = this.options.enabled;
    this.triggerPoint = null;
    this.group = Waypoint.Group.findOrCreate({
      name: this.options.group,
      axis: this.axis
    });
    this.context = Waypoint.Context.findOrCreateByElement(this.options.context);

    if (Waypoint.offsetAliases[this.options.offset]) {
      this.options.offset = Waypoint.offsetAliases[this.options.offset];
    }

    this.group.add(this);
    this.context.add(this);
    allWaypoints[this.key] = this;
    keyCounter += 1;
  }
  /* Private */


  Waypoint.prototype.queueTrigger = function (direction) {
    this.group.queueTrigger(this, direction);
  };
  /* Private */


  Waypoint.prototype.trigger = function (args) {
    if (!this.enabled) {
      return;
    }

    if (this.callback) {
      this.callback.apply(this, args);
    }
  };
  /* Public */

  /* http://imakewebthings.com/waypoints/api/destroy */


  Waypoint.prototype.destroy = function () {
    this.context.remove(this);
    this.group.remove(this);
    delete allWaypoints[this.key];
  };
  /* Public */

  /* http://imakewebthings.com/waypoints/api/disable */


  Waypoint.prototype.disable = function () {
    this.enabled = false;
    return this;
  };
  /* Public */

  /* http://imakewebthings.com/waypoints/api/enable */


  Waypoint.prototype.enable = function () {
    this.context.refresh();
    this.enabled = true;
    return this;
  };
  /* Public */

  /* http://imakewebthings.com/waypoints/api/next */


  Waypoint.prototype.next = function () {
    return this.group.next(this);
  };
  /* Public */

  /* http://imakewebthings.com/waypoints/api/previous */


  Waypoint.prototype.previous = function () {
    return this.group.previous(this);
  };
  /* Private */


  Waypoint.invokeAll = function (method) {
    var allWaypointsArray = [];

    for (var waypointKey in allWaypoints) {
      allWaypointsArray.push(allWaypoints[waypointKey]);
    }

    for (var i = 0, end = allWaypointsArray.length; i < end; i++) {
      allWaypointsArray[i][method]();
    }
  };
  /* Public */

  /* http://imakewebthings.com/waypoints/api/destroy-all */


  Waypoint.destroyAll = function () {
    Waypoint.invokeAll('destroy');
  };
  /* Public */

  /* http://imakewebthings.com/waypoints/api/disable-all */


  Waypoint.disableAll = function () {
    Waypoint.invokeAll('disable');
  };
  /* Public */

  /* http://imakewebthings.com/waypoints/api/enable-all */


  Waypoint.enableAll = function () {
    Waypoint.Context.refreshAll();

    for (var waypointKey in allWaypoints) {
      allWaypoints[waypointKey].enabled = true;
    }

    return this;
  };
  /* Public */

  /* http://imakewebthings.com/waypoints/api/refresh-all */


  Waypoint.refreshAll = function () {
    Waypoint.Context.refreshAll();
  };
  /* Public */

  /* http://imakewebthings.com/waypoints/api/viewport-height */


  Waypoint.viewportHeight = function () {
    return window.innerHeight || document.documentElement.clientHeight;
  };
  /* Public */

  /* http://imakewebthings.com/waypoints/api/viewport-width */


  Waypoint.viewportWidth = function () {
    return document.documentElement.clientWidth;
  };

  Waypoint.adapters = [];
  Waypoint.defaults = {
    context: window,
    continuous: true,
    enabled: true,
    group: 'default',
    horizontal: false,
    offset: 0
  };
  Waypoint.offsetAliases = {
    'bottom-in-view': function bottomInView() {
      return this.context.innerHeight() - this.adapter.outerHeight();
    },
    'right-in-view': function rightInView() {
      return this.context.innerWidth() - this.adapter.outerWidth();
    }
  };
  window.Waypoint = Waypoint;
})();

(function () {
  'use strict';

  function requestAnimationFrameShim(callback) {
    window.setTimeout(callback, 1000 / 60);
  }

  var keyCounter = 0;
  var contexts = {};
  var Waypoint = window.Waypoint;
  var oldWindowLoad = window.onload;
  /* http://imakewebthings.com/waypoints/api/context */

  function Context(element) {
    this.element = element;
    this.Adapter = Waypoint.Adapter;
    this.adapter = new this.Adapter(element);
    this.key = 'waypoint-context-' + keyCounter;
    this.didScroll = false;
    this.didResize = false;
    this.oldScroll = {
      x: this.adapter.scrollLeft(),
      y: this.adapter.scrollTop()
    };
    this.waypoints = {
      vertical: {},
      horizontal: {}
    };
    element.waypointContextKey = this.key;
    contexts[element.waypointContextKey] = this;
    keyCounter += 1;

    if (!Waypoint.windowContext) {
      Waypoint.windowContext = true;
      Waypoint.windowContext = new Context(window);
    }

    this.createThrottledScrollHandler();
    this.createThrottledResizeHandler();
  }
  /* Private */


  Context.prototype.add = function (waypoint) {
    var axis = waypoint.options.horizontal ? 'horizontal' : 'vertical';
    this.waypoints[axis][waypoint.key] = waypoint;
    this.refresh();
  };
  /* Private */


  Context.prototype.checkEmpty = function () {
    var horizontalEmpty = this.Adapter.isEmptyObject(this.waypoints.horizontal);
    var verticalEmpty = this.Adapter.isEmptyObject(this.waypoints.vertical);
    var isWindow = this.element == this.element.window;

    if (horizontalEmpty && verticalEmpty && !isWindow) {
      this.adapter.off('.waypoints');
      delete contexts[this.key];
    }
  };
  /* Private */


  Context.prototype.createThrottledResizeHandler = function () {
    var self = this;

    function resizeHandler() {
      self.handleResize();
      self.didResize = false;
    }

    this.adapter.on('resize.waypoints', function () {
      if (!self.didResize) {
        self.didResize = true;
        Waypoint.requestAnimationFrame(resizeHandler);
      }
    });
  };
  /* Private */


  Context.prototype.createThrottledScrollHandler = function () {
    var self = this;

    function scrollHandler() {
      self.handleScroll();
      self.didScroll = false;
    }

    this.adapter.on('scroll.waypoints', function () {
      if (!self.didScroll || Waypoint.isTouch) {
        self.didScroll = true;
        Waypoint.requestAnimationFrame(scrollHandler);
      }
    });
  };
  /* Private */


  Context.prototype.handleResize = function () {
    Waypoint.Context.refreshAll();
  };
  /* Private */


  Context.prototype.handleScroll = function () {
    var triggeredGroups = {};
    var axes = {
      horizontal: {
        newScroll: this.adapter.scrollLeft(),
        oldScroll: this.oldScroll.x,
        forward: 'right',
        backward: 'left'
      },
      vertical: {
        newScroll: this.adapter.scrollTop(),
        oldScroll: this.oldScroll.y,
        forward: 'down',
        backward: 'up'
      }
    };

    for (var axisKey in axes) {
      var axis = axes[axisKey];
      var isForward = axis.newScroll > axis.oldScroll;
      var direction = isForward ? axis.forward : axis.backward;

      for (var waypointKey in this.waypoints[axisKey]) {
        var waypoint = this.waypoints[axisKey][waypointKey];

        if (waypoint.triggerPoint === null) {
          continue;
        }

        var wasBeforeTriggerPoint = axis.oldScroll < waypoint.triggerPoint;
        var nowAfterTriggerPoint = axis.newScroll >= waypoint.triggerPoint;
        var crossedForward = wasBeforeTriggerPoint && nowAfterTriggerPoint;
        var crossedBackward = !wasBeforeTriggerPoint && !nowAfterTriggerPoint;

        if (crossedForward || crossedBackward) {
          waypoint.queueTrigger(direction);
          triggeredGroups[waypoint.group.id] = waypoint.group;
        }
      }
    }

    for (var groupKey in triggeredGroups) {
      triggeredGroups[groupKey].flushTriggers();
    }

    this.oldScroll = {
      x: axes.horizontal.newScroll,
      y: axes.vertical.newScroll
    };
  };
  /* Private */


  Context.prototype.innerHeight = function () {
    /*eslint-disable eqeqeq */
    if (this.element == this.element.window) {
      return Waypoint.viewportHeight();
    }
    /*eslint-enable eqeqeq */


    return this.adapter.innerHeight();
  };
  /* Private */


  Context.prototype.remove = function (waypoint) {
    delete this.waypoints[waypoint.axis][waypoint.key];
    this.checkEmpty();
  };
  /* Private */


  Context.prototype.innerWidth = function () {
    /*eslint-disable eqeqeq */
    if (this.element == this.element.window) {
      return Waypoint.viewportWidth();
    }
    /*eslint-enable eqeqeq */


    return this.adapter.innerWidth();
  };
  /* Public */

  /* http://imakewebthings.com/waypoints/api/context-destroy */


  Context.prototype.destroy = function () {
    var allWaypoints = [];

    for (var axis in this.waypoints) {
      for (var waypointKey in this.waypoints[axis]) {
        allWaypoints.push(this.waypoints[axis][waypointKey]);
      }
    }

    for (var i = 0, end = allWaypoints.length; i < end; i++) {
      allWaypoints[i].destroy();
    }
  };
  /* Public */

  /* http://imakewebthings.com/waypoints/api/context-refresh */


  Context.prototype.refresh = function () {
    /*eslint-disable eqeqeq */
    var isWindow = this.element == this.element.window;
    /*eslint-enable eqeqeq */

    var contextOffset = isWindow ? undefined : this.adapter.offset();
    var triggeredGroups = {};
    var axes;
    this.handleScroll();
    axes = {
      horizontal: {
        contextOffset: isWindow ? 0 : contextOffset.left,
        contextScroll: isWindow ? 0 : this.oldScroll.x,
        contextDimension: this.innerWidth(),
        oldScroll: this.oldScroll.x,
        forward: 'right',
        backward: 'left',
        offsetProp: 'left'
      },
      vertical: {
        contextOffset: isWindow ? 0 : contextOffset.top,
        contextScroll: isWindow ? 0 : this.oldScroll.y,
        contextDimension: this.innerHeight(),
        oldScroll: this.oldScroll.y,
        forward: 'down',
        backward: 'up',
        offsetProp: 'top'
      }
    };

    for (var axisKey in axes) {
      var axis = axes[axisKey];

      for (var waypointKey in this.waypoints[axisKey]) {
        var waypoint = this.waypoints[axisKey][waypointKey];
        var adjustment = waypoint.options.offset;
        var oldTriggerPoint = waypoint.triggerPoint;
        var elementOffset = 0;
        var freshWaypoint = oldTriggerPoint == null;
        var contextModifier, wasBeforeScroll, nowAfterScroll;
        var triggeredBackward, triggeredForward;

        if (waypoint.element !== waypoint.element.window) {
          elementOffset = waypoint.adapter.offset()[axis.offsetProp];
        }

        if (typeof adjustment === 'function') {
          adjustment = adjustment.apply(waypoint);
        } else if (typeof adjustment === 'string') {
          adjustment = parseFloat(adjustment);

          if (waypoint.options.offset.indexOf('%') > -1) {
            adjustment = Math.ceil(axis.contextDimension * adjustment / 100);
          }
        }

        contextModifier = axis.contextScroll - axis.contextOffset;
        waypoint.triggerPoint = Math.floor(elementOffset + contextModifier - adjustment);
        wasBeforeScroll = oldTriggerPoint < axis.oldScroll;
        nowAfterScroll = waypoint.triggerPoint >= axis.oldScroll;
        triggeredBackward = wasBeforeScroll && nowAfterScroll;
        triggeredForward = !wasBeforeScroll && !nowAfterScroll;

        if (!freshWaypoint && triggeredBackward) {
          waypoint.queueTrigger(axis.backward);
          triggeredGroups[waypoint.group.id] = waypoint.group;
        } else if (!freshWaypoint && triggeredForward) {
          waypoint.queueTrigger(axis.forward);
          triggeredGroups[waypoint.group.id] = waypoint.group;
        } else if (freshWaypoint && axis.oldScroll >= waypoint.triggerPoint) {
          waypoint.queueTrigger(axis.forward);
          triggeredGroups[waypoint.group.id] = waypoint.group;
        }
      }
    }

    Waypoint.requestAnimationFrame(function () {
      for (var groupKey in triggeredGroups) {
        triggeredGroups[groupKey].flushTriggers();
      }
    });
    return this;
  };
  /* Private */


  Context.findOrCreateByElement = function (element) {
    return Context.findByElement(element) || new Context(element);
  };
  /* Private */


  Context.refreshAll = function () {
    for (var contextId in contexts) {
      contexts[contextId].refresh();
    }
  };
  /* Public */

  /* http://imakewebthings.com/waypoints/api/context-find-by-element */


  Context.findByElement = function (element) {
    return contexts[element.waypointContextKey];
  };

  window.onload = function () {
    if (oldWindowLoad) {
      oldWindowLoad();
    }

    Context.refreshAll();
  };

  Waypoint.requestAnimationFrame = function (callback) {
    var requestFn = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || requestAnimationFrameShim;
    requestFn.call(window, callback);
  };

  Waypoint.Context = Context;
})();

(function () {
  'use strict';

  function byTriggerPoint(a, b) {
    return a.triggerPoint - b.triggerPoint;
  }

  function byReverseTriggerPoint(a, b) {
    return b.triggerPoint - a.triggerPoint;
  }

  var groups = {
    vertical: {},
    horizontal: {}
  };
  var Waypoint = window.Waypoint;
  /* http://imakewebthings.com/waypoints/api/group */

  function Group(options) {
    this.name = options.name;
    this.axis = options.axis;
    this.id = this.name + '-' + this.axis;
    this.waypoints = [];
    this.clearTriggerQueues();
    groups[this.axis][this.name] = this;
  }
  /* Private */


  Group.prototype.add = function (waypoint) {
    this.waypoints.push(waypoint);
  };
  /* Private */


  Group.prototype.clearTriggerQueues = function () {
    this.triggerQueues = {
      up: [],
      down: [],
      left: [],
      right: []
    };
  };
  /* Private */


  Group.prototype.flushTriggers = function () {
    for (var direction in this.triggerQueues) {
      var waypoints = this.triggerQueues[direction];
      var reverse = direction === 'up' || direction === 'left';
      waypoints.sort(reverse ? byReverseTriggerPoint : byTriggerPoint);

      for (var i = 0, end = waypoints.length; i < end; i += 1) {
        var waypoint = waypoints[i];

        if (waypoint.options.continuous || i === waypoints.length - 1) {
          waypoint.trigger([direction]);
        }
      }
    }

    this.clearTriggerQueues();
  };
  /* Private */


  Group.prototype.next = function (waypoint) {
    this.waypoints.sort(byTriggerPoint);
    var index = Waypoint.Adapter.inArray(waypoint, this.waypoints);
    var isLast = index === this.waypoints.length - 1;
    return isLast ? null : this.waypoints[index + 1];
  };
  /* Private */


  Group.prototype.previous = function (waypoint) {
    this.waypoints.sort(byTriggerPoint);
    var index = Waypoint.Adapter.inArray(waypoint, this.waypoints);
    return index ? this.waypoints[index - 1] : null;
  };
  /* Private */


  Group.prototype.queueTrigger = function (waypoint, direction) {
    this.triggerQueues[direction].push(waypoint);
  };
  /* Private */


  Group.prototype.remove = function (waypoint) {
    var index = Waypoint.Adapter.inArray(waypoint, this.waypoints);

    if (index > -1) {
      this.waypoints.splice(index, 1);
    }
  };
  /* Public */

  /* http://imakewebthings.com/waypoints/api/first */


  Group.prototype.first = function () {
    return this.waypoints[0];
  };
  /* Public */

  /* http://imakewebthings.com/waypoints/api/last */


  Group.prototype.last = function () {
    return this.waypoints[this.waypoints.length - 1];
  };
  /* Private */


  Group.findOrCreate = function (options) {
    return groups[options.axis][options.name] || new Group(options);
  };

  Waypoint.Group = Group;
})();

(function () {
  'use strict';

  var Waypoint = window.Waypoint;

  function isWindow(element) {
    return element === element.window;
  }

  function getWindow(element) {
    if (isWindow(element)) {
      return element;
    }

    return element.defaultView;
  }

  function NoFrameworkAdapter(element) {
    this.element = element;
    this.handlers = {};
  }

  NoFrameworkAdapter.prototype.innerHeight = function () {
    var isWin = isWindow(this.element);
    return isWin ? this.element.innerHeight : this.element.clientHeight;
  };

  NoFrameworkAdapter.prototype.innerWidth = function () {
    var isWin = isWindow(this.element);
    return isWin ? this.element.innerWidth : this.element.clientWidth;
  };

  NoFrameworkAdapter.prototype.off = function (event, handler) {
    function removeListeners(element, listeners, handler) {
      for (var i = 0, end = listeners.length - 1; i < end; i++) {
        var listener = listeners[i];

        if (!handler || handler === listener) {
          element.removeEventListener(listener);
        }
      }
    }

    var eventParts = event.split('.');
    var eventType = eventParts[0];
    var namespace = eventParts[1];
    var element = this.element;

    if (namespace && this.handlers[namespace] && eventType) {
      removeListeners(element, this.handlers[namespace][eventType], handler);
      this.handlers[namespace][eventType] = [];
    } else if (eventType) {
      for (var ns in this.handlers) {
        removeListeners(element, this.handlers[ns][eventType] || [], handler);
        this.handlers[ns][eventType] = [];
      }
    } else if (namespace && this.handlers[namespace]) {
      for (var type in this.handlers[namespace]) {
        removeListeners(element, this.handlers[namespace][type], handler);
      }

      this.handlers[namespace] = {};
    }
  };
  /* Adapted from jQuery 1.x offset() */


  NoFrameworkAdapter.prototype.offset = function () {
    if (!this.element.ownerDocument) {
      return null;
    }

    var documentElement = this.element.ownerDocument.documentElement;
    var win = getWindow(this.element.ownerDocument);
    var rect = {
      top: 0,
      left: 0
    };

    if (this.element.getBoundingClientRect) {
      rect = this.element.getBoundingClientRect();
    }

    return {
      top: rect.top + win.pageYOffset - documentElement.clientTop,
      left: rect.left + win.pageXOffset - documentElement.clientLeft
    };
  };

  NoFrameworkAdapter.prototype.on = function (event, handler) {
    var eventParts = event.split('.');
    var eventType = eventParts[0];
    var namespace = eventParts[1] || '__default';
    var nsHandlers = this.handlers[namespace] = this.handlers[namespace] || {};
    var nsTypeList = nsHandlers[eventType] = nsHandlers[eventType] || [];
    nsTypeList.push(handler);
    this.element.addEventListener(eventType, handler);
  };

  NoFrameworkAdapter.prototype.outerHeight = function (includeMargin) {
    var height = this.innerHeight();
    var computedStyle;

    if (includeMargin && !isWindow(this.element)) {
      computedStyle = window.getComputedStyle(this.element);
      height += parseInt(computedStyle.marginTop, 10);
      height += parseInt(computedStyle.marginBottom, 10);
    }

    return height;
  };

  NoFrameworkAdapter.prototype.outerWidth = function (includeMargin) {
    var width = this.innerWidth();
    var computedStyle;

    if (includeMargin && !isWindow(this.element)) {
      computedStyle = window.getComputedStyle(this.element);
      width += parseInt(computedStyle.marginLeft, 10);
      width += parseInt(computedStyle.marginRight, 10);
    }

    return width;
  };

  NoFrameworkAdapter.prototype.scrollLeft = function () {
    var win = getWindow(this.element);
    return win ? win.pageXOffset : this.element.scrollLeft;
  };

  NoFrameworkAdapter.prototype.scrollTop = function () {
    var win = getWindow(this.element);
    return win ? win.pageYOffset : this.element.scrollTop;
  };

  NoFrameworkAdapter.extend = function () {
    var args = Array.prototype.slice.call(arguments);

    function merge(target, obj) {
      if (_typeof(target) === 'object' && _typeof(obj) === 'object') {
        for (var key in obj) {
          if (obj.hasOwnProperty(key)) {
            target[key] = obj[key];
          }
        }
      }

      return target;
    }

    for (var i = 1, end = args.length; i < end; i++) {
      merge(args[0], args[i]);
    }

    return args[0];
  };

  NoFrameworkAdapter.inArray = function (element, array, i) {
    return array == null ? -1 : array.indexOf(element, i);
  };

  NoFrameworkAdapter.isEmptyObject = function (obj) {
    /* eslint no-unused-vars: 0 */
    for (var name in obj) {
      return false;
    }

    return true;
  };

  Waypoint.adapters.push({
    name: 'noframework',
    Adapter: NoFrameworkAdapter
  });
  Waypoint.Adapter = NoFrameworkAdapter;
})();
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
  } else if (size === 50) {
    screenDef = 'xxl';
  } else if (size === 60) {
    screenDef = 'massive';
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

function toggleAriaExpanded(element) {
  var attributeKey = 'aria-expanded';
  var currentAriaState = element.getAttribute(attributeKey);

  switch (currentAriaState) {
    case 'true':
      element.setAttribute(attributeKey, 'false');
      break;

    case 'false':
      element.setAttribute(attributeKey, 'true');
      break;

    default:
  }
}