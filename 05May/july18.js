// function isPrime(number) {
//     if (number < 2) {
//       return false;
//     }
    
//     for (let i = 2; i <= Math.sqrt(number); i++) {
//       if (number % i === 0) {
//         return false;
//       }
//     }
    
//     return true;
//   }
  
//   function getPrimeNumbers(start, end) {
//     let primes = [];
  
//     for (let number = start; number <= end; number++) {
//       if (isPrime(number)) {
//         primes.push(number);
//       }
//     }
  
//     return primes;
//   }
  
//   // Example usage
//   let start = 10;
//   let end = 50;
//   let primeNumbers = getPrimeNumbers(start, end);
//   console.log(`Prime numbers between ${start} and ${end}:`);
//   console.log(primeNumbers);




//   // Online Javascript Editor for free
// // Write, Edit and Run your Javascript code using JS Online Compiler

// console.log("Welcome to Programiz!");
// function isPrime(number) {
//   if (number < 2) {
//     return false;
//   }
//   //console.log(Math.sqrt(number))
//   for (let i = 2; i <= Math.sqrt(number); i++) {
//     if (number % i === 0) {
//       return false;
//     }
//   }
  
//   return true;
// }

// function getPrimeNumbers(start, end) {
//   let primes = [];

//   for (let number = start; number <= end; number++) {
//     if (isPrime(number)) {
//       primes.push(number);
//     }
//   }

//   return primes;
// }

// // Example usage
// let start = 10;
// let end = 50;
// let primeNumbers = getPrimeNumbers(start, end);
// console.log(`Prime numbers between ${start} and ${end}:`);
// console.log(primeNumbers);

  




// *
// * Array `arr` contains red and blue balls.
// * Sort the `arr` such that all blue balls comes first followed by
// all the red balls.
// * 1. Do not use inbuld Array.<func> functions like Array.sort()
// or Array.filter
// * 2. Do not use nested loops
// * 3. Do not use any new array
// */

// var arr = [1, 1, 1, 0, 1, 0, 1, 0, 0, 0,1,1];
// // var output = [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1];
// function sortArray(arr) {
//   let left = 0;
//   let right = arr.length - 1;

//   while (left < right) {
//      while (arr[left] === 0 && left < right) {
//       left++;
//     }
//     while (arr[right] === 1 && left < right) {
//       right--;
//     }
//     if (left < right) {
//       [arr[left], arr[right]] = [arr[right], arr[left]];
//       left++;
//       right--;
//     }
//   }
//   return arr;
// }
// // Test the function
// const sortedArr = sortArray(arr);
// console.log(sortedArr);





let str = "my name is rohit jaiswal";
let words = str.split(" ");

// Capitalize the first letter of each word
for (let i = 0; i < words.length; i++) {
  words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
}

// Reverse odd-length words
for (let i = 0; i < words.length; i++) {
  if (words[i].length % 2 !== 0) {
    words[i] = words[i].split("").reverse().join("");
  }
}

let modifiedString = words.join(" ");
console.log(modifiedString);








// console.log("Start")
// for (let index = 0; index < 5; index++) {
//     setTimeout(() => {
//         console.log(index)
//     }, index*2000)
// }


// start
// end
// 5
// 5
// 5
// 5




// //shallow copy 
// let arr = [1,2,3,4,5]


// let newarr []
// arr.map(ele=>{
//     newarr.push(ele*2)
// })
// console.log(newarr)

// const a = {
//     name: "rohit",
//     age: 27,
//     address : {
//         code: "7655",
//     }
// }

// let x = a 

// x.name ="raj"

// console.log(x)
// console.log(a)



let express = require("express")
let app = express

app.listen("8080",req,res=>{
    console.log("Hello world")
})

//stub
describe("nvxcgj"){
    
    
    it("/bsdnc",)
}


function add (input1,input2){
    let final = input1+input2
    return final
}

async function myWorld(input1,input2){
    await add(input1,input2)
}

















// let myfun = return new Promise(resolve,reject =>{
//     //wfjvnfj
// })


// myfun.then(response=>{
    
// }).catch(error=>{
    
// })










// Write a code in JavaScript to show the output as [0,1,2,3,4,6,24,36] from the given array [1,0,6,36,3,0,1,4,24,2,2,0,1,2].


// let arr = [1,0,6,36,3,0,1,4,24,2,2,0,1,2]

// function myfun(arr){
//     let newarr = []
//     let finalarr =[]
//     arr.filter(element=>{
//         if(!newarr.includes(element)){
//             newarr.push(element)
//         }
//     })
//     finalarr = newarr
    
//     for(let i = 0 ; i < finalarr.length ; i++){
//         for(let j = i+1 ; j < finalarr.length;j++){
//             let temp 
//             if(finalarr[i] > finalarr[j]){
//                 temp = finalarr[i] 
//                 finalarr[i] = finalarr[j]
//                 finalarr[j] = temp
//             }
//         }
//     }
//     return finalarr
// }
//  console.log(myfun(arr))


// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

// console.log("Welcome to Programiz!");


