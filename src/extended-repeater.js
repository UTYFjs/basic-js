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
  let arrAddition =[];
  let addition='';
  if(options.addition){addition = options.addition};
  if(options.additionRepeatTimes){
    for( let i =0; i<options.additionRepeatTimes; i++){
      arrAddition.push(addition);
  }
  }else{
    arrAddition.push(addition);
  }
  let additionSeparator = options.additionSeparator ? options.additionSeparator : '|';
  let resultAddition = arrAddition.join(additionSeparator);
   let string = String(str);
  let arrStr = [];
  if(options.repeatTimes){
    for(let i=0; i<options.repeatTimes; i++){
      arrStr.push(string);
      
    }
    if(options.addition){
      for(let i=0; i< arrStr.length; i++){
        arrStr[i] = arrStr[i] + resultAddition;
      }
    }////////////////
  } else{ arrStr.push(string)}
  let separator = options.separator? options.separator:'+';
  return arrStr.join(separator);
  // remove line with error and write your code here
}

/* 
![Extended repater](https://farm5.staticflickr.com/4683/39024400961_732f449b65.jpg)  
Ваша задача — реализовать функцию `repeater(str, options)`.
Эта функция возвращает повторяющуюся **строку**, основываясь на заданных параметрах:
*	`str` это **строка**, которая будет повторена
*	`options` это **объект** опций, который содержит следующие свойства:
  -	`repeatTimes` устанавливает число повторений `str`
  - `separator` это строка, разделяющая повторения `str`
  - `addition` это дополнительная строка, которая будет добавлена после каждого повторения `str`
  - `additionRepeatTimes` устанавливает число повторений `addition`
  - `additionSeparator` это строка, разделяющая повторения `addition`

Параметры `str` и `addition` по умолчанию являются **строками**. В случае, если они другого типа, он должны быть преобразованы к строке.
 
Параметры `separator` и `additionSeparator` являются строками.

`repeatTimes` и `additionRepeatTimes` являются целыми числами (в случае отсутствия любого из них соответствующая строка не повторяется).

Единственный обязательный параметр — это `str`, остальные могут не быть переданы.
Значение `separator` по умолчанию это `'+'`. Значение `additionSeparator` по умолчанию это `'|'`.

Например: `repeater('STRING', { repeatTimes: 3, separator: '**', addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })` => `'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'`

Напишите свой код в `src/extended-repeater.js`.*/

module.exports = {
  repeater
};


