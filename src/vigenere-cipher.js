import { NotImplementedError } from '../extensions/index.js';

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
 export default class VigenereCipheringMachine {
  constructor(direct=true) {
    this.direct = direct;
  }
  encrypt(message, keyword) {
    if (typeof message === 'undefined' || typeof keyword === 'undefined') {
      throw Error('Incorrect arguments!')
    }
    message = message.toUpperCase();
    keyword = keyword.toUpperCase();

    var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var encryptWord = "";
    for (var i = 0, j = 0;i < message.length;i++) {
      const currentLetter = message.charAt(i);
      if (currentLetter >= 'A' && currentLetter <= 'Z') {
        encryptWord += alphabet.charAt((alphabet.indexOf(currentLetter) + alphabet.indexOf(keyword.charAt(j % keyword.length))) % alphabet.length);
        j++;
      } else {
        encryptWord += currentLetter;
      }
    }

    return this.direct ? encryptWord : encryptWord.split('').reverse().join('');
  }

  decrypt(message, keyword) {
    if (typeof message === 'undefined' || typeof keyword === 'undefined') {
      throw Error('Incorrect arguments!')
    }

    keyword = keyword.toUpperCase();
    message = message.toUpperCase();

    var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var decryptWord = "";
    for (var i = 0, j = 0;i < message.length;i++) {
      const currentLetter = message.charAt(i);
      if (currentLetter >= 'A' && currentLetter <= 'Z') {
        decryptWord += alphabet.charAt(((alphabet.indexOf(currentLetter) + alphabet.length) - alphabet.indexOf(keyword.charAt(j % keyword.length))) % alphabet.length);
        j++;
      } else {
        decryptWord += currentLetter;
      }
    }
    return this.direct ? decryptWord : decryptWord.split('').reverse().join('');
  }
}
