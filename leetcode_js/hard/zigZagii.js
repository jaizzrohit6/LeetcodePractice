/**
 * @param {number} n
 * @param {number} l
 * @param {number} r
 * @return {number}
 */
const MOD = 1_000_000_007n;
var zigZagArrays = function(n, l, r) {
    const m = r - l + 1;
    if (n === 1) return m % Number(MOD);
    let downVec = new Array(m);
    for (let i = 0; i < m; i++) downVec[i] = BigInt(m - 1 - i); 
    const T = Array.from({ length: m }, (_, i) =>
        Array.from({ length: m }, (_, j) => (j <= m - 2 - i ? 1n : 0n))
    );
    const P = matPow(T, n - 2, m);
    downVec = matVec(P, downVec, m);
    let s = 0n;
    for (let i = 0; i < m; i++) s = (s + downVec[i]) % MOD;
    return Number((2n * s) % MOD);
};

function matMul(A, B, m) {
    const C = Array.from({ length: m }, () => new Array(m).fill(0n));
    for (let i = 0; i < m; i++) {
        for (let k = 0; k < m; k++) {
            if (A[i][k] === 0n) continue; 
            const a = A[i][k];
            for (let j = 0; j < m; j++) {
                C[i][j] = (C[i][j] + a * B[k][j]) % MOD; 
            }
        }
    }
    return C;
}

function matVec(A, v, m) {
    const out = new Array(m).fill(0n);
    for (let i = 0; i < m; i++) {
        let acc = 0n;
        for (let j = 0; j < m; j++) acc = (acc + A[i][j] * v[j]) % MOD;
        out[i] = acc;
    }
    return out;
}

function matPow(M, p, m) {
    let result = Array.from({ length: m }, (_, i) =>
        Array.from({ length: m }, (_, j) => (i === j ? 1n : 0n))
    );
    let base = M;
    let e = BigInt(p); 
    while (e > 0n) {
        if (e & 1n) result = matMul(result, base, m);
        base = matMul(base, base, m);
        e >>= 1n;
    }
    return result;
}