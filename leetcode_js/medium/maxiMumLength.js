/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumLength = function(nums) {
    const freq = new Map()
    for(const x of nums){
        const b = BigInt(x)
        freq.set(b,(freq.get(b) ?? 0) + 1)
    }
    let answer = 1
    const ones = freq.get(1n) ?? 0

    if(ones > 0){
        answer = Math.max(answer,ones % 2 === 1 ? ones : ones - 1)
    }

    for(const [base,_] of freq){
        if(base ===1n) continue

        let cur = base
        let count = 0

        while((freq.get(cur) ?? 0) >=2){
            count+=2
            cur= cur*cur
        }
        if((freq.get(cur)?? 0) >= 1){
            count+=1
        }else{
            count-= 1
        }
        answer = Math.max(answer,count)
    }
    return answer
};