const fs = require('fs');

const {
  IncorrectConfigError,
  FileError,
  ArgInvalidError,
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

const validateFileExist = (filePath) => {
  if (!fs.existsSync(filePath) && filePath !== null) {
    throw new FileError(filePath);
  }
};

const validateArgs = () => {
  const args = ['-c', '--config', '-i', '--input', '-o', '--output'];
  const processArgs = process.argv.filter((a) => a.startsWith('-') || a.startsWith('--'));

  if (!processArgs.includes('-c') && !processArgs.includes('--config')) {
    throw new ArgMissingError('-c, --config');
  }

  if (!processArgs.every((a) => args.includes(a))) {
    throw new ArgInvalidError(processArgs.filter((a) => !args.includes(a)).join(', '));
  }

  if (new Set(processArgs).size !== processArgs.length) {
    throw new ArgDuplicateError();
  }
};

module.exports = { validateConfig, validateFileExist, validateArgs };
