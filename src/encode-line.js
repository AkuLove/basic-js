const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let chars = "";
  let count = 1;

  for (let i = 1; i <= str.length; i++) {
    if (str[i] !== str[i - 1] || i === str.length) {
      if (count === 1) {
        chars += "" + str[i - 1]
      } else {
        chars += count + str[i - 1]
      }
      count = 1;
    } else {
      count++;
    }
  }
  return chars;
}

module.exports = {
  encodeLine
};
