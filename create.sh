#!/bin/bash

if [[ "$#" -eq 1 ]]; then
  # js
  touch "js/leetcode/$1.js" &&
  touch "js/__tests__/leetcode/$1.test.js"

  echo "import sol from '../../leetcode/$1.js';
  describe('leetcode#$1', function () { })" >> "js/__tests__/leetcode/$1.test.js"

  # rust
  touch "src/leetcode/$1.rs"

  echo "#![allow(dead_code)]
  #[cfg(test)]
  mod test {
    use super::*;
  }
  " >> "src/leetcode/$1.rs"

  echo -e "\n#[path = \"./$1.rs\"]
  pub mod $1;" >> "src/leetcode/mod.rs"
else
  echo "Usage: ./create.sh <filename>

  example ./create.sh foo
  "
fi
