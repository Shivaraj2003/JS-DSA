function merge(arr1,arr2)
{
    let res = [];

    while(arr1.length && arr2.length)
    {
        res.push(arr1.shift());
        res.push(arr2.shift());
    }

    while(arr1.length)
    {
        res.push(arr1.shift());
    }
    while(arr2.length)
    {
        res.push(arr2.shift());
    }

    console.log(res);
}

merge([1,2,3],[4,5,6]);

merge([1,2,3],[4,5,6,7,8,9]);
merge([1,2,3,1,22,33,44,55,66,77],[4,5,6,7,8,9]);