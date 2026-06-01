// setInterval(() => { console.log("8") })
// console.log("1")
// setImmediate(() => {
//     console.log("2")
// });
// setTimeout(() => { console.log("4") }, 0)
// setTimeout(() => { console.log("7") }, 10)
// const pro = Promise.resolve("3")
// pro.then((res) => console.log(res))
// process.nextTick(() => console.log("5"))
// console.log("6")


// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

// console.log("Welcome to Programiz!");

const a = {
    prop1: 10,
    prop2: 20
}
a.prop1 = 5

console.log(a)


// let http = require("http")
// let app = express()

// app.get('/getusername',function(req,res){
//     console.log("get method called")
// })

// app.listen('8080',function(req,res){
//     console.log("http://localhost:8080")
// })



// // var a = ["Hello", "Hi", { test: "Data"}]
// //destructuring to split variable
// // const add = (a,b) => {
// //     this.result = a + b;
// // }
// // how deployement works 
// // how many types of function
// // high order function
// //const target = new add(5,10)
// //arrow function and normal function
// // child process 
// // thread - process 
// // object seal vs freeze
// // promise all promiseallsettled
// // callback queue microtask que
// //protypical inheritance and classical 
// //setimmidiate settimeout processtick
// //filestream question ------
// //opps concept
// //classical inheritance
// //promise callback async await  
// console.log("1")
// setImmediate(() => {
//     console.log("2")
// });
// setTimeout(() => { console.log("4") }, 0)
// setTimeout(() => { console.log("7") }, 2000)
// const pro = Promise.resolve("3")
// pro.then((res) => console.log(res))
// process.nextTick(() => console.log("5"))
// console.log("6")
// //backpressure
// // "1"
// //"6"
// //"5"
// //"3"
// // "4"
// //"2"
// //"7"


// // Online Javascript Editor for free
// // Write, Edit and Run your Javascript code using JS Online Compiler

// console.log("Welcome to Programiz!");

// const obj ={
//     name:"rohit",
//     lastname:"jaiswal"
// }

// obj.age=27
// //optional chaining
// console.log(obj)

// let addpromise = function add(resolve,reject){
//     //return a+b
//     return new promise()
    
// }


// addpromise.then(response=>{
//     resolve(response)
// }).catch(error=>{
//     reject
// })

// let retryadd = function(callback){
//     callback()
// }



// // Online Javascript Editor for free
// // Write, Edit and Run your Javascript code using JS Online Compiler

// console.log("Welcome to Programiz!");

// // async function fun1(req, res){
// //     let response = await request.get('http://localhost:3000')
// //     if(response.err){
// //         console.log("error")
// //     }
// //     else{
// //         console.log("fetched response")
// //     }
// // }


// const helperPromise = function(){
//     const promise = new Promise(function (resolve,reject){
//         let str1 = "rohitjaiswal"
//         let str2 = "rohitjaiswal"
//         if(str1===str2){
//             resolve("successfull")
//         }
//         else{
//             reject("error")
//         }
//     })
//     return promise
// }

// async function demopromise(){
//     try{
//         let message = await helperPromise()
//         console.log(message)
//     }
//     catch(error){
//         console.log(error)
//     }
// }

// demopromise()




// function uncommonString (str1,str2){
//     let str =""
//     if(str1===str2){
//         return ("same input")
//     }
//     else{
//         for(let i=0;i<str1.length;i++){
//             //let strx = str1[i]
//             //console.log("vxxx",strx)
//             for(let j=i;j<=i;j++){
//                 //let stry = str2[j]
//                 //console.log("yyyy",stry)
//                 if(str1[i] != str2[j]){
//                     let strx = str1[i]
//                     let stry = str2[j]
//                     console.log("yyyy",strx,stry)
//                 }
                
//             }
//         }
//         return str
//     }
// }
//   console.log(uncommonString (str1,str2))



//   // Online Javascript Editor for free
// // Write, Edit and Run your Javascript code using JS Online Compiler

// console.log("Welcome to Programiz!");

// // const arr1 = [
// //     {id: 1, name: 'a'},
// //     {id: 2, name: 'b'},
// //     {id: 3, name: 'c'},
// //     {id: 4, name: 'd'},
// //     {id: 5, name: 'e'}
// // ];
// // const arr2 = [
// //     { id: 5 },
// //     { id: 3 }
// // ]
// // const output = [
// //   { id: 5, name: 'e' },
// //   { id: 3, name: 'c' }
// // ]
// // // requirement : write a function that takes arr1 and arr2 as input params and returns the output that matches the output variable.

// // function myOutput (arr1,arr2){
// //     let output = []
// //     for(let i=0 ; i<arr1.length;i++){
// //         let newarr1=arr1[i].id
// //         console.log("newarr1",newarr1)
// //         for(let j=0; j< arr2.length;j++){
// //             let newarr2 = arr2[j].id
// //             console.log("newarr2",newarr2)
// //             if(newarr1==newarr2){
// //                 output.push(arr1[i])
// //             }
// //         }
// //     }
// //     return output

// // }
// // console.log(myOutput (arr1,arr2))




// // const promise1 = Promise.resolve(3);
// // const promise2 = 42;
// // const promise3 = new Promise((resolve, reject) => {
// // setTimeout(resolve, 100, 'foo');
// // })


