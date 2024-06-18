function rBinarySearch(arr, key) {
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (arr[mid] === key)
            return mid + 1;
        else if (key > arr[mid]) {
            rBinarySearch(arr.slice(0, mid))
        }
        else {

            rBinarySearch(arr.slice(0, mid), key);
        }

    }
    return -1;
}

let arr = [1, 2, 3, 6, 4];
let key = 3;
let ans = rBinarySearch(arr, key);
if (ans === -1) {
    console.log("Key is not present in the array");
}
else {
    console.log("Key is present at the position ", ans);
}