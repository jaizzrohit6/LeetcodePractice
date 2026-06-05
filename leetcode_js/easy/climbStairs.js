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

//=================================================================

function climbStairs(n){
    //bottom tabulation approch
    let ways = []
     ways[1] = 1
     ways[2] = 2
    
    for(let i = 3; i<=n;i++){
        ways[i] = ways[i -1] + ways[i-2]
    }
    return ways[n]
}

let n = 50
console.log(climbStairs(n))


//=============================Recursive approach with memoization==============================

const memo = {}
function climbStairs(n){
    //top down recursion with memoization approch
    if(n in memo) return memo[n]
    if(n <3) return n
    const result =  climbStairs(n-1) + climbStairs(n-2)
    memo[n] = result
    return result
}

let n = 50
console.log(climbStairs(n))