/**
 * @param {string} s
 * @param {string} target
 * @return {number}
 */
var rearrangeCharacters = function(s, target) {
    let freqS = {}
    let freqT = {}

    for(let c of s) freqS[c] = (freqS[c] || 0) + 1
    for(let c of target) freqT[c] = (freqT[c] || 0) + 1

    let minCopies = Infinity 
    for( let c of Object.keys(freqT)){
        const available = (freqS[c] || 0)
        minCopies = Math.min(minCopies,Math.floor(available/freqT[c]))
    }
    return minCopies === Infinity ? 0 : minCopies
};