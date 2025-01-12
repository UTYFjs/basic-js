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
  constructor(machine = true){
    this.machine = machine;
  }
  encrypt(message, key) {
    if (message === undefined || key === undefined){
      throw new Error(`Incorrect arguments!`)
    }
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let arr =str.split();
    let mess = message.toUpperCase();
    let arrMessage = mess.split();
    let arrKey = key.split();


    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
  decrypt(message, key) {
    if (message === undefined || key === undefined){
      throw new Error(`Incorrect arguments!`)
    }
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  VigenereCipheringMachine
};


/*![Ciphering machine](https://live.staticflickr.com/1931/44960892745_471bee66bb_b.jpg)  
Криптография — это здорово! Давайте попробуем наладить производство шифровальных машин. Наши машины будут использовать один из методов шифрования, которые легки для понимания, но не могут быть разгаданы посредством простого криптоанализа — [**шифр Виженера**](https://en.wikipedia.org/wiki/Vigen%C3%A8re_cipher).

Наша машина будет иметь 2 модификации: **прямая** и **обратная** (тип машины определяется в момент создания). **Прямая** машина просто шифрует и дешифрует строку, переданную в нее, а **обратная** машина возвращает **перевернутую** задом наперед строку после шифрования и дешифрования.

Ваша задача — реализовать класс `VigenereCipheringMachine`. `constructor` этого класса принимает `true` (**или ничего**), чтобы создать **прямую** машину и `false`, чтобы создать **обратную** машину.
Каждый экземляр `VigenereCipheringMachine` должен иметь 2 метода: `encrypt` и `decrypt`.

Метод `encrypt` принимает 2 параметра: `message` (строка, чтобы ее зашифровать) и `key` (строку-кодовое слово).

Метод `decrypt` принимает 2 параметра: `message` (строка, чтобы ее расшифровать) и `key` (строку-кодовое слово)

Эти параметры для обоих методов являются **обязательными**. Если хотя бы один из них не был передан, должна быть выброшена ошибка с сообщением `Incorrect arguments!`. Машины шифруют и дешифруют **только символы латинского алфавита** (другие символы не изменяются). Строка, возвращаемая этими методами, должна иметь **верхний регистр**.

Вам не нужно валидировать значение, переданное в `contructor` и в методы `encrypt` и `decrypt` (за исключением выбрасывания ошибки при отсутствии аргумента для для этих методов).

Например:

`const directMachine = new VigenereCipheringMachine();`

`const reverseMachine = new VigenereCipheringMachine(false);`

`directMachine.encrypt('attack at dawn!', 'alphonse')` => `'AEIHQX SX DLLU!'`

`directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse')` => `'ATTACK AT DAWN!'`

`reverseMachine.encrypt('attack at dawn!', 'alphonse')` => `'!ULLD XS XQHIEA'`

`reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse')` => `'!NWAD TA KCATTA'`

Напишите свой код в `src/vigenere-cipher.js`.
 */