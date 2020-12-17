/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function(prices, fee) {
    let len = prices.length;
    let result = [0];
    let minBuyIn = prices[0];
    let lastMinBuyIn = prices[0];
    for(let i=1; i<len-1; i++) {
        if(prices[i] > prices[i+1] && prices[i] - minBuyIn > fee) {
            if(result[i-1] > 0 && prices[i] - lastMinBuyIn - fee > prices[i] - minBuyIn + result[i-1] - fee) {
                result.push(prices[i] - lastMinBuyIn - fee);
            }else{
                result.push(prices[i] - minBuyIn + result[i-1] - fee);
            }
            lastMinBuyIn = minBuyIn;
            minBuyIn = 50000;
        }else {
            result.push(result[i-1]);
            if(minBuyIn > prices[i]) {
                minBuyIn = prices[i];
            }
        }
    }
    // 最后一天需要额处理
    if(minBuyIn !== 50000 && prices[len-1] - minBuyIn > fee) {
        if(result[len-1-1] > 0 && prices[len-1] - lastMinBuyIn - fee > prices[len-1] - minBuyIn + result[len-1-1] - fee) {
            result.push(prices[len-1] - lastMinBuyIn - fee);
        }else{
            result.push(prices[len-1] - minBuyIn + result[len-1-1] - fee);
        }
    }else{
        result.push(result[len-1-1])
    }
    return result[len-1];
};
