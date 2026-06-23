/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    const n = nums.length
    const res = []
    if(n<4) return res
    nums.sort((a,b)=> a - b)
    for(let i = 0 ; i < n - 3;i++){
        if(i > 0 && nums[i] === nums[i - 1]) continue
        for(let j = i + 1; j< n - 2 ;j++){
            if(j > i + 1 && nums[j] === nums[j - 1]) continue

            let left = j + 1
            let right = n - 1
            const diff = target - nums[i] - nums[j]

            while(left < right){
                const sum = nums[left] + nums[right]
                while(left < right){
                    const sum = nums[left] + nums[right]
                    if(sum === diff){
                        res.push([nums[i],nums[j],nums[left],nums[right]])
                        const leftVal = nums[left] 
                        const rightVal = nums[right]
                        while(left < right && nums[left] === leftVal) left++
                        while(left < right && nums[right] === rightVal) right--
                    }
                    else if(sum < diff){
                        left++
                    }else{
                        right--
                    }
                }
            }
        }
    }
    return res
};