// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

console.log("Welcome to Programiz!");

let radius = [1,2,3,4]

//calculate area 

function area(radius){
    let output=[]
    for(let i=0;i<radius.length;i++){
        output.push(Math.PI * radius[i]*radius[i])
    }
    return output
}

function diameter(radius){
    let output1=[]
    for(let i=0;i<radius.length;i++){
        output1.push(2 * Math.PI * radius[i])
    }
    return output1
}
console.log(area(radius))
console.log(diameter(radius))

//===========================high oder function

function diameter1(radius){
    return (2 * Math.PI * radius)
}
function area1(radius){
    return (Math.PI * radius*radius)
}

function calculate(radius,logic){
    let output=[]
    for(let i=0;i<radius.length;i++){
        output.push(logic(radius[i]))
    }
    return output
}
console.log(calculate(radius,diameter1))
console.log(calculate(radius,area1))



// // Online Javascript Editor for free
// // Write, Edit and Run your Javascript code using JS Online Compiler

// console.log("Welcome to Programiz!");
// // Online Javascript Editor for free
// // Write, Edit and Run your Javascript code using JS Online Compiler


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

// const diameter1 = function(radius){
//     return 2 * Math.PI * radius
// }
// const area1 = function(radius){
//     return Math.PI * radius*radius
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

const users = [
    {firstName: 'John', lastName: 'Doe', age: 25},
    {firstName: 'Jane', lastName: 'Doe', age: 30},
    {firstName: 'Jack', lastName: 'Doe', age: 35},
    {firstName: 'Jill', lastName: 'Doe', age: 40},
    {firstName: 'Joe', lastName: 'Doe', age: 45},
]

users.map(element=>{console.log(element.firstName + " " + element.lastName)})

let numbers = [5, 20, 100, 60, 1];

let maxvalue = numbers.reduce((curr,max)=>{
    if(curr > max){
        max = curr
    }
    return max
},0)
console.log(maxvalue)






let printName = function(hometown,village){
    console.log(this.firstname + " " + this.lastname + " lives in "+ hometown + " at exact loc " + village )
}

let name = {
    firstname :  "Rohit",
    lastname : "Jaiswal"
}

let name2 = {
    firstname :  "Garima",
    lastname : "Mishra"
}

printName.call(name,"Patna","mahua")
printName.apply(name,["Patna","mahua"])
let printBindName = printName.bind(name,"Patna","mahua")
printBindName()



