/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 *  解题思路：
 *   从头节点遍历到尾节点
 *    把当前节点抽出来，然后重新按顺序插入到链表中
 */
var insertionSortList = function(head) {
    let result = new ListNode(0)
    let q = result;
    while(head){
        let minNode_before = null;
        let p_before = head;
        let minNode = head;
        let p = head.next;
        while(p){
            if(p.val < minNode.val){
                minNode = p;
                minNode_before = p_before;
            }
            p_before = p;
            p = p.next
        } 
        if(minNode_before){
            minNode_before.next = minNode.next;
        }else{
            head = head.next;
        }
        minNode.next = null;
        q.next = minNode;
        q = q.next;
    }
    return result.next;
};
