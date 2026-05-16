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


// let arr1 = [2,3,5,6,8]
// let arr2 = [1,4,7,8,9]
console.log(mergeTwoSorted(arr1,arr2))


function mergeTwoSorted(arr1,arr2){
    let alen = arr1.length
    let blen = arr2.length
    let arr3 = new Array(alen + blen)
    let i = j =k = 0
    while(i < alen && j < blen){
        if(arr1[i] < arr2[j]){
            arr3[k++] = arr1[i++]
        }
        else{
            arr3[k++] = arr2[j++]
        }
    }
    while(i < alen ){
         arr3[k++] = arr1[i++]
    }
    while(j < blen){
        arr3[k++] = arr2[j++]
    }
    
    return [...new Set(arr3)]
}




