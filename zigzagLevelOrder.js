/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    if(!root) {
        return []
    }
    let readDirection = 'left'; // 遍历方向，left为从左到右
    let result = [[root.value]];
    let curStack = []; // 当前层节点
    let nextStack = []; // 下一层节点
    // 初始化把第二层节点放入节点遍历区
    if(root.right) {
        curStack.push(root.right);
    }
    if(root.left) {
        curStack.push(root.left);
    }

    while(curStack.length > 0) {
        let nodeValue = [];

    }
};
