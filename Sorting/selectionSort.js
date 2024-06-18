function selectionSort(arr){

    for(let i=0;i<arr.length;i++)
    {

        for(let j =i+1; j<arr.length;j++)
        {
            if(arr[j]<arr[i])
            {
                arr[i] = arr[j]+arr[i];
                arr[j] = arr[i] - arr[j];
                arr[i] = arr[i] - arr[j];
            }
        }
    }
    return arr;
}

let arr = [1000,20,3,4,67,12];
console.log(selectionSort(arr));