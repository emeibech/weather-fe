// eslint-disable-next-line object-curly-newline
import { describe, it, expect, beforeEach, vitest } from 'vitest';
import fetchWeatherOC from '../src/data/fetchWeatherOC';
import fetchData from '../src/data/fetchData';

// Mock the fetchData function for testing purposes
vitest.mock('../src/data/fetchData');

describe('fetchWeatherOC unit test', () => {
  beforeEach(() => vitest.clearAllMocks());

  it('returns weather data if fetching succeeds', async () => {
    const mockResponse = { weatherOC: 'Weather Data' };
    fetchData.mockResolvedValue(mockResponse);
    const weather = await fetchWeatherOC({ lat: 35.6895, lon: 139.6917 });
    expect(weather).toEqual(mockResponse);
  });

  it('returns an object containing the error on failed fetch', async () => {
    const mockResponse = { error: '500 Internal Server Error' };
    fetchData.mockResolvedValue(mockResponse);
    const statusCode = await fetchWeatherOC({ lat: 35.6895, lon: 139.6917 });
    expect(statusCode).toEqual(mockResponse);
  });

  it('throws an error if called without city parameter', async () => {
    await expect(fetchWeatherOC({ lat: 12.1234 })).rejects.toThrow(
      'fetchWeatherOC is called with missing or incomplete parameter',
    );
  });
});
