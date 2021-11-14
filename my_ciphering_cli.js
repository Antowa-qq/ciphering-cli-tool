const fs = require('fs');
const { pipeline } = require('stream');
const { getConfig } = require('./utils/getConfig');
const { getCiphersStreams } = require('./utils/getCiphersStreams');
const { getInput, getOutput } = require('./utils/io');
const { validateConfig, validateFileExist, validateArgs } = require('./validation/validation');

try {
  validateArgs();
  validateConfig(getConfig(['-c', '--config']).split('-'));
  // validateFileExist(getConfig(['-i', '--input']));
  // validateFileExist(getConfig(['-o', '--output']));

  const config = getConfig(['-c', '--config']);
  const input = getInput(getConfig(['-i', '--input']));
  const output = getOutput(getConfig(['-o', '--output']));

  pipeline(input, ...getCiphersStreams(config.split('-')), output, (err) => {
    if (err) {
      console.error('An error has occurred!', err);
    } else {
      console.log('The program has been successfully completed!');
    }
  });
} catch (e) {
  process.stderr.write('Error: ' + e.message);
  process.exit(1);
}
