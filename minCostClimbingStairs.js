/**
 * @param {number[]} cost
 * @return {number}
 * 解题思路：
 *   当 n < 2 
 *     f(0) = 0
 *     f(1) = min(value(0), value(1))
 *   当 n >= 2
 *     f(n) = min(f(n-1), f(n-2)+value(n-2))  每一次的结果均为前一次可到达结果的最小值      
 */
var minCostClimbingStairs = function(cost) {
    let cost0 = cost[0];
    let cost1 = cost[1];
    for(let i=2; i<cost.length; i++){
        [ cost0, cost1 ] = [ cost1 , Math.min(cost0, cost1) + cost[i] ]  // 只保存前两级楼梯的最小花费值
    }
    return Math.min(cost0, cost1);
};
