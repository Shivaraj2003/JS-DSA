function divideString(str, A){
    let map = new Map();

    let arr = str.split('');

    for(let val of arr)
    {
        if(map.has(val))
        {
            map.set(val,map.get(val)+1)
        }
        else{
            map.set(val,1);
        }
    }

if(A=== 1 && map.size!==1)
return false;
    for([key,val] of map)
    {
        if(val%A)
            return false;
    }
    return true;
}

console.log(divideString('aabbcc',2));