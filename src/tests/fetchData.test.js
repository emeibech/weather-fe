// eslint-disable-next-line import/no-extraneous-dependencies
import {
  describe,
  it,
  expect,
  beforeEach,
  vitest,
} from 'vitest';
import fetchData from '../data/fetchData';

describe('fetchData', () => {
  beforeEach(() => {
    vitest.resetAllMocks();
  });

  it('fetches data from a given URL', async () => {
    const url = 'https://fakeurl.com/api/data';
    const expectedData = { data: 'Expected data' };

    // Mocking the fetch function and the response
    global.fetch = vitest.fn().mockResolvedValue({
      json: vitest.fn().mockResolvedValue(expectedData),
    });

    const data = await fetchData(url);

    expect(fetch).toHaveBeenCalledWith(url);
    expect(data).toEqual(expectedData);
  });

  it('handles errors and return the error object', async () => {
    const url = 'https://fakeurl.com/api/data';
    const expectedError = new Error('Request failed');

    // Mocking the fetch function and causing an error
    global.fetch = vitest.fn().mockRejectedValue(expectedError);

    console.error = vitest.fn();

    const error = await fetchData(url);

    expect(fetch).toHaveBeenCalledWith(url);
    expect(console.error).toHaveBeenCalledWith(expectedError);
    expect(error).toEqual(expectedError);
  });
});
