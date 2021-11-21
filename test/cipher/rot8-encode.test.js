const { rot8Encode } = require('../../ciphers/rot-8');

describe('Decode rot-8', () => {
  test('Only latin letters ', () => {
    let i = 'zhWAxh213!@!@#76623ыфвфы';
    let o = 'hpEIfp213!@!@#76623ыфвфы';

    expect(rot8Encode(i)).toBe(o);
  });

  test('keep register ', () => {
    let i = 'abcABC';
    let o = 'ijkIJK';

    expect(rot8Encode(i)).toBe(o);
  });

  test('Correct operation of the algorithm', () => {
    let i = 'abcABC';
    let o = 'ijkIJK';

    expect(rot8Encode(i)).toBe(o);
  });
});
