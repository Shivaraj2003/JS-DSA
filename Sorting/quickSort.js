
function partition(arr, start, end) {
    let i = start + 1, j = end;
    let pivot = arr[start];

    for (; ;) {
        while (arr[i] < pivot && i < end) {
            i++;
        }
        while (arr[i] > pivot && j > start) {
            j--;

        }

        if (i < j) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }

        else {
            temp = arr[start];
            arr[start] = arr[j];
            arr[j] = temp;

            return j;
        }
    }
}


function quickSort(arr, start, end) {
    if (start >= end) {
        return;
    }
    let pivotIndex = partition(arr, start, end);

    quickSort(arr, start, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, end);
    return arr;
}

let arr = [1, 112, 30, 4, 2];
console.log(quickSort(arr, 0, arr.length - 1));