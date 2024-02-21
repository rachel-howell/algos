/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// var longestOnes = function(nums, k) {
//   let left = 0, count = 0, max = 0, numZeros = 0;
  
//   for(let right=0; right<nums.length; right++) {
//       if(nums[right] == 1) {
//           count++;
//       } else if(nums[right]==0 && numZeros < k) {
//           numZeros++;
//           count++;
//       } else if(nums[right]==0 && numZeros == k) {
//           if(count > max) {
//               count = max;
//           }
//           left++;
//       }
//   }
  
//   return max;
// };

var longestOnes = function(nums, k) {
  console.log("hi")
  let left = 0, count = 0, max = 0, numZeros = 0;
  
  for(let right=0; right<nums.length; right++) {

    while(numZeros<=k) {
      console.log("it's going")
      count++;
      if(nums[right] == 0) {
        numZeros++;
      }

    }
    if(count > max) {
      max = count;
    }
    left++;

  }
  
  return max;
};

console.log(longestOnes([0,0,0,1,0,1,0], 2))

//once you reach a point where the subarray contains >k zeroes, we must make a while loop to take items off the left of the subarray until it meets the criterion for validity again
