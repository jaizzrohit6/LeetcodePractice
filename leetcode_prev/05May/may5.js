// // // Online Javascript Editor for free
// // // Write, Edit and Run your Javascript code using JS Online Compiler

// // console.log("Welcome to Programiz!");

// // let n1 = arr1.length
// // let n2 = arr2.length

// // let arr1 = [1,2,3,4]
// // let arr2 = [4,5,6,7]
// // let arr3 = 
// // function mergesort(arr1,arr2,n1,n2,arr3){
// //     let i = 0 , j=0 ,k =0
// //     while(i < n1 && j < n2){
// //         if(arr1[i] < arr2[j]){
// //             arr3[k++] = arr2[j++]
// //         }else{
// //             arr3[k++] = arr1[i++]
// //         }
// //     while(i<n1){
// //         arr3[k++] = arr2[j++]
// //     }
// //     while(j<n2){
// //         arr[k++] = 
// //     }
        
        
// //     }
// // }



// let, const, var

// -----------------

// function print() {
//    var a = 2000;
//    let b = 100;
//    const c = 150;
// }


// print();

// console.log(a); // 2000
// console.log(b); // error
// console.log(c); // error

// -------------------
  
// const a = [1,2,3,4];


// const b = a;
// b[1] = 200;
// console.log(a); //  [1,2,3,4];
// console.log(b);  //  [1,200,3,4];

// ----------------------------

// function print() {
//  console.log(this); // window
// }

// let print2 = () => { 
//  console.log(this); // error
// }

// print();
// print2();

// --------------------------

// const num = 10098643;

// // Even Digits: 5



// function evenDigit(num){
//   let evenCount = 0
//   if(num/10 == 0 ){
//      evencount++
//   }
// }




// var flower = { lily : 1};
// var output = (function() {  
// 	delete flower.lily;  
// 	return flower.lily;})
// ();

// console.log(output);
 
 
var flower = { lily : 1};
var output = (function() {  
	delete flower.lily; 
	return flower.lily;}
	())

console.log(output);




let arr = [ 4,3,6,3,8,4,7,2,0,1,5,4]


let newarr = new Set(arr)
//console.log(newarr)
function arraySort(newarr){
    for(let i = 0 ; i< newarr.length ; i++){
        let temp=[]
        if(newarr[i] > newarr[i+1]){
            temp  = newarr[i]
            newarr[i] = newarr[i+1]
            newarr[i+1] = temp
        }
    }
    return newarr
}
console.log(arraySort(newarr))



console.log('one');
settimeout(function(){
  console.log('two');
}, 0)
console.log('three');



 
 
 
 





//input = [2,7,11,16], output = 18
//let arr = [2,7,11,16]
let target = 18

function findSum(arr,target){
    let final = new Set()
    for(let i = 0 ; i< arr.length ; i++){
        let y = target - arr[i]  // 18 - 
        
        if(final.has(y)){
            console.log(arr[i],y)
        }
        final.add(arr[i])
    }
    return final
}

console.log(findSum(arr,target))



















































