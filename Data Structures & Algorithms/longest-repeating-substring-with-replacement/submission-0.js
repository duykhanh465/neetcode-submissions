class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {

            let count = {};
            let l = 0;
            let maxCount = 0;
            let max = 0;

            for (let r = 0 ;  r < s.length ; r++){
                count[s[r]] = (count[s[r]] || 0) + 1;
                maxCount = Math.max(maxCount, count[s[r]]);

            while ((r - l + 1) - maxCount > k) {
                count[s[l]]--;
                l++;


            }

            max = Math.max(max,r - l + 1);
            }

            return max;
        
    }
}
