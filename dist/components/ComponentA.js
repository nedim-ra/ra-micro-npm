import { j as o } from "../node_modules/react/jsx-runtime.js";
import { useState as e } from "react";
function m() {
  const [t, n] = e(0);
  return console.log("Hello from lib ComponentA"), /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    "Hello from RA Micro npm package component",
    /* @__PURE__ */ o.jsxs("button", { type: "button", onClick: () => n(t + 1), children: [
      "count is ",
      t
    ] })
  ] });
}
export {
  m as default
};
//# sourceMappingURL=ComponentA.js.map
