import { j as b } from "../../node_modules/react/jsx-runtime.js";
import F from "react";
import "../../models/CaseFile.js";
import l from "../../utils/case-file-utils.js";
import _ from "../../services/case-file-service.js";
import { ComboBox as j } from "../../node_modules/@fluentui/react/lib/components/ComboBox/ComboBox.js";
function T({
  label: d,
  handleComboBoxChange: f,
  showErrorMessage: c,
  styles: k,
  selectedOption: u,
  caseOptions: S,
  setSelectedOption: g,
  disabled: y = !1,
  // TEMP: getDomain will be handled differently
  getDomain: x
}) {
  const t = F.useRef(null), r = Object.assign(k || {}), R = {
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
  }, E = async (s) => {
    var p, C;
    const e = s.replace(/\D/g, ""), m = l.formatCaseYear(e), a = await x();
    console.log(a, e);
    let o = await _.getCase(a, e);
    if (o && o.length > 0) {
      const i = `${m} - ${o[0].akt_name}`, n = [{ key: e, text: i }];
      (p = t == null ? void 0 : t.current) == null || p.focus(!0), f(n);
    } else if (o = await _.getCaseByName(a, s), !o || o.length === 0)
      c(
        "FULL_TEXT_SEARCH.SUBMISSION_ERRORS.NO_SEARCH_RESULTS"
      ), c("Es gibt keine Suchergebnisse");
    else {
      const i = o.map((n) => ({
        key: l.formatCaseYear(n.akt_nr || ""),
        text: `${l.formatCaseYear(n.akt_nr || "")} - ${n.akt_name}`
      }));
      (C = t == null ? void 0 : t.current) == null || C.focus(!0), f(i);
    }
  };
  return /* @__PURE__ */ b.jsx(
    j,
    {
      componentRef: t,
      allowFreeform: !0,
      label: d,
      onChange: (s, e, m, a) => {
        s && a && E(a);
      },
      onItemClick: (s, e) => {
        e && g(e);
      },
      styles: R,
      options: S,
      selectedKey: u ? u.key : void 0,
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
