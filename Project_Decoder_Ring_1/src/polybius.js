// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  

  function polybius(input, encode = true) {
    polybiusArray = [
      {letter:"a", number: "11"},
      {letter:"b", number: "12"},
      {letter:"c", number: "13"},
      {letter:"d", number: "14"},
      {letter:"e", number: "15"},
      {letter:"f", number: "21"},
      {letter:"g", number: "22"},
      {letter:"h", number: "23"},
      {letter:"i", number: "24"},
      {letter:"j", number: "24"},
      {letter:"k", number: "25"},
      {letter:"l", number: "31"},
      {letter:"m", number: "32"},
      {letter:"n", number: "33"},
      {letter:"o", number: "34"},
      {letter:"p", number: "35"},
      {letter:"q", number: "41"},
      {letter:"r", number: "42"},
      {letter:"s", number: "43"},
      {letter:"t", number: "44"},
      {letter:"u", number: "45"},
      {letter:"v", number: "51"},
      {letter:"w", number: "52"},
      {letter:"x", number: "53"},
      {letter:"y", number: "54"},
      {letter:"z", number: "55"},
      {letter: " ", number: "56"},
    ];


    let lowerInput = input.toLowerCase();
    let final = "";
    if(encode === true) {
      for(let char of lowerInput) {
        if(char !== " ") {
          let polyNumber = polybiusArray.find((values) => values.letter === char);
          final += polyNumber.number;
        }
        else {
          final += char;
        }
      }
      return final;
    }
    else {
      //decode here
      let checkForEven = lowerInput.split(" ").join("");
      if((checkForEven.length % 2) !== 0) {
        return false;
      }
      else {
        let final = "";
        let pairArray = [];
        for (i=0; i<lowerInput.length; i+=2) {
          if (lowerInput.charAt(i) !== " " && lowerInput.charAt((i+1)) !== " ") {
            let pair = lowerInput.slice([i], [i+2]);
            console.log(pair);
            pairArray.push(pair);
          }
          else {
            pairArray.push("56");
            i -= 1;
          }
        }
        for (let pair of pairArray) {
          let polyNumber = polybiusArray.find((values) => values.number === pair);
          if (polyNumber.number === "24") {
            final += "(j/i)";
          }
          else {
            final += polyNumber.letter;
          }
        }
      return final;
      }

    }
    
  };

  return {
    polybius,
  };
})();

module.exports = polybiusModule.polybius;
