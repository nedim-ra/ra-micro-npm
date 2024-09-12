const e = class e {
};
e.formatCaseYear = (t) => {
  const n = t.slice(0, -2), i = t.slice(-2);
  return `${n}/${i}`;
}, e.setLastUsedOptions = (t, n, i) => {
  let s = n;
  (!s || s.length === 0) && (s = []);
  const c = s.findIndex((a) => a.key === t.key);
  return c >= 0 ? (s.splice(c, 1), s.unshift(t)) : (s.unshift(t), s.length > 10 && s.pop()), i(s), s;
};
let r = e;
export {
  r as default
};
//# sourceMappingURL=case-file-utils.js.map
