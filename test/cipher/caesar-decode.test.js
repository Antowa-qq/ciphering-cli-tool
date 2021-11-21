const { caesarDecode } = require('../../ciphers/caesar');

describe('Decode Caesar', () => {
  test('Only latin letters ', () => {
    let i = 'zhWAxh213!@!@#76623ыфвфы';
    let o = 'ygVZwg213!@!@#76623ыфвфы';

    expect(caesarDecode(i)).toBe(o);
  });

  test('keep register ', () => {
    let i = 'abcABC';
    let o = 'zabZAB';

    expect(caesarDecode(i)).toBe(o);
  });

  test('Correct operation of the algorithm', () => {
    let i = 'abcABC';
    let o = 'zabZAB';

    expect(caesarDecode(i)).toBe(o);
  });
});
