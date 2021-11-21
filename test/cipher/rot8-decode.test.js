const { rot8Decode } = require('../../ciphers/rot-8');

describe('Encrypt rot-8', () => {
  test('Only latin letters ', () => {
    let i = 'zhWAxh213!@!@#76623ыфвфы';
    let o = 'rzOSpz213!@!@#76623ыфвфы';

    expect(rot8Decode(i)).toBe(o);
  });

  test('keep register ', () => {
    let i = 'abcABC';
    let o = 'stuSTU';

    expect(rot8Decode(i)).toBe(o);
  });

  test('Correct operation of the algorithm', () => {
    let i = 'abcABC';
    let o = 'stuSTU';

    expect(rot8Decode(i)).toBe(o);
  });
});
