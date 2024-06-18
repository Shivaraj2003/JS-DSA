let arr = [1,2,4,5];
console.log(arr);

arr.splice(2,0,3);
console.log(arr);

let pos = 2;
//insertion
for(let i = arr.length-1;i>=pos-1;i--)
{
    arr[i+1]=arr[i];
}
arr[pos-1]=300;

console.log(arr);

//delete

for(let i =pos-1;i<arr.length; i++)
{
    arr[i] =arr[i+1];
}
delete arr[arr.length-1];
console.log(arr);