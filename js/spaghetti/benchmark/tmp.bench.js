const Benchmark = require("benchmark");

let suite = new Benchmark.Suite();
suite
  .add("Number", function () {
    Number(545019);
  })
  .add("Unary", function () {
    +545019;
  })
  .on("cycle", function (event) {
    console.log(String(event.target));
  })
  .on("complete", function () {
    console.log("Fastest is " + this.filter("fastest").map("name"));
  })
  .run({ async: true });
