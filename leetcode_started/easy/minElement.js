function minElement(nums){
    function sumDigit(digit){
        let sum = 0
        while(digit>0){
            sum+=digit%10
            digit = Math.floor(digit/10)
        }
        return sum
    }
    let min = 9999999
    for(let i = 0;i<nums.length;i++){
        let sum = sumDigit(nums[i])
        min = Math.min(min,sum)
        
    }
    return min
}

let nums = [10,20,30,40]
console.log(sumMinimum(nums))