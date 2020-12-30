/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    while(stones.length > 1) {
        // 找出最大的两个值和对应下标
        let index = [0, 1];        
        let max = [stones[0], stones[1]];
        // 初始化最大两个值
        if(stones[0] < stones[1]) {
            max[0] = stones[1];
            max[1] = stones[0];
            index[0] = 1;
            index[1] = 0;
        }
        // 遍历剩余值，如果比当前第二大值大则替换
        for( let i=2, len=stones.length; i<len; i++ ) {
            if(stones[i] < max[1]) {
                continue;
            }
            if(stones[i] < max[0]) {
                max[1] = stones[i];
                index[1] = i;
                continue;
            }
            max[1] = max[0];
            max[0] = stones[i];
            index[1] = index[0];
            index[0] = i;
        }

        // 从数组中移除对应的两个值，若最大值下标比第二大值下标靠前，移除第二大值时需要--
        stones.splice(index[0], 1);
        if(index[0] < index[1]) {
            index[1]--;
        }
        stones.splice(index[1], 1);
        // 若不相等，需要往数组插入剩余值
        if(max[0] > max[1]) {
            stones.push(max[0]-max[1])
        }
    }
    if(stones.length === 1) {
        return [stones[0]]
    }
    return 0
};
