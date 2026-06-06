/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function(nums) {
    let n = nums.length
    let total = 0
    for(let i = 0 ; i<n;i++){
        total+=nums[i]
    }
    let leftSum = 0
    const result = Array(n).fill()
    for(let i = 0 ; i<n;i++){
        const rightSum = total - leftSum - nums[i]
        result[i] = Math.abs(leftSum-rightSum)
        leftSum+=nums[i]
    }
    return result
};