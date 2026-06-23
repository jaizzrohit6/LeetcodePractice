/**
 * @param {number} n
 * @param {number} l
 * @param {number} r
 * @return {number}
 */
var zigZagArrays = function(n, l, r) {
    const MOD = 1_000_000_007n;
    const m = r - l  + 1
    if (n === 1) return m % Number(MOD);
    let up   = new Array(m).fill(1n);
    let down = new Array(m).fill(1n);

    for (let step = 2; step <= n; step++) {
        const newUp   = new Array(m).fill(0n);
        const newDown = new Array(m).fill(0n);
        let prefix = 0n;
        for (let v = 0; v < m; v++) {
            newUp[v] = prefix;
            prefix = (prefix + down[v]) % MOD;
        }
        let suffix = 0n;
        for (let v = m - 1; v >= 0; v--) {
            newDown[v] = suffix;
            suffix = (suffix + up[v]) % MOD;
        }
        up = newUp;
        down = newDown;
    }
    let ans = 0n;
    for (let v = 0; v < m; v++) {
        ans = (ans + up[v] + down[v]) % MOD;
    }
    return Number(ans);
};