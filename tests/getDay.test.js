import { describe, it, expect } from 'vitest';
import { getDay } from '../src/data/processors';

describe('getDay unit test', () => {
  it('returns the day of the week based on the given unix timestamp', () => {
    expect(getDay(1686279600)).toBe('Friday');
    expect(getDay(1686020400)).toBe('Tuesday');
  });
});
