function countingSort(arr)
{
    let start = 0,end= arr.length-1;
    let max = Math.max(...arr);

let count = [];

for(let i = 0;i<=max;i++)
{
    count[i] = 0;
}

for(let i =0;i<=end;i++)
{
    count[arr[i]]+=1;
}


for(let i=0,j=0;i<=max;i++)
{
    while(count[i]>0)
    {
        arr[j++] = i;
        count[i]--;
        
    }
}
return arr;
}

let arr = [1, 112, 30, 4, 2,4];
console.log(countingSort(arr));