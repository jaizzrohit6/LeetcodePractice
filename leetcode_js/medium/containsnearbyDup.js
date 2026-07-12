/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    const lastSeen = new Map();   
    for (let i = 0; i < nums.length; i++) {
        if (lastSeen.has(nums[i]) && i - lastSeen.get(nums[i]) <= k) {
            return true;
        }
        lastSeen.set(nums[i], i);
    }
    return false;
};