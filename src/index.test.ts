import add from './index';

it('Should sum the numbers', () => expect(add(2, 2)).toBe(4));
it('Should sum negative numbers', () => expect(add(5, -2)).toBe(3));
