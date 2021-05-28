#![allow(dead_code)]
use std::collections::HashSet;
use std::iter::FromIterator;

struct Solution;
impl Solution {
    pub fn intersection(nums1: Vec<i32>, nums2: Vec<i32>) -> Vec<i32> {
        Solution::sol_with_sets(nums1, nums2)
    }

    pub fn sol_with_sets(nums1: Vec<i32>, nums2: Vec<i32>) -> Vec<i32> {
        let _nums1: HashSet<i32> = HashSet::from_iter(nums1);
        let _nums2: HashSet<i32> = HashSet::from_iter(nums2);
        let mut result = vec![];

        for i in _nums1 {
            if _nums2.contains(&i) {
                result.push(i);
            }
        }

        result
    }
}

#[cfg(test)]
mod test {
    use super::*;

    #[test]
    fn basic_test() {
        let nums1 = vec![1, 2, 2, 1];
        let nums2 = vec![2, 2];
        let result = Solution::intersection(nums1, nums2);
        let expected = vec![2];
        assert_eq!(result, expected);

        let nums1 = vec![4, 9, 5];
        let nums2 = vec![9, 4, 9, 8, 4];
        let result = Solution::intersection(nums1, nums2);
        let expected = vec![4, 9];
        assert_eq!(result, expected);
    }
}
