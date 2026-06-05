/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    let paths = Array.from({ length: m }, () => Array(n).fill(1));
    for(let i = 0;i<m;i++){
        paths[i][0] = 1
    }
    for(let j = 0 ; j<n;j++){
        paths[0][j] = 1
    }
    for(let i = 1;i<m;i++){
        for(let j =1;j<n;j++){
            paths[i][j] = paths[i-1][j] + paths[i][j-1]
        }
    }
    return paths[m-1][n-1]

    //soln two

    let row = new Array(n).fill(1)

    for(let i =1;i<m;i++){
        for(let j =1;j<n;j++){
            row[j]+=row[j-1]
        }
    }
    return row[n-1]
};