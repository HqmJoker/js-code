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

    let maxLen = Math.max(l1.getLength, l2.getLength)
    console.log(maxLen)
    let result = 0;
    for(let i in maxLen){
        let count = 0;
        console.log(i)
    }
};

function List(){
    let Node = function(val) {
        this.val = val;
        this.next = null;
    }
    let head = null;
    let length = 0;
    this.append = function(val){
        let node = new Node(val)
        let tempPoint = head;
        if(!head){
            head = node;
        }else{
            while(tempPoint.next){
                tempPoint = tempPoint.next;
            }
            tempPoint.next = node;
        }
        length++;
    }
    this.getLength = function(){
        return length;
    }
}

let l1 = new List()
l1.append(2)
l1.append(4)
l1.append(3)
let l2 = new List()
l2.append(5)
l2.append(6)
l2.append(4)
    console.log(l1.getLength())
    console.log(l2.getLength())

addTwoNumbers(l1, l2)
