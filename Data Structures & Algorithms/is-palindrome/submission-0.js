class Solution {
    isPalindrome(s) {

        s = s.toLowerCase();
        s = s.replace(/[^a-z0-9]/g, '');

        let reversed = s
            .split('')
            .reverse()
            .join('');

        return s === reversed;
    }
}