function index(arr,target)
{
    let startDone = false,  endDone=false;
    let ans = [];

    for(let i = 0,j =arr.length-1; i<=j; i++,j--)
    {
        if(arr[i]==target && !startDone)
        {
            ans.unshift(i);
            startDone = true;
        }
        if(arr[j]==target && !endDone)
        {
            ans.push(j);
            endDone = true;
        }
    }
    return ans;
}

let arr = [1,2,3,5,5,5,5,5,6,6,7];
console.log(index(arr,5));