/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let candidate = null;
    let count = 0;

    for (const num of nums) {
        if (count === 0) candidate = num;
        count += (num === candidate) ? 1 : -1;
    }

    let actualCount = 0;
    for (const num of nums) {
        if (num === candidate) actualCount++;
    }

    return actualCount > Math.floor(nums.length / 2) ? candidate : -1
};
//