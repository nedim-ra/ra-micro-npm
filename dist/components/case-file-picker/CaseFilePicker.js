import { j } from "../../node_modules/react/jsx-runtime.js";
import $ from "react";
import "../../models/CaseFile.js";
import f from "../../utils/case-file-utils.js";
import { ComboBox as w } from "../../node_modules/@fluentui/react/lib/components/ComboBox/ComboBox.js";
function F({
  label: k,
  handleComboBoxChange: i,
  showErrorMessage: p,
  styles: d,
  selectedOption: n,
  caseOptions: C,
  setSelectedOption: y,
  disabled: _ = !1,
  getCase: x,
  getCaseByName: b
}) {
  const o = $.useRef(null), l = Object.assign(d || {}), c = {
    ...l,
    // Spread existing styles
    root: {
      ...l.root,
      // Spread existing container styles
      backgroundColor: "#ffffd0"
      // Add the background color
    },
    input: {
      ...l.input,
      // Spread existing container styles
      backgroundColor: "#ffffd0"
    }
  }, h = async (a) => {
    var m, g;
    const t = a.replace(/\D/g, ""), u = f.formatCaseYear(t);
    let e = await x(t);
    if (console.log(e), e && e.length > 0) {
      const r = `${u} - ${e[0].akt_name}`, s = [{ key: t, text: r }];
      (m = o == null ? void 0 : o.current) == null || m.focus(!0), console.log(s), i(s);
    } else if (e = await b(a), !e || e.length === 0)
      p("Es gibt keine Suchergebnisse");
    else {
      const r = e.map((s) => ({
        key: f.formatCaseYear(s.akt_nr || ""),
        text: `${f.formatCaseYear(s.akt_nr || "")} - ${s.akt_name}`
      }));
      (g = o == null ? void 0 : o.current) == null || g.focus(!0), console.log(r), i(r);
    }
  };
  return console.log(c), console.log(n ? n.key : void 0), /* @__PURE__ */ j.jsx(
    w,
    {
      componentRef: o,
      allowFreeform: !0,
      label: k,
      onChange: (a, t, u, e) => {
        a && e && h(e);
      },
      onItemClick: (a, t) => {
        t && y(t);
      },
      styles: c,
      options: C,
      selectedKey: n ? n.key : void 0,
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
