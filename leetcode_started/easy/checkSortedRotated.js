var check = function(nums) {
    let counter = 0
    let n =  nums.length
    for(let i = 0;i< n;i++){
        if(nums[i] > (nums[(i+1) % n])){
            counter ++
        }
        if(counter > 1 ) return false
    }
    return true
}