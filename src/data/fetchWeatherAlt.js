import fetchData from './fetchData';

const serverUrl = import.meta.env.VITE_SERVER_URL;

const fetchWeatherAlt = async (city) => {
  if (!city) {
    throw new Error(
      'fetchWeatherAlt is called without city parameter',
    );
  }

  const url = `${serverUrl}/weather/currentweather?q=${city}`;
  const data = await fetchData(url);
  return data;
};

export default fetchWeatherAlt;
