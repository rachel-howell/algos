/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let sortedArr = [];
    let i=0, j=nums.length-1, left=0, right=0;
    console.log("hi");
    
    while(i <= j) {
        //check to see which end of the array has the greatest absolute value
        left = nums[i]*nums[i];
        console.log(left);
        right = nums[j]*nums[j];
        console.log(right);
        if(left > right) {
            sortedArr.unshift(left);
            i++;
        } else if(right > left) {
            sortedArr.unshift(right);
            j--;
        } else if(right == left && i!=j) {
            sortedArr.unshift(right);
            sortedArr.unshift(left);
            i++;
            j--;
        } else if(i==j) {
            sortedArr.unshift(right);
            break;
        }
    }
    
    return sortedArr;

};
