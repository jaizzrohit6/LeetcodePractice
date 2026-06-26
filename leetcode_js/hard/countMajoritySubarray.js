/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countMajoritySubarrays = function(nums, target) {
    const n = nums.length
    const OFFSET = n + 1
    const SIZE = 2 * n + 1
    const bit = new Array(SIZE + 1).fill(0)
    const update = (idx) =>{
        for(;idx <= SIZE; idx +=idx & -idx) bit[idx]++
    }
    const query = (idx) =>{
        let s= 0
        for(;idx>0;idx -=idx & -idx) s+=bit[idx]
        return s
    }
    let count = 0
    let prefix = 0

    update(0 + OFFSET)
    for(let j = 0 ; j< n;j++){
        prefix+=(nums[j] === target) ? 1 : -1

        count+= query(prefix + OFFSET - 1)
        update(prefix + OFFSET)
    }
    return count
};