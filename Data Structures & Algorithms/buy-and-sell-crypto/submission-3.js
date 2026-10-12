class Solution {
    maxProfit(prices) {
        let l = 0;
        let r = 1;
        let maxP = 0;

        while ( r < prices.length) {
            if (prices[l] > prices[r]) {
                l = r;
            } else {
                let sum = prices[r] - prices[l];

                maxP = Math.max(maxP , sum);
            }
            r++;
        }

        return maxP;
    }
}