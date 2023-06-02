import { describe, it, expect } from 'vitest';
import { getWindDirection } from '../src/data/processors';

describe('getWindDirection unit test', () => {
  it('returns correct direction equivalent of the given wind degree', () => {
    expect(getWindDirection(0)).toBe('N');
    expect(getWindDirection(135)).toBe('SE');
    expect(getWindDirection(300)).toBe('WNW');
  });
});
