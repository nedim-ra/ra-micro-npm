import { j as b } from "../../node_modules/react/jsx-runtime.js";
import F from "react";
import "../../models/CaseFile.js";
import f from "../../utils/case-file-utils.js";
import _ from "../../services/case-file-service.js";
import { ComboBox as j } from "../../node_modules/@fluentui/react/lib/components/ComboBox/ComboBox.js";
function T({
  label: d,
  handleComboBoxChange: l,
  showErrorMessage: u,
  styles: k,
  selectedOption: c,
  caseOptions: S,
  setSelectedOption: g,
  disabled: y = !1,
  // TEMP: getDomain will be handled differently
  getDomain: x
}) {
  const e = F.useRef(null), r = Object.assign(k || {}), R = {
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
  }, E = async (o) => {
    var p, C;
    const t = o.replace(/\D/g, ""), m = f.formatCaseYear(t), s = await x();
    let a = await _.getCase(s, t);
    if (a && a.length > 0) {
      const i = `${m} - ${a[0].akt_name}`, n = [{ key: t, text: i }];
      (p = e == null ? void 0 : e.current) == null || p.focus(!0), l(n);
    } else if (a = await _.getCaseByName(s, o), !a || a.length === 0)
      u(
        "FULL_TEXT_SEARCH.SUBMISSION_ERRORS.NO_SEARCH_RESULTS"
      ), u("Es gibt keine Suchergebnisse");
    else {
      const i = a.map((n) => ({
        key: f.formatCaseYear(n.akt_nr || ""),
        text: `${f.formatCaseYear(n.akt_nr || "")} - ${n.akt_name}`
      }));
      (C = e == null ? void 0 : e.current) == null || C.focus(!0), l(i);
    }
  };
  return /* @__PURE__ */ b.jsx(
    j,
    {
      componentRef: e,
      allowFreeform: !0,
      label: d,
      onChange: (o, t, m, s) => {
        o && s && E(s);
      },
      onItemClick: (o, t) => {
        t && g(t);
      },
      styles: R,
      options: S,
      selectedKey: c ? c.key : void 0,
      useComboBoxAsMenuWidth: !0,
      disabled: y
    }
  );
}
T.defaultProps = {
  disabled: !1
};
export {
  T as default
};
//# sourceMappingURL=CaseFilePicker.js.map
