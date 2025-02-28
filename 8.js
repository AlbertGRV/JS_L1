function expandedForm(num) {
  
    let numStr = num.toString();
    let result = [];
    
    for (let i = 0; i < numStr.length; i++) {
        let digit = parseInt(numStr[i])
        if (digit > 0) {
            let placeValue = digit * Math.pow(10, numStr.length - i - 1);
            result.push(placeValue);
        }
    }
    return result.join(" + ");
}