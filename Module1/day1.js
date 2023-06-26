//=========================Palindrome + Reverse interger =======================

let value = 12321
function palindrom(value){
    let rem , temp , final =0
    
    while(value>0){
        rem = value % 10  //1 
        console.log("rem",rem)
        value = parseInt(value/10)
        console.log("value",value)
        final = final*10 + rem
        console.log("final",final)
    }
}
console.log(palindrom(value))


//========================== check input is array or not =================

function checkArray(input){
    if(Array.isArray(input)){
        return "input is array"
    }
    else{
        return "input is not an array"
    }
}
let input = "string"
//let input = [1,2,3,4,5]
console.log(checkArray(input))

//==========================Prime Number========================