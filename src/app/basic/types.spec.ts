import { increment } from './types';

describe('Basic 1 - Types', () => {
  it('Should be return 30', () => {
    const res = increment(29);
    expect(res).toBe(30);
  });
});