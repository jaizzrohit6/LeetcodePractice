// function checkPalindrom(str){
//     let left = 0
//     let right = str.length-1
    
//     while(left<=right){
//         if(str[left] !== str[right]){
//             return false
//         }
//         left++
//         right--
//     }
//     return true
// }


// let str = 'amanaplanacanalpanama'
// console.log(checkPalindrom(str))


/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let result = ''
   let allowed = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'
   
   for(char of s){
       if(allowed.includes(char)){
           result+=char.toLowerCase()
       }
   }
   let myresult = checkPalindrom(result)
   return myresult
};

function checkPalindrom(str){
    let left = 0
    let right = str.length-1
    
    while(left<=right){
        if(str[left] !== str[right]){
            return false
        }
        left++
        right--
    }
    return true
}