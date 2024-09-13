import { j as h } from "../../node_modules/react/jsx-runtime.js";
import j from "react";
import { ComboBox as w } from "../../node_modules/@fluentui/react/lib/components/ComboBox/ComboBox.js";
function S({
  label: d,
  handleComboBoxChange: l,
  showErrorMessage: k,
  styles: p,
  selectedOption: u,
  caseOptions: g,
  setSelectedOption: y,
  disabled: _ = !1,
  getCase: b,
  getCaseByName: x
}) {
  const s = j.useRef(null), a = Object.assign(p || {}), C = {
    ...a,
    // Spread existing styles
    root: {
      ...a.root,
      // Spread existing container styles
      backgroundColor: "#ffffd0"
      // Add the background color
    },
    input: {
      ...a.input,
      // Spread existing container styles
      backgroundColor: "#ffffd0"
    }
  }, c = (o) => {
    const t = o.slice(0, -2), r = o.slice(-2);
    return `${t}/${r}`;
  }, $ = async (o) => {
    var f, m;
    const t = o.replace(/\D/g, ""), r = c(t);
    let e = await b(t);
    if (e && e.length > 0) {
      const i = `${r} - ${e[0].akt_name}`, n = [{ key: t, text: i }];
      (f = s == null ? void 0 : s.current) == null || f.focus(!0), l(n);
    } else if (e = await x(o), !e || e.length === 0)
      k("Es gibt keine Suchergebnisse");
    else {
      const i = e.map((n) => ({
        key: c(n.akt_nr || ""),
        text: `${c(n.akt_nr || "")} - ${n.akt_name}`
      }));
      (m = s == null ? void 0 : s.current) == null || m.focus(!0), l(i);
    }
  };
  return /* @__PURE__ */ h.jsx(
    w,
    {
      componentRef: s,
      allowFreeform: !0,
      label: d,
      onChange: (o, t, r, e) => {
        o && e && $(e);
      },
      onItemClick: (o, t) => {
        t && y(t);
      },
      styles: C,
      options: g,
      selectedKey: u ? u.key : void 0,
      useComboBoxAsMenuWidth: !0,
      disabled: _
    }
  );
}
S.defaultProps = {
  disabled: !1
};
export {
  S as default
};
//# sourceMappingURL=CaseFilePicker.js.map
