/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function(nums, pivot) {

    //solution 1

    // let lesser = []
    // let greater= []
    // let pivotCount = 0
    // for(const num of nums){
    //     if(num < pivot) lesser.push(num)
    //     else if(num > pivot) greater.push(num)
    //     else pivotCount++
    // }
    // return [...lesser,...new Array(pivotCount).fill(pivot),...greater]

    let n = nums.length
    let left = 0
    let right = n - 1
    const result = new Array(n).fill(pivot)

    for(let i = 0 ; i< n;i++){
        if(nums[i] < pivot) result[left++] = nums[i]
        if(nums[n-1-i] > pivot) result[right--] = nums[n-1-i]
    }
    return result
};