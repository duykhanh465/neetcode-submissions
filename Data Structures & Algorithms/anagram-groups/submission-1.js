class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
    let map = {};

    for (let i = 0 ; i < strs.length; i++) {
        let originalStr = strs[i];

        let sortedStr = originalStr.split('').sort().join('');

        if (!map[sortedStr]){
            map[sortedStr] = [];
        }  

        map[sortedStr].push(originalStr);
        
    }   
     return Object.values(map)    
}
}
   

