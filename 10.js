function createPhoneNumber(numbers) {
    
    let numberString = numbers.join('');
    return `(${numberString.substring(0, 3)}) ${numberString.substring(3, 6)}-${numberString.substring(6)}`;
}