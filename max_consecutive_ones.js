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
// var longestOnes = function(nums, k) {
//   console.log("hi")
//   let left = 0, ans = 0, numZeros = 0;
//   //left will increment in the while loop that is active when the number of zeroes is greater than k
//     //ans keeps track of the greatest consecutive num of 1s with k 0 flips
//     //numZeros keeps track of how many zeroes there are
//   for(let right=0; right<nums.length; right++) {
      
//     if(nums[right] == 0) {
//         numZeros++;
//     }
//     while(numZeros > k) {
//         if(nums[right] == 0) {
//             numZeros--;
//         }
//         left++;
//     }
      
//     ans = Math.max(ans, right - left + 1);

//   }
  
//   return ans;
// };

// fourth time's the charm!!
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
for(let right=0; right<nums.length; right++) {
      
  if(nums[right] == 0) {
      console.log("that was a zero!!")
      numZeros++;
  }
    
  console.log("The array at position " + right + "has a value of " + nums[right] + ". The number of zeros right now is" + numZeros + ".")
    
  while(numZeros > k) {
      console.log("The while loop is running now. We are at " + numZeros + " zeros, and the current streak is " + (right - left + 1))
      if(nums[left] == 0) {
          numZeros--;
      }
      left++;
      console.log("WHILE LOOP JUST RAN! we are at " + numZeros + " zeros. The variable left has value " + left)
  }
    
  ans = Math.max(ans, right - left + 1);

}

return ans;
};

// SUMMARY:
// In the binary flip problem, you have to use the number of zeroes in the current subarray as a constraint. So first you need to set up a for loop to iterate through the array. Then, make a conditional statement that checks to see if the current integer is 0, and if it is, increment a variable used to keep track of how many zeroes there are. Underneath the conditional statement, set up a while loop that takes zeroes off the left side of the subarray until it is a valid subarray again by moving up the var "left" which tracks the left side of the sliding window. Then figure out if the current subarray is larger than the previous maximum.
