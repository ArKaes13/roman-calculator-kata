const addNumerals = require('./addNumerals.js');

test('adds I + I to equal II', () => {
  expect(addNumerals('I', 'I')).toBe('II');
});
test('adds II + I to equal III', () => {
    expect(addNumerals('II', 'I')).toBe('III');
});
test('adds III + I to equal IV', () => {
    expect(addNumerals('III', 'I')).toBe('IV');
});
test('adds II + II to equal IV', () => {
    expect(addNumerals('II', 'II')).toBe('IV');
});
test('adds III + II to equal V', () => {
    expect(addNumerals('III', 'II')).toBe('V');
});
test('adds III + III to equal VI', () => {
    expect(addNumerals('III', 'III')).toBe('VI');
});
