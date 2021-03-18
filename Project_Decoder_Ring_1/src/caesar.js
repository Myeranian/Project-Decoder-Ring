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
      if (encode === true)  {
        let lowerInput = input.toLowerCase();
        let final = '';
        for (let i=0; i<lowerInput.length; i++) {
          let char = input.charAt(i);
          if (char.toUpperCase() != char.toLowerCase()) {
            const sum = lowerInput.charCodeAt(i) + shift;
            if (sum > 122) {
              letter = String.fromCharCode(97 + (sum - 122) - 1);
            }
            else if (sum < 97) {
              letter = String.fromCharCode(122 - (97 - sum) + 1); 
            }
            else {
              letter = String.fromCharCode(sum);
            }
            final += letter; 
          }
          else {
            final += lowerInput.charAt(i);
          }
        }
        return final;
      }
      if (encode === false) {  
        let lowerInput = input.toLowerCase();
        let final = "";
        for (let i=0; i<lowerInput.length; i++) {
          let char = input.charAt(i);
          if (char.toUpperCase() != char.toLowerCase()) {
            const sum = lowerInput.charCodeAt(i) - shift;
            if (sum > 122) {
              letter = String.fromCharCode(97 + (sum - 122) - 1); 
            } 
            else if (sum < 97) {
              letter = String.fromCharCode(122 - (97 - sum) + 1); 
            } 
            else {
              letter = String.fromCharCode(sum);
            }
            final += letter; 
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
