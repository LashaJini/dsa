pub fn oi() {
    println!("Uh");
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn oi_test() {
        oi();
        assert_eq!(true, true);
    }
}
