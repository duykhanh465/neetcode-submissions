class Solution {
    maxProfit(prices) {
        let l = 0;
        let r = 1;
        let maxP = 0;

        while (r < prices.length) {
            if (prices[l] > prices[r]) {
                l = r;                       // gặp giá rẻ hơn, mua ở đây
            } else {
                let profit = prices[r] - prices[l];
                maxP = Math.max(maxP, profit);
            }
            r++;                             // luôn tiến r ở cuối
        }

        return maxP;
    }
}