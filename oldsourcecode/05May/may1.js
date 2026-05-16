// // Online Javascript Editor for free
// // Write, Edit and Run your Javascript code using JS Online Compiler

// console.log("Welcome to Programiz!");

// let radius = [1,2,3,4]

// //calculate area 

// function area(radius){
//     let output=[]
//     for(let i=0;i<radius.length;i++){
//         output.push(Math.PI * radius[i]*radius[i])
//     }
//     return output
// }

// function diameter(radius){
//     let output1=[]
//     for(let i=0;i<radius.length;i++){
//         output1.push(2 * Math.PI * radius[i])
//     }
//     return output1
// }
// console.log(area(radius))
// console.log(diameter(radius))

// //===========================high oder function

// function diameter1(radius){
//     return (2 * Math.PI * radius)
// }
// function area1(radius){
//     return (Math.PI * radius*radius)
// }

// function calculate(radius,logic){
//     let output=[]
//     for(let i=0;i<radius.length;i++){
//         output.push(logic(radius[i]))
//     }
//     return output
// }
// console.log(calculate(radius,diameter1))
// console.log(calculate(radius,area1))


// var array = [1, 2, 3, 4, 5]
// for(let i = 0; i < array.length; i++) {
//   setTimeout(() => {
//     console.log(array[i])
//   }, 1000);
// }


// // // Online Javascript Editor for free
// // // Write, Edit and Run your Javascript code using JS Online Compiler

// // console.log("Welcome to Programiz!");
// // // Online Javascript Editor for free
// // // Write, Edit and Run your Javascript code using JS Online Compiler


// // let radius = [1,2,3,4]

// // //calculate area 

// // function area(radius){
// //     let output=[]
// //     for(let i=0;i<radius.length;i++){
// //         output.push(Math.PI * radius[i]*radius[i])
// //     }
// //     return output
// // }

// // function diameter(radius){
// //     let output1=[]
// //     for(let i=0;i<radius.length;i++){
// //         output1.push(2 * Math.PI * radius[i])
// //     }
// //     return output1
// // }
// // console.log(area(radius))
// // console.log(diameter(radius))

// // //===========================high oder function

// // const diameter1 = function(radius){
// //     return 2 * Math.PI * radius
// // }
// // const area1 = function(radius){
// //     return Math.PI * radius*radius
// // }

// // function calculate(radius,logic){
// //     let output=[]
// //     for(let i=0;i<radius.length;i++){
// //         output.push(logic(radius[i]))
// //     }
// //     return output
// // }
// // console.log(calculate(radius,diameter1))
// // console.log(calculate(radius,area1))

// const users = [
//     {firstName: 'John', lastName: 'Doe', age: 25},
//     {firstName: 'Jane', lastName: 'Doe', age: 30},
//     {firstName: 'Jack', lastName: 'Doe', age: 35},
//     {firstName: 'Jill', lastName: 'Doe', age: 40},
//     {firstName: 'Joe', lastName: 'Doe', age: 45},
// ]

// users.map(element=>{console.log(element.firstName + " " + element.lastName)})

// let numbers = [5, 20, 100, 60, 1];

// let maxvalue = numbers.reduce((curr,max)=>{
//     if(curr > max){
//         max = curr
//     }
//     return max
// },0)
// console.log(maxvalue)






// let printName = function(hometown,village){
//     console.log(this.firstname + " " + this.lastname + " lives in "+ hometown + " at exact loc " + village )
// }

// let name = {
//     firstname :  "Rohit",
//     lastname : "Jaiswal"
// }

// let name2 = {
//     firstname :  "Garima",
//     lastname : "Mishra"
// }

// printName.call(name,"Patna","mahua")
// printName.apply(name,["Patna","mahua"])
// let printBindName = printName.bind(name,"Patna","mahua")
// printBindName()



// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

// console.log("Welcome to Programiz!");

// const a = [1,2,3,4];
// const b = a
// b[1] = 200;
// const c = Object.freeze(b);
// c[3] = 400;
// console.log(a); //  [1,2,3,4];
// console.log(b);  //  [1,200,3,4];
// console.log(c);

// function print() {
//  console.log(this); // window
// }

// let print2 = () => { 
//  console.log(this); // error
// }

// print();
// print2();



//let num = 10098643
// function even_digits(num) {
//   var ctr = 0;
//   while (num) {
//     console.log(ctr += num % 2 === 0)
//     ctr += num % 2 === 0;
//     console.log("ctr=====",ctr);
//     num = Math.floor(num / 10);
//      console.log("Num=====",num);
//   }
//   return ctr;
// }

// // console.log(even_digits(123));
// // console.log(even_digits(1020));
// console.log(even_digits(10098643));



// const words=["dog", "cat", "bubble", "rocket", "ball", "dish"]

// const str1="dfbgerniuceonlfkcmscsd";


// const findWord = (words, str)=>{
// // Write your code here	

//   words.forEach(element=>{
//   		let splitelement= element.split("")
//   		let myarr=[]
//   		let finalarr = []
//   		let arr = []
//   		splitelement.forEach(newele=>{
//   		if(str.includes(newele) && !arr.includes(newele)){
//   		      arr.push(newele)
//   		  }
//   		  finalarr = arr.join("")
//   		  	if(element == finalarr){
//   		      myarr.push(finalarr)
//   		  }
//   		})
//   		console.log(myarr,myarr.includes(element))
//   		if(myarr.includes(element)){
//   		    return element
//   		}
//   		// console.log(element == finalarr)
//      // console.log(splitelement)
//   })
// }

// console.log(findWord(words, str1))




const words=["dog", "cat", "bubble", "rocket", "ball", "dish"]


const str1="dfbgerniuceonlfkcmscsd";
const str2="weoaiujciomeuihrotijgr";
const str3="ppqoeilpijfueuwbhfwojwiehoifw";
const str4="oeirjmcoeuhijekpfo";
const str5="wefuohijcouerhojeoheorj";
const str6="klsgdhjjskedjcklsdhcjklfdbhdfukjjjhlk"


var array = [ 'cat','rat','mat','cat','rat','cat']

let n = array.length
function myfun(arr){
    let obj = []
    for(let i = 0; i< n ; i++){
        if(obj.hasOwnProperty(arr[i])){
            obj[arr[i]] += 1
        }
        else{
             obj[arr[i]]  = 1
        }
    }
    return obj
}

console.log(myfun(array))




// // Write a function to return first word from the array that is present in the string. 
// // Characters in the word can be jumbled up and scattered around
// // For Ex. the word 'cat' is present in the first string because characters 'c', 'a' and 't' are present in the string.

// const findWord = (words, str)=>{
// // Write your code here	

//   words.forEach(element=>{
//   		let splitelement= element.split("")
//       console.log(splitelement)
//   })

	
// }

// console.log(findWord(words, str1)); // Should return 'dog'
// console.log(findWord(words, str2)); // Should return 'cat'
// console.log(findWord(words, str3)); // Should return null or false or none
// console.log(findWord(words, str4)); // Should return null or false or none
// console.log(findWord(words, str5)); // Should return null or false or none
// console.log(findWord(words, str6)); // Should return null or false or none