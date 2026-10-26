class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {

        let l = 1;
        let r = Math.max(...piles);
        let answer = r;

        while (l<=r) {
            let mid = Math.floor(l + (r - l) /2);

            let hours = 0;
            for (let p of piles){
                hours += Math.ceil(p/mid);

            }

            if (hours <= h) {
                answer = mid;
                r = mid - 1;
            } else {
                l = mid + 1;

            }
        }

        return answer;
    }
}
