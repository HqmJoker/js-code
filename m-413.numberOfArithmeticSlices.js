/**
 * @param {number[]} nums
 * @return {number}
 nums = [1,2,3,4,5,6,12,14,16]
 diffs = [1,1,1,1,1,6,2,2]
 cons = [5,1,2]
 # 将 1 舍去，nums 中有长度为 5+1 和 2+1 的等差数列
 result = (6-2)(6-1)/2 + (3-2)(3-1)/2
 */
var numberOfArithmeticSlices = function(nums) {
    let result = 0;
    let diffs = [];
    let sequences = [1];
    for(let i=1, len=nums.length; i<len; i++) {
        diffs.push(nums[i]-nums[i-1])
    }
    for(let i=1, len=diffs.length; i<len; i++) {
        if(diffs[i] === diffs[i-1]) {
            sequences[sequences.length-1]++
        } else {
            sequences.push(1)
        }
    }
    for(let i=0, len=sequences.length; i<len; i++) {
        if(sequences[i] > 1) {
            const count = sequences[i]*(sequences[i]-1)/2
            result += count;
        }
    }
    return result
};
