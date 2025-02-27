function hasTwoCubeSums(n) {
    let pairs = new Set(); 
    const max = Math.floor(Math.cbrt(n)) + 1;
    for (let a = 1; a < max; a++) {
        for (let b = a + 1; b < max; b++) { 
            let sum = Math.pow(a, 3) + Math.pow(b, 3);
            if (sum === n) {
                pairs.add(`${a},${b}`); 
            }
        }
    }
    if (pairs.size < 2) {
        return false;
    }
    let pairArray = Array.from(pairs).map(pair => pair.split(',').map(Number));
    for (let i = 0; i < pairArray.length; i++) {
        for (let j = i + 1; j < pairArray.length; j++) {
            let [a, b] = pairArray[i];
            let [c, d] = pairArray[j];
            
            if (a !== c && a !== d && b !== c && b !== d) {
                return true; 
            }
        }
    }

    return false; 
}

module.exports = { hasTwoCubeSums };