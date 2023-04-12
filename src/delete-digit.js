const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arrNumbers = [];
  newArr = String(n).split('');
  
  for (let i = 0; i < newArr.length; i++){
    newArr.splice(i, 1);
    arrNumbers.push(Number(newArr.join('')));
    newArr = String(n).split('');
  }

  
  newArr = String(n).split('');


  for (let i = newArr.length - 1; i >= 0; i--){
    newArr.splice(i, 1);
    arrNumbers.push(Number(newArr.join('')));
    newArr = String(n).split('');
  }
  return Math.max.apply(null, arrNumbers);
}

module.exports = {
  deleteDigit
};
