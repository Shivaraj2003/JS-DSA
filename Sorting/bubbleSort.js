function bubbleSort(arr) {

    for (let i = 0; i < arr.length; i++) {

        for (let j = 0; j < arr.length - 1 - i; j++) {

            if (arr[j + 1] < arr[j]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]

            }
        }

    }
    return arr;
}

let arr = [1000, 20, 3, 4, 67, 12];
console.log(bubbleSort(arr));

