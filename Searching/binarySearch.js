function binarySearch(arr,key)
{
    let start = 0;
    let end = arr.length-1;
    while(start<=end)
    {
    let mid = Math.floor((start+end)/2);
    if(arr[mid]===key)
        return mid+1;
    else if(key>arr[mid])
    {
        start = mid+1;
    }
    else
    end = mid -1;

    }
    return -1;
}

let arr = [1,2,3,6,4];
let key =30;
 let ans = binarySearch(arr,key);
if(ans ===-1)
{
    console.log("Key is not present in the array");
}
else{
    console.log("Key is present at the position ",ans);
}