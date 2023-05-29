// eslint-disable-next-line object-curly-newline
import { describe, it, expect, beforeEach, vitest } from 'vitest';
import fetchClientCity from '../src/data/fetchClientCity';
import fetchData from '../src/data/fetchData';

// Mock the fetchData function for testing purposes
vitest.mock('../src/data/fetchData');

describe('fetchClientCity unit test', () => {
  beforeEach(() => vitest.clearAllMocks());

  it('returns client city if fetching succeeds', async () => {
    // Mock successful response
    const mockResponse = { city: 'New York' };
    fetchData.mockResolvedValue(mockResponse);
    // Call the fetchClientCity function
    const city = await fetchClientCity();
    // Verify the response
    expect(city).toEqual(mockResponse.city);
  });

  it('returns an object containing the error on failed fetch', async () => {
    const mockResponse = { error: '500 Internal Server Error' };
    fetchData.mockResolvedValue(mockResponse);
    const statusCode = await fetchClientCity();
    expect(statusCode).toEqual(mockResponse);
  });
});
