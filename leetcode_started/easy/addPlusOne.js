
function addPlusOne(digits){
    let n = digits.length-1
    for(let i = n ; i >= 0;i--){
        if(digits[i]< 9){
            digits[i]++
            return digits
        }
        digits[i] = 0
    }
    return [1,...digits]
}

let digits = [1,2,4]
console.log(addPlusOne(digits))

//output [1,2,5]

digits = [9,9,9]
console.log(addPlusOne(digits))