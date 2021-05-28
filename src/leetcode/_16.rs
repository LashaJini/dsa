#![allow(dead_code)]
// Definition for a binary tree node.
#[derive(Debug, PartialEq, Eq)]
pub struct TreeNode {
    pub val: i32,
    pub left: Option<Rc<RefCell<TreeNode>>>,
    pub right: Option<Rc<RefCell<TreeNode>>>,
}

impl TreeNode {
    #[inline]
    pub fn new(val: i32) -> Self {
        TreeNode {
            val,
            left: None,
            right: None,
        }
    }
}
use std::cell::RefCell;
use std::rc::Rc;
struct Solution;
impl Solution {
    // O(nlgn) O(n);
    // can be O(n) O(n);
    pub fn balance_bst1(root: Option<Rc<RefCell<TreeNode>>>) -> Option<Rc<RefCell<TreeNode>>> {
        let mut arr = vec![];

        fn sort(arr: &mut Vec<i32>, root: &Option<Rc<RefCell<TreeNode>>>) {
            match root {
                None => return,
                Some(r) => {
                    let r = r.borrow();
                    sort(arr, &r.left);
                    arr.push(r.val);
                    sort(arr, &r.right);
                }
            }
        }

        fn helper(arr: &Vec<i32>, start: usize, end: usize) -> Option<Rc<RefCell<TreeNode>>> {
            let mid = start + (end - start) / 2;
            if start > end || mid >= arr.len() {
                return None;
            }

            let root = Rc::new(RefCell::new(TreeNode::new(arr[mid])));
            root.borrow_mut().left = helper(&arr, start, mid - 1);
            root.borrow_mut().right = helper(&arr, mid + 1, end);
            return Some(root);
        }

        sort(&mut arr, &root);
        return helper(&arr, 0, arr.len() - 1);
    }
}

#[cfg(test)]
mod test {
    use super::*;
}
