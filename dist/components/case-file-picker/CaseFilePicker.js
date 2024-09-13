import { j as h } from "../../node_modules/react/jsx-runtime.js";
import $ from "react";
import "../../models/CaseFile.js";
import n from "../../utils/case-file-utils.js";
import { ComboBox as j } from "../../node_modules/@fluentui/react/lib/components/ComboBox/ComboBox.js";
function w({
  label: p,
  handleComboBoxChange: l,
  showErrorMessage: k,
  styles: _,
  selectedOption: i,
  caseOptions: u,
  setSelectedOption: d,
  disabled: g = !1,
  getCase: C,
  getCaseByName: x
}) {
  const t = $.useRef(null);
  console.log(_);
  const y = async (o) => {
    var c, m;
    const a = o.replace(/\D/g, ""), f = n.formatCaseYear(a);
    let e = await C(a);
    if (e && e.length > 0) {
      const r = `${f} - ${e[0].akt_name}`, s = [{ key: a, text: r }];
      (c = t == null ? void 0 : t.current) == null || c.focus(!0), l(s);
    } else if (e = await x(o), !e || e.length === 0)
      k("Es gibt keine Suchergebnisse");
    else {
      const r = e.map((s) => ({
        key: n.formatCaseYear(s.akt_nr || ""),
        text: `${n.formatCaseYear(s.akt_nr || "")} - ${s.akt_name}`
      }));
      (m = t == null ? void 0 : t.current) == null || m.focus(!0), l(r);
    }
  };
  return console.log(u), /* @__PURE__ */ h.jsx(
    j,
    {
      componentRef: t,
      allowFreeform: !0,
      label: p,
      onChange: (o, a, f, e) => {
        o && e && y(e);
      },
      onItemClick: (o, a) => {
        a && d(a);
      },
      options: u,
      selectedKey: i ? i.key : void 0,
      useComboBoxAsMenuWidth: !0,
      disabled: g
    }
  );
}
w.defaultProps = {
  disabled: !1
};
export {
  w as default
};
//# sourceMappingURL=CaseFilePicker.js.map
