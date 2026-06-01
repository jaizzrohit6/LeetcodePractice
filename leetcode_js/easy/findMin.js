/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let min = 5000
    for(let i = 0 ; i<nums.length;i++){
        min = Math.min(min,nums[i])
    }
    return min
};