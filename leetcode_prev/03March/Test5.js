// let createHelloWorld = function() {
//     return function(...args) {
//         return "Hello World"
//     }
// };


// const f = createHelloWorld();
// console.log(f()); // "Hello World"

/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    let counter = n
    return function() {
        return counter++
    };
};

const counter = createCounter(10)
counter() // 10
counter() // 11
counter() // 12


/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    return {
        toBe : function(expected){
            if(val !== expected){
                throw new Error("Not Equal") 
            }
            return true
        },
        notToBe : function(expected){
            if(val == expected){
                throw new Error("Equal") 
            }
            return true
        }
    }
    
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */