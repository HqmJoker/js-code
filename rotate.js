/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    for(let i=0; i<k; i++) {
        nums.unshift(nums.pop())
    }
};
// v2.0 空间换时间
var rotate = function(nums, k) {
    nums.splice(0, 0, ...nums.splice(nums.length-k, k))
};
