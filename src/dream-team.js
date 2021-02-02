const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  
  if (members==null||members==undefined) {
    return false;
  }
  else {
  let arr=[];
  for (let i=0;i<members.length;i++) {
    if (typeof members[i]=='string') {
      arr.push((members[i].trim().toUpperCase().split(''))[0]);
    }
  }
  return arr.sort().join('');   
}
};
