function primeFactors(n) {
    if (n < 1) return "";
    let factors = {};
    let num = n;
    while (num % 2 === 0) {
        factors[2] = (factors[2] || 0) + 1;
        num /= 2;
    }
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        while (num % i === 0) {
            factors[i] = (factors[i] || 0) + 1;
            num /= i;
        }
    }
    if (num > 2) {
        factors[num] = 1;
    }
    let result = "";
    let primes = Object.keys(factors).map(Number).sort((a, b) => a - b);
    
    for (let prime of primes) {
        let exponent = factors[prime];
        result += `(${prime}${exponent > 1 ? `**${exponent}` : ''})`;
    }
    
    return result;
}
console.log(primeFactors(86240)); 
console.log(primeFactors(7775460));