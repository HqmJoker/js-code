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
 * @return {number}
 */
var minDiffInBST = function(root) {
    let nodeStack = [root];
    let result = [];
    // 深度遍历获取所有不为null值
    while(nodeStack.length) {
        const currentNode = nodeStack.shift();
        result.push(currentNode.val);
        if(currentNode.left) {
            nodeStack.push(currentNode.left)
        }
        if(currentNode.right) {
            nodeStack.push(currentNode.right)
        }
    }
    // 把所有值排序
    result.sort((a,b) => a-b);
    let minVal = 100000; // 初始化结果
    // 如果相差值比结果值小，那就替换结果值
    for(let i=0; i<result.length-1; i++) {
        const val = result[i+1] - result[i];
        if( val < minVal ) {
            minVal = val;
        }
    }
    return minVal
};
