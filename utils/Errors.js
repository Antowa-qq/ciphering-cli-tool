const { ERRORS } = require('../constans/errors');

class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ValidationError';
  }
}

class IncorrectConfigError extends ValidationError {
  constructor() {
    super(ERRORS.ERR_INVALID_CONFIG);
  }
}

class FileError extends ValidationError {
  constructor() {
    super(ERRORS.ERR_FILE_DOES_NOT_EXIST);
  }
}

class ArgMissingError extends ValidationError {
  constructor(args) {
    super(ERRORS.ERR_MISSING_ARG + args);
    this.args = args;
  }
}

class ArgDuplicateError extends ValidationError {
  constructor() {
    super(ERRORS.ERR_DUPLICATE_ARGS);
  }
}
class ArgInvalidError extends ValidationError {
  constructor(args) {
    super(ERRORS.ERR_INVALID_ARG + args);
    this.args = args;
  }
}

module.exports = {
  IncorrectConfigError,
  FileError,
  ArgMissingError,
  ArgDuplicateError,
  ArgInvalidError,
};
