/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
export default function sol(nums) {
  function helper(start, end) {
    if (start > end) return null;

    let mid = (start + (end - start) / 2) | 0;
    let root = {};
    root.val = nums[mid];
    root.left = helper(start, mid - 1);
    root.right = helper(mid + 1, end);
    return root;
  }
  return helper(0, nums.length - 1);
}

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
