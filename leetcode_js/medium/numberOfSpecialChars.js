/**
 * @param {string} word
 * @return {number}
 */
var numberOfSpecialChars = function(word) {
    let n = word.length
    let letters = 'abcdefghijklmnopqrstuvwxyz'
    let lastLower = {}
    let firstUpper = {}

    for(let i = 0 ; i< n;i++){
        let char = word[i]
        if(char === char.toLowerCase()){
            lastLower[char] = i
        }else{
            if(firstUpper[char]=== undefined){
                firstUpper[char] = i
            }
        }
    }
    let count = 0
    for(let i = 0 ;i< letters.length;i++){
        let lower = letters[i]
        let upper = letters[i].toUpperCase()
        if(lastLower[lower] !== undefined && firstUpper[upper]!== undefined && lastLower[lower] < firstUpper[upper] ){
            count++
        }
    }
    return count
};