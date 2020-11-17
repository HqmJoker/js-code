/**
 * @param {number[]} prices
 * @return {number}
 * 思路：
 *      暴力法求解：直接计算出每次的利益，然后比较当前利益和最大利益，如果当前利益比最大利益大，则替换
 */
var maxProfit = function(prices) {
    let profit = 0;
    for(let i=0, len = prices.length; i<len; i++){
        for(let j=i+1; j<len; j++){
            if(prices[i]<prices[j] && prices[j]-prices[i]>profit){
                profit = prices[j]-prices[i];
            }
        }
    }
    return profit
};
