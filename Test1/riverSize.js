let matrix1 = [
    [1, 0, 0, 1, 0],
    [1, 0, 1, 0, 0],
    [0, 0, 1, 0, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 0],
];

let matrix2 = [
    [0, 1, 1, 1, 1],
    [1, 0, 0, 0, 0],
    [1, 0, 1, 0, 0],
    [1, 0, 1, 1, 1],
    [1, 1, 0, 0, 0],
];

var row;
var col;

var cnt;

function riverCount(matrix) {
    row = matrix.length;
    col = matrix[0].length;

    let ans = [];
    for (let i = 0; i < row; i++) {
        cnt = 0;
        // console.log(typeof cnt)
        for (let j = 0; j < col; j++) {
            cnt = 0;
            if (matrix[i][j] == 1) {
                //console.log(typeof i,typeof j);
                cnt++;
                checkDown(matrix, i + 1, j)
                matrix[i][j] = -1;
                //cnt= cnt+1+checkDown(i+1,j);
                //console.log(cnt);
                //  cnt= cnt+1+checkRight(i,j+1);
                //cnt++;
                checkRight(matrix, i, j + 1);

            }
            // console.log(cnt);
            if (cnt > 0)
                ans.push(cnt);
        }

    }
    return ans;
}


function checkDown(matrix, i, j) {
    if (i === row) {
        //cnt = 1+ checkRight(i-1,j+1);
        checkRight(matrix, i - 1, j + 1);
    }
    else {
        if (matrix[i][j] === 1) {
            //cnt = cnt+1+ checkDown(i+1,j);
            cnt++;
            matrix[i][j] = -1;
            checkDown(matrix, i + 1, j)
        }

        else {
            //cnt = cnt+1+ checkDown(i+1,j);
            //cnt++;
            checkRight(matrix, i - 1, j + 1);
        }

    }
}
function checkRight(matrix, i, j) {
    if (j === col) {
        return 0;
    }
    else {
        if (matrix[i][j] === 1) {

            cnt++;
            matrix[i][j] = -1;
            checkRight(matrix, i, j + 1);
        }
        else
            return 0;
    }
}


console.log(riverCount(matrix1));
console.log(riverCount(matrix2));