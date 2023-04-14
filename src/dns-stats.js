const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let arrDomains = domains.map(item => item.split('.').reverse());
  //console.log(arrDomains);
  let result = {};
  arrDomains.forEach(element => {
    let acc = '';
    for (let i = 0; i < element.length; i++) {
      console.log(`${acc}.${element[i]}`)
      if(!result[`${acc}.${element[i]}`]) {result[`${acc}.${element[i]}`] = 1}
      else {result[`${acc}.${element[i]}`] = result[`${acc}.${element[i]}`] + 1};
      acc = `${acc}.${element[i]}`
      //console.log(acc)
    }
    });
    return result;
}

module.exports = {
  getDNSStats
};
