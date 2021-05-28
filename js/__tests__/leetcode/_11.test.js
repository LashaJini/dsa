import sol from "../../leetcode/_11.js";
describe("leetcode#_11", function () {
  test("basic", function () {
    let nums1 = [1, 2, 2, 1],
      nums2 = [2, 2];
    expect(sol(nums1, nums2)).toEqual([2]);

    (nums1 = [4, 9, 5]), (nums2 = [9, 4, 9, 8, 4]);
    expect(sol(nums1, nums2)).toEqual([4, 9]);
  });
});
