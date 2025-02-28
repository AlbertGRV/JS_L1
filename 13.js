function longest(arr, n) {
    const stringsWithInfo = arr.map((str, index) => ({
        str: str,
        length: str.length,
        originalIndex: index
    }));
    stringsWithInfo.sort((a, b) => {
        if (b.length !== a.length) {
            return b.length - a.length; 
        }
        return a.originalIndex - b.originalIndex; 
    });
    return stringsWithInfo[n - 1].str;
}