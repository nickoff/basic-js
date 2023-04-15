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
  let arrChar = str.split('');
  result = '';
  let i = 0;
  let j = 0;
  while (i < arrChar.length) {
    let temp  = [];
    temp.push(arrChar[i]);
    j = i + 1;
    while (arrChar[j] === arrChar[i]) {
      temp.push(arrChar[j])
      j++
      //console.log(j)
    }
    if (temp.length > 1) {
      result += temp.length;
    }
    result += arrChar[i]
    
    i = j   
  }
  return result
}

module.exports = {
  encodeLine
};
