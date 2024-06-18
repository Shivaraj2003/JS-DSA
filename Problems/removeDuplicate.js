let str = 'abccbc';

let char = str.split('');

let stack = [];

stack[0] = char[0];
let top = 0;
for(let i =1;i<str.length;i++)
{
    if(char[i] === stack[top])
    {
        stack.pop();
        top--;
        
    }
    else{
        stack.push(char[i]);
        top++;
    }
}

console.log(stack.toString());