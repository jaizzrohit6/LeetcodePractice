// api url
// const api_url =
// 	"https://employeedetails.free.beeceptor.com/my/api/path";
// // Defining async function
// async function getapi(url) {
// 	// Storing response
// 	const response = await fetch(url);
// 	// Storing data in form of JSON
// 	var data = await response.json();
// 	console.log(data);
// 	if (response) {
// 		hideloader();
// 	}
// 	show(data);
// }
// // Calling that async function
// getapi(api_url);




// let express = require('express')
// let app = express()

// app.listen(3000,()=>{
//     console.log("applisten to 3000 port")
// })

// app.get("/url",(req,res,next)=>{
//     res.json(["abc","cde","rohit","nmmbdfm"])
// })



// // Function to hide the loader
// function hideloader() {
// 	document.getElementById('loading').style.display = 'none';
// }
// // Function to define innerHTML for HTML table
// function show(data) {
// 	let tab =
// 		`<tr>
// 		<th>Name</th>
// 		<th>Office</th>
// 		<th>Position</th>
// 		<th>Salary</th>
// 		</tr>`;

// 	// Loop to access all rows
// 	for (let r of data.list) {
// 		tab += `<tr>
// 	<td>${r.name} </td>
// 	<td>${r.office}</td>
// 	<td>${r.position}</td>
// 	<td>${r.salary}</td>		
// </tr>`;
// 	}
// 	// Setting innerHTML as tab variable
// 	document.getElementById("employees").innerHTML = tab;
// }



//let arr =["rohit","raj","jai","jpu","jcu"]

function restTest(name1,name2,...other){
    return other
}

console.log(restTest("rohit","raj","jai","jpu","jcu"))

function restTest2(name1,name2,other){
    return `${name1} ${name2} run ${other}`
}

console.log(restTest2(...["rohit","raj","jai"]))




















// var express = require(‘require’)
// var app = express()
// var requestTime = function (req, res, next)
// {
// req.requestTime = Date.now()
// next()
// }
// app.use(requestTime)
// app.get (‘/’, function (req, res) {
// var responseText = ‘Hi Familly!<br>’
// responseText += ‘<small>Requested at: ‘+req.requestTime + ‘</small>’
// res.send (responseText)
// })
// app.listen(3000)













// function Proto() {
//   this.name = 'Proto'
//   return this;
// }

// Proto.prototype.getName = function() {
//   return this.name
// }

// class MyClass extends Proto {
//   constructor() {
//     super()
//     this.name = 'MyClass'
//   }
// }

// const instance = new MyClass()

// console.log("1st console",instance.getName())

// Proto.prototype.getName = function() { return 'Overridden in Proto' }

// console.log("2nd console",instance.getName())

// MyClass.prototype.getName = function() { return 'Overridden in MyClass' }
// console.log("3rd console",instance.getName())

// instance.getName = function() { return 'Overridden in instance' }


// console.log(instance.getName())





// Ar Rahman" won "Oscar (2011)" for "best_original_score" and "music_director".

// person Table
// =======================
// pid name , critegiya basic info
// person  



// pid instution  year 
// oscar 
// abc 
// xyc



// award  table 
// =============================
// id  
// award categories
// year held 
// institution id 











//func(12, (err, data)=> {// do something.});

func(12).then().catch()

function func(number,callback){
    let response , err 
    console.log(number)
    if(number > 12 ){
         response = "success"
    }
    else{
        err = "failure"
    }
    return callback(err,response)
}

function mycallback(err,data){
    if(err){
        console.log(err)
        return err
    } 
    else{
        return data
    }
}


function func1(numb){
    return new Promise((resolve,reject)=>{
        func(numb,mycallback)
    })
}

func1().then(response=>{
    console.log(response)
}).catch(err=>{
    console.log(err)
})

//console.log(func(10,func1))

function flat(arr, depth = 1) {
  if (depth < 1) {
    return arr.slice();
  }

  return arr.reduce((result, current) => {
    if (Array.isArray(current)) {
      result.push(...flat(current, depth - 1));
    } else {
      result.push(current);
    }
    return result;
  }, []);
}

// Example usage:
const nestedArray = [1, [2, [3, 4], 5], 6];
const flattenedArray = flat(nestedArray);
console.log(flattenedArray);
// Output: [1, 2, [3, 4], 5, 6]




// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

console.log("Welcome to Programiz!");

// let arr = [1,2,3, 4, 5,5,5,5,'HELLO', 'HELLO',1,2,3, 4, 5,5,5,5,'HELLO','HELLO']


// function removeDup(arr){
//     let newarr = []
//     arr.filter(element=>{
//         if(!newarr.includes(element)){
//             newarr.push(element)
//         }
//     })
//     return newarr
// }








const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
setTimeout(resolve, 100, 'foo');
})


Promise.all([promise1,promise2,promise3]).then(response=>{
    console.log(response)
}).catch(error=>{
    console.log(error)
})




















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
    
//     Object.entries(obj).filter(element=>{
//         console.log("element==",element)
//         if(element.includes(keyword)){
//             return true 
//         }
//     })
// }

//  searchObj (request, 'English') // should return true
// // searchObj (request, 'rollNo')  // should return false  



// export function stack( stackOperation, stackValue ) {
//     var stackHolder = {
//    count: 3,
//    storage : [
//      1,
//      '{id: 1,value: "obj"}',
//      "stringHolder",
//      46
//    ]
//  };
 
