var canConstruct = function(ransomNote, magazine) {
    
  let magMap = new Map();
  
  for(const letter of magazine) {
      if(magMap.has(letter)) {
          magMap.set(letter, magMap.get(letter) + 1);
      } else {
          magMap.set(letter, 1);
      }
  }
  
  for(const letter of ransomNote) {
      if(magMap.has(letter)) {
          magMap.set(letter, magMap.get(letter) - 1)
      } else {
          return false;
      }
      if(magMap.get(letter) < 0) {
          return false;
      }
  }
  
  return true;
  
};
