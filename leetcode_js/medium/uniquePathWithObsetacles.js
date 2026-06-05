/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    const m = obstacleGrid.length //row
    const n = obstacleGrid[0].length  //column
    if(obstacleGrid[0][0] === 1) return 0
    let paths = Array(n).fill(0)
    paths[0] =1
    for(let j = 1;j<n;j++){
        paths[j] = obstacleGrid[0][j] === 1 ? 0 : paths[j-1]
    }
    for(let i = 1;i<m;i++){
        if (obstacleGrid[i][0] === 1) paths[0] = 0;
        for(let j=1;j<n;j++){
            if(obstacleGrid[i][j] === 1)  paths[j] = 0
            else{
                paths[j]+=paths[j-1]
            }
        }
    }
    return paths[n-1]
};