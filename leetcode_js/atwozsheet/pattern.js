function pattern(n) {
     for(let i = 0; i< n; i++){
            for(let j =0 ; j< n ;j++){
                pattern += "*"
            }
            pattern += "\n"
        }
    console.log(pattern)
}



pattern(4)