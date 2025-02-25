const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let newArr = [];
  let result = [];
  let additionRepeat = options.additionRepeatTimes || 1;
  let repeat = options.repeatTimes || 1;
  
  for (let i = 0; i < additionRepeat; i++) {
    newArr.push(options.addition === null?'null':options.addition);
  }

  let separator = newArr.join(options.additionSeparator || "|");

  for (let i = 0; i < repeat; i++) {
    result.push(str + separator);
  }

  return result.join(options.separator || "+");
}

module.exports = {
  repeater
};
