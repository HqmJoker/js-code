/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
    let len = nums.length;
    let result = 0;
    if(len <= 1) {
        return result;
    }
    let first = -1;
    let last = len;
    const sortNums = [...nums].sort((a,b) => a-b);
    for(let i=0; i<len; i++) {
        if(first !== -1 && last !== len) {
            result = last-first+1;
            break;
        }
        if(nums[i] !== sortNums[i] && first === -1) {
            first = i;
        }
        if(nums[len-1-i] !== sortNums[len-1-i] && last === len) {
            last = len-1-i;
        }
    }
    // console.log(first, last)
    return result
};
