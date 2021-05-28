// Fisher-Yates
function betterShuffle(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    let j = (Math.random() * (i + 1)) | 0;
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

function simpleShuffle(arr) {
  return arr.sort(() => Math.random() - 0.5);
}

let arr = [1, 2, 3, 4, 5, 6];
betterShuffle(arr);
console.log(arr);

arr = [1, 2, 3, 4, 5, 6];
betterShuffle(arr);
console.log(arr);

arr = [1, 2, 3, 4, 5, 6];
betterShuffle(arr);
console.log(arr);

const count = new Map();
const total = 100000;
for (let i = 0; i < total; i++) {
  const arr = [1, 2, 3, 4];
  betterShuffle(arr);

  const result = arr.join("_");
  if (count.has(result)) {
    count.set(result, count.get(result) + 1);
  } else {
    count.set(result, 1);
  }
}

// calculate the standard deviation
const avg = total / 24;

let d = 0;
for (let i of count.values()) {
  d += (i - avg) ** 2;
}

const sd = Math.sqrt(d / 24);
console.log(sd);
