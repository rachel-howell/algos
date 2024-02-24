/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let prefix = [nums[0]];
    
    for(let i=1; i < nums.length; i++) {
        prefix.push(nums[i] + prefix[i - 1])
    }
    
    return prefix;
};

// The runningSum function uses the Prefix Sum technique to find the running sum of the array at each index. It costs O(n) to make the initial prefix array, but all calculations thereafter run in O(1) time because all subsequent operations are performed with specific integers from the existing array.
