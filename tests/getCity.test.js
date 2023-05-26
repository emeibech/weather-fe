// eslint-disable-next-line object-curly-newline
import { describe, it, expect, beforeEach, vitest } from 'vitest';
import getCity from '../src/data/getCity';
import fetchData from '../src/data/fetchData';

// Mock the fetchData function for testing purposes
vitest.mock('../src/data/fetchData');

describe('getCity', () => {
  beforeEach(() => {
    vitest.resetAllMocks();
  });

  it('returns the city from fetched data', async () => {
    const mockedData = { city: 'New York' };

    fetchData.mockResolvedValue(mockedData);

    const city = await getCity();

    expect(fetchData).toHaveBeenCalledWith('https://emeibechserver.com/ipgeo');
    expect(city).toBe('New York');
  });

  it('logs error and returns null when fetching', async () => {
    const mockError = 'An error occurred while fetching city';
    fetchData.mockRejectedValue(mockError);
    console.error = vitest.fn();

    const data = await getCity();

    expect(data).toBe(null);
    expect(console.error).toHaveBeenCalledWith(mockError);
  });
});
