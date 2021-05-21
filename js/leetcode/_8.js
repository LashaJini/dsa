// 1 <= s.length <= 300
// s contains only lowercase English letters.
/**
 * @param {string} s
 * @return {number}
 */
export default function (s) {
  if (s.length === 1) {
    return -1;
  }

  let max = -1;

  let p1 = 0;
  let p2 = s.length - 1;
  let half = Math.floor(s.length / 2);
  while (p1 <= half) {
    if (p1 >= p2) {
      p1++;
      p2 = s.length - 1;
    } else if (s[p1] === s[p2]) {
      max = Math.max(p2 - p1 - 1, max);
      p1++;
      p2 = s.length - 1;
    } else {
      p2--;
    }
  }

  return max;
}
