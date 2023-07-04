const m = {
  Colors: {
    "primary-100": "red",
    "primary-200": "red",
    "primary-300": "red",
    "primary-400": "red",
    "primary-500": "red"
  },
  Spacings: {
    xs: "0.5rem",
    sm: "1rem",
    md: "1.5rem",
    lg: "2rem"
  }
}, c = {
  Colors: {
    "primary-100": "red",
    "primary-200": "red",
    "primary-300": "red",
    "primary-400": "red",
    "primary-500": "red"
  },
  Spacings: {
    xs: "0.5rem",
    sm: "1rem",
    md: "1.5rem",
    lg: "2rem"
  }
}, a = (e) => ({
  light: c,
  dark: m,
  ...e
}), i = (e = "light", n) => ({ ...a()[e], ...n }), l = (e, n = "") => {
  const r = {}, s = n.toLowerCase();
  for (const t in e)
    if (typeof e[t] == "object" && e[t] !== null)
      for (const o in e[t])
        r[`${n.length > 0 ? "--" + s : "-"}-${t.toLocaleLowerCase()}-${o}`] = e[t][o];
    else
      r[t] = e[t];
  return r;
}, d = (e) => {
  const n = i(), r = l(n, e);
  for (const s in r)
    Object.prototype.hasOwnProperty.call(r, s) && document.documentElement.style.setProperty(`${s}`, r[s]);
}, y = (e) => {
  d(e);
};
export {
  y as setTokens
};
//# sourceMappingURL=index.es.js.map
