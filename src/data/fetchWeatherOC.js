import fetchData from './fetchData';

const fetchWeatherOC = async ({ lat, lon }) => {
  if (!lat || !lon) {
    throw new Error(
      'fetchWeatherOC is called with missing or incomplete parameter',
    );
  }

  const url = `https://emeibechserver.com/onecall?lat=${lat}&lon=${lon}`;
  const data = await fetchData(url);
  return data;
};

export default fetchWeatherOC;
