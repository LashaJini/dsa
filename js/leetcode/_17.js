/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
export default function (root) {
  let sum = 0;

  function subtree_sum(p, root) {
    if (!root) {
      return;
    }

    let left_sum = subtree_sum(root, root.left);
    let right_sum = subtree_sum(root, root.right);

    let tmp = 0;

    // if
    //    left.val < root.val < right.val
    // then
    //    tmp = left_sum + right_sum;
    // else
    //    return invalid ?

    return tmp;
  }

  return sum;
}
