// eslint-disable-next-line object-curly-newline
import { describe, it, expect, beforeEach, vitest } from 'vitest';
import fetchWeatherAlt from '../src/data/fetchWeatherAlt';
import fetchData from '../src/data/fetchData';

// Mock the fetchData function for testing purposes
vitest.mock('../src/data/fetchData');

describe('fetchWeatherAlt unit test', () => {
  beforeEach(() => vitest.clearAllMocks());

  it('returns weather data if fetching succeeds', async () => {
    // Mock successful response
    const mockResponse = { weatherData: 'Weather Data' };
    fetchData.mockResolvedValue(mockResponse);
    // Call the fetchWeatherAlt function
    const weather = await fetchWeatherAlt('tokyo');
    // Verify the response
    expect(weather).toEqual(mockResponse);
  });

  it('returns an object containing the error on failed fetch', async () => {
    const mockResponse = { error: '500 Internal Server Error' };
    fetchData.mockResolvedValue(mockResponse);
    const statusCode = await fetchWeatherAlt('tokyo');
    expect(statusCode).toEqual(mockResponse);
  });

  it('throws an error if called without city parameter', async () => {
    await expect(fetchWeatherAlt()).rejects.toThrow(
      'fetchWeatherAlt is called without city parameter',
    );
  });
});
