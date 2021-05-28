function pipe(funcs) {
  return function (arg) {
    let result = arg;
    for (let i = 0; i < funcs.length; i++) {
      let func = funcs[i];
      result = func(result);
    }
    return result;
  };
}

const times = (y) => (x) => x * y;
const plus = (y) => (x) => x + y;
const subtract = (y) => (x) => x - y;
const divide = (y) => (x) => x / y;

console.log(pipe([times(2), times(3)])(3));
