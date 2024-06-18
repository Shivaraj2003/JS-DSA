function nextGreater(arr)
{
let res = [];
let stack = [];

stack.push(0);
let top = 0;

for(let i = 1;i<arr.length;i++)
{
    if(arr[i]<=arr[stack[top]])
    {
        top++;
        stack[top] = i;
    }
    else if(top == -1)
    {
        
        {
            res[i]=-1
        }
    }
    else{
        while(arr[stack[top]] < arr[i])
        {
            res[stack[top]] = arr[i];
            top--;
            stack.pop();
        }
        
    }
    
}
return res;
}

let arr = [ 11, 4, 3, 2, 10, 12 ];
console.log(nextGreater(arr));