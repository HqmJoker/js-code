/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function(nums) {
    if(nums.length < 2){
        return 0;
    }
    nums.sort((a, b) => a - b); // 排序
    let result = nums[1] - nums[0]; // 初始化最大值
    // 循环替换最大值，注意下标从1开始，到length-1结束，因为只需要计算到倒数第二个和倒数第一个差值
    for(let i=1, len=nums.length-1; i<len; i++){
        if(nums[i+1] - nums[i] > result){
            result = nums[i+1] - nums[i];
        }
    }
    return result;
};
