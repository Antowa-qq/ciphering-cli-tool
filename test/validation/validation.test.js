const { validateConfig, validateFileExist, validateArgs } = require('../../validation/validation');
const { execFile } = require('child_process');

const {
  IncorrectConfigError,
  FileError,
  ArgInvalidError,
  ArgMissingError,
  ArgDuplicateError,
} = require('../../utils/Errors');

const mockValidateConfig = jest.fn(validateConfig);
const forEach = (items, callback) => {
  for (let index = 0; index < items.length; index++) {
    callback(items[index]);
  }
};

describe('Validation', () => {
  const confCorrect = [
    ['C1', 'R1', 'R0', 'A'],
    ['C1', 'A'],
  ];

  test('should value be to true', () => {
    forEach(confCorrect, mockValidateConfig);
    expect(mockValidateConfig.mock.results[0].value).toBe(mockValidateConfig.mock.results[0].value);
    expect(mockValidateConfig.mock.results[1].value).toBe(mockValidateConfig.mock.results[1].value);
  });

  test('Valid data transferred to the config', () => {
    const c = ['C1', 'R1', 'R0', 'A'];
    expect(validateConfig(c)).toBe(c);
  });

  test('Invalid data transferred to the config', () => {
    const с = ['C', 'C1', 'A1'];
    expect(() => validateConfig(с)).toThrow('Please check the data transferred to the config!');
  });

  test('Filtepath not ex', () => {
    expect(() => validateFileExist('./ewr.txx')).toThrow('No such file or directory: ./ewr.txx');
  });

  test('Filtepath ex', () => {
    const filepath = './input.txt';
    expect(validateFileExist(filepath)).toBe(filepath);
  });

  test('valid arg config , -c/--config', () => {
    process.argv.push('-c');
    expect(validateArgs()).toBe(undefined);
  });

  test('missing -c/--config', () => {
    process.argv = [];
    expect(() => validateArgs()).toThrow('Missing arg: -c, --config');
  });
});
