function arrayIsGood(arr) {
    let n = Math.max(...arr)
    if (arr.length !== n + 1) return false
    let freq = {}
    for (let num of arr) {
        freq[num] = (freq[num] || 0) + 1
    }
    for (let i = 1; i < n; i++) {
        if (freq[i] !== 1) return false
    }
    return freq[n] === 2
}