const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor (direct = true) {
    this.direct = direct;
  }

  encrypt(message, keyword) {
    if(typeof(message) === 'string' && typeof(keyword) === 'string') {
  

    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
    
    while(keyword.length < message.length){
      keyword = keyword.repeat(2)
   }

    let messageArr = message.split('');
    let keywordArr = keyword.split('');

    let encryptedMessageArr = [];
    let i = 0;
    let j = 0


    while(i < messageArr.length){
        if (alphabet.includes(messageArr[i].toLocaleUpperCase())){
            encryptedMessageArr.push(encryptChar(messageArr[i], keywordArr[j]));
            j++
        } else {encryptedMessageArr.push(messageArr[i])}
        i++
    }

    //console.debug(encryptedMessageArr.join(''))

    if(this.direct) {return encryptedMessageArr.join('')}
    else {return encryptedMessageArr.reverse().join('')}


    function encryptChar(char, key) {
      let indexChar = alphabet.indexOf(char.toUpperCase())
      let indexKey = alphabet.indexOf(key.toUpperCase())
      if ((indexChar + indexKey) < 26) {return alphabet[indexChar + indexKey]}
      else {return alphabet[indexChar + indexKey - 26]}
      }

    } else {throw Error('Incorrect arguments!')
  }


  }
  decrypt(encryptedMessage, keyword) {
    if(!(typeof encryptedMessage === 'string') || !(typeof keyword === 'string')) {
      throw Error('Incorrect arguments!')
    }

    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
    
    while(keyword.length < encryptedMessage.length){
      keyword = keyword.repeat(2)
   }

    let encryptedMessageArr = encryptedMessage.split('');
    let keywordArr = keyword.split('');

    let decryptedMessageArr = [];

    let i = 0;
    let j = 0


    while(i < encryptedMessage.length){
        if (alphabet.includes(encryptedMessage[i].toLocaleUpperCase())){
          decryptedMessageArr.push(decryptChar(encryptedMessage[i], keywordArr[j]));
            j++
        } else {decryptedMessageArr.push(encryptedMessage[i])}
        i++
    }

        //console.debug(decryptedMessageArr.join(''))

        if(this.direct) {return decryptedMessageArr.join('')}
        else {return decryptedMessageArr.reverse().join('')}

    function decryptChar(char, key) {

      let indexChar = alphabet.indexOf(char.toUpperCase())
      let indexKey = alphabet.indexOf(key.toUpperCase())
      if ((indexKey - indexChar) <= 0) {return alphabet[indexChar - indexKey]}
      else {return alphabet[26 - (indexKey - indexChar)]}
      }
  }



  

}

module.exports = {
  VigenereCipheringMachine
};
