const ones = {
    I: 'I',
    II: 'II',
    III: 'III',
    IIII: 'IV',
    IIIII: 'V',
    IIIIII: 'VI',
}

function addNumerals(a, b) {
    let sum = a + b;
    return ones[sum];
}

module.exports = addNumerals;