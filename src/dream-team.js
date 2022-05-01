const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let arr = []
  if(Array.isArray(members)){
    let arr = []
    for( let name of members){
      if(typeof(name) === 'string'){
        arr.push(name.trim()[0].toUpperCase());
      };}
      arr.sort();
      console.log(arr);
      let str = arr.join('');
          return str;
  } else {
    return false;
  }
  

  
  // remove line with error and write your code here
}

module.exports = {
  createDreamTeam
};
