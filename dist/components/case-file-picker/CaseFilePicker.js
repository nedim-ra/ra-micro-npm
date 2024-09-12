import { j } from "../../node_modules/react/jsx-runtime.js";
import F from "react";
import "../../models/CaseFile.js";
import l from "../../utils/case-file-utils.js";
import C from "../../services/case-file-service.js";
import { ComboBox as S } from "../../node_modules/@fluentui/react/lib/components/ComboBox/ComboBox.js";
function $({
  label: g,
  handleComboBoxChange: i,
  styles: k,
  showErrorMessage: d,
  selectedOption: f,
  caseOptions: y,
  setSelectedOption: _,
  disabled: x = !1,
  // TEMP: Domain will be handled differently
  domain: u
  // ...rest
}) {
  const b = async (s) => {
    var m, p;
    const o = s.replace(/\D/g, ""), c = l.formatCaseYear(o);
    let e = await C.getCase(u, o);
    if (e && e.length > 0) {
      const n = `${c} - ${e[0].akt_name}`, a = [{ key: o, text: n }];
      (m = t == null ? void 0 : t.current) == null || m.focus(!0), i(a);
    } else if (e = await C.getCaseByName(u, s), !e || e.length === 0)
      d("Es gibt keine Suchergebnisse");
    else {
      const n = e.map((a) => ({
        key: l.formatCaseYear(a.akt_nr || ""),
        text: `${l.formatCaseYear(a.akt_nr || "")} - ${a.akt_name}`
      }));
      (p = t == null ? void 0 : t.current) == null || p.focus(!0), i(n);
    }
  }, r = Object.assign(k || {}), h = {
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
  }, t = F.useRef(null);
  return /* @__PURE__ */ j.jsx(
    S,
    {
      componentRef: t,
      allowFreeform: !0,
      label: g,
      onChange: (s, o, c, e) => {
        console.log(s), s && e && b(e);
      },
      onItemClick: (s, o) => {
        o && _(o);
      },
      styles: h,
      options: y,
      selectedKey: f ? f.key : void 0,
      useComboBoxAsMenuWidth: !0,
      disabled: x
    }
  );
}
$.defaultProps = {
  disabled: !1
};
export {
  $ as default
};
//# sourceMappingURL=CaseFilePicker.js.map
