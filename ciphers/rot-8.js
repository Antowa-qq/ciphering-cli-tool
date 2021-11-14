const { caesar } = require('./caesar');

const rot8Encode = (text) => {
  return caesar(text, 8);
};

const rot8Decode = (text) => {
  return caesar(text, -8);
};

module.exports = { rot8Encode, rot8Decode };
