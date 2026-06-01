/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {

    if(n < 1) return n
    let val2 = 0
    let val1 = 1

    for(let i =2 ; i<= n; i++){
        let current = val2 + val1
        val2 = val1
        val1 = current 
    }
    return val1
};