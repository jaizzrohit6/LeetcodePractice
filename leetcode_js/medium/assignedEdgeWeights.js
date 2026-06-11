/**
 * @param {number[][]} edges
 * @return {number}
 */
var assignEdgeWeights = function(edges) {
    const MOD = 1000000007n
    const n = edges.length + 1

    //adjacency list
    const adj = Array.from({ length: n + 1},()=>[])
    for(const [u,v] of edges){
        adj[u].push(v)
        adj[v].push(u)
    }

    const visited = new Array(n + 1).fill(false)
    let level = [1]
    visited[1] = true
    let g = 0

    while(level.length > 0){
        const next = []
        for(const node of level){
            for(const nei of adj[node]){
                if(!visited[nei]){
                    visited[nei] =true
                    next.push(nei)
                }
            }
        }
        if(next.length > 0) g++
        level = next
    }
    if(g===0) return 0
    return Number(power(2n,BigInt(g-1),MOD))
};


function power(base,exp,mod){
    let result = 1n
    base%=mod
    while(exp > 0n){
        if(exp & 1n) result= (result*base) %mod
        base = (base*base)%mod
        exp>>=1n
    }
    return result
}