// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler


// function containsDuplicate(nums) {
//     let obj = {}
//     for(const num of nums){
//         if(obj[num] !== undefined){
//             obj[num] += 1
//         }else{
//             obj[num] = 1
//         }
//     }
//     console.log(obj)
//     for(const key of Object.keys(obj)){
//         console.log(key)
//         if(obj[key]>1){
//             return true
//         }
//     }
//     return false
// };

// const nums = [2,14,18,22,22]
// console.log(containsDuplicate(nums))



// function getCommon(nums1,nums2){
//     let setB = new Set(nums2)
//     return Math.min(...nums1.filter(x=>setB.has(x)))
// }

// const a = [3, 1, 4, 1, 5];
// const b = [2, 4, 6, 1, 3];
// console.log(getCommon(a,b))



// function climbingStairs(n){
//     if(n<2) return n
    
//     let prev1 = 2
//     let prev2 = 1
    
//     for(i =3;i<=n;i++){
//         let current = prev2 + prev1 //1 + 2
//         prev2 = prev1
//         prev1 = current 
//     }
//     return prev1
// }

// let n = 6
// console.log(climbingStairs(n))


// function longestCommonPrefix(arr1,arr2){
//     let prefixes = new Set()
//     for(let num of arr1){
//         while(num > 0){
//             prefixes.add(num)
//             num = Math.floor(num/10)
//         }
//     }
//     let maxLen = 0
//     for(let num of arr2){
//         while(num > 0){
//             if(prefixes.has(num)){
//                 maxLen = Math.max(maxLen,String(num).length)
//                 break
//             }
//             num = Math.floor(num/10)
//         }
//     }
//     return maxLen
// }
// const arr1 = [1234,123456,1238684]
// const arr2 = [345253,346232,123868453542]
// console.log(longestCommonPrefix(arr1,arr2))


// function searchRotateArray(arr,target){
//     let left = 0
//     let right = arr.length 
    
//     while(left<=right){
//         let mid = Math.floor((left+right)/2)
        
//         if(arr[mid] === target) return mid
//         //check if left half is sorted 
//         if(arr[left] <= arr[mid]){
//             if(arr[left] <= target && target < arr[mid]){
//                 right = mid -1
//             }else{
//                 left = mid + 1
//             }
//         }
//         else{
//              if(arr[mid] < target && target <=arr[right]){
//                 left = mid +1
//             }else{
//                 right = mid - 1
//             }
//         }
//     }
//     return -1
// }
// let arr = [4,5,6,7,1,2,3]
// let target = 1
// console.log(searchRotateArray(arr,target))


function removeFromCircle(n,k){
    let circle = []
    
    for(let i = 1 ; i<= n;i++){
        circle.push(i)
    }
    let pointer = 0
    while(circle.length > 1){
        pointer = pointer + k -1
        pointer = pointer % circle.length 
        circle.splice(pointer,1)
        if(pointer === circle.length ){
            pointer = 0
        }
    }
    return circle[0]
}

let n = 5
let k = 3
console.log(removeFromCircle(n,k))