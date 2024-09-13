const e = class e {
};
e.formatCaseYear = (t) => {
  const n = t.slice(0, -2), c = t.slice(-2);
  return `${n}/${c}`;
}, e.setLastUsedOptions = (t, n, c) => {
  let s = n;
  (!s || s.length === 0) && (s = []);
  const r = s.findIndex(
    (f) => f.key === t.key
  );
  return r >= 0 ? (s.splice(r, 1), s.unshift(t)) : (s.unshift(t), s.length > 10 && s.pop()), c(s), s;
};
let a = e;
export {
  a as default
};
//# sourceMappingURL=case-file-utils.js.map
