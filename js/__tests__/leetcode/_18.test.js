import sol from "../../leetcode/_18.js";
describe("leetcode#_18", function () {
  it("simple", function () {
    let words1 = ["amazon", "apple", "facebook", "google", "leetcode"];
    let words2 = ["e", "o"];
    let result = sol(words1, words2);
    let expected = ["facebook", "google", "leetcode"];
    expect(expected).toEqual(result);

    words1 = ["amazon", "apple", "facebook", "google", "leetcode"];
    words2 = ["l", "e"];
    expected = ["apple", "google", "leetcode"];
    result = sol(words1, words2);
    expect(expected).toEqual(result);

    words1 = ["amazon", "apple", "facebook", "google", "leetcode"];
    words2 = ["lo", "eo"];
    result = sol(words1, words2);
    expected = ["google", "leetcode"];
    expect(expected).toEqual(result);

    words1 = ["amazon", "apple", "facebook", "google", "leetcode"];
    words2 = ["e", "oo"];
    result = sol(words1, words2);
    expected = ["facebook", "google"];
    expect(expected).toEqual(result);
  });
});
