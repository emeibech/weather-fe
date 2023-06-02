import { describe, it, expect } from 'vitest';
import { completeUVI } from '../src/data/processors';

describe('completeUVI unit test', () => {
  it('returns the uvi and its equivalent radiation level', () => {
    expect(completeUVI(2)).toBe('2 Low');
    expect(completeUVI(5)).toBe('5 Moderate');
    expect(completeUVI(7)).toBe('7 High');
    expect(completeUVI(10)).toBe('10 Very High');
    expect(completeUVI(11)).toBe('11 Extreme');
  });
});
