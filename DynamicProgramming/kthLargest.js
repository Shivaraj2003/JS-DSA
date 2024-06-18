function kthLargest(arr,k){

    // console.log(arr.length-k);
    return arr.sort((a,b)=>a-b)[arr.length-k]
}

console.log(kthLargest([1,2],2));