#![allow(dead_code)]
struct Solution;
impl Solution {
    pub fn balanced_string_split(s: String) -> i32 {
        let mut l = 0;
        let mut r = 0;
        let mut count = 0;

        for c in s.chars() {
            if c == 'L' {
                l += 1;
            } else {
                r += 1;
            }

            if l == r {
                count += 1;
            }
        }

        count
    }
}

#[cfg(test)]
mod test {
    use super::*;

    #[test]
    fn basic_test() {
        let s = "RLLLLRRRLR".to_string();
        let result = Solution::balanced_string_split(s);
        let expected = 3;
        assert_eq!(result, expected);
    }
}
