class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {

        let numSet = new Set(nums);
        let longest = 0;


        for (let num of numSet) {
            if (!numSet.has(num - 1)){
                let currentNum = num;
                let currentLength = 1;


                while (numSet.has(currentNum + 1)) {
                    currentNum += 1;
                    currentLength += 1;
                }


                longest = Math.max(longest, currentLength);
            }
        }

        return longest;
    }
}
