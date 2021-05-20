// s.length == indices.length == n
// 1 <= n <= 100
// s contains only lower-case English letters.
// 0 <= indices[i] < n
// All values of indices are unique (i.e. indices is a permutation of the integers from 0 to n - 1).
/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
export default function (s, indices) {
  let result = Array(indices.length).fill("");

  for (let i = 0; i < indices.length; i++) {
    result[indices[i]] = s[i];
  }

  return result.join("");
}
