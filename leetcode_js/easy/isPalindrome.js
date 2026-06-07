function isPalindrome(num){
    //first solution string conversion
    if(num <0) return false //base condition 
    let value = String(num).split('').map(Number) // [] array got created
    console.log(value)
    let left = 0
    let right = value.length -1
    while(left<=right){
        if(value[left]!== value[right]) return false
        left++
        right--
    }
    return true
}

let num = -121
console.log(isPalindrome(num))