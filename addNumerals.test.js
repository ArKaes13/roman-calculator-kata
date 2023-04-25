const addNumerals = require('./addNumerals.js');

test('adds I + I to equal II', () => {
  expect(addNumerals('I', 'I')).toBe('II');
});