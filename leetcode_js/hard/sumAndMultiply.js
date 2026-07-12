/**
 * @param {string} s
 * @param {number[][]} queries
 * @return {number[]}
 */
var sumAndMultiply = function(s, queries) {
    const MOD = 1000000007n;
    const n = s.length;
    const P = new Array(n + 1);      
    const C = new Array(n + 1);      
    const S = new Array(n + 1);     
    const pow10 = new Array(n + 1);  
    P[0] = 0n; C[0] = 0; S[0] = 0n; pow10[0] = 1n;

    for (let i = 0; i < n; i++) {
        const isNonZero = s[i] !== '0';
        const d = BigInt(s[i]);
        P[i + 1] = isNonZero ? (P[i] * 10n + d) % MOD : P[i];
        C[i + 1] = isNonZero ? C[i] + 1 : C[i];
        S[i + 1] = isNonZero ? S[i] + d : S[i];
        pow10[i + 1] = (pow10[i] * 10n) % MOD;
    }

    return queries.map(([lo, hi]) => {
        const k = C[hi + 1] - C[lo];        
        if (k === 0) return 0;              
        let concat = ((P[hi + 1] - P[lo] * pow10[k]) % MOD + MOD) % MOD;
        const sum = ((S[hi + 1] - S[lo]) % MOD + MOD) % MOD;
        return Number((concat * sum) % MOD);
    });
};