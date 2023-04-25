const numerals = {
    I: 'I',
    II: 'II',
    III: 'III',
    IIII: 'IV',
    IIIII: 'V',
    IIIIII: 'VI',
    IIIIIII: 'VII',
    IIIIIIII: 'VIII',
    IIIIIIIII: 'IX',
    IIIIIIIIII: 'X',
    IIIIIIIIIII: 'XI',
    IIIIIIIIIIII: 'XII',
    IIIIIIIIIIIII: 'XIII',
    IIIIIIIIIIIIII: 'XIV',
    IIIIIIIIIIIIIII: 'XV',
    IIIIIIIIIIIIIIII: 'XVI',
    IIIIIIIIIIIIIIIII: 'XVII',
    IIIIIIIIIIIIIIIIII: 'XVIII',
    IIIIIIIIIIIIIIIIIII: 'XIX',
    IIIIIIIIIIIIIIIIIIII: 'XX'
  };

function addNumerals(a, b) {
    let values = Object.values(numerals);
    let keys = Object.keys(numerals);
    let aToOnes = keys[values.indexOf(a)];
    let bToOnes = keys[values.indexOf(b)];
    let sum = aToOnes + bToOnes;

    return numerals[sum];
}

module.exports = addNumerals;

