// 2 <= s.length <= 200
// s consists of lowercase and uppercase English letters, spaces, and digits from 1 to 9.
// The number of words in s is between 1 and 9.
// The words in s are separated by a single space.
// s contains no leading or trailing spaces.
/**
 * @param {string} s
 * @return {string}
 */
export default function (s) {
  let arr = s.split(" ");

  return arr
    .sort((a, b) => {
      let as = Number(a.slice(-1));
      let bs = Number(b.slice(-1));

      return as - bs;
    })
    .map((elem) => elem.slice(0, -1))
    .join(" ");
}
