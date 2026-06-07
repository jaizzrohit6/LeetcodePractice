function tribbonacci(num){
    // n:    0  1  2  3  4  5   6   7   8   9  10 
    // fib:  0  1  1  2  4  7  13  24  44  81 149
    if(num < 3) return num
    let prev3 = 0 //0
    let prev2 = 1 //1
    let prev1 = 1 // 2
    
    for(let i = 3;i<=num;i++){
        let curr = prev3 + prev2 + prev1
        prev3 = prev2
        prev2 = prev1
        prev1 = curr
    }
    return prev1
}

let num = 10
console.log(tribbonacci(num))