function isBalanced(x)
    {
        let stack = [];

        const map = new Map([['(',')'],
        ['{','}'],
        ['[',']']
        
        ]);
        
        let char = x.split('');
        
        for(let c of char)
        {
            // if(c === '(' )
            // {
            //     stack.push(')');
            // }
            // else if(c === '{')
            // {
            //     stack.push('}');
            // }
            //  else if(c === '[')
            // {
            //     stack.push(']');
            // }
            
            // else if(c === stack.pop())
            // {
            //     continue;
            // }
            // else
            //     return false;

            if(map.has(c))
            {
                stack.push(map.get(c));
            }
            else if(c === stack.pop())
             {
                 continue;
             }
             else
                 return false;
        }
        
        return !stack.length;
    }

    console.log(isBalanced('{[(([]))]}'));
    console.log(isBalanced('{[(([(])))]}'));

