class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        for (let row = 0 ; row < 9; row++){
            let seen = new Set();
            for (let i = 0 ; i < 9 ; i++){
                if (board[row][i] === '.') continue;
                if (seen.has(board[row][i])) return false;
                seen.add(board[row][i]);
            }
        }


        for (let col = 0 ; col < 9 ; col++){
            let seen = new Set();
            for (let i = 0 ; i < 9 ; i++){
                if (board[i][col] === ".") continue;
                if (seen.has(board[i][col])) return false;
                seen.add(board[i][col]);
            }
        }

        for (let square = 0 ; square < 9; square++){
            let seen = new Set();
            for (let i = 0; i < 9; i++){
                let r = Math.floor(square / 3) * 3 + Math.floor(i / 3);
                let c = (square % 3) * 3 + (i % 3);
                if (board[r][c] === '.') continue;
                if (seen.has(board[r][c])) return false;
                seen.add(board[r][c]);
            }
        }

        return true;
    }
}