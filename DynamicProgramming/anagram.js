function isAnagram(str1,str2){
    
    if(str1.length !==str2.length)
        return false;

     return JSON.stringify(str1.split('').sort())==JSON.stringify(str2.split('').sort());
}

console.log(isAnagram('nameless','salesmen'));