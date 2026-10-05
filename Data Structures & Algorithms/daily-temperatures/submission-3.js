class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const n = temperatures.length;
        const result = new Array(n).fill(0);
        const stack = []; // Lưu các index của các ngày chưa tìm được ngày ấm hơn
        
        for (let i = 0; i < n; i++) {
            // Khi nhiệt độ ngày hiện tại cao hơn nhiệt độ ở ngày lưu trên đỉnh stack
            while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
                const prevIndex = stack.pop();
                result[prevIndex] = i - prevIndex; // Tính khoảng cách số ngày chờ
            }
            
            // Đẩy index hiện tại vào stack để chờ so sánh ở các ngày tiếp theo
            stack.push(i);
        }
        
        return result;
    }
}