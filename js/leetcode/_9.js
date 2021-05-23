// 1 <= s.length <= 1000
// s[i] is either 'L' or 'R'.
// s is a balanced string.
/**
 * @param {string} s
 * @return {number}
 */
export default function (s) {
  let l = 0;
  let r = 0;
  let count = 0;
  [...s].forEach((c) => {
    c === "L" ? l++ : r++;

    if (l === r) {
      count++;
      l = 0;
      r = 0;
    }
  });
  return count;
}
