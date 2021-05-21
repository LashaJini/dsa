#![allow(dead_code)]
struct Solution;
impl Solution {
    pub fn interpret(command: String) -> String {
        let mut result = vec![];

        let spl: Vec<&str> = command.split("").collect();

        let mut i = 0;
        while i < spl.len() {
            if spl[i] == "G" {
                result.push("G");
            } else if spl[i] == "a" {
                result.push("al");
                i += 2;
            } else if spl[i] == ")" {
                result.push("o");
            }
            i += 1;
        }

        result.join("")
    }
}

#[cfg(test)]
mod test {
    use super::*;

    #[test]
    fn basic_test() {
        let result = Solution::interpret("G()(al)".to_string());
        let expected = "Goal";
        assert_eq!(result, expected);

        let result = Solution::interpret("G()()()()(al)".to_string());
        let expected = "Gooooal";
        assert_eq!(result, expected);

        let result = Solution::interpret("(al)G(al)()".to_string());
        let expected = "alGalo";
        assert_eq!(result, expected);
    }
}
