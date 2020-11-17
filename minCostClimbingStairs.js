/**
 * @param {number[]} cost
 * @return {number}
 * 解题思路：
 *     f(n) = min(f(n-1), f(n-2))  每一次的结果均为前一次可到达结果的最小值      
 */
var minCostClimbingStairs = function(cost) {
    let result = [cost[0], cost[1]];
    for(let i=2; i<cost.length; i++){
        result[i] = Math.min(result[i-1], result[i-2]) + cost[i];
    }
    return Math.min(result[cost.length-1], result[cost.length-2]);
};
