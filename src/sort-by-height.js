const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let result = [];
  let sortArr = arr.filter((x) => {
    return x > 0;
  });
  sortArr = sortArr.sort((a, b) => {
    return a - b;
  });
  for (let i = 0, j = 0; i < arr.length; i++){
  if (arr[i] == -1) {
    result.push(arr[i])
  } else {
    result.push(sortArr[j]);
    j++;
  }
  }
  return result;
}

module.exports = {
  sortByHeight
};
