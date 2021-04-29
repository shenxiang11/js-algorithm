const maxProfit = function(prices) {
    let minPrice = Infinity;
    let max = 0;
    for (let i = 0, len = prices.length; i < len; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        } else if (prices[i] - minPrice > max) {
            max = prices[i] - minPrice;
        }
    }
    return max;
};

export default maxProfit;
