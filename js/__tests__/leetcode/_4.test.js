import { _4 } from "../../leetcode";

describe("leetcode#_4", function () {
  test("basic", function () {
    expect(_4("G()(al)")).toBe("Goal");
    expect(_4("G()()()()(al)")).toBe("Gooooal");
    expect(_4("(al)G(al)()()G")).toBe("alGalooG");
  });
});
