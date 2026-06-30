/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countMajoritySubarrays = function(nums, target) {
    const n = nums.length
    let count = 0
    for(let i = 0; i < n; i++){
        let balance = 0
        for(let j = i ; j < n; j++){
           balance +=(nums[j] === target) ? 1 : - 1
           if(balance > 0) count++ 
        }
    }
    return count
};