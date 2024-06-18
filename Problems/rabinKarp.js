function rabinKarp(text, pattern) {
    const textLength = text.length;
    const patternLength = pattern.length;
    const prime = 101; // Prime number 

    // Calculate the hash value for a string
    function calculateHash(str, length) {
        let hash = 0;
        for (let i = 0; i < length; i++) {
            hash += str.charCodeAt(i) * Math.pow(prime, i);
        }
        return hash;
    }

    const patternHash = calculateHash(pattern, patternLength);
    let textHash = calculateHash(text, patternLength);

    for (let i = 0; i <= textLength - patternLength; i++) {
        if (textHash === patternHash) {
            let found = true;
            for (let j = 0; j < patternLength; j++) {
                if (text[i + j] !== pattern[j]) {
                    found = false;
                    break;
                }
            }
            if (found) {
                console.log(`Pattern found at index ${i}`);
            }
        }
        if (i < textLength - patternLength) {
            // Update the hash value for the next window
            textHash = prime * (textHash - text.charCodeAt(i) * Math.pow(prime, 0)) +
                text.charCodeAt(i + patternLength);
        }
    }
}


const text = "ABABDABACDABABCABAB";
const pattern = "ABABCABAB";
rabinKarp(text, pattern);