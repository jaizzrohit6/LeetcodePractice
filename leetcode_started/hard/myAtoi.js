/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
        const INT_MIN = -(2 ** 31);
    const INT_MAX = (2 ** 31) - 1;

    let i = 0;
    const n = s.length;

    // 1. Skip leading whitespace
    while (i < n && s[i] === ' ') {
        i++;
    }

    // If we've consumed everything
    if (i === n) return 0;

    // 2. Check sign
    let sign = 1;
    if (s[i] === '+') {
        i++;
    } else if (s[i] === '-') {
        sign = -1;
        i++;
    }

    // 3. Parse digits
    let num = 0;
    let hasDigit = false;

    while (i < n && s[i] >= '0' && s[i] <= '9') {
        hasDigit = true;
        const digit = s[i].charCodeAt(0) - '0'.charCodeAt(0);

        // Check for overflow before adding digit
        if (num > Math.floor((INT_MAX - digit) / 10)) {
            return sign === 1 ? INT_MAX : INT_MIN;
        }

        num = num * 10 + digit;
        i++;
    }

    if (!hasDigit) return 0;

    let result = sign * num;

    // 4. Clamp to 32-bit signed integer range
    if (result < INT_MIN) return INT_MIN;
    if (result > INT_MAX) return INT_MAX;

    return result;
};