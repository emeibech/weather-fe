import fetchData from './fetchData';

const fetchClientCity = async () => {
  const data = await fetchData('https://emeibechserver.com/ipgeo');
  /* If data.city doesn't exist, it means fetch has failed and
  will return an object containing the error instead */
  if (!data.city) return data;
  return data.city;
};

export default fetchClientCity;
