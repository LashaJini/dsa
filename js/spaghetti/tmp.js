const p = new Promise((resolve, reject) => {
  setTimeout(() => resolve("OI"), 0);
});

function pf() {
  return p;
}

const addOne = (x) => x + 1;

async function f1(a, cb) {
  return cb(a);
}

function f2(a) {
  return new Promise(function (resolve) {
    const result = addOne(a);
    resolve(result);
  });
}

async function main() {
  const r1 = await f1(5, addOne);
  console.log(r1);

  const r2 = await f2(6);
  console.log(r2);

  f2(7)
  .then( console.log)
}
main();
