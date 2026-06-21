

function maxIcecream(costs,coins){
    costs.sort((a,b)=> a-b)
    console.log(costs)
    let count = 0
    for(let cost of costs){
        if(coins >= cost){
            coins -= cost
            count++
        }
        else{
            break
        }
    }
    return count
}
let costs = [1,3,2,4,1] 
let coins = 7

console.log(maxIcecream(costs,coins))