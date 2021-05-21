# data structures and algorithms

## running tests

min requirements:

- node v12.21.0
- npm 7.13.0
- rustc 1.50.0
- cargo 1.50.0

```bash
# clone repo
git clone https://github.com/109149/dsa
cd dsa
```

```bash
# install npm dependencies to run tests against js solutions
npm install
npm test

# running tests for specific file
npm test <regex>
# example running tests against _1.rs
npm test _1
```

```bash
# to run tests against rust solutions
cargo test
# or
cargo t

# running tests for specific file
cargo t <regex>
# example running tests against _1.rs
cargo t _1
```

## table

| #   | link                                                                                                            | solution(s)                                         | source   | difficulty | keywords |
| --- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------- | -------- | ---------- | -------- |
| 1   | [Shuffle String](https://leetcode.com/problems/shuffle-string/)                                                 | [rust](src/leetcode/_1.rs), [js](js/leetcode/_1.js) | leetcode | easy       | sorting  |
| 2   | [Sorting the Sentence](https://leetcode.com/problems/sorting-the-sentence/)                                     | [rust](src/leetcode/_2.rs), [js](js/leetcode/_2.js) | leetcode | easy       | sorting  |
| 3   | [Defanging an IP Address](https://leetcode.com/problems/defanging-an-ip-address)                                | [rust](src/leetcode/_3.rs), [js](js/leetcode/_3.js) | leetcode | easy       | string   |
| 4   | [Goal Parser Interpretation](https://leetcode.com/problems/goal-parser-interpretation/)                         | [rust](src/leetcode/_4.rs), [js](js/leetcode/_4.js) | leetcode | easy       | string   |
| 5   | [Count the Number of Consistent Strings](https://leetcode.com/problems/count-the-number-of-consistent-strings/) | [rust](src/leetcode/_5.rs), [js](js/leetcode/_5.js) | leetcode | easy       | string   |
