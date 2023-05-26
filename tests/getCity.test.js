// eslint-disable-next-line object-curly-newline
import { describe, it, expect, beforeEach, vitest } from 'vitest';
import getCity from '../src/data/getCity';
import fetchData from '../src/data/fetchData';

// Mock the fetchData function for testing purposes
vitest.mock('../src/data/fetchData');

describe('getCity', () => {
  beforeEach(() => {
    vitest.clearAllMocks(); // Reset mock function calls after each test
  });

  it('should return city if fetching succeeds', async () => {
    // Mock successful response
    const mockData = { city: 'New York' };
    fetchData.mockResolvedValue(mockData);

    // Call the getCity function
    const city = await getCity();

    // Verify the response
    expect(fetchData).toHaveBeenCalledWith('https://emeibechserver.com/ipgeo');
    expect(city).toEqual('New York');
  });

  it('should return status code if data > 399', async () => {
    // Mock response with status code 404
    const mockResponse = 404;
    fetchData.mockResolvedValue(mockResponse);

    // Call the getCity function
    const statusCode = await getCity();

    // Verify the response
    expect(fetchData).toHaveBeenCalledWith('https://emeibechserver.com/ipgeo');
    expect(statusCode).toEqual(404);
  });

  it('should return error message if data is undefined', async () => {
    // Mock undefined response
    fetchData.mockResolvedValue(undefined);

    // Call the getCity function
    const errorMessage = await getCity();

    // Verify the response
    expect(fetchData).toHaveBeenCalledWith('https://emeibechserver.com/ipgeo');
    expect(errorMessage).toEqual('An error occurred in the server');
  });

  it('should log error if an exception occurs', async () => {
    // Mock console.error
    console.error = vitest.fn();

    // Mock rejected promise to simulate an exception
    fetchData.mockRejectedValue(new Error('Network error'));

    // Call the getCity function
    await getCity();

    // Verify the error logging
    expect(console.error).toHaveBeenCalledWith(new Error('Network error'));
  });
});
