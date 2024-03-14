// Given an integer array arr, count how many elements x there are, such that x + 1 is also in arr. If there are duplicates in arr, count them separately.

/**
 * @param {number[]} arr
 * @return {number}
 */
var countElements = function(arr) {
  // make a map that contains all elements of the arr
  // initialize var to keep track of how many elements match criteria
  // make a for loop that looks at all elements of arr and has several conditionals:
    // if nums[i + 1] == nums[i] + 1
      // if map.has(nums[i]) => total++
      // if !map.has(nums[i]) => map.set(nums[i], i)
    // else continue

let map = new Map();
let total = 0;

for(let i=0; i < arr.length; i++) {
  map.set(arr[i], i);
}

for(let i=0; i < arr.length; i++) {
  if(map.has(arr[i] + 1)) {
    total++;
  }
}
  
return total;

};
