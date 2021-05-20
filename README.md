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

| #   | link                                                            | solution(s)                                         | source   | difficulty | keywords |
| --- | --------------------------------------------------------------- | --------------------------------------------------- | -------- | ---------- | -------- |
| 1   | [Shuffle String](https://leetcode.com/problems/shuffle-string/) | [rust](src/leetcode/_1.rs), [js](js/leetcode/_1.js) | leetcode | easy       | sorting  |
