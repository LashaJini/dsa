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
  let rightSum = 0;
  function sum(root) {
    root.right && sum(root.right);
    rightSum = root.val = rightSum + root.val;
    root.left && sum(root.left);
  }

  sum(root);
  return root;
}

// eslint-disable-next-line
function insert(t, v) {
  let node = new TreeNode(v);
  if (!t.root) {
    t.root = node;
  } else {
    let curr = t.root;
    while (true) {
      if (node.val < curr.val) {
        // go left
        if (!curr.left) {
          curr.left = node;
          node.parent = curr;
          break;
        }
        curr = curr.left;
      } else {
        // go right
        if (!curr.right) {
          curr.right = node;
          node.parent = curr;
          break;
        }
        curr = curr.right;
      }
    }
  }
  return node;
}

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
