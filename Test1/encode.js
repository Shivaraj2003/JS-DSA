
function transform(S) {
    let stack = [];
    let top = -1;

    let ans = '';

    for (let i of S) {
        if (top == -1 || stack[top] == i) {
            stack.push(i);
            top++;
        }
        else {

            ans += stack.length + stack[0];
            stack = [];
            stack.push(i)
            top = 0;
        }

    }
    ans += stack.length + stack[0];
    return ans;
}

console.log(transform('aaabba'));
console.log(transform('abc'));
console.log(transform('xyabxy'));

