function mergeSortedInArray(nums1,m,nums2,n){
    let i = m -1
    let j = n -1 
    let k = m + n -1

    while(i >= 0 && j>=0){
        if(nums1[i] > nums2[j]){
            nums1[k] = nums1[i]
            i--
        }else{
            nums1[k] = nums2[j]
            j--
        }
        k--
    }
    while(j >=0){
        nums1[k] = nums2[j]
        j--
        k--
    }
    return nums1
}

let nums1 = [1,2,3]
let nums2 = [2,3,4,5,6,7]
let m = 3
let n = 6
console.log(mergeSortedInArray(nums1,m,nums2,n))
//oiutput [1,2,2,3,3,4,5,6,7]