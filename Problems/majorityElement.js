function majorityElement(arr) {
    
    let n = arr.length;

    for (let i = 0; i < n; i++) {
        
        let cnt = 0;
        for (let j = 0; j < n; j++) {
            
            if (arr[j] === arr[i]) {
                cnt++;
            }
        }
        if (cnt > Math.floor(n / 2)) {
            return arr[i];
        }
    }

    return -1;
}

let arr = [2, 2, 1, 1, 1, 2, 2];
let ans = majorityElement(arr);
console.log("The majority element is:", ans);