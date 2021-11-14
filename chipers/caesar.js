const caesarEncode = (text) => {
  return caesar(text, 1);
};

const caesarDecode = (text) => {
  return caesar(text, -1);
};

const caesar = (text, shift) => {
  return text
    .split('')
    .map((letter) => {
      if (letter.match(/[a-zA-Z]/)) {
        const temp = letter.charCodeAt() >= 97 ? 97 : 65;
        return String.fromCharCode(((letter.charCodeAt() + 26 - temp + shift) % 26) + temp);
      }
      return letter;
    })
    .join('');
};

module.exports = { caesarEncode, caesarDecode, caesar };
