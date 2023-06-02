import { describe, it, expect } from 'vitest';
import { capitalize } from '../src/data/processors';

describe('capitalize unit test', () => {
  it('capitalizes the string parameter and return it', () => {
    expect(capitalize('light rain')).toBe('Light Rain');
    expect(capitalize('kikkeriki')).toBe('Kikkeriki');
  });
});
