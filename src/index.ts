type p = any;

type uf = (a: p) => p; // unary func

// Numbers
type N = (f: uf) => (x: p) => p; // Numbers

const succ = (n: N) => (f: uf) => (x: p) => f(n(f)(x));

const to:N = f => x => f(f(x));
const te:N = f => x => f(f(f(x)))
const fr:N = f => x => f(f(f(f(x))))
const f = (x:p) => x + 1;
const x = 0;
const to_v = to(f)(x); // 2 two value
const te_v = te(f)(x); // 3 three value
const fr_v = fr(f)(x) // 4 four value
//  ----

const t_s = succ(to)
const three_ = t_s(f)(x)
const three_s = succ(t_s);
const four_ = three_s(f)(x)
console.log({
  to_v,
  te_v,
  fr_v,
  three_,
  four_
})
// Booleans


const True = (x:p) => (y:p) => x;
const False = (x:p) => (y:p)=>  y;  

