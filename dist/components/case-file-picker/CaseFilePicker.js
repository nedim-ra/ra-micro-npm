import { j } from "../../node_modules/react/jsx-runtime.js";
import $ from "react";
import "../../models/CaseFile.js";
import l from "../../utils/case-file-utils.js";
import { ComboBox as w } from "../../node_modules/@fluentui/react/lib/components/ComboBox/ComboBox.js";
function F({
  label: p,
  handleComboBoxChange: f,
  showErrorMessage: d,
  styles: g,
  selectedOption: i,
  caseOptions: k,
  setSelectedOption: C,
  disabled: _ = !1,
  getCase: y,
  getCaseByName: x
}) {
  const t = $.useRef(null), r = Object.assign(g || {}), b = {
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
    var u, m;
    const o = a.replace(/\D/g, ""), c = l.formatCaseYear(o);
    let e = await y(o);
    if (console.log(e), e && e.length > 0) {
      const n = `${c} - ${e[0].akt_name}`, s = [{ key: o, text: n }];
      (u = t == null ? void 0 : t.current) == null || u.focus(!0), console.log(s), f(s);
    } else if (e = await x(a), !e || e.length === 0)
      d("Es gibt keine Suchergebnisse");
    else {
      const n = e.map((s) => ({
        key: l.formatCaseYear(s.akt_nr || ""),
        text: `${l.formatCaseYear(s.akt_nr || "")} - ${s.akt_name}`
      }));
      (m = t == null ? void 0 : t.current) == null || m.focus(!0), console.log(n), f(n);
    }
  };
  return /* @__PURE__ */ j.jsx(
    w,
    {
      componentRef: t,
      allowFreeform: !0,
      label: p,
      onChange: (a, o, c, e) => {
        a && e && h(e);
      },
      onItemClick: (a, o) => {
        o && C(o);
      },
      styles: b,
      options: k,
      selectedKey: i ? i.key : void 0,
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
