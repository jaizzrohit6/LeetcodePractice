/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function(nums) {
    const result = []
    for(const num of nums){
        const digits = []
        let n = num 
        while(n>0){
            digits.push(n%10)
            n = Math.floor(n/10)
        }
        digits.reverse()
        result.push(...digits)
    }
    return result
};