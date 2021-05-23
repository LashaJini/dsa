const Benchmark = require("benchmark");
const {
  generatorFlat,
  _1dFlat,
  _1dFlatReduce,
  infiniteFlat,
} = require("../flat");

const basicArray = [1, [2], [3, [4, 5, 6]]];

let suite = new Benchmark.Suite();
suite
  .add("flat#_1dFlat", function () {
    _1dFlat(basicArray);
  })
  .add("flat#_1dFlatReduce", function () {
    _1dFlatReduce(basicArray);
  })
  .add("flat#infiniteFlat", function () {
    infiniteFlat(basicArray);
  })
  .add("flat#generatorFlat", function () {
    generatorFlat(basicArray);
  })
  .on("cycle", function (event) {
    console.log(String(event.target));
  })
  .on("complete", function () {
    console.log("Fastest is " + this.filter("fastest").map("name"));
  })
  .run({ async: true });

suite = new Benchmark.Suite();
suite
  .add("flat#infiniteFlat", function () {
    _1dFlat(basicArray, Infinity);
  })
  .add("flat#generatorFlat", function () {
    generatorFlat(basicArray, Infinity);
  })
  .on("cycle", function (event) {
    console.log(String(event.target));
  })
  .on("complete", function () {
    console.log("Fastest is " + this.filter("fastest").map("name"));
  })
  .run({ async: true });
