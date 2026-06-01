/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    if (nums1.length > nums2.length){
        let temp = nums1;
        nums1 = nums2;
        nums2 = temp;
    }
    let m = nums1.length
    let n = nums2.length
    let left = 0 
    let right = m
    while(left<=right){
        let i = Math.floor((left+right)/2)
        let j = Math.floor((m+n+1)/2-i)
        //num1 partiotion
        let left1 = (i===0) ? Number.MIN_SAFE_INTEGER : nums1[i-1]
        let right1 = (i===m) ? Number.MAX_SAFE_INTEGER : nums1[i]
        //num2 partition
        let left2 = (j===0) ? Number.MIN_SAFE_INTEGER : nums2[j-1]
        let right2 = (j===n) ? Number.MAX_SAFE_INTEGER : nums2[j]

        if(left1<= right2 && left2<=right1){
            //odd total numbers
            if((m+n)%2===1){
                return Math.max(left1,left2)
            }
            return (Math.max(left1,left2) + Math.min(right1,right2))/2
        }
        else if(left1 > right2){
            right = i -1
        }
        else{
            left = i+1
        }
    }
};