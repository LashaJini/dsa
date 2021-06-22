import sol from "../../leetcode/_17.js";

describe("leetcode#_17", function () {
  test("simple", function () {
    let result = sol(["abc", "aabc", "bc"]);
    let expected = true;
    expect(expected).toBe(result);

    result = sol(["abc", "baac", "bc"]);
    expected = true;
    expect(expected).toBe(result);

    result = sol(["ab", "a"]);
    expected = false;
    expect(expected).toBe(result);
  });
});
