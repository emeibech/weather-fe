import fetchData from './fetchData';

const serverUrl = import.meta.env.VITE_SERVER_URL;

const fetchWeatherOC = async ({ lat, lon }) => {
  if (!lat || !lon) {
    throw new Error(
      'fetchWeatherOC is called with missing or incomplete parameter',
    );
  }

  const url = `${serverUrl}/onecall?lat=${lat}&lon=${lon}`;
  const data = await fetchData(url);
  return data;
};

export default fetchWeatherOC;
