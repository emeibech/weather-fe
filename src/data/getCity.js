import fetchData from './fetchData';

const getCity = async () => {
  try {
    const data = await fetchData('https://emeibechserver.com/ipgeo');
    return data.city;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default getCity;
