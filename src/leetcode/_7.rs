#![allow(dead_code)]
struct Solution;
impl Solution {
    pub fn array_strings_are_equal(word1: Vec<String>, word2: Vec<String>) -> bool {
        return word1.join("") == word2.join("");
    }
}
#[cfg(test)]
mod test {
    use super::*;

    #[test]
    fn basic_test() {
        let word1 = vec!["ab".to_string(), "c".to_string()];
        let word2 = vec!["a".to_string(), "bc".to_string()];
        let result = Solution::array_strings_are_equal(word1, word2);
        let expected = true;

        assert_eq!(result, expected);
    }
}
