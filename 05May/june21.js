// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

console.log("Welcome to Programiz!");


// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

// console.log("Welcome to Programiz!");
// let str = "level"
// let n = str.length
// console.log(n)
// function palindrome(str){
//     for(let i = 0 ; i < n/2;i++){
//      if(str[i] == str[n-1-i]){
//          console.log("string is palindrome")
//          return "palindrome"
//         }
//     }
// }
// console.log(palindrome(str))




// ✅ Remove all `null` and `undefined` values from a nested object
const obj = {
    one: null,
    two: 2,
    three: {
      four: 4,
      five: null,
      six: undefined,
    },
  };
  
  function removeNull(obj) {
    return Object.fromEntries(
      Object.entries(obj)
        .filter(([_, value]) => value != null)
        .map(([key, value]) => [
          key,
          value === Object(value) ? removeNull(value) : value,
        ]),
    );
  }
  
  const result = removeNull(obj);
  
  // 👇️ { two: 2, three: { four: 4 } }
  console.log(result);
  
  

// // let arr = [1, 60, -10, 70, -80, 85]

// // console.log(arr.sort(a-b => ))

// // ({})]
// // let nearer =0
// // function myTest(arr){
    
// //     arr.forEach(element=>{
// //         if(element-nearer  )   
// //     })
    
// //     // arr.filter(element=>{
// //     //   element-nearer
// //     // })
// // }

// let str = "rohit"
// // function reverseString(str){
// //     let newstr = ""
// //     for(let i = str.length-1 ; i >= 0 ; i--){
// //         newstr += str[i] 
// //     }
// //     return newstr
// // }
// // console.log(reverseString(str))

// function reverseString(str=>
// { 
//     return str.split().reverse()
// })
// console.log(reverseString(str))


// let a = 1234

// function reverseInteger(a){
//     let temp 
//     if(a % 10 == 0){
        
//     }
// }


// function job(state) {
//     return new Promise(function(resolve, reject) {
//         if (state) {
//             resolve('success');
//         } else {
//             reject('error');
//         }
//     });
// }
 
// let promise = job(true);
 
// promise.then(function(data) {
//     console.log(data);
//     return job(false);
// }).catch(function(error) {
//     console.log(error);
//     return 'Error caught';
// }).then(function(data) {
//     console.log(data);
//     return job(true);
// }).catch(function(error) {
//     console.log(error);
// });


let promise1 = new Promise((resolve,reject)=>{
    //console.log("promise1")
    resolve("promise 1")
})
let promise2 = new Promise((resolve,reject)=>{
    //console.log("promise2")
    resolve("promise2")
})
let promise3 = new Promise((resolve,reject)=>{
    resolve("promise3")
})






// var last =  function(array, n) {
//   if (array == null) 
//     return void 0;
//   if (n == null) 
//      return array[array.length - 1];
//   return array.slice(Math.max(array.length - n, 0));  
//   };

// //console.log(last([7, 9, 0, -2]));
// //console.log(last([7, 9, 0, -2],3));
// console.log(last([7, 9, 0, -2],6));

// function filterDuplicates(data) {
//   // Write your code here
//   // To debug: console.error('Debug messages...');
//  console.log(data)
  
//   return [];
// }

// /* Ignore and do not change the code below */
// const n = parseInt(readline());
// const data = readline().split(' ').map(j => parseInt(j)).slice(0, n);
// const oldWrite = process.stdout.write;
// process.stdout.write = chunk => { console.error(chunk); return true }
// const filtered = filterDuplicates(data);
// process.stdout.write = oldWrite;
// for (let i = 0; i < filtered.length; i++) {
//   console.log(filtered[i]);
// }
// /* Ignore and do not change the code above */


Promise.all([promise1,promise2,promise3]).then(response=>{
    console.log("response",response)
    return(response)
})
  
  
  Object.fromEntries(Object.entries(obj).filter(([_,value])=>value !=null).map(([key])))
  