// let express = require("express")
// let app = express()
// let req.params.body = {
//     ["1","rohit","23","jaipur"],
//     ["2","rahul","24","bihar"]
//     "3","ram","25","delhi"]
//     ["4","raj","26","patna"]
// }


// app.post("adduserlist",req,res=>{
//     let authorization = req.params.authorization
//     let body = req.params.body 
    
//     addlist(authorization,body){
//         util.writejson(response)
//         res.end(response)
//     }
// })


// app.get("getuser",req,res=>{
//     let authorization = req.params.authorization
//     let userid = req.params.userid
//     getuserdetails(authorization,userid){
//          util.writejson(response)
//          res.end(response)
//     }

// })


// app.listen("8080",req,res=>{
//     console.log("server will start on this port")
// })


// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler


// GET /tasks: Fetch all tasks in the To-Do list
// GET /tasks/:id: Fetch a specific task by its ID
// POST /tasks: Create a new task. The request body should contain the title and description of the task
// PUT /tasks/:id: Update an existing task by its ID. The request body should contain the title, description, and status of the task
// DELETE /tasks/:id: Delete a task by its ID
// Use appropriate HTTP methods (GET, POST, PUT, DELETE) for each endpoint

// 50 R
// 50 B


// Given string ‘s’, the task is to divide a given string s into multiple substrings, with each substring containing only unique characters. This means that no character should be repeated within a single substring. The goal is to find the minimum number of such substrings required to satisfy this condition.

// Input: s = “abacaba”
// Output: 4
// Why: “a”, “ba”, “cab”, “a” or “ab”, “a”, “ca”, “ba”

// let arr = "abacaba"
// console.log(arr.slice(0))

// function myfun(arr){
//     let newarr = []
//     for(let i =0 ; i< arr.length ; i++){
//         // for(let j = i+1 ; j < arr.length ; j++){
//         //     if(!arr[i].includes(newarr))
//         //      newarr.push(arr[i])
//         // }
//     }
//     return newarr
// }
// console.log(myfun(arr))

// login --inventory-booking- order - payment 




// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

console.log("Welcome to Programiz!");

let arr = [1,2,3,4,5,6,6,6,7]
// let b = [5,6,7,8]

// let c = [...a,...b]

// console.log(c)
//pull and fetch
//enum
function removeDuplicate(arr){
    let newarr = []
    arr.map(ele=>{
        if(newarr.hasOwnProperty(ele)){
            newarr.push(ele)
        }
    })
    return newarr
}
console.log(removeDuplicate(arr))



select distinct ename esal from employee e1 where 2 (select count(distinct sal) from employee e2 where e2.sal > e1.sal )





// const arr1 = [1,2,3]
// const arr2 = [2,3,4]
// const arr3 = [3,4,5]

// let arr = [...arr1,...arr2,...arr3]

// console.log(arr)
// let arrnew = new Set(arr)
// console.log(arrnew)

arr = ['a', 'b', 'c'];


function myfun(arr){
    let obj = {}
    
   for(let i = 0 ; i< arr.length; i++){
       
       if(obj.hasOwnProperty(arr[i])){
           
           obj[arr[i]]  =+ 6
       }
       else{
           obj[arr[i]]  = 1
       }
   }
   return obj
}




// function x() {
// for(let i = 1; i<=5; i++){
    
//     console.log("aaaa")
//     setTimeout(function() {
//     console.log(i);
//     }, i*1000);
//     }
//     console.log("Hello");
// }
// x();


// async function parent(){
    
// }

// console.log(parent)



console.log(myfun(arr))



// 50+30
// 1/2

// // console.log("Welcome to Programiz!");

// let express = require("express")
// let app = express()

// app.get("/getData",req,res=>{
  
//   let authorization = req.params.authorization
//   let input = req.params
//   getMyData(authorization,input){
//       util.writejson(response)
//       res.end(response)
//   }
// })

// app.post("/insertData",req,res=>{
  
//   let authorization = req.params.authorization
//   let body = req.params.body
//   insertData(authorization,body){
//       util.writejson(response)
//       res.end(response)
//   }
// })

// app.put("/updateData",req,res=>{
  
//   let authorization = req.params.authorization
//   let input = req.params
//   updateData(authorization,body){
//       util.writejson(response)
//       res.end(response)
//   }
// })
// app.delete("/delData",req,res=>{
  
//   let authorization = req.params.authorization
//   let input = req.params
//   getMyData(authorization,input){
//       util.writejson(response)
//       res.end(response)
//   }
// })





// Input [1, 2, 3, 5, 6, 9] 
// target = 4

// Output [0, 2]

// target = 15
// Output [4, 5]

// target = 999
// Ouput []


// var addSix = createBase(6);

// addSix(10); // returns 16

// addSix(21); // returns 27

// function createBase(number) {
//     let b = number
//     return function addSix(val){
//         return number + val
//     }
// }

// ----------------------- Hello.txt ----------------------------
// Hello there,
// How are you doing today?

// ----- Output -----
// Word count: 9


// let fs = require("fs")

// fs.read("/abc/Hello.txt",data=>{
//     console.log(data)

//     let length = data.length
// })