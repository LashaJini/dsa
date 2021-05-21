/**
 * @param {string} address
 * @return {string}
 */
export default function (address) {
  return address.split(".").join("[.]");
}
