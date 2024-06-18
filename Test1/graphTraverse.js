function graphtraverse(width,height)
{
    if(width === 1 || height === 1)
        return 1;
    return graphtraverse(width-1,height)+ graphtraverse(width,height-1);
}

console.log(graphtraverse(3,2));