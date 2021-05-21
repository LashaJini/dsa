#![allow(dead_code)]
struct Solution;
impl Solution {
    pub fn sort_sentence(s: String) -> String {
        let mut result: Vec<&str> = s.split(" ").collect();

        result.sort_by(|a, b| {
            let a = a.chars().nth(a.len() - 1).unwrap().to_digit(10).unwrap();
            let b = b.chars().nth(b.len() - 1).unwrap().to_digit(10).unwrap();

            a.cmp(&b)
        });

        result
            .iter()
            .map(|elem| elem.get(..elem.len() - 1).unwrap())
            .collect::<Vec<_>>()
            .join(" ")
    }
}

#[cfg(test)]
mod test {
    use super::*;

    #[test]
    fn basic_test() {
        let result = Solution::sort_sentence("is2 sentence4 This1 a3".to_string());
        let expected = "This is a sentence";

        assert_eq!(result, expected);
    }
}
