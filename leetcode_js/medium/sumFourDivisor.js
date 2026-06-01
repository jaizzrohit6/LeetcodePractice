/**
 * @param {number[]} nums
 * @return {number}
 */
var sumFourDivisors = function(nums) {
    let total = 0
    for(const n of nums){
        let sum = 1 + n
        let count = 2
        for(let d = 2 ; d*d <= n;d++){
            if(n%d === 0){
                if(d === n/d){
                    sum+=d
                    count+=1
                }else{
                    sum+= d + n/d
                    count+=2
                }
            }
            if(count>4) break;
        }
        if(count === 4) total+=sum
    }
    return total
};