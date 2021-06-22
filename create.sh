#!/bin/bash

function usage {
  echo -e "\nUsage:\n"
  echo -e "\t./create.sh <FILENAME> [js|rust]"
  echo -e "\nExample:\n"
  echo -e "\tcreate js only: \n\n\t\t./create.sh <FILENAME> js\n"
  echo -e "\tcreate rust only: \n\n\t\t./create.sh <FILENAME> rust\n"
  echo -e "\tcreate both: \n\n\t\t./create.sh <FILENAME>\n"
}

function handleJs {
  touch "js/leetcode/$1.js" &&
  touch "js/__tests__/leetcode/$1.test.js"

  echo "import sol from '../../leetcode/$1.js';
  describe('leetcode#$1', function () { })" >> "js/__tests__/leetcode/$1.test.js"
}

function handleRust {
  touch "src/leetcode/$1.rs"

  echo "#![allow(dead_code)]
  #[cfg(test)]
  mod test {
    use super::*;
  }
  " >> "src/leetcode/$1.rs"

  echo -e "\n#[path = \"./$1.rs\"]
  pub mod $1;" >> "src/leetcode/mod.rs"
}

if [[ "$#" -eq 1 ]]; then
  handleJs "$@"
  handleRust "$@"
elif [[ "$#" -eq 2 ]]; then
  if [[ "$2" == "js" ]]; then
    handleJs "$@"
  elif [[ "$2" == "rust" ]]; then
    handleRust "$@"
  else
    usage
  fi
else
  usage
fi
