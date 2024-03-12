/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  let map = new Map();
  nums.sort();

  

  console.log(nums)
  for(let i=0; i<nums.length; i++) {
    map.set(nums[i], i);
  }

  for(let i=nums[0]; i < nums[nums.length-1]; i++) {
    if(map.has(i)) {
      continue;
    }
    return i;
  }
};

console.log(missingNumber([1,0]));
