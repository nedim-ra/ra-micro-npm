import { j as tt } from "../../jsx-runtime-B6kdoens.js";
import * as v from "react";
import ot from "react";
import { i as nt, h as rt, u as me, d as X, K as V, j as Te, A as De, _ as h, k as it, l as ce, o as at, W as Ee, m as j, a as Fe, H as S, c as Y, B as Re, n as ae, e as pe, f as fe, b as st, p as lt, q as He, r as ut, s as dt, t as ct, v as Ae, w as pt, I as be, g as M, x as Ne, y as We, F as Me, z as ft, C as ht, D as gt, E as R, G as se, J as Le, L as _t, M as Ce, N as xe, O as vt, P as mt, Q as J, R as bt, S as Ct, T as xt, U as yt, V as kt, X as St, Y as It, Z as Ot, $ as wt } from "../../SplitButton.styles-rXHIu063.js";
function Pt(n, a) {
  a === void 0 && (a = !0);
  var o = [];
  if (n) {
    for (var e = 0; e < n.children.length; e++)
      o.push(n.children.item(e));
    a && nt(n) && o.push.apply(o, n._virtual.children);
  }
  return o;
}
var ye = function() {
  var n, a = rt();
  return !((n = a == null ? void 0 : a.navigator) === null || n === void 0) && n.userAgent ? a.navigator.userAgent.indexOf("rv:11.0") > -1 : !1;
};
function ee(n) {
  return {
    selectors: {
      "::placeholder": n,
      ":-ms-input-placeholder": n,
      "::-ms-input-placeholder": n
      // Edge
    }
  };
}
function ke(n, a, o) {
  var e = v.useState(a), t = e[0], r = e[1], i = me(n !== void 0), s = i ? n : t, l = v.useRef(s), d = v.useRef(o);
  v.useEffect(function() {
    l.current = s, d.current = o;
  });
  var c = me(function() {
    return function(u, p) {
      var f = typeof u == "function" ? u(l.current) : u;
      d.current && d.current(p, f), i || r(f);
    };
  });
  return [s, c];
}
var Vt = "forward", Se = "backward", Ke = (
  /** @class */
  function(n) {
    X(a, n);
    function a(o) {
      var e = n.call(this, o) || this;
      return e._inputElement = v.createRef(), e._autoFillEnabled = !0, e._onCompositionStart = function(t) {
        e.setState({ isComposing: !0 }), e._autoFillEnabled = !1;
      }, e._onCompositionUpdate = function() {
        ye() && e._updateValue(e._getCurrentInputValue(), !0);
      }, e._onCompositionEnd = function(t) {
        var r = e._getCurrentInputValue();
        e._tryEnableAutofill(r, e.value, !1, !0), e.setState({ isComposing: !1 }), e._async.setTimeout(function() {
          e._updateValue(e._getCurrentInputValue(), !1);
        }, 0);
      }, e._onClick = function() {
        e.value && e.value !== "" && e._autoFillEnabled && (e._autoFillEnabled = !1);
      }, e._onKeyDown = function(t) {
        if (e.props.onKeyDown && e.props.onKeyDown(t), !t.nativeEvent.isComposing)
          switch (t.which) {
            case V.backspace:
              e._autoFillEnabled = !1;
              break;
            case V.left:
            case V.right:
              e._autoFillEnabled && (e.setState(function(r) {
                return {
                  inputValue: e.props.suggestedDisplayValue || r.inputValue
                };
              }), e._autoFillEnabled = !1);
              break;
            default:
              e._autoFillEnabled || e.props.enableAutofillOnKeyPress.indexOf(t.which) !== -1 && (e._autoFillEnabled = !0);
              break;
          }
      }, e._onInputChanged = function(t) {
        var r = e._getCurrentInputValue(t);
        if (e.state.isComposing || e._tryEnableAutofill(r, e.value, t.nativeEvent.isComposing), !(ye() && e.state.isComposing)) {
          var i = t.nativeEvent.isComposing, s = i === void 0 ? e.state.isComposing : i;
          e._updateValue(r, s);
        }
      }, e._onChanged = function() {
      }, e._updateValue = function(t, r) {
        var i;
        if (!(!t && t === e.value)) {
          var s = (i = e.props, i.onInputChange), l = i.onInputValueChange;
          s && (t = (s == null ? void 0 : s(t, r)) || ""), e.setState({ inputValue: t }, function() {
            return l == null ? void 0 : l(t, r);
          });
        }
      }, Te(e), e._async = new De(e), e.state = {
        inputValue: o.defaultVisibleValue || "",
        isComposing: !1
      }, e;
    }
    return a.getDerivedStateFromProps = function(o, e) {
      if (o.updateValueInWillReceiveProps) {
        var t = o.updateValueInWillReceiveProps();
        if (t !== null && t !== e.inputValue && !e.isComposing)
          return h(h({}, e), { inputValue: t });
      }
      return null;
    }, Object.defineProperty(a.prototype, "cursorLocation", {
      get: function() {
        if (this._inputElement.current) {
          var o = this._inputElement.current;
          return o.selectionDirection !== Vt ? o.selectionEnd : o.selectionStart;
        } else
          return -1;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(a.prototype, "isValueSelected", {
      get: function() {
        return !!(this.inputElement && this.inputElement.selectionStart !== this.inputElement.selectionEnd);
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(a.prototype, "value", {
      get: function() {
        return this._getControlledValue() || this.state.inputValue || "";
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(a.prototype, "selectionStart", {
      get: function() {
        return this._inputElement.current ? this._inputElement.current.selectionStart : -1;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(a.prototype, "selectionEnd", {
      get: function() {
        return this._inputElement.current ? this._inputElement.current.selectionEnd : -1;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(a.prototype, "inputElement", {
      get: function() {
        return this._inputElement.current;
      },
      enumerable: !1,
      configurable: !0
    }), a.prototype.componentDidUpdate = function(o, e, t) {
      var r, i, s = (r = this.props, r.suggestedDisplayValue), l = r.shouldSelectFullInputValueInComponentDidUpdate, d = r.preventValueSelection, c = 0;
      if (!d) {
        var u = ((i = this.context) === null || i === void 0 ? void 0 : i.window.document) || it(this._inputElement.current), p = this._inputElement.current && this._inputElement.current === (u == null ? void 0 : u.activeElement);
        if (p && this._autoFillEnabled && this.value && s && Ue(s, this.value)) {
          var f = !1;
          if (l && (f = l()), f)
            this._inputElement.current.setSelectionRange(0, s.length, Se);
          else {
            for (; c < this.value.length && this.value[c].toLocaleLowerCase() === s[c].toLocaleLowerCase(); )
              c++;
            c > 0 && this._inputElement.current.setSelectionRange(c, s.length, Se);
          }
        } else this._inputElement.current && t !== null && !this._autoFillEnabled && !this.state.isComposing && this._inputElement.current.setSelectionRange(t.start, t.end, t.dir);
      }
    }, a.prototype.componentWillUnmount = function() {
      this._async.dispose();
    }, a.prototype.render = function() {
      var o = ce(this.props, at), e = h(h({}, this.props.style), { fontFamily: "inherit" });
      return v.createElement("input", h({ autoCapitalize: "off", autoComplete: "off", "aria-autocomplete": "both" }, o, {
        style: e,
        ref: this._inputElement,
        value: this._getDisplayValue(),
        onCompositionStart: this._onCompositionStart,
        onCompositionUpdate: this._onCompositionUpdate,
        onCompositionEnd: this._onCompositionEnd,
        // TODO (Fabric 8?) - switch to calling only onChange. See notes in TextField._onInputChange.
        onChange: this._onChanged,
        onInput: this._onInputChanged,
        onKeyDown: this._onKeyDown,
        onClick: this.props.onClick ? this.props.onClick : this._onClick,
        "data-lpignore": !0
      }));
    }, a.prototype.focus = function() {
      this._inputElement.current && this._inputElement.current.focus();
    }, a.prototype.clear = function() {
      this._autoFillEnabled = !0, this._updateValue("", !1), this._inputElement.current && this._inputElement.current.setSelectionRange(0, 0);
    }, a.prototype.getSnapshotBeforeUpdate = function() {
      var o, e, t = this._inputElement.current;
      return t && t.selectionStart !== this.value.length ? {
        start: (o = t.selectionStart) !== null && o !== void 0 ? o : t.value.length,
        end: (e = t.selectionEnd) !== null && e !== void 0 ? e : t.value.length,
        dir: t.selectionDirection || "backward"
      } : null;
    }, a.prototype._getCurrentInputValue = function(o) {
      return o && o.target && o.target.value ? o.target.value : this.inputElement && this.inputElement.value ? this.inputElement.value : "";
    }, a.prototype._tryEnableAutofill = function(o, e, t, r) {
      !t && o && this._inputElement.current && this._inputElement.current.selectionStart === o.length && !this._autoFillEnabled && (o.length > e.length || r) && (this._autoFillEnabled = !0);
    }, a.prototype._getDisplayValue = function() {
      return this._autoFillEnabled ? Bt(this.value, this.props.suggestedDisplayValue) : this.value;
    }, a.prototype._getControlledValue = function() {
      var o = this.props.value;
      return o === void 0 || typeof o == "string" ? o : (console.warn("props.value of Autofill should be a string, but it is ".concat(o, " with type of ").concat(typeof o)), o.toString());
    }, a.defaultProps = {
      enableAutofillOnKeyPress: [V.down, V.up]
    }, a.contextType = Ee, a;
  }(v.Component)
);
function Bt(n, a) {
  var o = n;
  return a && n && Ue(a, o) && (o = a), o;
}
function Ue(n, a) {
  if (!n || !a)
    return !1;
  if (process.env.NODE_ENV !== "production")
    for (var o = 0, e = [n, a]; o < e.length; o++) {
      var t = e[o];
      if (typeof t != "string")
        throw new Error("".concat(
          Ke.name,
          ' received non-string value "'
        ).concat(t, '" of type ').concat(typeof t, " from either input's value or suggestedDisplayValue"));
    }
  return n.toLocaleLowerCase().indexOf(a.toLocaleLowerCase()) === 0;
}
var Tt = "40px", Dt = "0 4px", Et = j(function(n, a) {
  var o, e, t, r = Fe(n), i = {
    root: (o = {
      padding: Dt,
      height: Tt,
      color: n.palette.neutralPrimary,
      backgroundColor: "transparent",
      border: "1px solid transparent"
    }, o[S] = {
      borderColor: "Window"
    }, o),
    rootHovered: (e = {
      color: n.palette.themePrimary
    }, e[S] = {
      color: "Highlight"
    }, e),
    iconHovered: {
      color: n.palette.themePrimary
    },
    rootPressed: {
      color: n.palette.black
    },
    rootExpanded: {
      color: n.palette.themePrimary
    },
    iconPressed: {
      color: n.palette.themeDarker
    },
    rootDisabled: (t = {
      color: n.palette.neutralTertiary,
      backgroundColor: "transparent",
      borderColor: "transparent"
    }, t[S] = {
      color: "GrayText"
    }, t),
    rootChecked: {
      color: n.palette.black
    },
    iconChecked: {
      color: n.palette.themeDarker
    },
    flexContainer: {
      justifyContent: "flex-start"
    },
    icon: {
      color: n.palette.themeDarkAlt
    },
    iconDisabled: {
      color: "inherit"
    },
    menuIcon: {
      color: n.palette.neutralSecondary
    },
    textContainer: {
      flexGrow: 0
    }
  };
  return Y(r, i, a);
}), Ft = (
  /** @class */
  function(n) {
    X(a, n);
    function a() {
      return n !== null && n.apply(this, arguments) || this;
    }
    return a.prototype.render = function() {
      var o, e = (o = this.props, o.styles), t = o.theme;
      return v.createElement(Re, h({}, this.props, { variantClassName: "ms-Button--action ms-Button--command", styles: Et(t, e), onRenderDescription: ae }));
    }, a = pe([
      fe("ActionButton", ["theme", "styles"])
    ], a), a;
  }(v.Component)
), Rt = j(function(n, a) {
  var o, e = Fe(n), t = st(n), r = n.palette, i = n.semanticColors, s = {
    root: {
      padding: "0 4px",
      width: "32px",
      height: "32px",
      backgroundColor: "transparent",
      border: "none",
      color: i.link
    },
    rootHovered: (o = {
      color: r.themeDarkAlt,
      backgroundColor: r.neutralLighter
    }, o[S] = {
      borderColor: "Highlight",
      color: "Highlight"
    }, o),
    rootHasMenu: {
      width: "auto"
    },
    rootPressed: {
      color: r.themeDark,
      backgroundColor: r.neutralLight
    },
    rootExpanded: {
      color: r.themeDark,
      backgroundColor: r.neutralLight
    },
    rootChecked: {
      color: r.themeDark,
      backgroundColor: r.neutralLight
    },
    rootCheckedHovered: {
      color: r.themeDark,
      backgroundColor: r.neutralQuaternaryAlt
    },
    rootDisabled: {
      color: r.neutralTertiaryAlt
    }
  };
  return Y(e, s, t, a);
}), Ht = (
  /** @class */
  function(n) {
    X(a, n);
    function a() {
      return n !== null && n.apply(this, arguments) || this;
    }
    return a.prototype.render = function() {
      var o, e = (o = this.props, o.styles), t = o.theme;
      return v.createElement(Re, h({}, this.props, { variantClassName: "ms-Button--icon", styles: Rt(t, e), onRenderText: ae, onRenderDescription: ae }));
    }, a = pe([
      fe("IconButton", ["theme", "styles"])
    ], a), a;
  }(v.Component)
), At = Ft, Nt = Ae(), je = v.forwardRef(function(n, a) {
  var o = n.disabled, e = n.required, t = n.inputProps, r = n.name, i = n.ariaLabel, s = n.ariaLabelledBy, l = n.ariaDescribedBy, d = n.ariaPositionInSet, c = n.ariaSetSize, u = n.title, p = n.checkmarkIconProps, f = n.styles, b = n.theme, g = n.className, m = n.boxSide, _ = m === void 0 ? "start" : m, C = lt("checkbox-", n.id), y = v.useRef(null), x = He(y, a), w = v.useRef(null), P = ke(n.checked, n.defaultChecked, n.onChange), k = P[0], B = P[1], D = ke(n.indeterminate, n.defaultIndeterminate), I = D[0], H = D[1];
  ut(y), Wt(n);
  var E = Nt(f, {
    theme: b,
    className: g,
    disabled: o,
    indeterminate: I,
    checked: k,
    reversed: _ !== "start",
    isUsingCustomLabelRender: !!n.onRenderLabel
  }), z = v.useCallback(function(A) {
    I ? (B(!!k, A), H(!1)) : B(!k, A);
  }, [B, H, I, k]), O = v.useCallback(function(A) {
    return A && A.label ? v.createElement("span", { className: E.text, title: A.title }, A.label) : null;
  }, [E.text]), L = v.useCallback(function(A) {
    if (w.current) {
      var G = !!A;
      w.current.indeterminate = G, H(G);
    }
  }, [H]);
  Mt(n, k, I, L, w), v.useEffect(function() {
    return L(I);
  }, [L, I]);
  var $ = n.onRenderLabel || O, Q = I ? "mixed" : void 0, q = h(h({ className: E.input, type: "checkbox" }, t), { checked: !!k, disabled: o, required: e, name: r, id: C, title: u, onChange: z, "aria-disabled": o, "aria-label": i, "aria-labelledby": s, "aria-describedby": l, "aria-posinset": d, "aria-setsize": c, "aria-checked": Q });
  return v.createElement(
    "div",
    { className: E.root, title: u, ref: x },
    v.createElement("input", h({}, q, { ref: w, title: u, "data-ktp-execute-target": !0 })),
    v.createElement(
      "label",
      { className: E.label, htmlFor: C },
      v.createElement(
        "div",
        { className: E.checkbox, "data-ktp-target": !0 },
        v.createElement(dt, h({ iconName: "CheckMark" }, p, { className: E.checkmark }))
      ),
      $(n, O)
    )
  );
});
je.displayName = "CheckboxBase";
function Wt(n) {
  process.env.NODE_ENV !== "production" && ct({
    name: "Checkbox",
    props: n,
    mutuallyExclusive: {
      checked: "defaultChecked",
      indeterminate: "defaultIndeterminate"
    }
  });
}
function Mt(n, a, o, e, t) {
  v.useImperativeHandle(n.componentRef, function() {
    return {
      get checked() {
        return !!a;
      },
      get indeterminate() {
        return !!o;
      },
      set indeterminate(r) {
        e(r);
      },
      focus: function() {
        t.current && t.current.focus();
      }
    };
  }, [t, a, o, e]);
}
var Lt = {
  root: "ms-Checkbox",
  label: "ms-Checkbox-label",
  checkbox: "ms-Checkbox-checkbox",
  checkmark: "ms-Checkbox-checkmark",
  text: "ms-Checkbox-text"
}, Ie = "20px", Oe = "200ms", we = "cubic-bezier(.4, 0, .23, 1)", Kt = function(n) {
  var a, o, e, t, r, i, s, l, d, c, u, p, f, b, g, m, _, C, y = n.className, x = n.theme, w = n.reversed, P = n.checked, k = n.disabled, B = n.isUsingCustomLabelRender, D = n.indeterminate, I = x.semanticColors, H = x.effects, E = x.palette, z = x.fonts, O = pt(Lt, x), L = I.inputForegroundChecked, $ = E.neutralSecondary, Q = E.neutralPrimary, q = I.inputBackgroundChecked, A = I.inputBackgroundChecked, G = I.disabledBodySubtext, he = I.inputBorderHovered, ge = I.inputBackgroundCheckedHovered, Qe = I.inputBackgroundChecked, _e = I.inputBackgroundCheckedHovered, ve = I.inputBackgroundCheckedHovered, Xe = I.inputTextHovered, Ye = I.disabledBodySubtext, Ze = I.bodyText, Je = I.disabledText, et = [
    (a = {
      content: '""',
      borderRadius: H.roundedCorner2,
      position: "absolute",
      width: 10,
      height: 10,
      top: 4,
      left: 4,
      boxSizing: "border-box",
      borderWidth: 5,
      borderStyle: "solid",
      borderColor: k ? G : q,
      transitionProperty: "border-width, border, border-color",
      transitionDuration: Oe,
      transitionTimingFunction: we
    }, a[S] = {
      borderColor: "WindowText"
    }, a)
  ];
  return {
    root: [
      O.root,
      {
        position: "relative",
        display: "flex"
      },
      w && "reversed",
      P && "is-checked",
      !k && "is-enabled",
      k && "is-disabled",
      !k && [
        !P && (o = {}, o[":hover .".concat(O.checkbox)] = (e = {
          borderColor: he
        }, e[S] = {
          borderColor: "Highlight"
        }, e), o[":focus .".concat(O.checkbox)] = { borderColor: he }, o[":hover .".concat(O.checkmark)] = (t = {
          color: $,
          opacity: "1"
        }, t[S] = {
          color: "Highlight"
        }, t), o),
        P && !D && (r = {}, r[":hover .".concat(O.checkbox)] = {
          background: _e,
          borderColor: ve
        }, r[":focus .".concat(O.checkbox)] = {
          background: _e,
          borderColor: ve
        }, r[S] = (i = {}, i[":hover .".concat(O.checkbox)] = {
          background: "Highlight",
          borderColor: "Highlight"
        }, i[":focus .".concat(O.checkbox)] = {
          background: "Highlight"
        }, i[":focus:hover .".concat(O.checkbox)] = {
          background: "Highlight"
        }, i[":focus:hover .".concat(O.checkmark)] = {
          color: "Window"
        }, i[":hover .".concat(O.checkmark)] = {
          color: "Window"
        }, i), r),
        D && (s = {}, s[":hover .".concat(O.checkbox, ", :hover .").concat(O.checkbox, ":after")] = (l = {
          borderColor: ge
        }, l[S] = {
          borderColor: "WindowText"
        }, l), s[":focus .".concat(O.checkbox)] = {
          borderColor: ge
        }, s[":hover .".concat(O.checkmark)] = {
          opacity: "0"
        }, s),
        (d = {}, d[":hover .".concat(O.text, ", :focus .").concat(O.text)] = (c = {
          color: Xe
        }, c[S] = {
          color: k ? "GrayText" : "WindowText"
        }, c), d)
      ],
      y
    ],
    input: (u = {
      position: "absolute",
      background: "none",
      opacity: 0
    }, // eslint-disable-next-line @fluentui/max-len
    u[".".concat(be, " &:focus + label::before, :host(.").concat(be, ") &:focus + label::before")] = (p = {
      outline: "1px solid " + x.palette.neutralSecondary,
      outlineOffset: "2px"
    }, p[S] = {
      outline: "1px solid WindowText"
    }, p), u),
    label: [
      O.label,
      x.fonts.medium,
      {
        display: "flex",
        alignItems: B ? "center" : "flex-start",
        cursor: k ? "default" : "pointer",
        position: "relative",
        userSelect: "none"
      },
      w && {
        flexDirection: "row-reverse",
        justifyContent: "flex-end"
      },
      {
        "&::before": {
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          content: '""',
          pointerEvents: "none"
        }
      }
    ],
    checkbox: [
      O.checkbox,
      (f = {
        position: "relative",
        display: "flex",
        flexShrink: 0,
        alignItems: "center",
        justifyContent: "center",
        height: Ie,
        width: Ie,
        border: "1px solid ".concat(Q),
        borderRadius: H.roundedCorner2,
        boxSizing: "border-box",
        transitionProperty: "background, border, border-color",
        transitionDuration: Oe,
        transitionTimingFunction: we,
        /* in case the icon is bigger than the box */
        overflow: "hidden",
        ":after": D ? et : null
      }, f[S] = h({ borderColor: "WindowText" }, M()), f),
      D && {
        borderColor: q
      },
      w ? {
        marginLeft: 4
      } : (
        // This margin on the checkbox is for backwards compat. Notably it has the effect where a customRender
        // is used, there will be only a 4px margin from checkbox to label. The label by default would have
        // another 4px margin for a total of 8px margin between checkbox and label. We don't combine the two
        // (and move it into the text) to not incur a breaking change for everyone using custom render atm.
        {
          marginRight: 4
        }
      ),
      !k && !D && P && (b = {
        background: Qe,
        borderColor: A
      }, b[S] = {
        background: "Highlight",
        borderColor: "Highlight"
      }, b),
      k && (g = {
        borderColor: G
      }, g[S] = {
        borderColor: "GrayText"
      }, g),
      P && k && (m = {
        background: Ye,
        borderColor: G
      }, m[S] = {
        background: "Window"
      }, m)
    ],
    checkmark: [
      O.checkmark,
      (_ = {
        opacity: P && !D ? "1" : "0",
        color: L
      }, _[S] = h({ color: k ? "GrayText" : "Window" }, M()), _)
    ],
    text: [
      O.text,
      (C = {
        color: k ? Je : Ze,
        fontSize: z.medium.fontSize,
        lineHeight: "20px"
      }, C[S] = h({ color: k ? "GrayText" : "WindowText" }, M()), C),
      w ? {
        marginRight: 4
      } : {
        marginLeft: 4
      }
    ]
  };
}, Ut = Ne(je, Kt, void 0, { scope: "Checkbox" }), jt = Ae({
  // Label is used a lot by other components.
  // It's likely to see expected cases which pass different className to the Label.
  // Therefore setting a larger cache size.
  cacheSize: 100
}), zt = (
  /** @class */
  function(n) {
    X(a, n);
    function a() {
      return n !== null && n.apply(this, arguments) || this;
    }
    return a.prototype.render = function() {
      var o = this.props, e = o.as, t = e === void 0 ? "label" : e, r = o.children, i = o.className, s = o.disabled, l = o.styles, d = o.required, c = o.theme, u = jt(l, {
        className: i,
        disabled: s,
        required: d,
        theme: c
      });
      return v.createElement(t, h({}, ce(this.props, We), { className: u.root }), r);
    }, a;
  }(v.Component)
), qt = function(n) {
  var a, o = n.theme, e = n.className, t = n.disabled, r = n.required, i = o.semanticColors, s = Me.semibold, l = i.bodyText, d = i.disabledBodyText, c = i.errorText;
  return {
    root: [
      "ms-Label",
      o.fonts.medium,
      {
        fontWeight: s,
        color: l,
        boxSizing: "border-box",
        boxShadow: "none",
        margin: 0,
        display: "block",
        padding: "5px 0",
        wordWrap: "break-word",
        overflowWrap: "break-word"
      },
      t && {
        color: d,
        selectors: (a = {}, a[S] = h({ color: "GrayText" }, M()), a)
      },
      r && {
        selectors: {
          "::after": {
            content: "' *'",
            color: c,
            paddingRight: 12
          }
        }
      },
      e
    ]
  };
}, Gt = Ne(zt, qt, void 0, {
  scope: "Label"
}), te, oe, $t = 32, Qt = 30, ze = 32, le = 36, ue = j(function(n) {
  var a, o = n.semanticColors;
  return {
    backgroundColor: o.disabledBackground,
    color: o.disabledText,
    cursor: "default",
    selectors: (a = {
      ":after": {
        borderColor: o.disabledBackground
      }
    }, a[S] = {
      color: "GrayText",
      selectors: {
        ":after": {
          borderColor: "GrayText"
        }
      }
    }, a)
  };
}), Pe = {
  selectors: (te = {}, te[S] = h({ backgroundColor: "Highlight", borderColor: "Highlight", color: "HighlightText" }, M()), te)
}, ne = {
  selectors: (oe = {}, oe[S] = h({ color: "WindowText", backgroundColor: "Window" }, M()), oe)
}, Xt = j(function(n, a, o, e, t, r) {
  var i, s = n.palette, l = n.semanticColors, d = {
    textHoveredColor: l.menuItemTextHovered,
    textSelectedColor: s.neutralDark,
    textDisabledColor: l.disabledText,
    backgroundHoveredColor: l.menuItemBackgroundHovered,
    backgroundPressedColor: l.menuItemBackgroundPressed
  }, c = {
    root: [
      n.fonts.medium,
      {
        backgroundColor: e ? d.backgroundHoveredColor : "transparent",
        boxSizing: "border-box",
        cursor: "pointer",
        display: t ? "none" : "block",
        width: "100%",
        height: "auto",
        minHeight: le,
        lineHeight: "20px",
        padding: "0 8px",
        position: "relative",
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "transparent",
        borderRadius: 0,
        wordWrap: "break-word",
        overflowWrap: "break-word",
        textAlign: "left",
        selectors: h(h((i = {}, i[S] = {
          border: "none",
          borderColor: "Background"
        }, i), !t && {
          "&.ms-Checkbox": {
            display: "flex",
            alignItems: "center"
          }
        }), { "&.ms-Button--command:hover:active": {
          backgroundColor: d.backgroundPressedColor
        }, ".ms-Checkbox-label": {
          width: "100%"
        } })
      },
      r ? [
        {
          backgroundColor: "transparent",
          color: d.textSelectedColor,
          selectors: {
            ":hover": [
              {
                backgroundColor: d.backgroundHoveredColor
              },
              Pe
            ]
          }
        },
        ft(n, { inset: -1, isFocusedOnly: !1 }),
        Pe
      ] : []
    ],
    rootHovered: {
      backgroundColor: d.backgroundHoveredColor,
      color: d.textHoveredColor
    },
    rootFocused: {
      backgroundColor: d.backgroundHoveredColor
    },
    rootDisabled: {
      color: d.textDisabledColor,
      cursor: "default"
    },
    optionText: {
      overflow: "hidden",
      whiteSpace: "nowrap",
      textOverflow: "ellipsis",
      minWidth: "0px",
      maxWidth: "100%",
      wordWrap: "break-word",
      overflowWrap: "break-word",
      display: "inline-block"
    },
    optionTextWrapper: {
      maxWidth: "100%",
      display: "flex",
      alignItems: "center"
    }
  };
  return Y(c, a, o);
}), Yt = j(function(n, a) {
  var o, e, t = n.semanticColors, r = n.fonts, i = {
    buttonTextColor: t.bodySubtext,
    buttonTextHoveredCheckedColor: t.buttonTextChecked,
    buttonBackgroundHoveredColor: t.listItemBackgroundHovered,
    buttonBackgroundCheckedColor: t.listItemBackgroundChecked,
    buttonBackgroundCheckedHoveredColor: t.listItemBackgroundCheckedHovered
  }, s = {
    selectors: (o = {}, o[S] = h({ backgroundColor: "Highlight", borderColor: "Highlight", color: "HighlightText" }, M()), o)
  }, l = {
    root: {
      color: i.buttonTextColor,
      fontSize: r.small.fontSize,
      position: "absolute",
      top: 0,
      height: "100%",
      lineHeight: Qt,
      width: ze,
      textAlign: "center",
      cursor: "default",
      selectors: (e = {}, e[S] = h({ backgroundColor: "ButtonFace", borderColor: "ButtonText", color: "ButtonText" }, M()), e)
    },
    icon: {
      fontSize: r.small.fontSize
    },
    rootHovered: [
      {
        backgroundColor: i.buttonBackgroundHoveredColor,
        color: i.buttonTextHoveredCheckedColor,
        cursor: "pointer"
      },
      s
    ],
    rootPressed: [
      {
        backgroundColor: i.buttonBackgroundCheckedColor,
        color: i.buttonTextHoveredCheckedColor
      },
      s
    ],
    rootChecked: [
      {
        backgroundColor: i.buttonBackgroundCheckedColor,
        color: i.buttonTextHoveredCheckedColor
      },
      s
    ],
    rootCheckedHovered: [
      {
        backgroundColor: i.buttonBackgroundCheckedHoveredColor,
        color: i.buttonTextHoveredCheckedColor
      },
      s
    ],
    rootDisabled: [
      ue(n),
      {
        position: "absolute"
      }
    ]
  };
  return Y(l, a);
}), Zt = j(function(n, a, o) {
  var e, t, r, i, s, l, d = n.semanticColors, c = n.fonts, u = n.effects, p = {
    textColor: d.inputText,
    borderColor: d.inputBorder,
    borderHoveredColor: d.inputBorderHovered,
    borderPressedColor: d.inputFocusBorderAlt,
    borderFocusedColor: d.inputFocusBorderAlt,
    backgroundColor: d.inputBackground,
    erroredColor: d.errorText
  }, f = {
    headerTextColor: d.menuHeader,
    dividerBorderColor: d.bodyDivider
  }, b = {
    selectors: (e = {}, e[S] = {
      color: "GrayText"
    }, e)
  }, g = [
    {
      color: d.inputPlaceholderText
    },
    b
  ], m = [
    {
      color: d.inputTextHovered
    },
    b
  ], _ = [
    {
      color: d.disabledText
    },
    b
  ], C = h(h({ color: "HighlightText", backgroundColor: "Window" }, M()), { selectors: {
    ":after": {
      borderColor: "Highlight"
    }
  } }), y = ht(p.borderPressedColor, u.roundedCorner2, "border", 0), x = {
    container: {},
    label: {},
    labelDisabled: {},
    root: [
      n.fonts.medium,
      {
        boxShadow: "none",
        marginLeft: "0",
        paddingRight: ze,
        paddingLeft: 9,
        color: p.textColor,
        position: "relative",
        outline: "0",
        userSelect: "none",
        backgroundColor: p.backgroundColor,
        cursor: "text",
        display: "block",
        height: $t,
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
        boxSizing: "border-box",
        selectors: {
          ".ms-Label": {
            display: "inline-block",
            marginBottom: "8px"
          },
          "&.is-open": {
            selectors: (t = {}, t[S] = C, t)
          },
          // setting border using pseudo-element here in order to
          // prevent chevron button to overlap ComboBox border under certain resolutions
          ":after": {
            pointerEvents: "none",
            content: "''",
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            right: 0,
            borderWidth: "1px",
            borderStyle: "solid",
            borderColor: p.borderColor,
            borderRadius: u.roundedCorner2
          }
        }
      }
    ],
    rootHovered: {
      selectors: (r = {
        ":after": {
          borderColor: p.borderHoveredColor
        },
        ".ms-ComboBox-Input": [
          {
            color: d.inputTextHovered
          },
          ee(m),
          ne
        ]
      }, r[S] = h(h({ color: "HighlightText", backgroundColor: "Window" }, M()), { selectors: {
        ":after": {
          borderColor: "Highlight"
        }
      } }), r)
    },
    rootPressed: [
      {
        position: "relative",
        selectors: (i = {}, i[S] = C, i)
      }
    ],
    rootFocused: [
      {
        selectors: (s = {
          ".ms-ComboBox-Input": [
            {
              color: d.inputTextHovered
            },
            ne
          ]
        }, s[S] = C, s)
      },
      y
    ],
    rootDisabled: ue(n),
    rootError: {
      selectors: {
        ":after": {
          borderColor: p.erroredColor
        },
        ":hover:after": {
          borderColor: d.inputBorderHovered
        }
      }
    },
    rootDisallowFreeForm: {},
    input: [
      ee(g),
      {
        backgroundColor: p.backgroundColor,
        color: p.textColor,
        boxSizing: "border-box",
        width: "100%",
        height: "100%",
        borderStyle: "none",
        outline: "none",
        font: "inherit",
        textOverflow: "ellipsis",
        padding: "0",
        selectors: {
          "::-ms-clear": {
            display: "none"
          }
        }
      },
      ne
    ],
    inputDisabled: [ue(n), ee(_)],
    errorMessage: [
      n.fonts.small,
      {
        color: p.erroredColor,
        marginTop: "5px"
      }
    ],
    callout: {
      boxShadow: u.elevation8
    },
    optionsContainerWrapper: {
      width: o
    },
    optionsContainer: {
      display: "block"
    },
    screenReaderText: gt,
    header: [
      c.medium,
      {
        fontWeight: Me.semibold,
        color: f.headerTextColor,
        backgroundColor: "none",
        borderStyle: "none",
        height: le,
        lineHeight: le,
        cursor: "default",
        padding: "0 8px",
        userSelect: "none",
        textAlign: "left",
        selectors: (l = {}, l[S] = h({ color: "GrayText" }, M()), l)
      }
    ],
    divider: {
      height: 1,
      backgroundColor: f.dividerBorderColor
    }
  };
  return Y(x, a);
}), Jt = j(function(n, a, o, e, t, r, i, s) {
  return {
    container: R(n.__shadowConfig__, "ms-ComboBox-container", a, n.container),
    label: R(n.__shadowConfig__, n.label, e && n.labelDisabled),
    root: R(n.__shadowConfig__, "ms-ComboBox", s ? n.rootError : o && "is-open", t && "is-required", n.root, !i && n.rootDisallowFreeForm, s && !r ? n.rootError : !e && r && n.rootFocused, !e && {
      selectors: {
        ":hover": s ? n.rootError : !o && !r && n.rootHovered,
        ":active": s ? n.rootError : n.rootPressed,
        ":focus": s ? n.rootError : n.rootFocused
      }
    }, e && ["is-disabled", n.rootDisabled]),
    input: R(n.__shadowConfig__, "ms-ComboBox-Input", n.input, e && n.inputDisabled),
    errorMessage: R(n.__shadowConfig__, n.errorMessage),
    callout: R(n.__shadowConfig__, "ms-ComboBox-callout", n.callout),
    optionsContainerWrapper: R(n.__shadowConfig__, "ms-ComboBox-optionsContainerWrapper", n.optionsContainerWrapper),
    optionsContainer: R(n.__shadowConfig__, "ms-ComboBox-optionsContainer", n.optionsContainer),
    header: R(n.__shadowConfig__, "ms-ComboBox-header", n.header),
    divider: R(n.__shadowConfig__, "ms-ComboBox-divider", n.divider),
    screenReaderText: R(n.__shadowConfig__, n.screenReaderText)
  };
}), re = j(function(n) {
  return {
    optionText: R(n.__shadowConfig__, "ms-ComboBox-optionText", n.optionText),
    root: R(n.__shadowConfig__, "ms-ComboBox-option", n.root, {
      selectors: {
        ":hover": n.rootHovered,
        ":focus": n.rootFocused,
        ":active": n.rootPressed
      }
    }),
    optionTextWrapper: R(n.__shadowConfig__, n.optionTextWrapper)
  };
});
function eo(n, a) {
  for (var o = [], e = 0, t = a; e < t.length; e++) {
    var r = t[e], i = n[r];
    i && o.push(i);
  }
  return o;
}
var T;
(function(n) {
  n[n.Normal = 0] = "Normal", n[n.Divider = 1] = "Divider", n[n.Header = 2] = "Header", n[n.SelectAll = 3] = "SelectAll";
})(T || (T = {}));
var F;
(function(n) {
  n[n.backward = -1] = "backward", n[n.none = 0] = "none", n[n.forward = 1] = "forward";
})(F || (F = {}));
var K;
(function(n) {
  n[n.clearAll = -2] = "clearAll", n[n.default = -1] = "default";
})(K || (K = {}));
var to = 250, oo = 500, no = 1e3, ro = v.memo(function(n) {
  var a = n.render;
  return a();
}, function(n, a) {
  n.render;
  var o = se(n, ["render"]);
  a.render;
  var e = se(a, ["render"]);
  return Le(o, e);
}), qe = "ComboBox", io = {
  options: [],
  allowFreeform: !1,
  allowParentArrowNavigation: !1,
  autoComplete: "on",
  buttonIconProps: { iconName: "ChevronDown" }
};
function ao(n) {
  var a = n.options, o = n.defaultSelectedKey, e = n.selectedKey, t = v.useState(function() {
    return Ve(a, lo(o, e));
  }), r = t[0], i = t[1], s = v.useState(a), l = s[0], d = s[1], c = v.useState(), u = c[0], p = c[1];
  return v.useEffect(function() {
    if (e !== void 0) {
      var f = de(e), b = Ve(a, f);
      i(b);
    }
    d(a);
  }, [a, e]), v.useEffect(function() {
    e === null && p(void 0);
  }, [e]), [
    r,
    i,
    l,
    d,
    u,
    p
  ];
}
var Ge = v.forwardRef(function(n, a) {
  var o = _t(io, n);
  o.ref;
  var e = se(o, ["ref"]), t = v.useRef(null), r = He(t, a), i = ao(e), s = i[0], l = i[1], d = i[2], c = i[3], u = i[4], p = i[5];
  return v.createElement(so, h({}, e, { hoisted: {
    mergedRootRef: r,
    rootRef: t,
    selectedIndices: s,
    setSelectedIndices: l,
    currentOptions: d,
    setCurrentOptions: c,
    suggestedDisplayValue: u,
    setSuggestedDisplayValue: p
  } }));
});
Ge.displayName = qe;
function $e(n, a) {
  for (var o = Pt(n), e = 0; e < o.length; e++) {
    var t = o[e];
    if (a(t))
      return t;
    var r = $e(t, a);
    if (r)
      return r;
  }
  return null;
}
var so = (
  /** @class */
  function(n) {
    X(a, n);
    function a(o) {
      var e = n.call(this, o) || this;
      return e._autofill = v.createRef(), e._comboBoxWrapper = v.createRef(), e._comboBoxMenu = v.createRef(), e._selectedElement = v.createRef(), e._overrideScrollDismiss = !1, e.focus = function(t, r) {
        e.props.disabled || (e._autofill.current && (r ? vt(e._autofill.current) : e._autofill.current.focus(), t && e.setState({
          isOpen: !0
        })), e._hasFocus() || e.setState({ focusState: "focused" }));
      }, e.dismissMenu = function() {
        var t = e.state.isOpen;
        t && e.setState({ isOpen: !1 });
      }, e._onUpdateValueInAutofillWillReceiveProps = function() {
        var t = e._autofill.current;
        return !t || t.value === null || t.value === void 0 ? null : U(e._currentVisibleValue);
      }, e._renderComboBoxWrapper = function(t, r) {
        var i = e.props, s = i.label, l = i.disabled, d = i.ariaLabel, c = i.ariaDescribedBy, u = c === void 0 ? e.props["aria-describedby"] : c, p = i.required, f = i.errorMessage, b = i.buttonIconProps, g = i.isButtonAriaHidden, m = i.title, _ = i.placeholder, C = i.tabIndex, y = i.autofill, x = i.iconButtonProps, w = i.hoisted.suggestedDisplayValue, P = e.state, k = P.ariaActiveDescendantValue, B = P.isOpen, D = e._hasFocus() && e.props.multiSelect && t ? t : _, I = [e.props["aria-labelledby"], s && e._id + "-label"].join(" ").trim(), H = {
          "aria-labelledby": I || void 0,
          "aria-label": d && !s ? d : void 0
        };
        return v.createElement(
          "div",
          { "data-ktp-target": !0, ref: e._comboBoxWrapper, id: e._id + "wrapper", className: e._classNames.root, "aria-owns": B ? e._id + "-list" : void 0 },
          v.createElement(Ke, h({ "data-ktp-execute-target": !0, "data-is-interactable": !l, componentRef: e._autofill, id: e._id + "-input", className: e._classNames.input, type: "text", onFocus: e._onFocus, onBlur: e._onBlur, onKeyDown: e._onInputKeyDown, onKeyUp: e._onInputKeyUp, onClick: e._onAutofillClick, onTouchStart: e._onTouchStart, onInputValueChange: e._onInputChange, "aria-expanded": B, "aria-autocomplete": e._getAriaAutoCompleteValue(), role: "combobox", readOnly: l }, H, { "aria-describedby": f !== void 0 ? mt(u, r) : u, "aria-activedescendant": k, "aria-required": p, "aria-disabled": l, "aria-controls": B ? e._id + "-list" : void 0, spellCheck: !1, defaultVisibleValue: e._currentVisibleValue, suggestedDisplayValue: w, updateValueInWillReceiveProps: e._onUpdateValueInAutofillWillReceiveProps, shouldSelectFullInputValueInComponentDidUpdate: e._onShouldSelectFullInputValueInAutofillComponentDidUpdate, title: m, preventValueSelection: !e._hasFocus(), placeholder: D, tabIndex: l ? -1 : C }, y)),
          v.createElement(Ht, h({ className: "ms-ComboBox-CaretDown-button", styles: e._getCaretButtonStyles(), role: g ? "presentation" : void 0, "aria-hidden": g }, g ? void 0 : H, { "data-is-focusable": !1, tabIndex: -1, onClick: e._onComboBoxClick, onBlur: e._onBlur, iconProps: b, disabled: l, checked: B }, x))
        );
      }, e._onShouldSelectFullInputValueInAutofillComponentDidUpdate = function() {
        return e._currentVisibleValue === e.props.hoisted.suggestedDisplayValue;
      }, e._getVisibleValue = function() {
        var t = e.props, r = t.text, i = t.allowFreeform, s = t.allowFreeInput, l = t.autoComplete, d = t.hoisted, c = d.suggestedDisplayValue, u = d.selectedIndices, p = d.currentOptions, f = e.state, b = f.currentPendingValueValidIndex, g = f.currentPendingValue, m = f.isOpen, _ = N(p, b);
        if (!(m && _) && (r || r === "") && g == null)
          return r;
        if (e.props.multiSelect)
          if (e._hasFocus()) {
            var C = -1;
            return l === "on" && _ && (C = b), e._getPendingString(g, p, C);
          } else
            return e._getMultiselectDisplayString(u, p, c);
        else {
          var C = e._getFirstSelectedIndex();
          return i || s ? (l === "on" && _ && (C = b), e._getPendingString(g, p, C)) : _ && l === "on" ? (C = b, U(g)) : !e.state.isOpen && g ? N(p, C) ? g : U(c) : N(p, C) ? W(p[C]) : U(c);
        }
      }, e._onInputChange = function(t) {
        if (e.props.disabled) {
          e._handleInputWhenDisabled(
            null
            /* event */
          );
          return;
        }
        e.props.onInputValueChange && e.props.onInputValueChange(t), e.props.allowFreeform || e.props.allowFreeInput ? e._processInputChangeWithFreeform(t) : e._processInputChangeWithoutFreeform(t);
      }, e._onFocus = function() {
        var t, r;
        (r = (t = e._autofill.current) === null || t === void 0 ? void 0 : t.inputElement) === null || r === void 0 || r.select(), e._hasFocus() || e.setState({ focusState: "focusing" });
      }, e._onResolveOptions = function() {
        if (e.props.onResolveOptions) {
          var t = e.props.onResolveOptions(J([], e.props.hoisted.currentOptions, !0));
          Array.isArray(t) ? e.props.hoisted.setCurrentOptions(t) : t && t.then && (e._currentPromise = t, t.then(function(r) {
            t === e._currentPromise && e.props.hoisted.setCurrentOptions(r);
          }));
        }
      }, e._onBlur = function(t) {
        var r, i, s = Ce(e.context), l = t.relatedTarget;
        if (t.relatedTarget === null && (l = s == null ? void 0 : s.activeElement), l) {
          var d = (r = e.props.hoisted.rootRef.current) === null || r === void 0 ? void 0 : r.contains(l), c = (i = e._comboBoxMenu.current) === null || i === void 0 ? void 0 : i.contains(l), u = e._comboBoxMenu.current && bt(e._comboBoxMenu.current, function(p) {
            return p === l;
          }, s);
          if (d || c || u) {
            u && e._hasFocus() && (!e.props.multiSelect || e.props.allowFreeform) && e._submitPendingValue(t), t.preventDefault(), t.stopPropagation();
            return;
          }
        }
        e._hasFocus() && (e.setState({ focusState: "none" }), (!e.props.multiSelect || e.props.allowFreeform) && e._submitPendingValue(t));
      }, e._onRenderContainer = function(t, r) {
        var i = t.onRenderList, s = t.calloutProps, l = t.dropdownWidth, d = t.dropdownMaxWidth, c = t.onRenderUpperContent, u = c === void 0 ? e._onRenderUpperContent : c, p = t.onRenderLowerContent, f = p === void 0 ? e._onRenderLowerContent : p, b = t.useComboBoxAsMenuWidth, g = t.persistMenu, m = t.shouldRestoreFocus, _ = m === void 0 ? !0 : m, C = e.state.isOpen, y = e._id, x = b && e._comboBoxWrapper.current ? e._comboBoxWrapper.current.clientWidth + 2 : void 0;
        return v.createElement(
          Ct,
          h({ isBeakVisible: !1, gapSpace: 0, doNotLayer: !1, directionalHint: xt.bottomLeftEdge, directionalHintFixed: !1 }, s, {
            onLayerMounted: e._onLayerMounted,
            className: yt(e._classNames.callout, s == null ? void 0 : s.className),
            target: e._comboBoxWrapper.current,
            onDismiss: e._onDismiss,
            onMouseDown: e._onCalloutMouseDown,
            onScroll: e._onScroll,
            setInitialFocus: !1,
            calloutWidth: b && e._comboBoxWrapper.current ? x && x : l,
            calloutMaxWidth: d || x,
            hidden: g ? !C : void 0,
            shouldRestoreFocus: _,
            // eslint-disable-next-line react/jsx-no-bind
            preventDismissOnEvent: function(w) {
              return e._preventDismissOnScrollOrResize(w);
            }
          }),
          u(e.props, e._onRenderUpperContent),
          v.createElement("div", { className: e._classNames.optionsContainerWrapper, ref: e._comboBoxMenu }, i == null ? void 0 : i(h(h({}, t), { id: y }), e._onRenderList)),
          f(e.props, e._onRenderLowerContent)
        );
      }, e._onLayerMounted = function() {
        e._onCalloutLayerMounted(), e._async.setTimeout(function() {
          e._scrollIntoView();
        }, 0), e.props.calloutProps && e.props.calloutProps.onLayerMounted && e.props.calloutProps.onLayerMounted();
      }, e._onRenderLabel = function(t) {
        var r = t.props, i = r.label, s = r.disabled, l = r.required;
        return i ? v.createElement(
          Gt,
          { id: e._id + "-label", disabled: s, required: l, className: e._classNames.label },
          i,
          t.multiselectAccessibleText && v.createElement("span", { className: e._classNames.screenReaderText }, t.multiselectAccessibleText)
        ) : null;
      }, e._onRenderList = function(t) {
        var r = t.onRenderItem, i = r === void 0 ? e._onRenderItem : r, s = t.label, l = t.ariaLabel, d = t.multiSelect, c = { items: [] }, u = [], p = function() {
          var g = c.id ? [
            v.createElement("div", { role: "group", key: c.id, "aria-labelledby": c.id }, c.items)
          ] : c.items;
          u = J(J([], u, !0), g, !0), c = { items: [] };
        }, f = function(g, m) {
          switch (g.itemType) {
            case T.Header:
              c.items.length > 0 && p();
              var _ = e._id + g.key;
              c.items.push(i(h(h({ id: _ }, g), { index: m }), e._onRenderItem)), c.id = _;
              break;
            case T.Divider:
              m > 0 && c.items.push(i(h(h({}, g), { index: m }), e._onRenderItem)), c.items.length > 0 && p();
              break;
            default:
              c.items.push(i(h(h({}, g), { index: m }), e._onRenderItem));
          }
        };
        t.options.forEach(function(g, m) {
          f(g, m);
        }), c.items.length > 0 && p();
        var b = e._id;
        return v.createElement("div", { id: b + "-list", className: e._classNames.optionsContainer, "aria-labelledby": s && b + "-label", "aria-label": l && !s ? l : void 0, "aria-multiselectable": d ? "true" : void 0, role: "listbox" }, u);
      }, e._onRenderItem = function(t) {
        switch (t.itemType) {
          case T.Divider:
            return e._renderSeparator(t);
          case T.Header:
            return e._renderHeader(t);
          default:
            return e._renderOption(t);
        }
      }, e._onRenderLowerContent = function() {
        return null;
      }, e._onRenderUpperContent = function() {
        return null;
      }, e._renderOption = function(t) {
        var r, i = e.props.onRenderOption, s = i === void 0 ? e._onRenderOptionContent : i, l = (r = t.id) !== null && r !== void 0 ? r : e._id + "-list" + t.index, d = e._isOptionSelected(t.index), c = e._isOptionChecked(t.index), u = e._isOptionIndeterminate(t.index), p = e._getCurrentOptionStyles(t), f = re(p), b = t.title, g = function() {
          return e.props.multiSelect ? v.createElement(Ut, {
            id: l,
            ariaLabel: t.ariaLabel,
            ariaLabelledBy: t.ariaLabel ? void 0 : l + "-label",
            key: t.key,
            styles: p,
            className: "ms-ComboBox-option",
            onChange: e._onItemClick(t),
            label: t.text,
            checked: c,
            indeterminate: u,
            title: b,
            disabled: t.disabled,
            // eslint-disable-next-line react/jsx-no-bind
            onRenderLabel: e._renderCheckboxLabel.bind(e, h(h({}, t), { id: l + "-label" })),
            inputProps: h({
              // aria-selected should only be applied to checked items, not hovered items
              "aria-selected": c ? "true" : "false",
              role: "option"
            }, {
              "data-index": t.index,
              "data-is-focusable": !0
            })
          }) : v.createElement(At, {
            id: l,
            key: t.key,
            "data-index": t.index,
            styles: p,
            checked: d,
            className: "ms-ComboBox-option",
            onClick: e._onItemClick(t),
            // eslint-disable-next-line react/jsx-no-bind
            onMouseEnter: e._onOptionMouseEnter.bind(e, t.index),
            // eslint-disable-next-line react/jsx-no-bind
            onMouseMove: e._onOptionMouseMove.bind(e, t.index),
            onMouseLeave: e._onOptionMouseLeave,
            role: "option",
            "aria-selected": d ? "true" : "false",
            ariaLabel: t.ariaLabel,
            disabled: t.disabled,
            title: b
          }, v.createElement("span", { className: f.optionTextWrapper, ref: d ? e._selectedElement : void 0 }, s(t, e._onRenderOptionContent)));
        };
        return v.createElement(ro, {
          key: t.key,
          index: t.index,
          disabled: t.disabled,
          isSelected: d,
          isChecked: c,
          isIndeterminate: u,
          text: t.text,
          // eslint-disable-next-line react/jsx-no-bind
          render: g,
          data: t.data
        });
      }, e._onCalloutMouseDown = function(t) {
        t.preventDefault();
      }, e._onScroll = function() {
        var t;
        !e._isScrollIdle && e._scrollIdleTimeoutId !== void 0 ? (e._async.clearTimeout(e._scrollIdleTimeoutId), e._scrollIdleTimeoutId = void 0) : e._isScrollIdle = !1, !((t = e.props.calloutProps) === null || t === void 0) && t.onScroll && e.props.calloutProps.onScroll(), e._scrollIdleTimeoutId = e._async.setTimeout(function() {
          e._isScrollIdle = !0;
        }, to);
      }, e._onRenderOptionContent = function(t) {
        var r = re(e._getCurrentOptionStyles(t));
        return v.createElement("span", { className: r.optionText }, t.text);
      }, e._onRenderMultiselectOptionContent = function(t) {
        var r = re(e._getCurrentOptionStyles(t));
        return v.createElement("span", { id: t.id, "aria-hidden": "true", className: r.optionText }, t.text);
      }, e._onDismiss = function() {
        var t = e.props.onMenuDismiss;
        t && t(), e.props.persistMenu && e._onCalloutLayerMounted(), e._setOpenStateAndFocusOnClose(
          !1,
          !1
          /* focusInputAfterClose */
        ), e._resetSelectedIndex();
      }, e._onAfterClearPendingInfo = function() {
        e._processingClearPendingInfo = !1;
      }, e._onInputKeyDown = function(t) {
        var r = e.props, i = r.disabled, s = r.allowFreeform, l = r.allowFreeInput, d = r.allowParentArrowNavigation, c = r.autoComplete, u = r.hoisted.currentOptions, p = e.state, f = p.isOpen, b = p.currentPendingValueValidIndexOnHover;
        if (e._lastKeyDownWasAltOrMeta = Be(t), i) {
          e._handleInputWhenDisabled(t);
          return;
        }
        var g = e._getPendingSelectedIndex(
          !1
          /* includeCurrentPendingValue */
        );
        switch (t.which) {
          case V.enter:
            e._autofill.current && e._autofill.current.inputElement && e._autofill.current.inputElement.select(), e._submitPendingValue(t), e.props.multiSelect && f ? e.setState({
              currentPendingValueValidIndex: g
            }) : (f || (!s || e.state.currentPendingValue === void 0 || e.state.currentPendingValue === null || e.state.currentPendingValue.length <= 0) && e.state.currentPendingValueValidIndex < 0) && e.setState({
              isOpen: !f
            });
            break;
          case V.tab:
            e.props.multiSelect || e._submitPendingValue(t), f && e._setOpenStateAndFocusOnClose(
              !f,
              !1
              /* focusInputAfterClose */
            );
            return;
          case V.escape:
            if (e._resetSelectedIndex(), f)
              e.setState({
                isOpen: !1
              });
            else
              return;
            break;
          case V.up:
            if (b === K.clearAll && (g = e.props.hoisted.currentOptions.length), t.altKey || t.metaKey) {
              if (f) {
                e._setOpenStateAndFocusOnClose(
                  !f,
                  !0
                  /* focusInputAfterClose */
                );
                break;
              }
              return;
            }
            t.preventDefault(), e._setPendingInfoFromIndexAndDirection(g, F.backward);
            break;
          case V.down:
            t.altKey || t.metaKey ? e._setOpenStateAndFocusOnClose(
              !0,
              !0
              /* focusInputAfterClose */
            ) : (b === K.clearAll && (g = -1), t.preventDefault(), e._setPendingInfoFromIndexAndDirection(g, F.forward));
            break;
          case V.home:
          case V.end:
            if (s || l)
              return;
            g = -1;
            var m = F.forward;
            t.which === V.end && (g = u.length, m = F.backward), e._setPendingInfoFromIndexAndDirection(g, m);
            break;
          case V.space:
            if (!s && !l && c === "off")
              break;
          default:
            if (t.which >= 112 && t.which <= 123 || t.keyCode === V.alt || t.key === "Meta" || d && (t.keyCode === V.left || t.keyCode === V.right))
              return;
            if (!s && !l && c === "on") {
              e._onInputChange(t.key);
              break;
            }
            return;
        }
        t.stopPropagation(), t.preventDefault();
      }, e._onInputKeyUp = function(t) {
        var r = e.props, i = r.disabled, s = r.allowFreeform, l = r.allowFreeInput, d = r.autoComplete, c = e.state.isOpen, u = e._lastKeyDownWasAltOrMeta && Be(t);
        e._lastKeyDownWasAltOrMeta = !1;
        var p = u && !(kt() || St());
        if (i) {
          e._handleInputWhenDisabled(t);
          return;
        }
        switch (t.which) {
          case V.space:
            !s && !l && d === "off" && e._setOpenStateAndFocusOnClose(!c, !!c);
            return;
          default:
            p && c ? e._setOpenStateAndFocusOnClose(
              !c,
              !0
              /* focusInputAfterClose */
            ) : (e.state.focusState === "focusing" && e.props.openOnKeyboardFocus && e.setState({ isOpen: !0 }), e.state.focusState !== "focused" && e.setState({ focusState: "focused" }));
            return;
        }
      }, e._onOptionMouseLeave = function() {
        e._shouldIgnoreMouseEvent() || e.props.persistMenu && !e.state.isOpen || e.setState({
          currentPendingValueValidIndexOnHover: K.clearAll
        });
      }, e._onComboBoxClick = function() {
        var t = e.props.disabled, r = e.state.isOpen;
        t || (e._setOpenStateAndFocusOnClose(
          !r,
          !1
          /* focusInputAfterClose */
        ), e.setState({ focusState: "focused" }));
      }, e._onAutofillClick = function() {
        var t = e.props, r = t.disabled, i = t.allowFreeform;
        i && !r ? e.focus(e.state.isOpen || e._processingTouch) : e._onComboBoxClick();
      }, e._onTouchStart = function() {
        e._comboBoxWrapper.current && !("onpointerdown" in e._comboBoxWrapper) && e._handleTouchAndPointerEvent();
      }, e._onPointerDown = function(t) {
        t.pointerType === "touch" && (e._handleTouchAndPointerEvent(), t.preventDefault(), t.stopImmediatePropagation());
      }, Te(e), e._async = new De(e), e._events = new It(e), Ot(qe, o, {
        defaultSelectedKey: "selectedKey",
        text: "defaultSelectedKey",
        selectedKey: "value",
        dropdownWidth: "useComboBoxAsMenuWidth",
        ariaLabel: "label"
      }), e._id = o.id || xe("ComboBox"), e._isScrollIdle = !0, e._processingTouch = !1, e._gotMouseMove = !1, e._processingClearPendingInfo = !1, e.state = {
        isOpen: !1,
        focusState: "none",
        currentPendingValueValidIndex: -1,
        currentPendingValue: void 0,
        currentPendingValueValidIndexOnHover: K.default
      }, e;
    }
    return Object.defineProperty(a.prototype, "selectedOptions", {
      /**
       * All selected options
       */
      get: function() {
        var o = this.props.hoisted, e = o.currentOptions, t = o.selectedIndices;
        return eo(e, t);
      },
      enumerable: !1,
      configurable: !0
    }), a.prototype.componentDidMount = function() {
      this._comboBoxWrapper.current && !this.props.disabled && (this._events.on(this._comboBoxWrapper.current, "focus", this._onResolveOptions, !0), "onpointerdown" in this._comboBoxWrapper.current && this._events.on(this._comboBoxWrapper.current, "pointerdown", this._onPointerDown, !0));
    }, a.prototype.componentDidUpdate = function(o, e) {
      var t = this, r, i, s, l = this.props, d = l.allowFreeform, c = l.allowFreeInput, u = l.text, p = l.onMenuOpen, f = l.onMenuDismissed, b = l.hoisted, g = b.currentOptions, m = b.selectedIndices, _ = this.state, C = _.currentPendingValue, y = _.currentPendingValueValidIndex, x = _.isOpen;
      x && (!e.isOpen || e.currentPendingValueValidIndex !== y) && this._async.setTimeout(function() {
        return t._scrollIntoView();
      }, 0);
      var w = Ce(this.context);
      this._hasFocus() && (x || e.isOpen && !x && this._focusInputAfterClose && this._autofill.current && (w == null ? void 0 : w.activeElement) !== this._autofill.current.inputElement) && this.focus(
        void 0,
        !0
        /*useFocusAsync*/
      ), this._focusInputAfterClose && (e.isOpen && !x || this._hasFocus() && (!x && !this.props.multiSelect && o.hoisted.selectedIndices && m && o.hoisted.selectedIndices[0] !== m[0] || !d && !c || u !== o.text)) && this._onFocus(), this._notifyPendingValueChanged(e), x && !e.isOpen && (this._overrideScrollDismiss = !0, this._async.clearTimeout(this._overrideScrollDimissTimeout), this._overrideScrollDimissTimeout = this._async.setTimeout(function() {
        t._overrideScrollDismiss = !1;
      }, 100), p == null || p()), !x && e.isOpen && f && f();
      var P = y, k = g.map(function(D, I) {
        return h(h({}, D), { index: I });
      });
      !Le(o.hoisted.currentOptions, g) && C && (P = this.props.allowFreeform || this.props.allowFreeInput ? this._processInputChangeWithFreeform(C) : this._updateAutocompleteIndexWithoutFreeform(C));
      var B = void 0;
      x && this._hasFocus() && P !== -1 ? B = (r = k[P].id) !== null && r !== void 0 ? r : this._id + "-list" + P : x && m.length && (B = (s = (i = k[m[0]]) === null || i === void 0 ? void 0 : i.id) !== null && s !== void 0 ? s : this._id + "-list" + m[0]), B !== this.state.ariaActiveDescendantValue && this.setState({
        ariaActiveDescendantValue: B
      });
    }, a.prototype.componentWillUnmount = function() {
      this._async.dispose(), this._events.dispose();
    }, a.prototype.render = function() {
      var o = this._id, e = o + "-error", t = this.props, r = t.className, i = t.disabled, s = t.required, l = t.errorMessage, d = t.onRenderContainer, c = d === void 0 ? this._onRenderContainer : d, u = t.onRenderLabel, p = u === void 0 ? this._onRenderLabel : u, f = t.onRenderList, b = f === void 0 ? this._onRenderList : f, g = t.onRenderItem, m = g === void 0 ? this._onRenderItem : g, _ = t.onRenderOption, C = _ === void 0 ? this._onRenderOptionContent : _, y = t.allowFreeform, x = t.styles, w = t.theme, P = t.persistMenu, k = t.multiSelect, B = t.hoisted, D = B.suggestedDisplayValue, I = B.selectedIndices, H = B.currentOptions, E = this.state.isOpen;
      this._currentVisibleValue = this._getVisibleValue();
      var z = k ? this._getMultiselectDisplayString(I, H, D) : void 0, O = ce(this.props, We, [
        "onChange",
        "value",
        "aria-describedby",
        "aria-labelledby"
      ]), L = !!(l && l.length > 0);
      this._classNames = this.props.getClassNames ? this.props.getClassNames(w, !!E, !!i, !!s, !!this._hasFocus(), !!y, !!L, r) : Jt(Zt(w, x), r, !!E, !!i, !!s, !!this._hasFocus(), !!y, !!L);
      var $ = this._renderComboBoxWrapper(z, e);
      return v.createElement(
        "div",
        h({}, O, { ref: this.props.hoisted.mergedRootRef, className: this._classNames.container }),
        p({ props: this.props, multiselectAccessibleText: z }, this._onRenderLabel),
        $,
        (P || E) && c(h(h({}, this.props), { onRenderList: b, onRenderItem: m, onRenderOption: C, options: H.map(function(Q, q) {
          return h(h({}, Q), { index: q });
        }), onDismiss: this._onDismiss }), this._onRenderContainer),
        L && v.createElement("div", { role: "alert", id: e, className: this._classNames.errorMessage }, l)
      );
    }, a.prototype._getPendingString = function(o, e, t) {
      return o ?? (N(e, t) ? W(e[t]) : "");
    }, a.prototype._getMultiselectDisplayString = function(o, e, t) {
      for (var r = [], i = 0; o && i < o.length; i++) {
        var s = o[i];
        e[s].itemType !== T.SelectAll && r.push(N(e, s) ? e[s].text : U(t));
      }
      var l = this.props.multiSelectDelimiter, d = l === void 0 ? ", " : l;
      return r.join(d);
    }, a.prototype._preventDismissOnScrollOrResize = function(o) {
      var e = this.props.calloutProps;
      return e != null && e.preventDismissOnEvent ? e.preventDismissOnEvent(o) : !!(this._overrideScrollDismiss && (o.type === "scroll" || o.type === "resize"));
    }, a.prototype._processInputChangeWithFreeform = function(o) {
      var e = this, t = this.props.hoisted.currentOptions, r = -1;
      if (o === "") {
        var i = t.map(function(c, u) {
          return h(h({}, c), { index: u });
        }).filter(function(c) {
          return Z(c) && !c.disabled && W(c) === o;
        });
        return i.length === 1 && (r = i[0].index), this._setPendingInfo(o, r, o), r;
      }
      var s = o;
      o = this._adjustForCaseSensitivity(o);
      var l = "";
      if (this.props.autoComplete === "on") {
        var i = t.map(function(u, p) {
          return h(h({}, u), { index: p });
        }).filter(function(u) {
          return Z(u) && !u.disabled && e._adjustForCaseSensitivity(W(u)).indexOf(o) === 0;
        });
        if (i.length > 0) {
          var d = W(i[0]);
          l = this._adjustForCaseSensitivity(d) !== o ? d : "", r = i[0].index;
        }
      } else {
        var i = t.map(function(u, p) {
          return h(h({}, u), { index: p });
        }).filter(function(u) {
          return Z(u) && !u.disabled && e._adjustForCaseSensitivity(W(u)) === o;
        });
        i.length === 1 && (r = i[0].index);
      }
      return this._setPendingInfo(s, r, l), r;
    }, a.prototype._processInputChangeWithoutFreeform = function(o) {
      var e = this, t = this.state, r = t.currentPendingValue, i = t.currentPendingValueValidIndex;
      if (this.props.autoComplete === "on" && o !== "") {
        this._autoCompleteTimeout && (this._async.clearTimeout(this._autoCompleteTimeout), this._autoCompleteTimeout = void 0, o = U(r) + o);
        var s = this._updateAutocompleteIndexWithoutFreeform(o);
        return this._autoCompleteTimeout = this._async.setTimeout(function() {
          e._autoCompleteTimeout = void 0;
        }, no), s;
      }
      var l = i >= 0 ? i : this._getFirstSelectedIndex();
      return this._setPendingInfoFromIndex(l), l;
    }, a.prototype._updateAutocompleteIndexWithoutFreeform = function(o) {
      var e = this, t = this.props.hoisted.currentOptions, r = o;
      o = this._adjustForCaseSensitivity(o);
      var i = t.map(function(s, l) {
        return h(h({}, s), { index: l });
      }).filter(function(s) {
        return Z(s) && !s.disabled && e._adjustForCaseSensitivity(s.text).indexOf(o) === 0;
      });
      return i.length > 0 ? (this._setPendingInfo(r, i[0].index, W(i[0])), i[0].index) : -1;
    }, a.prototype._getFirstSelectedIndex = function() {
      var o = this.props.hoisted.selectedIndices;
      return o != null && o.length ? o[0] : -1;
    }, a.prototype._getNextSelectableIndex = function(o, e) {
      var t = this.props.hoisted.currentOptions, r = o + e;
      if (r = Math.max(0, Math.min(t.length - 1, r)), !N(t, r))
        return -1;
      var i = t[r];
      if (!ie(i) || i.hidden === !0)
        if (e !== F.none && (r > 0 && e < F.none || r >= 0 && r < t.length && e > F.none))
          r = this._getNextSelectableIndex(r, e);
        else
          return o;
      return r;
    }, a.prototype._setSelectedIndex = function(o, e, t) {
      t === void 0 && (t = F.none);
      var r = this.props, i = r.onChange, s = r.onPendingValueChanged, l = r.hoisted, d = l.selectedIndices, c = l.currentOptions, u = d ? d.slice() : [], p = c.slice();
      if (o = this._getNextSelectableIndex(o, t), !!N(c, o)) {
        if (this.props.multiSelect || u.length < 1 || u.length === 1 && u[0] !== o) {
          var f = h({}, c[o]);
          if (!f || f.disabled)
            return;
          if (this.props.multiSelect)
            if (f.selected = f.selected !== void 0 ? !f.selected : u.indexOf(o) < 0, f.itemType === T.SelectAll)
              u = [], f.selected ? c.forEach(function(_, C) {
                !_.disabled && ie(_) && (u.push(C), p[C] = h(h({}, _), { selected: !0 }));
              }) : p = c.map(function(_) {
                return h(h({}, _), { selected: !1 });
              });
            else {
              f.selected && u.indexOf(o) < 0 ? u.push(o) : !f.selected && u.indexOf(o) >= 0 && (u = u.filter(function(_) {
                return _ !== o;
              })), p[o] = f;
              var b = p.filter(function(_) {
                return _.itemType === T.SelectAll;
              })[0];
              if (b) {
                var g = this._isSelectAllChecked(u), m = p.indexOf(b);
                g ? (u.push(m), p[m] = h(h({}, b), { selected: !0 })) : (u = u.filter(function(_) {
                  return _ !== m;
                }), p[m] = h(h({}, b), { selected: !1 }));
              }
            }
          else
            u[0] = o;
          e.persist(), this.props.selectedKey || this.props.selectedKey === null ? this._hasPendingValue && s && (s(), this._hasPendingValue = !1) : (this.props.hoisted.setSelectedIndices(u), this.props.hoisted.setCurrentOptions(p), this._hasPendingValue && s && (s(), this._hasPendingValue = !1)), i && i(e, f, o, W(f));
        }
        this.props.multiSelect && this.state.isOpen || this._clearPendingInfo();
      }
    }, a.prototype._submitPendingValue = function(o) {
      var e, t = this.props, r = t.onChange, i = t.allowFreeform, s = t.autoComplete, l = t.multiSelect, d = t.hoisted, c = d.currentOptions, u = this.state, p = u.currentPendingValue, f = u.currentPendingValueValidIndex, b = u.currentPendingValueValidIndexOnHover, g = this.props.hoisted.selectedIndices;
      if (!this._processingClearPendingInfo) {
        if (i) {
          if (p == null) {
            b >= 0 && (this._setSelectedIndex(b, o), this._clearPendingInfo());
            return;
          }
          if (N(c, f)) {
            var m = this._adjustForCaseSensitivity(W(c[f])), _ = this._autofill.current, C = this._adjustForCaseSensitivity(p);
            if (C === m || s && m.indexOf(C) === 0 && (_ != null && _.isValueSelected) && p.length + (_.selectionEnd - _.selectionStart) === m.length || ((e = _ == null ? void 0 : _.inputElement) === null || e === void 0 ? void 0 : e.value) !== void 0 && this._adjustForCaseSensitivity(_.inputElement.value) === m) {
              if (this._setSelectedIndex(f, o), l && this.state.isOpen)
                return;
              this._clearPendingInfo();
              return;
            }
          }
          if (r)
            r && r(o, void 0, void 0, p);
          else {
            var y = {
              key: p || xe(),
              text: U(p)
            };
            l && (y.selected = !0);
            var x = c.concat([y]);
            g && (l || (g = []), g.push(x.length - 1)), d.setCurrentOptions(x), d.setSelectedIndices(g);
          }
        } else f >= 0 ? this._setSelectedIndex(f, o) : b >= 0 && this._setSelectedIndex(b, o);
        this._clearPendingInfo();
      }
    }, a.prototype._onCalloutLayerMounted = function() {
      this._gotMouseMove = !1;
    }, a.prototype._renderSeparator = function(o) {
      var e = o.index, t = o.key;
      return e && e > 0 ? v.createElement("div", { role: "presentation", key: t, className: this._classNames.divider }) : null;
    }, a.prototype._renderHeader = function(o) {
      var e = this.props.onRenderOption, t = e === void 0 ? this._onRenderOptionContent : e;
      return v.createElement("div", { id: o.id, key: o.key, className: this._classNames.header }, t(o, this._onRenderOptionContent));
    }, a.prototype._renderCheckboxLabel = function(o) {
      var e = this.props.onRenderOption, t = e === void 0 ? this._onRenderMultiselectOptionContent : e;
      return t(o, this._onRenderMultiselectOptionContent);
    }, a.prototype._isOptionHighlighted = function(o) {
      var e = this.state.currentPendingValueValidIndexOnHover;
      return e === K.clearAll ? !1 : e >= 0 ? e === o : this._isOptionSelected(o);
    }, a.prototype._isOptionSelected = function(o) {
      return this._getPendingSelectedIndex(
        !0
        /* includePendingValue */
      ) === o;
    }, a.prototype._isOptionChecked = function(o) {
      if (this.props.multiSelect && o !== void 0 && this.props.hoisted.selectedIndices) {
        var e = -1;
        return e = this.props.hoisted.selectedIndices.indexOf(o), e >= 0;
      }
      return !1;
    }, a.prototype._isOptionIndeterminate = function(o) {
      var e = this.props, t = e.multiSelect, r = e.hoisted;
      if (t && o !== void 0 && r.selectedIndices && r.currentOptions) {
        var i = r.currentOptions[o];
        if (i && i.itemType === T.SelectAll)
          return r.selectedIndices.length > 0 && !this._isSelectAllChecked();
      }
      return !1;
    }, a.prototype._isSelectAllChecked = function(o) {
      var e = this.props, t = e.multiSelect, r = e.hoisted, i = r.currentOptions.find(function(u) {
        return u.itemType === T.SelectAll;
      }), s = o || r.selectedIndices;
      if (!t || !s || !i)
        return !1;
      var l = r.currentOptions.indexOf(i), d = s.filter(function(u) {
        return u !== l;
      }), c = r.currentOptions.filter(function(u) {
        return !u.disabled && u.itemType !== T.SelectAll && ie(u);
      });
      return d.length === c.length;
    }, a.prototype._getPendingSelectedIndex = function(o) {
      var e = this.state, t = e.currentPendingValueValidIndex, r = e.currentPendingValue;
      return t >= 0 || o && r !== null && r !== void 0 ? t : this.props.multiSelect ? -1 : this._getFirstSelectedIndex();
    }, a.prototype._scrollIntoView = function() {
      var o = this.props, e = o.onScrollToItem, t = o.scrollSelectedToTop, r = this._getPendingSelectedIndex(!0);
      if (e) {
        e(r >= 0 ? r : this._getFirstSelectedIndex());
        return;
      }
      var i = this._selectedElement.current;
      if (this.props.multiSelect && this._comboBoxMenu.current && (i = $e(this._comboBoxMenu.current, function(C) {
        var y;
        return ((y = C.dataset) === null || y === void 0 ? void 0 : y.index) === r.toString();
      })), i && i.offsetParent) {
        var s = !0;
        if (this._comboBoxMenu.current && this._comboBoxMenu.current.offsetParent) {
          var l = this._comboBoxMenu.current.offsetParent, d = i.offsetParent, c = d, u = c.offsetHeight, p = c.offsetTop, f = l, b = f.offsetHeight, g = f.scrollTop, m = p < g, _ = p + u > g + b;
          m || t ? (s = !1, l.scrollTo(0, p)) : _ && l.scrollTo(0, p - b + u);
        } else
          i.offsetParent.scrollIntoView(s);
      }
    }, a.prototype._onItemClick = function(o) {
      var e = this, t = this.props.onItemClick, r = o.index;
      return function(i) {
        e.props.multiSelect || (e._autofill.current && e._autofill.current.focus(), e.setState({
          isOpen: !1
        })), t && t(i, o, r), e._setSelectedIndex(r, i);
      };
    }, a.prototype._resetSelectedIndex = function() {
      var o = this.props.hoisted.currentOptions;
      this._clearPendingInfo();
      var e = this._getFirstSelectedIndex();
      e > 0 && e < o.length ? this.props.hoisted.setSuggestedDisplayValue(o[e].text) : this.props.text && this.props.hoisted.setSuggestedDisplayValue(this.props.text);
    }, a.prototype._clearPendingInfo = function() {
      this._processingClearPendingInfo = !0, this.props.hoisted.setSuggestedDisplayValue(void 0), this.setState({
        currentPendingValue: void 0,
        currentPendingValueValidIndex: -1,
        currentPendingValueValidIndexOnHover: K.default
      }, this._onAfterClearPendingInfo);
    }, a.prototype._setPendingInfo = function(o, e, t) {
      e === void 0 && (e = -1), !this._processingClearPendingInfo && (this.props.hoisted.setSuggestedDisplayValue(t), this.setState({
        currentPendingValue: U(o),
        currentPendingValueValidIndex: e,
        currentPendingValueValidIndexOnHover: K.default
      }));
    }, a.prototype._setPendingInfoFromIndex = function(o) {
      var e = this.props.hoisted.currentOptions;
      if (o >= 0 && o < e.length) {
        var t = e[o];
        this._setPendingInfo(W(t), o, W(t));
      } else
        this._clearPendingInfo();
    }, a.prototype._setPendingInfoFromIndexAndDirection = function(o, e) {
      var t = this.props.hoisted.currentOptions;
      e === F.forward && o >= t.length - 1 ? o = -1 : e === F.backward && o <= 0 && (o = t.length);
      var r = this._getNextSelectableIndex(o, e);
      o === r ? e === F.forward ? o = this._getNextSelectableIndex(-1, e) : e === F.backward && (o = this._getNextSelectableIndex(t.length, e)) : o = r, N(t, o) && this._setPendingInfoFromIndex(o);
    }, a.prototype._notifyPendingValueChanged = function(o) {
      var e = this.props.onPendingValueChanged;
      if (e) {
        var t = this.props.hoisted.currentOptions, r = this.state, i = r.currentPendingValue, s = r.currentPendingValueValidIndex, l = r.currentPendingValueValidIndexOnHover, d = void 0, c = void 0;
        l !== o.currentPendingValueValidIndexOnHover && N(t, l) ? d = l : s !== o.currentPendingValueValidIndex && N(t, s) ? d = s : i !== o.currentPendingValue && (c = i), (d !== void 0 || c !== void 0 || this._hasPendingValue) && (e(d !== void 0 ? t[d] : void 0, d, c), this._hasPendingValue = d !== void 0 || c !== void 0);
      }
    }, a.prototype._setOpenStateAndFocusOnClose = function(o, e) {
      this._focusInputAfterClose = e, this.setState({ isOpen: o });
    }, a.prototype._onOptionMouseEnter = function(o) {
      this._shouldIgnoreMouseEvent() || this.setState({
        currentPendingValueValidIndexOnHover: o
      });
    }, a.prototype._onOptionMouseMove = function(o) {
      this._gotMouseMove = !0, !(!this._isScrollIdle || this.state.currentPendingValueValidIndexOnHover === o) && this.setState({
        currentPendingValueValidIndexOnHover: o
      });
    }, a.prototype._shouldIgnoreMouseEvent = function() {
      return !this._isScrollIdle || !this._gotMouseMove;
    }, a.prototype._handleInputWhenDisabled = function(o) {
      this.props.disabled && (this.state.isOpen && this.setState({ isOpen: !1 }), o !== null && // eslint-disable-next-line deprecation/deprecation
      o.which !== V.tab && // eslint-disable-next-line deprecation/deprecation
      o.which !== V.escape && // eslint-disable-next-line deprecation/deprecation
      (o.which < 112 || o.which > 123) && (o.stopPropagation(), o.preventDefault()));
    }, a.prototype._handleTouchAndPointerEvent = function() {
      var o = this;
      this._lastTouchTimeoutId !== void 0 && (this._async.clearTimeout(this._lastTouchTimeoutId), this._lastTouchTimeoutId = void 0), this._processingTouch = !0, this._lastTouchTimeoutId = this._async.setTimeout(function() {
        o._processingTouch = !1, o._lastTouchTimeoutId = void 0;
      }, oo);
    }, a.prototype._getCaretButtonStyles = function() {
      var o = this.props.caretDownButtonStyles;
      return Yt(this.props.theme, o);
    }, a.prototype._getCurrentOptionStyles = function(o) {
      var e, t = this.props.comboBoxOptionStyles, r = o.styles, i = Xt(this.props.theme, t, r, this._isPendingOption(o), o.hidden, this._isOptionHighlighted(o.index));
      return i.__shadowConfig__ = (e = this.props.styles) === null || e === void 0 ? void 0 : e.__shadowConfig__, i;
    }, a.prototype._getAriaAutoCompleteValue = function() {
      var o = !this.props.disabled && this.props.autoComplete === "on";
      return o ? this.props.allowFreeform ? "inline" : "both" : "list";
    }, a.prototype._isPendingOption = function(o) {
      return o && o.index === this.state.currentPendingValueValidIndex;
    }, a.prototype._hasFocus = function() {
      return this.state.focusState !== "none";
    }, a.prototype._adjustForCaseSensitivity = function(o) {
      return this.props.caseSensitive ? o : o.toLowerCase();
    }, a.contextType = Ee, a = pe([
      fe("ComboBox", ["theme", "styles"])
    ], a), a;
  }(v.Component)
);
function Ve(n, a) {
  if (!n || !a)
    return [];
  var o = {};
  n.forEach(function(s, l) {
    s.selected && (o[l] = !0);
  });
  for (var e = function(s) {
    var l = wt(n, function(d) {
      return d.key === s;
    });
    l > -1 && (o[l] = !0);
  }, t = 0, r = a; t < r.length; t++) {
    var i = r[t];
    e(i);
  }
  return Object.keys(o).map(Number).sort();
}
function lo(n, a) {
  var o = de(n);
  return o.length ? o : de(a);
}
function de(n) {
  return n === void 0 ? [] : n instanceof Array ? n : [n];
}
function U(n) {
  return n || "";
}
function N(n, a) {
  return !!n && a >= 0 && a < n.length;
}
function Z(n) {
  return n.itemType !== T.Header && n.itemType !== T.Divider && n.itemType !== T.SelectAll;
}
function ie(n) {
  return n.itemType !== T.Header && n.itemType !== T.Divider;
}
function W(n) {
  return n.useAriaLabelAsText && n.ariaLabel ? n.ariaLabel : n.text;
}
function Be(n) {
  return n.which === V.alt || n.key === "Meta";
}
function uo({
  label: n,
  handleComboBoxChange: a,
  showErrorMessage: o,
  styles: e,
  selectedOption: t,
  caseOptions: r,
  setSelectedOption: i,
  disabled: s = !1,
  getCase: l,
  getCaseByName: d,
  ...c
}) {
  const u = ot.useRef(null), p = Object.assign(e || {}), f = {
    ...p,
    // Spread existing styles
    root: {
      ...p.root,
      // Spread existing container styles
      backgroundColor: "#ffffd0"
      // Add the background color
    },
    input: {
      ...p.input,
      // Spread existing container styles
      backgroundColor: "#ffffd0"
    }
  }, b = (m) => {
    const _ = m.slice(0, -2), C = m.slice(-2);
    return `${_}/${C}`;
  }, g = async (m) => {
    var x, w;
    const _ = m.replace(/\D/g, ""), C = b(_);
    let y = await l(_);
    if (y && y.length > 0) {
      const P = `${C} - ${y[0].akt_name}`, k = [{ key: _, text: P }];
      (x = u == null ? void 0 : u.current) == null || x.focus(!0), a(k);
    } else if (y = await d(m), !y || y.length === 0)
      o("Es gibt keine Suchergebnisse");
    else {
      const P = y.map((k) => ({
        key: b(k.akt_nr || ""),
        text: `${b(k.akt_nr || "")} - ${k.akt_name}`
      }));
      (w = u == null ? void 0 : u.current) == null || w.focus(!0), a(P);
    }
  };
  return /* @__PURE__ */ tt.jsx(
    Ge,
    {
      componentRef: u,
      allowFreeform: !0,
      label: n,
      onChange: (m, _, C, y) => {
        m && y && m.key === "Enter" && g(y);
      },
      onItemClick: (m, _) => {
        _ && i(_);
      },
      styles: f,
      options: r,
      selectedKey: t ? t.key : void 0,
      useComboBoxAsMenuWidth: !0,
      disabled: s,
      ...c
    }
  );
}
uo.defaultProps = {
  disabled: !1
};
export {
  uo as default
};
