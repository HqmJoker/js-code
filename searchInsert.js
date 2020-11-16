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
