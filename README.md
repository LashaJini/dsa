# data structures and algorithms

## running tests

min requirements:

- node v12.21.0
- npm 7.13.0
- rustc 1.50.0
- cargo 1.50.0

```bash
# clone repo
git clone git@github.com:109149/dsa.git
cd dsa
```

**js**
```bash
# install npm dependencies to run tests against js solutions
npm install
npm test

# running tests for specific file
npm test <regex>
# example running tests against _1.rs
npm test _1

# watch mode
npm run test:watch
npm run test:watch <regex>
```

**rust**
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

| #   | link                                                                                                                                  | solution(s)                                           | source   | difficulty | keywords    |
| --- | ------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- | -------- | ---------- | ----------- |
| 17  | [Redistribute Characters to Make All Strings Equal](https://leetcode.com/problems/redistribute-characters-to-make-all-strings-equal/) | [js](js/leetcode/_16.js)                              | leetcode | easy       | string      |
| 16  | [Balance a Binary Search Tree](https://leetcode.com/problems/balance-a-binary-search-tree/)                                           | [rust](src/leetcode/_16.rs), [js](js/leetcode/_16.js) | leetcode | medium     | sorting,BST |
| 15  | [Convert Sorted Array to Binary Search Tree](https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/)               | [rust](src/leetcode/_15.rs), [js](js/leetcode/_15.js) | leetcode | easy       | BST         |
| 14  | [Binary Search Tree to Greater Sum Tree](https://leetcode.com/problems/binary-search-tree-to-greater-sum-tree/)                       | [rust](src/leetcode/_14.rs), [js](js/leetcode/_14.js) | leetcode | medium     | BST         |
| 13  | [Maximum Ascending Subarray Sum](https://leetcode.com/problems/maximum-ascending-subarray-sum/)                                       | [rust](src/leetcode/_13.rs), [js](js/leetcode/_13.js) | leetcode | easy       |             |
| 12  | [Longer Contiguous Segments of Ones than Zeros](https://leetcode.com/problems/longer-contiguous-segments-of-ones-than-zeros/)         | [rust](src/leetcode/_12.rs), [js](js/leetcode/_12.js) | leetcode | easy       |             |
| 11  | [Intersection of Two Arrays](https://leetcode.com/problems/intersection-of-two-arrays/)                                               | [rust](src/leetcode/_11.rs), [js](js/leetcode/_11.js) | leetcode | easy       |             |
| 10  | [Split Two Strings to Make Palindrome](https://leetcode.com/problems/split-two-strings-to-make-palindrome/)                           | [rust](src/leetcode/_10.rs), [js](js/leetcode/_10.js) | leetcode | medium     | string      |
| 9   | [Split a String in Balanced Strings](https://leetcode.com/problems/split-a-string-in-balanced-strings/)                               | [rust](src/leetcode/_9.rs), [js](js/leetcode/_9.js)   | leetcode | easy       | string      |
| 8   | [Largest Substring Between Two Equal Characters](https://leetcode.com/problems/largest-substring-between-two-equal-characters/)       | [rust](src/leetcode/_8.rs), [js](js/leetcode/_8.js)   | leetcode | easy       | string      |
| 7   | [Check If Two String Arrays are Equivalent](https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent/submissions/)     | [rust](src/leetcode/_7.rs), [js](js/leetcode/_7.js)   | leetcode | easy       | string      |
| 6   | [Count Items Matching a Rule](https://leetcode.com/problems/count-items-matching-a-rule/)                                             | [rust](src/leetcode/_6.rs), [js](js/leetcode/_6.js)   | leetcode | easy       | string      |
| 5   | [Count the Number of Consistent Strings](https://leetcode.com/problems/count-the-number-of-consistent-strings/)                       | [rust](src/leetcode/_5.rs), [js](js/leetcode/_5.js)   | leetcode | easy       | string      |
| 4   | [Goal Parser Interpretation](https://leetcode.com/problems/goal-parser-interpretation/)                                               | [rust](src/leetcode/_4.rs), [js](js/leetcode/_4.js)   | leetcode | easy       | string      |
| 3   | [Defanging an IP Address](https://leetcode.com/problems/defanging-an-ip-address)                                                      | [rust](src/leetcode/_3.rs), [js](js/leetcode/_3.js)   | leetcode | easy       | string      |
| 2   | [Sorting the Sentence](https://leetcode.com/problems/sorting-the-sentence/)                                                           | [rust](src/leetcode/_2.rs), [js](js/leetcode/_2.js)   | leetcode | easy       | sorting     |
| 1   | [Shuffle String](https://leetcode.com/problems/shuffle-string/)                                                                       | [rust](src/leetcode/_1.rs), [js](js/leetcode/_1.js)   | leetcode | easy       | sorting     |
