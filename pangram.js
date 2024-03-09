/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
  let dic = new Map();
  for(let i=0; i<sentence.length; i++) {
      let letter = sentence[i];
      if(dic.has(letter)) {
        continue;
      }
      dic.set(letter, i);
  }
  if(dic.size == 26) {
    return true;
  } else {
    return false;
  }
};

console.log(checkIfPangram("theuickbrownfoxjumpsoverthelazydog"))
