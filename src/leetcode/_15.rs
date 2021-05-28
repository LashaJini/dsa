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
    pub fn sorted_array_to_bst(nums: Vec<i32>) -> Option<Rc<RefCell<TreeNode>>> {
        fn helper(nums: &Vec<i32>, start: usize, end: usize) -> Option<Rc<RefCell<TreeNode>>> {
            let mid = start + (end - start) / 2;

            if start > end || mid >= nums.len() {
                return None;
            }

            let root = Rc::new(RefCell::new(TreeNode::new(nums[mid])));
            root.borrow_mut().left = helper(nums, start, mid - 1);
            root.borrow_mut().right = helper(nums, mid + 1, end);

            return Some(root);
        }
        return helper(&nums, 0, nums.len() - 1);
    }
}

#[cfg(test)]
mod test {
    use super::*;
}
