/**
 * @param {number[][]} ranges
 * @param {number} left
 * @param {number} right
 * @return {boolean}
 */
var isCovered = function(ranges, left, right) {
    const len = ranges.length; // c获取范围数组下标
    // 当存在范围不在区间内时返回false, 否则返回true
    while(left <= right) {
        let isInRange = false; // 每一轮当前值是否在范围中标志位
        // 判断当前值是否在范围
        for(let i=0; i<len; i++) {
            const nowRanges = ranges[i];
            // 如果在范围直接中断，判断下一个数
            if(nowRanges[0] <= left && nowRanges[1] >= left) {
                isInRange = true;
                left++;
                break;
            }
        }
        if(!isInRange) {
            return false
        }
    }
    return true
};
