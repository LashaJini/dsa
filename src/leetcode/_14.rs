#![allow(dead_code)]
use std::cell::RefCell;
use std::rc::Rc;

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

struct Solution;
impl Solution {
    pub fn bst_to_gst(root: Option<Rc<RefCell<TreeNode>>>) -> Option<Rc<RefCell<TreeNode>>> {
        fn helper(root: &Option<Rc<RefCell<TreeNode>>>, sum: &mut i32) {
            match root {
                None => return,
                Some(r) => {
                    let mut r = r.borrow_mut();
                    helper(&r.right, sum);
                    *sum += r.val;
                    r.val = *sum;
                    helper(&r.left, sum);
                }
            }
        }

        let mut sum = 0;
        helper(&root, &mut sum);
        return root;
    }
}

#[cfg(test)]
mod test {
    use super::*;
}
