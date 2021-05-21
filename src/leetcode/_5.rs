#![allow(dead_code)]
use std::collections::HashMap;
struct Solution;
// slow solutions;
// use bitmask!
impl Solution {
    pub fn v2(allowed: String, words: Vec<String>) -> i32 {
        let mut count = 0;

        for word in words.iter() {
            if word.chars().all(|w| allowed.contains(w)) {
                count += 1;
            }
        }

        count
    }

    pub fn v1(allowed: String, words: Vec<String>) -> i32 {
        let mut count = 0;

        let allowed: HashMap<char, bool> = allowed
            .as_bytes()
            .iter()
            .map(|a| *a as char)
            .zip(vec![true; allowed.len()])
            .collect();

        for word in words {
            let mut consistent = true;
            let word = word.chars();
            for w in word {
                if !allowed.contains_key(&w) {
                    consistent = false;
                    break;
                }
            }

            if consistent {
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
        let allowed = "ab".to_string();
        let words = ["ad", "bd", "aaab", "baa", "badab"]
            .iter()
            .map(|&w| String::from(w))
            .collect();
        let result = Solution::v1(allowed, words);
        let expected = 2;
        assert_eq!(result, expected);

        let allowed = "abc".to_string();
        let words = ["a", "b", "c", "ab", "ac", "bc", "abc"]
            .iter()
            .map(|&w| String::from(w))
            .collect();
        let result = Solution::v1(allowed, words);
        let expected = 7;
        assert_eq!(result, expected);

        let allowed = "cad".to_string();
        let words = ["cc", "acd", "b", "ba", "bac", "bad", "ac", "d"]
            .iter()
            .map(|&w| String::from(w))
            .collect();
        let result = Solution::v1(allowed, words);
        let expected = 4;
        assert_eq!(result, expected);
    }
}
