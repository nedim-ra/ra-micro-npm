import o from "../node_modules/axios/lib/axios.js";
import n from "../models/CaseFile.js";
const t = class t {
};
t.getCase = async (a, s) => {
  const e = await o.get(
    `${a}/api/akte/akte_by_nr?aktenr=${s}`
  );
  return n.mapList(e.data);
}, t.getCaseByName = async (a, s) => {
  const e = await o.get(
    `${a}/api/akte/akte1_suche?query=${encodeURIComponent(s)}&pool_id=1`
  );
  return n.mapList(e.data);
};
let r = t;
export {
  r as default
};
//# sourceMappingURL=case-file-service.js.map
