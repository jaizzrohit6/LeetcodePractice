//method one 

function mergeSortedArray(arr1,arr2){
    let i = 0
    let j = 0
    let result = []
    while(i <arr1.length && j< arr2.length){
        if(arr1[i] <= arr2[j]){
            // result.push(arr1[i])
            // i++
            //instead od this use 
            result.push(arr1[i++])
        }else{
            // result.push(arr2[j])
            // j++
            result.push(arr2[j++])
        }
    }
    // while(i <arr1.length) result.push(arr1[i++])
    // while(j < arr2.length) result.push(arr2[j++])
    //instead od this you can use spread operator
    result.push(...arr1.slice(i))
    result.push(...arr2.slice(j))
    return result
}

let arr1 = [1,2,3]
let arr2 = [2,3,4,5,6,7]
console.log(mergeSortedArray(arr1,arr2))
//output [1,2,2,3,3,4,5,6,7]