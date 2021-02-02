const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {

  if (!Array.isArray(arr)) throw "Error";
  let arr2=[];
  for (let i=0; i<arr.length;i++) {
   if (arr[i]=="--double-next") {
      if (arr[i+1]!=undefined) {
        arr2.push(arr[i+1]);
        
    }
  }
  else if (arr[i]=="--double-prev") {
    if (arr[i-1]!=undefined && arr[i-2]!="--discard-next") {
      arr2.push(arr[i-1]);
      
  }
  }
  else {
     if(arr[i]!='--discard-prev' && arr[i]!='--discard-next' && arr[i+1]!='--discard-prev' && arr[i-1]!='--discard-next') {
    arr2.push(arr[i]);
  }
  }
}
  return arr2;
}
