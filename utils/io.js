const { ReadStream } = require('../streams/ReadStream');
const { WriteStream } = require('../streams/WriteStream');

const getInput = (inputPath) => {
  return inputPath === null ? process.stdin : new ReadStream(inputPath);
};

const getOutput = (outputPath) => {
  return outputPath === null ? process.stdout : new WriteStream(outputPath);
};

module.exports = { getInput, getOutput };
