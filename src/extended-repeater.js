const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {

  let { repeatTimes, separator = '+', addition='', additionRepeatTimes, additionSeparator = '|' } = options;
  
   let arr=[];
  
    let i=0;
    do {arr.push(String(addition));
      i++;
    } while (i<additionRepeatTimes);
    
  
  let str1=arr.join(additionSeparator);
    let result=str+str1;
    arr=[];
    let j=0;
    do {
      arr.push(result);
      j++;
    } while (j<repeatTimes);
   
    result=arr.join(separator);
    
  
  return result;
    
}