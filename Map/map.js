const map = new Map([['a',1],['b',2]]);

map.set('c',3);
map.delete('a');
console.log(map.has('a'));
console.log(map.has('c'));
console.log(map.size);

for (let [key,value] of map){
    console.log(key+'->'+value);
}