class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if (s1.length > s2.length) return false;

        let need = new Array(26).fill(0);
        let window = new Array(26).fill(0);
        let a = 'a'.charCodeAt(0);

        for (let i = 0; i < s1.length; i++) {
            need[s1.charCodeAt(i) - a]++;
            window[s2.charCodeAt(i) - a]++;
        }

        if (this.same(need, window)) return true;

        for (let r = s1.length; r < s2.length; r++) {
            window[s2.charCodeAt(r) - a]++;
            window[s2.charCodeAt(r - s1.length) - a]--;

            if (this.same(need, window)) return true;
        }

        return false;
    }

    same(need, window) {
        for (let i = 0; i < 26; i++) {
            if (need[i] !== window[i]) {
                return false;
            }
        }
        return true;
    }
}
