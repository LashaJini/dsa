#![allow(dead_code)]
struct Solution;
impl Solution {
    pub fn restore_string(s: String, indices: Vec<i32>) -> String {
        let mut result: Vec<String> = vec!["".to_string(); s.len()];

        let mut words = s.chars();
        for i in indices {
            result[i as usize] = words.next().unwrap().to_string();
        }

        result.join("")
    }
}

#[cfg(test)]
mod test {
    use super::*;

    #[test]
    fn basic_test() {
        let result =
            Solution::restore_string(String::from("codeleet"), vec![4, 5, 6, 7, 0, 2, 1, 3]);
        assert_eq!(result, "leetcode");

        let result = Solution::restore_string(String::from("abc"), vec![2, 1, 0]);
        assert_eq!(result, "cba");
    }
}
