/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    candidates.sort((a,b) => a - b)
    const result = []
    const current = []

    const backtracking = (start,remaining) => {
        if(remaining === 0){
            return result.push([...current])
        }
        for(let i = start ; i < candidates.length ;i++){
            if(candidates[i] > remaining) break
            current.push(candidates[i])
            backtracking(i,remaining - candidates[i])
            current.pop()
        }
    }
    backtracking(0,target)
    return result 
};