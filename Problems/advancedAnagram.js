function advancedAngaram(arr){
    let map = new Map();
    for(let i in arr)
    {
        console.log(typeof i)
            let word = arr[i];
            let key = word.split('').sort().join('');
            if(!map.has(key))
            {
                map.set(key,[i-'0']);
            }
            else{
                let index = map.get(key);
                index.push(i-'0');
                map.set(key,index);
            }
    }
    for(let [k,v] of map)
    {
        console.log(v);
    }

}

let arr = ['dog','cat','god','cat','shiv'];
advancedAngaram(arr)