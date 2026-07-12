/**
 * @param {number} n
 * @return {number}
 */
var sumAndMultiply = function(n) {
    const digits = String(n).split('').map(Number).filter(d => d !== 0);
    const concatenated = Number(digits.join(''));
    const sum = digits.reduce((acc, d) => acc + d, 0);
    return concatenated * sum;
};