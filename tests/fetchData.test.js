// eslint-disable-next-line object-curly-newline
import { describe, it, expect, beforeEach, vitest } from 'vitest';
import fetchData from '../src/data/fetchData';

describe('fetchData', () => {
  beforeEach(() => vitest.resetAllMocks());

  it('should return data if response is ok', async () => {
    // Mock successful response
    const mockResponse = {
      ok: true,
      json: vitest.fn().mockResolvedValue({ message: 'Success' }),
    };
    global.fetch = vitest.fn().mockResolvedValue(mockResponse);

    // Call the fetchData function
    const data = await fetchData('https://example.com');

    // Verify the response
    expect(fetch).toHaveBeenCalledWith('https://example.com');
    expect(mockResponse.json).toHaveBeenCalled();
    expect(data).toEqual({ message: 'Success' });
  });

  it('should return status if response is not ok', async () => {
    // Mock unsuccessful response
    const mockResponse = {
      ok: false,
      status: 404,
    };
    global.fetch = vitest.fn().mockResolvedValue(mockResponse);

    // Call the fetchData function
    const status = await fetchData('https://example.com');

    // Verify the response
    expect(fetch).toHaveBeenCalledWith('https://example.com');
    expect(status).toEqual(404);
  });

  it('should log error if an exception occurs', async () => {
    // Mock console.error
    console.error = vitest.fn();

    // Mock rejected promise to simulate an exception
    global.fetch = vitest.fn().mockRejectedValue(new Error('Network error'));

    // Call the fetchData function
    await fetchData('https://example.com');

    // Verify the error logging
    expect(console.error).toHaveBeenCalledWith(new Error('Network error'));
  });
});
