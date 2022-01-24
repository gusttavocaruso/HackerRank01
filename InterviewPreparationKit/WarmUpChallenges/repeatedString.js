function repeatedString(s, n) {
  const aQnty = (s.match(/a/g) || []).length;
  const x = Math.floor(n/s.length);
  const y = (s.substring(0, n % s.length).match(/a/g) || []).length;

  return aQnty * x + y;
}

const s = 'abcac';
const n = 10;
console.log(repeatedString(s, n));

/*
There is a string, , of lowercase English letters that is repeated infinitely many times. Given an integer, n, find and print the number of letter a's in the first n letters of the infinite string. */

// function repeatedString(s, n) {
//   // const sn = s.repeat(n);
//   const sn = Array(n + 1).join(s)
//   const snSplit = sn.split('');
//   const snSlice = snSplit.slice(0, n);
//   let aTimes = 0;
//   snSlice.forEach((sn) => sn === 'a' ? aTimes += 1 : '')
//   return aTimes;
// }
