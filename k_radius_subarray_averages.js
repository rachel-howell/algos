/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var getAverages = function(nums, k) {

  //make prefix sum algo
  let prefix = [nums[0]];

  for(let i = 1; i < nums.length; i++) {
    prefix.push(nums[i] + prefix[i-1]);
  }

  //average logic:
  // currAvg = nums[1] + nums[1 + k] + nums[1 - k]
  // denominator will always be 1 + 2 * k
  // add conditional in case 1 - k < 0 (in which case we add -1 k times)
  // 
  
  console.log(prefix)
};

let arr = [1,2,3]

console.log(getAverages([7,4,3,9,1,8,5,2,6], 3));
if (arr[5] == undefined) {
  console.log("yarr")
}

// example: find k-radius at index 1 when k=1
// so to find the k-radius avg at index 1, it should be 14/3 == 4.xxx = 4
// so avg[2] gives you the sum of nums[0-2] which you can then divide by 3 to get 4
// to find k-radius at index 3 when k = 2...
// avg = 25 / 5 = 5

//Solution:
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
