function whatCentury(year) {
    let century = Math.ceil(Number(year) / 100);
    let suffix;
    switch (century % 10) {
        case 1:
            suffix = century === 11 ? 'th' : 'st'; 
            break;
        case 2:
            suffix = century === 12 ? 'th' : 'nd'; 
            break;
        case 3:
            suffix = century === 13 ? 'th' : 'rd'; 
            break;
        default:
            suffix = 'th';
    }
    return century + suffix;
}
module.exports = { whatCentury };