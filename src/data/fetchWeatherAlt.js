import fetchData from './fetchData';

const fetchWeatherAlt = async (city) => {
  if (!city) {
    throw new Error(
      'fetchWeatherAlt is called without city parameter',
    );
  }

  const url = `https://emeibechserver.com/weather?q=${city}`;
  const data = await fetchData(url);
  return data;
};

export default fetchWeatherAlt;
