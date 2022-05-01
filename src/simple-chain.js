const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  arrChain : [],
  getLength() {
    return this.arrChain.length;
    // remove line with error and write your code here
  },
  addLink(value) {
    if(value===undefined){
      this.arrChain.push(`'(  )'`);

    } else {
      this.arrChain.push(`( ${String(value)} )`)
    }
    return this;
    // remove line with error and write your code here
  },
  removeLink(position) {
    if (this.arrChain[position-1] === undefined){ 
      this.arrChain=[];
      throw new Error(`You can't remove incorrect link!`);
    }else{
      let x = position-1;
      this.arrChain.splice(x, 1);
    }
    return this;
    // remove line with error and write your code here
  },
  reverseChain() {
   this.arrChain.reverse();
   return this;
    // remove line with error and write your code here
  },
  finishChain() {
    let str = '';
    str = this.arrChain.join('~~');
    this.arrChain = [];
    return str;
    // remove line with error and write your code here
  }
};

module.exports = {
  chainMaker
};
/*addLink(value) {
    if(value===undefined){
      this.arrChain.push(`'(  )'`);

    } else {
      this.arrChain.push(`( ${String(value)} )`)
    }
    return this;
    // remove line with error and write your code here
  },
  removeLink(position) {
    if (this.arrChain[position-1] === undefined){ 
      throw new NotImplementedError(`You can't remove incorrect link!`);
    }else{
      let x = position-1;
      this.arrChain.splice(x, 1);
    }
    return this;
    // remove line with error and write your code here
  },
  reverseChain() {
   this.arrChain.reverse();
    // remove line with error and write your code here
  },
  finishChain() {
    let str = '';
    str = this.arrChain.join('~~');
    return result = `'`+str+`'`;
    // remove line with error and write your code here
  }*/