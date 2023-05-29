// eslint-disable-next-line object-curly-newline
import { describe, it, expect, beforeEach, vitest } from 'vitest';
import fetchWeatherDefault from '../src/data/fetchWeatherDefault';
import fetchData from '../src/data/fetchData';

// Mock the fetchData function for testing purposes
vitest.mock('../src/data/fetchData');

describe('fetchWeatherDefault unit test', () => {
  beforeEach(() => vitest.clearAllMocks());

  it('returns weather data if fetching succeeds', async () => {
    // Mock successful response
    const mockResponse = { weatherData: 'Weather Data' };
    fetchData.mockResolvedValue(mockResponse);
    // Call the fetchWeatherDefault function
    const weather = await fetchWeatherDefault();
    // Verify the response
    expect(weather).toEqual(mockResponse);
  });

  it('returns an object containing the error on failed fetch', async () => {
    const mockResponse = { error: '500 Internal Server Error' };
    fetchData.mockResolvedValue(mockResponse);
    const statusCode = await fetchWeatherDefault();
    expect(statusCode).toEqual(mockResponse);
  });
});