//  var push = function(value) {
//    stackHolder.count = 4
//    stackHolder.storage[stackHolder.count] = value;
//    return stackHolder.storage;
//  }
 
//  var pop = function() {
//    if (stackHolder.count === 0) {
//      return [];
//    }	
//    var poppedItem = stackHolder.storage[stackHolder.count];
//    delete stackHolder.storage[stackHolder.count];
//    stackHolder.count--;
//    return poppedItem;
//  }
 
//  var peek = function() {
//    return [stackHolder.storage[0]];
//  }
 
//  var swap = function() {
//    console.log("swaping::::",stackHolder.storage)
//    // let temp
//    // let temp1 = stackHolder.storage[0]
//    // let temp2 = stackHolder.storage[1]
//    // temp 
//    return stackHolder.storage;
//  }
 
//  switch(stackOperation) {
//    case 'push':
//      return push(stackValue);
//    case 'pop':
//      return pop();
//    case 'swap':
//      return swap();
//    case 'peek':
//      return peek();
//    default:
//      return stackHolder.storage;
//  }
// }







// Function abc(input,callback){
// 	//some operation
//   callback()
// }

// Function mycallback(){
// //logic
// }

// abc(input,mycallback)


// multiply(5)(6) = 30

// console.log(console.log(start)
// setTimeout(()=>{
// console.log(b)
// },0)
// setTimeout(()=>{
// console.log(a)},2000)

// end)



// Function multiply(input1){

// 	Function multiply(input2){
// 	Return input1*input2
// }
// }














// Customer Table


// Order Table





// Write a SQL Join query to get the details of customers who have made an order

// Select c.name ,o.id ,o.date from customer c inner  join order o where o.customerid = c.id






// Entities : {
// 	Student: [ 
// {id: 11, name: Pratham, Addr: Pune},
//     	{id: 22, name:: Savya,, Addr:: Nanded}
//    ],
// Subject: [	
// 			{id: 33, name: DataStructures, teacher: MKP},
// {id: 44, name: Algorithms, teacher: NP}  
//   ],
// Exam:	[	
// 		{id: 55, name: DataStructures, type: Viva},
// {id: 66, name: ProjectMgmt, type: MCQ}
// ]
// }

// Write a function that takes the above object as input and returns an object that maps of all the Ids as keys and the corresponding object as value of the object 

// I.e.
// Expected Output : 
// {
// 	11 : {id: 11, name: Pratham, Addr: Pune},
// 	22: {id: 22, name:: Savya,, Addr:: Nanded},
// 	33: {id: 33, name: DataStructures, teacher: MKP},
// 44: {id: 44, name: Algorithms, teacher: NP},  

}










// console.log(removeDup(arr))

// function printname(name){
//     for(let i=1; i<5;i++){
//         setTimeout(()=>{
//             //console.log(i)
//             console.log(name)
//         },5000*i)
//     }
// }
// printname("rohit")





// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
//flat
console.log("Welcome to Programiz!");

 let a = [1,2,3,[4,[5,6]]]
 
 console.log(a.flat())
// let [x,y] = [...a]
// console.log(x,y)




// async function run() {
//   console.log('hello');
//   await sleep(500);
//   console.log('world');
// }

// function sleep(timer){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//           resolve() 
//         },timer)
//     })
// }
// run()










// const arr = [1,5,7,8,4,3]

// let target = 9
// function myTest(arr){
//     let newarr =[]
//     for(let i =0 ; i< arr.length;i++){
//         for(let j = i +1; j< arr.length ; j++){
//             if(arr[i] + arr[j] == target){
//                 newarr.push(arr[i],arr[j])
//             }
//         }
//     }
//     return newarr
// }

// console.log(myTest(arr))

















// console.log('Start');

// // Using setInterval
// const intervalId = setInterval(() => {
// console.log('Interval: Executing after 1 second');
// }, 1000);

// // Using setImmediate
// setImmediate(() => {
// console.log('Immediate: Executing immediately');
// });

// // Using process.nextTick
// process.nextTick(() => {
// console.log('Next Tick: Executing on the next iteration of the event loop');
// });

// // Stopping the setInterval after 5 seconds
// setTimeout(() => {
// clearInterval(intervalId);
// console.log('Interval: Stopped');
// }
// , 5000);

// console.log('End');





// start 
// end
// Next Tick: Executing on the next iteration of the event loop
// Immediate: Executing immediately
// Interval: Executing after 1 second















// //get the total amount (salary+bonus) of all the employees of sales department
// const employees = [{
//     name: "John1",
//     salary: 1000,
//     bonus: 100,
//     department: "IT"
// },{
//     name: "John2",
//     salary: 1500,
//     bonus: 100,
//     department: "SALES"
// },{
//     name: "John3",
//     salary: 1800,
//     bonus: 100,
//     department: "SALES"
// },{
//     name: "John4",
//     salary: 5000,
//     bonus: 100,
//     department: "IT"
// },{
//     name: "John5",
//     salary: 7000,
//     bonus: 100,
//     department: "IT"
// }]

// let getsal = function (employees){
//     let newarr = []
//     let finalres= []
//     employees.filter(element=>{
//         if(element.department == "SALES"){
//              newarr.push(element.salary + element.bonus) 
//         }
//         //newarr
//     })
//     return newarr
// }

// console.log(getsal(employees))




