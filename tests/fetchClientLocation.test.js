// eslint-disable-next-line object-curly-newline
import { describe, it, expect, beforeEach, vitest } from 'vitest';
import fetchClientLocation from '../src/data/fetchClientLocation';
import fetchData from '../src/data/fetchData';

// Mock the fetchData function for testing purposes
vitest.mock('../src/data/fetchData');

describe('fetchClientLocation unit test', () => {
  beforeEach(() => vitest.clearAllMocks());

  it('returns client city if fetching succeeds', async () => {
    // Mock successful response
    const mockResponse = { city: 'New York' };
    fetchData.mockResolvedValue(mockResponse);
    // Call the fetchClientLocation function
    const location = await fetchClientLocation();
    // Verify the response
    expect(location).toEqual(mockResponse);
  });

  it('returns an object containing the error on failed fetch', async () => {
    const mockResponse = { error: '500 Internal Server Error' };
    fetchData.mockResolvedValue(mockResponse);
    const statusCode = await fetchClientLocation();
    expect(statusCode).toEqual(mockResponse);
  });
});
