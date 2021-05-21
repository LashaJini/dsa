// 1 <= items.length <= 104
// 1 <= typei.length, colori.length, namei.length, ruleValue.length <= 10
// ruleKey is equal to either "type", "color", or "name".
// All strings consist only of lowercase letters.
/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
export default function (items, ruleKey, ruleValue) {
  let searchIndex = 0;
  if (ruleKey === "color") {
    searchIndex = 1;
  } else if (ruleKey === "name") {
    searchIndex = 2;
  }

  let count = 0;

  items.forEach((i) => i[searchIndex] === ruleValue && count++);

  return count;
}
