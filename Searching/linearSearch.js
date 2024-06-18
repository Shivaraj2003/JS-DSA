function linearSearch(arr,key)
{
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]===key)
        {
            return i+1;
        }

    }
    return -1;
}

let arr = [1,2,3,6,4];
let key =3;
 let ans = linearSearch(arr,key);
if(ans ===-1)
{
    console.log("Key is not present in the array");
}
else{
    console.log("Key is present at the position ",ans)
}