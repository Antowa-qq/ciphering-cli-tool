const { atbashEncode } = require('../../ciphers/atbash');

describe('Atbash', () => {
  test('Only latin letters ', () => {
    let i = 'zhWAxh213!@!@#76623ыфвфы';
    let o = 'asDZcs213!@!@#76623ыфвфы';
    expect(atbashEncode(i)).toBe(o);
  });

  test('keep register ', () => {
    let i = 'abcABC';
    let o = 'zyxZYX';
    expect(atbashEncode(i)).toBe(o);
  });

  test('Correct operation of the algorithm', () => {
    let i = 'abcABC';
    let o = 'zyxZYX';
    expect(atbashEncode(i)).toBe(o);
  });
});
