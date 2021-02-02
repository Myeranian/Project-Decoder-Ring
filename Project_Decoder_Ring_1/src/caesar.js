// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    if (shift==0 | shift<-25 | shift>25 | !shift) {
      return false;
    }
    else {
      if (encode === true) {
        let lowerInput = input.toLowerCase();
        let final = '';
        for (let i=0; i<lowerInput.length; i++) {
          let char = input.charAt(i);
          if (char.toUpperCase() != char.toLowerCase()) {
            let charCode = lowerInput.charCodeAt(i);
            let remainder = 122 % charCode;
            if (remainder < shift) {
              final += String.fromCharCode(96 + (shift - remainder));
            } else {
              final += String.fromCharCode(charCode + shift);
            }
          }
          else {
            final += lowerInput.charAt(i);
          }
        }
        return final;
      }
      else {       //Decode//
        let lowerInput = input.toLowerCase();
        let final = "";
        for (let i=0; i<lowerInput.length; i++) {
          let char = input.charAt(i);
          if (char.toUpperCase() != char.toLowerCase()) {
            let charCode = lowerInput.charCodeAt(i);
            let remainder = 25 - (122 % charCode);
            if (remainder < shift) {
              final += String.fromCharCode(123 - (shift - remainder));
            }
            else {
              final += String.fromCharCode(charCode - shift);
            }
          }
          else {
            final += lowerInput.charAt(i);
          }
        }
        return final;
      }
    }
  };

  return {
    caesar,
  };
})();

module.exports = caesarModule.caesar;
