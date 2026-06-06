/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let n = nums.length
    if(n===0) return 0
    if(n===1) return nums[0]
    if(n===2) return Math.max(nums[0],nums[1])

    const robRange= (start,end)=> {
        let prev2 =0
        let prev1 = 0

        for(let i = start;i<=end;i++){
            const curr = Math.max(prev1,prev2+nums[i])
            prev2 = prev1
            prev1=curr
        }
        return prev1
    }
    return Math.max(robRange(0,n-2),robRange(1,n-1))
};