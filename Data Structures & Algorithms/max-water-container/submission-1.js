class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {

          let l = 0;
        let r = heights.length - 1;
        let res = 0;

        while (l < r) {
            let dodai = r - l;

            let thetich = Math.min(heights[l],heights[r]);

            let luongchua = dodai * thetich;

            res = Math.max(res,luongchua);

            if (heights[l] < heights[r]){
                l++;
            }else{
                r--;
            }
          
        }
          return res;
    }
     
}
