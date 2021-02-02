// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  const normalAlphabet = "abcdefghijklmnopqrstuvwxyz";

  function substitution(input, alphabet, encode = true) {
    if (alphabet.length !== 26 | new Set(alphabet).size !== alphabet.length) {
      return false;
    }
    else {
      if (encode === true) {
        let encodefinal = "";
        for (let char of input) {
          // let final = "";
          let normalIndex = normalAlphabet.indexOf(char);
          let CodedChar = alphabet.charAt(normalIndex);
          if(char !== " ") {
            encodefinal += CodedChar;
          }
          else {
            encodefinal += " ";
          }
        }
        return encodefinal;
      }
      else {
        let decodefinal = "";
        for (let char of input) {
          // let final = "";
          let alphaIndex = alphabet.indexOf(char);
          let DecodedChar = normalAlphabet.charAt(alphaIndex);
          if (char !== " ") {
            decodefinal += DecodedChar;
          }
          else {
            decodefinal += " ";
          }
        }
        return decodefinal;
      }
    }
  };

  return {
    substitution,
  };
})();

module.exports = substitutionModule.substitution;
