/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    let str = nums.map(String)

    str.sort((a,b) =>{
        const ab = a + b
        const ba = b + a

        return ba > ab ? 1 : (ba < ab ? - 1: 0)
    })
    if(str[0] === '0') return '0'
    return str.join('')
};