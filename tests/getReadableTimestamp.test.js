import { describe, it, expect } from 'vitest';
import { getReadableTimestamp } from '../src/data/processors';

describe('getReadableTimestamp', () => {
  it('returns correct hour and minutes in hh:mm XM format', () => {
    // Test will probably fail outside of GMT +8 timezone
    expect(getReadableTimestamp(1685724523)).toEqual('12:48 AM');
  });
});
