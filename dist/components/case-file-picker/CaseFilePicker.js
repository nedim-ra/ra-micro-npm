import { j } from "../../node_modules/react/jsx-runtime.js";
import $ from "react";
import "../../models/CaseFile.js";
import i from "../../utils/case-file-utils.js";
import { ComboBox as w } from "../../node_modules/@fluentui/react/lib/components/ComboBox/ComboBox.js";
function F({
  label: p,
  handleComboBoxChange: f,
  showErrorMessage: d,
  styles: k,
  selectedOption: l,
  caseOptions: C,
  setSelectedOption: g,
  disabled: _ = !1,
  getCase: y,
  getCaseByName: x
}) {
  const t = $.useRef(null), r = Object.assign(k || {}), b = {
    ...r,
    // Spread existing styles
    root: {
      ...r.root,
      // Spread existing container styles
      backgroundColor: "#ffffd0"
      // Add the background color
    },
    input: {
      ...r.input,
      // Spread existing container styles
      backgroundColor: "#ffffd0"
    }
  }, h = async (a) => {
    var c, m;
    const o = a.replace(/\D/g, ""), u = i.formatCaseYear(o);
    let e = await y(o);
    if (e && e.length > 0) {
      const n = `${u} - ${e[0].akt_name}`, s = [{ key: o, text: n }];
      (c = t == null ? void 0 : t.current) == null || c.focus(!0), f(s);
    } else if (e = await x(a), !e || e.length === 0)
      d("Es gibt keine Suchergebnisse");
    else {
      const n = e.map((s) => ({
        key: i.formatCaseYear(s.akt_nr || ""),
        text: `${i.formatCaseYear(s.akt_nr || "")} - ${s.akt_name}`
      }));
      (m = t == null ? void 0 : t.current) == null || m.focus(!0), f(n);
    }
  };
  return /* @__PURE__ */ j.jsx(
    w,
    {
      componentRef: t,
      allowFreeform: !0,
      label: p,
      onChange: (a, o, u, e) => {
        a && e && h(e);
      },
      onItemClick: (a, o) => {
        o && g(o);
      },
      styles: b,
      options: C,
      selectedKey: l ? l.key : void 0,
      useComboBoxAsMenuWidth: !0,
      disabled: _
    }
  );
}
F.defaultProps = {
  disabled: !1
};
export {
  F as default
};
//# sourceMappingURL=CaseFilePicker.js.map
