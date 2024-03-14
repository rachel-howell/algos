/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  let map = new Map();
  nums.sort();
  let end = nums[nums.length];
  console.log(nums)

  if(nums[0] != 0) {
    return 0;
  }

  for(let i=0; i < end; i++) {
    map.set(nums[i],i);
  }

  console.log(map)

  for(let i=0; i < end; i++) {
    if(map.has(i)) {
      console.log("The map has the element " + i + "and at the same index the nums array has " + nums[i]);
      continue;
    } else if(!map.has(i)) {
      return i;
    }
    }
  return end + 1;
  };

console.log(missingNumber([1,0]));
