/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */




//Solution:
var getAveragesRachel = function(nums, k) {

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
  let prefix = new Array(n + 1).fill(0)
  for(let i = 0; i < n; i++) {
    // ========================================+> FIX THIS
    // prefix.push(prefix[i - 1] + nums[i]);
  }
  console.log("Rachel's prefix sum array is " + prefix);

  for(let i=k; i < (n - k); i++) {
    let leftBound = i - k;
    let rightBound = i + k;
    let subarraySum = prefix[rightBound + 1] - prefix[leftBound];
    let average = Math.floor(subarraySum/window)
    averages[i] = average;
  }

  return averages;


};

var getAverages = function(nums, k) {
  // When a single element is considered then its average will be the number itself only.
  if (k === 0) {
      return nums;
  }
  
  const windowSize = 2 * k + 1
  const n = nums.length;
  const averages = new Array(n).fill(-1);

  // Any index will not have 'k' elements in its left and right.
  if (windowSize > n) {
      return averages;
  }

  // Generate 'prefix' array for 'nums'.
  // 'prefix[i + 1]' will be sum of all elements of 'nums' from index '0' to 'i'.
  const prefix = new Array(n + 1).fill(0);
  for (let i = 0; i < n; ++i) {
      prefix[i + 1] = prefix[i] + nums[i];
  }
  console.log("The other prefix array is: " + prefix);
  
  // We iterate only on those indices which have at least 'k' elements in their left and right.
  // i.e. indices from 'k' to 'n - k'
  for (let i = k; i < (n - k); ++i) {
      const leftBound = i - k, rightBound = i + k;
      const subArraySum = prefix[rightBound + 1] - prefix[leftBound];
      const average = Math.floor(subArraySum / windowSize);
      averages[i] = average;
  }

  return averages;
};

console.log(getAverages([1,2,3,4,5], 1))
console.log(getAveragesRachel([1,2,3,4,5], 1))
