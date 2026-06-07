

// function isPalindrome(num){
//     //first solution string conversion
//     if(num <0) return false //base condition 
//     let value = String(num).split('').map(Number) // [] array got created
//     console.log(value)
//     let left = 0
//     let right = value.length -1
//     while(left<=right){
//         if(value[left]!== value[right]) return false
//         left++
//         right--
//     }
//     return true
// }

// let num = -121
// console.log(isPalindrome(num))

function TreeNode(val,left,right){
    this.val = (val===undefined ? 0:val)
    this.left = (left===undefined ? null:val)
    this.right = (right===undefined ? null:val)
}


function createBinaryTree(descriptions){
    const nodes = new Map()
    const children = new Set()
    function getNode(val){
        if(!nodes.has(val)) nodes.set(val,new TreeNode(val))
        return nodes.get(val)
    }
    
    for(const[parentval,childVal,isLeft] of descriptions){
        const parent = getNode(parentval)
        const child = getNode(childVal)
        if(isLeft===1) parent.left = child
        else parent.right = child
        children.add(childVal)
    }
    
    for(const [val,node] of nodes){
        if(!children.has(val)) return node
    }
}

const descriptions = [[20,15,1],[20,17,0],[50,20,1],[50,80,0]]
console.log(createBinaryTree(descriptions))