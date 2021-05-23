// 1 <= a.length, b.length <= 105
// a.length == b.length
// a and b consist of lowercase English letters
/**
 * @param {string} a
 * @param {string} b
 * @return {boolean}
 */
export default function (a, b) {
  return check(a, b) || check(b, a);
}

function check(a, b) {
  let i = 0;
  let j = b.length - 1;
  while (i < j && a[i] === b[j]) {
    i++;
    j--;
  }

  return isPalindrome(a, i, j) || isPalindrome(b, i, j);
}

function isPalindrome(s, i, j) {
  while (i < j && s[i] === s[j]) {
    i++;
    j--;
  }

  return i >= j;
}
