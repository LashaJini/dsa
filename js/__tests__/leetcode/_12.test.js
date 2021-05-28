import sol from "../../leetcode/_12.js";
describe("leetcode#_12", function () {
  test("basic", function () {
    let s = "1101";
    expect(sol(s)).toBe(true);

    s = "111000";
    expect(sol(s)).toBe(false);

    s = "1";
    expect(sol(s)).toBe(true);
  });
});
