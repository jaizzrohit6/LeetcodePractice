/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    let i = num1.length - 1
    let j = num2.length - 1
    let carry = 0
    let result = ""

    while(i >= 0 || j>=0 || carry > 0){
        let d1 = i >= 0 ? num1.charCodeAt(i) - 48 : 0
        let d2 = j >= 0 ? num2.charCodeAt(j) - 48 : 0
        let sum = d1 + d2 + carry
        result = (sum%10)+ result
        carry = Math.floor(sum/10) 

        i--
        j--
    }
    return result
};