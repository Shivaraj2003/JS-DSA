function nonRepeating(str){

    let map = new Map();
    str = str.toLowerCase();
    let chars = str.split('');

    for(let i in chars)
    {
        if(!map.has(chars[i])){
            map.set(chars[i],1);
        }
        else{
            map.set(chars[i],map.get(chars[i])+1);
        }
    }

    for(let val of chars)
    {
        if(map.get(val) === 1)
        {
            return val;
        }
    }

}

let str = 'Scaler academy for classes';

console.log(nonRepeating(str));