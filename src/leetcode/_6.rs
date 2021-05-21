#![allow(dead_code)]
struct Solution;
impl Solution {
    pub fn count_matches(items: Vec<Vec<String>>, rule_key: String, rule_value: String) -> i32 {
        let mut search_index = 0;
        let mut count = 0;

        if rule_key == "color" {
            search_index = 1;
        } else if rule_key == "name" {
            search_index = 2;
        }

        for item in items.iter() {
            if item[search_index] == rule_value {
                count += 1
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
        let items = vec![
            ["phone", "blue", "pixel"]
                .iter()
                .map(|item| item.to_string())
                .collect::<Vec<String>>(),
            ["computer", "silver", "lenovo"]
                .iter()
                .map(|item| item.to_string())
                .collect::<Vec<String>>(),
            ["phone", "gold", "iphone"]
                .iter()
                .map(|item| item.to_string())
                .collect::<Vec<String>>(),
        ];
        let rule_key = "color".to_string();
        let rule_value = "silver".to_string();
        let result = Solution::count_matches(items, rule_key, rule_value);
        let expected = 1;

        assert_eq!(result, expected);
    }
}
