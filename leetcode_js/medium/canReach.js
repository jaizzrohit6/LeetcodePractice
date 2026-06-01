function canReach(s,minJump,maxJump){
    const n = s.length
    if(s[0] === '1') return false
    const reachable = new Array(n).fill(false)
    reachable[0] = true
    let count = 0
    for(let i = 0 ; i< n;i++){
        if(i-minJump >= 0 && reachable[i-minJump]){
            count++
        }
        if(i-maxJump -1 >= 0 && reachable[i-maxJump - 1]){
            count--
        }
        if(count > 0 && s[i] === '0'){
            reachable =true
        }
    }
    return reachable[n-1]
}

console.log(canReach(s,minJump,maxjump))












