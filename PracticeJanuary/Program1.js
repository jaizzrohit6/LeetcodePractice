//let item = [4,5,7,3,1,2]
let item = [[4,5],[3,7],[1,2]]
 item.sort((a,b)=>a[0]-b[0])

 //let item1 = [[4,5],[7,3],[1,2]]
 let newitem = [ [ 1, 3 ],
 [ 2, 4 ],
 [ 3, 5 ],
 [ 7, 9 ] ]
 newitem.sort((a,b)=>a[0]-b[0])
 //console.log("a::::::::",item,newitem)

 const numbers = [4, 5, 1, 3, 8,9];
const sorted = numbers.sort((a, b) => a - b);
// numbers and sorted are both [1, 1, 3, 4, 5]
sorted[0] = 10;
console.log(numbers[0]); // 10

let itemnw = [4,5,1,3,1,2]
//const sorted = itemnw.sort((a,b)=>a-b)
//console.log("itemnw::",itemnw,sorted[0])
// const items = [
//     { name: "Edward", value: 21 },
//     { name: "Sharpe", value: 37 },
//     { name: "And", value: 45 },
//     { name: "The", value: -12 },
//     { name: "Magnetic", value: 13 },
//     { name: "Zeros", value: 37 },
//   ];

//   items.sort((a,b)=>a.value - b.value)
//   console.log("items",items)

  //on the basis of name 
//   items.sort((a,b)=>{
//     let Aname = a.name.toUpperCase()
//     let Bname = b.name.toUpperCase()

//     if(Aname < Bname){
//         return -1
//     }
//     if(Aname > Bname ){
//         return 1
//     }

//     //names equal to zero 
//     return 0
//   })

  //console.log("items::::::",items)

