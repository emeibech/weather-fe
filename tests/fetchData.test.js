// eslint-disable-next-line object-curly-newline
import { describe, it, expect, beforeEach, vitest } from 'vitest';
import fetchData from '../src/data/fetchData';

describe('fetchData', () => {
  beforeEach(() => vitest.resetAllMocks());

  it('fetches data from a URL and returns the parsed JSON data', async () => {
    // Mock the fetch function
    global.fetch = vitest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve({ message: 'Hello, World!' }),
    }));

    const url = 'https://example.com/api/data';
    const data = await fetchData(url);

    expect(fetch).toHaveBeenCalledWith(url);
    expect(data).toEqual({ message: 'Hello, World!' });
  });

  it('logs error and return null when fetching failed', async () => {
    // Mock the fetch function to throw an error
    const mockError = 'An error occurred while fetching data';
    global.fetch = vitest.fn().mockRejectedValue(mockError);
    console.error = vitest.fn();

    const url = 'https://example.com/api/data';
    const data = await fetchData(url);

    expect(fetch).toHaveBeenCalledWith(url);
    expect(console.error).toHaveBeenCalledWith(mockError);
    expect(data).toBe(null);
  });
});
