const {
  caesarStreamEncode,
  caesarStreamDecode,
  rot8StreamEncode,
  rot8StreamDecode,
  atbashStreamEncode,
} = require('../streams/ciphersStreams');

const getCiphersStreams = (args) => {
  return args.map((arg) => {
    switch (arg) {
      case 'A':
        return atbashStreamEncode();
      case 'C1':
        return caesarStreamEncode();
      case 'C0':
        return caesarStreamDecode();
      case 'R1':
        return rot8StreamEncode();
      case 'R0':
        return rot8StreamDecode();
    }
  });
};

module.exports = { getCiphersStreams };
