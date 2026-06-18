/**
 * @param {string} s
 * @param {number} k
 * @return {character}
 */
var processStr = function(s, k) {

    // process str - 1  
    // let result = ""
    // for(const ch of s ){
    //     if(ch === "*") result = result.slice(0,-1)
    //     else if(ch === "#") result+=result
    //     else if(ch === "%") result = result.split('').reverse().join('')
    //     else result+=ch
    // }
    // return result[k] ? result[k] : "."

    //process str - 2
    const n = s.length
    const lens = new Array(n)
    let len = 0n 

    for(let i = 0;i< n ;i++){
        const ch = s[i]
        if(ch === "*") {
            if(len > 0n) len-= 1n
        }
        else if( ch=== "#") len *= 2n
        else if(ch ==="%") len = len
        else len+= 1n
        lens[i] = len
    }

    let idx = BigInt(k)
    if(idx >= lens[n - 1]) return "."
    for(let i = n -1 ; i>=0; i--){
        const ch = s[i]
        const before = i > 0 ? lens[ i - 1] : 0n
        const after = lens[i]

        if(ch === "*") continue
        else if( ch=== "#"){
            if(idx >= before) idx -= before
        } 
        else if(ch === "%") idx = after - 1n - idx
        else{
            if(idx === after -1n) return ch
        }
    }
    return "."
};