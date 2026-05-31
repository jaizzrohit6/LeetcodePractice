/**
 * @param {string[]} wordsContainer
 * @param {string[]} wordsQuery
 * @return {number[]}
 */
var stringIndices = function(wordsContainer, wordsQuery) {
        
class TrieNode {
        constructor(){
            this.children = {}
            this.bestIdx = -1  
        }
    }

    const root = new TrieNode()
    function isBetter(idx1, idx2){
        if(idx2 === -1) return true   
        const len1 = wordsContainer[idx1].length
        const len2 = wordsContainer[idx2].length
        if(len1 !== len2) return len1 < len2   
        return idx1 < idx2                      
    }
    function insert(word, idx){
        let node = root
        if(isBetter(idx, node.bestIdx)) node.bestIdx = idx
        for(let i = word.length - 1; i >= 0; i--){
            const ch = word[i]
            if(!node.children[ch]){
                node.children[ch] = new TrieNode()
            }
            node = node.children[ch]
            if(isBetter(idx, node.bestIdx)) node.bestIdx = idx
        }
    }
    function query(word){
        let node = root

        for(let i = word.length - 1; i >= 0; i--){
            const ch = word[i]
            if(!node.children[ch]) break
            node = node.children[ch]
        }

        return node.bestIdx
    }
    for(let i = 0; i < wordsContainer.length; i++){
        insert(wordsContainer[i], i)
    }
    return wordsQuery.map(w => query(w))
};