function binToDec(bin) {
    let string2Int = parseInt(bin, 2);
    return string2Int;
}

console.log(binToDec('1')) // 1
console.log(binToDec('0')) // 0
console.log(binToDec('1001001')) // 73