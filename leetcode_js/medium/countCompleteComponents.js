/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countCompleteComponents = function(n, edges) {
    const parent = Array.from({length: n}, (_, i) => i);
    const find = x => {
        while (parent[x] !== x) {
            parent[x] = parent[parent[x]]; 
            x = parent[x];
        }
        return x;
    };
    const union = (a, b) => { parent[find(a)] = find(b); };

    for (const [a, b] of edges) union(a, b);

    // Tally vertices and edges per component root
    const vCount = new Map();
    const eCount = new Map();
    for (let i = 0; i < n; i++) {
        const r = find(i);
        vCount.set(r, (vCount.get(r) || 0) + 1);
    }
    for (const [a, b] of edges) {
        const r = find(a);
        eCount.set(r, (eCount.get(r) || 0) + 1);
    }

    let complete = 0;
    for (const [root, v] of vCount) {
        const e = eCount.get(root) || 0;
        if (e === v * (v - 1) / 2) complete++;
    }
    return complete;
};