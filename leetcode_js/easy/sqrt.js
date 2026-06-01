function mySqrt(x) {
    // base case
    if (x < 2) return x;  // sqrt(0)=0, sqrt(1)=1

    let left = 1;
    let right = Math.floor(x / 2);  // sqrt(x) is always <= x/2 for x >= 2
    let result = 0;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (mid * mid === x) {
            return mid;           // perfect square, exact answer
        } else if (mid * mid < x) {
            result = mid;         // mid could be answer, save it
            left = mid + 1;       // try larger
        } else {
            right = mid - 1;      // mid too big, go smaller
        }
    }

    return result;  // largest k where k*k <= x
}

console.log(mySqrt(4));   // 2  (2*2 = 4 exactly)
console.log(mySqrt(8));   // 2  (2*2=4 <= 8, 3*3=9 > 8)
console.log(mySqrt(0));   // 0
console.log(mySqrt(1));   // 1
console.log(mySqrt(25));  // 5  (5*5 = 25 exactly)
console.log(mySqrt(26));  // 5  (5*5=25 <= 26, 6*6=36 > 26)