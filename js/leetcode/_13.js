/**
 * @param {number[]} nums
 * @return {number}
 */
export default function (nums) {
  let sum = 0;

  let prev = 0;
  let tmp = 0;
  for (let i = 0; i < nums.length; i++) {
    if (prev < nums[i]) {
      tmp += nums[i];
    } else {
      sum = Math.max(sum, tmp);
      tmp = nums[i];
    }
    prev = nums[i];
  }
  sum = Math.max(sum, tmp);

  return sum;
}
