
function minAbs(arr1, arr2) {

    arr1.sort((a, b) => a - b);
    arr2.sort((a, b) => a - b);

    let i = 0, j = 0;
    let res = [];
    let result = Math.abs(arr1[i] - arr2[j]);

    while (i < arr1.length && j < arr2.length) {
        if (Math.abs(arr1[i] - arr2[j]) < result) {
            res[0] = arr1[i];
            res[1] = arr2[j];
            result = Math.abs(arr1[i] - arr2[j]);
        }

        if (arr1[i] < arr2[j])
            i++;
        else
            j++;
    }
    return res;
}




let A = [-1, 5, 10, 20, 28, 3];
let B = [26, 134, 135, 15, 17];
console.log(minAbs(A, B));