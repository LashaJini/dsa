function _1dFlat(arr) {
  return [].concat(...arr);
}

function _1dFlatReduce(arr) {
  return arr.reduce((acc, curr) => acc.concat(curr), []);
}

function infiniteFlat(arr, depth = 1) {
  if (depth > 0) {
    return arr.reduce(
      (acc, curr) =>
        acc.concat(Array.isArray(curr) ? infiniteFlat(curr, depth - 1) : curr),
      []
    );
  }

  return arr;
}

function* generatorFlat(arr, depth = 1) {
  for (const item of arr) {
    if (Array.isArray(item) && depth > 0) {
      yield* generatorFlat(item, depth - 1);
    } else {
      yield item;
    }
  }
}

module.exports = {
  _1dFlat,
  _1dFlatReduce,
  infiniteFlat,
  generatorFlat,
};
