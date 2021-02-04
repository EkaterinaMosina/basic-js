const CustomError = require("../extensions/custom-error");

const chainMaker = {
  arr:[],
  getLength() {
   return this.arr.length;
  },
  addLink(value) {
    this.arr.push('( '+value+' )')  
    return this;
  },
  removeLink(position) {
    if (this.arr[position-1]==undefined) {
      this.arr=[];
      throw new Error();
    }
    else {
      this.arr.splice(position-1,1);
      return this;
    }
   
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    let res= this.arr.join('~~');
    this.arr=[];
    return res;
  }
};

module.exports = chainMaker;
