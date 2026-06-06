/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    const m = grid.length
    const n = grid[0].length
    let paths = Array(n).fill(0)
    paths[0] = grid[0][0]
    for(let j = 0 ;j<n;j++){
        paths[j]= paths[j-1] +  grid[0][j]
    }
    for(let i =1;i<m;i++){
        paths[0] += grid[i][0]
        for(let j =1;j<n;j++){
            paths[j] = Math.min(paths[j],paths[j-1]) +grid[i][j]
        }
    }
    return paths[n-1]
};