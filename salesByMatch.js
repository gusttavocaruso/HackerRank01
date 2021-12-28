function sockMerchant(n, ar) {

  const uniq = [...new Set(ar)];

  const even = uniq.map((unq) => ar.filter((sock) => unq === sock));

  const pars = even.map((ev) => Math.floor(ev.length / 2, 1));

  const totalEven = pars.reduce((acc, pr) => acc += pr)

  return totalEven;
}

const n = 9
const ar = [10, 20, 20, 10, 10, 30, 50, 10, 20]

console.log(sockMerchant(n, ar));
