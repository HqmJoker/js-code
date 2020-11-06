/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let val1 = l1.val ? l1.val:0;
    let val2 = l2.val ? l2.val:0;
    let currentNum = (l1.val + l2.val) % 10;
    let isAddOne = Math.floor((l1.val + l2.val) / 10);
    let result = new ListNode(currentNum);
    let p = result
    let i=0;
    while(isAddOne || (l1 && l1.next) || (l2 && l2.next)){
        if (l1) {
            l1 = l1.next;
        }
        if (l2) {
            l2 = l2.next;
        }
        val1 = l1 !== null ? l1.val:0;
        val2 = l2 !== null ? l2.val:0;
        currentNum = (val1 + val2 + isAddOne) % 10;
        isAddOne = Math.floor((val1 + val2 + isAddOne) / 10);
        p.next = new ListNode(currentNum);
        p = p.next;
        i++;
    }
    return result
};
