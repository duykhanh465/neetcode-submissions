class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let map = {};

        for (let i = 0 ; i <= nums.length ; i++){
            let val = nums[i];

            if (map[val] !== undefined) {
                return true;
            }

            map[val] = true;
        }

        return false;
}
}