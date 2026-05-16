// // create an array
// let myNums = [1, 2, 3, 4, 5];
// // create a variable for the sum and initialize it
// let sum = 0;
// // iterate over each item in the array
// for (let i = 0; i < myNums.length; i++ ) {
//   sum += myNums[i];
// }
// console.log(sum) // 15


// // Sample input: [1,5,6,1,0,1];

// // Sum = 6

// // Sample Output: [5,1] [6,0]

// let input = [1,5,6,1,0,1]
// let sumc = 6
// console.log(findarrSum(input,sumc))
// function findarrSum(input,sumc){
//     let arr= []
//     for(let i = 0 ; i < input.length;i++){
//         for(let j = i+1 ; j < input.length;j++){
//             if(input[i] + input[j] === sumc ){
//                 console.log(input[i],input[j])
//                 arr.push(input[i],input[j])
//             }
//         }
//     }
//     return arr
//  }

// Find the missing number in an integer array of 1 to 10

// Sample input: let_arr = [1,3,5,8,6,7,10,4,2]

// Sample output: [9]

// let_arr = [1,3,5,8,6,7,10,4,2]
// console.log(findmissingNum(input))
// function findmissingNum(input){
//     let arr=[]
//     for(let i = 0 ; i < input.length;i++){
//        arr.push(let_arr)
//     }
// }


// Find the first non-repeating char in a string

// Sample Input: “the quick brown fox jumps then quickly blow air”

// Sample output: “f”

let student = {
    firstname: "rohit",
    lastname:"1952425",
}
let teacher = {
    firstname: "peter",
    lastname:"1952425",
    // getEmail : function(){
    //     return `${this.firstname}${this.lastname}@gmail.com`
    // }
}
function getEmail(){
    return `${this.firstname}${this.lastname}@gmail.com`
}
console.log(getEmail.call(student))
console.log(getEmail.call(teacher))



// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
//callback example 

// let arr = [1,4,6,6,7,8,0,1,1,1,1];
// function removeDuplicates(arr) {
//     let uniqueArr=[]
// 	arr.forEach(element=>{
// 	    if(!uniqueArr.includes(element)){
// 	        uniqueArr.push(element)
// 	    }
// 	})
// 	return uniqueArr
// }
//arr.indexOf(item) === index);
//console.log(removeDuplicates(arr));

// let arr1 = [2,1,4,6,7]
// function doMap(arr1){
//     let arr2 = arr1.map(element=> element*2)
//     //console.log(arr2)
//     return arr2
// }
// console.log(doMap(arr1))

// let arrz = [2,1,4,6,7]
// function doMap1(arrz){
//     let mulArr = []
//     let arr3 = arrz.forEach(element => {
//         let mul = element * 2
//         mulArr.push(mul)
//     })
//     //console.log(arr2)
//     return mulArr
// }
// console.log(doMap1(arrz))

// const arr = ['a', 'b', 'a', 'a', 'c', 'c'];

//     let count = {}
//     for(const element of arr){
//         if(count[element]){
//             count[element] += 1
//         }
//         else{
//              count[element] = 1
//         }
//     }
// console.log(count)






















