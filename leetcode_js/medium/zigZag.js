/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(numRows === 1 ) return s

    // create bucket [] [] []
    let bucket = Array.from({length:numRows},()=>[])
    let rows = 0
    let goingDown = true

    for(let char of s){
        bucket[rows].push(char)
        if(rows === 0) goingDown = true
        if(rows === numRows -1) goingDown = false
        rows+= goingDown ? 1 : -1
    }
    return bucket.map(b=>b.join('')).join('')
};