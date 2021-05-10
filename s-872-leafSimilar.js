/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
    const root1ChildList = getNodeList(root1);
    const root2ChildList = getNodeList(root2);
    if(root1ChildList.length !== root2ChildList.length) {
        return false;
    }
    for(let i=0, len=root1ChildList.length; i<len; i++) {
        if(root1ChildList[i] !== root2ChildList[i]) {
            return false;
        }
    }
    return true;
};
// 获取树的叶节点集合
const getNodeList = function(root) {
    let nodeList = [];
    let workStack = [root];
    while(workStack.length) {
        const curNode = workStack.pop();
        const leftChildNode = curNode.left;
        const rightChildNode = curNode.right;
        if(!leftChildNode && !rightChildNode) {
            nodeList.push(curNode.val)
            continue;
        }
        if(leftChildNode) {
            workStack.push(leftChildNode)
        }
        if(rightChildNode) {
            workStack.push(rightChildNode)
        }
    }
    return nodeList;
}
