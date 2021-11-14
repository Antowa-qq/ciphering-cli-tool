const fs = require('fs');
const path = require('path/posix');

const {
  IncorrectConfigError,
  FileError,
  ArgMissingError,
  ArgDuplicateError,
} = require('../utils/Errors');

const validateConfig = (config) => {
  const labels = ['C0', 'C1', 'R1', 'R0', 'A'];
  for (let i = 0; i < config.length; i++) {
    if (labels.indexOf(config[i]) === -1) {
      throw new IncorrectConfigError();
    }
  }
};

const validateFileExist = (filePath) => {};

const validateArgs = () => {
  const args = ['-c', '--config', '-i', '--input', '-o', '--output'];
  const processArgs = process.argv.filter((a) => a.startsWith('-') || a.startsWith('--'));

  if (!processArgs.includes('-c') && !processArgs.includes('--config')) {
    throw new ArgMissingError('-c, --config');
  }

  if (new Set(processArgs).size !== processArgs.length) {
    throw new ArgDuplicateError();
  }

  if (new Set(processArgs).size !== processArgs.length) {
    throw new ArgDuplicateError();
  }
};

module.exports = { validateConfig, validateFileExist, validateArgs };
