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
    let profit = [ 0, -prices[0] ];
    let len = prices.length;
    for(let i=1; i<len;i ++) {
        // 由推到公式可看出本次的最大利润可从上次的最大利润中算出，所以可以覆盖上一次的利润值，只保存本次利润即可计算下次利润   
        
        // 这里不可直接使用 profit[0] = Math.max( profit[0], profit[1] + prices[i] - fee )，因为会影响到profit[1]的计算，所以采用残存遍历赋值的形式，也可采用解构赋值
        let profit0 = Math.max( profit[0], profit[1] + prices[i] - fee );
        profit[1] = Math.max( profit[0] - prices[i], profit[1]); // 直接覆盖掉本次有股票时的最大利润，即f[i][1]
        profit[0] = profit0; 
    }
    return Math.max(profit[0], profit[1]);
};
