// Approaches to count the occurrences of each character

function countOccurenrce(str){
    let obj = {}
    for(let i = 0 ; i < str.length ;i++){
        let count = str.charAt(i)
        if(!obj[count]){
            obj[count] = 1
        }
        else{
            obj[count] +=1
        }
    }
    return obj
}
// Sample array
var myArray = [1, 2, 3, 4, 5];

// Convert array to JSON
var jsonArray = JSON.stringify(myArray);

// Output JSON
console.log(jsonArray);

function useReduceApproch(str){
    let strArray = str.split("")
    let result = strArray.reduce((chars,ch)=>{
        if(!chars[ch]){
            chars[ch] = 1
        }
        else{
            chars[ch] +=1
        }
        return chars
    },[])
    return result
}

let str = "dmfkgjnrmfdnkrthnmbkgr"
console.log(countOccurenrce(str))
console.log(useReduceApproch(str))