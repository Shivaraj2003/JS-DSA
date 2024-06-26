function print(n1,n2)
{
    for(let i =n1;i<=n2;i++)
    {
        if(i%3===0)
        {
            if(i%5==0)
            {
                console.log(i,'Fizz');
            }
            else{
                console.log(i,'Fizz Fizz Fizz');
            }
        }
        else if(i%5==0)
        {
            console.log(i,'Fizz Fizz Fizz Fizz Fizz');
        }
    }
}

print(1,15)