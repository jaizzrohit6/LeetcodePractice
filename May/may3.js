const promise = new Promise(function(resolve,reject){
    let str1 = "rohitjaiswal"
    let str2 = "rohitjaiswal"
    if(str1===str2){
        resolve()
    }
    else{
        reject()
    }
})
promise.then(function(){
   console.log("successfully response") 
}).catch(function(){
    console.log("error::::::")
})


//=========================================================

const helperPromise = function(){
    const promise = new Promise(function (resolve,reject){
        let str1 = "rohitjaiswal"
        let str2 = "rohitjaiswal"
        if(str1===str2){
            resolve("successfull")
        }
        else{
            reject("error")
        }
    })
    return promise
}

async function demopromise(){
    try{
        let message = await helperPromise()
        console.log(message)
    }
    catch(error){
        console.log(error)
    }
}

demopromise()