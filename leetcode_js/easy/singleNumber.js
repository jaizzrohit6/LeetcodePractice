/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let obj = {}

    for(const num of nums){
        if(obj[num] !== undefined){
            obj[num] += 1
        }else{
            obj[num] = 1
        }
    }
    for(const key of Object.keys(obj)){
        if(obj[key] === 1){
            return Number(key)
        }
    }
};