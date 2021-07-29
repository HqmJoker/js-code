/**
 * @param {number} label
 * @return {number[]}
 * 1 3 7->4 14
 * 1 3->2 6 13->10 26
 */
var pathInZigZagTree = function(label) {
    let result = [];
    // 先假设数组是按正常从小到大，从左到右进行绘制得到对应节点数
    while(label > 0) {
        result.push(label);
        label = Math.floor(label/2);
    }
    len = result.length; // 获取label对应节点的数量
    const isOdd = len%2; // 更加节点的数量的奇偶行对数据进行处理
    result = result.reverse(); // 因为得到节点数为倒序，所以需要翻转回正序
    for(let i=1; i<len; i++) { // 注：由于第一层只有1个节点，所以永远不需要处理，所以下标从1开始，即从第二层开始处理
        // if(isOdd && i%2) { // 当结果集长度为奇数时，只需要处理偶数层的数据，因为层数从0开始，所以处理i%2为1的层数
        //     const levelMaxValue = Math.pow(2, i+1) - 1;
        //     const levelMinValue = Math.pow(2, i);
        //     result[i] = levelMaxValue + levelMinValue - result[i];
        // }
        // if(!isOdd && i%2 === 0) { // 同理当结果集长度为偶数，只需处理奇数层数据
        //     const levelMaxValue = Math.pow(2, i+1) - 1;
        //     const levelMinValue = Math.pow(2, i);
        //     result[i] = levelMaxValue + levelMinValue - result[i];
        // }

        // 由于处理逻辑一致，合并上述两个处理条件
        if( (isOdd && i%2) || (!isOdd && i%2 === 0)) {
            const levelMaxValue = Math.pow(2, i+1) - 1;
            const levelMinValue = Math.pow(2, i);
            result[i] = levelMaxValue + levelMinValue - result[i];
        }
    }
    return result
};
