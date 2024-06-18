function fibonacci(n){
    let fib = [];
    fib[0] = 0;
    fib[1] = 1;

    for(let i=2;i<=n;i++)
        fib[i]=fib[i-1]+fib[i-2];
 
    return fib[n];
}

console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(5));