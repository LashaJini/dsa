#![allow(dead_code)]
struct Solution;
impl Solution {
    pub fn check_zero_ones(s: String) -> bool {
        let mut zeros = 0;
        let mut ones = 0;

        let mut tmp0 = 0;
        let mut tmp1 = 0;
        let mut chars = s.chars();
        unsafe {
            let mut prev = *s.as_ptr().offset(0) as u8;
            for _i in 0..s.len() {
                let curr = chars.next().unwrap() as u8;
                let n = prev ^ curr;
                prev = curr;

                match (curr, n) {
                    (48, 0) => {
                        tmp0 += 1;
                    }
                    (49, 0) => {
                        tmp1 += 1;
                    }
                    (48, 1) => {
                        ones = std::cmp::max(ones, tmp1);
                        tmp0 += 1;
                        tmp1 = 0;
                    }
                    (49, 1) => {
                        zeros = std::cmp::max(zeros, tmp0);
                        tmp0 = 0;
                        tmp1 += 1;
                    }
                    (_, _) => {}
                }
            }
            ones = std::cmp::max(ones, tmp1);
            zeros = std::cmp::max(zeros, tmp0);
        }

        ones > zeros
    }
}

#[cfg(test)]
mod test {
    use super::*;

    #[test]
    fn basic_test() {
        let s = "1".to_string();
        let result = Solution::check_zero_ones(s);
        let expected = true;
        assert_eq!(result, expected);

        let s = "111001111".to_string();
        let result = Solution::check_zero_ones(s);
        let expected = true;
        assert_eq!(result, expected);

        let s = "111000".to_string();
        let result = Solution::check_zero_ones(s);
        let expected = false;
        assert_eq!(result, expected);
    }
}
