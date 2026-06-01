function letterCombination(digits){
    if (!digits.length) return [];
    let map = {
        '2':'abc','3':'def',
        '4':'ghi','5':'jkl',
        '6':'mno','7':'pqrs',
        '8':'tuv','9':'wxyz',
    }
    let queue = ['']
    for(const digit of digits){
        console.log(digit)
        const next = []
        for(const prefix of queue){
            console.log("prefix",prefix)
            console.log(queue)
            for(const ch of map[digit]){
                console.log("ch",ch)
                next.push(prefix + ch)
            }
        }
        queue = next
    }
    return queue
}

const digits = '23'
console.log(letterCombination(digits))