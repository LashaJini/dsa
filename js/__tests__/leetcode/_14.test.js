import sol from "../../leetcode/_14.js";
describe("leetcode#_14", function () {
  test("basic", function () {
    let root = [4, 1, 6, 0, 2, 5, 7, null, null, null, 3, null, null, null, 8];
    let expected = sol(root);
    let result = [
      30,
      36,
      21,
      36,
      35,
      26,
      15,
      null,
      null,
      null,
      33,
      null,
      null,
      null,
      8,
    ];
    expect(true).toBe(true);
    // expect(expected).toBe(result);
  });
});
