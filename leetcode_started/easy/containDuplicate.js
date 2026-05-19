function containsDuplicate(nums) {
    let obj = {}
    for(const num of nums){
        if(obj[num] !== undefined){
            obj[num] += 1
        }else{
            obj[num] = 1
        }
    }
    console.log(obj)
    for(const key of Object.keys(obj)){
        console.log(key)
        if(obj[key]>1){
            return true
        }
    }
    return false
};

const nums = [2,14,18,22,22]
console.log(containsDuplicate(nums))