#![allow(dead_code)]
struct Solution;
impl Solution {
    pub fn defang_i_paddr(address: String) -> String {
        address.split(".").collect::<Vec<&str>>().join("[.]")
    }
}

#[cfg(test)]
mod test {
    use super::*;
    #[test]
    fn basic_test() {
        let result = Solution::defang_i_paddr("1.1.1.1".to_string());
        let expected = "1[.]1[.]1[.]1";

        assert_eq!(result, expected);
    }
}
