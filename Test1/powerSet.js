function powerSet(array)
{
    let powerSet = [[],array];

    for(let i =0;i< array.length;i++)
    {
        powerSet.push([array[i]]);
        
        for(j=i+1;j< array.length;j++)
        {
        powerSet.push([array[i],array[j]]);
        }
    }

    console.log(powerSet);

}
powerSet([1,2,3]);