#![allow(dead_code)]
struct Solution;
impl Solution {
    pub fn max_length_between_equal_characters(s: String) -> i32 {
        if s.len() == 1 {
            return -1;
        }

        let mut max: i32 = -1;
        let mut p1 = 0;
        let mut p2 = s.len() - 1;
        let half = s.len() / 2;
        while p1 <= half {
            if p1 >= p2 {
                p1 += 1;
                p2 = s.len() - 1;
            } else if s.chars().nth(p1) == s.chars().nth(p2) {
                max = std::cmp::max(max, (p2 - p1 - 1) as i32);
                p1 += 1;
                p2 = s.len() - 1;
            } else {
                p2 -= 1;
            }
        }

        max
    }
}

#[cfg(test)]
mod test {
    use super::*;

    #[test]
    fn basic_test() {
        let s = "aa".to_string();
        let result = Solution::max_length_between_equal_characters(s);
        let expected = 0;
        assert_eq!(result, expected);

        let s = "cabbac".to_string();
        let result = Solution::max_length_between_equal_characters(s);
        let expected = 4;
        assert_eq!(result, expected);

        let s = "cbzxy".to_string();
        let result = Solution::max_length_between_equal_characters(s);
        let expected = -1;
        assert_eq!(result, expected);

        let s = "abca".to_string();
        let result = Solution::max_length_between_equal_characters(s);
        let expected = 2;
        assert_eq!(result, expected);
    }
}
