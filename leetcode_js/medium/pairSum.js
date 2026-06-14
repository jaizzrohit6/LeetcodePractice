/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function(head) {
    let vals = []
    let node = head
    while(node !== null){
        vals.push(node.val)
        node = node.next
    }
    let i = 0 
    let j = vals.length - 1
    let max = 0 
    while(i < j){
        max = Math.max(max,vals[i] + vals[j])
        i++
        j--
    }
    return max
};