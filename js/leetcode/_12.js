/**
 * @param {string} s
 * @return {boolean}
 */
export default function (s) {
  let zeros = 0;
  let ones = 0;

  let tmp0 = 0;
  let tmp1 = 0;
  let prev = s[0];
  for (let i = 0; i < s.length; i++) {
    let n = prev ^ s[i];
    prev = s[i];

    if (s[i] === "0" && !n) {
      tmp0++;
    } else if (s[i] === "1" && !n) {
      tmp1++;
    } else if (s[i] === "0" && n) {
      ones = Math.max(tmp1, ones);
      tmp1 = 0;
      tmp0++;
    } else if (s[i] === "1" && n) {
      zeros = Math.max(tmp0, zeros);
      tmp0 = 0;
      tmp1++;
    }
  }
  zeros = Math.max(tmp0, zeros);
  ones = Math.max(tmp1, ones);

  return ones > zeros;
}
