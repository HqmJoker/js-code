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
var findSecondMinimumValue = function(root) {
    let nodeStack = [root];
    let map = new Set(); 
    // 保存节点所有值（重复值过滤掉）
    while(nodeStack.length > 0) {
        root = nodeStack.pop();
        map.add(root.val); // 深度遍历树，把节点值去重放到数组中
        // 如果当前节点的右子节点存在，则左节点一定存在，把左右节点同时放到执行栈中
        if(root.right) {
            nodeStack.push(root.left);
            nodeStack.push(root.right);
        }
    }
    let resultArr = [...map].slice(1); // 把节点集中最小值去掉，根据题设可知第一个值肯定为最小值，故截取数组从下标1开始，也就是第二个值
    return resultArr.length > 0 ? Math.min(...resultArr) : -1; // 如果截取完后数组长度为0，表示不存在第二小值，否则直接取截取后数组最小值
};
