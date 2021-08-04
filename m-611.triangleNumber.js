/**
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function(nums) {
    nums = nums.filter( item => item !== 0) // 过滤掉0
    nums.sort((a,b) => a-b ) // 排序
    const numsLen = nums.length;
    let result = 0;
    for(let i=0; i<numsLen-2; i++) {
        for(let j=i+1; j<numsLen-1; j++) {
            for(let k=j+1; k<numsLen; k++) {
                if(nums[i]+nums[j]>nums[k]) {
                    result++
                }
            }
        }
    }
    return result
};
