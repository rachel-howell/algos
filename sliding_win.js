/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
  let currentSum=0, currMax=0, left=0;
  
  for(let i=0; i<k; i++) {
      currentSum+=nums[i]
  }
  currMax = currentSum/k;
  console.log("current sum is " + currentSum);
  
  for(let i=k; i<nums.length; i++) {
    console.log("current sum is " + currentSum + " (for loop run " + i + ").");
      currentSum-=nums[left];
      currentSum+=nums[i];
      if(currentSum/k > currMax) {
          currMax=currentSum/k
      }
      left++;
  }
  
  return currMax;
};

let tc = [0,1,1,3,3];

// console.log(findMaxAverage([5], 1))
console.log(findMaxAverage(tc, 4))
