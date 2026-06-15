/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteMiddle = function(head) {
    // let vals = []
    // let node = head
    // while(node !== null){
    //     vals.push(node.val)
    //     node = node.next
    // }
    // let mid = Math.floor(vals.length/2)
    // vals.splice(mid,1)
    // let dummy = new ListNode(0)
    // let tail = dummy
    // for(const v of vals){
    //     tail.next = new ListNode(v)
    //     tail = tail.next
    // }
    // return dummy.next

    if(head.next ===null) return null
    let slow = head ;fast = head ; prev = null
    while(fast && fast.next){
        prev = slow
        slow = slow.next
        fast = fast.next.next
    } 
    prev.next = slow.next
    return head
};