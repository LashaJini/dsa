// 1 <= command.length <= 100
// command consists of "G", "()", and/or "(al)" in some order.
/**
 * @param {string} command
 * @return {string}
 */
export default function (command) {
  let result = [];

  let spl = command.split("");
  for (let i = 0; i < spl.length; i++) {
    if (spl[i] === "G") {
      result.push("G");
    } else if (spl[i] === "a") {
      result.push("al");
      i += 2;
    } else if (spl[i] === ")") {
      result.push("o");
    }
  }

  return result.join("");
}
