class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
    let map = {};

    for(let i = 0 ; i < strs.length ; i ++){

        let nhetTam = strs[i];


        let sapXep = nhetTam.split('').sort().join('');
        

        if (!map[sapXep]) {
            map[sapXep] = [];
        }

        map[sapXep].push(nhetTam);
    }

    return Object.values(map);


  
        
}
};
   

