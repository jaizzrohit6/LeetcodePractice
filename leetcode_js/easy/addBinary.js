
function binarySum(a,b){
    let i = a.length - 1
    let j = b.length - 1 
    let carry = 0 
    let result = ''
    
    while(i >= 0 || j>=0 || carry){
      const bitA = i >=0 ? parseInt(a[i]) : 0
      const bitB = j >=0 ? parseInt(b[j]) : 0
      console.log(bitA , bitB)
      let sum = bitA + bitB + carry
      result = (sum%2) + result
      carry = Math.floor(sum/2)
      i--
      j--
    }
    console.log(result)
    return result
}

let a = "1010"
let b = "1011"
console.log(binarySum(a,b))