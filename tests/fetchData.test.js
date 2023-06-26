// eslint-disable-next-line object-curly-newline
import { describe, it, expect, beforeEach, vitest } from 'vitest';
import fetchData from '../src/data/fetchData';

describe('fetchData unit test', () => {
  beforeEach(() => vitest.clearAllMocks());

  it('returns data if response is ok', async () => {
    // Mock successful response
    const mockResponse = {
      ok: true,
      json: vitest.fn().mockResolvedValue({ data: 'Mock data' }),
    };

    global.fetch = vitest.fn().mockResolvedValue(mockResponse);

    // Call the fetchData function
    const data = await fetchData('https://example.com');

    // Verify the response
    expect(data).toEqual({ data: 'Mock data' });
  });

  it('returns status code and error if response is not ok', async () => {
    // Mock unsuccessful response
    const mockResponse = {
      ok: false,
      status: 404,
      statusText: 'Not Found',
    };

    global.fetch = vitest.fn().mockResolvedValue(mockResponse);

    const status = await fetchData('https://example.com');

    expect(status).toEqual({
      error: `${mockResponse.status} ${mockResponse.statusText}`,
    });
  });

  it('logs error if an exception occurs', async () => {
    // Mock console.error
    console.error = vitest.fn();

    // Mock rejected promise to simulate an exception
    global.fetch = vitest
      .fn()
      .mockRejectedValue(new Error('TypeError: Failed to fetch'));

    // Call the fetchData function
    await fetchData('https://example.com');

    // Verify the error logging
    expect(console.error).toHaveBeenCalledWith(
      new Error('TypeError: Failed to fetch'),
    );
  });

  it('returns network error caught in catch block ', async () => {
    global.fetch = vitest.fn().mockRejectedValue({
      error: 'Network Error: Server might be down.',
    });

    const data = await fetchData('https://example.com');

    expect(data).toEqual({ error: 'Network Error: Server might be down.' });
  });
});
