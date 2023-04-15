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
  const getStringRepetWithSeparator = (str, count = 1, separator = '') => {
    let res = new Array();
    while (res.length < count) {
      res.push(str)
    }
    return res.join(separator)
  }
  
    if ('addition' in options) {
      str += getStringRepetWithSeparator(String(options.addition), 
            Number(options.additionRepeatTimes) ? Number(options.additionRepeatTimes) : 1, 
            options.additionSeparator ? String(options.additionSeparator) : '|')
    }

    return getStringRepetWithSeparator(str, options.repeatTimes, options.separator ? String(options.separator) : '+')
  }


module.exports = {
  repeater
};
