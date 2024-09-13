import { j as w } from "../../node_modules/react/jsx-runtime.js";
import F from "react";
import "../../models/CaseFile.js";
import f from "../../utils/case-file-utils.js";
import S from "../../services/case-file-service.js";
import { ComboBox as $ } from "../../node_modules/@fluentui/react/lib/components/ComboBox/ComboBox.js";
function V({
  label: d,
  handleComboBoxChange: l,
  showErrorMessage: k,
  styles: C,
  selectedOption: u,
  caseOptions: g,
  setSelectedOption: y,
  disabled: _ = !1,
  // TEMP: getDomain will be handled differently
  getDomain: x,
  getCase: b
}) {
  const e = F.useRef(null), n = Object.assign(C || {}), h = {
    ...n,
    // Spread existing styles
    root: {
      ...n.root,
      // Spread existing container styles
      backgroundColor: "#ffffd0"
      // Add the background color
    },
    input: {
      ...n.input,
      // Spread existing container styles
      backgroundColor: "#ffffd0"
    }
  }, j = async (a) => {
    var m, p;
    const t = a.replace(/\D/g, ""), c = f.formatCaseYear(t), s = await x();
    let o = await b(s, t);
    if (o && o.length > 0) {
      const i = `${c} - ${o[0].akt_name}`, r = [{ key: t, text: i }];
      (m = e == null ? void 0 : e.current) == null || m.focus(!0), l(r);
    } else if (o = await S.getCaseByName(s, a), !o || o.length === 0)
      k("Es gibt keine Suchergebnisse");
    else {
      const i = o.map((r) => ({
        key: f.formatCaseYear(r.akt_nr || ""),
        text: `${f.formatCaseYear(r.akt_nr || "")} - ${r.akt_name}`
      }));
      (p = e == null ? void 0 : e.current) == null || p.focus(!0), l(i);
    }
  };
  return /* @__PURE__ */ w.jsx(
    $,
    {
      componentRef: e,
      allowFreeform: !0,
      label: d,
      onChange: (a, t, c, s) => {
        a && s && j(s);
      },
      onItemClick: (a, t) => {
        t && y(t);
      },
      styles: h,
      options: g,
      selectedKey: u ? u.key : void 0,
      useComboBoxAsMenuWidth: !0,
      disabled: _
    }
  );
}
V.defaultProps = {
  disabled: !1
};
export {
  V as default
};
//# sourceMappingURL=CaseFilePicker.js.map
