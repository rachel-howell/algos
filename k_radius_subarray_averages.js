/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

var getAverages = function(nums, k) {

  if(k==0) {
    return nums;
  }
  
  let n = nums.length;
  let averages = new Array(n).fill(-1);
  //creates a new array averages of length n who has -1 at all indices
  let window = k * 2 + 1;
  //window stretches across k indices and includes the 1 index the current element is on

  if(window > n) {
    return averages;
  }

  // making prefix sum array:
  // let prefix = new Array(n + 1).fill(0)
  // console.log("Rachel's initial prefix array is " + prefix)
  let prefix = [nums[0]]
  for(let i = 1; i < n; i++) {
    prefix.push(prefix[i - 1] + nums[i]);
  }
  console.log("Rachel's prefix sum array is " + prefix);

  for(let i=k; i < (n - k); i++) {
    let leftBound = i - k;
    let rightBound = i + k;
    let subarraySum = prefix[rightBound] - prefix[leftBound] + nums[leftBound];
    // ^^ line 39 was my issue, I wasn't calculating the subarraySum properly. We take the number at the right of the window of the prefix sum (which gives us the sum of the elements up to that point) and subtract the numbers to the left of the leftbound. We add the nums[leftBound] element because when we do the subtraction, we forget to include the number at the start of our subarray (the left end). So, we need to add that number back in.
    let average = Math.floor(subarraySum/window)
    averages[i] = average;
  }

  return averages;


};



console.log(getAverages([1,2,3,4,5], 1))

