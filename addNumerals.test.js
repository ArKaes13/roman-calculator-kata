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
test('adds IV + I to equal V', () => {
    expect(addNumerals('IV', 'I')).toBe('V');
});
test('adds III + III to equal VI', () => {
    expect(addNumerals('III', 'III')).toBe('VI');
});
test('adds IV + II to equal VI', () => {
    expect(addNumerals('IV', 'II')).toBe('VI');
});
test('adds IV + III to equal VII', () => {
    expect(addNumerals('IV', 'III')).toBe('VII');
});
test('adds V + II to equal VII', () => {
    expect(addNumerals('V', 'II')).toBe('VII');
});
test('adds IV + IV to equal VIII', () => {
    expect(addNumerals('IV', 'IV')).toBe('VIII');
});
test('adds V + III to equal VIII', () => {
    expect(addNumerals('V', 'III')).toBe('VIII');
});
test('adds VI + III to equal IX', () => {
    expect(addNumerals('VI', 'III')).toBe('IX');
});
test('adds V + IV to equal IX', () => {
    expect(addNumerals('V', 'IV')).toBe('IX');
});
test('adds V + V to equal X', () => {
    expect(addNumerals('V', 'V')).toBe('X');
});
test('adds VIII + II to equal X', () => {
    expect(addNumerals('VIII', 'II')).toBe('X');
});
test('adds VI + V to equal XI', () => {
    expect(addNumerals('VI', 'V')).toBe('XI');
});
test('adds IX + II to equal XI', () => {
    expect(addNumerals('IX', 'II')).toBe('XI');
});
test('adds VI + VI to equal XII', () => {
    expect(addNumerals('VI', 'VI')).toBe('XII');
});
test('adds X + II to equal XII', () => {
    expect(addNumerals('X', 'II')).toBe('XII');
});


