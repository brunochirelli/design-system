(function(n,s){typeof exports=="object"&&typeof module<"u"?s(exports):typeof define=="function"&&define.amd?define(["exports"],s):(n=typeof globalThis<"u"?globalThis:n||self,s(n.tokens={}))})(this,function(n){"use strict";const s={Colors:{"primary-100":"red","primary-200":"red","primary-300":"red","primary-400":"red","primary-500":"red"},Spacings:{xs:"0.5rem",sm:"1rem",md:"1.5rem",lg:"2rem"}},c={Colors:{"primary-100":"red","primary-200":"red","primary-300":"red","primary-400":"red","primary-500":"red"},Spacings:{xs:"0.5rem",sm:"1rem",md:"1.5rem",lg:"2rem"}},d=e=>({light:c,dark:s,...e}),a=(e="light",o)=>({...d()[e],...o}),l=(e,o="")=>{const r={},m=o.toLowerCase();for(const t in e)if(typeof e[t]=="object"&&e[t]!==null)for(const i in e[t])r[`${o.length>0?"--"+m:"-"}-${t.toLocaleLowerCase()}-${i}`]=e[t][i];else r[t]=e[t];return r},f=e=>{const o=a(),r=l(o,e);for(const m in r)Object.prototype.hasOwnProperty.call(r,m)&&document.documentElement.style.setProperty(`${m}`,r[m])},p=e=>{f(e)};n.setTokens=p,Object.defineProperty(n,Symbol.toStringTag,{value:"Module"})});
//# sourceMappingURL=index.umd.js.map