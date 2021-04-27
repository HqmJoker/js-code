/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high) {
    let sum = 0;
    let valueStack = [root];
    while(valueStack.length > 0) {
        const curNode = valueStack.pop();
        if(curNode.val >= low && curNode.val <= high) {
            sum += curNode.val
        }
        if(curNode.left) {
            valueStack.push(curNode.left)
        }
        if(curNode.right) {
            valueStack.push(curNode.right)
        }
    }
    return sum;
};
