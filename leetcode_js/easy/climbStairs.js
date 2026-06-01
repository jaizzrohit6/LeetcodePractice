function climbingStairs(n){
    if(n<2) return n
    
    let prev1 = 2
    let prev2 = 1
    
    for(i =3;i<=n;i++){
        let current = prev2 + prev1 //1 + 2
        prev2 = prev1
        prev1 = current 
    }
    return prev1
}

let n = 6
console.log(climbingStairs(n))