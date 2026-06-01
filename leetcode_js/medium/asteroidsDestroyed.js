/**
 * @param {number} mass
 * @param {number[]} asteroids
 * @return {boolean}
 */
var asteroidsDestroyed = function(mass, asteroids) {
    asteroids.sort((a,b)=>a-b)
    let destroyed = false
    for(let i = 0 ;i< asteroids.length;i++){
        if(mass >= asteroids[i]){
            mass+=asteroids[i]
            destroyed = true
        }else{
            destroyed = false
            return destroyed
        }
    }
    return destroyed
};