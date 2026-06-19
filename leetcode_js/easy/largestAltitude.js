/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let current = 0
    let max = 0
    for(const g of gain){
        current+=g
        max = Math.max(max,current)
    }
    return max
};