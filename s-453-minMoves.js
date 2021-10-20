/**
 * @param {number[]} nums
 * @return {number}
 */
// var minMoves = function(nums) {
//     let result = 0;
//     let max = Math.max(...nums);
//     let min = Math.min(...nums);
//     const len = nums.length;
//     while(max !== min) {
//         let isPass = false;
//         for(let i=0; i<len; i++) {
//             if(!isPass && nums[i] === max) {
//                 isPass = true;
//                 continue;
//             }
//             nums[i] = nums[i]+max-min;
//         }
//         result = result+max-min;
//         max = Math.max(...nums);
//         min = Math.min(...nums);
//     }
//     return result
// };

var minMoves = function(nums) {
    let result = 0;
    let min = Math.min(...nums);
    for(const key of nums) {
        result = result + key - min
    }
    return result
};
