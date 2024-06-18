
function sort(arr, left, right) {
    if (left < right) {
        let mid = Math.floor((left + right) / 2);
        sort(arr, left, mid);
        sort(arr, mid + 1, right);
        merge(arr, left, mid, right);
    }
    return arr;
}


function merge(arr, left, mid, right) {
    let sorted = [];
    let i = left, j = mid + 1;

    while (i <= mid && j <= right) {
        if (arr[i] <= arr[j]) {
            sorted.push(arr[i]);
            i++;
        } else {
            sorted.push(arr[j]);
            j++;
        }
    }

    while (i <= mid) {
        sorted.push(arr[i]);
        i++;
    }

    while (j <= right) {
        sorted.push(arr[j]);
        j++;
    }


    for (let k = left; k <= right; k++) {
        arr[k] = sorted[k - left];
    }

    return arr;
}

let arr = [1000, 20, 3, 4, 67, 12];
console.log(sort(arr, 0, arr.length - 1));
