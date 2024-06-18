
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {

        let currentValue = arr[i]

        let j
        for (j = i - 1; j >= 0; j--) {

            if (arr[j] > currentValue)
                arr[j + 1] = arr[j];
            else
                break;
        }
        arr[j + 1] = currentValue
    }
    return arr
}

//we can also write 
// for (j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
//       arr[j + 1] = arr[j]
//     }
let arr = [1, 23, 55, 67, 2, 5];
console.log(insertionSort(arr))
