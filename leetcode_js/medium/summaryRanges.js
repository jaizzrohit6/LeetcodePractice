/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    const res = [];
    const n = nums.length;
    let i = 0;
    while (i < n) {
        const start = nums[i];
        while (i + 1 < n && nums[i + 1] === nums[i] + 1) {
            i++;
        }
        res.push(start === nums[i] ? `${start}` : `${start}->${nums[i]}`);
        i++;
    }
    return res;
};