// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

console.log("Welcome to Programiz!");

let arr = [1,2,2,3,3,4,4,4] //[1,2,3,4]

function removeDuplicate(arr){
    let newArr=[]
    arr.filter(element=>{
        if(!newArr.includes(element)){
            newArr.push(element)
        }
    })
    // for(let i = 0 ; i< arr.length ; i++){
    //     if(!newArr.includes(arr[i])){
    //         newArr.push(arr[i])
    //     }
    return newArr
}
console.log(removeDuplicate(arr))