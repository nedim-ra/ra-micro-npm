import { j as k } from "../jsx-runtime-B6kdoens.js";
import { H as a, _ as c, g as C, I as y, m as P, a as w, b as M, F as W, c as S, d as m, B as A, n as v, e as h, f as x } from "../SplitButton.styles-rXHIu063.js";
import * as g from "react";
var T = function() {
  return {
    position: "absolute",
    width: 1,
    right: 31,
    top: 8,
    bottom: 8
  };
};
function E(t) {
  var r, e, u, l, i, n = t.semanticColors, d = t.palette, b = n.buttonBackground, s = n.buttonBackgroundPressed, B = n.buttonBackgroundHovered, o = n.buttonBackgroundDisabled, D = n.buttonText, f = n.buttonTextHovered, H = n.buttonTextDisabled, p = n.buttonTextChecked, _ = n.buttonTextCheckedHovered;
  return {
    root: {
      backgroundColor: b,
      color: D
    },
    rootHovered: (r = {
      backgroundColor: B,
      color: f
    }, r[a] = {
      borderColor: "Highlight",
      color: "Highlight"
    }, r),
    rootPressed: {
      backgroundColor: s,
      color: p
    },
    rootExpanded: {
      backgroundColor: s,
      color: p
    },
    rootChecked: {
      backgroundColor: s,
      color: p
    },
    rootCheckedHovered: {
      backgroundColor: s,
      color: _
    },
    rootDisabled: (e = {
      color: H,
      backgroundColor: o
    }, e[a] = {
      color: "GrayText",
      borderColor: "GrayText",
      backgroundColor: "Window"
    }, e),
    // Split button styles
    splitButtonContainer: (u = {}, u[a] = {
      border: "none"
    }, u),
    splitButtonMenuButton: {
      color: d.white,
      backgroundColor: "transparent",
      ":hover": (l = {
        backgroundColor: d.neutralLight
      }, l[a] = {
        color: "Highlight"
      }, l)
    },
    splitButtonMenuButtonDisabled: {
      backgroundColor: n.buttonBackgroundDisabled,
      ":hover": {
        backgroundColor: n.buttonBackgroundDisabled
      }
    },
    splitButtonDivider: c(c({}, T()), (i = { backgroundColor: d.neutralTertiaryAlt }, i[a] = {
      backgroundColor: "WindowText"
    }, i)),
    splitButtonDividerDisabled: {
      backgroundColor: t.palette.neutralTertiaryAlt
    },
    splitButtonMenuButtonChecked: {
      backgroundColor: d.neutralQuaternaryAlt,
      ":hover": {
        backgroundColor: d.neutralQuaternaryAlt
      }
    },
    splitButtonMenuButtonExpanded: {
      backgroundColor: d.neutralQuaternaryAlt,
      ":hover": {
        backgroundColor: d.neutralQuaternaryAlt
      }
    },
    splitButtonMenuIcon: {
      color: n.buttonText
    },
    splitButtonMenuIconDisabled: {
      color: n.buttonTextDisabled
    }
  };
}
function I(t) {
  var r, e, u, l, i, n, d, b, s, B = t.palette, o = t.semanticColors;
  return {
    root: (r = {
      backgroundColor: o.primaryButtonBackground,
      border: "1px solid ".concat(o.primaryButtonBackground),
      color: o.primaryButtonText
    }, r[a] = c({ color: "Window", backgroundColor: "WindowText", borderColor: "WindowText" }, C()), r[".".concat(y, " &:focus, :host(.").concat(y, ") &:focus")] = {
      ":after": {
        border: "none",
        outlineColor: B.white
      }
    }, r),
    rootHovered: (e = {
      backgroundColor: o.primaryButtonBackgroundHovered,
      border: "1px solid ".concat(o.primaryButtonBackgroundHovered),
      color: o.primaryButtonTextHovered
    }, e[a] = {
      color: "Window",
      backgroundColor: "Highlight",
      borderColor: "Highlight"
    }, e),
    rootPressed: (u = {
      backgroundColor: o.primaryButtonBackgroundPressed,
      border: "1px solid ".concat(o.primaryButtonBackgroundPressed),
      color: o.primaryButtonTextPressed
    }, u[a] = c({ color: "Window", backgroundColor: "WindowText", borderColor: "WindowText" }, C()), u),
    rootExpanded: {
      backgroundColor: o.primaryButtonBackgroundPressed,
      color: o.primaryButtonTextPressed
    },
    rootChecked: {
      backgroundColor: o.primaryButtonBackgroundPressed,
      color: o.primaryButtonTextPressed
    },
    rootCheckedHovered: {
      backgroundColor: o.primaryButtonBackgroundPressed,
      color: o.primaryButtonTextPressed
    },
    rootDisabled: (l = {
      color: o.primaryButtonTextDisabled,
      backgroundColor: o.primaryButtonBackgroundDisabled
    }, l[a] = {
      color: "GrayText",
      borderColor: "GrayText",
      backgroundColor: "Window"
    }, l),
    // Split button styles
    splitButtonContainer: (i = {}, i[a] = {
      border: "none"
    }, i),
    splitButtonDivider: c(c({}, T()), (n = { backgroundColor: B.white }, n[a] = {
      backgroundColor: "Window"
    }, n)),
    splitButtonMenuButton: (d = {
      backgroundColor: o.primaryButtonBackground,
      color: o.primaryButtonText
    }, d[a] = {
      backgroundColor: "Canvas"
    }, d[":hover"] = (b = {
      backgroundColor: o.primaryButtonBackgroundHovered
    }, b[a] = {
      color: "Highlight"
    }, b), d),
    splitButtonMenuButtonDisabled: {
      backgroundColor: o.primaryButtonBackgroundDisabled,
      ":hover": {
        backgroundColor: o.primaryButtonBackgroundDisabled
      }
    },
    splitButtonMenuButtonChecked: {
      backgroundColor: o.primaryButtonBackgroundPressed,
      ":hover": {
        backgroundColor: o.primaryButtonBackgroundPressed
      }
    },
    splitButtonMenuButtonExpanded: {
      backgroundColor: o.primaryButtonBackgroundPressed,
      ":hover": {
        backgroundColor: o.primaryButtonBackgroundPressed
      }
    },
    splitButtonMenuIcon: {
      color: o.primaryButtonText
    },
    splitButtonMenuIconDisabled: (s = {
      color: B.neutralTertiary
    }, s[a] = {
      color: "GrayText"
    }, s)
  };
}
var F = "32px", N = "80px", j = P(function(t, r, e) {
  var u = w(t), l = M(t), i = {
    root: {
      minWidth: N,
      minHeight: F
    },
    label: {
      fontWeight: W.semibold
    }
  };
  return S(u, i, e ? I(t) : E(t), l, r);
}), G = (
  /** @class */
  function(t) {
    m(r, t);
    function r() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return r.prototype.render = function() {
      var e, u, l = (e = this.props, u = e.primary, u === void 0 ? !1 : u), i = e.styles, n = e.theme;
      return g.createElement(A, c({}, this.props, { variantClassName: l ? "ms-Button--primary" : "ms-Button--default", styles: j(n, i, l), onRenderDescription: v }));
    }, r = h([
      x("DefaultButton", ["theme", "styles"])
    ], r), r;
  }(g.Component)
), R = (
  /** @class */
  function(t) {
    m(r, t);
    function r() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return r.prototype.render = function() {
      return g.createElement(G, c({}, this.props, { primary: !0, onRenderDescription: v }));
    }, r = h([
      x("PrimaryButton", ["theme", "styles"])
    ], r), r;
  }(g.Component)
);
function L() {
  return /* @__PURE__ */ k.jsxs(k.Fragment, { children: [
    "Hello from RA Micro npm package FluentButton component",
    /* @__PURE__ */ k.jsx(R, { text: "button" })
  ] });
}
export {
  L as default
};
