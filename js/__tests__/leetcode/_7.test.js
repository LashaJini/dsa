import _7 from "../../leetcode/_7.js";
describe("leetcode#_7", function () {
  test("basic", function () {
    let word1 = ["ab", "c"],
      word2 = ["a", "bc"];
    expect(_7(word1, word2)).toBe(true);

    (word1 = ["a", "cb"]), (word2 = ["ab", "c"]);
    expect(_7(word1, word2)).toBe(false);

    (word1 = ["abc", "d", "defg"]), (word2 = ["abcddefg"]);
    expect(_7(word1, word2)).toBe(true);
  });
});
