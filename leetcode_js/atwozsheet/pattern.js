
//==================================================Pattern 1=================================================

// ****
// ****
// ****
// ****

function pattern1(n) {
    let pattern = "";
     for(let i = 0; i< n; i++){
            for(let j =0 ; j< n ;j++){
                pattern += "*"
            }
            pattern += "\n"
        }
    console.log(pattern)
}

pattern1(4)

//=================================================Pattern 2=================================================   

// *
// **
// ***
// ****

function pattern2(n) {
    let row = "";
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            row += "*";        // build the row string first
        }
        row+= "\n"      // print the whole row at once
    }
    console.log(row)
}
pattern2(4)

//=================================================Pattern 3=================================================

// ****
// ***
// **
// *

function pattern3(n) {
    let row = "";
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n-i; j++) {
            row += "*";        // build the row string first
        }
        row+= "\n"      // print the whole row at once
    }
    console.log(row)
}

function pattern32(n) {
    let row = "";
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n-i; j++) {
            row += j;        // build the row string first
        }
        row+= "\n"      // print the whole row at once
    }
    console.log(row)
}
pattern3(4)
pattern3(4)

//=================================================Pattern 4=================================================

//    *
//   ***
//  *****
// *******

function pattern4(n) {}