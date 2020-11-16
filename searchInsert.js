/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if(nums[nums.length - 1] < target){
        return nums.length;
    }
    for(let i=0, len=nums.length; i<len; i++){
        if(target<=nums[i]){
            return i;
        }
    }
};
// 空间换时间
var searchInsert = function(nums, target) {
    let len = nums.length
    if(nums[len - 1] < target){
        return len;
    }
    for(let i=0; i<len; i++){
        if(target<=nums[i]){
            return i;
        }
    }
};
