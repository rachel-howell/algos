/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  let map = new Map();
  nums.sort(function(a, b) {
    return a - b;
  });
  
  let end = nums[nums.length - 1];

  if(nums[0] != 0) {
    return 0;
  }

  for(let i=0; i <= end; i++) {
    map.set(nums[i],i);
  }

  if(map.size == nums.length) {
    return nums[end] + 1;
  }


  for(let i=0; i < end; i++) {
    if(map.has(i)) {
      console.log("The map has the element " + i + "and at the same index the nums array has " + nums[i]);
      continue;
    }
      return i;
    }
  };

console.log(missingNumber([45,35,38,13,12,23,48,15,44,21,43,26,6,37,1,19,22,3,11,32,4,16,28,49,29,36,33,8,9,39,46,17,41,7,2,5,27,20,40,34,30,25,47,0,31,42,24,10,14]));
