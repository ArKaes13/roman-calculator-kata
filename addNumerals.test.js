const addNumerals = require('./addNumerals.js');

test('adds I + I to equal II', () => {
  expect(addNumerals('I', 'I')).toBe('II');
});
test('adds II + I to equal III', () => {
    expect(addNumerals('II', 'I')).toBe('III');
});
