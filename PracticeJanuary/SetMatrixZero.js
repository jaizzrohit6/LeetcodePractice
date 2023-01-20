/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 //thought  
 var setZeroes = function(matrix) {
    let queue = []
    for(let i = 0 ; i < matrix.length ;i++){
        for(let j = 0 ; j <  matrix[0].length ; j++ ){
            if(matrix[i][j] == 0){
                queue.push([i,j])
            }
        }
    }
    while(queue.length){
        let [row,col] = queue.shift()
        console.log(row,col)
        for(let i = 0 ; i < matrix.length ; i++){
            matrix[i][col] = 0 
        }
        for(let j = 0 ; j < matrix.length ; j++){
            matrix[row][j] = 0 
        }
    }
    console.log("matrix:::::::::",matrix)
};

let matrix = [[1,0,1],[1,0,1],[1,1,1]]
console.log("jhgndbchfbv::::::::::::",setZeroes(matrix))
