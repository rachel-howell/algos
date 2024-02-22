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

// var longestOnes = function(nums, k) {
//   console.log("hi")
//   let left = 0, max = 0;
  
//   for(let right=0; right<nums.length; right++) {

//     while(numZeros<=k) {
//       console.log("it's going")
//       count++;
//       if(nums[right] == 0) {
//         numZeros++;
//       }

//     }
//     if(count > max) {
//       max = count;
//     }
//     left++;

//   }
  
//   return max;
// };

// console.log(longestOnes([0,0,0,1,0,1,0], 2))

//once you reach a point where the subarray contains >k zeroes, we must make a while loop to take items off the left of the subarray until it meets the criterion for validity again

//third try oon 2.21.24
var longestOnes = function(nums, k) {
  console.log("hi")
  let left = 0, ans = 0, numZeros = 0;
  //left will increment in the while loop that is active when the number of zeroes is greater than k
    //ans keeps track of the greatest consecutive num of 1s with k 0 flips
    //numZeros keeps track of how many zeroes there are
  for(let right=0; right<nums.length; right++) {
      
    if(nums[right] == 0) {
        numZeros++;
    }
    while(numZeros > k) {
        if(nums[right] == 0) {
            numZeros--;
        }
        left++;
    }
      
    ans = Math.max(ans, right - left + 1);

  }
  
  return ans;
};
