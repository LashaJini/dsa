/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
export default function (nums1, nums2) {
  return solWithSets(nums1, nums2);
}

// eslint-disable-next-line
function solWithSets(nums1, nums2) {
  let _nums1 = new Set(nums1);
  let _nums2 = new Set(nums2);
  let result = [];

  _nums1.forEach((value) => {
    _nums2.has(value) && result.push(value);
  });

  return result;
}
