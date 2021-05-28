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
 * @return {TreeNode}
 */
export default function (root) {
  let arr = [];
  function sort(root) {
    if (!root) {
      return;
    }

    sort(root.left);
    arr.push(root.val);
    sort(root.right);
  }

  function toBST(start, end) {
    if (start > end) {
      return null;
    }

    let mid = (start + (end - start) / 2) | 0;
    let root = {};
    root.val = arr[mid];
    root.left = toBST(start, mid - 1);
    root.right = toBST(mid + 1, end);
    return root;
  }

  sort(root);
  return toBST(0, arr.length - 1);
}
