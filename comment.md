

// function addPlusOne(digits){
//     let n = digits.length-1
//     for(let i = n ; i >= 0;i--){
//         if(digits[i]< 9){
//             digits[i]++
//             return digits
//         }
//         digits[i] = 0
//     }
//     return [1,...digits]
// }

// let digits = [1,2,4]
// console.log(addPlusOne(digits))


// function insertSearchOption(nums,target){
//     let left = 0
//     let right = nums.length -1
//     while(left <=right){
//         let mid = left + Math.floor((right-left)/2)
//         if(nums[mid] === target){
//             return mid
//         }else if(nums[mid] < target){
//             left = mid+1 
//         }else{
//             right = mid-1
//         }
//     }
//     return left
// }

// let nums = [1,3,5,7]
// let target = 8
// console.log(insertSearchOption(nums,target))



// function mergeSortedArray(arr1,arr2){
//     let i = 0
//     let j = 0
//     let result = []
//     while(i <arr1.length && j< arr2.length){
//         if(arr1[i] <= arr2[j]){
//             // result.push(arr1[i])
//             // i++
//             //instead od this use 
//             result.push(arr1[i++])
//         }else{
//             // result.push(arr2[j])
//             // j++
//             result.push(arr2[j++])
//         }
//     }
//     // while(i <arr1.length) result.push(arr1[i++])
//     // while(j < arr2.length) result.push(arr2[j++])
//     //instead od this you can use spread operator
//     result.push(...arr1.slice(i))
//     result.push(...arr2.slice(j))
//     return result
// }

// function mergeSortedInArray(nums1,m,nums2,n){
//     let i = m -1
//     let j = n -1 
//     let k = m + n -1

//     while(i >= 0 && j>=0){
//         if(nums1[i] > nums2[j]){
//             nums1[k] = nums1[i]
//             i--
//         }else{
//             nums1[k] = nums2[j]
//             j--
//         }
//         k--
//     }
//     while(j >=0){
//         nums1[k] = nums2[j]
//         j--
//         k--
//     }
//     return nums1
// }

// let nums1 = [1,2,3]
// let nums2 = [2,3,4,5,6,7]
// let m = 3
// let n = 6
// console.log(mergeSortedInArray(nums1,m,nums2,n))


// function binarySum(a,b){
//     let i = a.length - 1
//     let j = b.length - 1 
//     let carry = 0 
//     let result = ''
    
//     while(i >= 0 || j>=0 || carry){
//       const bitA = i >=0 ? parseInt(a[i]) : 0
//       const bitB = j >=0 ? parseInt(b[j]) : 0
//       console.log(bitA , bitB)
//       let sum = bitA + bitB + carry
//       result = (sum%2) + result
//       carry = Math.floor(sum/2)
//       i--
//       j--
//     }
//     console.log(result)
//     return result
// }

// let a = "1010"
// let b = "1011"
// console.log(binarySum(a,b))




// function checkPalindrom(str){
//     let left = 0
//     let right = str.length-1
    
//     while(left<=right){
//         if(str[left] !== str[right]){
//             return false
//         }
//         left++
//         right--
//     }
//     return true
// }




function removeSpecial(strnew){
  let result = ''
  let allowed = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
   
  for(char of strnew){
      if(allowed.includes(char)){
          result+=char.toLowerCase()
      }
  }
  let myresult = checkPalindrom(result)
  return myresult
}


let str = "A man, a plan, a canal: Panama"
console.log(removeSpecial(str))



