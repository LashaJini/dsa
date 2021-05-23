#!/bin/bash

if [[ "$#" -eq 1 ]]; then
node "js/spaghetti/benchmark/$1.bench.js"
else
echo "Usage: ./bench.sh <filename>

  example: ./bench.sh filename_that_exists
"
fi
