/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let node = head 
    let vals = []
    while(node!== null){
        vals.push(node.val)
        node = node.next
    }
    let i = 0
    let j = vals.length - 1
    while(i<j){
        if(vals[i]!==vals[j]){
            return false
        }
        i++
        j--
    }
    return true
};