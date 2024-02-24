/**
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function(nums) {
    
  //create prefix sum array
  //start with startValue = 0;
  
  let prefix = [nums[0]];
  let min = 1;
  
  if (nums[0] < 1) {
      min = Math.abs(nums[0] - 1);
  }

  console.log("The initial minumum start value based on the first element of nums (" + nums[0] + ") is " + min + ".");
  
  for(let i = 1; i < nums.length; i++) {
      prefix.push(nums[i] + prefix[i-1]);
      console.log("This is at position " + i + " and we just added " + prefix[i] + " to the prefix array.")

      if (prefix[i] < 1) {
          min = Math.max(Math.abs(prefix[i] - 1), min);
      }
  }
  
  console.log("Final prefix array: " +prefix)
  return min;
};

console.log("Final answer is " + minStartValue([1,-2,-3]));
