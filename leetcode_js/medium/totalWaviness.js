/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
var totalWaviness = function(num1, num2) {
    let total = 0
    for(let i = num1;i<=num2;i++){
        total+=waveness(i)
    }
    return total
};

function waveness(num){
    let count = 0
    let val = String(num).split('').map(Number)
    for(let i = 0; i< val.length;i++){
        const isPeak = val[i] > val[i+1] && val[i] > val[i-1]
        const isValley = val[i] < val[i+1] && val[i] < val[i-1]

        if(isPeak || isValley) count++
    }
    return count
}