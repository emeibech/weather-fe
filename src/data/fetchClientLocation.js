import fetchData from './fetchData';

const serverUrl = import.meta.env.VITE_SERVER_URL;

const fetchClientLocation = async () => {
  const data = await fetchData(`${serverUrl}/ipgeo`);
  /* If data.city doesn't exist, it means fetch has failed and
  will return an object containing the error instead */
  if (!data.city) return data;
  return data;
};

export default fetchClientLocation;
