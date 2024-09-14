import * as f from "react";
import { useRef as $a, useEffect as Za } from "react";
import * as Xa from "react-dom";
var Tr = function(e, t) {
  return Tr = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, r) {
    n.__proto__ = r;
  } || function(n, r) {
    for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (n[o] = r[o]);
  }, Tr(e, t);
};
function ze(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  Tr(e, t);
  function n() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
}
var g = function() {
  return g = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
    }
    return t;
  }, g.apply(this, arguments);
};
function Vt(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function Lf(e, t, n, r) {
  var o = arguments.length, i = o < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, n) : r, a;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") i = Reflect.decorate(e, t, n, r);
  else for (var s = e.length - 1; s >= 0; s--) (a = e[s]) && (i = (o < 3 ? a(i) : o > 3 ? a(t, n, i) : a(t, n)) || i);
  return o > 3 && i && Object.defineProperty(t, n, i), i;
}
function ot(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, i; r < o; r++)
    (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
  return e.concat(i || Array.prototype.slice.call(t));
}
var ho = {}, An = void 0;
try {
  An = window;
} catch {
}
function ui(e, t) {
  if (typeof An < "u") {
    var n = An.__packages__ = An.__packages__ || {};
    if (!n[e] || !ho[e]) {
      ho[e] = t;
      var r = n[e] = n[e] || [];
      r.push(t);
    }
  }
}
ui("@fluentui/set-version", "6.0.0");
var Or = "__global__", mo = "__shadow_dom_stylesheet__", li = {
  stylesheetKey: Or,
  inShadow: !1,
  window: void 0,
  __isShadowConfig__: !0
}, Qa = function(e, t, n) {
  return {
    stylesheetKey: e,
    inShadow: t,
    window: n,
    __isShadowConfig__: !0
  };
}, on = function(e) {
  return e && Ja(e) ? e.__isShadowConfig__ === !0 : !1;
};
function Ja(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
function ci(e) {
  for (var t = [], n = 1; n < arguments.length; n++)
    t[n - 1] = arguments[n];
  var r = [], o = [], i = e;
  function a(s) {
    for (var u = 0, l = s; u < l.length; u++) {
      var c = l[u];
      if (c && !on(c))
        if (typeof c == "string")
          if (c.indexOf(" ") >= 0)
            a(c.split(" "));
          else {
            var d = i.argsFromClassName(c);
            d ? a(d) : r.indexOf(c) === -1 && r.push(c);
          }
        else Array.isArray(c) ? a(c) : typeof c == "object" && o.push(c);
    }
  }
  return a(t), {
    classes: r,
    objects: o
  };
}
function di(e) {
  Ht !== e && (Ht = e);
}
function fi() {
  return Ht === void 0 && (Ht = // eslint-disable-next-line no-restricted-globals
  typeof document < "u" && // eslint-disable-next-line no-restricted-globals
  !!document.documentElement && // eslint-disable-next-line no-restricted-globals
  document.documentElement.getAttribute("dir") === "rtl"), Ht;
}
var Ht;
Ht = fi();
function jn() {
  return {
    rtl: fi(),
    shadowConfig: li
  };
}
var Qt = {
  /**
   * Avoids style injection, use getRules() to read the styles.
   */
  none: 0,
  /**
   * Inserts rules using the insertRule api.
   */
  insertNode: 1,
  /**
   * Appends rules using appendChild.
   */
  appendChild: 2
}, po = "__stylesheet__", es = typeof navigator < "u" && /rv:11.0/.test(navigator.userAgent), ct = {};
try {
  ct = window || {};
} catch {
}
var Rt, Be = (
  /** @class */
  function() {
    function e(t, n) {
      var r, o, i, a, s, u;
      this._rules = [], this._preservedRules = [], this._counter = 0, this._keyToClassName = {}, this._onInsertRuleCallbacks = [], this._onResetCallbacks = [], this._classNameToArgs = {}, this._config = g({ injectionMode: typeof document > "u" ? Qt.none : Qt.insertNode, defaultPrefix: "css", namespace: void 0, cspSettings: void 0 }, t), this._classNameToArgs = (r = n == null ? void 0 : n.classNameToArgs) !== null && r !== void 0 ? r : this._classNameToArgs, this._counter = (o = n == null ? void 0 : n.counter) !== null && o !== void 0 ? o : this._counter, this._keyToClassName = (a = (i = this._config.classNameCache) !== null && i !== void 0 ? i : n == null ? void 0 : n.keyToClassName) !== null && a !== void 0 ? a : this._keyToClassName, this._preservedRules = (s = n == null ? void 0 : n.preservedRules) !== null && s !== void 0 ? s : this._preservedRules, this._rules = (u = n == null ? void 0 : n.rules) !== null && u !== void 0 ? u : this._rules;
    }
    return e.getInstance = function(t) {
      if (Rt = ct[po], ct[mo])
        return ct[mo].getInstance(t);
      if (!Rt || Rt._lastStyleElement && Rt._lastStyleElement.ownerDocument !== document) {
        var n = (ct == null ? void 0 : ct.FabricConfig) || {}, r = new e(n.mergeStyles, n.serializedStylesheet);
        Rt = r, ct[po] = r;
      }
      return Rt;
    }, e.prototype.serialize = function() {
      return JSON.stringify({
        classNameToArgs: this._classNameToArgs,
        counter: this._counter,
        keyToClassName: this._keyToClassName,
        preservedRules: this._preservedRules,
        rules: this._rules
      });
    }, e.prototype.setConfig = function(t) {
      this._config = g(g({}, this._config), t);
    }, e.prototype.onReset = function(t) {
      var n = this;
      return this._onResetCallbacks.push(t), function() {
        n._onResetCallbacks = n._onResetCallbacks.filter(function(r) {
          return r !== t;
        });
      };
    }, e.prototype.onInsertRule = function(t) {
      var n = this;
      return this._onInsertRuleCallbacks.push(t), function() {
        n._onInsertRuleCallbacks = n._onInsertRuleCallbacks.filter(function(r) {
          return r !== t;
        });
      };
    }, e.prototype.getClassName = function(t) {
      var n = this._config.namespace, r = t || this._config.defaultPrefix;
      return "".concat(n ? n + "-" : "").concat(r, "-").concat(this._counter++);
    }, e.prototype.cacheClassName = function(t, n, r, o) {
      this._keyToClassName[this._getCacheKey(n)] = t, this._classNameToArgs[t] = {
        args: r,
        rules: o
      };
    }, e.prototype.classNameFromKey = function(t) {
      return this._keyToClassName[this._getCacheKey(t)];
    }, e.prototype.getClassNameCache = function() {
      return this._keyToClassName;
    }, e.prototype.argsFromClassName = function(t) {
      var n = this._classNameToArgs[t];
      return n && n.args;
    }, e.prototype.insertedRulesFromClassName = function(t) {
      var n = this._classNameToArgs[t];
      return n && n.rules;
    }, e.prototype.insertRule = function(t, n, r) {
      r === void 0 && (r = Or);
      var o = this._config.injectionMode, i = o !== Qt.none ? this._getStyleElement() : void 0;
      if (n && this._preservedRules.push(t), i)
        switch (o) {
          case Qt.insertNode:
            this._insertRuleIntoSheet(i.sheet, t);
            break;
          case Qt.appendChild:
            i.appendChild(document.createTextNode(t));
            break;
        }
      else
        this._rules.push(t);
      this._config.onInsertRule && this._config.onInsertRule(t), this._onInsertRuleCallbacks.forEach(function(a) {
        return a({ key: r, sheet: i ? i.sheet : void 0, rule: t });
      });
    }, e.prototype.getRules = function(t) {
      return (t ? this._preservedRules.join("") : "") + this._rules.join("");
    }, e.prototype.reset = function() {
      this._rules = [], this._counter = 0, this._classNameToArgs = {}, this._keyToClassName = {}, this._onResetCallbacks.forEach(function(t) {
        return t();
      });
    }, e.prototype.resetKeys = function() {
      this._keyToClassName = {};
    }, e.prototype._createStyleElement = function() {
      var t, n = ((t = this._config.window) === null || t === void 0 ? void 0 : t.document) || document, r = n.head, o = n.createElement("style"), i = null;
      o.setAttribute("data-merge-styles", "true");
      var a = this._config.cspSettings;
      if (a && a.nonce && o.setAttribute("nonce", a.nonce), this._lastStyleElement)
        i = this._lastStyleElement.nextElementSibling;
      else {
        var s = this._findPlaceholderStyleTag();
        s ? i = s.nextElementSibling : i = r.childNodes[0];
      }
      return r.insertBefore(o, r.contains(i) ? i : null), this._lastStyleElement = o, o;
    }, e.prototype._insertRuleIntoSheet = function(t, n) {
      if (!t)
        return !1;
      try {
        return t.insertRule(n, t.cssRules.length), !0;
      } catch {
      }
      return !1;
    }, e.prototype._getCacheKey = function(t) {
      return t;
    }, e.prototype._getStyleElement = function() {
      var t = this;
      if (!this._styleElement && (this._styleElement = this._createStyleElement(), !es)) {
        var n = this._config.window || window;
        n.requestAnimationFrame(function() {
          t._styleElement = void 0;
        });
      }
      return this._styleElement;
    }, e.prototype._findPlaceholderStyleTag = function() {
      var t = document.head;
      return t ? t.querySelector("style[data-merge-styles]") : null;
    }, e;
  }()
), go = {};
function ts(e, t) {
  var n = e[t];
  n.charAt(0) !== "-" && (e[t] = go[n] = go[n] || n.replace(/([A-Z])/g, "-$1").toLowerCase());
}
var Mn;
function ns() {
  var e;
  if (!Mn) {
    var t = typeof document < "u" ? document : void 0, n = typeof navigator < "u" ? navigator : void 0, r = (e = n == null ? void 0 : n.userAgent) === null || e === void 0 ? void 0 : e.toLowerCase();
    t ? Mn = {
      isWebkit: !!(t && "WebkitAppearance" in t.documentElement.style),
      isMoz: !!(r && r.indexOf("firefox") > -1),
      isOpera: !!(r && r.indexOf("opera") > -1),
      isMs: !!(n && (/rv:11.0/i.test(n.userAgent) || /Edge\/\d./i.test(navigator.userAgent)))
    } : Mn = {
      isWebkit: !0,
      isMoz: !0,
      isOpera: !0,
      isMs: !0
    };
  }
  return Mn;
}
var _o = {
  "user-select": 1
};
function rs(e, t) {
  var n = ns(), r = e[t];
  if (_o[r]) {
    var o = e[t + 1];
    _o[r] && (n.isWebkit && e.push("-webkit-" + r, o), n.isMoz && e.push("-moz-" + r, o), n.isMs && e.push("-ms-" + r, o), n.isOpera && e.push("-o-" + r, o));
  }
}
var os = [
  "column-count",
  "font-weight",
  "flex",
  "flex-grow",
  "flex-shrink",
  "fill-opacity",
  "opacity",
  "order",
  "z-index",
  "zoom"
];
function is(e, t) {
  var n = e[t], r = e[t + 1];
  if (typeof r == "number") {
    var o = os.indexOf(n) > -1, i = n.indexOf("--") > -1, a = o || i ? "" : "px";
    e[t + 1] = "".concat(r).concat(a);
  }
}
var Sn, dt = "left", ft = "right", as = "@noflip", bo = (Sn = {}, Sn[dt] = ft, Sn[ft] = dt, Sn), yo = {
  "w-resize": "e-resize",
  "sw-resize": "se-resize",
  "nw-resize": "ne-resize"
};
function ss(e, t, n) {
  if (e.rtl) {
    var r = t[n];
    if (!r)
      return;
    var o = t[n + 1];
    if (typeof o == "string" && o.indexOf(as) >= 0)
      t[n + 1] = o.replace(/\s*(?:\/\*\s*)?\@noflip\b(?:\s*\*\/)?\s*?/g, "");
    else if (r.indexOf(dt) >= 0)
      t[n] = r.replace(dt, ft);
    else if (r.indexOf(ft) >= 0)
      t[n] = r.replace(ft, dt);
    else if (String(o).indexOf(dt) >= 0)
      t[n + 1] = o.replace(dt, ft);
    else if (String(o).indexOf(ft) >= 0)
      t[n + 1] = o.replace(ft, dt);
    else if (bo[r])
      t[n] = bo[r];
    else if (yo[o])
      t[n + 1] = yo[o];
    else
      switch (r) {
        case "margin":
        case "padding":
          t[n + 1] = ls(o);
          break;
        case "box-shadow":
          t[n + 1] = us(o, 0);
          break;
      }
  }
}
function us(e, t) {
  var n = e.split(" "), r = parseInt(n[t], 10);
  return n[0] = n[0].replace(String(r), String(r * -1)), n.join(" ");
}
function ls(e) {
  if (typeof e == "string") {
    var t = e.split(" ");
    if (t.length === 4)
      return "".concat(t[0], " ").concat(t[3], " ").concat(t[2], " ").concat(t[1]);
  }
  return e;
}
function cs(e) {
  for (var t = [], n = 0, r = 0, o = 0; o < e.length; o++)
    switch (e[o]) {
      case "(":
        r++;
        break;
      case ")":
        r && r--;
        break;
      case "	":
      case " ":
        r || (o > n && t.push(e.substring(n, o)), n = o + 1);
        break;
    }
  return n < e.length && t.push(e.substring(n)), t;
}
var ds = "displayName";
function fs(e) {
  var t = e && e["&"];
  return t ? t.displayName : void 0;
}
var vi = /\:global\((.+?)\)/g;
function vs(e) {
  if (!vi.test(e))
    return e;
  for (var t = [], n = /\:global\((.+?)\)/g, r = null; r = n.exec(e); )
    r[1].indexOf(",") > -1 && t.push([
      r.index,
      r.index + r[0].length,
      // Wrap each of the found selectors in :global()
      r[1].split(",").map(function(o) {
        return ":global(".concat(o.trim(), ")");
      }).join(", ")
    ]);
  return t.reverse().reduce(function(o, i) {
    var a = i[0], s = i[1], u = i[2], l = o.slice(0, a), c = o.slice(s);
    return l + u + c;
  }, e);
}
function hs(e) {
  return e.indexOf(":global(") >= 0 || e.indexOf(":") === 0;
}
function Co(e, t) {
  return e.indexOf(":global(") >= 0 ? e.replace(vi, "$1") : e.indexOf(":host(") === 0 ? e : e.indexOf(":") === 0 ? t + e : e.indexOf("&") < 0 ? t + " " + e : e;
}
function Eo(e, t, n, r, o) {
  t === void 0 && (t = { __order: [] }), n.indexOf("@") === 0 ? (n = n + "{" + e, Kt([r], t, n, o)) : n.indexOf(",") > -1 ? vs(n).split(",").map(function(i) {
    return i.trim();
  }).forEach(function(i) {
    return Kt([r], t, Co(i, e), o);
  }) : Kt([r], t, Co(n, e), o);
}
function Kt(e, t, n, r) {
  t === void 0 && (t = { __order: [] }), n === void 0 && (n = "&");
  var o = t[n];
  o || (o = {}, t[n] = o, t.__order.push(n));
  for (var i = 0, a = e; i < a.length; i++) {
    var s = a[i];
    if (typeof s == "string") {
      var u = r.argsFromClassName(s);
      u && Kt(u, t, n, r);
    } else if (Array.isArray(s))
      Kt(s, t, n, r);
    else
      for (var l in s)
        if (s.hasOwnProperty(l)) {
          var c = s[l];
          if (l === "selectors") {
            var d = s.selectors;
            for (var v in d)
              d.hasOwnProperty(v) && Eo(n, t, v, d[v], r);
          } else typeof c == "object" || hs(l) ? c != null && Eo(n, t, l, c, r) : c !== void 0 && (l === "margin" || l === "padding" ? ms(o, l, c) : o[l] = c);
        }
  }
  return t;
}
function ms(e, t, n) {
  var r = typeof n == "string" ? cs(n) : [n];
  r.length === 0 && r.push(n), r[r.length - 1] === "!important" && (r = r.slice(0, -1).map(function(o) {
    return o + " !important";
  })), e[t + "Top"] = r[0], e[t + "Right"] = r[1] || r[0], e[t + "Bottom"] = r[2] || r[0], e[t + "Left"] = r[3] || r[1] || r[0];
}
function ps(e, t) {
  for (var n = [e.rtl ? "rtl" : "ltr"], r = !1, o = 0, i = t.__order; o < i.length; o++) {
    var a = i[o];
    n.push(a);
    var s = t[a];
    for (var u in s)
      s.hasOwnProperty(u) && s[u] !== void 0 && (r = !0, n.push(u, s[u]));
  }
  return r ? n.join("") : void 0;
}
function hi(e, t) {
  return t <= 0 ? "" : t === 1 ? e : e + hi(e, t - 1);
}
function Hr(e, t) {
  if (!t)
    return "";
  var n = [];
  for (var r in t)
    t.hasOwnProperty(r) && r !== ds && t[r] !== void 0 && n.push(r, t[r]);
  for (var o = 0; o < n.length; o += 2)
    ts(n, o), is(n, o), ss(e, n, o), rs(n, o);
  for (var o = 1; o < n.length; o += 4)
    n.splice(o, 1, ":", n[o], ";");
  return n.join("");
}
function mi(e) {
  for (var t, n = [], r = 1; r < arguments.length; r++)
    n[r - 1] = arguments[r];
  var o = (t = e.stylesheet) !== null && t !== void 0 ? t : Be.getInstance(e.shadowConfig), i = Kt(n, void 0, void 0, o), a = ps(e, i);
  if (a) {
    var s = {
      className: o.classNameFromKey(a),
      key: a,
      args: n
    };
    if (!s.className) {
      s.className = o.getClassName(fs(i));
      for (var u = [], l = 0, c = i.__order; l < c.length; l++) {
        var d = c[l];
        u.push(d, Hr(e, i[d]));
      }
      s.rulesToInsert = u;
    }
    return s;
  }
}
function pi(e, t, n, r) {
  t === void 0 && (t = 1);
  var o = r ?? Be.getInstance(n), i = e.className, a = e.key, s = e.args, u = e.rulesToInsert;
  if (u) {
    for (var l = 0; l < u.length; l += 2) {
      var c = u[l + 1];
      if (c) {
        var d = u[l];
        d = d.replace(/&/g, hi(".".concat(e.className), t));
        var v = "".concat(d, "{").concat(c, "}").concat(d.indexOf("@") === 0 ? "}" : "");
        o.insertRule(v);
      }
    }
    o.cacheClassName(i, a, s, u);
  }
}
function gs(e) {
  for (var t = [], n = 1; n < arguments.length; n++)
    t[n - 1] = arguments[n];
  var r = mi.apply(void 0, ot([e], t, !1));
  return r ? (pi(r, e.specificityMultiplier, e.shadowConfig, e.stylesheet), r.className) : "";
}
function rt() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  return _s(e, jn());
}
function _s(e, t) {
  var n = e instanceof Array ? e : [e], r = t || {}, o = on(n[0]);
  o && (r.shadowConfig = n[0]), r.stylesheet = Be.getInstance(r.shadowConfig);
  var i = ci(r.stylesheet, n), a = i.classes, s = i.objects;
  return s.length && a.push(gs(r, s)), a.join(" ");
}
function jt() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  if (e && e.length === 1 && e[0] && !e[0].subComponentStyles && !on(e[0]))
    return e[0];
  for (var n = {}, r = {}, o = 0, i = e; o < i.length; o++) {
    var a = i[o];
    if (a && !on(a)) {
      for (var s in a)
        if (a.hasOwnProperty(s)) {
          if (s === "subComponentStyles" && a.subComponentStyles !== void 0) {
            var u = a.subComponentStyles;
            for (var l in u)
              u.hasOwnProperty(l) && (r.hasOwnProperty(l) ? r[l].push(u[l]) : r[l] = [u[l]]);
            continue;
          }
          var c = n[s], d = a[s];
          c === void 0 ? n[s] = d : n[s] = ot(ot([], Array.isArray(c) ? c : [c], !0), Array.isArray(d) ? d : [d], !0);
        }
    }
  }
  if (Object.keys(r).length > 0) {
    n.subComponentStyles = {};
    var v = n.subComponentStyles, h = function(p) {
      if (r.hasOwnProperty(p)) {
        var _ = r[p];
        v[p] = function(m) {
          return jt.apply(void 0, _.map(function(b) {
            return typeof b == "function" ? b(m) : b;
          }));
        };
      }
    };
    for (var l in r)
      h(l);
  }
  return n;
}
function gn() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  return gi(e, jn());
}
function gi(e, t) {
  var n = { subComponentStyles: {} }, r = void 0, o;
  on(e[0]) ? (r = e[0], o = e[1]) : o = e[0], r ?? (r = t == null ? void 0 : t.shadowConfig);
  var i = g(g({}, t), { shadowConfig: r });
  if (!o && e.length <= 1)
    return { subComponentStyles: {} };
  var a = Be.getInstance(r);
  i.stylesheet = a;
  var s = jt.apply(void 0, e), u = [];
  for (var l in s)
    if (s.hasOwnProperty(l)) {
      if (l === "subComponentStyles") {
        n.subComponentStyles = s.subComponentStyles || {};
        continue;
      } else if (l === "__shadowConfig__")
        continue;
      var c = s[l], d = ci(a, c), v = d.classes, h = d.objects;
      if (h != null && h.length) {
        var p = mi(i || {}, { displayName: l }, h);
        p && (u.push(p), n[l] = v.concat([p.className]).join(" "));
      } else
        n[l] = v.join(" ");
    }
  for (var _ = 0, m = u; _ < m.length; _++) {
    var p = m[_];
    p && pi(p, t == null ? void 0 : t.specificityMultiplier, r);
  }
  return n;
}
function _i(e) {
  for (var t = [], n = 1; n < arguments.length; n++)
    t[n - 1] = arguments[n];
  for (var r = [], o = 0, i = t; o < i.length; o++) {
    var a = i[o];
    a && r.push(typeof a == "function" ? a(e) : a);
  }
  return r.length === 1 ? r[0] : r.length ? jt.apply(void 0, r) : {};
}
function bi(e) {
  var t = Be.getInstance(), n = Hr(jn(), e), r = t.classNameFromKey(n);
  if (!r) {
    var o = t.getClassName();
    t.insertRule("@font-face{".concat(n, "}"), !0), t.cacheClassName(o, n, [], ["font-face", n]);
  }
}
function Ne(e) {
  var t = Be.getInstance(), n = [];
  for (var r in e)
    e.hasOwnProperty(r) && n.push(r, "{", Hr(jn(), e[r]), "}");
  var o = n.join(""), i = t.classNameFromKey(o);
  if (i)
    return i;
  var a = t.getClassName();
  return t.insertRule("@keyframes ".concat(a, "{").concat(o, "}"), !0), t.cacheClassName(a, o, [], ["keyframes", o]), a;
}
function bs(e) {
  var t = {}, n = function(o) {
    if (e.hasOwnProperty(o)) {
      var i;
      Object.defineProperty(t, o, {
        get: function() {
          return i === void 0 && (i = rt(e[o]).toString()), i;
        },
        enumerable: !0,
        configurable: !0
      });
    }
  };
  for (var r in e)
    n(r);
  return t;
}
function Kr() {
  return (
    // eslint-disable-next-line no-restricted-globals
    typeof window < "u" && !!// eslint-disable-next-line no-restricted-globals, deprecation/deprecation
    (window.document && window.document.createElement)
  );
}
var wr = void 0;
try {
  wr = window;
} catch {
}
function V(e) {
  if (!(!Kr() || typeof wr > "u")) {
    var t = e;
    return t && t.ownerDocument && t.ownerDocument.defaultView ? t.ownerDocument.defaultView : wr;
  }
}
var qn = (
  /** @class */
  function() {
    function e(t, n) {
      this._timeoutIds = null, this._immediateIds = null, this._intervalIds = null, this._animationFrameIds = null, this._isDisposed = !1, this._parent = t || null, this._onErrorHandler = n, this._noop = function() {
      };
    }
    return e.prototype.dispose = function() {
      var t;
      if (this._isDisposed = !0, this._parent = null, this._timeoutIds) {
        for (t in this._timeoutIds)
          this._timeoutIds.hasOwnProperty(t) && this.clearTimeout(parseInt(t, 10));
        this._timeoutIds = null;
      }
      if (this._immediateIds) {
        for (t in this._immediateIds)
          this._immediateIds.hasOwnProperty(t) && this.clearImmediate(parseInt(t, 10));
        this._immediateIds = null;
      }
      if (this._intervalIds) {
        for (t in this._intervalIds)
          this._intervalIds.hasOwnProperty(t) && this.clearInterval(parseInt(t, 10));
        this._intervalIds = null;
      }
      if (this._animationFrameIds) {
        for (t in this._animationFrameIds)
          this._animationFrameIds.hasOwnProperty(t) && this.cancelAnimationFrame(parseInt(t, 10));
        this._animationFrameIds = null;
      }
    }, e.prototype.setTimeout = function(t, n) {
      var r = this, o = 0;
      return this._isDisposed || (this._timeoutIds || (this._timeoutIds = {}), o = setTimeout(function() {
        try {
          r._timeoutIds && delete r._timeoutIds[o], t.apply(r._parent);
        } catch (i) {
          r._logError(i);
        }
      }, n), this._timeoutIds[o] = !0), o;
    }, e.prototype.clearTimeout = function(t) {
      this._timeoutIds && this._timeoutIds[t] && (clearTimeout(t), delete this._timeoutIds[t]);
    }, e.prototype.setImmediate = function(t, n) {
      var r = this, o = 0, i = V(n);
      if (!this._isDisposed) {
        this._immediateIds || (this._immediateIds = {});
        var a = function() {
          try {
            r._immediateIds && delete r._immediateIds[o], t.apply(r._parent);
          } catch (s) {
            r._logError(s);
          }
        };
        o = i.setTimeout(a, 0), this._immediateIds[o] = !0;
      }
      return o;
    }, e.prototype.clearImmediate = function(t, n) {
      var r = V(n);
      this._immediateIds && this._immediateIds[t] && (r.clearTimeout(t), delete this._immediateIds[t]);
    }, e.prototype.setInterval = function(t, n) {
      var r = this, o = 0;
      return this._isDisposed || (this._intervalIds || (this._intervalIds = {}), o = setInterval(function() {
        try {
          t.apply(r._parent);
        } catch (i) {
          r._logError(i);
        }
      }, n), this._intervalIds[o] = !0), o;
    }, e.prototype.clearInterval = function(t) {
      this._intervalIds && this._intervalIds[t] && (clearInterval(t), delete this._intervalIds[t]);
    }, e.prototype.throttle = function(t, n, r) {
      var o = this;
      if (this._isDisposed)
        return this._noop;
      var i = n || 0, a = !0, s = !0, u = 0, l, c, d = null;
      r && typeof r.leading == "boolean" && (a = r.leading), r && typeof r.trailing == "boolean" && (s = r.trailing);
      var v = function(p) {
        var _ = Date.now(), m = _ - u, b = a ? i - m : i;
        return m >= i && (!p || a) ? (u = _, d && (o.clearTimeout(d), d = null), l = t.apply(o._parent, c)) : d === null && s && (d = o.setTimeout(v, b)), l;
      }, h = function() {
        for (var p = [], _ = 0; _ < arguments.length; _++)
          p[_] = arguments[_];
        return c = p, v(!0);
      };
      return h;
    }, e.prototype.debounce = function(t, n, r) {
      var o = this;
      if (this._isDisposed) {
        var i = function() {
        };
        return i.cancel = function() {
        }, i.flush = function() {
          return null;
        }, i.pending = function() {
          return !1;
        }, i;
      }
      var a = n || 0, s = !1, u = !0, l = null, c = 0, d = Date.now(), v, h, p = null;
      r && typeof r.leading == "boolean" && (s = r.leading), r && typeof r.trailing == "boolean" && (u = r.trailing), r && typeof r.maxWait == "number" && !isNaN(r.maxWait) && (l = r.maxWait);
      var _ = function(I) {
        p && (o.clearTimeout(p), p = null), d = I;
      }, m = function(I) {
        _(I), v = t.apply(o._parent, h);
      }, b = function(I) {
        var C = Date.now(), S = !1;
        I && (s && C - c >= a && (S = !0), c = C);
        var T = C - c, D = a - T, j = C - d, q = !1;
        return l !== null && (j >= l && p ? q = !0 : D = Math.min(D, l - j)), T >= a || q || S ? m(C) : (p === null || !I) && u && (p = o.setTimeout(b, D)), v;
      }, E = function() {
        return !!p;
      }, x = function() {
        E() && _(Date.now());
      }, y = function() {
        return E() && m(Date.now()), v;
      }, M = function() {
        for (var I = [], C = 0; C < arguments.length; C++)
          I[C] = arguments[C];
        return h = I, b(!0);
      };
      return M.cancel = x, M.flush = y, M.pending = E, M;
    }, e.prototype.requestAnimationFrame = function(t, n) {
      var r = this, o = 0, i = V(n);
      if (!this._isDisposed) {
        this._animationFrameIds || (this._animationFrameIds = {});
        var a = function() {
          try {
            r._animationFrameIds && delete r._animationFrameIds[o], t.apply(r._parent);
          } catch (s) {
            r._logError(s);
          }
        };
        o = i.requestAnimationFrame ? i.requestAnimationFrame(a) : i.setTimeout(a, 0), this._animationFrameIds[o] = !0;
      }
      return o;
    }, e.prototype.cancelAnimationFrame = function(t, n) {
      var r = V(n);
      this._animationFrameIds && this._animationFrameIds[t] && (r.cancelAnimationFrame ? r.cancelAnimationFrame(t) : r.clearTimeout(t), delete this._animationFrameIds[t]);
    }, e.prototype._logError = function(t) {
      this._onErrorHandler && this._onErrorHandler(t);
    }, e;
  }()
);
function ys(e) {
  return e && !!e._virtual;
}
function Cs(e) {
  var t;
  return e && ys(e) && (t = e._virtual.parent), t;
}
function qe(e, t) {
  var n, r;
  if (t === void 0 && (t = !0), !e)
    return null;
  var o = t && Cs(e);
  return o || (typeof e.assignedElements != "function" && (!((n = e.assignedSlot) === null || n === void 0) && n.parentNode) ? e.assignedSlot : ((r = e.parentNode) === null || r === void 0 ? void 0 : r.nodeType) === 11 ? e.parentNode.host : e.parentNode);
}
function mt(e, t, n) {
  n === void 0 && (n = !0);
  var r = !1;
  if (e && t)
    if (n)
      if (e === t)
        r = !0;
      else
        for (r = !1; t; ) {
          var o = qe(t);
          if (o === e) {
            r = !0;
            break;
          }
          t = o;
        }
    else e.contains && (r = e.contains(t));
  return r;
}
function Wr(e, t, n) {
  return n ?? (n = document), !e || e === n.body ? null : t(e) ? e : Wr(qe(e), t);
}
function Es(e, t, n) {
  var r = Wr(e, function(o) {
    return o.hasAttribute(t);
  }, n);
  return r && r.getAttribute(t);
}
var Dr = "data-portal-element";
function Is(e) {
  e.setAttribute(Dr, "true");
}
function yi(e, t, n) {
  var r = Wr(e, function(o) {
    return t === o || o.hasAttribute(Dr);
  }, n);
  return r !== null && r.hasAttribute(Dr);
}
function xs(e, t) {
  var n = e, r = t;
  n._virtual || (n._virtual = {
    children: []
  });
  var o = n._virtual.parent;
  if (o && o !== t) {
    var i = o._virtual.children.indexOf(n);
    i > -1 && o._virtual.children.splice(i, 1);
  }
  n._virtual.parent = r || void 0, r && (r._virtual || (r._virtual = {
    children: []
  }), r._virtual.children.push(n));
}
function de(e) {
  if (!(!Kr() || typeof document > "u")) {
    var t = e;
    return t && t.ownerDocument ? t.ownerDocument : document;
  }
}
var ks = "data-is-focusable", Ms = "data-is-visible", Ss = "data-focuszone-id", Ts = "data-is-sub-focuszone";
function ws(e, t, n, r) {
  return Me(e, t, !0, !1, !1, n, void 0, void 0, void 0, r);
}
function Ds(e, t, n, r) {
  return He(e, t, !0, !1, !0, n, void 0, void 0, r);
}
function Ps(e, t, n) {
  var r = Me(e, e, !0, !1, !1, !0, void 0, void 0, t, n);
  return r ? (Ns(r), !0) : !1;
}
function He(e, t, n, r, o, i, a, s, u) {
  if (!t || t === e)
    return null;
  var l = Yn(t);
  if (o && l && (i || !(Je(t) || Ur(t)))) {
    var c = t.lastElementChild || u, d = He(e, c, !0, !0, !0, i, a, s, u);
    if (d)
      return d;
  }
  if (n && l && tt(t, s, u))
    return t;
  var v = He(e, t.previousElementSibling, !0, !0, !0, i, a, s, u);
  return v || (r ? null : He(e, t.parentElement, !0, !1, !1, i, a, s, u));
}
function Me(e, t, n, r, o, i, a, s, u, l) {
  if (!t || t === e && o && !a)
    return null;
  var c = u ? Ci : Yn, d = c(t);
  if (n && d && tt(t, s, l))
    return t;
  if (!o && d && (i || !(Je(t) || Ur(t)))) {
    var v = t.firstElementChild || l, h = Me(e, v, !0, !0, !1, i, a, s, u, l);
    if (h)
      return h;
  }
  if (t === e)
    return null;
  var p = Me(e, t.nextElementSibling, !0, !0, !1, i, a, s, u, l);
  return p || (r ? null : Me(e, t.parentElement, !1, !1, !0, i, a, s, u, l));
}
function Yn(e) {
  if (!e || !e.getAttribute)
    return !1;
  var t = e.getAttribute(Ms);
  return t != null ? t === "true" : e.offsetHeight !== 0 || e.offsetParent !== null || // eslint-disable-next-line @typescript-eslint/no-explicit-any
  e.isVisible === !0;
}
function Ci(e, t) {
  var n = t ?? V();
  return !!e && Yn(e) && !e.hidden && n.getComputedStyle(e).visibility !== "hidden";
}
function tt(e, t, n) {
  if (n === void 0 && (n = !0), !e || e.disabled)
    return !1;
  var r = 0, o = null;
  e && e.getAttribute && (o = e.getAttribute("tabIndex"), o && (r = parseInt(o, 10)));
  var i = e.getAttribute ? e.getAttribute(ks) : null, a = o !== null && r >= 0, s = n && e.shadowRoot ? !!e.shadowRoot.delegatesFocus : !1, u = !!e && i !== "false" && (e.tagName === "A" || e.tagName === "BUTTON" || e.tagName === "INPUT" || e.tagName === "TEXTAREA" || e.tagName === "SELECT" || i === "true" || a || s);
  return u;
}
function Je(e) {
  return !!(e && e.getAttribute && e.getAttribute(Ss));
}
function Ur(e) {
  return !!(e && e.getAttribute && e.getAttribute(Ts) === "true");
}
function Bs(e) {
  var t = de(e), n = t && t.activeElement;
  return !!(n && mt(e, n));
}
function Ei(e, t, n) {
  var r = de();
  return Es(e, t, r) !== "true";
}
var Tn = void 0;
function Ns(e) {
  if (e) {
    var t = V(e);
    t && (Tn !== void 0 && t.cancelAnimationFrame(Tn), Tn = t.requestAnimationFrame(function() {
      e && e.focus(), Tn = void 0;
    }));
  }
}
function Rs(e, t) {
  for (var n = e, r = 0, o = t; r < o.length; r++) {
    var i = o[r], a = n.children[Math.min(i, n.children.length - 1)];
    if (!a)
      break;
    n = a;
  }
  return n = tt(n) && Yn(n) ? n : Me(e, n, !0) || He(e, n), n;
}
function As(e, t) {
  for (var n = []; t && e && t !== e; ) {
    var r = qe(t, !0);
    if (r === null)
      return [];
    n.unshift(Array.prototype.indexOf.call(r.children, t)), t = r;
  }
  return n;
}
function Lt(e, t, n, r) {
  return e.addEventListener(t, n, r), function() {
    return e.removeEventListener(t, n, r);
  };
}
function zr(e, t) {
  if (!e || !t)
    return !e && !t;
  for (var n in e)
    if (e.hasOwnProperty(n) && (!t.hasOwnProperty(n) || t[n] !== e[n]))
      return !1;
  for (var n in t)
    if (t.hasOwnProperty(n) && !e.hasOwnProperty(n))
      return !1;
  return !0;
}
function xt(e) {
  for (var t = [], n = 1; n < arguments.length; n++)
    t[n - 1] = arguments[n];
  return Ls.apply(this, [null, e].concat(t));
}
function Ls(e, t) {
  for (var n = [], r = 2; r < arguments.length; r++)
    n[r - 2] = arguments[r];
  t = t || {};
  for (var o = 0, i = n; o < i.length; o++) {
    var a = i[o];
    if (a)
      for (var s in a)
        a.hasOwnProperty(s) && (!e || e(s)) && (t[s] = a[s]);
  }
  return t;
}
var nt = (
  /** @class */
  function() {
    function e(t) {
      this._id = e._uniqueId++, this._parent = t, this._eventRecords = [];
    }
    return e.raise = function(t, n, r, o, i) {
      var a, s = i ?? de();
      if (e._isElement(t)) {
        if (typeof s < "u" && s.createEvent) {
          var u = s.createEvent("HTMLEvents");
          u.initEvent(n, o || !1, !0), xt(u, r), a = t.dispatchEvent(u);
        } else if (typeof s < "u" && s.createEventObject) {
          var l = s.createEventObject(r);
          t.fireEvent("on" + n, l);
        }
      } else
        for (; t && a !== !1; ) {
          var c = t.__events__, d = c ? c[n] : null;
          if (d) {
            for (var v in d)
              if (d.hasOwnProperty(v))
                for (var h = d[v], p = 0; a !== !1 && p < h.length; p++) {
                  var _ = h[p];
                  _.objectCallback && (a = _.objectCallback.call(_.parent, r));
                }
          }
          t = o ? t.parent : null;
        }
      return a;
    }, e.isObserved = function(t, n) {
      var r = t && t.__events__;
      return !!r && !!r[n];
    }, e.isDeclared = function(t, n) {
      var r = t && t.__declaredEvents;
      return !!r && !!r[n];
    }, e.stopPropagation = function(t) {
      t.stopPropagation ? t.stopPropagation() : t.cancelBubble = !0;
    }, e._isElement = function(t) {
      return !!t && (!!t.addEventListener || typeof HTMLElement < "u" && t instanceof HTMLElement);
    }, e.prototype.dispose = function() {
      this._isDisposed || (this._isDisposed = !0, this.off(), this._parent = null);
    }, e.prototype.onAll = function(t, n, r) {
      for (var o in n)
        n.hasOwnProperty(o) && this.on(t, o, n[o], r);
    }, e.prototype.on = function(t, n, r, o) {
      var i = this;
      if (n.indexOf(",") > -1)
        for (var a = n.split(/[ ,]+/), s = 0; s < a.length; s++)
          this.on(t, a[s], r, o);
      else {
        var u = this._parent, l = {
          target: t,
          eventName: n,
          parent: u,
          callback: r,
          options: o
        }, a = t.__events__ = t.__events__ || {};
        if (a[n] = a[n] || {
          count: 0
        }, a[n][this._id] = a[n][this._id] || [], a[n][this._id].push(l), a[n].count++, e._isElement(t)) {
          var c = function() {
            for (var h = [], p = 0; p < arguments.length; p++)
              h[p] = arguments[p];
            if (!i._isDisposed) {
              var _;
              try {
                if (_ = r.apply(u, h), _ === !1 && h[0]) {
                  var m = h[0];
                  m.preventDefault && m.preventDefault(), m.stopPropagation && m.stopPropagation(), m.cancelBubble = !0;
                }
              } catch {
              }
              return _;
            }
          };
          l.elementCallback = c, t.addEventListener ? t.addEventListener(n, c, o) : t.attachEvent && t.attachEvent("on" + n, c);
        } else {
          var d = function() {
            for (var h = [], p = 0; p < arguments.length; p++)
              h[p] = arguments[p];
            if (!i._isDisposed)
              return r.apply(u, h);
          };
          l.objectCallback = d;
        }
        this._eventRecords.push(l);
      }
    }, e.prototype.off = function(t, n, r, o) {
      for (var i = 0; i < this._eventRecords.length; i++) {
        var a = this._eventRecords[i];
        if ((!t || t === a.target) && (!n || n === a.eventName) && (!r || r === a.callback) && (typeof o != "boolean" || o === a.options)) {
          var s = a.target.__events__, u = s[a.eventName], l = u ? u[this._id] : null;
          l && (l.length === 1 || !r ? (u.count -= l.length, delete s[a.eventName][this._id]) : (u.count--, l.splice(l.indexOf(a), 1)), u.count || delete s[a.eventName]), a.elementCallback && (a.target.removeEventListener ? a.target.removeEventListener(a.eventName, a.elementCallback, a.options) : a.target.detachEvent && a.target.detachEvent("on" + a.eventName, a.elementCallback)), this._eventRecords.splice(i--, 1);
        }
      }
    }, e.prototype.raise = function(t, n, r) {
      return e.raise(this._parent, t, n, r);
    }, e.prototype.declare = function(t) {
      var n = this._parent.__declaredEvents = this._parent.__declaredEvents || {};
      if (typeof t == "string")
        n[t] = !0;
      else
        for (var r = 0; r < t.length; r++)
          n[t[r]] = !0;
    }, e._uniqueId = 0, e;
  }()
), dr;
rt({
  overflow: "hidden !important"
});
var Io = "data-is-scrollable";
function Fs(e) {
  if (dr === void 0) {
    var t = de(), n = t.createElement("div");
    n.style.setProperty("width", "100px"), n.style.setProperty("height", "100px"), n.style.setProperty("overflow", "scroll"), n.style.setProperty("position", "absolute"), n.style.setProperty("top", "-9999px"), t.body.appendChild(n), dr = n.offsetWidth - n.clientWidth, t.body.removeChild(n);
  }
  return dr;
}
function Os(e) {
  for (var t = e, n = de(e); t && t !== n.body; ) {
    if (t.getAttribute(Io) === "true")
      return t;
    t = t.parentElement;
  }
  for (t = e; t && t !== n.body; ) {
    if (t.getAttribute(Io) !== "false") {
      var r = getComputedStyle(t), o = r ? r.getPropertyValue("overflow-y") : "";
      if (o && (o === "scroll" || o === "auto"))
        return t;
    }
    t = t.parentElement;
  }
  return (!t || t === n.body) && (t = V(e)), t;
}
function pt(e) {
  console && console.warn && console.warn(e);
}
function Gr(e, t, n, r, o) {
  if (o === !0 && process.env.NODE_ENV !== "production")
    for (var i = 0, a = n; i < a.length; i++) {
      var s = a[i];
      s in t || pt("".concat(e, " property '").concat(s, "' is required when '").concat(r, "' is used.'"));
    }
}
function Ii(e, t, n) {
  if (process.env.NODE_ENV !== "production") {
    for (var r in n)
      if (t && t[r] !== void 0) {
        var o = n[r];
        o && t[o] !== void 0 && pt("".concat(e, " property '").concat(r, "' is mutually exclusive with '").concat(n[r], "'. ") + "Use one or the other.");
      }
  }
}
function $n(e, t, n) {
  if (process.env.NODE_ENV !== "production") {
    for (var r in n)
      if (t && r in t) {
        var o = "".concat(e, " property '").concat(r, "' was used but has been deprecated."), i = n[r];
        i && (o += " Use '".concat(i, "' instead.")), pt(o);
      }
  }
}
(function(e) {
  ze(t, e);
  function t(n, r) {
    var o = e.call(this, n, r) || this;
    return Hs(o, t.prototype, [
      "componentDidMount",
      "shouldComponentUpdate",
      "getSnapshotBeforeUpdate",
      "render",
      "componentDidUpdate",
      "componentWillUnmount"
    ]), o;
  }
  return t.prototype.componentDidUpdate = function(n, r) {
    this._updateComponentRef(n, this.props);
  }, t.prototype.componentDidMount = function() {
    this._setComponentRef(this.props.componentRef, this);
  }, t.prototype.componentWillUnmount = function() {
    if (this._setComponentRef(this.props.componentRef, null), this.__disposables) {
      for (var n = 0, r = this._disposables.length; n < r; n++) {
        var o = this.__disposables[n];
        o.dispose && o.dispose();
      }
      this.__disposables = null;
    }
  }, Object.defineProperty(t.prototype, "className", {
    /**
     * Gets the object's class name.
     */
    get: function() {
      if (!this.__className) {
        var n = /function (.{1,})\(/, r = n.exec(this.constructor.toString());
        this.__className = r && r.length > 1 ? r[1] : "";
      }
      return this.__className;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t.prototype, "_disposables", {
    /**
     * Allows subclasses to push things to this._disposables to be auto disposed.
     */
    get: function() {
      return this.__disposables || (this.__disposables = []), this.__disposables;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t.prototype, "_async", {
    /**
     * Gets the async instance associated with the component, created on demand. The async instance gives
     * subclasses a way to execute setTimeout/setInterval async calls safely, where the callbacks
     * will be cleared/ignored automatically after unmounting. The helpers within the async object also
     * preserve the this pointer so that you don't need to "bind" the callbacks.
     */
    get: function() {
      return this.__async || (this.__async = new qn(this), this._disposables.push(this.__async)), this.__async;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t.prototype, "_events", {
    /**
     * Gets the event group instance assocaited with the component, created on demand. The event instance
     * provides on/off methods for listening to DOM (or regular javascript object) events. The event callbacks
     * will be automatically disconnected after unmounting. The helpers within the events object also
     * preserve the this reference so that you don't need to "bind" the callbacks.
     */
    get: function() {
      return this.__events || (this.__events = new nt(this), this._disposables.push(this.__events)), this.__events;
    },
    enumerable: !1,
    configurable: !0
  }), t.prototype._resolveRef = function(n) {
    var r = this;
    return this.__resolves || (this.__resolves = {}), this.__resolves[n] || (this.__resolves[n] = function(o) {
      return r[n] = o;
    }), this.__resolves[n];
  }, t.prototype._updateComponentRef = function(n, r) {
    r === void 0 && (r = {}), n && r && n.componentRef !== r.componentRef && (this._setComponentRef(n.componentRef, null), this._setComponentRef(r.componentRef, this));
  }, t.prototype._warnDeprecations = function(n) {
    $n(this.className, this.props, n);
  }, t.prototype._warnMutuallyExclusive = function(n) {
    Ii(this.className, this.props, n);
  }, t.prototype._warnConditionallyRequiredProps = function(n, r, o) {
    Gr(this.className, this.props, n, r, o);
  }, t.prototype._setComponentRef = function(n, r) {
    !this._skipComponentRefResolution && n && (typeof n == "function" && n(r), typeof n == "object" && (n.current = r));
  }, t;
})(f.Component);
function Hs(e, t, n) {
  for (var r = 0, o = n.length; r < o; r++)
    Ks(e, t, n[r]);
}
function Ks(e, t, n) {
  var r = e[n], o = t[n];
  (r || o) && (e[n] = function() {
    for (var i = [], a = 0; a < arguments.length; a++)
      i[a] = arguments[a];
    var s;
    return o && (s = o.apply(this, i)), r !== o && (s = r.apply(this, i)), s;
  });
}
function Ws() {
  return null;
}
var fr = "__globalSettings__", Vr = "__callbacks__", Us = 0, xi = (
  /** @class */
  function() {
    function e() {
    }
    return e.getValue = function(t, n) {
      var r = Pr();
      return r[t] === void 0 && (r[t] = typeof n == "function" ? n() : n), r[t];
    }, e.setValue = function(t, n) {
      var r = Pr(), o = r[Vr], i = r[t];
      if (n !== i) {
        r[t] = n;
        var a = {
          oldValue: i,
          value: n,
          key: t
        };
        for (var s in o)
          o.hasOwnProperty(s) && o[s](a);
      }
      return n;
    }, e.addChangeListener = function(t) {
      var n = t.__id__, r = xo();
      n || (n = t.__id__ = String(Us++)), r[n] = t;
    }, e.removeChangeListener = function(t) {
      var n = xo();
      delete n[t.__id__];
    }, e;
  }()
);
function Pr() {
  var e, t = V(), n = t || {};
  return n[fr] || (n[fr] = (e = {}, e[Vr] = {}, e)), n[fr];
}
function xo() {
  var e = Pr();
  return e[Vr];
}
var P = {
  backspace: 8,
  tab: 9,
  enter: 13,
  shift: 16,
  ctrl: 17,
  alt: 18,
  pauseBreak: 19,
  capslock: 20,
  escape: 27,
  space: 32,
  pageUp: 33,
  pageDown: 34,
  end: 35,
  home: 36,
  left: 37,
  up: 38,
  right: 39,
  down: 40,
  insert: 45,
  del: 46,
  zero: 48,
  one: 49,
  two: 50,
  three: 51,
  four: 52,
  five: 53,
  six: 54,
  seven: 55,
  eight: 56,
  nine: 57,
  colon: 58,
  a: 65,
  b: 66,
  c: 67,
  d: 68,
  e: 69,
  f: 70,
  g: 71,
  h: 72,
  i: 73,
  j: 74,
  k: 75,
  l: 76,
  m: 77,
  n: 78,
  o: 79,
  p: 80,
  q: 81,
  r: 82,
  s: 83,
  t: 84,
  u: 85,
  v: 86,
  w: 87,
  x: 88,
  y: 89,
  z: 90,
  leftWindow: 91,
  rightWindow: 92,
  select: 93,
  /* eslint-disable @typescript-eslint/naming-convention */
  zero_numpad: 96,
  one_numpad: 97,
  two_numpad: 98,
  three_numpad: 99,
  four_numpad: 100,
  five_numpad: 101,
  six_numpad: 102,
  seven_numpad: 103,
  eight_numpad: 104,
  nine_numpad: 105,
  /* eslint-enable @typescript-eslint/naming-convention */
  multiply: 106,
  add: 107,
  subtract: 109,
  decimalPoint: 110,
  divide: 111,
  f1: 112,
  f2: 113,
  f3: 114,
  f4: 115,
  f5: 116,
  f6: 117,
  f7: 118,
  f8: 119,
  f9: 120,
  f10: 121,
  f11: 122,
  f12: 123,
  numlock: 144,
  scrollLock: 145,
  semicolon: 186,
  equalSign: 187,
  comma: 188,
  dash: 189,
  period: 190,
  forwardSlash: 191,
  graveAccent: 192,
  openBracket: 219,
  backSlash: 220,
  closeBracket: 221,
  singleQuote: 222
}, Pe = (
  /** @class */
  function() {
    function e(t, n, r, o) {
      t === void 0 && (t = 0), n === void 0 && (n = 0), r === void 0 && (r = 0), o === void 0 && (o = 0), this.top = r, this.bottom = o, this.left = t, this.right = n;
    }
    return Object.defineProperty(e.prototype, "width", {
      /**
       * Calculated automatically by subtracting the right from left
       */
      get: function() {
        return this.right - this.left;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "height", {
      /**
       * Calculated automatically by subtracting the bottom from top.
       */
      get: function() {
        return this.bottom - this.top;
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.equals = function(t) {
      return parseFloat(this.top.toFixed(4)) === parseFloat(t.top.toFixed(4)) && parseFloat(this.bottom.toFixed(4)) === parseFloat(t.bottom.toFixed(4)) && parseFloat(this.left.toFixed(4)) === parseFloat(t.left.toFixed(4)) && parseFloat(this.right.toFixed(4)) === parseFloat(t.right.toFixed(4));
    }, e;
  }()
);
function zs(e) {
  for (var t = [], n = 1; n < arguments.length; n++)
    t[n - 1] = arguments[n];
  return t.length < 2 ? t[0] : function() {
    for (var r = [], o = 0; o < arguments.length; o++)
      r[o] = arguments[o];
    t.forEach(function(i) {
      return i && i.apply(e, r);
    });
  };
}
function _n() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  var n = e.filter(function(r) {
    return r;
  }).join(" ").trim();
  return n === "" ? void 0 : n;
}
function Ff(e, t, n) {
  n === void 0 && (n = 0);
  for (var r = -1, o = n; e && o < e.length; o++)
    if (t(e[o], o)) {
      r = o;
      break;
    }
  return r;
}
function Gs(e, t, n) {
  var r = e.slice();
  return r.splice(t, 0, n), r;
}
function Vs(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var n = 0; n < e.length; n++)
    if (e[n] !== t[n])
      return !1;
  return !0;
}
function ki(e) {
  var t = null;
  try {
    var n = V();
    t = n ? n.sessionStorage.getItem(e) : null;
  } catch {
  }
  return t;
}
function js(e, t) {
  var n;
  try {
    (n = V()) === null || n === void 0 || n.sessionStorage.setItem(e, t);
  } catch {
  }
}
var Mi = "isRTL", et;
function xe(e) {
  if (e === void 0 && (e = {}), e.rtl !== void 0)
    return e.rtl;
  if (et === void 0) {
    var t = ki(Mi);
    t !== null && (et = t === "1", qs(et));
    var n = de();
    et === void 0 && n && (et = (n.body && n.body.getAttribute("dir") || n.documentElement.getAttribute("dir")) === "rtl", di(et));
  }
  return !!et;
}
function qs(e, t) {
  t === void 0 && (t = !1);
  var n = de();
  n && n.documentElement.setAttribute("dir", e ? "rtl" : "ltr"), t && js(Mi, e ? "1" : "0"), et = e, di(et);
}
var Ys = 50, $s = 5, Ln = 0, vr = Be.getInstance();
vr && vr.onReset && vr.onReset(function() {
  return Ln++;
});
var wn = "__retval__";
function gt(e) {
  e === void 0 && (e = {});
  var t = /* @__PURE__ */ new Map(), n = 0, r = 0, o = Ln, i = function(a, s) {
    var u;
    if (s === void 0 && (s = {}), e.useStaticStyles && typeof a == "function" && a.__noStyleOverride__)
      return a(s);
    r++;
    var l = a ? a.__shadowConfig__ : void 0, c = l && l.window ? l.window : "__default__";
    t.has(c) || t.set(c, /* @__PURE__ */ new Map());
    var d = t.get(c), v = s.theme, h = v && v.rtl !== void 0 ? v.rtl : xe(), p = e.disableCaching;
    if (o !== Ln && (o = Ln, t.set(c, /* @__PURE__ */ new Map()), d = t.get(c), n = 0), e.disableCaching || (d = ko(t.get(c), a), d = ko(d, s)), (p || !d[wn]) && (a === void 0 ? d[wn] = {} : d[wn] = gi([
      typeof a == "function" ? a(s) : a
    ], {
      shadowConfig: a.__shadowConfig__,
      rtl: !!h,
      specificityMultiplier: e.useStaticStyles ? $s : void 0
    }), p || n++), n > (e.cacheSize || Ys)) {
      var _ = V();
      !((u = _ == null ? void 0 : _.FabricConfig) === null || u === void 0) && u.enableClassNameCacheFullWarning && (console.warn("Styles are being recalculated too frequently. Cache miss rate is ".concat(n, "/").concat(r, ".")), console.trace()), t.get(c).clear(), n = 0, e.disableCaching = !0;
    }
    return d[wn];
  };
  return i;
}
function hr(e, t) {
  return t = Zs(t), e.has(t) || e.set(t, /* @__PURE__ */ new Map()), e.get(t);
}
function ko(e, t) {
  if (typeof t == "function") {
    var n = t.__cachedInputs__;
    if (n)
      for (var r = 0, o = t.__cachedInputs__; r < o.length; r++) {
        var i = o[r];
        e = hr(e, i);
      }
    else
      e = hr(e, t);
  } else if (typeof t == "object")
    for (var a in t)
      t.hasOwnProperty(a) && (e = hr(e, t[a]));
  return e;
}
function Zs(e) {
  switch (e) {
    case void 0:
      return "__undefined__";
    case null:
      return "__null__";
    default:
      return e;
  }
}
var Mo = !1, Fn = 0, Xs = { empty: !0 }, mr = {}, an = typeof WeakMap > "u" ? null : WeakMap;
function Qs() {
  Fn++;
}
function re(e, t, n) {
  if (t === void 0 && (t = 100), n === void 0 && (n = !1), !an)
    return e;
  if (!Mo) {
    var r = Be.getInstance();
    r && r.onReset && Be.getInstance().onReset(Qs), Mo = !0;
  }
  var o, i = 0, a = Fn;
  return function() {
    for (var u = [], l = 0; l < arguments.length; l++)
      u[l] = arguments[l];
    var c = o;
    (o === void 0 || a !== Fn || t > 0 && i > t) && (o = So(), i = 0, a = Fn), c = o;
    for (var d = 0; d < u.length; d++) {
      var v = Js(u[d]);
      c.map.has(v) || c.map.set(v, So()), c = c.map.get(v);
    }
    return c.hasOwnProperty("value") || (c.value = e.apply(void 0, u), i++), n && (c.value === null || c.value === void 0) && (c.value = e.apply(void 0, u)), c.value;
  };
}
function Wt(e) {
  if (!an)
    return e;
  var t = new an();
  function n(r) {
    if (!r || typeof r != "function" && typeof r != "object")
      return e(r);
    if (t.has(r))
      return t.get(r);
    var o = e(r);
    return t.set(r, o), o;
  }
  return n;
}
function Js(e) {
  if (e) {
    if (typeof e == "object" || typeof e == "function")
      return e;
    mr[e] || (mr[e] = { val: e });
  } else return Xs;
  return mr[e];
}
function So() {
  return {
    map: an ? new an() : null
  };
}
function eu(e) {
  var t = e, n = Wt(function(r) {
    if (e === r)
      throw new Error("Attempted to compose a component with itself.");
    var o = r, i = Wt(function(s) {
      var u = function(l) {
        return f.createElement(o, g({}, l, { defaultRender: s }));
      };
      return u;
    }), a = function(s) {
      var u = s.defaultRender;
      return f.createElement(t, g({}, s, { defaultRender: u ? i(u) : o }));
    };
    return a;
  });
  return n;
}
var tu = Wt(eu);
function De(e, t) {
  return tu(e)(t);
}
function To(e, t) {
  return e[t] !== void 0 && e[t] !== null;
}
function Ke() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  for (var n = [], r = 0, o = e; r < o.length; r++) {
    var i = o[r];
    if (i)
      if (typeof i == "string")
        n.push(i);
      else if (i.hasOwnProperty("toString") && typeof i.toString == "function")
        n.push(i.toString());
      else
        for (var a in i)
          i[a] && n.push(a);
  }
  return n.join(" ");
}
var nu = "customizations", ru = { settings: {}, scopedSettings: {}, inCustomizerContext: !1 }, lt = xi.getValue(nu, {
  settings: {},
  scopedSettings: {},
  inCustomizerContext: !1
}), Dn = [], We = (
  /** @class */
  function() {
    function e() {
    }
    return e.reset = function() {
      lt.settings = {}, lt.scopedSettings = {};
    }, e.applySettings = function(t) {
      lt.settings = g(g({}, lt.settings), t), e._raiseChange();
    }, e.applyScopedSettings = function(t, n) {
      lt.scopedSettings[t] = g(g({}, lt.scopedSettings[t]), n), e._raiseChange();
    }, e.getSettings = function(t, n, r) {
      r === void 0 && (r = ru);
      for (var o = {}, i = n && r.scopedSettings[n] || {}, a = n && lt.scopedSettings[n] || {}, s = 0, u = t; s < u.length; s++) {
        var l = u[s];
        o[l] = i[l] || r.settings[l] || a[l] || lt.settings[l];
      }
      return o;
    }, e.applyBatchedUpdates = function(t, n) {
      e._suppressUpdates = !0;
      try {
        t();
      } catch {
      }
      e._suppressUpdates = !1, n || e._raiseChange();
    }, e.observe = function(t) {
      Dn.push(t);
    }, e.unobserve = function(t) {
      Dn = Dn.filter(function(n) {
        return n !== t;
      });
    }, e._raiseChange = function() {
      e._suppressUpdates || Dn.forEach(function(t) {
        return t();
      });
    }, e;
  }()
), On = f.createContext({
  customizations: {
    inCustomizerContext: !1,
    settings: {},
    scopedSettings: {}
  }
});
function ou(e, t) {
  e === void 0 && (e = {});
  var n = Si(t) ? t : au(t);
  return n(e);
}
function iu(e, t) {
  e === void 0 && (e = {});
  var n = Si(t) ? t : su(t);
  return n(e);
}
function Si(e) {
  return typeof e == "function";
}
function au(e) {
  return function(t) {
    return e ? g(g({}, t), e) : t;
  };
}
function su(e) {
  return e === void 0 && (e = {}), function(t) {
    var n = g({}, t);
    for (var r in e)
      e.hasOwnProperty(r) && (n[r] = g(g({}, t[r]), e[r]));
    return n;
  };
}
function uu(e, t) {
  var n = (t || {}).customizations, r = n === void 0 ? { settings: {}, scopedSettings: {} } : n;
  return {
    customizations: {
      settings: ou(r.settings, e.settings),
      scopedSettings: iu(r.scopedSettings, e.scopedSettings),
      inCustomizerContext: !0
    }
  };
}
var lu = (
  /** @class */
  function(e) {
    ze(t, e);
    function t() {
      var n = e !== null && e.apply(this, arguments) || this;
      return n._onCustomizationChange = function() {
        return n.forceUpdate();
      }, n;
    }
    return t.prototype.componentDidMount = function() {
      We.observe(this._onCustomizationChange);
    }, t.prototype.componentWillUnmount = function() {
      We.unobserve(this._onCustomizationChange);
    }, t.prototype.render = function() {
      var n = this, r = this.props.contextTransform;
      return f.createElement(On.Consumer, null, function(o) {
        var i = uu(n.props, o);
        return r && (i = r(i)), f.createElement(On.Provider, { value: i }, n.props.children);
      });
    }, t;
  }(f.Component)
);
function cu(e, t) {
  for (var n in e)
    e.hasOwnProperty(n) && (t[n] = e[n]);
  return t;
}
var Ti = f.createContext({
  // eslint-disable-next-line no-restricted-globals
  window: typeof window == "object" ? window : void 0
}), Zn = function() {
  return f.useContext(Ti).window;
}, wi = f.createContext(void 0), du = function() {
  return f.useContext(wi);
}, pr = function() {
  return !1;
}, fu = function() {
  return li;
}, vu = function() {
  return /* @__PURE__ */ new Map();
}, gr = function() {
}, hu = f.createContext({
  stylesheets: /* @__PURE__ */ new Map(),
  useAdoptedStylesheetEx: pr,
  useAdoptedStylesheet: pr,
  useShadowConfig: fu,
  useMergeStylesShadowRootContext: gr,
  useHasMergeStylesShadowRootContext: pr,
  useMergeStylesRootStylesheets: vu,
  useWindow: gr,
  useStyled: gr
}), Di = function() {
  var e = f.useContext(hu);
  return {
    useAdoptedStylesheet: e.useAdoptedStylesheet,
    useAdoptedStylesheetEx: e.useAdoptedStylesheetEx,
    useShadowConfig: e.useShadowConfig,
    useMergeStylesShadowRootContext: e.useMergeStylesShadowRootContext,
    useHasMergeStylesShadowRootContext: e.useHasMergeStylesShadowRootContext,
    useMergeStylesRootStylesheets: e.useMergeStylesRootStylesheets,
    useWindow: e.useWindow,
    useStyled: e.useStyled
  };
}, mu = function(e) {
  var t = e.stylesheetKey, n = e.children, r = Di(), o = r.useAdoptedStylesheetEx, i = r.useMergeStylesRootStylesheets, a = r.useWindow, s = du(), u = i(), l = a();
  return o(Or, s, u, l), o(t, s, u, l), n(!!s);
}, pu = re(Qa), gu = re(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function(e, t, n) {
    return g(g(g({}, e), t), { __shadowConfig__: n });
  }
);
function Of(e, t, n) {
  return function(o) {
    var i, a = (i = /** @class */
    function(s) {
      ze(u, s);
      function u(l) {
        var c = s.call(this, l) || this;
        return c._styleCache = {}, c._onSettingChanged = c._onSettingChanged.bind(c), c;
      }
      return u.prototype.componentDidMount = function() {
        We.observe(this._onSettingChanged);
      }, u.prototype.componentWillUnmount = function() {
        We.unobserve(this._onSettingChanged);
      }, u.prototype.render = function() {
        var l = this;
        return f.createElement(mu, { stylesheetKey: e }, function(c) {
          return f.createElement(On.Consumer, null, function(d) {
            var v, h = We.getSettings(t, e, d.customizations), p = (v = l.context.window) !== null && v !== void 0 ? v : V(), _ = pu(e, c, p), m = l.props;
            if (h.styles && typeof h.styles == "function" && (h.styles = h.styles(g(g({}, h), m))), h.styles) {
              if (l._styleCache.default !== h.styles || l._styleCache.component !== m.styles) {
                var b = jt(h.styles, m.styles);
                b.__shadowConfig__ = _, l._styleCache.default = h.styles, l._styleCache.component = m.styles, l._styleCache.merged = b;
              }
              return f.createElement(o, g({}, h, m, { styles: l._styleCache.merged }));
            }
            var E = gu(h.styles, m.styles, _);
            return f.createElement(o, g({}, h, m, { styles: E }));
          });
        });
      }, u.prototype._onSettingChanged = function() {
        this.forceUpdate();
      }, u;
    }(f.Component), i.displayName = "Customized" + e, i.contextType = Ti, i);
    return cu(o, a);
  };
}
function _u(e, t) {
  var n = bu(), r = f.useContext(On).customizations, o = r.inCustomizerContext;
  return f.useEffect(function() {
    return o || We.observe(n), function() {
      o || We.unobserve(n);
    };
  }, [o]), We.getSettings(e, t, r);
}
function bu() {
  var e = f.useState(0), t = e[1];
  return function() {
    return t(function(n) {
      return ++n;
    });
  };
}
function yu(e, t) {
  for (var n in t)
    t.hasOwnProperty(n) && (e[n] = zs(e, e[n], t[n]));
}
var Hn = "__currentId__", Cu = "id__", Kn = V() || {};
Kn[Hn] === void 0 && (Kn[Hn] = 0);
var wo = !1;
function Ze(e) {
  if (!wo) {
    var t = Be.getInstance();
    t && t.onReset && t.onReset(Eu), wo = !0;
  }
  var n = Kn[Hn]++;
  return (e === void 0 ? Cu : e) + n;
}
function Eu(e) {
  e === void 0 && (e = 0), Kn[Hn] = e;
}
var X = function() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  for (var n = {}, r = 0, o = e; r < o.length; r++)
    for (var i = o[r], a = Array.isArray(i) ? i : Object.keys(i), s = 0, u = a; s < u.length; s++) {
      var l = u[s];
      n[l] = 1;
    }
  return n;
}, Iu = X([
  "onCopy",
  "onCut",
  "onPaste",
  "onCompositionEnd",
  "onCompositionStart",
  "onCompositionUpdate",
  "onFocus",
  "onFocusCapture",
  "onBlur",
  "onBlurCapture",
  "onChange",
  "onInput",
  "onSubmit",
  "onLoad",
  "onError",
  "onKeyDown",
  "onKeyDownCapture",
  "onKeyPress",
  "onKeyUp",
  "onAbort",
  "onCanPlay",
  "onCanPlayThrough",
  "onDurationChange",
  "onEmptied",
  "onEncrypted",
  "onEnded",
  "onLoadedData",
  "onLoadedMetadata",
  "onLoadStart",
  "onPause",
  "onPlay",
  "onPlaying",
  "onProgress",
  "onRateChange",
  "onSeeked",
  "onSeeking",
  "onStalled",
  "onSuspend",
  "onTimeUpdate",
  "onVolumeChange",
  "onWaiting",
  "onClick",
  "onClickCapture",
  "onContextMenu",
  "onDoubleClick",
  "onDrag",
  "onDragEnd",
  "onDragEnter",
  "onDragExit",
  "onDragLeave",
  "onDragOver",
  "onDragStart",
  "onDrop",
  "onMouseDown",
  "onMouseDownCapture",
  "onMouseEnter",
  "onMouseLeave",
  "onMouseMove",
  "onMouseOut",
  "onMouseOver",
  "onMouseUp",
  "onMouseUpCapture",
  "onSelect",
  "onTouchCancel",
  "onTouchEnd",
  "onTouchMove",
  "onTouchStart",
  "onScroll",
  "onWheel",
  "onPointerCancel",
  "onPointerDown",
  "onPointerEnter",
  "onPointerLeave",
  "onPointerMove",
  "onPointerOut",
  "onPointerOver",
  "onPointerUp",
  "onGotPointerCapture",
  "onLostPointerCapture"
]), xu = X([
  "accessKey",
  "children",
  "className",
  "contentEditable",
  "dir",
  "draggable",
  "hidden",
  "htmlFor",
  "id",
  "lang",
  "ref",
  "role",
  "style",
  "tabIndex",
  "title",
  "translate",
  "spellCheck",
  "name"
  // global
]), te = X(xu, Iu);
X(te, [
  "form"
  // button, fieldset, input, label, meter, object, output, select, textarea
]);
var ku = X(te, [
  "height",
  "loop",
  "muted",
  "preload",
  "src",
  "width"
  // canvas, embed, iframe, img, input, object, video
]);
X(ku, [
  "poster"
  // video
]);
X(te, [
  "start"
  // ol
]);
X(te, [
  "value"
  // button, input, li, option, meter, progress, param
]);
var Pi = X(te, [
  "download",
  "href",
  "hrefLang",
  "media",
  "rel",
  "target",
  "type"
  // a, button, input, link, menu, object, script, source, style
]), wt = X(te, [
  "autoFocus",
  "disabled",
  "form",
  "formAction",
  "formEncType",
  "formMethod",
  "formNoValidate",
  "formTarget",
  "type",
  "value"
  // button, input, li, option, meter, progress, param,
]), Hf = X(wt, [
  "accept",
  "alt",
  "autoCapitalize",
  "autoComplete",
  "checked",
  "dirname",
  "form",
  "height",
  "inputMode",
  "list",
  "max",
  "maxLength",
  "min",
  "minLength",
  "multiple",
  "pattern",
  "placeholder",
  "readOnly",
  "required",
  "src",
  "step",
  "size",
  "type",
  "value",
  "width"
  // canvas, embed, iframe, img, input, object, video
]);
X(wt, [
  "autoCapitalize",
  "cols",
  "dirname",
  "form",
  "maxLength",
  "minLength",
  "placeholder",
  "readOnly",
  "required",
  "rows",
  "wrap"
  // textarea
]);
X(wt, [
  "form",
  "multiple",
  "required"
  // input, select, textarea
]);
X(te, [
  "selected",
  "value"
  // button, input, li, option, meter, progress, param
]);
X(te, [
  "cellPadding",
  "cellSpacing"
  // table
]);
X(te, [
  "rowSpan",
  "scope"
  // th
]);
X(te, [
  "colSpan",
  "headers",
  "rowSpan",
  "scope"
  // th
]);
X(te, [
  "span"
  // col, colgroup
]);
X(te, [
  "span"
  // col, colgroup
]);
X(te, [
  "acceptCharset",
  "action",
  "encType",
  "encType",
  "method",
  "noValidate",
  "target"
  // form
]);
X(te, [
  "allow",
  "allowFullScreen",
  "allowPaymentRequest",
  "allowTransparency",
  "csp",
  "height",
  "importance",
  "referrerPolicy",
  "sandbox",
  "src",
  "srcDoc",
  "width"
  // canvas, embed, iframe, img, input, object, video,
]);
var Mu = X(te, [
  "alt",
  "crossOrigin",
  "height",
  "src",
  "srcSet",
  "useMap",
  "width"
  // canvas, embed, iframe, img, input, object, video
]), Xn = te;
function _e(e, t, n) {
  for (var r = Array.isArray(t), o = {}, i = Object.keys(e), a = 0, s = i; a < s.length; a++) {
    var u = s[a], l = !r && t[u] || r && t.indexOf(u) >= 0 || u.indexOf("data-") === 0 || u.indexOf("aria-") === 0;
    l && (!n || (n == null ? void 0 : n.indexOf(u)) === -1) && (o[u] = e[u]);
  }
  return o;
}
function Qn(e) {
  yu(e, {
    componentDidMount: Su,
    componentDidUpdate: Tu,
    componentWillUnmount: wu
  });
}
function Su() {
  Wn(this.props.componentRef, this);
}
function Tu(e) {
  e.componentRef !== this.props.componentRef && (Wn(e.componentRef, null), Wn(this.props.componentRef, this));
}
function wu() {
  Wn(this.props.componentRef, null);
}
function Wn(e, t) {
  e && (typeof e == "object" ? e.current = t : typeof e == "function" && e(t));
}
var Fe, Du = (Fe = {}, Fe[P.up] = 1, Fe[P.down] = 1, Fe[P.left] = 1, Fe[P.right] = 1, Fe[P.home] = 1, Fe[P.end] = 1, Fe[P.tab] = 1, Fe[P.pageUp] = 1, Fe[P.pageDown] = 1, Fe);
function Bi(e) {
  return !!Du[e];
}
var K = "ms-Fabric--isFocusVisible", Do = "ms-Fabric--isFocusHidden";
function Po(e, t) {
  e && (e.classList.add(t ? K : Do), e.classList.remove(t ? Do : K));
}
function St(e, t, n) {
  var r;
  n ? n.forEach(function(o) {
    return Po(o.current, e);
  }) : Po((r = V(t)) === null || r === void 0 ? void 0 : r.document.body, e);
}
var Bo = /* @__PURE__ */ new WeakMap(), No = /* @__PURE__ */ new WeakMap();
function Ro(e, t) {
  var n, r = Bo.get(e);
  return r ? n = r + t : n = 1, Bo.set(e, n), n;
}
function Pu(e) {
  var t = No.get(e);
  if (t)
    return t;
  var n = function(a) {
    return Ri(a, e.registeredProviders);
  }, r = function(a) {
    return Ai(a, e.registeredProviders);
  }, o = function(a) {
    return Li(a, e.registeredProviders);
  }, i = function(a) {
    return Fi(a, e.registeredProviders);
  };
  return t = { onMouseDown: n, onPointerDown: r, onKeyDown: o, onKeyUp: i }, No.set(e, t), t;
}
var sn = f.createContext(void 0);
function Bu(e) {
  var t = f.useContext(sn);
  f.useEffect(function() {
    var n, r, o, i, a = V(e == null ? void 0 : e.current);
    if (!(!a || ((n = a.FabricConfig) === null || n === void 0 ? void 0 : n.disableFocusRects) === !0)) {
      var s = a, u, l, c, d;
      if (!((r = t == null ? void 0 : t.providerRef) === null || r === void 0) && r.current && (!((i = (o = t == null ? void 0 : t.providerRef) === null || o === void 0 ? void 0 : o.current) === null || i === void 0) && i.addEventListener)) {
        s = t.providerRef.current;
        var v = (
          /*@__NOINLINE__*/
          Pu(t)
        );
        u = v.onMouseDown, l = v.onPointerDown, c = v.onKeyDown, d = v.onKeyUp;
      } else
        u = Ri, l = Ai, c = Li, d = Fi;
      var h = Ro(s, 1);
      return h <= 1 && (s.addEventListener("mousedown", u, !0), s.addEventListener("pointerdown", l, !0), s.addEventListener("keydown", c, !0), s.addEventListener("keyup", d, !0)), function() {
        var p;
        !a || ((p = a.FabricConfig) === null || p === void 0 ? void 0 : p.disableFocusRects) === !0 || (h = Ro(s, -1), h === 0 && (s.removeEventListener("mousedown", u, !0), s.removeEventListener("pointerdown", l, !0), s.removeEventListener("keydown", c, !0), s.removeEventListener("keyup", d, !0)));
      };
    }
  }, [t, e]);
}
var Ni = function(e) {
  return Bu(e.rootRef), null;
};
function Ri(e, t) {
  St(!1, e.target, t);
}
function Ai(e, t) {
  e.pointerType !== "mouse" && St(!1, e.target, t);
}
function Li(e, t) {
  Bi(e.which) && St(!0, e.target, t);
}
function Fi(e, t) {
  Bi(e.which) && St(!0, e.target, t);
}
var Oi = function(e) {
  var t = e.providerRef, n = e.layerRoot, r = f.useState([])[0], o = f.useContext(sn), i = o !== void 0 && !n, a = f.useMemo(function() {
    return i ? void 0 : {
      providerRef: t,
      registeredProviders: r,
      registerProvider: function(s) {
        r.push(s), o == null || o.registerProvider(s);
      },
      unregisterProvider: function(s) {
        o == null || o.unregisterProvider(s);
        var u = r.indexOf(s);
        u >= 0 && r.splice(u, 1);
      }
    };
  }, [t, r, o, i]);
  return f.useEffect(function() {
    if (a)
      return a.registerProvider(a.providerRef), function() {
        return a.unregisterProvider(a.providerRef);
      };
  }, [a]), a ? f.createElement(sn.Provider, { value: a }, e.children) : f.createElement(f.Fragment, null, e.children);
};
function Nu(e) {
  var t = null;
  try {
    var n = V();
    t = n ? n.localStorage.getItem(e) : null;
  } catch {
  }
  return t;
}
var Et, Ao = "language";
function Ru(e) {
  if (e === void 0 && (e = "sessionStorage"), Et === void 0) {
    var t = de(), n = e === "localStorage" ? Nu(Ao) : e === "sessionStorage" ? ki(Ao) : void 0;
    n && (Et = n), Et === void 0 && t && (Et = t.documentElement.getAttribute("lang")), Et === void 0 && (Et = "en");
  }
  return Et;
}
function Lo(e) {
  for (var t = [], n = 1; n < arguments.length; n++)
    t[n - 1] = arguments[n];
  for (var r = 0, o = t; r < o.length; r++) {
    var i = o[r];
    Hi(e || {}, i);
  }
  return e;
}
function Hi(e, t, n) {
  n === void 0 && (n = []), n.push(t);
  for (var r in t)
    if (t.hasOwnProperty(r) && r !== "__proto__" && r !== "constructor" && r !== "prototype") {
      var o = t[r];
      if (typeof o == "object" && o !== null && !Array.isArray(o)) {
        var i = n.indexOf(o) > -1;
        e[r] = i ? o : Hi(e[r] || {}, o, n);
      } else
        e[r] = o;
    }
  return n.pop(), e;
}
var Fo = function() {
  return !window || !window.navigator || !window.navigator.userAgent ? !1 : /iPad|iPhone|iPod/i.test(window.navigator.userAgent);
}, Au = ["TEMPLATE", "STYLE", "SCRIPT"];
function Lu(e) {
  var t = de(e);
  if (!t)
    return function() {
    };
  for (var n = []; e !== t.body && e.parentElement; ) {
    for (var r = 0, o = e.parentElement.children; r < o.length; r++) {
      var i = o[r], a = i.getAttribute("aria-hidden");
      i !== e && (a == null ? void 0 : a.toLowerCase()) !== "true" && Au.indexOf(i.tagName) === -1 && n.push([i, a]);
    }
    e = e.parentElement;
  }
  return n.forEach(function(s) {
    var u = s[0];
    u.setAttribute("aria-hidden", "true");
  }), function() {
    Fu(n), n = [];
  };
}
function Fu(e) {
  e.forEach(function(t) {
    var n = t[0], r = t[1];
    r ? n.setAttribute("aria-hidden", r) : n.removeAttribute("aria-hidden");
  });
}
var _r;
function Oo(e) {
  var t;
  if (typeof _r > "u" || e) {
    var n = V(), r = (t = n == null ? void 0 : n.navigator) === null || t === void 0 ? void 0 : t.userAgent;
    _r = !!r && r.indexOf("Macintosh") !== -1;
  }
  return !!_r;
}
function Ou(e) {
  var t = Wt(function(n) {
    var r = Wt(function(o) {
      return function(i) {
        return n(i, o);
      };
    });
    return function(o, i) {
      return e(o, i ? r(i) : n);
    };
  });
  return t;
}
var Hu = Wt(Ou);
function Ku(e, t) {
  return Hu(e)(t);
}
var Wu = ["theme", "styles"];
function _t(e, t, n, r, o) {
  r = r || { scope: "", fields: void 0 };
  var i = r.scope, a = r.fields, s = a === void 0 ? Wu : a, u = f.forwardRef(function(c, d) {
    var v = f.useRef(), h = _u(s, i), p = h.styles;
    h.dir;
    var _ = Vt(h, ["styles", "dir"]), m = n ? n(c) : void 0, b = Di().useStyled, E = v.current && v.current.__cachedInputs__ || [], x = c.styles;
    if (!v.current || p !== E[1] || x !== E[2]) {
      var y = function(M) {
        return _i(M, t, p, x);
      };
      y.__cachedInputs__ = [
        t,
        p,
        x
      ], y.__noStyleOverride__ = !p && !x, v.current = y;
    }
    return v.current.__shadowConfig__ = b(i), f.createElement(e, g({ ref: d }, _, m, c, { styles: v.current }));
  });
  u.displayName = "Styled".concat(e.displayName || e.name);
  var l = o ? f.memo(u) : u;
  return u.displayName && (l.displayName = u.displayName), l;
}
var It;
process.env.NODE_ENV !== "production" && (It = {
  valueOnChange: {},
  valueDefaultValue: {},
  controlledToUncontrolled: {},
  uncontrolledToControlled: {}
});
function Uu(e) {
  if (process.env.NODE_ENV !== "production") {
    var t = e.componentId, n = e.componentName, r = e.defaultValueProp, o = e.props, i = e.oldProps, a = e.onChangeProp, s = e.readOnlyProp, u = e.valueProp, l = i ? To(i, u) : void 0, c = To(o, u);
    if (c) {
      var d = !!o[a], v = !!(s && o[s]);
      !(d || v) && !It.valueOnChange[t] && (It.valueOnChange[t] = !0, pt("Warning: You provided a '".concat(String(u), "' prop to a ").concat(String(n), " without an '").concat(String(a), "' handler. ") + "This will render a read-only field. If the field should be mutable use '".concat(String(r), "'. ") + "Otherwise, set '".concat(String(a), "'").concat(s ? " or '".concat(String(s), "'") : "", ".")));
      var h = o[r];
      h != null && !It.valueDefaultValue[t] && (It.valueDefaultValue[t] = !0, pt("Warning: You provided both '".concat(String(u), "' and '").concat(String(r), "' to a ").concat(n, ". ") + "Form fields must be either controlled or uncontrolled (specify either the '".concat(String(u), "' prop, ") + "or the '".concat(String(r), "' prop, but not both). Decide between using a controlled or uncontrolled ") + "".concat(n, " and remove one of these props. More info: https://fb.me/react-controlled-components")));
    }
    if (i && c !== l) {
      var p = l ? "a controlled" : "an uncontrolled", _ = l ? "uncontrolled" : "controlled", m = l ? It.controlledToUncontrolled : It.uncontrolledToControlled;
      m[t] || (m[t] = !0, pt("Warning: A component is changing ".concat(p, " ").concat(n, " to be ").concat(_, ". ") + "".concat(n, "s should not switch from controlled to uncontrolled (or vice versa). ") + "Decide between using controlled or uncontrolled for the lifetime of the component. More info: https://fb.me/react-controlled-components"));
    }
  }
}
function jr(e, t) {
  for (var n = g({}, t), r = 0, o = Object.keys(e); r < o.length; r++) {
    var i = o[r];
    n[i] === void 0 && (n[i] = e[i]);
  }
  return n;
}
var zu = function(e) {
  return function(t) {
    for (var n = 0, r = e.refs; n < r.length; n++) {
      var o = r[n];
      typeof o == "function" ? o(t) : o && (o.current = t);
    }
  };
}, Ki = function(e) {
  var t = {
    refs: []
  };
  return function() {
    for (var n = [], r = 0; r < arguments.length; r++)
      n[r] = arguments[r];
    return (!t.resolver || !Vs(t.refs, n)) && (t.resolver = zu(t)), t.refs = n, t.resolver;
  };
}, un = Kr() ? f.useLayoutEffect : f.useEffect, Gu = "icons", Mt = xi.getValue(Gu, {
  __options: {
    disableWarnings: !1,
    warnOnMissingIcons: !0
  },
  __remapped: {}
}), br = Be.getInstance();
br && br.onReset && br.onReset(function() {
  for (var e in Mt)
    Mt.hasOwnProperty(e) && Mt[e].subset && (Mt[e].subset.className = void 0);
});
var Vu = function(e) {
  return e.toLowerCase();
};
function ju(e) {
  var t = void 0, n = Mt.__options;
  if (e = e ? Vu(e) : "", e = Mt.__remapped[e] || e, e)
    if (t = Mt[e], t) {
      var r = t.subset;
      r && r.fontFace && (r.isRegistered || (bi(r.fontFace), r.isRegistered = !0), r.className || (r.className = rt(r.style, {
        fontFamily: r.fontFace.fontFamily,
        fontWeight: r.fontFace.fontWeight || "normal",
        fontStyle: r.fontFace.fontStyle || "normal"
      })));
    } else
      !n.disableWarnings && n.warnOnMissingIcons && pt('The icon "'.concat(e, '" was used but not registered. See https://github.com/microsoft/fluentui/wiki/Using-icons for more information.'));
  return t;
}
function qu(e, t, n, r, o) {
  o === void 0 && (o = !1);
  var i = g({
    primaryButtonBorder: "transparent",
    errorText: r ? "#F1707B" : "#a4262c",
    messageText: r ? "#F3F2F1" : "#323130",
    messageLink: r ? "#6CB8F6" : "#005A9E",
    messageLinkHovered: r ? "#82C7FF" : "#004578",
    infoIcon: r ? "#C8C6C4" : "#605e5c",
    errorIcon: r ? "#F1707B" : "#A80000",
    blockingIcon: r ? "#442726" : "#FDE7E9",
    warningIcon: r ? "#C8C6C4" : "#797775",
    severeWarningIcon: r ? "#FCE100" : "#D83B01",
    successIcon: r ? "#92C353" : "#107C10",
    infoBackground: r ? "#323130" : "#f3f2f1",
    errorBackground: r ? "#442726" : "#FDE7E9",
    blockingBackground: r ? "#442726" : "#FDE7E9",
    warningBackground: r ? "#433519" : "#FFF4CE",
    severeWarningBackground: r ? "#4F2A0F" : "#FED9CC",
    successBackground: r ? "#393D1B" : "#DFF6DD",
    // deprecated
    warningHighlight: r ? "#fff100" : "#ffb900",
    successText: r ? "#92c353" : "#107C10"
  }, n), a = Wi(e, t, i, r);
  return Yu(a, o);
}
function Wi(e, t, n, r, o) {
  var i = {}, a = e || {}, s = a.white, u = a.black, l = a.themePrimary, c = a.themeDark, d = a.themeDarker, v = a.themeDarkAlt, h = a.themeLighter, p = a.neutralLight, _ = a.neutralLighter, m = a.neutralDark, b = a.neutralQuaternary, E = a.neutralQuaternaryAlt, x = a.neutralPrimary, y = a.neutralSecondary, M = a.neutralSecondaryAlt, I = a.neutralTertiary, C = a.neutralTertiaryAlt, S = a.neutralLighterAlt, T = a.accent;
  return s && (i.bodyBackground = s, i.bodyFrameBackground = s, i.accentButtonText = s, i.buttonBackground = s, i.primaryButtonText = s, i.primaryButtonTextHovered = s, i.primaryButtonTextPressed = s, i.inputBackground = s, i.inputForegroundChecked = s, i.listBackground = s, i.menuBackground = s, i.cardStandoutBackground = s), u && (i.bodyTextChecked = u, i.buttonTextCheckedHovered = u), l && (i.link = l, i.primaryButtonBackground = l, i.inputBackgroundChecked = l, i.inputIcon = l, i.inputFocusBorderAlt = l, i.menuIcon = l, i.menuHeader = l, i.accentButtonBackground = l), c && (i.primaryButtonBackgroundPressed = c, i.inputBackgroundCheckedHovered = c, i.inputIconHovered = c), d && (i.linkHovered = d), v && (i.primaryButtonBackgroundHovered = v), h && (i.inputPlaceholderBackgroundChecked = h), p && (i.bodyBackgroundChecked = p, i.bodyFrameDivider = p, i.bodyDivider = p, i.variantBorder = p, i.buttonBackgroundCheckedHovered = p, i.buttonBackgroundPressed = p, i.listItemBackgroundChecked = p, i.listHeaderBackgroundPressed = p, i.menuItemBackgroundPressed = p, i.menuItemBackgroundChecked = p), _ && (i.bodyBackgroundHovered = _, i.buttonBackgroundHovered = _, i.buttonBackgroundDisabled = _, i.buttonBorderDisabled = _, i.primaryButtonBackgroundDisabled = _, i.disabledBackground = _, i.listItemBackgroundHovered = _, i.listHeaderBackgroundHovered = _, i.menuItemBackgroundHovered = _), b && (i.primaryButtonTextDisabled = b, i.disabledSubtext = b), E && (i.listItemBackgroundCheckedHovered = E), I && (i.disabledBodyText = I, i.variantBorderHovered = (n == null ? void 0 : n.variantBorderHovered) || I, i.buttonTextDisabled = I, i.inputIconDisabled = I, i.disabledText = I), x && (i.bodyText = x, i.actionLink = x, i.buttonText = x, i.inputBorderHovered = x, i.inputText = x, i.listText = x, i.menuItemText = x), S && (i.bodyStandoutBackground = S, i.defaultStateBackground = S), m && (i.actionLinkHovered = m, i.buttonTextHovered = m, i.buttonTextChecked = m, i.buttonTextPressed = m, i.inputTextHovered = m, i.menuItemTextHovered = m), y && (i.bodySubtext = y, i.focusBorder = y, i.inputBorder = y, i.smallInputBorder = y, i.inputPlaceholderText = y), M && (i.buttonBorder = M), C && (i.disabledBodySubtext = C, i.disabledBorder = C, i.buttonBackgroundChecked = C, i.menuDivider = C), T && (i.accentButtonBackground = T), t != null && t.elevation4 && (i.cardShadow = t.elevation4), !r && (t != null && t.elevation8) ? i.cardShadowHovered = t.elevation8 : i.variantBorderHovered && (i.cardShadowHovered = "0 0 1px " + i.variantBorderHovered), i = g(g({}, i), n), i;
}
function Yu(e, t) {
  var n = "";
  return t === !0 && (n = " /* @deprecated */"), e.listTextColor = e.listText + n, e.menuItemBackgroundChecked += n, e.warningHighlight += n, e.warningText = e.messageText + n, e.successText += n, e;
}
function $u(e, t) {
  var n, r, o;
  t === void 0 && (t = {});
  var i = Lo({}, e, t, {
    semanticColors: Wi(t.palette, t.effects, t.semanticColors, t.isInverted === void 0 ? e.isInverted : t.isInverted)
  });
  if (!((n = t.palette) === null || n === void 0) && n.themePrimary && !(!((r = t.palette) === null || r === void 0) && r.accent) && (i.palette.accent = t.palette.themePrimary), t.defaultFontStyle)
    for (var a = 0, s = Object.keys(i.fonts); a < s.length; a++) {
      var u = s[a];
      i.fonts[u] = Lo(i.fonts[u], t.defaultFontStyle, (o = t == null ? void 0 : t.fonts) === null || o === void 0 ? void 0 : o[u]);
    }
  return i;
}
var Ho = {
  themeDarker: "#004578",
  themeDark: "#005a9e",
  themeDarkAlt: "#106ebe",
  themePrimary: "#0078d4",
  themeSecondary: "#2b88d8",
  themeTertiary: "#71afe5",
  themeLight: "#c7e0f4",
  themeLighter: "#deecf9",
  themeLighterAlt: "#eff6fc",
  black: "#000000",
  blackTranslucent40: "rgba(0,0,0,.4)",
  neutralDark: "#201f1e",
  neutralPrimary: "#323130",
  neutralPrimaryAlt: "#3b3a39",
  neutralSecondary: "#605e5c",
  neutralSecondaryAlt: "#8a8886",
  neutralTertiary: "#a19f9d",
  neutralTertiaryAlt: "#c8c6c4",
  neutralQuaternary: "#d2d0ce",
  neutralQuaternaryAlt: "#e1dfdd",
  neutralLight: "#edebe9",
  neutralLighter: "#f3f2f1",
  neutralLighterAlt: "#faf9f8",
  accent: "#0078d4",
  white: "#ffffff",
  whiteTranslucent40: "rgba(255,255,255,.4)",
  yellowDark: "#d29200",
  yellow: "#ffb900",
  yellowLight: "#fff100",
  orange: "#d83b01",
  orangeLight: "#ea4300",
  orangeLighter: "#ff8c00",
  redDark: "#a4262c",
  red: "#e81123",
  magentaDark: "#5c005c",
  magenta: "#b4009e",
  magentaLight: "#e3008c",
  purpleDark: "#32145a",
  purple: "#5c2d91",
  purpleLight: "#b4a0ff",
  blueDark: "#002050",
  blueMid: "#00188f",
  blue: "#0078d4",
  blueLight: "#00bcf2",
  tealDark: "#004b50",
  teal: "#008272",
  tealLight: "#00b294",
  greenDark: "#004b1c",
  green: "#107c10",
  greenLight: "#bad80a"
}, Ft;
(function(e) {
  e.depth0 = "0 0 0 0 transparent", e.depth4 = "0 1.6px 3.6px 0 rgba(0, 0, 0, 0.132), 0 0.3px 0.9px 0 rgba(0, 0, 0, 0.108)", e.depth8 = "0 3.2px 7.2px 0 rgba(0, 0, 0, 0.132), 0 0.6px 1.8px 0 rgba(0, 0, 0, 0.108)", e.depth16 = "0 6.4px 14.4px 0 rgba(0, 0, 0, 0.132), 0 1.2px 3.6px 0 rgba(0, 0, 0, 0.108)", e.depth64 = "0 25.6px 57.6px 0 rgba(0, 0, 0, 0.22), 0 4.8px 14.4px 0 rgba(0, 0, 0, 0.18)";
})(Ft || (Ft = {}));
var Ko = {
  elevation4: Ft.depth4,
  elevation8: Ft.depth8,
  elevation16: Ft.depth16,
  elevation64: Ft.depth64,
  roundedCorner2: "2px",
  roundedCorner4: "4px",
  roundedCorner6: "6px"
}, Zu = {
  s2: "4px",
  s1: "8px",
  m: "16px",
  l1: "20px",
  l2: "32px"
}, z = "cubic-bezier(.1,.9,.2,1)", Te = "cubic-bezier(.1,.25,.75,.9)", Pn = "0.167s", Wo = "0.267s", H = "0.367s", Uo = "0.467s", ie = Ne({
  from: { opacity: 0 },
  to: { opacity: 1 }
}), ae = Ne({
  from: { opacity: 1 },
  to: { opacity: 0, visibility: "hidden" }
}), Xu = bt(-10), Qu = bt(-20), Ju = bt(-40), el = bt(-400), tl = bt(10), nl = bt(20), rl = bt(40), ol = bt(400), il = Jn(10), al = Jn(20), sl = Jn(-10), ul = Jn(-20), ll = yt(10), cl = yt(20), dl = yt(40), fl = yt(400), vl = yt(-10), hl = yt(-20), ml = yt(-40), pl = yt(-400), gl = er(-10), _l = er(-20), bl = er(10), yl = er(20), Cl = Ne({
  from: { transform: "scale3d(.98,.98,1)" },
  to: { transform: "scale3d(1,1,1)" }
}), El = Ne({
  from: { transform: "scale3d(1,1,1)" },
  to: { transform: "scale3d(.98,.98,1)" }
}), Il = Ne({
  from: { transform: "scale3d(1.03,1.03,1)" },
  to: { transform: "scale3d(1,1,1)" }
}), xl = Ne({
  from: { transform: "scale3d(1,1,1)" },
  to: { transform: "scale3d(1.03,1.03,1)" }
}), kl = Ne({
  from: { transform: "rotateZ(0deg)" },
  to: { transform: "rotateZ(90deg)" }
}), Ml = Ne({
  from: { transform: "rotateZ(0deg)" },
  to: { transform: "rotateZ(-90deg)" }
}), Sl = {
  slideRightIn10: N("".concat(ie, ",").concat(Xu), H, z),
  slideRightIn20: N("".concat(ie, ",").concat(Qu), H, z),
  slideRightIn40: N("".concat(ie, ",").concat(Ju), H, z),
  slideRightIn400: N("".concat(ie, ",").concat(el), H, z),
  slideLeftIn10: N("".concat(ie, ",").concat(tl), H, z),
  slideLeftIn20: N("".concat(ie, ",").concat(nl), H, z),
  slideLeftIn40: N("".concat(ie, ",").concat(rl), H, z),
  slideLeftIn400: N("".concat(ie, ",").concat(ol), H, z),
  slideUpIn10: N("".concat(ie, ",").concat(il), H, z),
  slideUpIn20: N("".concat(ie, ",").concat(al), H, z),
  slideDownIn10: N("".concat(ie, ",").concat(sl), H, z),
  slideDownIn20: N("".concat(ie, ",").concat(ul), H, z),
  slideRightOut10: N("".concat(ae, ",").concat(ll), H, z),
  slideRightOut20: N("".concat(ae, ",").concat(cl), H, z),
  slideRightOut40: N("".concat(ae, ",").concat(dl), H, z),
  slideRightOut400: N("".concat(ae, ",").concat(fl), H, z),
  slideLeftOut10: N("".concat(ae, ",").concat(vl), H, z),
  slideLeftOut20: N("".concat(ae, ",").concat(hl), H, z),
  slideLeftOut40: N("".concat(ae, ",").concat(ml), H, z),
  slideLeftOut400: N("".concat(ae, ",").concat(pl), H, z),
  slideUpOut10: N("".concat(ae, ",").concat(gl), H, z),
  slideUpOut20: N("".concat(ae, ",").concat(_l), H, z),
  slideDownOut10: N("".concat(ae, ",").concat(bl), H, z),
  slideDownOut20: N("".concat(ae, ",").concat(yl), H, z),
  scaleUpIn100: N("".concat(ie, ",").concat(Cl), H, z),
  scaleDownIn100: N("".concat(ie, ",").concat(Il), H, z),
  scaleUpOut103: N("".concat(ae, ",").concat(xl), Pn, Te),
  scaleDownOut98: N("".concat(ae, ",").concat(El), Pn, Te),
  fadeIn100: N(ie, Pn, Te),
  fadeIn200: N(ie, Wo, Te),
  fadeIn400: N(ie, H, Te),
  fadeIn500: N(ie, Uo, Te),
  fadeOut100: N(ae, Pn, Te),
  fadeOut200: N(ae, Wo, Te),
  fadeOut400: N(ae, H, Te),
  fadeOut500: N(ae, Uo, Te),
  rotate90deg: N(kl, "0.1s", Te),
  rotateN90deg: N(Ml, "0.1s", Te)
  // expandCollapse 100/200/400, delay 100/200
};
function N(e, t, n) {
  return {
    animationName: e,
    animationDuration: t,
    animationTimingFunction: n,
    animationFillMode: "both"
  };
}
function bt(e) {
  return Ne({
    from: { transform: "translate3d(".concat(e, "px,0,0)"), pointerEvents: "none" },
    to: { transform: "translate3d(0,0,0)", pointerEvents: "auto" }
  });
}
function Jn(e) {
  return Ne({
    from: { transform: "translate3d(0,".concat(e, "px,0)"), pointerEvents: "none" },
    to: { transform: "translate3d(0,0,0)", pointerEvents: "auto" }
  });
}
function yt(e) {
  return Ne({
    from: { transform: "translate3d(0,0,0)" },
    to: { transform: "translate3d(".concat(e, "px,0,0)") }
  });
}
function er(e) {
  return Ne({
    from: { transform: "translate3d(0,0,0)" },
    to: { transform: "translate3d(0,".concat(e, "px,0)") }
  });
}
var $;
(function(e) {
  e.Arabic = "Segoe UI Web (Arabic)", e.Cyrillic = "Segoe UI Web (Cyrillic)", e.EastEuropean = "Segoe UI Web (East European)", e.Greek = "Segoe UI Web (Greek)", e.Hebrew = "Segoe UI Web (Hebrew)", e.Thai = "Leelawadee UI Web", e.Vietnamese = "Segoe UI Web (Vietnamese)", e.WestEuropean = "Segoe UI Web (West European)", e.Selawik = "Selawik Web", e.Armenian = "Segoe UI Web (Armenian)", e.Georgian = "Segoe UI Web (Georgian)";
})($ || ($ = {}));
var L;
(function(e) {
  e.Arabic = "'".concat($.Arabic, "'"), e.ChineseSimplified = "'Microsoft Yahei UI', Verdana, Simsun", e.ChineseTraditional = "'Microsoft Jhenghei UI', Pmingliu", e.Cyrillic = "'".concat($.Cyrillic, "'"), e.EastEuropean = "'".concat($.EastEuropean, "'"), e.Greek = "'".concat($.Greek, "'"), e.Hebrew = "'".concat($.Hebrew, "'"), e.Hindi = "'Nirmala UI'", e.Japanese = "'Yu Gothic UI', 'Meiryo UI', Meiryo, 'MS Pgothic', Osaka", e.Korean = "'Malgun Gothic', Gulim", e.Selawik = "'".concat($.Selawik, "'"), e.Thai = "'Leelawadee UI Web', 'Kmer UI'", e.Vietnamese = "'".concat($.Vietnamese, "'"), e.WestEuropean = "'".concat($.WestEuropean, "'"), e.Armenian = "'".concat($.Armenian, "'"), e.Georgian = "'".concat($.Georgian, "'");
})(L || (L = {}));
var me;
(function(e) {
  e.size10 = "10px", e.size12 = "12px", e.size14 = "14px", e.size16 = "16px", e.size18 = "18px", e.size20 = "20px", e.size24 = "24px", e.size28 = "28px", e.size32 = "32px", e.size42 = "42px", e.size68 = "68px", e.mini = "10px", e.xSmall = "10px", e.small = "12px", e.smallPlus = "12px", e.medium = "14px", e.mediumPlus = "16px", e.icon = "16px", e.large = "18px", e.xLarge = "20px", e.xLargePlus = "24px", e.xxLarge = "28px", e.xxLargePlus = "32px", e.superLarge = "42px", e.mega = "68px";
})(me || (me = {}));
var Y;
(function(e) {
  e.light = 100, e.semilight = 300, e.regular = 400, e.semibold = 600, e.bold = 700;
})(Y || (Y = {}));
var vt;
(function(e) {
  e.xSmall = "10px", e.small = "12px", e.medium = "16px", e.large = "20px";
})(vt || (vt = {}));
var Tl = "'Segoe UI', -apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', sans-serif", wl = "'Segoe UI', '".concat($.WestEuropean, "'"), yr = {
  ar: L.Arabic,
  bg: L.Cyrillic,
  cs: L.EastEuropean,
  el: L.Greek,
  et: L.EastEuropean,
  he: L.Hebrew,
  hi: L.Hindi,
  hr: L.EastEuropean,
  hu: L.EastEuropean,
  ja: L.Japanese,
  kk: L.EastEuropean,
  ko: L.Korean,
  lt: L.EastEuropean,
  lv: L.EastEuropean,
  pl: L.EastEuropean,
  ru: L.Cyrillic,
  sk: L.EastEuropean,
  "sr-latn": L.EastEuropean,
  th: L.Thai,
  tr: L.EastEuropean,
  uk: L.Cyrillic,
  vi: L.Vietnamese,
  "zh-hans": L.ChineseSimplified,
  "zh-hant": L.ChineseTraditional,
  hy: L.Armenian,
  ka: L.Georgian
};
function Dl(e) {
  return "".concat(e, ", ").concat(Tl);
}
function Pl(e) {
  for (var t in yr)
    if (yr.hasOwnProperty(t) && e && t.indexOf(e) === 0)
      return yr[t];
  return wl;
}
function ke(e, t, n) {
  return {
    fontFamily: n,
    MozOsxFontSmoothing: "grayscale",
    WebkitFontSmoothing: "antialiased",
    fontSize: e,
    fontWeight: t
  };
}
function Bl(e) {
  var t = Pl(e), n = Dl(t), r = {
    tiny: ke(me.mini, Y.regular, n),
    xSmall: ke(me.xSmall, Y.regular, n),
    small: ke(me.small, Y.regular, n),
    smallPlus: ke(me.smallPlus, Y.regular, n),
    medium: ke(me.medium, Y.regular, n),
    mediumPlus: ke(me.mediumPlus, Y.regular, n),
    large: ke(me.large, Y.regular, n),
    xLarge: ke(me.xLarge, Y.semibold, n),
    xLargePlus: ke(me.xLargePlus, Y.semibold, n),
    xxLarge: ke(me.xxLarge, Y.semibold, n),
    xxLargePlus: ke(me.xxLargePlus, Y.semibold, n),
    superLarge: ke(me.superLarge, Y.semibold, n),
    mega: ke(me.mega, Y.semibold, n)
  };
  return r;
}
var Nl = "https://res-1.cdn.office.net/files/fabric-cdn-prod_20230815.002/assets", Rl = Bl(Ru());
function kt(e, t, n, r) {
  e = "'".concat(e, "'");
  var o = r !== void 0 ? "local('".concat(r, "'),") : "";
  bi({
    fontFamily: e,
    src: o + "url('".concat(t, ".woff2') format('woff2'),") + "url('".concat(t, ".woff') format('woff')"),
    fontWeight: n,
    fontStyle: "normal",
    fontDisplay: "swap"
  });
}
function Oe(e, t, n, r, o) {
  r === void 0 && (r = "segoeui");
  var i = "".concat(e, "/").concat(n, "/").concat(r);
  kt(t, i + "-light", Y.light, o && o + " Light"), kt(t, i + "-semilight", Y.semilight, o && o + " SemiLight"), kt(t, i + "-regular", Y.regular, o), kt(t, i + "-semibold", Y.semibold, o && o + " SemiBold"), kt(t, i + "-bold", Y.bold, o && o + " Bold");
}
function Al(e) {
  if (e) {
    var t = "".concat(e, "/fonts");
    Oe(t, $.Thai, "leelawadeeui-thai", "leelawadeeui"), Oe(t, $.Arabic, "segoeui-arabic"), Oe(t, $.Cyrillic, "segoeui-cyrillic"), Oe(t, $.EastEuropean, "segoeui-easteuropean"), Oe(t, $.Greek, "segoeui-greek"), Oe(t, $.Hebrew, "segoeui-hebrew"), Oe(t, $.Vietnamese, "segoeui-vietnamese"), Oe(t, $.WestEuropean, "segoeui-westeuropean", "segoeui", "Segoe UI"), Oe(t, L.Selawik, "selawik", "selawik"), Oe(t, $.Armenian, "segoeui-armenian"), Oe(t, $.Georgian, "segoeui-georgian"), kt("Leelawadee UI Web", "".concat(t, "/leelawadeeui-thai/leelawadeeui-semilight"), Y.light), kt("Leelawadee UI Web", "".concat(t, "/leelawadeeui-thai/leelawadeeui-bold"), Y.semibold);
  }
}
function Ll() {
  var e, t, n = (e = V()) === null || e === void 0 ? void 0 : e.FabricConfig;
  return (t = n == null ? void 0 : n.fontBaseUrl) !== null && t !== void 0 ? t : Nl;
}
Al(Ll());
function bn(e, t) {
  e === void 0 && (e = {}), t === void 0 && (t = !1);
  var n = !!e.isInverted, r = {
    palette: Ho,
    effects: Ko,
    fonts: Rl,
    spacing: Zu,
    isInverted: n,
    disableGlobalClassNames: !1,
    semanticColors: qu(Ho, Ko, void 0, n, t),
    rtl: void 0
  };
  return $u(r, e);
}
var G = "@media screen and (-ms-high-contrast: active), screen and (forced-colors: active)", Fl = 640, Ui = Fl - 1;
function zi(e, t) {
  var n = " and (min-width: ".concat(e, "px)"), r = " and (max-width: ".concat(t, "px)");
  return "@media only screen".concat(n).concat(r);
}
function Qe() {
  return {
    forcedColorAdjust: "none",
    MsHighContrastAdjust: "none"
  };
}
var ln;
(function(e) {
  e.Nav = 1, e.ScrollablePane = 1, e.FocusStyle = 1, e.Coachmark = 1e3, e.Layer = 1e6, e.KeytipLayer = 1000001;
})(ln || (ln = {}));
function Ut(e, t, n, r, o, i, a, s) {
  return typeof t == "number" || !t ? zo(e, {
    inset: t,
    position: n,
    highContrastStyle: r,
    borderColor: o,
    outlineColor: i,
    isFocusedOnly: a,
    borderRadius: s
  }) : zo(e, t);
}
function zo(e, t) {
  var n, r;
  t === void 0 && (t = {});
  var o = t.borderRadius, i = t.inset, a = i === void 0 ? 0 : i, s = t.width, u = s === void 0 ? 1 : s, l = t.position, c = l === void 0 ? "relative" : l, d = t.highContrastStyle, v = t.borderColor, h = v === void 0 ? e.palette.white : v, p = t.outlineColor, _ = p === void 0 ? e.palette.neutralSecondary : p, m = t.isFocusedOnly, b = m === void 0 ? !0 : m, E = t.pointerEvents;
  return {
    // Clear browser-specific focus styles and use 'transparent' as placeholder for focus style.
    outline: "transparent",
    // Requirement because pseudo-element is absolutely positioned.
    position: c,
    selectors: (n = {
      // Clear the focus border in Firefox.
      // Reference: http://stackoverflow.com/a/199319/1436671
      "::-moz-focus-inner": {
        border: "0"
      }
    }, // When the element that uses this mixin is in a :focus state, add a pseudo-element to
    // create a border.
    n[".".concat(K, " &").concat(b ? ":focus" : "", ":after, :host(.").concat(K, ") &").concat(b ? ":focus" : "", ":after")] = {
      content: '""',
      position: "absolute",
      pointerEvents: E,
      left: a + 1,
      top: a + 1,
      bottom: a + 1,
      right: a + 1,
      border: "".concat(u, "px solid ").concat(h),
      outline: "".concat(u, "px solid ").concat(_),
      zIndex: ln.FocusStyle,
      borderRadius: o,
      selectors: (r = {}, r[G] = d, r)
    }, n)
  };
}
function Ol() {
  return {
    selectors: {
      "&::-moz-focus-inner": {
        // Clear the focus border in Firefox. Reference: http://stackoverflow.com/a/199319/1436671
        border: 0
      },
      "&": {
        // Clear browser specific focus styles and use transparent as placeholder for focus style
        outline: "transparent"
      }
    }
  };
}
var Kf = function(e, t, n, r) {
  var o, i, a;
  return {
    borderColor: e,
    selectors: {
      ":after": (o = {
        pointerEvents: "none",
        content: "''",
        position: "absolute",
        left: r,
        top: r,
        bottom: r,
        right: r
      }, o[n] = "2px solid ".concat(e), o.borderRadius = t, o.width = void 0, o.selectors = (i = {}, i[G] = (a = {}, a.borderColor = "Highlight", a), i), o)
    }
  };
}, Gi = {
  position: "absolute",
  width: 1,
  height: 1,
  margin: -1,
  padding: 0,
  border: 0,
  overflow: "hidden",
  whiteSpace: "nowrap"
}, Hl = re(function(e, t) {
  var n = Be.getInstance();
  return t ? Object.keys(e).reduce(function(r, o) {
    return r[o] = n.getClassName(e[o]), r;
  }, {}) : e;
});
function Pt(e, t, n) {
  return Hl(e, t.disableGlobalClassNames);
}
var Ot = function() {
  return Ot = Object.assign || function(e) {
    for (var t, n = 1, r = arguments.length; n < r; n++) {
      t = arguments[n];
      for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
    }
    return e;
  }, Ot.apply(this, arguments);
}, nn = typeof window > "u" ? global : window, Go = nn && nn.CSPSettings && nn.CSPSettings.nonce, Ue = Kl();
function Kl() {
  var e = nn.__themeState__ || {
    theme: void 0,
    lastStyleElement: void 0,
    registeredStyles: []
  };
  return e.runState || (e = Ot(Ot({}, e), { perf: {
    count: 0,
    duration: 0
  }, runState: {
    flushTimer: 0,
    mode: 0,
    buffer: []
  } })), e.registeredThemableStyles || (e = Ot(Ot({}, e), { registeredThemableStyles: [] })), nn.__themeState__ = e, e;
}
function Wl(e, t) {
  Ue.loadStyles ? Ue.loadStyles(Vi(e).styleString, e) : jl(e);
}
function Ul(e) {
  Ue.theme = e, Vl();
}
function zl(e) {
  Gl(Ue.registeredThemableStyles), Ue.registeredThemableStyles = [];
}
function Gl(e) {
  e.forEach(function(t) {
    var n = t && t.styleElement;
    n && n.parentElement && n.parentElement.removeChild(n);
  });
}
function Vl() {
  if (Ue.theme) {
    for (var e = [], t = 0, n = Ue.registeredThemableStyles; t < n.length; t++) {
      var r = n[t];
      e.push(r.themableStyle);
    }
    e.length > 0 && (zl(), Wl([].concat.apply([], e)));
  }
}
function Vi(e) {
  var t = Ue.theme, n = !1, r = (e || []).map(function(o) {
    var i = o.theme;
    if (i) {
      n = !0;
      var a = t ? t[i] : void 0, s = o.defaultValue || "inherit";
      return t && !a && console && !(i in t) && typeof DEBUG < "u" && DEBUG && console.warn('Theming value not provided for "'.concat(i, '". Falling back to "').concat(s, '".')), a || s;
    } else
      return o.rawString;
  });
  return {
    styleString: r.join(""),
    themable: n
  };
}
function jl(e) {
  if (!(typeof document > "u")) {
    var t = document.getElementsByTagName("head")[0], n = document.createElement("style"), r = Vi(e), o = r.styleString, i = r.themable;
    n.setAttribute("data-load-themed-styles", "true"), Go && n.setAttribute("nonce", Go), n.appendChild(document.createTextNode(o)), Ue.perf.count++, t.appendChild(n);
    var a = document.createEvent("HTMLEvents");
    a.initEvent(
      "styleinsert",
      !0,
      !1
      /* cancelable */
    ), a.args = {
      newStyle: n
    }, document.dispatchEvent(a);
    var s = {
      styleElement: n,
      themableStyle: e
    };
    i ? Ue.registeredThemableStyles.push(s) : Ue.registeredStyles.push(s);
  }
}
var we = bn({}), ql = [], Br = "theme";
function ji() {
  var e, t, n, r = V();
  !((t = r == null ? void 0 : r.FabricConfig) === null || t === void 0) && t.legacyTheme ? $l(r.FabricConfig.legacyTheme) : We.getSettings([Br]).theme || (!((n = r == null ? void 0 : r.FabricConfig) === null || n === void 0) && n.theme && (we = bn(r.FabricConfig.theme)), We.applySettings((e = {}, e[Br] = we, e)));
}
ji();
function Yl(e) {
  return e === void 0 && (e = !1), e === !0 && (we = bn({}, e)), we;
}
function $l(e, t) {
  var n;
  return t === void 0 && (t = !1), we = bn(e, t), Ul(g(g(g(g({}, we.palette), we.semanticColors), we.effects), Zl(we))), We.applySettings((n = {}, n[Br] = we, n)), ql.forEach(function(r) {
    try {
      r(we);
    } catch {
    }
  }), we;
}
function Zl(e) {
  for (var t = {}, n = 0, r = Object.keys(e.fonts); n < r.length; n++)
    for (var o = r[n], i = e.fonts[o], a = 0, s = Object.keys(i); a < s.length; a++) {
      var u = s[a], l = o + u.charAt(0).toUpperCase() + u.slice(1), c = i[u];
      u === "fontSize" && typeof c == "number" && (c = c + "px"), t[l] = c;
    }
  return t;
}
var tn = bs(Sl);
ui("@fluentui/style-utilities", "8.10.21");
ji();
var ee = {
  /**
   * Appear above the target element, with the left edges of the callout and target aligning.
   */
  topLeftEdge: 0,
  /**
   * Appear above the target element, with the centers of the callout and target aligning.
   */
  topCenter: 1,
  /**
   * Appear above the target element, with the right edges of the callout and target aligning.
   */
  topRightEdge: 2,
  /**
   * Appear above the target element, aligning with the target element such that the callout tends toward
   * the center of the screen.
   */
  topAutoEdge: 3,
  /**
   * Appear below the target element, with the left edges of the callout and target aligning.
   */
  bottomLeftEdge: 4,
  /**
   * Appear below the target element, with the centers of the callout and target aligning.
   */
  bottomCenter: 5,
  /**
   * Appear below the target element, with the right edges of the callout and target aligning.
   */
  bottomRightEdge: 6,
  /**
   * Appear below the target element, aligning with the target element such that the callout tends toward
   * the center of the screen.
   */
  bottomAutoEdge: 7,
  /**
   * Appear to the left of the target element, with the top edges of the callout and target aligning.
   */
  leftTopEdge: 8,
  /**
   * Appear to the left of the target element, with the centers of the callout and target aligning.
   */
  leftCenter: 9,
  /**
   * Appear to the left of the target element, with the bottom edges of the callout and target aligning.
   */
  leftBottomEdge: 10,
  /**
   * Appear to the right of the target element, with the top edges of the callout and target aligning.
   */
  rightTopEdge: 11,
  /**
   * Appear to the right of the target element, with the centers of the callout and target aligning.
   */
  rightCenter: 12,
  /**
   * Appear to the right of the target element, with the bottom edges of the callout and target aligning.
   */
  rightBottomEdge: 13
}, w;
(function(e) {
  e[e.top = 1] = "top", e[e.bottom = -1] = "bottom", e[e.left = 2] = "left", e[e.right = -2] = "right";
})(w || (w = {}));
var Vo;
(function(e) {
  e[e.top = 0] = "top", e[e.bottom = 1] = "bottom", e[e.start = 2] = "start", e[e.end = 3] = "end";
})(Vo || (Vo = {}));
var le;
function Ee(e, t, n) {
  return {
    targetEdge: e,
    alignmentEdge: t,
    isAuto: n
  };
}
var jo = (le = {}, le[ee.topLeftEdge] = Ee(w.top, w.left), le[ee.topCenter] = Ee(w.top), le[ee.topRightEdge] = Ee(w.top, w.right), le[ee.topAutoEdge] = Ee(w.top, void 0, !0), le[ee.bottomLeftEdge] = Ee(w.bottom, w.left), le[ee.bottomCenter] = Ee(w.bottom), le[ee.bottomRightEdge] = Ee(w.bottom, w.right), le[ee.bottomAutoEdge] = Ee(w.bottom, void 0, !0), le[ee.leftTopEdge] = Ee(w.left, w.top), le[ee.leftCenter] = Ee(w.left), le[ee.leftBottomEdge] = Ee(w.left, w.bottom), le[ee.rightTopEdge] = Ee(w.right, w.top), le[ee.rightCenter] = Ee(w.right), le[ee.rightBottomEdge] = Ee(w.right, w.bottom), le);
function qr(e, t) {
  return !(e.top < t.top || e.bottom > t.bottom || e.left < t.left || e.right > t.right);
}
function Un(e, t) {
  var n = [];
  return e.top < t.top && n.push(w.top), e.bottom > t.bottom && n.push(w.bottom), e.left < t.left && n.push(w.left), e.right > t.right && n.push(w.right), n;
}
function fe(e, t) {
  return e[w[t]];
}
function qo(e, t, n) {
  return e[w[t]] = n, e;
}
function cn(e, t) {
  var n = qt(t);
  return (fe(e, n.positiveEdge) + fe(e, n.negativeEdge)) / 2;
}
function tr(e, t) {
  return e > 0 ? t : t * -1;
}
function Nr(e, t) {
  return tr(e, fe(t, e));
}
function Ye(e, t, n) {
  var r = fe(e, n) - fe(t, n);
  return tr(n, r);
}
function zt(e, t, n, r) {
  r === void 0 && (r = !0);
  var o = fe(e, t) - n, i = qo(e, t, n);
  return r && (i = qo(e, t * -1, fe(e, t * -1) - o)), i;
}
function dn(e, t, n, r) {
  return r === void 0 && (r = 0), zt(e, n, fe(t, n) + tr(n, r));
}
function Xl(e, t, n, r) {
  r === void 0 && (r = 0);
  var o = n * -1, i = tr(o, r);
  return zt(e, n * -1, fe(t, n) + i);
}
function zn(e, t, n) {
  var r = Nr(n, e);
  return r > Nr(n, t);
}
function Ql(e, t) {
  for (var n = Un(e, t), r = 0, o = 0, i = n; o < i.length; o++) {
    var a = i[o];
    r += Math.pow(Ye(e, t, a), 2);
  }
  return r;
}
function Jl(e, t, n, r) {
  return r === void 0 && (r = 200), n !== w.bottom && n !== w.top ? !1 : Ye(e, t, n) >= r;
}
function ec(e, t, n, r, o, i, a) {
  o === void 0 && (o = !1), a === void 0 && (a = 0);
  var s = [
    w.left,
    w.right,
    w.bottom,
    w.top
  ];
  xe() && (s[0] *= -1, s[1] *= -1);
  for (var u = e, l = r.targetEdge, c = r.alignmentEdge, d, v = l, h = c, p = 0; p < 4; p++) {
    if (zn(u, n, l))
      return {
        elementRectangle: u,
        targetEdge: l,
        alignmentEdge: c
      };
    if (o && Jl(t, n, l, i)) {
      switch (l) {
        case w.bottom:
          u.bottom = n.bottom;
          break;
        case w.top:
          u.top = n.top;
          break;
      }
      return {
        elementRectangle: u,
        targetEdge: l,
        alignmentEdge: c,
        forcedInBounds: !0
      };
    } else {
      var _ = Ql(u, n);
      (!d || _ < d) && (d = _, v = l, h = c), s.splice(s.indexOf(l), 1), s.length > 0 && (s.indexOf(l * -1) > -1 ? l = l * -1 : (c = l, l = s.slice(-1)[0]), u = Gn(e, t, { targetEdge: l, alignmentEdge: c }, a));
    }
  }
  return u = Gn(e, t, { targetEdge: v, alignmentEdge: h }, a), {
    elementRectangle: u,
    targetEdge: v,
    alignmentEdge: h
  };
}
function tc(e, t, n, r) {
  var o = e.alignmentEdge, i = e.targetEdge, a = e.elementRectangle, s = o * -1, u = Gn(a, t, { targetEdge: i, alignmentEdge: s }, n, r);
  return {
    elementRectangle: u,
    targetEdge: i,
    alignmentEdge: s
  };
}
function nc(e, t, n, r, o, i, a, s, u) {
  o === void 0 && (o = !1), a === void 0 && (a = 0);
  var l = r.alignmentEdge, c = r.alignTargetEdge, d = {
    elementRectangle: e,
    targetEdge: r.targetEdge,
    alignmentEdge: l
  };
  !s && !u && (d = ec(e, t, n, r, o, i, a));
  var v = Un(d.elementRectangle, n), h = s ? -d.targetEdge : void 0;
  if (v.length > 0)
    if (c)
      if (d.alignmentEdge && v.indexOf(d.alignmentEdge * -1) > -1) {
        var p = tc(d, t, a, u);
        if (qr(p.elementRectangle, n))
          return p;
        d = Cr(Un(p.elementRectangle, n), d, n, h);
      } else
        d = Cr(v, d, n, h);
    else
      d = Cr(v, d, n, h);
  return d;
}
function Cr(e, t, n, r) {
  for (var o = 0, i = e; o < i.length; o++) {
    var a = i[o], s = void 0;
    if (r && r === a * -1)
      s = zt(t.elementRectangle, a, fe(n, a), !1), t.forcedInBounds = !0;
    else {
      s = dn(t.elementRectangle, n, a);
      var u = zn(s, n, a * -1);
      u || (s = zt(s, a * -1, fe(n, a * -1), !1), t.forcedInBounds = !0);
    }
    t.elementRectangle = s;
  }
  return t;
}
function qi(e, t, n) {
  var r = qt(t).positiveEdge, o = cn(e, t), i = o - fe(e, r);
  return zt(e, r, n - i);
}
function Gn(e, t, n, r, o) {
  r === void 0 && (r = 0);
  var i = new Pe(e.left, e.right, e.top, e.bottom), a = n.alignmentEdge, s = n.targetEdge, u = o ? s : s * -1;
  if (i = o ? dn(i, t, s, r) : Xl(i, t, s, r), a)
    i = dn(i, t, a);
  else {
    var l = cn(t, s);
    i = qi(i, u, l);
  }
  return i;
}
function qt(e) {
  return e === w.top || e === w.bottom ? {
    positiveEdge: w.left,
    negativeEdge: w.right
  } : {
    positiveEdge: w.top,
    negativeEdge: w.bottom
  };
}
function Yi(e, t, n) {
  return n && Math.abs(Ye(e, n, t)) > Math.abs(Ye(e, n, t * -1)) ? t * -1 : t;
}
function rc(e, t, n) {
  return n !== void 0 && fe(e, t) === fe(n, t);
}
function oc(e, t, n, r, o, i, a, s) {
  var u = {}, l = nr(t), c = i ? n : n * -1, d = o || qt(n).positiveEdge;
  return (!a || rc(e, bc(d), r)) && (d = Yi(e, d, r)), u[w[c]] = Ye(e, l, c), u[w[d]] = Ye(e, l, d), s && (u[w[c * -1]] = Ye(e, l, c * -1), u[w[d * -1]] = Ye(e, l, d * -1)), u;
}
function ic(e) {
  return Math.sqrt(e * e * 2);
}
function ac(e, t, n) {
  if (e === void 0 && (e = ee.bottomAutoEdge), n)
    return {
      alignmentEdge: n.alignmentEdge,
      isAuto: n.isAuto,
      targetEdge: n.targetEdge
    };
  var r = g({}, jo[e]);
  return xe() ? (r.alignmentEdge && r.alignmentEdge % 2 === 0 && (r.alignmentEdge = r.alignmentEdge * -1), t !== void 0 ? jo[t] : r) : r;
}
function sc(e, t, n, r, o) {
  return e.isAuto && (e.alignmentEdge = $i(e.targetEdge, t, n)), e.alignTargetEdge = o, e;
}
function $i(e, t, n) {
  var r = cn(t, e), o = cn(n, e), i = qt(e), a = i.positiveEdge, s = i.negativeEdge;
  return r <= o ? a : s;
}
function uc(e, t, n, r, o, i, a, s, u) {
  i === void 0 && (i = !1);
  var l = Gn(e, t, r, o, u);
  return qr(l, n) ? {
    elementRectangle: l,
    targetEdge: r.targetEdge,
    alignmentEdge: r.alignmentEdge
  } : nc(l, t, n, r, i, a, o, s, u);
}
function lc(e, t, n) {
  var r = e.targetEdge * -1, o = new Pe(0, e.elementRectangle.width, 0, e.elementRectangle.height), i = {}, a = Yi(e.elementRectangle, e.alignmentEdge ? e.alignmentEdge : qt(r).positiveEdge, n), s = Ye(e.elementRectangle, e.targetRectangle, r), u = s > Math.abs(fe(t, r));
  return i[w[r]] = fe(t, r), i[w[a]] = Ye(t, o, a), {
    elementPosition: g({}, i),
    closestEdge: $i(e.targetEdge, t, o),
    targetEdge: r,
    hideBeak: !u
  };
}
function cc(e, t) {
  var n = t.targetRectangle, r = qt(t.targetEdge), o = r.positiveEdge, i = r.negativeEdge, a = cn(n, t.targetEdge), s = new Pe(e / 2, t.elementRectangle.width - e / 2, e / 2, t.elementRectangle.height - e / 2), u = new Pe(0, e, 0, e);
  return u = zt(u, t.targetEdge * -1, -e / 2), u = qi(u, t.targetEdge * -1, a - Nr(o, t.elementRectangle)), zn(u, s, o) ? zn(u, s, i) || (u = dn(u, s, i)) : u = dn(u, s, o), u;
}
function nr(e) {
  var t = e.getBoundingClientRect();
  return new Pe(t.left, t.right, t.top, t.bottom);
}
function dc(e) {
  return new Pe(e.left, e.right, e.top, e.bottom);
}
function fc(e, t) {
  var n;
  if (t) {
    if (t.preventDefault) {
      var r = t;
      n = new Pe(r.clientX, r.clientX, r.clientY, r.clientY);
    } else if (t.getBoundingClientRect)
      n = nr(t);
    else {
      var o = t, i = o.left || o.x, a = o.top || o.y, s = o.right || i, u = o.bottom || a;
      n = new Pe(i, s, a, u);
    }
    if (!qr(n, e))
      for (var l = Un(n, e), c = 0, d = l; c < d.length; c++) {
        var v = d[c];
        n[w[v]] = e[w[v]];
      }
  } else
    n = new Pe(0, 0, 0, 0);
  return n;
}
function vc(e, t, n, r, o, i) {
  o === void 0 && (o = !1);
  var a = e.gapSpace ? e.gapSpace : 0, s = fc(n, e.target), u = sc(ac(e.directionalHint, e.directionalHintForRTL, r), s, n, e.coverTarget, e.alignTargetEdge), l = uc(nr(t), s, n, u, a, o, i, e.directionalHintFixed, e.coverTarget);
  return g(g({}, l), { targetRectangle: s });
}
function hc(e, t, n, r, o) {
  var i = oc(e.elementRectangle, t, e.targetEdge, n, e.alignmentEdge, r, o, e.forcedInBounds);
  return {
    elementPosition: i,
    targetEdge: e.targetEdge,
    alignmentEdge: e.alignmentEdge
  };
}
function Zi(e, t, n) {
  return t === void 0 && (t = 0), n === void 0 && (n = 0), ic(e ? t : 0) / 2 + n;
}
function Xi(e, t, n, r, o, i, a, s) {
  o === void 0 && (o = !1);
  var u = s ?? V(), l = e.isBeakVisible && e.beakWidth || 0, c = Zi(e.isBeakVisible, e.beakWidth, e.gapSpace), d = e;
  d.gapSpace = c;
  var v = e.bounds ? dc(e.bounds) : new Pe(0, u.innerWidth - Fs(), 0, u.innerHeight), h = vc(d, n, v, r, o, i), p = cc(l, h), _ = lc(h, p, v);
  return g(g({}, hc(h, t, v, e.coverTarget, a)), { beakPosition: _ });
}
function mc(e, t, n, r, o) {
  var i = o ?? V();
  return Xi(e, t, n, r, !1, void 0, !0, i);
}
function pc(e) {
  var t, n, r, o, i = e, a = e, s = e, u, l = (t = s.left) !== null && t !== void 0 ? t : s.x, c = (n = s.top) !== null && n !== void 0 ? n : s.y, d = (r = s.right) !== null && r !== void 0 ? r : l, v = (o = s.bottom) !== null && o !== void 0 ? o : c;
  return i.stopPropagation ? u = new Pe(i.clientX, i.clientX, i.clientY, i.clientY) : l !== void 0 && c !== void 0 ? u = new Pe(l, d, c, v) : u = nr(a), u;
}
function gc(e, t, n, r, o, i, a) {
  return Xi(e, t, n, r, o, i, void 0, a);
}
function _c(e, t, n, r, o) {
  return mc(e, t, n, r, o);
}
function bc(e) {
  return e * -1;
}
function yc(e, t) {
  var n = void 0;
  if (t.getWindowSegments && (n = t.getWindowSegments()), n === void 0 || n.length <= 1)
    return {
      top: 0,
      left: 0,
      right: t.innerWidth,
      bottom: t.innerHeight,
      width: t.innerWidth,
      height: t.innerHeight
    };
  var r = 0, o = 0;
  if (e !== null && e.getBoundingClientRect) {
    var i = e.getBoundingClientRect();
    r = (i.left + i.right) / 2, o = (i.top + i.bottom) / 2;
  } else e !== null && (r = e.left || e.x, o = e.top || e.y);
  for (var a = { top: 0, left: 0, right: 0, bottom: 0, width: 0, height: 0 }, s = 0, u = n; s < u.length; s++) {
    var l = u[s];
    r && l.left <= r && l.right >= r && o && l.top <= o && l.bottom >= o && (a = {
      top: l.top,
      left: l.left,
      right: l.right,
      bottom: l.bottom,
      width: l.width,
      height: l.height
    });
  }
  return a;
}
function Cc(e, t) {
  return yc(e, t);
}
function Ec(e, t, n) {
  return Zi(e, t, n);
}
function Ic(e) {
  return pc(e);
}
function Yt() {
  var e = f.useRef();
  return e.current || (e.current = new qn()), f.useEffect(function() {
    return function() {
      var t;
      (t = e.current) === null || t === void 0 || t.dispose(), e.current = void 0;
    };
  }, []), e.current;
}
function Yr(e) {
  var t = f.useRef();
  return t.current === void 0 && (t.current = {
    value: typeof e == "function" ? e() : e
  }), t.current.value;
}
function Qi(e, t) {
  var n = f.useRef(t);
  return n.current || (n.current = Ze(e)), n.current;
}
function Dt() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  var n = f.useCallback(function(r) {
    n.current = r;
    for (var o = 0, i = e; o < i.length; o++) {
      var a = i[o];
      typeof a == "function" ? a(r) : a && (a.current = r);
    }
  }, ot([], e, !0));
  return n;
}
function fn(e, t, n, r) {
  var o = f.useRef(n);
  o.current = n, f.useEffect(function() {
    var i = e && "current" in e ? e.current : e;
    if (!(!i || !i.addEventListener)) {
      var a = Lt(i, t, function(s) {
        return o.current(s);
      }, r);
      return a;
    }
  }, [e, t, r]);
}
function $r(e) {
  var t = $a();
  return Za(function() {
    t.current = e;
  }), t.current;
}
function Ji(e, t) {
  var n, r, o, i = f.useRef(), a = f.useRef(null), s = Zn();
  if (!e || e !== i.current || typeof e == "string") {
    var u = t == null ? void 0 : t.current;
    if (e)
      if (typeof e == "string")
        if (!((n = u == null ? void 0 : u.getRootNode()) === null || n === void 0) && n.host)
          a.current = (o = (r = u == null ? void 0 : u.getRootNode()) === null || r === void 0 ? void 0 : r.querySelector(e)) !== null && o !== void 0 ? o : null;
        else {
          var l = de(u);
          a.current = l ? l.querySelector(e) : null;
        }
      else "stopPropagation" in e || "getBoundingClientRect" in e ? a.current = e : "current" in e ? a.current = e.current : a.current = e;
    i.current = e;
  }
  return [a, s];
}
var xc = 0;
function ea(e) {
  if (process.env.NODE_ENV !== "production") {
    var t = e.name, n = e.props, r = e.other, o = r === void 0 ? [] : r, i = e.conditionallyRequired, a = e.deprecations, s = e.mutuallyExclusive, u = e.controlledUsage, l = f.useRef(!1), c = Yr(function() {
      return "useWarnings_".concat(xc++);
    }), d = $r(n);
    if (!l.current) {
      l.current = !0;
      for (var v = 0, h = o; v < h.length; v++) {
        var p = h[v];
        pt(p);
      }
      if (i)
        for (var _ = 0, m = i; _ < m.length; _++) {
          var b = m[_];
          Gr(t, n, b.requiredProps, b.conditionalPropName, b.condition);
        }
      a && $n(t, n, a), s && Ii(t, n, s);
    }
    u && Uu(g(g({}, u), { componentId: c, props: n, componentName: t, oldProps: d }));
  }
}
function kc(e, t) {
  var n = Yt(), r = f.useState(!1), o = r[0], i = r[1];
  return f.useEffect(function() {
    return n.requestAnimationFrame(function() {
      var a;
      if (!(e.style && e.style.overflowY)) {
        var s = !1;
        if (t && t.current && (!((a = t.current) === null || a === void 0) && a.firstElementChild)) {
          var u = t.current.clientHeight, l = t.current.firstElementChild.clientHeight;
          u > 0 && l > u && (s = l - u > 1);
        }
        o !== s && i(s);
      }
    }), function() {
      return n.dispose();
    };
  }), o;
}
function Mc(e) {
  var t = e.originalElement, n = e.containsFocus;
  t && n && t !== V() && setTimeout(function() {
    var r;
    (r = t.focus) === null || r === void 0 || r.call(t);
  }, 0);
}
function Sc(e, t) {
  var n = e.onRestoreFocus, r = n === void 0 ? Mc : n, o = f.useRef(), i = f.useRef(!1);
  f.useEffect(function() {
    return o.current = de().activeElement, Bs(t.current) && (i.current = !0), function() {
      var a;
      r == null || r({
        originalElement: o.current,
        containsFocus: i.current,
        documentContainsFocus: ((a = de()) === null || a === void 0 ? void 0 : a.hasFocus()) || !1
      }), o.current = void 0;
    };
  }, []), fn(t, "focus", f.useCallback(function() {
    i.current = !0;
  }, []), !0), fn(t, "blur", f.useCallback(function(a) {
    t.current && a.relatedTarget && !t.current.contains(a.relatedTarget) && (i.current = !1);
  }, []), !0);
}
function Tc(e, t) {
  var n = String(e["aria-modal"]).toLowerCase() === "true" && e.enableAriaHiddenSiblings;
  f.useEffect(function() {
    if (n && t.current) {
      var r = Lu(t.current);
      return r;
    }
  }, [t, n]);
}
var ta = f.forwardRef(function(e, t) {
  var n = jr({ shouldRestoreFocus: !0, enableAriaHiddenSiblings: !0 }, e), r = f.useRef(), o = Dt(r, t);
  Tc(n, r), Sc(n, r);
  var i = n.role, a = n.className, s = n.ariaLabel, u = n.ariaLabelledBy, l = n.ariaDescribedBy, c = n.style, d = n.children, v = n.onDismiss, h = kc(n, r), p = f.useCallback(function(m) {
    switch (m.which) {
      case P.escape:
        v && (v(m), m.preventDefault(), m.stopPropagation());
        break;
    }
  }, [v]), _ = Zn();
  return fn(_, "keydown", p), f.createElement("div", g({ ref: o }, _e(n, Xn), { className: a, role: i, "aria-label": s, "aria-labelledby": u, "aria-describedby": l, onKeyDown: p, style: g({ overflowY: h ? "scroll" : void 0, outline: "none" }, c) }), d);
});
ta.displayName = "Popup";
var wc = function() {
  var e;
  return (e = Zn()) !== null && e !== void 0 ? e : typeof window < "u" ? window : void 0;
}, Wf = function(e) {
  var t, n;
  return (n = (t = e == null ? void 0 : e.window) === null || t === void 0 ? void 0 : t.document) !== null && n !== void 0 ? n : typeof document < "u" ? document : void 0;
}, At, Dc = "CalloutContentBase", Pc = (At = {}, At[w.top] = tn.slideUpIn10, At[w.bottom] = tn.slideDownIn10, At[w.left] = tn.slideLeftIn10, At[w.right] = tn.slideRightIn10, At), Yo = { top: 0, left: 0 }, Bc = {
  opacity: 0,
  filter: "opacity(0)",
  pointerEvents: "none"
}, Nc = ["role", "aria-roledescription"], na = {
  preventDismissOnLostFocus: !1,
  preventDismissOnScroll: !1,
  preventDismissOnResize: !1,
  isBeakVisible: !0,
  beakWidth: 16,
  gapSpace: 0,
  minPagePadding: 8,
  directionalHint: ee.bottomAutoEdge
}, Rc = gt({
  disableCaching: !0
  // disabling caching because stylesProp.position mutates often
});
function Ac(e, t, n) {
  var r = e.bounds, o = e.minPagePadding, i = o === void 0 ? na.minPagePadding : o, a = e.target, s = f.useState(!1), u = s[0], l = s[1], c = f.useRef(), d = f.useCallback(function() {
    if (!c.current || u) {
      var h = typeof r == "function" ? n ? r(a, n) : void 0 : r;
      !h && n && (h = Cc(t.current, n), h = {
        top: h.top + i,
        left: h.left + i,
        right: h.right - i,
        bottom: h.bottom - i,
        width: h.width - i * 2,
        height: h.height - i * 2
      }), c.current = h, u && l(!1);
    }
    return c.current;
  }, [r, i, a, t, n, u]), v = Yt();
  return fn(n, "resize", v.debounce(function() {
    l(!0);
  }, 500, { leading: !0 })), d;
}
function Lc(e, t, n, r) {
  var o, i = e.calloutMaxHeight, a = e.finalHeight, s = e.directionalHint, u = e.directionalHintFixed, l = e.hidden, c = e.gapSpace, d = e.beakWidth, v = e.isBeakVisible, h = e.coverTarget, p = f.useState(), _ = p[0], m = p[1], b = (o = r == null ? void 0 : r.elementPosition) !== null && o !== void 0 ? o : {}, E = b.top, x = b.bottom, y = n != null && n.current ? Ic(n.current) : void 0;
  return f.useEffect(function() {
    var M, I = (M = t()) !== null && M !== void 0 ? M : {}, C = I.top, S = I.bottom, T;
    (r == null ? void 0 : r.targetEdge) === w.top && (y != null && y.top) && !h && (S = y.top - Ec(v, d, c)), typeof E == "number" && S ? T = S - E : typeof x == "number" && typeof C == "number" && S && (T = S - C - x), !i && !l || i && T && i > T ? m(T) : m(i || void 0);
  }, [
    x,
    i,
    a,
    s,
    u,
    t,
    l,
    r,
    E,
    c,
    d,
    v,
    y,
    h
  ]), _;
}
function Fc(e, t, n, r, o, i) {
  var a = f.useState(), s = a[0], u = a[1], l = f.useRef(0), c = f.useRef(), d = Yt(), v = e.hidden, h = e.target, p = e.finalHeight, _ = e.calloutMaxHeight, m = e.onPositioned, b = e.directionalHint, E = e.hideOverflow, x = e.preferScrollResizePositioning, y = wc(), M = f.useRef(), I;
  M.current !== i.current && (M.current = i.current, I = i.current ? y == null ? void 0 : y.getComputedStyle(i.current) : void 0);
  var C = I == null ? void 0 : I.overflowY;
  return f.useEffect(function() {
    if (v)
      u(void 0), l.current = 0;
    else {
      var S = d.requestAnimationFrame(function() {
        var T, D;
        if (t.current && n) {
          var j = g(g({}, e), { target: r.current, bounds: o() }), q = n.cloneNode(!0);
          q.style.maxHeight = _ ? "".concat(_) : "", q.style.visibility = "hidden", (T = n.parentElement) === null || T === void 0 || T.appendChild(q);
          var be = c.current === h ? s : void 0, R = E || C === "clip" || C === "hidden", W = x && !R, U = p ? _c(j, t.current, q, be, y) : gc(j, t.current, q, be, W, void 0, y);
          (D = n.parentElement) === null || D === void 0 || D.removeChild(q), !s && U || s && U && !Wc(s, U) && l.current < 5 ? (l.current++, u(U)) : l.current > 0 && (l.current = 0, m == null || m(s));
        }
      }, n);
      return c.current = h, function() {
        d.cancelAnimationFrame(S), c.current = void 0;
      };
    }
  }, [
    v,
    b,
    d,
    n,
    _,
    t,
    r,
    p,
    o,
    m,
    s,
    e,
    h,
    E,
    x,
    C,
    y
  ]), s;
}
function Oc(e, t, n) {
  var r = e.hidden, o = e.setInitialFocus, i = Yt(), a = !!t;
  f.useEffect(function() {
    if (!r && o && a && n) {
      var s = i.requestAnimationFrame(function() {
        return Ps(n);
      }, n);
      return function() {
        return i.cancelAnimationFrame(s);
      };
    }
  }, [r, a, i, n, o]);
}
function Hc(e, t, n, r, o) {
  var i = e.hidden, a = e.onDismiss, s = e.preventDismissOnScroll, u = e.preventDismissOnResize, l = e.preventDismissOnLostFocus, c = e.dismissOnTargetClick, d = e.shouldDismissOnWindowFocus, v = e.preventDismissOnEvent, h = f.useRef(!1), p = Yt(), _ = Yr([
    function() {
      h.current = !0;
    },
    function() {
      h.current = !1;
    }
  ]), m = !!t;
  return f.useEffect(function() {
    var b = function(C) {
      m && !s && y(C);
    }, E = function(C) {
      !u && !(v && v(C)) && (a == null || a(C));
    }, x = function(C) {
      l || y(C);
    }, y = function(C) {
      var S = C.composedPath ? C.composedPath() : [], T = S.length > 0 ? S[0] : C.target, D = n.current && !mt(n.current, T);
      if (D && h.current) {
        h.current = !1;
        return;
      }
      if (!r.current && D || C.target !== o && D && (!r.current || "stopPropagation" in r.current || c || T !== r.current && !mt(r.current, T))) {
        if (v && v(C))
          return;
        a == null || a(C);
      }
    }, M = function(C) {
      d && (v && !v(C) || !v && !l) && !(o != null && o.document.hasFocus()) && C.relatedTarget === null && (a == null || a(C));
    }, I = new Promise(function(C) {
      p.setTimeout(function() {
        if (!i && o) {
          var S = [
            Lt(o, "scroll", b, !0),
            Lt(o, "resize", E, !0),
            Lt(o.document.documentElement, "focus", x, !0),
            Lt(o.document.documentElement, "click", x, !0),
            Lt(o, "blur", M, !0)
          ];
          C(function() {
            S.forEach(function(T) {
              return T();
            });
          });
        }
      }, 0);
    });
    return function() {
      I.then(function(C) {
        return C();
      });
    };
  }, [
    i,
    p,
    n,
    r,
    o,
    a,
    d,
    c,
    l,
    u,
    s,
    m,
    v
  ]), _;
}
var ra = f.memo(f.forwardRef(function(e, t) {
  var n = jr(na, e), r = n.styles, o = n.style, i = n.ariaLabel, a = n.ariaDescribedBy, s = n.ariaLabelledBy, u = n.className, l = n.isBeakVisible, c = n.children, d = n.beakWidth, v = n.calloutWidth, h = n.calloutMaxWidth, p = n.calloutMinWidth, _ = n.doNotLayer, m = n.finalHeight, b = n.hideOverflow, E = b === void 0 ? !!m : b, x = n.backgroundColor, y = n.calloutMaxHeight, M = n.onScroll, I = n.shouldRestoreFocus, C = I === void 0 ? !0 : I, S = n.target, T = n.hidden, D = n.onLayerMounted, j = n.popupProps, q = f.useRef(null), be = f.useRef(null), R = Dt(be, j == null ? void 0 : j.ref), W = f.useState(null), U = W[0], ye = W[1], se = f.useCallback(function(Nt) {
    ye(Nt);
  }, []), ne = Dt(q, t), oe = Ji(n.target, {
    current: U
  }), J = oe[0], Ct = oe[1], Re = Ac(n, J, Ct), Z = Fc(n, q, U, J, Re, R), rr = Lc(n, Re, J, Z), $t = Hc(n, Z, q, J, Ct), Cn = $t[0], or = $t[1], Zt = (Z == null ? void 0 : Z.elementPosition.top) && (Z == null ? void 0 : Z.elementPosition.bottom), En = g(g({}, Z == null ? void 0 : Z.elementPosition), { maxHeight: rr });
  if (Zt && (En.bottom = void 0), Oc(n, Z, U), f.useEffect(function() {
    T || D == null || D();
  }, [T]), !Ct)
    return null;
  var In = E, Bt = l && !!S, Ge = Rc(r, {
    theme: n.theme,
    className: u,
    overflowYHidden: In,
    calloutWidth: v,
    positions: Z,
    beakWidth: d,
    backgroundColor: x,
    calloutMaxWidth: h,
    calloutMinWidth: p,
    doNotLayer: _
  }), ir = g(g({ maxHeight: y || "100%" }, o), In && { overflowY: "hidden" }), xn = n.hidden ? { visibility: "hidden" } : void 0;
  return f.createElement(
    "div",
    { ref: ne, className: Ge.container, style: xn },
    f.createElement(
      "div",
      g({}, _e(n, Xn, Nc), {
        className: Ke(Ge.root, Z && Z.targetEdge && Pc[Z.targetEdge]),
        style: Z ? g({}, En) : Bc,
        // Safari and Firefox on Mac OS requires this to back-stop click events so focus remains in the Callout.
        // See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#Clicking_and_focus
        tabIndex: -1,
        ref: se
      }),
      Bt && f.createElement("div", { className: Ge.beak, style: Kc(Z) }),
      Bt && f.createElement("div", { className: Ge.beakCurtain }),
      f.createElement(
        ta,
        g({
          // don't use getNativeElementProps for role and roledescription because it will also
          // pass through data-* props (resulting in them being used in two places)
          role: n.role,
          "aria-roledescription": n["aria-roledescription"],
          ariaDescribedBy: a,
          ariaLabel: i,
          ariaLabelledBy: s,
          className: Ge.calloutMain,
          onDismiss: n.onDismiss,
          onMouseDown: Cn,
          onMouseUp: or,
          onRestoreFocus: n.onRestoreFocus,
          onScroll: M,
          shouldRestoreFocus: C,
          style: ir
        }, j, { ref: R }),
        c
      )
    )
  );
}), function(e, t) {
  return !t.shouldUpdateWhenHidden && e.hidden && t.hidden ? !0 : zr(e, t);
});
function Kc(e) {
  var t, n, r = g(g({}, (t = e == null ? void 0 : e.beakPosition) === null || t === void 0 ? void 0 : t.elementPosition), { display: !((n = e == null ? void 0 : e.beakPosition) === null || n === void 0) && n.hideBeak ? "none" : void 0 });
  return !r.top && !r.bottom && !r.left && !r.right && (r.left = Yo.left, r.top = Yo.top), r;
}
function Wc(e, t) {
  return $o(e.elementPosition, t.elementPosition) && $o(e.beakPosition.elementPosition, t.beakPosition.elementPosition);
}
function $o(e, t) {
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = e[n], o = t[n];
      if (r !== void 0 && o !== void 0) {
        if (r.toFixed(2) !== o.toFixed(2))
          return !1;
      } else
        return !1;
    }
  return !0;
}
ra.displayName = Dc;
function Uc(e) {
  return {
    height: e,
    width: e
  };
}
var zc = {
  container: "ms-Callout-container",
  root: "ms-Callout",
  beak: "ms-Callout-beak",
  beakCurtain: "ms-Callout-beakCurtain",
  calloutMain: "ms-Callout-main"
}, Gc = function(e) {
  var t, n = e.theme, r = e.className, o = e.overflowYHidden, i = e.calloutWidth, a = e.beakWidth, s = e.backgroundColor, u = e.calloutMaxWidth, l = e.calloutMinWidth, c = e.doNotLayer, d = Pt(zc, n), v = n.semanticColors, h = n.effects;
  return {
    container: [
      d.container,
      {
        position: "relative"
      }
    ],
    root: [
      d.root,
      n.fonts.medium,
      {
        position: "absolute",
        display: "flex",
        zIndex: c ? ln.Layer : void 0,
        boxSizing: "border-box",
        borderRadius: h.roundedCorner2,
        boxShadow: h.elevation16,
        selectors: (t = {}, t[G] = {
          borderWidth: 1,
          borderStyle: "solid",
          borderColor: "WindowText"
        }, t)
      },
      Ol(),
      r,
      !!i && { width: i },
      !!u && { maxWidth: u },
      !!l && { minWidth: l }
    ],
    beak: [
      d.beak,
      {
        position: "absolute",
        backgroundColor: v.menuBackground,
        boxShadow: "inherit",
        border: "inherit",
        boxSizing: "border-box",
        transform: "rotate(45deg)"
      },
      Uc(a),
      s && {
        backgroundColor: s
      }
    ],
    beakCurtain: [
      d.beakCurtain,
      {
        position: "absolute",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: v.menuBackground,
        borderRadius: h.roundedCorner2
      }
    ],
    calloutMain: [
      d.calloutMain,
      {
        backgroundColor: v.menuBackground,
        overflowX: "hidden",
        overflowY: "auto",
        position: "relative",
        width: "100%",
        borderRadius: h.roundedCorner2
      },
      o && {
        overflowY: "hidden"
      },
      s && {
        backgroundColor: s
      }
    ]
  };
}, Vc = _t(ra, Gc, void 0, {
  scope: "CalloutContent"
}), oa = f.createContext(void 0), jc = function() {
  return function() {
  };
};
oa.Provider;
function qc() {
  var e;
  return (e = f.useContext(oa)) !== null && e !== void 0 ? e : jc;
}
var Yc = gt(), $c = re(function(e, t) {
  return bn(g(g({}, e), { rtl: t }));
}), Zc = function(e) {
  var t = e.theme, n = e.dir, r = xe(t) ? "rtl" : "ltr", o = xe() ? "rtl" : "ltr", i = n || r;
  return {
    // If Fabric dir !== contextDir
    // Or If contextDir !== pageDir
    // Then we need to set dir of the Fabric root
    rootDir: i !== r || i !== o ? i : n,
    // If dir !== contextDir || pageDir
    // then set contextual theme around content
    needsTheme: i !== r
  };
}, ia = f.forwardRef(function(e, t) {
  var n = e.className, r = e.theme, o = e.applyTheme, i = e.applyThemeToBody, a = e.styles, s = Yc(a, {
    theme: r,
    applyTheme: o,
    className: n
  }), u = f.useRef(null);
  return Qc(i, s, u), f.createElement(f.Fragment, null, Xc(e, s, u, t));
});
ia.displayName = "FabricBase";
function Xc(e, t, n, r) {
  var o = t.root, i = e.as, a = i === void 0 ? "div" : i, s = e.dir, u = e.theme, l = _e(e, Xn, ["dir"]), c = Zc(e), d = c.rootDir, v = c.needsTheme, h = f.createElement(
    Oi,
    { providerRef: n },
    f.createElement(a, g({ dir: d }, l, { className: o, ref: Dt(n, r) }))
  );
  return v && (h = // eslint-disable-next-line deprecation/deprecation
  f.createElement(lu, { settings: { theme: $c(u, s === "rtl") } }, h)), h;
}
function Qc(e, t, n) {
  var r = t.bodyThemed;
  return f.useEffect(function() {
    if (e) {
      var o = de(n.current);
      if (o)
        return o.body.classList.add(r), function() {
          o.body.classList.remove(r);
        };
    }
  }, [r, e, n]), n;
}
var Er = { fontFamily: "inherit" }, Jc = {
  root: "ms-Fabric",
  bodyThemed: "ms-Fabric-bodyThemed"
}, ed = function(e) {
  var t = e.applyTheme, n = e.className, r = e.preventBlanketFontInheritance, o = e.theme, i = Pt(Jc, o);
  return {
    root: [
      i.root,
      o.fonts.medium,
      {
        color: o.palette.neutralPrimary
      },
      !r && {
        "& button": Er,
        "& input": Er,
        "& textarea": Er
      },
      // apply theme to only if applyTheme is true
      t && {
        color: o.semanticColors.bodyText,
        backgroundColor: o.semanticColors.bodyBackground
      },
      n
    ],
    bodyThemed: [
      {
        backgroundColor: o.semanticColors.bodyBackground
      }
    ]
  };
}, td = _t(ia, ed, void 0, {
  scope: "Fabric"
}), rn = {}, Zr = {}, aa = "fluent-default-layer-host", nd = "#".concat(aa);
function rd(e, t) {
  rn[e] || (rn[e] = []), rn[e].push(t);
  var n = Zr[e];
  if (n)
    for (var r = 0, o = n; r < o.length; r++) {
      var i = o[r];
      i.notifyLayersChanged();
    }
}
function od(e, t) {
  var n = rn[e];
  if (n) {
    var r = n.indexOf(t);
    r >= 0 && (n.splice(r, 1), n.length === 0 && delete rn[e]);
  }
  var o = Zr[e];
  if (o)
    for (var i = 0, a = o; i < a.length; i++) {
      var s = a[i];
      s.notifyLayersChanged();
    }
}
function id(e) {
  var t = Zr[e];
  return t && t[0] || void 0;
}
function ad(e, t) {
  t === void 0 && (t = null);
  var n = e.createElement("div");
  return n.setAttribute("id", aa), n.style.cssText = "position:fixed;z-index:1000000", t ? t.appendChild(n) : e == null || e.body.appendChild(n), n;
}
function sd() {
  return nd;
}
var ud = gt(), ld = function(e) {
  return e != null && e.current ? e.current.classList.contains(K) : !1;
}, sa = f.forwardRef(function(e, t) {
  var n = qc(), r = f.useRef(null), o = Dt(r, t), i = f.useRef(), a = f.useRef(null), s = f.useContext(sn), u = f.useState(!1), l = u[0], c = u[1], d = f.useCallback(function(R) {
    var W = ld(s == null ? void 0 : s.providerRef);
    R && W && R.classList.add(K);
  }, [s]), v = e.children, h = e.className, p = e.eventBubblingEnabled, _ = e.fabricProps, m = e.hostId, b = e.insertFirst, E = e.onLayerDidMount, x = E === void 0 ? function() {
  } : E, y = e.onLayerMounted, M = y === void 0 ? function() {
  } : y, I = e.onLayerWillUnmount, C = e.styles, S = e.theme, T = Dt(a, _ == null ? void 0 : _.ref, d), D = ud(C, {
    theme: S,
    className: h,
    isNotHost: !m
  }), j = function(R, W) {
    var U, ye;
    W === void 0 && (W = null);
    var se = W ?? R;
    if (m) {
      var ne = id(m);
      return ne ? (U = ne.rootRef.current) !== null && U !== void 0 ? U : null : (ye = se.getElementById(m)) !== null && ye !== void 0 ? ye : null;
    } else {
      var oe = sd(), J = oe ? se.querySelector(oe) : null;
      return J || (J = ad(R, W)), J;
    }
  }, q = function() {
    I == null || I();
    var R = i.current;
    i.current = void 0, R && R.parentNode && R.parentNode.removeChild(R);
  }, be = function() {
    var R, W, U, ye, se = de(r.current), ne = !((W = (R = r.current) === null || R === void 0 ? void 0 : R.getRootNode()) === null || W === void 0) && W.host ? (U = r == null ? void 0 : r.current) === null || U === void 0 ? void 0 : U.getRootNode() : void 0;
    if (!(!se || !se && !ne)) {
      var oe = j(se, ne);
      if (oe) {
        oe.__tabsterElementFlags || (oe.__tabsterElementFlags = {}), oe.__tabsterElementFlags.noDirectAriaHidden = !0, q();
        var J = ((ye = oe.ownerDocument) !== null && ye !== void 0 ? ye : se).createElement("div");
        J.className = D.root, Is(J), xs(J, r.current), b ? oe.insertBefore(J, oe.firstChild) : oe.appendChild(J), i.current = J, c(!0);
      }
    }
  };
  return un(function() {
    be(), m && rd(m, be);
    var R = i.current ? n(i.current) : void 0;
    return function() {
      R && R(), q(), m && od(m, be);
    };
  }, [m]), f.useEffect(function() {
    i.current && l && (M == null || M(), x == null || x(), c(!1));
  }, [l, M, x]), fd(e), f.createElement("span", { className: "ms-layer", ref: o }, i.current && Xa.createPortal(f.createElement(
    Oi,
    { layerRoot: !0, providerRef: T },
    f.createElement(td, g({}, !p && dd(), _, { className: Ke(D.content, _ == null ? void 0 : _.className), ref: T }), v)
  ), i.current));
});
sa.displayName = "LayerBase";
var Bn, cd = function(e) {
  e.eventPhase === Event.BUBBLING_PHASE && e.type !== "mouseenter" && e.type !== "mouseleave" && e.type !== "touchstart" && e.type !== "touchend" && e.stopPropagation();
};
function dd() {
  return Bn || (Bn = {}, [
    "onClick",
    "onContextMenu",
    "onDoubleClick",
    "onDrag",
    "onDragEnd",
    "onDragEnter",
    "onDragExit",
    "onDragLeave",
    "onDragOver",
    "onDragStart",
    "onDrop",
    "onMouseDown",
    "onMouseEnter",
    "onMouseLeave",
    "onMouseMove",
    "onMouseOver",
    "onMouseOut",
    "onMouseUp",
    "onTouchMove",
    "onTouchStart",
    "onTouchCancel",
    "onTouchEnd",
    "onKeyDown",
    "onKeyPress",
    "onKeyUp",
    "onFocus",
    "onBlur",
    "onChange",
    "onInput",
    "onInvalid",
    "onSubmit"
  ].forEach(function(e) {
    return Bn[e] = cd;
  })), Bn;
}
function fd(e) {
  process.env.NODE_ENV !== "production" && ea({
    name: "Layer",
    props: e,
    deprecations: { onLayerMounted: "onLayerDidMount" }
  });
}
var vd = {
  root: "ms-Layer",
  rootNoHost: "ms-Layer--fixed",
  content: "ms-Layer-content"
}, hd = function(e) {
  var t = e.className, n = e.isNotHost, r = e.theme, o = Pt(vd, r);
  return {
    root: [
      o.root,
      r.fonts.medium,
      n && [
        o.rootNoHost,
        {
          position: "fixed",
          zIndex: ln.Layer,
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          visibility: "hidden"
        }
      ],
      t
    ],
    content: [
      o.content,
      {
        visibility: "visible"
      }
    ]
  };
}, md = _t(sa, hd, void 0, {
  scope: "Layer",
  fields: ["hostId", "theme", "styles"]
}), ua = f.forwardRef(function(e, t) {
  var n = e.layerProps, r = e.doNotLayer, o = Vt(e, ["layerProps", "doNotLayer"]), i = f.createElement(Vc, g({}, o, { doNotLayer: r, ref: t }));
  return r ? i : f.createElement(md, g({}, n), i);
});
ua.displayName = "Callout";
var Vn;
(function(e) {
  e[e.default = 0] = "default", e[e.image = 1] = "image", e[e.Default = 1e5] = "Default", e[e.Image = 100001] = "Image";
})(Vn || (Vn = {}));
var Ie;
(function(e) {
  e[e.center = 0] = "center", e[e.contain = 1] = "contain", e[e.cover = 2] = "cover", e[e.none = 3] = "none", e[e.centerCover = 4] = "centerCover", e[e.centerContain = 5] = "centerContain";
})(Ie || (Ie = {}));
var vn;
(function(e) {
  e[e.landscape = 0] = "landscape", e[e.portrait = 1] = "portrait";
})(vn || (vn = {}));
var ge;
(function(e) {
  e[e.notLoaded = 0] = "notLoaded", e[e.loaded = 1] = "loaded", e[e.error = 2] = "error", e[e.errorLoaded = 3] = "errorLoaded";
})(ge || (ge = {}));
var pd = gt(), gd = /\.svg$/i, _d = "fabricImage";
function bd(e, t) {
  var n = e.onLoadingStateChange, r = e.onLoad, o = e.onError, i = e.src, a = f.useState(ge.notLoaded), s = a[0], u = a[1];
  un(function() {
    u(ge.notLoaded);
  }, [i]), f.useEffect(function() {
    if (s === ge.notLoaded) {
      var d = t.current ? i && t.current.naturalWidth > 0 && t.current.naturalHeight > 0 || t.current.complete && gd.test(i) : !1;
      d && u(ge.loaded);
    }
  }), f.useEffect(function() {
    n == null || n(s);
  }, [s]);
  var l = f.useCallback(function(d) {
    r == null || r(d), i && u(ge.loaded);
  }, [i, r]), c = f.useCallback(function(d) {
    o == null || o(d), u(ge.error);
  }, [o]);
  return [s, l, c];
}
var la = f.forwardRef(function(e, t) {
  var n = f.useRef(), r = f.useRef(), o = bd(e, r), i = o[0], a = o[1], s = o[2], u = _e(e, Mu, [
    "width",
    "height"
  ]), l = e.src, c = e.alt, d = e.width, v = e.height, h = e.shouldFadeIn, p = h === void 0 ? !0 : h, _ = e.shouldStartVisible, m = e.className, b = e.imageFit, E = e.role, x = e.maximizeFrame, y = e.styles, M = e.theme, I = e.loading, C = yd(e, i, r, n), S = pd(y, {
    theme: M,
    className: m,
    width: d,
    height: v,
    maximizeFrame: x,
    shouldFadeIn: p,
    shouldStartVisible: _,
    isLoaded: i === ge.loaded || i === ge.notLoaded && e.shouldStartVisible,
    isLandscape: C === vn.landscape,
    isCenter: b === Ie.center,
    isCenterContain: b === Ie.centerContain,
    isCenterCover: b === Ie.centerCover,
    isContain: b === Ie.contain,
    isCover: b === Ie.cover,
    isNone: b === Ie.none,
    isError: i === ge.error,
    isNotImageFit: b === void 0
  });
  return f.createElement(
    "div",
    { className: S.root, style: { width: d, height: v }, ref: n },
    f.createElement("img", g({}, u, { onLoad: a, onError: s, key: _d + e.src || "", className: S.image, ref: Dt(r, t), src: l, alt: c, role: E, loading: I }))
  );
});
la.displayName = "ImageBase";
function yd(e, t, n, r) {
  var o = f.useRef(t), i = f.useRef();
  return (i === void 0 || o.current === ge.notLoaded && t === ge.loaded) && (i.current = Cd(e, t, n, r)), o.current = t, i.current;
}
function Cd(e, t, n, r) {
  var o = e.imageFit, i = e.width, a = e.height;
  if (e.coverStyle !== void 0)
    return e.coverStyle;
  if (t === ge.loaded && (o === Ie.cover || o === Ie.contain || o === Ie.centerContain || o === Ie.centerCover) && n.current && r.current) {
    var s = void 0;
    typeof i == "number" && typeof a == "number" && o !== Ie.centerContain && o !== Ie.centerCover ? s = i / a : s = r.current.clientWidth / r.current.clientHeight;
    var u = n.current.naturalWidth / n.current.naturalHeight;
    if (u > s)
      return vn.landscape;
  }
  return vn.portrait;
}
var Ed = {
  root: "ms-Image",
  rootMaximizeFrame: "ms-Image--maximizeFrame",
  image: "ms-Image-image",
  imageCenter: "ms-Image-image--center",
  imageContain: "ms-Image-image--contain",
  imageCover: "ms-Image-image--cover",
  imageCenterContain: "ms-Image-image--centerContain",
  imageCenterCover: "ms-Image-image--centerCover",
  imageNone: "ms-Image-image--none",
  imageLandscape: "ms-Image-image--landscape",
  imagePortrait: "ms-Image-image--portrait"
}, Id = function(e) {
  var t = e.className, n = e.width, r = e.height, o = e.maximizeFrame, i = e.isLoaded, a = e.shouldFadeIn, s = e.shouldStartVisible, u = e.isLandscape, l = e.isCenter, c = e.isContain, d = e.isCover, v = e.isCenterContain, h = e.isCenterCover, p = e.isNone, _ = e.isError, m = e.isNotImageFit, b = e.theme, E = Pt(Ed, b), x = {
    position: "absolute",
    left: "50% /* @noflip */",
    top: "50%",
    transform: "translate(-50%,-50%)"
    // @todo test RTL renders transform: translate(50%,-50%);
  }, y = V(), M = y !== void 0 && // eslint-disable-next-line @fluentui/max-len
  // cast needed as vendor prefixed `msMaxTouchPoints` api is no longer part of TS lib declaration - introduced with TS 4.4
  y.navigator.msMaxTouchPoints === void 0, I = c && u || d && !u ? { width: "100%", height: "auto" } : { width: "auto", height: "100%" };
  return {
    root: [
      E.root,
      b.fonts.medium,
      {
        overflow: "hidden"
      },
      o && [
        E.rootMaximizeFrame,
        {
          height: "100%",
          width: "100%"
        }
      ],
      i && a && !s && tn.fadeIn400,
      (l || c || d || v || h) && {
        position: "relative"
      },
      t
    ],
    image: [
      E.image,
      {
        display: "block",
        opacity: 0
      },
      i && [
        "is-loaded",
        {
          opacity: 1
        }
      ],
      l && [E.imageCenter, x],
      c && [
        E.imageContain,
        M && {
          width: "100%",
          height: "100%",
          objectFit: "contain"
        },
        !M && I,
        !M && x
      ],
      d && [
        E.imageCover,
        M && {
          width: "100%",
          height: "100%",
          objectFit: "cover"
        },
        !M && I,
        !M && x
      ],
      v && [
        E.imageCenterContain,
        u && {
          maxWidth: "100%"
        },
        !u && {
          maxHeight: "100%"
        },
        x
      ],
      h && [
        E.imageCenterCover,
        u && {
          maxHeight: "100%"
        },
        !u && {
          maxWidth: "100%"
        },
        x
      ],
      p && [
        E.imageNone,
        {
          width: "auto",
          height: "auto"
        }
      ],
      m && [
        !!n && !r && {
          height: "auto",
          width: "100%"
        },
        !n && !!r && {
          height: "100%",
          width: "auto"
        },
        !!n && !!r && {
          height: "100%",
          width: "100%"
        }
      ],
      u && E.imageLandscape,
      !u && E.imagePortrait,
      !i && "is-notLoaded",
      a && "is-fadeIn",
      _ && "is-error"
    ]
  };
}, Xr = _t(la, Id, void 0, {
  scope: "Image"
}, !0);
Xr.displayName = "Image";
var Tt = gn({
  root: {
    display: "inline-block",
    textDecoration: "inherit"
  },
  placeholder: [
    "ms-Icon-placeHolder",
    {
      width: "1em"
    }
  ],
  image: [
    "ms-Icon-imageContainer",
    {
      overflow: "hidden"
    }
  ]
}), ca = "ms-Icon", xd = function(e) {
  var t = e.className, n = e.iconClassName, r = e.isPlaceholder, o = e.isImage, i = e.styles;
  return {
    root: [
      r && Tt.placeholder,
      Tt.root,
      o && Tt.image,
      n,
      t,
      i && i.root,
      // eslint-disable-next-line deprecation/deprecation
      i && i.imageContainer
    ]
  };
}, da = re(
  function(e) {
    var t = ju(e) || {
      subset: {},
      code: void 0
    }, n = t.code, r = t.subset;
    return n ? {
      children: n,
      iconClassName: r.className,
      fontFamily: r.fontFace && r.fontFace.fontFamily,
      mergeImageProps: r.mergeImageProps
    } : null;
  },
  void 0,
  !0
  /*ignoreNullOrUndefinedResult */
), Rr = function(e) {
  var t = e.iconName, n = e.className, r = e.style, o = r === void 0 ? {} : r, i = da(t) || {}, a = i.iconClassName, s = i.children, u = i.fontFamily, l = i.mergeImageProps, c = _e(e, te), d = e["aria-label"] || e.title, v = e["aria-label"] || e["aria-labelledby"] || e.title ? {
    role: l ? void 0 : "img"
  } : {
    "aria-hidden": !0
  }, h = s;
  return l && typeof s == "object" && typeof s.props == "object" && d && (h = f.cloneElement(s, { alt: d })), f.createElement("i", g({ "data-icon-name": t }, v, c, l ? {
    title: void 0,
    "aria-label": void 0
  } : {}, {
    className: Ke(ca, Tt.root, a, !t && Tt.placeholder, n),
    // Apply the font family this way to ensure it doesn't get overridden by Fabric Core ms-Icon styles
    // https://github.com/microsoft/fluentui/issues/10449
    style: g({ fontFamily: u }, o)
  }), h);
};
re(function(e, t, n) {
  return Rr({ iconName: e, className: t, "aria-label": n });
});
var kd = gt({
  // Icon is used a lot by other components.
  // It's likely to see expected cases which pass different className to the Icon.
  // Therefore setting a larger cache size.
  cacheSize: 100
}), Md = (
  /** @class */
  function(e) {
    ze(t, e);
    function t(n) {
      var r = e.call(this, n) || this;
      return r._onImageLoadingStateChange = function(o) {
        r.props.imageProps && r.props.imageProps.onLoadingStateChange && r.props.imageProps.onLoadingStateChange(o), o === ge.error && r.setState({ imageLoadError: !0 });
      }, r.state = {
        imageLoadError: !1
      }, r;
    }
    return t.prototype.render = function() {
      var n = this.props, r = n.children, o = n.className, i = n.styles, a = n.iconName, s = n.imageErrorAs, u = n.theme, l = typeof a == "string" && a.length === 0, c = (
        // eslint-disable-next-line deprecation/deprecation
        !!this.props.imageProps || this.props.iconType === Vn.image || this.props.iconType === Vn.Image
      ), d = da(a) || {}, v = d.iconClassName, h = d.children, p = d.mergeImageProps, _ = kd(i, {
        theme: u,
        className: o,
        iconClassName: v,
        isImage: c,
        isPlaceholder: l
      }), m = c ? "span" : "i", b = _e(this.props, te, [
        "aria-label"
      ]), E = this.state.imageLoadError, x = g(g({}, this.props.imageProps), { onLoadingStateChange: this._onImageLoadingStateChange }), y = E && s || Xr, M = this.props["aria-label"] || this.props.ariaLabel, I = x.alt || M || this.props.title, C = !!(I || this.props["aria-labelledby"] || x["aria-label"] || x["aria-labelledby"]), S = C ? {
        role: c || p ? void 0 : "img",
        "aria-label": c || p ? void 0 : I
      } : {
        "aria-hidden": !0
      }, T = h;
      return p && h && typeof h == "object" && I && (T = f.cloneElement(h, {
        alt: I
      })), f.createElement(m, g({ "data-icon-name": a }, S, b, p ? {
        title: void 0,
        "aria-label": void 0
      } : {}, { className: _.root }), c ? f.createElement(y, g({}, x)) : r || T);
    }, t;
  }(f.Component)
), yn = _t(Md, xd, void 0, {
  scope: "Icon"
}, !0);
yn.displayName = "Icon";
var Sd = function(e) {
  var t = e.className, n = e.imageProps, r = _e(e, te, [
    "aria-label",
    "aria-labelledby",
    "title",
    "aria-describedby"
  ]), o = n.alt || e["aria-label"], i = o || e["aria-labelledby"] || e.title || n["aria-label"] || n["aria-labelledby"] || n.title, a = {
    "aria-labelledby": e["aria-labelledby"],
    "aria-describedby": e["aria-describedby"],
    title: e.title
  }, s = i ? {} : {
    "aria-hidden": !0
  };
  return f.createElement(
    "div",
    g({}, s, r, { className: Ke(ca, Tt.root, Tt.image, t) }),
    f.createElement(Xr, g({}, a, n, { alt: i ? o : "" }))
  );
}, Ar = {
  /** Tabbing is not allowed */
  none: 0,
  /** All tabbing action is allowed */
  all: 1,
  /** Tabbing is allowed only on input elements */
  inputOnly: 2
}, pe;
(function(e) {
  e[e.vertical = 0] = "vertical", e[e.horizontal = 1] = "horizontal", e[e.bidirectional = 2] = "bidirectional", e[e.domOrder = 3] = "domOrder";
})(pe || (pe = {}));
var Nn = "data-is-focusable", Td = "data-disable-click-on-enter", Ir = "data-focuszone-id", Ve = "tabindex", xr = "data-no-vertical-wrap", kr = "data-no-horizontal-wrap", Mr = 999999999, Jt = -999999999, Sr, wd = "ms-FocusZone";
function Dd(e, t) {
  var n;
  typeof MouseEvent == "function" ? n = new MouseEvent("click", {
    ctrlKey: t == null ? void 0 : t.ctrlKey,
    metaKey: t == null ? void 0 : t.metaKey,
    shiftKey: t == null ? void 0 : t.shiftKey,
    altKey: t == null ? void 0 : t.altKey,
    bubbles: t == null ? void 0 : t.bubbles,
    cancelable: t == null ? void 0 : t.cancelable
  }) : (n = document.createEvent("MouseEvents"), n.initMouseEvent(
    "click",
    t ? t.bubbles : !1,
    t ? t.cancelable : !1,
    // eslint-disable-next-line no-restricted-globals
    window,
    // not using getWindow() since this can only be run client side
    0,
    // detail
    0,
    // screen x
    0,
    // screen y
    0,
    // client x
    0,
    // client y
    t ? t.ctrlKey : !1,
    t ? t.altKey : !1,
    t ? t.shiftKey : !1,
    t ? t.metaKey : !1,
    0,
    // button
    null
  )), e.dispatchEvent(n);
}
function Pd() {
  return Sr || (Sr = rt({
    selectors: {
      ":focus": {
        outline: "none"
      }
    }
  }, wd)), Sr;
}
var en = {}, Rn = /* @__PURE__ */ new Set(), Bd = ["text", "number", "password", "email", "tel", "url", "search", "textarea"], Xe = !1, Nd = (
  /** @class */
  function(e) {
    ze(t, e);
    function t(n) {
      var r = this, o, i, a, s;
      r = e.call(this, n) || this, r._root = f.createRef(), r._mergedRef = Ki(), r._onFocus = function(l) {
        var c;
        if (!r._portalContainsElement(l.target)) {
          var d = (c = r.props, c.onActiveElementChanged), v = c.doNotAllowFocusEventToPropagate, h = c.stopFocusPropagation, p = c.onFocusNotification, _ = c.onFocus, m = c.shouldFocusInnerElementWhenReceivedFocus, b = c.defaultTabbableElement, E = r._isImmediateDescendantOfZone(l.target), x;
          if (E)
            x = l.target;
          else
            for (var y = l.target; y && y !== r._root.current; ) {
              if (tt(y, void 0, r._inShadowRoot) && r._isImmediateDescendantOfZone(y)) {
                x = y;
                break;
              }
              y = qe(y, Xe);
            }
          if (m && l.target === r._root.current) {
            var M = b && typeof b == "function" && r._root.current && b(r._root.current);
            M && tt(M, void 0, r._inShadowRoot) ? (x = M, M.focus()) : (r.focus(!0), r._activeElement && (x = null));
          }
          var I = !r._activeElement;
          x && x !== r._activeElement && ((E || I) && r._setFocusAlignment(x, !0, !0), r._activeElement = x, I && r._updateTabIndexes()), d && d(r._activeElement, l), (h || v) && l.stopPropagation(), _ ? _(l) : p && p();
        }
      }, r._onBlur = function() {
        r._setParkedFocus(!1);
      }, r._onMouseDown = function(l) {
        if (!r._portalContainsElement(l.target)) {
          var c = r.props.disabled;
          if (!c) {
            for (var d = l.target, v = []; d && d !== r._root.current; )
              v.push(d), d = qe(d, Xe);
            for (; v.length && (d = v.pop(), d && tt(d, void 0, r._inShadowRoot) && r._setActiveElement(d, !0), !Je(d)); )
              ;
          }
        }
      }, r._onKeyDown = function(l, c) {
        var d;
        if (!r._portalContainsElement(l.target)) {
          var v = (d = r.props, d.direction), h = d.disabled, p = d.isInnerZoneKeystroke, _ = d.pagingSupportDisabled, m = d.shouldEnterInnerZone;
          if (!h && (r.props.onKeyDown && r.props.onKeyDown(l), !l.isDefaultPrevented() && !(r._getDocument().activeElement === r._root.current && r._isInnerZone))) {
            if ((m && m(l) || p && p(l)) && r._isImmediateDescendantOfZone(l.target)) {
              var b = r._getFirstInnerZone();
              if (b) {
                if (!b.focus(!0))
                  return;
              } else if (Ur(l.target)) {
                if (!r.focusElement(Me(l.target, l.target.firstChild, !0)))
                  return;
              } else
                return;
            } else {
              if (l.altKey)
                return;
              switch (l.which) {
                case P.space:
                  if (r._shouldRaiseClicksOnSpace && r._tryInvokeClickForFocusable(l.target, l))
                    break;
                  return;
                case P.left:
                  if (v !== pe.vertical && (r._preventDefaultWhenHandled(l), r._moveFocusLeft(c)))
                    break;
                  return;
                case P.right:
                  if (v !== pe.vertical && (r._preventDefaultWhenHandled(l), r._moveFocusRight(c)))
                    break;
                  return;
                case P.up:
                  if (v !== pe.horizontal && (r._preventDefaultWhenHandled(l), r._moveFocusUp()))
                    break;
                  return;
                case P.down:
                  if (v !== pe.horizontal && (r._preventDefaultWhenHandled(l), r._moveFocusDown()))
                    break;
                  return;
                case P.pageDown:
                  if (!_ && r._moveFocusPaging(!0))
                    break;
                  return;
                case P.pageUp:
                  if (!_ && r._moveFocusPaging(!1))
                    break;
                  return;
                case P.tab:
                  if (
                    // eslint-disable-next-line deprecation/deprecation
                    r.props.allowTabKey || r.props.handleTabKey === Ar.all || r.props.handleTabKey === Ar.inputOnly && r._isElementInput(l.target)
                  ) {
                    var E = !1;
                    if (r._processingTabKey = !0, v === pe.vertical || !r._shouldWrapFocus(r._activeElement, kr))
                      E = l.shiftKey ? r._moveFocusUp() : r._moveFocusDown();
                    else {
                      var x = xe(c) ? !l.shiftKey : l.shiftKey;
                      E = x ? r._moveFocusLeft(c) : r._moveFocusRight(c);
                    }
                    if (r._processingTabKey = !1, E)
                      break;
                    r.props.shouldResetActiveElementWhenTabFromZone && (r._activeElement = null);
                  }
                  return;
                case P.home:
                  if (r._isContentEditableElement(l.target) || r._isElementInput(l.target) && !r._shouldInputLoseFocus(l.target, !1))
                    return !1;
                  var y = r._root.current && r._root.current.firstChild;
                  if (r._root.current && y && r.focusElement(Me(r._root.current, y, !0)))
                    break;
                  return;
                case P.end:
                  if (r._isContentEditableElement(l.target) || r._isElementInput(l.target) && !r._shouldInputLoseFocus(l.target, !0))
                    return !1;
                  var M = r._root.current && r._root.current.lastChild;
                  if (r._root.current && r.focusElement(He(r._root.current, M, !0, !0, !0)))
                    break;
                  return;
                case P.enter:
                  if (r._shouldRaiseClicksOnEnter && r._tryInvokeClickForFocusable(l.target, l))
                    break;
                  return;
                default:
                  return;
              }
            }
            l.preventDefault(), l.stopPropagation();
          }
        }
      }, r._getHorizontalDistanceFromCenter = function(l, c, d) {
        var v = r._focusAlignment.left || r._focusAlignment.x || 0, h = Math.floor(d.top), p = Math.floor(c.bottom), _ = Math.floor(d.bottom), m = Math.floor(c.top), b = l && h > p, E = !l && _ < m;
        return b || E ? v >= d.left && v <= d.left + d.width ? 0 : Math.abs(d.left + d.width / 2 - v) : r._shouldWrapFocus(r._activeElement, xr) ? Mr : Jt;
      }, Qn(r), process.env.NODE_ENV !== "production" && $n("FocusZone", n, {
        rootProps: void 0,
        allowTabKey: "handleTabKey",
        elementType: "as",
        ariaDescribedBy: "aria-describedby",
        ariaLabelledBy: "aria-labelledby"
      }), r._id = Ze("FocusZone"), r._focusAlignment = {
        left: 0,
        top: 0
      }, r._processingTabKey = !1;
      var u = (i = (o = n.shouldRaiseClicks) !== null && o !== void 0 ? o : t.defaultProps.shouldRaiseClicks) !== null && i !== void 0 ? i : !0;
      return r._shouldRaiseClicksOnEnter = (a = n.shouldRaiseClicksOnEnter) !== null && a !== void 0 ? a : u, r._shouldRaiseClicksOnSpace = (s = n.shouldRaiseClicksOnSpace) !== null && s !== void 0 ? s : u, r;
    }
    return t.getOuterZones = function() {
      return Rn.size;
    }, t._onKeyDownCapture = function(n) {
      n.which === P.tab && Rn.forEach(function(r) {
        return r._updateTabIndexes();
      });
    }, t.prototype.componentDidMount = function() {
      var n, r = this._root.current;
      if (this._inShadowRoot = !!(!((n = this.context) === null || n === void 0) && n.shadowRoot), en[this._id] = this, r) {
        for (var o = qe(r, Xe); o && o !== this._getDocument().body && o.nodeType === 1; ) {
          if (Je(o)) {
            this._isInnerZone = !0;
            break;
          }
          o = qe(o, Xe);
        }
        this._isInnerZone || (Rn.add(this), this._root.current && this._root.current.addEventListener("keydown", t._onKeyDownCapture, !0)), this._root.current && this._root.current.addEventListener("blur", this._onBlur, !0), this._updateTabIndexes(), this.props.defaultTabbableElement && typeof this.props.defaultTabbableElement == "string" ? this._activeElement = this._getDocument().querySelector(this.props.defaultTabbableElement) : this.props.defaultActiveElement && (this._activeElement = this._getDocument().querySelector(this.props.defaultActiveElement)), this.props.shouldFocusOnMount && this.focus();
      }
    }, t.prototype.componentDidUpdate = function() {
      var n, r = this._root.current, o = this._getDocument();
      if (this._inShadowRoot = !!(!((n = this.context) === null || n === void 0) && n.shadowRoot), (this._activeElement && !mt(this._root.current, this._activeElement, Xe) || this._defaultFocusElement && !mt(this._root.current, this._defaultFocusElement, Xe)) && (this._activeElement = null, this._defaultFocusElement = null, this._updateTabIndexes()), !this.props.preventFocusRestoration && o && this._lastIndexPath && (o.activeElement === o.body || o.activeElement === null || o.activeElement === r)) {
        var i = Rs(r, this._lastIndexPath);
        i ? (this._setActiveElement(i, !0), i.focus(), this._setParkedFocus(!1)) : this._setParkedFocus(!0);
      }
    }, t.prototype.componentWillUnmount = function() {
      delete en[this._id], this._isInnerZone || (Rn.delete(this), this._root.current && this._root.current.removeEventListener("keydown", t._onKeyDownCapture, !0)), this._root.current && this._root.current.removeEventListener("blur", this._onBlur, !0), this._activeElement = null, this._defaultFocusElement = null;
    }, t.prototype.render = function() {
      var n, r = this, o = (n = this.props, n.as), i = n.elementType, a = n.rootProps, s = n.ariaDescribedBy, u = n.ariaLabelledBy, l = n.className, c = _e(this.props, te), d = o || i || "div";
      this._evaluateFocusBeforeRender();
      var v = Yl();
      return f.createElement(d, g({ "aria-labelledby": u, "aria-describedby": s }, c, a, {
        // Once the getClassName correctly memoizes inputs this should
        // be replaced so that className is passed to getRootClass and is included there so
        // the class names will always be in the same order.
        className: Ke(Pd(), l),
        // eslint-disable-next-line deprecation/deprecation
        ref: this._mergedRef(this.props.elementRef, this._root),
        "data-focuszone-id": this._id,
        // eslint-disable-next-line react/jsx-no-bind
        onKeyDown: function(h) {
          return r._onKeyDown(h, v);
        },
        onFocus: this._onFocus,
        onMouseDownCapture: this._onMouseDown
      }), this.props.children);
    }, t.prototype.focus = function(n, r) {
      if (n === void 0 && (n = !1), r === void 0 && (r = !1), this._root.current)
        if (!n && this._root.current.getAttribute(Nn) === "true" && this._isInnerZone) {
          var o = this._getOwnerZone(this._root.current);
          if (o !== this._root.current) {
            var i = en[o.getAttribute(Ir)];
            return !!i && i.focusElement(this._root.current);
          }
          return !1;
        } else {
          if (!n && this._activeElement && mt(this._root.current, this._activeElement) && tt(this._activeElement, void 0, this._inShadowRoot) && (!r || Ci(this._activeElement)))
            return this._activeElement.focus(), !0;
          var a = this._root.current.firstChild;
          return this.focusElement(Me(this._root.current, a, !0, void 0, void 0, void 0, void 0, void 0, r));
        }
      return !1;
    }, t.prototype.focusLast = function() {
      if (this._root.current) {
        var n = this._root.current && this._root.current.lastChild;
        return this.focusElement(He(this._root.current, n, !0, !0, !0));
      }
      return !1;
    }, t.prototype.focusElement = function(n, r) {
      var o, i = (o = this.props, o.onBeforeFocus), a = o.shouldReceiveFocus;
      return a && !a(n) || i && !i(n) ? !1 : n ? (this._setActiveElement(n, r), this._activeElement && this._activeElement.focus(), !0) : !1;
    }, t.prototype.setFocusAlignment = function(n) {
      this._focusAlignment = n;
    }, Object.defineProperty(t.prototype, "defaultFocusElement", {
      get: function() {
        return this._defaultFocusElement;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "activeElement", {
      get: function() {
        return this._activeElement;
      },
      enumerable: !1,
      configurable: !0
    }), t.prototype._evaluateFocusBeforeRender = function() {
      var n = this._root.current, r = this._getDocument();
      if (r) {
        var o = r.activeElement;
        if (o !== n) {
          var i = mt(n, o, !1);
          this._lastIndexPath = i ? As(n, o) : void 0;
        }
      }
    }, t.prototype._setParkedFocus = function(n) {
      var r = this._root.current;
      r && this._isParked !== n && (this._isParked = n, n ? (this.props.allowFocusRoot || (this._parkedTabIndex = r.getAttribute("tabindex"), r.setAttribute("tabindex", "-1")), r.focus()) : this.props.allowFocusRoot || (this._parkedTabIndex ? (r.setAttribute("tabindex", this._parkedTabIndex), this._parkedTabIndex = void 0) : r.removeAttribute("tabindex")));
    }, t.prototype._setActiveElement = function(n, r) {
      var o = this._activeElement;
      this._activeElement = n, o && (Je(o) && this._updateTabIndexes(o), o.tabIndex = -1), this._activeElement && ((!this._focusAlignment || r) && this._setFocusAlignment(n, !0, !0), this._activeElement.tabIndex = 0);
    }, t.prototype._preventDefaultWhenHandled = function(n) {
      this.props.preventDefaultWhenHandled && n.preventDefault();
    }, t.prototype._tryInvokeClickForFocusable = function(n, r) {
      var o = n;
      if (o === this._root.current)
        return !1;
      do {
        if (o.tagName === "BUTTON" || o.tagName === "A" || o.tagName === "INPUT" || o.tagName === "TEXTAREA" || o.tagName === "SUMMARY")
          return !1;
        if (this._isImmediateDescendantOfZone(o) && o.getAttribute(Nn) === "true" && o.getAttribute(Td) !== "true")
          return Dd(o, r), !0;
        o = qe(o, Xe);
      } while (o !== this._root.current);
      return !1;
    }, t.prototype._getFirstInnerZone = function(n) {
      if (n = n || this._activeElement || this._root.current, !n)
        return null;
      if (Je(n))
        return en[n.getAttribute(Ir)];
      for (var r = n.firstElementChild; r; ) {
        if (Je(r))
          return en[r.getAttribute(Ir)];
        var o = this._getFirstInnerZone(r);
        if (o)
          return o;
        r = r.nextElementSibling;
      }
      return null;
    }, t.prototype._moveFocus = function(n, r, o, i) {
      i === void 0 && (i = !0);
      var a = this._activeElement, s = -1, u = void 0, l = !1, c = this.props.direction === pe.bidirectional;
      if (!a || !this._root.current || this._isElementInput(a) && !this._shouldInputLoseFocus(a, n))
        return !1;
      var d = c ? a.getBoundingClientRect() : null;
      do
        if (a = n ? Me(this._root.current, a) : He(this._root.current, a), c) {
          if (a) {
            var v = a.getBoundingClientRect(), h = r(d, v);
            if (h === -1 && s === -1) {
              u = a;
              break;
            }
            if (h > -1 && (s === -1 || h < s) && (s = h, u = a), s >= 0 && h < 0)
              break;
          }
        } else {
          u = a;
          break;
        }
      while (a);
      if (u && u !== this._activeElement)
        l = !0, this.focusElement(u);
      else if (this.props.isCircularNavigation && i)
        return n ? this.focusElement(Me(this._root.current, this._root.current.firstElementChild, !0)) : this.focusElement(He(this._root.current, this._root.current.lastElementChild, !0, !0, !0));
      return l;
    }, t.prototype._moveFocusDown = function() {
      var n = this, r = -1, o = this._focusAlignment.left || this._focusAlignment.x || 0;
      return (
        // eslint-disable-next-line deprecation/deprecation
        this._moveFocus(!0, function(i, a) {
          var s = -1, u = Math.floor(a.top), l = Math.floor(i.bottom);
          return u < l ? n._shouldWrapFocus(n._activeElement, xr) ? Mr : Jt : ((r === -1 && u >= l || u === r) && (r = u, o >= a.left && o <= a.left + a.width ? s = 0 : s = Math.abs(a.left + a.width / 2 - o)), s);
        }) ? (this._setFocusAlignment(this._activeElement, !1, !0), !0) : !1
      );
    }, t.prototype._moveFocusUp = function() {
      var n = this, r = -1, o = this._focusAlignment.left || this._focusAlignment.x || 0;
      return (
        // eslint-disable-next-line deprecation/deprecation
        this._moveFocus(!1, function(i, a) {
          var s = -1, u = Math.floor(a.bottom), l = Math.floor(a.top), c = Math.floor(i.top);
          return u > c ? n._shouldWrapFocus(n._activeElement, xr) ? Mr : Jt : ((r === -1 && u <= c || l === r) && (r = l, o >= a.left && o <= a.left + a.width ? s = 0 : s = Math.abs(a.left + a.width / 2 - o)), s);
        }) ? (this._setFocusAlignment(this._activeElement, !1, !0), !0) : !1
      );
    }, t.prototype._moveFocusLeft = function(n) {
      var r = this, o = this._shouldWrapFocus(this._activeElement, kr);
      return this._moveFocus(
        xe(n),
        // eslint-disable-next-line deprecation/deprecation
        function(i, a) {
          var s = -1, u;
          return xe(n) ? u = parseFloat(a.top.toFixed(3)) < parseFloat(i.bottom.toFixed(3)) : u = parseFloat(a.bottom.toFixed(3)) > parseFloat(i.top.toFixed(3)), u && a.right <= i.right && r.props.direction !== pe.vertical ? s = i.right - a.right : o || (s = Jt), s;
        },
        void 0,
        o
      ) ? (this._setFocusAlignment(this._activeElement, !0, !1), !0) : !1;
    }, t.prototype._moveFocusRight = function(n) {
      var r = this, o = this._shouldWrapFocus(this._activeElement, kr);
      return this._moveFocus(
        !xe(n),
        // eslint-disable-next-line deprecation/deprecation
        function(i, a) {
          var s = -1, u;
          return xe(n) ? u = parseFloat(a.bottom.toFixed(3)) > parseFloat(i.top.toFixed(3)) : u = parseFloat(a.top.toFixed(3)) < parseFloat(i.bottom.toFixed(3)), u && a.left >= i.left && r.props.direction !== pe.vertical ? s = a.left - i.left : o || (s = Jt), s;
        },
        void 0,
        o
      ) ? (this._setFocusAlignment(this._activeElement, !0, !1), !0) : !1;
    }, t.prototype._moveFocusPaging = function(n, r) {
      r === void 0 && (r = !0);
      var o = this._activeElement;
      if (!o || !this._root.current || this._isElementInput(o) && !this._shouldInputLoseFocus(o, n))
        return !1;
      var i = Os(o);
      if (!i)
        return !1;
      var a = -1, s = void 0, u = -1, l = -1, c = i.clientHeight, d = o.getBoundingClientRect();
      do
        if (o = n ? Me(this._root.current, o) : He(this._root.current, o), o) {
          var v = o.getBoundingClientRect(), h = Math.floor(v.top), p = Math.floor(d.bottom), _ = Math.floor(v.bottom), m = Math.floor(d.top), b = this._getHorizontalDistanceFromCenter(n, d, v), E = n && h > p + c, x = !n && _ < m - c;
          if (E || x)
            break;
          b > -1 && (n && h > u ? (u = h, a = b, s = o) : !n && _ < l ? (l = _, a = b, s = o) : (a === -1 || b <= a) && (a = b, s = o));
        }
      while (o);
      var y = !1;
      if (s && s !== this._activeElement)
        y = !0, this.focusElement(s), this._setFocusAlignment(s, !1, !0);
      else if (this.props.isCircularNavigation && r)
        return n ? this.focusElement(Me(this._root.current, this._root.current.firstElementChild, !0)) : this.focusElement(He(this._root.current, this._root.current.lastElementChild, !0, !0, !0));
      return y;
    }, t.prototype._setFocusAlignment = function(n, r, o) {
      if (this.props.direction === pe.bidirectional && (!this._focusAlignment || r || o)) {
        var i = n.getBoundingClientRect(), a = i.left + i.width / 2, s = i.top + i.height / 2;
        this._focusAlignment || (this._focusAlignment = { left: a, top: s }), r && (this._focusAlignment.left = a), o && (this._focusAlignment.top = s);
      }
    }, t.prototype._isImmediateDescendantOfZone = function(n) {
      return this._getOwnerZone(n) === this._root.current;
    }, t.prototype._getOwnerZone = function(n) {
      for (var r = qe(n, Xe); r && r !== this._root.current && r !== this._getDocument().body; ) {
        if (Je(r))
          return r;
        r = qe(r, Xe);
      }
      return r;
    }, t.prototype._updateTabIndexes = function(n) {
      !this._activeElement && this.props.defaultTabbableElement && typeof this.props.defaultTabbableElement == "function" && (this._activeElement = this.props.defaultTabbableElement(this._root.current)), !n && this._root.current && (this._defaultFocusElement = null, n = this._root.current, this._activeElement && !mt(n, this._activeElement) && (this._activeElement = null)), this._activeElement && !tt(this._activeElement, void 0, this._inShadowRoot) && (this._activeElement = null);
      for (var r = n && n.children, o = 0; r && o < r.length; o++) {
        var i = r[o];
        Je(i) ? i.getAttribute(Nn) === "true" && (!this._isInnerZone && (!this._activeElement && !this._defaultFocusElement || this._activeElement === i) ? (this._defaultFocusElement = i, i.getAttribute(Ve) !== "0" && i.setAttribute(Ve, "0")) : i.getAttribute(Ve) !== "-1" && i.setAttribute(Ve, "-1")) : (i.getAttribute && i.getAttribute(Nn) === "false" && i.setAttribute(Ve, "-1"), tt(i, void 0, this._inShadowRoot) ? this.props.disabled ? i.setAttribute(Ve, "-1") : !this._isInnerZone && (!this._activeElement && !this._defaultFocusElement || this._activeElement === i) ? (this._defaultFocusElement = i, i.getAttribute(Ve) !== "0" && i.setAttribute(Ve, "0")) : i.getAttribute(Ve) !== "-1" && i.setAttribute(Ve, "-1") : i.tagName === "svg" && i.getAttribute("focusable") !== "false" && i.setAttribute("focusable", "false")), this._updateTabIndexes(i);
      }
    }, t.prototype._isContentEditableElement = function(n) {
      return n && n.getAttribute("contenteditable") === "true";
    }, t.prototype._isElementInput = function(n) {
      return !!(n && n.tagName && (n.tagName.toLowerCase() === "input" || n.tagName.toLowerCase() === "textarea"));
    }, t.prototype._shouldInputLoseFocus = function(n, r) {
      if (!this._processingTabKey && n && n.type && Bd.indexOf(n.type.toLowerCase()) > -1) {
        var o = n.selectionStart, i = n.selectionEnd, a = o !== i, s = n.value, u = n.readOnly;
        if (a || o > 0 && !r && !u || o !== s.length && r && !u || this.props.handleTabKey && !(this.props.shouldInputLoseFocusOnArrowKey && this.props.shouldInputLoseFocusOnArrowKey(n)))
          return !1;
      }
      return !0;
    }, t.prototype._shouldWrapFocus = function(n, r) {
      return this.props.checkForNoWrap ? Ei(n, r) : !0;
    }, t.prototype._portalContainsElement = function(n) {
      return n && !!this._root.current && yi(n, this._root.current);
    }, t.prototype._getDocument = function() {
      return de(this._root.current);
    }, t.contextType = wi, t.defaultProps = {
      isCircularNavigation: !1,
      direction: pe.bidirectional,
      shouldRaiseClicks: !0,
      // Hardcoding uncontrolled flag for proper interop with FluentUI V9.
      "data-tabster": '{"uncontrolled": {}}'
    }, t;
  }(f.Component)
), ce;
(function(e) {
  e[e.Normal = 0] = "Normal", e[e.Divider = 1] = "Divider", e[e.Header = 2] = "Header", e[e.Section = 3] = "Section";
})(ce || (ce = {}));
function Gt(e) {
  return e.canCheck ? !!(e.isChecked || e.checked) : typeof e.isChecked == "boolean" ? e.isChecked : typeof e.checked == "boolean" ? e.checked : null;
}
function it(e) {
  return !!(e.subMenuProps || e.items);
}
function $e(e) {
  return !!(e.isDisabled || e.disabled);
}
function fa(e) {
  var t = Gt(e), n = t !== null;
  return n ? "menuitemcheckbox" : "menuitem";
}
var Zo = function(e) {
  var t = e.item, n = e.classNames, r = t.iconProps;
  return f.createElement(yn, g({}, r, { className: n.icon }));
}, Rd = function(e) {
  var t = e.item, n = e.hasIcons;
  return n ? t.onRenderIcon ? t.onRenderIcon(e, Zo) : Zo(e) : null;
}, Ad = function(e) {
  var t = e.onCheckmarkClick, n = e.item, r = e.classNames, o = Gt(n);
  if (t) {
    var i = function(a) {
      return t(n, a);
    };
    return f.createElement(yn, {
      iconName: n.canCheck !== !1 && o ? "CheckMark" : "",
      className: r.checkmarkIcon,
      // eslint-disable-next-line react/jsx-no-bind
      onClick: i
    });
  }
  return null;
}, Ld = function(e) {
  var t = e.item, n = e.classNames;
  return t.text || t.name ? f.createElement("span", { className: n.label }, t.text || t.name) : null;
}, Fd = function(e) {
  var t = e.item, n = e.classNames;
  return t.secondaryText ? f.createElement("span", { className: n.secondaryText }, t.secondaryText) : null;
}, Od = function(e) {
  var t = e.item, n = e.classNames, r = e.theme;
  return it(t) ? f.createElement(yn, g({ iconName: xe(r) ? "ChevronLeft" : "ChevronRight" }, t.submenuIconProps, { className: n.subMenuIcon })) : null;
}, Hd = (
  /** @class */
  function(e) {
    ze(t, e);
    function t(n) {
      var r = e.call(this, n) || this;
      return r.openSubMenu = function() {
        var o = r.props, i = o.item, a = o.openSubMenu, s = o.getSubmenuTarget;
        if (s) {
          var u = s();
          it(i) && a && u && a(i, u);
        }
      }, r.dismissSubMenu = function() {
        var o = r.props, i = o.item, a = o.dismissSubMenu;
        it(i) && a && a();
      }, r.dismissMenu = function(o) {
        var i = r.props.dismissMenu;
        i && i(void 0, o);
      }, Qn(r), r;
    }
    return t.prototype.render = function() {
      var n = this.props, r = n.item, o = n.classNames, i = r.onRenderContent || this._renderLayout;
      return f.createElement("div", { className: r.split ? o.linkContentMenu : o.linkContent }, i(this.props, {
        renderCheckMarkIcon: Ad,
        renderItemIcon: Rd,
        renderItemName: Ld,
        renderSecondaryText: Fd,
        renderSubMenuIcon: Od
      }));
    }, t.prototype._renderLayout = function(n, r) {
      return f.createElement(
        f.Fragment,
        null,
        r.renderCheckMarkIcon(n),
        r.renderItemIcon(n),
        r.renderItemName(n),
        r.renderSecondaryText(n),
        r.renderSubMenuIcon(n)
      );
    }, t;
  }(f.Component)
), Kd = re(
  // eslint-disable-next-line deprecation/deprecation
  function(e) {
    return gn({
      wrapper: {
        display: "inline-flex",
        height: "100%",
        alignItems: "center"
      },
      divider: {
        width: 1,
        height: "100%",
        backgroundColor: e.palette.neutralTertiaryAlt
      }
    });
  }
), ht = 36, Xo = zi(0, Ui), Wd = re(function(e) {
  var t, n, r, o, i, a = e.semanticColors, s = e.fonts, u = e.palette, l = a.menuItemBackgroundHovered, c = a.menuItemTextHovered, d = a.menuItemBackgroundPressed, v = a.bodyDivider, h = {
    item: [
      s.medium,
      {
        color: a.bodyText,
        position: "relative",
        boxSizing: "border-box"
      }
    ],
    divider: {
      display: "block",
      height: "1px",
      backgroundColor: v,
      position: "relative"
    },
    root: [
      Ut(e),
      s.medium,
      {
        color: a.bodyText,
        backgroundColor: "transparent",
        border: "none",
        width: "100%",
        height: ht,
        lineHeight: ht,
        display: "block",
        cursor: "pointer",
        padding: "0px 8px 0 4px",
        textAlign: "left"
      }
    ],
    rootDisabled: {
      color: a.disabledBodyText,
      cursor: "default",
      pointerEvents: "none",
      selectors: (t = {}, t[G] = {
        // ensure disabled text looks different than enabled
        color: "GrayText",
        opacity: 1
      }, t)
    },
    rootHovered: {
      backgroundColor: l,
      color: c,
      selectors: {
        ".ms-ContextualMenu-icon": {
          color: u.themeDarkAlt
        },
        ".ms-ContextualMenu-submenuIcon": {
          color: u.neutralPrimary
        }
      }
    },
    rootFocused: {
      backgroundColor: u.white
    },
    rootChecked: {
      selectors: {
        ".ms-ContextualMenu-checkmarkIcon": {
          color: u.neutralPrimary
        }
      }
    },
    rootPressed: {
      backgroundColor: d,
      selectors: {
        ".ms-ContextualMenu-icon": {
          color: u.themeDark
        },
        ".ms-ContextualMenu-submenuIcon": {
          color: u.neutralPrimary
        }
      }
    },
    rootExpanded: {
      backgroundColor: d,
      color: a.bodyTextChecked,
      selectors: (n = {
        ".ms-ContextualMenu-submenuIcon": (r = {}, r[G] = {
          // icons inside of anchor tags are not properly inheriting color in high contrast
          color: "inherit"
        }, r)
      }, n[G] = g({}, Qe()), n)
    },
    linkContent: {
      whiteSpace: "nowrap",
      height: "inherit",
      display: "flex",
      alignItems: "center",
      maxWidth: "100%"
    },
    anchorLink: {
      padding: "0px 8px 0 4px",
      textRendering: "auto",
      color: "inherit",
      letterSpacing: "normal",
      wordSpacing: "normal",
      textTransform: "none",
      textIndent: "0px",
      textShadow: "none",
      textDecoration: "none",
      boxSizing: "border-box"
    },
    label: {
      margin: "0 4px",
      verticalAlign: "middle",
      display: "inline-block",
      flexGrow: "1",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      overflow: "hidden"
    },
    secondaryText: {
      color: e.palette.neutralSecondary,
      paddingLeft: "20px",
      textAlign: "right"
    },
    icon: {
      display: "inline-block",
      minHeight: "1px",
      maxHeight: ht,
      fontSize: vt.medium,
      width: vt.medium,
      margin: "0 4px",
      verticalAlign: "middle",
      flexShrink: "0",
      selectors: (o = {}, o[Xo] = {
        fontSize: vt.large,
        width: vt.large
      }, o)
    },
    iconColor: {
      color: a.menuIcon
    },
    iconDisabled: {
      color: a.disabledBodyText
    },
    checkmarkIcon: {
      color: a.bodySubtext
    },
    subMenuIcon: {
      height: ht,
      lineHeight: ht,
      color: u.neutralSecondary,
      textAlign: "center",
      display: "inline-block",
      verticalAlign: "middle",
      flexShrink: "0",
      fontSize: vt.small,
      selectors: (i = {
        ":hover": {
          color: u.neutralPrimary
        },
        ":active": {
          color: u.neutralPrimary
        }
      }, i[Xo] = {
        fontSize: vt.medium
        // 16px
      }, i)
    },
    splitButtonFlexContainer: [
      Ut(e),
      {
        display: "flex",
        height: ht,
        flexWrap: "nowrap",
        justifyContent: "center",
        alignItems: "flex-start"
      }
    ]
  };
  return jt(h);
}), Qo = "28px", Ud = zi(0, Ui), zd = re(
  /* eslint-disable deprecation/deprecation */
  function(e) {
    var t;
    return gn(Kd(e), {
      /* eslint-enable deprecation/deprecation */
      wrapper: {
        position: "absolute",
        right: 28,
        selectors: (t = {}, t[Ud] = {
          right: 32
          // fontSize of the icon increased from 12px to 16px
        }, t)
      },
      divider: {
        height: 16,
        width: 1
      }
    });
  }
), Gd = {
  item: "ms-ContextualMenu-item",
  divider: "ms-ContextualMenu-divider",
  root: "ms-ContextualMenu-link",
  isChecked: "is-checked",
  isExpanded: "is-expanded",
  isDisabled: "is-disabled",
  linkContent: "ms-ContextualMenu-linkContent",
  linkContentMenu: "ms-ContextualMenu-linkContent",
  icon: "ms-ContextualMenu-icon",
  iconColor: "ms-ContextualMenu-iconColor",
  checkmarkIcon: "ms-ContextualMenu-checkmarkIcon",
  subMenuIcon: "ms-ContextualMenu-submenuIcon",
  label: "ms-ContextualMenu-itemText",
  secondaryText: "ms-ContextualMenu-secondaryText",
  splitMenu: "ms-ContextualMenu-splitMenu",
  screenReaderText: "ms-ContextualMenu-screenReaderText"
}, Vd = re(function(e, t, n, r, o, i, a, s, u, l, c, d) {
  var v, h, p, _, m = Wd(e), b = Pt(Gd, e);
  return gn({
    item: [b.item, m.item, a],
    divider: [b.divider, m.divider, s],
    root: [
      b.root,
      m.root,
      r && [b.isChecked, m.rootChecked],
      o && m.anchorLink,
      n && [b.isExpanded, m.rootExpanded],
      t && [b.isDisabled, m.rootDisabled],
      !t && !n && [
        {
          selectors: (v = {
            ":hover": m.rootHovered,
            ":active": m.rootPressed
          }, // eslint-disable-next-line @fluentui/max-len
          v[".".concat(K, " &:focus, .").concat(K, " &:focus:hover, :host(.").concat(K, ") &:focus, :host(.").concat(K, ") &:focus:hover")] = m.rootFocused, v[".".concat(K, " &:hover, :host(.").concat(K, ") &:hover")] = {
            background: "inherit;"
          }, v)
        }
      ],
      d
    ],
    splitPrimary: [
      m.root,
      {
        width: "calc(100% - ".concat(Qo, ")")
      },
      r && ["is-checked", m.rootChecked],
      (t || c) && ["is-disabled", m.rootDisabled],
      !(t || c) && !r && [
        {
          selectors: (h = {
            ":hover": m.rootHovered
          }, // when hovering over the splitPrimary also affect the splitMenu
          h[":hover ~ .".concat(b.splitMenu)] = m.rootHovered, h[":active"] = m.rootPressed, // eslint-disable-next-line @fluentui/max-len
          h[".".concat(K, " &:focus, .").concat(K, " &:focus:hover, :host(.").concat(K, ") &:focus, :host(.").concat(K, ") &:focus:hover")] = m.rootFocused, h[".".concat(K, " &:hover, :host(.").concat(K, ") &:hover")] = {
            background: "inherit;"
          }, h)
        }
      ]
    ],
    splitMenu: [
      b.splitMenu,
      m.root,
      {
        flexBasis: "0",
        padding: "0 8px",
        minWidth: Qo
      },
      n && ["is-expanded", m.rootExpanded],
      t && ["is-disabled", m.rootDisabled],
      !t && !n && [
        {
          selectors: (p = {
            ":hover": m.rootHovered,
            ":active": m.rootPressed
          }, // eslint-disable-next-line @fluentui/max-len
          p[".".concat(K, " &:focus, .").concat(K, " &:focus:hover, :host(.").concat(K, ") &:focus, :host(.").concat(K, ") &:focus:hover")] = m.rootFocused, p[".".concat(K, " &:hover, :host(.").concat(K, ") &:hover")] = {
            background: "inherit;"
          }, p)
        }
      ]
    ],
    anchorLink: m.anchorLink,
    linkContent: [b.linkContent, m.linkContent],
    linkContentMenu: [
      b.linkContentMenu,
      m.linkContent,
      {
        justifyContent: "center"
      }
    ],
    icon: [
      b.icon,
      i && m.iconColor,
      m.icon,
      u,
      t && [b.isDisabled, m.iconDisabled]
    ],
    iconColor: m.iconColor,
    checkmarkIcon: [b.checkmarkIcon, i && m.checkmarkIcon, m.icon, u],
    subMenuIcon: [
      b.subMenuIcon,
      m.subMenuIcon,
      l,
      n && { color: e.palette.neutralPrimary },
      t && [m.iconDisabled]
    ],
    label: [b.label, m.label],
    secondaryText: [b.secondaryText, m.secondaryText],
    splitContainer: [
      m.splitButtonFlexContainer,
      !t && !r && [
        {
          selectors: (_ = {}, // eslint-disable-next-line @fluentui/max-len
          _[".".concat(K, " &:focus, .").concat(K, " &:focus:hover, :host(.").concat(K, ") &:focus, :host(.").concat(K, ") &:focus:hover")] = m.rootFocused, _)
        }
      ]
    ],
    screenReaderText: [
      b.screenReaderText,
      m.screenReaderText,
      Gi,
      { visibility: "hidden" }
    ]
  });
}), va = function(e) {
  var t = e.theme, n = e.disabled, r = e.expanded, o = e.checked, i = e.isAnchorLink, a = e.knownIcon, s = e.itemClassName, u = e.dividerClassName, l = e.iconClassName, c = e.subMenuClassName, d = e.primaryDisabled, v = e.className;
  return Vd(t, n, r, o, i, a, s, u, l, c, d, v);
}, hn = _t(Hd, va, void 0, { scope: "ContextualMenuItem" }), Qr = (
  /** @class */
  function(e) {
    ze(t, e);
    function t(n) {
      var r = e.call(this, n) || this;
      return r._onItemMouseEnter = function(o) {
        var i = r.props, a = i.item, s = i.onItemMouseEnter;
        s && s(a, o, o.currentTarget);
      }, r._onItemClick = function(o) {
        var i = r.props, a = i.item, s = i.onItemClickBase;
        s && s(a, o, o.currentTarget);
      }, r._onItemMouseLeave = function(o) {
        var i = r.props, a = i.item, s = i.onItemMouseLeave;
        s && s(a, o);
      }, r._onItemKeyDown = function(o) {
        var i = r.props, a = i.item, s = i.onItemKeyDown;
        s && s(a, o);
      }, r._onItemMouseMove = function(o) {
        var i = r.props, a = i.item, s = i.onItemMouseMove;
        s && s(a, o, o.currentTarget);
      }, r._getSubmenuTarget = function() {
      }, Qn(r), r;
    }
    return t.prototype.shouldComponentUpdate = function(n) {
      return !zr(n, this.props);
    }, t;
  }(f.Component)
), jd = "ktp", Jo = "-", qd = "data-ktp-target", Yd = "data-ktp-execute-target", $d = "ktp-layer-id", je;
(function(e) {
  e.KEYTIP_ADDED = "keytipAdded", e.KEYTIP_REMOVED = "keytipRemoved", e.KEYTIP_UPDATED = "keytipUpdated", e.PERSISTED_KEYTIP_ADDED = "persistedKeytipAdded", e.PERSISTED_KEYTIP_REMOVED = "persistedKeytipRemoved", e.PERSISTED_KEYTIP_EXECUTE = "persistedKeytipExecute", e.ENTER_KEYTIP_MODE = "enterKeytipMode", e.EXIT_KEYTIP_MODE = "exitKeytipMode";
})(je || (je = {}));
var Zd = (
  /** @class */
  function() {
    function e() {
      this.keytips = {}, this.persistedKeytips = {}, this.sequenceMapping = {}, this.inKeytipMode = !1, this.shouldEnterKeytipMode = !0, this.delayUpdatingKeytipChange = !1;
    }
    return e.getInstance = function() {
      return this._instance;
    }, e.prototype.init = function(t) {
      this.delayUpdatingKeytipChange = t;
    }, e.prototype.register = function(t, n) {
      n === void 0 && (n = !1);
      var r = t;
      n || (r = this.addParentOverflow(t), this.sequenceMapping[r.keySequences.toString()] = r);
      var o = this._getUniqueKtp(r);
      if (n ? this.persistedKeytips[o.uniqueID] = o : this.keytips[o.uniqueID] = o, this.inKeytipMode || !this.delayUpdatingKeytipChange) {
        var i = n ? je.PERSISTED_KEYTIP_ADDED : je.KEYTIP_ADDED;
        nt.raise(this, i, {
          keytip: r,
          uniqueID: o.uniqueID
        });
      }
      return o.uniqueID;
    }, e.prototype.update = function(t, n) {
      var r = this.addParentOverflow(t), o = this._getUniqueKtp(r, n), i = this.keytips[n];
      i && (o.keytip.visible = i.keytip.visible, this.keytips[n] = o, delete this.sequenceMapping[i.keytip.keySequences.toString()], this.sequenceMapping[o.keytip.keySequences.toString()] = o.keytip, (this.inKeytipMode || !this.delayUpdatingKeytipChange) && nt.raise(this, je.KEYTIP_UPDATED, {
        keytip: o.keytip,
        uniqueID: o.uniqueID
      }));
    }, e.prototype.unregister = function(t, n, r) {
      r === void 0 && (r = !1), r ? delete this.persistedKeytips[n] : delete this.keytips[n], !r && delete this.sequenceMapping[t.keySequences.toString()];
      var o = r ? je.PERSISTED_KEYTIP_REMOVED : je.KEYTIP_REMOVED;
      (this.inKeytipMode || !this.delayUpdatingKeytipChange) && nt.raise(this, o, {
        keytip: t,
        uniqueID: n
      });
    }, e.prototype.enterKeytipMode = function() {
      nt.raise(this, je.ENTER_KEYTIP_MODE);
    }, e.prototype.exitKeytipMode = function() {
      nt.raise(this, je.EXIT_KEYTIP_MODE);
    }, e.prototype.getKeytips = function() {
      var t = this;
      return Object.keys(this.keytips).map(function(n) {
        return t.keytips[n].keytip;
      });
    }, e.prototype.addParentOverflow = function(t) {
      var n = ot([], t.keySequences, !0);
      if (n.pop(), n.length !== 0) {
        var r = this.sequenceMapping[n.toString()];
        if (r && r.overflowSetSequence)
          return g(g({}, t), { overflowSetSequence: r.overflowSetSequence });
      }
      return t;
    }, e.prototype.menuExecute = function(t, n) {
      nt.raise(this, je.PERSISTED_KEYTIP_EXECUTE, {
        overflowButtonSequences: t,
        keytipSequences: n
      });
    }, e.prototype._getUniqueKtp = function(t, n) {
      return n === void 0 && (n = Ze()), { keytip: g({}, t), uniqueID: n };
    }, e._instance = new e(), e;
  }()
);
function ha(e) {
  return e.reduce(function(t, n) {
    return t + Jo + n.split("").join(Jo);
  }, jd);
}
function Xd(e, t) {
  var n = t.length, r = ot([], t, !0).pop(), o = ot([], e, !0);
  return Gs(o, n - 1, r);
}
function Qd(e) {
  var t = " " + $d;
  return e.length ? t + " " + ha(e) : t;
}
function Jd(e) {
  var t = f.useRef(), n = e.keytipProps ? g({ disabled: e.disabled }, e.keytipProps) : void 0, r = Yr(Zd.getInstance()), o = $r(e);
  un(function() {
    t.current && n && ((o == null ? void 0 : o.keytipProps) !== e.keytipProps || (o == null ? void 0 : o.disabled) !== e.disabled) && r.update(n, t.current);
  }), un(function() {
    return n && (t.current = r.register(n)), function() {
      n && r.unregister(n, t.current);
    };
  }, []);
  var i = {
    ariaDescribedBy: void 0,
    keytipId: void 0
  };
  return n && (i = ef(r, n, e.ariaDescribedBy)), i;
}
function ef(e, t, n) {
  var r = e.addParentOverflow(t), o = _n(n, Qd(r.keySequences)), i = ot([], r.keySequences, !0);
  r.overflowSetSequence && (i = Xd(i, r.overflowSetSequence));
  var a = ha(i);
  return {
    ariaDescribedBy: o,
    keytipId: a
  };
}
var mn = function(e) {
  var t, n = e.children, r = Vt(e, ["children"]), o = Jd(r), i = o.keytipId, a = o.ariaDescribedBy;
  return n((t = {}, t[qd] = i, t[Yd] = i, t["aria-describedby"] = a, t));
}, tf = (
  /** @class */
  function(e) {
    ze(t, e);
    function t() {
      var n = e !== null && e.apply(this, arguments) || this;
      return n._anchor = f.createRef(), n._getMemoizedMenuButtonKeytipProps = re(function(r) {
        return g(g({}, r), { hasMenu: !0 });
      }), n._getSubmenuTarget = function() {
        return n._anchor.current ? n._anchor.current : void 0;
      }, n._onItemClick = function(r) {
        var o = n.props, i = o.item, a = o.onItemClick;
        a && a(i, r);
      }, n._renderAriaDescription = function(r, o) {
        return r ? f.createElement("span", { id: n._ariaDescriptionId, className: o }, r) : null;
      }, n;
    }
    return t.prototype.render = function() {
      var n = this, r = this.props, o = r.item, i = r.classNames, a = r.index, s = r.focusableElementIndex, u = r.totalItemCount, l = r.hasCheckmarks, c = r.hasIcons, d = r.expandedMenuItemKey, v = r.onItemClick, h = r.openSubMenu, p = r.dismissSubMenu, _ = r.dismissMenu, m = hn;
      this.props.item.contextualMenuItemAs && (m = De(this.props.item.contextualMenuItemAs, m)), this.props.contextualMenuItemAs && (m = De(this.props.contextualMenuItemAs, m));
      var b = o.rel;
      o.target && o.target.toLowerCase() === "_blank" && (b = b || "nofollow noopener noreferrer");
      var E = it(o), x = _e(o, Pi), y = $e(o), M = o.itemProps, I = o.ariaDescription, C = o.keytipProps;
      C && E && (C = this._getMemoizedMenuButtonKeytipProps(C)), I && (this._ariaDescriptionId = Ze());
      var S = _n(o.ariaDescribedBy, I ? this._ariaDescriptionId : void 0, x["aria-describedby"]), T = {
        "aria-describedby": S
      };
      return f.createElement(
        "div",
        null,
        f.createElement(mn, { keytipProps: o.keytipProps, ariaDescribedBy: S, disabled: y }, function(D) {
          return f.createElement(
            "a",
            g({}, T, x, D, {
              ref: n._anchor,
              href: o.href,
              target: o.target,
              rel: b,
              className: i.root,
              role: "menuitem",
              "aria-haspopup": E || void 0,
              "aria-expanded": E ? o.key === d : void 0,
              "aria-posinset": s + 1,
              "aria-setsize": u,
              "aria-disabled": $e(o),
              // eslint-disable-next-line deprecation/deprecation
              style: o.style,
              onClick: n._onItemClick,
              onMouseEnter: n._onItemMouseEnter,
              onMouseLeave: n._onItemMouseLeave,
              onMouseMove: n._onItemMouseMove,
              onKeyDown: E ? n._onItemKeyDown : void 0
            }),
            f.createElement(m, g({ componentRef: o.componentRef, item: o, classNames: i, index: a, onCheckmarkClick: l && v ? v : void 0, hasIcons: c, openSubMenu: h, dismissSubMenu: p, dismissMenu: _, getSubmenuTarget: n._getSubmenuTarget }, M)),
            n._renderAriaDescription(I, i.screenReaderText)
          );
        })
      );
    }, t;
  }(Qr)
), nf = (
  /** @class */
  function(e) {
    ze(t, e);
    function t() {
      var n = e !== null && e.apply(this, arguments) || this;
      return n._btn = f.createRef(), n._getMemoizedMenuButtonKeytipProps = re(function(r) {
        return g(g({}, r), { hasMenu: !0 });
      }), n._renderAriaDescription = function(r, o) {
        return r ? f.createElement("span", { id: n._ariaDescriptionId, className: o }, r) : null;
      }, n._getSubmenuTarget = function() {
        return n._btn.current ? n._btn.current : void 0;
      }, n;
    }
    return t.prototype.render = function() {
      var n = this, r = this.props, o = r.item, i = r.classNames, a = r.index, s = r.focusableElementIndex, u = r.totalItemCount, l = r.hasCheckmarks, c = r.hasIcons, d = r.contextualMenuItemAs, v = r.expandedMenuItemKey, h = r.onItemMouseDown, p = r.onItemClick, _ = r.openSubMenu, m = r.dismissSubMenu, b = r.dismissMenu, E = hn;
      o.contextualMenuItemAs && (E = De(o.contextualMenuItemAs, E)), d && (E = De(d, E));
      var x = Gt(o), y = x !== null, M = fa(o), I = it(o), C = o.itemProps, S = o.ariaLabel, T = o.ariaDescription, D = _e(o, wt);
      delete D.disabled;
      var j = o.role || M;
      T && (this._ariaDescriptionId = Ze());
      var q = _n(o.ariaDescribedBy, T ? this._ariaDescriptionId : void 0, D["aria-describedby"]), be = {
        className: i.root,
        onClick: this._onItemClick,
        onKeyDown: I ? this._onItemKeyDown : void 0,
        onMouseEnter: this._onItemMouseEnter,
        onMouseLeave: this._onItemMouseLeave,
        onMouseDown: function(W) {
          return h ? h(o, W) : void 0;
        },
        onMouseMove: this._onItemMouseMove,
        href: o.href,
        title: o.title,
        "aria-label": S,
        "aria-describedby": q,
        "aria-haspopup": I || void 0,
        "aria-expanded": I ? o.key === v : void 0,
        "aria-posinset": s + 1,
        "aria-setsize": u,
        "aria-disabled": $e(o),
        "aria-checked": (j === "menuitemcheckbox" || j === "menuitemradio") && y ? !!x : void 0,
        "aria-selected": j === "menuitem" && y ? !!x : void 0,
        role: j,
        // eslint-disable-next-line deprecation/deprecation
        style: o.style
      }, R = o.keytipProps;
      return R && I && (R = this._getMemoizedMenuButtonKeytipProps(R)), f.createElement(mn, { keytipProps: R, ariaDescribedBy: q, disabled: $e(o) }, function(W) {
        return f.createElement(
          "button",
          g({ ref: n._btn }, D, be, W),
          f.createElement(E, g({ componentRef: o.componentRef, item: o, classNames: i, index: a, onCheckmarkClick: l && p ? p : void 0, hasIcons: c, openSubMenu: _, dismissSubMenu: m, dismissMenu: b, getSubmenuTarget: n._getSubmenuTarget }, C)),
          n._renderAriaDescription(T, i.screenReaderText)
        );
      });
    }, t;
  }(Qr)
), rf = function(e) {
  var t = e.theme, n = e.getClassNames, r = e.className;
  if (!t)
    throw new Error("Theme is undefined or null.");
  if (n) {
    var o = n(t);
    return {
      wrapper: [o.wrapper],
      divider: [o.divider]
    };
  }
  return {
    wrapper: [
      {
        display: "inline-flex",
        height: "100%",
        alignItems: "center"
      },
      r
    ],
    divider: [
      {
        width: 1,
        height: "100%",
        backgroundColor: t.palette.neutralTertiaryAlt
      }
    ]
  };
}, of = gt(), ma = f.forwardRef(function(e, t) {
  var n = e.styles, r = e.theme, o = e.getClassNames, i = e.className, a = of(n, { theme: r, getClassNames: o, className: i });
  return f.createElement(
    "span",
    { className: a.wrapper, ref: t },
    f.createElement("span", { className: a.divider })
  );
});
ma.displayName = "VerticalDividerBase";
var af = _t(ma, rf, void 0, {
  scope: "VerticalDivider"
}), sf = 500, uf = (
  /** @class */
  function(e) {
    ze(t, e);
    function t(n) {
      var r = e.call(this, n) || this;
      return r._getMemoizedMenuButtonKeytipProps = re(function(o) {
        return g(g({}, o), { hasMenu: !0 });
      }), r._onItemKeyDown = function(o) {
        var i = r.props, a = i.item, s = i.onItemKeyDown;
        o.which === P.enter ? (r._executeItemClick(o), o.preventDefault(), o.stopPropagation()) : s && s(a, o);
      }, r._getSubmenuTarget = function() {
        return r._splitButton;
      }, r._renderAriaDescription = function(o, i) {
        return o ? f.createElement("span", { id: r._ariaDescriptionId, className: i }, o) : null;
      }, r._onItemMouseEnterPrimary = function(o) {
        var i = r.props, a = i.item, s = i.onItemMouseEnter;
        s && s(g(g({}, a), { subMenuProps: void 0, items: void 0 }), o, r._splitButton);
      }, r._onItemMouseEnterIcon = function(o) {
        var i = r.props, a = i.item, s = i.onItemMouseEnter;
        s && s(a, o, r._splitButton);
      }, r._onItemMouseMovePrimary = function(o) {
        var i = r.props, a = i.item, s = i.onItemMouseMove;
        s && s(g(g({}, a), { subMenuProps: void 0, items: void 0 }), o, r._splitButton);
      }, r._onItemMouseMoveIcon = function(o) {
        var i = r.props, a = i.item, s = i.onItemMouseMove;
        s && s(a, o, r._splitButton);
      }, r._onIconItemClick = function(o) {
        var i = r.props, a = i.item, s = i.onItemClickBase;
        s && s(a, o, r._splitButton ? r._splitButton : o.currentTarget);
      }, r._executeItemClick = function(o) {
        var i = r.props, a = i.item, s = i.executeItemClick, u = i.onItemClick;
        if (!(a.disabled || a.isDisabled)) {
          if (r._processingTouch && !a.canCheck && u)
            return u(a, o);
          s && s(a, o);
        }
      }, r._onTouchStart = function(o) {
        r._splitButton && !("onpointerdown" in r._splitButton) && r._handleTouchAndPointerEvent(o);
      }, r._onPointerDown = function(o) {
        o.pointerType === "touch" && (r._handleTouchAndPointerEvent(o), o.preventDefault(), o.stopImmediatePropagation());
      }, r._async = new qn(r), r._events = new nt(r), r._dismissLabelId = Ze(), r;
    }
    return t.prototype.componentDidMount = function() {
      this._splitButton && "onpointerdown" in this._splitButton && this._events.on(this._splitButton, "pointerdown", this._onPointerDown, !0);
    }, t.prototype.componentWillUnmount = function() {
      this._async.dispose(), this._events.dispose();
    }, t.prototype.render = function() {
      var n = this, r, o = this.props, i = o.item, a = o.classNames, s = o.index, u = o.focusableElementIndex, l = o.totalItemCount, c = o.hasCheckmarks, d = o.hasIcons, v = o.onItemMouseLeave, h = o.expandedMenuItemKey, p = it(i), _ = i.keytipProps;
      _ && (_ = this._getMemoizedMenuButtonKeytipProps(_));
      var m = i.ariaDescription;
      m && (this._ariaDescriptionId = Ze());
      var b = (r = Gt(i)) !== null && r !== void 0 ? r : void 0;
      return f.createElement(mn, { keytipProps: _, disabled: $e(i) }, function(E) {
        return f.createElement(
          "div",
          { "data-ktp-target": E["data-ktp-target"], ref: function(x) {
            return n._splitButton = x;
          }, role: fa(i), "aria-label": i.ariaLabel, className: a.splitContainer, "aria-disabled": $e(i), "aria-expanded": p ? i.key === h : void 0, "aria-haspopup": !0, "aria-describedby": _n(i.ariaDescribedBy, m ? n._ariaDescriptionId : void 0, E["aria-describedby"]), "aria-checked": b, "aria-posinset": u + 1, "aria-setsize": l, onMouseEnter: n._onItemMouseEnterPrimary, onMouseLeave: v ? v.bind(n, g(g({}, i), { subMenuProps: null, items: null })) : void 0, onMouseMove: n._onItemMouseMovePrimary, onKeyDown: n._onItemKeyDown, onClick: n._executeItemClick, onTouchStart: n._onTouchStart, tabIndex: 0, "data-is-focusable": !0, "aria-roledescription": i["aria-roledescription"] },
          n._renderSplitPrimaryButton(i, a, s, c, d),
          n._renderSplitDivider(i),
          n._renderSplitIconButton(i, a, s, E),
          n._renderAriaDescription(m, a.screenReaderText)
        );
      });
    }, t.prototype._renderSplitPrimaryButton = function(n, r, o, i, a) {
      var s = this.props, u = s.contextualMenuItemAs, l = u === void 0 ? hn : u, c = s.onItemClick, d = {
        key: n.key,
        disabled: $e(n) || n.primaryDisabled,
        /* eslint-disable deprecation/deprecation */
        name: n.name,
        text: n.text || n.name,
        secondaryText: n.secondaryText,
        /* eslint-enable deprecation/deprecation */
        className: r.splitPrimary,
        canCheck: n.canCheck,
        isChecked: n.isChecked,
        checked: n.checked,
        iconProps: n.iconProps,
        id: this._dismissLabelId,
        onClick: n.onClick,
        onRenderIcon: n.onRenderIcon,
        data: n.data,
        "data-is-focusable": !1
      }, v = n.itemProps;
      return f.createElement(
        "button",
        g({}, _e(d, wt)),
        f.createElement(l, g({ "data-is-focusable": !1, item: d, classNames: r, index: o, onCheckmarkClick: i && c ? c : void 0, hasIcons: a }, v))
      );
    }, t.prototype._renderSplitDivider = function(n) {
      var r = n.getSplitButtonVerticalDividerClassNames || zd;
      return f.createElement(af, { getClassNames: r });
    }, t.prototype._renderSplitIconButton = function(n, r, o, i) {
      var a = this.props, s = a.onItemMouseLeave, u = a.onItemMouseDown, l = a.openSubMenu, c = a.dismissSubMenu, d = a.dismissMenu, v = hn;
      this.props.item.contextualMenuItemAs && (v = De(this.props.item.contextualMenuItemAs, v)), this.props.contextualMenuItemAs && (v = De(this.props.contextualMenuItemAs, v));
      var h = {
        onClick: this._onIconItemClick,
        disabled: $e(n),
        className: r.splitMenu,
        subMenuProps: n.subMenuProps,
        submenuIconProps: n.submenuIconProps,
        split: !0,
        key: n.key,
        "aria-labelledby": this._dismissLabelId
      }, p = g(g({}, _e(h, wt)), {
        onMouseEnter: this._onItemMouseEnterIcon,
        onMouseLeave: s ? s.bind(this, n) : void 0,
        onMouseDown: function(m) {
          return u ? u(n, m) : void 0;
        },
        onMouseMove: this._onItemMouseMoveIcon,
        "data-is-focusable": !1,
        "data-ktp-execute-target": i["data-ktp-execute-target"],
        "aria-haspopup": !0
      }), _ = n.itemProps;
      return f.createElement(
        "button",
        g({}, p),
        f.createElement(v, g({ componentRef: n.componentRef, item: h, classNames: r, index: o, hasIcons: !1, openSubMenu: l, dismissSubMenu: c, dismissMenu: d, getSubmenuTarget: this._getSubmenuTarget }, _))
      );
    }, t.prototype._handleTouchAndPointerEvent = function(n) {
      var r = this, o = this.props.onTap;
      o && o(n), this._lastTouchTimeoutId && (this._async.clearTimeout(this._lastTouchTimeoutId), this._lastTouchTimeoutId = void 0), this._processingTouch = !0, this._lastTouchTimeoutId = this._async.setTimeout(function() {
        r._processingTouch = !1, r._lastTouchTimeoutId = void 0;
      }, sf);
    }, t;
  }(Qr)
), pn;
(function(e) {
  e[e.small = 0] = "small", e[e.medium = 1] = "medium", e[e.large = 2] = "large", e[e.xLarge = 3] = "xLarge", e[e.xxLarge = 4] = "xxLarge", e[e.xxxLarge = 5] = "xxxLarge", e[e.unknown = 999] = "unknown";
})(pn || (pn = {}));
var lf = [479, 639, 1023, 1365, 1919, 99999999], pa;
function ga() {
  var e;
  return (e = pa) !== null && e !== void 0 ? e : pn.large;
}
function cf(e) {
  try {
    return e.document.documentElement.clientWidth;
  } catch {
    return e.innerWidth;
  }
}
function df(e) {
  var t = pn.small;
  if (e) {
    try {
      for (; cf(e) > lf[t]; )
        t++;
    } catch {
      t = ga();
    }
    pa = t;
  } else
    throw new Error("Content was rendered in a server environment without providing a default responsive mode. Call setResponsiveMode to define what the responsive mode is.");
  return t;
}
var ff = function(e, t) {
  var n = f.useState(ga()), r = n[0], o = n[1], i = f.useCallback(function() {
    var s = df(V(e.current));
    r !== s && o(s);
  }, [e, r]), a = Zn();
  return fn(a, "resize", i), f.useEffect(function() {
    t === void 0 && i();
  }, [t]), t ?? r;
}, vf = f.createContext({}), hf = gt(), mf = gt(), pf = {
  items: [],
  shouldFocusOnMount: !0,
  gapSpace: 0,
  directionalHint: ee.bottomAutoEdge,
  beakWidth: 16
};
function ei(e) {
  for (var t = 0, n = 0, r = e; n < r.length; n++) {
    var o = r[n];
    if (o.itemType !== ce.Divider && o.itemType !== ce.Header) {
      var i = o.customOnRenderListLength ? o.customOnRenderListLength : 1;
      t += i;
    }
  }
  return t;
}
function _a(e, t) {
  var n = t == null ? void 0 : t.target, r = e.subMenuProps ? e.subMenuProps.items : e.items;
  if (r) {
    for (var o = [], i = 0, a = r; i < a.length; i++) {
      var s = a[i];
      if (s.preferMenuTargetAsEventTarget) {
        var u = s.onClick, l = Vt(s, ["onClick"]);
        o.push(g(g({}, l), { onClick: Ea(u, n) }));
      } else
        o.push(s);
    }
    return o;
  }
}
function gf(e) {
  return e.some(function(t) {
    return !!(t.canCheck || t.sectionProps && t.sectionProps.items.some(function(n) {
      return n.canCheck === !0;
    }));
  });
}
var ba = 250, Lr = "ContextualMenu", _f = re(function() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  return function(n) {
    return _i.apply(void 0, ot([n, va], e, !1));
  };
});
function bf(e, t) {
  var n = e.hidden, r = n === void 0 ? !1 : n, o = e.onMenuDismissed, i = e.onMenuOpened, a = $r(r), s = f.useRef(i), u = f.useRef(o), l = f.useRef(e);
  s.current = i, u.current = o, l.current = e, f.useEffect(function() {
    var c, d;
    r && a === !1 ? (c = u.current) === null || c === void 0 || c.call(u, l.current) : !r && a !== !1 && ((d = s.current) === null || d === void 0 || d.call(s, l.current));
  }, [r, a]), f.useEffect(function() {
    return function() {
      var c;
      return (c = u.current) === null || c === void 0 ? void 0 : c.call(u, l.current);
    };
  }, []);
}
function yf(e, t) {
  var n = e.hidden, r = e.items, o = e.theme, i = e.className, a = e.id, s = e.target, u = f.useState(), l = u[0], c = u[1], d = f.useState(), v = d[0], h = d[1], p = f.useState(), _ = p[0], m = p[1], b = Qi(Lr, a), E = f.useCallback(function() {
    m(void 0), c(void 0), h(void 0);
  }, []), x = f.useCallback(function(I, C, S) {
    var T = I.key;
    l !== T && (C.focus(), m(S), c(T), h(C));
  }, [l]);
  f.useEffect(function() {
    n && E();
  }, [n, E]);
  var y = kf(t, E), M = function() {
    var I = Ca(l, r), C = null;
    if (I && (C = {
      items: _a(I, { target: s }),
      target: v,
      onDismiss: y,
      isSubMenu: !0,
      id: b,
      shouldFocusOnMount: !0,
      shouldFocusOnContainer: _,
      directionalHint: xe(o) ? ee.leftTopEdge : ee.rightTopEdge,
      className: i,
      gapSpace: 0,
      isBeakVisible: !1
    }, I.subMenuProps && xt(C, I.subMenuProps), I.preferMenuTargetAsEventTarget)) {
      var S = I.onItemClick;
      C.onItemClick = Ea(S, s);
    }
    return C;
  };
  return [l, x, M, y];
}
function Cf(e) {
  var t = e.delayUpdateFocusOnHover, n = e.hidden, r = f.useRef(!t), o = f.useRef(!1);
  f.useEffect(function() {
    r.current = !t, o.current = n ? !1 : !t && o.current;
  }, [t, n]);
  var i = f.useCallback(function() {
    t && (r.current = !1);
  }, [t]);
  return [r, o, i];
}
function Ef(e, t, n) {
  var r = e.hidden, o = e.onRestoreFocus, i = f.useRef(), a = f.useCallback(function(s) {
    var u, l;
    o ? o(s) : s != null && s.documentContainsFocus && ((l = (u = i.current) === null || u === void 0 ? void 0 : u.focus) === null || l === void 0 || l.call(u));
  }, [o]);
  return un(function() {
    var s, u;
    if (r)
      i.current && (a({
        originalElement: i.current,
        containsFocus: !0,
        documentContainsFocus: ((u = de()) === null || u === void 0 ? void 0 : u.hasFocus()) || !1
      }), i.current = void 0);
    else {
      var l = t == null ? void 0 : t.document.activeElement;
      !(!((s = n.current) === null || s === void 0) && s.contains(l)) && l.tagName !== "BODY" && (i.current = l);
    }
  }, [r, t == null ? void 0 : t.document.activeElement, a, n]), [a];
}
function If(e, t, n, r) {
  var o = e.theme, i = e.isSubMenu, a = e.focusZoneProps, s = a === void 0 ? {} : a, u = s.checkForNoWrap, l = s.direction, c = l === void 0 ? pe.vertical : l, d = f.useRef(), v = function(y, M, I) {
    var C = !1;
    return M(y) && (t(y, I), y.preventDefault(), y.stopPropagation(), C = !0), C;
  }, h = function(y) {
    var M = xe(o) ? P.right : P.left;
    return y.which !== M || !i ? !1 : !!(c === pe.vertical || u && !Ei(y.target, "data-no-horizontal-wrap"));
  }, p = function(y) {
    return (
      // eslint-disable-next-line deprecation/deprecation
      y.which === P.escape || h(y) || // eslint-disable-next-line deprecation/deprecation
      y.which === P.up && (y.altKey || y.metaKey)
    );
  }, _ = function(y) {
    d.current = ti(y);
    var M = y.which === P.escape && (Oo() || Fo());
    return v(y, p, M);
  }, m = function(y) {
    var M = d.current && ti(y);
    return d.current = !1, !!M && !(Fo() || Oo());
  }, b = function(y) {
    return v(
      y,
      m,
      !0
      /* dismissAllMenus */
    );
  }, E = function(y) {
    var M = _(y);
    if (!(M || !n.current)) {
      var I = !!(y.altKey || y.metaKey), C = y.which === P.up, S = y.which === P.down;
      if (!I && (C || S)) {
        var T = C ? Ds(n.current, n.current.lastChild, !0) : ws(n.current, n.current.firstChild, !0);
        T && (T.focus(), y.preventDefault(), y.stopPropagation());
      }
    }
  }, x = function(y, M) {
    var I = xe(o) ? P.left : P.right;
    !y.disabled && // eslint-disable-next-line deprecation/deprecation
    (M.which === I || M.which === P.enter || M.which === P.down && (M.altKey || M.metaKey)) && (r(y, M.currentTarget), M.preventDefault());
  };
  return [_, b, E, x];
}
function xf(e) {
  var t = f.useRef(!0), n = f.useRef(), r = function() {
    !t.current && n.current !== void 0 ? (e.clearTimeout(n.current), n.current = void 0) : t.current = !1, n.current = e.setTimeout(function() {
      t.current = !0;
    }, ba);
  };
  return [r, t];
}
function kf(e, t) {
  var n = f.useRef(!1);
  f.useEffect(function() {
    return n.current = !0, function() {
      n.current = !1;
    };
  }, []);
  var r = function(o, i) {
    i ? e(o, i) : n.current && t();
  };
  return r;
}
function Mf(e, t) {
  var n = e.subMenuHoverDelay, r = n === void 0 ? ba : n, o = f.useRef(void 0), i = function() {
    o.current !== void 0 && (t.clearTimeout(o.current), o.current = void 0);
  }, a = function(s) {
    o.current = t.setTimeout(function() {
      s(), i();
    }, r);
  };
  return [i, a, o];
}
function Sf(e, t, n, r, o, i, a, s, u, l, c, d, v) {
  var h = e.target, p = function(C, S, T) {
    o.current && (i.current = !0), !m() && E(C, S, T);
  }, _ = function(C, S, T) {
    var D = S.currentTarget;
    if (o.current)
      i.current = !0;
    else
      return;
    !t.current || n.current !== void 0 || D === (r == null ? void 0 : r.document.activeElement) || E(C, S, T);
  }, m = function() {
    return !t.current || !i.current;
  }, b = function(C, S) {
    var T;
    if (!m() && (l(), a === void 0))
      if (s.current.setActive)
        try {
          s.current.setActive();
        } catch {
        }
      else
        (T = s.current) === null || T === void 0 || T.focus();
  }, E = function(C, S, T) {
    var D = T || S.currentTarget;
    C.key !== a && (l(), a === void 0 && D.focus(), it(C) ? (S.stopPropagation(), u(function() {
      D.focus(), c(C, D, !0);
    })) : u(function() {
      d(S), D.focus();
    }));
  }, x = function(C, S) {
    y(C, S, S.currentTarget);
  }, y = function(C, S, T) {
    var D = _a(C, { target: h });
    if (l(), !it(C) && (!D || !D.length))
      I(C, S);
    else if (C.key !== a) {
      var j = typeof e.shouldFocusOnContainer == "boolean" ? e.shouldFocusOnContainer : S.nativeEvent.pointerType === "mouse";
      c(C, T, j);
    }
    S.stopPropagation(), S.preventDefault();
  }, M = function(C, S) {
    I(C, S), S.stopPropagation();
  }, I = function(C, S) {
    if (!(C.disabled || C.isDisabled)) {
      C.preferMenuTargetAsEventTarget && Ia(S, h);
      var T = !1;
      C.onClick ? T = !!C.onClick(S, C) : e.onItemClick && (T = !!e.onItemClick(S, C)), (T || !S.defaultPrevented) && v(S, !0);
    }
  };
  return [
    p,
    _,
    b,
    x,
    M,
    I,
    y
  ];
}
var ya = f.memo(f.forwardRef(function(e, t) {
  var n, r = jr(pf, e);
  r.ref;
  var o = Vt(r, ["ref"]), i = f.useRef(null), a = Yt(), s = Qi(Lr, o.id);
  ea({
    name: Lr,
    props: o,
    deprecations: {
      getMenuClassNames: "styles"
    }
  });
  var u = function(k, B) {
    var F;
    return (F = o.onDismiss) === null || F === void 0 ? void 0 : F.call(o, k, B);
  }, l = Ji(o.target, i), c = l[0], d = l[1], v = Ef(o, d, i)[0], h = yf(o, u), p = h[0], _ = h[1], m = h[2], b = h[3], E = Cf(o), x = E[0], y = E[1], M = E[2], I = xf(a), C = I[0], S = I[1], T = Mf(o, a), D = T[0], j = T[1], q = T[2], be = ff(i, o.responsiveMode);
  bf(o);
  var R = If(o, u, i, _), W = R[0], U = R[1], ye = R[2], se = R[3], ne = Sf(o, S, q, d, x, y, p, i, j, D, _, b, u), oe = ne[0], J = ne[1], Ct = ne[2], Re = ne[3], Z = ne[4], rr = ne[5], $t = ne[6], Cn = function(k, B, F) {
    var O = 0, ve = k.items, Ce = k.totalItemCount, A = k.hasCheckmarks, he = k.hasIcons;
    return f.createElement("ul", { className: B.list, onKeyDown: W, onKeyUp: U, role: "presentation" }, ve.map(function(Q, ue) {
      var Se = Zt(Q, ue, O, Ce, A, he, B);
      if (Q.itemType !== ce.Divider && Q.itemType !== ce.Header) {
        var Ae = Q.customOnRenderListLength ? Q.customOnRenderListLength : 1;
        O += Ae;
      }
      return Se;
    }));
  }, or = function(k, B) {
    var F = o.focusZoneAs, O = F === void 0 ? Nd : F;
    return f.createElement(O, g({}, B), k);
  }, Zt = function(k, B, F, O, ve, Ce, A) {
    var he, Q = [], ue = k.iconProps || { iconName: "None" }, Se = k.getItemClassNames, Ae = k.itemProps, kn = Ae ? Ae.styles : void 0, Xt = k.itemType === ce.Divider ? k.className : void 0, ut = k.submenuIconProps ? k.submenuIconProps.className : "", Le;
    if (Se)
      Le = Se(o.theme, $e(k), p === k.key, !!Gt(k), !!k.href, ue.iconName !== "None", k.className, Xt, ue.className, ut, k.primaryDisabled);
    else {
      var lr = {
        theme: o.theme,
        disabled: $e(k),
        expanded: p === k.key,
        checked: !!Gt(k),
        isAnchorLink: !!k.href,
        knownIcon: ue.iconName !== "None",
        itemClassName: k.className,
        dividerClassName: Xt,
        iconClassName: ue.className,
        subMenuClassName: ut,
        primaryDisabled: k.primaryDisabled
      };
      Le = mf(_f((he = A.subComponentStyles) === null || he === void 0 ? void 0 : he.menuItem, kn), lr);
    }
    switch ((k.text === "-" || k.name === "-") && (k.itemType = ce.Divider), k.itemType) {
      case ce.Divider:
        Q.push(Ge(B, Le));
        break;
      case ce.Header:
        Q.push(Ge(B, Le));
        var cr = xn(k, Le, A, B, ve, Ce);
        Q.push(Bt(cr, k.key || B, Le, k.title));
        break;
      case ce.Section:
        Q.push(In(k, Le, A, B, ve, Ce));
        break;
      default:
        var vo = function() {
          return ir(k, Le, B, F, O, ve, Ce);
        }, Ya = o.onRenderContextualMenuItem ? o.onRenderContextualMenuItem(k, vo) : vo();
        Q.push(Bt(Ya, k.key || B, Le, k.title));
        break;
    }
    return f.createElement(f.Fragment, { key: k.key }, Q);
  }, En = function(k, B) {
    var F = k.index, O = k.focusableElementIndex, ve = k.totalItemCount, Ce = k.hasCheckmarks, A = k.hasIcons;
    return Zt(k, F, O, ve, Ce, A, B);
  }, In = function(k, B, F, O, ve, Ce) {
    var A = k.sectionProps;
    if (A) {
      var he, Q;
      if (A.title) {
        var ue = void 0, Se = "";
        if (typeof A.title == "string") {
          var Ae = s + A.title.replace(/\s/g, "");
          ue = {
            key: "section-".concat(A.title, "-title"),
            itemType: ce.Header,
            text: A.title,
            id: Ae
          }, Se = Ae;
        } else {
          var kn = A.title.id || s + A.title.key.replace(/\s/g, "");
          ue = g(g({}, A.title), { id: kn }), Se = kn;
        }
        ue && (Q = {
          role: "group",
          "aria-labelledby": Se
        }, he = xn(ue, B, F, O, ve, Ce));
      }
      if (A.items && A.items.length > 0) {
        var Xt = 0;
        return f.createElement(
          "li",
          { role: "presentation", key: A.key || k.key || "section-".concat(O) },
          f.createElement(
            "div",
            g({}, Q),
            f.createElement(
              "ul",
              { className: F.list, role: "presentation" },
              A.topDivider && Ge(O, B, !0, !0),
              he && Bt(he, k.key || O, B, k.title),
              A.items.map(function(ut, Le) {
                var lr = Zt(ut, Le, Xt, ei(A.items), ve, Ce, F);
                if (ut.itemType !== ce.Divider && ut.itemType !== ce.Header) {
                  var cr = ut.customOnRenderListLength ? ut.customOnRenderListLength : 1;
                  Xt += cr;
                }
                return lr;
              }),
              A.bottomDivider && Ge(O, B, !1, !0)
            )
          )
        );
      }
    }
  }, Bt = function(k, B, F, O) {
    return f.createElement("li", { role: "presentation", title: O, key: B, className: F.item }, k);
  }, Ge = function(k, B, F, O) {
    return O || k > 0 ? f.createElement("li", { role: "separator", key: "separator-" + k + (F === void 0 ? "" : F ? "-top" : "-bottom"), className: B.divider, "aria-hidden": "true" }) : null;
  }, ir = function(k, B, F, O, ve, Ce, A) {
    if (k.onRender)
      return k.onRender(g({ "aria-posinset": O + 1, "aria-setsize": ve }, k), u);
    var he = o.contextualMenuItemAs, Q = {
      item: k,
      classNames: B,
      index: F,
      focusableElementIndex: O,
      totalItemCount: ve,
      hasCheckmarks: Ce,
      hasIcons: A,
      contextualMenuItemAs: he,
      onItemMouseEnter: oe,
      onItemMouseLeave: Ct,
      onItemMouseMove: J,
      onItemMouseDown: Tf,
      executeItemClick: rr,
      onItemKeyDown: se,
      expandedMenuItemKey: p,
      openSubMenu: _,
      dismissSubMenu: b,
      dismissMenu: u
    };
    if (k.href) {
      var ue = tf;
      return k.contextualMenuItemWrapperAs && (ue = De(k.contextualMenuItemWrapperAs, ue)), f.createElement(ue, g({}, Q, { onItemClick: Z }));
    }
    if (k.split && it(k)) {
      var Se = uf;
      return k.contextualMenuItemWrapperAs && (Se = De(k.contextualMenuItemWrapperAs, Se)), f.createElement(Se, g({}, Q, { onItemClick: Re, onItemClickBase: $t, onTap: D }));
    }
    var Ae = nf;
    return k.contextualMenuItemWrapperAs && (Ae = De(k.contextualMenuItemWrapperAs, Ae)), f.createElement(Ae, g({}, Q, { onItemClick: Re, onItemClickBase: $t }));
  }, xn = function(k, B, F, O, ve, Ce) {
    var A = hn;
    k.contextualMenuItemAs && (A = De(k.contextualMenuItemAs, A)), o.contextualMenuItemAs && (A = De(o.contextualMenuItemAs, A));
    var he = k.itemProps, Q = k.id, ue = he && _e(he, Xn);
    return (
      // eslint-disable-next-line deprecation/deprecation
      f.createElement(
        "div",
        g({ id: Q, className: F.header }, ue, { style: k.style }),
        f.createElement(A, g({ item: k, classNames: B, index: O, onCheckmarkClick: ve ? Re : void 0, hasIcons: Ce }, he))
      )
    );
  }, Nt = o.isBeakVisible, at = o.items, Jr = o.labelElementId, ka = o.id, eo = o.className, Ma = o.beakWidth, Sa = o.directionalHint, Ta = o.directionalHintForRTL, wa = o.alignTargetEdge, Da = o.gapSpace, Pa = o.coverTarget, to = o.ariaLabel, Ba = o.doNotLayer, Na = o.target, Ra = o.bounds, no = o.useTargetWidth, ro = o.useTargetAsMinWidth, Aa = o.directionalHintFixed, La = o.shouldFocusOnMount, Fa = o.shouldFocusOnContainer, oo = o.title, Oa = o.styles, io = o.theme, ar = o.calloutProps, ao = o.onRenderSubMenu, Ha = ao === void 0 ? ni : ao, so = o.onRenderMenuList, Ka = so === void 0 ? function(k, B) {
    return Cn(k, st);
  } : so, Wa = o.focusZoneProps, uo = o.getMenuClassNames, st = uo ? uo(io, eo) : hf(Oa, {
    theme: io,
    className: eo
  }), Ua = lo(at);
  function lo(k) {
    for (var B = 0, F = k; B < F.length; B++) {
      var O = F[B];
      if (O.iconProps || O.itemType === ce.Section && O.sectionProps && lo(O.sectionProps.items))
        return !0;
    }
    return !1;
  }
  var za = g(g({ direction: pe.vertical, handleTabKey: Ar.all, isCircularNavigation: !0, "data-tabster": '{"uncontrolled": {}, "focusable": { "excludeFromMover": true }}' }, Wa), { className: Ke(st.root, (n = o.focusZoneProps) === null || n === void 0 ? void 0 : n.className) }), Ga = gf(at), co = p && o.hidden !== !0 ? m() : null;
  Nt = Nt === void 0 ? be <= pn.medium : Nt;
  var sr, ur = c.current;
  if ((no || ro) && ur && ur.offsetWidth) {
    var Va = ur.getBoundingClientRect(), fo = Va.width - 2;
    no ? sr = {
      width: fo
    } : ro && (sr = {
      minWidth: fo
    });
  }
  if (at && at.length > 0) {
    var ja = ei(at), qa = st.subComponentStyles ? st.subComponentStyles.callout : void 0;
    return f.createElement(vf.Consumer, null, function(k) {
      return f.createElement(
        ua,
        g({ styles: qa, onRestoreFocus: v }, ar, { target: Na || k.target, isBeakVisible: Nt, beakWidth: Ma, directionalHint: Sa, directionalHintForRTL: Ta, gapSpace: Da, coverTarget: Pa, doNotLayer: Ba, className: Ke("ms-ContextualMenu-Callout", ar && ar.className), setInitialFocus: La, onDismiss: o.onDismiss || k.onDismiss, onScroll: C, bounds: Ra, directionalHintFixed: Aa, alignTargetEdge: wa, hidden: o.hidden || k.hidden, ref: t }),
        f.createElement(
          "div",
          { style: sr, ref: i, id: ka, className: st.container, tabIndex: Fa ? 0 : -1, onKeyDown: ye, onKeyUp: U, onFocusCapture: M, "aria-label": to, "aria-labelledby": Jr, role: "menu" },
          oo && f.createElement(
            "div",
            { className: st.title },
            " ",
            oo,
            " "
          ),
          at && at.length ? or(Ka({
            ariaLabel: to,
            items: at,
            totalItemCount: ja,
            hasCheckmarks: Ga,
            hasIcons: Ua,
            defaultMenuItemRenderer: function(B) {
              return En(B, st);
            },
            labelElementId: Jr
          }, function(B, F) {
            return Cn(B, st);
          }), za) : null,
          co && Ha(co, ni)
        ),
        f.createElement(Ni, null)
      );
    });
  } else
    return null;
}), function(e, t) {
  return !t.shouldUpdateWhenHidden && e.hidden && t.hidden ? !0 : zr(e, t);
});
ya.displayName = "ContextualMenuBase";
function ti(e) {
  return e.which === P.alt || e.key === "Meta";
}
function Tf(e, t) {
  var n;
  (n = e.onMouseDown) === null || n === void 0 || n.call(e, e, t);
}
function ni(e, t) {
  throw Error("ContextualMenuBase: onRenderSubMenu callback is null or undefined. Please ensure to set `onRenderSubMenu` property either manually or with `styled` helper.");
}
function Ca(e, t) {
  for (var n = 0, r = t; n < r.length; n++) {
    var o = r[n];
    if (o.itemType === ce.Section && o.sectionProps) {
      var i = Ca(e, o.sectionProps.items);
      if (i)
        return i;
    } else if (o.key && o.key === e)
      return o;
  }
}
function Ea(e, t) {
  return e && function(n, r) {
    return Ia(n, t), e(n, r);
  };
}
function Ia(e, t) {
  e && t && (e.persist(), t instanceof Event ? e.target = t.target : t instanceof Element && (e.target = t));
}
var wf = {
  root: "ms-ContextualMenu",
  container: "ms-ContextualMenu-container",
  list: "ms-ContextualMenu-list",
  header: "ms-ContextualMenu-header",
  title: "ms-ContextualMenu-title",
  isopen: "is-open"
}, Df = function(e) {
  var t = e.className, n = e.theme, r = Pt(wf, n), o = n.fonts, i = n.semanticColors, a = n.effects;
  return {
    root: [
      n.fonts.medium,
      r.root,
      r.isopen,
      {
        backgroundColor: i.menuBackground,
        minWidth: "180px"
      },
      t
    ],
    container: [
      r.container,
      {
        selectors: {
          ":focus": { outline: 0 }
        }
      }
    ],
    list: [
      r.list,
      r.isopen,
      {
        listStyleType: "none",
        margin: "0",
        padding: "0"
      }
    ],
    header: [
      r.header,
      o.small,
      {
        fontWeight: Y.semibold,
        color: i.menuHeader,
        background: "none",
        backgroundColor: "transparent",
        border: "none",
        height: ht,
        lineHeight: ht,
        cursor: "default",
        padding: "0px 6px",
        userSelect: "none",
        textAlign: "left"
      }
    ],
    title: [
      r.title,
      {
        fontSize: o.mediumPlus.fontSize,
        paddingRight: "14px",
        paddingLeft: "14px",
        paddingBottom: "5px",
        paddingTop: "5px",
        backgroundColor: i.menuItemBackgroundPressed
      }
    ],
    subComponentStyles: {
      callout: {
        root: {
          boxShadow: a.elevation8
        }
      },
      menuItem: {}
    }
  };
};
function ri(e) {
  return f.createElement(xa, g({}, e));
}
var xa = _t(ya, Df, function(e) {
  return {
    onRenderSubMenu: e.onRenderSubMenu ? Ku(e.onRenderSubMenu, ri) : ri
  };
}, { scope: "ContextualMenu" }), Fr = xa;
Fr.displayName = "ContextualMenu";
var oi = {
  msButton: "ms-Button",
  msButtonHasMenu: "ms-Button--hasMenu",
  msButtonIcon: "ms-Button-icon",
  msButtonMenuIcon: "ms-Button-menuIcon",
  msButtonLabel: "ms-Button-label",
  msButtonDescription: "ms-Button-description",
  msButtonScreenReaderText: "ms-Button-screenReaderText",
  msButtonFlexContainer: "ms-Button-flexContainer",
  msButtonTextContainer: "ms-Button-textContainer"
}, Pf = re(function(e, t, n, r, o, i, a, s, u, l, c) {
  var d, v, h = Pt(oi, e || {}), p = l && !c;
  return gn(t.__shadowConfig__, {
    root: [
      h.msButton,
      t.root,
      r,
      u && ["is-checked", t.rootChecked],
      p && [
        "is-expanded",
        t.rootExpanded,
        (d = {}, d[":hover .".concat(h.msButtonIcon)] = t.iconExpandedHovered, // menuIcon falls back to rootExpandedHovered to support original behavior
        d[":hover .".concat(h.msButtonMenuIcon)] = t.menuIconExpandedHovered || t.rootExpandedHovered, d[":hover"] = t.rootExpandedHovered, d)
      ],
      s && [oi.msButtonHasMenu, t.rootHasMenu],
      a && ["is-disabled", t.rootDisabled],
      !a && !p && !u && (v = {
        ":hover": t.rootHovered
      }, v[":hover .".concat(h.msButtonLabel)] = t.labelHovered, v[":hover .".concat(h.msButtonIcon)] = t.iconHovered, v[":hover .".concat(h.msButtonDescription)] = t.descriptionHovered, v[":hover .".concat(h.msButtonMenuIcon)] = t.menuIconHovered, v[":focus"] = t.rootFocused, v[":active"] = t.rootPressed, v[":active .".concat(h.msButtonIcon)] = t.iconPressed, v[":active .".concat(h.msButtonDescription)] = t.descriptionPressed, v[":active .".concat(h.msButtonMenuIcon)] = t.menuIconPressed, v),
      a && u && [t.rootCheckedDisabled],
      !a && u && {
        ":hover": t.rootCheckedHovered,
        ":active": t.rootCheckedPressed
      },
      n
    ],
    flexContainer: [h.msButtonFlexContainer, t.flexContainer],
    textContainer: [h.msButtonTextContainer, t.textContainer],
    icon: [
      h.msButtonIcon,
      o,
      t.icon,
      p && t.iconExpanded,
      u && t.iconChecked,
      a && t.iconDisabled
    ],
    label: [h.msButtonLabel, t.label, u && t.labelChecked, a && t.labelDisabled],
    menuIcon: [
      h.msButtonMenuIcon,
      i,
      t.menuIcon,
      u && t.menuIconChecked,
      a && !c && t.menuIconDisabled,
      !a && !p && !u && {
        ":hover": t.menuIconHovered,
        ":active": t.menuIconPressed
      },
      p && ["is-expanded", t.menuIconExpanded]
    ],
    description: [
      h.msButtonDescription,
      t.description,
      u && t.descriptionChecked,
      a && t.descriptionDisabled
    ],
    screenReaderText: [h.msButtonScreenReaderText, t.screenReaderText]
  });
}), Bf = {
  msSplitButtonDivider: "ms-SplitButton-divider"
}, Nf = re(function(e, t, n, r, o) {
  return {
    root: rt(e.splitButtonMenuButton, n && [e.splitButtonMenuButtonExpanded], t && [e.splitButtonMenuButtonDisabled], r && !t && [e.splitButtonMenuButtonChecked], o && !t && [
      {
        ":focus": e.splitButtonMenuFocused
      }
    ]),
    splitButtonContainer: rt(e.splitButtonContainer, !t && r && [
      e.splitButtonContainerChecked,
      {
        ":hover": e.splitButtonContainerCheckedHovered
      }
    ], !t && !r && [
      {
        ":hover": e.splitButtonContainerHovered,
        ":focus": e.splitButtonContainerFocused
      }
    ], t && e.splitButtonContainerDisabled),
    icon: rt(e.splitButtonMenuIcon, t && e.splitButtonMenuIconDisabled, !t && o && e.splitButtonMenuIcon),
    flexContainer: rt(e.splitButtonFlexContainer),
    divider: rt(Bf.msSplitButtonDivider, e.splitButtonDivider, (o || t) && e.splitButtonDividerDisabled)
  };
}), Rf = 500, ii = "BaseButton", Uf = (
  /** @class */
  function(e) {
    ze(t, e);
    function t(n) {
      var r = e.call(this, n) || this;
      return r._buttonElement = f.createRef(), r._splitButtonContainer = f.createRef(), r._mergedRef = Ki(), r._renderedVisibleMenu = !1, r._getMemoizedMenuButtonKeytipProps = re(function(o) {
        return g(g({}, o), { hasMenu: !0 });
      }), r._onRenderIcon = function(o, i) {
        var a = r.props.iconProps;
        if (a && (a.iconName !== void 0 || a.imageProps)) {
          var s = a.className, u = a.imageProps, l = Vt(a, ["className", "imageProps"]);
          if (a.styles)
            return f.createElement(yn, g({ className: Ke(r._classNames.icon, s), imageProps: u }, l));
          if (a.iconName)
            return f.createElement(Rr, g({ className: Ke(r._classNames.icon, s) }, l));
          if (u)
            return f.createElement(Sd, g({ className: Ke(r._classNames.icon, s), imageProps: u }, l));
        }
        return null;
      }, r._onRenderTextContents = function() {
        var o, i, a, s, u = (o = r.props, o.text), l = o.children, c = (i = o.secondaryText, i === void 0 ? r.props.description : i), d = (a = o.onRenderText, a === void 0 ? r._onRenderText : a), v = (s = o.onRenderDescription, s === void 0 ? r._onRenderDescription : s);
        return u || typeof l == "string" || c ? f.createElement(
          "span",
          { className: r._classNames.textContainer },
          d(r.props, r._onRenderText),
          v(r.props, r._onRenderDescription)
        ) : [d(r.props, r._onRenderText), v(r.props, r._onRenderDescription)];
      }, r._onRenderText = function() {
        var o = r.props.text, i = r.props.children;
        return o === void 0 && typeof i == "string" && (o = i), r._hasText() ? f.createElement("span", { key: r._labelId, className: r._classNames.label, id: r._labelId }, o) : null;
      }, r._onRenderChildren = function() {
        var o = r.props.children;
        return typeof o == "string" ? null : o;
      }, r._onRenderDescription = function(o) {
        var i, a = (i = o.secondaryText, i === void 0 ? r.props.description : i);
        return a ? f.createElement("span", { key: r._descriptionId, className: r._classNames.description, id: r._descriptionId }, a) : null;
      }, r._onRenderAriaDescription = function() {
        var o = r.props.ariaDescription;
        return o ? f.createElement("span", { className: r._classNames.screenReaderText, id: r._ariaDescriptionId }, o) : null;
      }, r._onRenderMenuIcon = function(o) {
        var i = r.props.menuIconProps;
        return f.createElement(Rr, g({ iconName: "ChevronDown" }, i, { className: r._classNames.menuIcon }));
      }, r._onRenderMenu = function(o) {
        var i = r.props.menuAs ? De(r.props.menuAs, Fr) : Fr;
        return f.createElement(i, g({}, o));
      }, r._onDismissMenu = function(o) {
        var i = r.props.menuProps;
        i && i.onDismiss && i.onDismiss(o), (!o || !o.defaultPrevented) && r._dismissMenu();
      }, r._dismissMenu = function() {
        r._menuShouldFocusOnMount = void 0, r._menuShouldFocusOnContainer = void 0, r.setState({ menuHidden: !0 });
      }, r._openMenu = function(o, i) {
        i === void 0 && (i = !0), r.props.menuProps && (r._menuShouldFocusOnContainer = o, r._menuShouldFocusOnMount = i, r._renderedVisibleMenu = !0, r.setState({ menuHidden: !1 }));
      }, r._onToggleMenu = function(o) {
        var i = !0;
        r.props.menuProps && r.props.menuProps.shouldFocusOnMount === !1 && (i = !1), r.state.menuHidden ? r._openMenu(o, i) : r._dismissMenu();
      }, r._onSplitContainerFocusCapture = function(o) {
        var i = r._splitButtonContainer.current;
        !i || o.target && yi(o.target, i) || i.focus();
      }, r._onSplitButtonPrimaryClick = function(o) {
        r.state.menuHidden || r._dismissMenu();
        var i = r._processingTouch && !r.props.toggle;
        !i && r.props.onClick ? r.props.onClick(o) : i && r._onMenuClick(o);
      }, r._onKeyDown = function(o) {
        r.props.disabled && (o.which === P.enter || o.which === P.space) ? (o.preventDefault(), o.stopPropagation()) : r.props.disabled || (r.props.menuProps ? r._onMenuKeyDown(o) : r.props.onKeyDown !== void 0 && r.props.onKeyDown(o));
      }, r._onKeyUp = function(o) {
        !r.props.disabled && r.props.onKeyUp !== void 0 && r.props.onKeyUp(o);
      }, r._onKeyPress = function(o) {
        !r.props.disabled && r.props.onKeyPress !== void 0 && r.props.onKeyPress(o);
      }, r._onMouseUp = function(o) {
        !r.props.disabled && r.props.onMouseUp !== void 0 && r.props.onMouseUp(o);
      }, r._onMouseDown = function(o) {
        !r.props.disabled && r.props.onMouseDown !== void 0 && r.props.onMouseDown(o);
      }, r._onClick = function(o) {
        r.props.disabled || (r.props.menuProps ? r._onMenuClick(o) : r.props.onClick !== void 0 && r.props.onClick(o));
      }, r._onSplitButtonContainerKeyDown = function(o) {
        o.which === P.enter || o.which === P.space ? r._buttonElement.current && (r._buttonElement.current.click(), o.preventDefault(), o.stopPropagation()) : r._onMenuKeyDown(o);
      }, r._onMenuKeyDown = function(o) {
        var i;
        if (!r.props.disabled) {
          r.props.onKeyDown && r.props.onKeyDown(o);
          var a = o.which === P.up, s = o.which === P.down;
          if (!o.defaultPrevented && r._isValidMenuOpenKey(o)) {
            var u = r.props.onMenuClick;
            u && u(o, r.props), r._onToggleMenu(!1), o.preventDefault(), o.stopPropagation();
          }
          if ((o.which === P.enter || o.which === P.space) && St(!0, o.target, (i = r.context) === null || i === void 0 ? void 0 : i.registeredProviders), !(o.altKey || o.metaKey) && (a || s) && !r.state.menuHidden && r.props.menuProps) {
            var l = r._menuShouldFocusOnMount !== void 0 ? r._menuShouldFocusOnMount : r.props.menuProps.shouldFocusOnMount;
            l || (o.preventDefault(), o.stopPropagation(), r._menuShouldFocusOnMount = !0, r.forceUpdate());
          }
        }
      }, r._onTouchStart = function() {
        r._isSplitButton && r._splitButtonContainer.current && !("onpointerdown" in r._splitButtonContainer.current) && r._handleTouchAndPointerEvent();
      }, r._onMenuClick = function(o) {
        var i, a = (i = r.props, i.onMenuClick), s = i.menuProps;
        a && a(o, r.props);
        var u = typeof (s == null ? void 0 : s.shouldFocusOnContainer) == "boolean" ? s.shouldFocusOnContainer : o.nativeEvent.pointerType === "mouse";
        o.defaultPrevented || (r._onToggleMenu(u), o.preventDefault(), o.stopPropagation());
      }, Qn(r), r._async = new qn(r), r._events = new nt(r), Gr(ii, n, ["menuProps", "onClick"], "split", r.props.split), $n(ii, n, {
        rootProps: void 0,
        description: "secondaryText",
        toggled: "checked"
      }), r._labelId = Ze(), r._descriptionId = Ze(), r._ariaDescriptionId = Ze(), r.state = {
        menuHidden: !0
      }, r;
    }
    return Object.defineProperty(t.prototype, "_isSplitButton", {
      get: function() {
        return !!this.props.menuProps && !!this.props.onClick && this.props.split === !0;
      },
      enumerable: !1,
      configurable: !0
    }), t.prototype.render = function() {
      var n, r, o, i, a, s = (n = this.props, n.ariaDescription), u = n.ariaLabel, l = n.ariaHidden, c = n.className, d = n.disabled, v = n.allowDisabledFocus, h = n.primaryDisabled, p = (r = n.secondaryText, r === void 0 ? this.props.description : r), _ = n.href, m = n.iconProps, b = n.menuIconProps, E = n.styles, x = n.checked, y = n.variantClassName, M = n.theme, I = n.toggle, C = n.getClassNames, S = n.role, T = this.state.menuHidden, D = d || h;
      this._classNames = C ? C(M, c, y, m && m.className, b && b.className, D, x, !T, !!this.props.menuProps, this.props.split, !!v) : Pf(M, E, c, y, m && m.className, b && b.className, D, !!this.props.menuProps, x, !T, this.props.split);
      var j = (o = this, o._ariaDescriptionId), q = o._labelId, be = o._descriptionId, R = !D && !!_, W = R ? "a" : "button", U = _e(
        // eslint-disable-next-line deprecation/deprecation
        xt(R ? {} : { type: "button" }, this.props.rootProps, this.props),
        R ? Pi : wt,
        [
          "disabled"
          // let disabled buttons be focused and styled as disabled.
        ]
      ), ye = u || U["aria-label"], se = void 0;
      s ? se = j : p && this.props.onRenderDescription !== Ws ? se = be : U["aria-describedby"] && (se = U["aria-describedby"]);
      var ne = void 0;
      U["aria-labelledby"] ? ne = U["aria-labelledby"] : se && !ye && (ne = this._hasText() ? q : void 0);
      var oe = !(this.props["data-is-focusable"] === !1 || d && !v || this._isSplitButton), J = S === "menuitemcheckbox" || S === "checkbox", Ct = J || I === !0 ? !!x : void 0, Re = xt(U, (i = {
        className: this._classNames.root,
        // eslint-disable-next-line deprecation/deprecation
        ref: this._mergedRef(this.props.elementRef, this._buttonElement),
        disabled: D && !v,
        onKeyDown: this._onKeyDown,
        onKeyPress: this._onKeyPress,
        onKeyUp: this._onKeyUp,
        onMouseDown: this._onMouseDown,
        onMouseUp: this._onMouseUp,
        onClick: this._onClick,
        "aria-label": ye,
        "aria-labelledby": ne,
        "aria-describedby": se,
        "aria-disabled": D,
        "data-is-focusable": oe
      }, // aria-pressed attribute should only be present for toggle buttons
      // aria-checked attribute should only be present for toggle buttons with checkbox type role
      i[J ? "aria-checked" : "aria-pressed"] = Ct, i));
      if (l && (Re["aria-hidden"] = !0), this._isSplitButton)
        return this._onRenderSplitButtonContent(W, Re);
      if (this.props.menuProps) {
        var Z = (a = this.props.menuProps.id, a === void 0 ? "".concat(this._labelId, "-menu") : a);
        xt(Re, {
          "aria-expanded": !T,
          "aria-controls": T ? null : Z,
          "aria-haspopup": !0
        });
      }
      return this._onRenderContent(W, Re);
    }, t.prototype.componentDidMount = function() {
      this._isSplitButton && this._splitButtonContainer.current && ("onpointerdown" in this._splitButtonContainer.current && this._events.on(this._splitButtonContainer.current, "pointerdown", this._onPointerDown, !0), "onpointerup" in this._splitButtonContainer.current && this.props.onPointerUp && this._events.on(this._splitButtonContainer.current, "pointerup", this.props.onPointerUp, !0));
    }, t.prototype.componentDidUpdate = function(n, r) {
      this.props.onAfterMenuDismiss && !r.menuHidden && this.state.menuHidden && this.props.onAfterMenuDismiss();
    }, t.prototype.componentWillUnmount = function() {
      this._async.dispose(), this._events.dispose();
    }, t.prototype.focus = function() {
      var n, r;
      this._isSplitButton && this._splitButtonContainer.current ? (St(!0, void 0, (n = this.context) === null || n === void 0 ? void 0 : n.registeredProviders), this._splitButtonContainer.current.focus()) : this._buttonElement.current && (St(!0, void 0, (r = this.context) === null || r === void 0 ? void 0 : r.registeredProviders), this._buttonElement.current.focus());
    }, t.prototype.dismissMenu = function() {
      this._dismissMenu();
    }, t.prototype.openMenu = function(n, r) {
      this._openMenu(n, r);
    }, t.prototype._onRenderContent = function(n, r) {
      var o, i, a, s, u, l = this, c = this.props, d = n, v = c.menuIconProps, h = c.menuProps, p = (o = c.onRenderIcon, o === void 0 ? this._onRenderIcon : o), _ = (i = c.onRenderAriaDescription, i === void 0 ? this._onRenderAriaDescription : i), m = (a = c.onRenderChildren, a === void 0 ? this._onRenderChildren : a), b = (s = c.onRenderMenu, s === void 0 ? this._onRenderMenu : s), E = (u = c.onRenderMenuIcon, u === void 0 ? this._onRenderMenuIcon : u), x = c.disabled, y = c.keytipProps;
      y && h && (y = this._getMemoizedMenuButtonKeytipProps(y));
      var M = function(C) {
        return f.createElement(
          d,
          g({}, r, C),
          f.createElement(
            "span",
            { className: l._classNames.flexContainer, "data-automationid": "splitbuttonprimary" },
            p(c, l._onRenderIcon),
            l._onRenderTextContents(),
            _(c, l._onRenderAriaDescription),
            m(c, l._onRenderChildren),
            !l._isSplitButton && (h || v || l.props.onRenderMenuIcon) && E(l.props, l._onRenderMenuIcon),
            h && !h.doNotLayer && l._shouldRenderMenu() && b(l._getMenuProps(h), l._onRenderMenu)
          )
        );
      }, I = y ? (
        // If we're making a split button, we won't put the keytip here
        f.createElement(mn, { keytipProps: this._isSplitButton ? void 0 : y, ariaDescribedBy: r["aria-describedby"], disabled: x }, function(C) {
          return M(C);
        })
      ) : M();
      return h && h.doNotLayer ? f.createElement(
        f.Fragment,
        null,
        I,
        this._shouldRenderMenu() && b(this._getMenuProps(h), this._onRenderMenu)
      ) : f.createElement(
        f.Fragment,
        null,
        I,
        f.createElement(Ni, null)
      );
    }, t.prototype._shouldRenderMenu = function() {
      var n, r = this.state.menuHidden, o = (n = this.props, n.persistMenu), i = n.renderPersistedMenuHiddenOnMount;
      if (r) {
        if (o && (this._renderedVisibleMenu || i))
          return !0;
      } else return !0;
      return !1;
    }, t.prototype._hasText = function() {
      return this.props.text !== null && (this.props.text !== void 0 || typeof this.props.children == "string");
    }, t.prototype._getMenuProps = function(n) {
      var r = this.props.persistMenu, o = this.state.menuHidden;
      return !n.ariaLabel && !n.labelElementId && this._hasText() && (n = g(g({}, n), { labelElementId: this._labelId })), g(g({ id: this._labelId + "-menu", directionalHint: ee.bottomLeftEdge }, n), { shouldFocusOnContainer: this._menuShouldFocusOnContainer, shouldFocusOnMount: this._menuShouldFocusOnMount, hidden: r ? o : void 0, className: Ke("ms-BaseButton-menuhost", n.className), target: this._isSplitButton ? this._splitButtonContainer.current : this._buttonElement.current, onDismiss: this._onDismissMenu });
    }, t.prototype._onRenderSplitButtonContent = function(n, r) {
      var o, i, a = this, s = (o = this.props, i = o.styles, i === void 0 ? {} : i), u = o.disabled, l = o.allowDisabledFocus, c = o.checked, d = o.getSplitButtonClassNames, v = o.primaryDisabled, h = o.menuProps, p = o.toggle, _ = o.role, m = o.primaryActionButtonProps, b = this.props.keytipProps, E = this.state.menuHidden, x = d ? d(!!u, !E, !!c, !!l) : s && Nf(s, !!u, !E, !!c, !!v);
      xt(r, {
        onClick: void 0,
        onPointerDown: void 0,
        onPointerUp: void 0,
        tabIndex: -1,
        "data-is-focusable": !1
      }), b && h && (b = this._getMemoizedMenuButtonKeytipProps(b));
      var y = _e(r, [], ["disabled"]);
      m && xt(r, m);
      var M = function(I) {
        return f.createElement(
          "div",
          g({}, y, { "data-ktp-target": I ? I["data-ktp-target"] : void 0, role: _ || "button", "aria-disabled": u, "aria-haspopup": !0, "aria-expanded": !E, "aria-pressed": p ? !!c : void 0, "aria-describedby": _n(r["aria-describedby"], I ? I["aria-describedby"] : void 0), className: x && x.splitButtonContainer, onKeyDown: a._onSplitButtonContainerKeyDown, onTouchStart: a._onTouchStart, ref: a._splitButtonContainer, "data-is-focusable": !0, onClick: !u && !v ? a._onSplitButtonPrimaryClick : void 0, tabIndex: !u && !v || l ? 0 : void 0, "aria-roledescription": r["aria-roledescription"], onFocusCapture: a._onSplitContainerFocusCapture }),
          f.createElement(
            "span",
            { style: { display: "flex", width: "100%" } },
            a._onRenderContent(n, r),
            a._onRenderSplitButtonMenuButton(x, I),
            a._onRenderSplitButtonDivider(x)
          )
        );
      };
      return b ? f.createElement(mn, { keytipProps: b, disabled: u }, function(I) {
        return M(I);
      }) : M();
    }, t.prototype._onRenderSplitButtonDivider = function(n) {
      if (n && n.divider) {
        var r = function(o) {
          o.stopPropagation();
        };
        return f.createElement("span", { className: n.divider, "aria-hidden": !0, onClick: r });
      }
      return null;
    }, t.prototype._onRenderSplitButtonMenuButton = function(n, r) {
      var o, i = (o = this.props, o.allowDisabledFocus), a = o.checked, s = o.disabled, u = o.splitButtonMenuProps, l = o.splitButtonAriaLabel, c = o.primaryDisabled, d = this.state.menuHidden, v = this.props.menuIconProps;
      v === void 0 && (v = {
        iconName: "ChevronDown"
      });
      var h = g(g({}, u), { styles: n, checked: a, disabled: s, allowDisabledFocus: i, onClick: this._onMenuClick, menuProps: void 0, iconProps: g(g({}, v), { className: this._classNames.menuIcon }), ariaLabel: l, "aria-haspopup": !0, "aria-expanded": !d, "data-is-focusable": !1 });
      return f.createElement(t, g({}, h, { "data-ktp-execute-target": r && r["data-ktp-execute-target"], onMouseDown: this._onMouseDown, tabIndex: c && !i ? 0 : -1 }));
    }, t.prototype._onPointerDown = function(n) {
      var r = this.props.onPointerDown;
      r && r(n), n.pointerType === "touch" && (this._handleTouchAndPointerEvent(), n.preventDefault(), n.stopImmediatePropagation());
    }, t.prototype._handleTouchAndPointerEvent = function() {
      var n = this;
      this._lastTouchTimeoutId !== void 0 && (this._async.clearTimeout(this._lastTouchTimeoutId), this._lastTouchTimeoutId = void 0), this._processingTouch = !0, this._lastTouchTimeoutId = this._async.setTimeout(function() {
        n._processingTouch = !1, n._lastTouchTimeoutId = void 0, n.state.menuHidden && n.focus();
      }, Rf);
    }, t.prototype._isValidMenuOpenKey = function(n) {
      return this.props.menuTriggerKeyCode ? n.which === this.props.menuTriggerKeyCode : this.props.menuProps ? n.which === P.down && (n.altKey || n.metaKey) : !1;
    }, t.defaultProps = {
      baseClassName: "ms-Button",
      styles: {},
      split: !1
    }, t.contextType = sn, t;
  }(f.Component)
), ai = {
  outline: 0
}, si = function(e) {
  return {
    fontSize: e,
    margin: "0 4px",
    height: "16px",
    lineHeight: "16px",
    textAlign: "center",
    flexShrink: 0
  };
}, zf = re(function(e) {
  var t, n, r = e.semanticColors, o = e.effects, i = e.fonts, a = r.buttonBorder, s = r.disabledBackground, u = r.disabledText, l = {
    left: -2,
    top: -2,
    bottom: -2,
    right: -2,
    outlineColor: "ButtonText"
  };
  return {
    root: [
      Ut(e, { inset: 1, highContrastStyle: l, borderColor: "transparent" }),
      e.fonts.medium,
      {
        border: "1px solid " + a,
        borderRadius: o.roundedCorner2,
        boxSizing: "border-box",
        cursor: "pointer",
        display: "inline-block",
        padding: "0 16px",
        textDecoration: "none",
        textAlign: "center",
        userSelect: "none",
        // IE11 workaround for preventing shift of child elements of a button when active.
        ":active > span": {
          position: "relative",
          left: 0,
          top: 0
        }
      }
    ],
    rootDisabled: [
      Ut(e, { inset: 1, highContrastStyle: l, borderColor: "transparent" }),
      {
        backgroundColor: s,
        borderColor: s,
        color: u,
        cursor: "default",
        ":hover": ai,
        ":focus": ai
      }
    ],
    iconDisabled: (t = {
      color: u
    }, t[G] = {
      color: "GrayText"
    }, t),
    menuIconDisabled: (n = {
      color: u
    }, n[G] = {
      color: "GrayText"
    }, n),
    flexContainer: {
      display: "flex",
      height: "100%",
      flexWrap: "nowrap",
      justifyContent: "center",
      alignItems: "center"
    },
    description: {
      display: "block"
    },
    textContainer: {
      flexGrow: 1,
      display: "block"
    },
    icon: si(i.mediumPlus.fontSize),
    menuIcon: si(i.small.fontSize),
    label: {
      margin: "0 4px",
      lineHeight: "100%",
      display: "block"
    },
    screenReaderText: Gi
  };
}), Gf = re(function(e, t) {
  var n, r, o, i, a, s, u, l, c, d, v, h, p, _, m, b, E = e.effects, x = e.palette, y = e.semanticColors, M = {
    left: -2,
    top: -2,
    bottom: -2,
    right: -2,
    border: "none"
  }, I = {
    position: "absolute",
    width: 1,
    right: 31,
    top: 8,
    bottom: 8
  }, C = {
    splitButtonContainer: [
      Ut(e, { highContrastStyle: M, inset: 2, pointerEvents: "none" }),
      {
        display: "inline-flex",
        ".ms-Button--default": {
          borderTopRightRadius: "0",
          borderBottomRightRadius: "0",
          borderRight: "none",
          flexGrow: "1"
        },
        ".ms-Button--primary": (n = {
          borderTopRightRadius: "0",
          borderBottomRightRadius: "0",
          border: "none",
          flexGrow: "1",
          ":hover": {
            border: "none"
          },
          ":active": {
            border: "none"
          }
        }, n[G] = g(g({ color: "WindowText", backgroundColor: "Window", border: "1px solid WindowText", borderRightWidth: "0" }, Qe()), { ":hover": {
          backgroundColor: "Highlight",
          border: "1px solid Highlight",
          borderRightWidth: "0",
          color: "HighlightText"
        }, ":active": {
          border: "1px solid Highlight"
        } }), n),
        ".ms-Button--default + .ms-Button": (r = {}, r[G] = {
          border: "1px solid WindowText",
          borderLeftWidth: "0",
          ":hover": {
            backgroundColor: "HighlightText",
            borderColor: "Highlight",
            color: "Highlight",
            ".ms-Button-menuIcon": g({ backgroundColor: "HighlightText", color: "Highlight" }, Qe())
          }
        }, r),
        '.ms-Button--default + .ms-Button[aria-expanded="true"]': (o = {}, o[G] = {
          backgroundColor: "HighlightText",
          borderColor: "Highlight",
          color: "Highlight",
          ".ms-Button-menuIcon": g({ backgroundColor: "HighlightText", color: "Highlight" }, Qe())
        }, o),
        ".ms-Button--primary + .ms-Button": (i = {
          border: "none"
        }, i[G] = {
          border: "1px solid WindowText",
          borderLeftWidth: "0",
          ":hover": {
            borderLeftWidth: "0",
            backgroundColor: "Highlight",
            borderColor: "Highlight",
            color: "HighlightText",
            ".ms-Button-menuIcon": g(g({}, Qe()), { color: "HighlightText" })
          }
        }, i),
        '.ms-Button--primary + .ms-Button[aria-expanded="true"]': g(g({ backgroundColor: "Highlight", borderColor: "Highlight", color: "HighlightText" }, Qe()), { ".ms-Button-menuIcon": {
          color: "HighlightText"
        } }),
        ".ms-Button.is-disabled": (a = {}, a[G] = {
          color: "GrayText",
          borderColor: "GrayText",
          backgroundColor: "Window"
        }, a)
      }
    ],
    splitButtonContainerHovered: {
      ".ms-Button--default.is-disabled": (s = {
        backgroundColor: y.buttonBackgroundDisabled,
        color: y.buttonTextDisabled
      }, s[G] = {
        color: "GrayText",
        borderColor: "GrayText",
        backgroundColor: "Window"
      }, s),
      ".ms-Button--primary.is-disabled": (u = {
        backgroundColor: y.primaryButtonBackgroundDisabled,
        color: y.primaryButtonTextDisabled
      }, u[G] = {
        color: "GrayText",
        borderColor: "GrayText",
        backgroundColor: "Window"
      }, u)
    },
    splitButtonContainerChecked: {
      ".ms-Button--primary": (l = {}, l[G] = g({ color: "Window", backgroundColor: "WindowText" }, Qe()), l)
    },
    splitButtonContainerCheckedHovered: {
      ".ms-Button--primary": (c = {}, c[G] = g({ color: "Window", backgroundColor: "WindowText" }, Qe()), c)
    },
    splitButtonContainerFocused: {
      outline: "none!important"
    },
    splitButtonMenuButton: (d = {
      padding: 6,
      height: "auto",
      boxSizing: "border-box",
      borderRadius: 0,
      borderTopRightRadius: E.roundedCorner2,
      borderBottomRightRadius: E.roundedCorner2,
      border: "1px solid ".concat(x.neutralSecondaryAlt),
      borderLeft: "none",
      outline: "transparent",
      userSelect: "none",
      display: "inline-block",
      textDecoration: "none",
      textAlign: "center",
      cursor: "pointer",
      verticalAlign: "top",
      width: 32,
      marginLeft: -1,
      marginTop: 0,
      marginRight: 0,
      marginBottom: 0
    }, d[G] = {
      ".ms-Button-menuIcon": {
        color: "WindowText"
      }
    }, d),
    splitButtonDivider: g(g({}, I), (v = {}, v[G] = {
      backgroundColor: "WindowText"
    }, v)),
    splitButtonDividerDisabled: g(g({}, I), (h = {}, h[G] = {
      backgroundColor: "GrayText"
    }, h)),
    splitButtonMenuButtonDisabled: (p = {
      pointerEvents: "none",
      border: "none",
      ":hover": {
        cursor: "default"
      },
      ".ms-Button--primary": (_ = {}, _[G] = {
        color: "GrayText",
        borderColor: "GrayText",
        backgroundColor: "Window"
      }, _),
      ".ms-Button-menuIcon": (m = {}, m[G] = {
        color: "GrayText"
      }, m)
    }, p[G] = {
      color: "GrayText",
      border: "1px solid GrayText",
      backgroundColor: "Window"
    }, p),
    splitButtonFlexContainer: {
      display: "flex",
      height: "100%",
      flexWrap: "nowrap",
      justifyContent: "center",
      alignItems: "center"
    },
    splitButtonContainerDisabled: (b = {
      outline: "none",
      border: "none"
    }, b[G] = g({ color: "GrayText", borderColor: "GrayText", backgroundColor: "Window" }, Qe()), b),
    splitButtonMenuFocused: g({}, Ut(e, { highContrastStyle: M, inset: 2 }))
  };
  return jt(C, t);
});
export {
  Ff as $,
  qn as A,
  Uf as B,
  Kf as C,
  Gi as D,
  rt as E,
  Y as F,
  Vt as G,
  G as H,
  K as I,
  zr as J,
  P as K,
  jr as L,
  Wf as M,
  Ze as N,
  Ns as O,
  _n as P,
  ot as Q,
  Wr as R,
  ua as S,
  ee as T,
  Ke as U,
  Oo as V,
  Ti as W,
  Fo as X,
  nt as Y,
  Ii as Z,
  g as _,
  zf as a,
  Gf as b,
  jt as c,
  ze as d,
  Lf as e,
  Of as f,
  Qe as g,
  V as h,
  ys as i,
  Qn as j,
  de as k,
  _e as l,
  re as m,
  Ws as n,
  Hf as o,
  Qi as p,
  Dt as q,
  Bu as r,
  yn as s,
  ea as t,
  Yr as u,
  gt as v,
  Pt as w,
  _t as x,
  Xn as y,
  Ut as z
};
