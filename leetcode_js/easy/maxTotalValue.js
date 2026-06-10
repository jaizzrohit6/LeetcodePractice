/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxTotalValue = function(nums, k) {
    let maxNum = Math.max(...nums)
    let minNum = Math.min(...nums)
    let maxTotal = (maxNum - minNum)*k
    return maxTotal
};