let arr = [1,2,3,4,5,"4","12","2",6,7,"4",3,"2", 1.1, 2.2]

//
//console.log(typeof(1.1))

// function task(arr){
//     let newArr= []
//     //console.log(typeOf(1))
//     arr.filter(element=>{
//         if(Number.isInteger(element) == true ){
//             newArr.push(element)
//         }
//     })
//     return newArr
// }

//  console.log(task(arr))



// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

// console.log("Welcome to Programiz!");

// var obj = [
//     { 'name': 'P1', 'value': 150 },
//     { 'name': 'P1', 'value': 150 },
//     { 'name': 'P2', 'value': 200 },
//     { 'name': 'P3', 'value': 450 }
// ];

// var holder = {};

// obj.forEach(function(d) {
//   if (holder.hasOwnProperty(d.name)) {
//     holder[d.name] = holder[d.name] + d.value;
//   } else {
//     holder[d.name] = d.value;
//   }
// });

// var obj2 = [];

// for (var prop in holder) {
//   obj2.push({ name: prop, value: holder[prop] });
// }

// console.log(obj2);


// const arr = [ { 'name': 'P1', 'value': 150 }, { 'name': 'P1', 'value': 150 }, { 'name': 'P2', 'value': 200 }, { 'name': 'P3', 'value': 450 } ];

// const res = Array.from(arr.reduce(
//   (m, {name, value}) => m.set(name, (m.get(name) || 0) + value), new Map
// ), ([name, value]) => ({name, value}));
// console.log(res);







// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler


// function a(){
//     let emp = {name:pruthvi,age;30}
//     console.log(emp);
//     b(emp);
//     console.log(emp);
//     }
    
//     funciton b(arg){
//     arg.age = 32;
//     console.log(arg)
//     }
    



const a = {
    "name":"rohit",
    "age":"27"
}

a.name = "rohit sharma"



const a = new Promise((resolve, reject) => {
  resolve('Success a')
})
const b = new Promise((resolve, reject) => {
  resolve('success b')
})
const c = new Promise((resolve, reject) => {
  reject('Error c')
})
const d = new Promise((resolve, reject) => {
  resolve('success d')
})







// let list1 = [1,2,3,4,5,6,7,8,9,10]

//     //Split_Value = 3
//   {a,b,c} = [...list]
    
//     console.log(a,b,c)


// (function(){
//   var a = b = 3;
// })();
// console.log("a defined? " + (typeof a !== 'undefined'));
// console.log("b defined? " + (typeof b !== 'undefined'));

  //let newarr = List1[..a,...b,...c,...d]
    //Output (Split Like this) =  [[1,2,3],[4,5,6],[7,8,9],[10]]




// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

// console.log("Welcome to Programiz!");

// console.log('start')
// const fn = () => (new Promise((resolve, reject) => {
//   console.log(1);
//   resolve('success')
// }))
// console.log('middle')
// fn().then(res => {
//   console.log(res)
// })
// console.log('end')

// function asyncTask() {
//     return functionA()
//         .then((valueA) => functionB(valueA))
//         .then((valueB) => functionC(valueB))
//         .then((valueC) => functionD(valueC))
//         .catch((err) => logger.error(err))
// }

// async function asyncTask(){
//     return await functionA(valueA){
        
//     } 
// }


