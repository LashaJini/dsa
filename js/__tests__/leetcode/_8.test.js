import _8 from "../../leetcode/_8.js";
describe("leetcode#_8", function () {
  test("basic", function () {
    let s = "aa";
    expect(_8(s)).toBe(0);

    s = "abca";
    expect(_8(s)).toBe(2);

    s = "cbzxy";
    expect(_8(s)).toBe(-1);

    s = "cabbac";
    expect(_8(s)).toBe(4);

    s = "aydsicwrfybunpqsdsnenvrfirr";
    expect(_8(s)).toBe(19);
  });
});
