function c(n) {
  let t = 0;
  const o = (e) => {
    t = e, n.innerHTML = `count is ${t}`;
  };
  n.addEventListener("click", () => o(t + 1)), o(0);
}
const r = (n) => console.log(n);
export {
  r as log,
  c as setupCounter
};
