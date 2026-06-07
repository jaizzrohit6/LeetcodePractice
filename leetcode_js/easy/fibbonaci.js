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


//=======================================================================
function fibbonacci(n){
    //wrong reason  0, 1, 1, 2, 3, 5, 8, 13...
    // if(n < 1) return n
    // let prev2 = 1
    // let prev1 = 2
    // for(let i = 3 ;i<=n;i++){
    //     let curr = prev1 + prev2
    //     prev2 = prev1
    //     prev1 = curr
    // }
    // return prev1
}

let n = 5
console.log(fibbonacci(n))

function fibbonacci(num){
    // n:    0  1  2  3  4  5  6  7   8   9   10
    // fib:  0  1  1  2  3  5  8  13  21  34  55
    if(num < 2) return num
    let prev2 = 1 //1
    let prev1 = 1 // 2
    
    for(let i = 3;i<=num;i++){
        let curr = prev2 + prev1
        prev2 = prev1
        prev1 = curr
    }
    return prev1
}