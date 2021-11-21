const { caesarEncode } = require('../../ciphers/caesar');

describe('Encode Caesar', () => {
  test('Only latin letters ', () => {
    let i = 'zhWAxh213!@!@#76623ыфвфы';
    let o = 'aiXByi213!@!@#76623ыфвфы';

    expect(caesarEncode(i)).toBe(o);
  });

  test('keep register ', () => {
    let i = 'abcABC';
    let o = 'bcdBCD';

    expect(caesarEncode(i)).toBe(o);
  });

  test('Correct operation of the algorithm', () => {
    let i = 'abcABC';
    let o = 'bcdBCD';

    expect(caesarEncode(i)).toBe(o);
  });
});
