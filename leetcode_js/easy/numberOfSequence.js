function numberOfSpecialChars(word){
    let seen = new Set(word)
    let count = 0
    let letters = 'abcdefghijklmnopqrstuvwxyz' 
    for(let i = 0; i< letters.length;i++){
        let lower = letters[i]
        let upper = letters[i].toUpperCase()
        
        if(seen.has(lower) && seen.has(upper)){
            count++
        }
    }
    return count
}
let word = 'aaAbBC'
console.log(numberOfSpecialChars(word))