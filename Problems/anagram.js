function isAnagram(str1,str2)
{
    let map = new Map();

    for(let i of str1)
    {
        if(map.has(i)){
            map.set(i, map.get(i)+1);
        }
        else{
            map.set(i,1)
        }
    }

for(let [k,v] of map)
    {
        console.log(v);
    }

    for(let i of str2)
    {
       if(map.has(i))
       {
        map.set(i, map.get(i)-1);
       }
       else{
        return false;
       }

       if(map.get(i)===0)
        map.delete(i);

    }

    return true;
}

function isAnagram2(str1,str2){
    return str1.split('').sort().join('')===str1.split('').sort().join('');
}


console.log(isAnagram('eat','ate'));
console.log(isAnagram2('eat','ate'));