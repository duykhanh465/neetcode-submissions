class Solution {
    
    isAnagram(s, t) {
        if (s.lenght != t.lenght) {
            return false;
        }
        let sPhai = s.split('').sort().join();
        let tTrai = t.split('').sort().join();
        return sPhai == tTrai;
    }
}
