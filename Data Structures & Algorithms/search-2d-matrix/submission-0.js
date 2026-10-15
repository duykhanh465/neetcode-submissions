class Solution {
    searchMatrix(matrix, target) {
        let m = matrix.length;
        let n = matrix[0].length;

        let l = 0;
        let r = (m * n) - 1;

        while (l <= r) {
            let mid = Math.floor(l + (r - l) / 2);

            let values = matrix[Math.floor(mid / n)][mid % n];

            if (values == target) {
                return true;
            } if (values < target) {
                l = mid + 1;
            } else {
                r = mid - 1;
            }
        }

        return false;
    }
}