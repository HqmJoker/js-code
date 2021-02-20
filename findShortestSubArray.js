/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
    if(nums.length < 2) {
        return nums.length
    }
    let maxCount = calcuMaxCount(nums);
    // 从前往后删
    for(let i=0; i<nums.length; i++) {
        let num = nums.splice(i, 1)[0];
        i--;
        if( calcuMaxCount(nums) !== maxCount) {
            nums.unshift(num)
            break;
        }
    }
    // 从后往前删
    for(let i=nums.length-1; i>0; i--) {
        let num = nums.splice(i, 1)[0];
        if( calcuMaxCount(nums) !== maxCount) {
            break;
        }
    }
    return nums.length + 1;
};
// 计算当前数组的度
function calcuMaxCount(arr) {
    let map = {};
    let len = arr.length;
    arr.forEach((value) => {
        if(!map['key'+value]) {
            map['key'+value] = 1;
        } else {
            map['key'+value]++;
        }
    })
    let maxCount = 0;
    for(const key in map) {
        if(maxCount < map[key]) {
            maxCount =  map[key];
        }
    }
    return maxCount;
}
