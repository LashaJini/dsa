#![allow(dead_code)]
struct Solution;
impl Solution {
    pub fn max_ascending_sum(nums: Vec<i32>) -> i32 {
        let mut sum = 0;
        let mut tmp = 0;
        let mut prev = 0;

        for num in nums {
            if prev < num {
                tmp += num;
            } else {
                sum = std::cmp::max(sum, tmp);
                tmp = num;
            }
            prev = num;
        }

        sum = std::cmp::max(sum, tmp);
        sum
    }
}

#[cfg(test)]
mod test {
    use super::*;

    #[test]
    fn basic_test() {
        let nums = vec![10, 20, 30, 5, 10, 50];
        let result = Solution::max_ascending_sum(nums);
        let expected = 65;
        assert_eq!(result, expected);
    }
}
