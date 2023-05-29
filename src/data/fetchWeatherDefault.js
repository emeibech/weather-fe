import fetchData from './fetchData';

const fetchWeatherDefault = async (city) => {
  const url = `https://emeibechserver.com/weather?q=${city}`;
  const data = await fetchData(url);
  return data;
};

export default fetchWeatherDefault;
