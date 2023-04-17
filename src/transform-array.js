const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if(Array.isArray(arr) && !arr.length) {return []};
  if(!Array.isArray(arr)) {throw new Error('\'arr\' parameter must be an instance of the Array!')};
  if(!arr.includes('--double-next') && !arr.includes('--double-prev') && !arr.includes('--discard-prev') && !arr.includes('--discard-next')) {return arr};
  
  //console.debug(arr)
  let arrResult = [];
  arrResult = arrResult.concat(arr)
  
  if(arr[0] === '--double-prev' || arr[0] === '--discard-prev') {arrResult = arr.slice(1, arr.length)}
  if(arr[arr.length - 1] === '--double-next' || arr[arr.length - 1] === '--discard-next') {arrResult = arrResult.slice(0, arrResult.length - 1)}

  if(arrResult.includes('--double-prev')) {
      let indexDoublePrev = arrResult.indexOf('--double-prev')
      if(indexDoublePrev == 1 || (arrResult[indexDoublePrev - 2] != '--discard-next')){arrResult[indexDoublePrev] = arrResult[indexDoublePrev - 1]}
      else {delete arrResult[indexDoublePrev]; arrResult = arrResult.filter(element => element != undefined)}
  }

  if(arrResult.includes('--double-next')) {
      let indexDoubleNext = arrResult.indexOf('--double-next')
      arrResult[indexDoubleNext] = arrResult[indexDoubleNext + 1]
  }

  if(arrResult.includes('--discard-prev')) {
      let indexDiscardPrev = arrResult.indexOf('--discard-prev')
      if(arrResult[indexDiscardPrev - 2] != '--discard-next'){delete arrResult[indexDiscardPrev]; delete arrResult[indexDiscardPrev - 1]; arrResult = arrResult.filter(element => element != undefined)}
      else{delete arrResult[indexDiscardPrev]; arrResult = arrResult.filter(element => element != undefined)}
  }

  if(arrResult.includes('--discard-next')) {
      let indexDiscardNext = arrResult.indexOf('--discard-next')
      delete arrResult[indexDiscardNext]; delete arrResult[indexDiscardNext + 1]; arrResult = arrResult.filter(element => element != undefined)

  }




  return arrResult


}

module.exports = {
  transform
};
