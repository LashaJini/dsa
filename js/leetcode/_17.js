/**
 * @param {string[]} words
 * @return {boolean}
 */
const makeEqual = function (words) {
  let result = {}; // 26
  words.map((word) => {
    [...word].map((c) => {
      result[c] = result.hasOwnProperty(c) ? result[c] + 1 : 1;
    });
  });

  for (let prop in result) {
    if (result[prop] % words.length !== 0) {
      return false;
    }
  }
  return true;
};

// console.log(makeEqual(["abc", "aabc", "bc"]));
// console.log(makeEqual(["abc", "aabc", "bc"]));

module.exports = makeEqual;
