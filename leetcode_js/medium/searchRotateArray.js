// function removeFromCircle(n,k){
    
// }


// console.log()


function searchRotateArray(arr,target){
    let left = 0
    let right = arr.length 
    
    while(left<=right){
        let mid = Math.floor((left+right)/2)
        
        if(arr[mid] === target) return mid
        //check if left half is sorted 
        if(arr[left] <= arr[mid]){
            if(arr[left] <= target && target < arr[mid]){
                right = mid -1
            }else{
                left = mid + 1
            }
        }
        else{
             if(arr[mid] < target && target <=arr[right]){
                left = mid +1
            }else{
                right = mid - 1
            }
        }
    }
    return -1
}
let arr = [4,5,6,7,1,2,3]
let target = 1
console.log(searchRotateArray(arr,target))



/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0
    let right = nums.length - 1

    while(left <= right){
        let mid = Math.floor((left + right)/2)

        if(nums[mid] === target) return mid
        //check if left is sorted
        if(nums[left] <= nums[mid]){
            if(nums[left] <= target && target < nums[mid]){
                right = mid -1
            }else{
                left = mid + 1
            }
        }else{
            if(nums[mid] < target && target<= nums[right]){
                left = mid +1
            }else{
                right = mid -1
            }
        }
    }
    return -1
};