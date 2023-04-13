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
  const arr = String(n).split('');
  let acc = 0;
  for (let i = 0; i < arr.length; i++){
    let temp = arr[i];
    delete arr[i];
      if (+(arr.join('') > acc)) {
        acc = +(arr.join(''))
      }
    arr[i] = temp
  }
  return acc
}

module.exports = {
  deleteDigit
};
