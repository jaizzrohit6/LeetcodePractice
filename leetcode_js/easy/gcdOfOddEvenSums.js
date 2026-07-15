/**
 * @param {number} n
 * @return {number}
 */
var gcdOfOddEvenSums = function(n) {
    let evenSum = 0
    let oddSum = 0
    for(let i= 1;i<=n;i++){
        evenSum += 2 * i - 1;   
        oddSum += 2 * i;      
    }
    const gcd = (a,b) => b === 0 ? a : gcd(b,a%b)
    return gcd(evenSum,oddSum)
};