const { Transform } = require('stream');
const { caesarEncode, caesarDecode } = require('../ciphers/caesar');
const { rot8Encode, rot8Decode } = require('../ciphers/rot-8');
const { atbashEncode } = require('../ciphers/atbash');

const getTransformChipers = (fnCallback) => {
  return new Transform({
    transform(chunk, encoding, callback) {
      let text = chunk.toString().trim() + '\n';
      callback(null, fnCallback(text));
    },
  });
};

module.exports = {
  caesarStreamEncode: () => {
    return getTransformChipers(caesarEncode);
  },

  caesarStreamDecode: () => {
    return getTransformChipers(caesarDecode);
  },

  rot8StreamEncode: () => {
    return getTransformChipers(rot8Encode);
  },

  rot8StreamDecode: () => {
    return getTransformChipers(rot8Decode);
  },

  atbashStreamEncode: () => {
    return getTransformChipers(atbashEncode);
  },
};
