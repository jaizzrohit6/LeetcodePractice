/**
 * @param {number[][]} edges
 * @param {number[][]} queries
 * @return {number[]}
 */
var assignEdgeWeights = function(edges, queries) {
    const MOD = 1000000007n
    const n = edges.length + 1
    const LOG = Math.max(1,Math.ceil(Math.log2(n))+ 1)

    //adjacent list values
    const adj = Array.from({length: n + 1}, ()=>[])
    for(const [u,v] of edges){
        adj[u].push(v)
        adj[v].push(u)
    }
    const depth = new Int32Array(n + 1)
    const up = Array.from({length: LOG },() => new Int32Array(n + 1))

    const visited = new Uint8Array(n + 1)
    let queue = [1]
    visited[1] = 1
    up[0][1] = 0
    while(queue.length){
        const next = []
        for(const node of queue){
            for(const neighbour of adj[node]){
                if(!visited[neighbour]){
                    visited[neighbour] = 1
                    depth[neighbour] = depth[node] + 1
                    up[0][neighbour] = node
                    next.push(neighbour)
                }
            }
        }
        queue = next
    }
    for(let j = 1 ; j< LOG ;j++){
        for(let v = 1; v <=n;v++){
            up[j][v] = up[j - 1][up[j - 1][v]]
        }
    }

    const lca = (u,v) =>{
        if(depth[u] < depth[v])
        [u,v] = [v,u]


        let diff = depth[u] - depth[v]
        for(let j = 0; j< LOG;j++){
            if((diff >> j) & 1) u = up[j][u]
        }
        if(u === v) return u

        for(let j = LOG - 1;j >= 0;j--){
            if(up[j][u] !== up[j][v]){
                u = up[j][u]
                v= up[j][v]
            }
        }
        return up[0][u]
    }
    const pow2 = new Array( n + 1)
    pow2[0] = 1n
    for(let i = 1 ;i<=n;i++){
        pow2[i] = (pow2[i - 1] *2n)% MOD
    }
    const res = []
    for(const [u,v] of queries){
        if(u ===v){
            res.push(0)
            continue
        }
        const k = depth[u] + depth[v] - 2 * depth[lca(u,v)]
        res.push(Number(pow2[k - 1]))
    }
    return res
};