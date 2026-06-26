/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let w = 0
    for(let r = 0; r <nums.length;r++){
        if(w < 2 || nums[r] !== nums[w-2]){
            nums[w] = nums[r]
            w++
        }
    }
    return w
};