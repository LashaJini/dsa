/**
 * @param {any} data
 * @param {Object} command
 */
function update(data, command) {}

const arr = [1, 2, 3, 4];
const newArr = update(arr, { $push: [5, 6] });
// [1, 2, 3, 4, 5, 6]
