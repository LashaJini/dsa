// 1 <= word1.length, word2.length <= 103
// 1 <= word1[i].length, word2[i].length <= 103
// 1 <= sum(word1[i].length), sum(word2[i].length) <= 103
// word1[i] and word2[i] consist of lowercase letters.
/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
export default function (word1, word2) {
  return word1.join("") === word2.join("");
}
