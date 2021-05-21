import { _5 } from "../../leetcode";

describe("leetcode#_5", function () {
  test("basic", function () {
    let allowed = "ab",
      words = ["ad", "bd", "aaab", "baa", "badab"];
    expect(_5(allowed, words)).toBe(2);

    (allowed = "abc"), (words = ["a", "b", "c", "ab", "ac", "bc", "abc"]);
    expect(_5(allowed, words)).toBe(7);

    (allowed = "cad"),
      (words = ["cc", "acd", "b", "ba", "bac", "bad", "ac", "d"]);
    expect(_5(allowed, words)).toBe(4);
  });
});
