// eslint-disable-next-line import/no-extraneous-dependencies
import {
  describe,
  it,
  expect,
  beforeEach,
  vitest,
} from 'vitest';
import getCoordinates from '../src/data/getCoordinates';
import fetchData from '../src/data/fetchData';

// Mock the fetchData function for testing purposes
vitest.mock('../src/data/fetchData');

describe('getCoordinates', () => {
  beforeEach(() => {
    vitest.resetAllMocks();
  });

  it('returns coordinates when fetchData succeeds', async () => {
    const mockData = {
      latitude: 40.7128,
      longitude: -74.0060,
    };
    fetchData.mockResolvedValue(mockData);

    const coordinates = await getCoordinates();

    expect(coordinates).toEqual({ lat: 40.7128, lon: -74.0060 });
    expect(fetchData).toHaveBeenCalledTimes(1);
    expect(fetchData).toHaveBeenCalledWith('https://emeibechserver.com/ipgeo');
  });

  it('should return null when fetchData throws an error', async () => {
    const mockError = new Error('Failed to fetch data');
    // Mock fetchData to reject with mockError
    fetchData.mockRejectedValue(mockError);
    console.error = vitest.fn();

    const coordinates = await getCoordinates();

    expect(fetchData).toHaveBeenCalledTimes(1);
    expect(fetchData).toHaveBeenCalledWith('https://emeibechserver.com/ipgeo');
    expect(console.error).toHaveBeenCalledWith(mockError);
    expect(coordinates).toBeNull();
  });
});
