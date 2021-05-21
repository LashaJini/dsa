// 1 <= words.length <= 10**4
// 1 <= allowed.length <= 26
// 1 <= words[i].length <= 10
// The characters in allowed are distinct.
// words[i] and allowed contain only lowercase English letters.
/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
export default function v1(allowed, words) {
  let count = 0;

  let _allowed = allowed
    .split("")
    .reduce((acc, curr) => ({ ...acc, [curr]: true }), {});

  words.forEach((word) => {
    let consistent = true;
    for (let i = 0; i < word.length; i++) {
      if (!_allowed[word[i]]) {
        consistent = false;
        break;
      }
    }

    consistent && count++;
  });

  return count;
}

let allowed = "ab",
  words = ["ad", "bd", "aaab", "baa", "badab"];
(allowed = "abc"), (words = ["a", "b", "c", "ab", "ac", "bc", "abc"]);
(allowed = "cad"), (words = ["cc", "acd", "b", "ba", "bac", "bad", "ac", "d"]);
console.log(v1(allowed, words));