// // let allPromise = Promise.all([promise1,promise2,promise3])

// // allPromise.then(function(response){
// //   console.log(response)
// //   //resolve(response)
// // }).catch(function (error){
// //     console.log(error)
// //   // reject(error)
// // })

// var input = "HERE IS THE RESULT"
// //output = "EREH SI EHT TLUSER"

// let output = ""
// //let output1 = input.split("").reverse('').join('')

// function reverseString(input){
//     for(let i =0 ;i<input.length;i++){
//         let output = input[i].split("").reverse('').join('')
//         //console.log(input[i])
//         console.log(output)
//     }
// }

// console.log(reverseString(input))





// // /student
// // /abc


// //let student = [name, student,age,address]


// let name = ["rohit","xyz","rohini","arohi"]
// let target = "ro"
// let newarr =[]
// name.filter(element=>{
//     if(element.startsWith(target)){
//        newarr.push(element)
//     }
// })

// console.log(newarr)


// select * from student where name like "_ro%"




// // let res = {
// //     status :error.status
// //     message: "inter"
// //     stacktrace:""
// // }

// // reject(res)

// let person = {
//     name:"rohit",
//     age:"27",
//     address:"patna"
// }

// let child = {
//     name:"abc",
//     age:"12"
// }
// function output(name,){
//     console.log("response",this.)
// }

// person.output.call(child)



// let person1 = {...person}
// console.log(person1.age=undefined)
// console.log(person1)



// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

// console.log("Welcome to Programiz!");

// const characters = [
//     {firstName: 'john', lastName: 'Doe', age: 55},
//     {firstName: 'bane', lastName: 'Doe', age: 30},
//     {firstName: 'aack', lastName: 'Doe', age: 35},
//     {firstName: 'cill', lastName: 'Doe', age: 40},
//     {firstName: 'doe', lastName: 'Doe', age: 15}
// ];

// characters.sort((a, b) => {
//   if (a.firstName < b.firstName) {
//     return -1;
//   }
//   if (a.firstName > b.firstName) {
//     return 1;
//   }
//   return 0;
// });


let users = [
    {firstName: 'john', age: 55},
    {firstName: 'bane', age: 30},
    {firstName: 'aack', age: 35},
    {firstName: 'cill', age: 40},
    {firstName: 'doe', age: 15}
]

let str = "smvdnvnfb"

let newstr = str.split('').sort().join("")
console.log(newstr)


users.sort((a,b)=> {
    return a.firstName > b.firstName ? 1 : -1
})

console.log(users)












// import { EventEmitter } from 'events';
// const eventEmitr = require("events");
// const eventEmitter = new EventEmitter();
 
// eventEmitr.on('myEvent', (data) => {
//      console.log(data);
// });
 


// async function myfunc(){
//     let delhiWeather = new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("21 aug")
//         },2000)
//     })
//     let bangWeather = new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("26 aug")
//         },2000)
//     })
    
//     let delhiW = await delhiWeather
//     let bangW =  await bangWeather
// }

// myfunc()
















// let request = {
//     name : 'PN',
//     rollNo : 24,
//     classDetail : {
//         language : 'English',
//         division : 'A',
//         location : {
//             city : 'Bangalore',      
//         }
//     }
// }
 
// function searchObj(obj, keyword){
//     let arr = Object.keys(obj)
//     let arr1 = Object.keys(obj.classDetail)
//   if(arr.includes(keyword) || arr1.includes(keyword)){
//       return false
//   }
//   else{
//       return true
//   }
//   //if( arr.includes(keyword.toString()) && )
// }
 
// console.log(searchObj (request, 'English')) // should return true
// console.log(searchObj (request, 'rollNo'))  // should return false  
 
// Requirement : write a logic in the function searchObj to search for the keyword(arg2) in the obj(arg1), it should only check with the values of the obj and not the keys, if found then should return boolean

























// const promise1 = Promise.resolve(3);
// const promise2 = 42;
// const promise3 = new Promise((resolve, reject) => {
// setTimeout(resolve, 100, 'foo');
// })


// Promise.all([promise1,promise2.promise3])
// .then(promise1Response=>{
//     let promise2 = promiseresponse2
//     promise2.then(promiseresponse2=>{
//         console.log(promiseresponse2)
//     })
// })

// let express = require('express')
// let app = express()
//    app.get('/')

// let request = require('request')
// function weather(lattitude,longiture){
// let optional = {
//     header : req
//     uri : "https://localhost:8080/getweather"
//     correlationId : "test"
//     queryString : 
// }
//     request(optional ,(err,res)=>{
//         if(err){
            
//         }
//         if(res.statuscode ==200){
//             let success={
//                 status:200,
//                 message: "successfully got result",
//                 correlatioId: "test"
//             }
//         }
//         return (success)
//     })
// }

// let promise1 = new Promise((resolve,reject)=>{
//     weather(lattitude,longtitude).then(response=>{
//         resolve(response)
//     })
// })
// let promise2 = new Promise((resolve,reject)=>{
//         console.log("promise2")
// })
// let promise3 = new Promise((resolve,reject)=>{
//         console.log("promise3")
    
// })

// Promise.all([promise1,promise2,promise3]).then((response)=>{
//     let JsonResponse={
//         newResponse : response
//     }
//     return JsonResponse
// }).catch()