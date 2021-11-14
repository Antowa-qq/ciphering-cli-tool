let alphabetClassic = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
let alphabetAtbash = 'zyxwvutsrqponmlkjihgfedcbaZYXWVUTSRQPONMLKJIHGFEDCBA';

const atbashEncode = (text) => {
  return atbash(text, alphabetClassic, alphabetAtbash);
};

const atbash = (text, alphabetA, alphabetB) => {
  return text
    .split('')
    .map((symbol) => {
      if (alphabetA.indexOf(symbol) !== -1) {
        return alphabetB[alphabetA.indexOf(symbol)];
      }
      return symbol;
    })
    .join('');
};

module.exports = { atbashEncode };
