let arr1 = [1,2,3,4]
let arr2 = [8,6,7,8]

//output [1,2,3,4,5,6,7,8]


function mergeArray(arr1,arr2){
    let newArr= []
    // newArr.push(arr1)
    for(let i = 0 ; i< arr1.length;i++){
       newArr.push(arr1[i])
    }
    if(newArr.length = arr1.length){
        newArr.push(...arr2)
    }
    return newArr
}
console.log(mergeArray(arr1,arr2))