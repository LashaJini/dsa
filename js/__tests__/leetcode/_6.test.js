import _6 from "../../leetcode/_6.js";
describe("leetcode#_6", function () {
  test("basic", function () {
    let items = [
        ["phone", "blue", "pixel"],
        ["computer", "silver", "lenovo"],
        ["phone", "gold", "iphone"],
      ],
      ruleKey = "color",
      ruleValue = "silver";
    expect(_6(items, ruleKey, ruleValue)).toBe(1);

    (items = [
      ["phone", "blue", "pixel"],
      ["computer", "silver", "phone"],
      ["phone", "gold", "iphone"],
    ]),
      (ruleKey = "type"),
      (ruleValue = "phone");
    expect(_6(items, ruleKey, ruleValue)).toBe(2);
  });
});
