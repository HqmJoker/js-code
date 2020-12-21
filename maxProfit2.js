/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 * f(i)表示第i天卖出股票获得的最大收益值
 * f[i][0]表示第i天且当前手上没有股票时卖出股票获得的最大收益值
 * f[i][1]表示第i天且当前手上有股票时卖出股票获得的最大收益值
 * f[0][0] = 0,
 * f[0][1] = -value[1],
 * f[i][0] = max(f[i-1][0], f[i-1][1]+value[i]-free ),
 * f[i][1] = max(f[i-1][0]-value[i], f[i-1][1]),
 * f(i) = max(f[i][0], f[i][1]+value[i]-free)
 */
var maxProfit = function(prices, fee) {
    let profit = [ [ 0, -prices[0] ] ];
    let len = prices.length;
    for(let i=1; i<len;i ++) {
        let state = [];
        let profit0 = Math.max( profit[i-1][0], profit[i-1][1] + prices[i] - fee );
        let profit1 = Math.max( profit[i-1][0] - prices[i], profit[i-1][1]);
        state.push(profit0, profit1);
        profit.push(state);
    }
    return Math.max(profit[len-1][0], profit[len-1][1]);
};
