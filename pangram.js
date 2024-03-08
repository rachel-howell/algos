/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
  let dic = new Map();
  console.log("hi")
  for(let i=0; i<sentence.length; i++) {
      let letter = sentence[i];
      if(dic.has(letter)) {
        
      }
  }
};

checkIfPangram("thequickbrownfoxjumpsoverthelazydog");
