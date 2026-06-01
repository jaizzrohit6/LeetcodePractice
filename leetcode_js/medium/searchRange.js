/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    return [findFirst(nums,target),findLast(nums,target)]
};

 function findFirst(nums,target){
        let left = 0
        let right = nums.length-1
        let result = -1
        while(left <= right){
            let mid = Math.floor((left+right)/2)
            if(nums[mid] === target){
                result = mid
                right = mid - 1
            }
            else if(nums[mid] < target){
                left = mid + 1
            }else{
                right = mid - 1
            }
        }
        return result
    }
 function findLast(nums,target){
        let left = 0
        let right = nums.length-1
        let result = -1
        while(left <= right){
            let mid = Math.floor((left+right)/2)
            if(nums[mid] === target){
                result = mid
                left = mid + 1
            }
            else if(nums[mid] < target){
                left = mid + 1
            }else{
                right = mid - 1
            }
        }
        return result
    }