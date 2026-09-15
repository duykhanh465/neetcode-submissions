class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {

      let map = {};


      for (let i = 0 ; i < nums.length; i++)  {
            let num = nums[i];

            map[num] = (map[num] || 0 ) + 1;
      }

      let countArray = Object.entries(map);
      countArray.sort((a,b) => b[1] - a[1]);


      let result = [];

      for (let i = 0 ; i < k ; i++){
        result.push(Number(countArray[i][0]));
      }

      return result
        
}
}
