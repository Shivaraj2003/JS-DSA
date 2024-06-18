class Node{
    constructor(val)
    {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

function dfs(root = null){
    console.log("DFS OPERATION");
    const stack = [root];
    if(!root)
        console.log('Empty tree');
    else{
        while(stack.length>0)
        {
            const current = stack.pop();
            // console.log(stack)
            console.log(current.val);
            if(current.right)
                stack.push(current.right);
            if(current.left)
                stack.push(current.left);
            
        }
    }
}


function bfs(root = null){
    console.log("BFS OPERATION");
    const queue = [root];
    if(!root)
        console.log('Empty tree');
    else{
        while(queue.length>0)
        {
            const current = queue.shift();
            // console.log(stack)
            console.log(current.val);
            
            if(current.left)
                queue.push(current.left);
            if(current.right)
                queue.push(current.right);
            
        }
    }
}

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;

dfs(a);
bfs(a);
dfs();