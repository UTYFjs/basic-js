const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let counter = {};
  let result = [];

  for( let i=0;i < names.length; i++){
    if([names[i]] in counter){
      counter[names[i]] += 1;
      //let fileName = `${names[i]}(${counter[names[i]]})`;
      result.push(`${names[i]}(${counter[names[i]]})`);
      counter[`${names[i]}(${counter[names[i]]})`]=0;
  } else{
    counter[names[i]] = 0;
    result.push(names[i]);
  }
  
  }
  return result;
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  renameFiles
};


/*let counter = {};
let result = [];

for( let i=0;i < names.length; i++){
  if(counter.include(names[i])){
    counter[names[i]] += 1;
    
    result.push(fileName);
} else{
  counter[names[i]] = 0;
  result.push(names[i]);
}

}

*/