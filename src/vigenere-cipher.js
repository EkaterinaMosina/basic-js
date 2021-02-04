const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(modification) {
    this.modification=modification;

  }

  encrypt(message, key) {
    if (!message || !key) throw new Error();
    let alf=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let result='';
    let maxlength=Math.max(message.length, key.length)
    let keyNew=key.toLowerCase().split('');
    let messageNew=message.toLowerCase().split('');
    //let message1=message.split('');
    let key1=[];
      for (let i=0; i<maxlength; i++) {
       key1.push(keyNew[(i<keyNew.length)?i:i%keyNew.length]);
        }
    keyNew=[]; //работаем с ним
    for (let i=0; i<maxlength; i++) {
      if (messageNew[i]==' ') {
        keyNew.push(' ');
      }
      else {
        keyNew.push(key1[0]);
        key1.shift();
      }
      
    }    

    
    //for (let j=0; j<maxlength; j++) {
    //let  messageNew=message1[(i<message1.length)?i:(i%message1.length)]
     //};
  //for (let i=0; i<maxlength; i++) {
  
      let resSymbol;
      for (let i=0; i<message.length; i++) {
        if (alf.indexOf(messageNew[i])==-1) {
          resSymbol= messageNew[i];
        }
        else {
          resSymbol=alf[((alf.length+alf.indexOf(keyNew[i])+alf.indexOf(messageNew[i]))%alf.length)];
        }
        result+=resSymbol;

      }
     
    
    if (this.modification === true || this.modification === undefined) {
      return result.toUpperCase();
    } else {
      return result.split('').reverse().join('').toUpperCase();
    }
    
  }    

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) throw new Error();

    
    let alf=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    let result='';
    let maxlength=Math.max(encryptedMessage.length, key.length)

    let keyNew=key.toUpperCase().split('');
    let encryptedMessageNew=encryptedMessage.split('');
    //let message1=message.split('');
    let key1=[];
      for (let i=0; i<maxlength; i++) {
       key1.push(keyNew[(i<keyNew.length)?i:i%keyNew.length]);
        }
    keyNew=[]; //работаем с ним
    for (let i=0; i<maxlength; i++) {
      if (encryptedMessageNew[i]==' ') {
        keyNew.push(' ');
      }
      else {
        keyNew.push(key1[0]);
        key1.shift();
      }
      
    }     

    
   // for (let j=0; j<maxlength; j++) {
  //    encryptedMessageNew[j]=encryptedMessage[(j<encryptedMessage.length)?j:(j%encryptedMessage.length)]
  //    };



  let resSymbol;
    for (let i=0; i<encryptedMessageNew.length; i++) {
      
      if (alf.indexOf(encryptedMessageNew[i])==-1) {
        resSymbol= encryptedMessageNew[i];
      }
      else {
        resSymbol=alf[((alf.length+alf.indexOf(encryptedMessageNew[i])-alf.indexOf(keyNew[i]))%alf.length)];
      }
      result+=resSymbol;
    }

     if (this.modification === true || this.modification === undefined) {
      return result;
     } else {
      return result.split('').reverse().join('');
    }
  }
}

module.exports = VigenereCipheringMachine;
