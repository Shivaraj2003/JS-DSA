
function isBalanced(str)
{
let stack = [];
let top = -1;
for(let i =0;i<str.length;i++)
{
    if(str[i] === '(')
    {
       top++;
       stack[top] = str[i];
        
    }
    else{
        stack.pop();
        top--;
    }

 
}
if(top == -1)
    return 'Balanced Parenthesis';

return 'Not Balanced Parenthesis';}

let str1 = '()(())';
let str2 = '()(())())';


console.log(isBalanced(str1));
console.log(isBalanced(str2));